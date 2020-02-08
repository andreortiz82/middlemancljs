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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__30577){
var vec__30578 = p__30577;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30578,(1),null);
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
var vec__30591 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30591,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30591,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30591,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__30650 = arguments.length;
switch (G__30650) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
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
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
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
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__30712_30875 = clojure.data.equality_partition;
var G__30713_30876 = "null";
var G__30714_30877 = ((function (G__30712_30875,G__30713_30876){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30712_30875,G__30713_30876))
;
goog.object.set(G__30712_30875,G__30713_30876,G__30714_30877);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__30717_30878 = clojure.data.equality_partition;
var G__30718_30879 = "string";
var G__30719_30880 = ((function (G__30717_30878,G__30718_30879){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30717_30878,G__30718_30879))
;
goog.object.set(G__30717_30878,G__30718_30879,G__30719_30880);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__30723_30882 = clojure.data.equality_partition;
var G__30724_30883 = "number";
var G__30725_30884 = ((function (G__30723_30882,G__30724_30883){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30723_30882,G__30724_30883))
;
goog.object.set(G__30723_30882,G__30724_30883,G__30725_30884);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__30727_30890 = clojure.data.equality_partition;
var G__30728_30891 = "array";
var G__30729_30892 = ((function (G__30727_30890,G__30728_30891){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__30727_30890,G__30728_30891))
;
goog.object.set(G__30727_30890,G__30728_30891,G__30729_30892);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__30733_30893 = clojure.data.equality_partition;
var G__30734_30894 = "function";
var G__30735_30895 = ((function (G__30733_30893,G__30734_30894){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30733_30893,G__30734_30894))
;
goog.object.set(G__30733_30893,G__30734_30894,G__30735_30895);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__30737_30897 = clojure.data.equality_partition;
var G__30738_30898 = "boolean";
var G__30739_30899 = ((function (G__30737_30897,G__30738_30898){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30737_30897,G__30738_30898))
;
goog.object.set(G__30737_30897,G__30738_30898,G__30739_30899);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__30743_30905 = clojure.data.equality_partition;
var G__30744_30906 = "_";
var G__30745_30907 = ((function (G__30743_30905,G__30744_30906){
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
});})(G__30743_30905,G__30744_30906))
;
goog.object.set(G__30743_30905,G__30744_30906,G__30745_30907);
goog.object.set(clojure.data.Diff,"null",true);

var G__30757_30942 = clojure.data.diff_similar;
var G__30758_30943 = "null";
var G__30759_30944 = ((function (G__30757_30942,G__30758_30943){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30757_30942,G__30758_30943))
;
goog.object.set(G__30757_30942,G__30758_30943,G__30759_30944);

goog.object.set(clojure.data.Diff,"string",true);

var G__30775_30952 = clojure.data.diff_similar;
var G__30776_30953 = "string";
var G__30777_30954 = ((function (G__30775_30952,G__30776_30953){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30775_30952,G__30776_30953))
;
goog.object.set(G__30775_30952,G__30776_30953,G__30777_30954);

goog.object.set(clojure.data.Diff,"number",true);

var G__30793_30956 = clojure.data.diff_similar;
var G__30794_30957 = "number";
var G__30795_30958 = ((function (G__30793_30956,G__30794_30957){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30793_30956,G__30794_30957))
;
goog.object.set(G__30793_30956,G__30794_30957,G__30795_30958);

goog.object.set(clojure.data.Diff,"array",true);

var G__30811_30961 = clojure.data.diff_similar;
var G__30812_30962 = "array";
var G__30813_30963 = ((function (G__30811_30961,G__30812_30962){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__30811_30961,G__30812_30962))
;
goog.object.set(G__30811_30961,G__30812_30962,G__30813_30963);

goog.object.set(clojure.data.Diff,"function",true);

var G__30814_30965 = clojure.data.diff_similar;
var G__30815_30966 = "function";
var G__30816_30967 = ((function (G__30814_30965,G__30815_30966){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30814_30965,G__30815_30966))
;
goog.object.set(G__30814_30965,G__30815_30966,G__30816_30967);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__30836_30968 = clojure.data.diff_similar;
var G__30837_30969 = "boolean";
var G__30838_30970 = ((function (G__30836_30968,G__30837_30969){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30836_30968,G__30837_30969))
;
goog.object.set(G__30836_30968,G__30837_30969,G__30838_30970);

goog.object.set(clojure.data.Diff,"_",true);

var G__30839_30972 = clojure.data.diff_similar;
var G__30840_30973 = "_";
var G__30841_30974 = ((function (G__30839_30972,G__30840_30973){
return (function (a,b){
var fexpr__30846 = (function (){var G__30847 = clojure.data.equality_partition(a);
var G__30847__$1 = (((G__30847 instanceof cljs.core.Keyword))?G__30847.fqn:null);
switch (G__30847__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30847__$1)].join('')));

}
})();
return (fexpr__30846.cljs$core$IFn$_invoke$arity$2 ? fexpr__30846.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__30846.call(null,a,b));
});})(G__30839_30972,G__30840_30973))
;
goog.object.set(G__30839_30972,G__30840_30973,G__30841_30974);
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
