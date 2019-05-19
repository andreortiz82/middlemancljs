goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12076 = arguments.length;
var i__4532__auto___12077 = (0);
while(true){
if((i__4532__auto___12077 < len__4531__auto___12076)){
args__4534__auto__.push((arguments[i__4532__auto___12077]));

var G__12079 = (i__4532__auto___12077 + (1));
i__4532__auto___12077 = G__12079;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq12072){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12072));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12092 = arguments.length;
var i__4532__auto___12093 = (0);
while(true){
if((i__4532__auto___12093 < len__4531__auto___12092)){
args__4534__auto__.push((arguments[i__4532__auto___12093]));

var G__12094 = (i__4532__auto___12093 + (1));
i__4532__auto___12093 = G__12094;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq12085){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12085));
});

var g_QMARK__12104 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_12105 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12104){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__12104))
,null));
var mkg_12106 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12104,g_12105){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__12104,g_12105))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__12104,g_12105,mkg_12106){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__12100 = cljs.core.deref(g_QMARK__12104);
return (fexpr__12100.cljs$core$IFn$_invoke$arity$1 ? fexpr__12100.cljs$core$IFn$_invoke$arity$1(x) : fexpr__12100.call(null,x));
});})(g_QMARK__12104,g_12105,mkg_12106))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__12104,g_12105,mkg_12106){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__12101 = cljs.core.deref(mkg_12106);
return (fexpr__12101.cljs$core$IFn$_invoke$arity$1 ? fexpr__12101.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__12101.call(null,gfn));
});})(g_QMARK__12104,g_12105,mkg_12106))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__12104,g_12105,mkg_12106){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__12103 = cljs.core.deref(g_12105);
return (fexpr__12103.cljs$core$IFn$_invoke$arity$1 ? fexpr__12103.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__12103.call(null,generator));
});})(g_QMARK__12104,g_12105,mkg_12106))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__12110 = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__12110.cljs$core$IFn$_invoke$arity$2 ? fexpr__12110.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__12110.call(null,rnd,size));
}));
});
var g__11751__auto___12220 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__11751__auto___12220){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12222 = arguments.length;
var i__4532__auto___12223 = (0);
while(true){
if((i__4532__auto___12223 < len__4531__auto___12222)){
args__4534__auto__.push((arguments[i__4532__auto___12223]));

var G__12224 = (i__4532__auto___12223 + (1));
i__4532__auto___12223 = G__12224;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12220))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12220){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12220),args);
});})(g__11751__auto___12220))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__11751__auto___12220){
return (function (seq12111){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12111));
});})(g__11751__auto___12220))
;


var g__11751__auto___12225 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__11751__auto___12225){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12226 = arguments.length;
var i__4532__auto___12227 = (0);
while(true){
if((i__4532__auto___12227 < len__4531__auto___12226)){
args__4534__auto__.push((arguments[i__4532__auto___12227]));

var G__12228 = (i__4532__auto___12227 + (1));
i__4532__auto___12227 = G__12228;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12225))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12225){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12225),args);
});})(g__11751__auto___12225))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__11751__auto___12225){
return (function (seq12115){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12115));
});})(g__11751__auto___12225))
;


var g__11751__auto___12229 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__11751__auto___12229){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12231 = arguments.length;
var i__4532__auto___12232 = (0);
while(true){
if((i__4532__auto___12232 < len__4531__auto___12231)){
args__4534__auto__.push((arguments[i__4532__auto___12232]));

var G__12233 = (i__4532__auto___12232 + (1));
i__4532__auto___12232 = G__12233;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12229))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12229){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12229),args);
});})(g__11751__auto___12229))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__11751__auto___12229){
return (function (seq12119){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12119));
});})(g__11751__auto___12229))
;


var g__11751__auto___12234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__11751__auto___12234){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12235 = arguments.length;
var i__4532__auto___12236 = (0);
while(true){
if((i__4532__auto___12236 < len__4531__auto___12235)){
args__4534__auto__.push((arguments[i__4532__auto___12236]));

var G__12237 = (i__4532__auto___12236 + (1));
i__4532__auto___12236 = G__12237;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12234))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12234){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12234),args);
});})(g__11751__auto___12234))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__11751__auto___12234){
return (function (seq12120){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12120));
});})(g__11751__auto___12234))
;


var g__11751__auto___12238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__11751__auto___12238){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12239 = arguments.length;
var i__4532__auto___12240 = (0);
while(true){
if((i__4532__auto___12240 < len__4531__auto___12239)){
args__4534__auto__.push((arguments[i__4532__auto___12240]));

var G__12241 = (i__4532__auto___12240 + (1));
i__4532__auto___12240 = G__12241;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12238))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12238){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12238),args);
});})(g__11751__auto___12238))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__11751__auto___12238){
return (function (seq12122){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12122));
});})(g__11751__auto___12238))
;


var g__11751__auto___12242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__11751__auto___12242){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12247 = arguments.length;
var i__4532__auto___12248 = (0);
while(true){
if((i__4532__auto___12248 < len__4531__auto___12247)){
args__4534__auto__.push((arguments[i__4532__auto___12248]));

var G__12249 = (i__4532__auto___12248 + (1));
i__4532__auto___12248 = G__12249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12242))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12242){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12242),args);
});})(g__11751__auto___12242))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__11751__auto___12242){
return (function (seq12125){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12125));
});})(g__11751__auto___12242))
;


var g__11751__auto___12250 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__11751__auto___12250){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12255 = arguments.length;
var i__4532__auto___12256 = (0);
while(true){
if((i__4532__auto___12256 < len__4531__auto___12255)){
args__4534__auto__.push((arguments[i__4532__auto___12256]));

var G__12257 = (i__4532__auto___12256 + (1));
i__4532__auto___12256 = G__12257;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12250))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12250){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12250),args);
});})(g__11751__auto___12250))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__11751__auto___12250){
return (function (seq12128){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12128));
});})(g__11751__auto___12250))
;


var g__11751__auto___12262 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__11751__auto___12262){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12263 = arguments.length;
var i__4532__auto___12264 = (0);
while(true){
if((i__4532__auto___12264 < len__4531__auto___12263)){
args__4534__auto__.push((arguments[i__4532__auto___12264]));

var G__12265 = (i__4532__auto___12264 + (1));
i__4532__auto___12264 = G__12265;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12262))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12262){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12262),args);
});})(g__11751__auto___12262))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__11751__auto___12262){
return (function (seq12132){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12132));
});})(g__11751__auto___12262))
;


var g__11751__auto___12266 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__11751__auto___12266){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12268 = arguments.length;
var i__4532__auto___12269 = (0);
while(true){
if((i__4532__auto___12269 < len__4531__auto___12268)){
args__4534__auto__.push((arguments[i__4532__auto___12269]));

var G__12270 = (i__4532__auto___12269 + (1));
i__4532__auto___12269 = G__12270;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12266))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12266){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12266),args);
});})(g__11751__auto___12266))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__11751__auto___12266){
return (function (seq12133){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12133));
});})(g__11751__auto___12266))
;


var g__11751__auto___12276 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__11751__auto___12276){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12277 = arguments.length;
var i__4532__auto___12278 = (0);
while(true){
if((i__4532__auto___12278 < len__4531__auto___12277)){
args__4534__auto__.push((arguments[i__4532__auto___12278]));

var G__12279 = (i__4532__auto___12278 + (1));
i__4532__auto___12278 = G__12279;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12276))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12276){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12276),args);
});})(g__11751__auto___12276))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__11751__auto___12276){
return (function (seq12134){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12134));
});})(g__11751__auto___12276))
;


var g__11751__auto___12281 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__11751__auto___12281){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12282 = arguments.length;
var i__4532__auto___12283 = (0);
while(true){
if((i__4532__auto___12283 < len__4531__auto___12282)){
args__4534__auto__.push((arguments[i__4532__auto___12283]));

var G__12284 = (i__4532__auto___12283 + (1));
i__4532__auto___12283 = G__12284;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12281))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12281){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12281),args);
});})(g__11751__auto___12281))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__11751__auto___12281){
return (function (seq12135){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12135));
});})(g__11751__auto___12281))
;


var g__11751__auto___12285 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__11751__auto___12285){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12286 = arguments.length;
var i__4532__auto___12287 = (0);
while(true){
if((i__4532__auto___12287 < len__4531__auto___12286)){
args__4534__auto__.push((arguments[i__4532__auto___12287]));

var G__12288 = (i__4532__auto___12287 + (1));
i__4532__auto___12287 = G__12288;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12285))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12285){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12285),args);
});})(g__11751__auto___12285))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__11751__auto___12285){
return (function (seq12148){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12148));
});})(g__11751__auto___12285))
;


var g__11751__auto___12289 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__11751__auto___12289){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12290 = arguments.length;
var i__4532__auto___12291 = (0);
while(true){
if((i__4532__auto___12291 < len__4531__auto___12290)){
args__4534__auto__.push((arguments[i__4532__auto___12291]));

var G__12292 = (i__4532__auto___12291 + (1));
i__4532__auto___12291 = G__12292;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12289))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12289){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12289),args);
});})(g__11751__auto___12289))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__11751__auto___12289){
return (function (seq12162){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12162));
});})(g__11751__auto___12289))
;


var g__11751__auto___12293 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__11751__auto___12293){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12294 = arguments.length;
var i__4532__auto___12295 = (0);
while(true){
if((i__4532__auto___12295 < len__4531__auto___12294)){
args__4534__auto__.push((arguments[i__4532__auto___12295]));

var G__12296 = (i__4532__auto___12295 + (1));
i__4532__auto___12295 = G__12296;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12293))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12293){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12293),args);
});})(g__11751__auto___12293))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__11751__auto___12293){
return (function (seq12171){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12171));
});})(g__11751__auto___12293))
;


var g__11751__auto___12297 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__11751__auto___12297){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12298 = arguments.length;
var i__4532__auto___12299 = (0);
while(true){
if((i__4532__auto___12299 < len__4531__auto___12298)){
args__4534__auto__.push((arguments[i__4532__auto___12299]));

var G__12300 = (i__4532__auto___12299 + (1));
i__4532__auto___12299 = G__12300;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12297))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12297){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12297),args);
});})(g__11751__auto___12297))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__11751__auto___12297){
return (function (seq12190){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12190));
});})(g__11751__auto___12297))
;


var g__11751__auto___12301 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__11751__auto___12301){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12302 = arguments.length;
var i__4532__auto___12303 = (0);
while(true){
if((i__4532__auto___12303 < len__4531__auto___12302)){
args__4534__auto__.push((arguments[i__4532__auto___12303]));

var G__12304 = (i__4532__auto___12303 + (1));
i__4532__auto___12303 = G__12304;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12301))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12301){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12301),args);
});})(g__11751__auto___12301))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__11751__auto___12301){
return (function (seq12209){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12209));
});})(g__11751__auto___12301))
;


var g__11751__auto___12305 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__11751__auto___12305){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12306 = arguments.length;
var i__4532__auto___12307 = (0);
while(true){
if((i__4532__auto___12307 < len__4531__auto___12306)){
args__4534__auto__.push((arguments[i__4532__auto___12307]));

var G__12308 = (i__4532__auto___12307 + (1));
i__4532__auto___12307 = G__12308;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12305))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12305){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12305),args);
});})(g__11751__auto___12305))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11751__auto___12305){
return (function (seq12211){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12211));
});})(g__11751__auto___12305))
;


var g__11751__auto___12309 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__11751__auto___12309){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12310 = arguments.length;
var i__4532__auto___12311 = (0);
while(true){
if((i__4532__auto___12311 < len__4531__auto___12310)){
args__4534__auto__.push((arguments[i__4532__auto___12311]));

var G__12312 = (i__4532__auto___12311 + (1));
i__4532__auto___12311 = G__12312;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12309))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12309){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12309),args);
});})(g__11751__auto___12309))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__11751__auto___12309){
return (function (seq12214){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12214));
});})(g__11751__auto___12309))
;


var g__11751__auto___12313 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__11751__auto___12313){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12314 = arguments.length;
var i__4532__auto___12315 = (0);
while(true){
if((i__4532__auto___12315 < len__4531__auto___12314)){
args__4534__auto__.push((arguments[i__4532__auto___12315]));

var G__12316 = (i__4532__auto___12315 + (1));
i__4532__auto___12315 = G__12316;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11751__auto___12313))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11751__auto___12313){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__11751__auto___12313),args);
});})(g__11751__auto___12313))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__11751__auto___12313){
return (function (seq12215){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12215));
});})(g__11751__auto___12313))
;

var g__11756__auto___12348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__11756__auto___12348){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12349 = arguments.length;
var i__4532__auto___12350 = (0);
while(true){
if((i__4532__auto___12350 < len__4531__auto___12349)){
args__4534__auto__.push((arguments[i__4532__auto___12350]));

var G__12353 = (i__4532__auto___12350 + (1));
i__4532__auto___12350 = G__12353;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12348))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12348){
return (function (args){
return cljs.core.deref(g__11756__auto___12348);
});})(g__11756__auto___12348))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__11756__auto___12348){
return (function (seq12317){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12317));
});})(g__11756__auto___12348))
;


var g__11756__auto___12354 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__11756__auto___12354){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12355 = arguments.length;
var i__4532__auto___12356 = (0);
while(true){
if((i__4532__auto___12356 < len__4531__auto___12355)){
args__4534__auto__.push((arguments[i__4532__auto___12356]));

var G__12357 = (i__4532__auto___12356 + (1));
i__4532__auto___12356 = G__12357;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12354))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12354){
return (function (args){
return cljs.core.deref(g__11756__auto___12354);
});})(g__11756__auto___12354))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__11756__auto___12354){
return (function (seq12318){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12318));
});})(g__11756__auto___12354))
;


var g__11756__auto___12359 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__11756__auto___12359){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12360 = arguments.length;
var i__4532__auto___12361 = (0);
while(true){
if((i__4532__auto___12361 < len__4531__auto___12360)){
args__4534__auto__.push((arguments[i__4532__auto___12361]));

var G__12362 = (i__4532__auto___12361 + (1));
i__4532__auto___12361 = G__12362;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12359))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12359){
return (function (args){
return cljs.core.deref(g__11756__auto___12359);
});})(g__11756__auto___12359))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__11756__auto___12359){
return (function (seq12319){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12319));
});})(g__11756__auto___12359))
;


var g__11756__auto___12363 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__11756__auto___12363){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12364 = arguments.length;
var i__4532__auto___12365 = (0);
while(true){
if((i__4532__auto___12365 < len__4531__auto___12364)){
args__4534__auto__.push((arguments[i__4532__auto___12365]));

var G__12366 = (i__4532__auto___12365 + (1));
i__4532__auto___12365 = G__12366;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12363))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12363){
return (function (args){
return cljs.core.deref(g__11756__auto___12363);
});})(g__11756__auto___12363))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__11756__auto___12363){
return (function (seq12320){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12320));
});})(g__11756__auto___12363))
;


var g__11756__auto___12367 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__11756__auto___12367){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12368 = arguments.length;
var i__4532__auto___12369 = (0);
while(true){
if((i__4532__auto___12369 < len__4531__auto___12368)){
args__4534__auto__.push((arguments[i__4532__auto___12369]));

var G__12370 = (i__4532__auto___12369 + (1));
i__4532__auto___12369 = G__12370;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12367))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12367){
return (function (args){
return cljs.core.deref(g__11756__auto___12367);
});})(g__11756__auto___12367))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__11756__auto___12367){
return (function (seq12321){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12321));
});})(g__11756__auto___12367))
;


var g__11756__auto___12371 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__11756__auto___12371){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12372 = arguments.length;
var i__4532__auto___12373 = (0);
while(true){
if((i__4532__auto___12373 < len__4531__auto___12372)){
args__4534__auto__.push((arguments[i__4532__auto___12373]));

var G__12374 = (i__4532__auto___12373 + (1));
i__4532__auto___12373 = G__12374;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12371))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12371){
return (function (args){
return cljs.core.deref(g__11756__auto___12371);
});})(g__11756__auto___12371))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__11756__auto___12371){
return (function (seq12322){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12322));
});})(g__11756__auto___12371))
;


var g__11756__auto___12375 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__11756__auto___12375){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12376 = arguments.length;
var i__4532__auto___12377 = (0);
while(true){
if((i__4532__auto___12377 < len__4531__auto___12376)){
args__4534__auto__.push((arguments[i__4532__auto___12377]));

var G__12378 = (i__4532__auto___12377 + (1));
i__4532__auto___12377 = G__12378;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12375))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12375){
return (function (args){
return cljs.core.deref(g__11756__auto___12375);
});})(g__11756__auto___12375))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__11756__auto___12375){
return (function (seq12323){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12323));
});})(g__11756__auto___12375))
;


var g__11756__auto___12379 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__11756__auto___12379){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12380 = arguments.length;
var i__4532__auto___12381 = (0);
while(true){
if((i__4532__auto___12381 < len__4531__auto___12380)){
args__4534__auto__.push((arguments[i__4532__auto___12381]));

var G__12382 = (i__4532__auto___12381 + (1));
i__4532__auto___12381 = G__12382;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12379))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12379){
return (function (args){
return cljs.core.deref(g__11756__auto___12379);
});})(g__11756__auto___12379))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__11756__auto___12379){
return (function (seq12324){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12324));
});})(g__11756__auto___12379))
;


var g__11756__auto___12383 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__11756__auto___12383){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12384 = arguments.length;
var i__4532__auto___12385 = (0);
while(true){
if((i__4532__auto___12385 < len__4531__auto___12384)){
args__4534__auto__.push((arguments[i__4532__auto___12385]));

var G__12386 = (i__4532__auto___12385 + (1));
i__4532__auto___12385 = G__12386;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12383))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12383){
return (function (args){
return cljs.core.deref(g__11756__auto___12383);
});})(g__11756__auto___12383))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__11756__auto___12383){
return (function (seq12325){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12325));
});})(g__11756__auto___12383))
;


var g__11756__auto___12387 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__11756__auto___12387){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12388 = arguments.length;
var i__4532__auto___12389 = (0);
while(true){
if((i__4532__auto___12389 < len__4531__auto___12388)){
args__4534__auto__.push((arguments[i__4532__auto___12389]));

var G__12390 = (i__4532__auto___12389 + (1));
i__4532__auto___12389 = G__12390;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12387))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12387){
return (function (args){
return cljs.core.deref(g__11756__auto___12387);
});})(g__11756__auto___12387))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__11756__auto___12387){
return (function (seq12326){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12326));
});})(g__11756__auto___12387))
;


var g__11756__auto___12391 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__11756__auto___12391){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12392 = arguments.length;
var i__4532__auto___12393 = (0);
while(true){
if((i__4532__auto___12393 < len__4531__auto___12392)){
args__4534__auto__.push((arguments[i__4532__auto___12393]));

var G__12394 = (i__4532__auto___12393 + (1));
i__4532__auto___12393 = G__12394;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12391))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12391){
return (function (args){
return cljs.core.deref(g__11756__auto___12391);
});})(g__11756__auto___12391))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__11756__auto___12391){
return (function (seq12327){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12327));
});})(g__11756__auto___12391))
;


var g__11756__auto___12395 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__11756__auto___12395){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12399 = arguments.length;
var i__4532__auto___12400 = (0);
while(true){
if((i__4532__auto___12400 < len__4531__auto___12399)){
args__4534__auto__.push((arguments[i__4532__auto___12400]));

var G__12401 = (i__4532__auto___12400 + (1));
i__4532__auto___12400 = G__12401;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12395))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12395){
return (function (args){
return cljs.core.deref(g__11756__auto___12395);
});})(g__11756__auto___12395))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__11756__auto___12395){
return (function (seq12328){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12328));
});})(g__11756__auto___12395))
;


var g__11756__auto___12402 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__11756__auto___12402){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12403 = arguments.length;
var i__4532__auto___12404 = (0);
while(true){
if((i__4532__auto___12404 < len__4531__auto___12403)){
args__4534__auto__.push((arguments[i__4532__auto___12404]));

var G__12405 = (i__4532__auto___12404 + (1));
i__4532__auto___12404 = G__12405;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12402))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12402){
return (function (args){
return cljs.core.deref(g__11756__auto___12402);
});})(g__11756__auto___12402))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__11756__auto___12402){
return (function (seq12329){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12329));
});})(g__11756__auto___12402))
;


var g__11756__auto___12406 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__11756__auto___12406){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12407 = arguments.length;
var i__4532__auto___12408 = (0);
while(true){
if((i__4532__auto___12408 < len__4531__auto___12407)){
args__4534__auto__.push((arguments[i__4532__auto___12408]));

var G__12410 = (i__4532__auto___12408 + (1));
i__4532__auto___12408 = G__12410;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12406))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12406){
return (function (args){
return cljs.core.deref(g__11756__auto___12406);
});})(g__11756__auto___12406))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__11756__auto___12406){
return (function (seq12330){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12330));
});})(g__11756__auto___12406))
;


var g__11756__auto___12413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__11756__auto___12413){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12414 = arguments.length;
var i__4532__auto___12415 = (0);
while(true){
if((i__4532__auto___12415 < len__4531__auto___12414)){
args__4534__auto__.push((arguments[i__4532__auto___12415]));

var G__12416 = (i__4532__auto___12415 + (1));
i__4532__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12413))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12413){
return (function (args){
return cljs.core.deref(g__11756__auto___12413);
});})(g__11756__auto___12413))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__11756__auto___12413){
return (function (seq12331){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12331));
});})(g__11756__auto___12413))
;


var g__11756__auto___12417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__11756__auto___12417){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12420 = arguments.length;
var i__4532__auto___12421 = (0);
while(true){
if((i__4532__auto___12421 < len__4531__auto___12420)){
args__4534__auto__.push((arguments[i__4532__auto___12421]));

var G__12422 = (i__4532__auto___12421 + (1));
i__4532__auto___12421 = G__12422;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12417))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12417){
return (function (args){
return cljs.core.deref(g__11756__auto___12417);
});})(g__11756__auto___12417))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__11756__auto___12417){
return (function (seq12332){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12332));
});})(g__11756__auto___12417))
;


var g__11756__auto___12423 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__11756__auto___12423){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12424 = arguments.length;
var i__4532__auto___12425 = (0);
while(true){
if((i__4532__auto___12425 < len__4531__auto___12424)){
args__4534__auto__.push((arguments[i__4532__auto___12425]));

var G__12428 = (i__4532__auto___12425 + (1));
i__4532__auto___12425 = G__12428;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12423))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12423){
return (function (args){
return cljs.core.deref(g__11756__auto___12423);
});})(g__11756__auto___12423))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__11756__auto___12423){
return (function (seq12334){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12334));
});})(g__11756__auto___12423))
;


var g__11756__auto___12430 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__11756__auto___12430){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12431 = arguments.length;
var i__4532__auto___12432 = (0);
while(true){
if((i__4532__auto___12432 < len__4531__auto___12431)){
args__4534__auto__.push((arguments[i__4532__auto___12432]));

var G__12435 = (i__4532__auto___12432 + (1));
i__4532__auto___12432 = G__12435;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12430))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12430){
return (function (args){
return cljs.core.deref(g__11756__auto___12430);
});})(g__11756__auto___12430))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__11756__auto___12430){
return (function (seq12337){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12337));
});})(g__11756__auto___12430))
;


var g__11756__auto___12436 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__11756__auto___12436){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12437 = arguments.length;
var i__4532__auto___12438 = (0);
while(true){
if((i__4532__auto___12438 < len__4531__auto___12437)){
args__4534__auto__.push((arguments[i__4532__auto___12438]));

var G__12439 = (i__4532__auto___12438 + (1));
i__4532__auto___12438 = G__12439;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12436))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12436){
return (function (args){
return cljs.core.deref(g__11756__auto___12436);
});})(g__11756__auto___12436))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__11756__auto___12436){
return (function (seq12339){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12339));
});})(g__11756__auto___12436))
;


var g__11756__auto___12442 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__11756__auto___12442){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12444 = arguments.length;
var i__4532__auto___12445 = (0);
while(true){
if((i__4532__auto___12445 < len__4531__auto___12444)){
args__4534__auto__.push((arguments[i__4532__auto___12445]));

var G__12446 = (i__4532__auto___12445 + (1));
i__4532__auto___12445 = G__12446;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12442))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12442){
return (function (args){
return cljs.core.deref(g__11756__auto___12442);
});})(g__11756__auto___12442))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__11756__auto___12442){
return (function (seq12343){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12343));
});})(g__11756__auto___12442))
;


var g__11756__auto___12449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__11756__auto___12449){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12450 = arguments.length;
var i__4532__auto___12451 = (0);
while(true){
if((i__4532__auto___12451 < len__4531__auto___12450)){
args__4534__auto__.push((arguments[i__4532__auto___12451]));

var G__12452 = (i__4532__auto___12451 + (1));
i__4532__auto___12451 = G__12452;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});})(g__11756__auto___12449))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11756__auto___12449){
return (function (args){
return cljs.core.deref(g__11756__auto___12449);
});})(g__11756__auto___12449))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__11756__auto___12449){
return (function (seq12346){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12346));
});})(g__11756__auto___12449))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12460 = arguments.length;
var i__4532__auto___12461 = (0);
while(true){
if((i__4532__auto___12461 < len__4531__auto___12460)){
args__4534__auto__.push((arguments[i__4532__auto___12461]));

var G__12462 = (i__4532__auto___12461 + (1));
i__4532__auto___12461 = G__12462;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__12453_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__12453_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq12454){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12454));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__12465_SHARP_){
return (new Date(p1__12465_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__12464_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12464_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid()], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=cljs.spec.gen.alpha.js-6e3a4148.map
