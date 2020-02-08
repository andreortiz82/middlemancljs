goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35469__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35470__i = 0, G__35470__a = new Array(arguments.length -  0);
while (G__35470__i < G__35470__a.length) {G__35470__a[G__35470__i] = arguments[G__35470__i + 0]; ++G__35470__i;}
  args = new cljs.core.IndexedSeq(G__35470__a,0,null);
} 
return G__35469__delegate.call(this,args);};
G__35469.cljs$lang$maxFixedArity = 0;
G__35469.cljs$lang$applyTo = (function (arglist__35471){
var args = cljs.core.seq(arglist__35471);
return G__35469__delegate(args);
});
G__35469.cljs$core$IFn$_invoke$arity$variadic = G__35469__delegate;
return G__35469;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35476__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35477__i = 0, G__35477__a = new Array(arguments.length -  0);
while (G__35477__i < G__35477__a.length) {G__35477__a[G__35477__i] = arguments[G__35477__i + 0]; ++G__35477__i;}
  args = new cljs.core.IndexedSeq(G__35477__a,0,null);
} 
return G__35476__delegate.call(this,args);};
G__35476.cljs$lang$maxFixedArity = 0;
G__35476.cljs$lang$applyTo = (function (arglist__35478){
var args = cljs.core.seq(arglist__35478);
return G__35476__delegate(args);
});
G__35476.cljs$core$IFn$_invoke$arity$variadic = G__35476__delegate;
return G__35476;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
