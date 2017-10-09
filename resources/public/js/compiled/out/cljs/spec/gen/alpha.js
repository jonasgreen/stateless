// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35486 = arguments.length;
var i__8840__auto___35487 = (0);
while(true){
if((i__8840__auto___35487 < len__8839__auto___35486)){
args__8846__auto__.push((arguments[i__8840__auto___35487]));

var G__35488 = (i__8840__auto___35487 + (1));
i__8840__auto___35487 = G__35488;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35485){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35485));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35490 = arguments.length;
var i__8840__auto___35491 = (0);
while(true){
if((i__8840__auto___35491 < len__8839__auto___35490)){
args__8846__auto__.push((arguments[i__8840__auto___35491]));

var G__35492 = (i__8840__auto___35491 + (1));
i__8840__auto___35491 = G__35492;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35489){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35489));
});

var g_QMARK__35493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_35494 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35493){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__35493))
,null));
var mkg_35495 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35493,g_35494){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__35493,g_35494))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35493,g_35494,mkg_35495){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35493).call(null,x);
});})(g_QMARK__35493,g_35494,mkg_35495))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35493,g_35494,mkg_35495){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35495).call(null,gfn);
});})(g_QMARK__35493,g_35494,mkg_35495))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35493,g_35494,mkg_35495){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35494).call(null,generator);
});})(g_QMARK__35493,g_35494,mkg_35495))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29882__auto___35515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29882__auto___35515){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35516 = arguments.length;
var i__8840__auto___35517 = (0);
while(true){
if((i__8840__auto___35517 < len__8839__auto___35516)){
args__8846__auto__.push((arguments[i__8840__auto___35517]));

var G__35518 = (i__8840__auto___35517 + (1));
i__8840__auto___35517 = G__35518;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35515))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35515){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35515),args);
});})(g__29882__auto___35515))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29882__auto___35515){
return (function (seq35496){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35496));
});})(g__29882__auto___35515))
;


var g__29882__auto___35519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29882__auto___35519){
return (function cljs$spec$gen$alpha$list(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35520 = arguments.length;
var i__8840__auto___35521 = (0);
while(true){
if((i__8840__auto___35521 < len__8839__auto___35520)){
args__8846__auto__.push((arguments[i__8840__auto___35521]));

var G__35522 = (i__8840__auto___35521 + (1));
i__8840__auto___35521 = G__35522;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35519))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35519){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35519),args);
});})(g__29882__auto___35519))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29882__auto___35519){
return (function (seq35497){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35497));
});})(g__29882__auto___35519))
;


var g__29882__auto___35523 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29882__auto___35523){
return (function cljs$spec$gen$alpha$map(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35524 = arguments.length;
var i__8840__auto___35525 = (0);
while(true){
if((i__8840__auto___35525 < len__8839__auto___35524)){
args__8846__auto__.push((arguments[i__8840__auto___35525]));

var G__35526 = (i__8840__auto___35525 + (1));
i__8840__auto___35525 = G__35526;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35523))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35523){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35523),args);
});})(g__29882__auto___35523))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29882__auto___35523){
return (function (seq35498){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35498));
});})(g__29882__auto___35523))
;


var g__29882__auto___35527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29882__auto___35527){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35528 = arguments.length;
var i__8840__auto___35529 = (0);
while(true){
if((i__8840__auto___35529 < len__8839__auto___35528)){
args__8846__auto__.push((arguments[i__8840__auto___35529]));

var G__35530 = (i__8840__auto___35529 + (1));
i__8840__auto___35529 = G__35530;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35527))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35527){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35527),args);
});})(g__29882__auto___35527))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29882__auto___35527){
return (function (seq35499){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35499));
});})(g__29882__auto___35527))
;


var g__29882__auto___35531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29882__auto___35531){
return (function cljs$spec$gen$alpha$set(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35532 = arguments.length;
var i__8840__auto___35533 = (0);
while(true){
if((i__8840__auto___35533 < len__8839__auto___35532)){
args__8846__auto__.push((arguments[i__8840__auto___35533]));

var G__35534 = (i__8840__auto___35533 + (1));
i__8840__auto___35533 = G__35534;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35531))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35531){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35531),args);
});})(g__29882__auto___35531))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29882__auto___35531){
return (function (seq35500){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35500));
});})(g__29882__auto___35531))
;


var g__29882__auto___35535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29882__auto___35535){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35536 = arguments.length;
var i__8840__auto___35537 = (0);
while(true){
if((i__8840__auto___35537 < len__8839__auto___35536)){
args__8846__auto__.push((arguments[i__8840__auto___35537]));

var G__35538 = (i__8840__auto___35537 + (1));
i__8840__auto___35537 = G__35538;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35535))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35535){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35535),args);
});})(g__29882__auto___35535))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29882__auto___35535){
return (function (seq35501){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35501));
});})(g__29882__auto___35535))
;


var g__29882__auto___35539 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29882__auto___35539){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35540 = arguments.length;
var i__8840__auto___35541 = (0);
while(true){
if((i__8840__auto___35541 < len__8839__auto___35540)){
args__8846__auto__.push((arguments[i__8840__auto___35541]));

var G__35542 = (i__8840__auto___35541 + (1));
i__8840__auto___35541 = G__35542;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35539))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35539){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35539),args);
});})(g__29882__auto___35539))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29882__auto___35539){
return (function (seq35502){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35502));
});})(g__29882__auto___35539))
;


var g__29882__auto___35543 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29882__auto___35543){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35544 = arguments.length;
var i__8840__auto___35545 = (0);
while(true){
if((i__8840__auto___35545 < len__8839__auto___35544)){
args__8846__auto__.push((arguments[i__8840__auto___35545]));

var G__35546 = (i__8840__auto___35545 + (1));
i__8840__auto___35545 = G__35546;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35543))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35543){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35543),args);
});})(g__29882__auto___35543))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29882__auto___35543){
return (function (seq35503){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35503));
});})(g__29882__auto___35543))
;


var g__29882__auto___35547 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29882__auto___35547){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35548 = arguments.length;
var i__8840__auto___35549 = (0);
while(true){
if((i__8840__auto___35549 < len__8839__auto___35548)){
args__8846__auto__.push((arguments[i__8840__auto___35549]));

var G__35550 = (i__8840__auto___35549 + (1));
i__8840__auto___35549 = G__35550;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35547))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35547){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35547),args);
});})(g__29882__auto___35547))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29882__auto___35547){
return (function (seq35504){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35504));
});})(g__29882__auto___35547))
;


var g__29882__auto___35551 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29882__auto___35551){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35552 = arguments.length;
var i__8840__auto___35553 = (0);
while(true){
if((i__8840__auto___35553 < len__8839__auto___35552)){
args__8846__auto__.push((arguments[i__8840__auto___35553]));

var G__35554 = (i__8840__auto___35553 + (1));
i__8840__auto___35553 = G__35554;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35551))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35551){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35551),args);
});})(g__29882__auto___35551))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29882__auto___35551){
return (function (seq35505){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35505));
});})(g__29882__auto___35551))
;


var g__29882__auto___35555 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29882__auto___35555){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35556 = arguments.length;
var i__8840__auto___35557 = (0);
while(true){
if((i__8840__auto___35557 < len__8839__auto___35556)){
args__8846__auto__.push((arguments[i__8840__auto___35557]));

var G__35558 = (i__8840__auto___35557 + (1));
i__8840__auto___35557 = G__35558;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35555))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35555){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35555),args);
});})(g__29882__auto___35555))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29882__auto___35555){
return (function (seq35506){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35506));
});})(g__29882__auto___35555))
;


var g__29882__auto___35559 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29882__auto___35559){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35560 = arguments.length;
var i__8840__auto___35561 = (0);
while(true){
if((i__8840__auto___35561 < len__8839__auto___35560)){
args__8846__auto__.push((arguments[i__8840__auto___35561]));

var G__35562 = (i__8840__auto___35561 + (1));
i__8840__auto___35561 = G__35562;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35559))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35559){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35559),args);
});})(g__29882__auto___35559))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29882__auto___35559){
return (function (seq35507){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35507));
});})(g__29882__auto___35559))
;


var g__29882__auto___35563 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29882__auto___35563){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35564 = arguments.length;
var i__8840__auto___35565 = (0);
while(true){
if((i__8840__auto___35565 < len__8839__auto___35564)){
args__8846__auto__.push((arguments[i__8840__auto___35565]));

var G__35566 = (i__8840__auto___35565 + (1));
i__8840__auto___35565 = G__35566;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35563))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35563){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35563),args);
});})(g__29882__auto___35563))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29882__auto___35563){
return (function (seq35508){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35508));
});})(g__29882__auto___35563))
;


var g__29882__auto___35567 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29882__auto___35567){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35568 = arguments.length;
var i__8840__auto___35569 = (0);
while(true){
if((i__8840__auto___35569 < len__8839__auto___35568)){
args__8846__auto__.push((arguments[i__8840__auto___35569]));

var G__35570 = (i__8840__auto___35569 + (1));
i__8840__auto___35569 = G__35570;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35567))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35567){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35567),args);
});})(g__29882__auto___35567))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29882__auto___35567){
return (function (seq35509){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35509));
});})(g__29882__auto___35567))
;


var g__29882__auto___35571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29882__auto___35571){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35572 = arguments.length;
var i__8840__auto___35573 = (0);
while(true){
if((i__8840__auto___35573 < len__8839__auto___35572)){
args__8846__auto__.push((arguments[i__8840__auto___35573]));

var G__35574 = (i__8840__auto___35573 + (1));
i__8840__auto___35573 = G__35574;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35571))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35571){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35571),args);
});})(g__29882__auto___35571))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29882__auto___35571){
return (function (seq35510){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35510));
});})(g__29882__auto___35571))
;


var g__29882__auto___35575 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29882__auto___35575){
return (function cljs$spec$gen$alpha$return(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35576 = arguments.length;
var i__8840__auto___35577 = (0);
while(true){
if((i__8840__auto___35577 < len__8839__auto___35576)){
args__8846__auto__.push((arguments[i__8840__auto___35577]));

var G__35578 = (i__8840__auto___35577 + (1));
i__8840__auto___35577 = G__35578;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35575))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35575){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35575),args);
});})(g__29882__auto___35575))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29882__auto___35575){
return (function (seq35511){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35511));
});})(g__29882__auto___35575))
;


var g__29882__auto___35579 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29882__auto___35579){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35580 = arguments.length;
var i__8840__auto___35581 = (0);
while(true){
if((i__8840__auto___35581 < len__8839__auto___35580)){
args__8846__auto__.push((arguments[i__8840__auto___35581]));

var G__35582 = (i__8840__auto___35581 + (1));
i__8840__auto___35581 = G__35582;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35579))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35579),args);
});})(g__29882__auto___35579))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29882__auto___35579){
return (function (seq35512){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35512));
});})(g__29882__auto___35579))
;


var g__29882__auto___35583 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29882__auto___35583){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35584 = arguments.length;
var i__8840__auto___35585 = (0);
while(true){
if((i__8840__auto___35585 < len__8839__auto___35584)){
args__8846__auto__.push((arguments[i__8840__auto___35585]));

var G__35586 = (i__8840__auto___35585 + (1));
i__8840__auto___35585 = G__35586;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35583))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35583),args);
});})(g__29882__auto___35583))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29882__auto___35583){
return (function (seq35513){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35513));
});})(g__29882__auto___35583))
;


var g__29882__auto___35587 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29882__auto___35587){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35588 = arguments.length;
var i__8840__auto___35589 = (0);
while(true){
if((i__8840__auto___35589 < len__8839__auto___35588)){
args__8846__auto__.push((arguments[i__8840__auto___35589]));

var G__35590 = (i__8840__auto___35589 + (1));
i__8840__auto___35589 = G__35590;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29882__auto___35587))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29882__auto___35587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29882__auto___35587),args);
});})(g__29882__auto___35587))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29882__auto___35587){
return (function (seq35514){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35514));
});})(g__29882__auto___35587))
;

var g__29895__auto___35612 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29895__auto___35612){
return (function cljs$spec$gen$alpha$any(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35613 = arguments.length;
var i__8840__auto___35614 = (0);
while(true){
if((i__8840__auto___35614 < len__8839__auto___35613)){
args__8846__auto__.push((arguments[i__8840__auto___35614]));

var G__35615 = (i__8840__auto___35614 + (1));
i__8840__auto___35614 = G__35615;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35612))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35612){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35612);
});})(g__29895__auto___35612))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29895__auto___35612){
return (function (seq35591){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35591));
});})(g__29895__auto___35612))
;


var g__29895__auto___35616 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29895__auto___35616){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35617 = arguments.length;
var i__8840__auto___35618 = (0);
while(true){
if((i__8840__auto___35618 < len__8839__auto___35617)){
args__8846__auto__.push((arguments[i__8840__auto___35618]));

var G__35619 = (i__8840__auto___35618 + (1));
i__8840__auto___35618 = G__35619;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35616))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35616){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35616);
});})(g__29895__auto___35616))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29895__auto___35616){
return (function (seq35592){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35592));
});})(g__29895__auto___35616))
;


var g__29895__auto___35620 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29895__auto___35620){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35621 = arguments.length;
var i__8840__auto___35622 = (0);
while(true){
if((i__8840__auto___35622 < len__8839__auto___35621)){
args__8846__auto__.push((arguments[i__8840__auto___35622]));

var G__35623 = (i__8840__auto___35622 + (1));
i__8840__auto___35622 = G__35623;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35620))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35620){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35620);
});})(g__29895__auto___35620))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29895__auto___35620){
return (function (seq35593){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35593));
});})(g__29895__auto___35620))
;


var g__29895__auto___35624 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29895__auto___35624){
return (function cljs$spec$gen$alpha$char(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35625 = arguments.length;
var i__8840__auto___35626 = (0);
while(true){
if((i__8840__auto___35626 < len__8839__auto___35625)){
args__8846__auto__.push((arguments[i__8840__auto___35626]));

var G__35627 = (i__8840__auto___35626 + (1));
i__8840__auto___35626 = G__35627;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35624))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35624){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35624);
});})(g__29895__auto___35624))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29895__auto___35624){
return (function (seq35594){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35594));
});})(g__29895__auto___35624))
;


var g__29895__auto___35628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29895__auto___35628){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35629 = arguments.length;
var i__8840__auto___35630 = (0);
while(true){
if((i__8840__auto___35630 < len__8839__auto___35629)){
args__8846__auto__.push((arguments[i__8840__auto___35630]));

var G__35631 = (i__8840__auto___35630 + (1));
i__8840__auto___35630 = G__35631;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35628))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35628){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35628);
});})(g__29895__auto___35628))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29895__auto___35628){
return (function (seq35595){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35595));
});})(g__29895__auto___35628))
;


var g__29895__auto___35632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29895__auto___35632){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35633 = arguments.length;
var i__8840__auto___35634 = (0);
while(true){
if((i__8840__auto___35634 < len__8839__auto___35633)){
args__8846__auto__.push((arguments[i__8840__auto___35634]));

var G__35635 = (i__8840__auto___35634 + (1));
i__8840__auto___35634 = G__35635;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35632))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35632){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35632);
});})(g__29895__auto___35632))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29895__auto___35632){
return (function (seq35596){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35596));
});})(g__29895__auto___35632))
;


var g__29895__auto___35636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29895__auto___35636){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35637 = arguments.length;
var i__8840__auto___35638 = (0);
while(true){
if((i__8840__auto___35638 < len__8839__auto___35637)){
args__8846__auto__.push((arguments[i__8840__auto___35638]));

var G__35639 = (i__8840__auto___35638 + (1));
i__8840__auto___35638 = G__35639;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35636))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35636){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35636);
});})(g__29895__auto___35636))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29895__auto___35636){
return (function (seq35597){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35597));
});})(g__29895__auto___35636))
;


var g__29895__auto___35640 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29895__auto___35640){
return (function cljs$spec$gen$alpha$double(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35641 = arguments.length;
var i__8840__auto___35642 = (0);
while(true){
if((i__8840__auto___35642 < len__8839__auto___35641)){
args__8846__auto__.push((arguments[i__8840__auto___35642]));

var G__35643 = (i__8840__auto___35642 + (1));
i__8840__auto___35642 = G__35643;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35640))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35640){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35640);
});})(g__29895__auto___35640))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29895__auto___35640){
return (function (seq35598){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35598));
});})(g__29895__auto___35640))
;


var g__29895__auto___35644 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29895__auto___35644){
return (function cljs$spec$gen$alpha$int(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35645 = arguments.length;
var i__8840__auto___35646 = (0);
while(true){
if((i__8840__auto___35646 < len__8839__auto___35645)){
args__8846__auto__.push((arguments[i__8840__auto___35646]));

var G__35647 = (i__8840__auto___35646 + (1));
i__8840__auto___35646 = G__35647;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35644))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35644){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35644);
});})(g__29895__auto___35644))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29895__auto___35644){
return (function (seq35599){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35599));
});})(g__29895__auto___35644))
;


var g__29895__auto___35648 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29895__auto___35648){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35649 = arguments.length;
var i__8840__auto___35650 = (0);
while(true){
if((i__8840__auto___35650 < len__8839__auto___35649)){
args__8846__auto__.push((arguments[i__8840__auto___35650]));

var G__35651 = (i__8840__auto___35650 + (1));
i__8840__auto___35650 = G__35651;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35648))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35648){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35648);
});})(g__29895__auto___35648))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29895__auto___35648){
return (function (seq35600){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35600));
});})(g__29895__auto___35648))
;


var g__29895__auto___35652 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29895__auto___35652){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35653 = arguments.length;
var i__8840__auto___35654 = (0);
while(true){
if((i__8840__auto___35654 < len__8839__auto___35653)){
args__8846__auto__.push((arguments[i__8840__auto___35654]));

var G__35655 = (i__8840__auto___35654 + (1));
i__8840__auto___35654 = G__35655;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35652))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35652){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35652);
});})(g__29895__auto___35652))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29895__auto___35652){
return (function (seq35601){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35601));
});})(g__29895__auto___35652))
;


var g__29895__auto___35656 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29895__auto___35656){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35657 = arguments.length;
var i__8840__auto___35658 = (0);
while(true){
if((i__8840__auto___35658 < len__8839__auto___35657)){
args__8846__auto__.push((arguments[i__8840__auto___35658]));

var G__35659 = (i__8840__auto___35658 + (1));
i__8840__auto___35658 = G__35659;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35656))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35656){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35656);
});})(g__29895__auto___35656))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29895__auto___35656){
return (function (seq35602){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35602));
});})(g__29895__auto___35656))
;


var g__29895__auto___35660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29895__auto___35660){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35661 = arguments.length;
var i__8840__auto___35662 = (0);
while(true){
if((i__8840__auto___35662 < len__8839__auto___35661)){
args__8846__auto__.push((arguments[i__8840__auto___35662]));

var G__35663 = (i__8840__auto___35662 + (1));
i__8840__auto___35662 = G__35663;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35660))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35660){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35660);
});})(g__29895__auto___35660))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29895__auto___35660){
return (function (seq35603){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35603));
});})(g__29895__auto___35660))
;


var g__29895__auto___35664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29895__auto___35664){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35665 = arguments.length;
var i__8840__auto___35666 = (0);
while(true){
if((i__8840__auto___35666 < len__8839__auto___35665)){
args__8846__auto__.push((arguments[i__8840__auto___35666]));

var G__35667 = (i__8840__auto___35666 + (1));
i__8840__auto___35666 = G__35667;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35664))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35664){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35664);
});})(g__29895__auto___35664))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29895__auto___35664){
return (function (seq35604){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35604));
});})(g__29895__auto___35664))
;


var g__29895__auto___35668 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29895__auto___35668){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35669 = arguments.length;
var i__8840__auto___35670 = (0);
while(true){
if((i__8840__auto___35670 < len__8839__auto___35669)){
args__8846__auto__.push((arguments[i__8840__auto___35670]));

var G__35671 = (i__8840__auto___35670 + (1));
i__8840__auto___35670 = G__35671;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35668))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35668){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35668);
});})(g__29895__auto___35668))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29895__auto___35668){
return (function (seq35605){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35605));
});})(g__29895__auto___35668))
;


var g__29895__auto___35672 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29895__auto___35672){
return (function cljs$spec$gen$alpha$string(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35673 = arguments.length;
var i__8840__auto___35674 = (0);
while(true){
if((i__8840__auto___35674 < len__8839__auto___35673)){
args__8846__auto__.push((arguments[i__8840__auto___35674]));

var G__35675 = (i__8840__auto___35674 + (1));
i__8840__auto___35674 = G__35675;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35672))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35672){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35672);
});})(g__29895__auto___35672))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29895__auto___35672){
return (function (seq35606){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35606));
});})(g__29895__auto___35672))
;


var g__29895__auto___35676 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29895__auto___35676){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35677 = arguments.length;
var i__8840__auto___35678 = (0);
while(true){
if((i__8840__auto___35678 < len__8839__auto___35677)){
args__8846__auto__.push((arguments[i__8840__auto___35678]));

var G__35679 = (i__8840__auto___35678 + (1));
i__8840__auto___35678 = G__35679;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35676))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35676){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35676);
});})(g__29895__auto___35676))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29895__auto___35676){
return (function (seq35607){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35607));
});})(g__29895__auto___35676))
;


var g__29895__auto___35680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29895__auto___35680){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35681 = arguments.length;
var i__8840__auto___35682 = (0);
while(true){
if((i__8840__auto___35682 < len__8839__auto___35681)){
args__8846__auto__.push((arguments[i__8840__auto___35682]));

var G__35683 = (i__8840__auto___35682 + (1));
i__8840__auto___35682 = G__35683;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35680))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35680){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35680);
});})(g__29895__auto___35680))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29895__auto___35680){
return (function (seq35608){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35608));
});})(g__29895__auto___35680))
;


var g__29895__auto___35684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29895__auto___35684){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35685 = arguments.length;
var i__8840__auto___35686 = (0);
while(true){
if((i__8840__auto___35686 < len__8839__auto___35685)){
args__8846__auto__.push((arguments[i__8840__auto___35686]));

var G__35687 = (i__8840__auto___35686 + (1));
i__8840__auto___35686 = G__35687;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35684))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35684){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35684);
});})(g__29895__auto___35684))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29895__auto___35684){
return (function (seq35609){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35609));
});})(g__29895__auto___35684))
;


var g__29895__auto___35688 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29895__auto___35688){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35689 = arguments.length;
var i__8840__auto___35690 = (0);
while(true){
if((i__8840__auto___35690 < len__8839__auto___35689)){
args__8846__auto__.push((arguments[i__8840__auto___35690]));

var G__35691 = (i__8840__auto___35690 + (1));
i__8840__auto___35690 = G__35691;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35688))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35688){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35688);
});})(g__29895__auto___35688))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29895__auto___35688){
return (function (seq35610){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35610));
});})(g__29895__auto___35688))
;


var g__29895__auto___35692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29895__auto___35692){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35693 = arguments.length;
var i__8840__auto___35694 = (0);
while(true){
if((i__8840__auto___35694 < len__8839__auto___35693)){
args__8846__auto__.push((arguments[i__8840__auto___35694]));

var G__35695 = (i__8840__auto___35694 + (1));
i__8840__auto___35694 = G__35695;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});})(g__29895__auto___35692))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29895__auto___35692){
return (function (args){
return cljs.core.deref.call(null,g__29895__auto___35692);
});})(g__29895__auto___35692))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29895__auto___35692){
return (function (seq35611){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35611));
});})(g__29895__auto___35692))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__8846__auto__ = [];
var len__8839__auto___35698 = arguments.length;
var i__8840__auto___35699 = (0);
while(true){
if((i__8840__auto___35699 < len__8839__auto___35698)){
args__8846__auto__.push((arguments[i__8840__auto___35699]));

var G__35700 = (i__8840__auto___35699 + (1));
i__8840__auto___35699 = G__35700;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35696_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35696_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35697){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35697));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35701_SHARP_){
return (new Date(p1__35701_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1507562215531
