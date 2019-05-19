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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__16328){
var vec__16330 = p__16328;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16330,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16330,(1),null);
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
var vec__16340 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16340,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16340,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16340,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__16357 = arguments.length;
switch (G__16357) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
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
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
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
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__16395_16429 = clojure.data.equality_partition;
var G__16396_16430 = "null";
var G__16397_16431 = ((function (G__16395_16429,G__16396_16430){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16395_16429,G__16396_16430))
;
goog.object.set(G__16395_16429,G__16396_16430,G__16397_16431);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__16400_16432 = clojure.data.equality_partition;
var G__16401_16433 = "string";
var G__16402_16434 = ((function (G__16400_16432,G__16401_16433){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16400_16432,G__16401_16433))
;
goog.object.set(G__16400_16432,G__16401_16433,G__16402_16434);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__16403_16435 = clojure.data.equality_partition;
var G__16404_16436 = "number";
var G__16405_16437 = ((function (G__16403_16435,G__16404_16436){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16403_16435,G__16404_16436))
;
goog.object.set(G__16403_16435,G__16404_16436,G__16405_16437);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__16408_16441 = clojure.data.equality_partition;
var G__16409_16442 = "array";
var G__16410_16443 = ((function (G__16408_16441,G__16409_16442){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__16408_16441,G__16409_16442))
;
goog.object.set(G__16408_16441,G__16409_16442,G__16410_16443);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__16413_16445 = clojure.data.equality_partition;
var G__16414_16446 = "function";
var G__16415_16447 = ((function (G__16413_16445,G__16414_16446){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16413_16445,G__16414_16446))
;
goog.object.set(G__16413_16445,G__16414_16446,G__16415_16447);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__16417_16450 = clojure.data.equality_partition;
var G__16418_16451 = "boolean";
var G__16419_16452 = ((function (G__16417_16450,G__16418_16451){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16417_16450,G__16418_16451))
;
goog.object.set(G__16417_16450,G__16418_16451,G__16419_16452);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__16421_16453 = clojure.data.equality_partition;
var G__16422_16454 = "_";
var G__16423_16455 = ((function (G__16421_16453,G__16422_16454){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__16421_16453,G__16422_16454))
;
goog.object.set(G__16421_16453,G__16422_16454,G__16423_16455);
goog.object.set(clojure.data.Diff,"null",true);

var G__16461_16501 = clojure.data.diff_similar;
var G__16462_16502 = "null";
var G__16463_16503 = ((function (G__16461_16501,G__16462_16502){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16461_16501,G__16462_16502))
;
goog.object.set(G__16461_16501,G__16462_16502,G__16463_16503);

goog.object.set(clojure.data.Diff,"string",true);

var G__16469_16505 = clojure.data.diff_similar;
var G__16470_16506 = "string";
var G__16471_16507 = ((function (G__16469_16505,G__16470_16506){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16469_16505,G__16470_16506))
;
goog.object.set(G__16469_16505,G__16470_16506,G__16471_16507);

goog.object.set(clojure.data.Diff,"number",true);

var G__16474_16508 = clojure.data.diff_similar;
var G__16475_16509 = "number";
var G__16476_16510 = ((function (G__16474_16508,G__16475_16509){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16474_16508,G__16475_16509))
;
goog.object.set(G__16474_16508,G__16475_16509,G__16476_16510);

goog.object.set(clojure.data.Diff,"array",true);

var G__16480_16511 = clojure.data.diff_similar;
var G__16481_16512 = "array";
var G__16482_16513 = ((function (G__16480_16511,G__16481_16512){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__16480_16511,G__16481_16512))
;
goog.object.set(G__16480_16511,G__16481_16512,G__16482_16513);

goog.object.set(clojure.data.Diff,"function",true);

var G__16486_16514 = clojure.data.diff_similar;
var G__16487_16515 = "function";
var G__16488_16516 = ((function (G__16486_16514,G__16487_16515){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16486_16514,G__16487_16515))
;
goog.object.set(G__16486_16514,G__16487_16515,G__16488_16516);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__16489_16520 = clojure.data.diff_similar;
var G__16490_16521 = "boolean";
var G__16491_16522 = ((function (G__16489_16520,G__16490_16521){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16489_16520,G__16490_16521))
;
goog.object.set(G__16489_16520,G__16490_16521,G__16491_16522);

goog.object.set(clojure.data.Diff,"_",true);

var G__16494_16523 = clojure.data.diff_similar;
var G__16495_16524 = "_";
var G__16496_16525 = ((function (G__16494_16523,G__16495_16524){
return (function (a,b){
var fexpr__16499 = (function (){var G__16500 = clojure.data.equality_partition(a);
var G__16500__$1 = (((G__16500 instanceof cljs.core.Keyword))?G__16500.fqn:null);
switch (G__16500__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16500__$1)].join('')));

}
})();
return (fexpr__16499.cljs$core$IFn$_invoke$arity$2 ? fexpr__16499.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__16499.call(null,a,b));
});})(G__16494_16523,G__16495_16524))
;
goog.object.set(G__16494_16523,G__16495_16524,G__16496_16525);
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
