(ns dril-game.app
  (:require [cljs.reader :as reader]
            [clojure.string :as str]
            [dril-game.visions :as visions]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]))

(defn followers-count-message [n]
  (cond
    (< n 10)
      "You are nothing."
    (< n 100)
      "You are no one."
    (< n 200)
      "You are a speck of dust."
    (< n 500)
      "You are lower than the lowliest of worms."
    (< n 1000)
      "You are the lowliest of worms."
    (< n 2000)
      "You are a lowly worm."
    (< n 5000)
      "You are a worm."
    :else
      "Well, it's something, I guess."))

(enable-console-print!)

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
  (let [content (:draft state)
        popularity (rand-nth [50 50 50 500 500 5000 25000])]
    (-> (clear-current-draft state)
        (assoc :tweeted-since-prev-vision true)
        (update :tweets conj {:handle "dril" :display "wint" :text content
                              :rts  (rand-int popularity)
                              :favs (rand-int popularity)})
        (update :followers + (rand-int popularity)))))

(defonce app-state
  (atom {:npcs []
         :draft ""
         :tweets []
         :followers 0
         :overlay visions/first-vision
         :visions (into visions/intro-visions (shuffle visions/normal-visions))}))

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

(doseq [handle ["babyborgy" "cool_britches" "cooldude42069" "corporateslogan" "crossfitstaligrad" "dungeon_junk"
                "DUNSONnDRAGGAN" "fruitlover2" "gnuerror" "goatbot" "HourlyDeath" "humanmalewriter" "Life_inspo"
                "obsidian_scapula" "opinions_haver" "smallrecipes" "thought_leader" "WDMRF" "WokemonNo"
                "woofgrowlbark"]]
  (load-npc! handle))

(defn maybe-show-vision! []
  (om/transact! (om/root-cursor app-state)
    (fn [state]
      (if (and (not (:overlay state))
               (:tweeted-since-prev-vision state)
               (>= (- (js/Date.now) (:prev-vision-timestamp state)) 30000)
               (< (rand) (/ 1 30)))
        (assoc state
          :overlay (first (:visions state))
          :visions (rest (:visions state))
          :tweeted-since-prev-vision false)
        state))))

(defn tick! []
  (println "tick")
  ;; NPCs tweet at random intervals
  (om/transact! (om/root-cursor app-state)
    (fn [state]
      (if (and (not (:overlay state))
               (pos? (count (:npcs state)))
               (< (rand) (/ 1 10)))
        (let [npc   (rand-nth (:npcs state))
              _     (println (str "tweet by @" (:handle npc)))
              popularity (rand-nth [50 50 50 500 500 5000 25000])
              tweet {:handle  (:handle npc)
                     :display (:display npc)
                     :text    (.flatten (:grammar npc) "#origin#")
                     :rts     (rand-int popularity)
                     :favs    (rand-int popularity)}]
          (update state :tweets conj tweet))
        state)))
  ;; you lose followers slowly if you don't tweet anything
  (om/transact! (om/root-cursor app-state)
    (fn [state]
      (if (and (pos? (:followers state))
               (< (rand) (/ 1 2)))
        (assoc state :followers (- (:followers state) 1))
        state)))
  ;; visions pop up at semi-random intervals (at least 30s apart)
  (maybe-show-vision!))

(defcomponent app [data owner]
  (render [_]
    (dom/div {:class "app"}
      (dom/main {}
        (when (:overlay data)
          (dom/div {:class "overlay"
                    :on-click (fn [ev]
                                (.preventDefault ev)
                                (.stopPropagation ev))}
            (dom/div {:class "overlay-content"}
              (:overlay data)
              (dom/div {:class "overlay-button"
                        :on-click (fn [ev]
                                    (om/transact! data
                                      #(-> % (dissoc :overlay)
                                             (assoc :prev-vision-timestamp (js/Date.now)))))}
                "Continue"))))
        (dom/div {:class "profile-area"}
          (dom/p {:class "followers"}
            "You have " (dom/strong (:followers data)) " followers."
            (dom/br)
            (followers-count-message (:followers data))))
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
            (dom/div {:class (cond-> "tweet" (= (:handle tweet) "dril") (str " by-player"))}
              (dom/div {:class "avatar"}
                (dom/img {:src (str "./img/" (:handle tweet) ".jpg")}))
              (dom/div {:class "everything-else"}
                (dom/div {:class "usernamey-stuff"}
                  (dom/span {:class "display-name"} (:display tweet))
                  " "
                  (dom/span {:class "handle"} (:handle tweet)))
                (dom/div {:class "text"} (:text tweet))
                (dom/div {:class "metrics"}
                  (dom/span {:class "rts"}  (:rts tweet))
                  (dom/span {:class "favs"} (:favs tweet)))))))))))

(om/root app app-state {:target (js/document.getElementById "app")})
(js/setInterval tick! 1000)
