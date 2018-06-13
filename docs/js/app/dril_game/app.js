// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('dril_game.app');
goog.require('cljs.core');
goog.require('dril_game.visions');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_();
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

var choices_with_thresholds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (choices_with_thresholds,p__21465){
var vec__21466 = p__21465;
var choice = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21466,(0),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21466,(1),null);
if((weight >= (0))){
} else {
throw (new Error("Assert failed: (>= weight 0)"));
}

var threshold = (weight + (function (){var or__6404__auto__ = (function (){var G__21470 = choices_with_thresholds;
var G__21470__$1 = (((G__21470 == null))?null:cljs.core.peek(G__21470));
if((G__21470__$1 == null)){
return null;
} else {
return cljs.core.val(G__21470__$1);
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
return (function (p1__21458_SHARP_){
return (r < cljs.core.val(p1__21458_SHARP_));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__21475){
var vec__21476 = p__21475;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21476,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21476,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
});
dril_game.app.next_word_options = (function dril_game$app$next_word_options(p__21479){
var map__21482 = p__21479;
var map__21482__$1 = ((((!((map__21482 == null)))?((((map__21482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21482):map__21482);
var draft = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21482__$1,cljs.core.cst$kw$draft);
var markov = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21482__$1,cljs.core.cst$kw$markov);
var prev_word = cljs.core.last(dril_game.app.tokenize(draft));
var prev_word__$1 = (((cljs.core.empty_QMARK_(prev_word)) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["!",null,"?",null,".",null], null), null),cljs.core.last(prev_word))))?cljs.core.cst$kw$start:prev_word);
if(cljs.core.truth_(markov)){
var freqs = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(dril_game.app.filter_keys(dril_game.app.valid_word_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markov,prev_word__$1)),cljs.core.cst$kw$end);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((((cljs.core.count(freqs) > (0)))?cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((20),((function (freqs,prev_word,prev_word__$1,map__21482,map__21482__$1,draft,markov){
return (function (){
return dril_game.app.weighted_choice(freqs);
});})(freqs,prev_word,prev_word__$1,map__21482,map__21482__$1,draft,markov))
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
var popularity = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50),(50),(500),(500),(5000),(25000)], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dril_game.app.clear_current_draft(state),cljs.core.cst$kw$tweeted_DASH_since_DASH_prev_DASH_vision,true),cljs.core.cst$kw$tweets,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$handle,"dril",cljs.core.cst$kw$display,"wint",cljs.core.cst$kw$text,content,cljs.core.cst$kw$rts,cljs.core.rand_int(popularity),cljs.core.cst$kw$favs,cljs.core.rand_int(popularity)], null)),cljs.core.cst$kw$followers,cljs.core._PLUS_,cljs.core.rand_int(popularity));
});
if(typeof dril_game.app.app_state !== 'undefined'){
} else {
dril_game.app.app_state = (function (){var G__21484 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$npcs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$draft,"",cljs.core.cst$kw$tweets,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$followers,(0),cljs.core.cst$kw$overlay,dril_game.visions.first_vision,cljs.core.cst$kw$visions,cljs.core.into.cljs$core$IFn$_invoke$arity$2(dril_game.visions.intro_visions,cljs.core.shuffle(dril_game.visions.normal_visions))], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21484) : cljs.core.atom.call(null,G__21484));
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
var json = (function (){var G__21487 = req.responseText;
return JSON.parse(G__21487);
})();
var npc = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$handle,(json["handle"]),cljs.core.cst$kw$display,(json["display"]),cljs.core.cst$kw$bio,(json["bio"]),cljs.core.cst$kw$author,(json["author"]),cljs.core.cst$kw$grammar,(function (){var G__21488 = (json["grammar"]);
return tracery.createGrammar(G__21488);
})()], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dril_game.app.app_state,cljs.core.update,cljs.core.cst$kw$npcs,cljs.core.conj,cljs.core.array_seq([npc], 0));
});})(req))
);

req.open("GET",[cljs.core.str("./npcs/"),cljs.core.str(handle),cljs.core.str(".json")].join(''));

return req.send();
});
var seq__21489_21493 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["babyborgy","cool_britches","cooldude42069","corporateslogan","crossfitstaligrad","dungeon_junk","DUNSONnDRAGGAN","fruitlover2","gnuerror","goatbot","HourlyDeath","humanmalewriter","Life_inspo","obsidian_scapula","opinions_haver","smallrecipes","thought_leader","WDMRF","WokemonNo","woofgrowlbark"], null));
var chunk__21490_21494 = null;
var count__21491_21495 = (0);
var i__21492_21496 = (0);
while(true){
if((i__21492_21496 < count__21491_21495)){
var handle_21497 = chunk__21490_21494.cljs$core$IIndexed$_nth$arity$2(null,i__21492_21496);
dril_game.app.load_npc_BANG_(handle_21497);

var G__21498 = seq__21489_21493;
var G__21499 = chunk__21490_21494;
var G__21500 = count__21491_21495;
var G__21501 = (i__21492_21496 + (1));
seq__21489_21493 = G__21498;
chunk__21490_21494 = G__21499;
count__21491_21495 = G__21500;
i__21492_21496 = G__21501;
continue;
} else {
var temp__4657__auto___21502 = cljs.core.seq(seq__21489_21493);
if(temp__4657__auto___21502){
var seq__21489_21503__$1 = temp__4657__auto___21502;
if(cljs.core.chunked_seq_QMARK_(seq__21489_21503__$1)){
var c__7215__auto___21504 = cljs.core.chunk_first(seq__21489_21503__$1);
var G__21505 = cljs.core.chunk_rest(seq__21489_21503__$1);
var G__21506 = c__7215__auto___21504;
var G__21507 = cljs.core.count(c__7215__auto___21504);
var G__21508 = (0);
seq__21489_21493 = G__21505;
chunk__21490_21494 = G__21506;
count__21491_21495 = G__21507;
i__21492_21496 = G__21508;
continue;
} else {
var handle_21509 = cljs.core.first(seq__21489_21503__$1);
dril_game.app.load_npc_BANG_(handle_21509);

var G__21510 = cljs.core.next(seq__21489_21503__$1);
var G__21511 = null;
var G__21512 = (0);
var G__21513 = (0);
seq__21489_21493 = G__21510;
chunk__21490_21494 = G__21511;
count__21491_21495 = G__21512;
i__21492_21496 = G__21513;
continue;
}
} else {
}
}
break;
}
dril_game.app.maybe_show_vision_BANG_ = (function dril_game$app$maybe_show_vision_BANG_(){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.root_cursor(dril_game.app.app_state),(function (state){
if(cljs.core.truth_((function (){var and__6392__auto__ = cljs.core.not(cljs.core.cst$kw$overlay.cljs$core$IFn$_invoke$arity$1(state));
if(and__6392__auto__){
var and__6392__auto____$1 = cljs.core.cst$kw$tweeted_DASH_since_DASH_prev_DASH_vision.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__6392__auto____$1)){
return (((Date.now() - cljs.core.cst$kw$prev_DASH_vision_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(state)) > (30))) && ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < ((1) / (30))));
} else {
return and__6392__auto____$1;
}
} else {
return and__6392__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$overlay,cljs.core.first(cljs.core.cst$kw$visions.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.array_seq([cljs.core.cst$kw$visions,cljs.core.rest(cljs.core.cst$kw$visions.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.cst$kw$tweeted_DASH_since_DASH_prev_DASH_vision,false], 0));
} else {
return state;
}
}));
});
dril_game.app.tick_BANG_ = (function dril_game$app$tick_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["tick"], 0));

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.root_cursor(dril_game.app.app_state),(function (state){
if((cljs.core.not(cljs.core.cst$kw$overlay.cljs$core$IFn$_invoke$arity$1(state))) && ((cljs.core.count(cljs.core.cst$kw$npcs.cljs$core$IFn$_invoke$arity$1(state)) > (0))) && ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < ((1) / (10))))){
var npc = cljs.core.rand_nth(cljs.core.cst$kw$npcs.cljs$core$IFn$_invoke$arity$1(state));
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("tweet by @"),cljs.core.str(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(npc))].join('')], 0));
var popularity = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50),(50),(500),(500),(5000),(25000)], null));
var tweet = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$handle,cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(npc),cljs.core.cst$kw$display,cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(npc),cljs.core.cst$kw$text,cljs.core.cst$kw$grammar.cljs$core$IFn$_invoke$arity$1(npc).flatten("#origin#"),cljs.core.cst$kw$rts,cljs.core.rand_int(popularity),cljs.core.cst$kw$favs,cljs.core.rand_int(popularity)], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$tweets,cljs.core.conj,tweet);
} else {
return state;
}
}));

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.root_cursor(dril_game.app.app_state),(function (state){
if(((cljs.core.cst$kw$followers.cljs$core$IFn$_invoke$arity$1(state) > (0))) && ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < ((1) / (2))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$followers,(cljs.core.cst$kw$followers.cljs$core$IFn$_invoke$arity$1(state) - (1)));
} else {
return state;
}
}));

return dril_game.app.maybe_show_vision_BANG_();
});

var ufv___21585 = schema.utils.use_fn_validation;
var output_schema21518_21586 = schema.core.Any;
var input_schema21519_21587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21520_21588 = schema.core.checker(input_schema21519_21587);
var output_checker21521_21589 = schema.core.checker(output_schema21518_21586);
/**
 * Inputs: [data owner]
 */
dril_game.app.app = ((function (ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function dril_game$app$app(G__21522,G__21523){
var validate__12525__auto__ = ufv___21585.get_cell();
if(cljs.core.truth_(validate__12525__auto__)){
var args__12526__auto___21590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21522,G__21523], null);
var temp__4657__auto___21591 = (input_checker21520_21588.cljs$core$IFn$_invoke$arity$1 ? input_checker21520_21588.cljs$core$IFn$_invoke$arity$1(args__12526__auto___21590) : input_checker21520_21588.call(null,args__12526__auto___21590));
if(cljs.core.truth_(temp__4657__auto___21591)){
var error__12527__auto___21592 = temp__4657__auto___21591;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___21592], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21519_21587,cljs.core.cst$kw$value,args__12526__auto___21590,cljs.core.cst$kw$error,error__12527__auto___21592], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var data = G__21522;
var owner = G__21523;
while(true){
if(typeof dril_game.app.t_dril_game$app21553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dril_game.app.t_dril_game$app21553 = (function (owner,data,input_schema21519,input_checker21520,output_checker21521,G__21522,validate__12525__auto__,G__21523,output_schema21518,app,ufv__,meta21554){
this.owner = owner;
this.data = data;
this.input_schema21519 = input_schema21519;
this.input_checker21520 = input_checker21520;
this.output_checker21521 = output_checker21521;
this.G__21522 = G__21522;
this.validate__12525__auto__ = validate__12525__auto__;
this.G__21523 = G__21523;
this.output_schema21518 = output_schema21518;
this.app = app;
this.ufv__ = ufv__;
this.meta21554 = meta21554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dril_game.app.t_dril_game$app21553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (_21555,meta21554__$1){
var self__ = this;
var _21555__$1 = this;
return (new dril_game.app.t_dril_game$app21553(self__.owner,self__.data,self__.input_schema21519,self__.input_checker21520,self__.output_checker21521,self__.G__21522,self__.validate__12525__auto__,self__.G__21523,self__.output_schema21518,self__.app,self__.ufv__,meta21554__$1));
});})(validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;

dril_game.app.t_dril_game$app21553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (_21555){
var self__ = this;
var _21555__$1 = this;
return self__.meta21554;
});})(validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;

dril_game.app.t_dril_game$app21553.prototype.om$core$IDisplayName$ = true;

dril_game.app.t_dril_game$app21553.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;

dril_game.app.t_dril_game$app21553.prototype.om$core$IRender$ = true;

dril_game.app.t_dril_game$app21553.prototype.om$core$IRender$render$arity$1 = ((function (validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "app"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.main,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(cljs.core.cst$kw$overlay.cljs$core$IFn$_invoke$arity$1(self__.data))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "overlay", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (ev){
ev.preventDefault();

return ev.stopPropagation();
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "overlay-content"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$overlay.cljs$core$IFn$_invoke$arity$1(self__.data),(function (){var G__21556 = ({"className": "overlay-button", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (ev){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (p1__21514_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21514_SHARP_,cljs.core.cst$kw$overlay),cljs.core.cst$kw$prev_DASH_vision_DASH_timestamp,Date.now());
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
);
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
)});
var G__21557 = "Continue";
return React.DOM.div(G__21556,G__21557);
})()],null))))],null)))):null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "profile-area"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "followers"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["Followers: ",cljs.core.cst$kw$followers.cljs$core$IFn$_invoke$arity$1(self__.data)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "input-area"}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21558 = ({"className": "message", "onChange": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (p1__21515_SHARP_){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$draft,p1__21515_SHARP_.target.value);

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
), "placeholder": "What's happening?", "value": om_tools.dom.format_opts(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data))});
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__21558) : om.dom.textarea.call(null,G__21558));
})(),(function (){var chars_remaining = ((140) - cljs.core.count(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts((function (){var G__21559 = "char-count";
if((chars_remaining < (0))){
return [cljs.core.str(G__21559),cljs.core.str(" negative")].join('');
} else {
return G__21559;
}
})())}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[chars_remaining],null))));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "options"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function dril_game$app$app_$_iter__21560(s__21561){
return (new cljs.core.LazySeq(null,((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (){
var s__21561__$1 = s__21561;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21561__$1);
if(temp__4657__auto__){
var s__21561__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21561__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21561__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21563 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21562 = (0);
while(true){
if((i__21562 < size__7183__auto__)){
var option = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21562);
cljs.core.chunk_append(b__21563,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "option", "href": "#", "onClick": om_tools.dom.format_opts(((function (i__21562,option,c__7182__auto__,size__7183__auto__,b__21563,s__21561__$2,temp__4657__auto__,___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$draft,((function (i__21562,option,c__7182__auto__,size__7183__auto__,b__21563,s__21561__$2,temp__4657__auto__,___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (p1__21516_SHARP_){
return [cljs.core.str(p1__21516_SHARP_),cljs.core.str((((cljs.core.seq(p1__21516_SHARP_)) && (cljs.core.not(cljs.core.re_find(/\s/,(function (){var or__6404__auto__ = cljs.core.last(p1__21516_SHARP_);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return "";
}
})()))))?" ":null)),cljs.core.str(option)].join('');
});})(i__21562,option,c__7182__auto__,size__7183__auto__,b__21563,s__21561__$2,temp__4657__auto__,___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
);

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(i__21562,option,c__7182__auto__,size__7183__auto__,b__21563,s__21561__$2,temp__4657__auto__,___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[option],null)))));

var G__21593 = (i__21562 + (1));
i__21562 = G__21593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21563),dril_game$app$app_$_iter__21560(cljs.core.chunk_rest(s__21561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21563),null);
}
} else {
var option = cljs.core.first(s__21561__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "option", "href": "#", "onClick": om_tools.dom.format_opts(((function (option,s__21561__$2,temp__4657__auto__,___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$draft,((function (option,s__21561__$2,temp__4657__auto__,___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (p1__21516_SHARP_){
return [cljs.core.str(p1__21516_SHARP_),cljs.core.str((((cljs.core.seq(p1__21516_SHARP_)) && (cljs.core.not(cljs.core.re_find(/\s/,(function (){var or__6404__auto__ = cljs.core.last(p1__21516_SHARP_);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return "";
}
})()))))?" ":null)),cljs.core.str(option)].join('');
});})(option,s__21561__$2,temp__4657__auto__,___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
);

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(option,s__21561__$2,temp__4657__auto__,___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[option],null)))),dril_game$app$app_$_iter__21560(cljs.core.rest(s__21561__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
,null,null));
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;
return iter__7184__auto__(cljs.core.cst$kw$next_DASH_word_DASH_options.cljs$core$IFn$_invoke$arity$1(self__.data));
})(),(function (){var G__21566 = ({"className": "option", "href": "#", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
)});
var G__21567 = "\uD83D\uDD04";
return React.DOM.div(G__21566,G__21567);
})()],null)))),(function (){var G__21568 = ({"className": "restart-tweet", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.clear_current_draft);
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
)});
var G__21569 = "ARGH NO";
return React.DOM.button(G__21568,G__21569);
})(),(function (){var G__21570 = ({"className": "send-tweet", "disabled": om_tools.dom.format_opts(((cljs.core.count(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data)) <= (1))) || ((cljs.core.count(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data)) > (140)))), "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.tweet_current_draft);
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
)});
var G__21571 = "Send Tweet";
return React.DOM.button(G__21570,G__21571);
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "timeline"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function dril_game$app$app_$_iter__21572(s__21573){
return (new cljs.core.LazySeq(null,((function (___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (){
var s__21573__$1 = s__21573;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21573__$1);
if(temp__4657__auto__){
var s__21573__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21573__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21573__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21575 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21574 = (0);
while(true){
if((i__21574 < size__7183__auto__)){
var tweet = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21574);
cljs.core.chunk_append(b__21575,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "tweet"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "avatar"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21580 = ({"src": om_tools.dom.format_opts([cljs.core.str("./img/"),cljs.core.str(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)),cljs.core.str(".jpg")].join(''))});
return React.DOM.img(G__21580);
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "everything-else"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "usernamey-stuff"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "display-name"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(tweet)],null))))," ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "handle"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "text"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tweet)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "metrics"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "rts"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rts.cljs$core$IFn$_invoke$arity$1(tweet)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "favs"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$favs.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null))))],null))))],null)))));

var G__21594 = (i__21574 + (1));
i__21574 = G__21594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21575),dril_game$app$app_$_iter__21572(cljs.core.chunk_rest(s__21573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21575),null);
}
} else {
var tweet = cljs.core.first(s__21573__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "tweet"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "avatar"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21581 = ({"src": om_tools.dom.format_opts([cljs.core.str("./img/"),cljs.core.str(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)),cljs.core.str(".jpg")].join(''))});
return React.DOM.img(G__21581);
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "everything-else"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "usernamey-stuff"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "display-name"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(tweet)],null))))," ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "handle"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "text"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tweet)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "metrics"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "rts"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rts.cljs$core$IFn$_invoke$arity$1(tweet)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "favs"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$favs.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null))))],null))))],null)))),dril_game$app$app_$_iter__21572(cljs.core.rest(s__21573__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
,null,null));
});})(___$1,validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;
return iter__7184__auto__(cljs.core.reverse(cljs.core.cst$kw$tweets.cljs$core$IFn$_invoke$arity$1(self__.data)));
})()],null))))],null))))],null))));
});})(validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;

dril_game.app.t_dril_game$app21553.getBasis = ((function (validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.cst$sym$input_DASH_schema21519,cljs.core.cst$sym$input_DASH_checker21520,cljs.core.cst$sym$output_DASH_checker21521,cljs.core.with_meta(cljs.core.cst$sym$G__21522,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$validate__12525__auto__,cljs.core.with_meta(cljs.core.cst$sym$G__21523,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$output_DASH_schema21518,cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21518,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21519], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta21554], null);
});})(validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;

dril_game.app.t_dril_game$app21553.cljs$lang$type = true;

dril_game.app.t_dril_game$app21553.cljs$lang$ctorStr = "dril-game.app/t_dril_game$app21553";

dril_game.app.t_dril_game$app21553.cljs$lang$ctorPrWriter = ((function (validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"dril-game.app/t_dril_game$app21553");
});})(validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;

dril_game.app.__GT_t_dril_game$app21553 = ((function (validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589){
return (function dril_game$app$app_$___GT_t_dril_game$app21553(owner__$1,data__$1,input_schema21519__$1,input_checker21520__$1,output_checker21521__$1,G__21522__$1,validate__12525__auto____$1,G__21523__$1,output_schema21518__$1,app__$1,ufv____$1,meta21554){
return (new dril_game.app.t_dril_game$app21553(owner__$1,data__$1,input_schema21519__$1,input_checker21520__$1,output_checker21521__$1,G__21522__$1,validate__12525__auto____$1,G__21523__$1,output_schema21518__$1,app__$1,ufv____$1,meta21554));
});})(validate__12525__auto__,ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;

}

return (new dril_game.app.t_dril_game$app21553(owner,data,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589,G__21522,validate__12525__auto__,G__21523,output_schema21518_21586,dril_game$app$app,ufv___21585,null));
break;
}
})();
if(cljs.core.truth_(validate__12525__auto__)){
var temp__4657__auto___21595 = (output_checker21521_21589.cljs$core$IFn$_invoke$arity$1 ? output_checker21521_21589.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker21521_21589.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___21595)){
var error__12527__auto___21596 = temp__4657__auto___21595;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___21596], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21518_21586,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___21596], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___21585,output_schema21518_21586,input_schema21519_21587,input_checker21520_21588,output_checker21521_21589))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(dril_game.app.app),schema.core.make_fn_schema(output_schema21518_21586,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21519_21587], null)));

dril_game.app.__GT_app = (function dril_game$app$__GT_app(var_args){
var args21582 = [];
var len__7479__auto___21597 = arguments.length;
var i__7480__auto___21598 = (0);
while(true){
if((i__7480__auto___21598 < len__7479__auto___21597)){
args21582.push((arguments[i__7480__auto___21598]));

var G__21599 = (i__7480__auto___21598 + (1));
i__7480__auto___21598 = G__21599;
continue;
} else {
}
break;
}

var G__21584 = args21582.length;
switch (G__21584) {
case 1:
return dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21582.length)].join('')));

}
});

dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21403__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(dril_game.app.app,cursor__21403__auto__);
});

dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21403__auto__,m21517){
return om.core.build.cljs$core$IFn$_invoke$arity$3(dril_game.app.app,cursor__21403__auto__,m21517);
});

dril_game.app.__GT_app.cljs$lang$maxFixedArity = 2;

om.core.root(dril_game.app.app,dril_game.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));
setInterval(dril_game.app.tick_BANG_,(1000));
