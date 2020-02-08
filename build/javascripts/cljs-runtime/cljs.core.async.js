goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30354 = arguments.length;
switch (G__30354) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30355 = (function (f,blockable,meta30356){
this.f = f;
this.blockable = blockable;
this.meta30356 = meta30356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30357,meta30356__$1){
var self__ = this;
var _30357__$1 = this;
return (new cljs.core.async.t_cljs$core$async30355(self__.f,self__.blockable,meta30356__$1));
});

cljs.core.async.t_cljs$core$async30355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30357){
var self__ = this;
var _30357__$1 = this;
return self__.meta30356;
});

cljs.core.async.t_cljs$core$async30355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30356","meta30356",-1818201696,null)], null);
});

cljs.core.async.t_cljs$core$async30355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30355";

cljs.core.async.t_cljs$core$async30355.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30355");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30355.
 */
cljs.core.async.__GT_t_cljs$core$async30355 = (function cljs$core$async$__GT_t_cljs$core$async30355(f__$1,blockable__$1,meta30356){
return (new cljs.core.async.t_cljs$core$async30355(f__$1,blockable__$1,meta30356));
});

}

return (new cljs.core.async.t_cljs$core$async30355(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30381 = arguments.length;
switch (G__30381) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30389 = arguments.length;
switch (G__30389) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30399 = arguments.length;
switch (G__30399) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32747 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32747) : fn1.call(null,val_32747));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32747,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32747) : fn1.call(null,val_32747));
});})(val_32747,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30423 = arguments.length;
switch (G__30423) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___32764 = n;
var x_32765 = (0);
while(true){
if((x_32765 < n__4607__auto___32764)){
(a[x_32765] = x_32765);

var G__32766 = (x_32765 + (1));
x_32765 = G__32766;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30427 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30427 = (function (flag,meta30428){
this.flag = flag;
this.meta30428 = meta30428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30429,meta30428__$1){
var self__ = this;
var _30429__$1 = this;
return (new cljs.core.async.t_cljs$core$async30427(self__.flag,meta30428__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30429){
var self__ = this;
var _30429__$1 = this;
return self__.meta30428;
});})(flag))
;

cljs.core.async.t_cljs$core$async30427.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30427.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30427.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30428","meta30428",1638945824,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30427";

cljs.core.async.t_cljs$core$async30427.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30427");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30427.
 */
cljs.core.async.__GT_t_cljs$core$async30427 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30427(flag__$1,meta30428){
return (new cljs.core.async.t_cljs$core$async30427(flag__$1,meta30428));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30427(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30449 = (function (flag,cb,meta30450){
this.flag = flag;
this.cb = cb;
this.meta30450 = meta30450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30451,meta30450__$1){
var self__ = this;
var _30451__$1 = this;
return (new cljs.core.async.t_cljs$core$async30449(self__.flag,self__.cb,meta30450__$1));
});

cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30451){
var self__ = this;
var _30451__$1 = this;
return self__.meta30450;
});

cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30450","meta30450",-1448359365,null)], null);
});

cljs.core.async.t_cljs$core$async30449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30449";

cljs.core.async.t_cljs$core$async30449.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30449");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30449.
 */
cljs.core.async.__GT_t_cljs$core$async30449 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30449(flag__$1,cb__$1,meta30450){
return (new cljs.core.async.t_cljs$core$async30449(flag__$1,cb__$1,meta30450));
});

}

return (new cljs.core.async.t_cljs$core$async30449(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30463_SHARP_){
var G__30470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30463_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30470) : fret.call(null,G__30470));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30464_SHARP_){
var G__30471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30464_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30471) : fret.call(null,G__30471));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32838 = (i + (1));
i = G__32838;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32845 = arguments.length;
var i__4731__auto___32846 = (0);
while(true){
if((i__4731__auto___32846 < len__4730__auto___32845)){
args__4736__auto__.push((arguments[i__4731__auto___32846]));

var G__32847 = (i__4731__auto___32846 + (1));
i__4731__auto___32846 = G__32847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30479){
var map__30480 = p__30479;
var map__30480__$1 = (((((!((map__30480 == null))))?(((((map__30480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30480):map__30480);
var opts = map__30480__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30473){
var G__30474 = cljs.core.first(seq30473);
var seq30473__$1 = cljs.core.next(seq30473);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30474,seq30473__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30490 = arguments.length;
switch (G__30490) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30275__auto___32855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___32855){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___32855){
return (function (state_30539){
var state_val_30540 = (state_30539[(1)]);
if((state_val_30540 === (7))){
var inst_30535 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30541_32858 = state_30539__$1;
(statearr_30541_32858[(2)] = inst_30535);

(statearr_30541_32858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (1))){
var state_30539__$1 = state_30539;
var statearr_30542_32859 = state_30539__$1;
(statearr_30542_32859[(2)] = null);

(statearr_30542_32859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (4))){
var inst_30514 = (state_30539[(7)]);
var inst_30514__$1 = (state_30539[(2)]);
var inst_30515 = (inst_30514__$1 == null);
var state_30539__$1 = (function (){var statearr_30543 = state_30539;
(statearr_30543[(7)] = inst_30514__$1);

return statearr_30543;
})();
if(cljs.core.truth_(inst_30515)){
var statearr_30544_32863 = state_30539__$1;
(statearr_30544_32863[(1)] = (5));

} else {
var statearr_30546_32864 = state_30539__$1;
(statearr_30546_32864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (13))){
var state_30539__$1 = state_30539;
var statearr_30547_32866 = state_30539__$1;
(statearr_30547_32866[(2)] = null);

(statearr_30547_32866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (6))){
var inst_30514 = (state_30539[(7)]);
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30539__$1,(11),to,inst_30514);
} else {
if((state_val_30540 === (3))){
var inst_30537 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30539__$1,inst_30537);
} else {
if((state_val_30540 === (12))){
var state_30539__$1 = state_30539;
var statearr_30552_32878 = state_30539__$1;
(statearr_30552_32878[(2)] = null);

(statearr_30552_32878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (2))){
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30539__$1,(4),from);
} else {
if((state_val_30540 === (11))){
var inst_30528 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
if(cljs.core.truth_(inst_30528)){
var statearr_30553_32880 = state_30539__$1;
(statearr_30553_32880[(1)] = (12));

} else {
var statearr_30554_32881 = state_30539__$1;
(statearr_30554_32881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (9))){
var state_30539__$1 = state_30539;
var statearr_30555_32883 = state_30539__$1;
(statearr_30555_32883[(2)] = null);

(statearr_30555_32883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (5))){
var state_30539__$1 = state_30539;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30556_32885 = state_30539__$1;
(statearr_30556_32885[(1)] = (8));

} else {
var statearr_30557_32886 = state_30539__$1;
(statearr_30557_32886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (14))){
var inst_30533 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30565_32887 = state_30539__$1;
(statearr_30565_32887[(2)] = inst_30533);

(statearr_30565_32887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (10))){
var inst_30525 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30567_32890 = state_30539__$1;
(statearr_30567_32890[(2)] = inst_30525);

(statearr_30567_32890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (8))){
var inst_30522 = cljs.core.async.close_BANG_(to);
var state_30539__$1 = state_30539;
var statearr_30572_32894 = state_30539__$1;
(statearr_30572_32894[(2)] = inst_30522);

(statearr_30572_32894[(1)] = (10));


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
});})(c__30275__auto___32855))
;
return ((function (switch__30090__auto__,c__30275__auto___32855){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_30573 = [null,null,null,null,null,null,null,null];
(statearr_30573[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_30573[(1)] = (1));

return statearr_30573;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_30539){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_30539);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e30574){if((e30574 instanceof Object)){
var ex__30094__auto__ = e30574;
var statearr_30575_32900 = state_30539;
(statearr_30575_32900[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32901 = state_30539;
state_30539 = G__32901;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_30539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_30539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___32855))
})();
var state__30277__auto__ = (function (){var statearr_30576 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_30576[(6)] = c__30275__auto___32855);

return statearr_30576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___32855))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__30581){
var vec__30582 = p__30581;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30582,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30582,(1),null);
var job = vec__30582;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30275__auto___32906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___32906,res,vec__30582,v,p,job,jobs,results){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___32906,res,vec__30582,v,p,job,jobs,results){
return (function (state_30589){
var state_val_30590 = (state_30589[(1)]);
if((state_val_30590 === (1))){
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30589__$1,(2),res,v);
} else {
if((state_val_30590 === (2))){
var inst_30586 = (state_30589[(2)]);
var inst_30587 = cljs.core.async.close_BANG_(res);
var state_30589__$1 = (function (){var statearr_30594 = state_30589;
(statearr_30594[(7)] = inst_30586);

return statearr_30594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30589__$1,inst_30587);
} else {
return null;
}
}
});})(c__30275__auto___32906,res,vec__30582,v,p,job,jobs,results))
;
return ((function (switch__30090__auto__,c__30275__auto___32906,res,vec__30582,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0 = (function (){
var statearr_30595 = [null,null,null,null,null,null,null,null];
(statearr_30595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__);

(statearr_30595[(1)] = (1));

return statearr_30595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1 = (function (state_30589){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_30589);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e30596){if((e30596 instanceof Object)){
var ex__30094__auto__ = e30596;
var statearr_30597_32915 = state_30589;
(statearr_30597_32915[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32921 = state_30589;
state_30589 = G__32921;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = function(state_30589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1.call(this,state_30589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___32906,res,vec__30582,v,p,job,jobs,results))
})();
var state__30277__auto__ = (function (){var statearr_30598 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_30598[(6)] = c__30275__auto___32906);

return statearr_30598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___32906,res,vec__30582,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30599){
var vec__30600 = p__30599;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30600,(1),null);
var job = vec__30600;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___32929 = n;
var __32930 = (0);
while(true){
if((__32930 < n__4607__auto___32929)){
var G__30603_32933 = type;
var G__30603_32934__$1 = (((G__30603_32933 instanceof cljs.core.Keyword))?G__30603_32933.fqn:null);
switch (G__30603_32934__$1) {
case "compute":
var c__30275__auto___32940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32930,c__30275__auto___32940,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (__32930,c__30275__auto___32940,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async){
return (function (state_30616){
var state_val_30617 = (state_30616[(1)]);
if((state_val_30617 === (1))){
var state_30616__$1 = state_30616;
var statearr_30618_32949 = state_30616__$1;
(statearr_30618_32949[(2)] = null);

(statearr_30618_32949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (2))){
var state_30616__$1 = state_30616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30616__$1,(4),jobs);
} else {
if((state_val_30617 === (3))){
var inst_30614 = (state_30616[(2)]);
var state_30616__$1 = state_30616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30616__$1,inst_30614);
} else {
if((state_val_30617 === (4))){
var inst_30606 = (state_30616[(2)]);
var inst_30607 = process(inst_30606);
var state_30616__$1 = state_30616;
if(cljs.core.truth_(inst_30607)){
var statearr_30619_32953 = state_30616__$1;
(statearr_30619_32953[(1)] = (5));

} else {
var statearr_30620_32958 = state_30616__$1;
(statearr_30620_32958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (5))){
var state_30616__$1 = state_30616;
var statearr_30625_32959 = state_30616__$1;
(statearr_30625_32959[(2)] = null);

(statearr_30625_32959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (6))){
var state_30616__$1 = state_30616;
var statearr_30626_32960 = state_30616__$1;
(statearr_30626_32960[(2)] = null);

(statearr_30626_32960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30617 === (7))){
var inst_30612 = (state_30616[(2)]);
var state_30616__$1 = state_30616;
var statearr_30627_32962 = state_30616__$1;
(statearr_30627_32962[(2)] = inst_30612);

(statearr_30627_32962[(1)] = (3));


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
});})(__32930,c__30275__auto___32940,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async))
;
return ((function (__32930,switch__30090__auto__,c__30275__auto___32940,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0 = (function (){
var statearr_30629 = [null,null,null,null,null,null,null];
(statearr_30629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__);

(statearr_30629[(1)] = (1));

return statearr_30629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1 = (function (state_30616){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_30616);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e30630){if((e30630 instanceof Object)){
var ex__30094__auto__ = e30630;
var statearr_30631_32969 = state_30616;
(statearr_30631_32969[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32972 = state_30616;
state_30616 = G__32972;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = function(state_30616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1.call(this,state_30616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__;
})()
;})(__32930,switch__30090__auto__,c__30275__auto___32940,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async))
})();
var state__30277__auto__ = (function (){var statearr_30634 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_30634[(6)] = c__30275__auto___32940);

return statearr_30634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(__32930,c__30275__auto___32940,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async))
);


break;
case "async":
var c__30275__auto___32974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32930,c__30275__auto___32974,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (__32930,c__30275__auto___32974,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async){
return (function (state_30647){
var state_val_30648 = (state_30647[(1)]);
if((state_val_30648 === (1))){
var state_30647__$1 = state_30647;
var statearr_30651_32975 = state_30647__$1;
(statearr_30651_32975[(2)] = null);

(statearr_30651_32975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (2))){
var state_30647__$1 = state_30647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30647__$1,(4),jobs);
} else {
if((state_val_30648 === (3))){
var inst_30645 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30647__$1,inst_30645);
} else {
if((state_val_30648 === (4))){
var inst_30637 = (state_30647[(2)]);
var inst_30638 = async(inst_30637);
var state_30647__$1 = state_30647;
if(cljs.core.truth_(inst_30638)){
var statearr_30652_32979 = state_30647__$1;
(statearr_30652_32979[(1)] = (5));

} else {
var statearr_30653_32980 = state_30647__$1;
(statearr_30653_32980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (5))){
var state_30647__$1 = state_30647;
var statearr_30654_32981 = state_30647__$1;
(statearr_30654_32981[(2)] = null);

(statearr_30654_32981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (6))){
var state_30647__$1 = state_30647;
var statearr_30655_32985 = state_30647__$1;
(statearr_30655_32985[(2)] = null);

(statearr_30655_32985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30648 === (7))){
var inst_30643 = (state_30647[(2)]);
var state_30647__$1 = state_30647;
var statearr_30660_32986 = state_30647__$1;
(statearr_30660_32986[(2)] = inst_30643);

(statearr_30660_32986[(1)] = (3));


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
});})(__32930,c__30275__auto___32974,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async))
;
return ((function (__32930,switch__30090__auto__,c__30275__auto___32974,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0 = (function (){
var statearr_30666 = [null,null,null,null,null,null,null];
(statearr_30666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__);

(statearr_30666[(1)] = (1));

return statearr_30666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1 = (function (state_30647){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_30647);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e30667){if((e30667 instanceof Object)){
var ex__30094__auto__ = e30667;
var statearr_30668_32994 = state_30647;
(statearr_30668_32994[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32998 = state_30647;
state_30647 = G__32998;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = function(state_30647){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1.call(this,state_30647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__;
})()
;})(__32930,switch__30090__auto__,c__30275__auto___32974,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async))
})();
var state__30277__auto__ = (function (){var statearr_30669 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_30669[(6)] = c__30275__auto___32974);

return statearr_30669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(__32930,c__30275__auto___32974,G__30603_32933,G__30603_32934__$1,n__4607__auto___32929,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30603_32934__$1)].join('')));

}

var G__33002 = (__32930 + (1));
__32930 = G__33002;
continue;
} else {
}
break;
}

var c__30275__auto___33003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___33003,jobs,results,process,async){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___33003,jobs,results,process,async){
return (function (state_30692){
var state_val_30693 = (state_30692[(1)]);
if((state_val_30693 === (7))){
var inst_30688 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30711_33007 = state_30692__$1;
(statearr_30711_33007[(2)] = inst_30688);

(statearr_30711_33007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (1))){
var state_30692__$1 = state_30692;
var statearr_30716_33008 = state_30692__$1;
(statearr_30716_33008[(2)] = null);

(statearr_30716_33008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (4))){
var inst_30673 = (state_30692[(7)]);
var inst_30673__$1 = (state_30692[(2)]);
var inst_30674 = (inst_30673__$1 == null);
var state_30692__$1 = (function (){var statearr_30720 = state_30692;
(statearr_30720[(7)] = inst_30673__$1);

return statearr_30720;
})();
if(cljs.core.truth_(inst_30674)){
var statearr_30722_33013 = state_30692__$1;
(statearr_30722_33013[(1)] = (5));

} else {
var statearr_30726_33014 = state_30692__$1;
(statearr_30726_33014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (6))){
var inst_30678 = (state_30692[(8)]);
var inst_30673 = (state_30692[(7)]);
var inst_30678__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30680 = [inst_30673,inst_30678__$1];
var inst_30681 = (new cljs.core.PersistentVector(null,2,(5),inst_30679,inst_30680,null));
var state_30692__$1 = (function (){var statearr_30730 = state_30692;
(statearr_30730[(8)] = inst_30678__$1);

return statearr_30730;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30692__$1,(8),jobs,inst_30681);
} else {
if((state_val_30693 === (3))){
var inst_30690 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30692__$1,inst_30690);
} else {
if((state_val_30693 === (2))){
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30692__$1,(4),from);
} else {
if((state_val_30693 === (9))){
var inst_30685 = (state_30692[(2)]);
var state_30692__$1 = (function (){var statearr_30736 = state_30692;
(statearr_30736[(9)] = inst_30685);

return statearr_30736;
})();
var statearr_30740_33027 = state_30692__$1;
(statearr_30740_33027[(2)] = null);

(statearr_30740_33027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (5))){
var inst_30676 = cljs.core.async.close_BANG_(jobs);
var state_30692__$1 = state_30692;
var statearr_30746_33031 = state_30692__$1;
(statearr_30746_33031[(2)] = inst_30676);

(statearr_30746_33031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (8))){
var inst_30678 = (state_30692[(8)]);
var inst_30683 = (state_30692[(2)]);
var state_30692__$1 = (function (){var statearr_30748 = state_30692;
(statearr_30748[(10)] = inst_30683);

return statearr_30748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30692__$1,(9),results,inst_30678);
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
});})(c__30275__auto___33003,jobs,results,process,async))
;
return ((function (switch__30090__auto__,c__30275__auto___33003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0 = (function (){
var statearr_30750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__);

(statearr_30750[(1)] = (1));

return statearr_30750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1 = (function (state_30692){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_30692);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e30751){if((e30751 instanceof Object)){
var ex__30094__auto__ = e30751;
var statearr_30753_33041 = state_30692;
(statearr_30753_33041[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33042 = state_30692;
state_30692 = G__33042;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = function(state_30692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1.call(this,state_30692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___33003,jobs,results,process,async))
})();
var state__30277__auto__ = (function (){var statearr_30755 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_30755[(6)] = c__30275__auto___33003);

return statearr_30755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___33003,jobs,results,process,async))
);


var c__30275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto__,jobs,results,process,async){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto__,jobs,results,process,async){
return (function (state_30809){
var state_val_30810 = (state_30809[(1)]);
if((state_val_30810 === (7))){
var inst_30805 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30817_33045 = state_30809__$1;
(statearr_30817_33045[(2)] = inst_30805);

(statearr_30817_33045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (20))){
var state_30809__$1 = state_30809;
var statearr_30818_33047 = state_30809__$1;
(statearr_30818_33047[(2)] = null);

(statearr_30818_33047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (1))){
var state_30809__$1 = state_30809;
var statearr_30823_33048 = state_30809__$1;
(statearr_30823_33048[(2)] = null);

(statearr_30823_33048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (4))){
var inst_30761 = (state_30809[(7)]);
var inst_30761__$1 = (state_30809[(2)]);
var inst_30762 = (inst_30761__$1 == null);
var state_30809__$1 = (function (){var statearr_30824 = state_30809;
(statearr_30824[(7)] = inst_30761__$1);

return statearr_30824;
})();
if(cljs.core.truth_(inst_30762)){
var statearr_30825_33049 = state_30809__$1;
(statearr_30825_33049[(1)] = (5));

} else {
var statearr_30826_33050 = state_30809__$1;
(statearr_30826_33050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (15))){
var inst_30783 = (state_30809[(8)]);
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30809__$1,(18),to,inst_30783);
} else {
if((state_val_30810 === (21))){
var inst_30800 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30827_33051 = state_30809__$1;
(statearr_30827_33051[(2)] = inst_30800);

(statearr_30827_33051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (13))){
var inst_30802 = (state_30809[(2)]);
var state_30809__$1 = (function (){var statearr_30828 = state_30809;
(statearr_30828[(9)] = inst_30802);

return statearr_30828;
})();
var statearr_30829_33052 = state_30809__$1;
(statearr_30829_33052[(2)] = null);

(statearr_30829_33052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (6))){
var inst_30761 = (state_30809[(7)]);
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30809__$1,(11),inst_30761);
} else {
if((state_val_30810 === (17))){
var inst_30792 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
if(cljs.core.truth_(inst_30792)){
var statearr_30831_33053 = state_30809__$1;
(statearr_30831_33053[(1)] = (19));

} else {
var statearr_30832_33054 = state_30809__$1;
(statearr_30832_33054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (3))){
var inst_30807 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30809__$1,inst_30807);
} else {
if((state_val_30810 === (12))){
var inst_30773 = (state_30809[(10)]);
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30809__$1,(14),inst_30773);
} else {
if((state_val_30810 === (2))){
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30809__$1,(4),results);
} else {
if((state_val_30810 === (19))){
var state_30809__$1 = state_30809;
var statearr_30842_33057 = state_30809__$1;
(statearr_30842_33057[(2)] = null);

(statearr_30842_33057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (11))){
var inst_30773 = (state_30809[(2)]);
var state_30809__$1 = (function (){var statearr_30844 = state_30809;
(statearr_30844[(10)] = inst_30773);

return statearr_30844;
})();
var statearr_30845_33058 = state_30809__$1;
(statearr_30845_33058[(2)] = null);

(statearr_30845_33058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (9))){
var state_30809__$1 = state_30809;
var statearr_30848_33059 = state_30809__$1;
(statearr_30848_33059[(2)] = null);

(statearr_30848_33059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (5))){
var state_30809__$1 = state_30809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30849_33060 = state_30809__$1;
(statearr_30849_33060[(1)] = (8));

} else {
var statearr_30850_33061 = state_30809__$1;
(statearr_30850_33061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (14))){
var inst_30783 = (state_30809[(8)]);
var inst_30785 = (state_30809[(11)]);
var inst_30783__$1 = (state_30809[(2)]);
var inst_30784 = (inst_30783__$1 == null);
var inst_30785__$1 = cljs.core.not(inst_30784);
var state_30809__$1 = (function (){var statearr_30851 = state_30809;
(statearr_30851[(8)] = inst_30783__$1);

(statearr_30851[(11)] = inst_30785__$1);

return statearr_30851;
})();
if(inst_30785__$1){
var statearr_30852_33062 = state_30809__$1;
(statearr_30852_33062[(1)] = (15));

} else {
var statearr_30853_33063 = state_30809__$1;
(statearr_30853_33063[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (16))){
var inst_30785 = (state_30809[(11)]);
var state_30809__$1 = state_30809;
var statearr_30854_33066 = state_30809__$1;
(statearr_30854_33066[(2)] = inst_30785);

(statearr_30854_33066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (10))){
var inst_30768 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30855_33067 = state_30809__$1;
(statearr_30855_33067[(2)] = inst_30768);

(statearr_30855_33067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (18))){
var inst_30788 = (state_30809[(2)]);
var state_30809__$1 = state_30809;
var statearr_30857_33068 = state_30809__$1;
(statearr_30857_33068[(2)] = inst_30788);

(statearr_30857_33068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30810 === (8))){
var inst_30765 = cljs.core.async.close_BANG_(to);
var state_30809__$1 = state_30809;
var statearr_30858_33071 = state_30809__$1;
(statearr_30858_33071[(2)] = inst_30765);

(statearr_30858_33071[(1)] = (10));


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
}
}
}
}
});})(c__30275__auto__,jobs,results,process,async))
;
return ((function (switch__30090__auto__,c__30275__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0 = (function (){
var statearr_30860 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__);

(statearr_30860[(1)] = (1));

return statearr_30860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1 = (function (state_30809){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_30809);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e30861){if((e30861 instanceof Object)){
var ex__30094__auto__ = e30861;
var statearr_30862_33076 = state_30809;
(statearr_30862_33076[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33078 = state_30809;
state_30809 = G__33078;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__ = function(state_30809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1.call(this,state_30809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto__,jobs,results,process,async))
})();
var state__30277__auto__ = (function (){var statearr_30865 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_30865[(6)] = c__30275__auto__);

return statearr_30865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto__,jobs,results,process,async))
);

return c__30275__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30867 = arguments.length;
switch (G__30867) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30872 = arguments.length;
switch (G__30872) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30885 = arguments.length;
switch (G__30885) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30275__auto___33112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___33112,tc,fc){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___33112,tc,fc){
return (function (state_30935){
var state_val_30936 = (state_30935[(1)]);
if((state_val_30936 === (7))){
var inst_30931 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30941_33114 = state_30935__$1;
(statearr_30941_33114[(2)] = inst_30931);

(statearr_30941_33114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (1))){
var state_30935__$1 = state_30935;
var statearr_30945_33115 = state_30935__$1;
(statearr_30945_33115[(2)] = null);

(statearr_30945_33115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (4))){
var inst_30909 = (state_30935[(7)]);
var inst_30909__$1 = (state_30935[(2)]);
var inst_30910 = (inst_30909__$1 == null);
var state_30935__$1 = (function (){var statearr_30949 = state_30935;
(statearr_30949[(7)] = inst_30909__$1);

return statearr_30949;
})();
if(cljs.core.truth_(inst_30910)){
var statearr_30950_33116 = state_30935__$1;
(statearr_30950_33116[(1)] = (5));

} else {
var statearr_30951_33117 = state_30935__$1;
(statearr_30951_33117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (13))){
var state_30935__$1 = state_30935;
var statearr_30955_33118 = state_30935__$1;
(statearr_30955_33118[(2)] = null);

(statearr_30955_33118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (6))){
var inst_30909 = (state_30935[(7)]);
var inst_30915 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30909) : p.call(null,inst_30909));
var state_30935__$1 = state_30935;
if(cljs.core.truth_(inst_30915)){
var statearr_30959_33119 = state_30935__$1;
(statearr_30959_33119[(1)] = (9));

} else {
var statearr_30960_33120 = state_30935__$1;
(statearr_30960_33120[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (3))){
var inst_30933 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30935__$1,inst_30933);
} else {
if((state_val_30936 === (12))){
var state_30935__$1 = state_30935;
var statearr_30964_33121 = state_30935__$1;
(statearr_30964_33121[(2)] = null);

(statearr_30964_33121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (2))){
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30935__$1,(4),ch);
} else {
if((state_val_30936 === (11))){
var inst_30909 = (state_30935[(7)]);
var inst_30919 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30935__$1,(8),inst_30919,inst_30909);
} else {
if((state_val_30936 === (9))){
var state_30935__$1 = state_30935;
var statearr_30971_33128 = state_30935__$1;
(statearr_30971_33128[(2)] = tc);

(statearr_30971_33128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (5))){
var inst_30912 = cljs.core.async.close_BANG_(tc);
var inst_30913 = cljs.core.async.close_BANG_(fc);
var state_30935__$1 = (function (){var statearr_30975 = state_30935;
(statearr_30975[(8)] = inst_30912);

return statearr_30975;
})();
var statearr_30977_33129 = state_30935__$1;
(statearr_30977_33129[(2)] = inst_30913);

(statearr_30977_33129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (14))){
var inst_30929 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30978_33131 = state_30935__$1;
(statearr_30978_33131[(2)] = inst_30929);

(statearr_30978_33131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (10))){
var state_30935__$1 = state_30935;
var statearr_30982_33132 = state_30935__$1;
(statearr_30982_33132[(2)] = fc);

(statearr_30982_33132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (8))){
var inst_30924 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
if(cljs.core.truth_(inst_30924)){
var statearr_30986_33133 = state_30935__$1;
(statearr_30986_33133[(1)] = (12));

} else {
var statearr_30987_33134 = state_30935__$1;
(statearr_30987_33134[(1)] = (13));

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
});})(c__30275__auto___33112,tc,fc))
;
return ((function (switch__30090__auto__,c__30275__auto___33112,tc,fc){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_30989 = [null,null,null,null,null,null,null,null,null];
(statearr_30989[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_30989[(1)] = (1));

return statearr_30989;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_30935){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_30935);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e30994){if((e30994 instanceof Object)){
var ex__30094__auto__ = e30994;
var statearr_30996_33135 = state_30935;
(statearr_30996_33135[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33137 = state_30935;
state_30935 = G__33137;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_30935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_30935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___33112,tc,fc))
})();
var state__30277__auto__ = (function (){var statearr_30997 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_30997[(6)] = c__30275__auto___33112);

return statearr_30997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___33112,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto__){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto__){
return (function (state_31018){
var state_val_31019 = (state_31018[(1)]);
if((state_val_31019 === (7))){
var inst_31014 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31020_33149 = state_31018__$1;
(statearr_31020_33149[(2)] = inst_31014);

(statearr_31020_33149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (1))){
var inst_30998 = init;
var state_31018__$1 = (function (){var statearr_31024 = state_31018;
(statearr_31024[(7)] = inst_30998);

return statearr_31024;
})();
var statearr_31025_33150 = state_31018__$1;
(statearr_31025_33150[(2)] = null);

(statearr_31025_33150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (4))){
var inst_31001 = (state_31018[(8)]);
var inst_31001__$1 = (state_31018[(2)]);
var inst_31002 = (inst_31001__$1 == null);
var state_31018__$1 = (function (){var statearr_31026 = state_31018;
(statearr_31026[(8)] = inst_31001__$1);

return statearr_31026;
})();
if(cljs.core.truth_(inst_31002)){
var statearr_31027_33153 = state_31018__$1;
(statearr_31027_33153[(1)] = (5));

} else {
var statearr_31030_33154 = state_31018__$1;
(statearr_31030_33154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (6))){
var inst_31005 = (state_31018[(9)]);
var inst_30998 = (state_31018[(7)]);
var inst_31001 = (state_31018[(8)]);
var inst_31005__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30998,inst_31001) : f.call(null,inst_30998,inst_31001));
var inst_31006 = cljs.core.reduced_QMARK_(inst_31005__$1);
var state_31018__$1 = (function (){var statearr_31032 = state_31018;
(statearr_31032[(9)] = inst_31005__$1);

return statearr_31032;
})();
if(inst_31006){
var statearr_31033_33158 = state_31018__$1;
(statearr_31033_33158[(1)] = (8));

} else {
var statearr_31034_33160 = state_31018__$1;
(statearr_31034_33160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (3))){
var inst_31016 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31018__$1,inst_31016);
} else {
if((state_val_31019 === (2))){
var state_31018__$1 = state_31018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31018__$1,(4),ch);
} else {
if((state_val_31019 === (9))){
var inst_31005 = (state_31018[(9)]);
var inst_30998 = inst_31005;
var state_31018__$1 = (function (){var statearr_31035 = state_31018;
(statearr_31035[(7)] = inst_30998);

return statearr_31035;
})();
var statearr_31036_33167 = state_31018__$1;
(statearr_31036_33167[(2)] = null);

(statearr_31036_33167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (5))){
var inst_30998 = (state_31018[(7)]);
var state_31018__$1 = state_31018;
var statearr_31037_33168 = state_31018__$1;
(statearr_31037_33168[(2)] = inst_30998);

(statearr_31037_33168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (10))){
var inst_31012 = (state_31018[(2)]);
var state_31018__$1 = state_31018;
var statearr_31038_33169 = state_31018__$1;
(statearr_31038_33169[(2)] = inst_31012);

(statearr_31038_33169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31019 === (8))){
var inst_31005 = (state_31018[(9)]);
var inst_31008 = cljs.core.deref(inst_31005);
var state_31018__$1 = state_31018;
var statearr_31039_33171 = state_31018__$1;
(statearr_31039_33171[(2)] = inst_31008);

(statearr_31039_33171[(1)] = (10));


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
});})(c__30275__auto__))
;
return ((function (switch__30090__auto__,c__30275__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30091__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30091__auto____0 = (function (){
var statearr_31040 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31040[(0)] = cljs$core$async$reduce_$_state_machine__30091__auto__);

(statearr_31040[(1)] = (1));

return statearr_31040;
});
var cljs$core$async$reduce_$_state_machine__30091__auto____1 = (function (state_31018){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_31018);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e31043){if((e31043 instanceof Object)){
var ex__30094__auto__ = e31043;
var statearr_31045_33177 = state_31018;
(statearr_31045_33177[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31043;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33178 = state_31018;
state_31018 = G__33178;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30091__auto__ = function(state_31018){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30091__auto____1.call(this,state_31018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30091__auto____0;
cljs$core$async$reduce_$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30091__auto____1;
return cljs$core$async$reduce_$_state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto__))
})();
var state__30277__auto__ = (function (){var statearr_31046 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_31046[(6)] = c__30275__auto__);

return statearr_31046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto__))
);

return c__30275__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto__,f__$1){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto__,f__$1){
return (function (state_31055){
var state_val_31056 = (state_31055[(1)]);
if((state_val_31056 === (1))){
var inst_31050 = cljs.core.async.reduce(f__$1,init,ch);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31055__$1,(2),inst_31050);
} else {
if((state_val_31056 === (2))){
var inst_31052 = (state_31055[(2)]);
var inst_31053 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31052) : f__$1.call(null,inst_31052));
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31055__$1,inst_31053);
} else {
return null;
}
}
});})(c__30275__auto__,f__$1))
;
return ((function (switch__30090__auto__,c__30275__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30091__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30091__auto____0 = (function (){
var statearr_31057 = [null,null,null,null,null,null,null];
(statearr_31057[(0)] = cljs$core$async$transduce_$_state_machine__30091__auto__);

(statearr_31057[(1)] = (1));

return statearr_31057;
});
var cljs$core$async$transduce_$_state_machine__30091__auto____1 = (function (state_31055){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_31055);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e31061){if((e31061 instanceof Object)){
var ex__30094__auto__ = e31061;
var statearr_31062_33185 = state_31055;
(statearr_31062_33185[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33187 = state_31055;
state_31055 = G__33187;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30091__auto__ = function(state_31055){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30091__auto____1.call(this,state_31055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30091__auto____0;
cljs$core$async$transduce_$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30091__auto____1;
return cljs$core$async$transduce_$_state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto__,f__$1))
})();
var state__30277__auto__ = (function (){var statearr_31066 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_31066[(6)] = c__30275__auto__);

return statearr_31066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto__,f__$1))
);

return c__30275__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31074 = arguments.length;
switch (G__31074) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto__){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto__){
return (function (state_31104){
var state_val_31105 = (state_31104[(1)]);
if((state_val_31105 === (7))){
var inst_31084 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31111_33195 = state_31104__$1;
(statearr_31111_33195[(2)] = inst_31084);

(statearr_31111_33195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (1))){
var inst_31078 = cljs.core.seq(coll);
var inst_31079 = inst_31078;
var state_31104__$1 = (function (){var statearr_31118 = state_31104;
(statearr_31118[(7)] = inst_31079);

return statearr_31118;
})();
var statearr_31120_33197 = state_31104__$1;
(statearr_31120_33197[(2)] = null);

(statearr_31120_33197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (4))){
var inst_31079 = (state_31104[(7)]);
var inst_31082 = cljs.core.first(inst_31079);
var state_31104__$1 = state_31104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31104__$1,(7),ch,inst_31082);
} else {
if((state_val_31105 === (13))){
var inst_31097 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31122_33199 = state_31104__$1;
(statearr_31122_33199[(2)] = inst_31097);

(statearr_31122_33199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (6))){
var inst_31087 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
if(cljs.core.truth_(inst_31087)){
var statearr_31123_33202 = state_31104__$1;
(statearr_31123_33202[(1)] = (8));

} else {
var statearr_31124_33205 = state_31104__$1;
(statearr_31124_33205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (3))){
var inst_31101 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31104__$1,inst_31101);
} else {
if((state_val_31105 === (12))){
var state_31104__$1 = state_31104;
var statearr_31125_33206 = state_31104__$1;
(statearr_31125_33206[(2)] = null);

(statearr_31125_33206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (2))){
var inst_31079 = (state_31104[(7)]);
var state_31104__$1 = state_31104;
if(cljs.core.truth_(inst_31079)){
var statearr_31126_33210 = state_31104__$1;
(statearr_31126_33210[(1)] = (4));

} else {
var statearr_31127_33211 = state_31104__$1;
(statearr_31127_33211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (11))){
var inst_31094 = cljs.core.async.close_BANG_(ch);
var state_31104__$1 = state_31104;
var statearr_31128_33213 = state_31104__$1;
(statearr_31128_33213[(2)] = inst_31094);

(statearr_31128_33213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (9))){
var state_31104__$1 = state_31104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31131_33216 = state_31104__$1;
(statearr_31131_33216[(1)] = (11));

} else {
var statearr_31132_33217 = state_31104__$1;
(statearr_31132_33217[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (5))){
var inst_31079 = (state_31104[(7)]);
var state_31104__$1 = state_31104;
var statearr_31135_33219 = state_31104__$1;
(statearr_31135_33219[(2)] = inst_31079);

(statearr_31135_33219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (10))){
var inst_31099 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31136_33221 = state_31104__$1;
(statearr_31136_33221[(2)] = inst_31099);

(statearr_31136_33221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (8))){
var inst_31079 = (state_31104[(7)]);
var inst_31089 = cljs.core.next(inst_31079);
var inst_31079__$1 = inst_31089;
var state_31104__$1 = (function (){var statearr_31138 = state_31104;
(statearr_31138[(7)] = inst_31079__$1);

return statearr_31138;
})();
var statearr_31139_33224 = state_31104__$1;
(statearr_31139_33224[(2)] = null);

(statearr_31139_33224[(1)] = (2));


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
});})(c__30275__auto__))
;
return ((function (switch__30090__auto__,c__30275__auto__){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_31140 = [null,null,null,null,null,null,null,null];
(statearr_31140[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_31140[(1)] = (1));

return statearr_31140;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_31104){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_31104);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e31146){if((e31146 instanceof Object)){
var ex__30094__auto__ = e31146;
var statearr_31147_33226 = state_31104;
(statearr_31147_33226[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33227 = state_31104;
state_31104 = G__33227;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_31104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_31104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto__))
})();
var state__30277__auto__ = (function (){var statearr_31149 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_31149[(6)] = c__30275__auto__);

return statearr_31149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto__))
);

return c__30275__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31176 = (function (ch,cs,meta31177){
this.ch = ch;
this.cs = cs;
this.meta31177 = meta31177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31178,meta31177__$1){
var self__ = this;
var _31178__$1 = this;
return (new cljs.core.async.t_cljs$core$async31176(self__.ch,self__.cs,meta31177__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31178){
var self__ = this;
var _31178__$1 = this;
return self__.meta31177;
});})(cs))
;

cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31176.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31177","meta31177",780088473,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31176";

cljs.core.async.t_cljs$core$async31176.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31176");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31176.
 */
cljs.core.async.__GT_t_cljs$core$async31176 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31176(ch__$1,cs__$1,meta31177){
return (new cljs.core.async.t_cljs$core$async31176(ch__$1,cs__$1,meta31177));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31176(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30275__auto___33279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___33279,cs,m,dchan,dctr,done){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___33279,cs,m,dchan,dctr,done){
return (function (state_31345){
var state_val_31346 = (state_31345[(1)]);
if((state_val_31346 === (7))){
var inst_31334 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31347_33308 = state_31345__$1;
(statearr_31347_33308[(2)] = inst_31334);

(statearr_31347_33308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (20))){
var inst_31234 = (state_31345[(7)]);
var inst_31247 = cljs.core.first(inst_31234);
var inst_31248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31247,(0),null);
var inst_31249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31247,(1),null);
var state_31345__$1 = (function (){var statearr_31348 = state_31345;
(statearr_31348[(8)] = inst_31248);

return statearr_31348;
})();
if(cljs.core.truth_(inst_31249)){
var statearr_31354_33312 = state_31345__$1;
(statearr_31354_33312[(1)] = (22));

} else {
var statearr_31356_33314 = state_31345__$1;
(statearr_31356_33314[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (27))){
var inst_31277 = (state_31345[(9)]);
var inst_31279 = (state_31345[(10)]);
var inst_31197 = (state_31345[(11)]);
var inst_31284 = (state_31345[(12)]);
var inst_31284__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31277,inst_31279);
var inst_31285 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31284__$1,inst_31197,done);
var state_31345__$1 = (function (){var statearr_31359 = state_31345;
(statearr_31359[(12)] = inst_31284__$1);

return statearr_31359;
})();
if(cljs.core.truth_(inst_31285)){
var statearr_31360_33321 = state_31345__$1;
(statearr_31360_33321[(1)] = (30));

} else {
var statearr_31361_33322 = state_31345__$1;
(statearr_31361_33322[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (1))){
var state_31345__$1 = state_31345;
var statearr_31364_33324 = state_31345__$1;
(statearr_31364_33324[(2)] = null);

(statearr_31364_33324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (24))){
var inst_31234 = (state_31345[(7)]);
var inst_31254 = (state_31345[(2)]);
var inst_31255 = cljs.core.next(inst_31234);
var inst_31207 = inst_31255;
var inst_31208 = null;
var inst_31209 = (0);
var inst_31210 = (0);
var state_31345__$1 = (function (){var statearr_31365 = state_31345;
(statearr_31365[(13)] = inst_31207);

(statearr_31365[(14)] = inst_31208);

(statearr_31365[(15)] = inst_31210);

(statearr_31365[(16)] = inst_31254);

(statearr_31365[(17)] = inst_31209);

return statearr_31365;
})();
var statearr_31366_33329 = state_31345__$1;
(statearr_31366_33329[(2)] = null);

(statearr_31366_33329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (39))){
var state_31345__$1 = state_31345;
var statearr_31370_33332 = state_31345__$1;
(statearr_31370_33332[(2)] = null);

(statearr_31370_33332[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (4))){
var inst_31197 = (state_31345[(11)]);
var inst_31197__$1 = (state_31345[(2)]);
var inst_31198 = (inst_31197__$1 == null);
var state_31345__$1 = (function (){var statearr_31372 = state_31345;
(statearr_31372[(11)] = inst_31197__$1);

return statearr_31372;
})();
if(cljs.core.truth_(inst_31198)){
var statearr_31373_33333 = state_31345__$1;
(statearr_31373_33333[(1)] = (5));

} else {
var statearr_31374_33335 = state_31345__$1;
(statearr_31374_33335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (15))){
var inst_31207 = (state_31345[(13)]);
var inst_31208 = (state_31345[(14)]);
var inst_31210 = (state_31345[(15)]);
var inst_31209 = (state_31345[(17)]);
var inst_31226 = (state_31345[(2)]);
var inst_31230 = (inst_31210 + (1));
var tmp31367 = inst_31207;
var tmp31368 = inst_31208;
var tmp31369 = inst_31209;
var inst_31207__$1 = tmp31367;
var inst_31208__$1 = tmp31368;
var inst_31209__$1 = tmp31369;
var inst_31210__$1 = inst_31230;
var state_31345__$1 = (function (){var statearr_31375 = state_31345;
(statearr_31375[(13)] = inst_31207__$1);

(statearr_31375[(14)] = inst_31208__$1);

(statearr_31375[(15)] = inst_31210__$1);

(statearr_31375[(18)] = inst_31226);

(statearr_31375[(17)] = inst_31209__$1);

return statearr_31375;
})();
var statearr_31377_33342 = state_31345__$1;
(statearr_31377_33342[(2)] = null);

(statearr_31377_33342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (21))){
var inst_31258 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31381_33343 = state_31345__$1;
(statearr_31381_33343[(2)] = inst_31258);

(statearr_31381_33343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (31))){
var inst_31284 = (state_31345[(12)]);
var inst_31288 = done(null);
var inst_31289 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31284);
var state_31345__$1 = (function (){var statearr_31382 = state_31345;
(statearr_31382[(19)] = inst_31288);

return statearr_31382;
})();
var statearr_31383_33351 = state_31345__$1;
(statearr_31383_33351[(2)] = inst_31289);

(statearr_31383_33351[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (32))){
var inst_31277 = (state_31345[(9)]);
var inst_31279 = (state_31345[(10)]);
var inst_31278 = (state_31345[(20)]);
var inst_31276 = (state_31345[(21)]);
var inst_31292 = (state_31345[(2)]);
var inst_31293 = (inst_31279 + (1));
var tmp31378 = inst_31277;
var tmp31379 = inst_31278;
var tmp31380 = inst_31276;
var inst_31276__$1 = tmp31380;
var inst_31277__$1 = tmp31378;
var inst_31278__$1 = tmp31379;
var inst_31279__$1 = inst_31293;
var state_31345__$1 = (function (){var statearr_31385 = state_31345;
(statearr_31385[(9)] = inst_31277__$1);

(statearr_31385[(22)] = inst_31292);

(statearr_31385[(10)] = inst_31279__$1);

(statearr_31385[(20)] = inst_31278__$1);

(statearr_31385[(21)] = inst_31276__$1);

return statearr_31385;
})();
var statearr_31386_33363 = state_31345__$1;
(statearr_31386_33363[(2)] = null);

(statearr_31386_33363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (40))){
var inst_31305 = (state_31345[(23)]);
var inst_31310 = done(null);
var inst_31311 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31305);
var state_31345__$1 = (function (){var statearr_31387 = state_31345;
(statearr_31387[(24)] = inst_31310);

return statearr_31387;
})();
var statearr_31388_33364 = state_31345__$1;
(statearr_31388_33364[(2)] = inst_31311);

(statearr_31388_33364[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (33))){
var inst_31296 = (state_31345[(25)]);
var inst_31298 = cljs.core.chunked_seq_QMARK_(inst_31296);
var state_31345__$1 = state_31345;
if(inst_31298){
var statearr_31389_33365 = state_31345__$1;
(statearr_31389_33365[(1)] = (36));

} else {
var statearr_31390_33366 = state_31345__$1;
(statearr_31390_33366[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (13))){
var inst_31220 = (state_31345[(26)]);
var inst_31223 = cljs.core.async.close_BANG_(inst_31220);
var state_31345__$1 = state_31345;
var statearr_31391_33367 = state_31345__$1;
(statearr_31391_33367[(2)] = inst_31223);

(statearr_31391_33367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (22))){
var inst_31248 = (state_31345[(8)]);
var inst_31251 = cljs.core.async.close_BANG_(inst_31248);
var state_31345__$1 = state_31345;
var statearr_31393_33372 = state_31345__$1;
(statearr_31393_33372[(2)] = inst_31251);

(statearr_31393_33372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (36))){
var inst_31296 = (state_31345[(25)]);
var inst_31300 = cljs.core.chunk_first(inst_31296);
var inst_31301 = cljs.core.chunk_rest(inst_31296);
var inst_31302 = cljs.core.count(inst_31300);
var inst_31276 = inst_31301;
var inst_31277 = inst_31300;
var inst_31278 = inst_31302;
var inst_31279 = (0);
var state_31345__$1 = (function (){var statearr_31395 = state_31345;
(statearr_31395[(9)] = inst_31277);

(statearr_31395[(10)] = inst_31279);

(statearr_31395[(20)] = inst_31278);

(statearr_31395[(21)] = inst_31276);

return statearr_31395;
})();
var statearr_31408_33375 = state_31345__$1;
(statearr_31408_33375[(2)] = null);

(statearr_31408_33375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (41))){
var inst_31296 = (state_31345[(25)]);
var inst_31313 = (state_31345[(2)]);
var inst_31314 = cljs.core.next(inst_31296);
var inst_31276 = inst_31314;
var inst_31277 = null;
var inst_31278 = (0);
var inst_31279 = (0);
var state_31345__$1 = (function (){var statearr_31409 = state_31345;
(statearr_31409[(9)] = inst_31277);

(statearr_31409[(10)] = inst_31279);

(statearr_31409[(20)] = inst_31278);

(statearr_31409[(21)] = inst_31276);

(statearr_31409[(27)] = inst_31313);

return statearr_31409;
})();
var statearr_31415_33382 = state_31345__$1;
(statearr_31415_33382[(2)] = null);

(statearr_31415_33382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (43))){
var state_31345__$1 = state_31345;
var statearr_31420_33383 = state_31345__$1;
(statearr_31420_33383[(2)] = null);

(statearr_31420_33383[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (29))){
var inst_31322 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31429_33384 = state_31345__$1;
(statearr_31429_33384[(2)] = inst_31322);

(statearr_31429_33384[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (44))){
var inst_31331 = (state_31345[(2)]);
var state_31345__$1 = (function (){var statearr_31430 = state_31345;
(statearr_31430[(28)] = inst_31331);

return statearr_31430;
})();
var statearr_31431_33386 = state_31345__$1;
(statearr_31431_33386[(2)] = null);

(statearr_31431_33386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (6))){
var inst_31268 = (state_31345[(29)]);
var inst_31267 = cljs.core.deref(cs);
var inst_31268__$1 = cljs.core.keys(inst_31267);
var inst_31269 = cljs.core.count(inst_31268__$1);
var inst_31270 = cljs.core.reset_BANG_(dctr,inst_31269);
var inst_31275 = cljs.core.seq(inst_31268__$1);
var inst_31276 = inst_31275;
var inst_31277 = null;
var inst_31278 = (0);
var inst_31279 = (0);
var state_31345__$1 = (function (){var statearr_31432 = state_31345;
(statearr_31432[(9)] = inst_31277);

(statearr_31432[(10)] = inst_31279);

(statearr_31432[(20)] = inst_31278);

(statearr_31432[(30)] = inst_31270);

(statearr_31432[(21)] = inst_31276);

(statearr_31432[(29)] = inst_31268__$1);

return statearr_31432;
})();
var statearr_31433_33410 = state_31345__$1;
(statearr_31433_33410[(2)] = null);

(statearr_31433_33410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (28))){
var inst_31296 = (state_31345[(25)]);
var inst_31276 = (state_31345[(21)]);
var inst_31296__$1 = cljs.core.seq(inst_31276);
var state_31345__$1 = (function (){var statearr_31434 = state_31345;
(statearr_31434[(25)] = inst_31296__$1);

return statearr_31434;
})();
if(inst_31296__$1){
var statearr_31435_33416 = state_31345__$1;
(statearr_31435_33416[(1)] = (33));

} else {
var statearr_31436_33417 = state_31345__$1;
(statearr_31436_33417[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (25))){
var inst_31279 = (state_31345[(10)]);
var inst_31278 = (state_31345[(20)]);
var inst_31281 = (inst_31279 < inst_31278);
var inst_31282 = inst_31281;
var state_31345__$1 = state_31345;
if(cljs.core.truth_(inst_31282)){
var statearr_31437_33426 = state_31345__$1;
(statearr_31437_33426[(1)] = (27));

} else {
var statearr_31438_33427 = state_31345__$1;
(statearr_31438_33427[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (34))){
var state_31345__$1 = state_31345;
var statearr_31439_33431 = state_31345__$1;
(statearr_31439_33431[(2)] = null);

(statearr_31439_33431[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (17))){
var state_31345__$1 = state_31345;
var statearr_31440_33434 = state_31345__$1;
(statearr_31440_33434[(2)] = null);

(statearr_31440_33434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (3))){
var inst_31336 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31345__$1,inst_31336);
} else {
if((state_val_31346 === (12))){
var inst_31263 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31441_33439 = state_31345__$1;
(statearr_31441_33439[(2)] = inst_31263);

(statearr_31441_33439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (2))){
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31345__$1,(4),ch);
} else {
if((state_val_31346 === (23))){
var state_31345__$1 = state_31345;
var statearr_31443_33441 = state_31345__$1;
(statearr_31443_33441[(2)] = null);

(statearr_31443_33441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (35))){
var inst_31320 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31448_33442 = state_31345__$1;
(statearr_31448_33442[(2)] = inst_31320);

(statearr_31448_33442[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (19))){
var inst_31234 = (state_31345[(7)]);
var inst_31239 = cljs.core.chunk_first(inst_31234);
var inst_31240 = cljs.core.chunk_rest(inst_31234);
var inst_31241 = cljs.core.count(inst_31239);
var inst_31207 = inst_31240;
var inst_31208 = inst_31239;
var inst_31209 = inst_31241;
var inst_31210 = (0);
var state_31345__$1 = (function (){var statearr_31453 = state_31345;
(statearr_31453[(13)] = inst_31207);

(statearr_31453[(14)] = inst_31208);

(statearr_31453[(15)] = inst_31210);

(statearr_31453[(17)] = inst_31209);

return statearr_31453;
})();
var statearr_31459_33446 = state_31345__$1;
(statearr_31459_33446[(2)] = null);

(statearr_31459_33446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (11))){
var inst_31207 = (state_31345[(13)]);
var inst_31234 = (state_31345[(7)]);
var inst_31234__$1 = cljs.core.seq(inst_31207);
var state_31345__$1 = (function (){var statearr_31460 = state_31345;
(statearr_31460[(7)] = inst_31234__$1);

return statearr_31460;
})();
if(inst_31234__$1){
var statearr_31461_33449 = state_31345__$1;
(statearr_31461_33449[(1)] = (16));

} else {
var statearr_31462_33451 = state_31345__$1;
(statearr_31462_33451[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (9))){
var inst_31265 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31463_33452 = state_31345__$1;
(statearr_31463_33452[(2)] = inst_31265);

(statearr_31463_33452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (5))){
var inst_31205 = cljs.core.deref(cs);
var inst_31206 = cljs.core.seq(inst_31205);
var inst_31207 = inst_31206;
var inst_31208 = null;
var inst_31209 = (0);
var inst_31210 = (0);
var state_31345__$1 = (function (){var statearr_31464 = state_31345;
(statearr_31464[(13)] = inst_31207);

(statearr_31464[(14)] = inst_31208);

(statearr_31464[(15)] = inst_31210);

(statearr_31464[(17)] = inst_31209);

return statearr_31464;
})();
var statearr_31465_33467 = state_31345__$1;
(statearr_31465_33467[(2)] = null);

(statearr_31465_33467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (14))){
var state_31345__$1 = state_31345;
var statearr_31468_33471 = state_31345__$1;
(statearr_31468_33471[(2)] = null);

(statearr_31468_33471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (45))){
var inst_31328 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31469_33473 = state_31345__$1;
(statearr_31469_33473[(2)] = inst_31328);

(statearr_31469_33473[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (26))){
var inst_31268 = (state_31345[(29)]);
var inst_31324 = (state_31345[(2)]);
var inst_31325 = cljs.core.seq(inst_31268);
var state_31345__$1 = (function (){var statearr_31470 = state_31345;
(statearr_31470[(31)] = inst_31324);

return statearr_31470;
})();
if(inst_31325){
var statearr_31471_33476 = state_31345__$1;
(statearr_31471_33476[(1)] = (42));

} else {
var statearr_31472_33478 = state_31345__$1;
(statearr_31472_33478[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (16))){
var inst_31234 = (state_31345[(7)]);
var inst_31237 = cljs.core.chunked_seq_QMARK_(inst_31234);
var state_31345__$1 = state_31345;
if(inst_31237){
var statearr_31473_33483 = state_31345__$1;
(statearr_31473_33483[(1)] = (19));

} else {
var statearr_31474_33485 = state_31345__$1;
(statearr_31474_33485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (38))){
var inst_31317 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31475_33486 = state_31345__$1;
(statearr_31475_33486[(2)] = inst_31317);

(statearr_31475_33486[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (30))){
var state_31345__$1 = state_31345;
var statearr_31477_33487 = state_31345__$1;
(statearr_31477_33487[(2)] = null);

(statearr_31477_33487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (10))){
var inst_31208 = (state_31345[(14)]);
var inst_31210 = (state_31345[(15)]);
var inst_31219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31208,inst_31210);
var inst_31220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31219,(0),null);
var inst_31221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31219,(1),null);
var state_31345__$1 = (function (){var statearr_31478 = state_31345;
(statearr_31478[(26)] = inst_31220);

return statearr_31478;
})();
if(cljs.core.truth_(inst_31221)){
var statearr_31479_33488 = state_31345__$1;
(statearr_31479_33488[(1)] = (13));

} else {
var statearr_31480_33489 = state_31345__$1;
(statearr_31480_33489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (18))){
var inst_31261 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31481_33490 = state_31345__$1;
(statearr_31481_33490[(2)] = inst_31261);

(statearr_31481_33490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (42))){
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31345__$1,(45),dchan);
} else {
if((state_val_31346 === (37))){
var inst_31296 = (state_31345[(25)]);
var inst_31197 = (state_31345[(11)]);
var inst_31305 = (state_31345[(23)]);
var inst_31305__$1 = cljs.core.first(inst_31296);
var inst_31307 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31305__$1,inst_31197,done);
var state_31345__$1 = (function (){var statearr_31482 = state_31345;
(statearr_31482[(23)] = inst_31305__$1);

return statearr_31482;
})();
if(cljs.core.truth_(inst_31307)){
var statearr_31483_33497 = state_31345__$1;
(statearr_31483_33497[(1)] = (39));

} else {
var statearr_31486_33500 = state_31345__$1;
(statearr_31486_33500[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (8))){
var inst_31210 = (state_31345[(15)]);
var inst_31209 = (state_31345[(17)]);
var inst_31212 = (inst_31210 < inst_31209);
var inst_31213 = inst_31212;
var state_31345__$1 = state_31345;
if(cljs.core.truth_(inst_31213)){
var statearr_31489_33503 = state_31345__$1;
(statearr_31489_33503[(1)] = (10));

} else {
var statearr_31490_33504 = state_31345__$1;
(statearr_31490_33504[(1)] = (11));

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
});})(c__30275__auto___33279,cs,m,dchan,dctr,done))
;
return ((function (switch__30090__auto__,c__30275__auto___33279,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30091__auto__ = null;
var cljs$core$async$mult_$_state_machine__30091__auto____0 = (function (){
var statearr_31491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31491[(0)] = cljs$core$async$mult_$_state_machine__30091__auto__);

(statearr_31491[(1)] = (1));

return statearr_31491;
});
var cljs$core$async$mult_$_state_machine__30091__auto____1 = (function (state_31345){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_31345);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e31492){if((e31492 instanceof Object)){
var ex__30094__auto__ = e31492;
var statearr_31493_33516 = state_31345;
(statearr_31493_33516[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33522 = state_31345;
state_31345 = G__33522;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30091__auto__ = function(state_31345){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30091__auto____1.call(this,state_31345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30091__auto____0;
cljs$core$async$mult_$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30091__auto____1;
return cljs$core$async$mult_$_state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___33279,cs,m,dchan,dctr,done))
})();
var state__30277__auto__ = (function (){var statearr_31494 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_31494[(6)] = c__30275__auto___33279);

return statearr_31494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___33279,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31496 = arguments.length;
switch (G__31496) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33560 = arguments.length;
var i__4731__auto___33561 = (0);
while(true){
if((i__4731__auto___33561 < len__4730__auto___33560)){
args__4736__auto__.push((arguments[i__4731__auto___33561]));

var G__33563 = (i__4731__auto___33561 + (1));
i__4731__auto___33561 = G__33563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31527){
var map__31528 = p__31527;
var map__31528__$1 = (((((!((map__31528 == null))))?(((((map__31528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31528):map__31528);
var opts = map__31528__$1;
var statearr_31531_33564 = state;
(statearr_31531_33564[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__31528,map__31528__$1,opts){
return (function (val){
var statearr_31533_33565 = state;
(statearr_31533_33565[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31528,map__31528__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31534_33569 = state;
(statearr_31534_33569[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31523){
var G__31524 = cljs.core.first(seq31523);
var seq31523__$1 = cljs.core.next(seq31523);
var G__31525 = cljs.core.first(seq31523__$1);
var seq31523__$2 = cljs.core.next(seq31523__$1);
var G__31526 = cljs.core.first(seq31523__$2);
var seq31523__$3 = cljs.core.next(seq31523__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31524,G__31525,G__31526,seq31523__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31539 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31540){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31540 = meta31540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31541,meta31540__$1){
var self__ = this;
var _31541__$1 = this;
return (new cljs.core.async.t_cljs$core$async31539(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31540__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31541){
var self__ = this;
var _31541__$1 = this;
return self__.meta31540;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31539.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31539.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31540","meta31540",-1675313372,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31539";

cljs.core.async.t_cljs$core$async31539.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31539");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31539.
 */
cljs.core.async.__GT_t_cljs$core$async31539 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31539(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31540){
return (new cljs.core.async.t_cljs$core$async31539(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31540));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31539(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30275__auto___33618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___33618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___33618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31646){
var state_val_31647 = (state_31646[(1)]);
if((state_val_31647 === (7))){
var inst_31561 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31648_33624 = state_31646__$1;
(statearr_31648_33624[(2)] = inst_31561);

(statearr_31648_33624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (20))){
var inst_31573 = (state_31646[(7)]);
var state_31646__$1 = state_31646;
var statearr_31649_33627 = state_31646__$1;
(statearr_31649_33627[(2)] = inst_31573);

(statearr_31649_33627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (27))){
var state_31646__$1 = state_31646;
var statearr_31650_33629 = state_31646__$1;
(statearr_31650_33629[(2)] = null);

(statearr_31650_33629[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (1))){
var inst_31548 = (state_31646[(8)]);
var inst_31548__$1 = calc_state();
var inst_31550 = (inst_31548__$1 == null);
var inst_31551 = cljs.core.not(inst_31550);
var state_31646__$1 = (function (){var statearr_31651 = state_31646;
(statearr_31651[(8)] = inst_31548__$1);

return statearr_31651;
})();
if(inst_31551){
var statearr_31652_33633 = state_31646__$1;
(statearr_31652_33633[(1)] = (2));

} else {
var statearr_31653_33635 = state_31646__$1;
(statearr_31653_33635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (24))){
var inst_31606 = (state_31646[(9)]);
var inst_31597 = (state_31646[(10)]);
var inst_31620 = (state_31646[(11)]);
var inst_31620__$1 = (inst_31597.cljs$core$IFn$_invoke$arity$1 ? inst_31597.cljs$core$IFn$_invoke$arity$1(inst_31606) : inst_31597.call(null,inst_31606));
var state_31646__$1 = (function (){var statearr_31655 = state_31646;
(statearr_31655[(11)] = inst_31620__$1);

return statearr_31655;
})();
if(cljs.core.truth_(inst_31620__$1)){
var statearr_31656_33640 = state_31646__$1;
(statearr_31656_33640[(1)] = (29));

} else {
var statearr_31657_33641 = state_31646__$1;
(statearr_31657_33641[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (4))){
var inst_31564 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31564)){
var statearr_31658_33644 = state_31646__$1;
(statearr_31658_33644[(1)] = (8));

} else {
var statearr_31659_33645 = state_31646__$1;
(statearr_31659_33645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (15))){
var inst_31591 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31591)){
var statearr_31660_33650 = state_31646__$1;
(statearr_31660_33650[(1)] = (19));

} else {
var statearr_31661_33651 = state_31646__$1;
(statearr_31661_33651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (21))){
var inst_31596 = (state_31646[(12)]);
var inst_31596__$1 = (state_31646[(2)]);
var inst_31597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31596__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31596__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31596__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31646__$1 = (function (){var statearr_31662 = state_31646;
(statearr_31662[(10)] = inst_31597);

(statearr_31662[(13)] = inst_31598);

(statearr_31662[(12)] = inst_31596__$1);

return statearr_31662;
})();
return cljs.core.async.ioc_alts_BANG_(state_31646__$1,(22),inst_31599);
} else {
if((state_val_31647 === (31))){
var inst_31628 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31628)){
var statearr_31663_33659 = state_31646__$1;
(statearr_31663_33659[(1)] = (32));

} else {
var statearr_31664_33660 = state_31646__$1;
(statearr_31664_33660[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (32))){
var inst_31605 = (state_31646[(14)]);
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31646__$1,(35),out,inst_31605);
} else {
if((state_val_31647 === (33))){
var inst_31596 = (state_31646[(12)]);
var inst_31573 = inst_31596;
var state_31646__$1 = (function (){var statearr_31665 = state_31646;
(statearr_31665[(7)] = inst_31573);

return statearr_31665;
})();
var statearr_31666_33667 = state_31646__$1;
(statearr_31666_33667[(2)] = null);

(statearr_31666_33667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (13))){
var inst_31573 = (state_31646[(7)]);
var inst_31580 = inst_31573.cljs$lang$protocol_mask$partition0$;
var inst_31581 = (inst_31580 & (64));
var inst_31582 = inst_31573.cljs$core$ISeq$;
var inst_31583 = (cljs.core.PROTOCOL_SENTINEL === inst_31582);
var inst_31584 = ((inst_31581) || (inst_31583));
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31584)){
var statearr_31667_33671 = state_31646__$1;
(statearr_31667_33671[(1)] = (16));

} else {
var statearr_31668_33675 = state_31646__$1;
(statearr_31668_33675[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (22))){
var inst_31606 = (state_31646[(9)]);
var inst_31605 = (state_31646[(14)]);
var inst_31604 = (state_31646[(2)]);
var inst_31605__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31604,(0),null);
var inst_31606__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31604,(1),null);
var inst_31607 = (inst_31605__$1 == null);
var inst_31608 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31606__$1,change);
var inst_31609 = ((inst_31607) || (inst_31608));
var state_31646__$1 = (function (){var statearr_31673 = state_31646;
(statearr_31673[(9)] = inst_31606__$1);

(statearr_31673[(14)] = inst_31605__$1);

return statearr_31673;
})();
if(cljs.core.truth_(inst_31609)){
var statearr_31674_33680 = state_31646__$1;
(statearr_31674_33680[(1)] = (23));

} else {
var statearr_31675_33681 = state_31646__$1;
(statearr_31675_33681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (36))){
var inst_31596 = (state_31646[(12)]);
var inst_31573 = inst_31596;
var state_31646__$1 = (function (){var statearr_31678 = state_31646;
(statearr_31678[(7)] = inst_31573);

return statearr_31678;
})();
var statearr_31679_33685 = state_31646__$1;
(statearr_31679_33685[(2)] = null);

(statearr_31679_33685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (29))){
var inst_31620 = (state_31646[(11)]);
var state_31646__$1 = state_31646;
var statearr_31680_33686 = state_31646__$1;
(statearr_31680_33686[(2)] = inst_31620);

(statearr_31680_33686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (6))){
var state_31646__$1 = state_31646;
var statearr_31681_33687 = state_31646__$1;
(statearr_31681_33687[(2)] = false);

(statearr_31681_33687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (28))){
var inst_31616 = (state_31646[(2)]);
var inst_31617 = calc_state();
var inst_31573 = inst_31617;
var state_31646__$1 = (function (){var statearr_31682 = state_31646;
(statearr_31682[(15)] = inst_31616);

(statearr_31682[(7)] = inst_31573);

return statearr_31682;
})();
var statearr_31683_33688 = state_31646__$1;
(statearr_31683_33688[(2)] = null);

(statearr_31683_33688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (25))){
var inst_31642 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31691_33689 = state_31646__$1;
(statearr_31691_33689[(2)] = inst_31642);

(statearr_31691_33689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (34))){
var inst_31640 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31692_33692 = state_31646__$1;
(statearr_31692_33692[(2)] = inst_31640);

(statearr_31692_33692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (17))){
var state_31646__$1 = state_31646;
var statearr_31693_33694 = state_31646__$1;
(statearr_31693_33694[(2)] = false);

(statearr_31693_33694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (3))){
var state_31646__$1 = state_31646;
var statearr_31694_33697 = state_31646__$1;
(statearr_31694_33697[(2)] = false);

(statearr_31694_33697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (12))){
var inst_31644 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31646__$1,inst_31644);
} else {
if((state_val_31647 === (2))){
var inst_31548 = (state_31646[(8)]);
var inst_31553 = inst_31548.cljs$lang$protocol_mask$partition0$;
var inst_31554 = (inst_31553 & (64));
var inst_31555 = inst_31548.cljs$core$ISeq$;
var inst_31556 = (cljs.core.PROTOCOL_SENTINEL === inst_31555);
var inst_31557 = ((inst_31554) || (inst_31556));
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31557)){
var statearr_31695_33708 = state_31646__$1;
(statearr_31695_33708[(1)] = (5));

} else {
var statearr_31696_33709 = state_31646__$1;
(statearr_31696_33709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (23))){
var inst_31605 = (state_31646[(14)]);
var inst_31611 = (inst_31605 == null);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31611)){
var statearr_31697_33717 = state_31646__$1;
(statearr_31697_33717[(1)] = (26));

} else {
var statearr_31698_33718 = state_31646__$1;
(statearr_31698_33718[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (35))){
var inst_31631 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31631)){
var statearr_31699_33723 = state_31646__$1;
(statearr_31699_33723[(1)] = (36));

} else {
var statearr_31700_33724 = state_31646__$1;
(statearr_31700_33724[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (19))){
var inst_31573 = (state_31646[(7)]);
var inst_31593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31573);
var state_31646__$1 = state_31646;
var statearr_31701_33725 = state_31646__$1;
(statearr_31701_33725[(2)] = inst_31593);

(statearr_31701_33725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (11))){
var inst_31573 = (state_31646[(7)]);
var inst_31577 = (inst_31573 == null);
var inst_31578 = cljs.core.not(inst_31577);
var state_31646__$1 = state_31646;
if(inst_31578){
var statearr_31702_33729 = state_31646__$1;
(statearr_31702_33729[(1)] = (13));

} else {
var statearr_31703_33731 = state_31646__$1;
(statearr_31703_33731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (9))){
var inst_31548 = (state_31646[(8)]);
var state_31646__$1 = state_31646;
var statearr_31704_33732 = state_31646__$1;
(statearr_31704_33732[(2)] = inst_31548);

(statearr_31704_33732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (5))){
var state_31646__$1 = state_31646;
var statearr_31705_33733 = state_31646__$1;
(statearr_31705_33733[(2)] = true);

(statearr_31705_33733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (14))){
var state_31646__$1 = state_31646;
var statearr_31706_33737 = state_31646__$1;
(statearr_31706_33737[(2)] = false);

(statearr_31706_33737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (26))){
var inst_31606 = (state_31646[(9)]);
var inst_31613 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31606);
var state_31646__$1 = state_31646;
var statearr_31707_33739 = state_31646__$1;
(statearr_31707_33739[(2)] = inst_31613);

(statearr_31707_33739[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (16))){
var state_31646__$1 = state_31646;
var statearr_31708_33741 = state_31646__$1;
(statearr_31708_33741[(2)] = true);

(statearr_31708_33741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (38))){
var inst_31636 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31709_33745 = state_31646__$1;
(statearr_31709_33745[(2)] = inst_31636);

(statearr_31709_33745[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (30))){
var inst_31606 = (state_31646[(9)]);
var inst_31597 = (state_31646[(10)]);
var inst_31598 = (state_31646[(13)]);
var inst_31623 = cljs.core.empty_QMARK_(inst_31597);
var inst_31624 = (inst_31598.cljs$core$IFn$_invoke$arity$1 ? inst_31598.cljs$core$IFn$_invoke$arity$1(inst_31606) : inst_31598.call(null,inst_31606));
var inst_31625 = cljs.core.not(inst_31624);
var inst_31626 = ((inst_31623) && (inst_31625));
var state_31646__$1 = state_31646;
var statearr_31716_33747 = state_31646__$1;
(statearr_31716_33747[(2)] = inst_31626);

(statearr_31716_33747[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (10))){
var inst_31548 = (state_31646[(8)]);
var inst_31569 = (state_31646[(2)]);
var inst_31570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31569,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31569,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31569,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31573 = inst_31548;
var state_31646__$1 = (function (){var statearr_31717 = state_31646;
(statearr_31717[(16)] = inst_31572);

(statearr_31717[(17)] = inst_31570);

(statearr_31717[(7)] = inst_31573);

(statearr_31717[(18)] = inst_31571);

return statearr_31717;
})();
var statearr_31718_33750 = state_31646__$1;
(statearr_31718_33750[(2)] = null);

(statearr_31718_33750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (18))){
var inst_31588 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31719_33754 = state_31646__$1;
(statearr_31719_33754[(2)] = inst_31588);

(statearr_31719_33754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (37))){
var state_31646__$1 = state_31646;
var statearr_31720_33762 = state_31646__$1;
(statearr_31720_33762[(2)] = null);

(statearr_31720_33762[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (8))){
var inst_31548 = (state_31646[(8)]);
var inst_31566 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31548);
var state_31646__$1 = state_31646;
var statearr_31721_33769 = state_31646__$1;
(statearr_31721_33769[(2)] = inst_31566);

(statearr_31721_33769[(1)] = (10));


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
}
}
}
}
});})(c__30275__auto___33618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30090__auto__,c__30275__auto___33618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30091__auto__ = null;
var cljs$core$async$mix_$_state_machine__30091__auto____0 = (function (){
var statearr_31722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31722[(0)] = cljs$core$async$mix_$_state_machine__30091__auto__);

(statearr_31722[(1)] = (1));

return statearr_31722;
});
var cljs$core$async$mix_$_state_machine__30091__auto____1 = (function (state_31646){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_31646);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e31723){if((e31723 instanceof Object)){
var ex__30094__auto__ = e31723;
var statearr_31724_33770 = state_31646;
(statearr_31724_33770[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33771 = state_31646;
state_31646 = G__33771;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30091__auto__ = function(state_31646){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30091__auto____1.call(this,state_31646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30091__auto____0;
cljs$core$async$mix_$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30091__auto____1;
return cljs$core$async$mix_$_state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___33618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30277__auto__ = (function (){var statearr_31725 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_31725[(6)] = c__30275__auto___33618);

return statearr_31725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___33618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31737 = arguments.length;
switch (G__31737) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31743 = arguments.length;
switch (G__31743) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__31741_SHARP_){
if(cljs.core.truth_((p1__31741_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31741_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31741_SHARP_.call(null,topic)))){
return p1__31741_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31741_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31746 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31747){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31747 = meta31747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31748,meta31747__$1){
var self__ = this;
var _31748__$1 = this;
return (new cljs.core.async.t_cljs$core$async31746(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31747__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31748){
var self__ = this;
var _31748__$1 = this;
return self__.meta31747;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31746.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31747","meta31747",1161265653,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31746";

cljs.core.async.t_cljs$core$async31746.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31746");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31746.
 */
cljs.core.async.__GT_t_cljs$core$async31746 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31746(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31747){
return (new cljs.core.async.t_cljs$core$async31746(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31747));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31746(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30275__auto___33859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___33859,mults,ensure_mult,p){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___33859,mults,ensure_mult,p){
return (function (state_31839){
var state_val_31840 = (state_31839[(1)]);
if((state_val_31840 === (7))){
var inst_31835 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31841_33878 = state_31839__$1;
(statearr_31841_33878[(2)] = inst_31835);

(statearr_31841_33878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (20))){
var state_31839__$1 = state_31839;
var statearr_31842_33881 = state_31839__$1;
(statearr_31842_33881[(2)] = null);

(statearr_31842_33881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (1))){
var state_31839__$1 = state_31839;
var statearr_31844_33883 = state_31839__$1;
(statearr_31844_33883[(2)] = null);

(statearr_31844_33883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (24))){
var inst_31818 = (state_31839[(7)]);
var inst_31827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31818);
var state_31839__$1 = state_31839;
var statearr_31846_33884 = state_31839__$1;
(statearr_31846_33884[(2)] = inst_31827);

(statearr_31846_33884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (4))){
var inst_31765 = (state_31839[(8)]);
var inst_31765__$1 = (state_31839[(2)]);
var inst_31766 = (inst_31765__$1 == null);
var state_31839__$1 = (function (){var statearr_31847 = state_31839;
(statearr_31847[(8)] = inst_31765__$1);

return statearr_31847;
})();
if(cljs.core.truth_(inst_31766)){
var statearr_31848_33885 = state_31839__$1;
(statearr_31848_33885[(1)] = (5));

} else {
var statearr_31849_33887 = state_31839__$1;
(statearr_31849_33887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (15))){
var inst_31807 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31850_33889 = state_31839__$1;
(statearr_31850_33889[(2)] = inst_31807);

(statearr_31850_33889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (21))){
var inst_31832 = (state_31839[(2)]);
var state_31839__$1 = (function (){var statearr_31851 = state_31839;
(statearr_31851[(9)] = inst_31832);

return statearr_31851;
})();
var statearr_31852_33890 = state_31839__$1;
(statearr_31852_33890[(2)] = null);

(statearr_31852_33890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (13))){
var inst_31789 = (state_31839[(10)]);
var inst_31791 = cljs.core.chunked_seq_QMARK_(inst_31789);
var state_31839__$1 = state_31839;
if(inst_31791){
var statearr_31853_33891 = state_31839__$1;
(statearr_31853_33891[(1)] = (16));

} else {
var statearr_31854_33892 = state_31839__$1;
(statearr_31854_33892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (22))){
var inst_31824 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
if(cljs.core.truth_(inst_31824)){
var statearr_31855_33893 = state_31839__$1;
(statearr_31855_33893[(1)] = (23));

} else {
var statearr_31856_33894 = state_31839__$1;
(statearr_31856_33894[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (6))){
var inst_31820 = (state_31839[(11)]);
var inst_31818 = (state_31839[(7)]);
var inst_31765 = (state_31839[(8)]);
var inst_31818__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31765) : topic_fn.call(null,inst_31765));
var inst_31819 = cljs.core.deref(mults);
var inst_31820__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31819,inst_31818__$1);
var state_31839__$1 = (function (){var statearr_31857 = state_31839;
(statearr_31857[(11)] = inst_31820__$1);

(statearr_31857[(7)] = inst_31818__$1);

return statearr_31857;
})();
if(cljs.core.truth_(inst_31820__$1)){
var statearr_31858_33898 = state_31839__$1;
(statearr_31858_33898[(1)] = (19));

} else {
var statearr_31862_33899 = state_31839__$1;
(statearr_31862_33899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (25))){
var inst_31829 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31863_33907 = state_31839__$1;
(statearr_31863_33907[(2)] = inst_31829);

(statearr_31863_33907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (17))){
var inst_31789 = (state_31839[(10)]);
var inst_31798 = cljs.core.first(inst_31789);
var inst_31799 = cljs.core.async.muxch_STAR_(inst_31798);
var inst_31800 = cljs.core.async.close_BANG_(inst_31799);
var inst_31801 = cljs.core.next(inst_31789);
var inst_31775 = inst_31801;
var inst_31776 = null;
var inst_31777 = (0);
var inst_31778 = (0);
var state_31839__$1 = (function (){var statearr_31866 = state_31839;
(statearr_31866[(12)] = inst_31778);

(statearr_31866[(13)] = inst_31800);

(statearr_31866[(14)] = inst_31777);

(statearr_31866[(15)] = inst_31775);

(statearr_31866[(16)] = inst_31776);

return statearr_31866;
})();
var statearr_31867_33912 = state_31839__$1;
(statearr_31867_33912[(2)] = null);

(statearr_31867_33912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (3))){
var inst_31837 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31839__$1,inst_31837);
} else {
if((state_val_31840 === (12))){
var inst_31809 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31869_33917 = state_31839__$1;
(statearr_31869_33917[(2)] = inst_31809);

(statearr_31869_33917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (2))){
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31839__$1,(4),ch);
} else {
if((state_val_31840 === (23))){
var state_31839__$1 = state_31839;
var statearr_31870_33921 = state_31839__$1;
(statearr_31870_33921[(2)] = null);

(statearr_31870_33921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (19))){
var inst_31820 = (state_31839[(11)]);
var inst_31765 = (state_31839[(8)]);
var inst_31822 = cljs.core.async.muxch_STAR_(inst_31820);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31839__$1,(22),inst_31822,inst_31765);
} else {
if((state_val_31840 === (11))){
var inst_31789 = (state_31839[(10)]);
var inst_31775 = (state_31839[(15)]);
var inst_31789__$1 = cljs.core.seq(inst_31775);
var state_31839__$1 = (function (){var statearr_31871 = state_31839;
(statearr_31871[(10)] = inst_31789__$1);

return statearr_31871;
})();
if(inst_31789__$1){
var statearr_31872_33924 = state_31839__$1;
(statearr_31872_33924[(1)] = (13));

} else {
var statearr_31873_33925 = state_31839__$1;
(statearr_31873_33925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (9))){
var inst_31815 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31874_33926 = state_31839__$1;
(statearr_31874_33926[(2)] = inst_31815);

(statearr_31874_33926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (5))){
var inst_31772 = cljs.core.deref(mults);
var inst_31773 = cljs.core.vals(inst_31772);
var inst_31774 = cljs.core.seq(inst_31773);
var inst_31775 = inst_31774;
var inst_31776 = null;
var inst_31777 = (0);
var inst_31778 = (0);
var state_31839__$1 = (function (){var statearr_31877 = state_31839;
(statearr_31877[(12)] = inst_31778);

(statearr_31877[(14)] = inst_31777);

(statearr_31877[(15)] = inst_31775);

(statearr_31877[(16)] = inst_31776);

return statearr_31877;
})();
var statearr_31878_33927 = state_31839__$1;
(statearr_31878_33927[(2)] = null);

(statearr_31878_33927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (14))){
var state_31839__$1 = state_31839;
var statearr_31882_33928 = state_31839__$1;
(statearr_31882_33928[(2)] = null);

(statearr_31882_33928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (16))){
var inst_31789 = (state_31839[(10)]);
var inst_31793 = cljs.core.chunk_first(inst_31789);
var inst_31794 = cljs.core.chunk_rest(inst_31789);
var inst_31795 = cljs.core.count(inst_31793);
var inst_31775 = inst_31794;
var inst_31776 = inst_31793;
var inst_31777 = inst_31795;
var inst_31778 = (0);
var state_31839__$1 = (function (){var statearr_31885 = state_31839;
(statearr_31885[(12)] = inst_31778);

(statearr_31885[(14)] = inst_31777);

(statearr_31885[(15)] = inst_31775);

(statearr_31885[(16)] = inst_31776);

return statearr_31885;
})();
var statearr_31887_33931 = state_31839__$1;
(statearr_31887_33931[(2)] = null);

(statearr_31887_33931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (10))){
var inst_31778 = (state_31839[(12)]);
var inst_31777 = (state_31839[(14)]);
var inst_31775 = (state_31839[(15)]);
var inst_31776 = (state_31839[(16)]);
var inst_31783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31776,inst_31778);
var inst_31784 = cljs.core.async.muxch_STAR_(inst_31783);
var inst_31785 = cljs.core.async.close_BANG_(inst_31784);
var inst_31786 = (inst_31778 + (1));
var tmp31879 = inst_31777;
var tmp31880 = inst_31775;
var tmp31881 = inst_31776;
var inst_31775__$1 = tmp31880;
var inst_31776__$1 = tmp31881;
var inst_31777__$1 = tmp31879;
var inst_31778__$1 = inst_31786;
var state_31839__$1 = (function (){var statearr_31888 = state_31839;
(statearr_31888[(12)] = inst_31778__$1);

(statearr_31888[(14)] = inst_31777__$1);

(statearr_31888[(15)] = inst_31775__$1);

(statearr_31888[(17)] = inst_31785);

(statearr_31888[(16)] = inst_31776__$1);

return statearr_31888;
})();
var statearr_31889_33934 = state_31839__$1;
(statearr_31889_33934[(2)] = null);

(statearr_31889_33934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (18))){
var inst_31804 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31890_33935 = state_31839__$1;
(statearr_31890_33935[(2)] = inst_31804);

(statearr_31890_33935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (8))){
var inst_31778 = (state_31839[(12)]);
var inst_31777 = (state_31839[(14)]);
var inst_31780 = (inst_31778 < inst_31777);
var inst_31781 = inst_31780;
var state_31839__$1 = state_31839;
if(cljs.core.truth_(inst_31781)){
var statearr_31891_33936 = state_31839__$1;
(statearr_31891_33936[(1)] = (10));

} else {
var statearr_31892_33937 = state_31839__$1;
(statearr_31892_33937[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__30275__auto___33859,mults,ensure_mult,p))
;
return ((function (switch__30090__auto__,c__30275__auto___33859,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_31893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31893[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_31893[(1)] = (1));

return statearr_31893;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_31839){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_31839);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e31894){if((e31894 instanceof Object)){
var ex__30094__auto__ = e31894;
var statearr_31895_33942 = state_31839;
(statearr_31895_33942[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31894;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33944 = state_31839;
state_31839 = G__33944;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_31839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_31839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___33859,mults,ensure_mult,p))
})();
var state__30277__auto__ = (function (){var statearr_31899 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_31899[(6)] = c__30275__auto___33859);

return statearr_31899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___33859,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31902 = arguments.length;
switch (G__31902) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31913 = arguments.length;
switch (G__31913) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31935 = arguments.length;
switch (G__31935) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30275__auto___33981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___33981,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___33981,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31982){
var state_val_31983 = (state_31982[(1)]);
if((state_val_31983 === (7))){
var state_31982__$1 = state_31982;
var statearr_31984_33991 = state_31982__$1;
(statearr_31984_33991[(2)] = null);

(statearr_31984_33991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (1))){
var state_31982__$1 = state_31982;
var statearr_31985_33992 = state_31982__$1;
(statearr_31985_33992[(2)] = null);

(statearr_31985_33992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (4))){
var inst_31946 = (state_31982[(7)]);
var inst_31948 = (inst_31946 < cnt);
var state_31982__$1 = state_31982;
if(cljs.core.truth_(inst_31948)){
var statearr_31986_33997 = state_31982__$1;
(statearr_31986_33997[(1)] = (6));

} else {
var statearr_31987_33998 = state_31982__$1;
(statearr_31987_33998[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (15))){
var inst_31978 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
var statearr_31988_33999 = state_31982__$1;
(statearr_31988_33999[(2)] = inst_31978);

(statearr_31988_33999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (13))){
var inst_31971 = cljs.core.async.close_BANG_(out);
var state_31982__$1 = state_31982;
var statearr_31989_34007 = state_31982__$1;
(statearr_31989_34007[(2)] = inst_31971);

(statearr_31989_34007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (6))){
var state_31982__$1 = state_31982;
var statearr_31990_34008 = state_31982__$1;
(statearr_31990_34008[(2)] = null);

(statearr_31990_34008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (3))){
var inst_31980 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31982__$1,inst_31980);
} else {
if((state_val_31983 === (12))){
var inst_31968 = (state_31982[(8)]);
var inst_31968__$1 = (state_31982[(2)]);
var inst_31969 = cljs.core.some(cljs.core.nil_QMARK_,inst_31968__$1);
var state_31982__$1 = (function (){var statearr_31995 = state_31982;
(statearr_31995[(8)] = inst_31968__$1);

return statearr_31995;
})();
if(cljs.core.truth_(inst_31969)){
var statearr_31998_34017 = state_31982__$1;
(statearr_31998_34017[(1)] = (13));

} else {
var statearr_31999_34022 = state_31982__$1;
(statearr_31999_34022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (2))){
var inst_31945 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31946 = (0);
var state_31982__$1 = (function (){var statearr_32000 = state_31982;
(statearr_32000[(9)] = inst_31945);

(statearr_32000[(7)] = inst_31946);

return statearr_32000;
})();
var statearr_32001_34026 = state_31982__$1;
(statearr_32001_34026[(2)] = null);

(statearr_32001_34026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (11))){
var inst_31946 = (state_31982[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31982,(10),Object,null,(9));
var inst_31955 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31946) : chs__$1.call(null,inst_31946));
var inst_31956 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31946) : done.call(null,inst_31946));
var inst_31957 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31955,inst_31956);
var state_31982__$1 = state_31982;
var statearr_32002_34030 = state_31982__$1;
(statearr_32002_34030[(2)] = inst_31957);


cljs.core.async.impl.ioc_helpers.process_exception(state_31982__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (9))){
var inst_31946 = (state_31982[(7)]);
var inst_31959 = (state_31982[(2)]);
var inst_31960 = (inst_31946 + (1));
var inst_31946__$1 = inst_31960;
var state_31982__$1 = (function (){var statearr_32003 = state_31982;
(statearr_32003[(10)] = inst_31959);

(statearr_32003[(7)] = inst_31946__$1);

return statearr_32003;
})();
var statearr_32005_34031 = state_31982__$1;
(statearr_32005_34031[(2)] = null);

(statearr_32005_34031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (5))){
var inst_31966 = (state_31982[(2)]);
var state_31982__$1 = (function (){var statearr_32010 = state_31982;
(statearr_32010[(11)] = inst_31966);

return statearr_32010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31982__$1,(12),dchan);
} else {
if((state_val_31983 === (14))){
var inst_31968 = (state_31982[(8)]);
var inst_31973 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31968);
var state_31982__$1 = state_31982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31982__$1,(16),out,inst_31973);
} else {
if((state_val_31983 === (16))){
var inst_31975 = (state_31982[(2)]);
var state_31982__$1 = (function (){var statearr_32015 = state_31982;
(statearr_32015[(12)] = inst_31975);

return statearr_32015;
})();
var statearr_32017_34034 = state_31982__$1;
(statearr_32017_34034[(2)] = null);

(statearr_32017_34034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (10))){
var inst_31950 = (state_31982[(2)]);
var inst_31951 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31982__$1 = (function (){var statearr_32018 = state_31982;
(statearr_32018[(13)] = inst_31950);

return statearr_32018;
})();
var statearr_32020_34038 = state_31982__$1;
(statearr_32020_34038[(2)] = inst_31951);


cljs.core.async.impl.ioc_helpers.process_exception(state_31982__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (8))){
var inst_31964 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
var statearr_32024_34039 = state_31982__$1;
(statearr_32024_34039[(2)] = inst_31964);

(statearr_32024_34039[(1)] = (5));


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
});})(c__30275__auto___33981,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30090__auto__,c__30275__auto___33981,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_32025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32025[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_32025[(1)] = (1));

return statearr_32025;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_31982){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_31982);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e32026){if((e32026 instanceof Object)){
var ex__30094__auto__ = e32026;
var statearr_32027_34044 = state_31982;
(statearr_32027_34044[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34045 = state_31982;
state_31982 = G__34045;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_31982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_31982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___33981,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30277__auto__ = (function (){var statearr_32030 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_32030[(6)] = c__30275__auto___33981);

return statearr_32030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___33981,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32033 = arguments.length;
switch (G__32033) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30275__auto___34049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___34049,out){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___34049,out){
return (function (state_32065){
var state_val_32066 = (state_32065[(1)]);
if((state_val_32066 === (7))){
var inst_32044 = (state_32065[(7)]);
var inst_32045 = (state_32065[(8)]);
var inst_32044__$1 = (state_32065[(2)]);
var inst_32045__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32044__$1,(0),null);
var inst_32046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32044__$1,(1),null);
var inst_32047 = (inst_32045__$1 == null);
var state_32065__$1 = (function (){var statearr_32071 = state_32065;
(statearr_32071[(9)] = inst_32046);

(statearr_32071[(7)] = inst_32044__$1);

(statearr_32071[(8)] = inst_32045__$1);

return statearr_32071;
})();
if(cljs.core.truth_(inst_32047)){
var statearr_32072_34053 = state_32065__$1;
(statearr_32072_34053[(1)] = (8));

} else {
var statearr_32073_34054 = state_32065__$1;
(statearr_32073_34054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (1))){
var inst_32034 = cljs.core.vec(chs);
var inst_32035 = inst_32034;
var state_32065__$1 = (function (){var statearr_32074 = state_32065;
(statearr_32074[(10)] = inst_32035);

return statearr_32074;
})();
var statearr_32075_34055 = state_32065__$1;
(statearr_32075_34055[(2)] = null);

(statearr_32075_34055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (4))){
var inst_32035 = (state_32065[(10)]);
var state_32065__$1 = state_32065;
return cljs.core.async.ioc_alts_BANG_(state_32065__$1,(7),inst_32035);
} else {
if((state_val_32066 === (6))){
var inst_32061 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32076_34056 = state_32065__$1;
(statearr_32076_34056[(2)] = inst_32061);

(statearr_32076_34056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (3))){
var inst_32063 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32065__$1,inst_32063);
} else {
if((state_val_32066 === (2))){
var inst_32035 = (state_32065[(10)]);
var inst_32037 = cljs.core.count(inst_32035);
var inst_32038 = (inst_32037 > (0));
var state_32065__$1 = state_32065;
if(cljs.core.truth_(inst_32038)){
var statearr_32078_34071 = state_32065__$1;
(statearr_32078_34071[(1)] = (4));

} else {
var statearr_32081_34072 = state_32065__$1;
(statearr_32081_34072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (11))){
var inst_32035 = (state_32065[(10)]);
var inst_32054 = (state_32065[(2)]);
var tmp32077 = inst_32035;
var inst_32035__$1 = tmp32077;
var state_32065__$1 = (function (){var statearr_32082 = state_32065;
(statearr_32082[(10)] = inst_32035__$1);

(statearr_32082[(11)] = inst_32054);

return statearr_32082;
})();
var statearr_32083_34082 = state_32065__$1;
(statearr_32083_34082[(2)] = null);

(statearr_32083_34082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (9))){
var inst_32045 = (state_32065[(8)]);
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32065__$1,(11),out,inst_32045);
} else {
if((state_val_32066 === (5))){
var inst_32059 = cljs.core.async.close_BANG_(out);
var state_32065__$1 = state_32065;
var statearr_32092_34091 = state_32065__$1;
(statearr_32092_34091[(2)] = inst_32059);

(statearr_32092_34091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (10))){
var inst_32057 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32093_34100 = state_32065__$1;
(statearr_32093_34100[(2)] = inst_32057);

(statearr_32093_34100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (8))){
var inst_32035 = (state_32065[(10)]);
var inst_32046 = (state_32065[(9)]);
var inst_32044 = (state_32065[(7)]);
var inst_32045 = (state_32065[(8)]);
var inst_32049 = (function (){var cs = inst_32035;
var vec__32040 = inst_32044;
var v = inst_32045;
var c = inst_32046;
return ((function (cs,vec__32040,v,c,inst_32035,inst_32046,inst_32044,inst_32045,state_val_32066,c__30275__auto___34049,out){
return (function (p1__32031_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32031_SHARP_);
});
;})(cs,vec__32040,v,c,inst_32035,inst_32046,inst_32044,inst_32045,state_val_32066,c__30275__auto___34049,out))
})();
var inst_32050 = cljs.core.filterv(inst_32049,inst_32035);
var inst_32035__$1 = inst_32050;
var state_32065__$1 = (function (){var statearr_32095 = state_32065;
(statearr_32095[(10)] = inst_32035__$1);

return statearr_32095;
})();
var statearr_32096_34118 = state_32065__$1;
(statearr_32096_34118[(2)] = null);

(statearr_32096_34118[(1)] = (2));


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
});})(c__30275__auto___34049,out))
;
return ((function (switch__30090__auto__,c__30275__auto___34049,out){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_32097 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32097[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_32097[(1)] = (1));

return statearr_32097;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_32065){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_32065);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e32100){if((e32100 instanceof Object)){
var ex__30094__auto__ = e32100;
var statearr_32101_34135 = state_32065;
(statearr_32101_34135[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32100;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34141 = state_32065;
state_32065 = G__34141;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_32065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_32065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___34049,out))
})();
var state__30277__auto__ = (function (){var statearr_32102 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_32102[(6)] = c__30275__auto___34049);

return statearr_32102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___34049,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32104 = arguments.length;
switch (G__32104) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30275__auto___34158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___34158,out){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___34158,out){
return (function (state_32134){
var state_val_32135 = (state_32134[(1)]);
if((state_val_32135 === (7))){
var inst_32116 = (state_32134[(7)]);
var inst_32116__$1 = (state_32134[(2)]);
var inst_32117 = (inst_32116__$1 == null);
var inst_32118 = cljs.core.not(inst_32117);
var state_32134__$1 = (function (){var statearr_32136 = state_32134;
(statearr_32136[(7)] = inst_32116__$1);

return statearr_32136;
})();
if(inst_32118){
var statearr_32138_34163 = state_32134__$1;
(statearr_32138_34163[(1)] = (8));

} else {
var statearr_32139_34164 = state_32134__$1;
(statearr_32139_34164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32135 === (1))){
var inst_32111 = (0);
var state_32134__$1 = (function (){var statearr_32140 = state_32134;
(statearr_32140[(8)] = inst_32111);

return statearr_32140;
})();
var statearr_32141_34169 = state_32134__$1;
(statearr_32141_34169[(2)] = null);

(statearr_32141_34169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32135 === (4))){
var state_32134__$1 = state_32134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32134__$1,(7),ch);
} else {
if((state_val_32135 === (6))){
var inst_32129 = (state_32134[(2)]);
var state_32134__$1 = state_32134;
var statearr_32142_34174 = state_32134__$1;
(statearr_32142_34174[(2)] = inst_32129);

(statearr_32142_34174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32135 === (3))){
var inst_32131 = (state_32134[(2)]);
var inst_32132 = cljs.core.async.close_BANG_(out);
var state_32134__$1 = (function (){var statearr_32143 = state_32134;
(statearr_32143[(9)] = inst_32131);

return statearr_32143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32134__$1,inst_32132);
} else {
if((state_val_32135 === (2))){
var inst_32111 = (state_32134[(8)]);
var inst_32113 = (inst_32111 < n);
var state_32134__$1 = state_32134;
if(cljs.core.truth_(inst_32113)){
var statearr_32144_34179 = state_32134__$1;
(statearr_32144_34179[(1)] = (4));

} else {
var statearr_32145_34180 = state_32134__$1;
(statearr_32145_34180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32135 === (11))){
var inst_32111 = (state_32134[(8)]);
var inst_32121 = (state_32134[(2)]);
var inst_32122 = (inst_32111 + (1));
var inst_32111__$1 = inst_32122;
var state_32134__$1 = (function (){var statearr_32146 = state_32134;
(statearr_32146[(10)] = inst_32121);

(statearr_32146[(8)] = inst_32111__$1);

return statearr_32146;
})();
var statearr_32147_34182 = state_32134__$1;
(statearr_32147_34182[(2)] = null);

(statearr_32147_34182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32135 === (9))){
var state_32134__$1 = state_32134;
var statearr_32148_34183 = state_32134__$1;
(statearr_32148_34183[(2)] = null);

(statearr_32148_34183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32135 === (5))){
var state_32134__$1 = state_32134;
var statearr_32149_34184 = state_32134__$1;
(statearr_32149_34184[(2)] = null);

(statearr_32149_34184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32135 === (10))){
var inst_32126 = (state_32134[(2)]);
var state_32134__$1 = state_32134;
var statearr_32151_34186 = state_32134__$1;
(statearr_32151_34186[(2)] = inst_32126);

(statearr_32151_34186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32135 === (8))){
var inst_32116 = (state_32134[(7)]);
var state_32134__$1 = state_32134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32134__$1,(11),out,inst_32116);
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
});})(c__30275__auto___34158,out))
;
return ((function (switch__30090__auto__,c__30275__auto___34158,out){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_32153 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32153[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_32153[(1)] = (1));

return statearr_32153;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_32134){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_32134);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e32155){if((e32155 instanceof Object)){
var ex__30094__auto__ = e32155;
var statearr_32156_34194 = state_32134;
(statearr_32156_34194[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34195 = state_32134;
state_32134 = G__34195;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_32134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_32134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___34158,out))
})();
var state__30277__auto__ = (function (){var statearr_32157 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_32157[(6)] = c__30275__auto___34158);

return statearr_32157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___34158,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32159 = (function (f,ch,meta32160){
this.f = f;
this.ch = ch;
this.meta32160 = meta32160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32161,meta32160__$1){
var self__ = this;
var _32161__$1 = this;
return (new cljs.core.async.t_cljs$core$async32159(self__.f,self__.ch,meta32160__$1));
});

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32161){
var self__ = this;
var _32161__$1 = this;
return self__.meta32160;
});

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32162 = (function (f,ch,meta32160,_,fn1,meta32163){
this.f = f;
this.ch = ch;
this.meta32160 = meta32160;
this._ = _;
this.fn1 = fn1;
this.meta32163 = meta32163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32164,meta32163__$1){
var self__ = this;
var _32164__$1 = this;
return (new cljs.core.async.t_cljs$core$async32162(self__.f,self__.ch,self__.meta32160,self__._,self__.fn1,meta32163__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32164){
var self__ = this;
var _32164__$1 = this;
return self__.meta32163;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32158_SHARP_){
var G__32165 = (((p1__32158_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32158_SHARP_) : self__.f.call(null,p1__32158_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32165) : f1.call(null,G__32165));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32162.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32160","meta32160",1099562223,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32159","cljs.core.async/t_cljs$core$async32159",-1463916662,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32163","meta32163",258624906,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32162";

cljs.core.async.t_cljs$core$async32162.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32162");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32162.
 */
cljs.core.async.__GT_t_cljs$core$async32162 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32162(f__$1,ch__$1,meta32160__$1,___$2,fn1__$1,meta32163){
return (new cljs.core.async.t_cljs$core$async32162(f__$1,ch__$1,meta32160__$1,___$2,fn1__$1,meta32163));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32162(self__.f,self__.ch,self__.meta32160,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32167 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32167) : self__.f.call(null,G__32167));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32160","meta32160",1099562223,null)], null);
});

cljs.core.async.t_cljs$core$async32159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32159";

cljs.core.async.t_cljs$core$async32159.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32159");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32159.
 */
cljs.core.async.__GT_t_cljs$core$async32159 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32159(f__$1,ch__$1,meta32160){
return (new cljs.core.async.t_cljs$core$async32159(f__$1,ch__$1,meta32160));
});

}

return (new cljs.core.async.t_cljs$core$async32159(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32174 = (function (f,ch,meta32175){
this.f = f;
this.ch = ch;
this.meta32175 = meta32175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32176,meta32175__$1){
var self__ = this;
var _32176__$1 = this;
return (new cljs.core.async.t_cljs$core$async32174(self__.f,self__.ch,meta32175__$1));
});

cljs.core.async.t_cljs$core$async32174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32176){
var self__ = this;
var _32176__$1 = this;
return self__.meta32175;
});

cljs.core.async.t_cljs$core$async32174.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32174.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32174.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32175","meta32175",-756244598,null)], null);
});

cljs.core.async.t_cljs$core$async32174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32174";

cljs.core.async.t_cljs$core$async32174.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32174");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32174.
 */
cljs.core.async.__GT_t_cljs$core$async32174 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32174(f__$1,ch__$1,meta32175){
return (new cljs.core.async.t_cljs$core$async32174(f__$1,ch__$1,meta32175));
});

}

return (new cljs.core.async.t_cljs$core$async32174(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32178 = (function (p,ch,meta32179){
this.p = p;
this.ch = ch;
this.meta32179 = meta32179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32180,meta32179__$1){
var self__ = this;
var _32180__$1 = this;
return (new cljs.core.async.t_cljs$core$async32178(self__.p,self__.ch,meta32179__$1));
});

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32180){
var self__ = this;
var _32180__$1 = this;
return self__.meta32179;
});

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32179","meta32179",78861087,null)], null);
});

cljs.core.async.t_cljs$core$async32178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32178";

cljs.core.async.t_cljs$core$async32178.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32178");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32178.
 */
cljs.core.async.__GT_t_cljs$core$async32178 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32178(p__$1,ch__$1,meta32179){
return (new cljs.core.async.t_cljs$core$async32178(p__$1,ch__$1,meta32179));
});

}

return (new cljs.core.async.t_cljs$core$async32178(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32183 = arguments.length;
switch (G__32183) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30275__auto___34281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___34281,out){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___34281,out){
return (function (state_32207){
var state_val_32208 = (state_32207[(1)]);
if((state_val_32208 === (7))){
var inst_32203 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32209_34282 = state_32207__$1;
(statearr_32209_34282[(2)] = inst_32203);

(statearr_32209_34282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (1))){
var state_32207__$1 = state_32207;
var statearr_32210_34284 = state_32207__$1;
(statearr_32210_34284[(2)] = null);

(statearr_32210_34284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (4))){
var inst_32189 = (state_32207[(7)]);
var inst_32189__$1 = (state_32207[(2)]);
var inst_32190 = (inst_32189__$1 == null);
var state_32207__$1 = (function (){var statearr_32211 = state_32207;
(statearr_32211[(7)] = inst_32189__$1);

return statearr_32211;
})();
if(cljs.core.truth_(inst_32190)){
var statearr_32212_34286 = state_32207__$1;
(statearr_32212_34286[(1)] = (5));

} else {
var statearr_32213_34287 = state_32207__$1;
(statearr_32213_34287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (6))){
var inst_32189 = (state_32207[(7)]);
var inst_32194 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32189) : p.call(null,inst_32189));
var state_32207__$1 = state_32207;
if(cljs.core.truth_(inst_32194)){
var statearr_32214_34288 = state_32207__$1;
(statearr_32214_34288[(1)] = (8));

} else {
var statearr_32215_34289 = state_32207__$1;
(statearr_32215_34289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (3))){
var inst_32205 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32207__$1,inst_32205);
} else {
if((state_val_32208 === (2))){
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32207__$1,(4),ch);
} else {
if((state_val_32208 === (11))){
var inst_32197 = (state_32207[(2)]);
var state_32207__$1 = state_32207;
var statearr_32222_34291 = state_32207__$1;
(statearr_32222_34291[(2)] = inst_32197);

(statearr_32222_34291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (9))){
var state_32207__$1 = state_32207;
var statearr_32223_34292 = state_32207__$1;
(statearr_32223_34292[(2)] = null);

(statearr_32223_34292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (5))){
var inst_32192 = cljs.core.async.close_BANG_(out);
var state_32207__$1 = state_32207;
var statearr_32224_34293 = state_32207__$1;
(statearr_32224_34293[(2)] = inst_32192);

(statearr_32224_34293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (10))){
var inst_32200 = (state_32207[(2)]);
var state_32207__$1 = (function (){var statearr_32225 = state_32207;
(statearr_32225[(8)] = inst_32200);

return statearr_32225;
})();
var statearr_32226_34294 = state_32207__$1;
(statearr_32226_34294[(2)] = null);

(statearr_32226_34294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32208 === (8))){
var inst_32189 = (state_32207[(7)]);
var state_32207__$1 = state_32207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32207__$1,(11),out,inst_32189);
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
});})(c__30275__auto___34281,out))
;
return ((function (switch__30090__auto__,c__30275__auto___34281,out){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_32227 = [null,null,null,null,null,null,null,null,null];
(statearr_32227[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_32227[(1)] = (1));

return statearr_32227;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_32207){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_32207);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e32228){if((e32228 instanceof Object)){
var ex__30094__auto__ = e32228;
var statearr_32229_34295 = state_32207;
(statearr_32229_34295[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32228;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34296 = state_32207;
state_32207 = G__34296;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_32207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_32207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___34281,out))
})();
var state__30277__auto__ = (function (){var statearr_32230 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_32230[(6)] = c__30275__auto___34281);

return statearr_32230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___34281,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32232 = arguments.length;
switch (G__32232) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30275__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto__){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto__){
return (function (state_32314){
var state_val_32315 = (state_32314[(1)]);
if((state_val_32315 === (7))){
var inst_32310 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32318_34306 = state_32314__$1;
(statearr_32318_34306[(2)] = inst_32310);

(statearr_32318_34306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (20))){
var inst_32278 = (state_32314[(7)]);
var inst_32291 = (state_32314[(2)]);
var inst_32292 = cljs.core.next(inst_32278);
var inst_32258 = inst_32292;
var inst_32259 = null;
var inst_32260 = (0);
var inst_32261 = (0);
var state_32314__$1 = (function (){var statearr_32319 = state_32314;
(statearr_32319[(8)] = inst_32258);

(statearr_32319[(9)] = inst_32291);

(statearr_32319[(10)] = inst_32260);

(statearr_32319[(11)] = inst_32259);

(statearr_32319[(12)] = inst_32261);

return statearr_32319;
})();
var statearr_32320_34308 = state_32314__$1;
(statearr_32320_34308[(2)] = null);

(statearr_32320_34308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (1))){
var state_32314__$1 = state_32314;
var statearr_32323_34309 = state_32314__$1;
(statearr_32323_34309[(2)] = null);

(statearr_32323_34309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (4))){
var inst_32243 = (state_32314[(13)]);
var inst_32243__$1 = (state_32314[(2)]);
var inst_32248 = (inst_32243__$1 == null);
var state_32314__$1 = (function (){var statearr_32327 = state_32314;
(statearr_32327[(13)] = inst_32243__$1);

return statearr_32327;
})();
if(cljs.core.truth_(inst_32248)){
var statearr_32328_34311 = state_32314__$1;
(statearr_32328_34311[(1)] = (5));

} else {
var statearr_32329_34312 = state_32314__$1;
(statearr_32329_34312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (15))){
var state_32314__$1 = state_32314;
var statearr_32333_34313 = state_32314__$1;
(statearr_32333_34313[(2)] = null);

(statearr_32333_34313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (21))){
var state_32314__$1 = state_32314;
var statearr_32334_34314 = state_32314__$1;
(statearr_32334_34314[(2)] = null);

(statearr_32334_34314[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (13))){
var inst_32258 = (state_32314[(8)]);
var inst_32260 = (state_32314[(10)]);
var inst_32259 = (state_32314[(11)]);
var inst_32261 = (state_32314[(12)]);
var inst_32269 = (state_32314[(2)]);
var inst_32275 = (inst_32261 + (1));
var tmp32330 = inst_32258;
var tmp32331 = inst_32260;
var tmp32332 = inst_32259;
var inst_32258__$1 = tmp32330;
var inst_32259__$1 = tmp32332;
var inst_32260__$1 = tmp32331;
var inst_32261__$1 = inst_32275;
var state_32314__$1 = (function (){var statearr_32338 = state_32314;
(statearr_32338[(8)] = inst_32258__$1);

(statearr_32338[(14)] = inst_32269);

(statearr_32338[(10)] = inst_32260__$1);

(statearr_32338[(11)] = inst_32259__$1);

(statearr_32338[(12)] = inst_32261__$1);

return statearr_32338;
})();
var statearr_32339_34319 = state_32314__$1;
(statearr_32339_34319[(2)] = null);

(statearr_32339_34319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (22))){
var state_32314__$1 = state_32314;
var statearr_32340_34320 = state_32314__$1;
(statearr_32340_34320[(2)] = null);

(statearr_32340_34320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (6))){
var inst_32243 = (state_32314[(13)]);
var inst_32256 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32243) : f.call(null,inst_32243));
var inst_32257 = cljs.core.seq(inst_32256);
var inst_32258 = inst_32257;
var inst_32259 = null;
var inst_32260 = (0);
var inst_32261 = (0);
var state_32314__$1 = (function (){var statearr_32341 = state_32314;
(statearr_32341[(8)] = inst_32258);

(statearr_32341[(10)] = inst_32260);

(statearr_32341[(11)] = inst_32259);

(statearr_32341[(12)] = inst_32261);

return statearr_32341;
})();
var statearr_32346_34321 = state_32314__$1;
(statearr_32346_34321[(2)] = null);

(statearr_32346_34321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (17))){
var inst_32278 = (state_32314[(7)]);
var inst_32284 = cljs.core.chunk_first(inst_32278);
var inst_32285 = cljs.core.chunk_rest(inst_32278);
var inst_32286 = cljs.core.count(inst_32284);
var inst_32258 = inst_32285;
var inst_32259 = inst_32284;
var inst_32260 = inst_32286;
var inst_32261 = (0);
var state_32314__$1 = (function (){var statearr_32354 = state_32314;
(statearr_32354[(8)] = inst_32258);

(statearr_32354[(10)] = inst_32260);

(statearr_32354[(11)] = inst_32259);

(statearr_32354[(12)] = inst_32261);

return statearr_32354;
})();
var statearr_32355_34322 = state_32314__$1;
(statearr_32355_34322[(2)] = null);

(statearr_32355_34322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (3))){
var inst_32312 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32314__$1,inst_32312);
} else {
if((state_val_32315 === (12))){
var inst_32300 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32356_34324 = state_32314__$1;
(statearr_32356_34324[(2)] = inst_32300);

(statearr_32356_34324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (2))){
var state_32314__$1 = state_32314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32314__$1,(4),in$);
} else {
if((state_val_32315 === (23))){
var inst_32308 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32357_34325 = state_32314__$1;
(statearr_32357_34325[(2)] = inst_32308);

(statearr_32357_34325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (19))){
var inst_32295 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32358_34326 = state_32314__$1;
(statearr_32358_34326[(2)] = inst_32295);

(statearr_32358_34326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (11))){
var inst_32258 = (state_32314[(8)]);
var inst_32278 = (state_32314[(7)]);
var inst_32278__$1 = cljs.core.seq(inst_32258);
var state_32314__$1 = (function (){var statearr_32363 = state_32314;
(statearr_32363[(7)] = inst_32278__$1);

return statearr_32363;
})();
if(inst_32278__$1){
var statearr_32368_34327 = state_32314__$1;
(statearr_32368_34327[(1)] = (14));

} else {
var statearr_32369_34328 = state_32314__$1;
(statearr_32369_34328[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (9))){
var inst_32302 = (state_32314[(2)]);
var inst_32303 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32314__$1 = (function (){var statearr_32372 = state_32314;
(statearr_32372[(15)] = inst_32302);

return statearr_32372;
})();
if(cljs.core.truth_(inst_32303)){
var statearr_32373_34329 = state_32314__$1;
(statearr_32373_34329[(1)] = (21));

} else {
var statearr_32374_34335 = state_32314__$1;
(statearr_32374_34335[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (5))){
var inst_32250 = cljs.core.async.close_BANG_(out);
var state_32314__$1 = state_32314;
var statearr_32378_34340 = state_32314__$1;
(statearr_32378_34340[(2)] = inst_32250);

(statearr_32378_34340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (14))){
var inst_32278 = (state_32314[(7)]);
var inst_32282 = cljs.core.chunked_seq_QMARK_(inst_32278);
var state_32314__$1 = state_32314;
if(inst_32282){
var statearr_32382_34344 = state_32314__$1;
(statearr_32382_34344[(1)] = (17));

} else {
var statearr_32383_34345 = state_32314__$1;
(statearr_32383_34345[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (16))){
var inst_32298 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32386_34347 = state_32314__$1;
(statearr_32386_34347[(2)] = inst_32298);

(statearr_32386_34347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (10))){
var inst_32259 = (state_32314[(11)]);
var inst_32261 = (state_32314[(12)]);
var inst_32266 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32259,inst_32261);
var state_32314__$1 = state_32314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32314__$1,(13),out,inst_32266);
} else {
if((state_val_32315 === (18))){
var inst_32278 = (state_32314[(7)]);
var inst_32289 = cljs.core.first(inst_32278);
var state_32314__$1 = state_32314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32314__$1,(20),out,inst_32289);
} else {
if((state_val_32315 === (8))){
var inst_32260 = (state_32314[(10)]);
var inst_32261 = (state_32314[(12)]);
var inst_32263 = (inst_32261 < inst_32260);
var inst_32264 = inst_32263;
var state_32314__$1 = state_32314;
if(cljs.core.truth_(inst_32264)){
var statearr_32390_34351 = state_32314__$1;
(statearr_32390_34351[(1)] = (10));

} else {
var statearr_32391_34352 = state_32314__$1;
(statearr_32391_34352[(1)] = (11));

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
}
}
}
}
}
}
});})(c__30275__auto__))
;
return ((function (switch__30090__auto__,c__30275__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30091__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30091__auto____0 = (function (){
var statearr_32392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32392[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30091__auto__);

(statearr_32392[(1)] = (1));

return statearr_32392;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30091__auto____1 = (function (state_32314){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_32314);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e32395){if((e32395 instanceof Object)){
var ex__30094__auto__ = e32395;
var statearr_32397_34355 = state_32314;
(statearr_32397_34355[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34356 = state_32314;
state_32314 = G__34356;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30091__auto__ = function(state_32314){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30091__auto____1.call(this,state_32314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30091__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30091__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto__))
})();
var state__30277__auto__ = (function (){var statearr_32401 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_32401[(6)] = c__30275__auto__);

return statearr_32401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto__))
);

return c__30275__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32407 = arguments.length;
switch (G__32407) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32415 = arguments.length;
switch (G__32415) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32420 = arguments.length;
switch (G__32420) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30275__auto___34381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___34381,out){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___34381,out){
return (function (state_32445){
var state_val_32446 = (state_32445[(1)]);
if((state_val_32446 === (7))){
var inst_32440 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
var statearr_32447_34386 = state_32445__$1;
(statearr_32447_34386[(2)] = inst_32440);

(statearr_32447_34386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (1))){
var inst_32422 = null;
var state_32445__$1 = (function (){var statearr_32448 = state_32445;
(statearr_32448[(7)] = inst_32422);

return statearr_32448;
})();
var statearr_32449_34387 = state_32445__$1;
(statearr_32449_34387[(2)] = null);

(statearr_32449_34387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (4))){
var inst_32425 = (state_32445[(8)]);
var inst_32425__$1 = (state_32445[(2)]);
var inst_32426 = (inst_32425__$1 == null);
var inst_32427 = cljs.core.not(inst_32426);
var state_32445__$1 = (function (){var statearr_32450 = state_32445;
(statearr_32450[(8)] = inst_32425__$1);

return statearr_32450;
})();
if(inst_32427){
var statearr_32451_34392 = state_32445__$1;
(statearr_32451_34392[(1)] = (5));

} else {
var statearr_32455_34393 = state_32445__$1;
(statearr_32455_34393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (6))){
var state_32445__$1 = state_32445;
var statearr_32456_34396 = state_32445__$1;
(statearr_32456_34396[(2)] = null);

(statearr_32456_34396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (3))){
var inst_32442 = (state_32445[(2)]);
var inst_32443 = cljs.core.async.close_BANG_(out);
var state_32445__$1 = (function (){var statearr_32457 = state_32445;
(statearr_32457[(9)] = inst_32442);

return statearr_32457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32445__$1,inst_32443);
} else {
if((state_val_32446 === (2))){
var state_32445__$1 = state_32445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32445__$1,(4),ch);
} else {
if((state_val_32446 === (11))){
var inst_32425 = (state_32445[(8)]);
var inst_32434 = (state_32445[(2)]);
var inst_32422 = inst_32425;
var state_32445__$1 = (function (){var statearr_32459 = state_32445;
(statearr_32459[(10)] = inst_32434);

(statearr_32459[(7)] = inst_32422);

return statearr_32459;
})();
var statearr_32460_34399 = state_32445__$1;
(statearr_32460_34399[(2)] = null);

(statearr_32460_34399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (9))){
var inst_32425 = (state_32445[(8)]);
var state_32445__$1 = state_32445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32445__$1,(11),out,inst_32425);
} else {
if((state_val_32446 === (5))){
var inst_32422 = (state_32445[(7)]);
var inst_32425 = (state_32445[(8)]);
var inst_32429 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32425,inst_32422);
var state_32445__$1 = state_32445;
if(inst_32429){
var statearr_32463_34406 = state_32445__$1;
(statearr_32463_34406[(1)] = (8));

} else {
var statearr_32464_34408 = state_32445__$1;
(statearr_32464_34408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (10))){
var inst_32437 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
var statearr_32470_34415 = state_32445__$1;
(statearr_32470_34415[(2)] = inst_32437);

(statearr_32470_34415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (8))){
var inst_32422 = (state_32445[(7)]);
var tmp32462 = inst_32422;
var inst_32422__$1 = tmp32462;
var state_32445__$1 = (function (){var statearr_32471 = state_32445;
(statearr_32471[(7)] = inst_32422__$1);

return statearr_32471;
})();
var statearr_32472_34425 = state_32445__$1;
(statearr_32472_34425[(2)] = null);

(statearr_32472_34425[(1)] = (2));


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
});})(c__30275__auto___34381,out))
;
return ((function (switch__30090__auto__,c__30275__auto___34381,out){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_32473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32473[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_32473[(1)] = (1));

return statearr_32473;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_32445){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_32445);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e32474){if((e32474 instanceof Object)){
var ex__30094__auto__ = e32474;
var statearr_32475_34465 = state_32445;
(statearr_32475_34465[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34471 = state_32445;
state_32445 = G__34471;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_32445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_32445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___34381,out))
})();
var state__30277__auto__ = (function (){var statearr_32476 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_32476[(6)] = c__30275__auto___34381);

return statearr_32476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___34381,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32506 = arguments.length;
switch (G__32506) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30275__auto___34498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___34498,out){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___34498,out){
return (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (7))){
var inst_32546 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32557_34507 = state_32555__$1;
(statearr_32557_34507[(2)] = inst_32546);

(statearr_32557_34507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (1))){
var inst_32510 = (new Array(n));
var inst_32511 = inst_32510;
var inst_32512 = (0);
var state_32555__$1 = (function (){var statearr_32561 = state_32555;
(statearr_32561[(7)] = inst_32512);

(statearr_32561[(8)] = inst_32511);

return statearr_32561;
})();
var statearr_32562_34511 = state_32555__$1;
(statearr_32562_34511[(2)] = null);

(statearr_32562_34511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (4))){
var inst_32515 = (state_32555[(9)]);
var inst_32515__$1 = (state_32555[(2)]);
var inst_32516 = (inst_32515__$1 == null);
var inst_32517 = cljs.core.not(inst_32516);
var state_32555__$1 = (function (){var statearr_32563 = state_32555;
(statearr_32563[(9)] = inst_32515__$1);

return statearr_32563;
})();
if(inst_32517){
var statearr_32565_34512 = state_32555__$1;
(statearr_32565_34512[(1)] = (5));

} else {
var statearr_32566_34516 = state_32555__$1;
(statearr_32566_34516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (15))){
var inst_32540 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32567_34518 = state_32555__$1;
(statearr_32567_34518[(2)] = inst_32540);

(statearr_32567_34518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (13))){
var state_32555__$1 = state_32555;
var statearr_32568_34522 = state_32555__$1;
(statearr_32568_34522[(2)] = null);

(statearr_32568_34522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var inst_32512 = (state_32555[(7)]);
var inst_32535 = (inst_32512 > (0));
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32535)){
var statearr_32569_34524 = state_32555__$1;
(statearr_32569_34524[(1)] = (12));

} else {
var statearr_32570_34525 = state_32555__$1;
(statearr_32570_34525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (3))){
var inst_32548 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32555__$1,inst_32548);
} else {
if((state_val_32556 === (12))){
var inst_32511 = (state_32555[(8)]);
var inst_32538 = cljs.core.vec(inst_32511);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32555__$1,(15),out,inst_32538);
} else {
if((state_val_32556 === (2))){
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32555__$1,(4),ch);
} else {
if((state_val_32556 === (11))){
var inst_32529 = (state_32555[(2)]);
var inst_32530 = (new Array(n));
var inst_32511 = inst_32530;
var inst_32512 = (0);
var state_32555__$1 = (function (){var statearr_32573 = state_32555;
(statearr_32573[(7)] = inst_32512);

(statearr_32573[(10)] = inst_32529);

(statearr_32573[(8)] = inst_32511);

return statearr_32573;
})();
var statearr_32574_34529 = state_32555__$1;
(statearr_32574_34529[(2)] = null);

(statearr_32574_34529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (9))){
var inst_32511 = (state_32555[(8)]);
var inst_32527 = cljs.core.vec(inst_32511);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32555__$1,(11),out,inst_32527);
} else {
if((state_val_32556 === (5))){
var inst_32515 = (state_32555[(9)]);
var inst_32512 = (state_32555[(7)]);
var inst_32520 = (state_32555[(11)]);
var inst_32511 = (state_32555[(8)]);
var inst_32519 = (inst_32511[inst_32512] = inst_32515);
var inst_32520__$1 = (inst_32512 + (1));
var inst_32522 = (inst_32520__$1 < n);
var state_32555__$1 = (function (){var statearr_32575 = state_32555;
(statearr_32575[(12)] = inst_32519);

(statearr_32575[(11)] = inst_32520__$1);

return statearr_32575;
})();
if(cljs.core.truth_(inst_32522)){
var statearr_32576_34534 = state_32555__$1;
(statearr_32576_34534[(1)] = (8));

} else {
var statearr_32577_34535 = state_32555__$1;
(statearr_32577_34535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (14))){
var inst_32543 = (state_32555[(2)]);
var inst_32544 = cljs.core.async.close_BANG_(out);
var state_32555__$1 = (function (){var statearr_32579 = state_32555;
(statearr_32579[(13)] = inst_32543);

return statearr_32579;
})();
var statearr_32580_34537 = state_32555__$1;
(statearr_32580_34537[(2)] = inst_32544);

(statearr_32580_34537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (10))){
var inst_32533 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32581_34538 = state_32555__$1;
(statearr_32581_34538[(2)] = inst_32533);

(statearr_32581_34538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (8))){
var inst_32520 = (state_32555[(11)]);
var inst_32511 = (state_32555[(8)]);
var tmp32578 = inst_32511;
var inst_32511__$1 = tmp32578;
var inst_32512 = inst_32520;
var state_32555__$1 = (function (){var statearr_32583 = state_32555;
(statearr_32583[(7)] = inst_32512);

(statearr_32583[(8)] = inst_32511__$1);

return statearr_32583;
})();
var statearr_32587_34539 = state_32555__$1;
(statearr_32587_34539[(2)] = null);

(statearr_32587_34539[(1)] = (2));


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
});})(c__30275__auto___34498,out))
;
return ((function (switch__30090__auto__,c__30275__auto___34498,out){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_32592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32592[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_32592[(1)] = (1));

return statearr_32592;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_32555){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_32555);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e32593){if((e32593 instanceof Object)){
var ex__30094__auto__ = e32593;
var statearr_32598_34545 = state_32555;
(statearr_32598_34545[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34546 = state_32555;
state_32555 = G__34546;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___34498,out))
})();
var state__30277__auto__ = (function (){var statearr_32599 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_32599[(6)] = c__30275__auto___34498);

return statearr_32599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___34498,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32601 = arguments.length;
switch (G__32601) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30275__auto___34548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30275__auto___34548,out){
return (function (){
var f__30276__auto__ = (function (){var switch__30090__auto__ = ((function (c__30275__auto___34548,out){
return (function (state_32648){
var state_val_32649 = (state_32648[(1)]);
if((state_val_32649 === (7))){
var inst_32644 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32651_34550 = state_32648__$1;
(statearr_32651_34550[(2)] = inst_32644);

(statearr_32651_34550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (1))){
var inst_32605 = [];
var inst_32606 = inst_32605;
var inst_32607 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32648__$1 = (function (){var statearr_32652 = state_32648;
(statearr_32652[(7)] = inst_32607);

(statearr_32652[(8)] = inst_32606);

return statearr_32652;
})();
var statearr_32653_34555 = state_32648__$1;
(statearr_32653_34555[(2)] = null);

(statearr_32653_34555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (4))){
var inst_32610 = (state_32648[(9)]);
var inst_32610__$1 = (state_32648[(2)]);
var inst_32611 = (inst_32610__$1 == null);
var inst_32612 = cljs.core.not(inst_32611);
var state_32648__$1 = (function (){var statearr_32654 = state_32648;
(statearr_32654[(9)] = inst_32610__$1);

return statearr_32654;
})();
if(inst_32612){
var statearr_32655_34559 = state_32648__$1;
(statearr_32655_34559[(1)] = (5));

} else {
var statearr_32659_34560 = state_32648__$1;
(statearr_32659_34560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (15))){
var inst_32638 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32660_34561 = state_32648__$1;
(statearr_32660_34561[(2)] = inst_32638);

(statearr_32660_34561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (13))){
var state_32648__$1 = state_32648;
var statearr_32661_34565 = state_32648__$1;
(statearr_32661_34565[(2)] = null);

(statearr_32661_34565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (6))){
var inst_32606 = (state_32648[(8)]);
var inst_32633 = inst_32606.length;
var inst_32634 = (inst_32633 > (0));
var state_32648__$1 = state_32648;
if(cljs.core.truth_(inst_32634)){
var statearr_32662_34566 = state_32648__$1;
(statearr_32662_34566[(1)] = (12));

} else {
var statearr_32663_34567 = state_32648__$1;
(statearr_32663_34567[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (3))){
var inst_32646 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32648__$1,inst_32646);
} else {
if((state_val_32649 === (12))){
var inst_32606 = (state_32648[(8)]);
var inst_32636 = cljs.core.vec(inst_32606);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32648__$1,(15),out,inst_32636);
} else {
if((state_val_32649 === (2))){
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32648__$1,(4),ch);
} else {
if((state_val_32649 === (11))){
var inst_32614 = (state_32648[(10)]);
var inst_32610 = (state_32648[(9)]);
var inst_32624 = (state_32648[(2)]);
var inst_32625 = [];
var inst_32626 = inst_32625.push(inst_32610);
var inst_32606 = inst_32625;
var inst_32607 = inst_32614;
var state_32648__$1 = (function (){var statearr_32672 = state_32648;
(statearr_32672[(11)] = inst_32626);

(statearr_32672[(12)] = inst_32624);

(statearr_32672[(7)] = inst_32607);

(statearr_32672[(8)] = inst_32606);

return statearr_32672;
})();
var statearr_32673_34574 = state_32648__$1;
(statearr_32673_34574[(2)] = null);

(statearr_32673_34574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (9))){
var inst_32606 = (state_32648[(8)]);
var inst_32622 = cljs.core.vec(inst_32606);
var state_32648__$1 = state_32648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32648__$1,(11),out,inst_32622);
} else {
if((state_val_32649 === (5))){
var inst_32607 = (state_32648[(7)]);
var inst_32614 = (state_32648[(10)]);
var inst_32610 = (state_32648[(9)]);
var inst_32614__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32610) : f.call(null,inst_32610));
var inst_32615 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32614__$1,inst_32607);
var inst_32616 = cljs.core.keyword_identical_QMARK_(inst_32607,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32617 = ((inst_32615) || (inst_32616));
var state_32648__$1 = (function (){var statearr_32684 = state_32648;
(statearr_32684[(10)] = inst_32614__$1);

return statearr_32684;
})();
if(cljs.core.truth_(inst_32617)){
var statearr_32685_34577 = state_32648__$1;
(statearr_32685_34577[(1)] = (8));

} else {
var statearr_32686_34578 = state_32648__$1;
(statearr_32686_34578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (14))){
var inst_32641 = (state_32648[(2)]);
var inst_32642 = cljs.core.async.close_BANG_(out);
var state_32648__$1 = (function (){var statearr_32688 = state_32648;
(statearr_32688[(13)] = inst_32641);

return statearr_32688;
})();
var statearr_32689_34587 = state_32648__$1;
(statearr_32689_34587[(2)] = inst_32642);

(statearr_32689_34587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (10))){
var inst_32631 = (state_32648[(2)]);
var state_32648__$1 = state_32648;
var statearr_32690_34588 = state_32648__$1;
(statearr_32690_34588[(2)] = inst_32631);

(statearr_32690_34588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32649 === (8))){
var inst_32614 = (state_32648[(10)]);
var inst_32606 = (state_32648[(8)]);
var inst_32610 = (state_32648[(9)]);
var inst_32619 = inst_32606.push(inst_32610);
var tmp32687 = inst_32606;
var inst_32606__$1 = tmp32687;
var inst_32607 = inst_32614;
var state_32648__$1 = (function (){var statearr_32691 = state_32648;
(statearr_32691[(14)] = inst_32619);

(statearr_32691[(7)] = inst_32607);

(statearr_32691[(8)] = inst_32606__$1);

return statearr_32691;
})();
var statearr_32692_34589 = state_32648__$1;
(statearr_32692_34589[(2)] = null);

(statearr_32692_34589[(1)] = (2));


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
});})(c__30275__auto___34548,out))
;
return ((function (switch__30090__auto__,c__30275__auto___34548,out){
return (function() {
var cljs$core$async$state_machine__30091__auto__ = null;
var cljs$core$async$state_machine__30091__auto____0 = (function (){
var statearr_32694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32694[(0)] = cljs$core$async$state_machine__30091__auto__);

(statearr_32694[(1)] = (1));

return statearr_32694;
});
var cljs$core$async$state_machine__30091__auto____1 = (function (state_32648){
while(true){
var ret_value__30092__auto__ = (function (){try{while(true){
var result__30093__auto__ = switch__30090__auto__(state_32648);
if(cljs.core.keyword_identical_QMARK_(result__30093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30093__auto__;
}
break;
}
}catch (e32695){if((e32695 instanceof Object)){
var ex__30094__auto__ = e32695;
var statearr_32696_34592 = state_32648;
(statearr_32696_34592[(5)] = ex__30094__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34593 = state_32648;
state_32648 = G__34593;
continue;
} else {
return ret_value__30092__auto__;
}
break;
}
});
cljs$core$async$state_machine__30091__auto__ = function(state_32648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30091__auto____1.call(this,state_32648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30091__auto____0;
cljs$core$async$state_machine__30091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30091__auto____1;
return cljs$core$async$state_machine__30091__auto__;
})()
;})(switch__30090__auto__,c__30275__auto___34548,out))
})();
var state__30277__auto__ = (function (){var statearr_32701 = (f__30276__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30276__auto__.cljs$core$IFn$_invoke$arity$0() : f__30276__auto__.call(null));
(statearr_32701[(6)] = c__30275__auto___34548);

return statearr_32701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30277__auto__);
});})(c__30275__auto___34548,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
