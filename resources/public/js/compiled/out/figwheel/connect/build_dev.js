// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('stateless.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37053__delegate = function (x){
if(cljs.core.truth_(stateless.core.on_js_reload)){
return cljs.core.apply.call(null,stateless.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'stateless.core/on-js-reload' is missing");
}
};
var G__37053 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__37054__i = 0, G__37054__a = new Array(arguments.length -  0);
while (G__37054__i < G__37054__a.length) {G__37054__a[G__37054__i] = arguments[G__37054__i + 0]; ++G__37054__i;}
  x = new cljs.core.IndexedSeq(G__37054__a,0,null);
} 
return G__37053__delegate.call(this,x);};
G__37053.cljs$lang$maxFixedArity = 0;
G__37053.cljs$lang$applyTo = (function (arglist__37055){
var x = cljs.core.seq(arglist__37055);
return G__37053__delegate(x);
});
G__37053.cljs$core$IFn$_invoke$arity$variadic = G__37053__delegate;
return G__37053;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1507562217157
