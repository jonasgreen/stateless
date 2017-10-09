// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31593 = arguments.length;
switch (G__31593) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31594 = (function (f,blockable,meta31595){
this.f = f;
this.blockable = blockable;
this.meta31595 = meta31595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31596,meta31595__$1){
var self__ = this;
var _31596__$1 = this;
return (new cljs.core.async.t_cljs$core$async31594(self__.f,self__.blockable,meta31595__$1));
});

cljs.core.async.t_cljs$core$async31594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31596){
var self__ = this;
var _31596__$1 = this;
return self__.meta31595;
});

cljs.core.async.t_cljs$core$async31594.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31594.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31595","meta31595",1792547427,null)], null);
});

cljs.core.async.t_cljs$core$async31594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31594";

cljs.core.async.t_cljs$core$async31594.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async31594");
});

cljs.core.async.__GT_t_cljs$core$async31594 = (function cljs$core$async$__GT_t_cljs$core$async31594(f__$1,blockable__$1,meta31595){
return (new cljs.core.async.t_cljs$core$async31594(f__$1,blockable__$1,meta31595));
});

}

return (new cljs.core.async.t_cljs$core$async31594(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__31600 = arguments.length;
switch (G__31600) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__31603 = arguments.length;
switch (G__31603) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__31606 = arguments.length;
switch (G__31606) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31608 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31608);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31608,ret){
return (function (){
return fn1.call(null,val_31608);
});})(val_31608,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__31610 = arguments.length;
switch (G__31610) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8615__auto___31612 = n;
var x_31613 = (0);
while(true){
if((x_31613 < n__8615__auto___31612)){
(a[x_31613] = (0));

var G__31614 = (x_31613 + (1));
x_31613 = G__31614;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31615 = (i + (1));
i = G__31615;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31616 = (function (flag,meta31617){
this.flag = flag;
this.meta31617 = meta31617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31618,meta31617__$1){
var self__ = this;
var _31618__$1 = this;
return (new cljs.core.async.t_cljs$core$async31616(self__.flag,meta31617__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31618){
var self__ = this;
var _31618__$1 = this;
return self__.meta31617;
});})(flag))
;

cljs.core.async.t_cljs$core$async31616.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31616.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31616.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31617","meta31617",74943868,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31616";

cljs.core.async.t_cljs$core$async31616.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async31616");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31616 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31616(flag__$1,meta31617){
return (new cljs.core.async.t_cljs$core$async31616(flag__$1,meta31617));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31616(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31619 = (function (flag,cb,meta31620){
this.flag = flag;
this.cb = cb;
this.meta31620 = meta31620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31621,meta31620__$1){
var self__ = this;
var _31621__$1 = this;
return (new cljs.core.async.t_cljs$core$async31619(self__.flag,self__.cb,meta31620__$1));
});

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31621){
var self__ = this;
var _31621__$1 = this;
return self__.meta31620;
});

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31620","meta31620",-1734361278,null)], null);
});

cljs.core.async.t_cljs$core$async31619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31619";

cljs.core.async.t_cljs$core$async31619.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async31619");
});

cljs.core.async.__GT_t_cljs$core$async31619 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31619(flag__$1,cb__$1,meta31620){
return (new cljs.core.async.t_cljs$core$async31619(flag__$1,cb__$1,meta31620));
});

}

return (new cljs.core.async.t_cljs$core$async31619(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31622_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31622_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31623_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31623_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7668__auto__ = wport;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31624 = (i + (1));
i = G__31624;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7668__auto__ = ret;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7656__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__8846__auto__ = [];
var len__8839__auto___31630 = arguments.length;
var i__8840__auto___31631 = (0);
while(true){
if((i__8840__auto___31631 < len__8839__auto___31630)){
args__8846__auto__.push((arguments[i__8840__auto___31631]));

var G__31632 = (i__8840__auto___31631 + (1));
i__8840__auto___31631 = G__31632;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31627){
var map__31628 = p__31627;
var map__31628__$1 = ((((!((map__31628 == null)))?((((map__31628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31628):map__31628);
var opts = map__31628__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31625){
var G__31626 = cljs.core.first.call(null,seq31625);
var seq31625__$1 = cljs.core.next.call(null,seq31625);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31626,seq31625__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__31634 = arguments.length;
switch (G__31634) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31547__auto___31680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___31680){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___31680){
return (function (state_31658){
var state_val_31659 = (state_31658[(1)]);
if((state_val_31659 === (7))){
var inst_31654 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31660_31681 = state_31658__$1;
(statearr_31660_31681[(2)] = inst_31654);

(statearr_31660_31681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (1))){
var state_31658__$1 = state_31658;
var statearr_31661_31682 = state_31658__$1;
(statearr_31661_31682[(2)] = null);

(statearr_31661_31682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (4))){
var inst_31637 = (state_31658[(7)]);
var inst_31637__$1 = (state_31658[(2)]);
var inst_31638 = (inst_31637__$1 == null);
var state_31658__$1 = (function (){var statearr_31662 = state_31658;
(statearr_31662[(7)] = inst_31637__$1);

return statearr_31662;
})();
if(cljs.core.truth_(inst_31638)){
var statearr_31663_31683 = state_31658__$1;
(statearr_31663_31683[(1)] = (5));

} else {
var statearr_31664_31684 = state_31658__$1;
(statearr_31664_31684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (13))){
var state_31658__$1 = state_31658;
var statearr_31665_31685 = state_31658__$1;
(statearr_31665_31685[(2)] = null);

(statearr_31665_31685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (6))){
var inst_31637 = (state_31658[(7)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31658__$1,(11),to,inst_31637);
} else {
if((state_val_31659 === (3))){
var inst_31656 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31658__$1,inst_31656);
} else {
if((state_val_31659 === (12))){
var state_31658__$1 = state_31658;
var statearr_31666_31686 = state_31658__$1;
(statearr_31666_31686[(2)] = null);

(statearr_31666_31686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (2))){
var state_31658__$1 = state_31658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31658__$1,(4),from);
} else {
if((state_val_31659 === (11))){
var inst_31647 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
if(cljs.core.truth_(inst_31647)){
var statearr_31667_31687 = state_31658__$1;
(statearr_31667_31687[(1)] = (12));

} else {
var statearr_31668_31688 = state_31658__$1;
(statearr_31668_31688[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (9))){
var state_31658__$1 = state_31658;
var statearr_31669_31689 = state_31658__$1;
(statearr_31669_31689[(2)] = null);

(statearr_31669_31689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (5))){
var state_31658__$1 = state_31658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31670_31690 = state_31658__$1;
(statearr_31670_31690[(1)] = (8));

} else {
var statearr_31671_31691 = state_31658__$1;
(statearr_31671_31691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (14))){
var inst_31652 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31672_31692 = state_31658__$1;
(statearr_31672_31692[(2)] = inst_31652);

(statearr_31672_31692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (10))){
var inst_31644 = (state_31658[(2)]);
var state_31658__$1 = state_31658;
var statearr_31673_31693 = state_31658__$1;
(statearr_31673_31693[(2)] = inst_31644);

(statearr_31673_31693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31659 === (8))){
var inst_31641 = cljs.core.async.close_BANG_.call(null,to);
var state_31658__$1 = state_31658;
var statearr_31674_31694 = state_31658__$1;
(statearr_31674_31694[(2)] = inst_31641);

(statearr_31674_31694[(1)] = (10));


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
});})(c__31547__auto___31680))
;
return ((function (switch__31459__auto__,c__31547__auto___31680){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_31675 = [null,null,null,null,null,null,null,null];
(statearr_31675[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_31675[(1)] = (1));

return statearr_31675;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_31658){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_31658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e31676){if((e31676 instanceof Object)){
var ex__31463__auto__ = e31676;
var statearr_31677_31695 = state_31658;
(statearr_31677_31695[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31696 = state_31658;
state_31658 = G__31696;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_31658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_31658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___31680))
})();
var state__31549__auto__ = (function (){var statearr_31678 = f__31548__auto__.call(null);
(statearr_31678[(6)] = c__31547__auto___31680);

return statearr_31678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___31680))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31697){
var vec__31698 = p__31697;
var v = cljs.core.nth.call(null,vec__31698,(0),null);
var p = cljs.core.nth.call(null,vec__31698,(1),null);
var job = vec__31698;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31547__auto___31869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___31869,res,vec__31698,v,p,job,jobs,results){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___31869,res,vec__31698,v,p,job,jobs,results){
return (function (state_31705){
var state_val_31706 = (state_31705[(1)]);
if((state_val_31706 === (1))){
var state_31705__$1 = state_31705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31705__$1,(2),res,v);
} else {
if((state_val_31706 === (2))){
var inst_31702 = (state_31705[(2)]);
var inst_31703 = cljs.core.async.close_BANG_.call(null,res);
var state_31705__$1 = (function (){var statearr_31707 = state_31705;
(statearr_31707[(7)] = inst_31702);

return statearr_31707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31705__$1,inst_31703);
} else {
return null;
}
}
});})(c__31547__auto___31869,res,vec__31698,v,p,job,jobs,results))
;
return ((function (switch__31459__auto__,c__31547__auto___31869,res,vec__31698,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0 = (function (){
var statearr_31708 = [null,null,null,null,null,null,null,null];
(statearr_31708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__);

(statearr_31708[(1)] = (1));

return statearr_31708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1 = (function (state_31705){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_31705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e31709){if((e31709 instanceof Object)){
var ex__31463__auto__ = e31709;
var statearr_31710_31870 = state_31705;
(statearr_31710_31870[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31871 = state_31705;
state_31705 = G__31871;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = function(state_31705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1.call(this,state_31705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___31869,res,vec__31698,v,p,job,jobs,results))
})();
var state__31549__auto__ = (function (){var statearr_31711 = f__31548__auto__.call(null);
(statearr_31711[(6)] = c__31547__auto___31869);

return statearr_31711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___31869,res,vec__31698,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31712){
var vec__31713 = p__31712;
var v = cljs.core.nth.call(null,vec__31713,(0),null);
var p = cljs.core.nth.call(null,vec__31713,(1),null);
var job = vec__31713;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__8615__auto___31872 = n;
var __31873 = (0);
while(true){
if((__31873 < n__8615__auto___31872)){
var G__31716_31874 = type;
var G__31716_31875__$1 = (((G__31716_31874 instanceof cljs.core.Keyword))?G__31716_31874.fqn:null);
switch (G__31716_31875__$1) {
case "compute":
var c__31547__auto___31877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31873,c__31547__auto___31877,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (__31873,c__31547__auto___31877,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async){
return (function (state_31729){
var state_val_31730 = (state_31729[(1)]);
if((state_val_31730 === (1))){
var state_31729__$1 = state_31729;
var statearr_31731_31878 = state_31729__$1;
(statearr_31731_31878[(2)] = null);

(statearr_31731_31878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (2))){
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31729__$1,(4),jobs);
} else {
if((state_val_31730 === (3))){
var inst_31727 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31729__$1,inst_31727);
} else {
if((state_val_31730 === (4))){
var inst_31719 = (state_31729[(2)]);
var inst_31720 = process.call(null,inst_31719);
var state_31729__$1 = state_31729;
if(cljs.core.truth_(inst_31720)){
var statearr_31732_31879 = state_31729__$1;
(statearr_31732_31879[(1)] = (5));

} else {
var statearr_31733_31880 = state_31729__$1;
(statearr_31733_31880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (5))){
var state_31729__$1 = state_31729;
var statearr_31734_31881 = state_31729__$1;
(statearr_31734_31881[(2)] = null);

(statearr_31734_31881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (6))){
var state_31729__$1 = state_31729;
var statearr_31735_31882 = state_31729__$1;
(statearr_31735_31882[(2)] = null);

(statearr_31735_31882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31730 === (7))){
var inst_31725 = (state_31729[(2)]);
var state_31729__$1 = state_31729;
var statearr_31736_31883 = state_31729__$1;
(statearr_31736_31883[(2)] = inst_31725);

(statearr_31736_31883[(1)] = (3));


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
});})(__31873,c__31547__auto___31877,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async))
;
return ((function (__31873,switch__31459__auto__,c__31547__auto___31877,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0 = (function (){
var statearr_31737 = [null,null,null,null,null,null,null];
(statearr_31737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__);

(statearr_31737[(1)] = (1));

return statearr_31737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1 = (function (state_31729){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_31729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e31738){if((e31738 instanceof Object)){
var ex__31463__auto__ = e31738;
var statearr_31739_31884 = state_31729;
(statearr_31739_31884[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31885 = state_31729;
state_31729 = G__31885;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = function(state_31729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1.call(this,state_31729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__;
})()
;})(__31873,switch__31459__auto__,c__31547__auto___31877,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async))
})();
var state__31549__auto__ = (function (){var statearr_31740 = f__31548__auto__.call(null);
(statearr_31740[(6)] = c__31547__auto___31877);

return statearr_31740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(__31873,c__31547__auto___31877,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async))
);


break;
case "async":
var c__31547__auto___31886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31873,c__31547__auto___31886,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (__31873,c__31547__auto___31886,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async){
return (function (state_31753){
var state_val_31754 = (state_31753[(1)]);
if((state_val_31754 === (1))){
var state_31753__$1 = state_31753;
var statearr_31755_31887 = state_31753__$1;
(statearr_31755_31887[(2)] = null);

(statearr_31755_31887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (2))){
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31753__$1,(4),jobs);
} else {
if((state_val_31754 === (3))){
var inst_31751 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31753__$1,inst_31751);
} else {
if((state_val_31754 === (4))){
var inst_31743 = (state_31753[(2)]);
var inst_31744 = async.call(null,inst_31743);
var state_31753__$1 = state_31753;
if(cljs.core.truth_(inst_31744)){
var statearr_31756_31888 = state_31753__$1;
(statearr_31756_31888[(1)] = (5));

} else {
var statearr_31757_31889 = state_31753__$1;
(statearr_31757_31889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (5))){
var state_31753__$1 = state_31753;
var statearr_31758_31890 = state_31753__$1;
(statearr_31758_31890[(2)] = null);

(statearr_31758_31890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (6))){
var state_31753__$1 = state_31753;
var statearr_31759_31891 = state_31753__$1;
(statearr_31759_31891[(2)] = null);

(statearr_31759_31891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31754 === (7))){
var inst_31749 = (state_31753[(2)]);
var state_31753__$1 = state_31753;
var statearr_31760_31892 = state_31753__$1;
(statearr_31760_31892[(2)] = inst_31749);

(statearr_31760_31892[(1)] = (3));


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
});})(__31873,c__31547__auto___31886,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async))
;
return ((function (__31873,switch__31459__auto__,c__31547__auto___31886,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0 = (function (){
var statearr_31761 = [null,null,null,null,null,null,null];
(statearr_31761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__);

(statearr_31761[(1)] = (1));

return statearr_31761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1 = (function (state_31753){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_31753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e31762){if((e31762 instanceof Object)){
var ex__31463__auto__ = e31762;
var statearr_31763_31893 = state_31753;
(statearr_31763_31893[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31894 = state_31753;
state_31753 = G__31894;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = function(state_31753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1.call(this,state_31753);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__;
})()
;})(__31873,switch__31459__auto__,c__31547__auto___31886,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async))
})();
var state__31549__auto__ = (function (){var statearr_31764 = f__31548__auto__.call(null);
(statearr_31764[(6)] = c__31547__auto___31886);

return statearr_31764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(__31873,c__31547__auto___31886,G__31716_31874,G__31716_31875__$1,n__8615__auto___31872,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31716_31875__$1)].join('')));

}

var G__31895 = (__31873 + (1));
__31873 = G__31895;
continue;
} else {
}
break;
}

var c__31547__auto___31896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___31896,jobs,results,process,async){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___31896,jobs,results,process,async){
return (function (state_31786){
var state_val_31787 = (state_31786[(1)]);
if((state_val_31787 === (1))){
var state_31786__$1 = state_31786;
var statearr_31788_31897 = state_31786__$1;
(statearr_31788_31897[(2)] = null);

(statearr_31788_31897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (2))){
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31786__$1,(4),from);
} else {
if((state_val_31787 === (3))){
var inst_31784 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31786__$1,inst_31784);
} else {
if((state_val_31787 === (4))){
var inst_31767 = (state_31786[(7)]);
var inst_31767__$1 = (state_31786[(2)]);
var inst_31768 = (inst_31767__$1 == null);
var state_31786__$1 = (function (){var statearr_31789 = state_31786;
(statearr_31789[(7)] = inst_31767__$1);

return statearr_31789;
})();
if(cljs.core.truth_(inst_31768)){
var statearr_31790_31898 = state_31786__$1;
(statearr_31790_31898[(1)] = (5));

} else {
var statearr_31791_31899 = state_31786__$1;
(statearr_31791_31899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (5))){
var inst_31770 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31786__$1 = state_31786;
var statearr_31792_31900 = state_31786__$1;
(statearr_31792_31900[(2)] = inst_31770);

(statearr_31792_31900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (6))){
var inst_31767 = (state_31786[(7)]);
var inst_31772 = (state_31786[(8)]);
var inst_31772__$1 = cljs.core.async.chan.call(null,(1));
var inst_31773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31774 = [inst_31767,inst_31772__$1];
var inst_31775 = (new cljs.core.PersistentVector(null,2,(5),inst_31773,inst_31774,null));
var state_31786__$1 = (function (){var statearr_31793 = state_31786;
(statearr_31793[(8)] = inst_31772__$1);

return statearr_31793;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31786__$1,(8),jobs,inst_31775);
} else {
if((state_val_31787 === (7))){
var inst_31782 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31794_31901 = state_31786__$1;
(statearr_31794_31901[(2)] = inst_31782);

(statearr_31794_31901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (8))){
var inst_31772 = (state_31786[(8)]);
var inst_31777 = (state_31786[(2)]);
var state_31786__$1 = (function (){var statearr_31795 = state_31786;
(statearr_31795[(9)] = inst_31777);

return statearr_31795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31786__$1,(9),results,inst_31772);
} else {
if((state_val_31787 === (9))){
var inst_31779 = (state_31786[(2)]);
var state_31786__$1 = (function (){var statearr_31796 = state_31786;
(statearr_31796[(10)] = inst_31779);

return statearr_31796;
})();
var statearr_31797_31902 = state_31786__$1;
(statearr_31797_31902[(2)] = null);

(statearr_31797_31902[(1)] = (2));


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
});})(c__31547__auto___31896,jobs,results,process,async))
;
return ((function (switch__31459__auto__,c__31547__auto___31896,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0 = (function (){
var statearr_31798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__);

(statearr_31798[(1)] = (1));

return statearr_31798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1 = (function (state_31786){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_31786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e31799){if((e31799 instanceof Object)){
var ex__31463__auto__ = e31799;
var statearr_31800_31903 = state_31786;
(statearr_31800_31903[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31904 = state_31786;
state_31786 = G__31904;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = function(state_31786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1.call(this,state_31786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___31896,jobs,results,process,async))
})();
var state__31549__auto__ = (function (){var statearr_31801 = f__31548__auto__.call(null);
(statearr_31801[(6)] = c__31547__auto___31896);

return statearr_31801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___31896,jobs,results,process,async))
);


var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__,jobs,results,process,async){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__,jobs,results,process,async){
return (function (state_31839){
var state_val_31840 = (state_31839[(1)]);
if((state_val_31840 === (7))){
var inst_31835 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31841_31905 = state_31839__$1;
(statearr_31841_31905[(2)] = inst_31835);

(statearr_31841_31905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (20))){
var state_31839__$1 = state_31839;
var statearr_31842_31906 = state_31839__$1;
(statearr_31842_31906[(2)] = null);

(statearr_31842_31906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (1))){
var state_31839__$1 = state_31839;
var statearr_31843_31907 = state_31839__$1;
(statearr_31843_31907[(2)] = null);

(statearr_31843_31907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (4))){
var inst_31804 = (state_31839[(7)]);
var inst_31804__$1 = (state_31839[(2)]);
var inst_31805 = (inst_31804__$1 == null);
var state_31839__$1 = (function (){var statearr_31844 = state_31839;
(statearr_31844[(7)] = inst_31804__$1);

return statearr_31844;
})();
if(cljs.core.truth_(inst_31805)){
var statearr_31845_31908 = state_31839__$1;
(statearr_31845_31908[(1)] = (5));

} else {
var statearr_31846_31909 = state_31839__$1;
(statearr_31846_31909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (15))){
var inst_31817 = (state_31839[(8)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31839__$1,(18),to,inst_31817);
} else {
if((state_val_31840 === (21))){
var inst_31830 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31847_31910 = state_31839__$1;
(statearr_31847_31910[(2)] = inst_31830);

(statearr_31847_31910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (13))){
var inst_31832 = (state_31839[(2)]);
var state_31839__$1 = (function (){var statearr_31848 = state_31839;
(statearr_31848[(9)] = inst_31832);

return statearr_31848;
})();
var statearr_31849_31911 = state_31839__$1;
(statearr_31849_31911[(2)] = null);

(statearr_31849_31911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (6))){
var inst_31804 = (state_31839[(7)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31839__$1,(11),inst_31804);
} else {
if((state_val_31840 === (17))){
var inst_31825 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
if(cljs.core.truth_(inst_31825)){
var statearr_31850_31912 = state_31839__$1;
(statearr_31850_31912[(1)] = (19));

} else {
var statearr_31851_31913 = state_31839__$1;
(statearr_31851_31913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (3))){
var inst_31837 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31839__$1,inst_31837);
} else {
if((state_val_31840 === (12))){
var inst_31814 = (state_31839[(10)]);
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31839__$1,(14),inst_31814);
} else {
if((state_val_31840 === (2))){
var state_31839__$1 = state_31839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31839__$1,(4),results);
} else {
if((state_val_31840 === (19))){
var state_31839__$1 = state_31839;
var statearr_31852_31914 = state_31839__$1;
(statearr_31852_31914[(2)] = null);

(statearr_31852_31914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (11))){
var inst_31814 = (state_31839[(2)]);
var state_31839__$1 = (function (){var statearr_31853 = state_31839;
(statearr_31853[(10)] = inst_31814);

return statearr_31853;
})();
var statearr_31854_31915 = state_31839__$1;
(statearr_31854_31915[(2)] = null);

(statearr_31854_31915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (9))){
var state_31839__$1 = state_31839;
var statearr_31855_31916 = state_31839__$1;
(statearr_31855_31916[(2)] = null);

(statearr_31855_31916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (5))){
var state_31839__$1 = state_31839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31856_31917 = state_31839__$1;
(statearr_31856_31917[(1)] = (8));

} else {
var statearr_31857_31918 = state_31839__$1;
(statearr_31857_31918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (14))){
var inst_31817 = (state_31839[(8)]);
var inst_31819 = (state_31839[(11)]);
var inst_31817__$1 = (state_31839[(2)]);
var inst_31818 = (inst_31817__$1 == null);
var inst_31819__$1 = cljs.core.not.call(null,inst_31818);
var state_31839__$1 = (function (){var statearr_31858 = state_31839;
(statearr_31858[(8)] = inst_31817__$1);

(statearr_31858[(11)] = inst_31819__$1);

return statearr_31858;
})();
if(inst_31819__$1){
var statearr_31859_31919 = state_31839__$1;
(statearr_31859_31919[(1)] = (15));

} else {
var statearr_31860_31920 = state_31839__$1;
(statearr_31860_31920[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (16))){
var inst_31819 = (state_31839[(11)]);
var state_31839__$1 = state_31839;
var statearr_31861_31921 = state_31839__$1;
(statearr_31861_31921[(2)] = inst_31819);

(statearr_31861_31921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (10))){
var inst_31811 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31862_31922 = state_31839__$1;
(statearr_31862_31922[(2)] = inst_31811);

(statearr_31862_31922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (18))){
var inst_31822 = (state_31839[(2)]);
var state_31839__$1 = state_31839;
var statearr_31863_31923 = state_31839__$1;
(statearr_31863_31923[(2)] = inst_31822);

(statearr_31863_31923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31840 === (8))){
var inst_31808 = cljs.core.async.close_BANG_.call(null,to);
var state_31839__$1 = state_31839;
var statearr_31864_31924 = state_31839__$1;
(statearr_31864_31924[(2)] = inst_31808);

(statearr_31864_31924[(1)] = (10));


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
});})(c__31547__auto__,jobs,results,process,async))
;
return ((function (switch__31459__auto__,c__31547__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0 = (function (){
var statearr_31865 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__);

(statearr_31865[(1)] = (1));

return statearr_31865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1 = (function (state_31839){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_31839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e31866){if((e31866 instanceof Object)){
var ex__31463__auto__ = e31866;
var statearr_31867_31925 = state_31839;
(statearr_31867_31925[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31926 = state_31839;
state_31839 = G__31926;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__ = function(state_31839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1.call(this,state_31839);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__,jobs,results,process,async))
})();
var state__31549__auto__ = (function (){var statearr_31868 = f__31548__auto__.call(null);
(statearr_31868[(6)] = c__31547__auto__);

return statearr_31868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__,jobs,results,process,async))
);

return c__31547__auto__;
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
var G__31928 = arguments.length;
switch (G__31928) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__31931 = arguments.length;
switch (G__31931) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__31934 = arguments.length;
switch (G__31934) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31547__auto___31983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___31983,tc,fc){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___31983,tc,fc){
return (function (state_31960){
var state_val_31961 = (state_31960[(1)]);
if((state_val_31961 === (7))){
var inst_31956 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31962_31984 = state_31960__$1;
(statearr_31962_31984[(2)] = inst_31956);

(statearr_31962_31984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (1))){
var state_31960__$1 = state_31960;
var statearr_31963_31985 = state_31960__$1;
(statearr_31963_31985[(2)] = null);

(statearr_31963_31985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (4))){
var inst_31937 = (state_31960[(7)]);
var inst_31937__$1 = (state_31960[(2)]);
var inst_31938 = (inst_31937__$1 == null);
var state_31960__$1 = (function (){var statearr_31964 = state_31960;
(statearr_31964[(7)] = inst_31937__$1);

return statearr_31964;
})();
if(cljs.core.truth_(inst_31938)){
var statearr_31965_31986 = state_31960__$1;
(statearr_31965_31986[(1)] = (5));

} else {
var statearr_31966_31987 = state_31960__$1;
(statearr_31966_31987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (13))){
var state_31960__$1 = state_31960;
var statearr_31967_31988 = state_31960__$1;
(statearr_31967_31988[(2)] = null);

(statearr_31967_31988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (6))){
var inst_31937 = (state_31960[(7)]);
var inst_31943 = p.call(null,inst_31937);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31943)){
var statearr_31968_31989 = state_31960__$1;
(statearr_31968_31989[(1)] = (9));

} else {
var statearr_31969_31990 = state_31960__$1;
(statearr_31969_31990[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (3))){
var inst_31958 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31960__$1,inst_31958);
} else {
if((state_val_31961 === (12))){
var state_31960__$1 = state_31960;
var statearr_31970_31991 = state_31960__$1;
(statearr_31970_31991[(2)] = null);

(statearr_31970_31991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (2))){
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(4),ch);
} else {
if((state_val_31961 === (11))){
var inst_31937 = (state_31960[(7)]);
var inst_31947 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31960__$1,(8),inst_31947,inst_31937);
} else {
if((state_val_31961 === (9))){
var state_31960__$1 = state_31960;
var statearr_31971_31992 = state_31960__$1;
(statearr_31971_31992[(2)] = tc);

(statearr_31971_31992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (5))){
var inst_31940 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31941 = cljs.core.async.close_BANG_.call(null,fc);
var state_31960__$1 = (function (){var statearr_31972 = state_31960;
(statearr_31972[(8)] = inst_31940);

return statearr_31972;
})();
var statearr_31973_31993 = state_31960__$1;
(statearr_31973_31993[(2)] = inst_31941);

(statearr_31973_31993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (14))){
var inst_31954 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31974_31994 = state_31960__$1;
(statearr_31974_31994[(2)] = inst_31954);

(statearr_31974_31994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (10))){
var state_31960__$1 = state_31960;
var statearr_31975_31995 = state_31960__$1;
(statearr_31975_31995[(2)] = fc);

(statearr_31975_31995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (8))){
var inst_31949 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31949)){
var statearr_31976_31996 = state_31960__$1;
(statearr_31976_31996[(1)] = (12));

} else {
var statearr_31977_31997 = state_31960__$1;
(statearr_31977_31997[(1)] = (13));

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
});})(c__31547__auto___31983,tc,fc))
;
return ((function (switch__31459__auto__,c__31547__auto___31983,tc,fc){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_31978 = [null,null,null,null,null,null,null,null,null];
(statearr_31978[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_31978[(1)] = (1));

return statearr_31978;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_31960){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_31960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e31979){if((e31979 instanceof Object)){
var ex__31463__auto__ = e31979;
var statearr_31980_31998 = state_31960;
(statearr_31980_31998[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31999 = state_31960;
state_31960 = G__31999;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_31960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_31960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___31983,tc,fc))
})();
var state__31549__auto__ = (function (){var statearr_31981 = f__31548__auto__.call(null);
(statearr_31981[(6)] = c__31547__auto___31983);

return statearr_31981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___31983,tc,fc))
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
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__){
return (function (state_32020){
var state_val_32021 = (state_32020[(1)]);
if((state_val_32021 === (7))){
var inst_32016 = (state_32020[(2)]);
var state_32020__$1 = state_32020;
var statearr_32022_32040 = state_32020__$1;
(statearr_32022_32040[(2)] = inst_32016);

(statearr_32022_32040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32021 === (1))){
var inst_32000 = init;
var state_32020__$1 = (function (){var statearr_32023 = state_32020;
(statearr_32023[(7)] = inst_32000);

return statearr_32023;
})();
var statearr_32024_32041 = state_32020__$1;
(statearr_32024_32041[(2)] = null);

(statearr_32024_32041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32021 === (4))){
var inst_32003 = (state_32020[(8)]);
var inst_32003__$1 = (state_32020[(2)]);
var inst_32004 = (inst_32003__$1 == null);
var state_32020__$1 = (function (){var statearr_32025 = state_32020;
(statearr_32025[(8)] = inst_32003__$1);

return statearr_32025;
})();
if(cljs.core.truth_(inst_32004)){
var statearr_32026_32042 = state_32020__$1;
(statearr_32026_32042[(1)] = (5));

} else {
var statearr_32027_32043 = state_32020__$1;
(statearr_32027_32043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32021 === (6))){
var inst_32000 = (state_32020[(7)]);
var inst_32003 = (state_32020[(8)]);
var inst_32007 = (state_32020[(9)]);
var inst_32007__$1 = f.call(null,inst_32000,inst_32003);
var inst_32008 = cljs.core.reduced_QMARK_.call(null,inst_32007__$1);
var state_32020__$1 = (function (){var statearr_32028 = state_32020;
(statearr_32028[(9)] = inst_32007__$1);

return statearr_32028;
})();
if(inst_32008){
var statearr_32029_32044 = state_32020__$1;
(statearr_32029_32044[(1)] = (8));

} else {
var statearr_32030_32045 = state_32020__$1;
(statearr_32030_32045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32021 === (3))){
var inst_32018 = (state_32020[(2)]);
var state_32020__$1 = state_32020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32020__$1,inst_32018);
} else {
if((state_val_32021 === (2))){
var state_32020__$1 = state_32020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32020__$1,(4),ch);
} else {
if((state_val_32021 === (9))){
var inst_32007 = (state_32020[(9)]);
var inst_32000 = inst_32007;
var state_32020__$1 = (function (){var statearr_32031 = state_32020;
(statearr_32031[(7)] = inst_32000);

return statearr_32031;
})();
var statearr_32032_32046 = state_32020__$1;
(statearr_32032_32046[(2)] = null);

(statearr_32032_32046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32021 === (5))){
var inst_32000 = (state_32020[(7)]);
var state_32020__$1 = state_32020;
var statearr_32033_32047 = state_32020__$1;
(statearr_32033_32047[(2)] = inst_32000);

(statearr_32033_32047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32021 === (10))){
var inst_32014 = (state_32020[(2)]);
var state_32020__$1 = state_32020;
var statearr_32034_32048 = state_32020__$1;
(statearr_32034_32048[(2)] = inst_32014);

(statearr_32034_32048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32021 === (8))){
var inst_32007 = (state_32020[(9)]);
var inst_32010 = cljs.core.deref.call(null,inst_32007);
var state_32020__$1 = state_32020;
var statearr_32035_32049 = state_32020__$1;
(statearr_32035_32049[(2)] = inst_32010);

(statearr_32035_32049[(1)] = (10));


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
});})(c__31547__auto__))
;
return ((function (switch__31459__auto__,c__31547__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31460__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31460__auto____0 = (function (){
var statearr_32036 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32036[(0)] = cljs$core$async$reduce_$_state_machine__31460__auto__);

(statearr_32036[(1)] = (1));

return statearr_32036;
});
var cljs$core$async$reduce_$_state_machine__31460__auto____1 = (function (state_32020){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_32020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e32037){if((e32037 instanceof Object)){
var ex__31463__auto__ = e32037;
var statearr_32038_32050 = state_32020;
(statearr_32038_32050[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32051 = state_32020;
state_32020 = G__32051;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31460__auto__ = function(state_32020){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31460__auto____1.call(this,state_32020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31460__auto____0;
cljs$core$async$reduce_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31460__auto____1;
return cljs$core$async$reduce_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__))
})();
var state__31549__auto__ = (function (){var statearr_32039 = f__31548__auto__.call(null);
(statearr_32039[(6)] = c__31547__auto__);

return statearr_32039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__))
);

return c__31547__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__,f__$1){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__,f__$1){
return (function (state_32057){
var state_val_32058 = (state_32057[(1)]);
if((state_val_32058 === (1))){
var inst_32052 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32057__$1,(2),inst_32052);
} else {
if((state_val_32058 === (2))){
var inst_32054 = (state_32057[(2)]);
var inst_32055 = f__$1.call(null,inst_32054);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32057__$1,inst_32055);
} else {
return null;
}
}
});})(c__31547__auto__,f__$1))
;
return ((function (switch__31459__auto__,c__31547__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31460__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31460__auto____0 = (function (){
var statearr_32059 = [null,null,null,null,null,null,null];
(statearr_32059[(0)] = cljs$core$async$transduce_$_state_machine__31460__auto__);

(statearr_32059[(1)] = (1));

return statearr_32059;
});
var cljs$core$async$transduce_$_state_machine__31460__auto____1 = (function (state_32057){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_32057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e32060){if((e32060 instanceof Object)){
var ex__31463__auto__ = e32060;
var statearr_32061_32063 = state_32057;
(statearr_32061_32063[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32064 = state_32057;
state_32057 = G__32064;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31460__auto__ = function(state_32057){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31460__auto____1.call(this,state_32057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31460__auto____0;
cljs$core$async$transduce_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31460__auto____1;
return cljs$core$async$transduce_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__,f__$1))
})();
var state__31549__auto__ = (function (){var statearr_32062 = f__31548__auto__.call(null);
(statearr_32062[(6)] = c__31547__auto__);

return statearr_32062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__,f__$1))
);

return c__31547__auto__;
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
var G__32066 = arguments.length;
switch (G__32066) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__){
return (function (state_32091){
var state_val_32092 = (state_32091[(1)]);
if((state_val_32092 === (7))){
var inst_32073 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
var statearr_32093_32114 = state_32091__$1;
(statearr_32093_32114[(2)] = inst_32073);

(statearr_32093_32114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (1))){
var inst_32067 = cljs.core.seq.call(null,coll);
var inst_32068 = inst_32067;
var state_32091__$1 = (function (){var statearr_32094 = state_32091;
(statearr_32094[(7)] = inst_32068);

return statearr_32094;
})();
var statearr_32095_32115 = state_32091__$1;
(statearr_32095_32115[(2)] = null);

(statearr_32095_32115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (4))){
var inst_32068 = (state_32091[(7)]);
var inst_32071 = cljs.core.first.call(null,inst_32068);
var state_32091__$1 = state_32091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32091__$1,(7),ch,inst_32071);
} else {
if((state_val_32092 === (13))){
var inst_32085 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
var statearr_32096_32116 = state_32091__$1;
(statearr_32096_32116[(2)] = inst_32085);

(statearr_32096_32116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (6))){
var inst_32076 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
if(cljs.core.truth_(inst_32076)){
var statearr_32097_32117 = state_32091__$1;
(statearr_32097_32117[(1)] = (8));

} else {
var statearr_32098_32118 = state_32091__$1;
(statearr_32098_32118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (3))){
var inst_32089 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32091__$1,inst_32089);
} else {
if((state_val_32092 === (12))){
var state_32091__$1 = state_32091;
var statearr_32099_32119 = state_32091__$1;
(statearr_32099_32119[(2)] = null);

(statearr_32099_32119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (2))){
var inst_32068 = (state_32091[(7)]);
var state_32091__$1 = state_32091;
if(cljs.core.truth_(inst_32068)){
var statearr_32100_32120 = state_32091__$1;
(statearr_32100_32120[(1)] = (4));

} else {
var statearr_32101_32121 = state_32091__$1;
(statearr_32101_32121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (11))){
var inst_32082 = cljs.core.async.close_BANG_.call(null,ch);
var state_32091__$1 = state_32091;
var statearr_32102_32122 = state_32091__$1;
(statearr_32102_32122[(2)] = inst_32082);

(statearr_32102_32122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (9))){
var state_32091__$1 = state_32091;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32103_32123 = state_32091__$1;
(statearr_32103_32123[(1)] = (11));

} else {
var statearr_32104_32124 = state_32091__$1;
(statearr_32104_32124[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (5))){
var inst_32068 = (state_32091[(7)]);
var state_32091__$1 = state_32091;
var statearr_32105_32125 = state_32091__$1;
(statearr_32105_32125[(2)] = inst_32068);

(statearr_32105_32125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (10))){
var inst_32087 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
var statearr_32106_32126 = state_32091__$1;
(statearr_32106_32126[(2)] = inst_32087);

(statearr_32106_32126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (8))){
var inst_32068 = (state_32091[(7)]);
var inst_32078 = cljs.core.next.call(null,inst_32068);
var inst_32068__$1 = inst_32078;
var state_32091__$1 = (function (){var statearr_32107 = state_32091;
(statearr_32107[(7)] = inst_32068__$1);

return statearr_32107;
})();
var statearr_32108_32127 = state_32091__$1;
(statearr_32108_32127[(2)] = null);

(statearr_32108_32127[(1)] = (2));


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
});})(c__31547__auto__))
;
return ((function (switch__31459__auto__,c__31547__auto__){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_32109 = [null,null,null,null,null,null,null,null];
(statearr_32109[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_32109[(1)] = (1));

return statearr_32109;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_32091){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_32091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e32110){if((e32110 instanceof Object)){
var ex__31463__auto__ = e32110;
var statearr_32111_32128 = state_32091;
(statearr_32111_32128[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32129 = state_32091;
state_32091 = G__32129;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_32091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_32091);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__))
})();
var state__31549__auto__ = (function (){var statearr_32112 = f__31548__auto__.call(null);
(statearr_32112[(6)] = c__31547__auto__);

return statearr_32112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__))
);

return c__31547__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8351__auto__ = (((_ == null))?null:_);
var m__8352__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,_);
} else {
var m__8352__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8352__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,ch);
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m);
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32130 = (function (ch,cs,meta32131){
this.ch = ch;
this.cs = cs;
this.meta32131 = meta32131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32132,meta32131__$1){
var self__ = this;
var _32132__$1 = this;
return (new cljs.core.async.t_cljs$core$async32130(self__.ch,self__.cs,meta32131__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32132){
var self__ = this;
var _32132__$1 = this;
return self__.meta32131;
});})(cs))
;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32130.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32131","meta32131",-386711778,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32130";

cljs.core.async.t_cljs$core$async32130.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async32130");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32130 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32130(ch__$1,cs__$1,meta32131){
return (new cljs.core.async.t_cljs$core$async32130(ch__$1,cs__$1,meta32131));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32130(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31547__auto___32352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32352,cs,m,dchan,dctr,done){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___32352,cs,m,dchan,dctr,done){
return (function (state_32267){
var state_val_32268 = (state_32267[(1)]);
if((state_val_32268 === (7))){
var inst_32263 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32269_32353 = state_32267__$1;
(statearr_32269_32353[(2)] = inst_32263);

(statearr_32269_32353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (20))){
var inst_32166 = (state_32267[(7)]);
var inst_32178 = cljs.core.first.call(null,inst_32166);
var inst_32179 = cljs.core.nth.call(null,inst_32178,(0),null);
var inst_32180 = cljs.core.nth.call(null,inst_32178,(1),null);
var state_32267__$1 = (function (){var statearr_32270 = state_32267;
(statearr_32270[(8)] = inst_32179);

return statearr_32270;
})();
if(cljs.core.truth_(inst_32180)){
var statearr_32271_32354 = state_32267__$1;
(statearr_32271_32354[(1)] = (22));

} else {
var statearr_32272_32355 = state_32267__$1;
(statearr_32272_32355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (27))){
var inst_32208 = (state_32267[(9)]);
var inst_32210 = (state_32267[(10)]);
var inst_32215 = (state_32267[(11)]);
var inst_32135 = (state_32267[(12)]);
var inst_32215__$1 = cljs.core._nth.call(null,inst_32208,inst_32210);
var inst_32216 = cljs.core.async.put_BANG_.call(null,inst_32215__$1,inst_32135,done);
var state_32267__$1 = (function (){var statearr_32273 = state_32267;
(statearr_32273[(11)] = inst_32215__$1);

return statearr_32273;
})();
if(cljs.core.truth_(inst_32216)){
var statearr_32274_32356 = state_32267__$1;
(statearr_32274_32356[(1)] = (30));

} else {
var statearr_32275_32357 = state_32267__$1;
(statearr_32275_32357[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (1))){
var state_32267__$1 = state_32267;
var statearr_32276_32358 = state_32267__$1;
(statearr_32276_32358[(2)] = null);

(statearr_32276_32358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (24))){
var inst_32166 = (state_32267[(7)]);
var inst_32185 = (state_32267[(2)]);
var inst_32186 = cljs.core.next.call(null,inst_32166);
var inst_32144 = inst_32186;
var inst_32145 = null;
var inst_32146 = (0);
var inst_32147 = (0);
var state_32267__$1 = (function (){var statearr_32277 = state_32267;
(statearr_32277[(13)] = inst_32144);

(statearr_32277[(14)] = inst_32146);

(statearr_32277[(15)] = inst_32185);

(statearr_32277[(16)] = inst_32145);

(statearr_32277[(17)] = inst_32147);

return statearr_32277;
})();
var statearr_32278_32359 = state_32267__$1;
(statearr_32278_32359[(2)] = null);

(statearr_32278_32359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (39))){
var state_32267__$1 = state_32267;
var statearr_32282_32360 = state_32267__$1;
(statearr_32282_32360[(2)] = null);

(statearr_32282_32360[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (4))){
var inst_32135 = (state_32267[(12)]);
var inst_32135__$1 = (state_32267[(2)]);
var inst_32136 = (inst_32135__$1 == null);
var state_32267__$1 = (function (){var statearr_32283 = state_32267;
(statearr_32283[(12)] = inst_32135__$1);

return statearr_32283;
})();
if(cljs.core.truth_(inst_32136)){
var statearr_32284_32361 = state_32267__$1;
(statearr_32284_32361[(1)] = (5));

} else {
var statearr_32285_32362 = state_32267__$1;
(statearr_32285_32362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (15))){
var inst_32144 = (state_32267[(13)]);
var inst_32146 = (state_32267[(14)]);
var inst_32145 = (state_32267[(16)]);
var inst_32147 = (state_32267[(17)]);
var inst_32162 = (state_32267[(2)]);
var inst_32163 = (inst_32147 + (1));
var tmp32279 = inst_32144;
var tmp32280 = inst_32146;
var tmp32281 = inst_32145;
var inst_32144__$1 = tmp32279;
var inst_32145__$1 = tmp32281;
var inst_32146__$1 = tmp32280;
var inst_32147__$1 = inst_32163;
var state_32267__$1 = (function (){var statearr_32286 = state_32267;
(statearr_32286[(13)] = inst_32144__$1);

(statearr_32286[(18)] = inst_32162);

(statearr_32286[(14)] = inst_32146__$1);

(statearr_32286[(16)] = inst_32145__$1);

(statearr_32286[(17)] = inst_32147__$1);

return statearr_32286;
})();
var statearr_32287_32363 = state_32267__$1;
(statearr_32287_32363[(2)] = null);

(statearr_32287_32363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (21))){
var inst_32189 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32291_32364 = state_32267__$1;
(statearr_32291_32364[(2)] = inst_32189);

(statearr_32291_32364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (31))){
var inst_32215 = (state_32267[(11)]);
var inst_32219 = done.call(null,null);
var inst_32220 = cljs.core.async.untap_STAR_.call(null,m,inst_32215);
var state_32267__$1 = (function (){var statearr_32292 = state_32267;
(statearr_32292[(19)] = inst_32219);

return statearr_32292;
})();
var statearr_32293_32365 = state_32267__$1;
(statearr_32293_32365[(2)] = inst_32220);

(statearr_32293_32365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (32))){
var inst_32208 = (state_32267[(9)]);
var inst_32210 = (state_32267[(10)]);
var inst_32207 = (state_32267[(20)]);
var inst_32209 = (state_32267[(21)]);
var inst_32222 = (state_32267[(2)]);
var inst_32223 = (inst_32210 + (1));
var tmp32288 = inst_32208;
var tmp32289 = inst_32207;
var tmp32290 = inst_32209;
var inst_32207__$1 = tmp32289;
var inst_32208__$1 = tmp32288;
var inst_32209__$1 = tmp32290;
var inst_32210__$1 = inst_32223;
var state_32267__$1 = (function (){var statearr_32294 = state_32267;
(statearr_32294[(9)] = inst_32208__$1);

(statearr_32294[(10)] = inst_32210__$1);

(statearr_32294[(20)] = inst_32207__$1);

(statearr_32294[(22)] = inst_32222);

(statearr_32294[(21)] = inst_32209__$1);

return statearr_32294;
})();
var statearr_32295_32366 = state_32267__$1;
(statearr_32295_32366[(2)] = null);

(statearr_32295_32366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (40))){
var inst_32235 = (state_32267[(23)]);
var inst_32239 = done.call(null,null);
var inst_32240 = cljs.core.async.untap_STAR_.call(null,m,inst_32235);
var state_32267__$1 = (function (){var statearr_32296 = state_32267;
(statearr_32296[(24)] = inst_32239);

return statearr_32296;
})();
var statearr_32297_32367 = state_32267__$1;
(statearr_32297_32367[(2)] = inst_32240);

(statearr_32297_32367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (33))){
var inst_32226 = (state_32267[(25)]);
var inst_32228 = cljs.core.chunked_seq_QMARK_.call(null,inst_32226);
var state_32267__$1 = state_32267;
if(inst_32228){
var statearr_32298_32368 = state_32267__$1;
(statearr_32298_32368[(1)] = (36));

} else {
var statearr_32299_32369 = state_32267__$1;
(statearr_32299_32369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (13))){
var inst_32156 = (state_32267[(26)]);
var inst_32159 = cljs.core.async.close_BANG_.call(null,inst_32156);
var state_32267__$1 = state_32267;
var statearr_32300_32370 = state_32267__$1;
(statearr_32300_32370[(2)] = inst_32159);

(statearr_32300_32370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (22))){
var inst_32179 = (state_32267[(8)]);
var inst_32182 = cljs.core.async.close_BANG_.call(null,inst_32179);
var state_32267__$1 = state_32267;
var statearr_32301_32371 = state_32267__$1;
(statearr_32301_32371[(2)] = inst_32182);

(statearr_32301_32371[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (36))){
var inst_32226 = (state_32267[(25)]);
var inst_32230 = cljs.core.chunk_first.call(null,inst_32226);
var inst_32231 = cljs.core.chunk_rest.call(null,inst_32226);
var inst_32232 = cljs.core.count.call(null,inst_32230);
var inst_32207 = inst_32231;
var inst_32208 = inst_32230;
var inst_32209 = inst_32232;
var inst_32210 = (0);
var state_32267__$1 = (function (){var statearr_32302 = state_32267;
(statearr_32302[(9)] = inst_32208);

(statearr_32302[(10)] = inst_32210);

(statearr_32302[(20)] = inst_32207);

(statearr_32302[(21)] = inst_32209);

return statearr_32302;
})();
var statearr_32303_32372 = state_32267__$1;
(statearr_32303_32372[(2)] = null);

(statearr_32303_32372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (41))){
var inst_32226 = (state_32267[(25)]);
var inst_32242 = (state_32267[(2)]);
var inst_32243 = cljs.core.next.call(null,inst_32226);
var inst_32207 = inst_32243;
var inst_32208 = null;
var inst_32209 = (0);
var inst_32210 = (0);
var state_32267__$1 = (function (){var statearr_32304 = state_32267;
(statearr_32304[(9)] = inst_32208);

(statearr_32304[(10)] = inst_32210);

(statearr_32304[(20)] = inst_32207);

(statearr_32304[(27)] = inst_32242);

(statearr_32304[(21)] = inst_32209);

return statearr_32304;
})();
var statearr_32305_32373 = state_32267__$1;
(statearr_32305_32373[(2)] = null);

(statearr_32305_32373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (43))){
var state_32267__$1 = state_32267;
var statearr_32306_32374 = state_32267__$1;
(statearr_32306_32374[(2)] = null);

(statearr_32306_32374[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (29))){
var inst_32251 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32307_32375 = state_32267__$1;
(statearr_32307_32375[(2)] = inst_32251);

(statearr_32307_32375[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (44))){
var inst_32260 = (state_32267[(2)]);
var state_32267__$1 = (function (){var statearr_32308 = state_32267;
(statearr_32308[(28)] = inst_32260);

return statearr_32308;
})();
var statearr_32309_32376 = state_32267__$1;
(statearr_32309_32376[(2)] = null);

(statearr_32309_32376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (6))){
var inst_32199 = (state_32267[(29)]);
var inst_32198 = cljs.core.deref.call(null,cs);
var inst_32199__$1 = cljs.core.keys.call(null,inst_32198);
var inst_32200 = cljs.core.count.call(null,inst_32199__$1);
var inst_32201 = cljs.core.reset_BANG_.call(null,dctr,inst_32200);
var inst_32206 = cljs.core.seq.call(null,inst_32199__$1);
var inst_32207 = inst_32206;
var inst_32208 = null;
var inst_32209 = (0);
var inst_32210 = (0);
var state_32267__$1 = (function (){var statearr_32310 = state_32267;
(statearr_32310[(29)] = inst_32199__$1);

(statearr_32310[(9)] = inst_32208);

(statearr_32310[(10)] = inst_32210);

(statearr_32310[(30)] = inst_32201);

(statearr_32310[(20)] = inst_32207);

(statearr_32310[(21)] = inst_32209);

return statearr_32310;
})();
var statearr_32311_32377 = state_32267__$1;
(statearr_32311_32377[(2)] = null);

(statearr_32311_32377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (28))){
var inst_32226 = (state_32267[(25)]);
var inst_32207 = (state_32267[(20)]);
var inst_32226__$1 = cljs.core.seq.call(null,inst_32207);
var state_32267__$1 = (function (){var statearr_32312 = state_32267;
(statearr_32312[(25)] = inst_32226__$1);

return statearr_32312;
})();
if(inst_32226__$1){
var statearr_32313_32378 = state_32267__$1;
(statearr_32313_32378[(1)] = (33));

} else {
var statearr_32314_32379 = state_32267__$1;
(statearr_32314_32379[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (25))){
var inst_32210 = (state_32267[(10)]);
var inst_32209 = (state_32267[(21)]);
var inst_32212 = (inst_32210 < inst_32209);
var inst_32213 = inst_32212;
var state_32267__$1 = state_32267;
if(cljs.core.truth_(inst_32213)){
var statearr_32315_32380 = state_32267__$1;
(statearr_32315_32380[(1)] = (27));

} else {
var statearr_32316_32381 = state_32267__$1;
(statearr_32316_32381[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (34))){
var state_32267__$1 = state_32267;
var statearr_32317_32382 = state_32267__$1;
(statearr_32317_32382[(2)] = null);

(statearr_32317_32382[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (17))){
var state_32267__$1 = state_32267;
var statearr_32318_32383 = state_32267__$1;
(statearr_32318_32383[(2)] = null);

(statearr_32318_32383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (3))){
var inst_32265 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32267__$1,inst_32265);
} else {
if((state_val_32268 === (12))){
var inst_32194 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32319_32384 = state_32267__$1;
(statearr_32319_32384[(2)] = inst_32194);

(statearr_32319_32384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (2))){
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32267__$1,(4),ch);
} else {
if((state_val_32268 === (23))){
var state_32267__$1 = state_32267;
var statearr_32320_32385 = state_32267__$1;
(statearr_32320_32385[(2)] = null);

(statearr_32320_32385[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (35))){
var inst_32249 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32321_32386 = state_32267__$1;
(statearr_32321_32386[(2)] = inst_32249);

(statearr_32321_32386[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (19))){
var inst_32166 = (state_32267[(7)]);
var inst_32170 = cljs.core.chunk_first.call(null,inst_32166);
var inst_32171 = cljs.core.chunk_rest.call(null,inst_32166);
var inst_32172 = cljs.core.count.call(null,inst_32170);
var inst_32144 = inst_32171;
var inst_32145 = inst_32170;
var inst_32146 = inst_32172;
var inst_32147 = (0);
var state_32267__$1 = (function (){var statearr_32322 = state_32267;
(statearr_32322[(13)] = inst_32144);

(statearr_32322[(14)] = inst_32146);

(statearr_32322[(16)] = inst_32145);

(statearr_32322[(17)] = inst_32147);

return statearr_32322;
})();
var statearr_32323_32387 = state_32267__$1;
(statearr_32323_32387[(2)] = null);

(statearr_32323_32387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (11))){
var inst_32144 = (state_32267[(13)]);
var inst_32166 = (state_32267[(7)]);
var inst_32166__$1 = cljs.core.seq.call(null,inst_32144);
var state_32267__$1 = (function (){var statearr_32324 = state_32267;
(statearr_32324[(7)] = inst_32166__$1);

return statearr_32324;
})();
if(inst_32166__$1){
var statearr_32325_32388 = state_32267__$1;
(statearr_32325_32388[(1)] = (16));

} else {
var statearr_32326_32389 = state_32267__$1;
(statearr_32326_32389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (9))){
var inst_32196 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32327_32390 = state_32267__$1;
(statearr_32327_32390[(2)] = inst_32196);

(statearr_32327_32390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (5))){
var inst_32142 = cljs.core.deref.call(null,cs);
var inst_32143 = cljs.core.seq.call(null,inst_32142);
var inst_32144 = inst_32143;
var inst_32145 = null;
var inst_32146 = (0);
var inst_32147 = (0);
var state_32267__$1 = (function (){var statearr_32328 = state_32267;
(statearr_32328[(13)] = inst_32144);

(statearr_32328[(14)] = inst_32146);

(statearr_32328[(16)] = inst_32145);

(statearr_32328[(17)] = inst_32147);

return statearr_32328;
})();
var statearr_32329_32391 = state_32267__$1;
(statearr_32329_32391[(2)] = null);

(statearr_32329_32391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (14))){
var state_32267__$1 = state_32267;
var statearr_32330_32392 = state_32267__$1;
(statearr_32330_32392[(2)] = null);

(statearr_32330_32392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (45))){
var inst_32257 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32331_32393 = state_32267__$1;
(statearr_32331_32393[(2)] = inst_32257);

(statearr_32331_32393[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (26))){
var inst_32199 = (state_32267[(29)]);
var inst_32253 = (state_32267[(2)]);
var inst_32254 = cljs.core.seq.call(null,inst_32199);
var state_32267__$1 = (function (){var statearr_32332 = state_32267;
(statearr_32332[(31)] = inst_32253);

return statearr_32332;
})();
if(inst_32254){
var statearr_32333_32394 = state_32267__$1;
(statearr_32333_32394[(1)] = (42));

} else {
var statearr_32334_32395 = state_32267__$1;
(statearr_32334_32395[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (16))){
var inst_32166 = (state_32267[(7)]);
var inst_32168 = cljs.core.chunked_seq_QMARK_.call(null,inst_32166);
var state_32267__$1 = state_32267;
if(inst_32168){
var statearr_32335_32396 = state_32267__$1;
(statearr_32335_32396[(1)] = (19));

} else {
var statearr_32336_32397 = state_32267__$1;
(statearr_32336_32397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (38))){
var inst_32246 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32337_32398 = state_32267__$1;
(statearr_32337_32398[(2)] = inst_32246);

(statearr_32337_32398[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (30))){
var state_32267__$1 = state_32267;
var statearr_32338_32399 = state_32267__$1;
(statearr_32338_32399[(2)] = null);

(statearr_32338_32399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (10))){
var inst_32145 = (state_32267[(16)]);
var inst_32147 = (state_32267[(17)]);
var inst_32155 = cljs.core._nth.call(null,inst_32145,inst_32147);
var inst_32156 = cljs.core.nth.call(null,inst_32155,(0),null);
var inst_32157 = cljs.core.nth.call(null,inst_32155,(1),null);
var state_32267__$1 = (function (){var statearr_32339 = state_32267;
(statearr_32339[(26)] = inst_32156);

return statearr_32339;
})();
if(cljs.core.truth_(inst_32157)){
var statearr_32340_32400 = state_32267__$1;
(statearr_32340_32400[(1)] = (13));

} else {
var statearr_32341_32401 = state_32267__$1;
(statearr_32341_32401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (18))){
var inst_32192 = (state_32267[(2)]);
var state_32267__$1 = state_32267;
var statearr_32342_32402 = state_32267__$1;
(statearr_32342_32402[(2)] = inst_32192);

(statearr_32342_32402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (42))){
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32267__$1,(45),dchan);
} else {
if((state_val_32268 === (37))){
var inst_32226 = (state_32267[(25)]);
var inst_32135 = (state_32267[(12)]);
var inst_32235 = (state_32267[(23)]);
var inst_32235__$1 = cljs.core.first.call(null,inst_32226);
var inst_32236 = cljs.core.async.put_BANG_.call(null,inst_32235__$1,inst_32135,done);
var state_32267__$1 = (function (){var statearr_32343 = state_32267;
(statearr_32343[(23)] = inst_32235__$1);

return statearr_32343;
})();
if(cljs.core.truth_(inst_32236)){
var statearr_32344_32403 = state_32267__$1;
(statearr_32344_32403[(1)] = (39));

} else {
var statearr_32345_32404 = state_32267__$1;
(statearr_32345_32404[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32268 === (8))){
var inst_32146 = (state_32267[(14)]);
var inst_32147 = (state_32267[(17)]);
var inst_32149 = (inst_32147 < inst_32146);
var inst_32150 = inst_32149;
var state_32267__$1 = state_32267;
if(cljs.core.truth_(inst_32150)){
var statearr_32346_32405 = state_32267__$1;
(statearr_32346_32405[(1)] = (10));

} else {
var statearr_32347_32406 = state_32267__$1;
(statearr_32347_32406[(1)] = (11));

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
});})(c__31547__auto___32352,cs,m,dchan,dctr,done))
;
return ((function (switch__31459__auto__,c__31547__auto___32352,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31460__auto__ = null;
var cljs$core$async$mult_$_state_machine__31460__auto____0 = (function (){
var statearr_32348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32348[(0)] = cljs$core$async$mult_$_state_machine__31460__auto__);

(statearr_32348[(1)] = (1));

return statearr_32348;
});
var cljs$core$async$mult_$_state_machine__31460__auto____1 = (function (state_32267){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_32267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e32349){if((e32349 instanceof Object)){
var ex__31463__auto__ = e32349;
var statearr_32350_32407 = state_32267;
(statearr_32350_32407[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32408 = state_32267;
state_32267 = G__32408;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31460__auto__ = function(state_32267){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31460__auto____1.call(this,state_32267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31460__auto____0;
cljs$core$async$mult_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31460__auto____1;
return cljs$core$async$mult_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___32352,cs,m,dchan,dctr,done))
})();
var state__31549__auto__ = (function (){var statearr_32351 = f__31548__auto__.call(null);
(statearr_32351[(6)] = c__31547__auto___32352);

return statearr_32351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32352,cs,m,dchan,dctr,done))
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
var G__32410 = arguments.length;
switch (G__32410) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,ch);
} else {
var m__8352__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,ch);
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m);
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,state_map);
} else {
var m__8352__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,mode);
} else {
var m__8352__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___32422 = arguments.length;
var i__8840__auto___32423 = (0);
while(true){
if((i__8840__auto___32423 < len__8839__auto___32422)){
args__8846__auto__.push((arguments[i__8840__auto___32423]));

var G__32424 = (i__8840__auto___32423 + (1));
i__8840__auto___32423 = G__32424;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32416){
var map__32417 = p__32416;
var map__32417__$1 = ((((!((map__32417 == null)))?((((map__32417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32417):map__32417);
var opts = map__32417__$1;
var statearr_32419_32425 = state;
(statearr_32419_32425[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32417,map__32417__$1,opts){
return (function (val){
var statearr_32420_32426 = state;
(statearr_32420_32426[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32417,map__32417__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32421_32427 = state;
(statearr_32421_32427[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32412){
var G__32413 = cljs.core.first.call(null,seq32412);
var seq32412__$1 = cljs.core.next.call(null,seq32412);
var G__32414 = cljs.core.first.call(null,seq32412__$1);
var seq32412__$2 = cljs.core.next.call(null,seq32412__$1);
var G__32415 = cljs.core.first.call(null,seq32412__$2);
var seq32412__$3 = cljs.core.next.call(null,seq32412__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32413,G__32414,G__32415,seq32412__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32428 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32429){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32429 = meta32429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32430,meta32429__$1){
var self__ = this;
var _32430__$1 = this;
return (new cljs.core.async.t_cljs$core$async32428(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32429__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32430){
var self__ = this;
var _32430__$1 = this;
return self__.meta32429;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32428.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32428.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32429","meta32429",-404233766,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32428";

cljs.core.async.t_cljs$core$async32428.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async32428");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32428 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32428(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32429){
return (new cljs.core.async.t_cljs$core$async32428(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32429));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32428(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31547__auto___32592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___32592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32532){
var state_val_32533 = (state_32532[(1)]);
if((state_val_32533 === (7))){
var inst_32447 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32534_32593 = state_32532__$1;
(statearr_32534_32593[(2)] = inst_32447);

(statearr_32534_32593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (20))){
var inst_32459 = (state_32532[(7)]);
var state_32532__$1 = state_32532;
var statearr_32535_32594 = state_32532__$1;
(statearr_32535_32594[(2)] = inst_32459);

(statearr_32535_32594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (27))){
var state_32532__$1 = state_32532;
var statearr_32536_32595 = state_32532__$1;
(statearr_32536_32595[(2)] = null);

(statearr_32536_32595[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (1))){
var inst_32434 = (state_32532[(8)]);
var inst_32434__$1 = calc_state.call(null);
var inst_32436 = (inst_32434__$1 == null);
var inst_32437 = cljs.core.not.call(null,inst_32436);
var state_32532__$1 = (function (){var statearr_32537 = state_32532;
(statearr_32537[(8)] = inst_32434__$1);

return statearr_32537;
})();
if(inst_32437){
var statearr_32538_32596 = state_32532__$1;
(statearr_32538_32596[(1)] = (2));

} else {
var statearr_32539_32597 = state_32532__$1;
(statearr_32539_32597[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (24))){
var inst_32483 = (state_32532[(9)]);
var inst_32492 = (state_32532[(10)]);
var inst_32506 = (state_32532[(11)]);
var inst_32506__$1 = inst_32483.call(null,inst_32492);
var state_32532__$1 = (function (){var statearr_32540 = state_32532;
(statearr_32540[(11)] = inst_32506__$1);

return statearr_32540;
})();
if(cljs.core.truth_(inst_32506__$1)){
var statearr_32541_32598 = state_32532__$1;
(statearr_32541_32598[(1)] = (29));

} else {
var statearr_32542_32599 = state_32532__$1;
(statearr_32542_32599[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (4))){
var inst_32450 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32450)){
var statearr_32543_32600 = state_32532__$1;
(statearr_32543_32600[(1)] = (8));

} else {
var statearr_32544_32601 = state_32532__$1;
(statearr_32544_32601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (15))){
var inst_32477 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32477)){
var statearr_32545_32602 = state_32532__$1;
(statearr_32545_32602[(1)] = (19));

} else {
var statearr_32546_32603 = state_32532__$1;
(statearr_32546_32603[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (21))){
var inst_32482 = (state_32532[(12)]);
var inst_32482__$1 = (state_32532[(2)]);
var inst_32483 = cljs.core.get.call(null,inst_32482__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32484 = cljs.core.get.call(null,inst_32482__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32485 = cljs.core.get.call(null,inst_32482__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32532__$1 = (function (){var statearr_32547 = state_32532;
(statearr_32547[(9)] = inst_32483);

(statearr_32547[(12)] = inst_32482__$1);

(statearr_32547[(13)] = inst_32484);

return statearr_32547;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32532__$1,(22),inst_32485);
} else {
if((state_val_32533 === (31))){
var inst_32514 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32514)){
var statearr_32548_32604 = state_32532__$1;
(statearr_32548_32604[(1)] = (32));

} else {
var statearr_32549_32605 = state_32532__$1;
(statearr_32549_32605[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (32))){
var inst_32491 = (state_32532[(14)]);
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32532__$1,(35),out,inst_32491);
} else {
if((state_val_32533 === (33))){
var inst_32482 = (state_32532[(12)]);
var inst_32459 = inst_32482;
var state_32532__$1 = (function (){var statearr_32550 = state_32532;
(statearr_32550[(7)] = inst_32459);

return statearr_32550;
})();
var statearr_32551_32606 = state_32532__$1;
(statearr_32551_32606[(2)] = null);

(statearr_32551_32606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (13))){
var inst_32459 = (state_32532[(7)]);
var inst_32466 = inst_32459.cljs$lang$protocol_mask$partition0$;
var inst_32467 = (inst_32466 & (64));
var inst_32468 = inst_32459.cljs$core$ISeq$;
var inst_32469 = (cljs.core.PROTOCOL_SENTINEL === inst_32468);
var inst_32470 = (inst_32467) || (inst_32469);
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32470)){
var statearr_32552_32607 = state_32532__$1;
(statearr_32552_32607[(1)] = (16));

} else {
var statearr_32553_32608 = state_32532__$1;
(statearr_32553_32608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (22))){
var inst_32492 = (state_32532[(10)]);
var inst_32491 = (state_32532[(14)]);
var inst_32490 = (state_32532[(2)]);
var inst_32491__$1 = cljs.core.nth.call(null,inst_32490,(0),null);
var inst_32492__$1 = cljs.core.nth.call(null,inst_32490,(1),null);
var inst_32493 = (inst_32491__$1 == null);
var inst_32494 = cljs.core._EQ_.call(null,inst_32492__$1,change);
var inst_32495 = (inst_32493) || (inst_32494);
var state_32532__$1 = (function (){var statearr_32554 = state_32532;
(statearr_32554[(10)] = inst_32492__$1);

(statearr_32554[(14)] = inst_32491__$1);

return statearr_32554;
})();
if(cljs.core.truth_(inst_32495)){
var statearr_32555_32609 = state_32532__$1;
(statearr_32555_32609[(1)] = (23));

} else {
var statearr_32556_32610 = state_32532__$1;
(statearr_32556_32610[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (36))){
var inst_32482 = (state_32532[(12)]);
var inst_32459 = inst_32482;
var state_32532__$1 = (function (){var statearr_32557 = state_32532;
(statearr_32557[(7)] = inst_32459);

return statearr_32557;
})();
var statearr_32558_32611 = state_32532__$1;
(statearr_32558_32611[(2)] = null);

(statearr_32558_32611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (29))){
var inst_32506 = (state_32532[(11)]);
var state_32532__$1 = state_32532;
var statearr_32559_32612 = state_32532__$1;
(statearr_32559_32612[(2)] = inst_32506);

(statearr_32559_32612[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (6))){
var state_32532__$1 = state_32532;
var statearr_32560_32613 = state_32532__$1;
(statearr_32560_32613[(2)] = false);

(statearr_32560_32613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (28))){
var inst_32502 = (state_32532[(2)]);
var inst_32503 = calc_state.call(null);
var inst_32459 = inst_32503;
var state_32532__$1 = (function (){var statearr_32561 = state_32532;
(statearr_32561[(7)] = inst_32459);

(statearr_32561[(15)] = inst_32502);

return statearr_32561;
})();
var statearr_32562_32614 = state_32532__$1;
(statearr_32562_32614[(2)] = null);

(statearr_32562_32614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (25))){
var inst_32528 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32563_32615 = state_32532__$1;
(statearr_32563_32615[(2)] = inst_32528);

(statearr_32563_32615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (34))){
var inst_32526 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32564_32616 = state_32532__$1;
(statearr_32564_32616[(2)] = inst_32526);

(statearr_32564_32616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (17))){
var state_32532__$1 = state_32532;
var statearr_32565_32617 = state_32532__$1;
(statearr_32565_32617[(2)] = false);

(statearr_32565_32617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (3))){
var state_32532__$1 = state_32532;
var statearr_32566_32618 = state_32532__$1;
(statearr_32566_32618[(2)] = false);

(statearr_32566_32618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (12))){
var inst_32530 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32532__$1,inst_32530);
} else {
if((state_val_32533 === (2))){
var inst_32434 = (state_32532[(8)]);
var inst_32439 = inst_32434.cljs$lang$protocol_mask$partition0$;
var inst_32440 = (inst_32439 & (64));
var inst_32441 = inst_32434.cljs$core$ISeq$;
var inst_32442 = (cljs.core.PROTOCOL_SENTINEL === inst_32441);
var inst_32443 = (inst_32440) || (inst_32442);
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32443)){
var statearr_32567_32619 = state_32532__$1;
(statearr_32567_32619[(1)] = (5));

} else {
var statearr_32568_32620 = state_32532__$1;
(statearr_32568_32620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (23))){
var inst_32491 = (state_32532[(14)]);
var inst_32497 = (inst_32491 == null);
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32497)){
var statearr_32569_32621 = state_32532__$1;
(statearr_32569_32621[(1)] = (26));

} else {
var statearr_32570_32622 = state_32532__$1;
(statearr_32570_32622[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (35))){
var inst_32517 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
if(cljs.core.truth_(inst_32517)){
var statearr_32571_32623 = state_32532__$1;
(statearr_32571_32623[(1)] = (36));

} else {
var statearr_32572_32624 = state_32532__$1;
(statearr_32572_32624[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (19))){
var inst_32459 = (state_32532[(7)]);
var inst_32479 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32459);
var state_32532__$1 = state_32532;
var statearr_32573_32625 = state_32532__$1;
(statearr_32573_32625[(2)] = inst_32479);

(statearr_32573_32625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (11))){
var inst_32459 = (state_32532[(7)]);
var inst_32463 = (inst_32459 == null);
var inst_32464 = cljs.core.not.call(null,inst_32463);
var state_32532__$1 = state_32532;
if(inst_32464){
var statearr_32574_32626 = state_32532__$1;
(statearr_32574_32626[(1)] = (13));

} else {
var statearr_32575_32627 = state_32532__$1;
(statearr_32575_32627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (9))){
var inst_32434 = (state_32532[(8)]);
var state_32532__$1 = state_32532;
var statearr_32576_32628 = state_32532__$1;
(statearr_32576_32628[(2)] = inst_32434);

(statearr_32576_32628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (5))){
var state_32532__$1 = state_32532;
var statearr_32577_32629 = state_32532__$1;
(statearr_32577_32629[(2)] = true);

(statearr_32577_32629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (14))){
var state_32532__$1 = state_32532;
var statearr_32578_32630 = state_32532__$1;
(statearr_32578_32630[(2)] = false);

(statearr_32578_32630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (26))){
var inst_32492 = (state_32532[(10)]);
var inst_32499 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32492);
var state_32532__$1 = state_32532;
var statearr_32579_32631 = state_32532__$1;
(statearr_32579_32631[(2)] = inst_32499);

(statearr_32579_32631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (16))){
var state_32532__$1 = state_32532;
var statearr_32580_32632 = state_32532__$1;
(statearr_32580_32632[(2)] = true);

(statearr_32580_32632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (38))){
var inst_32522 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32581_32633 = state_32532__$1;
(statearr_32581_32633[(2)] = inst_32522);

(statearr_32581_32633[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (30))){
var inst_32483 = (state_32532[(9)]);
var inst_32492 = (state_32532[(10)]);
var inst_32484 = (state_32532[(13)]);
var inst_32509 = cljs.core.empty_QMARK_.call(null,inst_32483);
var inst_32510 = inst_32484.call(null,inst_32492);
var inst_32511 = cljs.core.not.call(null,inst_32510);
var inst_32512 = (inst_32509) && (inst_32511);
var state_32532__$1 = state_32532;
var statearr_32582_32634 = state_32532__$1;
(statearr_32582_32634[(2)] = inst_32512);

(statearr_32582_32634[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (10))){
var inst_32434 = (state_32532[(8)]);
var inst_32455 = (state_32532[(2)]);
var inst_32456 = cljs.core.get.call(null,inst_32455,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32457 = cljs.core.get.call(null,inst_32455,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32458 = cljs.core.get.call(null,inst_32455,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32459 = inst_32434;
var state_32532__$1 = (function (){var statearr_32583 = state_32532;
(statearr_32583[(16)] = inst_32458);

(statearr_32583[(7)] = inst_32459);

(statearr_32583[(17)] = inst_32457);

(statearr_32583[(18)] = inst_32456);

return statearr_32583;
})();
var statearr_32584_32635 = state_32532__$1;
(statearr_32584_32635[(2)] = null);

(statearr_32584_32635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (18))){
var inst_32474 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32585_32636 = state_32532__$1;
(statearr_32585_32636[(2)] = inst_32474);

(statearr_32585_32636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (37))){
var state_32532__$1 = state_32532;
var statearr_32586_32637 = state_32532__$1;
(statearr_32586_32637[(2)] = null);

(statearr_32586_32637[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32533 === (8))){
var inst_32434 = (state_32532[(8)]);
var inst_32452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32434);
var state_32532__$1 = state_32532;
var statearr_32587_32638 = state_32532__$1;
(statearr_32587_32638[(2)] = inst_32452);

(statearr_32587_32638[(1)] = (10));


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
});})(c__31547__auto___32592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31459__auto__,c__31547__auto___32592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31460__auto__ = null;
var cljs$core$async$mix_$_state_machine__31460__auto____0 = (function (){
var statearr_32588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32588[(0)] = cljs$core$async$mix_$_state_machine__31460__auto__);

(statearr_32588[(1)] = (1));

return statearr_32588;
});
var cljs$core$async$mix_$_state_machine__31460__auto____1 = (function (state_32532){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_32532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e32589){if((e32589 instanceof Object)){
var ex__31463__auto__ = e32589;
var statearr_32590_32639 = state_32532;
(statearr_32590_32639[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32640 = state_32532;
state_32532 = G__32640;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31460__auto__ = function(state_32532){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31460__auto____1.call(this,state_32532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31460__auto____0;
cljs$core$async$mix_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31460__auto____1;
return cljs$core$async$mix_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___32592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31549__auto__ = (function (){var statearr_32591 = f__31548__auto__.call(null);
(statearr_32591[(6)] = c__31547__auto___32592);

return statearr_32591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8352__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,p,v,ch);
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32642 = arguments.length;
switch (G__32642) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,p);
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,p,v);
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__32646 = arguments.length;
switch (G__32646) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7668__auto__,mults){
return (function (p1__32644_SHARP_){
if(cljs.core.truth_(p1__32644_SHARP_.call(null,topic))){
return p1__32644_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32644_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32647 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32648){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32648 = meta32648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32649,meta32648__$1){
var self__ = this;
var _32649__$1 = this;
return (new cljs.core.async.t_cljs$core$async32647(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32648__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32649){
var self__ = this;
var _32649__$1 = this;
return self__.meta32648;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32647.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32647.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32647.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32647.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32647.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32648","meta32648",-131634221,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32647";

cljs.core.async.t_cljs$core$async32647.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async32647");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32647 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32647(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32648){
return (new cljs.core.async.t_cljs$core$async32647(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32648));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32647(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31547__auto___32767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32767,mults,ensure_mult,p){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___32767,mults,ensure_mult,p){
return (function (state_32721){
var state_val_32722 = (state_32721[(1)]);
if((state_val_32722 === (7))){
var inst_32717 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32723_32768 = state_32721__$1;
(statearr_32723_32768[(2)] = inst_32717);

(statearr_32723_32768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (20))){
var state_32721__$1 = state_32721;
var statearr_32724_32769 = state_32721__$1;
(statearr_32724_32769[(2)] = null);

(statearr_32724_32769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (1))){
var state_32721__$1 = state_32721;
var statearr_32725_32770 = state_32721__$1;
(statearr_32725_32770[(2)] = null);

(statearr_32725_32770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (24))){
var inst_32700 = (state_32721[(7)]);
var inst_32709 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32700);
var state_32721__$1 = state_32721;
var statearr_32726_32771 = state_32721__$1;
(statearr_32726_32771[(2)] = inst_32709);

(statearr_32726_32771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (4))){
var inst_32652 = (state_32721[(8)]);
var inst_32652__$1 = (state_32721[(2)]);
var inst_32653 = (inst_32652__$1 == null);
var state_32721__$1 = (function (){var statearr_32727 = state_32721;
(statearr_32727[(8)] = inst_32652__$1);

return statearr_32727;
})();
if(cljs.core.truth_(inst_32653)){
var statearr_32728_32772 = state_32721__$1;
(statearr_32728_32772[(1)] = (5));

} else {
var statearr_32729_32773 = state_32721__$1;
(statearr_32729_32773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (15))){
var inst_32694 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32730_32774 = state_32721__$1;
(statearr_32730_32774[(2)] = inst_32694);

(statearr_32730_32774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (21))){
var inst_32714 = (state_32721[(2)]);
var state_32721__$1 = (function (){var statearr_32731 = state_32721;
(statearr_32731[(9)] = inst_32714);

return statearr_32731;
})();
var statearr_32732_32775 = state_32721__$1;
(statearr_32732_32775[(2)] = null);

(statearr_32732_32775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (13))){
var inst_32676 = (state_32721[(10)]);
var inst_32678 = cljs.core.chunked_seq_QMARK_.call(null,inst_32676);
var state_32721__$1 = state_32721;
if(inst_32678){
var statearr_32733_32776 = state_32721__$1;
(statearr_32733_32776[(1)] = (16));

} else {
var statearr_32734_32777 = state_32721__$1;
(statearr_32734_32777[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (22))){
var inst_32706 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
if(cljs.core.truth_(inst_32706)){
var statearr_32735_32778 = state_32721__$1;
(statearr_32735_32778[(1)] = (23));

} else {
var statearr_32736_32779 = state_32721__$1;
(statearr_32736_32779[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (6))){
var inst_32702 = (state_32721[(11)]);
var inst_32700 = (state_32721[(7)]);
var inst_32652 = (state_32721[(8)]);
var inst_32700__$1 = topic_fn.call(null,inst_32652);
var inst_32701 = cljs.core.deref.call(null,mults);
var inst_32702__$1 = cljs.core.get.call(null,inst_32701,inst_32700__$1);
var state_32721__$1 = (function (){var statearr_32737 = state_32721;
(statearr_32737[(11)] = inst_32702__$1);

(statearr_32737[(7)] = inst_32700__$1);

return statearr_32737;
})();
if(cljs.core.truth_(inst_32702__$1)){
var statearr_32738_32780 = state_32721__$1;
(statearr_32738_32780[(1)] = (19));

} else {
var statearr_32739_32781 = state_32721__$1;
(statearr_32739_32781[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (25))){
var inst_32711 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32740_32782 = state_32721__$1;
(statearr_32740_32782[(2)] = inst_32711);

(statearr_32740_32782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (17))){
var inst_32676 = (state_32721[(10)]);
var inst_32685 = cljs.core.first.call(null,inst_32676);
var inst_32686 = cljs.core.async.muxch_STAR_.call(null,inst_32685);
var inst_32687 = cljs.core.async.close_BANG_.call(null,inst_32686);
var inst_32688 = cljs.core.next.call(null,inst_32676);
var inst_32662 = inst_32688;
var inst_32663 = null;
var inst_32664 = (0);
var inst_32665 = (0);
var state_32721__$1 = (function (){var statearr_32741 = state_32721;
(statearr_32741[(12)] = inst_32663);

(statearr_32741[(13)] = inst_32664);

(statearr_32741[(14)] = inst_32662);

(statearr_32741[(15)] = inst_32687);

(statearr_32741[(16)] = inst_32665);

return statearr_32741;
})();
var statearr_32742_32783 = state_32721__$1;
(statearr_32742_32783[(2)] = null);

(statearr_32742_32783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (3))){
var inst_32719 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32721__$1,inst_32719);
} else {
if((state_val_32722 === (12))){
var inst_32696 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32743_32784 = state_32721__$1;
(statearr_32743_32784[(2)] = inst_32696);

(statearr_32743_32784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (2))){
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32721__$1,(4),ch);
} else {
if((state_val_32722 === (23))){
var state_32721__$1 = state_32721;
var statearr_32744_32785 = state_32721__$1;
(statearr_32744_32785[(2)] = null);

(statearr_32744_32785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (19))){
var inst_32702 = (state_32721[(11)]);
var inst_32652 = (state_32721[(8)]);
var inst_32704 = cljs.core.async.muxch_STAR_.call(null,inst_32702);
var state_32721__$1 = state_32721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32721__$1,(22),inst_32704,inst_32652);
} else {
if((state_val_32722 === (11))){
var inst_32676 = (state_32721[(10)]);
var inst_32662 = (state_32721[(14)]);
var inst_32676__$1 = cljs.core.seq.call(null,inst_32662);
var state_32721__$1 = (function (){var statearr_32745 = state_32721;
(statearr_32745[(10)] = inst_32676__$1);

return statearr_32745;
})();
if(inst_32676__$1){
var statearr_32746_32786 = state_32721__$1;
(statearr_32746_32786[(1)] = (13));

} else {
var statearr_32747_32787 = state_32721__$1;
(statearr_32747_32787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (9))){
var inst_32698 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32748_32788 = state_32721__$1;
(statearr_32748_32788[(2)] = inst_32698);

(statearr_32748_32788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (5))){
var inst_32659 = cljs.core.deref.call(null,mults);
var inst_32660 = cljs.core.vals.call(null,inst_32659);
var inst_32661 = cljs.core.seq.call(null,inst_32660);
var inst_32662 = inst_32661;
var inst_32663 = null;
var inst_32664 = (0);
var inst_32665 = (0);
var state_32721__$1 = (function (){var statearr_32749 = state_32721;
(statearr_32749[(12)] = inst_32663);

(statearr_32749[(13)] = inst_32664);

(statearr_32749[(14)] = inst_32662);

(statearr_32749[(16)] = inst_32665);

return statearr_32749;
})();
var statearr_32750_32789 = state_32721__$1;
(statearr_32750_32789[(2)] = null);

(statearr_32750_32789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (14))){
var state_32721__$1 = state_32721;
var statearr_32754_32790 = state_32721__$1;
(statearr_32754_32790[(2)] = null);

(statearr_32754_32790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (16))){
var inst_32676 = (state_32721[(10)]);
var inst_32680 = cljs.core.chunk_first.call(null,inst_32676);
var inst_32681 = cljs.core.chunk_rest.call(null,inst_32676);
var inst_32682 = cljs.core.count.call(null,inst_32680);
var inst_32662 = inst_32681;
var inst_32663 = inst_32680;
var inst_32664 = inst_32682;
var inst_32665 = (0);
var state_32721__$1 = (function (){var statearr_32755 = state_32721;
(statearr_32755[(12)] = inst_32663);

(statearr_32755[(13)] = inst_32664);

(statearr_32755[(14)] = inst_32662);

(statearr_32755[(16)] = inst_32665);

return statearr_32755;
})();
var statearr_32756_32791 = state_32721__$1;
(statearr_32756_32791[(2)] = null);

(statearr_32756_32791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (10))){
var inst_32663 = (state_32721[(12)]);
var inst_32664 = (state_32721[(13)]);
var inst_32662 = (state_32721[(14)]);
var inst_32665 = (state_32721[(16)]);
var inst_32670 = cljs.core._nth.call(null,inst_32663,inst_32665);
var inst_32671 = cljs.core.async.muxch_STAR_.call(null,inst_32670);
var inst_32672 = cljs.core.async.close_BANG_.call(null,inst_32671);
var inst_32673 = (inst_32665 + (1));
var tmp32751 = inst_32663;
var tmp32752 = inst_32664;
var tmp32753 = inst_32662;
var inst_32662__$1 = tmp32753;
var inst_32663__$1 = tmp32751;
var inst_32664__$1 = tmp32752;
var inst_32665__$1 = inst_32673;
var state_32721__$1 = (function (){var statearr_32757 = state_32721;
(statearr_32757[(12)] = inst_32663__$1);

(statearr_32757[(13)] = inst_32664__$1);

(statearr_32757[(17)] = inst_32672);

(statearr_32757[(14)] = inst_32662__$1);

(statearr_32757[(16)] = inst_32665__$1);

return statearr_32757;
})();
var statearr_32758_32792 = state_32721__$1;
(statearr_32758_32792[(2)] = null);

(statearr_32758_32792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (18))){
var inst_32691 = (state_32721[(2)]);
var state_32721__$1 = state_32721;
var statearr_32759_32793 = state_32721__$1;
(statearr_32759_32793[(2)] = inst_32691);

(statearr_32759_32793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32722 === (8))){
var inst_32664 = (state_32721[(13)]);
var inst_32665 = (state_32721[(16)]);
var inst_32667 = (inst_32665 < inst_32664);
var inst_32668 = inst_32667;
var state_32721__$1 = state_32721;
if(cljs.core.truth_(inst_32668)){
var statearr_32760_32794 = state_32721__$1;
(statearr_32760_32794[(1)] = (10));

} else {
var statearr_32761_32795 = state_32721__$1;
(statearr_32761_32795[(1)] = (11));

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
});})(c__31547__auto___32767,mults,ensure_mult,p))
;
return ((function (switch__31459__auto__,c__31547__auto___32767,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_32762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32762[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_32762[(1)] = (1));

return statearr_32762;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_32721){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_32721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e32763){if((e32763 instanceof Object)){
var ex__31463__auto__ = e32763;
var statearr_32764_32796 = state_32721;
(statearr_32764_32796[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32797 = state_32721;
state_32721 = G__32797;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_32721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_32721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___32767,mults,ensure_mult,p))
})();
var state__31549__auto__ = (function (){var statearr_32765 = f__31548__auto__.call(null);
(statearr_32765[(6)] = c__31547__auto___32767);

return statearr_32765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32767,mults,ensure_mult,p))
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
var G__32799 = arguments.length;
switch (G__32799) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32802 = arguments.length;
switch (G__32802) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__32805 = arguments.length;
switch (G__32805) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31547__auto___32872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32872,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___32872,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32844){
var state_val_32845 = (state_32844[(1)]);
if((state_val_32845 === (7))){
var state_32844__$1 = state_32844;
var statearr_32846_32873 = state_32844__$1;
(statearr_32846_32873[(2)] = null);

(statearr_32846_32873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (1))){
var state_32844__$1 = state_32844;
var statearr_32847_32874 = state_32844__$1;
(statearr_32847_32874[(2)] = null);

(statearr_32847_32874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (4))){
var inst_32808 = (state_32844[(7)]);
var inst_32810 = (inst_32808 < cnt);
var state_32844__$1 = state_32844;
if(cljs.core.truth_(inst_32810)){
var statearr_32848_32875 = state_32844__$1;
(statearr_32848_32875[(1)] = (6));

} else {
var statearr_32849_32876 = state_32844__$1;
(statearr_32849_32876[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (15))){
var inst_32840 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32850_32877 = state_32844__$1;
(statearr_32850_32877[(2)] = inst_32840);

(statearr_32850_32877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (13))){
var inst_32833 = cljs.core.async.close_BANG_.call(null,out);
var state_32844__$1 = state_32844;
var statearr_32851_32878 = state_32844__$1;
(statearr_32851_32878[(2)] = inst_32833);

(statearr_32851_32878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (6))){
var state_32844__$1 = state_32844;
var statearr_32852_32879 = state_32844__$1;
(statearr_32852_32879[(2)] = null);

(statearr_32852_32879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (3))){
var inst_32842 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32844__$1,inst_32842);
} else {
if((state_val_32845 === (12))){
var inst_32830 = (state_32844[(8)]);
var inst_32830__$1 = (state_32844[(2)]);
var inst_32831 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32830__$1);
var state_32844__$1 = (function (){var statearr_32853 = state_32844;
(statearr_32853[(8)] = inst_32830__$1);

return statearr_32853;
})();
if(cljs.core.truth_(inst_32831)){
var statearr_32854_32880 = state_32844__$1;
(statearr_32854_32880[(1)] = (13));

} else {
var statearr_32855_32881 = state_32844__$1;
(statearr_32855_32881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (2))){
var inst_32807 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32808 = (0);
var state_32844__$1 = (function (){var statearr_32856 = state_32844;
(statearr_32856[(9)] = inst_32807);

(statearr_32856[(7)] = inst_32808);

return statearr_32856;
})();
var statearr_32857_32882 = state_32844__$1;
(statearr_32857_32882[(2)] = null);

(statearr_32857_32882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (11))){
var inst_32808 = (state_32844[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32844,(10),Object,null,(9));
var inst_32817 = chs__$1.call(null,inst_32808);
var inst_32818 = done.call(null,inst_32808);
var inst_32819 = cljs.core.async.take_BANG_.call(null,inst_32817,inst_32818);
var state_32844__$1 = state_32844;
var statearr_32858_32883 = state_32844__$1;
(statearr_32858_32883[(2)] = inst_32819);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32844__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (9))){
var inst_32808 = (state_32844[(7)]);
var inst_32821 = (state_32844[(2)]);
var inst_32822 = (inst_32808 + (1));
var inst_32808__$1 = inst_32822;
var state_32844__$1 = (function (){var statearr_32859 = state_32844;
(statearr_32859[(10)] = inst_32821);

(statearr_32859[(7)] = inst_32808__$1);

return statearr_32859;
})();
var statearr_32860_32884 = state_32844__$1;
(statearr_32860_32884[(2)] = null);

(statearr_32860_32884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (5))){
var inst_32828 = (state_32844[(2)]);
var state_32844__$1 = (function (){var statearr_32861 = state_32844;
(statearr_32861[(11)] = inst_32828);

return statearr_32861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32844__$1,(12),dchan);
} else {
if((state_val_32845 === (14))){
var inst_32830 = (state_32844[(8)]);
var inst_32835 = cljs.core.apply.call(null,f,inst_32830);
var state_32844__$1 = state_32844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32844__$1,(16),out,inst_32835);
} else {
if((state_val_32845 === (16))){
var inst_32837 = (state_32844[(2)]);
var state_32844__$1 = (function (){var statearr_32862 = state_32844;
(statearr_32862[(12)] = inst_32837);

return statearr_32862;
})();
var statearr_32863_32885 = state_32844__$1;
(statearr_32863_32885[(2)] = null);

(statearr_32863_32885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (10))){
var inst_32812 = (state_32844[(2)]);
var inst_32813 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32844__$1 = (function (){var statearr_32864 = state_32844;
(statearr_32864[(13)] = inst_32812);

return statearr_32864;
})();
var statearr_32865_32886 = state_32844__$1;
(statearr_32865_32886[(2)] = inst_32813);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32844__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32845 === (8))){
var inst_32826 = (state_32844[(2)]);
var state_32844__$1 = state_32844;
var statearr_32866_32887 = state_32844__$1;
(statearr_32866_32887[(2)] = inst_32826);

(statearr_32866_32887[(1)] = (5));


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
});})(c__31547__auto___32872,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31459__auto__,c__31547__auto___32872,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_32867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32867[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_32867[(1)] = (1));

return statearr_32867;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_32844){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_32844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e32868){if((e32868 instanceof Object)){
var ex__31463__auto__ = e32868;
var statearr_32869_32888 = state_32844;
(statearr_32869_32888[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32889 = state_32844;
state_32844 = G__32889;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_32844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_32844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___32872,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31549__auto__ = (function (){var statearr_32870 = f__31548__auto__.call(null);
(statearr_32870[(6)] = c__31547__auto___32872);

return statearr_32870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32872,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32892 = arguments.length;
switch (G__32892) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31547__auto___32946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___32946,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___32946,out){
return (function (state_32924){
var state_val_32925 = (state_32924[(1)]);
if((state_val_32925 === (7))){
var inst_32904 = (state_32924[(7)]);
var inst_32903 = (state_32924[(8)]);
var inst_32903__$1 = (state_32924[(2)]);
var inst_32904__$1 = cljs.core.nth.call(null,inst_32903__$1,(0),null);
var inst_32905 = cljs.core.nth.call(null,inst_32903__$1,(1),null);
var inst_32906 = (inst_32904__$1 == null);
var state_32924__$1 = (function (){var statearr_32926 = state_32924;
(statearr_32926[(7)] = inst_32904__$1);

(statearr_32926[(9)] = inst_32905);

(statearr_32926[(8)] = inst_32903__$1);

return statearr_32926;
})();
if(cljs.core.truth_(inst_32906)){
var statearr_32927_32947 = state_32924__$1;
(statearr_32927_32947[(1)] = (8));

} else {
var statearr_32928_32948 = state_32924__$1;
(statearr_32928_32948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (1))){
var inst_32893 = cljs.core.vec.call(null,chs);
var inst_32894 = inst_32893;
var state_32924__$1 = (function (){var statearr_32929 = state_32924;
(statearr_32929[(10)] = inst_32894);

return statearr_32929;
})();
var statearr_32930_32949 = state_32924__$1;
(statearr_32930_32949[(2)] = null);

(statearr_32930_32949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (4))){
var inst_32894 = (state_32924[(10)]);
var state_32924__$1 = state_32924;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32924__$1,(7),inst_32894);
} else {
if((state_val_32925 === (6))){
var inst_32920 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32931_32950 = state_32924__$1;
(statearr_32931_32950[(2)] = inst_32920);

(statearr_32931_32950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (3))){
var inst_32922 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32924__$1,inst_32922);
} else {
if((state_val_32925 === (2))){
var inst_32894 = (state_32924[(10)]);
var inst_32896 = cljs.core.count.call(null,inst_32894);
var inst_32897 = (inst_32896 > (0));
var state_32924__$1 = state_32924;
if(cljs.core.truth_(inst_32897)){
var statearr_32933_32951 = state_32924__$1;
(statearr_32933_32951[(1)] = (4));

} else {
var statearr_32934_32952 = state_32924__$1;
(statearr_32934_32952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (11))){
var inst_32894 = (state_32924[(10)]);
var inst_32913 = (state_32924[(2)]);
var tmp32932 = inst_32894;
var inst_32894__$1 = tmp32932;
var state_32924__$1 = (function (){var statearr_32935 = state_32924;
(statearr_32935[(11)] = inst_32913);

(statearr_32935[(10)] = inst_32894__$1);

return statearr_32935;
})();
var statearr_32936_32953 = state_32924__$1;
(statearr_32936_32953[(2)] = null);

(statearr_32936_32953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (9))){
var inst_32904 = (state_32924[(7)]);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32924__$1,(11),out,inst_32904);
} else {
if((state_val_32925 === (5))){
var inst_32918 = cljs.core.async.close_BANG_.call(null,out);
var state_32924__$1 = state_32924;
var statearr_32937_32954 = state_32924__$1;
(statearr_32937_32954[(2)] = inst_32918);

(statearr_32937_32954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (10))){
var inst_32916 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32938_32955 = state_32924__$1;
(statearr_32938_32955[(2)] = inst_32916);

(statearr_32938_32955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (8))){
var inst_32894 = (state_32924[(10)]);
var inst_32904 = (state_32924[(7)]);
var inst_32905 = (state_32924[(9)]);
var inst_32903 = (state_32924[(8)]);
var inst_32908 = (function (){var cs = inst_32894;
var vec__32899 = inst_32903;
var v = inst_32904;
var c = inst_32905;
return ((function (cs,vec__32899,v,c,inst_32894,inst_32904,inst_32905,inst_32903,state_val_32925,c__31547__auto___32946,out){
return (function (p1__32890_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32890_SHARP_);
});
;})(cs,vec__32899,v,c,inst_32894,inst_32904,inst_32905,inst_32903,state_val_32925,c__31547__auto___32946,out))
})();
var inst_32909 = cljs.core.filterv.call(null,inst_32908,inst_32894);
var inst_32894__$1 = inst_32909;
var state_32924__$1 = (function (){var statearr_32939 = state_32924;
(statearr_32939[(10)] = inst_32894__$1);

return statearr_32939;
})();
var statearr_32940_32956 = state_32924__$1;
(statearr_32940_32956[(2)] = null);

(statearr_32940_32956[(1)] = (2));


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
});})(c__31547__auto___32946,out))
;
return ((function (switch__31459__auto__,c__31547__auto___32946,out){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_32941 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32941[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_32941[(1)] = (1));

return statearr_32941;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_32924){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_32924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e32942){if((e32942 instanceof Object)){
var ex__31463__auto__ = e32942;
var statearr_32943_32957 = state_32924;
(statearr_32943_32957[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32958 = state_32924;
state_32924 = G__32958;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_32924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_32924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___32946,out))
})();
var state__31549__auto__ = (function (){var statearr_32944 = f__31548__auto__.call(null);
(statearr_32944[(6)] = c__31547__auto___32946);

return statearr_32944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___32946,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32960 = arguments.length;
switch (G__32960) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31547__auto___33005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33005,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___33005,out){
return (function (state_32984){
var state_val_32985 = (state_32984[(1)]);
if((state_val_32985 === (7))){
var inst_32966 = (state_32984[(7)]);
var inst_32966__$1 = (state_32984[(2)]);
var inst_32967 = (inst_32966__$1 == null);
var inst_32968 = cljs.core.not.call(null,inst_32967);
var state_32984__$1 = (function (){var statearr_32986 = state_32984;
(statearr_32986[(7)] = inst_32966__$1);

return statearr_32986;
})();
if(inst_32968){
var statearr_32987_33006 = state_32984__$1;
(statearr_32987_33006[(1)] = (8));

} else {
var statearr_32988_33007 = state_32984__$1;
(statearr_32988_33007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (1))){
var inst_32961 = (0);
var state_32984__$1 = (function (){var statearr_32989 = state_32984;
(statearr_32989[(8)] = inst_32961);

return statearr_32989;
})();
var statearr_32990_33008 = state_32984__$1;
(statearr_32990_33008[(2)] = null);

(statearr_32990_33008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (4))){
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32984__$1,(7),ch);
} else {
if((state_val_32985 === (6))){
var inst_32979 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_32991_33009 = state_32984__$1;
(statearr_32991_33009[(2)] = inst_32979);

(statearr_32991_33009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (3))){
var inst_32981 = (state_32984[(2)]);
var inst_32982 = cljs.core.async.close_BANG_.call(null,out);
var state_32984__$1 = (function (){var statearr_32992 = state_32984;
(statearr_32992[(9)] = inst_32981);

return statearr_32992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32984__$1,inst_32982);
} else {
if((state_val_32985 === (2))){
var inst_32961 = (state_32984[(8)]);
var inst_32963 = (inst_32961 < n);
var state_32984__$1 = state_32984;
if(cljs.core.truth_(inst_32963)){
var statearr_32993_33010 = state_32984__$1;
(statearr_32993_33010[(1)] = (4));

} else {
var statearr_32994_33011 = state_32984__$1;
(statearr_32994_33011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (11))){
var inst_32961 = (state_32984[(8)]);
var inst_32971 = (state_32984[(2)]);
var inst_32972 = (inst_32961 + (1));
var inst_32961__$1 = inst_32972;
var state_32984__$1 = (function (){var statearr_32995 = state_32984;
(statearr_32995[(8)] = inst_32961__$1);

(statearr_32995[(10)] = inst_32971);

return statearr_32995;
})();
var statearr_32996_33012 = state_32984__$1;
(statearr_32996_33012[(2)] = null);

(statearr_32996_33012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (9))){
var state_32984__$1 = state_32984;
var statearr_32997_33013 = state_32984__$1;
(statearr_32997_33013[(2)] = null);

(statearr_32997_33013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (5))){
var state_32984__$1 = state_32984;
var statearr_32998_33014 = state_32984__$1;
(statearr_32998_33014[(2)] = null);

(statearr_32998_33014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (10))){
var inst_32976 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_32999_33015 = state_32984__$1;
(statearr_32999_33015[(2)] = inst_32976);

(statearr_32999_33015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (8))){
var inst_32966 = (state_32984[(7)]);
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32984__$1,(11),out,inst_32966);
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
});})(c__31547__auto___33005,out))
;
return ((function (switch__31459__auto__,c__31547__auto___33005,out){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_33000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33000[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_33000[(1)] = (1));

return statearr_33000;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_32984){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_32984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e33001){if((e33001 instanceof Object)){
var ex__31463__auto__ = e33001;
var statearr_33002_33016 = state_32984;
(statearr_33002_33016[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33017 = state_32984;
state_32984 = G__33017;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_32984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_32984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___33005,out))
})();
var state__31549__auto__ = (function (){var statearr_33003 = f__31548__auto__.call(null);
(statearr_33003[(6)] = c__31547__auto___33005);

return statearr_33003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33005,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33019 = (function (f,ch,meta33020){
this.f = f;
this.ch = ch;
this.meta33020 = meta33020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33021,meta33020__$1){
var self__ = this;
var _33021__$1 = this;
return (new cljs.core.async.t_cljs$core$async33019(self__.f,self__.ch,meta33020__$1));
});

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33021){
var self__ = this;
var _33021__$1 = this;
return self__.meta33020;
});

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33022 = (function (f,ch,meta33020,_,fn1,meta33023){
this.f = f;
this.ch = ch;
this.meta33020 = meta33020;
this._ = _;
this.fn1 = fn1;
this.meta33023 = meta33023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33024,meta33023__$1){
var self__ = this;
var _33024__$1 = this;
return (new cljs.core.async.t_cljs$core$async33022(self__.f,self__.ch,self__.meta33020,self__._,self__.fn1,meta33023__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33024){
var self__ = this;
var _33024__$1 = this;
return self__.meta33023;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33018_SHARP_){
return f1.call(null,(((p1__33018_SHARP_ == null))?null:self__.f.call(null,p1__33018_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33022.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33020","meta33020",971271479,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33019","cljs.core.async/t_cljs$core$async33019",1735138444,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33023","meta33023",1777698271,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33022";

cljs.core.async.t_cljs$core$async33022.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async33022");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33022 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33022(f__$1,ch__$1,meta33020__$1,___$2,fn1__$1,meta33023){
return (new cljs.core.async.t_cljs$core$async33022(f__$1,ch__$1,meta33020__$1,___$2,fn1__$1,meta33023));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33022(self__.f,self__.ch,self__.meta33020,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7656__auto__ = ret;
if(cljs.core.truth_(and__7656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33020","meta33020",971271479,null)], null);
});

cljs.core.async.t_cljs$core$async33019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33019";

cljs.core.async.t_cljs$core$async33019.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async33019");
});

cljs.core.async.__GT_t_cljs$core$async33019 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33019(f__$1,ch__$1,meta33020){
return (new cljs.core.async.t_cljs$core$async33019(f__$1,ch__$1,meta33020));
});

}

return (new cljs.core.async.t_cljs$core$async33019(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33025 = (function (f,ch,meta33026){
this.f = f;
this.ch = ch;
this.meta33026 = meta33026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33027,meta33026__$1){
var self__ = this;
var _33027__$1 = this;
return (new cljs.core.async.t_cljs$core$async33025(self__.f,self__.ch,meta33026__$1));
});

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33027){
var self__ = this;
var _33027__$1 = this;
return self__.meta33026;
});

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33026","meta33026",-1324167313,null)], null);
});

cljs.core.async.t_cljs$core$async33025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33025";

cljs.core.async.t_cljs$core$async33025.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async33025");
});

cljs.core.async.__GT_t_cljs$core$async33025 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33025(f__$1,ch__$1,meta33026){
return (new cljs.core.async.t_cljs$core$async33025(f__$1,ch__$1,meta33026));
});

}

return (new cljs.core.async.t_cljs$core$async33025(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33028 = (function (p,ch,meta33029){
this.p = p;
this.ch = ch;
this.meta33029 = meta33029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33030,meta33029__$1){
var self__ = this;
var _33030__$1 = this;
return (new cljs.core.async.t_cljs$core$async33028(self__.p,self__.ch,meta33029__$1));
});

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33030){
var self__ = this;
var _33030__$1 = this;
return self__.meta33029;
});

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33028.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33029","meta33029",678019042,null)], null);
});

cljs.core.async.t_cljs$core$async33028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33028";

cljs.core.async.t_cljs$core$async33028.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async33028");
});

cljs.core.async.__GT_t_cljs$core$async33028 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33028(p__$1,ch__$1,meta33029){
return (new cljs.core.async.t_cljs$core$async33028(p__$1,ch__$1,meta33029));
});

}

return (new cljs.core.async.t_cljs$core$async33028(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33032 = arguments.length;
switch (G__33032) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31547__auto___33072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33072,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___33072,out){
return (function (state_33053){
var state_val_33054 = (state_33053[(1)]);
if((state_val_33054 === (7))){
var inst_33049 = (state_33053[(2)]);
var state_33053__$1 = state_33053;
var statearr_33055_33073 = state_33053__$1;
(statearr_33055_33073[(2)] = inst_33049);

(statearr_33055_33073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (1))){
var state_33053__$1 = state_33053;
var statearr_33056_33074 = state_33053__$1;
(statearr_33056_33074[(2)] = null);

(statearr_33056_33074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (4))){
var inst_33035 = (state_33053[(7)]);
var inst_33035__$1 = (state_33053[(2)]);
var inst_33036 = (inst_33035__$1 == null);
var state_33053__$1 = (function (){var statearr_33057 = state_33053;
(statearr_33057[(7)] = inst_33035__$1);

return statearr_33057;
})();
if(cljs.core.truth_(inst_33036)){
var statearr_33058_33075 = state_33053__$1;
(statearr_33058_33075[(1)] = (5));

} else {
var statearr_33059_33076 = state_33053__$1;
(statearr_33059_33076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (6))){
var inst_33035 = (state_33053[(7)]);
var inst_33040 = p.call(null,inst_33035);
var state_33053__$1 = state_33053;
if(cljs.core.truth_(inst_33040)){
var statearr_33060_33077 = state_33053__$1;
(statearr_33060_33077[(1)] = (8));

} else {
var statearr_33061_33078 = state_33053__$1;
(statearr_33061_33078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (3))){
var inst_33051 = (state_33053[(2)]);
var state_33053__$1 = state_33053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33053__$1,inst_33051);
} else {
if((state_val_33054 === (2))){
var state_33053__$1 = state_33053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33053__$1,(4),ch);
} else {
if((state_val_33054 === (11))){
var inst_33043 = (state_33053[(2)]);
var state_33053__$1 = state_33053;
var statearr_33062_33079 = state_33053__$1;
(statearr_33062_33079[(2)] = inst_33043);

(statearr_33062_33079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (9))){
var state_33053__$1 = state_33053;
var statearr_33063_33080 = state_33053__$1;
(statearr_33063_33080[(2)] = null);

(statearr_33063_33080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (5))){
var inst_33038 = cljs.core.async.close_BANG_.call(null,out);
var state_33053__$1 = state_33053;
var statearr_33064_33081 = state_33053__$1;
(statearr_33064_33081[(2)] = inst_33038);

(statearr_33064_33081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (10))){
var inst_33046 = (state_33053[(2)]);
var state_33053__$1 = (function (){var statearr_33065 = state_33053;
(statearr_33065[(8)] = inst_33046);

return statearr_33065;
})();
var statearr_33066_33082 = state_33053__$1;
(statearr_33066_33082[(2)] = null);

(statearr_33066_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33054 === (8))){
var inst_33035 = (state_33053[(7)]);
var state_33053__$1 = state_33053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33053__$1,(11),out,inst_33035);
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
});})(c__31547__auto___33072,out))
;
return ((function (switch__31459__auto__,c__31547__auto___33072,out){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_33067 = [null,null,null,null,null,null,null,null,null];
(statearr_33067[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_33067[(1)] = (1));

return statearr_33067;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_33053){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_33053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e33068){if((e33068 instanceof Object)){
var ex__31463__auto__ = e33068;
var statearr_33069_33083 = state_33053;
(statearr_33069_33083[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33084 = state_33053;
state_33053 = G__33084;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_33053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_33053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___33072,out))
})();
var state__31549__auto__ = (function (){var statearr_33070 = f__31548__auto__.call(null);
(statearr_33070[(6)] = c__31547__auto___33072);

return statearr_33070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33072,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33086 = arguments.length;
switch (G__33086) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__){
return (function (state_33149){
var state_val_33150 = (state_33149[(1)]);
if((state_val_33150 === (7))){
var inst_33145 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33151_33189 = state_33149__$1;
(statearr_33151_33189[(2)] = inst_33145);

(statearr_33151_33189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (20))){
var inst_33115 = (state_33149[(7)]);
var inst_33126 = (state_33149[(2)]);
var inst_33127 = cljs.core.next.call(null,inst_33115);
var inst_33101 = inst_33127;
var inst_33102 = null;
var inst_33103 = (0);
var inst_33104 = (0);
var state_33149__$1 = (function (){var statearr_33152 = state_33149;
(statearr_33152[(8)] = inst_33101);

(statearr_33152[(9)] = inst_33104);

(statearr_33152[(10)] = inst_33126);

(statearr_33152[(11)] = inst_33103);

(statearr_33152[(12)] = inst_33102);

return statearr_33152;
})();
var statearr_33153_33190 = state_33149__$1;
(statearr_33153_33190[(2)] = null);

(statearr_33153_33190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (1))){
var state_33149__$1 = state_33149;
var statearr_33154_33191 = state_33149__$1;
(statearr_33154_33191[(2)] = null);

(statearr_33154_33191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (4))){
var inst_33090 = (state_33149[(13)]);
var inst_33090__$1 = (state_33149[(2)]);
var inst_33091 = (inst_33090__$1 == null);
var state_33149__$1 = (function (){var statearr_33155 = state_33149;
(statearr_33155[(13)] = inst_33090__$1);

return statearr_33155;
})();
if(cljs.core.truth_(inst_33091)){
var statearr_33156_33192 = state_33149__$1;
(statearr_33156_33192[(1)] = (5));

} else {
var statearr_33157_33193 = state_33149__$1;
(statearr_33157_33193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (15))){
var state_33149__$1 = state_33149;
var statearr_33161_33194 = state_33149__$1;
(statearr_33161_33194[(2)] = null);

(statearr_33161_33194[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (21))){
var state_33149__$1 = state_33149;
var statearr_33162_33195 = state_33149__$1;
(statearr_33162_33195[(2)] = null);

(statearr_33162_33195[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (13))){
var inst_33101 = (state_33149[(8)]);
var inst_33104 = (state_33149[(9)]);
var inst_33103 = (state_33149[(11)]);
var inst_33102 = (state_33149[(12)]);
var inst_33111 = (state_33149[(2)]);
var inst_33112 = (inst_33104 + (1));
var tmp33158 = inst_33101;
var tmp33159 = inst_33103;
var tmp33160 = inst_33102;
var inst_33101__$1 = tmp33158;
var inst_33102__$1 = tmp33160;
var inst_33103__$1 = tmp33159;
var inst_33104__$1 = inst_33112;
var state_33149__$1 = (function (){var statearr_33163 = state_33149;
(statearr_33163[(8)] = inst_33101__$1);

(statearr_33163[(9)] = inst_33104__$1);

(statearr_33163[(14)] = inst_33111);

(statearr_33163[(11)] = inst_33103__$1);

(statearr_33163[(12)] = inst_33102__$1);

return statearr_33163;
})();
var statearr_33164_33196 = state_33149__$1;
(statearr_33164_33196[(2)] = null);

(statearr_33164_33196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (22))){
var state_33149__$1 = state_33149;
var statearr_33165_33197 = state_33149__$1;
(statearr_33165_33197[(2)] = null);

(statearr_33165_33197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (6))){
var inst_33090 = (state_33149[(13)]);
var inst_33099 = f.call(null,inst_33090);
var inst_33100 = cljs.core.seq.call(null,inst_33099);
var inst_33101 = inst_33100;
var inst_33102 = null;
var inst_33103 = (0);
var inst_33104 = (0);
var state_33149__$1 = (function (){var statearr_33166 = state_33149;
(statearr_33166[(8)] = inst_33101);

(statearr_33166[(9)] = inst_33104);

(statearr_33166[(11)] = inst_33103);

(statearr_33166[(12)] = inst_33102);

return statearr_33166;
})();
var statearr_33167_33198 = state_33149__$1;
(statearr_33167_33198[(2)] = null);

(statearr_33167_33198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (17))){
var inst_33115 = (state_33149[(7)]);
var inst_33119 = cljs.core.chunk_first.call(null,inst_33115);
var inst_33120 = cljs.core.chunk_rest.call(null,inst_33115);
var inst_33121 = cljs.core.count.call(null,inst_33119);
var inst_33101 = inst_33120;
var inst_33102 = inst_33119;
var inst_33103 = inst_33121;
var inst_33104 = (0);
var state_33149__$1 = (function (){var statearr_33168 = state_33149;
(statearr_33168[(8)] = inst_33101);

(statearr_33168[(9)] = inst_33104);

(statearr_33168[(11)] = inst_33103);

(statearr_33168[(12)] = inst_33102);

return statearr_33168;
})();
var statearr_33169_33199 = state_33149__$1;
(statearr_33169_33199[(2)] = null);

(statearr_33169_33199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (3))){
var inst_33147 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33149__$1,inst_33147);
} else {
if((state_val_33150 === (12))){
var inst_33135 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33170_33200 = state_33149__$1;
(statearr_33170_33200[(2)] = inst_33135);

(statearr_33170_33200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (2))){
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33149__$1,(4),in$);
} else {
if((state_val_33150 === (23))){
var inst_33143 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33171_33201 = state_33149__$1;
(statearr_33171_33201[(2)] = inst_33143);

(statearr_33171_33201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (19))){
var inst_33130 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33172_33202 = state_33149__$1;
(statearr_33172_33202[(2)] = inst_33130);

(statearr_33172_33202[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (11))){
var inst_33101 = (state_33149[(8)]);
var inst_33115 = (state_33149[(7)]);
var inst_33115__$1 = cljs.core.seq.call(null,inst_33101);
var state_33149__$1 = (function (){var statearr_33173 = state_33149;
(statearr_33173[(7)] = inst_33115__$1);

return statearr_33173;
})();
if(inst_33115__$1){
var statearr_33174_33203 = state_33149__$1;
(statearr_33174_33203[(1)] = (14));

} else {
var statearr_33175_33204 = state_33149__$1;
(statearr_33175_33204[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (9))){
var inst_33137 = (state_33149[(2)]);
var inst_33138 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33149__$1 = (function (){var statearr_33176 = state_33149;
(statearr_33176[(15)] = inst_33137);

return statearr_33176;
})();
if(cljs.core.truth_(inst_33138)){
var statearr_33177_33205 = state_33149__$1;
(statearr_33177_33205[(1)] = (21));

} else {
var statearr_33178_33206 = state_33149__$1;
(statearr_33178_33206[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (5))){
var inst_33093 = cljs.core.async.close_BANG_.call(null,out);
var state_33149__$1 = state_33149;
var statearr_33179_33207 = state_33149__$1;
(statearr_33179_33207[(2)] = inst_33093);

(statearr_33179_33207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (14))){
var inst_33115 = (state_33149[(7)]);
var inst_33117 = cljs.core.chunked_seq_QMARK_.call(null,inst_33115);
var state_33149__$1 = state_33149;
if(inst_33117){
var statearr_33180_33208 = state_33149__$1;
(statearr_33180_33208[(1)] = (17));

} else {
var statearr_33181_33209 = state_33149__$1;
(statearr_33181_33209[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (16))){
var inst_33133 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33182_33210 = state_33149__$1;
(statearr_33182_33210[(2)] = inst_33133);

(statearr_33182_33210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (10))){
var inst_33104 = (state_33149[(9)]);
var inst_33102 = (state_33149[(12)]);
var inst_33109 = cljs.core._nth.call(null,inst_33102,inst_33104);
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33149__$1,(13),out,inst_33109);
} else {
if((state_val_33150 === (18))){
var inst_33115 = (state_33149[(7)]);
var inst_33124 = cljs.core.first.call(null,inst_33115);
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33149__$1,(20),out,inst_33124);
} else {
if((state_val_33150 === (8))){
var inst_33104 = (state_33149[(9)]);
var inst_33103 = (state_33149[(11)]);
var inst_33106 = (inst_33104 < inst_33103);
var inst_33107 = inst_33106;
var state_33149__$1 = state_33149;
if(cljs.core.truth_(inst_33107)){
var statearr_33183_33211 = state_33149__$1;
(statearr_33183_33211[(1)] = (10));

} else {
var statearr_33184_33212 = state_33149__$1;
(statearr_33184_33212[(1)] = (11));

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
});})(c__31547__auto__))
;
return ((function (switch__31459__auto__,c__31547__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31460__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31460__auto____0 = (function (){
var statearr_33185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33185[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31460__auto__);

(statearr_33185[(1)] = (1));

return statearr_33185;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31460__auto____1 = (function (state_33149){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_33149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e33186){if((e33186 instanceof Object)){
var ex__31463__auto__ = e33186;
var statearr_33187_33213 = state_33149;
(statearr_33187_33213[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33214 = state_33149;
state_33149 = G__33214;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31460__auto__ = function(state_33149){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31460__auto____1.call(this,state_33149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31460__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31460__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__))
})();
var state__31549__auto__ = (function (){var statearr_33188 = f__31548__auto__.call(null);
(statearr_33188[(6)] = c__31547__auto__);

return statearr_33188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__))
);

return c__31547__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33216 = arguments.length;
switch (G__33216) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33219 = arguments.length;
switch (G__33219) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33222 = arguments.length;
switch (G__33222) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31547__auto___33269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33269,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___33269,out){
return (function (state_33246){
var state_val_33247 = (state_33246[(1)]);
if((state_val_33247 === (7))){
var inst_33241 = (state_33246[(2)]);
var state_33246__$1 = state_33246;
var statearr_33248_33270 = state_33246__$1;
(statearr_33248_33270[(2)] = inst_33241);

(statearr_33248_33270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (1))){
var inst_33223 = null;
var state_33246__$1 = (function (){var statearr_33249 = state_33246;
(statearr_33249[(7)] = inst_33223);

return statearr_33249;
})();
var statearr_33250_33271 = state_33246__$1;
(statearr_33250_33271[(2)] = null);

(statearr_33250_33271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (4))){
var inst_33226 = (state_33246[(8)]);
var inst_33226__$1 = (state_33246[(2)]);
var inst_33227 = (inst_33226__$1 == null);
var inst_33228 = cljs.core.not.call(null,inst_33227);
var state_33246__$1 = (function (){var statearr_33251 = state_33246;
(statearr_33251[(8)] = inst_33226__$1);

return statearr_33251;
})();
if(inst_33228){
var statearr_33252_33272 = state_33246__$1;
(statearr_33252_33272[(1)] = (5));

} else {
var statearr_33253_33273 = state_33246__$1;
(statearr_33253_33273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (6))){
var state_33246__$1 = state_33246;
var statearr_33254_33274 = state_33246__$1;
(statearr_33254_33274[(2)] = null);

(statearr_33254_33274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (3))){
var inst_33243 = (state_33246[(2)]);
var inst_33244 = cljs.core.async.close_BANG_.call(null,out);
var state_33246__$1 = (function (){var statearr_33255 = state_33246;
(statearr_33255[(9)] = inst_33243);

return statearr_33255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33246__$1,inst_33244);
} else {
if((state_val_33247 === (2))){
var state_33246__$1 = state_33246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33246__$1,(4),ch);
} else {
if((state_val_33247 === (11))){
var inst_33226 = (state_33246[(8)]);
var inst_33235 = (state_33246[(2)]);
var inst_33223 = inst_33226;
var state_33246__$1 = (function (){var statearr_33256 = state_33246;
(statearr_33256[(7)] = inst_33223);

(statearr_33256[(10)] = inst_33235);

return statearr_33256;
})();
var statearr_33257_33275 = state_33246__$1;
(statearr_33257_33275[(2)] = null);

(statearr_33257_33275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (9))){
var inst_33226 = (state_33246[(8)]);
var state_33246__$1 = state_33246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33246__$1,(11),out,inst_33226);
} else {
if((state_val_33247 === (5))){
var inst_33226 = (state_33246[(8)]);
var inst_33223 = (state_33246[(7)]);
var inst_33230 = cljs.core._EQ_.call(null,inst_33226,inst_33223);
var state_33246__$1 = state_33246;
if(inst_33230){
var statearr_33259_33276 = state_33246__$1;
(statearr_33259_33276[(1)] = (8));

} else {
var statearr_33260_33277 = state_33246__$1;
(statearr_33260_33277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (10))){
var inst_33238 = (state_33246[(2)]);
var state_33246__$1 = state_33246;
var statearr_33261_33278 = state_33246__$1;
(statearr_33261_33278[(2)] = inst_33238);

(statearr_33261_33278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33247 === (8))){
var inst_33223 = (state_33246[(7)]);
var tmp33258 = inst_33223;
var inst_33223__$1 = tmp33258;
var state_33246__$1 = (function (){var statearr_33262 = state_33246;
(statearr_33262[(7)] = inst_33223__$1);

return statearr_33262;
})();
var statearr_33263_33279 = state_33246__$1;
(statearr_33263_33279[(2)] = null);

(statearr_33263_33279[(1)] = (2));


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
});})(c__31547__auto___33269,out))
;
return ((function (switch__31459__auto__,c__31547__auto___33269,out){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_33264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33264[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_33264[(1)] = (1));

return statearr_33264;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_33246){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_33246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e33265){if((e33265 instanceof Object)){
var ex__31463__auto__ = e33265;
var statearr_33266_33280 = state_33246;
(statearr_33266_33280[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33281 = state_33246;
state_33246 = G__33281;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_33246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_33246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___33269,out))
})();
var state__31549__auto__ = (function (){var statearr_33267 = f__31548__auto__.call(null);
(statearr_33267[(6)] = c__31547__auto___33269);

return statearr_33267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33269,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33283 = arguments.length;
switch (G__33283) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31547__auto___33349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33349,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___33349,out){
return (function (state_33321){
var state_val_33322 = (state_33321[(1)]);
if((state_val_33322 === (7))){
var inst_33317 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33323_33350 = state_33321__$1;
(statearr_33323_33350[(2)] = inst_33317);

(statearr_33323_33350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (1))){
var inst_33284 = (new Array(n));
var inst_33285 = inst_33284;
var inst_33286 = (0);
var state_33321__$1 = (function (){var statearr_33324 = state_33321;
(statearr_33324[(7)] = inst_33286);

(statearr_33324[(8)] = inst_33285);

return statearr_33324;
})();
var statearr_33325_33351 = state_33321__$1;
(statearr_33325_33351[(2)] = null);

(statearr_33325_33351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (4))){
var inst_33289 = (state_33321[(9)]);
var inst_33289__$1 = (state_33321[(2)]);
var inst_33290 = (inst_33289__$1 == null);
var inst_33291 = cljs.core.not.call(null,inst_33290);
var state_33321__$1 = (function (){var statearr_33326 = state_33321;
(statearr_33326[(9)] = inst_33289__$1);

return statearr_33326;
})();
if(inst_33291){
var statearr_33327_33352 = state_33321__$1;
(statearr_33327_33352[(1)] = (5));

} else {
var statearr_33328_33353 = state_33321__$1;
(statearr_33328_33353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (15))){
var inst_33311 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33329_33354 = state_33321__$1;
(statearr_33329_33354[(2)] = inst_33311);

(statearr_33329_33354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (13))){
var state_33321__$1 = state_33321;
var statearr_33330_33355 = state_33321__$1;
(statearr_33330_33355[(2)] = null);

(statearr_33330_33355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (6))){
var inst_33286 = (state_33321[(7)]);
var inst_33307 = (inst_33286 > (0));
var state_33321__$1 = state_33321;
if(cljs.core.truth_(inst_33307)){
var statearr_33331_33356 = state_33321__$1;
(statearr_33331_33356[(1)] = (12));

} else {
var statearr_33332_33357 = state_33321__$1;
(statearr_33332_33357[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (3))){
var inst_33319 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33321__$1,inst_33319);
} else {
if((state_val_33322 === (12))){
var inst_33285 = (state_33321[(8)]);
var inst_33309 = cljs.core.vec.call(null,inst_33285);
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33321__$1,(15),out,inst_33309);
} else {
if((state_val_33322 === (2))){
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33321__$1,(4),ch);
} else {
if((state_val_33322 === (11))){
var inst_33301 = (state_33321[(2)]);
var inst_33302 = (new Array(n));
var inst_33285 = inst_33302;
var inst_33286 = (0);
var state_33321__$1 = (function (){var statearr_33333 = state_33321;
(statearr_33333[(7)] = inst_33286);

(statearr_33333[(8)] = inst_33285);

(statearr_33333[(10)] = inst_33301);

return statearr_33333;
})();
var statearr_33334_33358 = state_33321__$1;
(statearr_33334_33358[(2)] = null);

(statearr_33334_33358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (9))){
var inst_33285 = (state_33321[(8)]);
var inst_33299 = cljs.core.vec.call(null,inst_33285);
var state_33321__$1 = state_33321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33321__$1,(11),out,inst_33299);
} else {
if((state_val_33322 === (5))){
var inst_33289 = (state_33321[(9)]);
var inst_33286 = (state_33321[(7)]);
var inst_33285 = (state_33321[(8)]);
var inst_33294 = (state_33321[(11)]);
var inst_33293 = (inst_33285[inst_33286] = inst_33289);
var inst_33294__$1 = (inst_33286 + (1));
var inst_33295 = (inst_33294__$1 < n);
var state_33321__$1 = (function (){var statearr_33335 = state_33321;
(statearr_33335[(11)] = inst_33294__$1);

(statearr_33335[(12)] = inst_33293);

return statearr_33335;
})();
if(cljs.core.truth_(inst_33295)){
var statearr_33336_33359 = state_33321__$1;
(statearr_33336_33359[(1)] = (8));

} else {
var statearr_33337_33360 = state_33321__$1;
(statearr_33337_33360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (14))){
var inst_33314 = (state_33321[(2)]);
var inst_33315 = cljs.core.async.close_BANG_.call(null,out);
var state_33321__$1 = (function (){var statearr_33339 = state_33321;
(statearr_33339[(13)] = inst_33314);

return statearr_33339;
})();
var statearr_33340_33361 = state_33321__$1;
(statearr_33340_33361[(2)] = inst_33315);

(statearr_33340_33361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (10))){
var inst_33305 = (state_33321[(2)]);
var state_33321__$1 = state_33321;
var statearr_33341_33362 = state_33321__$1;
(statearr_33341_33362[(2)] = inst_33305);

(statearr_33341_33362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33322 === (8))){
var inst_33285 = (state_33321[(8)]);
var inst_33294 = (state_33321[(11)]);
var tmp33338 = inst_33285;
var inst_33285__$1 = tmp33338;
var inst_33286 = inst_33294;
var state_33321__$1 = (function (){var statearr_33342 = state_33321;
(statearr_33342[(7)] = inst_33286);

(statearr_33342[(8)] = inst_33285__$1);

return statearr_33342;
})();
var statearr_33343_33363 = state_33321__$1;
(statearr_33343_33363[(2)] = null);

(statearr_33343_33363[(1)] = (2));


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
});})(c__31547__auto___33349,out))
;
return ((function (switch__31459__auto__,c__31547__auto___33349,out){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_33344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33344[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_33344[(1)] = (1));

return statearr_33344;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_33321){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_33321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e33345){if((e33345 instanceof Object)){
var ex__31463__auto__ = e33345;
var statearr_33346_33364 = state_33321;
(statearr_33346_33364[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33365 = state_33321;
state_33321 = G__33365;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_33321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_33321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___33349,out))
})();
var state__31549__auto__ = (function (){var statearr_33347 = f__31548__auto__.call(null);
(statearr_33347[(6)] = c__31547__auto___33349);

return statearr_33347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33349,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33367 = arguments.length;
switch (G__33367) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31547__auto___33437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___33437,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___33437,out){
return (function (state_33409){
var state_val_33410 = (state_33409[(1)]);
if((state_val_33410 === (7))){
var inst_33405 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33411_33438 = state_33409__$1;
(statearr_33411_33438[(2)] = inst_33405);

(statearr_33411_33438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (1))){
var inst_33368 = [];
var inst_33369 = inst_33368;
var inst_33370 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33409__$1 = (function (){var statearr_33412 = state_33409;
(statearr_33412[(7)] = inst_33370);

(statearr_33412[(8)] = inst_33369);

return statearr_33412;
})();
var statearr_33413_33439 = state_33409__$1;
(statearr_33413_33439[(2)] = null);

(statearr_33413_33439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (4))){
var inst_33373 = (state_33409[(9)]);
var inst_33373__$1 = (state_33409[(2)]);
var inst_33374 = (inst_33373__$1 == null);
var inst_33375 = cljs.core.not.call(null,inst_33374);
var state_33409__$1 = (function (){var statearr_33414 = state_33409;
(statearr_33414[(9)] = inst_33373__$1);

return statearr_33414;
})();
if(inst_33375){
var statearr_33415_33440 = state_33409__$1;
(statearr_33415_33440[(1)] = (5));

} else {
var statearr_33416_33441 = state_33409__$1;
(statearr_33416_33441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (15))){
var inst_33399 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33417_33442 = state_33409__$1;
(statearr_33417_33442[(2)] = inst_33399);

(statearr_33417_33442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (13))){
var state_33409__$1 = state_33409;
var statearr_33418_33443 = state_33409__$1;
(statearr_33418_33443[(2)] = null);

(statearr_33418_33443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (6))){
var inst_33369 = (state_33409[(8)]);
var inst_33394 = inst_33369.length;
var inst_33395 = (inst_33394 > (0));
var state_33409__$1 = state_33409;
if(cljs.core.truth_(inst_33395)){
var statearr_33419_33444 = state_33409__$1;
(statearr_33419_33444[(1)] = (12));

} else {
var statearr_33420_33445 = state_33409__$1;
(statearr_33420_33445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (3))){
var inst_33407 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33409__$1,inst_33407);
} else {
if((state_val_33410 === (12))){
var inst_33369 = (state_33409[(8)]);
var inst_33397 = cljs.core.vec.call(null,inst_33369);
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33409__$1,(15),out,inst_33397);
} else {
if((state_val_33410 === (2))){
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33409__$1,(4),ch);
} else {
if((state_val_33410 === (11))){
var inst_33377 = (state_33409[(10)]);
var inst_33373 = (state_33409[(9)]);
var inst_33387 = (state_33409[(2)]);
var inst_33388 = [];
var inst_33389 = inst_33388.push(inst_33373);
var inst_33369 = inst_33388;
var inst_33370 = inst_33377;
var state_33409__$1 = (function (){var statearr_33421 = state_33409;
(statearr_33421[(11)] = inst_33387);

(statearr_33421[(7)] = inst_33370);

(statearr_33421[(8)] = inst_33369);

(statearr_33421[(12)] = inst_33389);

return statearr_33421;
})();
var statearr_33422_33446 = state_33409__$1;
(statearr_33422_33446[(2)] = null);

(statearr_33422_33446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (9))){
var inst_33369 = (state_33409[(8)]);
var inst_33385 = cljs.core.vec.call(null,inst_33369);
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33409__$1,(11),out,inst_33385);
} else {
if((state_val_33410 === (5))){
var inst_33377 = (state_33409[(10)]);
var inst_33373 = (state_33409[(9)]);
var inst_33370 = (state_33409[(7)]);
var inst_33377__$1 = f.call(null,inst_33373);
var inst_33378 = cljs.core._EQ_.call(null,inst_33377__$1,inst_33370);
var inst_33379 = cljs.core.keyword_identical_QMARK_.call(null,inst_33370,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33380 = (inst_33378) || (inst_33379);
var state_33409__$1 = (function (){var statearr_33423 = state_33409;
(statearr_33423[(10)] = inst_33377__$1);

return statearr_33423;
})();
if(cljs.core.truth_(inst_33380)){
var statearr_33424_33447 = state_33409__$1;
(statearr_33424_33447[(1)] = (8));

} else {
var statearr_33425_33448 = state_33409__$1;
(statearr_33425_33448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (14))){
var inst_33402 = (state_33409[(2)]);
var inst_33403 = cljs.core.async.close_BANG_.call(null,out);
var state_33409__$1 = (function (){var statearr_33427 = state_33409;
(statearr_33427[(13)] = inst_33402);

return statearr_33427;
})();
var statearr_33428_33449 = state_33409__$1;
(statearr_33428_33449[(2)] = inst_33403);

(statearr_33428_33449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (10))){
var inst_33392 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33429_33450 = state_33409__$1;
(statearr_33429_33450[(2)] = inst_33392);

(statearr_33429_33450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (8))){
var inst_33377 = (state_33409[(10)]);
var inst_33373 = (state_33409[(9)]);
var inst_33369 = (state_33409[(8)]);
var inst_33382 = inst_33369.push(inst_33373);
var tmp33426 = inst_33369;
var inst_33369__$1 = tmp33426;
var inst_33370 = inst_33377;
var state_33409__$1 = (function (){var statearr_33430 = state_33409;
(statearr_33430[(7)] = inst_33370);

(statearr_33430[(8)] = inst_33369__$1);

(statearr_33430[(14)] = inst_33382);

return statearr_33430;
})();
var statearr_33431_33451 = state_33409__$1;
(statearr_33431_33451[(2)] = null);

(statearr_33431_33451[(1)] = (2));


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
});})(c__31547__auto___33437,out))
;
return ((function (switch__31459__auto__,c__31547__auto___33437,out){
return (function() {
var cljs$core$async$state_machine__31460__auto__ = null;
var cljs$core$async$state_machine__31460__auto____0 = (function (){
var statearr_33432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33432[(0)] = cljs$core$async$state_machine__31460__auto__);

(statearr_33432[(1)] = (1));

return statearr_33432;
});
var cljs$core$async$state_machine__31460__auto____1 = (function (state_33409){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_33409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e33433){if((e33433 instanceof Object)){
var ex__31463__auto__ = e33433;
var statearr_33434_33452 = state_33409;
(statearr_33434_33452[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33453 = state_33409;
state_33409 = G__33453;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
cljs$core$async$state_machine__31460__auto__ = function(state_33409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31460__auto____1.call(this,state_33409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31460__auto____0;
cljs$core$async$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31460__auto____1;
return cljs$core$async$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___33437,out))
})();
var state__31549__auto__ = (function (){var statearr_33435 = f__31548__auto__.call(null);
(statearr_33435[(6)] = c__31547__auto___33437);

return statearr_33435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___33437,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1507562212636
