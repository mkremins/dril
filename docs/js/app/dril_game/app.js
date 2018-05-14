// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('dril_game.app');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om_tools.core');
goog.require('om_tools.dom');
cljs.core.enable_console_print_BANG_();
dril_game.app.intro_overlay = clojure.string.join.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["As usual, you wake up screaming, reeling in horror as you wrest yourself ","free from the grip of another nightmarish vision. You drag yourself out ","of bed and over to the computer, but even as the terror fades, you can ","still hear the howling of a trillion anguished voices in your head. How ","could you possibly give voice to such inner torment?"], null));
dril_game.app.tokenize = (function dril_game$app$tokenize(text){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/\s+/);
});
/**
 * Randomly selects a key from the map `choices-with-weights`. The likelihood
 *   that a given key will be selected is determined by its weight, i.e. its
 *   associated non-negative numeric value in the map.
 */
dril_game.app.weighted_choice = (function dril_game$app$weighted_choice(choices_with_weights){
if(!(cljs.core.empty_QMARK_(choices_with_weights))){
} else {
throw (new Error("Assert failed: (not (empty? choices-with-weights))"));
}

var choices_with_thresholds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (choices_with_thresholds,p__21463){
var vec__21464 = p__21463;
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21464,(0),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21464,(1),null);
if((weight >= (0))){
} else {
throw (new Error("Assert failed: (>= weight 0)"));
}

var threshold = (weight + (function (){var or__6404__auto__ = (function (){var G__21468 = choices_with_thresholds;
var G__21468__$1 = (((G__21468 == null))?null:cljs.core.peek(G__21468));
if((G__21468__$1 == null)){
return null;
} else {
return cljs.core.val(G__21468__$1);
}
})();
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return (0);
}
})());
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(choices_with_thresholds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [choice,threshold], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.seq(choices_with_weights));
var r = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * cljs.core.val(cljs.core.peek(choices_with_thresholds)));
return cljs.core.key(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (choices_with_thresholds,r){
return (function (p1__21456_SHARP_){
return (r < cljs.core.val(p1__21456_SHARP_));
});})(choices_with_thresholds,r))
,choices_with_thresholds)));
});
dril_game.app.valid_word_QMARK_ = (function dril_game$app$valid_word_QMARK_(word){
if(typeof word === 'string'){
return cljs.core.not_any_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.starts_with_QMARK_,word),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@","http://","https://"], null));
} else {
return null;
}
});
dril_game.app.filter_keys = (function dril_game$app$filter_keys(pred,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__21473){
var vec__21474 = p__21473;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21474,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21474,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
});
dril_game.app.next_word_options = (function dril_game$app$next_word_options(p__21477){
var map__21480 = p__21477;
var map__21480__$1 = ((((!((map__21480 == null)))?((((map__21480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21480):map__21480);
var draft = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480__$1,cljs.core.cst$kw$draft);
var markov = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480__$1,cljs.core.cst$kw$markov);
var prev_word = cljs.core.last(dril_game.app.tokenize(draft));
var prev_word__$1 = (((cljs.core.empty_QMARK_(prev_word)) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["!",null,"?",null,".",null], null), null),cljs.core.last(prev_word))))?cljs.core.cst$kw$start:prev_word);
if(cljs.core.truth_(markov)){
var freqs = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(dril_game.app.filter_keys(dril_game.app.valid_word_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markov,prev_word__$1)),cljs.core.cst$kw$end);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((((cljs.core.count(freqs) > (0)))?cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((20),((function (freqs,prev_word,prev_word__$1,map__21480,map__21480__$1,draft,markov){
return (function (){
return dril_game.app.weighted_choice(freqs);
});})(freqs,prev_word,prev_word__$1,map__21480,map__21480__$1,draft,markov))
))):null),cljs.core.shuffle(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dril_game.app.valid_word_QMARK_,cljs.core.keys(markov)))));
} else {
return null;
}
});
dril_game.app.update_next_word_options = (function dril_game$app$update_next_word_options(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$next_DASH_word_DASH_options,dril_game.app.next_word_options(state));
});
dril_game.app.clear_current_draft = (function dril_game$app$clear_current_draft(state){
return dril_game.app.update_next_word_options(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$draft,""));
});
dril_game.app.tweet_current_draft = (function dril_game$app$tweet_current_draft(state){
var content = cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(dril_game.app.clear_current_draft(state),cljs.core.cst$kw$tweets,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$handle,"dril",cljs.core.cst$kw$display,"wint",cljs.core.cst$kw$text,content], null));
});
if(typeof dril_game.app.app_state !== 'undefined'){
} else {
dril_game.app.app_state = (function (){var G__21482 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$npcs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$draft,"",cljs.core.cst$kw$tweets,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$followers,(0),cljs.core.cst$kw$overlay,dril_game.app.intro_overlay], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21482) : cljs.core.atom.call(null,G__21482));
})();
}
dril_game.app.load_markov_model_BANG_ = (function dril_game$app$load_markov_model_BANG_(){
var req = (new XMLHttpRequest());
req.addEventListener("load",((function (req){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dril_game.app.app_state,cljs.core.assoc,cljs.core.cst$kw$markov,cljs.reader.read_string(req.responseText));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dril_game.app.app_state,dril_game.app.update_next_word_options);
});})(req))
);

req.open("GET","./dril.edn");

return req.send();
});
dril_game.app.load_markov_model_BANG_();
dril_game.app.load_npc_BANG_ = (function dril_game$app$load_npc_BANG_(handle){
var req = (new XMLHttpRequest());
req.addEventListener("load",((function (req){
return (function (){
var json = (function (){var G__21485 = req.responseText;
return JSON.parse(G__21485);
})();
var npc = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$handle,(json["handle"]),cljs.core.cst$kw$display,(json["display"]),cljs.core.cst$kw$bio,(json["bio"]),cljs.core.cst$kw$author,(json["author"]),cljs.core.cst$kw$grammar,(function (){var G__21486 = (json["grammar"]);
return tracery.createGrammar(G__21486);
})()], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dril_game.app.app_state,cljs.core.update,cljs.core.cst$kw$npcs,cljs.core.conj,cljs.core.array_seq([npc], 0));
});})(req))
);

req.open("GET",[cljs.core.str("./npcs/"),cljs.core.str(handle),cljs.core.str(".json")].join(''));

return req.send();
});
var seq__21487_21491 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["babyborgy","cool_britches","obsidian_scapula","WokemonNo"], null));
var chunk__21488_21492 = null;
var count__21489_21493 = (0);
var i__21490_21494 = (0);
while(true){
if((i__21490_21494 < count__21489_21493)){
var handle_21495 = chunk__21488_21492.cljs$core$IIndexed$_nth$arity$2(null,i__21490_21494);
dril_game.app.load_npc_BANG_(handle_21495);

var G__21496 = seq__21487_21491;
var G__21497 = chunk__21488_21492;
var G__21498 = count__21489_21493;
var G__21499 = (i__21490_21494 + (1));
seq__21487_21491 = G__21496;
chunk__21488_21492 = G__21497;
count__21489_21493 = G__21498;
i__21490_21494 = G__21499;
continue;
} else {
var temp__4657__auto___21500 = cljs.core.seq(seq__21487_21491);
if(temp__4657__auto___21500){
var seq__21487_21501__$1 = temp__4657__auto___21500;
if(cljs.core.chunked_seq_QMARK_(seq__21487_21501__$1)){
var c__7215__auto___21502 = cljs.core.chunk_first(seq__21487_21501__$1);
var G__21503 = cljs.core.chunk_rest(seq__21487_21501__$1);
var G__21504 = c__7215__auto___21502;
var G__21505 = cljs.core.count(c__7215__auto___21502);
var G__21506 = (0);
seq__21487_21491 = G__21503;
chunk__21488_21492 = G__21504;
count__21489_21493 = G__21505;
i__21490_21494 = G__21506;
continue;
} else {
var handle_21507 = cljs.core.first(seq__21487_21501__$1);
dril_game.app.load_npc_BANG_(handle_21507);

var G__21508 = cljs.core.next(seq__21487_21501__$1);
var G__21509 = null;
var G__21510 = (0);
var G__21511 = (0);
seq__21487_21491 = G__21508;
chunk__21488_21492 = G__21509;
count__21489_21493 = G__21510;
i__21490_21494 = G__21511;
continue;
}
} else {
}
}
break;
}
dril_game.app.tick_BANG_ = (function dril_game$app$tick_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["tick"], 0));

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.root_cursor(dril_game.app.app_state),(function (state){
if(((cljs.core.count(cljs.core.cst$kw$npcs.cljs$core$IFn$_invoke$arity$1(state)) > (0))) && ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < ((1) / (10))))){
var npc = cljs.core.rand_nth(cljs.core.cst$kw$npcs.cljs$core$IFn$_invoke$arity$1(state));
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("tweet by @"),cljs.core.str(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(npc))].join('')], 0));
var tweet = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$handle,cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(npc),cljs.core.cst$kw$display,cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(npc),cljs.core.cst$kw$text,cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(npc).flatten("#origin#")], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$tweets,cljs.core.conj,tweet);
} else {
return state;
}
}));

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.root_cursor(dril_game.app.app_state),(function (state){
var num_dril_tweets = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21512_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(p1__21512_SHARP_),"dril");
}),cljs.core.cst$kw$tweets.cljs$core$IFn$_invoke$arity$1(state)));
var upper_bound = Math.pow(num_dril_tweets,(3));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$followers,cljs.core._PLUS_,cljs.core.rand_int(upper_bound));
}));
});

var ufv___21580 = schema.utils.use_fn_validation;
var output_schema21517_21581 = schema.core.Any;
var input_schema21518_21582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21519_21583 = schema.core.checker(input_schema21518_21582);
var output_checker21520_21584 = schema.core.checker(output_schema21517_21581);
/**
 * Inputs: [data owner]
 */
dril_game.app.app = ((function (ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function dril_game$app$app(G__21521,G__21522){
var validate__16734__auto__ = ufv___21580.get_cell();
if(cljs.core.truth_(validate__16734__auto__)){
var args__16735__auto___21585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21521,G__21522], null);
var temp__4657__auto___21586 = (input_checker21519_21583.cljs$core$IFn$_invoke$arity$1 ? input_checker21519_21583.cljs$core$IFn$_invoke$arity$1(args__16735__auto___21585) : input_checker21519_21583.call(null,args__16735__auto___21585));
if(cljs.core.truth_(temp__4657__auto___21586)){
var error__16736__auto___21587 = temp__4657__auto___21586;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21587], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21518_21582,cljs.core.cst$kw$value,args__16735__auto___21585,cljs.core.cst$kw$error,error__16736__auto___21587], null));
} else {
}
} else {
}

var o__16737__auto__ = (function (){var data = G__21521;
var owner = G__21522;
while(true){
if(typeof dril_game.app.t_dril_game$app21550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dril_game.app.t_dril_game$app21550 = (function (owner,data,output_checker21520,input_checker21519,G__21522,G__21521,input_schema21518,app,ufv__,validate__16734__auto__,output_schema21517,meta21551){
this.owner = owner;
this.data = data;
this.output_checker21520 = output_checker21520;
this.input_checker21519 = input_checker21519;
this.G__21522 = G__21522;
this.G__21521 = G__21521;
this.input_schema21518 = input_schema21518;
this.app = app;
this.ufv__ = ufv__;
this.validate__16734__auto__ = validate__16734__auto__;
this.output_schema21517 = output_schema21517;
this.meta21551 = meta21551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dril_game.app.t_dril_game$app21550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (_21552,meta21551__$1){
var self__ = this;
var _21552__$1 = this;
return (new dril_game.app.t_dril_game$app21550(self__.owner,self__.data,self__.output_checker21520,self__.input_checker21519,self__.G__21522,self__.G__21521,self__.input_schema21518,self__.app,self__.ufv__,self__.validate__16734__auto__,self__.output_schema21517,meta21551__$1));
});})(validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;

dril_game.app.t_dril_game$app21550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (_21552){
var self__ = this;
var _21552__$1 = this;
return self__.meta21551;
});})(validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;

dril_game.app.t_dril_game$app21550.prototype.om$core$IDisplayName$ = true;

dril_game.app.t_dril_game$app21550.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;

dril_game.app.t_dril_game$app21550.prototype.om$core$IRender$ = true;

dril_game.app.t_dril_game$app21550.prototype.om$core$IRender$render$arity$1 = ((function (validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "app"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.main,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(cljs.core.cst$kw$overlay.cljs$core$IFn$_invoke$arity$1(self__.data))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "overlay", "onClick": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (ev){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (p1__21513_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21513_SHARP_,cljs.core.cst$kw$overlay);
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
);
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "overlay-content"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$overlay.cljs$core$IFn$_invoke$arity$1(self__.data)],null))))],null)))):null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "profile-area"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "followers"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Followers: ",cljs.core.cst$kw$followers.cljs$core$IFn$_invoke$arity$1(self__.data)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "input-area"}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21553 = ({"className": "message", "onChange": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (p1__21514_SHARP_){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$draft,p1__21514_SHARP_.target.value);

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
), "placeholder": "What's happening?", "value": om_tools.dom.format_opts(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data))});
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__21553) : om.dom.textarea.call(null,G__21553));
})(),(function (){var chars_remaining = ((140) - cljs.core.count(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts((function (){var G__21554 = "char-count";
if((chars_remaining < (0))){
return [cljs.core.str(G__21554),cljs.core.str(" negative")].join('');
} else {
return G__21554;
}
})())}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[chars_remaining],null))));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "options"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function dril_game$app$app_$_iter__21555(s__21556){
return (new cljs.core.LazySeq(null,((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (){
var s__21556__$1 = s__21556;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21556__$1);
if(temp__4657__auto__){
var s__21556__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21556__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21556__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21558 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21557 = (0);
while(true){
if((i__21557 < size__7183__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21557);
cljs.core.chunk_append(b__21558,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "option", "href": "#", "onClick": om_tools.dom.format_opts(((function (i__21557,option,c__7182__auto__,size__7183__auto__,b__21558,s__21556__$2,temp__4657__auto__,___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$draft,((function (i__21557,option,c__7182__auto__,size__7183__auto__,b__21558,s__21556__$2,temp__4657__auto__,___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (p1__21515_SHARP_){
return [cljs.core.str(p1__21515_SHARP_),cljs.core.str((((cljs.core.seq(p1__21515_SHARP_)) && (cljs.core.not(cljs.core.re_find(/\s/,(function (){var or__6404__auto__ = cljs.core.last(p1__21515_SHARP_);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return "";
}
})()))))?" ":null)),cljs.core.str(option)].join('');
});})(i__21557,option,c__7182__auto__,size__7183__auto__,b__21558,s__21556__$2,temp__4657__auto__,___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
);

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(i__21557,option,c__7182__auto__,size__7183__auto__,b__21558,s__21556__$2,temp__4657__auto__,___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[option],null)))));

var G__21588 = (i__21557 + (1));
i__21557 = G__21588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21558),dril_game$app$app_$_iter__21555(cljs.core.chunk_rest(s__21556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21558),null);
}
} else {
var option = cljs.core.first(s__21556__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "option", "href": "#", "onClick": om_tools.dom.format_opts(((function (option,s__21556__$2,temp__4657__auto__,___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$draft,((function (option,s__21556__$2,temp__4657__auto__,___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (p1__21515_SHARP_){
return [cljs.core.str(p1__21515_SHARP_),cljs.core.str((((cljs.core.seq(p1__21515_SHARP_)) && (cljs.core.not(cljs.core.re_find(/\s/,(function (){var or__6404__auto__ = cljs.core.last(p1__21515_SHARP_);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return "";
}
})()))))?" ":null)),cljs.core.str(option)].join('');
});})(option,s__21556__$2,temp__4657__auto__,___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
);

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(option,s__21556__$2,temp__4657__auto__,___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[option],null)))),dril_game$app$app_$_iter__21555(cljs.core.rest(s__21556__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
,null,null));
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;
return iter__7184__auto__(cljs.core.cst$kw$next_DASH_word_DASH_options.cljs$core$IFn$_invoke$arity$1(self__.data));
})(),(function (){var G__21561 = ({"className": "option", "href": "#", "onClick": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
)});
var G__21562 = "\uD83D\uDD04";
return React.DOM.div(G__21561,G__21562);
})()],null)))),(function (){var G__21563 = ({"className": "restart-tweet", "onClick": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.clear_current_draft);
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
)});
var G__21564 = "ARGH NO";
return React.DOM.button(G__21563,G__21564);
})(),(function (){var G__21565 = ({"className": "send-tweet", "disabled": om_tools.dom.format_opts(((cljs.core.count(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data)) <= (1))) || ((cljs.core.count(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data)) > (140)))), "onClick": om_tools.dom.format_opts(((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.tweet_current_draft);
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
)});
var G__21566 = "Send Tweet";
return React.DOM.button(G__21565,G__21566);
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "timeline"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function dril_game$app$app_$_iter__21567(s__21568){
return (new cljs.core.LazySeq(null,((function (___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (){
var s__21568__$1 = s__21568;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21568__$1);
if(temp__4657__auto__){
var s__21568__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21568__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21568__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21570 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21569 = (0);
while(true){
if((i__21569 < size__7183__auto__)){
var tweet = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21569);
cljs.core.chunk_append(b__21570,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "tweet"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "avatar"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21575 = ({"src": om_tools.dom.format_opts([cljs.core.str("./img/"),cljs.core.str(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)),cljs.core.str(".jpg")].join(''))});
return React.DOM.img(G__21575);
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "everything-else"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "usernamey-stuff"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "display-name"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(tweet)],null))))," ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "handle"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "text"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null))))],null)))));

var G__21589 = (i__21569 + (1));
i__21569 = G__21589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21570),dril_game$app$app_$_iter__21567(cljs.core.chunk_rest(s__21568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21570),null);
}
} else {
var tweet = cljs.core.first(s__21568__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "tweet"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "avatar"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21576 = ({"src": om_tools.dom.format_opts([cljs.core.str("./img/"),cljs.core.str(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)),cljs.core.str(".jpg")].join(''))});
return React.DOM.img(G__21576);
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "everything-else"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "usernamey-stuff"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "display-name"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(tweet)],null))))," ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "handle"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "text"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null))))],null)))),dril_game$app$app_$_iter__21567(cljs.core.rest(s__21568__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
,null,null));
});})(___$1,validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;
return iter__7184__auto__(cljs.core.reverse(cljs.core.cst$kw$tweets.cljs$core$IFn$_invoke$arity$1(self__.data)));
})()],null))))],null))))],null))));
});})(validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;

dril_game.app.t_dril_game$app21550.getBasis = ((function (validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$output_DASH_checker21520,cljs.core.cst$sym$input_DASH_checker21519,cljs.core.with_meta(cljs.core.cst$sym$G__21522,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__21521,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema21518,cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21517,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21518], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$validate__16734__auto__,cljs.core.cst$sym$output_DASH_schema21517,cljs.core.cst$sym$meta21551], null);
});})(validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;

dril_game.app.t_dril_game$app21550.cljs$lang$type = true;

dril_game.app.t_dril_game$app21550.cljs$lang$ctorStr = "dril-game.app/t_dril_game$app21550";

dril_game.app.t_dril_game$app21550.cljs$lang$ctorPrWriter = ((function (validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"dril-game.app/t_dril_game$app21550");
});})(validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;

dril_game.app.__GT_t_dril_game$app21550 = ((function (validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584){
return (function dril_game$app$app_$___GT_t_dril_game$app21550(owner__$1,data__$1,output_checker21520__$1,input_checker21519__$1,G__21522__$1,G__21521__$1,input_schema21518__$1,app__$1,ufv____$1,validate__16734__auto____$1,output_schema21517__$1,meta21551){
return (new dril_game.app.t_dril_game$app21550(owner__$1,data__$1,output_checker21520__$1,input_checker21519__$1,G__21522__$1,G__21521__$1,input_schema21518__$1,app__$1,ufv____$1,validate__16734__auto____$1,output_schema21517__$1,meta21551));
});})(validate__16734__auto__,ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;

}

return (new dril_game.app.t_dril_game$app21550(owner,data,output_checker21520_21584,input_checker21519_21583,G__21522,G__21521,input_schema21518_21582,dril_game$app$app,ufv___21580,validate__16734__auto__,output_schema21517_21581,null));
break;
}
})();
if(cljs.core.truth_(validate__16734__auto__)){
var temp__4657__auto___21590 = (output_checker21520_21584.cljs$core$IFn$_invoke$arity$1 ? output_checker21520_21584.cljs$core$IFn$_invoke$arity$1(o__16737__auto__) : output_checker21520_21584.call(null,o__16737__auto__));
if(cljs.core.truth_(temp__4657__auto___21590)){
var error__16736__auto___21591 = temp__4657__auto___21590;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__16736__auto___21591], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21517_21581,cljs.core.cst$kw$value,o__16737__auto__,cljs.core.cst$kw$error,error__16736__auto___21591], null));
} else {
}
} else {
}

return o__16737__auto__;
});})(ufv___21580,output_schema21517_21581,input_schema21518_21582,input_checker21519_21583,output_checker21520_21584))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(dril_game.app.app),schema.core.make_fn_schema(output_schema21517_21581,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21518_21582], null)));

dril_game.app.__GT_app = (function dril_game$app$__GT_app(var_args){
var args21577 = [];
var len__7479__auto___21592 = arguments.length;
var i__7480__auto___21593 = (0);
while(true){
if((i__7480__auto___21593 < len__7479__auto___21592)){
args21577.push((arguments[i__7480__auto___21593]));

var G__21594 = (i__7480__auto___21593 + (1));
i__7480__auto___21593 = G__21594;
continue;
} else {
}
break;
}

var G__21579 = args21577.length;
switch (G__21579) {
case 1:
return dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21577.length)].join('')));

}
});

dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21401__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(dril_game.app.app,cursor__21401__auto__);
});

dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21401__auto__,m21516){
return om.core.build.cljs$core$IFn$_invoke$arity$3(dril_game.app.app,cursor__21401__auto__,m21516);
});

dril_game.app.__GT_app.cljs$lang$maxFixedArity = 2;

om.core.root(dril_game.app.app,dril_game.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));
setInterval(dril_game.app.tick_BANG_,(1000));
