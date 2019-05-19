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
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22686 = arguments.length;
var i__4532__auto___22687 = (0);
while(true){
if((i__4532__auto___22687 < len__4531__auto___22686)){
args__4534__auto__.push((arguments[i__4532__auto___22687]));

var G__22688 = (i__4532__auto___22687 + (1));
i__4532__auto___22687 = G__22688;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22684){
var G__22685 = cljs.core.first(seq22684);
var seq22684__$1 = cljs.core.next(seq22684);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22685,seq22684__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__22689){
var map__22690 = p__22689;
var map__22690__$1 = ((((!((map__22690 == null)))?(((((map__22690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22690):map__22690);
var src = map__22690__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
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
var seq__22692 = cljs.core.seq(sources);
var chunk__22693 = null;
var count__22694 = (0);
var i__22695 = (0);
while(true){
if((i__22695 < count__22694)){
var map__22696 = chunk__22693.cljs$core$IIndexed$_nth$arity$2(null,i__22695);
var map__22696__$1 = ((((!((map__22696 == null)))?(((((map__22696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22696):map__22696);
var src = map__22696__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22696__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22696__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22696__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22696__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__22700 = seq__22692;
var G__22701 = chunk__22693;
var G__22702 = count__22694;
var G__22703 = (i__22695 + (1));
seq__22692 = G__22700;
chunk__22693 = G__22701;
count__22694 = G__22702;
i__22695 = G__22703;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22692);
if(temp__5457__auto__){
var seq__22692__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22692__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22692__$1);
var G__22704 = cljs.core.chunk_rest(seq__22692__$1);
var G__22705 = c__4351__auto__;
var G__22706 = cljs.core.count(c__4351__auto__);
var G__22707 = (0);
seq__22692 = G__22704;
chunk__22693 = G__22705;
count__22694 = G__22706;
i__22695 = G__22707;
continue;
} else {
var map__22698 = cljs.core.first(seq__22692__$1);
var map__22698__$1 = ((((!((map__22698 == null)))?(((((map__22698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22698):map__22698);
var src = map__22698__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22698__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22698__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22698__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22698__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__22708 = cljs.core.next(seq__22692__$1);
var G__22709 = null;
var G__22710 = (0);
var G__22711 = (0);
seq__22692 = G__22708;
chunk__22693 = G__22709;
count__22694 = G__22710;
i__22695 = G__22711;
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
var seq__22712 = cljs.core.seq(js_requires);
var chunk__22713 = null;
var count__22714 = (0);
var i__22715 = (0);
while(true){
if((i__22715 < count__22714)){
var js_ns = chunk__22713.cljs$core$IIndexed$_nth$arity$2(null,i__22715);
var require_str_22716 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22716);


var G__22717 = seq__22712;
var G__22718 = chunk__22713;
var G__22719 = count__22714;
var G__22720 = (i__22715 + (1));
seq__22712 = G__22717;
chunk__22713 = G__22718;
count__22714 = G__22719;
i__22715 = G__22720;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22712);
if(temp__5457__auto__){
var seq__22712__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22712__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22712__$1);
var G__22721 = cljs.core.chunk_rest(seq__22712__$1);
var G__22722 = c__4351__auto__;
var G__22723 = cljs.core.count(c__4351__auto__);
var G__22724 = (0);
seq__22712 = G__22721;
chunk__22713 = G__22722;
count__22714 = G__22723;
i__22715 = G__22724;
continue;
} else {
var js_ns = cljs.core.first(seq__22712__$1);
var require_str_22725 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22725);


var G__22726 = cljs.core.next(seq__22712__$1);
var G__22727 = null;
var G__22728 = (0);
var G__22729 = (0);
seq__22712 = G__22726;
chunk__22713 = G__22727;
count__22714 = G__22728;
i__22715 = G__22729;
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
var G__22730 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__22730) : callback.call(null,G__22730));
} else {
var G__22731 = shadow.cljs.devtools.client.env.files_url();
var G__22732 = ((function (G__22731){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__22731))
;
var G__22733 = "POST";
var G__22734 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__22735 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__22731,G__22732,G__22733,G__22734,G__22735);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__22737){
var map__22738 = p__22737;
var map__22738__$1 = ((((!((map__22738 == null)))?(((((map__22738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22738):map__22738);
var msg = map__22738__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22738__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22738__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__22740 = info;
var map__22740__$1 = ((((!((map__22740 == null)))?(((((map__22740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22740):map__22740);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__22740,map__22740__$1,sources,compiled,map__22738,map__22738__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22742(s__22743){
return (new cljs.core.LazySeq(null,((function (map__22740,map__22740__$1,sources,compiled,map__22738,map__22738__$1,msg,info,reload_info){
return (function (){
var s__22743__$1 = s__22743;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22743__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__22748 = cljs.core.first(xs__6012__auto__);
var map__22748__$1 = ((((!((map__22748 == null)))?(((((map__22748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22748):map__22748);
var src = map__22748__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22748__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22748__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__22743__$1,map__22748,map__22748__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22740,map__22740__$1,sources,compiled,map__22738,map__22738__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22742_$_iter__22744(s__22745){
return (new cljs.core.LazySeq(null,((function (s__22743__$1,map__22748,map__22748__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22740,map__22740__$1,sources,compiled,map__22738,map__22738__$1,msg,info,reload_info){
return (function (){
var s__22745__$1 = s__22745;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__22745__$1);
if(temp__5457__auto____$1){
var s__22745__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22745__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22745__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22747 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22746 = (0);
while(true){
if((i__22746 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22746);
cljs.core.chunk_append(b__22747,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22767 = (i__22746 + (1));
i__22746 = G__22767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22747),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22742_$_iter__22744(cljs.core.chunk_rest(s__22745__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22747),null);
}
} else {
var warning = cljs.core.first(s__22745__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22742_$_iter__22744(cljs.core.rest(s__22745__$2)));
}
} else {
return null;
}
break;
}
});})(s__22743__$1,map__22748,map__22748__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22740,map__22740__$1,sources,compiled,map__22738,map__22738__$1,msg,info,reload_info))
,null,null));
});})(s__22743__$1,map__22748,map__22748__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__22740,map__22740__$1,sources,compiled,map__22738,map__22738__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22742(cljs.core.rest(s__22743__$1)));
} else {
var G__22768 = cljs.core.rest(s__22743__$1);
s__22743__$1 = G__22768;
continue;
}
} else {
var G__22769 = cljs.core.rest(s__22743__$1);
s__22743__$1 = G__22769;
continue;
}
} else {
return null;
}
break;
}
});})(map__22740,map__22740__$1,sources,compiled,map__22738,map__22738__$1,msg,info,reload_info))
,null,null));
});})(map__22740,map__22740__$1,sources,compiled,map__22738,map__22738__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__22750_22770 = cljs.core.seq(warnings);
var chunk__22751_22771 = null;
var count__22752_22772 = (0);
var i__22753_22773 = (0);
while(true){
if((i__22753_22773 < count__22752_22772)){
var map__22754_22774 = chunk__22751_22771.cljs$core$IIndexed$_nth$arity$2(null,i__22753_22773);
var map__22754_22775__$1 = ((((!((map__22754_22774 == null)))?(((((map__22754_22774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22754_22774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22754_22774):map__22754_22774);
var w_22776 = map__22754_22775__$1;
var msg_22777__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22754_22775__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22754_22775__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22754_22775__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22754_22775__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22780)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22778),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22779),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22777__$1)].join(''));


var G__22781 = seq__22750_22770;
var G__22782 = chunk__22751_22771;
var G__22783 = count__22752_22772;
var G__22784 = (i__22753_22773 + (1));
seq__22750_22770 = G__22781;
chunk__22751_22771 = G__22782;
count__22752_22772 = G__22783;
i__22753_22773 = G__22784;
continue;
} else {
var temp__5457__auto___22785 = cljs.core.seq(seq__22750_22770);
if(temp__5457__auto___22785){
var seq__22750_22786__$1 = temp__5457__auto___22785;
if(cljs.core.chunked_seq_QMARK_(seq__22750_22786__$1)){
var c__4351__auto___22787 = cljs.core.chunk_first(seq__22750_22786__$1);
var G__22788 = cljs.core.chunk_rest(seq__22750_22786__$1);
var G__22789 = c__4351__auto___22787;
var G__22790 = cljs.core.count(c__4351__auto___22787);
var G__22791 = (0);
seq__22750_22770 = G__22788;
chunk__22751_22771 = G__22789;
count__22752_22772 = G__22790;
i__22753_22773 = G__22791;
continue;
} else {
var map__22756_22792 = cljs.core.first(seq__22750_22786__$1);
var map__22756_22793__$1 = ((((!((map__22756_22792 == null)))?(((((map__22756_22792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22756_22792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22756_22792):map__22756_22792);
var w_22794 = map__22756_22793__$1;
var msg_22795__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22756_22793__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22756_22793__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22756_22793__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22756_22793__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22798)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22796),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22797),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22795__$1)].join(''));


var G__22799 = cljs.core.next(seq__22750_22786__$1);
var G__22800 = null;
var G__22801 = (0);
var G__22802 = (0);
seq__22750_22770 = G__22799;
chunk__22751_22771 = G__22800;
count__22752_22772 = G__22801;
i__22753_22773 = G__22802;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22740,map__22740__$1,sources,compiled,warnings,map__22738,map__22738__$1,msg,info,reload_info){
return (function (p__22758){
var map__22759 = p__22758;
var map__22759__$1 = ((((!((map__22759 == null)))?(((((map__22759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22759):map__22759);
var src = map__22759__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22759__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22759__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__22740,map__22740__$1,sources,compiled,warnings,map__22738,map__22738__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__22740,map__22740__$1,sources,compiled,warnings,map__22738,map__22738__$1,msg,info,reload_info){
return (function (p__22761){
var map__22762 = p__22761;
var map__22762__$1 = ((((!((map__22762 == null)))?(((((map__22762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22762):map__22762);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22762__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__22740,map__22740__$1,sources,compiled,warnings,map__22738,map__22738__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22740,map__22740__$1,sources,compiled,warnings,map__22738,map__22738__$1,msg,info,reload_info){
return (function (p__22764){
var map__22765 = p__22764;
var map__22765__$1 = ((((!((map__22765 == null)))?(((((map__22765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22765):map__22765);
var rc = map__22765__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22765__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__22740,map__22740__$1,sources,compiled,warnings,map__22738,map__22738__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__22740,map__22740__$1,sources,compiled,warnings,map__22738,map__22738__$1,msg,info,reload_info){
return (function (p1__22736_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22736_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__22740,map__22740__$1,sources,compiled,warnings,map__22738,map__22738__$1,msg,info,reload_info))
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
var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__3938__auto__){
return rel_new;
} else {
return and__3938__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__3938__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__3938__auto____$1){
return new$;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__22803){
var map__22804 = p__22803;
var map__22804__$1 = ((((!((map__22804 == null)))?(((((map__22804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22804):map__22804);
var msg = map__22804__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22804__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__22806 = cljs.core.seq(updates);
var chunk__22808 = null;
var count__22809 = (0);
var i__22810 = (0);
while(true){
if((i__22810 < count__22809)){
var path = chunk__22808.cljs$core$IIndexed$_nth$arity$2(null,i__22810);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22812_22832 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22815_22833 = null;
var count__22816_22834 = (0);
var i__22817_22835 = (0);
while(true){
if((i__22817_22835 < count__22816_22834)){
var node_22836 = chunk__22815_22833.cljs$core$IIndexed$_nth$arity$2(null,i__22817_22835);
var path_match_22837 = shadow.cljs.devtools.client.browser.match_paths(node_22836.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22837)){
var new_link_22838 = (function (){var G__22820 = node_22836.cloneNode(true);
G__22820.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22837),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22820;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22837], 0));

goog.dom.insertSiblingAfter(new_link_22838,node_22836);

goog.dom.removeNode(node_22836);


var G__22839 = seq__22812_22832;
var G__22840 = chunk__22815_22833;
var G__22841 = count__22816_22834;
var G__22842 = (i__22817_22835 + (1));
seq__22812_22832 = G__22839;
chunk__22815_22833 = G__22840;
count__22816_22834 = G__22841;
i__22817_22835 = G__22842;
continue;
} else {
var G__22843 = seq__22812_22832;
var G__22844 = chunk__22815_22833;
var G__22845 = count__22816_22834;
var G__22846 = (i__22817_22835 + (1));
seq__22812_22832 = G__22843;
chunk__22815_22833 = G__22844;
count__22816_22834 = G__22845;
i__22817_22835 = G__22846;
continue;
}
} else {
var temp__5457__auto___22847 = cljs.core.seq(seq__22812_22832);
if(temp__5457__auto___22847){
var seq__22812_22848__$1 = temp__5457__auto___22847;
if(cljs.core.chunked_seq_QMARK_(seq__22812_22848__$1)){
var c__4351__auto___22849 = cljs.core.chunk_first(seq__22812_22848__$1);
var G__22850 = cljs.core.chunk_rest(seq__22812_22848__$1);
var G__22851 = c__4351__auto___22849;
var G__22852 = cljs.core.count(c__4351__auto___22849);
var G__22853 = (0);
seq__22812_22832 = G__22850;
chunk__22815_22833 = G__22851;
count__22816_22834 = G__22852;
i__22817_22835 = G__22853;
continue;
} else {
var node_22854 = cljs.core.first(seq__22812_22848__$1);
var path_match_22855 = shadow.cljs.devtools.client.browser.match_paths(node_22854.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22855)){
var new_link_22856 = (function (){var G__22821 = node_22854.cloneNode(true);
G__22821.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22855),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22821;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22855], 0));

goog.dom.insertSiblingAfter(new_link_22856,node_22854);

goog.dom.removeNode(node_22854);


var G__22857 = cljs.core.next(seq__22812_22848__$1);
var G__22858 = null;
var G__22859 = (0);
var G__22860 = (0);
seq__22812_22832 = G__22857;
chunk__22815_22833 = G__22858;
count__22816_22834 = G__22859;
i__22817_22835 = G__22860;
continue;
} else {
var G__22861 = cljs.core.next(seq__22812_22848__$1);
var G__22862 = null;
var G__22863 = (0);
var G__22864 = (0);
seq__22812_22832 = G__22861;
chunk__22815_22833 = G__22862;
count__22816_22834 = G__22863;
i__22817_22835 = G__22864;
continue;
}
}
} else {
}
}
break;
}


var G__22865 = seq__22806;
var G__22866 = chunk__22808;
var G__22867 = count__22809;
var G__22868 = (i__22810 + (1));
seq__22806 = G__22865;
chunk__22808 = G__22866;
count__22809 = G__22867;
i__22810 = G__22868;
continue;
} else {
var G__22869 = seq__22806;
var G__22870 = chunk__22808;
var G__22871 = count__22809;
var G__22872 = (i__22810 + (1));
seq__22806 = G__22869;
chunk__22808 = G__22870;
count__22809 = G__22871;
i__22810 = G__22872;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22806);
if(temp__5457__auto__){
var seq__22806__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22806__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22806__$1);
var G__22873 = cljs.core.chunk_rest(seq__22806__$1);
var G__22874 = c__4351__auto__;
var G__22875 = cljs.core.count(c__4351__auto__);
var G__22876 = (0);
seq__22806 = G__22873;
chunk__22808 = G__22874;
count__22809 = G__22875;
i__22810 = G__22876;
continue;
} else {
var path = cljs.core.first(seq__22806__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22822_22877 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22825_22878 = null;
var count__22826_22879 = (0);
var i__22827_22880 = (0);
while(true){
if((i__22827_22880 < count__22826_22879)){
var node_22881 = chunk__22825_22878.cljs$core$IIndexed$_nth$arity$2(null,i__22827_22880);
var path_match_22882 = shadow.cljs.devtools.client.browser.match_paths(node_22881.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22882)){
var new_link_22883 = (function (){var G__22830 = node_22881.cloneNode(true);
G__22830.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22882),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22830;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22882], 0));

goog.dom.insertSiblingAfter(new_link_22883,node_22881);

goog.dom.removeNode(node_22881);


var G__22884 = seq__22822_22877;
var G__22885 = chunk__22825_22878;
var G__22886 = count__22826_22879;
var G__22887 = (i__22827_22880 + (1));
seq__22822_22877 = G__22884;
chunk__22825_22878 = G__22885;
count__22826_22879 = G__22886;
i__22827_22880 = G__22887;
continue;
} else {
var G__22888 = seq__22822_22877;
var G__22889 = chunk__22825_22878;
var G__22890 = count__22826_22879;
var G__22891 = (i__22827_22880 + (1));
seq__22822_22877 = G__22888;
chunk__22825_22878 = G__22889;
count__22826_22879 = G__22890;
i__22827_22880 = G__22891;
continue;
}
} else {
var temp__5457__auto___22892__$1 = cljs.core.seq(seq__22822_22877);
if(temp__5457__auto___22892__$1){
var seq__22822_22893__$1 = temp__5457__auto___22892__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22822_22893__$1)){
var c__4351__auto___22894 = cljs.core.chunk_first(seq__22822_22893__$1);
var G__22895 = cljs.core.chunk_rest(seq__22822_22893__$1);
var G__22896 = c__4351__auto___22894;
var G__22897 = cljs.core.count(c__4351__auto___22894);
var G__22898 = (0);
seq__22822_22877 = G__22895;
chunk__22825_22878 = G__22896;
count__22826_22879 = G__22897;
i__22827_22880 = G__22898;
continue;
} else {
var node_22899 = cljs.core.first(seq__22822_22893__$1);
var path_match_22900 = shadow.cljs.devtools.client.browser.match_paths(node_22899.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22900)){
var new_link_22901 = (function (){var G__22831 = node_22899.cloneNode(true);
G__22831.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22900),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22831;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22900], 0));

goog.dom.insertSiblingAfter(new_link_22901,node_22899);

goog.dom.removeNode(node_22899);


var G__22902 = cljs.core.next(seq__22822_22893__$1);
var G__22903 = null;
var G__22904 = (0);
var G__22905 = (0);
seq__22822_22877 = G__22902;
chunk__22825_22878 = G__22903;
count__22826_22879 = G__22904;
i__22827_22880 = G__22905;
continue;
} else {
var G__22906 = cljs.core.next(seq__22822_22893__$1);
var G__22907 = null;
var G__22908 = (0);
var G__22909 = (0);
seq__22822_22877 = G__22906;
chunk__22825_22878 = G__22907;
count__22826_22879 = G__22908;
i__22827_22880 = G__22909;
continue;
}
}
} else {
}
}
break;
}


var G__22910 = cljs.core.next(seq__22806__$1);
var G__22911 = null;
var G__22912 = (0);
var G__22913 = (0);
seq__22806 = G__22910;
chunk__22808 = G__22911;
count__22809 = G__22912;
i__22810 = G__22913;
continue;
} else {
var G__22914 = cljs.core.next(seq__22806__$1);
var G__22915 = null;
var G__22916 = (0);
var G__22917 = (0);
seq__22806 = G__22914;
chunk__22808 = G__22915;
count__22809 = G__22916;
i__22810 = G__22917;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__22918){
var map__22919 = p__22918;
var map__22919__$1 = ((((!((map__22919 == null)))?(((((map__22919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22919):map__22919);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22919__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22919__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__22919,map__22919__$1,id,js){
return (function (){
return eval(js);
});})(map__22919,map__22919__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__22921){
var map__22922 = p__22921;
var map__22922__$1 = ((((!((map__22922 == null)))?(((((map__22922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22922):map__22922);
var msg = map__22922__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__22922,map__22922__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__22924){
var map__22925 = p__22924;
var map__22925__$1 = ((((!((map__22925 == null)))?(((((map__22925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22925):map__22925);
var src = map__22925__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22925__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__22922,map__22922__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__22922,map__22922__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__22922,map__22922__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__22927){
var map__22928 = p__22927;
var map__22928__$1 = ((((!((map__22928 == null)))?(((((map__22928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22928):map__22928);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22928__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__22928,map__22928__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__22928,map__22928__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__22930){
var map__22931 = p__22930;
var map__22931__$1 = ((((!((map__22931 == null)))?(((((map__22931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22931):map__22931);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22931__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__22933){
var map__22934 = p__22933;
var map__22934__$1 = ((((!((map__22934 == null)))?(((((map__22934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22934):map__22934);
var msg = map__22934__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__22936 = type;
var G__22936__$1 = (((G__22936 instanceof cljs.core.Keyword))?G__22936.fqn:null);
switch (G__22936__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__22938 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__22939 = ((function (G__22938){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__22938))
;
var G__22940 = "POST";
var G__22941 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__22942 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__22938,G__22939,G__22940,G__22941,G__22942);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
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

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
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
}catch (e22943){var e = e22943;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___22944 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___22944)){
var s_22945 = temp__5457__auto___22944;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_22945.onclose = ((function (s_22945,temp__5457__auto___22944){
return (function (e){
return null;
});})(s_22945,temp__5457__auto___22944))
;

s_22945.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
