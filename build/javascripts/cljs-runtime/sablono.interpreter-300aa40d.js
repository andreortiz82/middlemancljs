goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if(((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null))))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var G__18771_18774 = next_state;
var G__18772_18775 = next_props;
var G__18773_18776 = ({"onChange": on_change});
goog.object.extend(G__18771_18774,G__18772_18775,G__18773_18776);

goog.object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({});
var G__18777_18787 = state;
var G__18778_18788 = props;
var G__18779_18789 = ({"onChange": (function (){var G__18780 = goog.object.get(this$,"onChange");
var G__18781 = this$;
return goog.bind(G__18780,G__18781);
})()});
goog.object.extend(G__18777_18787,G__18778_18788,G__18779_18789);

return state;
})();

return React.Component.call(this$,props);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x18782_18791 = ctor.prototype;
x18782_18791.onChange = ((function (x18782_18791,ctor){
return (function (event){
var this$ = this;
var temp__5457__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5457__auto__)){
var handler = temp__5457__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return sablono.interpreter.update_state(this$,this$.props,property,goog.object.getValueByKeys(event,"target",property));
} else {
return null;
}
});})(x18782_18791,ctor))
;

x18782_18791.componentWillReceiveProps = ((function (x18782_18791,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state",property);
var element_value = (function (){var G__18783 = ReactDOM.findDOMNode(this$);
var G__18784 = property;
return goog.object.get(G__18783,G__18784);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return sablono.interpreter.update_state(this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state(this$,new_props,property,goog.object.get(new_props,property));
}
});})(x18782_18791,ctor))
;

x18782_18791.render = ((function (x18782_18791,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x18782_18791,ctor))
;


return ctor;
});
sablono.interpreter.lazy_load_wrappers = (function sablono$interpreter$lazy_load_wrappers(){
if(cljs.core.truth_(sablono.interpreter.wrapped_textarea)){
return null;
} else {
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input","value");

sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element("input","checked");

sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select","value");

return sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea","value");
}
});
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__3938__auto__ = cljs.core.object_QMARK_(props);
if(and__3938__auto__){
var G__18800 = type;
switch (G__18800) {
case "input":
return ((!((props.checked == null))) || (!((props.value == null))));

break;
case "select":
return !((props.value == null));

break;
case "textarea":
return !((props.value == null));

break;
default:
return false;

}
} else {
return and__3938__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_(type,props)){
sablono.interpreter.lazy_load_wrappers();

var G__18802 = type;
switch (G__18802) {
case "input":
var G__18804 = (function (){var and__3938__auto__ = cljs.core.object_QMARK_(props);
if(and__3938__auto__){
return props.type;
} else {
return and__3938__auto__;
}
})();
switch (G__18804) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18817 = arguments.length;
var i__4532__auto___18818 = (0);
while(true){
if((i__4532__auto___18818 < len__4531__auto___18817)){
args__4534__auto__.push((arguments[i__4532__auto___18818]));

var G__18822 = (i__4532__auto___18818 + (1));
i__4532__auto___18818 = G__18822;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,sablono.interpreter.element_class(type,props),props,children);
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq18814){
var G__18815 = cljs.core.first(seq18814);
var seq18814__$1 = cljs.core.next(seq18814);
var G__18816 = cljs.core.first(seq18814__$1);
var seq18814__$2 = cljs.core.next(seq18814__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18815,G__18816,seq18814__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__5457__auto__ = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5457__auto__)){
var js_attrs = temp__5457__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
js_attrs.className = class$__$1;
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__18844 = sablono.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18844,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18844,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18844,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),sablono.interpreter.interpret_seq(content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_(x))){
return sablono.interpreter.element(x);
} else {
return sablono.interpreter.interpret_seq(x);
}
});
goog.object.set(sablono.interpreter.IInterpreter,"null",true);

var G__18885_18930 = sablono.interpreter.interpret;
var G__18886_18931 = "null";
var G__18887_18932 = ((function (G__18885_18930,G__18886_18931){
return (function (this$){
return null;
});})(G__18885_18930,G__18886_18931))
;
goog.object.set(G__18885_18930,G__18886_18931,G__18887_18932);

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

goog.object.set(sablono.interpreter.IInterpreter,"_",true);

var G__18899_18933 = sablono.interpreter.interpret;
var G__18900_18934 = "_";
var G__18901_18935 = ((function (G__18899_18933,G__18900_18934){
return (function (this$){
return this$;
});})(G__18899_18933,G__18900_18934))
;
goog.object.set(G__18899_18933,G__18900_18934,G__18901_18935);

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

//# sourceMappingURL=sablono.interpreter.js-7ce32fcb.map
