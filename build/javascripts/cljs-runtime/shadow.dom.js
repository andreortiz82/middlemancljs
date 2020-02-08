goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32787 = coll;
var G__32788 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32787,G__32788) : shadow.dom.lazy_native_coll_seq.call(null,G__32787,G__32788));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32836 = arguments.length;
switch (G__32836) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32844 = arguments.length;
switch (G__32844) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32850 = arguments.length;
switch (G__32850) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32857 = arguments.length;
switch (G__32857) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32884 = arguments.length;
switch (G__32884) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32888 = document;
var G__32889 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32888,G__32889);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32892 = shadow.dom.dom_node(parent);
var G__32893 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32892,G__32893);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32898 = shadow.dom.dom_node(el);
var G__32899 = cls;
return goog.dom.classlist.add(G__32898,G__32899);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32902 = shadow.dom.dom_node(el);
var G__32903 = cls;
return goog.dom.classlist.remove(G__32902,G__32903);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32905 = arguments.length;
switch (G__32905) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32907 = shadow.dom.dom_node(el);
var G__32908 = cls;
return goog.dom.classlist.toggle(G__32907,G__32908);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32914){if((e32914 instanceof Object)){
var e = e32914;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32914;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32935 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32936 = null;
var count__32937 = (0);
var i__32938 = (0);
while(true){
if((i__32938 < count__32937)){
var el = chunk__32936.cljs$core$IIndexed$_nth$arity$2(null,i__32938);
var handler_33954__$1 = ((function (seq__32935,chunk__32936,count__32937,i__32938,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32935,chunk__32936,count__32937,i__32938,el))
;
var G__32954_33956 = el;
var G__32955_33957 = cljs.core.name(ev);
var G__32956_33958 = handler_33954__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32954_33956,G__32955_33957,G__32956_33958) : shadow.dom.dom_listen.call(null,G__32954_33956,G__32955_33957,G__32956_33958));


var G__33959 = seq__32935;
var G__33960 = chunk__32936;
var G__33961 = count__32937;
var G__33962 = (i__32938 + (1));
seq__32935 = G__33959;
chunk__32936 = G__33960;
count__32937 = G__33961;
i__32938 = G__33962;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32935);
if(temp__5735__auto__){
var seq__32935__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32935__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32935__$1);
var G__33963 = cljs.core.chunk_rest(seq__32935__$1);
var G__33964 = c__4550__auto__;
var G__33965 = cljs.core.count(c__4550__auto__);
var G__33966 = (0);
seq__32935 = G__33963;
chunk__32936 = G__33964;
count__32937 = G__33965;
i__32938 = G__33966;
continue;
} else {
var el = cljs.core.first(seq__32935__$1);
var handler_33967__$1 = ((function (seq__32935,chunk__32936,count__32937,i__32938,el,seq__32935__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32935,chunk__32936,count__32937,i__32938,el,seq__32935__$1,temp__5735__auto__))
;
var G__32963_33968 = el;
var G__32964_33969 = cljs.core.name(ev);
var G__32965_33970 = handler_33967__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32963_33968,G__32964_33969,G__32965_33970) : shadow.dom.dom_listen.call(null,G__32963_33968,G__32964_33969,G__32965_33970));


var G__33971 = cljs.core.next(seq__32935__$1);
var G__33972 = null;
var G__33973 = (0);
var G__33974 = (0);
seq__32935 = G__33971;
chunk__32936 = G__33972;
count__32937 = G__33973;
i__32938 = G__33974;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32971 = arguments.length;
switch (G__32971) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32976 = shadow.dom.dom_node(el);
var G__32977 = cljs.core.name(ev);
var G__32978 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32976,G__32977,G__32978) : shadow.dom.dom_listen.call(null,G__32976,G__32977,G__32978));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32982 = shadow.dom.dom_node(el);
var G__32983 = cljs.core.name(ev);
var G__32984 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32982,G__32983,G__32984) : shadow.dom.dom_listen_remove.call(null,G__32982,G__32983,G__32984));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32987 = cljs.core.seq(events);
var chunk__32988 = null;
var count__32989 = (0);
var i__32990 = (0);
while(true){
if((i__32990 < count__32989)){
var vec__32999 = chunk__32988.cljs$core$IIndexed$_nth$arity$2(null,i__32990);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32999,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33982 = seq__32987;
var G__33983 = chunk__32988;
var G__33984 = count__32989;
var G__33985 = (i__32990 + (1));
seq__32987 = G__33982;
chunk__32988 = G__33983;
count__32989 = G__33984;
i__32990 = G__33985;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32987);
if(temp__5735__auto__){
var seq__32987__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32987__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__32987__$1);
var G__33987 = cljs.core.chunk_rest(seq__32987__$1);
var G__33988 = c__4550__auto__;
var G__33989 = cljs.core.count(c__4550__auto__);
var G__33990 = (0);
seq__32987 = G__33987;
chunk__32988 = G__33988;
count__32989 = G__33989;
i__32990 = G__33990;
continue;
} else {
var vec__33004 = cljs.core.first(seq__32987__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33004,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33993 = cljs.core.next(seq__32987__$1);
var G__33994 = null;
var G__33995 = (0);
var G__33996 = (0);
seq__32987 = G__33993;
chunk__32988 = G__33994;
count__32989 = G__33995;
i__32990 = G__33996;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33009 = cljs.core.seq(styles);
var chunk__33010 = null;
var count__33011 = (0);
var i__33012 = (0);
while(true){
if((i__33012 < count__33011)){
var vec__33028 = chunk__33010.cljs$core$IIndexed$_nth$arity$2(null,i__33012);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33028,(1),null);
var G__33032_34000 = dom;
var G__33033_34001 = cljs.core.name(k);
var G__33034_34002 = (((v == null))?"":v);
goog.style.setStyle(G__33032_34000,G__33033_34001,G__33034_34002);


var G__34003 = seq__33009;
var G__34004 = chunk__33010;
var G__34005 = count__33011;
var G__34006 = (i__33012 + (1));
seq__33009 = G__34003;
chunk__33010 = G__34004;
count__33011 = G__34005;
i__33012 = G__34006;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33009);
if(temp__5735__auto__){
var seq__33009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33009__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33009__$1);
var G__34009 = cljs.core.chunk_rest(seq__33009__$1);
var G__34010 = c__4550__auto__;
var G__34011 = cljs.core.count(c__4550__auto__);
var G__34012 = (0);
seq__33009 = G__34009;
chunk__33010 = G__34010;
count__33011 = G__34011;
i__33012 = G__34012;
continue;
} else {
var vec__33035 = cljs.core.first(seq__33009__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33035,(1),null);
var G__33038_34014 = dom;
var G__33039_34015 = cljs.core.name(k);
var G__33040_34016 = (((v == null))?"":v);
goog.style.setStyle(G__33038_34014,G__33039_34015,G__33040_34016);


var G__34018 = cljs.core.next(seq__33009__$1);
var G__34019 = null;
var G__34020 = (0);
var G__34021 = (0);
seq__33009 = G__34018;
chunk__33010 = G__34019;
count__33011 = G__34020;
i__33012 = G__34021;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33044_34023 = key;
var G__33044_34024__$1 = (((G__33044_34023 instanceof cljs.core.Keyword))?G__33044_34023.fqn:null);
switch (G__33044_34024__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34032 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_34032,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_34032,"aria-");
}
})())){
el.setAttribute(ks_34032,value);
} else {
(el[ks_34032] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33055 = shadow.dom.dom_node(el);
var G__33056 = cls;
return goog.dom.classlist.contains(G__33055,G__33056);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33069){
var map__33070 = p__33069;
var map__33070__$1 = (((((!((map__33070 == null))))?(((((map__33070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33070):map__33070);
var props = map__33070__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33070__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33073 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33073,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33073,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33073,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33077 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33077,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33077;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33083 = arguments.length;
switch (G__33083) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33087){
var vec__33088 = p__33087;
var seq__33089 = cljs.core.seq(vec__33088);
var first__33090 = cljs.core.first(seq__33089);
var seq__33089__$1 = cljs.core.next(seq__33089);
var nn = first__33090;
var first__33090__$1 = cljs.core.first(seq__33089__$1);
var seq__33089__$2 = cljs.core.next(seq__33089__$1);
var np = first__33090__$1;
var nc = seq__33089__$2;
var node = vec__33088;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33093 = nn;
var G__33094 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33093,G__33094) : create_fn.call(null,G__33093,G__33094));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33095 = nn;
var G__33096 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33095,G__33096) : create_fn.call(null,G__33095,G__33096));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33097 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(1),null);
var seq__33101_34057 = cljs.core.seq(node_children);
var chunk__33102_34058 = null;
var count__33103_34059 = (0);
var i__33104_34060 = (0);
while(true){
if((i__33104_34060 < count__33103_34059)){
var child_struct_34065 = chunk__33102_34058.cljs$core$IIndexed$_nth$arity$2(null,i__33104_34060);
var children_34066 = shadow.dom.dom_node(child_struct_34065);
if(cljs.core.seq_QMARK_(children_34066)){
var seq__33138_34067 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34066));
var chunk__33140_34068 = null;
var count__33141_34069 = (0);
var i__33142_34070 = (0);
while(true){
if((i__33142_34070 < count__33141_34069)){
var child_34073 = chunk__33140_34068.cljs$core$IIndexed$_nth$arity$2(null,i__33142_34070);
if(cljs.core.truth_(child_34073)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34073);


var G__34074 = seq__33138_34067;
var G__34075 = chunk__33140_34068;
var G__34076 = count__33141_34069;
var G__34077 = (i__33142_34070 + (1));
seq__33138_34067 = G__34074;
chunk__33140_34068 = G__34075;
count__33141_34069 = G__34076;
i__33142_34070 = G__34077;
continue;
} else {
var G__34078 = seq__33138_34067;
var G__34079 = chunk__33140_34068;
var G__34080 = count__33141_34069;
var G__34081 = (i__33142_34070 + (1));
seq__33138_34067 = G__34078;
chunk__33140_34068 = G__34079;
count__33141_34069 = G__34080;
i__33142_34070 = G__34081;
continue;
}
} else {
var temp__5735__auto___34083 = cljs.core.seq(seq__33138_34067);
if(temp__5735__auto___34083){
var seq__33138_34084__$1 = temp__5735__auto___34083;
if(cljs.core.chunked_seq_QMARK_(seq__33138_34084__$1)){
var c__4550__auto___34085 = cljs.core.chunk_first(seq__33138_34084__$1);
var G__34086 = cljs.core.chunk_rest(seq__33138_34084__$1);
var G__34087 = c__4550__auto___34085;
var G__34088 = cljs.core.count(c__4550__auto___34085);
var G__34089 = (0);
seq__33138_34067 = G__34086;
chunk__33140_34068 = G__34087;
count__33141_34069 = G__34088;
i__33142_34070 = G__34089;
continue;
} else {
var child_34090 = cljs.core.first(seq__33138_34084__$1);
if(cljs.core.truth_(child_34090)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34090);


var G__34092 = cljs.core.next(seq__33138_34084__$1);
var G__34093 = null;
var G__34094 = (0);
var G__34095 = (0);
seq__33138_34067 = G__34092;
chunk__33140_34068 = G__34093;
count__33141_34069 = G__34094;
i__33142_34070 = G__34095;
continue;
} else {
var G__34096 = cljs.core.next(seq__33138_34084__$1);
var G__34097 = null;
var G__34098 = (0);
var G__34099 = (0);
seq__33138_34067 = G__34096;
chunk__33140_34068 = G__34097;
count__33141_34069 = G__34098;
i__33142_34070 = G__34099;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34066);
}


var G__34101 = seq__33101_34057;
var G__34102 = chunk__33102_34058;
var G__34103 = count__33103_34059;
var G__34104 = (i__33104_34060 + (1));
seq__33101_34057 = G__34101;
chunk__33102_34058 = G__34102;
count__33103_34059 = G__34103;
i__33104_34060 = G__34104;
continue;
} else {
var temp__5735__auto___34105 = cljs.core.seq(seq__33101_34057);
if(temp__5735__auto___34105){
var seq__33101_34106__$1 = temp__5735__auto___34105;
if(cljs.core.chunked_seq_QMARK_(seq__33101_34106__$1)){
var c__4550__auto___34107 = cljs.core.chunk_first(seq__33101_34106__$1);
var G__34108 = cljs.core.chunk_rest(seq__33101_34106__$1);
var G__34109 = c__4550__auto___34107;
var G__34110 = cljs.core.count(c__4550__auto___34107);
var G__34111 = (0);
seq__33101_34057 = G__34108;
chunk__33102_34058 = G__34109;
count__33103_34059 = G__34110;
i__33104_34060 = G__34111;
continue;
} else {
var child_struct_34112 = cljs.core.first(seq__33101_34106__$1);
var children_34113 = shadow.dom.dom_node(child_struct_34112);
if(cljs.core.seq_QMARK_(children_34113)){
var seq__33161_34114 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34113));
var chunk__33163_34115 = null;
var count__33164_34116 = (0);
var i__33165_34117 = (0);
while(true){
if((i__33165_34117 < count__33164_34116)){
var child_34119 = chunk__33163_34115.cljs$core$IIndexed$_nth$arity$2(null,i__33165_34117);
if(cljs.core.truth_(child_34119)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34119);


var G__34124 = seq__33161_34114;
var G__34125 = chunk__33163_34115;
var G__34126 = count__33164_34116;
var G__34127 = (i__33165_34117 + (1));
seq__33161_34114 = G__34124;
chunk__33163_34115 = G__34125;
count__33164_34116 = G__34126;
i__33165_34117 = G__34127;
continue;
} else {
var G__34128 = seq__33161_34114;
var G__34129 = chunk__33163_34115;
var G__34130 = count__33164_34116;
var G__34131 = (i__33165_34117 + (1));
seq__33161_34114 = G__34128;
chunk__33163_34115 = G__34129;
count__33164_34116 = G__34130;
i__33165_34117 = G__34131;
continue;
}
} else {
var temp__5735__auto___34132__$1 = cljs.core.seq(seq__33161_34114);
if(temp__5735__auto___34132__$1){
var seq__33161_34133__$1 = temp__5735__auto___34132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33161_34133__$1)){
var c__4550__auto___34134 = cljs.core.chunk_first(seq__33161_34133__$1);
var G__34136 = cljs.core.chunk_rest(seq__33161_34133__$1);
var G__34137 = c__4550__auto___34134;
var G__34138 = cljs.core.count(c__4550__auto___34134);
var G__34139 = (0);
seq__33161_34114 = G__34136;
chunk__33163_34115 = G__34137;
count__33164_34116 = G__34138;
i__33165_34117 = G__34139;
continue;
} else {
var child_34140 = cljs.core.first(seq__33161_34133__$1);
if(cljs.core.truth_(child_34140)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34140);


var G__34142 = cljs.core.next(seq__33161_34133__$1);
var G__34143 = null;
var G__34144 = (0);
var G__34145 = (0);
seq__33161_34114 = G__34142;
chunk__33163_34115 = G__34143;
count__33164_34116 = G__34144;
i__33165_34117 = G__34145;
continue;
} else {
var G__34146 = cljs.core.next(seq__33161_34133__$1);
var G__34147 = null;
var G__34148 = (0);
var G__34149 = (0);
seq__33161_34114 = G__34146;
chunk__33163_34115 = G__34147;
count__33164_34116 = G__34148;
i__33165_34117 = G__34149;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34113);
}


var G__34150 = cljs.core.next(seq__33101_34106__$1);
var G__34151 = null;
var G__34152 = (0);
var G__34153 = (0);
seq__33101_34057 = G__34150;
chunk__33102_34058 = G__34151;
count__33103_34059 = G__34152;
i__33104_34060 = G__34153;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33184 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33184);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33189 = cljs.core.seq(node);
var chunk__33190 = null;
var count__33191 = (0);
var i__33192 = (0);
while(true){
if((i__33192 < count__33191)){
var n = chunk__33190.cljs$core$IIndexed$_nth$arity$2(null,i__33192);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34159 = seq__33189;
var G__34160 = chunk__33190;
var G__34161 = count__33191;
var G__34162 = (i__33192 + (1));
seq__33189 = G__34159;
chunk__33190 = G__34160;
count__33191 = G__34161;
i__33192 = G__34162;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33189);
if(temp__5735__auto__){
var seq__33189__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33189__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33189__$1);
var G__34165 = cljs.core.chunk_rest(seq__33189__$1);
var G__34166 = c__4550__auto__;
var G__34167 = cljs.core.count(c__4550__auto__);
var G__34168 = (0);
seq__33189 = G__34165;
chunk__33190 = G__34166;
count__33191 = G__34167;
i__33192 = G__34168;
continue;
} else {
var n = cljs.core.first(seq__33189__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34170 = cljs.core.next(seq__33189__$1);
var G__34171 = null;
var G__34172 = (0);
var G__34173 = (0);
seq__33189 = G__34170;
chunk__33190 = G__34171;
count__33191 = G__34172;
i__33192 = G__34173;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33203 = shadow.dom.dom_node(new$);
var G__33204 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33203,G__33204);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33209 = arguments.length;
switch (G__33209) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33222 = arguments.length;
switch (G__33222) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33229 = arguments.length;
switch (G__33229) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34191 = arguments.length;
var i__4731__auto___34192 = (0);
while(true){
if((i__4731__auto___34192 < len__4730__auto___34191)){
args__4736__auto__.push((arguments[i__4731__auto___34192]));

var G__34193 = (i__4731__auto___34192 + (1));
i__4731__auto___34192 = G__34193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33258_34196 = cljs.core.seq(nodes);
var chunk__33259_34197 = null;
var count__33260_34198 = (0);
var i__33261_34199 = (0);
while(true){
if((i__33261_34199 < count__33260_34198)){
var node_34200 = chunk__33259_34197.cljs$core$IIndexed$_nth$arity$2(null,i__33261_34199);
fragment.appendChild(shadow.dom._to_dom(node_34200));


var G__34201 = seq__33258_34196;
var G__34202 = chunk__33259_34197;
var G__34203 = count__33260_34198;
var G__34204 = (i__33261_34199 + (1));
seq__33258_34196 = G__34201;
chunk__33259_34197 = G__34202;
count__33260_34198 = G__34203;
i__33261_34199 = G__34204;
continue;
} else {
var temp__5735__auto___34205 = cljs.core.seq(seq__33258_34196);
if(temp__5735__auto___34205){
var seq__33258_34206__$1 = temp__5735__auto___34205;
if(cljs.core.chunked_seq_QMARK_(seq__33258_34206__$1)){
var c__4550__auto___34207 = cljs.core.chunk_first(seq__33258_34206__$1);
var G__34208 = cljs.core.chunk_rest(seq__33258_34206__$1);
var G__34209 = c__4550__auto___34207;
var G__34210 = cljs.core.count(c__4550__auto___34207);
var G__34211 = (0);
seq__33258_34196 = G__34208;
chunk__33259_34197 = G__34209;
count__33260_34198 = G__34210;
i__33261_34199 = G__34211;
continue;
} else {
var node_34212 = cljs.core.first(seq__33258_34206__$1);
fragment.appendChild(shadow.dom._to_dom(node_34212));


var G__34213 = cljs.core.next(seq__33258_34206__$1);
var G__34214 = null;
var G__34215 = (0);
var G__34216 = (0);
seq__33258_34196 = G__34213;
chunk__33259_34197 = G__34214;
count__33260_34198 = G__34215;
i__33261_34199 = G__34216;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33248){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33248));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33284_34217 = cljs.core.seq(scripts);
var chunk__33285_34218 = null;
var count__33286_34219 = (0);
var i__33287_34220 = (0);
while(true){
if((i__33287_34220 < count__33286_34219)){
var vec__33303_34221 = chunk__33285_34218.cljs$core$IIndexed$_nth$arity$2(null,i__33287_34220);
var script_tag_34222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303_34221,(0),null);
var script_body_34223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303_34221,(1),null);
eval(script_body_34223);


var G__34226 = seq__33284_34217;
var G__34227 = chunk__33285_34218;
var G__34228 = count__33286_34219;
var G__34229 = (i__33287_34220 + (1));
seq__33284_34217 = G__34226;
chunk__33285_34218 = G__34227;
count__33286_34219 = G__34228;
i__33287_34220 = G__34229;
continue;
} else {
var temp__5735__auto___34230 = cljs.core.seq(seq__33284_34217);
if(temp__5735__auto___34230){
var seq__33284_34231__$1 = temp__5735__auto___34230;
if(cljs.core.chunked_seq_QMARK_(seq__33284_34231__$1)){
var c__4550__auto___34232 = cljs.core.chunk_first(seq__33284_34231__$1);
var G__34234 = cljs.core.chunk_rest(seq__33284_34231__$1);
var G__34235 = c__4550__auto___34232;
var G__34236 = cljs.core.count(c__4550__auto___34232);
var G__34237 = (0);
seq__33284_34217 = G__34234;
chunk__33285_34218 = G__34235;
count__33286_34219 = G__34236;
i__33287_34220 = G__34237;
continue;
} else {
var vec__33309_34239 = cljs.core.first(seq__33284_34231__$1);
var script_tag_34240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33309_34239,(0),null);
var script_body_34241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33309_34239,(1),null);
eval(script_body_34241);


var G__34242 = cljs.core.next(seq__33284_34231__$1);
var G__34243 = null;
var G__34244 = (0);
var G__34245 = (0);
seq__33284_34217 = G__34242;
chunk__33285_34218 = G__34243;
count__33286_34219 = G__34244;
i__33287_34220 = G__34245;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33317){
var vec__33318 = p__33317;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33318,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33318,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33330 = shadow.dom.dom_node(el);
var G__33331 = cls;
return goog.dom.getAncestorByClass(G__33330,G__33331);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33336 = arguments.length;
switch (G__33336) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33339 = shadow.dom.dom_node(el);
var G__33340 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33339,G__33340);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33344 = shadow.dom.dom_node(el);
var G__33345 = cljs.core.name(tag);
var G__33346 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33344,G__33345,G__33346);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33356 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33356);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33361 = shadow.dom.dom_node(dom);
var G__33362 = value;
return goog.dom.forms.setValue(G__33361,G__33362);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33377 = cljs.core.seq(style_keys);
var chunk__33378 = null;
var count__33379 = (0);
var i__33380 = (0);
while(true){
if((i__33380 < count__33379)){
var it = chunk__33378.cljs$core$IIndexed$_nth$arity$2(null,i__33380);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34263 = seq__33377;
var G__34264 = chunk__33378;
var G__34265 = count__33379;
var G__34266 = (i__33380 + (1));
seq__33377 = G__34263;
chunk__33378 = G__34264;
count__33379 = G__34265;
i__33380 = G__34266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33377);
if(temp__5735__auto__){
var seq__33377__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33377__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33377__$1);
var G__34271 = cljs.core.chunk_rest(seq__33377__$1);
var G__34272 = c__4550__auto__;
var G__34273 = cljs.core.count(c__4550__auto__);
var G__34274 = (0);
seq__33377 = G__34271;
chunk__33378 = G__34272;
count__33379 = G__34273;
i__33380 = G__34274;
continue;
} else {
var it = cljs.core.first(seq__33377__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34275 = cljs.core.next(seq__33377__$1);
var G__34276 = null;
var G__34277 = (0);
var G__34278 = (0);
seq__33377 = G__34275;
chunk__33378 = G__34276;
count__33379 = G__34277;
i__33380 = G__34278;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33390,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33404 = k33390;
var G__33404__$1 = (((G__33404 instanceof cljs.core.Keyword))?G__33404.fqn:null);
switch (G__33404__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33390,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33422){
var vec__33423 = p__33422;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33423,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33423,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33389){
var self__ = this;
var G__33389__$1 = this;
return (new cljs.core.RecordIter((0),G__33389__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33448 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33448(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33391,other33392){
var self__ = this;
var this33391__$1 = this;
return (((!((other33392 == null)))) && ((this33391__$1.constructor === other33392.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33391__$1.x,other33392.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33391__$1.y,other33392.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33391__$1.__extmap,other33392.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33389){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33457 = cljs.core.keyword_identical_QMARK_;
var expr__33458 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33461 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33462 = expr__33458;
return (pred__33457.cljs$core$IFn$_invoke$arity$2 ? pred__33457.cljs$core$IFn$_invoke$arity$2(G__33461,G__33462) : pred__33457.call(null,G__33461,G__33462));
})())){
return (new shadow.dom.Coordinate(G__33389,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33463 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33464 = expr__33458;
return (pred__33457.cljs$core$IFn$_invoke$arity$2 ? pred__33457.cljs$core$IFn$_invoke$arity$2(G__33463,G__33464) : pred__33457.call(null,G__33463,G__33464));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33389,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33389),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33389){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33389,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33394){
var extmap__4424__auto__ = (function (){var G__33491 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33394,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33394)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33491);
} else {
return G__33491;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33394),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33394),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33499 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33499);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33508 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33508);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33512 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33512);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33519,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33531 = k33519;
var G__33531__$1 = (((G__33531 instanceof cljs.core.Keyword))?G__33531.fqn:null);
switch (G__33531__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33519,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33536){
var vec__33538 = p__33536;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33538,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33538,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33518){
var self__ = this;
var G__33518__$1 = this;
return (new cljs.core.RecordIter((0),G__33518__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33556 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33556(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33520,other33521){
var self__ = this;
var this33520__$1 = this;
return (((!((other33521 == null)))) && ((this33520__$1.constructor === other33521.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33520__$1.w,other33521.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33520__$1.h,other33521.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33520__$1.__extmap,other33521.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33518){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33566 = cljs.core.keyword_identical_QMARK_;
var expr__33567 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33570 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33571 = expr__33567;
return (pred__33566.cljs$core$IFn$_invoke$arity$2 ? pred__33566.cljs$core$IFn$_invoke$arity$2(G__33570,G__33571) : pred__33566.call(null,G__33570,G__33571));
})())){
return (new shadow.dom.Size(G__33518,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33572 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33573 = expr__33567;
return (pred__33566.cljs$core$IFn$_invoke$arity$2 ? pred__33566.cljs$core$IFn$_invoke$arity$2(G__33572,G__33573) : pred__33566.call(null,G__33572,G__33573));
})())){
return (new shadow.dom.Size(self__.w,G__33518,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33518),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33518){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33518,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33524){
var extmap__4424__auto__ = (function (){var G__33587 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33524,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33524)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33587);
} else {
return G__33587;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33524),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33524),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33591 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33591);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34330 = (i + (1));
var G__34331 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34330;
ret = G__34331;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33619){
var vec__33620 = p__33619;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33620,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33630 = arguments.length;
switch (G__33630) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33655_34342 = new_node;
var G__33656_34343 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33655_34342,G__33656_34343);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33665_34348 = new_node;
var G__33666_34349 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33665_34348,G__33666_34349);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34353 = ps;
var G__34354 = (i + (1));
el__$1 = G__34353;
i = G__34354;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33682 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33682);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33690 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33690);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33695 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33695);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33705 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33705,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33705,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33705,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33713_34358 = cljs.core.seq(props);
var chunk__33714_34359 = null;
var count__33715_34360 = (0);
var i__33716_34361 = (0);
while(true){
if((i__33716_34361 < count__33715_34360)){
var vec__33734_34362 = chunk__33714_34359.cljs$core$IIndexed$_nth$arity$2(null,i__33716_34361);
var k_34363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33734_34362,(0),null);
var v_34364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33734_34362,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34363);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34363),v_34364);


var G__34366 = seq__33713_34358;
var G__34367 = chunk__33714_34359;
var G__34368 = count__33715_34360;
var G__34369 = (i__33716_34361 + (1));
seq__33713_34358 = G__34366;
chunk__33714_34359 = G__34367;
count__33715_34360 = G__34368;
i__33716_34361 = G__34369;
continue;
} else {
var temp__5735__auto___34370 = cljs.core.seq(seq__33713_34358);
if(temp__5735__auto___34370){
var seq__33713_34371__$1 = temp__5735__auto___34370;
if(cljs.core.chunked_seq_QMARK_(seq__33713_34371__$1)){
var c__4550__auto___34372 = cljs.core.chunk_first(seq__33713_34371__$1);
var G__34373 = cljs.core.chunk_rest(seq__33713_34371__$1);
var G__34374 = c__4550__auto___34372;
var G__34375 = cljs.core.count(c__4550__auto___34372);
var G__34376 = (0);
seq__33713_34358 = G__34373;
chunk__33714_34359 = G__34374;
count__33715_34360 = G__34375;
i__33716_34361 = G__34376;
continue;
} else {
var vec__33742_34378 = cljs.core.first(seq__33713_34371__$1);
var k_34379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742_34378,(0),null);
var v_34380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742_34378,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34379);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34379),v_34380);


var G__34382 = cljs.core.next(seq__33713_34371__$1);
var G__34383 = null;
var G__34384 = (0);
var G__34385 = (0);
seq__33713_34358 = G__34382;
chunk__33714_34359 = G__34383;
count__33715_34360 = G__34384;
i__33716_34361 = G__34385;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33751 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33751,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33751,(1),null);
var seq__33756_34400 = cljs.core.seq(node_children);
var chunk__33758_34401 = null;
var count__33759_34402 = (0);
var i__33760_34403 = (0);
while(true){
if((i__33760_34403 < count__33759_34402)){
var child_struct_34404 = chunk__33758_34401.cljs$core$IIndexed$_nth$arity$2(null,i__33760_34403);
if((!((child_struct_34404 == null)))){
if(typeof child_struct_34404 === 'string'){
var text_34405 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34405),child_struct_34404].join(''));
} else {
var children_34407 = shadow.dom.svg_node(child_struct_34404);
if(cljs.core.seq_QMARK_(children_34407)){
var seq__33787_34410 = cljs.core.seq(children_34407);
var chunk__33790_34411 = null;
var count__33791_34412 = (0);
var i__33792_34413 = (0);
while(true){
if((i__33792_34413 < count__33791_34412)){
var child_34416 = chunk__33790_34411.cljs$core$IIndexed$_nth$arity$2(null,i__33792_34413);
if(cljs.core.truth_(child_34416)){
node.appendChild(child_34416);


var G__34417 = seq__33787_34410;
var G__34418 = chunk__33790_34411;
var G__34419 = count__33791_34412;
var G__34420 = (i__33792_34413 + (1));
seq__33787_34410 = G__34417;
chunk__33790_34411 = G__34418;
count__33791_34412 = G__34419;
i__33792_34413 = G__34420;
continue;
} else {
var G__34421 = seq__33787_34410;
var G__34422 = chunk__33790_34411;
var G__34423 = count__33791_34412;
var G__34424 = (i__33792_34413 + (1));
seq__33787_34410 = G__34421;
chunk__33790_34411 = G__34422;
count__33791_34412 = G__34423;
i__33792_34413 = G__34424;
continue;
}
} else {
var temp__5735__auto___34426 = cljs.core.seq(seq__33787_34410);
if(temp__5735__auto___34426){
var seq__33787_34427__$1 = temp__5735__auto___34426;
if(cljs.core.chunked_seq_QMARK_(seq__33787_34427__$1)){
var c__4550__auto___34428 = cljs.core.chunk_first(seq__33787_34427__$1);
var G__34429 = cljs.core.chunk_rest(seq__33787_34427__$1);
var G__34430 = c__4550__auto___34428;
var G__34431 = cljs.core.count(c__4550__auto___34428);
var G__34432 = (0);
seq__33787_34410 = G__34429;
chunk__33790_34411 = G__34430;
count__33791_34412 = G__34431;
i__33792_34413 = G__34432;
continue;
} else {
var child_34435 = cljs.core.first(seq__33787_34427__$1);
if(cljs.core.truth_(child_34435)){
node.appendChild(child_34435);


var G__34436 = cljs.core.next(seq__33787_34427__$1);
var G__34437 = null;
var G__34438 = (0);
var G__34439 = (0);
seq__33787_34410 = G__34436;
chunk__33790_34411 = G__34437;
count__33791_34412 = G__34438;
i__33792_34413 = G__34439;
continue;
} else {
var G__34440 = cljs.core.next(seq__33787_34427__$1);
var G__34441 = null;
var G__34442 = (0);
var G__34443 = (0);
seq__33787_34410 = G__34440;
chunk__33790_34411 = G__34441;
count__33791_34412 = G__34442;
i__33792_34413 = G__34443;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34407);
}
}


var G__34444 = seq__33756_34400;
var G__34445 = chunk__33758_34401;
var G__34446 = count__33759_34402;
var G__34447 = (i__33760_34403 + (1));
seq__33756_34400 = G__34444;
chunk__33758_34401 = G__34445;
count__33759_34402 = G__34446;
i__33760_34403 = G__34447;
continue;
} else {
var G__34448 = seq__33756_34400;
var G__34449 = chunk__33758_34401;
var G__34450 = count__33759_34402;
var G__34451 = (i__33760_34403 + (1));
seq__33756_34400 = G__34448;
chunk__33758_34401 = G__34449;
count__33759_34402 = G__34450;
i__33760_34403 = G__34451;
continue;
}
} else {
var temp__5735__auto___34452 = cljs.core.seq(seq__33756_34400);
if(temp__5735__auto___34452){
var seq__33756_34453__$1 = temp__5735__auto___34452;
if(cljs.core.chunked_seq_QMARK_(seq__33756_34453__$1)){
var c__4550__auto___34458 = cljs.core.chunk_first(seq__33756_34453__$1);
var G__34459 = cljs.core.chunk_rest(seq__33756_34453__$1);
var G__34460 = c__4550__auto___34458;
var G__34461 = cljs.core.count(c__4550__auto___34458);
var G__34462 = (0);
seq__33756_34400 = G__34459;
chunk__33758_34401 = G__34460;
count__33759_34402 = G__34461;
i__33760_34403 = G__34462;
continue;
} else {
var child_struct_34463 = cljs.core.first(seq__33756_34453__$1);
if((!((child_struct_34463 == null)))){
if(typeof child_struct_34463 === 'string'){
var text_34464 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34464),child_struct_34463].join(''));
} else {
var children_34466 = shadow.dom.svg_node(child_struct_34463);
if(cljs.core.seq_QMARK_(children_34466)){
var seq__33810_34467 = cljs.core.seq(children_34466);
var chunk__33812_34468 = null;
var count__33813_34469 = (0);
var i__33814_34470 = (0);
while(true){
if((i__33814_34470 < count__33813_34469)){
var child_34472 = chunk__33812_34468.cljs$core$IIndexed$_nth$arity$2(null,i__33814_34470);
if(cljs.core.truth_(child_34472)){
node.appendChild(child_34472);


var G__34473 = seq__33810_34467;
var G__34474 = chunk__33812_34468;
var G__34475 = count__33813_34469;
var G__34476 = (i__33814_34470 + (1));
seq__33810_34467 = G__34473;
chunk__33812_34468 = G__34474;
count__33813_34469 = G__34475;
i__33814_34470 = G__34476;
continue;
} else {
var G__34477 = seq__33810_34467;
var G__34478 = chunk__33812_34468;
var G__34479 = count__33813_34469;
var G__34480 = (i__33814_34470 + (1));
seq__33810_34467 = G__34477;
chunk__33812_34468 = G__34478;
count__33813_34469 = G__34479;
i__33814_34470 = G__34480;
continue;
}
} else {
var temp__5735__auto___34481__$1 = cljs.core.seq(seq__33810_34467);
if(temp__5735__auto___34481__$1){
var seq__33810_34483__$1 = temp__5735__auto___34481__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33810_34483__$1)){
var c__4550__auto___34484 = cljs.core.chunk_first(seq__33810_34483__$1);
var G__34485 = cljs.core.chunk_rest(seq__33810_34483__$1);
var G__34486 = c__4550__auto___34484;
var G__34487 = cljs.core.count(c__4550__auto___34484);
var G__34488 = (0);
seq__33810_34467 = G__34485;
chunk__33812_34468 = G__34486;
count__33813_34469 = G__34487;
i__33814_34470 = G__34488;
continue;
} else {
var child_34489 = cljs.core.first(seq__33810_34483__$1);
if(cljs.core.truth_(child_34489)){
node.appendChild(child_34489);


var G__34490 = cljs.core.next(seq__33810_34483__$1);
var G__34491 = null;
var G__34492 = (0);
var G__34493 = (0);
seq__33810_34467 = G__34490;
chunk__33812_34468 = G__34491;
count__33813_34469 = G__34492;
i__33814_34470 = G__34493;
continue;
} else {
var G__34494 = cljs.core.next(seq__33810_34483__$1);
var G__34495 = null;
var G__34496 = (0);
var G__34497 = (0);
seq__33810_34467 = G__34494;
chunk__33812_34468 = G__34495;
count__33813_34469 = G__34496;
i__33814_34470 = G__34497;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34466);
}
}


var G__34499 = cljs.core.next(seq__33756_34453__$1);
var G__34500 = null;
var G__34501 = (0);
var G__34502 = (0);
seq__33756_34400 = G__34499;
chunk__33758_34401 = G__34500;
count__33759_34402 = G__34501;
i__33760_34403 = G__34502;
continue;
} else {
var G__34503 = cljs.core.next(seq__33756_34453__$1);
var G__34504 = null;
var G__34505 = (0);
var G__34506 = (0);
seq__33756_34400 = G__34503;
chunk__33758_34401 = G__34504;
count__33759_34402 = G__34505;
i__33760_34403 = G__34506;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33847_34508 = shadow.dom._to_svg;
var G__33848_34509 = "string";
var G__33849_34510 = ((function (G__33847_34508,G__33848_34509){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33847_34508,G__33848_34509))
;
goog.object.set(G__33847_34508,G__33848_34509,G__33849_34510);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33872_34513 = shadow.dom._to_svg;
var G__33873_34514 = "null";
var G__33874_34515 = ((function (G__33872_34513,G__33873_34514){
return (function (_){
return null;
});})(G__33872_34513,G__33873_34514))
;
goog.object.set(G__33872_34513,G__33873_34514,G__33874_34515);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34517 = arguments.length;
var i__4731__auto___34519 = (0);
while(true){
if((i__4731__auto___34519 < len__4730__auto___34517)){
args__4736__auto__.push((arguments[i__4731__auto___34519]));

var G__34521 = (i__4731__auto___34519 + (1));
i__4731__auto___34519 = G__34521;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33875){
var G__33876 = cljs.core.first(seq33875);
var seq33875__$1 = cljs.core.next(seq33875);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33876,seq33875__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33888 = arguments.length;
switch (G__33888) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33895_34530 = shadow.dom.dom_node(el);
var G__33896_34531 = cljs.core.name(event);
var G__33897_34532 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33895_34530,G__33896_34531,G__33897_34532) : shadow.dom.dom_listen.call(null,G__33895_34530,G__33896_34531,G__33897_34532));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30275__auto___34536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___34536,buf,chan,event_fn){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___34536,buf,chan,event_fn){
return (function (state_33904){
var state_val_33905 = (state_33904[(1)]);
if((state_val_33905 === (1))){
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33904__$1,(2),once_or_cleanup);
} else {
if((state_val_33905 === (2))){
var inst_33901 = (state_33904[(2)]);
var inst_33902 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33904__$1 = (function (){var statearr_33911 = state_33904;
(statearr_33911[(7)] = inst_33901);

return statearr_33911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33904__$1,inst_33902);
} else {
return null;
}
}
});})(c__30275__auto___34536,buf,chan,event_fn))
;
return ((function (switch__30090__auto__,c__30275__auto___34536,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30091__auto__ = null;
var shadow$dom$state_machine__30091__auto____0 = (function (){
var statearr_33916 = [null,null,null,null,null,null,null,null];
(statearr_33916[(0)] = shadow$dom$state_machine__30091__auto__);

(statearr_33916[(1)] = (1));

return statearr_33916;
});
var shadow$dom$state_machine__30091__auto____1 = (function (state_33904){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_33904);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e33918){if((e33918 instanceof Object)){
var ex__30094__auto__ = e33918;
var statearr_33920_34540 = state_33904;
(statearr_33920_34540[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33918;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34543 = state_33904;
state_33904 = G__34543;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
shadow$dom$state_machine__30091__auto__ = function(state_33904){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30091__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30091__auto____1.call(this,state_33904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30091__auto____0;
shadow$dom$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30091__auto____1;
return shadow$dom$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___34536,buf,chan,event_fn))
})();
var state__30277__auto__ = (function (){var statearr_33922 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_33922[(6)] = c__30275__auto___34536);

return statearr_33922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___34536,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
