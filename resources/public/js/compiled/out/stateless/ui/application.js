// Compiled by ClojureScript 1.9.946 {}
goog.provide('stateless.ui.application');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('stateless.ui.styles');
goog.require('stateless.state');
goog.require('stateless.ui.contact_tab');
goog.require('stateless.ui.about_tab');
stateless.ui.application.m_about = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ABOUT",new cljs.core.Keyword(null,"render","render",-1408033454),(function (ctx){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stateless.ui.contact_tab.render], null);
})], null);
stateless.ui.application.m_contact = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"CONTACT",new cljs.core.Keyword(null,"render","render",-1408033454),(function (ctx){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stateless.ui.about_tab.render], null);
})], null);
stateless.ui.application.m_items = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stateless.ui.application.m_about,stateless.ui.application.m_contact], null);
stateless.ui.application.menu_item = (function stateless$ui$application$menu_item(item,selected,select){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(selected)){
return null;
} else {
return select.call(null,item);
}
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,stateless.ui.styles.menu_item_style,(cljs.core.truth_(selected)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"auto","auto",-566279492)], null):null))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null);
});
stateless.ui.application.render = (function stateless$ui$application$render(_){
var local_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (local_state){
return (function (state){
cljs.core.println.call(null,"RENDER APP");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stateless.ui.about_tab.render], null)], null);
});
;})(local_state))
});

//# sourceMappingURL=application.js.map?rel=1507562209133
