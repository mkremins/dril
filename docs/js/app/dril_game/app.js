// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('dril_game.app');
goog.require('cljs.core');
goog.require('dril_game.visions');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.reader');
dril_game.app.followers_count_message = (function dril_game$app$followers_count_message(n){
if((n < (10))){
return "You are nothing.";
} else {
if((n < (100))){
return "You are no one.";
} else {
if((n < (200))){
return "You are a speck of dust.";
} else {
if((n < (500))){
return "You are lower than the lowliest of worms.";
} else {
if((n < (1000))){
return "You are the lowliest of worms.";
} else {
if((n < (2000))){
return "You are a lowly worm.";
} else {
if((n < (5000))){
return "You are a worm.";
} else {
return "Well, it's something, I guess.";

}
}
}
}
}
}
}
});
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
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((((cljs.core.count(freqs) > (0)))?cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((20),((function (freqs,prev_word,prev_word__$1,map__21482,map__21482__$1,draft,markov){
return (function (){
return dril_game.app.weighted_choice(freqs);
});})(freqs,prev_word,prev_word__$1,map__21482,map__21482__$1,draft,markov))
))):null),cljs.core.shuffle(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dril_game.app.valid_word_QMARK_,cljs.core.keys(markov))))));
} else {
return null;
}
});
dril_game.app.update_next_word_options = (function dril_game$app$update_next_word_options(state){
var options = dril_game.app.next_word_options(state);
var vision_option = cljs.core.first(cljs.core.cst$kw$active_DASH_vision.cljs$core$IFn$_invoke$arity$1(state));
var options__$1 = (function (){var G__21485 = options;
if(cljs.core.truth_(vision_option)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21485,(2),vision_option);
} else {
return G__21485;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$next_DASH_word_DASH_options,options__$1);
});
dril_game.app.clear_current_draft = (function dril_game$app$clear_current_draft(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(dril_game.app.update_next_word_options(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$draft,"")),cljs.core.cst$kw$suggestions_DASH_used,(0),cljs.core.array_seq([cljs.core.cst$kw$adjustments_DASH_made,(0),cljs.core.cst$kw$used_DASH_vision_DASH_suggestion_QMARK_,false], 0));
});
dril_game.app.tweet_current_draft = (function dril_game$app$tweet_current_draft(state){
var content = cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(state);
var popularity = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(50),(50),(500),(500),(5000),(25000)], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dril_game.app.clear_current_draft(state),cljs.core.cst$kw$tweeted_DASH_since_DASH_prev_DASH_vision,true),cljs.core.cst$kw$tweets,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$handle,"dril",cljs.core.cst$kw$display,"wint",cljs.core.cst$kw$text,content,cljs.core.cst$kw$rts,cljs.core.rand_int(popularity),cljs.core.cst$kw$favs,cljs.core.rand_int(popularity)], null)),cljs.core.cst$kw$followers,cljs.core._PLUS_,cljs.core.rand_int(popularity));
});
if(typeof dril_game.app.app_state !== 'undefined'){
} else {
dril_game.app.app_state = (function (){var G__21486 = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$npcs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$draft,"",cljs.core.cst$kw$tweets,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$followers,(0),cljs.core.cst$kw$suggestions_DASH_used,(0),cljs.core.cst$kw$adjustments_DASH_made,(0),cljs.core.cst$kw$used_DASH_vision_DASH_suggestion_QMARK_,false,cljs.core.cst$kw$visions,cljs.core.map.cljs$core$IFn$_invoke$arity$2(dril_game.app.tokenize,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dril_game.visions.first_vision], null),dril_game.visions.intro_visions,cljs.core.array_seq([cljs.core.shuffle(dril_game.visions.normal_visions)], 0)))], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21486) : cljs.core.atom.call(null,G__21486));
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
var json = (function (){var G__21489 = req.responseText;
return JSON.parse(G__21489);
})();
var npc = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$handle,(json["handle"]),cljs.core.cst$kw$display,(json["display"]),cljs.core.cst$kw$bio,(json["bio"]),cljs.core.cst$kw$author,(json["author"]),cljs.core.cst$kw$grammar,(function (){var G__21490 = (json["grammar"]);
return tracery.createGrammar(G__21490);
})()], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(dril_game.app.app_state,cljs.core.update,cljs.core.cst$kw$npcs,cljs.core.conj,cljs.core.array_seq([npc], 0));
});})(req))
);

req.open("GET",[cljs.core.str("./npcs/"),cljs.core.str(handle),cljs.core.str(".json")].join(''));

return req.send();
});
var seq__21491_21495 = cljs.core.seq(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["babyborgy","cool_britches","cooldude42069","corporateslogan","crossfitstaligrad","dungeon_junk","DUNSONnDRAGGAN","fruitlover2","gnuerror","goatbot","HourlyDeath","humanmalewriter","Life_inspo","obsidian_scapula","opinions_haver","smallrecipes","thought_leader","WDMRF","WokemonNo","woofgrowlbark"], null));
var chunk__21492_21496 = null;
var count__21493_21497 = (0);
var i__21494_21498 = (0);
while(true){
if((i__21494_21498 < count__21493_21497)){
var handle_21499 = chunk__21492_21496.cljs$core$IIndexed$_nth$arity$2(null,i__21494_21498);
dril_game.app.load_npc_BANG_(handle_21499);

var G__21500 = seq__21491_21495;
var G__21501 = chunk__21492_21496;
var G__21502 = count__21493_21497;
var G__21503 = (i__21494_21498 + (1));
seq__21491_21495 = G__21500;
chunk__21492_21496 = G__21501;
count__21493_21497 = G__21502;
i__21494_21498 = G__21503;
continue;
} else {
var temp__4657__auto___21504 = cljs.core.seq(seq__21491_21495);
if(temp__4657__auto___21504){
var seq__21491_21505__$1 = temp__4657__auto___21504;
if(cljs.core.chunked_seq_QMARK_(seq__21491_21505__$1)){
var c__7215__auto___21506 = cljs.core.chunk_first(seq__21491_21505__$1);
var G__21507 = cljs.core.chunk_rest(seq__21491_21505__$1);
var G__21508 = c__7215__auto___21506;
var G__21509 = cljs.core.count(c__7215__auto___21506);
var G__21510 = (0);
seq__21491_21495 = G__21507;
chunk__21492_21496 = G__21508;
count__21493_21497 = G__21509;
i__21494_21498 = G__21510;
continue;
} else {
var handle_21511 = cljs.core.first(seq__21491_21505__$1);
dril_game.app.load_npc_BANG_(handle_21511);

var G__21512 = cljs.core.next(seq__21491_21505__$1);
var G__21513 = null;
var G__21514 = (0);
var G__21515 = (0);
seq__21491_21495 = G__21512;
chunk__21492_21496 = G__21513;
count__21493_21497 = G__21514;
i__21494_21498 = G__21515;
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

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(om.core.root_cursor(dril_game.app.app_state),(function (state){
if(((cljs.core.cst$kw$followers.cljs$core$IFn$_invoke$arity$1(state) > (0))) && ((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < ((1) / (2))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$followers,(cljs.core.cst$kw$followers.cljs$core$IFn$_invoke$arity$1(state) - (1)));
} else {
return state;
}
}));
});

var ufv___21604 = schema.utils.use_fn_validation;
var output_schema21521_21605 = schema.core.Any;
var input_schema21522_21606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))),schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker21523_21607 = schema.core.checker(input_schema21522_21606);
var output_checker21524_21608 = schema.core.checker(output_schema21521_21605);
/**
 * Inputs: [data owner]
 */
dril_game.app.app = ((function (ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function dril_game$app$app(G__21525,G__21526){
var validate__12525__auto__ = ufv___21604.get_cell();
if(cljs.core.truth_(validate__12525__auto__)){
var args__12526__auto___21609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21525,G__21526], null);
var temp__4657__auto___21610 = (input_checker21523_21607.cljs$core$IFn$_invoke$arity$1 ? input_checker21523_21607.cljs$core$IFn$_invoke$arity$1(args__12526__auto___21609) : input_checker21523_21607.call(null,args__12526__auto___21609));
if(cljs.core.truth_(temp__4657__auto___21610)){
var error__12527__auto___21611 = temp__4657__auto___21610;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___21611], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema21522_21606,cljs.core.cst$kw$value,args__12526__auto___21609,cljs.core.cst$kw$error,error__12527__auto___21611], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var data = G__21525;
var owner = G__21526;
while(true){
if(typeof dril_game.app.t_dril_game$app21564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dril_game.app.t_dril_game$app21564 = (function (output_checker21524,owner,data,G__21526,G__21525,input_schema21522,output_schema21521,validate__12525__auto__,input_checker21523,app,ufv__,meta21565){
this.output_checker21524 = output_checker21524;
this.owner = owner;
this.data = data;
this.G__21526 = G__21526;
this.G__21525 = G__21525;
this.input_schema21522 = input_schema21522;
this.output_schema21521 = output_schema21521;
this.validate__12525__auto__ = validate__12525__auto__;
this.input_checker21523 = input_checker21523;
this.app = app;
this.ufv__ = ufv__;
this.meta21565 = meta21565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dril_game.app.t_dril_game$app21564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (_21566,meta21565__$1){
var self__ = this;
var _21566__$1 = this;
return (new dril_game.app.t_dril_game$app21564(self__.output_checker21524,self__.owner,self__.data,self__.G__21526,self__.G__21525,self__.input_schema21522,self__.output_schema21521,self__.validate__12525__auto__,self__.input_checker21523,self__.app,self__.ufv__,meta21565__$1));
});})(validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;

dril_game.app.t_dril_game$app21564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (_21566){
var self__ = this;
var _21566__$1 = this;
return self__.meta21565;
});})(validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;

dril_game.app.t_dril_game$app21564.prototype.om$core$IDisplayName$ = true;

dril_game.app.t_dril_game$app21564.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;

dril_game.app.t_dril_game$app21564.prototype.om$core$IRender$ = true;

dril_game.app.t_dril_game$app21564.prototype.om$core$IRender$render$arity$1 = ((function (validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "app"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.main,({}),cljs.core.flatten((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(cljs.core.cst$kw$overlay.cljs$core$IFn$_invoke$arity$1(self__.data))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "overlay", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (ev){
ev.preventDefault();

return ev.stopPropagation();
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "overlay-content"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$overlay.cljs$core$IFn$_invoke$arity$1(self__.data),(function (){var G__21567 = ({"className": "overlay-button", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (ev){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.data,((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (p1__21516_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21516_SHARP_,cljs.core.cst$kw$overlay),cljs.core.cst$kw$prev_DASH_vision_DASH_timestamp,Date.now());
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
);
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
)});
var G__21568 = "Continue";
return React.DOM.div(G__21567,G__21568);
})()],null))))],null)))):null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "profile-area"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,({"className": "followers"}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,["You have ",om_tools.dom.element(React.DOM.strong,cljs.core.cst$kw$followers.cljs$core$IFn$_invoke$arity$1(self__.data),cljs.core.PersistentVector.EMPTY)," followers.",React.DOM.br(null),dril_game.app.followers_count_message(cljs.core.cst$kw$followers.cljs$core$IFn$_invoke$arity$1(self__.data))],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "input-area"}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21569 = ({"className": "message", "onChange": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (p1__21517_SHARP_){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$draft,p1__21517_SHARP_.target.value);

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$adjustments_DASH_made,cljs.core.inc);
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
), "placeholder": "What's happening?", "value": om_tools.dom.format_opts(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data))});
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__21569) : om.dom.textarea.call(null,G__21569));
})(),(function (){var chars_remaining = ((140) - cljs.core.count(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts((function (){var G__21570 = "char-count";
if((chars_remaining < (0))){
return [cljs.core.str(G__21570),cljs.core.str(" negative")].join('');
} else {
return G__21570;
}
})())}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[chars_remaining],null))));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "options"}),cljs.core.flatten((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["suggestions-used ",cljs.core.cst$kw$suggestions_DASH_used.cljs$core$IFn$_invoke$arity$1(self__.data)], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["adjustments-made ",cljs.core.cst$kw$adjustments_DASH_made.cljs$core$IFn$_invoke$arity$1(self__.data)], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["used-vision-suggestion? ",cljs.core.cst$kw$used_DASH_vision_DASH_suggestion_QMARK_.cljs$core$IFn$_invoke$arity$1(self__.data)], 0)),(function (){var vision_option = cljs.core.first(cljs.core.cst$kw$active_DASH_vision.cljs$core$IFn$_invoke$arity$1(self__.data));
var iter__7184__auto__ = ((function (vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function dril_game$app$app_$_iter__21571(s__21572){
return (new cljs.core.LazySeq(null,((function (vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (){
var s__21572__$1 = s__21572;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21572__$1);
if(temp__4657__auto__){
var s__21572__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21572__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21572__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21574 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21573 = (0);
while(true){
if((i__21573 < size__7183__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21573);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_word_DASH_options.cljs$core$IFn$_invoke$arity$1(self__.data),n);
var vision_option_QMARK_ = (function (){var and__6392__auto__ = vision_option;
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2));
} else {
return and__6392__auto__;
}
})();
var option__$1 = (cljs.core.truth_(vision_option_QMARK_)?vision_option:option);
cljs.core.chunk_append(b__21574,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts((function (){var G__21579 = "option";
if(cljs.core.truth_(vision_option_QMARK_)){
return [cljs.core.str(G__21579),cljs.core.str(" vision-option")].join('');
} else {
return G__21579;
}
})()), "href": "#", "onClick": om_tools.dom.format_opts(((function (i__21573,option,vision_option_QMARK_,option__$1,n,c__7182__auto__,size__7183__auto__,b__21574,s__21572__$2,temp__4657__auto__,vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$draft,((function (i__21573,option,vision_option_QMARK_,option__$1,n,c__7182__auto__,size__7183__auto__,b__21574,s__21572__$2,temp__4657__auto__,vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (p1__21518_SHARP_){
return [cljs.core.str(p1__21518_SHARP_),cljs.core.str((((cljs.core.seq(p1__21518_SHARP_)) && (cljs.core.not(cljs.core.re_find(/\s/,(function (){var or__6404__auto__ = cljs.core.last(p1__21518_SHARP_);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return "";
}
})()))))?" ":null)),cljs.core.str(option__$1)].join('');
});})(i__21573,option,vision_option_QMARK_,option__$1,n,c__7182__auto__,size__7183__auto__,b__21574,s__21572__$2,temp__4657__auto__,vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
);

if(cljs.core.truth_(vision_option_QMARK_)){
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$active_DASH_vision,cljs.core.rest);
} else {
}

if(cljs.core.truth_(vision_option_QMARK_)){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$used_DASH_vision_DASH_suggestion_QMARK_,true);
} else {
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$suggestions_DASH_used,cljs.core.inc);
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(i__21573,option,vision_option_QMARK_,option__$1,n,c__7182__auto__,size__7183__auto__,b__21574,s__21572__$2,temp__4657__auto__,vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[option__$1],null)))));

var G__21612 = (i__21573 + (1));
i__21573 = G__21612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21574),dril_game$app$app_$_iter__21571(cljs.core.chunk_rest(s__21572__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21574),null);
}
} else {
var n = cljs.core.first(s__21572__$2);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_word_DASH_options.cljs$core$IFn$_invoke$arity$1(self__.data),n);
var vision_option_QMARK_ = (function (){var and__6392__auto__ = vision_option;
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2));
} else {
return and__6392__auto__;
}
})();
var option__$1 = (cljs.core.truth_(vision_option_QMARK_)?vision_option:option);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts((function (){var G__21580 = "option";
if(cljs.core.truth_(vision_option_QMARK_)){
return [cljs.core.str(G__21580),cljs.core.str(" vision-option")].join('');
} else {
return G__21580;
}
})()), "href": "#", "onClick": om_tools.dom.format_opts(((function (option,vision_option_QMARK_,option__$1,n,s__21572__$2,temp__4657__auto__,vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$draft,((function (option,vision_option_QMARK_,option__$1,n,s__21572__$2,temp__4657__auto__,vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (p1__21518_SHARP_){
return [cljs.core.str(p1__21518_SHARP_),cljs.core.str((((cljs.core.seq(p1__21518_SHARP_)) && (cljs.core.not(cljs.core.re_find(/\s/,(function (){var or__6404__auto__ = cljs.core.last(p1__21518_SHARP_);
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return "";
}
})()))))?" ":null)),cljs.core.str(option__$1)].join('');
});})(option,vision_option_QMARK_,option__$1,n,s__21572__$2,temp__4657__auto__,vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
);

if(cljs.core.truth_(vision_option_QMARK_)){
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$active_DASH_vision,cljs.core.rest);
} else {
}

if(cljs.core.truth_(vision_option_QMARK_)){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$used_DASH_vision_DASH_suggestion_QMARK_,true);
} else {
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$suggestions_DASH_used,cljs.core.inc);
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(option,vision_option_QMARK_,option__$1,n,s__21572__$2,temp__4657__auto__,vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
)}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[option__$1],null)))),dril_game$app$app_$_iter__21571(cljs.core.rest(s__21572__$2)));
}
} else {
return null;
}
break;
}
});})(vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
,null,null));
});})(vision_option,___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$next_DASH_word_DASH_options.cljs$core$IFn$_invoke$arity$1(self__.data))));
})(),(function (){var G__21581 = ({"className": "option", "href": "#", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.update_next_word_options);
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
)});
var G__21582 = "\uD83D\uDD04";
return React.DOM.div(G__21581,G__21582);
})()],null)))),(function (){var G__21583 = ({"className": "restart-tweet", "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.clear_current_draft);
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
)});
var G__21584 = "ARGH NO";
return React.DOM.button(G__21583,G__21584);
})(),(function (){var G__21585 = ({"className": "send-tweet", "disabled": om_tools.dom.format_opts(((cljs.core.count(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data)) <= (1))) || ((cljs.core.count(cljs.core.cst$kw$draft.cljs$core$IFn$_invoke$arity$1(self__.data)) > (140)))), "onClick": om_tools.dom.format_opts(((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (ev){
ev.preventDefault();

ev.stopPropagation();

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,dril_game.app.tweet_current_draft);

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.PersistentVector.EMPTY,((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (p1__21519_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21519_SHARP_,cljs.core.cst$kw$active_DASH_vision,cljs.core.first(cljs.core.cst$kw$visions.cljs$core$IFn$_invoke$arity$1(p1__21519_SHARP_))),cljs.core.cst$kw$visions,cljs.core.rest);
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
);
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
)});
var G__21586 = "Send Tweet";
return React.DOM.button(G__21585,G__21586);
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "timeline"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__7184__auto__ = ((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function dril_game$app$app_$_iter__21587(s__21588){
return (new cljs.core.LazySeq(null,((function (___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (){
var s__21588__$1 = s__21588;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21588__$1);
if(temp__4657__auto__){
var s__21588__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21588__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__21588__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__21590 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__21589 = (0);
while(true){
if((i__21589 < size__7183__auto__)){
var tweet = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__21589);
cljs.core.chunk_append(b__21590,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts((function (){var G__21597 = "tweet";
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet),"dril")){
return [cljs.core.str(G__21597),cljs.core.str(" by-player")].join('');
} else {
return G__21597;
}
})())}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "avatar"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21598 = ({"src": om_tools.dom.format_opts([cljs.core.str("./img/"),cljs.core.str(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)),cljs.core.str(".jpg")].join(''))});
return React.DOM.img(G__21598);
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "everything-else"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "usernamey-stuff"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "display-name"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(tweet)],null))))," ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "handle"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "text"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tweet)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "metrics"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "rts"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rts.cljs$core$IFn$_invoke$arity$1(tweet)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "favs"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$favs.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null))))],null))))],null)))));

var G__21613 = (i__21589 + (1));
i__21589 = G__21613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21590),dril_game$app$app_$_iter__21587(cljs.core.chunk_rest(s__21588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21590),null);
}
} else {
var tweet = cljs.core.first(s__21588__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": om_tools.dom.format_opts((function (){var G__21599 = "tweet";
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet),"dril")){
return [cljs.core.str(G__21599),cljs.core.str(" by-player")].join('');
} else {
return G__21599;
}
})())}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "avatar"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__21600 = ({"src": om_tools.dom.format_opts([cljs.core.str("./img/"),cljs.core.str(cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)),cljs.core.str(".jpg")].join(''))});
return React.DOM.img(G__21600);
})()],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "everything-else"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "usernamey-stuff"}),cljs.core.flatten((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "display-name"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(tweet)],null))))," ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "handle"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$handle.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "text"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(tweet)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,({"className": "metrics"}),cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "rts"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rts.cljs$core$IFn$_invoke$arity$1(tweet)],null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,({"className": "favs"}),cljs.core.flatten((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$favs.cljs$core$IFn$_invoke$arity$1(tweet)],null))))],null))))],null))))],null)))),dril_game$app$app_$_iter__21587(cljs.core.rest(s__21588__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
,null,null));
});})(___$1,validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;
return iter__7184__auto__(cljs.core.reverse(cljs.core.cst$kw$tweets.cljs$core$IFn$_invoke$arity$1(self__.data)));
})()],null))))],null))))],null))));
});})(validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;

dril_game.app.t_dril_game$app21564.getBasis = ((function (validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_checker21524,cljs.core.cst$sym$owner,cljs.core.cst$sym$data,cljs.core.with_meta(cljs.core.cst$sym$G__21526,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$G__21525,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.cst$sym$input_DASH_schema21522,cljs.core.cst$sym$output_DASH_schema21521,cljs.core.cst$sym$validate__12525__auto__,cljs.core.cst$sym$input_DASH_checker21523,cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.with_meta(cljs.core.cst$sym$owner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null))], null))),cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$schema$core_SLASH_make_DASH_fn_DASH_schema,cljs.core.cst$sym$output_DASH_schema21521,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$input_DASH_schema21522], null)),cljs.core.cst$kw$doc,"Inputs: [data owner]",cljs.core.cst$kw$raw_DASH_arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$ufv__,cljs.core.cst$sym$meta21565], null);
});})(validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;

dril_game.app.t_dril_game$app21564.cljs$lang$type = true;

dril_game.app.t_dril_game$app21564.cljs$lang$ctorStr = "dril-game.app/t_dril_game$app21564";

dril_game.app.t_dril_game$app21564.cljs$lang$ctorPrWriter = ((function (validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function (this__7010__auto__,writer__7011__auto__,opt__7012__auto__){
return cljs.core._write(writer__7011__auto__,"dril-game.app/t_dril_game$app21564");
});})(validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;

dril_game.app.__GT_t_dril_game$app21564 = ((function (validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608){
return (function dril_game$app$app_$___GT_t_dril_game$app21564(output_checker21524__$1,owner__$1,data__$1,G__21526__$1,G__21525__$1,input_schema21522__$1,output_schema21521__$1,validate__12525__auto____$1,input_checker21523__$1,app__$1,ufv____$1,meta21565){
return (new dril_game.app.t_dril_game$app21564(output_checker21524__$1,owner__$1,data__$1,G__21526__$1,G__21525__$1,input_schema21522__$1,output_schema21521__$1,validate__12525__auto____$1,input_checker21523__$1,app__$1,ufv____$1,meta21565));
});})(validate__12525__auto__,ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;

}

return (new dril_game.app.t_dril_game$app21564(output_checker21524_21608,owner,data,G__21526,G__21525,input_schema21522_21606,output_schema21521_21605,validate__12525__auto__,input_checker21523_21607,dril_game$app$app,ufv___21604,null));
break;
}
})();
if(cljs.core.truth_(validate__12525__auto__)){
var temp__4657__auto___21614 = (output_checker21524_21608.cljs$core$IFn$_invoke$arity$1 ? output_checker21524_21608.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker21524_21608.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___21614)){
var error__12527__auto___21615 = temp__4657__auto___21614;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___21615], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema21521_21605,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___21615], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___21604,output_schema21521_21605,input_schema21522_21606,input_checker21523_21607,output_checker21524_21608))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(dril_game.app.app),schema.core.make_fn_schema(output_schema21521_21605,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21522_21606], null)));

dril_game.app.__GT_app = (function dril_game$app$__GT_app(var_args){
var args21601 = [];
var len__7479__auto___21616 = arguments.length;
var i__7480__auto___21617 = (0);
while(true){
if((i__7480__auto___21617 < len__7479__auto___21616)){
args21601.push((arguments[i__7480__auto___21617]));

var G__21618 = (i__7480__auto___21617 + (1));
i__7480__auto___21617 = G__21618;
continue;
} else {
}
break;
}

var G__21603 = args21601.length;
switch (G__21603) {
case 1:
return dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21601.length)].join('')));

}
});

dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21403__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(dril_game.app.app,cursor__21403__auto__);
});

dril_game.app.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21403__auto__,m21520){
return om.core.build.cljs$core$IFn$_invoke$arity$3(dril_game.app.app,cursor__21403__auto__,m21520);
});

dril_game.app.__GT_app.cljs$lang$maxFixedArity = 2;

om.core.root(dril_game.app.app,dril_game.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("app")], null));
setInterval(dril_game.app.tick_BANG_,(1000));
