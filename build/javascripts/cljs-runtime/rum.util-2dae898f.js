goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixins], 0)));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21009 = arguments.length;
var i__4532__auto___21010 = (0);
while(true){
if((i__4532__auto___21010 < len__4531__auto___21009)){
args__4534__auto__.push((arguments[i__4532__auto___21010]));

var G__21011 = (i__4532__auto___21010 + (1));
i__4532__auto___21010 = G__21011;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq20985){
var G__20986 = cljs.core.first(seq20985);
var seq20985__$1 = cljs.core.next(seq20985);
var G__20987 = cljs.core.first(seq20985__$1);
var seq20985__$2 = cljs.core.next(seq20985__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20986,G__20987,seq20985__$2);
});


//# sourceMappingURL=rum.util.js-55ef9435.map
