// Compiled by ClojureScript 1.9.946 {}
goog.provide('airboss.core');
goog.require('cljs.core');
goog.require('airboss.state_view');
goog.require('airboss.design_view');
airboss.core.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
airboss.core.load_state_viewer = (function airboss$core$load_state_viewer(m){
if(cljs.core.truth_(new cljs.core.Keyword(null,"state-viewer-is-loaded","state-viewer-is-loaded",-1974425777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,airboss.core.state)))){
return console.warn("trying to load airboss.state-viewer multiple times");
} else {
cljs.core.swap_BANG_.call(null,airboss.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"state-viewer-is-loaded","state-viewer-is-loaded",-1974425777),true);

return airboss.state_view.load.call(null,m,cljs.core.PersistentArrayMap.EMPTY);
}
});
airboss.core.load_design_viewer = (function airboss$core$load_design_viewer(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"design-viewer-is-loaded","design-viewer-is-loaded",-598077689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,airboss.core.state)))){
return console.warn("trying to load airboss.design-viewer multiple times");
} else {
cljs.core.swap_BANG_.call(null,airboss.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"design-viewer-is-loaded","design-viewer-is-loaded",-598077689),true);

return airboss.design_view.load.call(null);
}
});

//# sourceMappingURL=core.js.map?rel=1507562210323
