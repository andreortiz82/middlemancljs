goog.provide('components.core');
goog.require('cljs.core');
goog.require('reagent.core');
components.core.click_testr = (function components$core$click_testr(count){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-blue.p-10.white.has-pointer.text-center.has-cursor","div.bg-blue.p-10.white.has-pointer.text-center.has-cursor",1895117974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.inc);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),["Click me ---> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(count))].join('')], null)], null);
});
components.core.app = (function components$core$app(){
var count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (count){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.click_testr,count], null)], null);
});
;})(count))
});
components.core.mount = (function components$core$mount(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.app], null),document.getElementById("component-example-container"));
});
components.core.init = (function components$core$init(){
return components.core.mount();
});
goog.exportSymbol('components.core.init', components.core.init);

//# sourceMappingURL=components.core.js.map
