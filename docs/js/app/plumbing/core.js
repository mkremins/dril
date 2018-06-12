// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = cljs.core.cst$kw$plumbing$core_SLASH_missing;
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args15832 = [];
var len__7479__auto___15847 = arguments.length;
var i__7480__auto___15848 = (0);
while(true){
if((i__7480__auto___15848 < len__7479__auto___15847)){
args15832.push((arguments[i__7480__auto___15848]));

var G__15849 = (i__7480__auto___15848 + (1));
i__7480__auto___15848 = G__15849;
continue;
} else {
}
break;
}

var G__15840 = args15832.length;
switch (G__15840) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args15832.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__7498__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__15841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15841) : f.call(null,G__15841));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__15842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__15843 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15842,G__15843) : f.call(null,G__15842,G__15843));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__15844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__15845 = x1;
var G__15846 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15844,G__15845,G__15846) : f.call(null,G__15844,G__15845,G__15846));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq15833){
var G__15834 = cljs.core.first(seq15833);
var seq15833__$1 = cljs.core.next(seq15833);
var G__15835 = cljs.core.first(seq15833__$1);
var seq15833__$2 = cljs.core.next(seq15833__$1);
var G__15836 = cljs.core.first(seq15833__$2);
var seq15833__$3 = cljs.core.next(seq15833__$2);
var G__15837 = cljs.core.first(seq15833__$3);
var seq15833__$4 = cljs.core.next(seq15833__$3);
var G__15838 = cljs.core.first(seq15833__$4);
var seq15833__$5 = cljs.core.next(seq15833__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__15834,G__15835,G__15836,G__15837,G__15838,seq15833__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);

/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__15570__auto__ = (function (){var G__15868 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15868) : cljs.core.atom.call(null,G__15868));
})();
var seq__15869_15883 = cljs.core.seq(m);
var chunk__15870_15884 = null;
var count__15871_15885 = (0);
var i__15872_15886 = (0);
while(true){
if((i__15872_15886 < count__15871_15885)){
var vec__15873_15887 = chunk__15870_15884.cljs$core$IIndexed$_nth$arity$2(null,i__15872_15886);
var k_15888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15873_15887,(0),null);
var v_15889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15873_15887,(1),null);
var m15867_15890 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__15876_15891 = m_atom__15570__auto__;
var G__15877_15892 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m15867_15890,k_15888,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_15889) : f.call(null,v_15889)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15876_15891,G__15877_15892) : cljs.core.reset_BANG_.call(null,G__15876_15891,G__15877_15892));

var G__15893 = seq__15869_15883;
var G__15894 = chunk__15870_15884;
var G__15895 = count__15871_15885;
var G__15896 = (i__15872_15886 + (1));
seq__15869_15883 = G__15893;
chunk__15870_15884 = G__15894;
count__15871_15885 = G__15895;
i__15872_15886 = G__15896;
continue;
} else {
var temp__4657__auto___15897 = cljs.core.seq(seq__15869_15883);
if(temp__4657__auto___15897){
var seq__15869_15898__$1 = temp__4657__auto___15897;
if(cljs.core.chunked_seq_QMARK_(seq__15869_15898__$1)){
var c__7215__auto___15899 = cljs.core.chunk_first(seq__15869_15898__$1);
var G__15900 = cljs.core.chunk_rest(seq__15869_15898__$1);
var G__15901 = c__7215__auto___15899;
var G__15902 = cljs.core.count(c__7215__auto___15899);
var G__15903 = (0);
seq__15869_15883 = G__15900;
chunk__15870_15884 = G__15901;
count__15871_15885 = G__15902;
i__15872_15886 = G__15903;
continue;
} else {
var vec__15878_15904 = cljs.core.first(seq__15869_15898__$1);
var k_15905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15878_15904,(0),null);
var v_15906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15878_15904,(1),null);
var m15867_15907 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__15881_15908 = m_atom__15570__auto__;
var G__15882_15909 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m15867_15907,k_15905,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_15906) : f.call(null,v_15906)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15881_15908,G__15882_15909) : cljs.core.reset_BANG_.call(null,G__15881_15908,G__15882_15909));

var G__15910 = cljs.core.next(seq__15869_15898__$1);
var G__15911 = null;
var G__15912 = (0);
var G__15913 = (0);
seq__15869_15883 = G__15910;
chunk__15870_15884 = G__15911;
count__15871_15885 = G__15912;
i__15872_15886 = G__15913;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__)));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__15570__auto__ = (function (){var G__15931 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15931) : cljs.core.atom.call(null,G__15931));
})();
var seq__15932_15946 = cljs.core.seq(m);
var chunk__15933_15947 = null;
var count__15934_15948 = (0);
var i__15935_15949 = (0);
while(true){
if((i__15935_15949 < count__15934_15948)){
var vec__15936_15950 = chunk__15933_15947.cljs$core$IIndexed$_nth$arity$2(null,i__15935_15949);
var k_15951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936_15950,(0),null);
var v_15952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936_15950,(1),null);
var m15930_15953 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__15939_15954 = m_atom__15570__auto__;
var G__15940_15955 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m15930_15953,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_15951) : f.call(null,k_15951)),v_15952);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15939_15954,G__15940_15955) : cljs.core.reset_BANG_.call(null,G__15939_15954,G__15940_15955));

var G__15956 = seq__15932_15946;
var G__15957 = chunk__15933_15947;
var G__15958 = count__15934_15948;
var G__15959 = (i__15935_15949 + (1));
seq__15932_15946 = G__15956;
chunk__15933_15947 = G__15957;
count__15934_15948 = G__15958;
i__15935_15949 = G__15959;
continue;
} else {
var temp__4657__auto___15960 = cljs.core.seq(seq__15932_15946);
if(temp__4657__auto___15960){
var seq__15932_15961__$1 = temp__4657__auto___15960;
if(cljs.core.chunked_seq_QMARK_(seq__15932_15961__$1)){
var c__7215__auto___15962 = cljs.core.chunk_first(seq__15932_15961__$1);
var G__15963 = cljs.core.chunk_rest(seq__15932_15961__$1);
var G__15964 = c__7215__auto___15962;
var G__15965 = cljs.core.count(c__7215__auto___15962);
var G__15966 = (0);
seq__15932_15946 = G__15963;
chunk__15933_15947 = G__15964;
count__15934_15948 = G__15965;
i__15935_15949 = G__15966;
continue;
} else {
var vec__15941_15967 = cljs.core.first(seq__15932_15961__$1);
var k_15968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15941_15967,(0),null);
var v_15969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15941_15967,(1),null);
var m15930_15970 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__15944_15971 = m_atom__15570__auto__;
var G__15945_15972 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m15930_15970,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_15968) : f.call(null,k_15968)),v_15969);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15944_15971,G__15945_15972) : cljs.core.reset_BANG_.call(null,G__15944_15971,G__15945_15972));

var G__15973 = cljs.core.next(seq__15932_15961__$1);
var G__15974 = null;
var G__15975 = (0);
var G__15976 = (0);
seq__15932_15946 = G__15973;
chunk__15933_15947 = G__15974;
count__15934_15948 = G__15975;
i__15935_15949 = G__15976;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__)));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__15570__auto__ = (function (){var G__15988 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15988) : cljs.core.atom.call(null,G__15988));
})();
var seq__15989_15997 = cljs.core.seq(ks);
var chunk__15990_15998 = null;
var count__15991_15999 = (0);
var i__15992_16000 = (0);
while(true){
if((i__15992_16000 < count__15991_15999)){
var k_16001 = chunk__15990_15998.cljs$core$IIndexed$_nth$arity$2(null,i__15992_16000);
var m15987_16002 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__15993_16003 = m_atom__15570__auto__;
var G__15994_16004 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m15987_16002,k_16001,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_16001) : f.call(null,k_16001)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15993_16003,G__15994_16004) : cljs.core.reset_BANG_.call(null,G__15993_16003,G__15994_16004));

var G__16005 = seq__15989_15997;
var G__16006 = chunk__15990_15998;
var G__16007 = count__15991_15999;
var G__16008 = (i__15992_16000 + (1));
seq__15989_15997 = G__16005;
chunk__15990_15998 = G__16006;
count__15991_15999 = G__16007;
i__15992_16000 = G__16008;
continue;
} else {
var temp__4657__auto___16009 = cljs.core.seq(seq__15989_15997);
if(temp__4657__auto___16009){
var seq__15989_16010__$1 = temp__4657__auto___16009;
if(cljs.core.chunked_seq_QMARK_(seq__15989_16010__$1)){
var c__7215__auto___16011 = cljs.core.chunk_first(seq__15989_16010__$1);
var G__16012 = cljs.core.chunk_rest(seq__15989_16010__$1);
var G__16013 = c__7215__auto___16011;
var G__16014 = cljs.core.count(c__7215__auto___16011);
var G__16015 = (0);
seq__15989_15997 = G__16012;
chunk__15990_15998 = G__16013;
count__15991_15999 = G__16014;
i__15992_16000 = G__16015;
continue;
} else {
var k_16016 = cljs.core.first(seq__15989_16010__$1);
var m15987_16017 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__15995_16018 = m_atom__15570__auto__;
var G__15996_16019 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m15987_16017,k_16016,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_16016) : f.call(null,k_16016)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15995_16018,G__15996_16019) : cljs.core.reset_BANG_.call(null,G__15995_16018,G__15996_16019));

var G__16020 = cljs.core.next(seq__15989_16010__$1);
var G__16021 = null;
var G__16022 = (0);
var G__16023 = (0);
seq__15989_15997 = G__16020;
chunk__15990_15998 = G__16021;
count__15991_15999 = G__16022;
i__15992_16000 = G__16023;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__)));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__15570__auto__ = (function (){var G__16035 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16035) : cljs.core.atom.call(null,G__16035));
})();
var seq__16036_16044 = cljs.core.seq(vs);
var chunk__16037_16045 = null;
var count__16038_16046 = (0);
var i__16039_16047 = (0);
while(true){
if((i__16039_16047 < count__16038_16046)){
var v_16048 = chunk__16037_16045.cljs$core$IIndexed$_nth$arity$2(null,i__16039_16047);
var m16034_16049 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__16040_16050 = m_atom__15570__auto__;
var G__16041_16051 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m16034_16049,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_16048) : f.call(null,v_16048)),v_16048);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16040_16050,G__16041_16051) : cljs.core.reset_BANG_.call(null,G__16040_16050,G__16041_16051));

var G__16052 = seq__16036_16044;
var G__16053 = chunk__16037_16045;
var G__16054 = count__16038_16046;
var G__16055 = (i__16039_16047 + (1));
seq__16036_16044 = G__16052;
chunk__16037_16045 = G__16053;
count__16038_16046 = G__16054;
i__16039_16047 = G__16055;
continue;
} else {
var temp__4657__auto___16056 = cljs.core.seq(seq__16036_16044);
if(temp__4657__auto___16056){
var seq__16036_16057__$1 = temp__4657__auto___16056;
if(cljs.core.chunked_seq_QMARK_(seq__16036_16057__$1)){
var c__7215__auto___16058 = cljs.core.chunk_first(seq__16036_16057__$1);
var G__16059 = cljs.core.chunk_rest(seq__16036_16057__$1);
var G__16060 = c__7215__auto___16058;
var G__16061 = cljs.core.count(c__7215__auto___16058);
var G__16062 = (0);
seq__16036_16044 = G__16059;
chunk__16037_16045 = G__16060;
count__16038_16046 = G__16061;
i__16039_16047 = G__16062;
continue;
} else {
var v_16063 = cljs.core.first(seq__16036_16057__$1);
var m16034_16064 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__16042_16065 = m_atom__15570__auto__;
var G__16043_16066 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m16034_16064,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_16063) : f.call(null,v_16063)),v_16063);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16042_16065,G__16043_16066) : cljs.core.reset_BANG_.call(null,G__16042_16065,G__16043_16066));

var G__16067 = cljs.core.next(seq__16036_16057__$1);
var G__16068 = null;
var G__16069 = (0);
var G__16070 = (0);
seq__16036_16044 = G__16067;
chunk__16037_16045 = G__16068;
count__16038_16046 = G__16069;
i__16039_16047 = G__16070;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__)));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__16071){
var vec__16079 = p__16071;
var seq__16080 = cljs.core.seq(vec__16079);
var first__16081 = cljs.core.first(seq__16080);
var seq__16080__$1 = cljs.core.next(seq__16080);
var k = first__16081;
var ks = seq__16080__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__6392__auto__ = ks;
if(and__6392__auto__){
return plumbing$core$dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__6392__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__15570__auto__ = (function (){var G__16099 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16099) : cljs.core.atom.call(null,G__16099));
})();
var seq__16100_16114 = cljs.core.seq(x);
var chunk__16101_16115 = null;
var count__16102_16116 = (0);
var i__16103_16117 = (0);
while(true){
if((i__16103_16117 < count__16102_16116)){
var vec__16104_16118 = chunk__16101_16115.cljs$core$IIndexed$_nth$arity$2(null,i__16103_16117);
var k_16119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16104_16118,(0),null);
var v_16120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16104_16118,(1),null);
var m16098_16121 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__16107_16122 = m_atom__15570__auto__;
var G__16108_16123 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m16098_16121,((typeof k_16119 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_16119):k_16119),plumbing$core$keywordize_map(v_16120));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16107_16122,G__16108_16123) : cljs.core.reset_BANG_.call(null,G__16107_16122,G__16108_16123));

var G__16124 = seq__16100_16114;
var G__16125 = chunk__16101_16115;
var G__16126 = count__16102_16116;
var G__16127 = (i__16103_16117 + (1));
seq__16100_16114 = G__16124;
chunk__16101_16115 = G__16125;
count__16102_16116 = G__16126;
i__16103_16117 = G__16127;
continue;
} else {
var temp__4657__auto___16128 = cljs.core.seq(seq__16100_16114);
if(temp__4657__auto___16128){
var seq__16100_16129__$1 = temp__4657__auto___16128;
if(cljs.core.chunked_seq_QMARK_(seq__16100_16129__$1)){
var c__7215__auto___16130 = cljs.core.chunk_first(seq__16100_16129__$1);
var G__16131 = cljs.core.chunk_rest(seq__16100_16129__$1);
var G__16132 = c__7215__auto___16130;
var G__16133 = cljs.core.count(c__7215__auto___16130);
var G__16134 = (0);
seq__16100_16114 = G__16131;
chunk__16101_16115 = G__16132;
count__16102_16116 = G__16133;
i__16103_16117 = G__16134;
continue;
} else {
var vec__16109_16135 = cljs.core.first(seq__16100_16129__$1);
var k_16136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16109_16135,(0),null);
var v_16137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16109_16135,(1),null);
var m16098_16138 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__));
var G__16112_16139 = m_atom__15570__auto__;
var G__16113_16140 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m16098_16138,((typeof k_16136 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_16136):k_16136),plumbing$core$keywordize_map(v_16137));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16112_16139,G__16113_16140) : cljs.core.reset_BANG_.call(null,G__16112_16139,G__16113_16140));

var G__16141 = cljs.core.next(seq__16100_16129__$1);
var G__16142 = null;
var G__16143 = (0);
var G__16144 = (0);
seq__16100_16114 = G__16141;
chunk__16101_16115 = G__16142;
count__16102_16116 = G__16143;
i__16103_16117 = G__16144;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(m_atom__15570__auto__) : cljs.core.deref.call(null,m_atom__15570__auto__)));
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4655__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__15646__auto__ = temp__4655__auto__;
return cljs.core.val(pair__15646__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__16145 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__16146 = cljs.core.next(ks);
m = G__16145;
ks = G__16146;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16167 = arguments.length;
var i__7480__auto___16168 = (0);
while(true){
if((i__7480__auto___16168 < len__7479__auto___16167)){
args__7486__auto__.push((arguments[i__7480__auto___16168]));

var G__16169 = (i__7480__auto___16168 + (1));
i__7480__auto___16168 = G__16169;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((1) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7487__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__6404__auto__ = m;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__7184__auto__ = (function plumbing$core$iter__16149(s__16150){
return (new cljs.core.LazySeq(null,(function (){
var s__16150__$1 = s__16150;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16150__$1);
if(temp__4657__auto__){
var s__16150__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16150__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16150__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16152 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16151 = (0);
while(true){
if((i__16151 < size__7183__auto__)){
var vec__16161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16151);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16161,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__16152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__16170 = (i__16151 + (1));
i__16151 = G__16170;
continue;
} else {
var G__16171 = (i__16151 + (1));
i__16151 = G__16171;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16152),plumbing$core$iter__16149(cljs.core.chunk_rest(s__16150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16152),null);
}
} else {
var vec__16164 = cljs.core.first(s__16150__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16164,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__16149(cljs.core.rest(s__16150__$2)));
} else {
var G__16172 = cljs.core.rest(s__16150__$2);
s__16150__$1 = G__16172;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq16147){
var G__16148 = cljs.core.first(seq16147);
var seq16147__$1 = cljs.core.next(seq16147);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__16148,seq16147__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16177 = arguments.length;
var i__7480__auto___16178 = (0);
while(true){
if((i__7480__auto___16178 < len__7479__auto___16177)){
args__7486__auto__.push((arguments[i__7480__auto___16178]));

var G__16179 = (i__7480__auto___16178 + (1));
i__7480__auto___16178 = G__16179;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq16173){
var G__16174 = cljs.core.first(seq16173);
var seq16173__$1 = cljs.core.next(seq16173);
var G__16175 = cljs.core.first(seq16173__$1);
var seq16173__$2 = cljs.core.next(seq16173__$1);
var G__16176 = cljs.core.first(seq16173__$2);
var seq16173__$3 = cljs.core.next(seq16173__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__16174,G__16175,G__16176,seq16173__$3);
});

/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(x) : map_fn.call(null,x))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.next(s);
if(temp__4657__auto__){
var n = temp__4657__auto__;
return plumbing$core$aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args16181 = [];
var len__7479__auto___16184 = arguments.length;
var i__7480__auto___16185 = (0);
while(true){
if((i__7480__auto___16185 < len__7479__auto___16184)){
args16181.push((arguments[i__7480__auto___16185]));

var G__16186 = (i__7480__auto___16185 + (1));
i__7480__auto___16185 = G__16186;
continue;
} else {
}
break;
}

var G__16183 = args16181.length;
switch (G__16183) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16181.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;

/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4657__auto__ = cljs.core.seq(xs);
if(temp__4657__auto__){
var xs__$1 = temp__4657__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = (function (){var G__16195 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16195) : cljs.core.atom.call(null,G__16195));
})();
var iter__7184__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__16196(s__16197){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__16197__$1 = s__16197;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16197__$1);
if(temp__4657__auto__){
var s__16197__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16197__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__16197__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__16199 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__16198 = (0);
while(true){
if((i__16198 < size__7183__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__16198);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
cljs.core.chunk_append(b__16199,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__16202 = (i__16198 + (1));
i__16198 = G__16202;
continue;
} else {
var G__16203 = (i__16198 + (1));
i__16198 = G__16203;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16199),plumbing$core$distinct_by_$_iter__16196(cljs.core.chunk_rest(s__16197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16199),null);
}
} else {
var x = cljs.core.first(s__16197__$2);
var id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(s) : cljs.core.deref.call(null,s)),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__16196(cljs.core.rest(s__16197__$2)));
} else {
var G__16204 = cljs.core.rest(s__16197__$2);
s__16197__$1 = G__16204;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__7184__auto__(xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__7486__auto__ = [];
var len__7479__auto___16207 = arguments.length;
var i__7480__auto___16208 = (0);
while(true){
if((i__7480__auto___16208 < len__7479__auto___16207)){
args__7486__auto__.push((arguments[i__7480__auto___16208]));

var G__16209 = (i__7480__auto___16208 + (1));
i__7480__auto___16208 = G__16209;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq16205){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16205));
});

/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args16210 = [];
var len__7479__auto___16216 = arguments.length;
var i__7480__auto___16217 = (0);
while(true){
if((i__7480__auto___16217 < len__7479__auto___16216)){
args16210.push((arguments[i__7480__auto___16217]));

var G__16218 = (i__7480__auto___16217 + (1));
i__7480__auto___16217 = G__16218;
continue;
} else {
}
break;
}

var G__16215 = args16210.length;
switch (G__16215) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16210.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__16220 = plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__16221 = cljs.core.first(xs);
var G__16222 = cljs.core.next(xs);
coll = G__16220;
x = G__16221;
xs = G__16222;
continue;
} else {
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq16211){
var G__16212 = cljs.core.first(seq16211);
var seq16211__$1 = cljs.core.next(seq16211);
var G__16213 = cljs.core.first(seq16211__$1);
var seq16211__$2 = cljs.core.next(seq16211__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__16212,G__16213,seq16211__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args16224 = [];
var len__7479__auto___16230 = arguments.length;
var i__7480__auto___16231 = (0);
while(true){
if((i__7480__auto___16231 < len__7479__auto___16230)){
args16224.push((arguments[i__7480__auto___16231]));

var G__16232 = (i__7480__auto___16231 + (1));
i__7480__auto___16231 = G__16232;
continue;
} else {
}
break;
}

var G__16229 = args16224.length;
switch (G__16229) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16224.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var new_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_val) : f.call(null,old_val));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__16223_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__16223_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq16225){
var G__16226 = cljs.core.first(seq16225);
var seq16225__$1 = cljs.core.next(seq16225);
var G__16227 = cljs.core.first(seq16225__$1);
var seq16225__$2 = cljs.core.next(seq16225__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16226,G__16227,seq16225__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args16234 = [];
var len__7479__auto___16240 = arguments.length;
var i__7480__auto___16241 = (0);
while(true){
if((i__7480__auto___16241 < len__7479__auto___16240)){
args16234.push((arguments[i__7480__auto___16241]));

var G__16242 = (i__7480__auto___16241 + (1));
i__7480__auto___16241 = G__16242;
continue;
} else {
}
break;
}

var G__16239 = args16234.length;
switch (G__16239) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7498__auto__ = (new cljs.core.IndexedSeq(args16234.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7498__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq16235){
var G__16236 = cljs.core.first(seq16235);
var seq16235__$1 = cljs.core.next(seq16235);
var G__16237 = cljs.core.first(seq16235__$1);
var seq16235__$2 = cljs.core.next(seq16235__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__16236,G__16237,seq16235__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

