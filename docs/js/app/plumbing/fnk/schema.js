// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$proto_DASH_sym,cljs.core.cst$sym$s_SLASH_Schema,cljs.core.cst$kw$proto_DASH_pred,(function (p1__13295__13296__auto__){
if(!((p1__13295__13296__auto__ == null))){
if((false) || (p1__13295__13296__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__13295__13296__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__13295__13296__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__13295__13296__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.OutputSchema,cljs.core.cst$sym$output)], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14907_SHARP_){
return (cljs.core.val(p1__14907_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__14911 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911,(1),null);
var p = vec__14911;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$missing_DASH_key,cljs.core.cst$kw$key,k,cljs.core.cst$kw$map,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return s1;

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___14919 = schema.utils.use_fn_validation;
var output_schema14914_14920 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema14915_14921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker14916_14922 = schema.core.checker(input_schema14915_14921);
var output_checker14917_14923 = schema.core.checker(output_schema14914_14920);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___14919,output_schema14914_14920,input_schema14915_14921,input_checker14916_14922,output_checker14917_14923){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__14918){
var validate__12525__auto__ = ufv___14919.get_cell();
if(cljs.core.truth_(validate__12525__auto__)){
var args__12526__auto___14924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14918], null);
var temp__4657__auto___14925 = (input_checker14916_14922.cljs$core$IFn$_invoke$arity$1 ? input_checker14916_14922.cljs$core$IFn$_invoke$arity$1(args__12526__auto___14924) : input_checker14916_14922.call(null,args__12526__auto___14924));
if(cljs.core.truth_(temp__4657__auto___14925)){
var error__12527__auto___14926 = temp__4657__auto___14925;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___14926], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema14915_14921,cljs.core.cst$kw$value,args__12526__auto___14924,cljs.core.cst$kw$error,error__12527__auto___14926], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var k = G__14918;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),cljs.core.cst$sym$schema$core_SLASH_optional_DASH_key))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__12525__auto__)){
var temp__4657__auto___14927 = (output_checker14917_14923.cljs$core$IFn$_invoke$arity$1 ? output_checker14917_14923.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker14917_14923.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___14927)){
var error__12527__auto___14928 = temp__4657__auto___14927;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$unwrap_DASH_schema_DASH_form_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.list(cljs.core.cst$sym$s_SLASH_maybe,cljs.core.list(cljs.core.cst$sym$s_SLASH_pair,cljs.core.cst$sym$s_SLASH_Keyword,"k",cljs.core.cst$sym$s_SLASH_Bool,"optional?")),cljs.core.cst$kw$doc,"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___14928], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema14914_14920,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___14928], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___14919,output_schema14914_14920,input_schema14915_14921,input_checker14916_14922,output_checker14917_14923))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema14914_14920,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14915_14921], null)));
var ufv___14934 = schema.utils.use_fn_validation;
var output_schema14929_14935 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema14930_14936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any], null)))], null);
var input_checker14931_14937 = schema.core.checker(input_schema14930_14936);
var output_checker14932_14938 = schema.core.checker(output_schema14929_14935);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___14934,output_schema14929_14935,input_schema14930_14936,input_checker14931_14937,output_checker14932_14938){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__14933){
var validate__12525__auto__ = ufv___14934.get_cell();
if(cljs.core.truth_(validate__12525__auto__)){
var args__12526__auto___14939 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14933], null);
var temp__4657__auto___14940 = (input_checker14931_14937.cljs$core$IFn$_invoke$arity$1 ? input_checker14931_14937.cljs$core$IFn$_invoke$arity$1(args__12526__auto___14939) : input_checker14931_14937.call(null,args__12526__auto___14939));
if(cljs.core.truth_(temp__4657__auto___14940)){
var error__12527__auto___14941 = temp__4657__auto___14940;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___14941], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema14930_14936,cljs.core.cst$kw$value,args__12526__auto___14939,cljs.core.cst$kw$error,error__12527__auto___14941], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var s = G__14933;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12525__auto__)){
var temp__4657__auto___14942 = (output_checker14932_14938.cljs$core$IFn$_invoke$arity$1 ? output_checker14932_14938.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker14932_14938.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___14942)){
var error__12527__auto___14943 = temp__4657__auto___14942;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$explicit_DASH_schema_DASH_key_DASH_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null),cljs.core.cst$kw$doc,"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___14943], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema14929_14935,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___14943], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___14934,output_schema14929_14935,input_schema14930_14936,input_checker14931_14937,output_checker14932_14938))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema14929_14935,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14930_14936], null)));
var ufv___14949 = schema.utils.use_fn_validation;
var output_schema14944_14950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$required),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.cst$sym$optional)], null);
var input_schema14945_14951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$s_SLASH_Keyword,cljs.core.cst$sym$s_SLASH_Bool], null)], null)))], null);
var input_checker14946_14952 = schema.core.checker(input_schema14945_14951);
var output_checker14947_14953 = schema.core.checker(output_schema14944_14950);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___14949,output_schema14944_14950,input_schema14945_14951,input_checker14946_14952,output_checker14947_14953){
return (function plumbing$fnk$schema$split_schema_keys(G__14948){
var validate__12525__auto__ = ufv___14949.get_cell();
if(cljs.core.truth_(validate__12525__auto__)){
var args__12526__auto___14954 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14948], null);
var temp__4657__auto___14955 = (input_checker14946_14952.cljs$core$IFn$_invoke$arity$1 ? input_checker14946_14952.cljs$core$IFn$_invoke$arity$1(args__12526__auto___14954) : input_checker14946_14952.call(null,args__12526__auto___14954));
if(cljs.core.truth_(temp__4657__auto___14955)){
var error__12527__auto___14956 = temp__4657__auto___14955;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___14956], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema14945_14951,cljs.core.cst$kw$value,args__12526__auto___14954,cljs.core.cst$kw$error,error__12527__auto___14956], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var s = G__14948;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12525__auto__)){
var temp__4657__auto___14957 = (output_checker14947_14953.cljs$core$IFn$_invoke$arity$1 ? output_checker14947_14953.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker14947_14953.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___14957)){
var error__12527__auto___14958 = temp__4657__auto___14957;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$required)),cljs.core.list(cljs.core.cst$sym$s_SLASH_one,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$optional))], null),cljs.core.cst$kw$doc,"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___14958], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema14944_14950,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___14958], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___14949,output_schema14944_14950,input_schema14945_14951,input_checker14946_14952,output_checker14947_14953))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema14944_14950,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14945_14951], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__7486__auto__ = [];
var len__7479__auto___14970 = arguments.length;
var i__7480__auto___14971 = (0);
while(true){
if((i__7480__auto___14971 < len__7479__auto___14970)){
args__7486__auto__.push((arguments[i__7480__auto___14971]));

var G__14972 = (i__7480__auto___14971 + (1));
i__7480__auto___14971 = G__14972;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((3) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7487__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__14963){
var vec__14964 = p__14963;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14964,(1),null);
var pk = (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(k) : key_project.call(null,k));
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__14967 = temp__4655__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14967,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14967,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(ok,k) : key_combine.call(null,ok,k)),(val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(ov,v) : val_combine.call(null,ov,v))], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq14959){
var G__14960 = cljs.core.first(seq14959);
var seq14959__$1 = cljs.core.next(seq14959);
var G__14961 = cljs.core.first(seq14959__$1);
var seq14959__$2 = cljs.core.next(seq14959__$1);
var G__14962 = cljs.core.first(seq14959__$2);
var seq14959__$3 = cljs.core.next(seq14959__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__14960,G__14961,G__14962,seq14959__$3);
});

var ufv___14980 = schema.utils.use_fn_validation;
var output_schema14974_14981 = plumbing.fnk.schema.InputSchema;
var input_schema14975_14982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$i2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker14976_14983 = schema.core.checker(input_schema14975_14982);
var output_checker14977_14984 = schema.core.checker(output_schema14974_14981);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___14980,output_schema14974_14981,input_schema14975_14982,input_checker14976_14983,output_checker14977_14984){
return (function plumbing$fnk$schema$union_input_schemata(G__14978,G__14979){
var validate__12525__auto__ = ufv___14980.get_cell();
if(cljs.core.truth_(validate__12525__auto__)){
var args__12526__auto___14985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14978,G__14979], null);
var temp__4657__auto___14986 = (input_checker14976_14983.cljs$core$IFn$_invoke$arity$1 ? input_checker14976_14983.cljs$core$IFn$_invoke$arity$1(args__12526__auto___14985) : input_checker14976_14983.call(null,args__12526__auto___14985));
if(cljs.core.truth_(temp__4657__auto___14986)){
var error__12527__auto___14987 = temp__4657__auto___14986;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___14987], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema14975_14982,cljs.core.cst$kw$value,args__12526__auto___14985,cljs.core.cst$kw$error,error__12527__auto___14987], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var i1 = G__14978;
var i2 = G__14979;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12525__auto__,ufv___14980,output_schema14974_14981,input_schema14975_14982,input_checker14976_14983,output_checker14977_14984){
return (function (p1__14973_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(p1__14973_SHARP_))){
return schema.core.explicit_schema_key(p1__14973_SHARP_);
} else {
return cljs.core.cst$kw$extra;
}
});})(validate__12525__auto__,ufv___14980,output_schema14974_14981,input_schema14975_14982,input_checker14976_14983,output_checker14977_14984))
,((function (validate__12525__auto__,ufv___14980,output_schema14974_14981,input_schema14975_14982,input_checker14976_14983,output_checker14977_14984){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_(k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(k1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error("Assert failed: (= k1 k2)"));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__12525__auto__,ufv___14980,output_schema14974_14981,input_schema14975_14982,input_checker14976_14983,output_checker14977_14984))
,((function (validate__12525__auto__,ufv___14980,output_schema14974_14981,input_schema14975_14982,input_checker14976_14983,output_checker14977_14984){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__6392__auto__ = plumbing.fnk.schema.map_schema_QMARK_(s1);
if(cljs.core.truth_(and__6392__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_(s2);
} else {
return and__6392__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12525__auto__,ufv___14980,output_schema14974_14981,input_schema14975_14982,input_checker14976_14983,output_checker14977_14984))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12525__auto__)){
var temp__4657__auto___14988 = (output_checker14977_14984.cljs$core$IFn$_invoke$arity$1 ? output_checker14977_14984.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker14977_14984.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___14988)){
var error__12527__auto___14989 = temp__4657__auto___14988;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$union_DASH_input_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema,cljs.core.cst$kw$doc,"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___14989], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema14974_14981,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___14989], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___14980,output_schema14974_14981,input_schema14975_14982,input_checker14976_14983,output_checker14977_14984))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema14974_14981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14975_14982], null)));
var ufv___14995 = schema.utils.use_fn_validation;
var output_schema14990_14996 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema14991_14997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$input_DASH_schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null)))], null);
var input_checker14992_14998 = schema.core.checker(input_schema14991_14997);
var output_checker14993_14999 = schema.core.checker(output_schema14990_14996);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___14995,output_schema14990_14996,input_schema14991_14997,input_checker14992_14998,output_checker14993_14999){
return (function plumbing$fnk$schema$required_toplevel_keys(G__14994){
var validate__12525__auto__ = ufv___14995.get_cell();
if(cljs.core.truth_(validate__12525__auto__)){
var args__12526__auto___15000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14994], null);
var temp__4657__auto___15001 = (input_checker14992_14998.cljs$core$IFn$_invoke$arity$1 ? input_checker14992_14998.cljs$core$IFn$_invoke$arity$1(args__12526__auto___15000) : input_checker14992_14998.call(null,args__12526__auto___15000));
if(cljs.core.truth_(temp__4657__auto___15001)){
var error__12527__auto___15002 = temp__4657__auto___15001;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___15002], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema14991_14997,cljs.core.cst$kw$value,args__12526__auto___15000,cljs.core.cst$kw$error,error__12527__auto___15002], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var input_schema = G__14994;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12525__auto__,ufv___14995,output_schema14990_14996,input_schema14991_14997,input_checker14992_14998,output_checker14993_14999){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12525__auto__,ufv___14995,output_schema14990_14996,input_schema14991_14997,input_checker14992_14998,output_checker14993_14999))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12525__auto__)){
var temp__4657__auto___15003 = (output_checker14993_14999.cljs$core$IFn$_invoke$arity$1 ? output_checker14993_14999.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker14993_14999.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___15003)){
var error__12527__auto___15004 = temp__4657__auto___15003;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$required_DASH_toplevel_DASH_keys,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null),cljs.core.cst$kw$doc,"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___15004], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema14990_14996,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___15004], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___14995,output_schema14990_14996,input_schema14991_14997,input_checker14992_14998,output_checker14993_14999))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema14990_14996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14991_14997], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__15023(s__15024){
return (new cljs.core.LazySeq(null,(function (){
var s__15024__$1 = s__15024;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15024__$1);
if(temp__4657__auto__){
var s__15024__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15024__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__15024__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__15026 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__15025 = (0);
while(true){
if((i__15025 < size__7183__auto__)){
var vec__15035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__15025);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15035,(1),null);
cljs.core.chunk_append(b__15026,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null));

var G__15041 = (i__15025 + (1));
i__15025 = G__15041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15026),plumbing$fnk$schema$guess_expr_output_schema_$_iter__15023(cljs.core.chunk_rest(s__15024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15026),null);
}
} else {
var vec__15038 = cljs.core.first(s__15024__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15038,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__15023(cljs.core.rest(s__15024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(expr);
})());
} else {
return cljs.core.cst$sym$schema$core_SLASH_Any;
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.make_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj((function (){var x__7238__auto__ = schema.core.explain(output_schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__7238__auto__);
})(),cljs.core.cst$sym$map_QMARK_);
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__15068(s__15069){
return (new cljs.core.LazySeq(null,(function (){
var s__15069__$1 = s__15069;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15069__$1);
if(temp__4657__auto__){
var s__15069__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15069__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__15069__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__15071 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__15070 = (0);
while(true){
if((i__15070 < size__7183__auto__)){
var vec__15080 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__15070);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15080,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__15071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__15086 = (i__15070 + (1));
i__15070 = G__15086;
continue;
} else {
var G__15087 = (i__15070 + (1));
i__15070 = G__15087;
continue;
}
} else {
var G__15088 = (i__15070 + (1));
i__15070 = G__15088;
continue;
}
} else {
var G__15089 = (i__15070 + (1));
i__15070 = G__15089;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15071),plumbing$fnk$schema$schema_diff_$_iter__15068(cljs.core.chunk_rest(s__15069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15071),null);
}
} else {
var vec__15083 = cljs.core.first(s__15069__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15083,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__6404__auto__ = required_QMARK_;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?cljs.core.cst$sym$missing_DASH_required_DASH_key:plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__15068(cljs.core.rest(s__15069__$2)));
} else {
var G__15090 = cljs.core.rest(s__15069__$2);
s__15069__$1 = G__15090;
continue;
}
} else {
var G__15091 = cljs.core.rest(s__15069__$2);
s__15069__$1 = G__15091;
continue;
}
} else {
var G__15092 = cljs.core.rest(s__15069__$2);
s__15069__$1 = G__15092;
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
return iter__7184__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$does_DASH_not_DASH_satisfy_DASH_schema,cljs.core.cst$kw$failures,fails], null));
} else {
return null;
}
});
var ufv___15139 = schema.utils.use_fn_validation;
var output_schema15093_15140 = schema.core.Any;
var input_schema15094_15141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.cst$sym$input),schema.core.one(plumbing.fnk.schema.MapOutputSchema,cljs.core.cst$sym$output)], null),cljs.core.cst$sym$arg1)], null);
var input_checker15095_15142 = schema.core.checker(input_schema15094_15141);
var output_checker15096_15143 = schema.core.checker(output_schema15093_15140);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___15139,output_schema15093_15140,input_schema15094_15141,input_checker15095_15142,output_checker15096_15143){
return (function plumbing$fnk$schema$compose_schemata(G__15097,G__15098){
var validate__12525__auto__ = true;
if(validate__12525__auto__){
var args__12526__auto___15144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15097,G__15098], null);
var temp__4657__auto___15145 = (input_checker15095_15142.cljs$core$IFn$_invoke$arity$1 ? input_checker15095_15142.cljs$core$IFn$_invoke$arity$1(args__12526__auto___15144) : input_checker15095_15142.call(null,args__12526__auto___15144));
if(cljs.core.truth_(temp__4657__auto___15145)){
var error__12527__auto___15146 = temp__4657__auto___15145;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___15146], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema15094_15141,cljs.core.cst$kw$value,args__12526__auto___15144,cljs.core.cst$kw$error,error__12527__auto___15146], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var G__15125 = G__15097;
var vec__15127 = G__15125;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15127,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15127,(1),null);
var G__15126 = G__15098;
var vec__15130 = G__15126;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15130,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15130,(1),null);
var G__15125__$1 = G__15125;
var G__15126__$1 = G__15126;
while(true){
var vec__15133 = G__15125__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15133,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15133,(1),null);
var vec__15136 = G__15126__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15136,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15136,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12525__auto__){
var temp__4657__auto___15147 = (output_checker15096_15143.cljs$core$IFn$_invoke$arity$1 ? output_checker15096_15143.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker15096_15143.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___15147)){
var error__12527__auto___15148 = temp__4657__auto___15147;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$compose_DASH_schemata,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$always_DASH_validate,true,cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___15148], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema15093_15140,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___15148], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___15139,output_schema15093_15140,input_schema15094_15141,input_checker15095_15142,output_checker15096_15143))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema15093_15140,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15094_15141], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___15311 = schema.utils.use_fn_validation;
var output_schema15149_15312 = schema.core.Any;
var input_schema15150_15313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.cst$sym$InputSchema], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(cljs.core.cst$sym$ks,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s_SLASH_Keyword], null)], null)))], null);
var input_checker15151_15314 = schema.core.checker(input_schema15150_15313);
var output_checker15152_15315 = schema.core.checker(output_schema15149_15312);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315){
return (function plumbing$fnk$schema$split_schema(G__15153,G__15154){
var validate__12525__auto__ = ufv___15311.get_cell();
if(cljs.core.truth_(validate__12525__auto__)){
var args__12526__auto___15316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15153,G__15154], null);
var temp__4657__auto___15317 = (input_checker15151_15314.cljs$core$IFn$_invoke$arity$1 ? input_checker15151_15314.cljs$core$IFn$_invoke$arity$1(args__12526__auto___15316) : input_checker15151_15314.call(null,args__12526__auto___15316));
if(cljs.core.truth_(temp__4657__auto___15317)){
var error__12527__auto___15318 = temp__4657__auto___15317;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___15318], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema15150_15313,cljs.core.cst$kw$value,args__12526__auto___15316,cljs.core.cst$kw$error,error__12527__auto___15318], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var s = G__15153;
var ks = G__15154;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__7184__auto__ = ((function (ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315){
return (function plumbing$fnk$schema$split_schema_$_iter__15233(s__15234){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315){
return (function (){
var s__15234__$1 = s__15234;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15234__$1);
if(temp__4657__auto__){
var s__15234__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15234__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__15234__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__15236 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__15235 = (0);
while(true){
if((i__15235 < size__7183__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__15235);
cljs.core.chunk_append(b__15236,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (i__15235,in_QMARK_,c__7182__auto__,size__7183__auto__,b__15236,s__15234__$2,temp__4657__auto__,ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315){
return (function plumbing$fnk$schema$split_schema_$_iter__15233_$_iter__15275(s__15276){
return (new cljs.core.LazySeq(null,((function (i__15235,in_QMARK_,c__7182__auto__,size__7183__auto__,b__15236,s__15234__$2,temp__4657__auto__,ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315){
return (function (){
var s__15276__$1 = s__15276;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15276__$1);
if(temp__4657__auto____$1){
var s__15276__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15276__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__15276__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__15278 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__15277 = (0);
while(true){
if((i__15277 < size__7183__auto____$1)){
var vec__15287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__15277);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15287,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15287,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__15278,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__15319 = (i__15277 + (1));
i__15277 = G__15319;
continue;
} else {
var G__15320 = (i__15277 + (1));
i__15277 = G__15320;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15278),plumbing$fnk$schema$split_schema_$_iter__15233_$_iter__15275(cljs.core.chunk_rest(s__15276__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15278),null);
}
} else {
var vec__15290 = cljs.core.first(s__15276__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15290,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15290,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__15233_$_iter__15275(cljs.core.rest(s__15276__$2)));
} else {
var G__15321 = cljs.core.rest(s__15276__$2);
s__15276__$1 = G__15321;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__15235,in_QMARK_,c__7182__auto__,size__7183__auto__,b__15236,s__15234__$2,temp__4657__auto__,ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315))
,null,null));
});})(i__15235,in_QMARK_,c__7182__auto__,size__7183__auto__,b__15236,s__15234__$2,temp__4657__auto__,ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315))
;
return iter__7184__auto__(s);
})()));

var G__15322 = (i__15235 + (1));
i__15235 = G__15322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15236),plumbing$fnk$schema$split_schema_$_iter__15233(cljs.core.chunk_rest(s__15234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15236),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__15234__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7184__auto__ = ((function (in_QMARK_,s__15234__$2,temp__4657__auto__,ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315){
return (function plumbing$fnk$schema$split_schema_$_iter__15233_$_iter__15293(s__15294){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__15234__$2,temp__4657__auto__,ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315){
return (function (){
var s__15294__$1 = s__15294;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15294__$1);
if(temp__4657__auto____$1){
var s__15294__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15294__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__15294__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__15296 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__15295 = (0);
while(true){
if((i__15295 < size__7183__auto__)){
var vec__15305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__15295);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15305,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
cljs.core.chunk_append(b__15296,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__15323 = (i__15295 + (1));
i__15295 = G__15323;
continue;
} else {
var G__15324 = (i__15295 + (1));
i__15295 = G__15324;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15296),plumbing$fnk$schema$split_schema_$_iter__15233_$_iter__15293(cljs.core.chunk_rest(s__15294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15296),null);
}
} else {
var vec__15308 = cljs.core.first(s__15294__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(1),null);
if(cljs.core.truth_((function (){var and__6392__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__6392__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__6392__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__15233_$_iter__15293(cljs.core.rest(s__15294__$2)));
} else {
var G__15325 = cljs.core.rest(s__15294__$2);
s__15294__$1 = G__15325;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__15234__$2,temp__4657__auto__,ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315))
,null,null));
});})(in_QMARK_,s__15234__$2,temp__4657__auto__,ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315))
;
return iter__7184__auto__(s);
})()),plumbing$fnk$schema$split_schema_$_iter__15233(cljs.core.rest(s__15234__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315))
,null,null));
});})(ks__$1,validate__12525__auto__,ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315))
;
return iter__7184__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12525__auto__)){
var temp__4657__auto___15326 = (output_checker15152_15315.cljs$core$IFn$_invoke$arity$1 ? output_checker15152_15315.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker15152_15315.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___15326)){
var error__12527__auto___15327 = temp__4657__auto___15326;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$split_DASH_schema,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$schema$core_SLASH_Any,cljs.core.cst$kw$doc,"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___15327], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema15149_15312,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___15327], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___15311,output_schema15149_15312,input_schema15150_15313,input_checker15151_15314,output_checker15152_15315))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema15149_15312,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15150_15313], null)));
var ufv___15398 = schema.utils.use_fn_validation;
var output_schema15328_15399 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema15329_15400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,cljs.core.cst$sym$arg0),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),cljs.core.cst$sym$arg1)], null);
var input_checker15330_15401 = schema.core.checker(input_schema15329_15400);
var output_checker15331_15402 = schema.core.checker(output_schema15328_15399);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___15398,output_schema15328_15399,input_schema15329_15400,input_checker15330_15401,output_checker15331_15402){
return (function plumbing$fnk$schema$sequence_schemata(G__15332,G__15333){
var validate__12525__auto__ = ufv___15398.get_cell();
if(cljs.core.truth_(validate__12525__auto__)){
var args__12526__auto___15403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15332,G__15333], null);
var temp__4657__auto___15404 = (input_checker15330_15401.cljs$core$IFn$_invoke$arity$1 ? input_checker15330_15401.cljs$core$IFn$_invoke$arity$1(args__12526__auto___15403) : input_checker15330_15401.call(null,args__12526__auto___15403));
if(cljs.core.truth_(temp__4657__auto___15404)){
var error__12527__auto___15405 = temp__4657__auto___15404;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___15405], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,input_schema15329_15400,cljs.core.cst$kw$value,args__12526__auto___15403,cljs.core.cst$kw$error,error__12527__auto___15405], null));
} else {
}
} else {
}

var o__12528__auto__ = (function (){var G__15375 = G__15332;
var vec__15377 = G__15375;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15377,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15377,(1),null);
var G__15376 = G__15333;
var vec__15380 = G__15376;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15380,(0),null);
var vec__15383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15380,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15383,(1),null);
var G__15375__$1 = G__15375;
var G__15376__$1 = G__15376;
while(true){
var vec__15386 = G__15375__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15386,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15386,(1),null);
var vec__15389 = G__15376__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15389,(0),null);
var vec__15392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15389,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15392,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15392,(1),null);
if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__15395 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15395,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15395,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12525__auto__)){
var temp__4657__auto___15406 = (output_checker15331_15402.cljs$core$IFn$_invoke$arity$1 ? output_checker15331_15402.cljs$core$IFn$_invoke$arity$1(o__12528__auto__) : output_checker15331_15402.call(null,o__12528__auto__));
if(cljs.core.truth_(temp__4657__auto___15406)){
var error__12527__auto___15407 = temp__4657__auto___15406;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([cljs.core.with_meta(cljs.core.cst$sym$sequence_DASH_schemata,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,cljs.core.cst$sym$GraphIOSchemata,cljs.core.cst$kw$doc,"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12527__auto___15407], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,output_schema15328_15399,cljs.core.cst$kw$value,o__12528__auto__,cljs.core.cst$kw$error,error__12527__auto___15407], null));
} else {
}
} else {
}

return o__12528__auto__;
});})(ufv___15398,output_schema15328_15399,input_schema15329_15400,input_checker15330_15401,output_checker15331_15402))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema15328_15399,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15329_15400], null)));
