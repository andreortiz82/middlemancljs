goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
var G__22018 = comp.state;
var G__22019 = ":rum/state";
return goog.object.get(G__22018,G__22019);
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__22021 = cljs.core.seq(props);
var chunk__22023 = null;
var count__22024 = (0);
var i__22025 = (0);
while(true){
if((i__22025 < count__22024)){
var vec__22030 = chunk__22023.cljs$core$IIndexed$_nth$arity$2(null,i__22025);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22030,(1),null);
if(!((v == null))){
var G__22033_22042 = obj;
var G__22034_22043 = cljs.core.name(k);
var G__22035_22044 = cljs.core.clj__GT_js(v);
goog.object.set(G__22033_22042,G__22034_22043,G__22035_22044);


var G__22045 = seq__22021;
var G__22046 = chunk__22023;
var G__22047 = count__22024;
var G__22048 = (i__22025 + (1));
seq__22021 = G__22045;
chunk__22023 = G__22046;
count__22024 = G__22047;
i__22025 = G__22048;
continue;
} else {
var G__22049 = seq__22021;
var G__22050 = chunk__22023;
var G__22051 = count__22024;
var G__22052 = (i__22025 + (1));
seq__22021 = G__22049;
chunk__22023 = G__22050;
count__22024 = G__22051;
i__22025 = G__22052;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22021);
if(temp__5457__auto__){
var seq__22021__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22021__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22021__$1);
var G__22053 = cljs.core.chunk_rest(seq__22021__$1);
var G__22054 = c__4351__auto__;
var G__22055 = cljs.core.count(c__4351__auto__);
var G__22056 = (0);
seq__22021 = G__22053;
chunk__22023 = G__22054;
count__22024 = G__22055;
i__22025 = G__22056;
continue;
} else {
var vec__22036 = cljs.core.first(seq__22021__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(1),null);
if(!((v == null))){
var G__22039_22057 = obj;
var G__22040_22058 = cljs.core.name(k);
var G__22041_22059 = cljs.core.clj__GT_js(v);
goog.object.set(G__22039_22057,G__22040_22058,G__22041_22059);


var G__22060 = cljs.core.next(seq__22021__$1);
var G__22061 = null;
var G__22062 = (0);
var G__22063 = (0);
seq__22021 = G__22060;
chunk__22023 = G__22061;
count__22024 = G__22062;
i__22025 = G__22063;
continue;
} else {
var G__22064 = cljs.core.next(seq__22021__$1);
var G__22066 = null;
var G__22068 = (0);
var G__22069 = (0);
seq__22021 = G__22064;
chunk__22023 = G__22066;
count__22024 = G__22068;
i__22025 = G__22069;
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
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__22078_SHARP_,p2__22075_SHARP_){
return (p2__22075_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__22075_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__22078_SHARP_) : p2__22075_SHARP_.call(null,p1__22078_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect(new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect(new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect(new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect(new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect(new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
var G__22119_22199 = this$;
var G__22120_22200 = "state";
var G__22121_22201 = ({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))});
goog.object.set(G__22119_22199,G__22120_22200,G__22121_22201);

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
var G__22125_22203 = prototype;
var G__22126_22204 = "componentWillMount";
var G__22127_22205 = ((function (G__22125_22203,G__22126_22204,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(G__22125_22203,G__22126_22204,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22125_22203,G__22126_22204,G__22127_22205);
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
var G__22128_22215 = prototype;
var G__22129_22216 = "componentDidMount";
var G__22130_22217 = ((function (G__22128_22215,G__22129_22216,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(G__22128_22215,G__22129_22216,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22128_22215,G__22129_22216,G__22130_22217);
}

var G__22131_22231 = prototype;
var G__22132_22232 = "componentWillReceiveProps";
var G__22133_22233 = ((function (G__22131_22231,G__22132_22232,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,G__22131_22231,G__22132_22232,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__22080_SHARP_,p2__22079_SHARP_){
return (p2__22079_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__22079_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__22080_SHARP_) : p2__22079_SHARP_.call(null,old_state,p1__22080_SHARP_));
});})(old_state,state,this$,G__22131_22231,G__22132_22232,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(G__22131_22231,G__22132_22232,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22131_22231,G__22132_22232,G__22133_22233);

if(cljs.core.empty_QMARK_(should_update)){
} else {
var G__22134_22235 = prototype;
var G__22135_22236 = "shouldComponentUpdate";
var G__22136_22237 = ((function (G__22134_22235,G__22135_22236,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__3949__auto__ = cljs.core.some(((function (old_state,new_state,this$,G__22134_22235,G__22135_22236,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__22081_SHARP_){
return (p1__22081_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__22081_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__22081_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,G__22134_22235,G__22135_22236,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
});})(G__22134_22235,G__22135_22236,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22134_22235,G__22135_22236,G__22136_22237);
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
var G__22139_22239 = prototype;
var G__22140_22240 = "componentWillUpdate";
var G__22141_22241 = ((function (G__22139_22239,G__22140_22240,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(G__22139_22239,G__22140_22240,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22139_22239,G__22140_22240,G__22141_22241);
}

var G__22142_22246 = prototype;
var G__22143_22247 = "render";
var G__22144_22248 = ((function (G__22142_22246,G__22143_22247,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__22147 = (function (){var G__22150 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__22150) : wrapped_render.call(null,G__22150));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22147,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22147,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(G__22142_22246,G__22143_22247,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22142_22246,G__22143_22247,G__22144_22248);

if(cljs.core.empty_QMARK_(did_update)){
} else {
var G__22151_22258 = prototype;
var G__22152_22259 = "componentDidUpdate";
var G__22153_22260 = ((function (G__22151_22258,G__22152_22259,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(G__22151_22258,G__22152_22259,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22151_22258,G__22152_22259,G__22153_22260);
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
var G__22157_22264 = prototype;
var G__22158_22265 = "componentDidCatch";
var G__22159_22266 = ((function (G__22157_22264,G__22158_22265,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
});})(G__22157_22264,G__22158_22265,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22157_22264,G__22158_22265,G__22159_22266);
}

var G__22161_22270 = prototype;
var G__22162_22271 = "componentWillUnmount";
var G__22163_22272 = ((function (G__22161_22270,G__22162_22271,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(G__22161_22270,G__22162_22271,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22161_22270,G__22162_22271,G__22163_22272);

if(cljs.core.empty_QMARK_(child_context)){
} else {
var G__22175_22281 = prototype;
var G__22176_22282 = "getChildContext";
var G__22177_22283 = ((function (G__22175_22281,G__22176_22282,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,G__22175_22281,G__22176_22282,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__22085_SHARP_){
return (p1__22085_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22085_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__22085_SHARP_.call(null,state));
});})(state,this$,G__22175_22281,G__22176_22282,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(G__22175_22281,G__22176_22282,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__22175_22281,G__22176_22282,G__22177_22283);
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__22304__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__22304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22317__i = 0, G__22317__a = new Array(arguments.length -  0);
while (G__22317__i < G__22317__a.length) {G__22317__a[G__22317__i] = arguments[G__22317__i + 0]; ++G__22317__i;}
  args = new cljs.core.IndexedSeq(G__22317__a,0,null);
} 
return G__22304__delegate.call(this,args);};
G__22304.cljs$lang$maxFixedArity = 0;
G__22304.cljs$lang$applyTo = (function (arglist__22318){
var args = cljs.core.seq(arglist__22318);
return G__22304__delegate(args);
});
G__22304.cljs$core$IFn$_invoke$arity$variadic = G__22304__delegate;
return G__22304;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__22319__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__22319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22320__i = 0, G__22320__a = new Array(arguments.length -  0);
while (G__22320__i < G__22320__a.length) {G__22320__a[G__22320__i] = arguments[G__22320__i + 0]; ++G__22320__i;}
  args = new cljs.core.IndexedSeq(G__22320__a,0,null);
} 
return G__22319__delegate.call(this,args);};
G__22319.cljs$lang$maxFixedArity = 0;
G__22319.cljs$lang$applyTo = (function (arglist__22321){
var args = cljs.core.seq(arglist__22321);
return G__22319__delegate(args);
});
G__22319.cljs$core$IFn$_invoke$arity$variadic = G__22319__delegate;
return G__22319;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__22323__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__22323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22324__i = 0, G__22324__a = new Array(arguments.length -  0);
while (G__22324__i < G__22324__a.length) {G__22324__a[G__22324__i] = arguments[G__22324__i + 0]; ++G__22324__i;}
  args = new cljs.core.IndexedSeq(G__22324__a,0,null);
} 
return G__22323__delegate.call(this,args);};
G__22323.cljs$lang$maxFixedArity = 0;
G__22323.cljs$lang$applyTo = (function (arglist__22325){
var args = cljs.core.seq(arglist__22325);
return G__22323__delegate(args);
});
G__22323.cljs$core$IFn$_invoke$arity$variadic = G__22323__delegate;
return G__22323;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = (typeof window !== 'undefined');
if(and__3938__auto__){
var or__3949__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (p1__22339_SHARP_){
return setTimeout(p1__22339_SHARP_,(16));
});
;})(or__3949__auto__))
}
})();
rum.core.batch = (function (){var or__3949__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((function (or__3949__auto____$1,or__3949__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__3949__auto____$1,or__3949__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__22347 = cljs.core.seq(queue);
var chunk__22349 = null;
var count__22350 = (0);
var i__22351 = (0);
while(true){
if((i__22351 < count__22350)){
var comp = chunk__22349.cljs$core$IIndexed$_nth$arity$2(null,i__22351);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__22353 = seq__22347;
var G__22354 = chunk__22349;
var G__22355 = count__22350;
var G__22356 = (i__22351 + (1));
seq__22347 = G__22353;
chunk__22349 = G__22354;
count__22350 = G__22355;
i__22351 = G__22356;
continue;
} else {
var G__22358 = seq__22347;
var G__22359 = chunk__22349;
var G__22360 = count__22350;
var G__22361 = (i__22351 + (1));
seq__22347 = G__22358;
chunk__22349 = G__22359;
count__22350 = G__22360;
i__22351 = G__22361;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__22347);
if(temp__5457__auto__){
var seq__22347__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22347__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__22347__$1);
var G__22362 = cljs.core.chunk_rest(seq__22347__$1);
var G__22363 = c__4351__auto__;
var G__22364 = cljs.core.count(c__4351__auto__);
var G__22365 = (0);
seq__22347 = G__22362;
chunk__22349 = G__22363;
count__22350 = G__22364;
i__22351 = G__22365;
continue;
} else {
var comp = cljs.core.first(seq__22347__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__22366 = cljs.core.next(seq__22347__$1);
var G__22367 = null;
var G__22368 = (0);
var G__22369 = (0);
seq__22347 = G__22366;
chunk__22349 = G__22367;
count__22350 = G__22368;
i__22351 = G__22369;
continue;
} else {
var G__22370 = cljs.core.next(seq__22347__$1);
var G__22371 = null;
var G__22372 = (0);
var G__22373 = (0);
seq__22347 = G__22370;
chunk__22349 = G__22371;
count__22350 = G__22372;
i__22351 = G__22373;
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
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__22387 = arguments.length;
switch (G__22387) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid());
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_22390 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__22394 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22394,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22394,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__22397_22418 = cljs.core.seq(old_reactions);
var chunk__22398_22419 = null;
var count__22399_22420 = (0);
var i__22400_22421 = (0);
while(true){
if((i__22400_22421 < count__22399_22420)){
var ref_22422 = chunk__22398_22419.cljs$core$IIndexed$_nth$arity$2(null,i__22400_22421);
if(cljs.core.contains_QMARK_(new_reactions,ref_22422)){
} else {
cljs.core.remove_watch(ref_22422,key);
}


var G__22423 = seq__22397_22418;
var G__22424 = chunk__22398_22419;
var G__22425 = count__22399_22420;
var G__22426 = (i__22400_22421 + (1));
seq__22397_22418 = G__22423;
chunk__22398_22419 = G__22424;
count__22399_22420 = G__22425;
i__22400_22421 = G__22426;
continue;
} else {
var temp__5457__auto___22427 = cljs.core.seq(seq__22397_22418);
if(temp__5457__auto___22427){
var seq__22397_22428__$1 = temp__5457__auto___22427;
if(cljs.core.chunked_seq_QMARK_(seq__22397_22428__$1)){
var c__4351__auto___22429 = cljs.core.chunk_first(seq__22397_22428__$1);
var G__22430 = cljs.core.chunk_rest(seq__22397_22428__$1);
var G__22431 = c__4351__auto___22429;
var G__22432 = cljs.core.count(c__4351__auto___22429);
var G__22433 = (0);
seq__22397_22418 = G__22430;
chunk__22398_22419 = G__22431;
count__22399_22420 = G__22432;
i__22400_22421 = G__22433;
continue;
} else {
var ref_22434 = cljs.core.first(seq__22397_22428__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_22434)){
} else {
cljs.core.remove_watch(ref_22434,key);
}


var G__22435 = cljs.core.next(seq__22397_22428__$1);
var G__22436 = null;
var G__22437 = (0);
var G__22438 = (0);
seq__22397_22418 = G__22435;
chunk__22398_22419 = G__22436;
count__22399_22420 = G__22437;
i__22400_22421 = G__22438;
continue;
}
} else {
}
}
break;
}

var seq__22401_22439 = cljs.core.seq(new_reactions);
var chunk__22402_22440 = null;
var count__22403_22441 = (0);
var i__22404_22442 = (0);
while(true){
if((i__22404_22442 < count__22403_22441)){
var ref_22443 = chunk__22402_22440.cljs$core$IIndexed$_nth$arity$2(null,i__22404_22442);
if(cljs.core.contains_QMARK_(old_reactions,ref_22443)){
} else {
cljs.core.add_watch(ref_22443,key,((function (seq__22401_22439,chunk__22402_22440,count__22403_22441,i__22404_22442,ref_22443,comp,old_reactions,vec__22394,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22390){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__22401_22439,chunk__22402_22440,count__22403_22441,i__22404_22442,ref_22443,comp,old_reactions,vec__22394,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22390))
);
}


var G__22444 = seq__22401_22439;
var G__22445 = chunk__22402_22440;
var G__22446 = count__22403_22441;
var G__22447 = (i__22404_22442 + (1));
seq__22401_22439 = G__22444;
chunk__22402_22440 = G__22445;
count__22403_22441 = G__22446;
i__22404_22442 = G__22447;
continue;
} else {
var temp__5457__auto___22448 = cljs.core.seq(seq__22401_22439);
if(temp__5457__auto___22448){
var seq__22401_22449__$1 = temp__5457__auto___22448;
if(cljs.core.chunked_seq_QMARK_(seq__22401_22449__$1)){
var c__4351__auto___22450 = cljs.core.chunk_first(seq__22401_22449__$1);
var G__22451 = cljs.core.chunk_rest(seq__22401_22449__$1);
var G__22452 = c__4351__auto___22450;
var G__22453 = cljs.core.count(c__4351__auto___22450);
var G__22454 = (0);
seq__22401_22439 = G__22451;
chunk__22402_22440 = G__22452;
count__22403_22441 = G__22453;
i__22404_22442 = G__22454;
continue;
} else {
var ref_22455 = cljs.core.first(seq__22401_22449__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_22455)){
} else {
cljs.core.add_watch(ref_22455,key,((function (seq__22401_22439,chunk__22402_22440,count__22403_22441,i__22404_22442,ref_22455,seq__22401_22449__$1,temp__5457__auto___22448,comp,old_reactions,vec__22394,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22390){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__22401_22439,chunk__22402_22440,count__22403_22441,i__22404_22442,ref_22455,seq__22401_22449__$1,temp__5457__auto___22448,comp,old_reactions,vec__22394,dom,next_state,new_reactions,key,_STAR_reactions_STAR_22390))
);
}


var G__22456 = cljs.core.next(seq__22401_22449__$1);
var G__22457 = null;
var G__22458 = (0);
var G__22459 = (0);
seq__22401_22439 = G__22456;
chunk__22402_22440 = G__22457;
count__22403_22441 = G__22458;
i__22404_22442 = G__22459;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_22390;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_22460 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__22405_22461 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__22406_22462 = null;
var count__22407_22463 = (0);
var i__22408_22464 = (0);
while(true){
if((i__22408_22464 < count__22407_22463)){
var ref_22465 = chunk__22406_22462.cljs$core$IIndexed$_nth$arity$2(null,i__22408_22464);
cljs.core.remove_watch(ref_22465,key_22460);


var G__22466 = seq__22405_22461;
var G__22467 = chunk__22406_22462;
var G__22468 = count__22407_22463;
var G__22469 = (i__22408_22464 + (1));
seq__22405_22461 = G__22466;
chunk__22406_22462 = G__22467;
count__22407_22463 = G__22468;
i__22408_22464 = G__22469;
continue;
} else {
var temp__5457__auto___22470 = cljs.core.seq(seq__22405_22461);
if(temp__5457__auto___22470){
var seq__22405_22472__$1 = temp__5457__auto___22470;
if(cljs.core.chunked_seq_QMARK_(seq__22405_22472__$1)){
var c__4351__auto___22473 = cljs.core.chunk_first(seq__22405_22472__$1);
var G__22475 = cljs.core.chunk_rest(seq__22405_22472__$1);
var G__22476 = c__4351__auto___22473;
var G__22477 = cljs.core.count(c__4351__auto___22473);
var G__22478 = (0);
seq__22405_22461 = G__22475;
chunk__22406_22462 = G__22476;
count__22407_22463 = G__22477;
i__22408_22464 = G__22478;
continue;
} else {
var ref_22479 = cljs.core.first(seq__22405_22472__$1);
cljs.core.remove_watch(ref_22479,key_22460);


var G__22480 = cljs.core.next(seq__22405_22472__$1);
var G__22481 = null;
var G__22482 = (0);
var G__22483 = (0);
seq__22405_22461 = G__22480;
chunk__22406_22462 = G__22481;
count__22407_22463 = G__22482;
i__22408_22464 = G__22483;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142)], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x) ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22499 = arguments.length;
var i__4532__auto___22500 = (0);
while(true){
if((i__4532__auto___22500 < len__4531__auto___22499)){
args__4534__auto__.push((arguments[i__4532__auto___22500]));

var G__22501 = (i__4532__auto___22500 + (1));
i__4532__auto___22500 = G__22501;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__22492){
var map__22494 = p__22492;
var map__22494__$1 = ((((!((map__22494 == null)))?(((((map__22494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22494):map__22494);
var options = map__22494__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq22488){
var G__22489 = cljs.core.first(seq22488);
var seq22488__$1 = cljs.core.next(seq22488);
var G__22490 = cljs.core.first(seq22488__$1);
var seq22488__$2 = cljs.core.next(seq22488__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22489,G__22490,seq22488__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22506 = arguments.length;
var i__4532__auto___22507 = (0);
while(true){
if((i__4532__auto___22507 < len__4531__auto___22506)){
args__4534__auto__.push((arguments[i__4532__auto___22507]));

var G__22508 = (i__4532__auto___22507 + (1));
i__4532__auto___22507 = G__22508;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq22503){
var G__22504 = cljs.core.first(seq22503);
var seq22503__$1 = cljs.core.next(seq22503);
var G__22505 = cljs.core.first(seq22503__$1);
var seq22503__$2 = cljs.core.next(seq22503__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22504,G__22505,seq22503__$2);
});


//# sourceMappingURL=rum.core.js-953e2be7.map
