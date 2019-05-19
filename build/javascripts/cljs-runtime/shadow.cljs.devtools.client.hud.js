goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__16231__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto__,req){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto__,req){
return (function (state_22560){
var state_val_22561 = (state_22560[(1)]);
if((state_val_22561 === (7))){
var state_22560__$1 = state_22560;
var statearr_22562_22588 = state_22560__$1;
(statearr_22562_22588[(2)] = false);

(statearr_22562_22588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (1))){
var state_22560__$1 = state_22560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22560__$1,(2),req);
} else {
if((state_val_22561 === (4))){
var inst_22524 = (state_22560[(7)]);
var inst_22530 = (inst_22524 == null);
var inst_22531 = cljs.core.not(inst_22530);
var state_22560__$1 = state_22560;
if(inst_22531){
var statearr_22563_22589 = state_22560__$1;
(statearr_22563_22589[(1)] = (6));

} else {
var statearr_22564_22590 = state_22560__$1;
(statearr_22564_22590[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (15))){
var state_22560__$1 = state_22560;
var statearr_22565_22591 = state_22560__$1;
(statearr_22565_22591[(2)] = null);

(statearr_22565_22591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (13))){
var inst_22524 = (state_22560[(7)]);
var state_22560__$1 = state_22560;
var statearr_22566_22592 = state_22560__$1;
(statearr_22566_22592[(2)] = inst_22524);

(statearr_22566_22592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (6))){
var inst_22524 = (state_22560[(7)]);
var inst_22533 = inst_22524.cljs$lang$protocol_mask$partition0$;
var inst_22534 = (inst_22533 & (64));
var inst_22535 = inst_22524.cljs$core$ISeq$;
var inst_22536 = (cljs.core.PROTOCOL_SENTINEL === inst_22535);
var inst_22537 = ((inst_22534) || (inst_22536));
var state_22560__$1 = state_22560;
if(cljs.core.truth_(inst_22537)){
var statearr_22567_22593 = state_22560__$1;
(statearr_22567_22593[(1)] = (9));

} else {
var statearr_22568_22594 = state_22560__$1;
(statearr_22568_22594[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (17))){
var inst_22556 = (state_22560[(2)]);
var state_22560__$1 = state_22560;
var statearr_22569_22595 = state_22560__$1;
(statearr_22569_22595[(2)] = inst_22556);

(statearr_22569_22595[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (3))){
var state_22560__$1 = state_22560;
var statearr_22570_22596 = state_22560__$1;
(statearr_22570_22596[(2)] = null);

(statearr_22570_22596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (12))){
var inst_22524 = (state_22560[(7)]);
var inst_22546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22524);
var state_22560__$1 = state_22560;
var statearr_22571_22597 = state_22560__$1;
(statearr_22571_22597[(2)] = inst_22546);

(statearr_22571_22597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (2))){
var inst_22524 = (state_22560[(7)]);
var inst_22524__$1 = (state_22560[(2)]);
var inst_22525 = (inst_22524__$1 == null);
var state_22560__$1 = (function (){var statearr_22572 = state_22560;
(statearr_22572[(7)] = inst_22524__$1);

return statearr_22572;
})();
if(cljs.core.truth_(inst_22525)){
var statearr_22573_22598 = state_22560__$1;
(statearr_22573_22598[(1)] = (3));

} else {
var statearr_22574_22599 = state_22560__$1;
(statearr_22574_22599[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (11))){
var inst_22541 = (state_22560[(2)]);
var state_22560__$1 = state_22560;
var statearr_22575_22600 = state_22560__$1;
(statearr_22575_22600[(2)] = inst_22541);

(statearr_22575_22600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (9))){
var state_22560__$1 = state_22560;
var statearr_22576_22601 = state_22560__$1;
(statearr_22576_22601[(2)] = true);

(statearr_22576_22601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (5))){
var inst_22558 = (state_22560[(2)]);
var state_22560__$1 = state_22560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22560__$1,inst_22558);
} else {
if((state_val_22561 === (14))){
var inst_22549 = (state_22560[(8)]);
var inst_22549__$1 = (state_22560[(2)]);
var inst_22550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22549__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_22551 = (inst_22550 === (0));
var state_22560__$1 = (function (){var statearr_22577 = state_22560;
(statearr_22577[(8)] = inst_22549__$1);

return statearr_22577;
})();
if(cljs.core.truth_(inst_22551)){
var statearr_22578_22602 = state_22560__$1;
(statearr_22578_22602[(1)] = (15));

} else {
var statearr_22579_22603 = state_22560__$1;
(statearr_22579_22603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (16))){
var inst_22549 = (state_22560[(8)]);
var inst_22554 = console.warn("file open failed",inst_22549);
var state_22560__$1 = state_22560;
var statearr_22580_22604 = state_22560__$1;
(statearr_22580_22604[(2)] = inst_22554);

(statearr_22580_22604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (10))){
var state_22560__$1 = state_22560;
var statearr_22581_22605 = state_22560__$1;
(statearr_22581_22605[(2)] = false);

(statearr_22581_22605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22561 === (8))){
var inst_22544 = (state_22560[(2)]);
var state_22560__$1 = state_22560;
if(cljs.core.truth_(inst_22544)){
var statearr_22582_22606 = state_22560__$1;
(statearr_22582_22606[(1)] = (12));

} else {
var statearr_22583_22607 = state_22560__$1;
(statearr_22583_22607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16231__auto__,req))
;
return ((function (switch__15665__auto__,c__16231__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto____0 = (function (){
var statearr_22584 = [null,null,null,null,null,null,null,null,null];
(statearr_22584[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto__);

(statearr_22584[(1)] = (1));

return statearr_22584;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto____1 = (function (state_22560){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_22560);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e22585){if((e22585 instanceof Object)){
var ex__15669__auto__ = e22585;
var statearr_22586_22608 = state_22560;
(statearr_22586_22608[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22609 = state_22560;
state_22560 = G__22609;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto__ = function(state_22560){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto____1.call(this,state_22560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto__,req))
})();
var state__16233__auto__ = (function (){var statearr_22587 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_22587[(6)] = c__16231__auto__);

return statearr_22587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto__,req))
);

return c__16231__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__22611 = arguments.length;
switch (G__22611) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___22613 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___22613 == null)){
} else {
var x_22614 = temp__5461__auto___22613;
shadow.dom.remove(x_22614);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__16231__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto__,el,container_el,temp__5461__auto__){
return (function (state_22627){
var state_val_22628 = (state_22627[(1)]);
if((state_val_22628 === (1))){
var inst_22615 = cljs.core.async.timeout((250));
var state_22627__$1 = state_22627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22627__$1,(2),inst_22615);
} else {
if((state_val_22628 === (2))){
var inst_22617 = (state_22627[(2)]);
var inst_22618 = [el];
var inst_22619 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_22620 = [inst_22619];
var inst_22621 = cljs.core.PersistentHashMap.fromArrays(inst_22618,inst_22620);
var inst_22622 = shadow.animate.start((250),inst_22621);
var state_22627__$1 = (function (){var statearr_22629 = state_22627;
(statearr_22629[(7)] = inst_22617);

return statearr_22629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22627__$1,(3),inst_22622);
} else {
if((state_val_22628 === (3))){
var inst_22624 = (state_22627[(2)]);
var inst_22625 = shadow.dom.remove(container_el);
var state_22627__$1 = (function (){var statearr_22630 = state_22627;
(statearr_22630[(8)] = inst_22624);

return statearr_22630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22627__$1,inst_22625);
} else {
return null;
}
}
}
});})(c__16231__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__15665__auto__,c__16231__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto____0 = (function (){
var statearr_22631 = [null,null,null,null,null,null,null,null,null];
(statearr_22631[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto__);

(statearr_22631[(1)] = (1));

return statearr_22631;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto____1 = (function (state_22627){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_22627);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e22632){if((e22632 instanceof Object)){
var ex__15669__auto__ = e22632;
var statearr_22633_22635 = state_22627;
(statearr_22633_22635[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22636 = state_22627;
state_22627 = G__22636;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto__ = function(state_22627){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto____1.call(this,state_22627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto__,el,container_el,temp__5461__auto__))
})();
var state__16233__auto__ = (function (){var statearr_22634 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_22634[(6)] = c__16231__auto__);

return statearr_22634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto__,el,container_el,temp__5461__auto__))
);

return c__16231__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4324__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__22637(s__22638){
return (new cljs.core.LazySeq(null,(function (){
var s__22638__$1 = s__22638;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22638__$1);
if(temp__5457__auto__){
var s__22638__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22638__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22638__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22640 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22639 = (0);
while(true){
if((i__22639 < size__4323__auto__)){
var vec__22641 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22639);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22641,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22641,(1),null);
cljs.core.chunk_append(b__22640,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__22644 = "%4d | %s";
var G__22645 = (((1) + idx) + start_idx);
var G__22646 = text;
return goog.string.format(G__22644,G__22645,G__22646);
})()], null));

var G__22653 = (i__22639 + (1));
i__22639 = G__22653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22640),shadow$cljs$devtools$client$hud$source_line_html_$_iter__22637(cljs.core.chunk_rest(s__22638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22640),null);
}
} else {
var vec__22647 = cljs.core.first(s__22638__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22647,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22647,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__22650 = "%4d | %s";
var G__22651 = (((1) + idx) + start_idx);
var G__22652 = text;
return goog.string.format(G__22650,G__22651,G__22652);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__22637(cljs.core.rest(s__22638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__22655 = arguments.length;
switch (G__22655) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__22657){
var map__22658 = p__22657;
var map__22658__$1 = ((((!((map__22658 == null)))?(((((map__22658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22658):map__22658);
var warning = map__22658__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__22658,map__22658__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__22658,map__22658__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__22660){
var map__22661 = p__22660;
var map__22661__$1 = ((((!((map__22661 == null)))?(((((map__22661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22661):map__22661);
var warning = map__22661__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__22663 = source_excerpt;
var map__22663__$1 = ((((!((map__22663 == null)))?(((((map__22663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22663):map__22663);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__3949__auto__ = column;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__22666){
var map__22667 = p__22666;
var map__22667__$1 = ((((!((map__22667 == null)))?(((((map__22667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22667):map__22667);
var msg = map__22667__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22667__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22667__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__22669 = info;
var map__22669__$1 = ((((!((map__22669 == null)))?(((((map__22669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22669):map__22669);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22669__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22669,map__22669__$1,sources,map__22667,map__22667__$1,msg,type,info){
return (function (p1__22665_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__22665_SHARP_));
});})(map__22669,map__22669__$1,sources,map__22667,map__22667__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4324__auto__ = ((function (map__22669,map__22669__$1,sources,sources_with_warnings,map__22667,map__22667__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22671(s__22672){
return (new cljs.core.LazySeq(null,((function (map__22669,map__22669__$1,sources,sources_with_warnings,map__22667,map__22667__$1,msg,type,info){
return (function (){
var s__22672__$1 = s__22672;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__22672__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__22677 = cljs.core.first(xs__6012__auto__);
var map__22677__$1 = ((((!((map__22677 == null)))?(((((map__22677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22677):map__22677);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22677__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4320__auto__ = ((function (s__22672__$1,map__22677,map__22677__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__22669,map__22669__$1,sources,sources_with_warnings,map__22667,map__22667__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22671_$_iter__22673(s__22674){
return (new cljs.core.LazySeq(null,((function (s__22672__$1,map__22677,map__22677__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__22669,map__22669__$1,sources,sources_with_warnings,map__22667,map__22667__$1,msg,type,info){
return (function (){
var s__22674__$1 = s__22674;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__22674__$1);
if(temp__5457__auto____$1){
var s__22674__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22674__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__22674__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__22676 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__22675 = (0);
while(true){
if((i__22675 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__22675);
cljs.core.chunk_append(b__22676,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__22679 = (i__22675 + (1));
i__22675 = G__22679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22676),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22671_$_iter__22673(cljs.core.chunk_rest(s__22674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22676),null);
}
} else {
var warning = cljs.core.first(s__22674__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22671_$_iter__22673(cljs.core.rest(s__22674__$2)));
}
} else {
return null;
}
break;
}
});})(s__22672__$1,map__22677,map__22677__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__22669,map__22669__$1,sources,sources_with_warnings,map__22667,map__22667__$1,msg,type,info))
,null,null));
});})(s__22672__$1,map__22677,map__22677__$1,warnings,xs__6012__auto__,temp__5457__auto__,map__22669,map__22669__$1,sources,sources_with_warnings,map__22667,map__22667__$1,msg,type,info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__22671(cljs.core.rest(s__22672__$1)));
} else {
var G__22680 = cljs.core.rest(s__22672__$1);
s__22672__$1 = G__22680;
continue;
}
} else {
return null;
}
break;
}
});})(map__22669,map__22669__$1,sources,sources_with_warnings,map__22667,map__22667__$1,msg,type,info))
,null,null));
});})(map__22669,map__22669__$1,sources,sources_with_warnings,map__22667,map__22667__$1,msg,type,info))
;
return iter__4324__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__22681){
var map__22682 = p__22681;
var map__22682__$1 = ((((!((map__22682 == null)))?(((((map__22682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22682):map__22682);
var msg = map__22682__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22682__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var x = temp__5461__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
