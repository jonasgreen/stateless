// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9734__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9735__i = 0, G__9735__a = new Array(arguments.length -  0);
while (G__9735__i < G__9735__a.length) {G__9735__a[G__9735__i] = arguments[G__9735__i + 0]; ++G__9735__i;}
  args = new cljs.core.IndexedSeq(G__9735__a,0,null);
} 
return G__9734__delegate.call(this,args);};
G__9734.cljs$lang$maxFixedArity = 0;
G__9734.cljs$lang$applyTo = (function (arglist__9736){
var args = cljs.core.seq(arglist__9736);
return G__9734__delegate(args);
});
G__9734.cljs$core$IFn$_invoke$arity$variadic = G__9734__delegate;
return G__9734;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9737__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9738__i = 0, G__9738__a = new Array(arguments.length -  0);
while (G__9738__i < G__9738__a.length) {G__9738__a[G__9738__i] = arguments[G__9738__i + 0]; ++G__9738__i;}
  args = new cljs.core.IndexedSeq(G__9738__a,0,null);
} 
return G__9737__delegate.call(this,args);};
G__9737.cljs$lang$maxFixedArity = 0;
G__9737.cljs$lang$applyTo = (function (arglist__9739){
var args = cljs.core.seq(arglist__9739);
return G__9737__delegate(args);
});
G__9737.cljs$core$IFn$_invoke$arity$variadic = G__9737__delegate;
return G__9737;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1507562165861
