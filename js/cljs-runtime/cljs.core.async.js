goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15742 = arguments.length;
switch (G__15742) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15749 = (function (f,blockable,meta15750){
this.f = f;
this.blockable = blockable;
this.meta15750 = meta15750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15751,meta15750__$1){
var self__ = this;
var _15751__$1 = this;
return (new cljs.core.async.t_cljs$core$async15749(self__.f,self__.blockable,meta15750__$1));
});

cljs.core.async.t_cljs$core$async15749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15751){
var self__ = this;
var _15751__$1 = this;
return self__.meta15750;
});

cljs.core.async.t_cljs$core$async15749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15750","meta15750",1182953854,null)], null);
});

cljs.core.async.t_cljs$core$async15749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15749";

cljs.core.async.t_cljs$core$async15749.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async15749");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15749.
 */
cljs.core.async.__GT_t_cljs$core$async15749 = (function cljs$core$async$__GT_t_cljs$core$async15749(f__$1,blockable__$1,meta15750){
return (new cljs.core.async.t_cljs$core$async15749(f__$1,blockable__$1,meta15750));
});

}

return (new cljs.core.async.t_cljs$core$async15749(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15796 = arguments.length;
switch (G__15796) {
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
var G__15804 = arguments.length;
switch (G__15804) {
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
var G__15819 = arguments.length;
switch (G__15819) {
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
var val_18190 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18190) : fn1.call(null,val_18190));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18190,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18190) : fn1.call(null,val_18190));
});})(val_18190,ret))
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
var G__15850 = arguments.length;
switch (G__15850) {
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
var n__4518__auto___18218 = n;
var x_18219 = (0);
while(true){
if((x_18219 < n__4518__auto___18218)){
(a[x_18219] = (0));

var G__18221 = (x_18219 + (1));
x_18219 = G__18221;
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

var G__18222 = (i + (1));
i = G__18222;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15947 = (function (flag,meta15948){
this.flag = flag;
this.meta15948 = meta15948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15949,meta15948__$1){
var self__ = this;
var _15949__$1 = this;
return (new cljs.core.async.t_cljs$core$async15947(self__.flag,meta15948__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15949){
var self__ = this;
var _15949__$1 = this;
return self__.meta15948;
});})(flag))
;

cljs.core.async.t_cljs$core$async15947.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15947.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15947.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15948","meta15948",-1609912557,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15947";

cljs.core.async.t_cljs$core$async15947.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async15947");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15947.
 */
cljs.core.async.__GT_t_cljs$core$async15947 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15947(flag__$1,meta15948){
return (new cljs.core.async.t_cljs$core$async15947(flag__$1,meta15948));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15947(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15973 = (function (flag,cb,meta15974){
this.flag = flag;
this.cb = cb;
this.meta15974 = meta15974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15975,meta15974__$1){
var self__ = this;
var _15975__$1 = this;
return (new cljs.core.async.t_cljs$core$async15973(self__.flag,self__.cb,meta15974__$1));
});

cljs.core.async.t_cljs$core$async15973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15975){
var self__ = this;
var _15975__$1 = this;
return self__.meta15974;
});

cljs.core.async.t_cljs$core$async15973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15974","meta15974",-1830513523,null)], null);
});

cljs.core.async.t_cljs$core$async15973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15973";

cljs.core.async.t_cljs$core$async15973.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async15973");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15973.
 */
cljs.core.async.__GT_t_cljs$core$async15973 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15973(flag__$1,cb__$1,meta15974){
return (new cljs.core.async.t_cljs$core$async15973(flag__$1,cb__$1,meta15974));
});

}

return (new cljs.core.async.t_cljs$core$async15973(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15991_SHARP_){
var G__15998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15991_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15998) : fret.call(null,G__15998));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15992_SHARP_){
var G__15999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15992_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15999) : fret.call(null,G__15999));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18249 = (i + (1));
i = G__18249;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
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
var args__4647__auto__ = [];
var len__4641__auto___18261 = arguments.length;
var i__4642__auto___18263 = (0);
while(true){
if((i__4642__auto___18263 < len__4641__auto___18261)){
args__4647__auto__.push((arguments[i__4642__auto___18263]));

var G__18265 = (i__4642__auto___18263 + (1));
i__4642__auto___18263 = G__18265;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16011){
var map__16012 = p__16011;
var map__16012__$1 = (((((!((map__16012 == null))))?(((((map__16012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16012):map__16012);
var opts = map__16012__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16001){
var G__16002 = cljs.core.first(seq16001);
var seq16001__$1 = cljs.core.next(seq16001);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16002,seq16001__$1);
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
var G__16040 = arguments.length;
switch (G__16040) {
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
var c__15513__auto___18273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___18273){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___18273){
return (function (state_16116){
var state_val_16117 = (state_16116[(1)]);
if((state_val_16117 === (7))){
var inst_16111 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
var statearr_16119_18274 = state_16116__$1;
(statearr_16119_18274[(2)] = inst_16111);

(statearr_16119_18274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (1))){
var state_16116__$1 = state_16116;
var statearr_16120_18275 = state_16116__$1;
(statearr_16120_18275[(2)] = null);

(statearr_16120_18275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (4))){
var inst_16094 = (state_16116[(7)]);
var inst_16094__$1 = (state_16116[(2)]);
var inst_16095 = (inst_16094__$1 == null);
var state_16116__$1 = (function (){var statearr_16122 = state_16116;
(statearr_16122[(7)] = inst_16094__$1);

return statearr_16122;
})();
if(cljs.core.truth_(inst_16095)){
var statearr_16123_18276 = state_16116__$1;
(statearr_16123_18276[(1)] = (5));

} else {
var statearr_16124_18278 = state_16116__$1;
(statearr_16124_18278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (13))){
var state_16116__$1 = state_16116;
var statearr_16126_18282 = state_16116__$1;
(statearr_16126_18282[(2)] = null);

(statearr_16126_18282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (6))){
var inst_16094 = (state_16116[(7)]);
var state_16116__$1 = state_16116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16116__$1,(11),to,inst_16094);
} else {
if((state_val_16117 === (3))){
var inst_16113 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16116__$1,inst_16113);
} else {
if((state_val_16117 === (12))){
var state_16116__$1 = state_16116;
var statearr_16131_18284 = state_16116__$1;
(statearr_16131_18284[(2)] = null);

(statearr_16131_18284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (2))){
var state_16116__$1 = state_16116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16116__$1,(4),from);
} else {
if((state_val_16117 === (11))){
var inst_16104 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
if(cljs.core.truth_(inst_16104)){
var statearr_16134_18286 = state_16116__$1;
(statearr_16134_18286[(1)] = (12));

} else {
var statearr_16135_18287 = state_16116__$1;
(statearr_16135_18287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (9))){
var state_16116__$1 = state_16116;
var statearr_16136_18289 = state_16116__$1;
(statearr_16136_18289[(2)] = null);

(statearr_16136_18289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (5))){
var state_16116__$1 = state_16116;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16139_18290 = state_16116__$1;
(statearr_16139_18290[(1)] = (8));

} else {
var statearr_16141_18291 = state_16116__$1;
(statearr_16141_18291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (14))){
var inst_16109 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
var statearr_16142_18294 = state_16116__$1;
(statearr_16142_18294[(2)] = inst_16109);

(statearr_16142_18294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (10))){
var inst_16101 = (state_16116[(2)]);
var state_16116__$1 = state_16116;
var statearr_16144_18296 = state_16116__$1;
(statearr_16144_18296[(2)] = inst_16101);

(statearr_16144_18296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16117 === (8))){
var inst_16098 = cljs.core.async.close_BANG_(to);
var state_16116__$1 = state_16116;
var statearr_16145_18297 = state_16116__$1;
(statearr_16145_18297[(2)] = inst_16098);

(statearr_16145_18297[(1)] = (10));


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
});})(c__15513__auto___18273))
;
return ((function (switch__14929__auto__,c__15513__auto___18273){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_16147 = [null,null,null,null,null,null,null,null];
(statearr_16147[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_16147[(1)] = (1));

return statearr_16147;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_16116){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16116);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16150){if((e16150 instanceof Object)){
var ex__14933__auto__ = e16150;
var statearr_16153_18301 = state_16116;
(statearr_16153_18301[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18305 = state_16116;
state_16116 = G__18305;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_16116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_16116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___18273))
})();
var state__15515__auto__ = (function (){var statearr_16156 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16156[(6)] = c__15513__auto___18273);

return statearr_16156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___18273))
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
return (function (p__16159){
var vec__16162 = p__16159;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162,(1),null);
var job = vec__16162;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15513__auto___18310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___18310,res,vec__16162,v,p,job,jobs,results){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___18310,res,vec__16162,v,p,job,jobs,results){
return (function (state_16169){
var state_val_16170 = (state_16169[(1)]);
if((state_val_16170 === (1))){
var state_16169__$1 = state_16169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16169__$1,(2),res,v);
} else {
if((state_val_16170 === (2))){
var inst_16166 = (state_16169[(2)]);
var inst_16167 = cljs.core.async.close_BANG_(res);
var state_16169__$1 = (function (){var statearr_16173 = state_16169;
(statearr_16173[(7)] = inst_16166);

return statearr_16173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16169__$1,inst_16167);
} else {
return null;
}
}
});})(c__15513__auto___18310,res,vec__16162,v,p,job,jobs,results))
;
return ((function (switch__14929__auto__,c__15513__auto___18310,res,vec__16162,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0 = (function (){
var statearr_16174 = [null,null,null,null,null,null,null,null];
(statearr_16174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__);

(statearr_16174[(1)] = (1));

return statearr_16174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1 = (function (state_16169){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16169);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16175){if((e16175 instanceof Object)){
var ex__14933__auto__ = e16175;
var statearr_16176_18316 = state_16169;
(statearr_16176_18316[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18318 = state_16169;
state_16169 = G__18318;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = function(state_16169){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1.call(this,state_16169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___18310,res,vec__16162,v,p,job,jobs,results))
})();
var state__15515__auto__ = (function (){var statearr_16177 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16177[(6)] = c__15513__auto___18310);

return statearr_16177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___18310,res,vec__16162,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16179){
var vec__16181 = p__16179;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16181,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16181,(1),null);
var job = vec__16181;
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
var n__4518__auto___18321 = n;
var __18322 = (0);
while(true){
if((__18322 < n__4518__auto___18321)){
var G__16184_18323 = type;
var G__16184_18324__$1 = (((G__16184_18323 instanceof cljs.core.Keyword))?G__16184_18323.fqn:null);
switch (G__16184_18324__$1) {
case "compute":
var c__15513__auto___18326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18322,c__15513__auto___18326,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (__18322,c__15513__auto___18326,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async){
return (function (state_16200){
var state_val_16201 = (state_16200[(1)]);
if((state_val_16201 === (1))){
var state_16200__$1 = state_16200;
var statearr_16202_18328 = state_16200__$1;
(statearr_16202_18328[(2)] = null);

(statearr_16202_18328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (2))){
var state_16200__$1 = state_16200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16200__$1,(4),jobs);
} else {
if((state_val_16201 === (3))){
var inst_16198 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16200__$1,inst_16198);
} else {
if((state_val_16201 === (4))){
var inst_16190 = (state_16200[(2)]);
var inst_16191 = process(inst_16190);
var state_16200__$1 = state_16200;
if(cljs.core.truth_(inst_16191)){
var statearr_16204_18330 = state_16200__$1;
(statearr_16204_18330[(1)] = (5));

} else {
var statearr_16205_18331 = state_16200__$1;
(statearr_16205_18331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (5))){
var state_16200__$1 = state_16200;
var statearr_16208_18332 = state_16200__$1;
(statearr_16208_18332[(2)] = null);

(statearr_16208_18332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (6))){
var state_16200__$1 = state_16200;
var statearr_16209_18333 = state_16200__$1;
(statearr_16209_18333[(2)] = null);

(statearr_16209_18333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (7))){
var inst_16196 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
var statearr_16210_18334 = state_16200__$1;
(statearr_16210_18334[(2)] = inst_16196);

(statearr_16210_18334[(1)] = (3));


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
});})(__18322,c__15513__auto___18326,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async))
;
return ((function (__18322,switch__14929__auto__,c__15513__auto___18326,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0 = (function (){
var statearr_16212 = [null,null,null,null,null,null,null];
(statearr_16212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__);

(statearr_16212[(1)] = (1));

return statearr_16212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1 = (function (state_16200){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16200);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16215){if((e16215 instanceof Object)){
var ex__14933__auto__ = e16215;
var statearr_16218_18337 = state_16200;
(statearr_16218_18337[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18338 = state_16200;
state_16200 = G__18338;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = function(state_16200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1.call(this,state_16200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__;
})()
;})(__18322,switch__14929__auto__,c__15513__auto___18326,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async))
})();
var state__15515__auto__ = (function (){var statearr_16223 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16223[(6)] = c__15513__auto___18326);

return statearr_16223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(__18322,c__15513__auto___18326,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async))
);


break;
case "async":
var c__15513__auto___18340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18322,c__15513__auto___18340,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (__18322,c__15513__auto___18340,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async){
return (function (state_16236){
var state_val_16237 = (state_16236[(1)]);
if((state_val_16237 === (1))){
var state_16236__$1 = state_16236;
var statearr_16238_18343 = state_16236__$1;
(statearr_16238_18343[(2)] = null);

(statearr_16238_18343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (2))){
var state_16236__$1 = state_16236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16236__$1,(4),jobs);
} else {
if((state_val_16237 === (3))){
var inst_16234 = (state_16236[(2)]);
var state_16236__$1 = state_16236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16236__$1,inst_16234);
} else {
if((state_val_16237 === (4))){
var inst_16226 = (state_16236[(2)]);
var inst_16227 = async(inst_16226);
var state_16236__$1 = state_16236;
if(cljs.core.truth_(inst_16227)){
var statearr_16241_18346 = state_16236__$1;
(statearr_16241_18346[(1)] = (5));

} else {
var statearr_16242_18349 = state_16236__$1;
(statearr_16242_18349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (5))){
var state_16236__$1 = state_16236;
var statearr_16243_18350 = state_16236__$1;
(statearr_16243_18350[(2)] = null);

(statearr_16243_18350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (6))){
var state_16236__$1 = state_16236;
var statearr_16247_18353 = state_16236__$1;
(statearr_16247_18353[(2)] = null);

(statearr_16247_18353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (7))){
var inst_16232 = (state_16236[(2)]);
var state_16236__$1 = state_16236;
var statearr_16248_18357 = state_16236__$1;
(statearr_16248_18357[(2)] = inst_16232);

(statearr_16248_18357[(1)] = (3));


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
});})(__18322,c__15513__auto___18340,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async))
;
return ((function (__18322,switch__14929__auto__,c__15513__auto___18340,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0 = (function (){
var statearr_16249 = [null,null,null,null,null,null,null];
(statearr_16249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__);

(statearr_16249[(1)] = (1));

return statearr_16249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1 = (function (state_16236){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16236);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16250){if((e16250 instanceof Object)){
var ex__14933__auto__ = e16250;
var statearr_16251_18362 = state_16236;
(statearr_16251_18362[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16250;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18365 = state_16236;
state_16236 = G__18365;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = function(state_16236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1.call(this,state_16236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__;
})()
;})(__18322,switch__14929__auto__,c__15513__auto___18340,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async))
})();
var state__15515__auto__ = (function (){var statearr_16256 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16256[(6)] = c__15513__auto___18340);

return statearr_16256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(__18322,c__15513__auto___18340,G__16184_18323,G__16184_18324__$1,n__4518__auto___18321,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16184_18324__$1)].join('')));

}

var G__18366 = (__18322 + (1));
__18322 = G__18366;
continue;
} else {
}
break;
}

var c__15513__auto___18367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___18367,jobs,results,process,async){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___18367,jobs,results,process,async){
return (function (state_16281){
var state_val_16282 = (state_16281[(1)]);
if((state_val_16282 === (1))){
var state_16281__$1 = state_16281;
var statearr_16284_18368 = state_16281__$1;
(statearr_16284_18368[(2)] = null);

(statearr_16284_18368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (2))){
var state_16281__$1 = state_16281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16281__$1,(4),from);
} else {
if((state_val_16282 === (3))){
var inst_16279 = (state_16281[(2)]);
var state_16281__$1 = state_16281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16281__$1,inst_16279);
} else {
if((state_val_16282 === (4))){
var inst_16262 = (state_16281[(7)]);
var inst_16262__$1 = (state_16281[(2)]);
var inst_16263 = (inst_16262__$1 == null);
var state_16281__$1 = (function (){var statearr_16289 = state_16281;
(statearr_16289[(7)] = inst_16262__$1);

return statearr_16289;
})();
if(cljs.core.truth_(inst_16263)){
var statearr_16290_18370 = state_16281__$1;
(statearr_16290_18370[(1)] = (5));

} else {
var statearr_16291_18371 = state_16281__$1;
(statearr_16291_18371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (5))){
var inst_16265 = cljs.core.async.close_BANG_(jobs);
var state_16281__$1 = state_16281;
var statearr_16292_18372 = state_16281__$1;
(statearr_16292_18372[(2)] = inst_16265);

(statearr_16292_18372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (6))){
var inst_16267 = (state_16281[(8)]);
var inst_16262 = (state_16281[(7)]);
var inst_16267__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16269 = [inst_16262,inst_16267__$1];
var inst_16270 = (new cljs.core.PersistentVector(null,2,(5),inst_16268,inst_16269,null));
var state_16281__$1 = (function (){var statearr_16293 = state_16281;
(statearr_16293[(8)] = inst_16267__$1);

return statearr_16293;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16281__$1,(8),jobs,inst_16270);
} else {
if((state_val_16282 === (7))){
var inst_16277 = (state_16281[(2)]);
var state_16281__$1 = state_16281;
var statearr_16294_18377 = state_16281__$1;
(statearr_16294_18377[(2)] = inst_16277);

(statearr_16294_18377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16282 === (8))){
var inst_16267 = (state_16281[(8)]);
var inst_16272 = (state_16281[(2)]);
var state_16281__$1 = (function (){var statearr_16296 = state_16281;
(statearr_16296[(9)] = inst_16272);

return statearr_16296;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16281__$1,(9),results,inst_16267);
} else {
if((state_val_16282 === (9))){
var inst_16274 = (state_16281[(2)]);
var state_16281__$1 = (function (){var statearr_16298 = state_16281;
(statearr_16298[(10)] = inst_16274);

return statearr_16298;
})();
var statearr_16299_18381 = state_16281__$1;
(statearr_16299_18381[(2)] = null);

(statearr_16299_18381[(1)] = (2));


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
});})(c__15513__auto___18367,jobs,results,process,async))
;
return ((function (switch__14929__auto__,c__15513__auto___18367,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0 = (function (){
var statearr_16300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__);

(statearr_16300[(1)] = (1));

return statearr_16300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1 = (function (state_16281){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16281);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16301){if((e16301 instanceof Object)){
var ex__14933__auto__ = e16301;
var statearr_16302_18385 = state_16281;
(statearr_16302_18385[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18391 = state_16281;
state_16281 = G__18391;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = function(state_16281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1.call(this,state_16281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___18367,jobs,results,process,async))
})();
var state__15515__auto__ = (function (){var statearr_16303 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16303[(6)] = c__15513__auto___18367);

return statearr_16303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___18367,jobs,results,process,async))
);


var c__15513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto__,jobs,results,process,async){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto__,jobs,results,process,async){
return (function (state_16345){
var state_val_16346 = (state_16345[(1)]);
if((state_val_16346 === (7))){
var inst_16341 = (state_16345[(2)]);
var state_16345__$1 = state_16345;
var statearr_16349_18401 = state_16345__$1;
(statearr_16349_18401[(2)] = inst_16341);

(statearr_16349_18401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (20))){
var state_16345__$1 = state_16345;
var statearr_16350_18402 = state_16345__$1;
(statearr_16350_18402[(2)] = null);

(statearr_16350_18402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (1))){
var state_16345__$1 = state_16345;
var statearr_16351_18406 = state_16345__$1;
(statearr_16351_18406[(2)] = null);

(statearr_16351_18406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (4))){
var inst_16307 = (state_16345[(7)]);
var inst_16307__$1 = (state_16345[(2)]);
var inst_16310 = (inst_16307__$1 == null);
var state_16345__$1 = (function (){var statearr_16353 = state_16345;
(statearr_16353[(7)] = inst_16307__$1);

return statearr_16353;
})();
if(cljs.core.truth_(inst_16310)){
var statearr_16355_18407 = state_16345__$1;
(statearr_16355_18407[(1)] = (5));

} else {
var statearr_16356_18408 = state_16345__$1;
(statearr_16356_18408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (15))){
var inst_16323 = (state_16345[(8)]);
var state_16345__$1 = state_16345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16345__$1,(18),to,inst_16323);
} else {
if((state_val_16346 === (21))){
var inst_16336 = (state_16345[(2)]);
var state_16345__$1 = state_16345;
var statearr_16358_18412 = state_16345__$1;
(statearr_16358_18412[(2)] = inst_16336);

(statearr_16358_18412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (13))){
var inst_16338 = (state_16345[(2)]);
var state_16345__$1 = (function (){var statearr_16360 = state_16345;
(statearr_16360[(9)] = inst_16338);

return statearr_16360;
})();
var statearr_16361_18419 = state_16345__$1;
(statearr_16361_18419[(2)] = null);

(statearr_16361_18419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (6))){
var inst_16307 = (state_16345[(7)]);
var state_16345__$1 = state_16345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16345__$1,(11),inst_16307);
} else {
if((state_val_16346 === (17))){
var inst_16331 = (state_16345[(2)]);
var state_16345__$1 = state_16345;
if(cljs.core.truth_(inst_16331)){
var statearr_16362_18423 = state_16345__$1;
(statearr_16362_18423[(1)] = (19));

} else {
var statearr_16363_18424 = state_16345__$1;
(statearr_16363_18424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (3))){
var inst_16343 = (state_16345[(2)]);
var state_16345__$1 = state_16345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16345__$1,inst_16343);
} else {
if((state_val_16346 === (12))){
var inst_16320 = (state_16345[(10)]);
var state_16345__$1 = state_16345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16345__$1,(14),inst_16320);
} else {
if((state_val_16346 === (2))){
var state_16345__$1 = state_16345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16345__$1,(4),results);
} else {
if((state_val_16346 === (19))){
var state_16345__$1 = state_16345;
var statearr_16365_18428 = state_16345__$1;
(statearr_16365_18428[(2)] = null);

(statearr_16365_18428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (11))){
var inst_16320 = (state_16345[(2)]);
var state_16345__$1 = (function (){var statearr_16366 = state_16345;
(statearr_16366[(10)] = inst_16320);

return statearr_16366;
})();
var statearr_16367_18433 = state_16345__$1;
(statearr_16367_18433[(2)] = null);

(statearr_16367_18433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (9))){
var state_16345__$1 = state_16345;
var statearr_16368_18437 = state_16345__$1;
(statearr_16368_18437[(2)] = null);

(statearr_16368_18437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (5))){
var state_16345__$1 = state_16345;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16370_18441 = state_16345__$1;
(statearr_16370_18441[(1)] = (8));

} else {
var statearr_16371_18442 = state_16345__$1;
(statearr_16371_18442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (14))){
var inst_16325 = (state_16345[(11)]);
var inst_16323 = (state_16345[(8)]);
var inst_16323__$1 = (state_16345[(2)]);
var inst_16324 = (inst_16323__$1 == null);
var inst_16325__$1 = cljs.core.not(inst_16324);
var state_16345__$1 = (function (){var statearr_16372 = state_16345;
(statearr_16372[(11)] = inst_16325__$1);

(statearr_16372[(8)] = inst_16323__$1);

return statearr_16372;
})();
if(inst_16325__$1){
var statearr_16373_18449 = state_16345__$1;
(statearr_16373_18449[(1)] = (15));

} else {
var statearr_16374_18450 = state_16345__$1;
(statearr_16374_18450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (16))){
var inst_16325 = (state_16345[(11)]);
var state_16345__$1 = state_16345;
var statearr_16375_18451 = state_16345__$1;
(statearr_16375_18451[(2)] = inst_16325);

(statearr_16375_18451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (10))){
var inst_16317 = (state_16345[(2)]);
var state_16345__$1 = state_16345;
var statearr_16376_18452 = state_16345__$1;
(statearr_16376_18452[(2)] = inst_16317);

(statearr_16376_18452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (18))){
var inst_16328 = (state_16345[(2)]);
var state_16345__$1 = state_16345;
var statearr_16377_18454 = state_16345__$1;
(statearr_16377_18454[(2)] = inst_16328);

(statearr_16377_18454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16346 === (8))){
var inst_16313 = cljs.core.async.close_BANG_(to);
var state_16345__$1 = state_16345;
var statearr_16378_18455 = state_16345__$1;
(statearr_16378_18455[(2)] = inst_16313);

(statearr_16378_18455[(1)] = (10));


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
});})(c__15513__auto__,jobs,results,process,async))
;
return ((function (switch__14929__auto__,c__15513__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0 = (function (){
var statearr_16379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__);

(statearr_16379[(1)] = (1));

return statearr_16379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1 = (function (state_16345){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16345);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16380){if((e16380 instanceof Object)){
var ex__14933__auto__ = e16380;
var statearr_16381_18459 = state_16345;
(statearr_16381_18459[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18460 = state_16345;
state_16345 = G__18460;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__ = function(state_16345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1.call(this,state_16345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto__,jobs,results,process,async))
})();
var state__15515__auto__ = (function (){var statearr_16383 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16383[(6)] = c__15513__auto__);

return statearr_16383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto__,jobs,results,process,async))
);

return c__15513__auto__;
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
var G__16388 = arguments.length;
switch (G__16388) {
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
var G__16390 = arguments.length;
switch (G__16390) {
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
var G__16393 = arguments.length;
switch (G__16393) {
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
var c__15513__auto___18486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___18486,tc,fc){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___18486,tc,fc){
return (function (state_16420){
var state_val_16421 = (state_16420[(1)]);
if((state_val_16421 === (7))){
var inst_16416 = (state_16420[(2)]);
var state_16420__$1 = state_16420;
var statearr_16422_18490 = state_16420__$1;
(statearr_16422_18490[(2)] = inst_16416);

(statearr_16422_18490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (1))){
var state_16420__$1 = state_16420;
var statearr_16426_18491 = state_16420__$1;
(statearr_16426_18491[(2)] = null);

(statearr_16426_18491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (4))){
var inst_16396 = (state_16420[(7)]);
var inst_16396__$1 = (state_16420[(2)]);
var inst_16397 = (inst_16396__$1 == null);
var state_16420__$1 = (function (){var statearr_16427 = state_16420;
(statearr_16427[(7)] = inst_16396__$1);

return statearr_16427;
})();
if(cljs.core.truth_(inst_16397)){
var statearr_16428_18494 = state_16420__$1;
(statearr_16428_18494[(1)] = (5));

} else {
var statearr_16429_18495 = state_16420__$1;
(statearr_16429_18495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (13))){
var state_16420__$1 = state_16420;
var statearr_16430_18499 = state_16420__$1;
(statearr_16430_18499[(2)] = null);

(statearr_16430_18499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (6))){
var inst_16396 = (state_16420[(7)]);
var inst_16402 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16396) : p.call(null,inst_16396));
var state_16420__$1 = state_16420;
if(cljs.core.truth_(inst_16402)){
var statearr_16432_18500 = state_16420__$1;
(statearr_16432_18500[(1)] = (9));

} else {
var statearr_16433_18501 = state_16420__$1;
(statearr_16433_18501[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (3))){
var inst_16418 = (state_16420[(2)]);
var state_16420__$1 = state_16420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16420__$1,inst_16418);
} else {
if((state_val_16421 === (12))){
var state_16420__$1 = state_16420;
var statearr_16434_18508 = state_16420__$1;
(statearr_16434_18508[(2)] = null);

(statearr_16434_18508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (2))){
var state_16420__$1 = state_16420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16420__$1,(4),ch);
} else {
if((state_val_16421 === (11))){
var inst_16396 = (state_16420[(7)]);
var inst_16406 = (state_16420[(2)]);
var state_16420__$1 = state_16420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16420__$1,(8),inst_16406,inst_16396);
} else {
if((state_val_16421 === (9))){
var state_16420__$1 = state_16420;
var statearr_16437_18518 = state_16420__$1;
(statearr_16437_18518[(2)] = tc);

(statearr_16437_18518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (5))){
var inst_16399 = cljs.core.async.close_BANG_(tc);
var inst_16400 = cljs.core.async.close_BANG_(fc);
var state_16420__$1 = (function (){var statearr_16439 = state_16420;
(statearr_16439[(8)] = inst_16399);

return statearr_16439;
})();
var statearr_16440_18529 = state_16420__$1;
(statearr_16440_18529[(2)] = inst_16400);

(statearr_16440_18529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (14))){
var inst_16414 = (state_16420[(2)]);
var state_16420__$1 = state_16420;
var statearr_16441_18536 = state_16420__$1;
(statearr_16441_18536[(2)] = inst_16414);

(statearr_16441_18536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (10))){
var state_16420__$1 = state_16420;
var statearr_16448_18539 = state_16420__$1;
(statearr_16448_18539[(2)] = fc);

(statearr_16448_18539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16421 === (8))){
var inst_16408 = (state_16420[(2)]);
var state_16420__$1 = state_16420;
if(cljs.core.truth_(inst_16408)){
var statearr_16449_18542 = state_16420__$1;
(statearr_16449_18542[(1)] = (12));

} else {
var statearr_16450_18544 = state_16420__$1;
(statearr_16450_18544[(1)] = (13));

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
});})(c__15513__auto___18486,tc,fc))
;
return ((function (switch__14929__auto__,c__15513__auto___18486,tc,fc){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_16451 = [null,null,null,null,null,null,null,null,null];
(statearr_16451[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_16451[(1)] = (1));

return statearr_16451;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_16420){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16420);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16452){if((e16452 instanceof Object)){
var ex__14933__auto__ = e16452;
var statearr_16453_18553 = state_16420;
(statearr_16453_18553[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18554 = state_16420;
state_16420 = G__18554;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_16420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_16420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___18486,tc,fc))
})();
var state__15515__auto__ = (function (){var statearr_16454 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16454[(6)] = c__15513__auto___18486);

return statearr_16454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___18486,tc,fc))
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
var c__15513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto__){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto__){
return (function (state_16475){
var state_val_16476 = (state_16475[(1)]);
if((state_val_16476 === (7))){
var inst_16471 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
var statearr_16481_18557 = state_16475__$1;
(statearr_16481_18557[(2)] = inst_16471);

(statearr_16481_18557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (1))){
var inst_16455 = init;
var state_16475__$1 = (function (){var statearr_16483 = state_16475;
(statearr_16483[(7)] = inst_16455);

return statearr_16483;
})();
var statearr_16486_18558 = state_16475__$1;
(statearr_16486_18558[(2)] = null);

(statearr_16486_18558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (4))){
var inst_16458 = (state_16475[(8)]);
var inst_16458__$1 = (state_16475[(2)]);
var inst_16459 = (inst_16458__$1 == null);
var state_16475__$1 = (function (){var statearr_16489 = state_16475;
(statearr_16489[(8)] = inst_16458__$1);

return statearr_16489;
})();
if(cljs.core.truth_(inst_16459)){
var statearr_16490_18559 = state_16475__$1;
(statearr_16490_18559[(1)] = (5));

} else {
var statearr_16491_18560 = state_16475__$1;
(statearr_16491_18560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (6))){
var inst_16462 = (state_16475[(9)]);
var inst_16455 = (state_16475[(7)]);
var inst_16458 = (state_16475[(8)]);
var inst_16462__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16455,inst_16458) : f.call(null,inst_16455,inst_16458));
var inst_16463 = cljs.core.reduced_QMARK_(inst_16462__$1);
var state_16475__$1 = (function (){var statearr_16495 = state_16475;
(statearr_16495[(9)] = inst_16462__$1);

return statearr_16495;
})();
if(inst_16463){
var statearr_16496_18562 = state_16475__$1;
(statearr_16496_18562[(1)] = (8));

} else {
var statearr_16497_18563 = state_16475__$1;
(statearr_16497_18563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (3))){
var inst_16473 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16475__$1,inst_16473);
} else {
if((state_val_16476 === (2))){
var state_16475__$1 = state_16475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16475__$1,(4),ch);
} else {
if((state_val_16476 === (9))){
var inst_16462 = (state_16475[(9)]);
var inst_16455 = inst_16462;
var state_16475__$1 = (function (){var statearr_16498 = state_16475;
(statearr_16498[(7)] = inst_16455);

return statearr_16498;
})();
var statearr_16499_18569 = state_16475__$1;
(statearr_16499_18569[(2)] = null);

(statearr_16499_18569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (5))){
var inst_16455 = (state_16475[(7)]);
var state_16475__$1 = state_16475;
var statearr_16500_18570 = state_16475__$1;
(statearr_16500_18570[(2)] = inst_16455);

(statearr_16500_18570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (10))){
var inst_16469 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
var statearr_16503_18571 = state_16475__$1;
(statearr_16503_18571[(2)] = inst_16469);

(statearr_16503_18571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (8))){
var inst_16462 = (state_16475[(9)]);
var inst_16465 = cljs.core.deref(inst_16462);
var state_16475__$1 = state_16475;
var statearr_16504_18572 = state_16475__$1;
(statearr_16504_18572[(2)] = inst_16465);

(statearr_16504_18572[(1)] = (10));


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
});})(c__15513__auto__))
;
return ((function (switch__14929__auto__,c__15513__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14930__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14930__auto____0 = (function (){
var statearr_16508 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16508[(0)] = cljs$core$async$reduce_$_state_machine__14930__auto__);

(statearr_16508[(1)] = (1));

return statearr_16508;
});
var cljs$core$async$reduce_$_state_machine__14930__auto____1 = (function (state_16475){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16475);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16509){if((e16509 instanceof Object)){
var ex__14933__auto__ = e16509;
var statearr_16510_18575 = state_16475;
(statearr_16510_18575[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18577 = state_16475;
state_16475 = G__18577;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14930__auto__ = function(state_16475){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14930__auto____1.call(this,state_16475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14930__auto____0;
cljs$core$async$reduce_$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14930__auto____1;
return cljs$core$async$reduce_$_state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto__))
})();
var state__15515__auto__ = (function (){var statearr_16511 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16511[(6)] = c__15513__auto__);

return statearr_16511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto__))
);

return c__15513__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto__,f__$1){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto__,f__$1){
return (function (state_16520){
var state_val_16521 = (state_16520[(1)]);
if((state_val_16521 === (1))){
var inst_16515 = cljs.core.async.reduce(f__$1,init,ch);
var state_16520__$1 = state_16520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16520__$1,(2),inst_16515);
} else {
if((state_val_16521 === (2))){
var inst_16517 = (state_16520[(2)]);
var inst_16518 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16517) : f__$1.call(null,inst_16517));
var state_16520__$1 = state_16520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16520__$1,inst_16518);
} else {
return null;
}
}
});})(c__15513__auto__,f__$1))
;
return ((function (switch__14929__auto__,c__15513__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14930__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14930__auto____0 = (function (){
var statearr_16524 = [null,null,null,null,null,null,null];
(statearr_16524[(0)] = cljs$core$async$transduce_$_state_machine__14930__auto__);

(statearr_16524[(1)] = (1));

return statearr_16524;
});
var cljs$core$async$transduce_$_state_machine__14930__auto____1 = (function (state_16520){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16520);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16525){if((e16525 instanceof Object)){
var ex__14933__auto__ = e16525;
var statearr_16526_18586 = state_16520;
(statearr_16526_18586[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18587 = state_16520;
state_16520 = G__18587;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14930__auto__ = function(state_16520){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14930__auto____1.call(this,state_16520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14930__auto____0;
cljs$core$async$transduce_$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14930__auto____1;
return cljs$core$async$transduce_$_state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto__,f__$1))
})();
var state__15515__auto__ = (function (){var statearr_16529 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16529[(6)] = c__15513__auto__);

return statearr_16529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto__,f__$1))
);

return c__15513__auto__;
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
var G__16541 = arguments.length;
switch (G__16541) {
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
var c__15513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto__){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto__){
return (function (state_16566){
var state_val_16567 = (state_16566[(1)]);
if((state_val_16567 === (7))){
var inst_16548 = (state_16566[(2)]);
var state_16566__$1 = state_16566;
var statearr_16568_18589 = state_16566__$1;
(statearr_16568_18589[(2)] = inst_16548);

(statearr_16568_18589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (1))){
var inst_16542 = cljs.core.seq(coll);
var inst_16543 = inst_16542;
var state_16566__$1 = (function (){var statearr_16569 = state_16566;
(statearr_16569[(7)] = inst_16543);

return statearr_16569;
})();
var statearr_16570_18592 = state_16566__$1;
(statearr_16570_18592[(2)] = null);

(statearr_16570_18592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (4))){
var inst_16543 = (state_16566[(7)]);
var inst_16546 = cljs.core.first(inst_16543);
var state_16566__$1 = state_16566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16566__$1,(7),ch,inst_16546);
} else {
if((state_val_16567 === (13))){
var inst_16560 = (state_16566[(2)]);
var state_16566__$1 = state_16566;
var statearr_16573_18593 = state_16566__$1;
(statearr_16573_18593[(2)] = inst_16560);

(statearr_16573_18593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (6))){
var inst_16551 = (state_16566[(2)]);
var state_16566__$1 = state_16566;
if(cljs.core.truth_(inst_16551)){
var statearr_16574_18594 = state_16566__$1;
(statearr_16574_18594[(1)] = (8));

} else {
var statearr_16575_18595 = state_16566__$1;
(statearr_16575_18595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (3))){
var inst_16564 = (state_16566[(2)]);
var state_16566__$1 = state_16566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16566__$1,inst_16564);
} else {
if((state_val_16567 === (12))){
var state_16566__$1 = state_16566;
var statearr_16576_18599 = state_16566__$1;
(statearr_16576_18599[(2)] = null);

(statearr_16576_18599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (2))){
var inst_16543 = (state_16566[(7)]);
var state_16566__$1 = state_16566;
if(cljs.core.truth_(inst_16543)){
var statearr_16577_18600 = state_16566__$1;
(statearr_16577_18600[(1)] = (4));

} else {
var statearr_16578_18601 = state_16566__$1;
(statearr_16578_18601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (11))){
var inst_16557 = cljs.core.async.close_BANG_(ch);
var state_16566__$1 = state_16566;
var statearr_16580_18602 = state_16566__$1;
(statearr_16580_18602[(2)] = inst_16557);

(statearr_16580_18602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (9))){
var state_16566__$1 = state_16566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16581_18605 = state_16566__$1;
(statearr_16581_18605[(1)] = (11));

} else {
var statearr_16582_18607 = state_16566__$1;
(statearr_16582_18607[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (5))){
var inst_16543 = (state_16566[(7)]);
var state_16566__$1 = state_16566;
var statearr_16583_18608 = state_16566__$1;
(statearr_16583_18608[(2)] = inst_16543);

(statearr_16583_18608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (10))){
var inst_16562 = (state_16566[(2)]);
var state_16566__$1 = state_16566;
var statearr_16584_18609 = state_16566__$1;
(statearr_16584_18609[(2)] = inst_16562);

(statearr_16584_18609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16567 === (8))){
var inst_16543 = (state_16566[(7)]);
var inst_16553 = cljs.core.next(inst_16543);
var inst_16543__$1 = inst_16553;
var state_16566__$1 = (function (){var statearr_16585 = state_16566;
(statearr_16585[(7)] = inst_16543__$1);

return statearr_16585;
})();
var statearr_16586_18614 = state_16566__$1;
(statearr_16586_18614[(2)] = null);

(statearr_16586_18614[(1)] = (2));


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
});})(c__15513__auto__))
;
return ((function (switch__14929__auto__,c__15513__auto__){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_16587 = [null,null,null,null,null,null,null,null];
(statearr_16587[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_16587[(1)] = (1));

return statearr_16587;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_16566){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16566);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16588){if((e16588 instanceof Object)){
var ex__14933__auto__ = e16588;
var statearr_16592_18619 = state_16566;
(statearr_16592_18619[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16588;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18620 = state_16566;
state_16566 = G__18620;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_16566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_16566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto__))
})();
var state__15515__auto__ = (function (){var statearr_16593 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16593[(6)] = c__15513__auto__);

return statearr_16593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto__))
);

return c__15513__auto__;
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
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
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
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
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
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16601 = (function (ch,cs,meta16602){
this.ch = ch;
this.cs = cs;
this.meta16602 = meta16602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16603,meta16602__$1){
var self__ = this;
var _16603__$1 = this;
return (new cljs.core.async.t_cljs$core$async16601(self__.ch,self__.cs,meta16602__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16603){
var self__ = this;
var _16603__$1 = this;
return self__.meta16602;
});})(cs))
;

cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16601.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16601.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16602","meta16602",2029699167,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16601";

cljs.core.async.t_cljs$core$async16601.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16601");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16601.
 */
cljs.core.async.__GT_t_cljs$core$async16601 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16601(ch__$1,cs__$1,meta16602){
return (new cljs.core.async.t_cljs$core$async16601(ch__$1,cs__$1,meta16602));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16601(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15513__auto___18661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___18661,cs,m,dchan,dctr,done){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___18661,cs,m,dchan,dctr,done){
return (function (state_16750){
var state_val_16751 = (state_16750[(1)]);
if((state_val_16751 === (7))){
var inst_16743 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16760_18662 = state_16750__$1;
(statearr_16760_18662[(2)] = inst_16743);

(statearr_16760_18662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (20))){
var inst_16637 = (state_16750[(7)]);
var inst_16649 = cljs.core.first(inst_16637);
var inst_16650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16649,(0),null);
var inst_16651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16649,(1),null);
var state_16750__$1 = (function (){var statearr_16782 = state_16750;
(statearr_16782[(8)] = inst_16650);

return statearr_16782;
})();
if(cljs.core.truth_(inst_16651)){
var statearr_16783_18663 = state_16750__$1;
(statearr_16783_18663[(1)] = (22));

} else {
var statearr_16784_18664 = state_16750__$1;
(statearr_16784_18664[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (27))){
var inst_16606 = (state_16750[(9)]);
var inst_16690 = (state_16750[(10)]);
var inst_16685 = (state_16750[(11)]);
var inst_16683 = (state_16750[(12)]);
var inst_16690__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16683,inst_16685);
var inst_16691 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16690__$1,inst_16606,done);
var state_16750__$1 = (function (){var statearr_16785 = state_16750;
(statearr_16785[(10)] = inst_16690__$1);

return statearr_16785;
})();
if(cljs.core.truth_(inst_16691)){
var statearr_16786_18669 = state_16750__$1;
(statearr_16786_18669[(1)] = (30));

} else {
var statearr_16787_18670 = state_16750__$1;
(statearr_16787_18670[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (1))){
var state_16750__$1 = state_16750;
var statearr_16788_18671 = state_16750__$1;
(statearr_16788_18671[(2)] = null);

(statearr_16788_18671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (24))){
var inst_16637 = (state_16750[(7)]);
var inst_16657 = (state_16750[(2)]);
var inst_16659 = cljs.core.next(inst_16637);
var inst_16615 = inst_16659;
var inst_16616 = null;
var inst_16617 = (0);
var inst_16618 = (0);
var state_16750__$1 = (function (){var statearr_16789 = state_16750;
(statearr_16789[(13)] = inst_16657);

(statearr_16789[(14)] = inst_16616);

(statearr_16789[(15)] = inst_16618);

(statearr_16789[(16)] = inst_16615);

(statearr_16789[(17)] = inst_16617);

return statearr_16789;
})();
var statearr_16790_18672 = state_16750__$1;
(statearr_16790_18672[(2)] = null);

(statearr_16790_18672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (39))){
var state_16750__$1 = state_16750;
var statearr_16799_18678 = state_16750__$1;
(statearr_16799_18678[(2)] = null);

(statearr_16799_18678[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (4))){
var inst_16606 = (state_16750[(9)]);
var inst_16606__$1 = (state_16750[(2)]);
var inst_16607 = (inst_16606__$1 == null);
var state_16750__$1 = (function (){var statearr_16800 = state_16750;
(statearr_16800[(9)] = inst_16606__$1);

return statearr_16800;
})();
if(cljs.core.truth_(inst_16607)){
var statearr_16801_18680 = state_16750__$1;
(statearr_16801_18680[(1)] = (5));

} else {
var statearr_16802_18681 = state_16750__$1;
(statearr_16802_18681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (15))){
var inst_16616 = (state_16750[(14)]);
var inst_16618 = (state_16750[(15)]);
var inst_16615 = (state_16750[(16)]);
var inst_16617 = (state_16750[(17)]);
var inst_16633 = (state_16750[(2)]);
var inst_16634 = (inst_16618 + (1));
var tmp16796 = inst_16616;
var tmp16797 = inst_16615;
var tmp16798 = inst_16617;
var inst_16615__$1 = tmp16797;
var inst_16616__$1 = tmp16796;
var inst_16617__$1 = tmp16798;
var inst_16618__$1 = inst_16634;
var state_16750__$1 = (function (){var statearr_16803 = state_16750;
(statearr_16803[(18)] = inst_16633);

(statearr_16803[(14)] = inst_16616__$1);

(statearr_16803[(15)] = inst_16618__$1);

(statearr_16803[(16)] = inst_16615__$1);

(statearr_16803[(17)] = inst_16617__$1);

return statearr_16803;
})();
var statearr_16804_18683 = state_16750__$1;
(statearr_16804_18683[(2)] = null);

(statearr_16804_18683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (21))){
var inst_16662 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16811_18684 = state_16750__$1;
(statearr_16811_18684[(2)] = inst_16662);

(statearr_16811_18684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (31))){
var inst_16690 = (state_16750[(10)]);
var inst_16694 = done(null);
var inst_16695 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16690);
var state_16750__$1 = (function (){var statearr_16815 = state_16750;
(statearr_16815[(19)] = inst_16694);

return statearr_16815;
})();
var statearr_16816_18689 = state_16750__$1;
(statearr_16816_18689[(2)] = inst_16695);

(statearr_16816_18689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (32))){
var inst_16682 = (state_16750[(20)]);
var inst_16684 = (state_16750[(21)]);
var inst_16685 = (state_16750[(11)]);
var inst_16683 = (state_16750[(12)]);
var inst_16702 = (state_16750[(2)]);
var inst_16703 = (inst_16685 + (1));
var tmp16806 = inst_16682;
var tmp16807 = inst_16684;
var tmp16808 = inst_16683;
var inst_16682__$1 = tmp16806;
var inst_16683__$1 = tmp16808;
var inst_16684__$1 = tmp16807;
var inst_16685__$1 = inst_16703;
var state_16750__$1 = (function (){var statearr_16817 = state_16750;
(statearr_16817[(20)] = inst_16682__$1);

(statearr_16817[(21)] = inst_16684__$1);

(statearr_16817[(11)] = inst_16685__$1);

(statearr_16817[(12)] = inst_16683__$1);

(statearr_16817[(22)] = inst_16702);

return statearr_16817;
})();
var statearr_16818_18692 = state_16750__$1;
(statearr_16818_18692[(2)] = null);

(statearr_16818_18692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (40))){
var inst_16715 = (state_16750[(23)]);
var inst_16719 = done(null);
var inst_16720 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16715);
var state_16750__$1 = (function (){var statearr_16822 = state_16750;
(statearr_16822[(24)] = inst_16719);

return statearr_16822;
})();
var statearr_16823_18695 = state_16750__$1;
(statearr_16823_18695[(2)] = inst_16720);

(statearr_16823_18695[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (33))){
var inst_16706 = (state_16750[(25)]);
var inst_16708 = cljs.core.chunked_seq_QMARK_(inst_16706);
var state_16750__$1 = state_16750;
if(inst_16708){
var statearr_16824_18698 = state_16750__$1;
(statearr_16824_18698[(1)] = (36));

} else {
var statearr_16825_18699 = state_16750__$1;
(statearr_16825_18699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (13))){
var inst_16627 = (state_16750[(26)]);
var inst_16630 = cljs.core.async.close_BANG_(inst_16627);
var state_16750__$1 = state_16750;
var statearr_16826_18700 = state_16750__$1;
(statearr_16826_18700[(2)] = inst_16630);

(statearr_16826_18700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (22))){
var inst_16650 = (state_16750[(8)]);
var inst_16653 = cljs.core.async.close_BANG_(inst_16650);
var state_16750__$1 = state_16750;
var statearr_16827_18702 = state_16750__$1;
(statearr_16827_18702[(2)] = inst_16653);

(statearr_16827_18702[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (36))){
var inst_16706 = (state_16750[(25)]);
var inst_16710 = cljs.core.chunk_first(inst_16706);
var inst_16711 = cljs.core.chunk_rest(inst_16706);
var inst_16712 = cljs.core.count(inst_16710);
var inst_16682 = inst_16711;
var inst_16683 = inst_16710;
var inst_16684 = inst_16712;
var inst_16685 = (0);
var state_16750__$1 = (function (){var statearr_16829 = state_16750;
(statearr_16829[(20)] = inst_16682);

(statearr_16829[(21)] = inst_16684);

(statearr_16829[(11)] = inst_16685);

(statearr_16829[(12)] = inst_16683);

return statearr_16829;
})();
var statearr_16830_18710 = state_16750__$1;
(statearr_16830_18710[(2)] = null);

(statearr_16830_18710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (41))){
var inst_16706 = (state_16750[(25)]);
var inst_16722 = (state_16750[(2)]);
var inst_16723 = cljs.core.next(inst_16706);
var inst_16682 = inst_16723;
var inst_16683 = null;
var inst_16684 = (0);
var inst_16685 = (0);
var state_16750__$1 = (function (){var statearr_16831 = state_16750;
(statearr_16831[(20)] = inst_16682);

(statearr_16831[(21)] = inst_16684);

(statearr_16831[(11)] = inst_16685);

(statearr_16831[(12)] = inst_16683);

(statearr_16831[(27)] = inst_16722);

return statearr_16831;
})();
var statearr_16833_18711 = state_16750__$1;
(statearr_16833_18711[(2)] = null);

(statearr_16833_18711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (43))){
var state_16750__$1 = state_16750;
var statearr_16834_18712 = state_16750__$1;
(statearr_16834_18712[(2)] = null);

(statearr_16834_18712[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (29))){
var inst_16731 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16835_18713 = state_16750__$1;
(statearr_16835_18713[(2)] = inst_16731);

(statearr_16835_18713[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (44))){
var inst_16740 = (state_16750[(2)]);
var state_16750__$1 = (function (){var statearr_16836 = state_16750;
(statearr_16836[(28)] = inst_16740);

return statearr_16836;
})();
var statearr_16837_18714 = state_16750__$1;
(statearr_16837_18714[(2)] = null);

(statearr_16837_18714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (6))){
var inst_16674 = (state_16750[(29)]);
var inst_16673 = cljs.core.deref(cs);
var inst_16674__$1 = cljs.core.keys(inst_16673);
var inst_16675 = cljs.core.count(inst_16674__$1);
var inst_16676 = cljs.core.reset_BANG_(dctr,inst_16675);
var inst_16681 = cljs.core.seq(inst_16674__$1);
var inst_16682 = inst_16681;
var inst_16683 = null;
var inst_16684 = (0);
var inst_16685 = (0);
var state_16750__$1 = (function (){var statearr_16838 = state_16750;
(statearr_16838[(30)] = inst_16676);

(statearr_16838[(20)] = inst_16682);

(statearr_16838[(21)] = inst_16684);

(statearr_16838[(11)] = inst_16685);

(statearr_16838[(12)] = inst_16683);

(statearr_16838[(29)] = inst_16674__$1);

return statearr_16838;
})();
var statearr_16839_18723 = state_16750__$1;
(statearr_16839_18723[(2)] = null);

(statearr_16839_18723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (28))){
var inst_16682 = (state_16750[(20)]);
var inst_16706 = (state_16750[(25)]);
var inst_16706__$1 = cljs.core.seq(inst_16682);
var state_16750__$1 = (function (){var statearr_16840 = state_16750;
(statearr_16840[(25)] = inst_16706__$1);

return statearr_16840;
})();
if(inst_16706__$1){
var statearr_16841_18724 = state_16750__$1;
(statearr_16841_18724[(1)] = (33));

} else {
var statearr_16842_18725 = state_16750__$1;
(statearr_16842_18725[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (25))){
var inst_16684 = (state_16750[(21)]);
var inst_16685 = (state_16750[(11)]);
var inst_16687 = (inst_16685 < inst_16684);
var inst_16688 = inst_16687;
var state_16750__$1 = state_16750;
if(cljs.core.truth_(inst_16688)){
var statearr_16843_18726 = state_16750__$1;
(statearr_16843_18726[(1)] = (27));

} else {
var statearr_16844_18727 = state_16750__$1;
(statearr_16844_18727[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (34))){
var state_16750__$1 = state_16750;
var statearr_16845_18729 = state_16750__$1;
(statearr_16845_18729[(2)] = null);

(statearr_16845_18729[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (17))){
var state_16750__$1 = state_16750;
var statearr_16846_18730 = state_16750__$1;
(statearr_16846_18730[(2)] = null);

(statearr_16846_18730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (3))){
var inst_16745 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16750__$1,inst_16745);
} else {
if((state_val_16751 === (12))){
var inst_16667 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16847_18732 = state_16750__$1;
(statearr_16847_18732[(2)] = inst_16667);

(statearr_16847_18732[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (2))){
var state_16750__$1 = state_16750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16750__$1,(4),ch);
} else {
if((state_val_16751 === (23))){
var state_16750__$1 = state_16750;
var statearr_16848_18738 = state_16750__$1;
(statearr_16848_18738[(2)] = null);

(statearr_16848_18738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (35))){
var inst_16729 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16849_18739 = state_16750__$1;
(statearr_16849_18739[(2)] = inst_16729);

(statearr_16849_18739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (19))){
var inst_16637 = (state_16750[(7)]);
var inst_16641 = cljs.core.chunk_first(inst_16637);
var inst_16642 = cljs.core.chunk_rest(inst_16637);
var inst_16643 = cljs.core.count(inst_16641);
var inst_16615 = inst_16642;
var inst_16616 = inst_16641;
var inst_16617 = inst_16643;
var inst_16618 = (0);
var state_16750__$1 = (function (){var statearr_16850 = state_16750;
(statearr_16850[(14)] = inst_16616);

(statearr_16850[(15)] = inst_16618);

(statearr_16850[(16)] = inst_16615);

(statearr_16850[(17)] = inst_16617);

return statearr_16850;
})();
var statearr_16854_18749 = state_16750__$1;
(statearr_16854_18749[(2)] = null);

(statearr_16854_18749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (11))){
var inst_16637 = (state_16750[(7)]);
var inst_16615 = (state_16750[(16)]);
var inst_16637__$1 = cljs.core.seq(inst_16615);
var state_16750__$1 = (function (){var statearr_16858 = state_16750;
(statearr_16858[(7)] = inst_16637__$1);

return statearr_16858;
})();
if(inst_16637__$1){
var statearr_16860_18755 = state_16750__$1;
(statearr_16860_18755[(1)] = (16));

} else {
var statearr_16861_18756 = state_16750__$1;
(statearr_16861_18756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (9))){
var inst_16669 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16862_18757 = state_16750__$1;
(statearr_16862_18757[(2)] = inst_16669);

(statearr_16862_18757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (5))){
var inst_16613 = cljs.core.deref(cs);
var inst_16614 = cljs.core.seq(inst_16613);
var inst_16615 = inst_16614;
var inst_16616 = null;
var inst_16617 = (0);
var inst_16618 = (0);
var state_16750__$1 = (function (){var statearr_16863 = state_16750;
(statearr_16863[(14)] = inst_16616);

(statearr_16863[(15)] = inst_16618);

(statearr_16863[(16)] = inst_16615);

(statearr_16863[(17)] = inst_16617);

return statearr_16863;
})();
var statearr_16864_18758 = state_16750__$1;
(statearr_16864_18758[(2)] = null);

(statearr_16864_18758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (14))){
var state_16750__$1 = state_16750;
var statearr_16865_18760 = state_16750__$1;
(statearr_16865_18760[(2)] = null);

(statearr_16865_18760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (45))){
var inst_16737 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16866_18761 = state_16750__$1;
(statearr_16866_18761[(2)] = inst_16737);

(statearr_16866_18761[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (26))){
var inst_16674 = (state_16750[(29)]);
var inst_16733 = (state_16750[(2)]);
var inst_16734 = cljs.core.seq(inst_16674);
var state_16750__$1 = (function (){var statearr_16869 = state_16750;
(statearr_16869[(31)] = inst_16733);

return statearr_16869;
})();
if(inst_16734){
var statearr_16870_18766 = state_16750__$1;
(statearr_16870_18766[(1)] = (42));

} else {
var statearr_16871_18767 = state_16750__$1;
(statearr_16871_18767[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (16))){
var inst_16637 = (state_16750[(7)]);
var inst_16639 = cljs.core.chunked_seq_QMARK_(inst_16637);
var state_16750__$1 = state_16750;
if(inst_16639){
var statearr_16872_18768 = state_16750__$1;
(statearr_16872_18768[(1)] = (19));

} else {
var statearr_16873_18769 = state_16750__$1;
(statearr_16873_18769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (38))){
var inst_16726 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16875_18770 = state_16750__$1;
(statearr_16875_18770[(2)] = inst_16726);

(statearr_16875_18770[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (30))){
var state_16750__$1 = state_16750;
var statearr_16876_18771 = state_16750__$1;
(statearr_16876_18771[(2)] = null);

(statearr_16876_18771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (10))){
var inst_16616 = (state_16750[(14)]);
var inst_16618 = (state_16750[(15)]);
var inst_16626 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16616,inst_16618);
var inst_16627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16626,(0),null);
var inst_16628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16626,(1),null);
var state_16750__$1 = (function (){var statearr_16878 = state_16750;
(statearr_16878[(26)] = inst_16627);

return statearr_16878;
})();
if(cljs.core.truth_(inst_16628)){
var statearr_16879_18772 = state_16750__$1;
(statearr_16879_18772[(1)] = (13));

} else {
var statearr_16880_18773 = state_16750__$1;
(statearr_16880_18773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (18))){
var inst_16665 = (state_16750[(2)]);
var state_16750__$1 = state_16750;
var statearr_16884_18774 = state_16750__$1;
(statearr_16884_18774[(2)] = inst_16665);

(statearr_16884_18774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (42))){
var state_16750__$1 = state_16750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16750__$1,(45),dchan);
} else {
if((state_val_16751 === (37))){
var inst_16606 = (state_16750[(9)]);
var inst_16715 = (state_16750[(23)]);
var inst_16706 = (state_16750[(25)]);
var inst_16715__$1 = cljs.core.first(inst_16706);
var inst_16716 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16715__$1,inst_16606,done);
var state_16750__$1 = (function (){var statearr_16885 = state_16750;
(statearr_16885[(23)] = inst_16715__$1);

return statearr_16885;
})();
if(cljs.core.truth_(inst_16716)){
var statearr_16886_18776 = state_16750__$1;
(statearr_16886_18776[(1)] = (39));

} else {
var statearr_16890_18778 = state_16750__$1;
(statearr_16890_18778[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16751 === (8))){
var inst_16618 = (state_16750[(15)]);
var inst_16617 = (state_16750[(17)]);
var inst_16620 = (inst_16618 < inst_16617);
var inst_16621 = inst_16620;
var state_16750__$1 = state_16750;
if(cljs.core.truth_(inst_16621)){
var statearr_16891_18779 = state_16750__$1;
(statearr_16891_18779[(1)] = (10));

} else {
var statearr_16892_18780 = state_16750__$1;
(statearr_16892_18780[(1)] = (11));

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
});})(c__15513__auto___18661,cs,m,dchan,dctr,done))
;
return ((function (switch__14929__auto__,c__15513__auto___18661,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14930__auto__ = null;
var cljs$core$async$mult_$_state_machine__14930__auto____0 = (function (){
var statearr_16895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16895[(0)] = cljs$core$async$mult_$_state_machine__14930__auto__);

(statearr_16895[(1)] = (1));

return statearr_16895;
});
var cljs$core$async$mult_$_state_machine__14930__auto____1 = (function (state_16750){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_16750);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e16896){if((e16896 instanceof Object)){
var ex__14933__auto__ = e16896;
var statearr_16897_18781 = state_16750;
(statearr_16897_18781[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18782 = state_16750;
state_16750 = G__18782;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14930__auto__ = function(state_16750){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14930__auto____1.call(this,state_16750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14930__auto____0;
cljs$core$async$mult_$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14930__auto____1;
return cljs$core$async$mult_$_state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___18661,cs,m,dchan,dctr,done))
})();
var state__15515__auto__ = (function (){var statearr_16898 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_16898[(6)] = c__15513__auto___18661);

return statearr_16898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___18661,cs,m,dchan,dctr,done))
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
var G__16903 = arguments.length;
switch (G__16903) {
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
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
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
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
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
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
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
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
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
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18811 = arguments.length;
var i__4642__auto___18813 = (0);
while(true){
if((i__4642__auto___18813 < len__4641__auto___18811)){
args__4647__auto__.push((arguments[i__4642__auto___18813]));

var G__18817 = (i__4642__auto___18813 + (1));
i__4642__auto___18813 = G__18817;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16927){
var map__16928 = p__16927;
var map__16928__$1 = (((((!((map__16928 == null))))?(((((map__16928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16928):map__16928);
var opts = map__16928__$1;
var statearr_16930_18821 = state;
(statearr_16930_18821[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__16928,map__16928__$1,opts){
return (function (val){
var statearr_16931_18823 = state;
(statearr_16931_18823[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16928,map__16928__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_16932_18824 = state;
(statearr_16932_18824[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16923){
var G__16924 = cljs.core.first(seq16923);
var seq16923__$1 = cljs.core.next(seq16923);
var G__16925 = cljs.core.first(seq16923__$1);
var seq16923__$2 = cljs.core.next(seq16923__$1);
var G__16926 = cljs.core.first(seq16923__$2);
var seq16923__$3 = cljs.core.next(seq16923__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16924,G__16925,G__16926,seq16923__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16935 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16936){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16936 = meta16936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16937,meta16936__$1){
var self__ = this;
var _16937__$1 = this;
return (new cljs.core.async.t_cljs$core$async16935(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16936__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16937){
var self__ = this;
var _16937__$1 = this;
return self__.meta16936;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16935.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta16936","meta16936",2017817825,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16935";

cljs.core.async.t_cljs$core$async16935.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16935");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16935.
 */
cljs.core.async.__GT_t_cljs$core$async16935 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16935(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16936){
return (new cljs.core.async.t_cljs$core$async16935(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16936));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16935(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15513__auto___18850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___18850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___18850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17054){
var state_val_17055 = (state_17054[(1)]);
if((state_val_17055 === (7))){
var inst_16964 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
var statearr_17057_18855 = state_17054__$1;
(statearr_17057_18855[(2)] = inst_16964);

(statearr_17057_18855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (20))){
var inst_16976 = (state_17054[(7)]);
var state_17054__$1 = state_17054;
var statearr_17058_18859 = state_17054__$1;
(statearr_17058_18859[(2)] = inst_16976);

(statearr_17058_18859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (27))){
var state_17054__$1 = state_17054;
var statearr_17059_18863 = state_17054__$1;
(statearr_17059_18863[(2)] = null);

(statearr_17059_18863[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (1))){
var inst_16951 = (state_17054[(8)]);
var inst_16951__$1 = calc_state();
var inst_16953 = (inst_16951__$1 == null);
var inst_16954 = cljs.core.not(inst_16953);
var state_17054__$1 = (function (){var statearr_17060 = state_17054;
(statearr_17060[(8)] = inst_16951__$1);

return statearr_17060;
})();
if(inst_16954){
var statearr_17061_18865 = state_17054__$1;
(statearr_17061_18865[(1)] = (2));

} else {
var statearr_17062_18866 = state_17054__$1;
(statearr_17062_18866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (24))){
var inst_17027 = (state_17054[(9)]);
var inst_17004 = (state_17054[(10)]);
var inst_17013 = (state_17054[(11)]);
var inst_17027__$1 = (inst_17004.cljs$core$IFn$_invoke$arity$1 ? inst_17004.cljs$core$IFn$_invoke$arity$1(inst_17013) : inst_17004.call(null,inst_17013));
var state_17054__$1 = (function (){var statearr_17063 = state_17054;
(statearr_17063[(9)] = inst_17027__$1);

return statearr_17063;
})();
if(cljs.core.truth_(inst_17027__$1)){
var statearr_17064_18871 = state_17054__$1;
(statearr_17064_18871[(1)] = (29));

} else {
var statearr_17065_18872 = state_17054__$1;
(statearr_17065_18872[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (4))){
var inst_16967 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_16967)){
var statearr_17066_18879 = state_17054__$1;
(statearr_17066_18879[(1)] = (8));

} else {
var statearr_17067_18881 = state_17054__$1;
(statearr_17067_18881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (15))){
var inst_16998 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_16998)){
var statearr_17068_18888 = state_17054__$1;
(statearr_17068_18888[(1)] = (19));

} else {
var statearr_17069_18889 = state_17054__$1;
(statearr_17069_18889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (21))){
var inst_17003 = (state_17054[(12)]);
var inst_17003__$1 = (state_17054[(2)]);
var inst_17004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17003__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17003__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17003__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17054__$1 = (function (){var statearr_17070 = state_17054;
(statearr_17070[(12)] = inst_17003__$1);

(statearr_17070[(10)] = inst_17004);

(statearr_17070[(13)] = inst_17005);

return statearr_17070;
})();
return cljs.core.async.ioc_alts_BANG_(state_17054__$1,(22),inst_17006);
} else {
if((state_val_17055 === (31))){
var inst_17035 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_17035)){
var statearr_17074_18890 = state_17054__$1;
(statearr_17074_18890[(1)] = (32));

} else {
var statearr_17078_18898 = state_17054__$1;
(statearr_17078_18898[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (32))){
var inst_17012 = (state_17054[(14)]);
var state_17054__$1 = state_17054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17054__$1,(35),out,inst_17012);
} else {
if((state_val_17055 === (33))){
var inst_17003 = (state_17054[(12)]);
var inst_16976 = inst_17003;
var state_17054__$1 = (function (){var statearr_17079 = state_17054;
(statearr_17079[(7)] = inst_16976);

return statearr_17079;
})();
var statearr_17081_18899 = state_17054__$1;
(statearr_17081_18899[(2)] = null);

(statearr_17081_18899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (13))){
var inst_16976 = (state_17054[(7)]);
var inst_16987 = inst_16976.cljs$lang$protocol_mask$partition0$;
var inst_16988 = (inst_16987 & (64));
var inst_16989 = inst_16976.cljs$core$ISeq$;
var inst_16990 = (cljs.core.PROTOCOL_SENTINEL === inst_16989);
var inst_16991 = ((inst_16988) || (inst_16990));
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_16991)){
var statearr_17082_18901 = state_17054__$1;
(statearr_17082_18901[(1)] = (16));

} else {
var statearr_17083_18902 = state_17054__$1;
(statearr_17083_18902[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (22))){
var inst_17012 = (state_17054[(14)]);
var inst_17013 = (state_17054[(11)]);
var inst_17011 = (state_17054[(2)]);
var inst_17012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17011,(0),null);
var inst_17013__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17011,(1),null);
var inst_17014 = (inst_17012__$1 == null);
var inst_17015 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17013__$1,change);
var inst_17016 = ((inst_17014) || (inst_17015));
var state_17054__$1 = (function (){var statearr_17085 = state_17054;
(statearr_17085[(14)] = inst_17012__$1);

(statearr_17085[(11)] = inst_17013__$1);

return statearr_17085;
})();
if(cljs.core.truth_(inst_17016)){
var statearr_17086_18906 = state_17054__$1;
(statearr_17086_18906[(1)] = (23));

} else {
var statearr_17087_18907 = state_17054__$1;
(statearr_17087_18907[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (36))){
var inst_17003 = (state_17054[(12)]);
var inst_16976 = inst_17003;
var state_17054__$1 = (function (){var statearr_17088 = state_17054;
(statearr_17088[(7)] = inst_16976);

return statearr_17088;
})();
var statearr_17089_18908 = state_17054__$1;
(statearr_17089_18908[(2)] = null);

(statearr_17089_18908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (29))){
var inst_17027 = (state_17054[(9)]);
var state_17054__$1 = state_17054;
var statearr_17090_18909 = state_17054__$1;
(statearr_17090_18909[(2)] = inst_17027);

(statearr_17090_18909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (6))){
var state_17054__$1 = state_17054;
var statearr_17091_18913 = state_17054__$1;
(statearr_17091_18913[(2)] = false);

(statearr_17091_18913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (28))){
var inst_17023 = (state_17054[(2)]);
var inst_17024 = calc_state();
var inst_16976 = inst_17024;
var state_17054__$1 = (function (){var statearr_17092 = state_17054;
(statearr_17092[(7)] = inst_16976);

(statearr_17092[(15)] = inst_17023);

return statearr_17092;
})();
var statearr_17093_18917 = state_17054__$1;
(statearr_17093_18917[(2)] = null);

(statearr_17093_18917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (25))){
var inst_17049 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
var statearr_17094_18918 = state_17054__$1;
(statearr_17094_18918[(2)] = inst_17049);

(statearr_17094_18918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (34))){
var inst_17047 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
var statearr_17095_18919 = state_17054__$1;
(statearr_17095_18919[(2)] = inst_17047);

(statearr_17095_18919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (17))){
var state_17054__$1 = state_17054;
var statearr_17096_18920 = state_17054__$1;
(statearr_17096_18920[(2)] = false);

(statearr_17096_18920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (3))){
var state_17054__$1 = state_17054;
var statearr_17097_18921 = state_17054__$1;
(statearr_17097_18921[(2)] = false);

(statearr_17097_18921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (12))){
var inst_17051 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17054__$1,inst_17051);
} else {
if((state_val_17055 === (2))){
var inst_16951 = (state_17054[(8)]);
var inst_16956 = inst_16951.cljs$lang$protocol_mask$partition0$;
var inst_16957 = (inst_16956 & (64));
var inst_16958 = inst_16951.cljs$core$ISeq$;
var inst_16959 = (cljs.core.PROTOCOL_SENTINEL === inst_16958);
var inst_16960 = ((inst_16957) || (inst_16959));
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_16960)){
var statearr_17098_18923 = state_17054__$1;
(statearr_17098_18923[(1)] = (5));

} else {
var statearr_17099_18924 = state_17054__$1;
(statearr_17099_18924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (23))){
var inst_17012 = (state_17054[(14)]);
var inst_17018 = (inst_17012 == null);
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_17018)){
var statearr_17100_18926 = state_17054__$1;
(statearr_17100_18926[(1)] = (26));

} else {
var statearr_17101_18927 = state_17054__$1;
(statearr_17101_18927[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (35))){
var inst_17038 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_17038)){
var statearr_17102_18929 = state_17054__$1;
(statearr_17102_18929[(1)] = (36));

} else {
var statearr_17103_18930 = state_17054__$1;
(statearr_17103_18930[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (19))){
var inst_16976 = (state_17054[(7)]);
var inst_17000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16976);
var state_17054__$1 = state_17054;
var statearr_17104_18931 = state_17054__$1;
(statearr_17104_18931[(2)] = inst_17000);

(statearr_17104_18931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (11))){
var inst_16976 = (state_17054[(7)]);
var inst_16980 = (inst_16976 == null);
var inst_16981 = cljs.core.not(inst_16980);
var state_17054__$1 = state_17054;
if(inst_16981){
var statearr_17105_18935 = state_17054__$1;
(statearr_17105_18935[(1)] = (13));

} else {
var statearr_17106_18938 = state_17054__$1;
(statearr_17106_18938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (9))){
var inst_16951 = (state_17054[(8)]);
var state_17054__$1 = state_17054;
var statearr_17107_18943 = state_17054__$1;
(statearr_17107_18943[(2)] = inst_16951);

(statearr_17107_18943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (5))){
var state_17054__$1 = state_17054;
var statearr_17108_18944 = state_17054__$1;
(statearr_17108_18944[(2)] = true);

(statearr_17108_18944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (14))){
var state_17054__$1 = state_17054;
var statearr_17109_18946 = state_17054__$1;
(statearr_17109_18946[(2)] = false);

(statearr_17109_18946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (26))){
var inst_17013 = (state_17054[(11)]);
var inst_17020 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17013);
var state_17054__$1 = state_17054;
var statearr_17113_18948 = state_17054__$1;
(statearr_17113_18948[(2)] = inst_17020);

(statearr_17113_18948[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (16))){
var state_17054__$1 = state_17054;
var statearr_17114_18950 = state_17054__$1;
(statearr_17114_18950[(2)] = true);

(statearr_17114_18950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (38))){
var inst_17043 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
var statearr_17115_18952 = state_17054__$1;
(statearr_17115_18952[(2)] = inst_17043);

(statearr_17115_18952[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (30))){
var inst_17004 = (state_17054[(10)]);
var inst_17005 = (state_17054[(13)]);
var inst_17013 = (state_17054[(11)]);
var inst_17030 = cljs.core.empty_QMARK_(inst_17004);
var inst_17031 = (inst_17005.cljs$core$IFn$_invoke$arity$1 ? inst_17005.cljs$core$IFn$_invoke$arity$1(inst_17013) : inst_17005.call(null,inst_17013));
var inst_17032 = cljs.core.not(inst_17031);
var inst_17033 = ((inst_17030) && (inst_17032));
var state_17054__$1 = state_17054;
var statearr_17119_18954 = state_17054__$1;
(statearr_17119_18954[(2)] = inst_17033);

(statearr_17119_18954[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (10))){
var inst_16951 = (state_17054[(8)]);
var inst_16972 = (state_17054[(2)]);
var inst_16973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16972,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16972,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16972,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16976 = inst_16951;
var state_17054__$1 = (function (){var statearr_17126 = state_17054;
(statearr_17126[(7)] = inst_16976);

(statearr_17126[(16)] = inst_16973);

(statearr_17126[(17)] = inst_16974);

(statearr_17126[(18)] = inst_16975);

return statearr_17126;
})();
var statearr_17127_18955 = state_17054__$1;
(statearr_17127_18955[(2)] = null);

(statearr_17127_18955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (18))){
var inst_16995 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
var statearr_17128_18957 = state_17054__$1;
(statearr_17128_18957[(2)] = inst_16995);

(statearr_17128_18957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (37))){
var state_17054__$1 = state_17054;
var statearr_17130_18958 = state_17054__$1;
(statearr_17130_18958[(2)] = null);

(statearr_17130_18958[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (8))){
var inst_16951 = (state_17054[(8)]);
var inst_16969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16951);
var state_17054__$1 = state_17054;
var statearr_17131_18960 = state_17054__$1;
(statearr_17131_18960[(2)] = inst_16969);

(statearr_17131_18960[(1)] = (10));


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
});})(c__15513__auto___18850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14929__auto__,c__15513__auto___18850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14930__auto__ = null;
var cljs$core$async$mix_$_state_machine__14930__auto____0 = (function (){
var statearr_17136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17136[(0)] = cljs$core$async$mix_$_state_machine__14930__auto__);

(statearr_17136[(1)] = (1));

return statearr_17136;
});
var cljs$core$async$mix_$_state_machine__14930__auto____1 = (function (state_17054){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_17054);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e17141){if((e17141 instanceof Object)){
var ex__14933__auto__ = e17141;
var statearr_17142_18961 = state_17054;
(statearr_17142_18961[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18962 = state_17054;
state_17054 = G__18962;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14930__auto__ = function(state_17054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14930__auto____1.call(this,state_17054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14930__auto____0;
cljs$core$async$mix_$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14930__auto____1;
return cljs$core$async$mix_$_state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___18850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15515__auto__ = (function (){var statearr_17143 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_17143[(6)] = c__15513__auto___18850);

return statearr_17143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___18850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17153 = arguments.length;
switch (G__17153) {
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
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
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
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
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
var G__17157 = arguments.length;
switch (G__17157) {
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
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__17155_SHARP_){
if(cljs.core.truth_((p1__17155_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17155_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17155_SHARP_.call(null,topic)))){
return p1__17155_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17155_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17158 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17159){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17159 = meta17159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17160,meta17159__$1){
var self__ = this;
var _17160__$1 = this;
return (new cljs.core.async.t_cljs$core$async17158(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17159__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17160){
var self__ = this;
var _17160__$1 = this;
return self__.meta17159;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17158.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17158.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17159","meta17159",-1426550520,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17158";

cljs.core.async.t_cljs$core$async17158.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17158");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17158.
 */
cljs.core.async.__GT_t_cljs$core$async17158 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17158(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17159){
return (new cljs.core.async.t_cljs$core$async17158(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17159));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17158(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15513__auto___18980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___18980,mults,ensure_mult,p){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___18980,mults,ensure_mult,p){
return (function (state_17239){
var state_val_17240 = (state_17239[(1)]);
if((state_val_17240 === (7))){
var inst_17234 = (state_17239[(2)]);
var state_17239__$1 = state_17239;
var statearr_17246_18982 = state_17239__$1;
(statearr_17246_18982[(2)] = inst_17234);

(statearr_17246_18982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (20))){
var state_17239__$1 = state_17239;
var statearr_17247_18983 = state_17239__$1;
(statearr_17247_18983[(2)] = null);

(statearr_17247_18983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (1))){
var state_17239__$1 = state_17239;
var statearr_17249_18984 = state_17239__$1;
(statearr_17249_18984[(2)] = null);

(statearr_17249_18984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (24))){
var inst_17214 = (state_17239[(7)]);
var inst_17225 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17214);
var state_17239__$1 = state_17239;
var statearr_17253_18985 = state_17239__$1;
(statearr_17253_18985[(2)] = inst_17225);

(statearr_17253_18985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (4))){
var inst_17163 = (state_17239[(8)]);
var inst_17163__$1 = (state_17239[(2)]);
var inst_17164 = (inst_17163__$1 == null);
var state_17239__$1 = (function (){var statearr_17255 = state_17239;
(statearr_17255[(8)] = inst_17163__$1);

return statearr_17255;
})();
if(cljs.core.truth_(inst_17164)){
var statearr_17256_18990 = state_17239__$1;
(statearr_17256_18990[(1)] = (5));

} else {
var statearr_17257_18991 = state_17239__$1;
(statearr_17257_18991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (15))){
var inst_17208 = (state_17239[(2)]);
var state_17239__$1 = state_17239;
var statearr_17258_18996 = state_17239__$1;
(statearr_17258_18996[(2)] = inst_17208);

(statearr_17258_18996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (21))){
var inst_17231 = (state_17239[(2)]);
var state_17239__$1 = (function (){var statearr_17260 = state_17239;
(statearr_17260[(9)] = inst_17231);

return statearr_17260;
})();
var statearr_17262_19002 = state_17239__$1;
(statearr_17262_19002[(2)] = null);

(statearr_17262_19002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (13))){
var inst_17188 = (state_17239[(10)]);
var inst_17190 = cljs.core.chunked_seq_QMARK_(inst_17188);
var state_17239__$1 = state_17239;
if(inst_17190){
var statearr_17263_19012 = state_17239__$1;
(statearr_17263_19012[(1)] = (16));

} else {
var statearr_17265_19013 = state_17239__$1;
(statearr_17265_19013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (22))){
var inst_17221 = (state_17239[(2)]);
var state_17239__$1 = state_17239;
if(cljs.core.truth_(inst_17221)){
var statearr_17266_19015 = state_17239__$1;
(statearr_17266_19015[(1)] = (23));

} else {
var statearr_17267_19016 = state_17239__$1;
(statearr_17267_19016[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (6))){
var inst_17163 = (state_17239[(8)]);
var inst_17214 = (state_17239[(7)]);
var inst_17216 = (state_17239[(11)]);
var inst_17214__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17163) : topic_fn.call(null,inst_17163));
var inst_17215 = cljs.core.deref(mults);
var inst_17216__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17215,inst_17214__$1);
var state_17239__$1 = (function (){var statearr_17268 = state_17239;
(statearr_17268[(7)] = inst_17214__$1);

(statearr_17268[(11)] = inst_17216__$1);

return statearr_17268;
})();
if(cljs.core.truth_(inst_17216__$1)){
var statearr_17269_19018 = state_17239__$1;
(statearr_17269_19018[(1)] = (19));

} else {
var statearr_17270_19019 = state_17239__$1;
(statearr_17270_19019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (25))){
var inst_17227 = (state_17239[(2)]);
var state_17239__$1 = state_17239;
var statearr_17271_19024 = state_17239__$1;
(statearr_17271_19024[(2)] = inst_17227);

(statearr_17271_19024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (17))){
var inst_17188 = (state_17239[(10)]);
var inst_17198 = cljs.core.first(inst_17188);
var inst_17199 = cljs.core.async.muxch_STAR_(inst_17198);
var inst_17200 = cljs.core.async.close_BANG_(inst_17199);
var inst_17202 = cljs.core.next(inst_17188);
var inst_17173 = inst_17202;
var inst_17174 = null;
var inst_17175 = (0);
var inst_17176 = (0);
var state_17239__$1 = (function (){var statearr_17272 = state_17239;
(statearr_17272[(12)] = inst_17175);

(statearr_17272[(13)] = inst_17176);

(statearr_17272[(14)] = inst_17173);

(statearr_17272[(15)] = inst_17200);

(statearr_17272[(16)] = inst_17174);

return statearr_17272;
})();
var statearr_17273_19034 = state_17239__$1;
(statearr_17273_19034[(2)] = null);

(statearr_17273_19034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (3))){
var inst_17236 = (state_17239[(2)]);
var state_17239__$1 = state_17239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17239__$1,inst_17236);
} else {
if((state_val_17240 === (12))){
var inst_17210 = (state_17239[(2)]);
var state_17239__$1 = state_17239;
var statearr_17274_19037 = state_17239__$1;
(statearr_17274_19037[(2)] = inst_17210);

(statearr_17274_19037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (2))){
var state_17239__$1 = state_17239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17239__$1,(4),ch);
} else {
if((state_val_17240 === (23))){
var state_17239__$1 = state_17239;
var statearr_17275_19047 = state_17239__$1;
(statearr_17275_19047[(2)] = null);

(statearr_17275_19047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (19))){
var inst_17163 = (state_17239[(8)]);
var inst_17216 = (state_17239[(11)]);
var inst_17219 = cljs.core.async.muxch_STAR_(inst_17216);
var state_17239__$1 = state_17239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17239__$1,(22),inst_17219,inst_17163);
} else {
if((state_val_17240 === (11))){
var inst_17173 = (state_17239[(14)]);
var inst_17188 = (state_17239[(10)]);
var inst_17188__$1 = cljs.core.seq(inst_17173);
var state_17239__$1 = (function (){var statearr_17276 = state_17239;
(statearr_17276[(10)] = inst_17188__$1);

return statearr_17276;
})();
if(inst_17188__$1){
var statearr_17277_19063 = state_17239__$1;
(statearr_17277_19063[(1)] = (13));

} else {
var statearr_17278_19064 = state_17239__$1;
(statearr_17278_19064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (9))){
var inst_17212 = (state_17239[(2)]);
var state_17239__$1 = state_17239;
var statearr_17279_19065 = state_17239__$1;
(statearr_17279_19065[(2)] = inst_17212);

(statearr_17279_19065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (5))){
var inst_17170 = cljs.core.deref(mults);
var inst_17171 = cljs.core.vals(inst_17170);
var inst_17172 = cljs.core.seq(inst_17171);
var inst_17173 = inst_17172;
var inst_17174 = null;
var inst_17175 = (0);
var inst_17176 = (0);
var state_17239__$1 = (function (){var statearr_17281 = state_17239;
(statearr_17281[(12)] = inst_17175);

(statearr_17281[(13)] = inst_17176);

(statearr_17281[(14)] = inst_17173);

(statearr_17281[(16)] = inst_17174);

return statearr_17281;
})();
var statearr_17282_19070 = state_17239__$1;
(statearr_17282_19070[(2)] = null);

(statearr_17282_19070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (14))){
var state_17239__$1 = state_17239;
var statearr_17286_19071 = state_17239__$1;
(statearr_17286_19071[(2)] = null);

(statearr_17286_19071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (16))){
var inst_17188 = (state_17239[(10)]);
var inst_17193 = cljs.core.chunk_first(inst_17188);
var inst_17194 = cljs.core.chunk_rest(inst_17188);
var inst_17195 = cljs.core.count(inst_17193);
var inst_17173 = inst_17194;
var inst_17174 = inst_17193;
var inst_17175 = inst_17195;
var inst_17176 = (0);
var state_17239__$1 = (function (){var statearr_17287 = state_17239;
(statearr_17287[(12)] = inst_17175);

(statearr_17287[(13)] = inst_17176);

(statearr_17287[(14)] = inst_17173);

(statearr_17287[(16)] = inst_17174);

return statearr_17287;
})();
var statearr_17288_19076 = state_17239__$1;
(statearr_17288_19076[(2)] = null);

(statearr_17288_19076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (10))){
var inst_17175 = (state_17239[(12)]);
var inst_17176 = (state_17239[(13)]);
var inst_17173 = (state_17239[(14)]);
var inst_17174 = (state_17239[(16)]);
var inst_17182 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17174,inst_17176);
var inst_17183 = cljs.core.async.muxch_STAR_(inst_17182);
var inst_17184 = cljs.core.async.close_BANG_(inst_17183);
var inst_17185 = (inst_17176 + (1));
var tmp17283 = inst_17175;
var tmp17284 = inst_17173;
var tmp17285 = inst_17174;
var inst_17173__$1 = tmp17284;
var inst_17174__$1 = tmp17285;
var inst_17175__$1 = tmp17283;
var inst_17176__$1 = inst_17185;
var state_17239__$1 = (function (){var statearr_17289 = state_17239;
(statearr_17289[(12)] = inst_17175__$1);

(statearr_17289[(13)] = inst_17176__$1);

(statearr_17289[(14)] = inst_17173__$1);

(statearr_17289[(16)] = inst_17174__$1);

(statearr_17289[(17)] = inst_17184);

return statearr_17289;
})();
var statearr_17290_19080 = state_17239__$1;
(statearr_17290_19080[(2)] = null);

(statearr_17290_19080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (18))){
var inst_17205 = (state_17239[(2)]);
var state_17239__$1 = state_17239;
var statearr_17291_19084 = state_17239__$1;
(statearr_17291_19084[(2)] = inst_17205);

(statearr_17291_19084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17240 === (8))){
var inst_17175 = (state_17239[(12)]);
var inst_17176 = (state_17239[(13)]);
var inst_17178 = (inst_17176 < inst_17175);
var inst_17179 = inst_17178;
var state_17239__$1 = state_17239;
if(cljs.core.truth_(inst_17179)){
var statearr_17293_19086 = state_17239__$1;
(statearr_17293_19086[(1)] = (10));

} else {
var statearr_17294_19088 = state_17239__$1;
(statearr_17294_19088[(1)] = (11));

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
});})(c__15513__auto___18980,mults,ensure_mult,p))
;
return ((function (switch__14929__auto__,c__15513__auto___18980,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_17296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17296[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_17296[(1)] = (1));

return statearr_17296;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_17239){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_17239);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e17297){if((e17297 instanceof Object)){
var ex__14933__auto__ = e17297;
var statearr_17298_19093 = state_17239;
(statearr_17298_19093[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19097 = state_17239;
state_17239 = G__19097;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_17239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_17239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___18980,mults,ensure_mult,p))
})();
var state__15515__auto__ = (function (){var statearr_17299 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_17299[(6)] = c__15513__auto___18980);

return statearr_17299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___18980,mults,ensure_mult,p))
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
var G__17301 = arguments.length;
switch (G__17301) {
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
var G__17303 = arguments.length;
switch (G__17303) {
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
var G__17308 = arguments.length;
switch (G__17308) {
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
var c__15513__auto___19154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___19154,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___19154,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17347){
var state_val_17348 = (state_17347[(1)]);
if((state_val_17348 === (7))){
var state_17347__$1 = state_17347;
var statearr_17353_19161 = state_17347__$1;
(statearr_17353_19161[(2)] = null);

(statearr_17353_19161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (1))){
var state_17347__$1 = state_17347;
var statearr_17354_19168 = state_17347__$1;
(statearr_17354_19168[(2)] = null);

(statearr_17354_19168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (4))){
var inst_17311 = (state_17347[(7)]);
var inst_17313 = (inst_17311 < cnt);
var state_17347__$1 = state_17347;
if(cljs.core.truth_(inst_17313)){
var statearr_17359_19176 = state_17347__$1;
(statearr_17359_19176[(1)] = (6));

} else {
var statearr_17360_19178 = state_17347__$1;
(statearr_17360_19178[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (15))){
var inst_17343 = (state_17347[(2)]);
var state_17347__$1 = state_17347;
var statearr_17365_19184 = state_17347__$1;
(statearr_17365_19184[(2)] = inst_17343);

(statearr_17365_19184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (13))){
var inst_17336 = cljs.core.async.close_BANG_(out);
var state_17347__$1 = state_17347;
var statearr_17366_19186 = state_17347__$1;
(statearr_17366_19186[(2)] = inst_17336);

(statearr_17366_19186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (6))){
var state_17347__$1 = state_17347;
var statearr_17367_19195 = state_17347__$1;
(statearr_17367_19195[(2)] = null);

(statearr_17367_19195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (3))){
var inst_17345 = (state_17347[(2)]);
var state_17347__$1 = state_17347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17347__$1,inst_17345);
} else {
if((state_val_17348 === (12))){
var inst_17333 = (state_17347[(8)]);
var inst_17333__$1 = (state_17347[(2)]);
var inst_17334 = cljs.core.some(cljs.core.nil_QMARK_,inst_17333__$1);
var state_17347__$1 = (function (){var statearr_17370 = state_17347;
(statearr_17370[(8)] = inst_17333__$1);

return statearr_17370;
})();
if(cljs.core.truth_(inst_17334)){
var statearr_17371_19212 = state_17347__$1;
(statearr_17371_19212[(1)] = (13));

} else {
var statearr_17372_19217 = state_17347__$1;
(statearr_17372_19217[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (2))){
var inst_17310 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17311 = (0);
var state_17347__$1 = (function (){var statearr_17373 = state_17347;
(statearr_17373[(7)] = inst_17311);

(statearr_17373[(9)] = inst_17310);

return statearr_17373;
})();
var statearr_17375_19223 = state_17347__$1;
(statearr_17375_19223[(2)] = null);

(statearr_17375_19223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (11))){
var inst_17311 = (state_17347[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17347,(10),Object,null,(9));
var inst_17320 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17311) : chs__$1.call(null,inst_17311));
var inst_17321 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17311) : done.call(null,inst_17311));
var inst_17322 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17320,inst_17321);
var state_17347__$1 = state_17347;
var statearr_17377_19227 = state_17347__$1;
(statearr_17377_19227[(2)] = inst_17322);


cljs.core.async.impl.ioc_helpers.process_exception(state_17347__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (9))){
var inst_17311 = (state_17347[(7)]);
var inst_17324 = (state_17347[(2)]);
var inst_17325 = (inst_17311 + (1));
var inst_17311__$1 = inst_17325;
var state_17347__$1 = (function (){var statearr_17378 = state_17347;
(statearr_17378[(7)] = inst_17311__$1);

(statearr_17378[(10)] = inst_17324);

return statearr_17378;
})();
var statearr_17379_19232 = state_17347__$1;
(statearr_17379_19232[(2)] = null);

(statearr_17379_19232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (5))){
var inst_17331 = (state_17347[(2)]);
var state_17347__$1 = (function (){var statearr_17380 = state_17347;
(statearr_17380[(11)] = inst_17331);

return statearr_17380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17347__$1,(12),dchan);
} else {
if((state_val_17348 === (14))){
var inst_17333 = (state_17347[(8)]);
var inst_17338 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17333);
var state_17347__$1 = state_17347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17347__$1,(16),out,inst_17338);
} else {
if((state_val_17348 === (16))){
var inst_17340 = (state_17347[(2)]);
var state_17347__$1 = (function (){var statearr_17383 = state_17347;
(statearr_17383[(12)] = inst_17340);

return statearr_17383;
})();
var statearr_17386_19245 = state_17347__$1;
(statearr_17386_19245[(2)] = null);

(statearr_17386_19245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (10))){
var inst_17315 = (state_17347[(2)]);
var inst_17316 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17347__$1 = (function (){var statearr_17387 = state_17347;
(statearr_17387[(13)] = inst_17315);

return statearr_17387;
})();
var statearr_17388_19246 = state_17347__$1;
(statearr_17388_19246[(2)] = inst_17316);


cljs.core.async.impl.ioc_helpers.process_exception(state_17347__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (8))){
var inst_17329 = (state_17347[(2)]);
var state_17347__$1 = state_17347;
var statearr_17389_19248 = state_17347__$1;
(statearr_17389_19248[(2)] = inst_17329);

(statearr_17389_19248[(1)] = (5));


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
});})(c__15513__auto___19154,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14929__auto__,c__15513__auto___19154,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_17390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17390[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_17390[(1)] = (1));

return statearr_17390;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_17347){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_17347);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e17391){if((e17391 instanceof Object)){
var ex__14933__auto__ = e17391;
var statearr_17392_19253 = state_17347;
(statearr_17392_19253[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19257 = state_17347;
state_17347 = G__19257;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_17347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_17347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___19154,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15515__auto__ = (function (){var statearr_17393 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_17393[(6)] = c__15513__auto___19154);

return statearr_17393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___19154,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17399 = arguments.length;
switch (G__17399) {
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
var c__15513__auto___19266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___19266,out){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___19266,out){
return (function (state_17431){
var state_val_17432 = (state_17431[(1)]);
if((state_val_17432 === (7))){
var inst_17410 = (state_17431[(7)]);
var inst_17411 = (state_17431[(8)]);
var inst_17410__$1 = (state_17431[(2)]);
var inst_17411__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17410__$1,(0),null);
var inst_17412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17410__$1,(1),null);
var inst_17413 = (inst_17411__$1 == null);
var state_17431__$1 = (function (){var statearr_17442 = state_17431;
(statearr_17442[(9)] = inst_17412);

(statearr_17442[(7)] = inst_17410__$1);

(statearr_17442[(8)] = inst_17411__$1);

return statearr_17442;
})();
if(cljs.core.truth_(inst_17413)){
var statearr_17443_19273 = state_17431__$1;
(statearr_17443_19273[(1)] = (8));

} else {
var statearr_17445_19278 = state_17431__$1;
(statearr_17445_19278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (1))){
var inst_17400 = cljs.core.vec(chs);
var inst_17401 = inst_17400;
var state_17431__$1 = (function (){var statearr_17447 = state_17431;
(statearr_17447[(10)] = inst_17401);

return statearr_17447;
})();
var statearr_17448_19290 = state_17431__$1;
(statearr_17448_19290[(2)] = null);

(statearr_17448_19290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (4))){
var inst_17401 = (state_17431[(10)]);
var state_17431__$1 = state_17431;
return cljs.core.async.ioc_alts_BANG_(state_17431__$1,(7),inst_17401);
} else {
if((state_val_17432 === (6))){
var inst_17427 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
var statearr_17454_19309 = state_17431__$1;
(statearr_17454_19309[(2)] = inst_17427);

(statearr_17454_19309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (3))){
var inst_17429 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17431__$1,inst_17429);
} else {
if((state_val_17432 === (2))){
var inst_17401 = (state_17431[(10)]);
var inst_17403 = cljs.core.count(inst_17401);
var inst_17404 = (inst_17403 > (0));
var state_17431__$1 = state_17431;
if(cljs.core.truth_(inst_17404)){
var statearr_17460_19314 = state_17431__$1;
(statearr_17460_19314[(1)] = (4));

} else {
var statearr_17461_19315 = state_17431__$1;
(statearr_17461_19315[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (11))){
var inst_17401 = (state_17431[(10)]);
var inst_17420 = (state_17431[(2)]);
var tmp17456 = inst_17401;
var inst_17401__$1 = tmp17456;
var state_17431__$1 = (function (){var statearr_17462 = state_17431;
(statearr_17462[(11)] = inst_17420);

(statearr_17462[(10)] = inst_17401__$1);

return statearr_17462;
})();
var statearr_17463_19327 = state_17431__$1;
(statearr_17463_19327[(2)] = null);

(statearr_17463_19327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (9))){
var inst_17411 = (state_17431[(8)]);
var state_17431__$1 = state_17431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17431__$1,(11),out,inst_17411);
} else {
if((state_val_17432 === (5))){
var inst_17425 = cljs.core.async.close_BANG_(out);
var state_17431__$1 = state_17431;
var statearr_17464_19339 = state_17431__$1;
(statearr_17464_19339[(2)] = inst_17425);

(statearr_17464_19339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (10))){
var inst_17423 = (state_17431[(2)]);
var state_17431__$1 = state_17431;
var statearr_17467_19346 = state_17431__$1;
(statearr_17467_19346[(2)] = inst_17423);

(statearr_17467_19346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17432 === (8))){
var inst_17412 = (state_17431[(9)]);
var inst_17410 = (state_17431[(7)]);
var inst_17411 = (state_17431[(8)]);
var inst_17401 = (state_17431[(10)]);
var inst_17415 = (function (){var cs = inst_17401;
var vec__17406 = inst_17410;
var v = inst_17411;
var c = inst_17412;
return ((function (cs,vec__17406,v,c,inst_17412,inst_17410,inst_17411,inst_17401,state_val_17432,c__15513__auto___19266,out){
return (function (p1__17396_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17396_SHARP_);
});
;})(cs,vec__17406,v,c,inst_17412,inst_17410,inst_17411,inst_17401,state_val_17432,c__15513__auto___19266,out))
})();
var inst_17416 = cljs.core.filterv(inst_17415,inst_17401);
var inst_17401__$1 = inst_17416;
var state_17431__$1 = (function (){var statearr_17468 = state_17431;
(statearr_17468[(10)] = inst_17401__$1);

return statearr_17468;
})();
var statearr_17469_19354 = state_17431__$1;
(statearr_17469_19354[(2)] = null);

(statearr_17469_19354[(1)] = (2));


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
});})(c__15513__auto___19266,out))
;
return ((function (switch__14929__auto__,c__15513__auto___19266,out){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_17470 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17470[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_17470[(1)] = (1));

return statearr_17470;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_17431){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_17431);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e17471){if((e17471 instanceof Object)){
var ex__14933__auto__ = e17471;
var statearr_17472_19358 = state_17431;
(statearr_17472_19358[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19359 = state_17431;
state_17431 = G__19359;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_17431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_17431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___19266,out))
})();
var state__15515__auto__ = (function (){var statearr_17474 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_17474[(6)] = c__15513__auto___19266);

return statearr_17474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___19266,out))
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
var G__17477 = arguments.length;
switch (G__17477) {
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
var c__15513__auto___19366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___19366,out){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___19366,out){
return (function (state_17504){
var state_val_17505 = (state_17504[(1)]);
if((state_val_17505 === (7))){
var inst_17485 = (state_17504[(7)]);
var inst_17485__$1 = (state_17504[(2)]);
var inst_17486 = (inst_17485__$1 == null);
var inst_17487 = cljs.core.not(inst_17486);
var state_17504__$1 = (function (){var statearr_17507 = state_17504;
(statearr_17507[(7)] = inst_17485__$1);

return statearr_17507;
})();
if(inst_17487){
var statearr_17508_19367 = state_17504__$1;
(statearr_17508_19367[(1)] = (8));

} else {
var statearr_17510_19368 = state_17504__$1;
(statearr_17510_19368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (1))){
var inst_17478 = (0);
var state_17504__$1 = (function (){var statearr_17511 = state_17504;
(statearr_17511[(8)] = inst_17478);

return statearr_17511;
})();
var statearr_17512_19374 = state_17504__$1;
(statearr_17512_19374[(2)] = null);

(statearr_17512_19374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (4))){
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17504__$1,(7),ch);
} else {
if((state_val_17505 === (6))){
var inst_17499 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17513_19379 = state_17504__$1;
(statearr_17513_19379[(2)] = inst_17499);

(statearr_17513_19379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (3))){
var inst_17501 = (state_17504[(2)]);
var inst_17502 = cljs.core.async.close_BANG_(out);
var state_17504__$1 = (function (){var statearr_17514 = state_17504;
(statearr_17514[(9)] = inst_17501);

return statearr_17514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17504__$1,inst_17502);
} else {
if((state_val_17505 === (2))){
var inst_17478 = (state_17504[(8)]);
var inst_17482 = (inst_17478 < n);
var state_17504__$1 = state_17504;
if(cljs.core.truth_(inst_17482)){
var statearr_17515_19384 = state_17504__$1;
(statearr_17515_19384[(1)] = (4));

} else {
var statearr_17516_19385 = state_17504__$1;
(statearr_17516_19385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (11))){
var inst_17478 = (state_17504[(8)]);
var inst_17491 = (state_17504[(2)]);
var inst_17492 = (inst_17478 + (1));
var inst_17478__$1 = inst_17492;
var state_17504__$1 = (function (){var statearr_17517 = state_17504;
(statearr_17517[(8)] = inst_17478__$1);

(statearr_17517[(10)] = inst_17491);

return statearr_17517;
})();
var statearr_17518_19386 = state_17504__$1;
(statearr_17518_19386[(2)] = null);

(statearr_17518_19386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (9))){
var state_17504__$1 = state_17504;
var statearr_17520_19388 = state_17504__$1;
(statearr_17520_19388[(2)] = null);

(statearr_17520_19388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (5))){
var state_17504__$1 = state_17504;
var statearr_17521_19391 = state_17504__$1;
(statearr_17521_19391[(2)] = null);

(statearr_17521_19391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (10))){
var inst_17496 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17522_19392 = state_17504__$1;
(statearr_17522_19392[(2)] = inst_17496);

(statearr_17522_19392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (8))){
var inst_17485 = (state_17504[(7)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17504__$1,(11),out,inst_17485);
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
});})(c__15513__auto___19366,out))
;
return ((function (switch__14929__auto__,c__15513__auto___19366,out){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_17523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17523[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_17523[(1)] = (1));

return statearr_17523;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_17504){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_17504);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e17524){if((e17524 instanceof Object)){
var ex__14933__auto__ = e17524;
var statearr_17525_19406 = state_17504;
(statearr_17525_19406[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19408 = state_17504;
state_17504 = G__19408;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_17504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_17504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___19366,out))
})();
var state__15515__auto__ = (function (){var statearr_17532 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_17532[(6)] = c__15513__auto___19366);

return statearr_17532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___19366,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17538 = (function (f,ch,meta17539){
this.f = f;
this.ch = ch;
this.meta17539 = meta17539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17540,meta17539__$1){
var self__ = this;
var _17540__$1 = this;
return (new cljs.core.async.t_cljs$core$async17538(self__.f,self__.ch,meta17539__$1));
});

cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17540){
var self__ = this;
var _17540__$1 = this;
return self__.meta17539;
});

cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17552 = (function (f,ch,meta17539,_,fn1,meta17553){
this.f = f;
this.ch = ch;
this.meta17539 = meta17539;
this._ = _;
this.fn1 = fn1;
this.meta17553 = meta17553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17554,meta17553__$1){
var self__ = this;
var _17554__$1 = this;
return (new cljs.core.async.t_cljs$core$async17552(self__.f,self__.ch,self__.meta17539,self__._,self__.fn1,meta17553__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17554){
var self__ = this;
var _17554__$1 = this;
return self__.meta17553;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17552.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17537_SHARP_){
var G__17561 = (((p1__17537_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17537_SHARP_) : self__.f.call(null,p1__17537_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17561) : f1.call(null,G__17561));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17552.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17539","meta17539",-1722291887,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17538","cljs.core.async/t_cljs$core$async17538",-589981135,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17553","meta17553",1030564435,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17552";

cljs.core.async.t_cljs$core$async17552.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17552");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17552.
 */
cljs.core.async.__GT_t_cljs$core$async17552 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17552(f__$1,ch__$1,meta17539__$1,___$2,fn1__$1,meta17553){
return (new cljs.core.async.t_cljs$core$async17552(f__$1,ch__$1,meta17539__$1,___$2,fn1__$1,meta17553));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17552(self__.f,self__.ch,self__.meta17539,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17568 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17568) : self__.f.call(null,G__17568));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17539","meta17539",-1722291887,null)], null);
});

cljs.core.async.t_cljs$core$async17538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17538";

cljs.core.async.t_cljs$core$async17538.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17538");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17538.
 */
cljs.core.async.__GT_t_cljs$core$async17538 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17538(f__$1,ch__$1,meta17539){
return (new cljs.core.async.t_cljs$core$async17538(f__$1,ch__$1,meta17539));
});

}

return (new cljs.core.async.t_cljs$core$async17538(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17576 = (function (f,ch,meta17577){
this.f = f;
this.ch = ch;
this.meta17577 = meta17577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17578,meta17577__$1){
var self__ = this;
var _17578__$1 = this;
return (new cljs.core.async.t_cljs$core$async17576(self__.f,self__.ch,meta17577__$1));
});

cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17578){
var self__ = this;
var _17578__$1 = this;
return self__.meta17577;
});

cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17577","meta17577",-443471232,null)], null);
});

cljs.core.async.t_cljs$core$async17576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17576";

cljs.core.async.t_cljs$core$async17576.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17576");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17576.
 */
cljs.core.async.__GT_t_cljs$core$async17576 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17576(f__$1,ch__$1,meta17577){
return (new cljs.core.async.t_cljs$core$async17576(f__$1,ch__$1,meta17577));
});

}

return (new cljs.core.async.t_cljs$core$async17576(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17588 = (function (p,ch,meta17589){
this.p = p;
this.ch = ch;
this.meta17589 = meta17589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17590,meta17589__$1){
var self__ = this;
var _17590__$1 = this;
return (new cljs.core.async.t_cljs$core$async17588(self__.p,self__.ch,meta17589__$1));
});

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17590){
var self__ = this;
var _17590__$1 = this;
return self__.meta17589;
});

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17589","meta17589",-703655030,null)], null);
});

cljs.core.async.t_cljs$core$async17588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17588";

cljs.core.async.t_cljs$core$async17588.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17588");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17588.
 */
cljs.core.async.__GT_t_cljs$core$async17588 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17588(p__$1,ch__$1,meta17589){
return (new cljs.core.async.t_cljs$core$async17588(p__$1,ch__$1,meta17589));
});

}

return (new cljs.core.async.t_cljs$core$async17588(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17619 = arguments.length;
switch (G__17619) {
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
var c__15513__auto___19451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___19451,out){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___19451,out){
return (function (state_17646){
var state_val_17647 = (state_17646[(1)]);
if((state_val_17647 === (7))){
var inst_17642 = (state_17646[(2)]);
var state_17646__$1 = state_17646;
var statearr_17651_19462 = state_17646__$1;
(statearr_17651_19462[(2)] = inst_17642);

(statearr_17651_19462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (1))){
var state_17646__$1 = state_17646;
var statearr_17652_19466 = state_17646__$1;
(statearr_17652_19466[(2)] = null);

(statearr_17652_19466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (4))){
var inst_17627 = (state_17646[(7)]);
var inst_17627__$1 = (state_17646[(2)]);
var inst_17628 = (inst_17627__$1 == null);
var state_17646__$1 = (function (){var statearr_17653 = state_17646;
(statearr_17653[(7)] = inst_17627__$1);

return statearr_17653;
})();
if(cljs.core.truth_(inst_17628)){
var statearr_17655_19467 = state_17646__$1;
(statearr_17655_19467[(1)] = (5));

} else {
var statearr_17656_19468 = state_17646__$1;
(statearr_17656_19468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (6))){
var inst_17627 = (state_17646[(7)]);
var inst_17633 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17627) : p.call(null,inst_17627));
var state_17646__$1 = state_17646;
if(cljs.core.truth_(inst_17633)){
var statearr_17661_19469 = state_17646__$1;
(statearr_17661_19469[(1)] = (8));

} else {
var statearr_17666_19470 = state_17646__$1;
(statearr_17666_19470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (3))){
var inst_17644 = (state_17646[(2)]);
var state_17646__$1 = state_17646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17646__$1,inst_17644);
} else {
if((state_val_17647 === (2))){
var state_17646__$1 = state_17646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17646__$1,(4),ch);
} else {
if((state_val_17647 === (11))){
var inst_17636 = (state_17646[(2)]);
var state_17646__$1 = state_17646;
var statearr_17667_19473 = state_17646__$1;
(statearr_17667_19473[(2)] = inst_17636);

(statearr_17667_19473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (9))){
var state_17646__$1 = state_17646;
var statearr_17668_19476 = state_17646__$1;
(statearr_17668_19476[(2)] = null);

(statearr_17668_19476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (5))){
var inst_17631 = cljs.core.async.close_BANG_(out);
var state_17646__$1 = state_17646;
var statearr_17671_19477 = state_17646__$1;
(statearr_17671_19477[(2)] = inst_17631);

(statearr_17671_19477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (10))){
var inst_17639 = (state_17646[(2)]);
var state_17646__$1 = (function (){var statearr_17673 = state_17646;
(statearr_17673[(8)] = inst_17639);

return statearr_17673;
})();
var statearr_17674_19479 = state_17646__$1;
(statearr_17674_19479[(2)] = null);

(statearr_17674_19479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17647 === (8))){
var inst_17627 = (state_17646[(7)]);
var state_17646__$1 = state_17646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17646__$1,(11),out,inst_17627);
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
});})(c__15513__auto___19451,out))
;
return ((function (switch__14929__auto__,c__15513__auto___19451,out){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_17677 = [null,null,null,null,null,null,null,null,null];
(statearr_17677[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_17677[(1)] = (1));

return statearr_17677;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_17646){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_17646);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e17680){if((e17680 instanceof Object)){
var ex__14933__auto__ = e17680;
var statearr_17681_19484 = state_17646;
(statearr_17681_19484[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19487 = state_17646;
state_17646 = G__19487;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_17646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_17646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___19451,out))
})();
var state__15515__auto__ = (function (){var statearr_17683 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_17683[(6)] = c__15513__auto___19451);

return statearr_17683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___19451,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17689 = arguments.length;
switch (G__17689) {
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
var c__15513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto__){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto__){
return (function (state_17770){
var state_val_17771 = (state_17770[(1)]);
if((state_val_17771 === (7))){
var inst_17763 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17775_19489 = state_17770__$1;
(statearr_17775_19489[(2)] = inst_17763);

(statearr_17775_19489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (20))){
var inst_17731 = (state_17770[(7)]);
var inst_17744 = (state_17770[(2)]);
var inst_17745 = cljs.core.next(inst_17731);
var inst_17715 = inst_17745;
var inst_17716 = null;
var inst_17717 = (0);
var inst_17718 = (0);
var state_17770__$1 = (function (){var statearr_17779 = state_17770;
(statearr_17779[(8)] = inst_17717);

(statearr_17779[(9)] = inst_17716);

(statearr_17779[(10)] = inst_17744);

(statearr_17779[(11)] = inst_17715);

(statearr_17779[(12)] = inst_17718);

return statearr_17779;
})();
var statearr_17781_19497 = state_17770__$1;
(statearr_17781_19497[(2)] = null);

(statearr_17781_19497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (1))){
var state_17770__$1 = state_17770;
var statearr_17784_19498 = state_17770__$1;
(statearr_17784_19498[(2)] = null);

(statearr_17784_19498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (4))){
var inst_17704 = (state_17770[(13)]);
var inst_17704__$1 = (state_17770[(2)]);
var inst_17705 = (inst_17704__$1 == null);
var state_17770__$1 = (function (){var statearr_17787 = state_17770;
(statearr_17787[(13)] = inst_17704__$1);

return statearr_17787;
})();
if(cljs.core.truth_(inst_17705)){
var statearr_17788_19510 = state_17770__$1;
(statearr_17788_19510[(1)] = (5));

} else {
var statearr_17790_19511 = state_17770__$1;
(statearr_17790_19511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (15))){
var state_17770__$1 = state_17770;
var statearr_17795_19515 = state_17770__$1;
(statearr_17795_19515[(2)] = null);

(statearr_17795_19515[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (21))){
var state_17770__$1 = state_17770;
var statearr_17798_19516 = state_17770__$1;
(statearr_17798_19516[(2)] = null);

(statearr_17798_19516[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (13))){
var inst_17717 = (state_17770[(8)]);
var inst_17716 = (state_17770[(9)]);
var inst_17715 = (state_17770[(11)]);
var inst_17718 = (state_17770[(12)]);
var inst_17726 = (state_17770[(2)]);
var inst_17727 = (inst_17718 + (1));
var tmp17791 = inst_17717;
var tmp17792 = inst_17716;
var tmp17793 = inst_17715;
var inst_17715__$1 = tmp17793;
var inst_17716__$1 = tmp17792;
var inst_17717__$1 = tmp17791;
var inst_17718__$1 = inst_17727;
var state_17770__$1 = (function (){var statearr_17803 = state_17770;
(statearr_17803[(8)] = inst_17717__$1);

(statearr_17803[(9)] = inst_17716__$1);

(statearr_17803[(14)] = inst_17726);

(statearr_17803[(11)] = inst_17715__$1);

(statearr_17803[(12)] = inst_17718__$1);

return statearr_17803;
})();
var statearr_17804_19527 = state_17770__$1;
(statearr_17804_19527[(2)] = null);

(statearr_17804_19527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (22))){
var state_17770__$1 = state_17770;
var statearr_17807_19528 = state_17770__$1;
(statearr_17807_19528[(2)] = null);

(statearr_17807_19528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (6))){
var inst_17704 = (state_17770[(13)]);
var inst_17713 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17704) : f.call(null,inst_17704));
var inst_17714 = cljs.core.seq(inst_17713);
var inst_17715 = inst_17714;
var inst_17716 = null;
var inst_17717 = (0);
var inst_17718 = (0);
var state_17770__$1 = (function (){var statearr_17809 = state_17770;
(statearr_17809[(8)] = inst_17717);

(statearr_17809[(9)] = inst_17716);

(statearr_17809[(11)] = inst_17715);

(statearr_17809[(12)] = inst_17718);

return statearr_17809;
})();
var statearr_17811_19537 = state_17770__$1;
(statearr_17811_19537[(2)] = null);

(statearr_17811_19537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (17))){
var inst_17731 = (state_17770[(7)]);
var inst_17737 = cljs.core.chunk_first(inst_17731);
var inst_17738 = cljs.core.chunk_rest(inst_17731);
var inst_17739 = cljs.core.count(inst_17737);
var inst_17715 = inst_17738;
var inst_17716 = inst_17737;
var inst_17717 = inst_17739;
var inst_17718 = (0);
var state_17770__$1 = (function (){var statearr_17814 = state_17770;
(statearr_17814[(8)] = inst_17717);

(statearr_17814[(9)] = inst_17716);

(statearr_17814[(11)] = inst_17715);

(statearr_17814[(12)] = inst_17718);

return statearr_17814;
})();
var statearr_17815_19554 = state_17770__$1;
(statearr_17815_19554[(2)] = null);

(statearr_17815_19554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (3))){
var inst_17765 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17770__$1,inst_17765);
} else {
if((state_val_17771 === (12))){
var inst_17753 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17816_19569 = state_17770__$1;
(statearr_17816_19569[(2)] = inst_17753);

(statearr_17816_19569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (2))){
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17770__$1,(4),in$);
} else {
if((state_val_17771 === (23))){
var inst_17761 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17821_19582 = state_17770__$1;
(statearr_17821_19582[(2)] = inst_17761);

(statearr_17821_19582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (19))){
var inst_17748 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17823_19585 = state_17770__$1;
(statearr_17823_19585[(2)] = inst_17748);

(statearr_17823_19585[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (11))){
var inst_17715 = (state_17770[(11)]);
var inst_17731 = (state_17770[(7)]);
var inst_17731__$1 = cljs.core.seq(inst_17715);
var state_17770__$1 = (function (){var statearr_17825 = state_17770;
(statearr_17825[(7)] = inst_17731__$1);

return statearr_17825;
})();
if(inst_17731__$1){
var statearr_17827_19592 = state_17770__$1;
(statearr_17827_19592[(1)] = (14));

} else {
var statearr_17829_19594 = state_17770__$1;
(statearr_17829_19594[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (9))){
var inst_17755 = (state_17770[(2)]);
var inst_17756 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17770__$1 = (function (){var statearr_17831 = state_17770;
(statearr_17831[(15)] = inst_17755);

return statearr_17831;
})();
if(cljs.core.truth_(inst_17756)){
var statearr_17832_19605 = state_17770__$1;
(statearr_17832_19605[(1)] = (21));

} else {
var statearr_17833_19606 = state_17770__$1;
(statearr_17833_19606[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (5))){
var inst_17707 = cljs.core.async.close_BANG_(out);
var state_17770__$1 = state_17770;
var statearr_17837_19614 = state_17770__$1;
(statearr_17837_19614[(2)] = inst_17707);

(statearr_17837_19614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (14))){
var inst_17731 = (state_17770[(7)]);
var inst_17734 = cljs.core.chunked_seq_QMARK_(inst_17731);
var state_17770__$1 = state_17770;
if(inst_17734){
var statearr_17839_19624 = state_17770__$1;
(statearr_17839_19624[(1)] = (17));

} else {
var statearr_17841_19625 = state_17770__$1;
(statearr_17841_19625[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (16))){
var inst_17751 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17844_19631 = state_17770__$1;
(statearr_17844_19631[(2)] = inst_17751);

(statearr_17844_19631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (10))){
var inst_17716 = (state_17770[(9)]);
var inst_17718 = (state_17770[(12)]);
var inst_17724 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17716,inst_17718);
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17770__$1,(13),out,inst_17724);
} else {
if((state_val_17771 === (18))){
var inst_17731 = (state_17770[(7)]);
var inst_17742 = cljs.core.first(inst_17731);
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17770__$1,(20),out,inst_17742);
} else {
if((state_val_17771 === (8))){
var inst_17717 = (state_17770[(8)]);
var inst_17718 = (state_17770[(12)]);
var inst_17721 = (inst_17718 < inst_17717);
var inst_17722 = inst_17721;
var state_17770__$1 = state_17770;
if(cljs.core.truth_(inst_17722)){
var statearr_17845_19644 = state_17770__$1;
(statearr_17845_19644[(1)] = (10));

} else {
var statearr_17850_19646 = state_17770__$1;
(statearr_17850_19646[(1)] = (11));

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
});})(c__15513__auto__))
;
return ((function (switch__14929__auto__,c__15513__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14930__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14930__auto____0 = (function (){
var statearr_17854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17854[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14930__auto__);

(statearr_17854[(1)] = (1));

return statearr_17854;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14930__auto____1 = (function (state_17770){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_17770);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e17859){if((e17859 instanceof Object)){
var ex__14933__auto__ = e17859;
var statearr_17860_19652 = state_17770;
(statearr_17860_19652[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17859;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19656 = state_17770;
state_17770 = G__19656;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14930__auto__ = function(state_17770){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14930__auto____1.call(this,state_17770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14930__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14930__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto__))
})();
var state__15515__auto__ = (function (){var statearr_17861 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_17861[(6)] = c__15513__auto__);

return statearr_17861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto__))
);

return c__15513__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17869 = arguments.length;
switch (G__17869) {
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
var G__17878 = arguments.length;
switch (G__17878) {
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
var G__17887 = arguments.length;
switch (G__17887) {
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
var c__15513__auto___19672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___19672,out){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___19672,out){
return (function (state_17921){
var state_val_17922 = (state_17921[(1)]);
if((state_val_17922 === (7))){
var inst_17916 = (state_17921[(2)]);
var state_17921__$1 = state_17921;
var statearr_17925_19675 = state_17921__$1;
(statearr_17925_19675[(2)] = inst_17916);

(statearr_17925_19675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (1))){
var inst_17894 = null;
var state_17921__$1 = (function (){var statearr_17930 = state_17921;
(statearr_17930[(7)] = inst_17894);

return statearr_17930;
})();
var statearr_17934_19676 = state_17921__$1;
(statearr_17934_19676[(2)] = null);

(statearr_17934_19676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (4))){
var inst_17897 = (state_17921[(8)]);
var inst_17897__$1 = (state_17921[(2)]);
var inst_17902 = (inst_17897__$1 == null);
var inst_17903 = cljs.core.not(inst_17902);
var state_17921__$1 = (function (){var statearr_17937 = state_17921;
(statearr_17937[(8)] = inst_17897__$1);

return statearr_17937;
})();
if(inst_17903){
var statearr_17938_19678 = state_17921__$1;
(statearr_17938_19678[(1)] = (5));

} else {
var statearr_17940_19679 = state_17921__$1;
(statearr_17940_19679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (6))){
var state_17921__$1 = state_17921;
var statearr_17944_19684 = state_17921__$1;
(statearr_17944_19684[(2)] = null);

(statearr_17944_19684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (3))){
var inst_17918 = (state_17921[(2)]);
var inst_17919 = cljs.core.async.close_BANG_(out);
var state_17921__$1 = (function (){var statearr_17949 = state_17921;
(statearr_17949[(9)] = inst_17918);

return statearr_17949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17921__$1,inst_17919);
} else {
if((state_val_17922 === (2))){
var state_17921__$1 = state_17921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17921__$1,(4),ch);
} else {
if((state_val_17922 === (11))){
var inst_17897 = (state_17921[(8)]);
var inst_17910 = (state_17921[(2)]);
var inst_17894 = inst_17897;
var state_17921__$1 = (function (){var statearr_17952 = state_17921;
(statearr_17952[(10)] = inst_17910);

(statearr_17952[(7)] = inst_17894);

return statearr_17952;
})();
var statearr_17953_19688 = state_17921__$1;
(statearr_17953_19688[(2)] = null);

(statearr_17953_19688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (9))){
var inst_17897 = (state_17921[(8)]);
var state_17921__$1 = state_17921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17921__$1,(11),out,inst_17897);
} else {
if((state_val_17922 === (5))){
var inst_17897 = (state_17921[(8)]);
var inst_17894 = (state_17921[(7)]);
var inst_17905 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17897,inst_17894);
var state_17921__$1 = state_17921;
if(inst_17905){
var statearr_17958_19693 = state_17921__$1;
(statearr_17958_19693[(1)] = (8));

} else {
var statearr_17959_19694 = state_17921__$1;
(statearr_17959_19694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (10))){
var inst_17913 = (state_17921[(2)]);
var state_17921__$1 = state_17921;
var statearr_17961_19696 = state_17921__$1;
(statearr_17961_19696[(2)] = inst_17913);

(statearr_17961_19696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17922 === (8))){
var inst_17894 = (state_17921[(7)]);
var tmp17957 = inst_17894;
var inst_17894__$1 = tmp17957;
var state_17921__$1 = (function (){var statearr_17962 = state_17921;
(statearr_17962[(7)] = inst_17894__$1);

return statearr_17962;
})();
var statearr_17963_19697 = state_17921__$1;
(statearr_17963_19697[(2)] = null);

(statearr_17963_19697[(1)] = (2));


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
});})(c__15513__auto___19672,out))
;
return ((function (switch__14929__auto__,c__15513__auto___19672,out){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_17965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17965[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_17965[(1)] = (1));

return statearr_17965;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_17921){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_17921);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e17968){if((e17968 instanceof Object)){
var ex__14933__auto__ = e17968;
var statearr_17969_19701 = state_17921;
(statearr_17969_19701[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19703 = state_17921;
state_17921 = G__19703;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_17921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_17921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___19672,out))
})();
var state__15515__auto__ = (function (){var statearr_17974 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_17974[(6)] = c__15513__auto___19672);

return statearr_17974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___19672,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17978 = arguments.length;
switch (G__17978) {
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
var c__15513__auto___19708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___19708,out){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___19708,out){
return (function (state_18023){
var state_val_18024 = (state_18023[(1)]);
if((state_val_18024 === (7))){
var inst_18019 = (state_18023[(2)]);
var state_18023__$1 = state_18023;
var statearr_18027_19709 = state_18023__$1;
(statearr_18027_19709[(2)] = inst_18019);

(statearr_18027_19709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (1))){
var inst_17985 = (new Array(n));
var inst_17986 = inst_17985;
var inst_17987 = (0);
var state_18023__$1 = (function (){var statearr_18028 = state_18023;
(statearr_18028[(7)] = inst_17986);

(statearr_18028[(8)] = inst_17987);

return statearr_18028;
})();
var statearr_18029_19711 = state_18023__$1;
(statearr_18029_19711[(2)] = null);

(statearr_18029_19711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (4))){
var inst_17990 = (state_18023[(9)]);
var inst_17990__$1 = (state_18023[(2)]);
var inst_17991 = (inst_17990__$1 == null);
var inst_17992 = cljs.core.not(inst_17991);
var state_18023__$1 = (function (){var statearr_18030 = state_18023;
(statearr_18030[(9)] = inst_17990__$1);

return statearr_18030;
})();
if(inst_17992){
var statearr_18031_19712 = state_18023__$1;
(statearr_18031_19712[(1)] = (5));

} else {
var statearr_18032_19713 = state_18023__$1;
(statearr_18032_19713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (15))){
var inst_18013 = (state_18023[(2)]);
var state_18023__$1 = state_18023;
var statearr_18033_19714 = state_18023__$1;
(statearr_18033_19714[(2)] = inst_18013);

(statearr_18033_19714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (13))){
var state_18023__$1 = state_18023;
var statearr_18034_19715 = state_18023__$1;
(statearr_18034_19715[(2)] = null);

(statearr_18034_19715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (6))){
var inst_17987 = (state_18023[(8)]);
var inst_18009 = (inst_17987 > (0));
var state_18023__$1 = state_18023;
if(cljs.core.truth_(inst_18009)){
var statearr_18035_19719 = state_18023__$1;
(statearr_18035_19719[(1)] = (12));

} else {
var statearr_18036_19720 = state_18023__$1;
(statearr_18036_19720[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (3))){
var inst_18021 = (state_18023[(2)]);
var state_18023__$1 = state_18023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18023__$1,inst_18021);
} else {
if((state_val_18024 === (12))){
var inst_17986 = (state_18023[(7)]);
var inst_18011 = cljs.core.vec(inst_17986);
var state_18023__$1 = state_18023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18023__$1,(15),out,inst_18011);
} else {
if((state_val_18024 === (2))){
var state_18023__$1 = state_18023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18023__$1,(4),ch);
} else {
if((state_val_18024 === (11))){
var inst_18003 = (state_18023[(2)]);
var inst_18004 = (new Array(n));
var inst_17986 = inst_18004;
var inst_17987 = (0);
var state_18023__$1 = (function (){var statearr_18037 = state_18023;
(statearr_18037[(7)] = inst_17986);

(statearr_18037[(8)] = inst_17987);

(statearr_18037[(10)] = inst_18003);

return statearr_18037;
})();
var statearr_18042_19722 = state_18023__$1;
(statearr_18042_19722[(2)] = null);

(statearr_18042_19722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (9))){
var inst_17986 = (state_18023[(7)]);
var inst_18001 = cljs.core.vec(inst_17986);
var state_18023__$1 = state_18023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18023__$1,(11),out,inst_18001);
} else {
if((state_val_18024 === (5))){
var inst_17986 = (state_18023[(7)]);
var inst_17990 = (state_18023[(9)]);
var inst_17995 = (state_18023[(11)]);
var inst_17987 = (state_18023[(8)]);
var inst_17994 = (inst_17986[inst_17987] = inst_17990);
var inst_17995__$1 = (inst_17987 + (1));
var inst_17997 = (inst_17995__$1 < n);
var state_18023__$1 = (function (){var statearr_18047 = state_18023;
(statearr_18047[(12)] = inst_17994);

(statearr_18047[(11)] = inst_17995__$1);

return statearr_18047;
})();
if(cljs.core.truth_(inst_17997)){
var statearr_18052_19727 = state_18023__$1;
(statearr_18052_19727[(1)] = (8));

} else {
var statearr_18053_19728 = state_18023__$1;
(statearr_18053_19728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (14))){
var inst_18016 = (state_18023[(2)]);
var inst_18017 = cljs.core.async.close_BANG_(out);
var state_18023__$1 = (function (){var statearr_18055 = state_18023;
(statearr_18055[(13)] = inst_18016);

return statearr_18055;
})();
var statearr_18056_19732 = state_18023__$1;
(statearr_18056_19732[(2)] = inst_18017);

(statearr_18056_19732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (10))){
var inst_18007 = (state_18023[(2)]);
var state_18023__$1 = state_18023;
var statearr_18057_19733 = state_18023__$1;
(statearr_18057_19733[(2)] = inst_18007);

(statearr_18057_19733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (8))){
var inst_17986 = (state_18023[(7)]);
var inst_17995 = (state_18023[(11)]);
var tmp18054 = inst_17986;
var inst_17986__$1 = tmp18054;
var inst_17987 = inst_17995;
var state_18023__$1 = (function (){var statearr_18058 = state_18023;
(statearr_18058[(7)] = inst_17986__$1);

(statearr_18058[(8)] = inst_17987);

return statearr_18058;
})();
var statearr_18059_19738 = state_18023__$1;
(statearr_18059_19738[(2)] = null);

(statearr_18059_19738[(1)] = (2));


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
});})(c__15513__auto___19708,out))
;
return ((function (switch__14929__auto__,c__15513__auto___19708,out){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_18061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18061[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_18061[(1)] = (1));

return statearr_18061;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_18023){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_18023);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e18062){if((e18062 instanceof Object)){
var ex__14933__auto__ = e18062;
var statearr_18063_19739 = state_18023;
(statearr_18063_19739[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19741 = state_18023;
state_18023 = G__19741;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_18023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_18023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___19708,out))
})();
var state__15515__auto__ = (function (){var statearr_18064 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_18064[(6)] = c__15513__auto___19708);

return statearr_18064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___19708,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18066 = arguments.length;
switch (G__18066) {
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
var c__15513__auto___19745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___19745,out){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___19745,out){
return (function (state_18109){
var state_val_18110 = (state_18109[(1)]);
if((state_val_18110 === (7))){
var inst_18105 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18118_19746 = state_18109__$1;
(statearr_18118_19746[(2)] = inst_18105);

(statearr_18118_19746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (1))){
var inst_18068 = [];
var inst_18069 = inst_18068;
var inst_18070 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18109__$1 = (function (){var statearr_18123 = state_18109;
(statearr_18123[(7)] = inst_18069);

(statearr_18123[(8)] = inst_18070);

return statearr_18123;
})();
var statearr_18124_19751 = state_18109__$1;
(statearr_18124_19751[(2)] = null);

(statearr_18124_19751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (4))){
var inst_18073 = (state_18109[(9)]);
var inst_18073__$1 = (state_18109[(2)]);
var inst_18074 = (inst_18073__$1 == null);
var inst_18075 = cljs.core.not(inst_18074);
var state_18109__$1 = (function (){var statearr_18129 = state_18109;
(statearr_18129[(9)] = inst_18073__$1);

return statearr_18129;
})();
if(inst_18075){
var statearr_18130_19760 = state_18109__$1;
(statearr_18130_19760[(1)] = (5));

} else {
var statearr_18131_19761 = state_18109__$1;
(statearr_18131_19761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (15))){
var inst_18099 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18132_19762 = state_18109__$1;
(statearr_18132_19762[(2)] = inst_18099);

(statearr_18132_19762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (13))){
var state_18109__$1 = state_18109;
var statearr_18133_19763 = state_18109__$1;
(statearr_18133_19763[(2)] = null);

(statearr_18133_19763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (6))){
var inst_18069 = (state_18109[(7)]);
var inst_18094 = inst_18069.length;
var inst_18095 = (inst_18094 > (0));
var state_18109__$1 = state_18109;
if(cljs.core.truth_(inst_18095)){
var statearr_18134_19764 = state_18109__$1;
(statearr_18134_19764[(1)] = (12));

} else {
var statearr_18135_19765 = state_18109__$1;
(statearr_18135_19765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (3))){
var inst_18107 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18109__$1,inst_18107);
} else {
if((state_val_18110 === (12))){
var inst_18069 = (state_18109[(7)]);
var inst_18097 = cljs.core.vec(inst_18069);
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18109__$1,(15),out,inst_18097);
} else {
if((state_val_18110 === (2))){
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18109__$1,(4),ch);
} else {
if((state_val_18110 === (11))){
var inst_18077 = (state_18109[(10)]);
var inst_18073 = (state_18109[(9)]);
var inst_18087 = (state_18109[(2)]);
var inst_18088 = [];
var inst_18089 = inst_18088.push(inst_18073);
var inst_18069 = inst_18088;
var inst_18070 = inst_18077;
var state_18109__$1 = (function (){var statearr_18140 = state_18109;
(statearr_18140[(11)] = inst_18087);

(statearr_18140[(7)] = inst_18069);

(statearr_18140[(12)] = inst_18089);

(statearr_18140[(8)] = inst_18070);

return statearr_18140;
})();
var statearr_18142_19780 = state_18109__$1;
(statearr_18142_19780[(2)] = null);

(statearr_18142_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (9))){
var inst_18069 = (state_18109[(7)]);
var inst_18085 = cljs.core.vec(inst_18069);
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18109__$1,(11),out,inst_18085);
} else {
if((state_val_18110 === (5))){
var inst_18077 = (state_18109[(10)]);
var inst_18070 = (state_18109[(8)]);
var inst_18073 = (state_18109[(9)]);
var inst_18077__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18073) : f.call(null,inst_18073));
var inst_18078 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18077__$1,inst_18070);
var inst_18079 = cljs.core.keyword_identical_QMARK_(inst_18070,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18080 = ((inst_18078) || (inst_18079));
var state_18109__$1 = (function (){var statearr_18147 = state_18109;
(statearr_18147[(10)] = inst_18077__$1);

return statearr_18147;
})();
if(cljs.core.truth_(inst_18080)){
var statearr_18148_19790 = state_18109__$1;
(statearr_18148_19790[(1)] = (8));

} else {
var statearr_18149_19792 = state_18109__$1;
(statearr_18149_19792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (14))){
var inst_18102 = (state_18109[(2)]);
var inst_18103 = cljs.core.async.close_BANG_(out);
var state_18109__$1 = (function (){var statearr_18151 = state_18109;
(statearr_18151[(13)] = inst_18102);

return statearr_18151;
})();
var statearr_18152_19800 = state_18109__$1;
(statearr_18152_19800[(2)] = inst_18103);

(statearr_18152_19800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (10))){
var inst_18092 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18155_19808 = state_18109__$1;
(statearr_18155_19808[(2)] = inst_18092);

(statearr_18155_19808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (8))){
var inst_18069 = (state_18109[(7)]);
var inst_18077 = (state_18109[(10)]);
var inst_18073 = (state_18109[(9)]);
var inst_18082 = inst_18069.push(inst_18073);
var tmp18150 = inst_18069;
var inst_18069__$1 = tmp18150;
var inst_18070 = inst_18077;
var state_18109__$1 = (function (){var statearr_18156 = state_18109;
(statearr_18156[(7)] = inst_18069__$1);

(statearr_18156[(14)] = inst_18082);

(statearr_18156[(8)] = inst_18070);

return statearr_18156;
})();
var statearr_18157_19818 = state_18109__$1;
(statearr_18157_19818[(2)] = null);

(statearr_18157_19818[(1)] = (2));


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
});})(c__15513__auto___19745,out))
;
return ((function (switch__14929__auto__,c__15513__auto___19745,out){
return (function() {
var cljs$core$async$state_machine__14930__auto__ = null;
var cljs$core$async$state_machine__14930__auto____0 = (function (){
var statearr_18158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18158[(0)] = cljs$core$async$state_machine__14930__auto__);

(statearr_18158[(1)] = (1));

return statearr_18158;
});
var cljs$core$async$state_machine__14930__auto____1 = (function (state_18109){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_18109);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e18159){if((e18159 instanceof Object)){
var ex__14933__auto__ = e18159;
var statearr_18160_19831 = state_18109;
(statearr_18160_19831[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19840 = state_18109;
state_18109 = G__19840;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
cljs$core$async$state_machine__14930__auto__ = function(state_18109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14930__auto____1.call(this,state_18109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14930__auto____0;
cljs$core$async$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14930__auto____1;
return cljs$core$async$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___19745,out))
})();
var state__15515__auto__ = (function (){var statearr_18161 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_18161[(6)] = c__15513__auto___19745);

return statearr_18161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___19745,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
