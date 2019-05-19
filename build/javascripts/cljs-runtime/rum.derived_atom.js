goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__20976 = arguments.length;
switch (G__20976) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__20981 = opts;
var map__20981__$1 = ((((!((map__20981 == null)))?(((((map__20981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20981):map__20981);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20981__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__20983 = cljs.core.count(refs);
switch (G__20983) {
case (1):
var vec__20989 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20989,(0),null);
return ((function (vec__20989,a,G__20983,map__20981,map__20981__$1,ref,check_equals_QMARK_){
return (function (){
var G__20992 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20992) : f.call(null,G__20992));
});
;})(vec__20989,a,G__20983,map__20981,map__20981__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__20997 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20997,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20997,(1),null);
return ((function (vec__20997,a,b,G__20983,map__20981,map__20981__$1,ref,check_equals_QMARK_){
return (function (){
var G__21000 = cljs.core.deref(a);
var G__21001 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21000,G__21001) : f.call(null,G__21000,G__21001));
});
;})(vec__20997,a,b,G__20983,map__20981,map__20981__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__21002 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21002,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21002,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21002,(2),null);
return ((function (vec__21002,a,b,c,G__20983,map__20981,map__20981__$1,ref,check_equals_QMARK_){
return (function (){
var G__21005 = cljs.core.deref(a);
var G__21006 = cljs.core.deref(b);
var G__21007 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21005,G__21006,G__21007) : f.call(null,G__21005,G__21006,G__21007));
});
;})(vec__21002,a,b,c,G__20983,map__20981,map__20981__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__20983,map__20981,map__20981__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__20983,map__20981,map__20981__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__21008 = ref;
cljs.core.reset_BANG_(G__21008,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__21008;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__20981,map__20981__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
});})(map__20981,map__20981__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__20981,map__20981__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
});})(map__20981,map__20981__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__21012_21027 = cljs.core.seq(refs);
var chunk__21013_21028 = null;
var count__21014_21029 = (0);
var i__21015_21030 = (0);
while(true){
if((i__21015_21030 < count__21014_21029)){
var ref_21031__$1 = chunk__21013_21028.cljs$core$IIndexed$_nth$arity$2(null,i__21015_21030);
cljs.core.add_watch(ref_21031__$1,key,watch);


var G__21032 = seq__21012_21027;
var G__21033 = chunk__21013_21028;
var G__21034 = count__21014_21029;
var G__21035 = (i__21015_21030 + (1));
seq__21012_21027 = G__21032;
chunk__21013_21028 = G__21033;
count__21014_21029 = G__21034;
i__21015_21030 = G__21035;
continue;
} else {
var temp__5457__auto___21037 = cljs.core.seq(seq__21012_21027);
if(temp__5457__auto___21037){
var seq__21012_21038__$1 = temp__5457__auto___21037;
if(cljs.core.chunked_seq_QMARK_(seq__21012_21038__$1)){
var c__4351__auto___21039 = cljs.core.chunk_first(seq__21012_21038__$1);
var G__21040 = cljs.core.chunk_rest(seq__21012_21038__$1);
var G__21041 = c__4351__auto___21039;
var G__21042 = cljs.core.count(c__4351__auto___21039);
var G__21043 = (0);
seq__21012_21027 = G__21040;
chunk__21013_21028 = G__21041;
count__21014_21029 = G__21042;
i__21015_21030 = G__21043;
continue;
} else {
var ref_21044__$1 = cljs.core.first(seq__21012_21038__$1);
cljs.core.add_watch(ref_21044__$1,key,watch);


var G__21045 = cljs.core.next(seq__21012_21038__$1);
var G__21046 = null;
var G__21047 = (0);
var G__21048 = (0);
seq__21012_21027 = G__21045;
chunk__21013_21028 = G__21046;
count__21014_21029 = G__21047;
i__21015_21030 = G__21048;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=rum.derived_atom.js.map
