goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__36084 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36085 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36085;

try{var G__36086 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__36087 = container;
var G__36088 = ((function (G__36086,G__36087,_STAR_always_update_STAR__orig_val__36084,_STAR_always_update_STAR__temp_val__36085){
return (function (){
var _STAR_always_update_STAR__orig_val__36089 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36090 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36090;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36089;
}});})(G__36086,G__36087,_STAR_always_update_STAR__orig_val__36084,_STAR_always_update_STAR__temp_val__36085))
;
return module$node_modules$react_dom$index.render(G__36086,G__36087,G__36088);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36084;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36092 = arguments.length;
switch (G__36092) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__36093_36103 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__36094_36104 = null;
var count__36095_36105 = (0);
var i__36096_36106 = (0);
while(true){
if((i__36096_36106 < count__36095_36105)){
var v_36107 = chunk__36094_36104.cljs$core$IIndexed$_nth$arity$2(null,i__36096_36106);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_36107);


var G__36108 = seq__36093_36103;
var G__36109 = chunk__36094_36104;
var G__36110 = count__36095_36105;
var G__36111 = (i__36096_36106 + (1));
seq__36093_36103 = G__36108;
chunk__36094_36104 = G__36109;
count__36095_36105 = G__36110;
i__36096_36106 = G__36111;
continue;
} else {
var temp__5735__auto___36112 = cljs.core.seq(seq__36093_36103);
if(temp__5735__auto___36112){
var seq__36093_36113__$1 = temp__5735__auto___36112;
if(cljs.core.chunked_seq_QMARK_(seq__36093_36113__$1)){
var c__4550__auto___36114 = cljs.core.chunk_first(seq__36093_36113__$1);
var G__36115 = cljs.core.chunk_rest(seq__36093_36113__$1);
var G__36116 = c__4550__auto___36114;
var G__36117 = cljs.core.count(c__4550__auto___36114);
var G__36118 = (0);
seq__36093_36103 = G__36115;
chunk__36094_36104 = G__36116;
count__36095_36105 = G__36117;
i__36096_36106 = G__36118;
continue;
} else {
var v_36119 = cljs.core.first(seq__36093_36113__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_36119);


var G__36120 = cljs.core.next(seq__36093_36113__$1);
var G__36121 = null;
var G__36122 = (0);
var G__36123 = (0);
seq__36093_36103 = G__36120;
chunk__36094_36104 = G__36121;
count__36095_36105 = G__36122;
i__36096_36106 = G__36123;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=reagent.dom.js.map
