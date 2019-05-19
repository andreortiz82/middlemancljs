goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15934){
var map__15935 = p__15934;
var map__15935__$1 = ((((!((map__15935 == null)))?(((((map__15935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15935):map__15935);
var m = map__15935__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15935__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15949_16004 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15950_16005 = null;
var count__15951_16006 = (0);
var i__15952_16007 = (0);
while(true){
if((i__15952_16007 < count__15951_16006)){
var f_16009 = chunk__15950_16005.cljs$core$IIndexed$_nth$arity$2(null,i__15952_16007);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16009], 0));


var G__16010 = seq__15949_16004;
var G__16011 = chunk__15950_16005;
var G__16012 = count__15951_16006;
var G__16013 = (i__15952_16007 + (1));
seq__15949_16004 = G__16010;
chunk__15950_16005 = G__16011;
count__15951_16006 = G__16012;
i__15952_16007 = G__16013;
continue;
} else {
var temp__5457__auto___16015 = cljs.core.seq(seq__15949_16004);
if(temp__5457__auto___16015){
var seq__15949_16017__$1 = temp__5457__auto___16015;
if(cljs.core.chunked_seq_QMARK_(seq__15949_16017__$1)){
var c__4351__auto___16019 = cljs.core.chunk_first(seq__15949_16017__$1);
var G__16021 = cljs.core.chunk_rest(seq__15949_16017__$1);
var G__16022 = c__4351__auto___16019;
var G__16023 = cljs.core.count(c__4351__auto___16019);
var G__16024 = (0);
seq__15949_16004 = G__16021;
chunk__15950_16005 = G__16022;
count__15951_16006 = G__16023;
i__15952_16007 = G__16024;
continue;
} else {
var f_16025 = cljs.core.first(seq__15949_16017__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16025], 0));


var G__16026 = cljs.core.next(seq__15949_16017__$1);
var G__16027 = null;
var G__16028 = (0);
var G__16029 = (0);
seq__15949_16004 = G__16026;
chunk__15950_16005 = G__16027;
count__15951_16006 = G__16028;
i__15952_16007 = G__16029;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16032 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_16032], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_16032)))?cljs.core.second(arglists_16032):arglists_16032)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15958_16042 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15959_16043 = null;
var count__15960_16044 = (0);
var i__15961_16045 = (0);
while(true){
if((i__15961_16045 < count__15960_16044)){
var vec__15963_16047 = chunk__15959_16043.cljs$core$IIndexed$_nth$arity$2(null,i__15961_16045);
var name_16048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15963_16047,(0),null);
var map__15966_16049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15963_16047,(1),null);
var map__15966_16050__$1 = ((((!((map__15966_16049 == null)))?(((((map__15966_16049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15966_16049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15966_16049):map__15966_16049);
var doc_16051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15966_16050__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15966_16050__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16048], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16052], 0));

if(cljs.core.truth_(doc_16051)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16051], 0));
} else {
}


var G__16063 = seq__15958_16042;
var G__16064 = chunk__15959_16043;
var G__16065 = count__15960_16044;
var G__16066 = (i__15961_16045 + (1));
seq__15958_16042 = G__16063;
chunk__15959_16043 = G__16064;
count__15960_16044 = G__16065;
i__15961_16045 = G__16066;
continue;
} else {
var temp__5457__auto___16067 = cljs.core.seq(seq__15958_16042);
if(temp__5457__auto___16067){
var seq__15958_16069__$1 = temp__5457__auto___16067;
if(cljs.core.chunked_seq_QMARK_(seq__15958_16069__$1)){
var c__4351__auto___16071 = cljs.core.chunk_first(seq__15958_16069__$1);
var G__16073 = cljs.core.chunk_rest(seq__15958_16069__$1);
var G__16074 = c__4351__auto___16071;
var G__16075 = cljs.core.count(c__4351__auto___16071);
var G__16076 = (0);
seq__15958_16042 = G__16073;
chunk__15959_16043 = G__16074;
count__15960_16044 = G__16075;
i__15961_16045 = G__16076;
continue;
} else {
var vec__15979_16080 = cljs.core.first(seq__15958_16069__$1);
var name_16081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15979_16080,(0),null);
var map__15982_16082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15979_16080,(1),null);
var map__15982_16083__$1 = ((((!((map__15982_16082 == null)))?(((((map__15982_16082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15982_16082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15982_16082):map__15982_16082);
var doc_16084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15982_16083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15982_16083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16081], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16085], 0));

if(cljs.core.truth_(doc_16084)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16084], 0));
} else {
}


var G__16092 = cljs.core.next(seq__15958_16069__$1);
var G__16093 = null;
var G__16094 = (0);
var G__16095 = (0);
seq__15958_16042 = G__16092;
chunk__15959_16043 = G__16093;
count__15960_16044 = G__16094;
i__15961_16045 = G__16095;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__15992 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15993 = null;
var count__15994 = (0);
var i__15995 = (0);
while(true){
if((i__15995 < count__15994)){
var role = chunk__15993.cljs$core$IIndexed$_nth$arity$2(null,i__15995);
var temp__5457__auto___16103__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___16103__$1)){
var spec_16105 = temp__5457__auto___16103__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_16105)], 0));
} else {
}


var G__16106 = seq__15992;
var G__16107 = chunk__15993;
var G__16108 = count__15994;
var G__16109 = (i__15995 + (1));
seq__15992 = G__16106;
chunk__15993 = G__16107;
count__15994 = G__16108;
i__15995 = G__16109;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__15992);
if(temp__5457__auto____$1){
var seq__15992__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__15992__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15992__$1);
var G__16111 = cljs.core.chunk_rest(seq__15992__$1);
var G__16112 = c__4351__auto__;
var G__16113 = cljs.core.count(c__4351__auto__);
var G__16114 = (0);
seq__15992 = G__16111;
chunk__15993 = G__16112;
count__15994 = G__16113;
i__15995 = G__16114;
continue;
} else {
var role = cljs.core.first(seq__15992__$1);
var temp__5457__auto___16115__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___16115__$2)){
var spec_16117 = temp__5457__auto___16115__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_16117)], 0));
} else {
}


var G__16119 = cljs.core.next(seq__15992__$1);
var G__16120 = null;
var G__16121 = (0);
var G__16122 = (0);
seq__15992 = G__16119;
chunk__15993 = G__16120;
count__15994 = G__16121;
i__15995 = G__16122;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
