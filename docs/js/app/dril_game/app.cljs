(ns dril-game.app
  (:require [cljs.reader :as reader]
            [clojure.string :as str]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(enable-console-print!)

(def intro-overlay
  (str/join
    ["As usual, you wake up screaming, reeling in horror as you wrest yourself "
     "free from the grip of another nightmarish vision. You drag yourself out "
     "of bed and over to the computer, but even as the terror fades, you can "
     "still hear the howling of a trillion anguished voices in your head. How "
     "could you possibly give voice to such inner torment?"]))

(defn tokenize [text]
  (str/split text #"\s+"))

(defn weighted-choice
  "Randomly selects a key from the map `choices-with-weights`. The likelihood
  that a given key will be selected is determined by its weight, i.e. its
  associated non-negative numeric value in the map."
  [choices-with-weights]
  (assert (not (empty? choices-with-weights)))
  (let [choices-with-thresholds
        (reduce (fn [choices-with-thresholds [choice weight]]
                  (assert (>= weight 0))
                  (let [threshold (+ weight (or (some-> choices-with-thresholds peek val) 0))]
                    (conj choices-with-thresholds [choice threshold])))
                [] (seq choices-with-weights))
        r (* (rand) (val (peek choices-with-thresholds)))]
    (->> choices-with-thresholds (filter #(< r (val %))) first key)))

(defn valid-word? [word]
  (when (string? word)
    (not-any? (partial str/starts-with? word) ["@" "http://" "https://"])))

(defn filter-keys [pred m]
  (reduce (fn [m [k v]]
            (if (pred k) m (dissoc m k)))
          m m))

;; TODO this still sometimes infinite-loops somehow
;; i imagine it's got something to do with :end tokens
(defn next-word-options [{:keys [draft markov]}]
  (let [prev-word (last (tokenize draft))
        prev-word (if (or (empty? prev-word)
                          (contains? #{"." "?" "!"} (last prev-word)))
                    :start
                    prev-word)]
    (when markov
      (let [freqs (dissoc (filter-keys valid-word? (get markov prev-word)) :end)]
        (take 4 (concat (when (pos? (count freqs))
                          (->> (repeatedly 20 #(weighted-choice freqs)) distinct (take 4)))
                        (->> markov keys (filter valid-word?) shuffle)))))))

(defn update-next-word-options [state]
  (assoc state :next-word-options (next-word-options state)))

(defn clear-current-draft [state]
  (-> state (assoc :draft "") update-next-word-options))

(defn tweet-current-draft [state]
  (let [content (:draft state)]
    (-> (clear-current-draft state)
        (update :tweets conj {:handle "dril" :display "wint" :text content}))))

(defonce app-state
  (atom {:npcs []
         :draft ""
         :tweets []
         :followers 0
         :overlay intro-overlay}))

(defn load-markov-model! []
  (let [req (js/XMLHttpRequest.)]
    (.addEventListener req "load"
      (fn []
        (swap! app-state assoc :markov (reader/read-string (.-responseText req)))
        (swap! app-state update-next-word-options)))
    (.open req "GET" "./dril.edn")
    (.send req)))

(load-markov-model!)

(defn load-npc! [handle]
  (let [req (js/XMLHttpRequest.)]
    (.addEventListener req "load"
      (fn []
        (let [json (js/JSON.parse (.-responseText req))
              npc  {:handle  (aget json "handle")
                    :display (aget json "display")
                    :bio     (aget json "bio")
                    :author  (aget json "author")
                    :grammar (js/tracery.createGrammar (aget json "grammar"))}]
          (swap! app-state update :npcs conj npc))))
    (.open req "GET" (str "./npcs/" handle ".json"))
    (.send req)))

(doseq [handle ["babyborgy" "cool_britches" "obsidian_scapula" "WokemonNo"]]
  (load-npc! handle))

(defn tick! []
  (println "tick")
  (om/transact! (om/root-cursor app-state)
    (fn [state]
      (if (and (pos? (count (:npcs state)))
               (< (rand) (/ 1 10)))
        (let [npc   (rand-nth (:npcs state))
              _     (println (str "tweet by @" (:handle npc)))
              tweet {:handle  (:handle npc)
                     :display (:display npc)
                     :text    (.flatten (:grammar npc) "#origin#")}]
          (update state :tweets conj tweet))
        state)))
  (om/transact! (om/root-cursor app-state)
    (fn [state]
      (let [num-dril-tweets (count (filter #(= (:handle %) "dril") (:tweets state)))
            upper-bound (js/Math.pow num-dril-tweets 3)]
        (update state :followers + (rand-int upper-bound))))))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (dom/main {}
        (when (:overlay data)
          (dom/div {:class "overlay"
                    :on-click (fn [ev]
                                (om/transact! data [] #(dissoc % :overlay)))}
            (dom/div {:class "overlay-content"}
              (:overlay data))))
        (dom/div {:class "profile-area"}
          (dom/p {:class "followers"}
            "Followers: "
            (:followers data)))
        (dom/div {:class "input-area"}
          (dom/textarea
            {:class "message"
             :on-change #(do (om/update! data :draft (.. % -target -value))
                             (om/transact! data [] update-next-word-options))
             :placeholder "What's happening?"
             :value (:draft data)})
          (let [chars-remaining (- 140 (count (:draft data)))]
            (dom/div {:class (cond-> "char-count" (neg? chars-remaining) (str " negative"))}
              chars-remaining))
          (dom/div {:class "options"}
            (for [option (:next-word-options data)]
              (dom/div
                {:class "option"
                 :href "#"
                 :on-click (fn [ev]
                             (.preventDefault ev)
                             (.stopPropagation ev)
                             (om/transact! data :draft
                               #(str % (when (and (seq %) (not (re-find #"\s" (or (last %) "")))) " ") option))
                             (om/transact! data [] update-next-word-options))}
                option))
              (dom/div
                {:class "option"
                 :href "#"
                 :on-click (fn [ev]
                             (.preventDefault ev)
                             (.stopPropagation ev)
                             (om/transact! data [] update-next-word-options))}
                "🔄"))
          (dom/button
            {:class "restart-tweet"
             :on-click (fn [ev]
                         (.preventDefault ev)
                         (.stopPropagation ev)
                         (om/transact! data [] clear-current-draft))}
            "ARGH NO")
          (dom/button
            {:class "send-tweet"
             :disabled (or (<= (count (:draft data)) 1)
                           (> (count (:draft data)) 140))
             :on-click (fn [ev]
                         (.preventDefault ev)
                         (.stopPropagation ev)
                         (om/transact! data [] tweet-current-draft))}
            "Send Tweet"))
        (dom/div {:class "timeline"}
          (for [tweet (reverse (:tweets data))]
            (dom/div {:class "tweet"}
              (dom/div {:class "avatar"}
                (dom/img {:src (str "./img/" (:handle tweet) ".jpg")}))
              (dom/div {:class "everything-else"}
                (dom/div {:class "usernamey-stuff"}
                  (dom/span {:class "display-name"} (:display tweet))
                  " "
                  (dom/span {:class "handle"} (:handle tweet)))
                (dom/div {:class "text"} (:text tweet))))))))))

(om/root app app-state {:target (js/document.getElementById "app")})
(js/setInterval tick! 1000)
