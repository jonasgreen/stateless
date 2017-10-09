// Compiled by ClojureScript 1.9.946 {}
goog.provide('stateless.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('airboss.core');
goog.require('stateless.ui.application');
goog.require('stateless.state');
stateless.core.on_js_reload = (function stateless$core$on_js_reload(){
return cljs.core.swap_BANG_.call(null,stateless.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.Keyword(null,"figwheel-reloads","figwheel-reloads",-468153976)], null),cljs.core.inc);
});
stateless.core.render = (function stateless$core$render(s){
return (function (s__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stateless.ui.application.render,cljs.core.deref.call(null,s__$1)], null);
});
});
stateless.core.main = (function stateless$core$main(){
cljs.core.enable_console_print_BANG_.call(null);

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stateless.core.render,stateless.state.state], null),document.getElementById("application"));

airboss.core.load_state_viewer.call(null,stateless.state.state);

return airboss.core.load_design_viewer.call(null);
});

//# sourceMappingURL=core.js.map?rel=1507562210339
