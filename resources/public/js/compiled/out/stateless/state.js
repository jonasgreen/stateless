// Compiled by ClojureScript 1.9.946 {}
goog.provide('stateless.state');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof stateless.state.state !== 'undefined'){
} else {
stateless.state.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"system","system",-29381724),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),null,new cljs.core.Keyword(null,"about","about",1423892543),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"contact","contact",609093372),cljs.core.PersistentArrayMap.EMPTY], null));
}
stateless.state.subscribe = (function stateless$state$subscribe(path){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,stateless.state.state),path);
}));
});

//# sourceMappingURL=state.js.map?rel=1507562209068
