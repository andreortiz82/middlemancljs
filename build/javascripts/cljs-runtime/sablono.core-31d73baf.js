goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20980__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__20977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__20978 = cljs.core.seq(vec__20977);
var first__20979 = cljs.core.first(seq__20978);
var seq__20978__$1 = cljs.core.next(seq__20978);
var tag = first__20979;
var body = seq__20978__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__20980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20984__i = 0, G__20984__a = new Array(arguments.length -  0);
while (G__20984__i < G__20984__a.length) {G__20984__a[G__20984__i] = arguments[G__20984__i + 0]; ++G__20984__i;}
  args = new cljs.core.IndexedSeq(G__20984__a,0,null);
} 
return G__20980__delegate.call(this,args);};
G__20980.cljs$lang$maxFixedArity = 0;
G__20980.cljs$lang$applyTo = (function (arglist__20988){
var args = cljs.core.seq(arglist__20988);
return G__20980__delegate(args);
});
G__20980.cljs$core$IFn$_invoke$arity$variadic = G__20980__delegate;
return G__20980;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__20993(s__20994){
return (new cljs.core.LazySeq(null,(function (){
var s__20994__$1 = s__20994;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20994__$1);
if(temp__5457__auto__){
var s__20994__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20994__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20994__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20996 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20995 = (0);
while(true){
if((i__20995 < size__4323__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20995);
cljs.core.chunk_append(b__20996,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__21016 = (i__20995 + (1));
i__20995 = G__21016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20996),sablono$core$update_arglists_$_iter__20993(cljs.core.chunk_rest(s__20994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20996),null);
}
} else {
var args = cljs.core.first(s__20994__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__20993(cljs.core.rest(s__20994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21024 = arguments.length;
var i__4532__auto___21025 = (0);
while(true){
if((i__4532__auto___21025 < len__4531__auto___21024)){
args__4534__auto__.push((arguments[i__4532__auto___21025]));

var G__21026 = (i__4532__auto___21025 + (1));
i__4532__auto___21025 = G__21026;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__21020(s__21021){
return (new cljs.core.LazySeq(null,(function (){
var s__21021__$1 = s__21021;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__21021__$1);
if(temp__5457__auto__){
var s__21021__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21021__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21021__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21023 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21022 = (0);
while(true){
if((i__21022 < size__4323__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21022);
cljs.core.chunk_append(b__21023,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__21036 = (i__21022 + (1));
i__21022 = G__21036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21023),sablono$core$iter__21020(cljs.core.chunk_rest(s__21021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21023),null);
}
} else {
var style = cljs.core.first(s__21021__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__21020(cljs.core.rest(s__21021__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq21018){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21018));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__21049 = goog.dom.getDocument().body;
var G__21050 = (function (){var G__21051 = "script";
var G__21052 = ({"src": src});
return goog.dom.createDom(G__21051,G__21052);
})();
return goog.dom.appendChild(G__21049,G__21050);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to21053 = (function sablono$core$link_to21053(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21058 = arguments.length;
var i__4532__auto___21059 = (0);
while(true){
if((i__4532__auto___21059 < len__4531__auto___21058)){
args__4534__auto__.push((arguments[i__4532__auto___21059]));

var G__21060 = (i__4532__auto___21059 + (1));
i__4532__auto___21059 = G__21060;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to21053.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to21053.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to21053.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to21053.cljs$lang$applyTo = (function (seq21054){
var G__21055 = cljs.core.first(seq21054);
var seq21054__$1 = cljs.core.next(seq21054);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21055,seq21054__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to21053);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to21062 = (function sablono$core$mail_to21062(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21069 = arguments.length;
var i__4532__auto___21070 = (0);
while(true){
if((i__4532__auto___21070 < len__4531__auto___21069)){
args__4534__auto__.push((arguments[i__4532__auto___21070]));

var G__21071 = (i__4532__auto___21070 + (1));
i__4532__auto___21070 = G__21071;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to21062.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to21062.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__21065){
var vec__21066 = p__21065;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21066,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to21062.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to21062.cljs$lang$applyTo = (function (seq21063){
var G__21064 = cljs.core.first(seq21063);
var seq21063__$1 = cljs.core.next(seq21063);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21064,seq21063__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to21062);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list21074 = (function sablono$core$unordered_list21074(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list21074_$_iter__21075(s__21076){
return (new cljs.core.LazySeq(null,(function (){
var s__21076__$1 = s__21076;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__21076__$1);
if(temp__5457__auto__){
var s__21076__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21076__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21076__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21078 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21077 = (0);
while(true){
if((i__21077 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21077);
cljs.core.chunk_append(b__21078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21081 = (i__21077 + (1));
i__21077 = G__21081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21078),sablono$core$unordered_list21074_$_iter__21075(cljs.core.chunk_rest(s__21076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21078),null);
}
} else {
var x = cljs.core.first(s__21076__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list21074_$_iter__21075(cljs.core.rest(s__21076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list21074);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list21082 = (function sablono$core$ordered_list21082(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list21082_$_iter__21083(s__21084){
return (new cljs.core.LazySeq(null,(function (){
var s__21084__$1 = s__21084;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__21084__$1);
if(temp__5457__auto__){
var s__21084__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21084__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21084__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21086 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21085 = (0);
while(true){
if((i__21085 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21085);
cljs.core.chunk_append(b__21086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21090 = (i__21085 + (1));
i__21085 = G__21090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21086),sablono$core$ordered_list21082_$_iter__21083(cljs.core.chunk_rest(s__21084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21086),null);
}
} else {
var x = cljs.core.first(s__21084__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list21082_$_iter__21083(cljs.core.rest(s__21084__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list21082);
/**
 * Create an image element.
 */
sablono.core.image21092 = (function sablono$core$image21092(var_args){
var G__21095 = arguments.length;
switch (G__21095) {
case 1:
return sablono.core.image21092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image21092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image21092.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image21092.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image21092.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image21092);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__21101_SHARP_,p2__21102_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21101_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21102_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__21104_SHARP_,p2__21105_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21104_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21105_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__21110 = arguments.length;
switch (G__21110) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field21112 = (function sablono$core$color_field21112(var_args){
var G__21114 = arguments.length;
switch (G__21114) {
case 1:
return sablono.core.color_field21112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field21112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field21112.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20967__auto__);
});

sablono.core.color_field21112.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.color_field21112.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field21112);

/**
 * Creates a date input field.
 */
sablono.core.date_field21119 = (function sablono$core$date_field21119(var_args){
var G__21121 = arguments.length;
switch (G__21121) {
case 1:
return sablono.core.date_field21119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field21119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field21119.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20967__auto__);
});

sablono.core.date_field21119.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.date_field21119.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field21119);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field21126 = (function sablono$core$datetime_field21126(var_args){
var G__21128 = arguments.length;
switch (G__21128) {
case 1:
return sablono.core.datetime_field21126.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field21126.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field21126.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20967__auto__);
});

sablono.core.datetime_field21126.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.datetime_field21126.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field21126);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field21131 = (function sablono$core$datetime_local_field21131(var_args){
var G__21134 = arguments.length;
switch (G__21134) {
case 1:
return sablono.core.datetime_local_field21131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field21131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field21131.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20967__auto__);
});

sablono.core.datetime_local_field21131.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.datetime_local_field21131.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field21131);

/**
 * Creates a email input field.
 */
sablono.core.email_field21139 = (function sablono$core$email_field21139(var_args){
var G__21141 = arguments.length;
switch (G__21141) {
case 1:
return sablono.core.email_field21139.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field21139.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field21139.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20967__auto__);
});

sablono.core.email_field21139.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.email_field21139.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field21139);

/**
 * Creates a file input field.
 */
sablono.core.file_field21150 = (function sablono$core$file_field21150(var_args){
var G__21152 = arguments.length;
switch (G__21152) {
case 1:
return sablono.core.file_field21150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field21150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field21150.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20967__auto__);
});

sablono.core.file_field21150.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.file_field21150.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field21150);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field21157 = (function sablono$core$hidden_field21157(var_args){
var G__21159 = arguments.length;
switch (G__21159) {
case 1:
return sablono.core.hidden_field21157.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field21157.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field21157.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20967__auto__);
});

sablono.core.hidden_field21157.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.hidden_field21157.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field21157);

/**
 * Creates a month input field.
 */
sablono.core.month_field21176 = (function sablono$core$month_field21176(var_args){
var G__21183 = arguments.length;
switch (G__21183) {
case 1:
return sablono.core.month_field21176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field21176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field21176.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20967__auto__);
});

sablono.core.month_field21176.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.month_field21176.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field21176);

/**
 * Creates a number input field.
 */
sablono.core.number_field21187 = (function sablono$core$number_field21187(var_args){
var G__21189 = arguments.length;
switch (G__21189) {
case 1:
return sablono.core.number_field21187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field21187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field21187.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20967__auto__);
});

sablono.core.number_field21187.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.number_field21187.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field21187);

/**
 * Creates a password input field.
 */
sablono.core.password_field21193 = (function sablono$core$password_field21193(var_args){
var G__21195 = arguments.length;
switch (G__21195) {
case 1:
return sablono.core.password_field21193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field21193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field21193.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20967__auto__);
});

sablono.core.password_field21193.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.password_field21193.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field21193);

/**
 * Creates a range input field.
 */
sablono.core.range_field21199 = (function sablono$core$range_field21199(var_args){
var G__21201 = arguments.length;
switch (G__21201) {
case 1:
return sablono.core.range_field21199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field21199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field21199.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20967__auto__);
});

sablono.core.range_field21199.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.range_field21199.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field21199);

/**
 * Creates a search input field.
 */
sablono.core.search_field21205 = (function sablono$core$search_field21205(var_args){
var G__21208 = arguments.length;
switch (G__21208) {
case 1:
return sablono.core.search_field21205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field21205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field21205.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20967__auto__);
});

sablono.core.search_field21205.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.search_field21205.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field21205);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field21212 = (function sablono$core$tel_field21212(var_args){
var G__21214 = arguments.length;
switch (G__21214) {
case 1:
return sablono.core.tel_field21212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field21212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field21212.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20967__auto__);
});

sablono.core.tel_field21212.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.tel_field21212.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field21212);

/**
 * Creates a text input field.
 */
sablono.core.text_field21215 = (function sablono$core$text_field21215(var_args){
var G__21220 = arguments.length;
switch (G__21220) {
case 1:
return sablono.core.text_field21215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field21215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field21215.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20967__auto__);
});

sablono.core.text_field21215.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.text_field21215.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field21215);

/**
 * Creates a time input field.
 */
sablono.core.time_field21221 = (function sablono$core$time_field21221(var_args){
var G__21223 = arguments.length;
switch (G__21223) {
case 1:
return sablono.core.time_field21221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field21221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field21221.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20967__auto__);
});

sablono.core.time_field21221.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.time_field21221.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field21221);

/**
 * Creates a url input field.
 */
sablono.core.url_field21224 = (function sablono$core$url_field21224(var_args){
var G__21226 = arguments.length;
switch (G__21226) {
case 1:
return sablono.core.url_field21224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field21224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field21224.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20967__auto__);
});

sablono.core.url_field21224.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.url_field21224.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field21224);

/**
 * Creates a week input field.
 */
sablono.core.week_field21227 = (function sablono$core$week_field21227(var_args){
var G__21229 = arguments.length;
switch (G__21229) {
case 1:
return sablono.core.week_field21227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field21227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field21227.cljs$core$IFn$_invoke$arity$1 = (function (name__20967__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20967__auto__);
});

sablono.core.week_field21227.cljs$core$IFn$_invoke$arity$2 = (function (name__20967__auto__,value__20968__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20967__auto__,value__20968__auto__);
});

sablono.core.week_field21227.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field21227);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21282 = (function sablono$core$check_box21282(var_args){
var G__21284 = arguments.length;
switch (G__21284) {
case 1:
return sablono.core.check_box21282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21282.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box21282.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box21282.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box21282.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box21282.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box21282);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21290 = (function sablono$core$radio_button21290(var_args){
var G__21292 = arguments.length;
switch (G__21292) {
case 1:
return sablono.core.radio_button21290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21290.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button21290.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
});

sablono.core.radio_button21290.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button21290.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button21290.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button21290);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__21296 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__21296);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options21299 = (function sablono$core$select_options21299(coll){
var iter__4324__auto__ = (function sablono$core$select_options21299_$_iter__21300(s__21301){
return (new cljs.core.LazySeq(null,(function (){
var s__21301__$1 = s__21301;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__21301__$1);
if(temp__5457__auto__){
var s__21301__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21301__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21301__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21303 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21302 = (0);
while(true){
if((i__21302 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21302);
cljs.core.chunk_append(b__21303,((cljs.core.sequential_QMARK_(x))?(function (){var vec__21304 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21304,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21304,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21304,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options21299.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options21299.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options21299.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__21315 = (i__21302 + (1));
i__21302 = G__21315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21303),sablono$core$select_options21299_$_iter__21300(cljs.core.chunk_rest(s__21301__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21303),null);
}
} else {
var x = cljs.core.first(s__21301__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__21307 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21307,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21307,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21307,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options21299.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options21299.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options21299.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options21299_$_iter__21300(cljs.core.rest(s__21301__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options21299);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21317 = (function sablono$core$drop_down21317(var_args){
var G__21319 = arguments.length;
switch (G__21319) {
case 2:
return sablono.core.drop_down21317.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21317.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down21317.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21317.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down21317.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down21317.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down21317);
/**
 * Creates a text area element.
 */
sablono.core.text_area21327 = (function sablono$core$text_area21327(var_args){
var G__21331 = arguments.length;
switch (G__21331) {
case 1:
return sablono.core.text_area21327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area21327.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area21327.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area21327.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area21327);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21333 = (function sablono$core$label21333(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label21333);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21335 = (function sablono$core$submit_button21335(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button21335);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21336 = (function sablono$core$reset_button21336(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button21336);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to21338 = (function sablono$core$form_to21338(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21348 = arguments.length;
var i__4532__auto___21349 = (0);
while(true){
if((i__4532__auto___21349 < len__4531__auto___21348)){
args__4534__auto__.push((arguments[i__4532__auto___21349]));

var G__21350 = (i__4532__auto___21349 + (1));
i__4532__auto___21349 = G__21350;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to21338.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to21338.cljs$core$IFn$_invoke$arity$variadic = (function (p__21341,body){
var vec__21342 = p__21341;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21342,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21342,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__21345 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__21346 = "_method";
var G__21347 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__21345,G__21346,G__21347) : sablono.core.hidden_field.call(null,G__21345,G__21346,G__21347));
})()], null)),body));
});

sablono.core.form_to21338.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to21338.cljs$lang$applyTo = (function (seq21339){
var G__21340 = cljs.core.first(seq21339);
var seq21339__$1 = cljs.core.next(seq21339);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21340,seq21339__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to21338);

//# sourceMappingURL=sablono.core.js-6bf93a28.map
