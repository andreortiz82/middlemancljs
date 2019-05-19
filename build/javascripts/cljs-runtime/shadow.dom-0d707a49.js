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
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
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
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18568 = coll;
var G__18569 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18568,G__18569) : shadow.dom.lazy_native_coll_seq.call(null,G__18568,G__18569));
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
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
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

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
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
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18586 = arguments.length;
switch (G__18586) {
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
var G__18594 = arguments.length;
switch (G__18594) {
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
var G__18597 = arguments.length;
switch (G__18597) {
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
var G__18600 = arguments.length;
switch (G__18600) {
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
var G__18615 = arguments.length;
switch (G__18615) {
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
var G__18622 = document;
var G__18623 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18622,G__18623);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__18624 = shadow.dom.dom_node(parent);
var G__18625 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18624,G__18625);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__18633 = shadow.dom.dom_node(el);
var G__18634 = cls;
return goog.dom.classlist.add(G__18633,G__18634);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__18635 = shadow.dom.dom_node(el);
var G__18636 = cls;
return goog.dom.classlist.remove(G__18635,G__18636);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18638 = arguments.length;
switch (G__18638) {
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
var G__18639 = shadow.dom.dom_node(el);
var G__18640 = cls;
return goog.dom.classlist.toggle(G__18639,G__18640);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18642){if((e18642 instanceof Object)){
var e = e18642;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18642;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18647 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18648 = null;
var count__18649 = (0);
var i__18650 = (0);
while(true){
if((i__18650 < count__18649)){
var el = chunk__18648.cljs$core$IIndexed$_nth$arity$2(null,i__18650);
var handler_18658__$1 = ((function (seq__18647,chunk__18648,count__18649,i__18650,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18647,chunk__18648,count__18649,i__18650,el))
;
var G__18652_18659 = el;
var G__18653_18660 = cljs.core.name(ev);
var G__18654_18661 = handler_18658__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18652_18659,G__18653_18660,G__18654_18661) : shadow.dom.dom_listen.call(null,G__18652_18659,G__18653_18660,G__18654_18661));


var G__18662 = seq__18647;
var G__18663 = chunk__18648;
var G__18664 = count__18649;
var G__18665 = (i__18650 + (1));
seq__18647 = G__18662;
chunk__18648 = G__18663;
count__18649 = G__18664;
i__18650 = G__18665;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18647);
if(temp__5457__auto__){
var seq__18647__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18647__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18647__$1);
var G__18666 = cljs.core.chunk_rest(seq__18647__$1);
var G__18667 = c__4351__auto__;
var G__18668 = cljs.core.count(c__4351__auto__);
var G__18669 = (0);
seq__18647 = G__18666;
chunk__18648 = G__18667;
count__18649 = G__18668;
i__18650 = G__18669;
continue;
} else {
var el = cljs.core.first(seq__18647__$1);
var handler_18670__$1 = ((function (seq__18647,chunk__18648,count__18649,i__18650,el,seq__18647__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18647,chunk__18648,count__18649,i__18650,el,seq__18647__$1,temp__5457__auto__))
;
var G__18655_18671 = el;
var G__18656_18672 = cljs.core.name(ev);
var G__18657_18673 = handler_18670__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18655_18671,G__18656_18672,G__18657_18673) : shadow.dom.dom_listen.call(null,G__18655_18671,G__18656_18672,G__18657_18673));


var G__18675 = cljs.core.next(seq__18647__$1);
var G__18676 = null;
var G__18677 = (0);
var G__18678 = (0);
seq__18647 = G__18675;
chunk__18648 = G__18676;
count__18649 = G__18677;
i__18650 = G__18678;
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
var G__18680 = arguments.length;
switch (G__18680) {
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
var G__18683 = shadow.dom.dom_node(el);
var G__18684 = cljs.core.name(ev);
var G__18685 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18683,G__18684,G__18685) : shadow.dom.dom_listen.call(null,G__18683,G__18684,G__18685));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__18695 = shadow.dom.dom_node(el);
var G__18696 = cljs.core.name(ev);
var G__18697 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__18695,G__18696,G__18697) : shadow.dom.dom_listen_remove.call(null,G__18695,G__18696,G__18697));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18700 = cljs.core.seq(events);
var chunk__18701 = null;
var count__18702 = (0);
var i__18703 = (0);
while(true){
if((i__18703 < count__18702)){
var vec__18704 = chunk__18701.cljs$core$IIndexed$_nth$arity$2(null,i__18703);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18704,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18704,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18710 = seq__18700;
var G__18711 = chunk__18701;
var G__18712 = count__18702;
var G__18713 = (i__18703 + (1));
seq__18700 = G__18710;
chunk__18701 = G__18711;
count__18702 = G__18712;
i__18703 = G__18713;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18700);
if(temp__5457__auto__){
var seq__18700__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18700__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18700__$1);
var G__18714 = cljs.core.chunk_rest(seq__18700__$1);
var G__18715 = c__4351__auto__;
var G__18716 = cljs.core.count(c__4351__auto__);
var G__18717 = (0);
seq__18700 = G__18714;
chunk__18701 = G__18715;
count__18702 = G__18716;
i__18703 = G__18717;
continue;
} else {
var vec__18707 = cljs.core.first(seq__18700__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18707,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18707,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18718 = cljs.core.next(seq__18700__$1);
var G__18719 = null;
var G__18720 = (0);
var G__18721 = (0);
seq__18700 = G__18718;
chunk__18701 = G__18719;
count__18702 = G__18720;
i__18703 = G__18721;
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
var seq__18722 = cljs.core.seq(styles);
var chunk__18723 = null;
var count__18724 = (0);
var i__18725 = (0);
while(true){
if((i__18725 < count__18724)){
var vec__18727 = chunk__18723.cljs$core$IIndexed$_nth$arity$2(null,i__18725);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18727,(1),null);
var G__18730_18739 = dom;
var G__18731_18740 = cljs.core.name(k);
var G__18732_18741 = (((v == null))?"":v);
goog.style.setStyle(G__18730_18739,G__18731_18740,G__18732_18741);


var G__18742 = seq__18722;
var G__18743 = chunk__18723;
var G__18744 = count__18724;
var G__18745 = (i__18725 + (1));
seq__18722 = G__18742;
chunk__18723 = G__18743;
count__18724 = G__18744;
i__18725 = G__18745;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18722);
if(temp__5457__auto__){
var seq__18722__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18722__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18722__$1);
var G__18746 = cljs.core.chunk_rest(seq__18722__$1);
var G__18747 = c__4351__auto__;
var G__18748 = cljs.core.count(c__4351__auto__);
var G__18749 = (0);
seq__18722 = G__18746;
chunk__18723 = G__18747;
count__18724 = G__18748;
i__18725 = G__18749;
continue;
} else {
var vec__18733 = cljs.core.first(seq__18722__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18733,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18733,(1),null);
var G__18736_18754 = dom;
var G__18737_18755 = cljs.core.name(k);
var G__18738_18756 = (((v == null))?"":v);
goog.style.setStyle(G__18736_18754,G__18737_18755,G__18738_18756);


var G__18757 = cljs.core.next(seq__18722__$1);
var G__18758 = null;
var G__18759 = (0);
var G__18760 = (0);
seq__18722 = G__18757;
chunk__18723 = G__18758;
count__18724 = G__18759;
i__18725 = G__18760;
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
var G__18764_18765 = key;
var G__18764_18766__$1 = (((G__18764_18765 instanceof cljs.core.Keyword))?G__18764_18765.fqn:null);
switch (G__18764_18766__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

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
var ks_18768 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_18768,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_18768,"aria-");
}
})())){
el.setAttribute(ks_18768,value);
} else {
(el[ks_18768] = value);
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
var G__18769 = shadow.dom.dom_node(el);
var G__18770 = cls;
return goog.dom.classlist.contains(G__18769,G__18770);
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
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18785){
var map__18786 = p__18785;
var map__18786__$1 = ((((!((map__18786 == null)))?(((((map__18786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18786):map__18786);
var props = map__18786__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18786__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18792 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18792,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18792,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18792,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18795 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18795,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18795;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18797 = arguments.length;
switch (G__18797) {
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
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
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
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18803){
var vec__18805 = p__18803;
var seq__18806 = cljs.core.seq(vec__18805);
var first__18807 = cljs.core.first(seq__18806);
var seq__18806__$1 = cljs.core.next(seq__18806);
var nn = first__18807;
var first__18807__$1 = cljs.core.first(seq__18806__$1);
var seq__18806__$2 = cljs.core.next(seq__18806__$1);
var np = first__18807__$1;
var nc = seq__18806__$2;
var node = vec__18805;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18808 = nn;
var G__18809 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18808,G__18809) : create_fn.call(null,G__18808,G__18809));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18812 = nn;
var G__18813 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18812,G__18813) : create_fn.call(null,G__18812,G__18813));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18819 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(1),null);
var seq__18823_18840 = cljs.core.seq(node_children);
var chunk__18824_18841 = null;
var count__18825_18842 = (0);
var i__18826_18843 = (0);
while(true){
if((i__18826_18843 < count__18825_18842)){
var child_struct_18847 = chunk__18824_18841.cljs$core$IIndexed$_nth$arity$2(null,i__18826_18843);
var children_18848 = shadow.dom.dom_node(child_struct_18847);
if(cljs.core.seq_QMARK_(children_18848)){
var seq__18827_18849 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18848));
var chunk__18829_18850 = null;
var count__18830_18851 = (0);
var i__18831_18852 = (0);
while(true){
if((i__18831_18852 < count__18830_18851)){
var child_18853 = chunk__18829_18850.cljs$core$IIndexed$_nth$arity$2(null,i__18831_18852);
if(cljs.core.truth_(child_18853)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18853);


var G__18854 = seq__18827_18849;
var G__18855 = chunk__18829_18850;
var G__18856 = count__18830_18851;
var G__18857 = (i__18831_18852 + (1));
seq__18827_18849 = G__18854;
chunk__18829_18850 = G__18855;
count__18830_18851 = G__18856;
i__18831_18852 = G__18857;
continue;
} else {
var G__18858 = seq__18827_18849;
var G__18859 = chunk__18829_18850;
var G__18860 = count__18830_18851;
var G__18861 = (i__18831_18852 + (1));
seq__18827_18849 = G__18858;
chunk__18829_18850 = G__18859;
count__18830_18851 = G__18860;
i__18831_18852 = G__18861;
continue;
}
} else {
var temp__5457__auto___18862 = cljs.core.seq(seq__18827_18849);
if(temp__5457__auto___18862){
var seq__18827_18863__$1 = temp__5457__auto___18862;
if(cljs.core.chunked_seq_QMARK_(seq__18827_18863__$1)){
var c__4351__auto___18864 = cljs.core.chunk_first(seq__18827_18863__$1);
var G__18865 = cljs.core.chunk_rest(seq__18827_18863__$1);
var G__18866 = c__4351__auto___18864;
var G__18867 = cljs.core.count(c__4351__auto___18864);
var G__18868 = (0);
seq__18827_18849 = G__18865;
chunk__18829_18850 = G__18866;
count__18830_18851 = G__18867;
i__18831_18852 = G__18868;
continue;
} else {
var child_18869 = cljs.core.first(seq__18827_18863__$1);
if(cljs.core.truth_(child_18869)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18869);


var G__18870 = cljs.core.next(seq__18827_18863__$1);
var G__18871 = null;
var G__18872 = (0);
var G__18873 = (0);
seq__18827_18849 = G__18870;
chunk__18829_18850 = G__18871;
count__18830_18851 = G__18872;
i__18831_18852 = G__18873;
continue;
} else {
var G__18874 = cljs.core.next(seq__18827_18863__$1);
var G__18875 = null;
var G__18876 = (0);
var G__18877 = (0);
seq__18827_18849 = G__18874;
chunk__18829_18850 = G__18875;
count__18830_18851 = G__18876;
i__18831_18852 = G__18877;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18848);
}


var G__18878 = seq__18823_18840;
var G__18879 = chunk__18824_18841;
var G__18880 = count__18825_18842;
var G__18881 = (i__18826_18843 + (1));
seq__18823_18840 = G__18878;
chunk__18824_18841 = G__18879;
count__18825_18842 = G__18880;
i__18826_18843 = G__18881;
continue;
} else {
var temp__5457__auto___18882 = cljs.core.seq(seq__18823_18840);
if(temp__5457__auto___18882){
var seq__18823_18883__$1 = temp__5457__auto___18882;
if(cljs.core.chunked_seq_QMARK_(seq__18823_18883__$1)){
var c__4351__auto___18884 = cljs.core.chunk_first(seq__18823_18883__$1);
var G__18888 = cljs.core.chunk_rest(seq__18823_18883__$1);
var G__18889 = c__4351__auto___18884;
var G__18890 = cljs.core.count(c__4351__auto___18884);
var G__18891 = (0);
seq__18823_18840 = G__18888;
chunk__18824_18841 = G__18889;
count__18825_18842 = G__18890;
i__18826_18843 = G__18891;
continue;
} else {
var child_struct_18892 = cljs.core.first(seq__18823_18883__$1);
var children_18893 = shadow.dom.dom_node(child_struct_18892);
if(cljs.core.seq_QMARK_(children_18893)){
var seq__18834_18894 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18893));
var chunk__18836_18895 = null;
var count__18837_18896 = (0);
var i__18838_18897 = (0);
while(true){
if((i__18838_18897 < count__18837_18896)){
var child_18898 = chunk__18836_18895.cljs$core$IIndexed$_nth$arity$2(null,i__18838_18897);
if(cljs.core.truth_(child_18898)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18898);


var G__18902 = seq__18834_18894;
var G__18903 = chunk__18836_18895;
var G__18904 = count__18837_18896;
var G__18905 = (i__18838_18897 + (1));
seq__18834_18894 = G__18902;
chunk__18836_18895 = G__18903;
count__18837_18896 = G__18904;
i__18838_18897 = G__18905;
continue;
} else {
var G__18906 = seq__18834_18894;
var G__18907 = chunk__18836_18895;
var G__18908 = count__18837_18896;
var G__18909 = (i__18838_18897 + (1));
seq__18834_18894 = G__18906;
chunk__18836_18895 = G__18907;
count__18837_18896 = G__18908;
i__18838_18897 = G__18909;
continue;
}
} else {
var temp__5457__auto___18910__$1 = cljs.core.seq(seq__18834_18894);
if(temp__5457__auto___18910__$1){
var seq__18834_18911__$1 = temp__5457__auto___18910__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18834_18911__$1)){
var c__4351__auto___18912 = cljs.core.chunk_first(seq__18834_18911__$1);
var G__18913 = cljs.core.chunk_rest(seq__18834_18911__$1);
var G__18914 = c__4351__auto___18912;
var G__18915 = cljs.core.count(c__4351__auto___18912);
var G__18916 = (0);
seq__18834_18894 = G__18913;
chunk__18836_18895 = G__18914;
count__18837_18896 = G__18915;
i__18838_18897 = G__18916;
continue;
} else {
var child_18917 = cljs.core.first(seq__18834_18911__$1);
if(cljs.core.truth_(child_18917)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18917);


var G__18918 = cljs.core.next(seq__18834_18911__$1);
var G__18919 = null;
var G__18920 = (0);
var G__18921 = (0);
seq__18834_18894 = G__18918;
chunk__18836_18895 = G__18919;
count__18837_18896 = G__18920;
i__18838_18897 = G__18921;
continue;
} else {
var G__18922 = cljs.core.next(seq__18834_18911__$1);
var G__18923 = null;
var G__18924 = (0);
var G__18925 = (0);
seq__18834_18894 = G__18922;
chunk__18836_18895 = G__18923;
count__18837_18896 = G__18924;
i__18838_18897 = G__18925;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18893);
}


var G__18926 = cljs.core.next(seq__18823_18883__$1);
var G__18927 = null;
var G__18928 = (0);
var G__18929 = (0);
seq__18823_18840 = G__18926;
chunk__18824_18841 = G__18927;
count__18825_18842 = G__18928;
i__18826_18843 = G__18929;
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
var G__18936 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__18936);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18938 = cljs.core.seq(node);
var chunk__18939 = null;
var count__18940 = (0);
var i__18941 = (0);
while(true){
if((i__18941 < count__18940)){
var n = chunk__18939.cljs$core$IIndexed$_nth$arity$2(null,i__18941);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18942 = seq__18938;
var G__18943 = chunk__18939;
var G__18944 = count__18940;
var G__18945 = (i__18941 + (1));
seq__18938 = G__18942;
chunk__18939 = G__18943;
count__18940 = G__18944;
i__18941 = G__18945;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18938);
if(temp__5457__auto__){
var seq__18938__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18938__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18938__$1);
var G__18946 = cljs.core.chunk_rest(seq__18938__$1);
var G__18947 = c__4351__auto__;
var G__18948 = cljs.core.count(c__4351__auto__);
var G__18949 = (0);
seq__18938 = G__18946;
chunk__18939 = G__18947;
count__18940 = G__18948;
i__18941 = G__18949;
continue;
} else {
var n = cljs.core.first(seq__18938__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18951 = cljs.core.next(seq__18938__$1);
var G__18952 = null;
var G__18953 = (0);
var G__18954 = (0);
seq__18938 = G__18951;
chunk__18939 = G__18952;
count__18940 = G__18953;
i__18941 = G__18954;
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
var G__18957 = shadow.dom.dom_node(new$);
var G__18958 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__18957,G__18958);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18965 = arguments.length;
switch (G__18965) {
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
var G__18972 = arguments.length;
switch (G__18972) {
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
var G__18981 = arguments.length;
switch (G__18981) {
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
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19023 = arguments.length;
var i__4532__auto___19024 = (0);
while(true){
if((i__4532__auto___19024 < len__4531__auto___19023)){
args__4534__auto__.push((arguments[i__4532__auto___19024]));

var G__19025 = (i__4532__auto___19024 + (1));
i__4532__auto___19024 = G__19025;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__19015_19028 = cljs.core.seq(nodes);
var chunk__19016_19029 = null;
var count__19017_19030 = (0);
var i__19018_19031 = (0);
while(true){
if((i__19018_19031 < count__19017_19030)){
var node_19035 = chunk__19016_19029.cljs$core$IIndexed$_nth$arity$2(null,i__19018_19031);
fragment.appendChild(shadow.dom._to_dom(node_19035));


var G__19039 = seq__19015_19028;
var G__19040 = chunk__19016_19029;
var G__19041 = count__19017_19030;
var G__19042 = (i__19018_19031 + (1));
seq__19015_19028 = G__19039;
chunk__19016_19029 = G__19040;
count__19017_19030 = G__19041;
i__19018_19031 = G__19042;
continue;
} else {
var temp__5457__auto___19044 = cljs.core.seq(seq__19015_19028);
if(temp__5457__auto___19044){
var seq__19015_19045__$1 = temp__5457__auto___19044;
if(cljs.core.chunked_seq_QMARK_(seq__19015_19045__$1)){
var c__4351__auto___19047 = cljs.core.chunk_first(seq__19015_19045__$1);
var G__19050 = cljs.core.chunk_rest(seq__19015_19045__$1);
var G__19051 = c__4351__auto___19047;
var G__19052 = cljs.core.count(c__4351__auto___19047);
var G__19053 = (0);
seq__19015_19028 = G__19050;
chunk__19016_19029 = G__19051;
count__19017_19030 = G__19052;
i__19018_19031 = G__19053;
continue;
} else {
var node_19056 = cljs.core.first(seq__19015_19045__$1);
fragment.appendChild(shadow.dom._to_dom(node_19056));


var G__19057 = cljs.core.next(seq__19015_19045__$1);
var G__19058 = null;
var G__19059 = (0);
var G__19060 = (0);
seq__19015_19028 = G__19057;
chunk__19016_19029 = G__19058;
count__19017_19030 = G__19059;
i__19018_19031 = G__19060;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq18999){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18999));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19072_19112 = cljs.core.seq(scripts);
var chunk__19073_19113 = null;
var count__19074_19114 = (0);
var i__19075_19115 = (0);
while(true){
if((i__19075_19115 < count__19074_19114)){
var vec__19078_19121 = chunk__19073_19113.cljs$core$IIndexed$_nth$arity$2(null,i__19075_19115);
var script_tag_19122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19078_19121,(0),null);
var script_body_19123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19078_19121,(1),null);
eval(script_body_19123);


var G__19127 = seq__19072_19112;
var G__19128 = chunk__19073_19113;
var G__19129 = count__19074_19114;
var G__19130 = (i__19075_19115 + (1));
seq__19072_19112 = G__19127;
chunk__19073_19113 = G__19128;
count__19074_19114 = G__19129;
i__19075_19115 = G__19130;
continue;
} else {
var temp__5457__auto___19134 = cljs.core.seq(seq__19072_19112);
if(temp__5457__auto___19134){
var seq__19072_19135__$1 = temp__5457__auto___19134;
if(cljs.core.chunked_seq_QMARK_(seq__19072_19135__$1)){
var c__4351__auto___19138 = cljs.core.chunk_first(seq__19072_19135__$1);
var G__19139 = cljs.core.chunk_rest(seq__19072_19135__$1);
var G__19140 = c__4351__auto___19138;
var G__19141 = cljs.core.count(c__4351__auto___19138);
var G__19142 = (0);
seq__19072_19112 = G__19139;
chunk__19073_19113 = G__19140;
count__19074_19114 = G__19141;
i__19075_19115 = G__19142;
continue;
} else {
var vec__19093_19146 = cljs.core.first(seq__19072_19135__$1);
var script_tag_19147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19093_19146,(0),null);
var script_body_19148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19093_19146,(1),null);
eval(script_body_19148);


var G__19153 = cljs.core.next(seq__19072_19135__$1);
var G__19154 = null;
var G__19155 = (0);
var G__19156 = (0);
seq__19072_19112 = G__19153;
chunk__19073_19113 = G__19154;
count__19074_19114 = G__19155;
i__19075_19115 = G__19156;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__19103){
var vec__19104 = p__19103;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19104,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19104,(1),null);
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
var G__19164 = shadow.dom.dom_node(el);
var G__19165 = cls;
return goog.dom.getAncestorByClass(G__19164,G__19165);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__19200 = arguments.length;
switch (G__19200) {
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
var G__19211 = shadow.dom.dom_node(el);
var G__19212 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__19211,G__19212);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__19216 = shadow.dom.dom_node(el);
var G__19217 = cljs.core.name(tag);
var G__19218 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__19216,G__19217,G__19218);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__19255 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__19255);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__19263 = shadow.dom.dom_node(dom);
var G__19264 = value;
return goog.dom.forms.setValue(G__19263,G__19264);
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
var seq__19302 = cljs.core.seq(style_keys);
var chunk__19303 = null;
var count__19304 = (0);
var i__19305 = (0);
while(true){
if((i__19305 < count__19304)){
var it = chunk__19303.cljs$core$IIndexed$_nth$arity$2(null,i__19305);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19325 = seq__19302;
var G__19326 = chunk__19303;
var G__19327 = count__19304;
var G__19328 = (i__19305 + (1));
seq__19302 = G__19325;
chunk__19303 = G__19326;
count__19304 = G__19327;
i__19305 = G__19328;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19302);
if(temp__5457__auto__){
var seq__19302__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19302__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19302__$1);
var G__19334 = cljs.core.chunk_rest(seq__19302__$1);
var G__19335 = c__4351__auto__;
var G__19336 = cljs.core.count(c__4351__auto__);
var G__19337 = (0);
seq__19302 = G__19334;
chunk__19303 = G__19335;
count__19304 = G__19336;
i__19305 = G__19337;
continue;
} else {
var it = cljs.core.first(seq__19302__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19340 = cljs.core.next(seq__19302__$1);
var G__19341 = null;
var G__19342 = (0);
var G__19343 = (0);
seq__19302 = G__19340;
chunk__19303 = G__19341;
count__19304 = G__19342;
i__19305 = G__19343;
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
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k19351,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__19367 = k19351;
var G__19367__$1 = (((G__19367 instanceof cljs.core.Keyword))?G__19367.fqn:null);
switch (G__19367__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19351,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19350){
var self__ = this;
var G__19350__$1 = this;
return (new cljs.core.RecordIter((0),G__19350__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__19370 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__19370(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19353,other19354){
var self__ = this;
var this19353__$1 = this;
return ((!((other19354 == null))) && ((this19353__$1.constructor === other19354.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19353__$1.x,other19354.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19353__$1.y,other19354.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19353__$1.__extmap,other19354.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__19350){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__19373 = cljs.core.keyword_identical_QMARK_;
var expr__19374 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__19378 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__19379 = expr__19374;
return (pred__19373.cljs$core$IFn$_invoke$arity$2 ? pred__19373.cljs$core$IFn$_invoke$arity$2(G__19378,G__19379) : pred__19373.call(null,G__19378,G__19379));
})())){
return (new shadow.dom.Coordinate(G__19350,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19382 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__19383 = expr__19374;
return (pred__19373.cljs$core$IFn$_invoke$arity$2 ? pred__19373.cljs$core$IFn$_invoke$arity$2(G__19382,G__19383) : pred__19373.call(null,G__19382,G__19383));
})())){
return (new shadow.dom.Coordinate(self__.x,G__19350,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__19350),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__19350){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19350,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19360){
var extmap__4236__auto__ = (function (){var G__19400 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19360,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19360)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19400);
} else {
return G__19400;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19360),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19360),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__19459 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__19459);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__19464 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__19464);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__19470 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__19470);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k19478,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__19498 = k19478;
var G__19498__$1 = (((G__19498 instanceof cljs.core.Keyword))?G__19498.fqn:null);
switch (G__19498__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19478,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19477){
var self__ = this;
var G__19477__$1 = this;
return (new cljs.core.RecordIter((0),G__19477__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__19524 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__19524(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19480,other19481){
var self__ = this;
var this19480__$1 = this;
return ((!((other19481 == null))) && ((this19480__$1.constructor === other19481.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19480__$1.w,other19481.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19480__$1.h,other19481.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19480__$1.__extmap,other19481.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__19477){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__19541 = cljs.core.keyword_identical_QMARK_;
var expr__19542 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__19546 = new cljs.core.Keyword(null,"w","w",354169001);
var G__19547 = expr__19542;
return (pred__19541.cljs$core$IFn$_invoke$arity$2 ? pred__19541.cljs$core$IFn$_invoke$arity$2(G__19546,G__19547) : pred__19541.call(null,G__19546,G__19547));
})())){
return (new shadow.dom.Size(G__19477,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19549 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__19550 = expr__19542;
return (pred__19541.cljs$core$IFn$_invoke$arity$2 ? pred__19541.cljs$core$IFn$_invoke$arity$2(G__19549,G__19550) : pred__19541.call(null,G__19549,G__19550));
})())){
return (new shadow.dom.Size(self__.w,G__19477,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__19477),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__19477){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19477,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19486){
var extmap__4236__auto__ = (function (){var G__19584 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19486,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19486)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19584);
} else {
return G__19584;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19486),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19486),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__19601 = shadow.dom.dom_node(el);
return goog.style.getSize(G__19601);
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
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__19614 = (i + (1));
var G__19615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19614;
ret = G__19615;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19621){
var vec__19623 = p__19621;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19623,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19634 = arguments.length;
switch (G__19634) {
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
var G__19639_19642 = new_node;
var G__19640_19643 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__19639_19642,G__19640_19643);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19645_19648 = new_node;
var G__19646_19649 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__19645_19648,G__19646_19649);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
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
var G__19658 = ps;
var G__19659 = (i + (1));
el__$1 = G__19658;
i = G__19659;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__19662 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__19662);
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
var G__19686 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__19686);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__19687 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__19687);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19691 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19691,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19695_19710 = cljs.core.seq(props);
var chunk__19696_19711 = null;
var count__19697_19712 = (0);
var i__19698_19713 = (0);
while(true){
if((i__19698_19713 < count__19697_19712)){
var vec__19699_19714 = chunk__19696_19711.cljs$core$IIndexed$_nth$arity$2(null,i__19698_19713);
var k_19715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19699_19714,(0),null);
var v_19716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19699_19714,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_19715);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19715),v_19716);


var G__19718 = seq__19695_19710;
var G__19719 = chunk__19696_19711;
var G__19720 = count__19697_19712;
var G__19721 = (i__19698_19713 + (1));
seq__19695_19710 = G__19718;
chunk__19696_19711 = G__19719;
count__19697_19712 = G__19720;
i__19698_19713 = G__19721;
continue;
} else {
var temp__5457__auto___19722 = cljs.core.seq(seq__19695_19710);
if(temp__5457__auto___19722){
var seq__19695_19723__$1 = temp__5457__auto___19722;
if(cljs.core.chunked_seq_QMARK_(seq__19695_19723__$1)){
var c__4351__auto___19725 = cljs.core.chunk_first(seq__19695_19723__$1);
var G__19727 = cljs.core.chunk_rest(seq__19695_19723__$1);
var G__19728 = c__4351__auto___19725;
var G__19729 = cljs.core.count(c__4351__auto___19725);
var G__19730 = (0);
seq__19695_19710 = G__19727;
chunk__19696_19711 = G__19728;
count__19697_19712 = G__19729;
i__19698_19713 = G__19730;
continue;
} else {
var vec__19704_19733 = cljs.core.first(seq__19695_19723__$1);
var k_19734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19704_19733,(0),null);
var v_19735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19704_19733,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_19734);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19734),v_19735);


var G__19737 = cljs.core.next(seq__19695_19723__$1);
var G__19738 = null;
var G__19739 = (0);
var G__19740 = (0);
seq__19695_19710 = G__19737;
chunk__19696_19711 = G__19738;
count__19697_19712 = G__19739;
i__19698_19713 = G__19740;
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
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19750 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19750,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19750,(1),null);
var seq__19754_19785 = cljs.core.seq(node_children);
var chunk__19756_19786 = null;
var count__19757_19787 = (0);
var i__19758_19788 = (0);
while(true){
if((i__19758_19788 < count__19757_19787)){
var child_struct_19790 = chunk__19756_19786.cljs$core$IIndexed$_nth$arity$2(null,i__19758_19788);
if(!((child_struct_19790 == null))){
if(typeof child_struct_19790 === 'string'){
var text_19791 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19791),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19790)].join(''));
} else {
var children_19793 = shadow.dom.svg_node(child_struct_19790);
if(cljs.core.seq_QMARK_(children_19793)){
var seq__19763_19794 = cljs.core.seq(children_19793);
var chunk__19765_19795 = null;
var count__19766_19796 = (0);
var i__19767_19797 = (0);
while(true){
if((i__19767_19797 < count__19766_19796)){
var child_19798 = chunk__19765_19795.cljs$core$IIndexed$_nth$arity$2(null,i__19767_19797);
if(cljs.core.truth_(child_19798)){
node.appendChild(child_19798);


var G__19799 = seq__19763_19794;
var G__19800 = chunk__19765_19795;
var G__19801 = count__19766_19796;
var G__19802 = (i__19767_19797 + (1));
seq__19763_19794 = G__19799;
chunk__19765_19795 = G__19800;
count__19766_19796 = G__19801;
i__19767_19797 = G__19802;
continue;
} else {
var G__19804 = seq__19763_19794;
var G__19805 = chunk__19765_19795;
var G__19806 = count__19766_19796;
var G__19807 = (i__19767_19797 + (1));
seq__19763_19794 = G__19804;
chunk__19765_19795 = G__19805;
count__19766_19796 = G__19806;
i__19767_19797 = G__19807;
continue;
}
} else {
var temp__5457__auto___19809 = cljs.core.seq(seq__19763_19794);
if(temp__5457__auto___19809){
var seq__19763_19811__$1 = temp__5457__auto___19809;
if(cljs.core.chunked_seq_QMARK_(seq__19763_19811__$1)){
var c__4351__auto___19813 = cljs.core.chunk_first(seq__19763_19811__$1);
var G__19814 = cljs.core.chunk_rest(seq__19763_19811__$1);
var G__19815 = c__4351__auto___19813;
var G__19816 = cljs.core.count(c__4351__auto___19813);
var G__19817 = (0);
seq__19763_19794 = G__19814;
chunk__19765_19795 = G__19815;
count__19766_19796 = G__19816;
i__19767_19797 = G__19817;
continue;
} else {
var child_19818 = cljs.core.first(seq__19763_19811__$1);
if(cljs.core.truth_(child_19818)){
node.appendChild(child_19818);


var G__19819 = cljs.core.next(seq__19763_19811__$1);
var G__19820 = null;
var G__19821 = (0);
var G__19822 = (0);
seq__19763_19794 = G__19819;
chunk__19765_19795 = G__19820;
count__19766_19796 = G__19821;
i__19767_19797 = G__19822;
continue;
} else {
var G__19823 = cljs.core.next(seq__19763_19811__$1);
var G__19824 = null;
var G__19825 = (0);
var G__19826 = (0);
seq__19763_19794 = G__19823;
chunk__19765_19795 = G__19824;
count__19766_19796 = G__19825;
i__19767_19797 = G__19826;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19793);
}
}


var G__19827 = seq__19754_19785;
var G__19828 = chunk__19756_19786;
var G__19829 = count__19757_19787;
var G__19830 = (i__19758_19788 + (1));
seq__19754_19785 = G__19827;
chunk__19756_19786 = G__19828;
count__19757_19787 = G__19829;
i__19758_19788 = G__19830;
continue;
} else {
var G__19832 = seq__19754_19785;
var G__19833 = chunk__19756_19786;
var G__19834 = count__19757_19787;
var G__19835 = (i__19758_19788 + (1));
seq__19754_19785 = G__19832;
chunk__19756_19786 = G__19833;
count__19757_19787 = G__19834;
i__19758_19788 = G__19835;
continue;
}
} else {
var temp__5457__auto___19837 = cljs.core.seq(seq__19754_19785);
if(temp__5457__auto___19837){
var seq__19754_19838__$1 = temp__5457__auto___19837;
if(cljs.core.chunked_seq_QMARK_(seq__19754_19838__$1)){
var c__4351__auto___19839 = cljs.core.chunk_first(seq__19754_19838__$1);
var G__19840 = cljs.core.chunk_rest(seq__19754_19838__$1);
var G__19841 = c__4351__auto___19839;
var G__19842 = cljs.core.count(c__4351__auto___19839);
var G__19843 = (0);
seq__19754_19785 = G__19840;
chunk__19756_19786 = G__19841;
count__19757_19787 = G__19842;
i__19758_19788 = G__19843;
continue;
} else {
var child_struct_19844 = cljs.core.first(seq__19754_19838__$1);
if(!((child_struct_19844 == null))){
if(typeof child_struct_19844 === 'string'){
var text_19845 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19845),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19844)].join(''));
} else {
var children_19846 = shadow.dom.svg_node(child_struct_19844);
if(cljs.core.seq_QMARK_(children_19846)){
var seq__19776_19847 = cljs.core.seq(children_19846);
var chunk__19778_19848 = null;
var count__19779_19849 = (0);
var i__19780_19850 = (0);
while(true){
if((i__19780_19850 < count__19779_19849)){
var child_19852 = chunk__19778_19848.cljs$core$IIndexed$_nth$arity$2(null,i__19780_19850);
if(cljs.core.truth_(child_19852)){
node.appendChild(child_19852);


var G__19853 = seq__19776_19847;
var G__19854 = chunk__19778_19848;
var G__19855 = count__19779_19849;
var G__19856 = (i__19780_19850 + (1));
seq__19776_19847 = G__19853;
chunk__19778_19848 = G__19854;
count__19779_19849 = G__19855;
i__19780_19850 = G__19856;
continue;
} else {
var G__19857 = seq__19776_19847;
var G__19858 = chunk__19778_19848;
var G__19859 = count__19779_19849;
var G__19860 = (i__19780_19850 + (1));
seq__19776_19847 = G__19857;
chunk__19778_19848 = G__19858;
count__19779_19849 = G__19859;
i__19780_19850 = G__19860;
continue;
}
} else {
var temp__5457__auto___19862__$1 = cljs.core.seq(seq__19776_19847);
if(temp__5457__auto___19862__$1){
var seq__19776_19864__$1 = temp__5457__auto___19862__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19776_19864__$1)){
var c__4351__auto___19865 = cljs.core.chunk_first(seq__19776_19864__$1);
var G__19866 = cljs.core.chunk_rest(seq__19776_19864__$1);
var G__19867 = c__4351__auto___19865;
var G__19868 = cljs.core.count(c__4351__auto___19865);
var G__19869 = (0);
seq__19776_19847 = G__19866;
chunk__19778_19848 = G__19867;
count__19779_19849 = G__19868;
i__19780_19850 = G__19869;
continue;
} else {
var child_19871 = cljs.core.first(seq__19776_19864__$1);
if(cljs.core.truth_(child_19871)){
node.appendChild(child_19871);


var G__19873 = cljs.core.next(seq__19776_19864__$1);
var G__19874 = null;
var G__19875 = (0);
var G__19876 = (0);
seq__19776_19847 = G__19873;
chunk__19778_19848 = G__19874;
count__19779_19849 = G__19875;
i__19780_19850 = G__19876;
continue;
} else {
var G__19877 = cljs.core.next(seq__19776_19864__$1);
var G__19878 = null;
var G__19879 = (0);
var G__19880 = (0);
seq__19776_19847 = G__19877;
chunk__19778_19848 = G__19878;
count__19779_19849 = G__19879;
i__19780_19850 = G__19880;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19846);
}
}


var G__19881 = cljs.core.next(seq__19754_19838__$1);
var G__19882 = null;
var G__19883 = (0);
var G__19884 = (0);
seq__19754_19785 = G__19881;
chunk__19756_19786 = G__19882;
count__19757_19787 = G__19883;
i__19758_19788 = G__19884;
continue;
} else {
var G__19885 = cljs.core.next(seq__19754_19838__$1);
var G__19886 = null;
var G__19887 = (0);
var G__19888 = (0);
seq__19754_19785 = G__19885;
chunk__19756_19786 = G__19886;
count__19757_19787 = G__19887;
i__19758_19788 = G__19888;
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

var G__19892_19912 = shadow.dom._to_svg;
var G__19893_19913 = "string";
var G__19894_19914 = ((function (G__19892_19912,G__19893_19913){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__19892_19912,G__19893_19913))
;
goog.object.set(G__19892_19912,G__19893_19913,G__19894_19914);

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

var G__19905_19922 = shadow.dom._to_svg;
var G__19906_19923 = "null";
var G__19907_19924 = ((function (G__19905_19922,G__19906_19923){
return (function (_){
return null;
});})(G__19905_19922,G__19906_19923))
;
goog.object.set(G__19905_19922,G__19906_19923,G__19907_19924);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19938 = arguments.length;
var i__4532__auto___19939 = (0);
while(true){
if((i__4532__auto___19939 < len__4531__auto___19938)){
args__4534__auto__.push((arguments[i__4532__auto___19939]));

var G__19941 = (i__4532__auto___19939 + (1));
i__4532__auto___19939 = G__19941;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq19928){
var G__19929 = cljs.core.first(seq19928);
var seq19928__$1 = cljs.core.next(seq19928);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19929,seq19928__$1);
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
var G__19947 = arguments.length;
switch (G__19947) {
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
var G__19953_19987 = shadow.dom.dom_node(el);
var G__19954_19988 = cljs.core.name(event);
var G__19955_19989 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__19953_19987,G__19954_19988,G__19955_19989) : shadow.dom.dom_listen.call(null,G__19953_19987,G__19954_19988,G__19955_19989));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__16231__auto___19993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___19993,buf,chan,event_fn){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___19993,buf,chan,event_fn){
return (function (state_19961){
var state_val_19962 = (state_19961[(1)]);
if((state_val_19962 === (1))){
var state_19961__$1 = state_19961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19961__$1,(2),once_or_cleanup);
} else {
if((state_val_19962 === (2))){
var inst_19957 = (state_19961[(2)]);
var inst_19959 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19961__$1 = (function (){var statearr_19966 = state_19961;
(statearr_19966[(7)] = inst_19957);

return statearr_19966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19961__$1,inst_19959);
} else {
return null;
}
}
});})(c__16231__auto___19993,buf,chan,event_fn))
;
return ((function (switch__15665__auto__,c__16231__auto___19993,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__15666__auto__ = null;
var shadow$dom$state_machine__15666__auto____0 = (function (){
var statearr_19967 = [null,null,null,null,null,null,null,null];
(statearr_19967[(0)] = shadow$dom$state_machine__15666__auto__);

(statearr_19967[(1)] = (1));

return statearr_19967;
});
var shadow$dom$state_machine__15666__auto____1 = (function (state_19961){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_19961);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e19968){if((e19968 instanceof Object)){
var ex__15669__auto__ = e19968;
var statearr_19969_19999 = state_19961;
(statearr_19969_19999[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20000 = state_19961;
state_19961 = G__20000;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
shadow$dom$state_machine__15666__auto__ = function(state_19961){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15666__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15666__auto____1.call(this,state_19961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15666__auto____0;
shadow$dom$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15666__auto____1;
return shadow$dom$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___19993,buf,chan,event_fn))
})();
var state__16233__auto__ = (function (){var statearr_19972 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_19972[(6)] = c__16231__auto___19993);

return statearr_19972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___19993,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js-4849cf31.map
