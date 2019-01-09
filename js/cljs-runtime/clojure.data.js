goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__15758){
var vec__15760 = p__15758;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15760,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15760,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__15773 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15773,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15773,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15773,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__15794 = arguments.length;
switch (G__15794) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4135__auto__ = cljs.core.count(a);
var y__4136__auto__ = cljs.core.count(b);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4347__auto__ = (((x == null))?null:x);
var m__4348__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto__.call(null,x));
} else {
var m__4348__auto____$1 = (clojure.data.equality_partition["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4347__auto__ = (((a == null))?null:a);
var m__4348__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto__.call(null,a,b));
} else {
var m__4348__auto____$1 = (clojure.data.diff_similar["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__15821_16006 = clojure.data.equality_partition;
var G__15822_16007 = "null";
var G__15823_16008 = ((function (G__15821_16006,G__15822_16007){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__15821_16006,G__15822_16007))
;
goog.object.set(G__15821_16006,G__15822_16007,G__15823_16008);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__15826_16013 = clojure.data.equality_partition;
var G__15827_16014 = "string";
var G__15828_16015 = ((function (G__15826_16013,G__15827_16014){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__15826_16013,G__15827_16014))
;
goog.object.set(G__15826_16013,G__15827_16014,G__15828_16015);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__15832_16017 = clojure.data.equality_partition;
var G__15833_16018 = "number";
var G__15834_16019 = ((function (G__15832_16017,G__15833_16018){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__15832_16017,G__15833_16018))
;
goog.object.set(G__15832_16017,G__15833_16018,G__15834_16019);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__15839_16020 = clojure.data.equality_partition;
var G__15840_16021 = "array";
var G__15841_16022 = ((function (G__15839_16020,G__15840_16021){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__15839_16020,G__15840_16021))
;
goog.object.set(G__15839_16020,G__15840_16021,G__15841_16022);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__15845_16024 = clojure.data.equality_partition;
var G__15846_16025 = "function";
var G__15847_16026 = ((function (G__15845_16024,G__15846_16025){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__15845_16024,G__15846_16025))
;
goog.object.set(G__15845_16024,G__15846_16025,G__15847_16026);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__15851_16027 = clojure.data.equality_partition;
var G__15852_16028 = "boolean";
var G__15853_16029 = ((function (G__15851_16027,G__15852_16028){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__15851_16027,G__15852_16028))
;
goog.object.set(G__15851_16027,G__15852_16028,G__15853_16029);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__15855_16031 = clojure.data.equality_partition;
var G__15856_16032 = "_";
var G__15857_16033 = ((function (G__15855_16031,G__15856_16032){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__15855_16031,G__15856_16032))
;
goog.object.set(G__15855_16031,G__15856_16032,G__15857_16033);
goog.object.set(clojure.data.Diff,"null",true);

var G__15914_16042 = clojure.data.diff_similar;
var G__15915_16043 = "null";
var G__15916_16044 = ((function (G__15914_16042,G__15915_16043){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15914_16042,G__15915_16043))
;
goog.object.set(G__15914_16042,G__15915_16043,G__15916_16044);

goog.object.set(clojure.data.Diff,"string",true);

var G__15934_16052 = clojure.data.diff_similar;
var G__15935_16053 = "string";
var G__15936_16054 = ((function (G__15934_16052,G__15935_16053){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15934_16052,G__15935_16053))
;
goog.object.set(G__15934_16052,G__15935_16053,G__15936_16054);

goog.object.set(clojure.data.Diff,"number",true);

var G__15940_16057 = clojure.data.diff_similar;
var G__15941_16058 = "number";
var G__15942_16059 = ((function (G__15940_16057,G__15941_16058){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15940_16057,G__15941_16058))
;
goog.object.set(G__15940_16057,G__15941_16058,G__15942_16059);

goog.object.set(clojure.data.Diff,"array",true);

var G__15950_16065 = clojure.data.diff_similar;
var G__15951_16066 = "array";
var G__15952_16067 = ((function (G__15950_16065,G__15951_16066){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__15950_16065,G__15951_16066))
;
goog.object.set(G__15950_16065,G__15951_16066,G__15952_16067);

goog.object.set(clojure.data.Diff,"function",true);

var G__15955_16077 = clojure.data.diff_similar;
var G__15956_16078 = "function";
var G__15957_16079 = ((function (G__15955_16077,G__15956_16078){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15955_16077,G__15956_16078))
;
goog.object.set(G__15955_16077,G__15956_16078,G__15957_16079);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__15958_16081 = clojure.data.diff_similar;
var G__15959_16082 = "boolean";
var G__15960_16083 = ((function (G__15958_16081,G__15959_16082){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__15958_16081,G__15959_16082))
;
goog.object.set(G__15958_16081,G__15959_16082,G__15960_16083);

goog.object.set(clojure.data.Diff,"_",true);

var G__15961_16088 = clojure.data.diff_similar;
var G__15962_16089 = "_";
var G__15963_16090 = ((function (G__15961_16088,G__15962_16089){
return (function (a,b){
var fexpr__15966 = (function (){var G__15967 = clojure.data.equality_partition(a);
var G__15967__$1 = (((G__15967 instanceof cljs.core.Keyword))?G__15967.fqn:null);
switch (G__15967__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15967__$1)].join('')));

}
})();
return (fexpr__15966.cljs$core$IFn$_invoke$arity$2 ? fexpr__15966.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__15966.call(null,a,b));
});})(G__15961_16088,G__15962_16089))
;
goog.object.set(G__15961_16088,G__15962_16089,G__15963_16090);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
