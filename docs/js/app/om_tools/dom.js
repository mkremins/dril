// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace(s,/-(\w)/,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__6404__auto__ = (cljs.core.count(attr) < (5));
if(or__6404__auto__){
return or__6404__auto__;
} else {
var G__19311 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(attr,(0),(5));
switch (G__19311) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case(attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__19314 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__19314) {
case "class":
return cljs.core.cst$kw$className;

break;
case "for":
return cljs.core.cst$kw$htmlFor;

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(om_tools.dom.opt_key_case(cljs.core.name(om_tools.dom.opt_key_alias(opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_(opt_val)){
return (om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1 ? om_tools.dom.format_opts.cljs$core$IFn$_invoke$arity$1(opt_val) : om_tools.dom.format_opts.call(null,opt_val));
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_(opts)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19320){
var vec__19321 = p__19320;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19321,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key(k),om_tools.dom.format_opt_val(v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_(form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_(form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__6404__auto__ = React.isValidElement;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_(x)) && (!(om_tools.dom.valid_element_QMARK_(x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts(opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_(opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__19327 = om_tools.dom.element_args(opts,children);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19327,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19327,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor,cljs.core.flatten(cljs.core.cons(opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args19330 = [];
var len__7479__auto___19955 = arguments.length;
var i__7480__auto___19956 = (0);
while(true){
if((i__7480__auto___19956 < len__7479__auto___19955)){
args19330.push((arguments[i__7480__auto___19956]));

var G__19957 = (i__7480__auto___19956 + (1));
i__7480__auto___19956 = G__19957;
continue;
} else {
}
break;
}

var G__19334 = args19330.length;
switch (G__19334) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19330.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.a,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq19331){
var G__19332 = cljs.core.first(seq19331);
var seq19331__$1 = cljs.core.next(seq19331);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__19332,seq19331__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args19335 = [];
var len__7479__auto___19959 = arguments.length;
var i__7480__auto___19960 = (0);
while(true){
if((i__7480__auto___19960 < len__7479__auto___19959)){
args19335.push((arguments[i__7480__auto___19960]));

var G__19961 = (i__7480__auto___19960 + (1));
i__7480__auto___19960 = G__19961;
continue;
} else {
}
break;
}

var G__19339 = args19335.length;
switch (G__19339) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19335.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.abbr,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq19336){
var G__19337 = cljs.core.first(seq19336);
var seq19336__$1 = cljs.core.next(seq19336);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__19337,seq19336__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args19340 = [];
var len__7479__auto___19963 = arguments.length;
var i__7480__auto___19964 = (0);
while(true){
if((i__7480__auto___19964 < len__7479__auto___19963)){
args19340.push((arguments[i__7480__auto___19964]));

var G__19965 = (i__7480__auto___19964 + (1));
i__7480__auto___19964 = G__19965;
continue;
} else {
}
break;
}

var G__19344 = args19340.length;
switch (G__19344) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19340.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.address,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq19341){
var G__19342 = cljs.core.first(seq19341);
var seq19341__$1 = cljs.core.next(seq19341);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__19342,seq19341__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args19345 = [];
var len__7479__auto___19967 = arguments.length;
var i__7480__auto___19968 = (0);
while(true){
if((i__7480__auto___19968 < len__7479__auto___19967)){
args19345.push((arguments[i__7480__auto___19968]));

var G__19969 = (i__7480__auto___19968 + (1));
i__7480__auto___19968 = G__19969;
continue;
} else {
}
break;
}

var G__19349 = args19345.length;
switch (G__19349) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19345.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.area,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq19346){
var G__19347 = cljs.core.first(seq19346);
var seq19346__$1 = cljs.core.next(seq19346);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__19347,seq19346__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args19350 = [];
var len__7479__auto___19971 = arguments.length;
var i__7480__auto___19972 = (0);
while(true){
if((i__7480__auto___19972 < len__7479__auto___19971)){
args19350.push((arguments[i__7480__auto___19972]));

var G__19973 = (i__7480__auto___19972 + (1));
i__7480__auto___19972 = G__19973;
continue;
} else {
}
break;
}

var G__19354 = args19350.length;
switch (G__19354) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19350.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.article,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq19351){
var G__19352 = cljs.core.first(seq19351);
var seq19351__$1 = cljs.core.next(seq19351);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__19352,seq19351__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args19355 = [];
var len__7479__auto___19975 = arguments.length;
var i__7480__auto___19976 = (0);
while(true){
if((i__7480__auto___19976 < len__7479__auto___19975)){
args19355.push((arguments[i__7480__auto___19976]));

var G__19977 = (i__7480__auto___19976 + (1));
i__7480__auto___19976 = G__19977;
continue;
} else {
}
break;
}

var G__19359 = args19355.length;
switch (G__19359) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19355.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.aside,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq19356){
var G__19357 = cljs.core.first(seq19356);
var seq19356__$1 = cljs.core.next(seq19356);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__19357,seq19356__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args19360 = [];
var len__7479__auto___19979 = arguments.length;
var i__7480__auto___19980 = (0);
while(true){
if((i__7480__auto___19980 < len__7479__auto___19979)){
args19360.push((arguments[i__7480__auto___19980]));

var G__19981 = (i__7480__auto___19980 + (1));
i__7480__auto___19980 = G__19981;
continue;
} else {
}
break;
}

var G__19364 = args19360.length;
switch (G__19364) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19360.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.audio,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq19361){
var G__19362 = cljs.core.first(seq19361);
var seq19361__$1 = cljs.core.next(seq19361);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__19362,seq19361__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args19365 = [];
var len__7479__auto___19983 = arguments.length;
var i__7480__auto___19984 = (0);
while(true){
if((i__7480__auto___19984 < len__7479__auto___19983)){
args19365.push((arguments[i__7480__auto___19984]));

var G__19985 = (i__7480__auto___19984 + (1));
i__7480__auto___19984 = G__19985;
continue;
} else {
}
break;
}

var G__19369 = args19365.length;
switch (G__19369) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19365.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.b,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq19366){
var G__19367 = cljs.core.first(seq19366);
var seq19366__$1 = cljs.core.next(seq19366);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__19367,seq19366__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args19370 = [];
var len__7479__auto___19987 = arguments.length;
var i__7480__auto___19988 = (0);
while(true){
if((i__7480__auto___19988 < len__7479__auto___19987)){
args19370.push((arguments[i__7480__auto___19988]));

var G__19989 = (i__7480__auto___19988 + (1));
i__7480__auto___19988 = G__19989;
continue;
} else {
}
break;
}

var G__19374 = args19370.length;
switch (G__19374) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19370.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.base,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq19371){
var G__19372 = cljs.core.first(seq19371);
var seq19371__$1 = cljs.core.next(seq19371);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__19372,seq19371__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args19375 = [];
var len__7479__auto___19991 = arguments.length;
var i__7480__auto___19992 = (0);
while(true){
if((i__7480__auto___19992 < len__7479__auto___19991)){
args19375.push((arguments[i__7480__auto___19992]));

var G__19993 = (i__7480__auto___19992 + (1));
i__7480__auto___19992 = G__19993;
continue;
} else {
}
break;
}

var G__19379 = args19375.length;
switch (G__19379) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19375.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.bdi,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq19376){
var G__19377 = cljs.core.first(seq19376);
var seq19376__$1 = cljs.core.next(seq19376);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__19377,seq19376__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args19380 = [];
var len__7479__auto___19995 = arguments.length;
var i__7480__auto___19996 = (0);
while(true){
if((i__7480__auto___19996 < len__7479__auto___19995)){
args19380.push((arguments[i__7480__auto___19996]));

var G__19997 = (i__7480__auto___19996 + (1));
i__7480__auto___19996 = G__19997;
continue;
} else {
}
break;
}

var G__19384 = args19380.length;
switch (G__19384) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19380.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.bdo,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq19381){
var G__19382 = cljs.core.first(seq19381);
var seq19381__$1 = cljs.core.next(seq19381);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__19382,seq19381__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args19385 = [];
var len__7479__auto___19999 = arguments.length;
var i__7480__auto___20000 = (0);
while(true){
if((i__7480__auto___20000 < len__7479__auto___19999)){
args19385.push((arguments[i__7480__auto___20000]));

var G__20001 = (i__7480__auto___20000 + (1));
i__7480__auto___20000 = G__20001;
continue;
} else {
}
break;
}

var G__19389 = args19385.length;
switch (G__19389) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19385.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.big,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq19386){
var G__19387 = cljs.core.first(seq19386);
var seq19386__$1 = cljs.core.next(seq19386);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__19387,seq19386__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args19390 = [];
var len__7479__auto___20003 = arguments.length;
var i__7480__auto___20004 = (0);
while(true){
if((i__7480__auto___20004 < len__7479__auto___20003)){
args19390.push((arguments[i__7480__auto___20004]));

var G__20005 = (i__7480__auto___20004 + (1));
i__7480__auto___20004 = G__20005;
continue;
} else {
}
break;
}

var G__19394 = args19390.length;
switch (G__19394) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19390.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.blockquote,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq19391){
var G__19392 = cljs.core.first(seq19391);
var seq19391__$1 = cljs.core.next(seq19391);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__19392,seq19391__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args19395 = [];
var len__7479__auto___20007 = arguments.length;
var i__7480__auto___20008 = (0);
while(true){
if((i__7480__auto___20008 < len__7479__auto___20007)){
args19395.push((arguments[i__7480__auto___20008]));

var G__20009 = (i__7480__auto___20008 + (1));
i__7480__auto___20008 = G__20009;
continue;
} else {
}
break;
}

var G__19399 = args19395.length;
switch (G__19399) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19395.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.body,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq19396){
var G__19397 = cljs.core.first(seq19396);
var seq19396__$1 = cljs.core.next(seq19396);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__19397,seq19396__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args19400 = [];
var len__7479__auto___20011 = arguments.length;
var i__7480__auto___20012 = (0);
while(true){
if((i__7480__auto___20012 < len__7479__auto___20011)){
args19400.push((arguments[i__7480__auto___20012]));

var G__20013 = (i__7480__auto___20012 + (1));
i__7480__auto___20012 = G__20013;
continue;
} else {
}
break;
}

var G__19404 = args19400.length;
switch (G__19404) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19400.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.br,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq19401){
var G__19402 = cljs.core.first(seq19401);
var seq19401__$1 = cljs.core.next(seq19401);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__19402,seq19401__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args19405 = [];
var len__7479__auto___20015 = arguments.length;
var i__7480__auto___20016 = (0);
while(true){
if((i__7480__auto___20016 < len__7479__auto___20015)){
args19405.push((arguments[i__7480__auto___20016]));

var G__20017 = (i__7480__auto___20016 + (1));
i__7480__auto___20016 = G__20017;
continue;
} else {
}
break;
}

var G__19409 = args19405.length;
switch (G__19409) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19405.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.button,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq19406){
var G__19407 = cljs.core.first(seq19406);
var seq19406__$1 = cljs.core.next(seq19406);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__19407,seq19406__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args19410 = [];
var len__7479__auto___20019 = arguments.length;
var i__7480__auto___20020 = (0);
while(true){
if((i__7480__auto___20020 < len__7479__auto___20019)){
args19410.push((arguments[i__7480__auto___20020]));

var G__20021 = (i__7480__auto___20020 + (1));
i__7480__auto___20020 = G__20021;
continue;
} else {
}
break;
}

var G__19414 = args19410.length;
switch (G__19414) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19410.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.canvas,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq19411){
var G__19412 = cljs.core.first(seq19411);
var seq19411__$1 = cljs.core.next(seq19411);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__19412,seq19411__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args19415 = [];
var len__7479__auto___20023 = arguments.length;
var i__7480__auto___20024 = (0);
while(true){
if((i__7480__auto___20024 < len__7479__auto___20023)){
args19415.push((arguments[i__7480__auto___20024]));

var G__20025 = (i__7480__auto___20024 + (1));
i__7480__auto___20024 = G__20025;
continue;
} else {
}
break;
}

var G__19419 = args19415.length;
switch (G__19419) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19415.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.caption,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq19416){
var G__19417 = cljs.core.first(seq19416);
var seq19416__$1 = cljs.core.next(seq19416);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__19417,seq19416__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args19420 = [];
var len__7479__auto___20027 = arguments.length;
var i__7480__auto___20028 = (0);
while(true){
if((i__7480__auto___20028 < len__7479__auto___20027)){
args19420.push((arguments[i__7480__auto___20028]));

var G__20029 = (i__7480__auto___20028 + (1));
i__7480__auto___20028 = G__20029;
continue;
} else {
}
break;
}

var G__19424 = args19420.length;
switch (G__19424) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19420.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.cite,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq19421){
var G__19422 = cljs.core.first(seq19421);
var seq19421__$1 = cljs.core.next(seq19421);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__19422,seq19421__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args19425 = [];
var len__7479__auto___20031 = arguments.length;
var i__7480__auto___20032 = (0);
while(true){
if((i__7480__auto___20032 < len__7479__auto___20031)){
args19425.push((arguments[i__7480__auto___20032]));

var G__20033 = (i__7480__auto___20032 + (1));
i__7480__auto___20032 = G__20033;
continue;
} else {
}
break;
}

var G__19429 = args19425.length;
switch (G__19429) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19425.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.code,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq19426){
var G__19427 = cljs.core.first(seq19426);
var seq19426__$1 = cljs.core.next(seq19426);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__19427,seq19426__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args19430 = [];
var len__7479__auto___20035 = arguments.length;
var i__7480__auto___20036 = (0);
while(true){
if((i__7480__auto___20036 < len__7479__auto___20035)){
args19430.push((arguments[i__7480__auto___20036]));

var G__20037 = (i__7480__auto___20036 + (1));
i__7480__auto___20036 = G__20037;
continue;
} else {
}
break;
}

var G__19434 = args19430.length;
switch (G__19434) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19430.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.col,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq19431){
var G__19432 = cljs.core.first(seq19431);
var seq19431__$1 = cljs.core.next(seq19431);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__19432,seq19431__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args19435 = [];
var len__7479__auto___20039 = arguments.length;
var i__7480__auto___20040 = (0);
while(true){
if((i__7480__auto___20040 < len__7479__auto___20039)){
args19435.push((arguments[i__7480__auto___20040]));

var G__20041 = (i__7480__auto___20040 + (1));
i__7480__auto___20040 = G__20041;
continue;
} else {
}
break;
}

var G__19439 = args19435.length;
switch (G__19439) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19435.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.colgroup,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq19436){
var G__19437 = cljs.core.first(seq19436);
var seq19436__$1 = cljs.core.next(seq19436);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__19437,seq19436__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args19440 = [];
var len__7479__auto___20043 = arguments.length;
var i__7480__auto___20044 = (0);
while(true){
if((i__7480__auto___20044 < len__7479__auto___20043)){
args19440.push((arguments[i__7480__auto___20044]));

var G__20045 = (i__7480__auto___20044 + (1));
i__7480__auto___20044 = G__20045;
continue;
} else {
}
break;
}

var G__19444 = args19440.length;
switch (G__19444) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19440.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.data,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq19441){
var G__19442 = cljs.core.first(seq19441);
var seq19441__$1 = cljs.core.next(seq19441);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__19442,seq19441__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args19445 = [];
var len__7479__auto___20047 = arguments.length;
var i__7480__auto___20048 = (0);
while(true){
if((i__7480__auto___20048 < len__7479__auto___20047)){
args19445.push((arguments[i__7480__auto___20048]));

var G__20049 = (i__7480__auto___20048 + (1));
i__7480__auto___20048 = G__20049;
continue;
} else {
}
break;
}

var G__19449 = args19445.length;
switch (G__19449) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19445.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.datalist,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq19446){
var G__19447 = cljs.core.first(seq19446);
var seq19446__$1 = cljs.core.next(seq19446);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__19447,seq19446__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args19450 = [];
var len__7479__auto___20051 = arguments.length;
var i__7480__auto___20052 = (0);
while(true){
if((i__7480__auto___20052 < len__7479__auto___20051)){
args19450.push((arguments[i__7480__auto___20052]));

var G__20053 = (i__7480__auto___20052 + (1));
i__7480__auto___20052 = G__20053;
continue;
} else {
}
break;
}

var G__19454 = args19450.length;
switch (G__19454) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19450.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.dd,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq19451){
var G__19452 = cljs.core.first(seq19451);
var seq19451__$1 = cljs.core.next(seq19451);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__19452,seq19451__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args19455 = [];
var len__7479__auto___20055 = arguments.length;
var i__7480__auto___20056 = (0);
while(true){
if((i__7480__auto___20056 < len__7479__auto___20055)){
args19455.push((arguments[i__7480__auto___20056]));

var G__20057 = (i__7480__auto___20056 + (1));
i__7480__auto___20056 = G__20057;
continue;
} else {
}
break;
}

var G__19459 = args19455.length;
switch (G__19459) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19455.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.del,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq19456){
var G__19457 = cljs.core.first(seq19456);
var seq19456__$1 = cljs.core.next(seq19456);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__19457,seq19456__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args19460 = [];
var len__7479__auto___20059 = arguments.length;
var i__7480__auto___20060 = (0);
while(true){
if((i__7480__auto___20060 < len__7479__auto___20059)){
args19460.push((arguments[i__7480__auto___20060]));

var G__20061 = (i__7480__auto___20060 + (1));
i__7480__auto___20060 = G__20061;
continue;
} else {
}
break;
}

var G__19464 = args19460.length;
switch (G__19464) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19460.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.dfn,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq19461){
var G__19462 = cljs.core.first(seq19461);
var seq19461__$1 = cljs.core.next(seq19461);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__19462,seq19461__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args19465 = [];
var len__7479__auto___20063 = arguments.length;
var i__7480__auto___20064 = (0);
while(true){
if((i__7480__auto___20064 < len__7479__auto___20063)){
args19465.push((arguments[i__7480__auto___20064]));

var G__20065 = (i__7480__auto___20064 + (1));
i__7480__auto___20064 = G__20065;
continue;
} else {
}
break;
}

var G__19469 = args19465.length;
switch (G__19469) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19465.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.div,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq19466){
var G__19467 = cljs.core.first(seq19466);
var seq19466__$1 = cljs.core.next(seq19466);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__19467,seq19466__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args19470 = [];
var len__7479__auto___20067 = arguments.length;
var i__7480__auto___20068 = (0);
while(true){
if((i__7480__auto___20068 < len__7479__auto___20067)){
args19470.push((arguments[i__7480__auto___20068]));

var G__20069 = (i__7480__auto___20068 + (1));
i__7480__auto___20068 = G__20069;
continue;
} else {
}
break;
}

var G__19474 = args19470.length;
switch (G__19474) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19470.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.dl,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq19471){
var G__19472 = cljs.core.first(seq19471);
var seq19471__$1 = cljs.core.next(seq19471);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__19472,seq19471__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args19475 = [];
var len__7479__auto___20071 = arguments.length;
var i__7480__auto___20072 = (0);
while(true){
if((i__7480__auto___20072 < len__7479__auto___20071)){
args19475.push((arguments[i__7480__auto___20072]));

var G__20073 = (i__7480__auto___20072 + (1));
i__7480__auto___20072 = G__20073;
continue;
} else {
}
break;
}

var G__19479 = args19475.length;
switch (G__19479) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19475.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.dt,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq19476){
var G__19477 = cljs.core.first(seq19476);
var seq19476__$1 = cljs.core.next(seq19476);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__19477,seq19476__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args19480 = [];
var len__7479__auto___20075 = arguments.length;
var i__7480__auto___20076 = (0);
while(true){
if((i__7480__auto___20076 < len__7479__auto___20075)){
args19480.push((arguments[i__7480__auto___20076]));

var G__20077 = (i__7480__auto___20076 + (1));
i__7480__auto___20076 = G__20077;
continue;
} else {
}
break;
}

var G__19484 = args19480.length;
switch (G__19484) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19480.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.em,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq19481){
var G__19482 = cljs.core.first(seq19481);
var seq19481__$1 = cljs.core.next(seq19481);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__19482,seq19481__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args19485 = [];
var len__7479__auto___20079 = arguments.length;
var i__7480__auto___20080 = (0);
while(true){
if((i__7480__auto___20080 < len__7479__auto___20079)){
args19485.push((arguments[i__7480__auto___20080]));

var G__20081 = (i__7480__auto___20080 + (1));
i__7480__auto___20080 = G__20081;
continue;
} else {
}
break;
}

var G__19489 = args19485.length;
switch (G__19489) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19485.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.embed,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq19486){
var G__19487 = cljs.core.first(seq19486);
var seq19486__$1 = cljs.core.next(seq19486);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__19487,seq19486__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args19495 = [];
var len__7479__auto___20083 = arguments.length;
var i__7480__auto___20084 = (0);
while(true){
if((i__7480__auto___20084 < len__7479__auto___20083)){
args19495.push((arguments[i__7480__auto___20084]));

var G__20085 = (i__7480__auto___20084 + (1));
i__7480__auto___20084 = G__20085;
continue;
} else {
}
break;
}

var G__19499 = args19495.length;
switch (G__19499) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19495.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.fieldset,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq19496){
var G__19497 = cljs.core.first(seq19496);
var seq19496__$1 = cljs.core.next(seq19496);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__19497,seq19496__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args19500 = [];
var len__7479__auto___20087 = arguments.length;
var i__7480__auto___20088 = (0);
while(true){
if((i__7480__auto___20088 < len__7479__auto___20087)){
args19500.push((arguments[i__7480__auto___20088]));

var G__20089 = (i__7480__auto___20088 + (1));
i__7480__auto___20088 = G__20089;
continue;
} else {
}
break;
}

var G__19504 = args19500.length;
switch (G__19504) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19500.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.figcaption,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq19501){
var G__19502 = cljs.core.first(seq19501);
var seq19501__$1 = cljs.core.next(seq19501);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__19502,seq19501__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args19505 = [];
var len__7479__auto___20091 = arguments.length;
var i__7480__auto___20092 = (0);
while(true){
if((i__7480__auto___20092 < len__7479__auto___20091)){
args19505.push((arguments[i__7480__auto___20092]));

var G__20093 = (i__7480__auto___20092 + (1));
i__7480__auto___20092 = G__20093;
continue;
} else {
}
break;
}

var G__19509 = args19505.length;
switch (G__19509) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19505.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.figure,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq19506){
var G__19507 = cljs.core.first(seq19506);
var seq19506__$1 = cljs.core.next(seq19506);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__19507,seq19506__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args19510 = [];
var len__7479__auto___20095 = arguments.length;
var i__7480__auto___20096 = (0);
while(true){
if((i__7480__auto___20096 < len__7479__auto___20095)){
args19510.push((arguments[i__7480__auto___20096]));

var G__20097 = (i__7480__auto___20096 + (1));
i__7480__auto___20096 = G__20097;
continue;
} else {
}
break;
}

var G__19514 = args19510.length;
switch (G__19514) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19510.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.footer,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq19511){
var G__19512 = cljs.core.first(seq19511);
var seq19511__$1 = cljs.core.next(seq19511);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__19512,seq19511__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args19515 = [];
var len__7479__auto___20099 = arguments.length;
var i__7480__auto___20100 = (0);
while(true){
if((i__7480__auto___20100 < len__7479__auto___20099)){
args19515.push((arguments[i__7480__auto___20100]));

var G__20101 = (i__7480__auto___20100 + (1));
i__7480__auto___20100 = G__20101;
continue;
} else {
}
break;
}

var G__19519 = args19515.length;
switch (G__19519) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19515.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.form,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq19516){
var G__19517 = cljs.core.first(seq19516);
var seq19516__$1 = cljs.core.next(seq19516);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__19517,seq19516__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args19520 = [];
var len__7479__auto___20103 = arguments.length;
var i__7480__auto___20104 = (0);
while(true){
if((i__7480__auto___20104 < len__7479__auto___20103)){
args19520.push((arguments[i__7480__auto___20104]));

var G__20105 = (i__7480__auto___20104 + (1));
i__7480__auto___20104 = G__20105;
continue;
} else {
}
break;
}

var G__19524 = args19520.length;
switch (G__19524) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19520.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.h1,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq19521){
var G__19522 = cljs.core.first(seq19521);
var seq19521__$1 = cljs.core.next(seq19521);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__19522,seq19521__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args19525 = [];
var len__7479__auto___20107 = arguments.length;
var i__7480__auto___20108 = (0);
while(true){
if((i__7480__auto___20108 < len__7479__auto___20107)){
args19525.push((arguments[i__7480__auto___20108]));

var G__20109 = (i__7480__auto___20108 + (1));
i__7480__auto___20108 = G__20109;
continue;
} else {
}
break;
}

var G__19529 = args19525.length;
switch (G__19529) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19525.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.h2,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq19526){
var G__19527 = cljs.core.first(seq19526);
var seq19526__$1 = cljs.core.next(seq19526);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__19527,seq19526__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args19530 = [];
var len__7479__auto___20111 = arguments.length;
var i__7480__auto___20112 = (0);
while(true){
if((i__7480__auto___20112 < len__7479__auto___20111)){
args19530.push((arguments[i__7480__auto___20112]));

var G__20113 = (i__7480__auto___20112 + (1));
i__7480__auto___20112 = G__20113;
continue;
} else {
}
break;
}

var G__19534 = args19530.length;
switch (G__19534) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19530.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.h3,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq19531){
var G__19532 = cljs.core.first(seq19531);
var seq19531__$1 = cljs.core.next(seq19531);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__19532,seq19531__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args19535 = [];
var len__7479__auto___20115 = arguments.length;
var i__7480__auto___20116 = (0);
while(true){
if((i__7480__auto___20116 < len__7479__auto___20115)){
args19535.push((arguments[i__7480__auto___20116]));

var G__20117 = (i__7480__auto___20116 + (1));
i__7480__auto___20116 = G__20117;
continue;
} else {
}
break;
}

var G__19539 = args19535.length;
switch (G__19539) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19535.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.h4,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq19536){
var G__19537 = cljs.core.first(seq19536);
var seq19536__$1 = cljs.core.next(seq19536);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__19537,seq19536__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args19540 = [];
var len__7479__auto___20119 = arguments.length;
var i__7480__auto___20120 = (0);
while(true){
if((i__7480__auto___20120 < len__7479__auto___20119)){
args19540.push((arguments[i__7480__auto___20120]));

var G__20121 = (i__7480__auto___20120 + (1));
i__7480__auto___20120 = G__20121;
continue;
} else {
}
break;
}

var G__19544 = args19540.length;
switch (G__19544) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19540.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.h5,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq19541){
var G__19542 = cljs.core.first(seq19541);
var seq19541__$1 = cljs.core.next(seq19541);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__19542,seq19541__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args19545 = [];
var len__7479__auto___20123 = arguments.length;
var i__7480__auto___20124 = (0);
while(true){
if((i__7480__auto___20124 < len__7479__auto___20123)){
args19545.push((arguments[i__7480__auto___20124]));

var G__20125 = (i__7480__auto___20124 + (1));
i__7480__auto___20124 = G__20125;
continue;
} else {
}
break;
}

var G__19549 = args19545.length;
switch (G__19549) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19545.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.h6,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq19546){
var G__19547 = cljs.core.first(seq19546);
var seq19546__$1 = cljs.core.next(seq19546);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__19547,seq19546__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args19550 = [];
var len__7479__auto___20127 = arguments.length;
var i__7480__auto___20128 = (0);
while(true){
if((i__7480__auto___20128 < len__7479__auto___20127)){
args19550.push((arguments[i__7480__auto___20128]));

var G__20129 = (i__7480__auto___20128 + (1));
i__7480__auto___20128 = G__20129;
continue;
} else {
}
break;
}

var G__19554 = args19550.length;
switch (G__19554) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19550.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.head,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq19551){
var G__19552 = cljs.core.first(seq19551);
var seq19551__$1 = cljs.core.next(seq19551);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__19552,seq19551__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args19555 = [];
var len__7479__auto___20131 = arguments.length;
var i__7480__auto___20132 = (0);
while(true){
if((i__7480__auto___20132 < len__7479__auto___20131)){
args19555.push((arguments[i__7480__auto___20132]));

var G__20133 = (i__7480__auto___20132 + (1));
i__7480__auto___20132 = G__20133;
continue;
} else {
}
break;
}

var G__19559 = args19555.length;
switch (G__19559) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19555.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.header,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq19556){
var G__19557 = cljs.core.first(seq19556);
var seq19556__$1 = cljs.core.next(seq19556);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__19557,seq19556__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args19560 = [];
var len__7479__auto___20135 = arguments.length;
var i__7480__auto___20136 = (0);
while(true){
if((i__7480__auto___20136 < len__7479__auto___20135)){
args19560.push((arguments[i__7480__auto___20136]));

var G__20137 = (i__7480__auto___20136 + (1));
i__7480__auto___20136 = G__20137;
continue;
} else {
}
break;
}

var G__19564 = args19560.length;
switch (G__19564) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19560.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.hr,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq19561){
var G__19562 = cljs.core.first(seq19561);
var seq19561__$1 = cljs.core.next(seq19561);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__19562,seq19561__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args19565 = [];
var len__7479__auto___20139 = arguments.length;
var i__7480__auto___20140 = (0);
while(true){
if((i__7480__auto___20140 < len__7479__auto___20139)){
args19565.push((arguments[i__7480__auto___20140]));

var G__20141 = (i__7480__auto___20140 + (1));
i__7480__auto___20140 = G__20141;
continue;
} else {
}
break;
}

var G__19569 = args19565.length;
switch (G__19569) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19565.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.html,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq19566){
var G__19567 = cljs.core.first(seq19566);
var seq19566__$1 = cljs.core.next(seq19566);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__19567,seq19566__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args19570 = [];
var len__7479__auto___20143 = arguments.length;
var i__7480__auto___20144 = (0);
while(true){
if((i__7480__auto___20144 < len__7479__auto___20143)){
args19570.push((arguments[i__7480__auto___20144]));

var G__20145 = (i__7480__auto___20144 + (1));
i__7480__auto___20144 = G__20145;
continue;
} else {
}
break;
}

var G__19574 = args19570.length;
switch (G__19574) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19570.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.i,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq19571){
var G__19572 = cljs.core.first(seq19571);
var seq19571__$1 = cljs.core.next(seq19571);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__19572,seq19571__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args19575 = [];
var len__7479__auto___20147 = arguments.length;
var i__7480__auto___20148 = (0);
while(true){
if((i__7480__auto___20148 < len__7479__auto___20147)){
args19575.push((arguments[i__7480__auto___20148]));

var G__20149 = (i__7480__auto___20148 + (1));
i__7480__auto___20148 = G__20149;
continue;
} else {
}
break;
}

var G__19579 = args19575.length;
switch (G__19579) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19575.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.iframe,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq19576){
var G__19577 = cljs.core.first(seq19576);
var seq19576__$1 = cljs.core.next(seq19576);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__19577,seq19576__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args19580 = [];
var len__7479__auto___20151 = arguments.length;
var i__7480__auto___20152 = (0);
while(true){
if((i__7480__auto___20152 < len__7479__auto___20151)){
args19580.push((arguments[i__7480__auto___20152]));

var G__20153 = (i__7480__auto___20152 + (1));
i__7480__auto___20152 = G__20153;
continue;
} else {
}
break;
}

var G__19584 = args19580.length;
switch (G__19584) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19580.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.img,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq19581){
var G__19582 = cljs.core.first(seq19581);
var seq19581__$1 = cljs.core.next(seq19581);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__19582,seq19581__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args19585 = [];
var len__7479__auto___20155 = arguments.length;
var i__7480__auto___20156 = (0);
while(true){
if((i__7480__auto___20156 < len__7479__auto___20155)){
args19585.push((arguments[i__7480__auto___20156]));

var G__20157 = (i__7480__auto___20156 + (1));
i__7480__auto___20156 = G__20157;
continue;
} else {
}
break;
}

var G__19589 = args19585.length;
switch (G__19589) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19585.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.ins,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq19586){
var G__19587 = cljs.core.first(seq19586);
var seq19586__$1 = cljs.core.next(seq19586);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__19587,seq19586__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args19590 = [];
var len__7479__auto___20159 = arguments.length;
var i__7480__auto___20160 = (0);
while(true){
if((i__7480__auto___20160 < len__7479__auto___20159)){
args19590.push((arguments[i__7480__auto___20160]));

var G__20161 = (i__7480__auto___20160 + (1));
i__7480__auto___20160 = G__20161;
continue;
} else {
}
break;
}

var G__19594 = args19590.length;
switch (G__19594) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19590.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.kbd,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq19591){
var G__19592 = cljs.core.first(seq19591);
var seq19591__$1 = cljs.core.next(seq19591);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__19592,seq19591__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args19595 = [];
var len__7479__auto___20163 = arguments.length;
var i__7480__auto___20164 = (0);
while(true){
if((i__7480__auto___20164 < len__7479__auto___20163)){
args19595.push((arguments[i__7480__auto___20164]));

var G__20165 = (i__7480__auto___20164 + (1));
i__7480__auto___20164 = G__20165;
continue;
} else {
}
break;
}

var G__19599 = args19595.length;
switch (G__19599) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19595.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.keygen,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq19596){
var G__19597 = cljs.core.first(seq19596);
var seq19596__$1 = cljs.core.next(seq19596);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__19597,seq19596__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args19600 = [];
var len__7479__auto___20167 = arguments.length;
var i__7480__auto___20168 = (0);
while(true){
if((i__7480__auto___20168 < len__7479__auto___20167)){
args19600.push((arguments[i__7480__auto___20168]));

var G__20169 = (i__7480__auto___20168 + (1));
i__7480__auto___20168 = G__20169;
continue;
} else {
}
break;
}

var G__19604 = args19600.length;
switch (G__19604) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19600.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.label,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq19601){
var G__19602 = cljs.core.first(seq19601);
var seq19601__$1 = cljs.core.next(seq19601);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__19602,seq19601__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args19605 = [];
var len__7479__auto___20171 = arguments.length;
var i__7480__auto___20172 = (0);
while(true){
if((i__7480__auto___20172 < len__7479__auto___20171)){
args19605.push((arguments[i__7480__auto___20172]));

var G__20173 = (i__7480__auto___20172 + (1));
i__7480__auto___20172 = G__20173;
continue;
} else {
}
break;
}

var G__19609 = args19605.length;
switch (G__19609) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19605.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.legend,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq19606){
var G__19607 = cljs.core.first(seq19606);
var seq19606__$1 = cljs.core.next(seq19606);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__19607,seq19606__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args19610 = [];
var len__7479__auto___20175 = arguments.length;
var i__7480__auto___20176 = (0);
while(true){
if((i__7480__auto___20176 < len__7479__auto___20175)){
args19610.push((arguments[i__7480__auto___20176]));

var G__20177 = (i__7480__auto___20176 + (1));
i__7480__auto___20176 = G__20177;
continue;
} else {
}
break;
}

var G__19614 = args19610.length;
switch (G__19614) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19610.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.li,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq19611){
var G__19612 = cljs.core.first(seq19611);
var seq19611__$1 = cljs.core.next(seq19611);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__19612,seq19611__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args19615 = [];
var len__7479__auto___20179 = arguments.length;
var i__7480__auto___20180 = (0);
while(true){
if((i__7480__auto___20180 < len__7479__auto___20179)){
args19615.push((arguments[i__7480__auto___20180]));

var G__20181 = (i__7480__auto___20180 + (1));
i__7480__auto___20180 = G__20181;
continue;
} else {
}
break;
}

var G__19619 = args19615.length;
switch (G__19619) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19615.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.link,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq19616){
var G__19617 = cljs.core.first(seq19616);
var seq19616__$1 = cljs.core.next(seq19616);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__19617,seq19616__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args19620 = [];
var len__7479__auto___20183 = arguments.length;
var i__7480__auto___20184 = (0);
while(true){
if((i__7480__auto___20184 < len__7479__auto___20183)){
args19620.push((arguments[i__7480__auto___20184]));

var G__20185 = (i__7480__auto___20184 + (1));
i__7480__auto___20184 = G__20185;
continue;
} else {
}
break;
}

var G__19624 = args19620.length;
switch (G__19624) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19620.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.main,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq19621){
var G__19622 = cljs.core.first(seq19621);
var seq19621__$1 = cljs.core.next(seq19621);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__19622,seq19621__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args19625 = [];
var len__7479__auto___20187 = arguments.length;
var i__7480__auto___20188 = (0);
while(true){
if((i__7480__auto___20188 < len__7479__auto___20187)){
args19625.push((arguments[i__7480__auto___20188]));

var G__20189 = (i__7480__auto___20188 + (1));
i__7480__auto___20188 = G__20189;
continue;
} else {
}
break;
}

var G__19629 = args19625.length;
switch (G__19629) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19625.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.map,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq19626){
var G__19627 = cljs.core.first(seq19626);
var seq19626__$1 = cljs.core.next(seq19626);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__19627,seq19626__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args19630 = [];
var len__7479__auto___20191 = arguments.length;
var i__7480__auto___20192 = (0);
while(true){
if((i__7480__auto___20192 < len__7479__auto___20191)){
args19630.push((arguments[i__7480__auto___20192]));

var G__20193 = (i__7480__auto___20192 + (1));
i__7480__auto___20192 = G__20193;
continue;
} else {
}
break;
}

var G__19634 = args19630.length;
switch (G__19634) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19630.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.mark,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq19631){
var G__19632 = cljs.core.first(seq19631);
var seq19631__$1 = cljs.core.next(seq19631);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__19632,seq19631__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.marquee = (function om_tools$dom$marquee(var_args){
var args19635 = [];
var len__7479__auto___20195 = arguments.length;
var i__7480__auto___20196 = (0);
while(true){
if((i__7480__auto___20196 < len__7479__auto___20195)){
args19635.push((arguments[i__7480__auto___20196]));

var G__20197 = (i__7480__auto___20196 + (1));
i__7480__auto___20196 = G__20197;
continue;
} else {
}
break;
}

var G__19639 = args19635.length;
switch (G__19639) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19635.slice((1)),(0),null));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.marquee,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq19636){
var G__19637 = cljs.core.first(seq19636);
var seq19636__$1 = cljs.core.next(seq19636);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__19637,seq19636__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args19640 = [];
var len__7479__auto___20199 = arguments.length;
var i__7480__auto___20200 = (0);
while(true){
if((i__7480__auto___20200 < len__7479__auto___20199)){
args19640.push((arguments[i__7480__auto___20200]));

var G__20201 = (i__7480__auto___20200 + (1));
i__7480__auto___20200 = G__20201;
continue;
} else {
}
break;
}

var G__19644 = args19640.length;
switch (G__19644) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19640.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.menu,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq19641){
var G__19642 = cljs.core.first(seq19641);
var seq19641__$1 = cljs.core.next(seq19641);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__19642,seq19641__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args19645 = [];
var len__7479__auto___20203 = arguments.length;
var i__7480__auto___20204 = (0);
while(true){
if((i__7480__auto___20204 < len__7479__auto___20203)){
args19645.push((arguments[i__7480__auto___20204]));

var G__20205 = (i__7480__auto___20204 + (1));
i__7480__auto___20204 = G__20205;
continue;
} else {
}
break;
}

var G__19649 = args19645.length;
switch (G__19649) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19645.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.menuitem,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq19646){
var G__19647 = cljs.core.first(seq19646);
var seq19646__$1 = cljs.core.next(seq19646);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__19647,seq19646__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args19650 = [];
var len__7479__auto___20207 = arguments.length;
var i__7480__auto___20208 = (0);
while(true){
if((i__7480__auto___20208 < len__7479__auto___20207)){
args19650.push((arguments[i__7480__auto___20208]));

var G__20209 = (i__7480__auto___20208 + (1));
i__7480__auto___20208 = G__20209;
continue;
} else {
}
break;
}

var G__19654 = args19650.length;
switch (G__19654) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19650.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.meta,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq19651){
var G__19652 = cljs.core.first(seq19651);
var seq19651__$1 = cljs.core.next(seq19651);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__19652,seq19651__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args19655 = [];
var len__7479__auto___20211 = arguments.length;
var i__7480__auto___20212 = (0);
while(true){
if((i__7480__auto___20212 < len__7479__auto___20211)){
args19655.push((arguments[i__7480__auto___20212]));

var G__20213 = (i__7480__auto___20212 + (1));
i__7480__auto___20212 = G__20213;
continue;
} else {
}
break;
}

var G__19659 = args19655.length;
switch (G__19659) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19655.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.meter,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq19656){
var G__19657 = cljs.core.first(seq19656);
var seq19656__$1 = cljs.core.next(seq19656);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__19657,seq19656__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args19660 = [];
var len__7479__auto___20215 = arguments.length;
var i__7480__auto___20216 = (0);
while(true){
if((i__7480__auto___20216 < len__7479__auto___20215)){
args19660.push((arguments[i__7480__auto___20216]));

var G__20217 = (i__7480__auto___20216 + (1));
i__7480__auto___20216 = G__20217;
continue;
} else {
}
break;
}

var G__19664 = args19660.length;
switch (G__19664) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19660.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.nav,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq19661){
var G__19662 = cljs.core.first(seq19661);
var seq19661__$1 = cljs.core.next(seq19661);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__19662,seq19661__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args19665 = [];
var len__7479__auto___20219 = arguments.length;
var i__7480__auto___20220 = (0);
while(true){
if((i__7480__auto___20220 < len__7479__auto___20219)){
args19665.push((arguments[i__7480__auto___20220]));

var G__20221 = (i__7480__auto___20220 + (1));
i__7480__auto___20220 = G__20221;
continue;
} else {
}
break;
}

var G__19669 = args19665.length;
switch (G__19669) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19665.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.noscript,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq19666){
var G__19667 = cljs.core.first(seq19666);
var seq19666__$1 = cljs.core.next(seq19666);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__19667,seq19666__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args19670 = [];
var len__7479__auto___20223 = arguments.length;
var i__7480__auto___20224 = (0);
while(true){
if((i__7480__auto___20224 < len__7479__auto___20223)){
args19670.push((arguments[i__7480__auto___20224]));

var G__20225 = (i__7480__auto___20224 + (1));
i__7480__auto___20224 = G__20225;
continue;
} else {
}
break;
}

var G__19674 = args19670.length;
switch (G__19674) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19670.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.object,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq19671){
var G__19672 = cljs.core.first(seq19671);
var seq19671__$1 = cljs.core.next(seq19671);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__19672,seq19671__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args19675 = [];
var len__7479__auto___20227 = arguments.length;
var i__7480__auto___20228 = (0);
while(true){
if((i__7480__auto___20228 < len__7479__auto___20227)){
args19675.push((arguments[i__7480__auto___20228]));

var G__20229 = (i__7480__auto___20228 + (1));
i__7480__auto___20228 = G__20229;
continue;
} else {
}
break;
}

var G__19679 = args19675.length;
switch (G__19679) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19675.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.ol,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq19676){
var G__19677 = cljs.core.first(seq19676);
var seq19676__$1 = cljs.core.next(seq19676);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__19677,seq19676__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args19680 = [];
var len__7479__auto___20231 = arguments.length;
var i__7480__auto___20232 = (0);
while(true){
if((i__7480__auto___20232 < len__7479__auto___20231)){
args19680.push((arguments[i__7480__auto___20232]));

var G__20233 = (i__7480__auto___20232 + (1));
i__7480__auto___20232 = G__20233;
continue;
} else {
}
break;
}

var G__19684 = args19680.length;
switch (G__19684) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19680.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.optgroup,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq19681){
var G__19682 = cljs.core.first(seq19681);
var seq19681__$1 = cljs.core.next(seq19681);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__19682,seq19681__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args19685 = [];
var len__7479__auto___20235 = arguments.length;
var i__7480__auto___20236 = (0);
while(true){
if((i__7480__auto___20236 < len__7479__auto___20235)){
args19685.push((arguments[i__7480__auto___20236]));

var G__20237 = (i__7480__auto___20236 + (1));
i__7480__auto___20236 = G__20237;
continue;
} else {
}
break;
}

var G__19689 = args19685.length;
switch (G__19689) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19685.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.output,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq19686){
var G__19687 = cljs.core.first(seq19686);
var seq19686__$1 = cljs.core.next(seq19686);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__19687,seq19686__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args19690 = [];
var len__7479__auto___20239 = arguments.length;
var i__7480__auto___20240 = (0);
while(true){
if((i__7480__auto___20240 < len__7479__auto___20239)){
args19690.push((arguments[i__7480__auto___20240]));

var G__20241 = (i__7480__auto___20240 + (1));
i__7480__auto___20240 = G__20241;
continue;
} else {
}
break;
}

var G__19694 = args19690.length;
switch (G__19694) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19690.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.p,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq19691){
var G__19692 = cljs.core.first(seq19691);
var seq19691__$1 = cljs.core.next(seq19691);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__19692,seq19691__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args19695 = [];
var len__7479__auto___20243 = arguments.length;
var i__7480__auto___20244 = (0);
while(true){
if((i__7480__auto___20244 < len__7479__auto___20243)){
args19695.push((arguments[i__7480__auto___20244]));

var G__20245 = (i__7480__auto___20244 + (1));
i__7480__auto___20244 = G__20245;
continue;
} else {
}
break;
}

var G__19699 = args19695.length;
switch (G__19699) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19695.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.param,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq19696){
var G__19697 = cljs.core.first(seq19696);
var seq19696__$1 = cljs.core.next(seq19696);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__19697,seq19696__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args19700 = [];
var len__7479__auto___20247 = arguments.length;
var i__7480__auto___20248 = (0);
while(true){
if((i__7480__auto___20248 < len__7479__auto___20247)){
args19700.push((arguments[i__7480__auto___20248]));

var G__20249 = (i__7480__auto___20248 + (1));
i__7480__auto___20248 = G__20249;
continue;
} else {
}
break;
}

var G__19704 = args19700.length;
switch (G__19704) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19700.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.pre,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq19701){
var G__19702 = cljs.core.first(seq19701);
var seq19701__$1 = cljs.core.next(seq19701);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__19702,seq19701__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args19705 = [];
var len__7479__auto___20251 = arguments.length;
var i__7480__auto___20252 = (0);
while(true){
if((i__7480__auto___20252 < len__7479__auto___20251)){
args19705.push((arguments[i__7480__auto___20252]));

var G__20253 = (i__7480__auto___20252 + (1));
i__7480__auto___20252 = G__20253;
continue;
} else {
}
break;
}

var G__19709 = args19705.length;
switch (G__19709) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19705.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.progress,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq19706){
var G__19707 = cljs.core.first(seq19706);
var seq19706__$1 = cljs.core.next(seq19706);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__19707,seq19706__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args19710 = [];
var len__7479__auto___20255 = arguments.length;
var i__7480__auto___20256 = (0);
while(true){
if((i__7480__auto___20256 < len__7479__auto___20255)){
args19710.push((arguments[i__7480__auto___20256]));

var G__20257 = (i__7480__auto___20256 + (1));
i__7480__auto___20256 = G__20257;
continue;
} else {
}
break;
}

var G__19714 = args19710.length;
switch (G__19714) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19710.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.q,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq19711){
var G__19712 = cljs.core.first(seq19711);
var seq19711__$1 = cljs.core.next(seq19711);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__19712,seq19711__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args19715 = [];
var len__7479__auto___20259 = arguments.length;
var i__7480__auto___20260 = (0);
while(true){
if((i__7480__auto___20260 < len__7479__auto___20259)){
args19715.push((arguments[i__7480__auto___20260]));

var G__20261 = (i__7480__auto___20260 + (1));
i__7480__auto___20260 = G__20261;
continue;
} else {
}
break;
}

var G__19719 = args19715.length;
switch (G__19719) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19715.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.rp,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq19716){
var G__19717 = cljs.core.first(seq19716);
var seq19716__$1 = cljs.core.next(seq19716);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__19717,seq19716__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args19720 = [];
var len__7479__auto___20263 = arguments.length;
var i__7480__auto___20264 = (0);
while(true){
if((i__7480__auto___20264 < len__7479__auto___20263)){
args19720.push((arguments[i__7480__auto___20264]));

var G__20265 = (i__7480__auto___20264 + (1));
i__7480__auto___20264 = G__20265;
continue;
} else {
}
break;
}

var G__19724 = args19720.length;
switch (G__19724) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19720.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.rt,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq19721){
var G__19722 = cljs.core.first(seq19721);
var seq19721__$1 = cljs.core.next(seq19721);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__19722,seq19721__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args19725 = [];
var len__7479__auto___20267 = arguments.length;
var i__7480__auto___20268 = (0);
while(true){
if((i__7480__auto___20268 < len__7479__auto___20267)){
args19725.push((arguments[i__7480__auto___20268]));

var G__20269 = (i__7480__auto___20268 + (1));
i__7480__auto___20268 = G__20269;
continue;
} else {
}
break;
}

var G__19729 = args19725.length;
switch (G__19729) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19725.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.ruby,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq19726){
var G__19727 = cljs.core.first(seq19726);
var seq19726__$1 = cljs.core.next(seq19726);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__19727,seq19726__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args19730 = [];
var len__7479__auto___20271 = arguments.length;
var i__7480__auto___20272 = (0);
while(true){
if((i__7480__auto___20272 < len__7479__auto___20271)){
args19730.push((arguments[i__7480__auto___20272]));

var G__20273 = (i__7480__auto___20272 + (1));
i__7480__auto___20272 = G__20273;
continue;
} else {
}
break;
}

var G__19734 = args19730.length;
switch (G__19734) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19730.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.s,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq19731){
var G__19732 = cljs.core.first(seq19731);
var seq19731__$1 = cljs.core.next(seq19731);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__19732,seq19731__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args19735 = [];
var len__7479__auto___20275 = arguments.length;
var i__7480__auto___20276 = (0);
while(true){
if((i__7480__auto___20276 < len__7479__auto___20275)){
args19735.push((arguments[i__7480__auto___20276]));

var G__20277 = (i__7480__auto___20276 + (1));
i__7480__auto___20276 = G__20277;
continue;
} else {
}
break;
}

var G__19739 = args19735.length;
switch (G__19739) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19735.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.samp,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq19736){
var G__19737 = cljs.core.first(seq19736);
var seq19736__$1 = cljs.core.next(seq19736);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__19737,seq19736__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args19740 = [];
var len__7479__auto___20279 = arguments.length;
var i__7480__auto___20280 = (0);
while(true){
if((i__7480__auto___20280 < len__7479__auto___20279)){
args19740.push((arguments[i__7480__auto___20280]));

var G__20281 = (i__7480__auto___20280 + (1));
i__7480__auto___20280 = G__20281;
continue;
} else {
}
break;
}

var G__19744 = args19740.length;
switch (G__19744) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19740.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.script,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq19741){
var G__19742 = cljs.core.first(seq19741);
var seq19741__$1 = cljs.core.next(seq19741);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__19742,seq19741__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args19745 = [];
var len__7479__auto___20283 = arguments.length;
var i__7480__auto___20284 = (0);
while(true){
if((i__7480__auto___20284 < len__7479__auto___20283)){
args19745.push((arguments[i__7480__auto___20284]));

var G__20285 = (i__7480__auto___20284 + (1));
i__7480__auto___20284 = G__20285;
continue;
} else {
}
break;
}

var G__19749 = args19745.length;
switch (G__19749) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19745.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.section,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq19746){
var G__19747 = cljs.core.first(seq19746);
var seq19746__$1 = cljs.core.next(seq19746);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__19747,seq19746__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.select = (function om_tools$dom$select(var_args){
var args19750 = [];
var len__7479__auto___20287 = arguments.length;
var i__7480__auto___20288 = (0);
while(true){
if((i__7480__auto___20288 < len__7479__auto___20287)){
args19750.push((arguments[i__7480__auto___20288]));

var G__20289 = (i__7480__auto___20288 + (1));
i__7480__auto___20288 = G__20289;
continue;
} else {
}
break;
}

var G__19754 = args19750.length;
switch (G__19754) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19750.slice((1)),(0),null));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.select,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq19751){
var G__19752 = cljs.core.first(seq19751);
var seq19751__$1 = cljs.core.next(seq19751);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__19752,seq19751__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args19755 = [];
var len__7479__auto___20291 = arguments.length;
var i__7480__auto___20292 = (0);
while(true){
if((i__7480__auto___20292 < len__7479__auto___20291)){
args19755.push((arguments[i__7480__auto___20292]));

var G__20293 = (i__7480__auto___20292 + (1));
i__7480__auto___20292 = G__20293;
continue;
} else {
}
break;
}

var G__19759 = args19755.length;
switch (G__19759) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19755.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.small,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq19756){
var G__19757 = cljs.core.first(seq19756);
var seq19756__$1 = cljs.core.next(seq19756);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__19757,seq19756__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args19760 = [];
var len__7479__auto___20295 = arguments.length;
var i__7480__auto___20296 = (0);
while(true){
if((i__7480__auto___20296 < len__7479__auto___20295)){
args19760.push((arguments[i__7480__auto___20296]));

var G__20297 = (i__7480__auto___20296 + (1));
i__7480__auto___20296 = G__20297;
continue;
} else {
}
break;
}

var G__19764 = args19760.length;
switch (G__19764) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19760.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.source,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq19761){
var G__19762 = cljs.core.first(seq19761);
var seq19761__$1 = cljs.core.next(seq19761);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__19762,seq19761__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args19765 = [];
var len__7479__auto___20299 = arguments.length;
var i__7480__auto___20300 = (0);
while(true){
if((i__7480__auto___20300 < len__7479__auto___20299)){
args19765.push((arguments[i__7480__auto___20300]));

var G__20301 = (i__7480__auto___20300 + (1));
i__7480__auto___20300 = G__20301;
continue;
} else {
}
break;
}

var G__19769 = args19765.length;
switch (G__19769) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19765.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.span,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq19766){
var G__19767 = cljs.core.first(seq19766);
var seq19766__$1 = cljs.core.next(seq19766);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__19767,seq19766__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args19770 = [];
var len__7479__auto___20303 = arguments.length;
var i__7480__auto___20304 = (0);
while(true){
if((i__7480__auto___20304 < len__7479__auto___20303)){
args19770.push((arguments[i__7480__auto___20304]));

var G__20305 = (i__7480__auto___20304 + (1));
i__7480__auto___20304 = G__20305;
continue;
} else {
}
break;
}

var G__19774 = args19770.length;
switch (G__19774) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19770.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.strong,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq19771){
var G__19772 = cljs.core.first(seq19771);
var seq19771__$1 = cljs.core.next(seq19771);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__19772,seq19771__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args19775 = [];
var len__7479__auto___20307 = arguments.length;
var i__7480__auto___20308 = (0);
while(true){
if((i__7480__auto___20308 < len__7479__auto___20307)){
args19775.push((arguments[i__7480__auto___20308]));

var G__20309 = (i__7480__auto___20308 + (1));
i__7480__auto___20308 = G__20309;
continue;
} else {
}
break;
}

var G__19779 = args19775.length;
switch (G__19779) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19775.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.style,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq19776){
var G__19777 = cljs.core.first(seq19776);
var seq19776__$1 = cljs.core.next(seq19776);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__19777,seq19776__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args19780 = [];
var len__7479__auto___20311 = arguments.length;
var i__7480__auto___20312 = (0);
while(true){
if((i__7480__auto___20312 < len__7479__auto___20311)){
args19780.push((arguments[i__7480__auto___20312]));

var G__20313 = (i__7480__auto___20312 + (1));
i__7480__auto___20312 = G__20313;
continue;
} else {
}
break;
}

var G__19784 = args19780.length;
switch (G__19784) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19780.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.sub,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq19781){
var G__19782 = cljs.core.first(seq19781);
var seq19781__$1 = cljs.core.next(seq19781);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__19782,seq19781__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args19785 = [];
var len__7479__auto___20315 = arguments.length;
var i__7480__auto___20316 = (0);
while(true){
if((i__7480__auto___20316 < len__7479__auto___20315)){
args19785.push((arguments[i__7480__auto___20316]));

var G__20317 = (i__7480__auto___20316 + (1));
i__7480__auto___20316 = G__20317;
continue;
} else {
}
break;
}

var G__19789 = args19785.length;
switch (G__19789) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19785.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.summary,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq19786){
var G__19787 = cljs.core.first(seq19786);
var seq19786__$1 = cljs.core.next(seq19786);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__19787,seq19786__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args19790 = [];
var len__7479__auto___20319 = arguments.length;
var i__7480__auto___20320 = (0);
while(true){
if((i__7480__auto___20320 < len__7479__auto___20319)){
args19790.push((arguments[i__7480__auto___20320]));

var G__20321 = (i__7480__auto___20320 + (1));
i__7480__auto___20320 = G__20321;
continue;
} else {
}
break;
}

var G__19794 = args19790.length;
switch (G__19794) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19790.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.sup,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq19791){
var G__19792 = cljs.core.first(seq19791);
var seq19791__$1 = cljs.core.next(seq19791);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__19792,seq19791__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args19795 = [];
var len__7479__auto___20323 = arguments.length;
var i__7480__auto___20324 = (0);
while(true){
if((i__7480__auto___20324 < len__7479__auto___20323)){
args19795.push((arguments[i__7480__auto___20324]));

var G__20325 = (i__7480__auto___20324 + (1));
i__7480__auto___20324 = G__20325;
continue;
} else {
}
break;
}

var G__19799 = args19795.length;
switch (G__19799) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19795.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.table,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq19796){
var G__19797 = cljs.core.first(seq19796);
var seq19796__$1 = cljs.core.next(seq19796);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__19797,seq19796__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args19800 = [];
var len__7479__auto___20327 = arguments.length;
var i__7480__auto___20328 = (0);
while(true){
if((i__7480__auto___20328 < len__7479__auto___20327)){
args19800.push((arguments[i__7480__auto___20328]));

var G__20329 = (i__7480__auto___20328 + (1));
i__7480__auto___20328 = G__20329;
continue;
} else {
}
break;
}

var G__19804 = args19800.length;
switch (G__19804) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19800.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.tbody,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq19801){
var G__19802 = cljs.core.first(seq19801);
var seq19801__$1 = cljs.core.next(seq19801);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__19802,seq19801__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args19805 = [];
var len__7479__auto___20331 = arguments.length;
var i__7480__auto___20332 = (0);
while(true){
if((i__7480__auto___20332 < len__7479__auto___20331)){
args19805.push((arguments[i__7480__auto___20332]));

var G__20333 = (i__7480__auto___20332 + (1));
i__7480__auto___20332 = G__20333;
continue;
} else {
}
break;
}

var G__19809 = args19805.length;
switch (G__19809) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19805.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.td,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq19806){
var G__19807 = cljs.core.first(seq19806);
var seq19806__$1 = cljs.core.next(seq19806);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__19807,seq19806__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args19810 = [];
var len__7479__auto___20335 = arguments.length;
var i__7480__auto___20336 = (0);
while(true){
if((i__7480__auto___20336 < len__7479__auto___20335)){
args19810.push((arguments[i__7480__auto___20336]));

var G__20337 = (i__7480__auto___20336 + (1));
i__7480__auto___20336 = G__20337;
continue;
} else {
}
break;
}

var G__19814 = args19810.length;
switch (G__19814) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19810.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.tfoot,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq19811){
var G__19812 = cljs.core.first(seq19811);
var seq19811__$1 = cljs.core.next(seq19811);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__19812,seq19811__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args19815 = [];
var len__7479__auto___20339 = arguments.length;
var i__7480__auto___20340 = (0);
while(true){
if((i__7480__auto___20340 < len__7479__auto___20339)){
args19815.push((arguments[i__7480__auto___20340]));

var G__20341 = (i__7480__auto___20340 + (1));
i__7480__auto___20340 = G__20341;
continue;
} else {
}
break;
}

var G__19819 = args19815.length;
switch (G__19819) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19815.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.th,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq19816){
var G__19817 = cljs.core.first(seq19816);
var seq19816__$1 = cljs.core.next(seq19816);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__19817,seq19816__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args19820 = [];
var len__7479__auto___20343 = arguments.length;
var i__7480__auto___20344 = (0);
while(true){
if((i__7480__auto___20344 < len__7479__auto___20343)){
args19820.push((arguments[i__7480__auto___20344]));

var G__20345 = (i__7480__auto___20344 + (1));
i__7480__auto___20344 = G__20345;
continue;
} else {
}
break;
}

var G__19824 = args19820.length;
switch (G__19824) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19820.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.thead,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq19821){
var G__19822 = cljs.core.first(seq19821);
var seq19821__$1 = cljs.core.next(seq19821);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__19822,seq19821__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args19825 = [];
var len__7479__auto___20347 = arguments.length;
var i__7480__auto___20348 = (0);
while(true){
if((i__7480__auto___20348 < len__7479__auto___20347)){
args19825.push((arguments[i__7480__auto___20348]));

var G__20349 = (i__7480__auto___20348 + (1));
i__7480__auto___20348 = G__20349;
continue;
} else {
}
break;
}

var G__19829 = args19825.length;
switch (G__19829) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19825.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.time,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq19826){
var G__19827 = cljs.core.first(seq19826);
var seq19826__$1 = cljs.core.next(seq19826);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__19827,seq19826__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args19830 = [];
var len__7479__auto___20351 = arguments.length;
var i__7480__auto___20352 = (0);
while(true){
if((i__7480__auto___20352 < len__7479__auto___20351)){
args19830.push((arguments[i__7480__auto___20352]));

var G__20353 = (i__7480__auto___20352 + (1));
i__7480__auto___20352 = G__20353;
continue;
} else {
}
break;
}

var G__19834 = args19830.length;
switch (G__19834) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19830.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.title,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq19831){
var G__19832 = cljs.core.first(seq19831);
var seq19831__$1 = cljs.core.next(seq19831);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__19832,seq19831__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args19835 = [];
var len__7479__auto___20355 = arguments.length;
var i__7480__auto___20356 = (0);
while(true){
if((i__7480__auto___20356 < len__7479__auto___20355)){
args19835.push((arguments[i__7480__auto___20356]));

var G__20357 = (i__7480__auto___20356 + (1));
i__7480__auto___20356 = G__20357;
continue;
} else {
}
break;
}

var G__19839 = args19835.length;
switch (G__19839) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19835.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.tr,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq19836){
var G__19837 = cljs.core.first(seq19836);
var seq19836__$1 = cljs.core.next(seq19836);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__19837,seq19836__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args19840 = [];
var len__7479__auto___20359 = arguments.length;
var i__7480__auto___20360 = (0);
while(true){
if((i__7480__auto___20360 < len__7479__auto___20359)){
args19840.push((arguments[i__7480__auto___20360]));

var G__20361 = (i__7480__auto___20360 + (1));
i__7480__auto___20360 = G__20361;
continue;
} else {
}
break;
}

var G__19844 = args19840.length;
switch (G__19844) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19840.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.track,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq19841){
var G__19842 = cljs.core.first(seq19841);
var seq19841__$1 = cljs.core.next(seq19841);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__19842,seq19841__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args19845 = [];
var len__7479__auto___20363 = arguments.length;
var i__7480__auto___20364 = (0);
while(true){
if((i__7480__auto___20364 < len__7479__auto___20363)){
args19845.push((arguments[i__7480__auto___20364]));

var G__20365 = (i__7480__auto___20364 + (1));
i__7480__auto___20364 = G__20365;
continue;
} else {
}
break;
}

var G__19849 = args19845.length;
switch (G__19849) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19845.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.u,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq19846){
var G__19847 = cljs.core.first(seq19846);
var seq19846__$1 = cljs.core.next(seq19846);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__19847,seq19846__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args19850 = [];
var len__7479__auto___20367 = arguments.length;
var i__7480__auto___20368 = (0);
while(true){
if((i__7480__auto___20368 < len__7479__auto___20367)){
args19850.push((arguments[i__7480__auto___20368]));

var G__20369 = (i__7480__auto___20368 + (1));
i__7480__auto___20368 = G__20369;
continue;
} else {
}
break;
}

var G__19854 = args19850.length;
switch (G__19854) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19850.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.ul,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq19851){
var G__19852 = cljs.core.first(seq19851);
var seq19851__$1 = cljs.core.next(seq19851);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__19852,seq19851__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args19855 = [];
var len__7479__auto___20371 = arguments.length;
var i__7480__auto___20372 = (0);
while(true){
if((i__7480__auto___20372 < len__7479__auto___20371)){
args19855.push((arguments[i__7480__auto___20372]));

var G__20373 = (i__7480__auto___20372 + (1));
i__7480__auto___20372 = G__20373;
continue;
} else {
}
break;
}

var G__19859 = args19855.length;
switch (G__19859) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19855.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.var$,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq19856){
var G__19857 = cljs.core.first(seq19856);
var seq19856__$1 = cljs.core.next(seq19856);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__19857,seq19856__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args19860 = [];
var len__7479__auto___20375 = arguments.length;
var i__7480__auto___20376 = (0);
while(true){
if((i__7480__auto___20376 < len__7479__auto___20375)){
args19860.push((arguments[i__7480__auto___20376]));

var G__20377 = (i__7480__auto___20376 + (1));
i__7480__auto___20376 = G__20377;
continue;
} else {
}
break;
}

var G__19864 = args19860.length;
switch (G__19864) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19860.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.video,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq19861){
var G__19862 = cljs.core.first(seq19861);
var seq19861__$1 = cljs.core.next(seq19861);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__19862,seq19861__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args19865 = [];
var len__7479__auto___20379 = arguments.length;
var i__7480__auto___20380 = (0);
while(true){
if((i__7480__auto___20380 < len__7479__auto___20379)){
args19865.push((arguments[i__7480__auto___20380]));

var G__20381 = (i__7480__auto___20380 + (1));
i__7480__auto___20380 = G__20381;
continue;
} else {
}
break;
}

var G__19869 = args19865.length;
switch (G__19869) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19865.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.wbr,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq19866){
var G__19867 = cljs.core.first(seq19866);
var seq19866__$1 = cljs.core.next(seq19866);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__19867,seq19866__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args19870 = [];
var len__7479__auto___20383 = arguments.length;
var i__7480__auto___20384 = (0);
while(true){
if((i__7480__auto___20384 < len__7479__auto___20383)){
args19870.push((arguments[i__7480__auto___20384]));

var G__20385 = (i__7480__auto___20384 + (1));
i__7480__auto___20384 = G__20385;
continue;
} else {
}
break;
}

var G__19874 = args19870.length;
switch (G__19874) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19870.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.circle,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq19871){
var G__19872 = cljs.core.first(seq19871);
var seq19871__$1 = cljs.core.next(seq19871);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__19872,seq19871__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args19875 = [];
var len__7479__auto___20387 = arguments.length;
var i__7480__auto___20388 = (0);
while(true){
if((i__7480__auto___20388 < len__7479__auto___20387)){
args19875.push((arguments[i__7480__auto___20388]));

var G__20389 = (i__7480__auto___20388 + (1));
i__7480__auto___20388 = G__20389;
continue;
} else {
}
break;
}

var G__19879 = args19875.length;
switch (G__19879) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19875.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.ellipse,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq19876){
var G__19877 = cljs.core.first(seq19876);
var seq19876__$1 = cljs.core.next(seq19876);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__19877,seq19876__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args19880 = [];
var len__7479__auto___20391 = arguments.length;
var i__7480__auto___20392 = (0);
while(true){
if((i__7480__auto___20392 < len__7479__auto___20391)){
args19880.push((arguments[i__7480__auto___20392]));

var G__20393 = (i__7480__auto___20392 + (1));
i__7480__auto___20392 = G__20393;
continue;
} else {
}
break;
}

var G__19884 = args19880.length;
switch (G__19884) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19880.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.g,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq19881){
var G__19882 = cljs.core.first(seq19881);
var seq19881__$1 = cljs.core.next(seq19881);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__19882,seq19881__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args19885 = [];
var len__7479__auto___20395 = arguments.length;
var i__7480__auto___20396 = (0);
while(true){
if((i__7480__auto___20396 < len__7479__auto___20395)){
args19885.push((arguments[i__7480__auto___20396]));

var G__20397 = (i__7480__auto___20396 + (1));
i__7480__auto___20396 = G__20397;
continue;
} else {
}
break;
}

var G__19889 = args19885.length;
switch (G__19889) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19885.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.line,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq19886){
var G__19887 = cljs.core.first(seq19886);
var seq19886__$1 = cljs.core.next(seq19886);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__19887,seq19886__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args19890 = [];
var len__7479__auto___20399 = arguments.length;
var i__7480__auto___20400 = (0);
while(true){
if((i__7480__auto___20400 < len__7479__auto___20399)){
args19890.push((arguments[i__7480__auto___20400]));

var G__20401 = (i__7480__auto___20400 + (1));
i__7480__auto___20400 = G__20401;
continue;
} else {
}
break;
}

var G__19894 = args19890.length;
switch (G__19894) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19890.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.path,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq19891){
var G__19892 = cljs.core.first(seq19891);
var seq19891__$1 = cljs.core.next(seq19891);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__19892,seq19891__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args19895 = [];
var len__7479__auto___20403 = arguments.length;
var i__7480__auto___20404 = (0);
while(true){
if((i__7480__auto___20404 < len__7479__auto___20403)){
args19895.push((arguments[i__7480__auto___20404]));

var G__20405 = (i__7480__auto___20404 + (1));
i__7480__auto___20404 = G__20405;
continue;
} else {
}
break;
}

var G__19899 = args19895.length;
switch (G__19899) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19895.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.polyline,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq19896){
var G__19897 = cljs.core.first(seq19896);
var seq19896__$1 = cljs.core.next(seq19896);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__19897,seq19896__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args19900 = [];
var len__7479__auto___20407 = arguments.length;
var i__7480__auto___20408 = (0);
while(true){
if((i__7480__auto___20408 < len__7479__auto___20407)){
args19900.push((arguments[i__7480__auto___20408]));

var G__20409 = (i__7480__auto___20408 + (1));
i__7480__auto___20408 = G__20409;
continue;
} else {
}
break;
}

var G__19904 = args19900.length;
switch (G__19904) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19900.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.rect,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq19901){
var G__19902 = cljs.core.first(seq19901);
var seq19901__$1 = cljs.core.next(seq19901);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__19902,seq19901__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args19905 = [];
var len__7479__auto___20411 = arguments.length;
var i__7480__auto___20412 = (0);
while(true){
if((i__7480__auto___20412 < len__7479__auto___20411)){
args19905.push((arguments[i__7480__auto___20412]));

var G__20413 = (i__7480__auto___20412 + (1));
i__7480__auto___20412 = G__20413;
continue;
} else {
}
break;
}

var G__19909 = args19905.length;
switch (G__19909) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19905.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.svg,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq19906){
var G__19907 = cljs.core.first(seq19906);
var seq19906__$1 = cljs.core.next(seq19906);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__19907,seq19906__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args19910 = [];
var len__7479__auto___20415 = arguments.length;
var i__7480__auto___20416 = (0);
while(true){
if((i__7480__auto___20416 < len__7479__auto___20415)){
args19910.push((arguments[i__7480__auto___20416]));

var G__20417 = (i__7480__auto___20416 + (1));
i__7480__auto___20416 = G__20417;
continue;
} else {
}
break;
}

var G__19914 = args19910.length;
switch (G__19914) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19910.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.text,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq19911){
var G__19912 = cljs.core.first(seq19911);
var seq19911__$1 = cljs.core.next(seq19911);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__19912,seq19911__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args19915 = [];
var len__7479__auto___20419 = arguments.length;
var i__7480__auto___20420 = (0);
while(true){
if((i__7480__auto___20420 < len__7479__auto___20419)){
args19915.push((arguments[i__7480__auto___20420]));

var G__20421 = (i__7480__auto___20420 + (1));
i__7480__auto___20420 = G__20421;
continue;
} else {
}
break;
}

var G__19919 = args19915.length;
switch (G__19919) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19915.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.defs,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq19916){
var G__19917 = cljs.core.first(seq19916);
var seq19916__$1 = cljs.core.next(seq19916);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__19917,seq19916__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args19920 = [];
var len__7479__auto___20423 = arguments.length;
var i__7480__auto___20424 = (0);
while(true){
if((i__7480__auto___20424 < len__7479__auto___20423)){
args19920.push((arguments[i__7480__auto___20424]));

var G__20425 = (i__7480__auto___20424 + (1));
i__7480__auto___20424 = G__20425;
continue;
} else {
}
break;
}

var G__19924 = args19920.length;
switch (G__19924) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19920.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.linearGradient,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq19921){
var G__19922 = cljs.core.first(seq19921);
var seq19921__$1 = cljs.core.next(seq19921);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__19922,seq19921__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args19925 = [];
var len__7479__auto___20427 = arguments.length;
var i__7480__auto___20428 = (0);
while(true){
if((i__7480__auto___20428 < len__7479__auto___20427)){
args19925.push((arguments[i__7480__auto___20428]));

var G__20429 = (i__7480__auto___20428 + (1));
i__7480__auto___20428 = G__20429;
continue;
} else {
}
break;
}

var G__19929 = args19925.length;
switch (G__19929) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19925.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.polygon,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq19926){
var G__19927 = cljs.core.first(seq19926);
var seq19926__$1 = cljs.core.next(seq19926);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__19927,seq19926__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args19930 = [];
var len__7479__auto___20431 = arguments.length;
var i__7480__auto___20432 = (0);
while(true){
if((i__7480__auto___20432 < len__7479__auto___20431)){
args19930.push((arguments[i__7480__auto___20432]));

var G__20433 = (i__7480__auto___20432 + (1));
i__7480__auto___20432 = G__20433;
continue;
} else {
}
break;
}

var G__19934 = args19930.length;
switch (G__19934) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19930.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.radialGradient,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq19931){
var G__19932 = cljs.core.first(seq19931);
var seq19931__$1 = cljs.core.next(seq19931);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__19932,seq19931__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args19935 = [];
var len__7479__auto___20435 = arguments.length;
var i__7480__auto___20436 = (0);
while(true){
if((i__7480__auto___20436 < len__7479__auto___20435)){
args19935.push((arguments[i__7480__auto___20436]));

var G__20437 = (i__7480__auto___20436 + (1));
i__7480__auto___20436 = G__20437;
continue;
} else {
}
break;
}

var G__19939 = args19935.length;
switch (G__19939) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19935.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.stop,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq19936){
var G__19937 = cljs.core.first(seq19936);
var seq19936__$1 = cljs.core.next(seq19936);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__19937,seq19936__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args19940 = [];
var len__7479__auto___20439 = arguments.length;
var i__7480__auto___20440 = (0);
while(true){
if((i__7480__auto___20440 < len__7479__auto___20439)){
args19940.push((arguments[i__7480__auto___20440]));

var G__20441 = (i__7480__auto___20440 + (1));
i__7480__auto___20440 = G__20441;
continue;
} else {
}
break;
}

var G__19944 = args19940.length;
switch (G__19944) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19940.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(React.DOM.tspan,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq19941){
var G__19942 = cljs.core.first(seq19941);
var seq19941__$1 = cljs.core.next(seq19941);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__19942,seq19941__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args19945 = [];
var len__7479__auto___20443 = arguments.length;
var i__7480__auto___20444 = (0);
while(true){
if((i__7480__auto___20444 < len__7479__auto___20443)){
args19945.push((arguments[i__7480__auto___20444]));

var G__20445 = (i__7480__auto___20444 + (1));
i__7480__auto___20444 = G__20445;
continue;
} else {
}
break;
}

var G__19949 = args19945.length;
switch (G__19949) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19945.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(om.dom.input,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq19946){
var G__19947 = cljs.core.first(seq19946);
var seq19946__$1 = cljs.core.next(seq19946);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__19947,seq19946__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args19950 = [];
var len__7479__auto___20447 = arguments.length;
var i__7480__auto___20448 = (0);
while(true){
if((i__7480__auto___20448 < len__7479__auto___20447)){
args19950.push((arguments[i__7480__auto___20448]));

var G__20449 = (i__7480__auto___20448 + (1));
i__7480__auto___20448 = G__20449;
continue;
} else {
}
break;
}

var G__19954 = args19950.length;
switch (G__19954) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19950.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(om.dom.textarea,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq19951){
var G__19952 = cljs.core.first(seq19951);
var seq19951__$1 = cljs.core.next(seq19951);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__19952,seq19951__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args19490 = [];
var len__7479__auto___20451 = arguments.length;
var i__7480__auto___20452 = (0);
while(true){
if((i__7480__auto___20452 < len__7479__auto___20451)){
args19490.push((arguments[i__7480__auto___20452]));

var G__20453 = (i__7480__auto___20452 + (1));
i__7480__auto___20452 = G__20453;
continue;
} else {
}
break;
}

var G__19494 = args19490.length;
switch (G__19494) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args19490.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7498__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element(om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__19298__auto__,children__19299__auto__){
return om_tools.dom.element(om.dom.option,opts__19298__auto__,children__19299__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq19491){
var G__19492 = cljs.core.first(seq19491);
var seq19491__$1 = cljs.core.next(seq19491);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__19492,seq19491__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ks);
} else {
return null;
}
});
