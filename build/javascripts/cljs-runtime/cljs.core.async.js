goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16321 = arguments.length;
switch (G__16321) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16325 = (function (f,blockable,meta16326){
this.f = f;
this.blockable = blockable;
this.meta16326 = meta16326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16327,meta16326__$1){
var self__ = this;
var _16327__$1 = this;
return (new cljs.core.async.t_cljs$core$async16325(self__.f,self__.blockable,meta16326__$1));
});

cljs.core.async.t_cljs$core$async16325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16327){
var self__ = this;
var _16327__$1 = this;
return self__.meta16326;
});

cljs.core.async.t_cljs$core$async16325.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16325.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16326","meta16326",559235456,null)], null);
});

cljs.core.async.t_cljs$core$async16325.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16325";

cljs.core.async.t_cljs$core$async16325.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16325");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16325.
 */
cljs.core.async.__GT_t_cljs$core$async16325 = (function cljs$core$async$__GT_t_cljs$core$async16325(f__$1,blockable__$1,meta16326){
return (new cljs.core.async.t_cljs$core$async16325(f__$1,blockable__$1,meta16326));
});

}

return (new cljs.core.async.t_cljs$core$async16325(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
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
var G__16361 = arguments.length;
switch (G__16361) {
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
var G__16372 = arguments.length;
switch (G__16372) {
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
var G__16384 = arguments.length;
switch (G__16384) {
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
var val_16391 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16391) : fn1.call(null,val_16391));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16391,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16391) : fn1.call(null,val_16391));
});})(val_16391,ret))
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16420 = arguments.length;
switch (G__16420) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
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
var n__4408__auto___16468 = n;
var x_16472 = (0);
while(true){
if((x_16472 < n__4408__auto___16468)){
(a[x_16472] = (0));

var G__16473 = (x_16472 + (1));
x_16472 = G__16473;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16479 = (i + (1));
i = G__16479;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16483 = (function (flag,meta16484){
this.flag = flag;
this.meta16484 = meta16484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16485,meta16484__$1){
var self__ = this;
var _16485__$1 = this;
return (new cljs.core.async.t_cljs$core$async16483(self__.flag,meta16484__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16485){
var self__ = this;
var _16485__$1 = this;
return self__.meta16484;
});})(flag))
;

cljs.core.async.t_cljs$core$async16483.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16483.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16484","meta16484",519530707,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16483";

cljs.core.async.t_cljs$core$async16483.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16483");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16483.
 */
cljs.core.async.__GT_t_cljs$core$async16483 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16483(flag__$1,meta16484){
return (new cljs.core.async.t_cljs$core$async16483(flag__$1,meta16484));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16483(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16517 = (function (flag,cb,meta16518){
this.flag = flag;
this.cb = cb;
this.meta16518 = meta16518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16519,meta16518__$1){
var self__ = this;
var _16519__$1 = this;
return (new cljs.core.async.t_cljs$core$async16517(self__.flag,self__.cb,meta16518__$1));
});

cljs.core.async.t_cljs$core$async16517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16519){
var self__ = this;
var _16519__$1 = this;
return self__.meta16518;
});

cljs.core.async.t_cljs$core$async16517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16518","meta16518",-1428543177,null)], null);
});

cljs.core.async.t_cljs$core$async16517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16517";

cljs.core.async.t_cljs$core$async16517.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16517");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16517.
 */
cljs.core.async.__GT_t_cljs$core$async16517 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16517(flag__$1,cb__$1,meta16518){
return (new cljs.core.async.t_cljs$core$async16517(flag__$1,cb__$1,meta16518));
});

}

return (new cljs.core.async.t_cljs$core$async16517(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__16537_SHARP_){
var G__16541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16537_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16541) : fret.call(null,G__16541));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16538_SHARP_){
var G__16546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16538_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16546) : fret.call(null,G__16546));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16548 = (i + (1));
i = G__16548;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4534__auto__ = [];
var len__4531__auto___16558 = arguments.length;
var i__4532__auto___16559 = (0);
while(true){
if((i__4532__auto___16559 < len__4531__auto___16558)){
args__4534__auto__.push((arguments[i__4532__auto___16559]));

var G__16560 = (i__4532__auto___16559 + (1));
i__4532__auto___16559 = G__16560;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16555){
var map__16556 = p__16555;
var map__16556__$1 = ((((!((map__16556 == null)))?(((((map__16556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16556):map__16556);
var opts = map__16556__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16550){
var G__16551 = cljs.core.first(seq16550);
var seq16550__$1 = cljs.core.next(seq16550);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16551,seq16550__$1);
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
var G__16563 = arguments.length;
switch (G__16563) {
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
var c__16231__auto___16643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___16643){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___16643){
return (function (state_16590){
var state_val_16592 = (state_16590[(1)]);
if((state_val_16592 === (7))){
var inst_16583 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16602_16644 = state_16590__$1;
(statearr_16602_16644[(2)] = inst_16583);

(statearr_16602_16644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (1))){
var state_16590__$1 = state_16590;
var statearr_16606_16645 = state_16590__$1;
(statearr_16606_16645[(2)] = null);

(statearr_16606_16645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (4))){
var inst_16566 = (state_16590[(7)]);
var inst_16566__$1 = (state_16590[(2)]);
var inst_16567 = (inst_16566__$1 == null);
var state_16590__$1 = (function (){var statearr_16611 = state_16590;
(statearr_16611[(7)] = inst_16566__$1);

return statearr_16611;
})();
if(cljs.core.truth_(inst_16567)){
var statearr_16612_16646 = state_16590__$1;
(statearr_16612_16646[(1)] = (5));

} else {
var statearr_16613_16647 = state_16590__$1;
(statearr_16613_16647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (13))){
var state_16590__$1 = state_16590;
var statearr_16615_16648 = state_16590__$1;
(statearr_16615_16648[(2)] = null);

(statearr_16615_16648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (6))){
var inst_16566 = (state_16590[(7)]);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16590__$1,(11),to,inst_16566);
} else {
if((state_val_16592 === (3))){
var inst_16585 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16590__$1,inst_16585);
} else {
if((state_val_16592 === (12))){
var state_16590__$1 = state_16590;
var statearr_16616_16649 = state_16590__$1;
(statearr_16616_16649[(2)] = null);

(statearr_16616_16649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (2))){
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16590__$1,(4),from);
} else {
if((state_val_16592 === (11))){
var inst_16576 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16576)){
var statearr_16618_16650 = state_16590__$1;
(statearr_16618_16650[(1)] = (12));

} else {
var statearr_16619_16651 = state_16590__$1;
(statearr_16619_16651[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (9))){
var state_16590__$1 = state_16590;
var statearr_16620_16652 = state_16590__$1;
(statearr_16620_16652[(2)] = null);

(statearr_16620_16652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (5))){
var state_16590__$1 = state_16590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16621_16653 = state_16590__$1;
(statearr_16621_16653[(1)] = (8));

} else {
var statearr_16622_16654 = state_16590__$1;
(statearr_16622_16654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (14))){
var inst_16581 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16627_16655 = state_16590__$1;
(statearr_16627_16655[(2)] = inst_16581);

(statearr_16627_16655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (10))){
var inst_16573 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16632_16656 = state_16590__$1;
(statearr_16632_16656[(2)] = inst_16573);

(statearr_16632_16656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (8))){
var inst_16570 = cljs.core.async.close_BANG_(to);
var state_16590__$1 = state_16590;
var statearr_16637_16657 = state_16590__$1;
(statearr_16637_16657[(2)] = inst_16570);

(statearr_16637_16657[(1)] = (10));


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
});})(c__16231__auto___16643))
;
return ((function (switch__15665__auto__,c__16231__auto___16643){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_16638 = [null,null,null,null,null,null,null,null];
(statearr_16638[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_16638[(1)] = (1));

return statearr_16638;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_16590){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_16590);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e16639){if((e16639 instanceof Object)){
var ex__15669__auto__ = e16639;
var statearr_16640_16658 = state_16590;
(statearr_16640_16658[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16659 = state_16590;
state_16590 = G__16659;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_16590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_16590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___16643))
})();
var state__16233__auto__ = (function (){var statearr_16641 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_16641[(6)] = c__16231__auto___16643);

return statearr_16641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___16643))
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
return (function (p__16660){
var vec__16661 = p__16660;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16661,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16661,(1),null);
var job = vec__16661;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16231__auto___16889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___16889,res,vec__16661,v,p,job,jobs,results){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___16889,res,vec__16661,v,p,job,jobs,results){
return (function (state_16668){
var state_val_16669 = (state_16668[(1)]);
if((state_val_16669 === (1))){
var state_16668__$1 = state_16668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16668__$1,(2),res,v);
} else {
if((state_val_16669 === (2))){
var inst_16665 = (state_16668[(2)]);
var inst_16666 = cljs.core.async.close_BANG_(res);
var state_16668__$1 = (function (){var statearr_16670 = state_16668;
(statearr_16670[(7)] = inst_16665);

return statearr_16670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16668__$1,inst_16666);
} else {
return null;
}
}
});})(c__16231__auto___16889,res,vec__16661,v,p,job,jobs,results))
;
return ((function (switch__15665__auto__,c__16231__auto___16889,res,vec__16661,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0 = (function (){
var statearr_16671 = [null,null,null,null,null,null,null,null];
(statearr_16671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__);

(statearr_16671[(1)] = (1));

return statearr_16671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1 = (function (state_16668){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_16668);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e16672){if((e16672 instanceof Object)){
var ex__15669__auto__ = e16672;
var statearr_16673_16890 = state_16668;
(statearr_16673_16890[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16891 = state_16668;
state_16668 = G__16891;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = function(state_16668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1.call(this,state_16668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___16889,res,vec__16661,v,p,job,jobs,results))
})();
var state__16233__auto__ = (function (){var statearr_16674 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_16674[(6)] = c__16231__auto___16889);

return statearr_16674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___16889,res,vec__16661,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16675){
var vec__16676 = p__16675;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16676,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16676,(1),null);
var job = vec__16676;
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
var n__4408__auto___16892 = n;
var __16893 = (0);
while(true){
if((__16893 < n__4408__auto___16892)){
var G__16681_16894 = type;
var G__16681_16895__$1 = (((G__16681_16894 instanceof cljs.core.Keyword))?G__16681_16894.fqn:null);
switch (G__16681_16895__$1) {
case "compute":
var c__16231__auto___16897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16893,c__16231__auto___16897,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (__16893,c__16231__auto___16897,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async){
return (function (state_16696){
var state_val_16697 = (state_16696[(1)]);
if((state_val_16697 === (1))){
var state_16696__$1 = state_16696;
var statearr_16699_16898 = state_16696__$1;
(statearr_16699_16898[(2)] = null);

(statearr_16699_16898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16697 === (2))){
var state_16696__$1 = state_16696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16696__$1,(4),jobs);
} else {
if((state_val_16697 === (3))){
var inst_16694 = (state_16696[(2)]);
var state_16696__$1 = state_16696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16696__$1,inst_16694);
} else {
if((state_val_16697 === (4))){
var inst_16686 = (state_16696[(2)]);
var inst_16687 = process(inst_16686);
var state_16696__$1 = state_16696;
if(cljs.core.truth_(inst_16687)){
var statearr_16702_16899 = state_16696__$1;
(statearr_16702_16899[(1)] = (5));

} else {
var statearr_16703_16900 = state_16696__$1;
(statearr_16703_16900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16697 === (5))){
var state_16696__$1 = state_16696;
var statearr_16704_16901 = state_16696__$1;
(statearr_16704_16901[(2)] = null);

(statearr_16704_16901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16697 === (6))){
var state_16696__$1 = state_16696;
var statearr_16705_16902 = state_16696__$1;
(statearr_16705_16902[(2)] = null);

(statearr_16705_16902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16697 === (7))){
var inst_16692 = (state_16696[(2)]);
var state_16696__$1 = state_16696;
var statearr_16706_16903 = state_16696__$1;
(statearr_16706_16903[(2)] = inst_16692);

(statearr_16706_16903[(1)] = (3));


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
});})(__16893,c__16231__auto___16897,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async))
;
return ((function (__16893,switch__15665__auto__,c__16231__auto___16897,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0 = (function (){
var statearr_16707 = [null,null,null,null,null,null,null];
(statearr_16707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__);

(statearr_16707[(1)] = (1));

return statearr_16707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1 = (function (state_16696){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_16696);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e16708){if((e16708 instanceof Object)){
var ex__15669__auto__ = e16708;
var statearr_16709_16904 = state_16696;
(statearr_16709_16904[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16905 = state_16696;
state_16696 = G__16905;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = function(state_16696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1.call(this,state_16696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__;
})()
;})(__16893,switch__15665__auto__,c__16231__auto___16897,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async))
})();
var state__16233__auto__ = (function (){var statearr_16711 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_16711[(6)] = c__16231__auto___16897);

return statearr_16711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(__16893,c__16231__auto___16897,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async))
);


break;
case "async":
var c__16231__auto___16906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16893,c__16231__auto___16906,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (__16893,c__16231__auto___16906,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async){
return (function (state_16725){
var state_val_16726 = (state_16725[(1)]);
if((state_val_16726 === (1))){
var state_16725__$1 = state_16725;
var statearr_16731_16907 = state_16725__$1;
(statearr_16731_16907[(2)] = null);

(statearr_16731_16907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16726 === (2))){
var state_16725__$1 = state_16725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16725__$1,(4),jobs);
} else {
if((state_val_16726 === (3))){
var inst_16723 = (state_16725[(2)]);
var state_16725__$1 = state_16725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16725__$1,inst_16723);
} else {
if((state_val_16726 === (4))){
var inst_16715 = (state_16725[(2)]);
var inst_16716 = async(inst_16715);
var state_16725__$1 = state_16725;
if(cljs.core.truth_(inst_16716)){
var statearr_16734_16908 = state_16725__$1;
(statearr_16734_16908[(1)] = (5));

} else {
var statearr_16735_16909 = state_16725__$1;
(statearr_16735_16909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16726 === (5))){
var state_16725__$1 = state_16725;
var statearr_16736_16910 = state_16725__$1;
(statearr_16736_16910[(2)] = null);

(statearr_16736_16910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16726 === (6))){
var state_16725__$1 = state_16725;
var statearr_16737_16911 = state_16725__$1;
(statearr_16737_16911[(2)] = null);

(statearr_16737_16911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16726 === (7))){
var inst_16721 = (state_16725[(2)]);
var state_16725__$1 = state_16725;
var statearr_16739_16912 = state_16725__$1;
(statearr_16739_16912[(2)] = inst_16721);

(statearr_16739_16912[(1)] = (3));


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
});})(__16893,c__16231__auto___16906,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async))
;
return ((function (__16893,switch__15665__auto__,c__16231__auto___16906,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0 = (function (){
var statearr_16741 = [null,null,null,null,null,null,null];
(statearr_16741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__);

(statearr_16741[(1)] = (1));

return statearr_16741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1 = (function (state_16725){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_16725);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e16742){if((e16742 instanceof Object)){
var ex__15669__auto__ = e16742;
var statearr_16743_16913 = state_16725;
(statearr_16743_16913[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16914 = state_16725;
state_16725 = G__16914;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = function(state_16725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1.call(this,state_16725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__;
})()
;})(__16893,switch__15665__auto__,c__16231__auto___16906,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async))
})();
var state__16233__auto__ = (function (){var statearr_16744 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_16744[(6)] = c__16231__auto___16906);

return statearr_16744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(__16893,c__16231__auto___16906,G__16681_16894,G__16681_16895__$1,n__4408__auto___16892,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16681_16895__$1)].join('')));

}

var G__16915 = (__16893 + (1));
__16893 = G__16915;
continue;
} else {
}
break;
}

var c__16231__auto___16916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___16916,jobs,results,process,async){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___16916,jobs,results,process,async){
return (function (state_16772){
var state_val_16773 = (state_16772[(1)]);
if((state_val_16773 === (1))){
var state_16772__$1 = state_16772;
var statearr_16775_16917 = state_16772__$1;
(statearr_16775_16917[(2)] = null);

(statearr_16775_16917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (2))){
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16772__$1,(4),from);
} else {
if((state_val_16773 === (3))){
var inst_16769 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16772__$1,inst_16769);
} else {
if((state_val_16773 === (4))){
var inst_16749 = (state_16772[(7)]);
var inst_16749__$1 = (state_16772[(2)]);
var inst_16750 = (inst_16749__$1 == null);
var state_16772__$1 = (function (){var statearr_16776 = state_16772;
(statearr_16776[(7)] = inst_16749__$1);

return statearr_16776;
})();
if(cljs.core.truth_(inst_16750)){
var statearr_16777_16918 = state_16772__$1;
(statearr_16777_16918[(1)] = (5));

} else {
var statearr_16778_16919 = state_16772__$1;
(statearr_16778_16919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (5))){
var inst_16753 = cljs.core.async.close_BANG_(jobs);
var state_16772__$1 = state_16772;
var statearr_16779_16920 = state_16772__$1;
(statearr_16779_16920[(2)] = inst_16753);

(statearr_16779_16920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (6))){
var inst_16749 = (state_16772[(7)]);
var inst_16756 = (state_16772[(8)]);
var inst_16756__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16759 = [inst_16749,inst_16756__$1];
var inst_16760 = (new cljs.core.PersistentVector(null,2,(5),inst_16758,inst_16759,null));
var state_16772__$1 = (function (){var statearr_16780 = state_16772;
(statearr_16780[(8)] = inst_16756__$1);

return statearr_16780;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16772__$1,(8),jobs,inst_16760);
} else {
if((state_val_16773 === (7))){
var inst_16767 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16782_16921 = state_16772__$1;
(statearr_16782_16921[(2)] = inst_16767);

(statearr_16782_16921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (8))){
var inst_16756 = (state_16772[(8)]);
var inst_16762 = (state_16772[(2)]);
var state_16772__$1 = (function (){var statearr_16788 = state_16772;
(statearr_16788[(9)] = inst_16762);

return statearr_16788;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16772__$1,(9),results,inst_16756);
} else {
if((state_val_16773 === (9))){
var inst_16764 = (state_16772[(2)]);
var state_16772__$1 = (function (){var statearr_16789 = state_16772;
(statearr_16789[(10)] = inst_16764);

return statearr_16789;
})();
var statearr_16790_16922 = state_16772__$1;
(statearr_16790_16922[(2)] = null);

(statearr_16790_16922[(1)] = (2));


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
});})(c__16231__auto___16916,jobs,results,process,async))
;
return ((function (switch__15665__auto__,c__16231__auto___16916,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0 = (function (){
var statearr_16791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__);

(statearr_16791[(1)] = (1));

return statearr_16791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1 = (function (state_16772){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_16772);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e16794){if((e16794 instanceof Object)){
var ex__15669__auto__ = e16794;
var statearr_16795_16923 = state_16772;
(statearr_16795_16923[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16924 = state_16772;
state_16772 = G__16924;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = function(state_16772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1.call(this,state_16772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___16916,jobs,results,process,async))
})();
var state__16233__auto__ = (function (){var statearr_16798 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_16798[(6)] = c__16231__auto___16916);

return statearr_16798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___16916,jobs,results,process,async))
);


var c__16231__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto__,jobs,results,process,async){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto__,jobs,results,process,async){
return (function (state_16839){
var state_val_16840 = (state_16839[(1)]);
if((state_val_16840 === (7))){
var inst_16835 = (state_16839[(2)]);
var state_16839__$1 = state_16839;
var statearr_16842_16925 = state_16839__$1;
(statearr_16842_16925[(2)] = inst_16835);

(statearr_16842_16925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (20))){
var state_16839__$1 = state_16839;
var statearr_16843_16926 = state_16839__$1;
(statearr_16843_16926[(2)] = null);

(statearr_16843_16926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (1))){
var state_16839__$1 = state_16839;
var statearr_16844_16927 = state_16839__$1;
(statearr_16844_16927[(2)] = null);

(statearr_16844_16927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (4))){
var inst_16801 = (state_16839[(7)]);
var inst_16801__$1 = (state_16839[(2)]);
var inst_16802 = (inst_16801__$1 == null);
var state_16839__$1 = (function (){var statearr_16845 = state_16839;
(statearr_16845[(7)] = inst_16801__$1);

return statearr_16845;
})();
if(cljs.core.truth_(inst_16802)){
var statearr_16846_16928 = state_16839__$1;
(statearr_16846_16928[(1)] = (5));

} else {
var statearr_16847_16929 = state_16839__$1;
(statearr_16847_16929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (15))){
var inst_16817 = (state_16839[(8)]);
var state_16839__$1 = state_16839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16839__$1,(18),to,inst_16817);
} else {
if((state_val_16840 === (21))){
var inst_16830 = (state_16839[(2)]);
var state_16839__$1 = state_16839;
var statearr_16848_16930 = state_16839__$1;
(statearr_16848_16930[(2)] = inst_16830);

(statearr_16848_16930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (13))){
var inst_16832 = (state_16839[(2)]);
var state_16839__$1 = (function (){var statearr_16849 = state_16839;
(statearr_16849[(9)] = inst_16832);

return statearr_16849;
})();
var statearr_16850_16931 = state_16839__$1;
(statearr_16850_16931[(2)] = null);

(statearr_16850_16931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (6))){
var inst_16801 = (state_16839[(7)]);
var state_16839__$1 = state_16839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16839__$1,(11),inst_16801);
} else {
if((state_val_16840 === (17))){
var inst_16825 = (state_16839[(2)]);
var state_16839__$1 = state_16839;
if(cljs.core.truth_(inst_16825)){
var statearr_16851_16932 = state_16839__$1;
(statearr_16851_16932[(1)] = (19));

} else {
var statearr_16852_16933 = state_16839__$1;
(statearr_16852_16933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (3))){
var inst_16837 = (state_16839[(2)]);
var state_16839__$1 = state_16839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16839__$1,inst_16837);
} else {
if((state_val_16840 === (12))){
var inst_16812 = (state_16839[(10)]);
var state_16839__$1 = state_16839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16839__$1,(14),inst_16812);
} else {
if((state_val_16840 === (2))){
var state_16839__$1 = state_16839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16839__$1,(4),results);
} else {
if((state_val_16840 === (19))){
var state_16839__$1 = state_16839;
var statearr_16860_16934 = state_16839__$1;
(statearr_16860_16934[(2)] = null);

(statearr_16860_16934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (11))){
var inst_16812 = (state_16839[(2)]);
var state_16839__$1 = (function (){var statearr_16861 = state_16839;
(statearr_16861[(10)] = inst_16812);

return statearr_16861;
})();
var statearr_16862_16935 = state_16839__$1;
(statearr_16862_16935[(2)] = null);

(statearr_16862_16935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (9))){
var state_16839__$1 = state_16839;
var statearr_16863_16936 = state_16839__$1;
(statearr_16863_16936[(2)] = null);

(statearr_16863_16936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (5))){
var state_16839__$1 = state_16839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16864_16937 = state_16839__$1;
(statearr_16864_16937[(1)] = (8));

} else {
var statearr_16865_16938 = state_16839__$1;
(statearr_16865_16938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (14))){
var inst_16817 = (state_16839[(8)]);
var inst_16819 = (state_16839[(11)]);
var inst_16817__$1 = (state_16839[(2)]);
var inst_16818 = (inst_16817__$1 == null);
var inst_16819__$1 = cljs.core.not(inst_16818);
var state_16839__$1 = (function (){var statearr_16866 = state_16839;
(statearr_16866[(8)] = inst_16817__$1);

(statearr_16866[(11)] = inst_16819__$1);

return statearr_16866;
})();
if(inst_16819__$1){
var statearr_16867_16939 = state_16839__$1;
(statearr_16867_16939[(1)] = (15));

} else {
var statearr_16868_16940 = state_16839__$1;
(statearr_16868_16940[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (16))){
var inst_16819 = (state_16839[(11)]);
var state_16839__$1 = state_16839;
var statearr_16869_16941 = state_16839__$1;
(statearr_16869_16941[(2)] = inst_16819);

(statearr_16869_16941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (10))){
var inst_16808 = (state_16839[(2)]);
var state_16839__$1 = state_16839;
var statearr_16874_16942 = state_16839__$1;
(statearr_16874_16942[(2)] = inst_16808);

(statearr_16874_16942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (18))){
var inst_16822 = (state_16839[(2)]);
var state_16839__$1 = state_16839;
var statearr_16879_16943 = state_16839__$1;
(statearr_16879_16943[(2)] = inst_16822);

(statearr_16879_16943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16840 === (8))){
var inst_16805 = cljs.core.async.close_BANG_(to);
var state_16839__$1 = state_16839;
var statearr_16884_16944 = state_16839__$1;
(statearr_16884_16944[(2)] = inst_16805);

(statearr_16884_16944[(1)] = (10));


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
});})(c__16231__auto__,jobs,results,process,async))
;
return ((function (switch__15665__auto__,c__16231__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0 = (function (){
var statearr_16885 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__);

(statearr_16885[(1)] = (1));

return statearr_16885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1 = (function (state_16839){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_16839);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e16886){if((e16886 instanceof Object)){
var ex__15669__auto__ = e16886;
var statearr_16887_16945 = state_16839;
(statearr_16887_16945[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16946 = state_16839;
state_16839 = G__16946;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__ = function(state_16839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1.call(this,state_16839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15666__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto__,jobs,results,process,async))
})();
var state__16233__auto__ = (function (){var statearr_16888 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_16888[(6)] = c__16231__auto__);

return statearr_16888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto__,jobs,results,process,async))
);

return c__16231__auto__;
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
var G__16948 = arguments.length;
switch (G__16948) {
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
var G__16951 = arguments.length;
switch (G__16951) {
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
var G__16954 = arguments.length;
switch (G__16954) {
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
var c__16231__auto___17003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___17003,tc,fc){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___17003,tc,fc){
return (function (state_16980){
var state_val_16981 = (state_16980[(1)]);
if((state_val_16981 === (7))){
var inst_16976 = (state_16980[(2)]);
var state_16980__$1 = state_16980;
var statearr_16982_17004 = state_16980__$1;
(statearr_16982_17004[(2)] = inst_16976);

(statearr_16982_17004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (1))){
var state_16980__$1 = state_16980;
var statearr_16983_17005 = state_16980__$1;
(statearr_16983_17005[(2)] = null);

(statearr_16983_17005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (4))){
var inst_16957 = (state_16980[(7)]);
var inst_16957__$1 = (state_16980[(2)]);
var inst_16958 = (inst_16957__$1 == null);
var state_16980__$1 = (function (){var statearr_16984 = state_16980;
(statearr_16984[(7)] = inst_16957__$1);

return statearr_16984;
})();
if(cljs.core.truth_(inst_16958)){
var statearr_16985_17006 = state_16980__$1;
(statearr_16985_17006[(1)] = (5));

} else {
var statearr_16986_17007 = state_16980__$1;
(statearr_16986_17007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (13))){
var state_16980__$1 = state_16980;
var statearr_16987_17008 = state_16980__$1;
(statearr_16987_17008[(2)] = null);

(statearr_16987_17008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (6))){
var inst_16957 = (state_16980[(7)]);
var inst_16963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16957) : p.call(null,inst_16957));
var state_16980__$1 = state_16980;
if(cljs.core.truth_(inst_16963)){
var statearr_16988_17009 = state_16980__$1;
(statearr_16988_17009[(1)] = (9));

} else {
var statearr_16989_17010 = state_16980__$1;
(statearr_16989_17010[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (3))){
var inst_16978 = (state_16980[(2)]);
var state_16980__$1 = state_16980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16980__$1,inst_16978);
} else {
if((state_val_16981 === (12))){
var state_16980__$1 = state_16980;
var statearr_16990_17011 = state_16980__$1;
(statearr_16990_17011[(2)] = null);

(statearr_16990_17011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (2))){
var state_16980__$1 = state_16980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16980__$1,(4),ch);
} else {
if((state_val_16981 === (11))){
var inst_16957 = (state_16980[(7)]);
var inst_16967 = (state_16980[(2)]);
var state_16980__$1 = state_16980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16980__$1,(8),inst_16967,inst_16957);
} else {
if((state_val_16981 === (9))){
var state_16980__$1 = state_16980;
var statearr_16991_17012 = state_16980__$1;
(statearr_16991_17012[(2)] = tc);

(statearr_16991_17012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (5))){
var inst_16960 = cljs.core.async.close_BANG_(tc);
var inst_16961 = cljs.core.async.close_BANG_(fc);
var state_16980__$1 = (function (){var statearr_16992 = state_16980;
(statearr_16992[(8)] = inst_16960);

return statearr_16992;
})();
var statearr_16993_17013 = state_16980__$1;
(statearr_16993_17013[(2)] = inst_16961);

(statearr_16993_17013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (14))){
var inst_16974 = (state_16980[(2)]);
var state_16980__$1 = state_16980;
var statearr_16994_17014 = state_16980__$1;
(statearr_16994_17014[(2)] = inst_16974);

(statearr_16994_17014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (10))){
var state_16980__$1 = state_16980;
var statearr_16995_17015 = state_16980__$1;
(statearr_16995_17015[(2)] = fc);

(statearr_16995_17015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16981 === (8))){
var inst_16969 = (state_16980[(2)]);
var state_16980__$1 = state_16980;
if(cljs.core.truth_(inst_16969)){
var statearr_16996_17016 = state_16980__$1;
(statearr_16996_17016[(1)] = (12));

} else {
var statearr_16997_17017 = state_16980__$1;
(statearr_16997_17017[(1)] = (13));

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
});})(c__16231__auto___17003,tc,fc))
;
return ((function (switch__15665__auto__,c__16231__auto___17003,tc,fc){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_16998 = [null,null,null,null,null,null,null,null,null];
(statearr_16998[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_16998[(1)] = (1));

return statearr_16998;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_16980){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_16980);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e16999){if((e16999 instanceof Object)){
var ex__15669__auto__ = e16999;
var statearr_17000_17018 = state_16980;
(statearr_17000_17018[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17019 = state_16980;
state_16980 = G__17019;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_16980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_16980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___17003,tc,fc))
})();
var state__16233__auto__ = (function (){var statearr_17001 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_17001[(6)] = c__16231__auto___17003);

return statearr_17001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___17003,tc,fc))
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
var c__16231__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto__){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto__){
return (function (state_17040){
var state_val_17041 = (state_17040[(1)]);
if((state_val_17041 === (7))){
var inst_17036 = (state_17040[(2)]);
var state_17040__$1 = state_17040;
var statearr_17042_17060 = state_17040__$1;
(statearr_17042_17060[(2)] = inst_17036);

(statearr_17042_17060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (1))){
var inst_17020 = init;
var state_17040__$1 = (function (){var statearr_17043 = state_17040;
(statearr_17043[(7)] = inst_17020);

return statearr_17043;
})();
var statearr_17044_17061 = state_17040__$1;
(statearr_17044_17061[(2)] = null);

(statearr_17044_17061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (4))){
var inst_17023 = (state_17040[(8)]);
var inst_17023__$1 = (state_17040[(2)]);
var inst_17024 = (inst_17023__$1 == null);
var state_17040__$1 = (function (){var statearr_17045 = state_17040;
(statearr_17045[(8)] = inst_17023__$1);

return statearr_17045;
})();
if(cljs.core.truth_(inst_17024)){
var statearr_17046_17062 = state_17040__$1;
(statearr_17046_17062[(1)] = (5));

} else {
var statearr_17047_17063 = state_17040__$1;
(statearr_17047_17063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (6))){
var inst_17023 = (state_17040[(8)]);
var inst_17027 = (state_17040[(9)]);
var inst_17020 = (state_17040[(7)]);
var inst_17027__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17020,inst_17023) : f.call(null,inst_17020,inst_17023));
var inst_17028 = cljs.core.reduced_QMARK_(inst_17027__$1);
var state_17040__$1 = (function (){var statearr_17048 = state_17040;
(statearr_17048[(9)] = inst_17027__$1);

return statearr_17048;
})();
if(inst_17028){
var statearr_17049_17064 = state_17040__$1;
(statearr_17049_17064[(1)] = (8));

} else {
var statearr_17050_17065 = state_17040__$1;
(statearr_17050_17065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (3))){
var inst_17038 = (state_17040[(2)]);
var state_17040__$1 = state_17040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17040__$1,inst_17038);
} else {
if((state_val_17041 === (2))){
var state_17040__$1 = state_17040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17040__$1,(4),ch);
} else {
if((state_val_17041 === (9))){
var inst_17027 = (state_17040[(9)]);
var inst_17020 = inst_17027;
var state_17040__$1 = (function (){var statearr_17051 = state_17040;
(statearr_17051[(7)] = inst_17020);

return statearr_17051;
})();
var statearr_17052_17066 = state_17040__$1;
(statearr_17052_17066[(2)] = null);

(statearr_17052_17066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (5))){
var inst_17020 = (state_17040[(7)]);
var state_17040__$1 = state_17040;
var statearr_17053_17067 = state_17040__$1;
(statearr_17053_17067[(2)] = inst_17020);

(statearr_17053_17067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (10))){
var inst_17034 = (state_17040[(2)]);
var state_17040__$1 = state_17040;
var statearr_17054_17068 = state_17040__$1;
(statearr_17054_17068[(2)] = inst_17034);

(statearr_17054_17068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17041 === (8))){
var inst_17027 = (state_17040[(9)]);
var inst_17030 = cljs.core.deref(inst_17027);
var state_17040__$1 = state_17040;
var statearr_17055_17069 = state_17040__$1;
(statearr_17055_17069[(2)] = inst_17030);

(statearr_17055_17069[(1)] = (10));


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
});})(c__16231__auto__))
;
return ((function (switch__15665__auto__,c__16231__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15666__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15666__auto____0 = (function (){
var statearr_17056 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17056[(0)] = cljs$core$async$reduce_$_state_machine__15666__auto__);

(statearr_17056[(1)] = (1));

return statearr_17056;
});
var cljs$core$async$reduce_$_state_machine__15666__auto____1 = (function (state_17040){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_17040);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e17057){if((e17057 instanceof Object)){
var ex__15669__auto__ = e17057;
var statearr_17058_17070 = state_17040;
(statearr_17058_17070[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17071 = state_17040;
state_17040 = G__17071;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15666__auto__ = function(state_17040){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15666__auto____1.call(this,state_17040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15666__auto____0;
cljs$core$async$reduce_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15666__auto____1;
return cljs$core$async$reduce_$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto__))
})();
var state__16233__auto__ = (function (){var statearr_17059 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_17059[(6)] = c__16231__auto__);

return statearr_17059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto__))
);

return c__16231__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16231__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto__,f__$1){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto__,f__$1){
return (function (state_17077){
var state_val_17078 = (state_17077[(1)]);
if((state_val_17078 === (1))){
var inst_17072 = cljs.core.async.reduce(f__$1,init,ch);
var state_17077__$1 = state_17077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17077__$1,(2),inst_17072);
} else {
if((state_val_17078 === (2))){
var inst_17074 = (state_17077[(2)]);
var inst_17075 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17074) : f__$1.call(null,inst_17074));
var state_17077__$1 = state_17077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17077__$1,inst_17075);
} else {
return null;
}
}
});})(c__16231__auto__,f__$1))
;
return ((function (switch__15665__auto__,c__16231__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15666__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15666__auto____0 = (function (){
var statearr_17079 = [null,null,null,null,null,null,null];
(statearr_17079[(0)] = cljs$core$async$transduce_$_state_machine__15666__auto__);

(statearr_17079[(1)] = (1));

return statearr_17079;
});
var cljs$core$async$transduce_$_state_machine__15666__auto____1 = (function (state_17077){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_17077);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e17080){if((e17080 instanceof Object)){
var ex__15669__auto__ = e17080;
var statearr_17081_17083 = state_17077;
(statearr_17081_17083[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17080;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17084 = state_17077;
state_17077 = G__17084;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15666__auto__ = function(state_17077){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15666__auto____1.call(this,state_17077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15666__auto____0;
cljs$core$async$transduce_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15666__auto____1;
return cljs$core$async$transduce_$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto__,f__$1))
})();
var state__16233__auto__ = (function (){var statearr_17082 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_17082[(6)] = c__16231__auto__);

return statearr_17082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto__,f__$1))
);

return c__16231__auto__;
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
var G__17086 = arguments.length;
switch (G__17086) {
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
var c__16231__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto__){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto__){
return (function (state_17111){
var state_val_17112 = (state_17111[(1)]);
if((state_val_17112 === (7))){
var inst_17093 = (state_17111[(2)]);
var state_17111__$1 = state_17111;
var statearr_17113_17134 = state_17111__$1;
(statearr_17113_17134[(2)] = inst_17093);

(statearr_17113_17134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (1))){
var inst_17087 = cljs.core.seq(coll);
var inst_17088 = inst_17087;
var state_17111__$1 = (function (){var statearr_17114 = state_17111;
(statearr_17114[(7)] = inst_17088);

return statearr_17114;
})();
var statearr_17115_17135 = state_17111__$1;
(statearr_17115_17135[(2)] = null);

(statearr_17115_17135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (4))){
var inst_17088 = (state_17111[(7)]);
var inst_17091 = cljs.core.first(inst_17088);
var state_17111__$1 = state_17111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17111__$1,(7),ch,inst_17091);
} else {
if((state_val_17112 === (13))){
var inst_17105 = (state_17111[(2)]);
var state_17111__$1 = state_17111;
var statearr_17116_17136 = state_17111__$1;
(statearr_17116_17136[(2)] = inst_17105);

(statearr_17116_17136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (6))){
var inst_17096 = (state_17111[(2)]);
var state_17111__$1 = state_17111;
if(cljs.core.truth_(inst_17096)){
var statearr_17117_17137 = state_17111__$1;
(statearr_17117_17137[(1)] = (8));

} else {
var statearr_17118_17138 = state_17111__$1;
(statearr_17118_17138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (3))){
var inst_17109 = (state_17111[(2)]);
var state_17111__$1 = state_17111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17111__$1,inst_17109);
} else {
if((state_val_17112 === (12))){
var state_17111__$1 = state_17111;
var statearr_17119_17139 = state_17111__$1;
(statearr_17119_17139[(2)] = null);

(statearr_17119_17139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (2))){
var inst_17088 = (state_17111[(7)]);
var state_17111__$1 = state_17111;
if(cljs.core.truth_(inst_17088)){
var statearr_17120_17140 = state_17111__$1;
(statearr_17120_17140[(1)] = (4));

} else {
var statearr_17121_17141 = state_17111__$1;
(statearr_17121_17141[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (11))){
var inst_17102 = cljs.core.async.close_BANG_(ch);
var state_17111__$1 = state_17111;
var statearr_17122_17142 = state_17111__$1;
(statearr_17122_17142[(2)] = inst_17102);

(statearr_17122_17142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (9))){
var state_17111__$1 = state_17111;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17123_17143 = state_17111__$1;
(statearr_17123_17143[(1)] = (11));

} else {
var statearr_17124_17144 = state_17111__$1;
(statearr_17124_17144[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (5))){
var inst_17088 = (state_17111[(7)]);
var state_17111__$1 = state_17111;
var statearr_17125_17145 = state_17111__$1;
(statearr_17125_17145[(2)] = inst_17088);

(statearr_17125_17145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (10))){
var inst_17107 = (state_17111[(2)]);
var state_17111__$1 = state_17111;
var statearr_17126_17146 = state_17111__$1;
(statearr_17126_17146[(2)] = inst_17107);

(statearr_17126_17146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17112 === (8))){
var inst_17088 = (state_17111[(7)]);
var inst_17098 = cljs.core.next(inst_17088);
var inst_17088__$1 = inst_17098;
var state_17111__$1 = (function (){var statearr_17127 = state_17111;
(statearr_17127[(7)] = inst_17088__$1);

return statearr_17127;
})();
var statearr_17128_17147 = state_17111__$1;
(statearr_17128_17147[(2)] = null);

(statearr_17128_17147[(1)] = (2));


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
});})(c__16231__auto__))
;
return ((function (switch__15665__auto__,c__16231__auto__){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_17129 = [null,null,null,null,null,null,null,null];
(statearr_17129[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_17129[(1)] = (1));

return statearr_17129;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_17111){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_17111);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e17130){if((e17130 instanceof Object)){
var ex__15669__auto__ = e17130;
var statearr_17131_17148 = state_17111;
(statearr_17131_17148[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17149 = state_17111;
state_17111 = G__17149;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_17111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_17111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto__))
})();
var state__16233__auto__ = (function (){var statearr_17132 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_17132[(6)] = c__16231__auto__);

return statearr_17132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto__))
);

return c__16231__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17150 = (function (ch,cs,meta17151){
this.ch = ch;
this.cs = cs;
this.meta17151 = meta17151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17152,meta17151__$1){
var self__ = this;
var _17152__$1 = this;
return (new cljs.core.async.t_cljs$core$async17150(self__.ch,self__.cs,meta17151__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17152){
var self__ = this;
var _17152__$1 = this;
return self__.meta17151;
});})(cs))
;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17150.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17150.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17151","meta17151",1809900323,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17150";

cljs.core.async.t_cljs$core$async17150.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17150");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17150.
 */
cljs.core.async.__GT_t_cljs$core$async17150 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17150(ch__$1,cs__$1,meta17151){
return (new cljs.core.async.t_cljs$core$async17150(ch__$1,cs__$1,meta17151));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17150(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16231__auto___17372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___17372,cs,m,dchan,dctr,done){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___17372,cs,m,dchan,dctr,done){
return (function (state_17287){
var state_val_17288 = (state_17287[(1)]);
if((state_val_17288 === (7))){
var inst_17283 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17289_17373 = state_17287__$1;
(statearr_17289_17373[(2)] = inst_17283);

(statearr_17289_17373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (20))){
var inst_17186 = (state_17287[(7)]);
var inst_17198 = cljs.core.first(inst_17186);
var inst_17199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17198,(0),null);
var inst_17200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17198,(1),null);
var state_17287__$1 = (function (){var statearr_17290 = state_17287;
(statearr_17290[(8)] = inst_17199);

return statearr_17290;
})();
if(cljs.core.truth_(inst_17200)){
var statearr_17291_17374 = state_17287__$1;
(statearr_17291_17374[(1)] = (22));

} else {
var statearr_17292_17375 = state_17287__$1;
(statearr_17292_17375[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (27))){
var inst_17235 = (state_17287[(9)]);
var inst_17228 = (state_17287[(10)]);
var inst_17155 = (state_17287[(11)]);
var inst_17230 = (state_17287[(12)]);
var inst_17235__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17228,inst_17230);
var inst_17236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17235__$1,inst_17155,done);
var state_17287__$1 = (function (){var statearr_17293 = state_17287;
(statearr_17293[(9)] = inst_17235__$1);

return statearr_17293;
})();
if(cljs.core.truth_(inst_17236)){
var statearr_17294_17376 = state_17287__$1;
(statearr_17294_17376[(1)] = (30));

} else {
var statearr_17295_17377 = state_17287__$1;
(statearr_17295_17377[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (1))){
var state_17287__$1 = state_17287;
var statearr_17296_17378 = state_17287__$1;
(statearr_17296_17378[(2)] = null);

(statearr_17296_17378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (24))){
var inst_17186 = (state_17287[(7)]);
var inst_17205 = (state_17287[(2)]);
var inst_17206 = cljs.core.next(inst_17186);
var inst_17164 = inst_17206;
var inst_17165 = null;
var inst_17166 = (0);
var inst_17167 = (0);
var state_17287__$1 = (function (){var statearr_17297 = state_17287;
(statearr_17297[(13)] = inst_17165);

(statearr_17297[(14)] = inst_17166);

(statearr_17297[(15)] = inst_17167);

(statearr_17297[(16)] = inst_17164);

(statearr_17297[(17)] = inst_17205);

return statearr_17297;
})();
var statearr_17298_17379 = state_17287__$1;
(statearr_17298_17379[(2)] = null);

(statearr_17298_17379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (39))){
var state_17287__$1 = state_17287;
var statearr_17302_17380 = state_17287__$1;
(statearr_17302_17380[(2)] = null);

(statearr_17302_17380[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (4))){
var inst_17155 = (state_17287[(11)]);
var inst_17155__$1 = (state_17287[(2)]);
var inst_17156 = (inst_17155__$1 == null);
var state_17287__$1 = (function (){var statearr_17303 = state_17287;
(statearr_17303[(11)] = inst_17155__$1);

return statearr_17303;
})();
if(cljs.core.truth_(inst_17156)){
var statearr_17304_17381 = state_17287__$1;
(statearr_17304_17381[(1)] = (5));

} else {
var statearr_17305_17382 = state_17287__$1;
(statearr_17305_17382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (15))){
var inst_17165 = (state_17287[(13)]);
var inst_17166 = (state_17287[(14)]);
var inst_17167 = (state_17287[(15)]);
var inst_17164 = (state_17287[(16)]);
var inst_17182 = (state_17287[(2)]);
var inst_17183 = (inst_17167 + (1));
var tmp17299 = inst_17165;
var tmp17300 = inst_17166;
var tmp17301 = inst_17164;
var inst_17164__$1 = tmp17301;
var inst_17165__$1 = tmp17299;
var inst_17166__$1 = tmp17300;
var inst_17167__$1 = inst_17183;
var state_17287__$1 = (function (){var statearr_17306 = state_17287;
(statearr_17306[(13)] = inst_17165__$1);

(statearr_17306[(14)] = inst_17166__$1);

(statearr_17306[(15)] = inst_17167__$1);

(statearr_17306[(18)] = inst_17182);

(statearr_17306[(16)] = inst_17164__$1);

return statearr_17306;
})();
var statearr_17307_17383 = state_17287__$1;
(statearr_17307_17383[(2)] = null);

(statearr_17307_17383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (21))){
var inst_17209 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17311_17384 = state_17287__$1;
(statearr_17311_17384[(2)] = inst_17209);

(statearr_17311_17384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (31))){
var inst_17235 = (state_17287[(9)]);
var inst_17239 = done(null);
var inst_17240 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17235);
var state_17287__$1 = (function (){var statearr_17312 = state_17287;
(statearr_17312[(19)] = inst_17239);

return statearr_17312;
})();
var statearr_17313_17385 = state_17287__$1;
(statearr_17313_17385[(2)] = inst_17240);

(statearr_17313_17385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (32))){
var inst_17227 = (state_17287[(20)]);
var inst_17229 = (state_17287[(21)]);
var inst_17228 = (state_17287[(10)]);
var inst_17230 = (state_17287[(12)]);
var inst_17242 = (state_17287[(2)]);
var inst_17243 = (inst_17230 + (1));
var tmp17308 = inst_17227;
var tmp17309 = inst_17229;
var tmp17310 = inst_17228;
var inst_17227__$1 = tmp17308;
var inst_17228__$1 = tmp17310;
var inst_17229__$1 = tmp17309;
var inst_17230__$1 = inst_17243;
var state_17287__$1 = (function (){var statearr_17314 = state_17287;
(statearr_17314[(20)] = inst_17227__$1);

(statearr_17314[(21)] = inst_17229__$1);

(statearr_17314[(10)] = inst_17228__$1);

(statearr_17314[(22)] = inst_17242);

(statearr_17314[(12)] = inst_17230__$1);

return statearr_17314;
})();
var statearr_17315_17386 = state_17287__$1;
(statearr_17315_17386[(2)] = null);

(statearr_17315_17386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (40))){
var inst_17255 = (state_17287[(23)]);
var inst_17259 = done(null);
var inst_17260 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17255);
var state_17287__$1 = (function (){var statearr_17316 = state_17287;
(statearr_17316[(24)] = inst_17259);

return statearr_17316;
})();
var statearr_17317_17387 = state_17287__$1;
(statearr_17317_17387[(2)] = inst_17260);

(statearr_17317_17387[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (33))){
var inst_17246 = (state_17287[(25)]);
var inst_17248 = cljs.core.chunked_seq_QMARK_(inst_17246);
var state_17287__$1 = state_17287;
if(inst_17248){
var statearr_17318_17388 = state_17287__$1;
(statearr_17318_17388[(1)] = (36));

} else {
var statearr_17319_17389 = state_17287__$1;
(statearr_17319_17389[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (13))){
var inst_17176 = (state_17287[(26)]);
var inst_17179 = cljs.core.async.close_BANG_(inst_17176);
var state_17287__$1 = state_17287;
var statearr_17320_17390 = state_17287__$1;
(statearr_17320_17390[(2)] = inst_17179);

(statearr_17320_17390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (22))){
var inst_17199 = (state_17287[(8)]);
var inst_17202 = cljs.core.async.close_BANG_(inst_17199);
var state_17287__$1 = state_17287;
var statearr_17321_17391 = state_17287__$1;
(statearr_17321_17391[(2)] = inst_17202);

(statearr_17321_17391[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (36))){
var inst_17246 = (state_17287[(25)]);
var inst_17250 = cljs.core.chunk_first(inst_17246);
var inst_17251 = cljs.core.chunk_rest(inst_17246);
var inst_17252 = cljs.core.count(inst_17250);
var inst_17227 = inst_17251;
var inst_17228 = inst_17250;
var inst_17229 = inst_17252;
var inst_17230 = (0);
var state_17287__$1 = (function (){var statearr_17322 = state_17287;
(statearr_17322[(20)] = inst_17227);

(statearr_17322[(21)] = inst_17229);

(statearr_17322[(10)] = inst_17228);

(statearr_17322[(12)] = inst_17230);

return statearr_17322;
})();
var statearr_17323_17392 = state_17287__$1;
(statearr_17323_17392[(2)] = null);

(statearr_17323_17392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (41))){
var inst_17246 = (state_17287[(25)]);
var inst_17262 = (state_17287[(2)]);
var inst_17263 = cljs.core.next(inst_17246);
var inst_17227 = inst_17263;
var inst_17228 = null;
var inst_17229 = (0);
var inst_17230 = (0);
var state_17287__$1 = (function (){var statearr_17324 = state_17287;
(statearr_17324[(20)] = inst_17227);

(statearr_17324[(21)] = inst_17229);

(statearr_17324[(10)] = inst_17228);

(statearr_17324[(27)] = inst_17262);

(statearr_17324[(12)] = inst_17230);

return statearr_17324;
})();
var statearr_17325_17393 = state_17287__$1;
(statearr_17325_17393[(2)] = null);

(statearr_17325_17393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (43))){
var state_17287__$1 = state_17287;
var statearr_17326_17394 = state_17287__$1;
(statearr_17326_17394[(2)] = null);

(statearr_17326_17394[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (29))){
var inst_17271 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17327_17395 = state_17287__$1;
(statearr_17327_17395[(2)] = inst_17271);

(statearr_17327_17395[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (44))){
var inst_17280 = (state_17287[(2)]);
var state_17287__$1 = (function (){var statearr_17328 = state_17287;
(statearr_17328[(28)] = inst_17280);

return statearr_17328;
})();
var statearr_17329_17396 = state_17287__$1;
(statearr_17329_17396[(2)] = null);

(statearr_17329_17396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (6))){
var inst_17219 = (state_17287[(29)]);
var inst_17218 = cljs.core.deref(cs);
var inst_17219__$1 = cljs.core.keys(inst_17218);
var inst_17220 = cljs.core.count(inst_17219__$1);
var inst_17221 = cljs.core.reset_BANG_(dctr,inst_17220);
var inst_17226 = cljs.core.seq(inst_17219__$1);
var inst_17227 = inst_17226;
var inst_17228 = null;
var inst_17229 = (0);
var inst_17230 = (0);
var state_17287__$1 = (function (){var statearr_17330 = state_17287;
(statearr_17330[(20)] = inst_17227);

(statearr_17330[(21)] = inst_17229);

(statearr_17330[(10)] = inst_17228);

(statearr_17330[(29)] = inst_17219__$1);

(statearr_17330[(30)] = inst_17221);

(statearr_17330[(12)] = inst_17230);

return statearr_17330;
})();
var statearr_17331_17397 = state_17287__$1;
(statearr_17331_17397[(2)] = null);

(statearr_17331_17397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (28))){
var inst_17227 = (state_17287[(20)]);
var inst_17246 = (state_17287[(25)]);
var inst_17246__$1 = cljs.core.seq(inst_17227);
var state_17287__$1 = (function (){var statearr_17332 = state_17287;
(statearr_17332[(25)] = inst_17246__$1);

return statearr_17332;
})();
if(inst_17246__$1){
var statearr_17333_17398 = state_17287__$1;
(statearr_17333_17398[(1)] = (33));

} else {
var statearr_17334_17399 = state_17287__$1;
(statearr_17334_17399[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (25))){
var inst_17229 = (state_17287[(21)]);
var inst_17230 = (state_17287[(12)]);
var inst_17232 = (inst_17230 < inst_17229);
var inst_17233 = inst_17232;
var state_17287__$1 = state_17287;
if(cljs.core.truth_(inst_17233)){
var statearr_17335_17400 = state_17287__$1;
(statearr_17335_17400[(1)] = (27));

} else {
var statearr_17336_17401 = state_17287__$1;
(statearr_17336_17401[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (34))){
var state_17287__$1 = state_17287;
var statearr_17337_17402 = state_17287__$1;
(statearr_17337_17402[(2)] = null);

(statearr_17337_17402[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (17))){
var state_17287__$1 = state_17287;
var statearr_17338_17403 = state_17287__$1;
(statearr_17338_17403[(2)] = null);

(statearr_17338_17403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (3))){
var inst_17285 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17287__$1,inst_17285);
} else {
if((state_val_17288 === (12))){
var inst_17214 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17339_17404 = state_17287__$1;
(statearr_17339_17404[(2)] = inst_17214);

(statearr_17339_17404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (2))){
var state_17287__$1 = state_17287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17287__$1,(4),ch);
} else {
if((state_val_17288 === (23))){
var state_17287__$1 = state_17287;
var statearr_17340_17405 = state_17287__$1;
(statearr_17340_17405[(2)] = null);

(statearr_17340_17405[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (35))){
var inst_17269 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17341_17406 = state_17287__$1;
(statearr_17341_17406[(2)] = inst_17269);

(statearr_17341_17406[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (19))){
var inst_17186 = (state_17287[(7)]);
var inst_17190 = cljs.core.chunk_first(inst_17186);
var inst_17191 = cljs.core.chunk_rest(inst_17186);
var inst_17192 = cljs.core.count(inst_17190);
var inst_17164 = inst_17191;
var inst_17165 = inst_17190;
var inst_17166 = inst_17192;
var inst_17167 = (0);
var state_17287__$1 = (function (){var statearr_17342 = state_17287;
(statearr_17342[(13)] = inst_17165);

(statearr_17342[(14)] = inst_17166);

(statearr_17342[(15)] = inst_17167);

(statearr_17342[(16)] = inst_17164);

return statearr_17342;
})();
var statearr_17343_17407 = state_17287__$1;
(statearr_17343_17407[(2)] = null);

(statearr_17343_17407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (11))){
var inst_17186 = (state_17287[(7)]);
var inst_17164 = (state_17287[(16)]);
var inst_17186__$1 = cljs.core.seq(inst_17164);
var state_17287__$1 = (function (){var statearr_17344 = state_17287;
(statearr_17344[(7)] = inst_17186__$1);

return statearr_17344;
})();
if(inst_17186__$1){
var statearr_17345_17408 = state_17287__$1;
(statearr_17345_17408[(1)] = (16));

} else {
var statearr_17346_17409 = state_17287__$1;
(statearr_17346_17409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (9))){
var inst_17216 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17347_17410 = state_17287__$1;
(statearr_17347_17410[(2)] = inst_17216);

(statearr_17347_17410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (5))){
var inst_17162 = cljs.core.deref(cs);
var inst_17163 = cljs.core.seq(inst_17162);
var inst_17164 = inst_17163;
var inst_17165 = null;
var inst_17166 = (0);
var inst_17167 = (0);
var state_17287__$1 = (function (){var statearr_17348 = state_17287;
(statearr_17348[(13)] = inst_17165);

(statearr_17348[(14)] = inst_17166);

(statearr_17348[(15)] = inst_17167);

(statearr_17348[(16)] = inst_17164);

return statearr_17348;
})();
var statearr_17349_17411 = state_17287__$1;
(statearr_17349_17411[(2)] = null);

(statearr_17349_17411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (14))){
var state_17287__$1 = state_17287;
var statearr_17350_17412 = state_17287__$1;
(statearr_17350_17412[(2)] = null);

(statearr_17350_17412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (45))){
var inst_17277 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17351_17413 = state_17287__$1;
(statearr_17351_17413[(2)] = inst_17277);

(statearr_17351_17413[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (26))){
var inst_17219 = (state_17287[(29)]);
var inst_17273 = (state_17287[(2)]);
var inst_17274 = cljs.core.seq(inst_17219);
var state_17287__$1 = (function (){var statearr_17352 = state_17287;
(statearr_17352[(31)] = inst_17273);

return statearr_17352;
})();
if(inst_17274){
var statearr_17353_17414 = state_17287__$1;
(statearr_17353_17414[(1)] = (42));

} else {
var statearr_17354_17415 = state_17287__$1;
(statearr_17354_17415[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (16))){
var inst_17186 = (state_17287[(7)]);
var inst_17188 = cljs.core.chunked_seq_QMARK_(inst_17186);
var state_17287__$1 = state_17287;
if(inst_17188){
var statearr_17355_17416 = state_17287__$1;
(statearr_17355_17416[(1)] = (19));

} else {
var statearr_17356_17417 = state_17287__$1;
(statearr_17356_17417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (38))){
var inst_17266 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17357_17418 = state_17287__$1;
(statearr_17357_17418[(2)] = inst_17266);

(statearr_17357_17418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (30))){
var state_17287__$1 = state_17287;
var statearr_17358_17419 = state_17287__$1;
(statearr_17358_17419[(2)] = null);

(statearr_17358_17419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (10))){
var inst_17165 = (state_17287[(13)]);
var inst_17167 = (state_17287[(15)]);
var inst_17175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17165,inst_17167);
var inst_17176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17175,(0),null);
var inst_17177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17175,(1),null);
var state_17287__$1 = (function (){var statearr_17359 = state_17287;
(statearr_17359[(26)] = inst_17176);

return statearr_17359;
})();
if(cljs.core.truth_(inst_17177)){
var statearr_17360_17420 = state_17287__$1;
(statearr_17360_17420[(1)] = (13));

} else {
var statearr_17361_17421 = state_17287__$1;
(statearr_17361_17421[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (18))){
var inst_17212 = (state_17287[(2)]);
var state_17287__$1 = state_17287;
var statearr_17362_17422 = state_17287__$1;
(statearr_17362_17422[(2)] = inst_17212);

(statearr_17362_17422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (42))){
var state_17287__$1 = state_17287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17287__$1,(45),dchan);
} else {
if((state_val_17288 === (37))){
var inst_17255 = (state_17287[(23)]);
var inst_17246 = (state_17287[(25)]);
var inst_17155 = (state_17287[(11)]);
var inst_17255__$1 = cljs.core.first(inst_17246);
var inst_17256 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17255__$1,inst_17155,done);
var state_17287__$1 = (function (){var statearr_17363 = state_17287;
(statearr_17363[(23)] = inst_17255__$1);

return statearr_17363;
})();
if(cljs.core.truth_(inst_17256)){
var statearr_17364_17423 = state_17287__$1;
(statearr_17364_17423[(1)] = (39));

} else {
var statearr_17365_17424 = state_17287__$1;
(statearr_17365_17424[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17288 === (8))){
var inst_17166 = (state_17287[(14)]);
var inst_17167 = (state_17287[(15)]);
var inst_17169 = (inst_17167 < inst_17166);
var inst_17170 = inst_17169;
var state_17287__$1 = state_17287;
if(cljs.core.truth_(inst_17170)){
var statearr_17366_17425 = state_17287__$1;
(statearr_17366_17425[(1)] = (10));

} else {
var statearr_17367_17426 = state_17287__$1;
(statearr_17367_17426[(1)] = (11));

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
});})(c__16231__auto___17372,cs,m,dchan,dctr,done))
;
return ((function (switch__15665__auto__,c__16231__auto___17372,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15666__auto__ = null;
var cljs$core$async$mult_$_state_machine__15666__auto____0 = (function (){
var statearr_17368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17368[(0)] = cljs$core$async$mult_$_state_machine__15666__auto__);

(statearr_17368[(1)] = (1));

return statearr_17368;
});
var cljs$core$async$mult_$_state_machine__15666__auto____1 = (function (state_17287){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_17287);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e17369){if((e17369 instanceof Object)){
var ex__15669__auto__ = e17369;
var statearr_17370_17427 = state_17287;
(statearr_17370_17427[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17428 = state_17287;
state_17287 = G__17428;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15666__auto__ = function(state_17287){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15666__auto____1.call(this,state_17287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15666__auto____0;
cljs$core$async$mult_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15666__auto____1;
return cljs$core$async$mult_$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___17372,cs,m,dchan,dctr,done))
})();
var state__16233__auto__ = (function (){var statearr_17371 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_17371[(6)] = c__16231__auto___17372);

return statearr_17371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___17372,cs,m,dchan,dctr,done))
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
var G__17430 = arguments.length;
switch (G__17430) {
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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17442 = arguments.length;
var i__4532__auto___17443 = (0);
while(true){
if((i__4532__auto___17443 < len__4531__auto___17442)){
args__4534__auto__.push((arguments[i__4532__auto___17443]));

var G__17444 = (i__4532__auto___17443 + (1));
i__4532__auto___17443 = G__17444;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17436){
var map__17437 = p__17436;
var map__17437__$1 = ((((!((map__17437 == null)))?(((((map__17437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17437):map__17437);
var opts = map__17437__$1;
var statearr_17439_17445 = state;
(statearr_17439_17445[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__17437,map__17437__$1,opts){
return (function (val){
var statearr_17440_17446 = state;
(statearr_17440_17446[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17437,map__17437__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17441_17447 = state;
(statearr_17441_17447[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17432){
var G__17433 = cljs.core.first(seq17432);
var seq17432__$1 = cljs.core.next(seq17432);
var G__17434 = cljs.core.first(seq17432__$1);
var seq17432__$2 = cljs.core.next(seq17432__$1);
var G__17435 = cljs.core.first(seq17432__$2);
var seq17432__$3 = cljs.core.next(seq17432__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17433,G__17434,G__17435,seq17432__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17448 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17449){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17449 = meta17449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17450,meta17449__$1){
var self__ = this;
var _17450__$1 = this;
return (new cljs.core.async.t_cljs$core$async17448(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17449__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17450){
var self__ = this;
var _17450__$1 = this;
return self__.meta17449;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17448.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17448.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17449","meta17449",-867708577,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17448";

cljs.core.async.t_cljs$core$async17448.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17448");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17448.
 */
cljs.core.async.__GT_t_cljs$core$async17448 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17448(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17449){
return (new cljs.core.async.t_cljs$core$async17448(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17449));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17448(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16231__auto___17612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___17612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___17612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17552){
var state_val_17553 = (state_17552[(1)]);
if((state_val_17553 === (7))){
var inst_17467 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
var statearr_17554_17613 = state_17552__$1;
(statearr_17554_17613[(2)] = inst_17467);

(statearr_17554_17613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (20))){
var inst_17479 = (state_17552[(7)]);
var state_17552__$1 = state_17552;
var statearr_17555_17614 = state_17552__$1;
(statearr_17555_17614[(2)] = inst_17479);

(statearr_17555_17614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (27))){
var state_17552__$1 = state_17552;
var statearr_17556_17615 = state_17552__$1;
(statearr_17556_17615[(2)] = null);

(statearr_17556_17615[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (1))){
var inst_17454 = (state_17552[(8)]);
var inst_17454__$1 = calc_state();
var inst_17456 = (inst_17454__$1 == null);
var inst_17457 = cljs.core.not(inst_17456);
var state_17552__$1 = (function (){var statearr_17557 = state_17552;
(statearr_17557[(8)] = inst_17454__$1);

return statearr_17557;
})();
if(inst_17457){
var statearr_17558_17616 = state_17552__$1;
(statearr_17558_17616[(1)] = (2));

} else {
var statearr_17559_17617 = state_17552__$1;
(statearr_17559_17617[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (24))){
var inst_17512 = (state_17552[(9)]);
var inst_17503 = (state_17552[(10)]);
var inst_17526 = (state_17552[(11)]);
var inst_17526__$1 = (inst_17503.cljs$core$IFn$_invoke$arity$1 ? inst_17503.cljs$core$IFn$_invoke$arity$1(inst_17512) : inst_17503.call(null,inst_17512));
var state_17552__$1 = (function (){var statearr_17560 = state_17552;
(statearr_17560[(11)] = inst_17526__$1);

return statearr_17560;
})();
if(cljs.core.truth_(inst_17526__$1)){
var statearr_17561_17618 = state_17552__$1;
(statearr_17561_17618[(1)] = (29));

} else {
var statearr_17562_17619 = state_17552__$1;
(statearr_17562_17619[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (4))){
var inst_17470 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
if(cljs.core.truth_(inst_17470)){
var statearr_17563_17620 = state_17552__$1;
(statearr_17563_17620[(1)] = (8));

} else {
var statearr_17564_17621 = state_17552__$1;
(statearr_17564_17621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (15))){
var inst_17497 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
if(cljs.core.truth_(inst_17497)){
var statearr_17565_17622 = state_17552__$1;
(statearr_17565_17622[(1)] = (19));

} else {
var statearr_17566_17623 = state_17552__$1;
(statearr_17566_17623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (21))){
var inst_17502 = (state_17552[(12)]);
var inst_17502__$1 = (state_17552[(2)]);
var inst_17503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17502__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17502__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17502__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17552__$1 = (function (){var statearr_17567 = state_17552;
(statearr_17567[(13)] = inst_17504);

(statearr_17567[(10)] = inst_17503);

(statearr_17567[(12)] = inst_17502__$1);

return statearr_17567;
})();
return cljs.core.async.ioc_alts_BANG_(state_17552__$1,(22),inst_17505);
} else {
if((state_val_17553 === (31))){
var inst_17534 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
if(cljs.core.truth_(inst_17534)){
var statearr_17568_17624 = state_17552__$1;
(statearr_17568_17624[(1)] = (32));

} else {
var statearr_17569_17625 = state_17552__$1;
(statearr_17569_17625[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (32))){
var inst_17511 = (state_17552[(14)]);
var state_17552__$1 = state_17552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17552__$1,(35),out,inst_17511);
} else {
if((state_val_17553 === (33))){
var inst_17502 = (state_17552[(12)]);
var inst_17479 = inst_17502;
var state_17552__$1 = (function (){var statearr_17570 = state_17552;
(statearr_17570[(7)] = inst_17479);

return statearr_17570;
})();
var statearr_17571_17626 = state_17552__$1;
(statearr_17571_17626[(2)] = null);

(statearr_17571_17626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (13))){
var inst_17479 = (state_17552[(7)]);
var inst_17486 = inst_17479.cljs$lang$protocol_mask$partition0$;
var inst_17487 = (inst_17486 & (64));
var inst_17488 = inst_17479.cljs$core$ISeq$;
var inst_17489 = (cljs.core.PROTOCOL_SENTINEL === inst_17488);
var inst_17490 = ((inst_17487) || (inst_17489));
var state_17552__$1 = state_17552;
if(cljs.core.truth_(inst_17490)){
var statearr_17572_17627 = state_17552__$1;
(statearr_17572_17627[(1)] = (16));

} else {
var statearr_17573_17628 = state_17552__$1;
(statearr_17573_17628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (22))){
var inst_17511 = (state_17552[(14)]);
var inst_17512 = (state_17552[(9)]);
var inst_17510 = (state_17552[(2)]);
var inst_17511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17510,(0),null);
var inst_17512__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17510,(1),null);
var inst_17513 = (inst_17511__$1 == null);
var inst_17514 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17512__$1,change);
var inst_17515 = ((inst_17513) || (inst_17514));
var state_17552__$1 = (function (){var statearr_17574 = state_17552;
(statearr_17574[(14)] = inst_17511__$1);

(statearr_17574[(9)] = inst_17512__$1);

return statearr_17574;
})();
if(cljs.core.truth_(inst_17515)){
var statearr_17575_17629 = state_17552__$1;
(statearr_17575_17629[(1)] = (23));

} else {
var statearr_17576_17630 = state_17552__$1;
(statearr_17576_17630[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (36))){
var inst_17502 = (state_17552[(12)]);
var inst_17479 = inst_17502;
var state_17552__$1 = (function (){var statearr_17577 = state_17552;
(statearr_17577[(7)] = inst_17479);

return statearr_17577;
})();
var statearr_17578_17631 = state_17552__$1;
(statearr_17578_17631[(2)] = null);

(statearr_17578_17631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (29))){
var inst_17526 = (state_17552[(11)]);
var state_17552__$1 = state_17552;
var statearr_17579_17632 = state_17552__$1;
(statearr_17579_17632[(2)] = inst_17526);

(statearr_17579_17632[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (6))){
var state_17552__$1 = state_17552;
var statearr_17580_17633 = state_17552__$1;
(statearr_17580_17633[(2)] = false);

(statearr_17580_17633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (28))){
var inst_17522 = (state_17552[(2)]);
var inst_17523 = calc_state();
var inst_17479 = inst_17523;
var state_17552__$1 = (function (){var statearr_17581 = state_17552;
(statearr_17581[(15)] = inst_17522);

(statearr_17581[(7)] = inst_17479);

return statearr_17581;
})();
var statearr_17582_17634 = state_17552__$1;
(statearr_17582_17634[(2)] = null);

(statearr_17582_17634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (25))){
var inst_17548 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
var statearr_17583_17635 = state_17552__$1;
(statearr_17583_17635[(2)] = inst_17548);

(statearr_17583_17635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (34))){
var inst_17546 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
var statearr_17584_17636 = state_17552__$1;
(statearr_17584_17636[(2)] = inst_17546);

(statearr_17584_17636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (17))){
var state_17552__$1 = state_17552;
var statearr_17585_17637 = state_17552__$1;
(statearr_17585_17637[(2)] = false);

(statearr_17585_17637[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (3))){
var state_17552__$1 = state_17552;
var statearr_17586_17638 = state_17552__$1;
(statearr_17586_17638[(2)] = false);

(statearr_17586_17638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (12))){
var inst_17550 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17552__$1,inst_17550);
} else {
if((state_val_17553 === (2))){
var inst_17454 = (state_17552[(8)]);
var inst_17459 = inst_17454.cljs$lang$protocol_mask$partition0$;
var inst_17460 = (inst_17459 & (64));
var inst_17461 = inst_17454.cljs$core$ISeq$;
var inst_17462 = (cljs.core.PROTOCOL_SENTINEL === inst_17461);
var inst_17463 = ((inst_17460) || (inst_17462));
var state_17552__$1 = state_17552;
if(cljs.core.truth_(inst_17463)){
var statearr_17587_17639 = state_17552__$1;
(statearr_17587_17639[(1)] = (5));

} else {
var statearr_17588_17640 = state_17552__$1;
(statearr_17588_17640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (23))){
var inst_17511 = (state_17552[(14)]);
var inst_17517 = (inst_17511 == null);
var state_17552__$1 = state_17552;
if(cljs.core.truth_(inst_17517)){
var statearr_17589_17641 = state_17552__$1;
(statearr_17589_17641[(1)] = (26));

} else {
var statearr_17590_17642 = state_17552__$1;
(statearr_17590_17642[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (35))){
var inst_17537 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
if(cljs.core.truth_(inst_17537)){
var statearr_17591_17643 = state_17552__$1;
(statearr_17591_17643[(1)] = (36));

} else {
var statearr_17592_17644 = state_17552__$1;
(statearr_17592_17644[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (19))){
var inst_17479 = (state_17552[(7)]);
var inst_17499 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17479);
var state_17552__$1 = state_17552;
var statearr_17593_17645 = state_17552__$1;
(statearr_17593_17645[(2)] = inst_17499);

(statearr_17593_17645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (11))){
var inst_17479 = (state_17552[(7)]);
var inst_17483 = (inst_17479 == null);
var inst_17484 = cljs.core.not(inst_17483);
var state_17552__$1 = state_17552;
if(inst_17484){
var statearr_17594_17646 = state_17552__$1;
(statearr_17594_17646[(1)] = (13));

} else {
var statearr_17595_17647 = state_17552__$1;
(statearr_17595_17647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (9))){
var inst_17454 = (state_17552[(8)]);
var state_17552__$1 = state_17552;
var statearr_17596_17648 = state_17552__$1;
(statearr_17596_17648[(2)] = inst_17454);

(statearr_17596_17648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (5))){
var state_17552__$1 = state_17552;
var statearr_17597_17649 = state_17552__$1;
(statearr_17597_17649[(2)] = true);

(statearr_17597_17649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (14))){
var state_17552__$1 = state_17552;
var statearr_17598_17650 = state_17552__$1;
(statearr_17598_17650[(2)] = false);

(statearr_17598_17650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (26))){
var inst_17512 = (state_17552[(9)]);
var inst_17519 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17512);
var state_17552__$1 = state_17552;
var statearr_17599_17651 = state_17552__$1;
(statearr_17599_17651[(2)] = inst_17519);

(statearr_17599_17651[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (16))){
var state_17552__$1 = state_17552;
var statearr_17600_17652 = state_17552__$1;
(statearr_17600_17652[(2)] = true);

(statearr_17600_17652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (38))){
var inst_17542 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
var statearr_17601_17653 = state_17552__$1;
(statearr_17601_17653[(2)] = inst_17542);

(statearr_17601_17653[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (30))){
var inst_17512 = (state_17552[(9)]);
var inst_17504 = (state_17552[(13)]);
var inst_17503 = (state_17552[(10)]);
var inst_17529 = cljs.core.empty_QMARK_(inst_17503);
var inst_17530 = (inst_17504.cljs$core$IFn$_invoke$arity$1 ? inst_17504.cljs$core$IFn$_invoke$arity$1(inst_17512) : inst_17504.call(null,inst_17512));
var inst_17531 = cljs.core.not(inst_17530);
var inst_17532 = ((inst_17529) && (inst_17531));
var state_17552__$1 = state_17552;
var statearr_17602_17654 = state_17552__$1;
(statearr_17602_17654[(2)] = inst_17532);

(statearr_17602_17654[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (10))){
var inst_17454 = (state_17552[(8)]);
var inst_17475 = (state_17552[(2)]);
var inst_17476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17475,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17475,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17475,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17479 = inst_17454;
var state_17552__$1 = (function (){var statearr_17603 = state_17552;
(statearr_17603[(16)] = inst_17478);

(statearr_17603[(17)] = inst_17477);

(statearr_17603[(7)] = inst_17479);

(statearr_17603[(18)] = inst_17476);

return statearr_17603;
})();
var statearr_17604_17655 = state_17552__$1;
(statearr_17604_17655[(2)] = null);

(statearr_17604_17655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (18))){
var inst_17494 = (state_17552[(2)]);
var state_17552__$1 = state_17552;
var statearr_17605_17656 = state_17552__$1;
(statearr_17605_17656[(2)] = inst_17494);

(statearr_17605_17656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (37))){
var state_17552__$1 = state_17552;
var statearr_17606_17657 = state_17552__$1;
(statearr_17606_17657[(2)] = null);

(statearr_17606_17657[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17553 === (8))){
var inst_17454 = (state_17552[(8)]);
var inst_17472 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17454);
var state_17552__$1 = state_17552;
var statearr_17607_17658 = state_17552__$1;
(statearr_17607_17658[(2)] = inst_17472);

(statearr_17607_17658[(1)] = (10));


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
});})(c__16231__auto___17612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15665__auto__,c__16231__auto___17612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15666__auto__ = null;
var cljs$core$async$mix_$_state_machine__15666__auto____0 = (function (){
var statearr_17608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17608[(0)] = cljs$core$async$mix_$_state_machine__15666__auto__);

(statearr_17608[(1)] = (1));

return statearr_17608;
});
var cljs$core$async$mix_$_state_machine__15666__auto____1 = (function (state_17552){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_17552);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e17609){if((e17609 instanceof Object)){
var ex__15669__auto__ = e17609;
var statearr_17610_17659 = state_17552;
(statearr_17610_17659[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17660 = state_17552;
state_17552 = G__17660;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15666__auto__ = function(state_17552){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15666__auto____1.call(this,state_17552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15666__auto____0;
cljs$core$async$mix_$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15666__auto____1;
return cljs$core$async$mix_$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___17612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16233__auto__ = (function (){var statearr_17611 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_17611[(6)] = c__16231__auto___17612);

return statearr_17611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___17612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17662 = arguments.length;
switch (G__17662) {
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
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
var G__17666 = arguments.length;
switch (G__17666) {
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
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__17664_SHARP_){
if(cljs.core.truth_((p1__17664_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17664_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17664_SHARP_.call(null,topic)))){
return p1__17664_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17664_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17667 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17668){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17668 = meta17668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17669,meta17668__$1){
var self__ = this;
var _17669__$1 = this;
return (new cljs.core.async.t_cljs$core$async17667(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17668__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17669){
var self__ = this;
var _17669__$1 = this;
return self__.meta17668;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17667.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17667.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17668","meta17668",-814882132,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17667";

cljs.core.async.t_cljs$core$async17667.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17667");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17667.
 */
cljs.core.async.__GT_t_cljs$core$async17667 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17667(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17668){
return (new cljs.core.async.t_cljs$core$async17667(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17668));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17667(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16231__auto___17787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___17787,mults,ensure_mult,p){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___17787,mults,ensure_mult,p){
return (function (state_17741){
var state_val_17742 = (state_17741[(1)]);
if((state_val_17742 === (7))){
var inst_17737 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
var statearr_17743_17788 = state_17741__$1;
(statearr_17743_17788[(2)] = inst_17737);

(statearr_17743_17788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (20))){
var state_17741__$1 = state_17741;
var statearr_17744_17789 = state_17741__$1;
(statearr_17744_17789[(2)] = null);

(statearr_17744_17789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (1))){
var state_17741__$1 = state_17741;
var statearr_17745_17790 = state_17741__$1;
(statearr_17745_17790[(2)] = null);

(statearr_17745_17790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (24))){
var inst_17720 = (state_17741[(7)]);
var inst_17729 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17720);
var state_17741__$1 = state_17741;
var statearr_17746_17791 = state_17741__$1;
(statearr_17746_17791[(2)] = inst_17729);

(statearr_17746_17791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (4))){
var inst_17672 = (state_17741[(8)]);
var inst_17672__$1 = (state_17741[(2)]);
var inst_17673 = (inst_17672__$1 == null);
var state_17741__$1 = (function (){var statearr_17747 = state_17741;
(statearr_17747[(8)] = inst_17672__$1);

return statearr_17747;
})();
if(cljs.core.truth_(inst_17673)){
var statearr_17748_17792 = state_17741__$1;
(statearr_17748_17792[(1)] = (5));

} else {
var statearr_17749_17793 = state_17741__$1;
(statearr_17749_17793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (15))){
var inst_17714 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
var statearr_17750_17794 = state_17741__$1;
(statearr_17750_17794[(2)] = inst_17714);

(statearr_17750_17794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (21))){
var inst_17734 = (state_17741[(2)]);
var state_17741__$1 = (function (){var statearr_17751 = state_17741;
(statearr_17751[(9)] = inst_17734);

return statearr_17751;
})();
var statearr_17752_17795 = state_17741__$1;
(statearr_17752_17795[(2)] = null);

(statearr_17752_17795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (13))){
var inst_17696 = (state_17741[(10)]);
var inst_17698 = cljs.core.chunked_seq_QMARK_(inst_17696);
var state_17741__$1 = state_17741;
if(inst_17698){
var statearr_17753_17796 = state_17741__$1;
(statearr_17753_17796[(1)] = (16));

} else {
var statearr_17754_17797 = state_17741__$1;
(statearr_17754_17797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (22))){
var inst_17726 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
if(cljs.core.truth_(inst_17726)){
var statearr_17755_17798 = state_17741__$1;
(statearr_17755_17798[(1)] = (23));

} else {
var statearr_17756_17799 = state_17741__$1;
(statearr_17756_17799[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (6))){
var inst_17720 = (state_17741[(7)]);
var inst_17722 = (state_17741[(11)]);
var inst_17672 = (state_17741[(8)]);
var inst_17720__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17672) : topic_fn.call(null,inst_17672));
var inst_17721 = cljs.core.deref(mults);
var inst_17722__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17721,inst_17720__$1);
var state_17741__$1 = (function (){var statearr_17757 = state_17741;
(statearr_17757[(7)] = inst_17720__$1);

(statearr_17757[(11)] = inst_17722__$1);

return statearr_17757;
})();
if(cljs.core.truth_(inst_17722__$1)){
var statearr_17758_17800 = state_17741__$1;
(statearr_17758_17800[(1)] = (19));

} else {
var statearr_17759_17801 = state_17741__$1;
(statearr_17759_17801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (25))){
var inst_17731 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
var statearr_17760_17802 = state_17741__$1;
(statearr_17760_17802[(2)] = inst_17731);

(statearr_17760_17802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (17))){
var inst_17696 = (state_17741[(10)]);
var inst_17705 = cljs.core.first(inst_17696);
var inst_17706 = cljs.core.async.muxch_STAR_(inst_17705);
var inst_17707 = cljs.core.async.close_BANG_(inst_17706);
var inst_17708 = cljs.core.next(inst_17696);
var inst_17682 = inst_17708;
var inst_17683 = null;
var inst_17684 = (0);
var inst_17685 = (0);
var state_17741__$1 = (function (){var statearr_17761 = state_17741;
(statearr_17761[(12)] = inst_17682);

(statearr_17761[(13)] = inst_17683);

(statearr_17761[(14)] = inst_17685);

(statearr_17761[(15)] = inst_17707);

(statearr_17761[(16)] = inst_17684);

return statearr_17761;
})();
var statearr_17762_17803 = state_17741__$1;
(statearr_17762_17803[(2)] = null);

(statearr_17762_17803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (3))){
var inst_17739 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17741__$1,inst_17739);
} else {
if((state_val_17742 === (12))){
var inst_17716 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
var statearr_17763_17804 = state_17741__$1;
(statearr_17763_17804[(2)] = inst_17716);

(statearr_17763_17804[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (2))){
var state_17741__$1 = state_17741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17741__$1,(4),ch);
} else {
if((state_val_17742 === (23))){
var state_17741__$1 = state_17741;
var statearr_17764_17805 = state_17741__$1;
(statearr_17764_17805[(2)] = null);

(statearr_17764_17805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (19))){
var inst_17722 = (state_17741[(11)]);
var inst_17672 = (state_17741[(8)]);
var inst_17724 = cljs.core.async.muxch_STAR_(inst_17722);
var state_17741__$1 = state_17741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17741__$1,(22),inst_17724,inst_17672);
} else {
if((state_val_17742 === (11))){
var inst_17682 = (state_17741[(12)]);
var inst_17696 = (state_17741[(10)]);
var inst_17696__$1 = cljs.core.seq(inst_17682);
var state_17741__$1 = (function (){var statearr_17765 = state_17741;
(statearr_17765[(10)] = inst_17696__$1);

return statearr_17765;
})();
if(inst_17696__$1){
var statearr_17766_17806 = state_17741__$1;
(statearr_17766_17806[(1)] = (13));

} else {
var statearr_17767_17807 = state_17741__$1;
(statearr_17767_17807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (9))){
var inst_17718 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
var statearr_17768_17808 = state_17741__$1;
(statearr_17768_17808[(2)] = inst_17718);

(statearr_17768_17808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (5))){
var inst_17679 = cljs.core.deref(mults);
var inst_17680 = cljs.core.vals(inst_17679);
var inst_17681 = cljs.core.seq(inst_17680);
var inst_17682 = inst_17681;
var inst_17683 = null;
var inst_17684 = (0);
var inst_17685 = (0);
var state_17741__$1 = (function (){var statearr_17769 = state_17741;
(statearr_17769[(12)] = inst_17682);

(statearr_17769[(13)] = inst_17683);

(statearr_17769[(14)] = inst_17685);

(statearr_17769[(16)] = inst_17684);

return statearr_17769;
})();
var statearr_17770_17809 = state_17741__$1;
(statearr_17770_17809[(2)] = null);

(statearr_17770_17809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (14))){
var state_17741__$1 = state_17741;
var statearr_17774_17810 = state_17741__$1;
(statearr_17774_17810[(2)] = null);

(statearr_17774_17810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (16))){
var inst_17696 = (state_17741[(10)]);
var inst_17700 = cljs.core.chunk_first(inst_17696);
var inst_17701 = cljs.core.chunk_rest(inst_17696);
var inst_17702 = cljs.core.count(inst_17700);
var inst_17682 = inst_17701;
var inst_17683 = inst_17700;
var inst_17684 = inst_17702;
var inst_17685 = (0);
var state_17741__$1 = (function (){var statearr_17775 = state_17741;
(statearr_17775[(12)] = inst_17682);

(statearr_17775[(13)] = inst_17683);

(statearr_17775[(14)] = inst_17685);

(statearr_17775[(16)] = inst_17684);

return statearr_17775;
})();
var statearr_17776_17811 = state_17741__$1;
(statearr_17776_17811[(2)] = null);

(statearr_17776_17811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (10))){
var inst_17682 = (state_17741[(12)]);
var inst_17683 = (state_17741[(13)]);
var inst_17685 = (state_17741[(14)]);
var inst_17684 = (state_17741[(16)]);
var inst_17690 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17683,inst_17685);
var inst_17691 = cljs.core.async.muxch_STAR_(inst_17690);
var inst_17692 = cljs.core.async.close_BANG_(inst_17691);
var inst_17693 = (inst_17685 + (1));
var tmp17771 = inst_17682;
var tmp17772 = inst_17683;
var tmp17773 = inst_17684;
var inst_17682__$1 = tmp17771;
var inst_17683__$1 = tmp17772;
var inst_17684__$1 = tmp17773;
var inst_17685__$1 = inst_17693;
var state_17741__$1 = (function (){var statearr_17777 = state_17741;
(statearr_17777[(12)] = inst_17682__$1);

(statearr_17777[(13)] = inst_17683__$1);

(statearr_17777[(14)] = inst_17685__$1);

(statearr_17777[(17)] = inst_17692);

(statearr_17777[(16)] = inst_17684__$1);

return statearr_17777;
})();
var statearr_17778_17812 = state_17741__$1;
(statearr_17778_17812[(2)] = null);

(statearr_17778_17812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (18))){
var inst_17711 = (state_17741[(2)]);
var state_17741__$1 = state_17741;
var statearr_17779_17813 = state_17741__$1;
(statearr_17779_17813[(2)] = inst_17711);

(statearr_17779_17813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17742 === (8))){
var inst_17685 = (state_17741[(14)]);
var inst_17684 = (state_17741[(16)]);
var inst_17687 = (inst_17685 < inst_17684);
var inst_17688 = inst_17687;
var state_17741__$1 = state_17741;
if(cljs.core.truth_(inst_17688)){
var statearr_17780_17814 = state_17741__$1;
(statearr_17780_17814[(1)] = (10));

} else {
var statearr_17781_17815 = state_17741__$1;
(statearr_17781_17815[(1)] = (11));

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
});})(c__16231__auto___17787,mults,ensure_mult,p))
;
return ((function (switch__15665__auto__,c__16231__auto___17787,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_17782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17782[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_17782[(1)] = (1));

return statearr_17782;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_17741){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_17741);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e17783){if((e17783 instanceof Object)){
var ex__15669__auto__ = e17783;
var statearr_17784_17816 = state_17741;
(statearr_17784_17816[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17817 = state_17741;
state_17741 = G__17817;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_17741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_17741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___17787,mults,ensure_mult,p))
})();
var state__16233__auto__ = (function (){var statearr_17785 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_17785[(6)] = c__16231__auto___17787);

return statearr_17785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___17787,mults,ensure_mult,p))
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
var G__17819 = arguments.length;
switch (G__17819) {
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
var G__17822 = arguments.length;
switch (G__17822) {
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
var G__17825 = arguments.length;
switch (G__17825) {
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
var c__16231__auto___17892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17864){
var state_val_17865 = (state_17864[(1)]);
if((state_val_17865 === (7))){
var state_17864__$1 = state_17864;
var statearr_17866_17893 = state_17864__$1;
(statearr_17866_17893[(2)] = null);

(statearr_17866_17893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (1))){
var state_17864__$1 = state_17864;
var statearr_17867_17894 = state_17864__$1;
(statearr_17867_17894[(2)] = null);

(statearr_17867_17894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (4))){
var inst_17828 = (state_17864[(7)]);
var inst_17830 = (inst_17828 < cnt);
var state_17864__$1 = state_17864;
if(cljs.core.truth_(inst_17830)){
var statearr_17868_17895 = state_17864__$1;
(statearr_17868_17895[(1)] = (6));

} else {
var statearr_17869_17896 = state_17864__$1;
(statearr_17869_17896[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (15))){
var inst_17860 = (state_17864[(2)]);
var state_17864__$1 = state_17864;
var statearr_17870_17897 = state_17864__$1;
(statearr_17870_17897[(2)] = inst_17860);

(statearr_17870_17897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (13))){
var inst_17853 = cljs.core.async.close_BANG_(out);
var state_17864__$1 = state_17864;
var statearr_17871_17898 = state_17864__$1;
(statearr_17871_17898[(2)] = inst_17853);

(statearr_17871_17898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (6))){
var state_17864__$1 = state_17864;
var statearr_17872_17899 = state_17864__$1;
(statearr_17872_17899[(2)] = null);

(statearr_17872_17899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (3))){
var inst_17862 = (state_17864[(2)]);
var state_17864__$1 = state_17864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17864__$1,inst_17862);
} else {
if((state_val_17865 === (12))){
var inst_17850 = (state_17864[(8)]);
var inst_17850__$1 = (state_17864[(2)]);
var inst_17851 = cljs.core.some(cljs.core.nil_QMARK_,inst_17850__$1);
var state_17864__$1 = (function (){var statearr_17873 = state_17864;
(statearr_17873[(8)] = inst_17850__$1);

return statearr_17873;
})();
if(cljs.core.truth_(inst_17851)){
var statearr_17874_17900 = state_17864__$1;
(statearr_17874_17900[(1)] = (13));

} else {
var statearr_17875_17901 = state_17864__$1;
(statearr_17875_17901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (2))){
var inst_17827 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17828 = (0);
var state_17864__$1 = (function (){var statearr_17876 = state_17864;
(statearr_17876[(7)] = inst_17828);

(statearr_17876[(9)] = inst_17827);

return statearr_17876;
})();
var statearr_17877_17902 = state_17864__$1;
(statearr_17877_17902[(2)] = null);

(statearr_17877_17902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (11))){
var inst_17828 = (state_17864[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17864,(10),Object,null,(9));
var inst_17837 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17828) : chs__$1.call(null,inst_17828));
var inst_17838 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17828) : done.call(null,inst_17828));
var inst_17839 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17837,inst_17838);
var state_17864__$1 = state_17864;
var statearr_17878_17903 = state_17864__$1;
(statearr_17878_17903[(2)] = inst_17839);


cljs.core.async.impl.ioc_helpers.process_exception(state_17864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (9))){
var inst_17828 = (state_17864[(7)]);
var inst_17841 = (state_17864[(2)]);
var inst_17842 = (inst_17828 + (1));
var inst_17828__$1 = inst_17842;
var state_17864__$1 = (function (){var statearr_17879 = state_17864;
(statearr_17879[(7)] = inst_17828__$1);

(statearr_17879[(10)] = inst_17841);

return statearr_17879;
})();
var statearr_17880_17904 = state_17864__$1;
(statearr_17880_17904[(2)] = null);

(statearr_17880_17904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (5))){
var inst_17848 = (state_17864[(2)]);
var state_17864__$1 = (function (){var statearr_17881 = state_17864;
(statearr_17881[(11)] = inst_17848);

return statearr_17881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17864__$1,(12),dchan);
} else {
if((state_val_17865 === (14))){
var inst_17850 = (state_17864[(8)]);
var inst_17855 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17850);
var state_17864__$1 = state_17864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17864__$1,(16),out,inst_17855);
} else {
if((state_val_17865 === (16))){
var inst_17857 = (state_17864[(2)]);
var state_17864__$1 = (function (){var statearr_17882 = state_17864;
(statearr_17882[(12)] = inst_17857);

return statearr_17882;
})();
var statearr_17883_17905 = state_17864__$1;
(statearr_17883_17905[(2)] = null);

(statearr_17883_17905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (10))){
var inst_17832 = (state_17864[(2)]);
var inst_17833 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17864__$1 = (function (){var statearr_17884 = state_17864;
(statearr_17884[(13)] = inst_17832);

return statearr_17884;
})();
var statearr_17885_17906 = state_17864__$1;
(statearr_17885_17906[(2)] = inst_17833);


cljs.core.async.impl.ioc_helpers.process_exception(state_17864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (8))){
var inst_17846 = (state_17864[(2)]);
var state_17864__$1 = state_17864;
var statearr_17886_17907 = state_17864__$1;
(statearr_17886_17907[(2)] = inst_17846);

(statearr_17886_17907[(1)] = (5));


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
});})(c__16231__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15665__auto__,c__16231__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_17887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17887[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_17887[(1)] = (1));

return statearr_17887;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_17864){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_17864);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e17888){if((e17888 instanceof Object)){
var ex__15669__auto__ = e17888;
var statearr_17889_17908 = state_17864;
(statearr_17889_17908[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17909 = state_17864;
state_17864 = G__17909;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_17864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_17864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16233__auto__ = (function (){var statearr_17890 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_17890[(6)] = c__16231__auto___17892);

return statearr_17890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17912 = arguments.length;
switch (G__17912) {
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
var c__16231__auto___17966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___17966,out){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___17966,out){
return (function (state_17944){
var state_val_17945 = (state_17944[(1)]);
if((state_val_17945 === (7))){
var inst_17923 = (state_17944[(7)]);
var inst_17924 = (state_17944[(8)]);
var inst_17923__$1 = (state_17944[(2)]);
var inst_17924__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17923__$1,(0),null);
var inst_17925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17923__$1,(1),null);
var inst_17926 = (inst_17924__$1 == null);
var state_17944__$1 = (function (){var statearr_17946 = state_17944;
(statearr_17946[(7)] = inst_17923__$1);

(statearr_17946[(9)] = inst_17925);

(statearr_17946[(8)] = inst_17924__$1);

return statearr_17946;
})();
if(cljs.core.truth_(inst_17926)){
var statearr_17947_17967 = state_17944__$1;
(statearr_17947_17967[(1)] = (8));

} else {
var statearr_17948_17968 = state_17944__$1;
(statearr_17948_17968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (1))){
var inst_17913 = cljs.core.vec(chs);
var inst_17914 = inst_17913;
var state_17944__$1 = (function (){var statearr_17949 = state_17944;
(statearr_17949[(10)] = inst_17914);

return statearr_17949;
})();
var statearr_17950_17969 = state_17944__$1;
(statearr_17950_17969[(2)] = null);

(statearr_17950_17969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (4))){
var inst_17914 = (state_17944[(10)]);
var state_17944__$1 = state_17944;
return cljs.core.async.ioc_alts_BANG_(state_17944__$1,(7),inst_17914);
} else {
if((state_val_17945 === (6))){
var inst_17940 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17951_17970 = state_17944__$1;
(statearr_17951_17970[(2)] = inst_17940);

(statearr_17951_17970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (3))){
var inst_17942 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17944__$1,inst_17942);
} else {
if((state_val_17945 === (2))){
var inst_17914 = (state_17944[(10)]);
var inst_17916 = cljs.core.count(inst_17914);
var inst_17917 = (inst_17916 > (0));
var state_17944__$1 = state_17944;
if(cljs.core.truth_(inst_17917)){
var statearr_17953_17971 = state_17944__$1;
(statearr_17953_17971[(1)] = (4));

} else {
var statearr_17954_17972 = state_17944__$1;
(statearr_17954_17972[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (11))){
var inst_17914 = (state_17944[(10)]);
var inst_17933 = (state_17944[(2)]);
var tmp17952 = inst_17914;
var inst_17914__$1 = tmp17952;
var state_17944__$1 = (function (){var statearr_17955 = state_17944;
(statearr_17955[(11)] = inst_17933);

(statearr_17955[(10)] = inst_17914__$1);

return statearr_17955;
})();
var statearr_17956_17973 = state_17944__$1;
(statearr_17956_17973[(2)] = null);

(statearr_17956_17973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (9))){
var inst_17924 = (state_17944[(8)]);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17944__$1,(11),out,inst_17924);
} else {
if((state_val_17945 === (5))){
var inst_17938 = cljs.core.async.close_BANG_(out);
var state_17944__$1 = state_17944;
var statearr_17957_17974 = state_17944__$1;
(statearr_17957_17974[(2)] = inst_17938);

(statearr_17957_17974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (10))){
var inst_17936 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17958_17975 = state_17944__$1;
(statearr_17958_17975[(2)] = inst_17936);

(statearr_17958_17975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (8))){
var inst_17923 = (state_17944[(7)]);
var inst_17925 = (state_17944[(9)]);
var inst_17924 = (state_17944[(8)]);
var inst_17914 = (state_17944[(10)]);
var inst_17928 = (function (){var cs = inst_17914;
var vec__17919 = inst_17923;
var v = inst_17924;
var c = inst_17925;
return ((function (cs,vec__17919,v,c,inst_17923,inst_17925,inst_17924,inst_17914,state_val_17945,c__16231__auto___17966,out){
return (function (p1__17910_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17910_SHARP_);
});
;})(cs,vec__17919,v,c,inst_17923,inst_17925,inst_17924,inst_17914,state_val_17945,c__16231__auto___17966,out))
})();
var inst_17929 = cljs.core.filterv(inst_17928,inst_17914);
var inst_17914__$1 = inst_17929;
var state_17944__$1 = (function (){var statearr_17959 = state_17944;
(statearr_17959[(10)] = inst_17914__$1);

return statearr_17959;
})();
var statearr_17960_17976 = state_17944__$1;
(statearr_17960_17976[(2)] = null);

(statearr_17960_17976[(1)] = (2));


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
});})(c__16231__auto___17966,out))
;
return ((function (switch__15665__auto__,c__16231__auto___17966,out){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_17961 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17961[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_17961[(1)] = (1));

return statearr_17961;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_17944){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_17944);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e17962){if((e17962 instanceof Object)){
var ex__15669__auto__ = e17962;
var statearr_17963_17977 = state_17944;
(statearr_17963_17977[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17978 = state_17944;
state_17944 = G__17978;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_17944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_17944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___17966,out))
})();
var state__16233__auto__ = (function (){var statearr_17964 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_17964[(6)] = c__16231__auto___17966);

return statearr_17964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___17966,out))
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
var G__17980 = arguments.length;
switch (G__17980) {
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
var c__16231__auto___18025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___18025,out){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___18025,out){
return (function (state_18004){
var state_val_18005 = (state_18004[(1)]);
if((state_val_18005 === (7))){
var inst_17986 = (state_18004[(7)]);
var inst_17986__$1 = (state_18004[(2)]);
var inst_17987 = (inst_17986__$1 == null);
var inst_17988 = cljs.core.not(inst_17987);
var state_18004__$1 = (function (){var statearr_18006 = state_18004;
(statearr_18006[(7)] = inst_17986__$1);

return statearr_18006;
})();
if(inst_17988){
var statearr_18007_18026 = state_18004__$1;
(statearr_18007_18026[(1)] = (8));

} else {
var statearr_18008_18027 = state_18004__$1;
(statearr_18008_18027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (1))){
var inst_17981 = (0);
var state_18004__$1 = (function (){var statearr_18009 = state_18004;
(statearr_18009[(8)] = inst_17981);

return statearr_18009;
})();
var statearr_18010_18028 = state_18004__$1;
(statearr_18010_18028[(2)] = null);

(statearr_18010_18028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (4))){
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18004__$1,(7),ch);
} else {
if((state_val_18005 === (6))){
var inst_17999 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18011_18029 = state_18004__$1;
(statearr_18011_18029[(2)] = inst_17999);

(statearr_18011_18029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (3))){
var inst_18001 = (state_18004[(2)]);
var inst_18002 = cljs.core.async.close_BANG_(out);
var state_18004__$1 = (function (){var statearr_18012 = state_18004;
(statearr_18012[(9)] = inst_18001);

return statearr_18012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18004__$1,inst_18002);
} else {
if((state_val_18005 === (2))){
var inst_17981 = (state_18004[(8)]);
var inst_17983 = (inst_17981 < n);
var state_18004__$1 = state_18004;
if(cljs.core.truth_(inst_17983)){
var statearr_18013_18030 = state_18004__$1;
(statearr_18013_18030[(1)] = (4));

} else {
var statearr_18014_18031 = state_18004__$1;
(statearr_18014_18031[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (11))){
var inst_17981 = (state_18004[(8)]);
var inst_17991 = (state_18004[(2)]);
var inst_17992 = (inst_17981 + (1));
var inst_17981__$1 = inst_17992;
var state_18004__$1 = (function (){var statearr_18015 = state_18004;
(statearr_18015[(10)] = inst_17991);

(statearr_18015[(8)] = inst_17981__$1);

return statearr_18015;
})();
var statearr_18016_18032 = state_18004__$1;
(statearr_18016_18032[(2)] = null);

(statearr_18016_18032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (9))){
var state_18004__$1 = state_18004;
var statearr_18017_18033 = state_18004__$1;
(statearr_18017_18033[(2)] = null);

(statearr_18017_18033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (5))){
var state_18004__$1 = state_18004;
var statearr_18018_18034 = state_18004__$1;
(statearr_18018_18034[(2)] = null);

(statearr_18018_18034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (10))){
var inst_17996 = (state_18004[(2)]);
var state_18004__$1 = state_18004;
var statearr_18019_18035 = state_18004__$1;
(statearr_18019_18035[(2)] = inst_17996);

(statearr_18019_18035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18005 === (8))){
var inst_17986 = (state_18004[(7)]);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18004__$1,(11),out,inst_17986);
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
});})(c__16231__auto___18025,out))
;
return ((function (switch__15665__auto__,c__16231__auto___18025,out){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_18020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18020[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_18020[(1)] = (1));

return statearr_18020;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_18004){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_18004);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e18021){if((e18021 instanceof Object)){
var ex__15669__auto__ = e18021;
var statearr_18022_18036 = state_18004;
(statearr_18022_18036[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18037 = state_18004;
state_18004 = G__18037;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_18004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_18004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___18025,out))
})();
var state__16233__auto__ = (function (){var statearr_18023 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_18023[(6)] = c__16231__auto___18025);

return statearr_18023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___18025,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18039 = (function (f,ch,meta18040){
this.f = f;
this.ch = ch;
this.meta18040 = meta18040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18041,meta18040__$1){
var self__ = this;
var _18041__$1 = this;
return (new cljs.core.async.t_cljs$core$async18039(self__.f,self__.ch,meta18040__$1));
});

cljs.core.async.t_cljs$core$async18039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18041){
var self__ = this;
var _18041__$1 = this;
return self__.meta18040;
});

cljs.core.async.t_cljs$core$async18039.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18039.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18039.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18042 = (function (f,ch,meta18040,_,fn1,meta18043){
this.f = f;
this.ch = ch;
this.meta18040 = meta18040;
this._ = _;
this.fn1 = fn1;
this.meta18043 = meta18043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18044,meta18043__$1){
var self__ = this;
var _18044__$1 = this;
return (new cljs.core.async.t_cljs$core$async18042(self__.f,self__.ch,self__.meta18040,self__._,self__.fn1,meta18043__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18044){
var self__ = this;
var _18044__$1 = this;
return self__.meta18043;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18042.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18038_SHARP_){
var G__18045 = (((p1__18038_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18038_SHARP_) : self__.f.call(null,p1__18038_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18045) : f1.call(null,G__18045));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18042.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18040","meta18040",151365262,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18039","cljs.core.async/t_cljs$core$async18039",-595700412,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18043","meta18043",774785766,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18042";

cljs.core.async.t_cljs$core$async18042.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18042");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18042.
 */
cljs.core.async.__GT_t_cljs$core$async18042 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18042(f__$1,ch__$1,meta18040__$1,___$2,fn1__$1,meta18043){
return (new cljs.core.async.t_cljs$core$async18042(f__$1,ch__$1,meta18040__$1,___$2,fn1__$1,meta18043));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18042(self__.f,self__.ch,self__.meta18040,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18046 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18046) : self__.f.call(null,G__18046));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18039.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18040","meta18040",151365262,null)], null);
});

cljs.core.async.t_cljs$core$async18039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18039";

cljs.core.async.t_cljs$core$async18039.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18039");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18039.
 */
cljs.core.async.__GT_t_cljs$core$async18039 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18039(f__$1,ch__$1,meta18040){
return (new cljs.core.async.t_cljs$core$async18039(f__$1,ch__$1,meta18040));
});

}

return (new cljs.core.async.t_cljs$core$async18039(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18047 = (function (f,ch,meta18048){
this.f = f;
this.ch = ch;
this.meta18048 = meta18048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18049,meta18048__$1){
var self__ = this;
var _18049__$1 = this;
return (new cljs.core.async.t_cljs$core$async18047(self__.f,self__.ch,meta18048__$1));
});

cljs.core.async.t_cljs$core$async18047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18049){
var self__ = this;
var _18049__$1 = this;
return self__.meta18048;
});

cljs.core.async.t_cljs$core$async18047.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18047.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18047.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18048","meta18048",1680311536,null)], null);
});

cljs.core.async.t_cljs$core$async18047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18047";

cljs.core.async.t_cljs$core$async18047.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18047");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18047.
 */
cljs.core.async.__GT_t_cljs$core$async18047 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18047(f__$1,ch__$1,meta18048){
return (new cljs.core.async.t_cljs$core$async18047(f__$1,ch__$1,meta18048));
});

}

return (new cljs.core.async.t_cljs$core$async18047(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18050 = (function (p,ch,meta18051){
this.p = p;
this.ch = ch;
this.meta18051 = meta18051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18052,meta18051__$1){
var self__ = this;
var _18052__$1 = this;
return (new cljs.core.async.t_cljs$core$async18050(self__.p,self__.ch,meta18051__$1));
});

cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18052){
var self__ = this;
var _18052__$1 = this;
return self__.meta18051;
});

cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18051","meta18051",530176975,null)], null);
});

cljs.core.async.t_cljs$core$async18050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18050";

cljs.core.async.t_cljs$core$async18050.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18050");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18050.
 */
cljs.core.async.__GT_t_cljs$core$async18050 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18050(p__$1,ch__$1,meta18051){
return (new cljs.core.async.t_cljs$core$async18050(p__$1,ch__$1,meta18051));
});

}

return (new cljs.core.async.t_cljs$core$async18050(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18054 = arguments.length;
switch (G__18054) {
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
var c__16231__auto___18094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___18094,out){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___18094,out){
return (function (state_18075){
var state_val_18076 = (state_18075[(1)]);
if((state_val_18076 === (7))){
var inst_18071 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18077_18095 = state_18075__$1;
(statearr_18077_18095[(2)] = inst_18071);

(statearr_18077_18095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (1))){
var state_18075__$1 = state_18075;
var statearr_18078_18096 = state_18075__$1;
(statearr_18078_18096[(2)] = null);

(statearr_18078_18096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (4))){
var inst_18057 = (state_18075[(7)]);
var inst_18057__$1 = (state_18075[(2)]);
var inst_18058 = (inst_18057__$1 == null);
var state_18075__$1 = (function (){var statearr_18079 = state_18075;
(statearr_18079[(7)] = inst_18057__$1);

return statearr_18079;
})();
if(cljs.core.truth_(inst_18058)){
var statearr_18080_18097 = state_18075__$1;
(statearr_18080_18097[(1)] = (5));

} else {
var statearr_18081_18098 = state_18075__$1;
(statearr_18081_18098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (6))){
var inst_18057 = (state_18075[(7)]);
var inst_18062 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18057) : p.call(null,inst_18057));
var state_18075__$1 = state_18075;
if(cljs.core.truth_(inst_18062)){
var statearr_18082_18099 = state_18075__$1;
(statearr_18082_18099[(1)] = (8));

} else {
var statearr_18083_18100 = state_18075__$1;
(statearr_18083_18100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (3))){
var inst_18073 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18075__$1,inst_18073);
} else {
if((state_val_18076 === (2))){
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18075__$1,(4),ch);
} else {
if((state_val_18076 === (11))){
var inst_18065 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18084_18101 = state_18075__$1;
(statearr_18084_18101[(2)] = inst_18065);

(statearr_18084_18101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (9))){
var state_18075__$1 = state_18075;
var statearr_18085_18102 = state_18075__$1;
(statearr_18085_18102[(2)] = null);

(statearr_18085_18102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (5))){
var inst_18060 = cljs.core.async.close_BANG_(out);
var state_18075__$1 = state_18075;
var statearr_18086_18103 = state_18075__$1;
(statearr_18086_18103[(2)] = inst_18060);

(statearr_18086_18103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (10))){
var inst_18068 = (state_18075[(2)]);
var state_18075__$1 = (function (){var statearr_18087 = state_18075;
(statearr_18087[(8)] = inst_18068);

return statearr_18087;
})();
var statearr_18088_18104 = state_18075__$1;
(statearr_18088_18104[(2)] = null);

(statearr_18088_18104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (8))){
var inst_18057 = (state_18075[(7)]);
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18075__$1,(11),out,inst_18057);
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
});})(c__16231__auto___18094,out))
;
return ((function (switch__15665__auto__,c__16231__auto___18094,out){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_18089 = [null,null,null,null,null,null,null,null,null];
(statearr_18089[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_18089[(1)] = (1));

return statearr_18089;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_18075){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_18075);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e18090){if((e18090 instanceof Object)){
var ex__15669__auto__ = e18090;
var statearr_18091_18105 = state_18075;
(statearr_18091_18105[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18090;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18106 = state_18075;
state_18075 = G__18106;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_18075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_18075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___18094,out))
})();
var state__16233__auto__ = (function (){var statearr_18092 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_18092[(6)] = c__16231__auto___18094);

return statearr_18092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___18094,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18108 = arguments.length;
switch (G__18108) {
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
var c__16231__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto__){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto__){
return (function (state_18171){
var state_val_18172 = (state_18171[(1)]);
if((state_val_18172 === (7))){
var inst_18167 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18173_18211 = state_18171__$1;
(statearr_18173_18211[(2)] = inst_18167);

(statearr_18173_18211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (20))){
var inst_18137 = (state_18171[(7)]);
var inst_18148 = (state_18171[(2)]);
var inst_18149 = cljs.core.next(inst_18137);
var inst_18123 = inst_18149;
var inst_18124 = null;
var inst_18125 = (0);
var inst_18126 = (0);
var state_18171__$1 = (function (){var statearr_18174 = state_18171;
(statearr_18174[(8)] = inst_18123);

(statearr_18174[(9)] = inst_18148);

(statearr_18174[(10)] = inst_18124);

(statearr_18174[(11)] = inst_18126);

(statearr_18174[(12)] = inst_18125);

return statearr_18174;
})();
var statearr_18175_18212 = state_18171__$1;
(statearr_18175_18212[(2)] = null);

(statearr_18175_18212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (1))){
var state_18171__$1 = state_18171;
var statearr_18176_18213 = state_18171__$1;
(statearr_18176_18213[(2)] = null);

(statearr_18176_18213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (4))){
var inst_18112 = (state_18171[(13)]);
var inst_18112__$1 = (state_18171[(2)]);
var inst_18113 = (inst_18112__$1 == null);
var state_18171__$1 = (function (){var statearr_18177 = state_18171;
(statearr_18177[(13)] = inst_18112__$1);

return statearr_18177;
})();
if(cljs.core.truth_(inst_18113)){
var statearr_18178_18214 = state_18171__$1;
(statearr_18178_18214[(1)] = (5));

} else {
var statearr_18179_18215 = state_18171__$1;
(statearr_18179_18215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (15))){
var state_18171__$1 = state_18171;
var statearr_18183_18216 = state_18171__$1;
(statearr_18183_18216[(2)] = null);

(statearr_18183_18216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (21))){
var state_18171__$1 = state_18171;
var statearr_18184_18217 = state_18171__$1;
(statearr_18184_18217[(2)] = null);

(statearr_18184_18217[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (13))){
var inst_18123 = (state_18171[(8)]);
var inst_18124 = (state_18171[(10)]);
var inst_18126 = (state_18171[(11)]);
var inst_18125 = (state_18171[(12)]);
var inst_18133 = (state_18171[(2)]);
var inst_18134 = (inst_18126 + (1));
var tmp18180 = inst_18123;
var tmp18181 = inst_18124;
var tmp18182 = inst_18125;
var inst_18123__$1 = tmp18180;
var inst_18124__$1 = tmp18181;
var inst_18125__$1 = tmp18182;
var inst_18126__$1 = inst_18134;
var state_18171__$1 = (function (){var statearr_18185 = state_18171;
(statearr_18185[(8)] = inst_18123__$1);

(statearr_18185[(10)] = inst_18124__$1);

(statearr_18185[(14)] = inst_18133);

(statearr_18185[(11)] = inst_18126__$1);

(statearr_18185[(12)] = inst_18125__$1);

return statearr_18185;
})();
var statearr_18186_18218 = state_18171__$1;
(statearr_18186_18218[(2)] = null);

(statearr_18186_18218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (22))){
var state_18171__$1 = state_18171;
var statearr_18187_18219 = state_18171__$1;
(statearr_18187_18219[(2)] = null);

(statearr_18187_18219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (6))){
var inst_18112 = (state_18171[(13)]);
var inst_18121 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18112) : f.call(null,inst_18112));
var inst_18122 = cljs.core.seq(inst_18121);
var inst_18123 = inst_18122;
var inst_18124 = null;
var inst_18125 = (0);
var inst_18126 = (0);
var state_18171__$1 = (function (){var statearr_18188 = state_18171;
(statearr_18188[(8)] = inst_18123);

(statearr_18188[(10)] = inst_18124);

(statearr_18188[(11)] = inst_18126);

(statearr_18188[(12)] = inst_18125);

return statearr_18188;
})();
var statearr_18189_18220 = state_18171__$1;
(statearr_18189_18220[(2)] = null);

(statearr_18189_18220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (17))){
var inst_18137 = (state_18171[(7)]);
var inst_18141 = cljs.core.chunk_first(inst_18137);
var inst_18142 = cljs.core.chunk_rest(inst_18137);
var inst_18143 = cljs.core.count(inst_18141);
var inst_18123 = inst_18142;
var inst_18124 = inst_18141;
var inst_18125 = inst_18143;
var inst_18126 = (0);
var state_18171__$1 = (function (){var statearr_18190 = state_18171;
(statearr_18190[(8)] = inst_18123);

(statearr_18190[(10)] = inst_18124);

(statearr_18190[(11)] = inst_18126);

(statearr_18190[(12)] = inst_18125);

return statearr_18190;
})();
var statearr_18191_18221 = state_18171__$1;
(statearr_18191_18221[(2)] = null);

(statearr_18191_18221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (3))){
var inst_18169 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18171__$1,inst_18169);
} else {
if((state_val_18172 === (12))){
var inst_18157 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18192_18222 = state_18171__$1;
(statearr_18192_18222[(2)] = inst_18157);

(statearr_18192_18222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (2))){
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18171__$1,(4),in$);
} else {
if((state_val_18172 === (23))){
var inst_18165 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18193_18223 = state_18171__$1;
(statearr_18193_18223[(2)] = inst_18165);

(statearr_18193_18223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (19))){
var inst_18152 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18194_18224 = state_18171__$1;
(statearr_18194_18224[(2)] = inst_18152);

(statearr_18194_18224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (11))){
var inst_18123 = (state_18171[(8)]);
var inst_18137 = (state_18171[(7)]);
var inst_18137__$1 = cljs.core.seq(inst_18123);
var state_18171__$1 = (function (){var statearr_18195 = state_18171;
(statearr_18195[(7)] = inst_18137__$1);

return statearr_18195;
})();
if(inst_18137__$1){
var statearr_18196_18225 = state_18171__$1;
(statearr_18196_18225[(1)] = (14));

} else {
var statearr_18197_18226 = state_18171__$1;
(statearr_18197_18226[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (9))){
var inst_18159 = (state_18171[(2)]);
var inst_18160 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18171__$1 = (function (){var statearr_18198 = state_18171;
(statearr_18198[(15)] = inst_18159);

return statearr_18198;
})();
if(cljs.core.truth_(inst_18160)){
var statearr_18199_18227 = state_18171__$1;
(statearr_18199_18227[(1)] = (21));

} else {
var statearr_18200_18228 = state_18171__$1;
(statearr_18200_18228[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (5))){
var inst_18115 = cljs.core.async.close_BANG_(out);
var state_18171__$1 = state_18171;
var statearr_18201_18229 = state_18171__$1;
(statearr_18201_18229[(2)] = inst_18115);

(statearr_18201_18229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (14))){
var inst_18137 = (state_18171[(7)]);
var inst_18139 = cljs.core.chunked_seq_QMARK_(inst_18137);
var state_18171__$1 = state_18171;
if(inst_18139){
var statearr_18202_18230 = state_18171__$1;
(statearr_18202_18230[(1)] = (17));

} else {
var statearr_18203_18231 = state_18171__$1;
(statearr_18203_18231[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (16))){
var inst_18155 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18204_18232 = state_18171__$1;
(statearr_18204_18232[(2)] = inst_18155);

(statearr_18204_18232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18172 === (10))){
var inst_18124 = (state_18171[(10)]);
var inst_18126 = (state_18171[(11)]);
var inst_18131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18124,inst_18126);
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18171__$1,(13),out,inst_18131);
} else {
if((state_val_18172 === (18))){
var inst_18137 = (state_18171[(7)]);
var inst_18146 = cljs.core.first(inst_18137);
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18171__$1,(20),out,inst_18146);
} else {
if((state_val_18172 === (8))){
var inst_18126 = (state_18171[(11)]);
var inst_18125 = (state_18171[(12)]);
var inst_18128 = (inst_18126 < inst_18125);
var inst_18129 = inst_18128;
var state_18171__$1 = state_18171;
if(cljs.core.truth_(inst_18129)){
var statearr_18205_18233 = state_18171__$1;
(statearr_18205_18233[(1)] = (10));

} else {
var statearr_18206_18234 = state_18171__$1;
(statearr_18206_18234[(1)] = (11));

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
});})(c__16231__auto__))
;
return ((function (switch__15665__auto__,c__16231__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15666__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15666__auto____0 = (function (){
var statearr_18207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18207[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15666__auto__);

(statearr_18207[(1)] = (1));

return statearr_18207;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15666__auto____1 = (function (state_18171){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_18171);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e18208){if((e18208 instanceof Object)){
var ex__15669__auto__ = e18208;
var statearr_18209_18235 = state_18171;
(statearr_18209_18235[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18236 = state_18171;
state_18171 = G__18236;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15666__auto__ = function(state_18171){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15666__auto____1.call(this,state_18171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15666__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15666__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto__))
})();
var state__16233__auto__ = (function (){var statearr_18210 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_18210[(6)] = c__16231__auto__);

return statearr_18210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto__))
);

return c__16231__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18238 = arguments.length;
switch (G__18238) {
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
var G__18241 = arguments.length;
switch (G__18241) {
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
var G__18244 = arguments.length;
switch (G__18244) {
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
var c__16231__auto___18291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___18291,out){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___18291,out){
return (function (state_18268){
var state_val_18269 = (state_18268[(1)]);
if((state_val_18269 === (7))){
var inst_18263 = (state_18268[(2)]);
var state_18268__$1 = state_18268;
var statearr_18270_18292 = state_18268__$1;
(statearr_18270_18292[(2)] = inst_18263);

(statearr_18270_18292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (1))){
var inst_18245 = null;
var state_18268__$1 = (function (){var statearr_18271 = state_18268;
(statearr_18271[(7)] = inst_18245);

return statearr_18271;
})();
var statearr_18272_18293 = state_18268__$1;
(statearr_18272_18293[(2)] = null);

(statearr_18272_18293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (4))){
var inst_18248 = (state_18268[(8)]);
var inst_18248__$1 = (state_18268[(2)]);
var inst_18249 = (inst_18248__$1 == null);
var inst_18250 = cljs.core.not(inst_18249);
var state_18268__$1 = (function (){var statearr_18273 = state_18268;
(statearr_18273[(8)] = inst_18248__$1);

return statearr_18273;
})();
if(inst_18250){
var statearr_18274_18294 = state_18268__$1;
(statearr_18274_18294[(1)] = (5));

} else {
var statearr_18275_18295 = state_18268__$1;
(statearr_18275_18295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (6))){
var state_18268__$1 = state_18268;
var statearr_18276_18296 = state_18268__$1;
(statearr_18276_18296[(2)] = null);

(statearr_18276_18296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (3))){
var inst_18265 = (state_18268[(2)]);
var inst_18266 = cljs.core.async.close_BANG_(out);
var state_18268__$1 = (function (){var statearr_18277 = state_18268;
(statearr_18277[(9)] = inst_18265);

return statearr_18277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18268__$1,inst_18266);
} else {
if((state_val_18269 === (2))){
var state_18268__$1 = state_18268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18268__$1,(4),ch);
} else {
if((state_val_18269 === (11))){
var inst_18248 = (state_18268[(8)]);
var inst_18257 = (state_18268[(2)]);
var inst_18245 = inst_18248;
var state_18268__$1 = (function (){var statearr_18278 = state_18268;
(statearr_18278[(7)] = inst_18245);

(statearr_18278[(10)] = inst_18257);

return statearr_18278;
})();
var statearr_18279_18297 = state_18268__$1;
(statearr_18279_18297[(2)] = null);

(statearr_18279_18297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (9))){
var inst_18248 = (state_18268[(8)]);
var state_18268__$1 = state_18268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18268__$1,(11),out,inst_18248);
} else {
if((state_val_18269 === (5))){
var inst_18248 = (state_18268[(8)]);
var inst_18245 = (state_18268[(7)]);
var inst_18252 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18248,inst_18245);
var state_18268__$1 = state_18268;
if(inst_18252){
var statearr_18281_18298 = state_18268__$1;
(statearr_18281_18298[(1)] = (8));

} else {
var statearr_18282_18299 = state_18268__$1;
(statearr_18282_18299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (10))){
var inst_18260 = (state_18268[(2)]);
var state_18268__$1 = state_18268;
var statearr_18283_18300 = state_18268__$1;
(statearr_18283_18300[(2)] = inst_18260);

(statearr_18283_18300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18269 === (8))){
var inst_18245 = (state_18268[(7)]);
var tmp18280 = inst_18245;
var inst_18245__$1 = tmp18280;
var state_18268__$1 = (function (){var statearr_18284 = state_18268;
(statearr_18284[(7)] = inst_18245__$1);

return statearr_18284;
})();
var statearr_18285_18301 = state_18268__$1;
(statearr_18285_18301[(2)] = null);

(statearr_18285_18301[(1)] = (2));


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
});})(c__16231__auto___18291,out))
;
return ((function (switch__15665__auto__,c__16231__auto___18291,out){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_18286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18286[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_18286[(1)] = (1));

return statearr_18286;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_18268){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_18268);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e18287){if((e18287 instanceof Object)){
var ex__15669__auto__ = e18287;
var statearr_18288_18302 = state_18268;
(statearr_18288_18302[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18303 = state_18268;
state_18268 = G__18303;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_18268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_18268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___18291,out))
})();
var state__16233__auto__ = (function (){var statearr_18289 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_18289[(6)] = c__16231__auto___18291);

return statearr_18289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___18291,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18305 = arguments.length;
switch (G__18305) {
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
var c__16231__auto___18371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___18371,out){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___18371,out){
return (function (state_18343){
var state_val_18344 = (state_18343[(1)]);
if((state_val_18344 === (7))){
var inst_18339 = (state_18343[(2)]);
var state_18343__$1 = state_18343;
var statearr_18345_18372 = state_18343__$1;
(statearr_18345_18372[(2)] = inst_18339);

(statearr_18345_18372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (1))){
var inst_18306 = (new Array(n));
var inst_18307 = inst_18306;
var inst_18308 = (0);
var state_18343__$1 = (function (){var statearr_18346 = state_18343;
(statearr_18346[(7)] = inst_18308);

(statearr_18346[(8)] = inst_18307);

return statearr_18346;
})();
var statearr_18347_18373 = state_18343__$1;
(statearr_18347_18373[(2)] = null);

(statearr_18347_18373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (4))){
var inst_18311 = (state_18343[(9)]);
var inst_18311__$1 = (state_18343[(2)]);
var inst_18312 = (inst_18311__$1 == null);
var inst_18313 = cljs.core.not(inst_18312);
var state_18343__$1 = (function (){var statearr_18348 = state_18343;
(statearr_18348[(9)] = inst_18311__$1);

return statearr_18348;
})();
if(inst_18313){
var statearr_18349_18374 = state_18343__$1;
(statearr_18349_18374[(1)] = (5));

} else {
var statearr_18350_18375 = state_18343__$1;
(statearr_18350_18375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (15))){
var inst_18333 = (state_18343[(2)]);
var state_18343__$1 = state_18343;
var statearr_18351_18376 = state_18343__$1;
(statearr_18351_18376[(2)] = inst_18333);

(statearr_18351_18376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (13))){
var state_18343__$1 = state_18343;
var statearr_18352_18377 = state_18343__$1;
(statearr_18352_18377[(2)] = null);

(statearr_18352_18377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (6))){
var inst_18308 = (state_18343[(7)]);
var inst_18329 = (inst_18308 > (0));
var state_18343__$1 = state_18343;
if(cljs.core.truth_(inst_18329)){
var statearr_18353_18378 = state_18343__$1;
(statearr_18353_18378[(1)] = (12));

} else {
var statearr_18354_18379 = state_18343__$1;
(statearr_18354_18379[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (3))){
var inst_18341 = (state_18343[(2)]);
var state_18343__$1 = state_18343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18343__$1,inst_18341);
} else {
if((state_val_18344 === (12))){
var inst_18307 = (state_18343[(8)]);
var inst_18331 = cljs.core.vec(inst_18307);
var state_18343__$1 = state_18343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18343__$1,(15),out,inst_18331);
} else {
if((state_val_18344 === (2))){
var state_18343__$1 = state_18343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18343__$1,(4),ch);
} else {
if((state_val_18344 === (11))){
var inst_18323 = (state_18343[(2)]);
var inst_18324 = (new Array(n));
var inst_18307 = inst_18324;
var inst_18308 = (0);
var state_18343__$1 = (function (){var statearr_18355 = state_18343;
(statearr_18355[(10)] = inst_18323);

(statearr_18355[(7)] = inst_18308);

(statearr_18355[(8)] = inst_18307);

return statearr_18355;
})();
var statearr_18356_18380 = state_18343__$1;
(statearr_18356_18380[(2)] = null);

(statearr_18356_18380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (9))){
var inst_18307 = (state_18343[(8)]);
var inst_18321 = cljs.core.vec(inst_18307);
var state_18343__$1 = state_18343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18343__$1,(11),out,inst_18321);
} else {
if((state_val_18344 === (5))){
var inst_18308 = (state_18343[(7)]);
var inst_18311 = (state_18343[(9)]);
var inst_18307 = (state_18343[(8)]);
var inst_18316 = (state_18343[(11)]);
var inst_18315 = (inst_18307[inst_18308] = inst_18311);
var inst_18316__$1 = (inst_18308 + (1));
var inst_18317 = (inst_18316__$1 < n);
var state_18343__$1 = (function (){var statearr_18357 = state_18343;
(statearr_18357[(12)] = inst_18315);

(statearr_18357[(11)] = inst_18316__$1);

return statearr_18357;
})();
if(cljs.core.truth_(inst_18317)){
var statearr_18358_18381 = state_18343__$1;
(statearr_18358_18381[(1)] = (8));

} else {
var statearr_18359_18382 = state_18343__$1;
(statearr_18359_18382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (14))){
var inst_18336 = (state_18343[(2)]);
var inst_18337 = cljs.core.async.close_BANG_(out);
var state_18343__$1 = (function (){var statearr_18361 = state_18343;
(statearr_18361[(13)] = inst_18336);

return statearr_18361;
})();
var statearr_18362_18383 = state_18343__$1;
(statearr_18362_18383[(2)] = inst_18337);

(statearr_18362_18383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (10))){
var inst_18327 = (state_18343[(2)]);
var state_18343__$1 = state_18343;
var statearr_18363_18384 = state_18343__$1;
(statearr_18363_18384[(2)] = inst_18327);

(statearr_18363_18384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18344 === (8))){
var inst_18307 = (state_18343[(8)]);
var inst_18316 = (state_18343[(11)]);
var tmp18360 = inst_18307;
var inst_18307__$1 = tmp18360;
var inst_18308 = inst_18316;
var state_18343__$1 = (function (){var statearr_18364 = state_18343;
(statearr_18364[(7)] = inst_18308);

(statearr_18364[(8)] = inst_18307__$1);

return statearr_18364;
})();
var statearr_18365_18385 = state_18343__$1;
(statearr_18365_18385[(2)] = null);

(statearr_18365_18385[(1)] = (2));


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
});})(c__16231__auto___18371,out))
;
return ((function (switch__15665__auto__,c__16231__auto___18371,out){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_18366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18366[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_18366[(1)] = (1));

return statearr_18366;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_18343){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_18343);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e18367){if((e18367 instanceof Object)){
var ex__15669__auto__ = e18367;
var statearr_18368_18386 = state_18343;
(statearr_18368_18386[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18387 = state_18343;
state_18343 = G__18387;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_18343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_18343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___18371,out))
})();
var state__16233__auto__ = (function (){var statearr_18369 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_18369[(6)] = c__16231__auto___18371);

return statearr_18369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___18371,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18389 = arguments.length;
switch (G__18389) {
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
var c__16231__auto___18459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16231__auto___18459,out){
return (function (){
var f__16232__auto__ = (function (){var switch__15665__auto__ = ((function (c__16231__auto___18459,out){
return (function (state_18431){
var state_val_18432 = (state_18431[(1)]);
if((state_val_18432 === (7))){
var inst_18427 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18433_18460 = state_18431__$1;
(statearr_18433_18460[(2)] = inst_18427);

(statearr_18433_18460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (1))){
var inst_18390 = [];
var inst_18391 = inst_18390;
var inst_18392 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18431__$1 = (function (){var statearr_18434 = state_18431;
(statearr_18434[(7)] = inst_18391);

(statearr_18434[(8)] = inst_18392);

return statearr_18434;
})();
var statearr_18435_18461 = state_18431__$1;
(statearr_18435_18461[(2)] = null);

(statearr_18435_18461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (4))){
var inst_18395 = (state_18431[(9)]);
var inst_18395__$1 = (state_18431[(2)]);
var inst_18396 = (inst_18395__$1 == null);
var inst_18397 = cljs.core.not(inst_18396);
var state_18431__$1 = (function (){var statearr_18436 = state_18431;
(statearr_18436[(9)] = inst_18395__$1);

return statearr_18436;
})();
if(inst_18397){
var statearr_18437_18462 = state_18431__$1;
(statearr_18437_18462[(1)] = (5));

} else {
var statearr_18438_18463 = state_18431__$1;
(statearr_18438_18463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (15))){
var inst_18421 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18439_18464 = state_18431__$1;
(statearr_18439_18464[(2)] = inst_18421);

(statearr_18439_18464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (13))){
var state_18431__$1 = state_18431;
var statearr_18440_18465 = state_18431__$1;
(statearr_18440_18465[(2)] = null);

(statearr_18440_18465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (6))){
var inst_18391 = (state_18431[(7)]);
var inst_18416 = inst_18391.length;
var inst_18417 = (inst_18416 > (0));
var state_18431__$1 = state_18431;
if(cljs.core.truth_(inst_18417)){
var statearr_18441_18466 = state_18431__$1;
(statearr_18441_18466[(1)] = (12));

} else {
var statearr_18442_18467 = state_18431__$1;
(statearr_18442_18467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (3))){
var inst_18429 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18431__$1,inst_18429);
} else {
if((state_val_18432 === (12))){
var inst_18391 = (state_18431[(7)]);
var inst_18419 = cljs.core.vec(inst_18391);
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18431__$1,(15),out,inst_18419);
} else {
if((state_val_18432 === (2))){
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18431__$1,(4),ch);
} else {
if((state_val_18432 === (11))){
var inst_18395 = (state_18431[(9)]);
var inst_18399 = (state_18431[(10)]);
var inst_18409 = (state_18431[(2)]);
var inst_18410 = [];
var inst_18411 = inst_18410.push(inst_18395);
var inst_18391 = inst_18410;
var inst_18392 = inst_18399;
var state_18431__$1 = (function (){var statearr_18443 = state_18431;
(statearr_18443[(11)] = inst_18411);

(statearr_18443[(7)] = inst_18391);

(statearr_18443[(8)] = inst_18392);

(statearr_18443[(12)] = inst_18409);

return statearr_18443;
})();
var statearr_18444_18468 = state_18431__$1;
(statearr_18444_18468[(2)] = null);

(statearr_18444_18468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (9))){
var inst_18391 = (state_18431[(7)]);
var inst_18407 = cljs.core.vec(inst_18391);
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18431__$1,(11),out,inst_18407);
} else {
if((state_val_18432 === (5))){
var inst_18392 = (state_18431[(8)]);
var inst_18395 = (state_18431[(9)]);
var inst_18399 = (state_18431[(10)]);
var inst_18399__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18395) : f.call(null,inst_18395));
var inst_18400 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18399__$1,inst_18392);
var inst_18401 = cljs.core.keyword_identical_QMARK_(inst_18392,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18402 = ((inst_18400) || (inst_18401));
var state_18431__$1 = (function (){var statearr_18445 = state_18431;
(statearr_18445[(10)] = inst_18399__$1);

return statearr_18445;
})();
if(cljs.core.truth_(inst_18402)){
var statearr_18446_18469 = state_18431__$1;
(statearr_18446_18469[(1)] = (8));

} else {
var statearr_18447_18470 = state_18431__$1;
(statearr_18447_18470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (14))){
var inst_18424 = (state_18431[(2)]);
var inst_18425 = cljs.core.async.close_BANG_(out);
var state_18431__$1 = (function (){var statearr_18449 = state_18431;
(statearr_18449[(13)] = inst_18424);

return statearr_18449;
})();
var statearr_18450_18471 = state_18431__$1;
(statearr_18450_18471[(2)] = inst_18425);

(statearr_18450_18471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (10))){
var inst_18414 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18451_18472 = state_18431__$1;
(statearr_18451_18472[(2)] = inst_18414);

(statearr_18451_18472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (8))){
var inst_18391 = (state_18431[(7)]);
var inst_18395 = (state_18431[(9)]);
var inst_18399 = (state_18431[(10)]);
var inst_18404 = inst_18391.push(inst_18395);
var tmp18448 = inst_18391;
var inst_18391__$1 = tmp18448;
var inst_18392 = inst_18399;
var state_18431__$1 = (function (){var statearr_18452 = state_18431;
(statearr_18452[(14)] = inst_18404);

(statearr_18452[(7)] = inst_18391__$1);

(statearr_18452[(8)] = inst_18392);

return statearr_18452;
})();
var statearr_18453_18473 = state_18431__$1;
(statearr_18453_18473[(2)] = null);

(statearr_18453_18473[(1)] = (2));


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
});})(c__16231__auto___18459,out))
;
return ((function (switch__15665__auto__,c__16231__auto___18459,out){
return (function() {
var cljs$core$async$state_machine__15666__auto__ = null;
var cljs$core$async$state_machine__15666__auto____0 = (function (){
var statearr_18454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18454[(0)] = cljs$core$async$state_machine__15666__auto__);

(statearr_18454[(1)] = (1));

return statearr_18454;
});
var cljs$core$async$state_machine__15666__auto____1 = (function (state_18431){
while(true){
var ret_value__15667__auto__ = (function (){try{while(true){
var result__15668__auto__ = switch__15665__auto__(state_18431);
if(cljs.core.keyword_identical_QMARK_(result__15668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15668__auto__;
}
break;
}
}catch (e18455){if((e18455 instanceof Object)){
var ex__15669__auto__ = e18455;
var statearr_18456_18474 = state_18431;
(statearr_18456_18474[(5)] = ex__15669__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18475 = state_18431;
state_18431 = G__18475;
continue;
} else {
return ret_value__15667__auto__;
}
break;
}
});
cljs$core$async$state_machine__15666__auto__ = function(state_18431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15666__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15666__auto____1.call(this,state_18431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15666__auto____0;
cljs$core$async$state_machine__15666__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15666__auto____1;
return cljs$core$async$state_machine__15666__auto__;
})()
;})(switch__15665__auto__,c__16231__auto___18459,out))
})();
var state__16233__auto__ = (function (){var statearr_18457 = (f__16232__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16232__auto__.cljs$core$IFn$_invoke$arity$0() : f__16232__auto__.call(null));
(statearr_18457[(6)] = c__16231__auto___18459);

return statearr_18457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16233__auto__);
});})(c__16231__auto___18459,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
