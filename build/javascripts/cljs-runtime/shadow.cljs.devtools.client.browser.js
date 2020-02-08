goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35642 = arguments.length;
var i__4731__auto___35643 = (0);
while(true){
if((i__4731__auto___35643 < len__4730__auto___35642)){
args__4736__auto__.push((arguments[i__4731__auto___35643]));

var G__35644 = (i__4731__auto___35643 + (1));
i__4731__auto___35643 = G__35644;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35448){
var G__35449 = cljs.core.first(seq35448);
var seq35448__$1 = cljs.core.next(seq35448);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35449,seq35448__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35450){
var map__35451 = p__35450;
var map__35451__$1 = (((((!((map__35451 == null))))?(((((map__35451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35451):map__35451);
var src = map__35451__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35453 = cljs.core.seq(sources);
var chunk__35454 = null;
var count__35455 = (0);
var i__35456 = (0);
while(true){
if((i__35456 < count__35455)){
var map__35463 = chunk__35454.cljs$core$IIndexed$_nth$arity$2(null,i__35456);
var map__35463__$1 = (((((!((map__35463 == null))))?(((((map__35463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35463):map__35463);
var src = map__35463__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35463__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35463__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35463__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35463__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35465){var e_35645 = e35465;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35645);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35645.message)].join('')));
}

var G__35646 = seq__35453;
var G__35647 = chunk__35454;
var G__35648 = count__35455;
var G__35649 = (i__35456 + (1));
seq__35453 = G__35646;
chunk__35454 = G__35647;
count__35455 = G__35648;
i__35456 = G__35649;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35453);
if(temp__5735__auto__){
var seq__35453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35453__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35453__$1);
var G__35650 = cljs.core.chunk_rest(seq__35453__$1);
var G__35651 = c__4550__auto__;
var G__35652 = cljs.core.count(c__4550__auto__);
var G__35653 = (0);
seq__35453 = G__35650;
chunk__35454 = G__35651;
count__35455 = G__35652;
i__35456 = G__35653;
continue;
} else {
var map__35466 = cljs.core.first(seq__35453__$1);
var map__35466__$1 = (((((!((map__35466 == null))))?(((((map__35466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35466):map__35466);
var src = map__35466__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35466__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35466__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35466__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35466__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35468){var e_35654 = e35468;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35654);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35654.message)].join('')));
}

var G__35655 = cljs.core.next(seq__35453__$1);
var G__35656 = null;
var G__35657 = (0);
var G__35658 = (0);
seq__35453 = G__35655;
chunk__35454 = G__35656;
count__35455 = G__35657;
i__35456 = G__35658;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35472 = cljs.core.seq(js_requires);
var chunk__35473 = null;
var count__35474 = (0);
var i__35475 = (0);
while(true){
if((i__35475 < count__35474)){
var js_ns = chunk__35473.cljs$core$IIndexed$_nth$arity$2(null,i__35475);
var require_str_35659 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35659);


var G__35660 = seq__35472;
var G__35661 = chunk__35473;
var G__35662 = count__35474;
var G__35663 = (i__35475 + (1));
seq__35472 = G__35660;
chunk__35473 = G__35661;
count__35474 = G__35662;
i__35475 = G__35663;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35472);
if(temp__5735__auto__){
var seq__35472__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35472__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35472__$1);
var G__35664 = cljs.core.chunk_rest(seq__35472__$1);
var G__35665 = c__4550__auto__;
var G__35666 = cljs.core.count(c__4550__auto__);
var G__35667 = (0);
seq__35472 = G__35664;
chunk__35473 = G__35665;
count__35474 = G__35666;
i__35475 = G__35667;
continue;
} else {
var js_ns = cljs.core.first(seq__35472__$1);
var require_str_35668 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35668);


var G__35669 = cljs.core.next(seq__35472__$1);
var G__35670 = null;
var G__35671 = (0);
var G__35672 = (0);
seq__35472 = G__35669;
chunk__35473 = G__35670;
count__35474 = G__35671;
i__35475 = G__35672;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35479 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35479) : callback.call(null,G__35479));
} else {
var G__35480 = shadow.cljs.devtools.client.env.files_url();
var G__35481 = ((function (G__35480){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35480))
;
var G__35482 = "POST";
var G__35483 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35484 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35480,G__35481,G__35482,G__35483,G__35484);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35486){
var map__35487 = p__35486;
var map__35487__$1 = (((((!((map__35487 == null))))?(((((map__35487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35487):map__35487);
var msg = map__35487__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35487__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35487__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35489 = info;
var map__35489__$1 = (((((!((map__35489 == null))))?(((((map__35489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35489):map__35489);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35489,map__35489__$1,sources,compiled,map__35487,map__35487__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35491(s__35492){
return (new cljs.core.LazySeq(null,((function (map__35489,map__35489__$1,sources,compiled,map__35487,map__35487__$1,msg,info,reload_info){
return (function (){
var s__35492__$1 = s__35492;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35492__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35497 = cljs.core.first(xs__6292__auto__);
var map__35497__$1 = (((((!((map__35497 == null))))?(((((map__35497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35497):map__35497);
var src = map__35497__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35492__$1,map__35497,map__35497__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35489,map__35489__$1,sources,compiled,map__35487,map__35487__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35491_$_iter__35493(s__35494){
return (new cljs.core.LazySeq(null,((function (s__35492__$1,map__35497,map__35497__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35489,map__35489__$1,sources,compiled,map__35487,map__35487__$1,msg,info,reload_info){
return (function (){
var s__35494__$1 = s__35494;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35494__$1);
if(temp__5735__auto____$1){
var s__35494__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35494__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35494__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35496 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35495 = (0);
while(true){
if((i__35495 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35495);
cljs.core.chunk_append(b__35496,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35673 = (i__35495 + (1));
i__35495 = G__35673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35496),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35491_$_iter__35493(cljs.core.chunk_rest(s__35494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35496),null);
}
} else {
var warning = cljs.core.first(s__35494__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35491_$_iter__35493(cljs.core.rest(s__35494__$2)));
}
} else {
return null;
}
break;
}
});})(s__35492__$1,map__35497,map__35497__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35489,map__35489__$1,sources,compiled,map__35487,map__35487__$1,msg,info,reload_info))
,null,null));
});})(s__35492__$1,map__35497,map__35497__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35489,map__35489__$1,sources,compiled,map__35487,map__35487__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35491(cljs.core.rest(s__35492__$1)));
} else {
var G__35674 = cljs.core.rest(s__35492__$1);
s__35492__$1 = G__35674;
continue;
}
} else {
var G__35675 = cljs.core.rest(s__35492__$1);
s__35492__$1 = G__35675;
continue;
}
} else {
return null;
}
break;
}
});})(map__35489,map__35489__$1,sources,compiled,map__35487,map__35487__$1,msg,info,reload_info))
,null,null));
});})(map__35489,map__35489__$1,sources,compiled,map__35487,map__35487__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35499_35676 = cljs.core.seq(warnings);
var chunk__35500_35677 = null;
var count__35501_35678 = (0);
var i__35502_35679 = (0);
while(true){
if((i__35502_35679 < count__35501_35678)){
var map__35507_35680 = chunk__35500_35677.cljs$core$IIndexed$_nth$arity$2(null,i__35502_35679);
var map__35507_35681__$1 = (((((!((map__35507_35680 == null))))?(((((map__35507_35680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35507_35680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35507_35680):map__35507_35680);
var w_35682 = map__35507_35681__$1;
var msg_35683__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35507_35681__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35507_35681__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35507_35681__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35507_35681__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35686)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35684),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35685),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35683__$1)].join(''));


var G__35687 = seq__35499_35676;
var G__35688 = chunk__35500_35677;
var G__35689 = count__35501_35678;
var G__35690 = (i__35502_35679 + (1));
seq__35499_35676 = G__35687;
chunk__35500_35677 = G__35688;
count__35501_35678 = G__35689;
i__35502_35679 = G__35690;
continue;
} else {
var temp__5735__auto___35691 = cljs.core.seq(seq__35499_35676);
if(temp__5735__auto___35691){
var seq__35499_35692__$1 = temp__5735__auto___35691;
if(cljs.core.chunked_seq_QMARK_(seq__35499_35692__$1)){
var c__4550__auto___35693 = cljs.core.chunk_first(seq__35499_35692__$1);
var G__35694 = cljs.core.chunk_rest(seq__35499_35692__$1);
var G__35695 = c__4550__auto___35693;
var G__35696 = cljs.core.count(c__4550__auto___35693);
var G__35697 = (0);
seq__35499_35676 = G__35694;
chunk__35500_35677 = G__35695;
count__35501_35678 = G__35696;
i__35502_35679 = G__35697;
continue;
} else {
var map__35509_35698 = cljs.core.first(seq__35499_35692__$1);
var map__35509_35699__$1 = (((((!((map__35509_35698 == null))))?(((((map__35509_35698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35509_35698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35509_35698):map__35509_35698);
var w_35700 = map__35509_35699__$1;
var msg_35701__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35509_35699__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35509_35699__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35509_35699__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35509_35699__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35704)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35702),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35703),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35701__$1)].join(''));


var G__35705 = cljs.core.next(seq__35499_35692__$1);
var G__35706 = null;
var G__35707 = (0);
var G__35708 = (0);
seq__35499_35676 = G__35705;
chunk__35500_35677 = G__35706;
count__35501_35678 = G__35707;
i__35502_35679 = G__35708;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35489,map__35489__$1,sources,compiled,warnings,map__35487,map__35487__$1,msg,info,reload_info){
return (function (p__35511){
var map__35512 = p__35511;
var map__35512__$1 = (((((!((map__35512 == null))))?(((((map__35512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35512):map__35512);
var src = map__35512__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35512__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35512__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35489,map__35489__$1,sources,compiled,warnings,map__35487,map__35487__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35489,map__35489__$1,sources,compiled,warnings,map__35487,map__35487__$1,msg,info,reload_info){
return (function (p__35514){
var map__35515 = p__35514;
var map__35515__$1 = (((((!((map__35515 == null))))?(((((map__35515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35515):map__35515);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35515__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35489,map__35489__$1,sources,compiled,warnings,map__35487,map__35487__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35489,map__35489__$1,sources,compiled,warnings,map__35487,map__35487__$1,msg,info,reload_info){
return (function (p__35517){
var map__35518 = p__35517;
var map__35518__$1 = (((((!((map__35518 == null))))?(((((map__35518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35518):map__35518);
var rc = map__35518__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35518__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35489,map__35489__$1,sources,compiled,warnings,map__35487,map__35487__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35489,map__35489__$1,sources,compiled,warnings,map__35487,map__35487__$1,msg,info,reload_info){
return (function (p1__35485_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35485_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35489,map__35489__$1,sources,compiled,warnings,map__35487,map__35487__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35520){
var map__35521 = p__35520;
var map__35521__$1 = (((((!((map__35521 == null))))?(((((map__35521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35521):map__35521);
var msg = map__35521__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35521__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35523 = cljs.core.seq(updates);
var chunk__35525 = null;
var count__35526 = (0);
var i__35527 = (0);
while(true){
if((i__35527 < count__35526)){
var path = chunk__35525.cljs$core$IIndexed$_nth$arity$2(null,i__35527);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35564_35712 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35567_35713 = null;
var count__35568_35714 = (0);
var i__35569_35715 = (0);
while(true){
if((i__35569_35715 < count__35568_35714)){
var node_35716 = chunk__35567_35713.cljs$core$IIndexed$_nth$arity$2(null,i__35569_35715);
var path_match_35717 = shadow.cljs.devtools.client.browser.match_paths(node_35716.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35717)){
var new_link_35718 = (function (){var G__35574 = node_35716.cloneNode(true);
G__35574.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35717),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35574;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35717], 0));

goog.dom.insertSiblingAfter(new_link_35718,node_35716);

goog.dom.removeNode(node_35716);


var G__35720 = seq__35564_35712;
var G__35721 = chunk__35567_35713;
var G__35722 = count__35568_35714;
var G__35723 = (i__35569_35715 + (1));
seq__35564_35712 = G__35720;
chunk__35567_35713 = G__35721;
count__35568_35714 = G__35722;
i__35569_35715 = G__35723;
continue;
} else {
var G__35724 = seq__35564_35712;
var G__35725 = chunk__35567_35713;
var G__35726 = count__35568_35714;
var G__35727 = (i__35569_35715 + (1));
seq__35564_35712 = G__35724;
chunk__35567_35713 = G__35725;
count__35568_35714 = G__35726;
i__35569_35715 = G__35727;
continue;
}
} else {
var temp__5735__auto___35728 = cljs.core.seq(seq__35564_35712);
if(temp__5735__auto___35728){
var seq__35564_35729__$1 = temp__5735__auto___35728;
if(cljs.core.chunked_seq_QMARK_(seq__35564_35729__$1)){
var c__4550__auto___35730 = cljs.core.chunk_first(seq__35564_35729__$1);
var G__35731 = cljs.core.chunk_rest(seq__35564_35729__$1);
var G__35732 = c__4550__auto___35730;
var G__35733 = cljs.core.count(c__4550__auto___35730);
var G__35734 = (0);
seq__35564_35712 = G__35731;
chunk__35567_35713 = G__35732;
count__35568_35714 = G__35733;
i__35569_35715 = G__35734;
continue;
} else {
var node_35736 = cljs.core.first(seq__35564_35729__$1);
var path_match_35737 = shadow.cljs.devtools.client.browser.match_paths(node_35736.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35737)){
var new_link_35738 = (function (){var G__35575 = node_35736.cloneNode(true);
G__35575.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35737),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35575;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35737], 0));

goog.dom.insertSiblingAfter(new_link_35738,node_35736);

goog.dom.removeNode(node_35736);


var G__35739 = cljs.core.next(seq__35564_35729__$1);
var G__35740 = null;
var G__35741 = (0);
var G__35742 = (0);
seq__35564_35712 = G__35739;
chunk__35567_35713 = G__35740;
count__35568_35714 = G__35741;
i__35569_35715 = G__35742;
continue;
} else {
var G__35743 = cljs.core.next(seq__35564_35729__$1);
var G__35744 = null;
var G__35745 = (0);
var G__35746 = (0);
seq__35564_35712 = G__35743;
chunk__35567_35713 = G__35744;
count__35568_35714 = G__35745;
i__35569_35715 = G__35746;
continue;
}
}
} else {
}
}
break;
}


var G__35747 = seq__35523;
var G__35748 = chunk__35525;
var G__35749 = count__35526;
var G__35750 = (i__35527 + (1));
seq__35523 = G__35747;
chunk__35525 = G__35748;
count__35526 = G__35749;
i__35527 = G__35750;
continue;
} else {
var G__35751 = seq__35523;
var G__35752 = chunk__35525;
var G__35753 = count__35526;
var G__35754 = (i__35527 + (1));
seq__35523 = G__35751;
chunk__35525 = G__35752;
count__35526 = G__35753;
i__35527 = G__35754;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35523);
if(temp__5735__auto__){
var seq__35523__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35523__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35523__$1);
var G__35755 = cljs.core.chunk_rest(seq__35523__$1);
var G__35756 = c__4550__auto__;
var G__35757 = cljs.core.count(c__4550__auto__);
var G__35758 = (0);
seq__35523 = G__35755;
chunk__35525 = G__35756;
count__35526 = G__35757;
i__35527 = G__35758;
continue;
} else {
var path = cljs.core.first(seq__35523__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35580_35759 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35583_35760 = null;
var count__35584_35761 = (0);
var i__35585_35762 = (0);
while(true){
if((i__35585_35762 < count__35584_35761)){
var node_35763 = chunk__35583_35760.cljs$core$IIndexed$_nth$arity$2(null,i__35585_35762);
var path_match_35764 = shadow.cljs.devtools.client.browser.match_paths(node_35763.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35764)){
var new_link_35765 = (function (){var G__35606 = node_35763.cloneNode(true);
G__35606.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35764),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35606;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35764], 0));

goog.dom.insertSiblingAfter(new_link_35765,node_35763);

goog.dom.removeNode(node_35763);


var G__35766 = seq__35580_35759;
var G__35767 = chunk__35583_35760;
var G__35768 = count__35584_35761;
var G__35769 = (i__35585_35762 + (1));
seq__35580_35759 = G__35766;
chunk__35583_35760 = G__35767;
count__35584_35761 = G__35768;
i__35585_35762 = G__35769;
continue;
} else {
var G__35770 = seq__35580_35759;
var G__35771 = chunk__35583_35760;
var G__35772 = count__35584_35761;
var G__35773 = (i__35585_35762 + (1));
seq__35580_35759 = G__35770;
chunk__35583_35760 = G__35771;
count__35584_35761 = G__35772;
i__35585_35762 = G__35773;
continue;
}
} else {
var temp__5735__auto___35774__$1 = cljs.core.seq(seq__35580_35759);
if(temp__5735__auto___35774__$1){
var seq__35580_35775__$1 = temp__5735__auto___35774__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35580_35775__$1)){
var c__4550__auto___35776 = cljs.core.chunk_first(seq__35580_35775__$1);
var G__35777 = cljs.core.chunk_rest(seq__35580_35775__$1);
var G__35778 = c__4550__auto___35776;
var G__35779 = cljs.core.count(c__4550__auto___35776);
var G__35780 = (0);
seq__35580_35759 = G__35777;
chunk__35583_35760 = G__35778;
count__35584_35761 = G__35779;
i__35585_35762 = G__35780;
continue;
} else {
var node_35781 = cljs.core.first(seq__35580_35775__$1);
var path_match_35782 = shadow.cljs.devtools.client.browser.match_paths(node_35781.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35782)){
var new_link_35783 = (function (){var G__35607 = node_35781.cloneNode(true);
G__35607.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35782),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35607;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35782], 0));

goog.dom.insertSiblingAfter(new_link_35783,node_35781);

goog.dom.removeNode(node_35781);


var G__35784 = cljs.core.next(seq__35580_35775__$1);
var G__35785 = null;
var G__35786 = (0);
var G__35787 = (0);
seq__35580_35759 = G__35784;
chunk__35583_35760 = G__35785;
count__35584_35761 = G__35786;
i__35585_35762 = G__35787;
continue;
} else {
var G__35788 = cljs.core.next(seq__35580_35775__$1);
var G__35789 = null;
var G__35790 = (0);
var G__35791 = (0);
seq__35580_35759 = G__35788;
chunk__35583_35760 = G__35789;
count__35584_35761 = G__35790;
i__35585_35762 = G__35791;
continue;
}
}
} else {
}
}
break;
}


var G__35792 = cljs.core.next(seq__35523__$1);
var G__35793 = null;
var G__35794 = (0);
var G__35795 = (0);
seq__35523 = G__35792;
chunk__35525 = G__35793;
count__35526 = G__35794;
i__35527 = G__35795;
continue;
} else {
var G__35796 = cljs.core.next(seq__35523__$1);
var G__35797 = null;
var G__35798 = (0);
var G__35799 = (0);
seq__35523 = G__35796;
chunk__35525 = G__35797;
count__35526 = G__35798;
i__35527 = G__35799;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35608){
var map__35609 = p__35608;
var map__35609__$1 = (((((!((map__35609 == null))))?(((((map__35609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35609):map__35609);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35609,map__35609__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__35609,map__35609__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35614,done){
var map__35615 = p__35614;
var map__35615__$1 = (((((!((map__35615 == null))))?(((((map__35615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35615):map__35615);
var msg = map__35615__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35615,map__35615__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35617){
var map__35618 = p__35617;
var map__35618__$1 = (((((!((map__35618 == null))))?(((((map__35618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35618):map__35618);
var src = map__35618__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35618__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35615,map__35615__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35615,map__35615__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35620){var e = e35620;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__35615,map__35615__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35626,done){
var map__35627 = p__35626;
var map__35627__$1 = (((((!((map__35627 == null))))?(((((map__35627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35627):map__35627);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35627__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35627__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35627,map__35627__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__35627,map__35627__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35629){
var map__35630 = p__35629;
var map__35630__$1 = (((((!((map__35630 == null))))?(((((map__35630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35630):map__35630);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35630__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35630__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35632,done){
var map__35633 = p__35632;
var map__35633__$1 = (((((!((map__35633 == null))))?(((((map__35633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35633):map__35633);
var msg = map__35633__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35635_35822 = type;
var G__35635_35823__$1 = (((G__35635_35822 instanceof cljs.core.Keyword))?G__35635_35822.fqn:null);
switch (G__35635_35823__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35636 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35637 = ((function (G__35636){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35636))
;
var G__35638 = "POST";
var G__35639 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35640 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35636,G__35637,G__35638,G__35639,G__35640);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35641){var e = e35641;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35840 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35840)){
var s_35841 = temp__5735__auto___35840;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35841.onclose = ((function (s_35841,temp__5735__auto___35840){
return (function (e){
return null;
});})(s_35841,temp__5735__auto___35840))
;

s_35841.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
