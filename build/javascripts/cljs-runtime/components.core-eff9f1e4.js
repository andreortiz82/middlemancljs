goog.provide('components.core');
goog.require('cljs.core');
goog.require('rum.core');
components.core.app = rum.core.build_defcs((function (state){
var local = new cljs.core.Keyword("rum","local","rum/local",-1497916586).cljs$core$IFn$_invoke$arity$1(state);
var map__22978 = cljs.core.deref(local);
var map__22978__$1 = ((((!((map__22978 == null)))?(((((map__22978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22978):map__22978);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.createElement("div",null,React.createElement("div",({"onClick": ((function (local,map__22978,map__22978__$1,count){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local,cljs.core.assoc,new cljs.core.Keyword(null,"count","count",2139924085),(count + (1)));
});})(local,map__22978,map__22978__$1,count))
, "className": "bg-blue p-40 mt-40 white"}),"Click me - I'm a CLJS component",(function (){var attrs22980 = count;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h2",((cljs.core.map_QMARK_(attrs22980))?sablono.interpreter.attributes(attrs22980):null),((cljs.core.map_QMARK_(attrs22980))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22980)], null)));
})(),(function (){var attrs22981 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs22981))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blue"], null)], null),attrs22981], 0))):({"className": "blue"})),((cljs.core.map_QMARK_(attrs22981))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22981)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null))], null),"app");
components.core.init = (function components$core$init(){
return rum.core.mount((components.core.app.cljs$core$IFn$_invoke$arity$0 ? components.core.app.cljs$core$IFn$_invoke$arity$0() : components.core.app.call(null)),document.getElementById("component-example-container"));
});
goog.exportSymbol('components.core.init', components.core.init);

//# sourceMappingURL=components.core.js-f3eee3e5.map
