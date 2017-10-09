// Compiled by ClojureScript 1.9.946 {}
goog.provide('airboss.state_view');
goog.require('cljs.core');
goog.require('airboss.utils');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('airboss.state_editor');
goog.require('clojure.walk');
airboss.state_view.search_field_id = "airbus-state_viewer_search_field";
airboss.state_view.local_storage_id = "airboss-state-viewer";
airboss.state_view.panel_id = "airbus-state_viewer_panel";
airboss.state_view.nt = (function airboss$state_view$nt(n,t){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"type?","type?",-1257087559),t], null);
});
airboss.state_view.types = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_view.nt.call(null,"Map",cljs.core.map_QMARK_),airboss.state_view.nt.call(null,"Vector",cljs.core.vector_QMARK_),airboss.state_view.nt.call(null,"Lazy Sequence",(function (v){
return (v instanceof cljs.core.LazySeq);
})),airboss.state_view.nt.call(null,"Sequence",cljs.core.seq_QMARK_),airboss.state_view.nt.call(null,"nil",cljs.core.nil_QMARK_),airboss.state_view.nt.call(null,"String",cljs.core.string_QMARK_),airboss.state_view.nt.call(null,"Number",cljs.core.number_QMARK_),airboss.state_view.nt.call(null,"Boolean",cljs.core.boolean_QMARK_),airboss.state_view.nt.call(null,"Keyword",cljs.core.keyword_QMARK_),airboss.state_view.nt.call(null,"Symbol",cljs.core.symbol_QMARK_),airboss.state_view.nt.call(null,"Reaction (reagent)",(function (v){
return (v instanceof reagent.ratom.Reaction);
})),airboss.state_view.nt.call(null,"RAtom (reagent)",(function (v){
return (v instanceof reagent.ratom.RAtom);
})),airboss.state_view.nt.call(null,"RCursor (reagent)",(function (v){
return (v instanceof reagent.ratom.RCursor);
})),airboss.state_view.nt.call(null,"Atom",(function (v){
return (v instanceof cljs.core.Atom);
})),airboss.state_view.nt.call(null,"JavaScript-Object",(function (v){
return (v instanceof Object);
})),airboss.state_view.nt.call(null,"Unknown",(function (_){
return true;
}))], null);
airboss.state_view.postition_styles_panel = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"right","right",-452581833),(function (size){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),size], null);
}),new cljs.core.Keyword(null,"left","left",-399115937),(function (size){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),size], null);
}),new cljs.core.Keyword(null,"up","up",-269712113),(function (size){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),size], null);
}),new cljs.core.Keyword(null,"down","down",1565245570),(function (size){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),size], null);
}),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),(function (_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null);
})], null);
airboss.state_view.style_panel = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100000),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"background","background",-863952629),"rgba(66, 66, 66, 0.93)",new cljs.core.Keyword(null,"color","color",1011675173),"rgb(201, 201, 201)",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 5px 5px rgba(101,101,101, 0.5)"], null);
airboss.state_view.search_field_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["rgba(175, 207, 249, 0.7)",(25),(14),"100%","rgba(46, 46, 46, 0.93)",(6),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),"1px solid rgb(81, 81, 81)"]);
airboss.state_view.style_row = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"line-height","line-height",1870784992),(1),new cljs.core.Keyword(null,"height","height",1025178622),(25),new cljs.core.Keyword(null,"padding","padding",1660304693),(6)], null);
airboss.state_view.default_hide_key = new cljs.core.Keyword(null,"ESC","ESC",-359173500);
airboss.state_view.default_show_key = new cljs.core.Keyword(null,"F12","F12",383855374);
airboss.state_view.default_setup = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"key-width","key-width",-35650876),new cljs.core.Keyword(null,"key-code-hide","key-code-hide",-1693741656),new cljs.core.Keyword(null,"key-code-show","key-code-show",-1186601684),new cljs.core.Keyword(null,"editing-row","editing-row",-1403021395),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"tab-width","tab-width",-229299663),new cljs.core.Keyword(null,"open-rows","open-rows",-413464554),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"filter-text","filter-text",-381699202)],[(200),airboss.state_view.default_hide_key,airboss.state_view.default_show_key,null,"45%",(200),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),(3),""]);
airboss.state_view.dom_id_path = (function airboss$state_view$dom_id_path(p){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,["state-viewer",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('')))].join('');
});
airboss.state_view.dom_id_model = (function airboss$state_view$dom_id_model(m){
return airboss.state_view.dom_id_path.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(m));
});
airboss.state_view.atom_QMARK_ = (function airboss$state_view$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
}
});
airboss.state_view.container_QMARK_ = (function airboss$state_view$container_QMARK_(x){
return cljs.core.seqable_QMARK_.call(null,(cljs.core.truth_(airboss.state_view.atom_QMARK_.call(null,x))?cljs.core.deref.call(null,x):x));
});
airboss.state_view.get_keys = (function airboss$state_view$get_keys(value){
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.sort_by.call(null,cljs.core.str,cljs.core.keys.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.sort.call(null,cljs.core.mapv.call(null,cljs.core.identity,cljs.core.range.call(null,cljs.core.count.call(null,value))));
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
});
airboss.state_view.open_QMARK_ = (function airboss$state_view$open_QMARK_(state_atom,path){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"open-rows","open-rows",-413464554).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom)),path);
});
airboss.state_view.editing_QMARK_ = (function airboss$state_view$editing_QMARK_(state_atom,path){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing-row","editing-row",-1403021395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom)),path);
});
airboss.state_view.close_row = (function airboss$state_view$close_row(state_atom,path){
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-rows","open-rows",-413464554)], null),cljs.core.disj,path);
}
});
airboss.state_view.focus = (function airboss$state_view$focus(dom_id){
var temp__4657__auto__ = goog.dom.getElement(dom_id);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
airboss.utils.scroll_into_view.call(null,node,goog.dom.getElement(airboss.state_view.panel_id));

return node.focus();
} else {
return null;
}
});
airboss.state_view.focus_row = (function airboss$state_view$focus_row(rm){
return airboss.state_view.focus.call(null,airboss.state_view.dom_id_model.call(null,rm));
});
airboss.state_view.raw_data = (function airboss$state_view$raw_data(data){
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return cljs.core.deref.call(null,data);
} else {
if(cljs.core._EQ_.call(null,cljs.core.LazySeq,cljs.core.type.call(null,data))){
return cljs.core.vec.call(null,data);
} else {
if(cljs.core.set_QMARK_.call(null,data)){
return cljs.core.vec.call(null,data);
} else {
return data;

}
}
}
});
airboss.state_view.get_data = (function airboss$state_view$get_data(path,data){
var p = path;
var d = airboss.state_view.raw_data.call(null,data);
while(true){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,p),d], null)))){
return d;
} else {
var G__30423 = cljs.core.rest.call(null,p);
var G__30424 = cljs.core.get.call(null,airboss.state_view.raw_data.call(null,d),cljs.core.first.call(null,p));
p = G__30423;
d = G__30424;
continue;
}
break;
}
});
airboss.state_view.contains_string = (function airboss$state_view$contains_string(filter_text,s){
var f = cljs.core.re_find.call(null,RegExp(filter_text,"i"),s);
return !(clojure.string.blank_QMARK_.call(null,f));
});
airboss.state_view.index_of_model = (function airboss$state_view$index_of_model(models,m){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (i,m1){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(m1))){
return i;
} else {
return null;
}
}),models));
});
airboss.state_view.update_position = (function airboss$state_view$update_position(state_atom,position){
var last_p = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var new_p = (((cljs.core._EQ_.call(null,last_p,new cljs.core.Keyword(null,"left","left",-399115937))) && (cljs.core._EQ_.call(null,position,new cljs.core.Keyword(null,"right","right",-452581833))))?new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054):(((cljs.core._EQ_.call(null,last_p,new cljs.core.Keyword(null,"right","right",-452581833))) && (cljs.core._EQ_.call(null,position,new cljs.core.Keyword(null,"left","left",-399115937))))?new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054):(((cljs.core._EQ_.call(null,last_p,new cljs.core.Keyword(null,"up","up",-269712113))) && (cljs.core._EQ_.call(null,position,new cljs.core.Keyword(null,"down","down",1565245570))))?new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054):(((cljs.core._EQ_.call(null,last_p,new cljs.core.Keyword(null,"down","down",1565245570))) && (cljs.core._EQ_.call(null,position,new cljs.core.Keyword(null,"up","up",-269712113))))?new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054):position
))));
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),new_p);
});
airboss.state_view.mk_dispatcher = (function (){var handlers_atom = cljs.core.atom.call(null,null);
var h_executer = ((function (handlers_atom){
return (function() { 
var G__30431__delegate = function (path,args){
var temp__4655__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,handlers_atom),path);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return cljs.core.apply.call(null,f,args);
} else {
cljs.core.println.call(null,path,args);

return console.warn("Unable to dispatch ",path," with ",args);
}
};
var G__30431 = function (path,var_args){
var args = null;
if (arguments.length > 1) {
var G__30432__i = 0, G__30432__a = new Array(arguments.length -  1);
while (G__30432__i < G__30432__a.length) {G__30432__a[G__30432__i] = arguments[G__30432__i + 1]; ++G__30432__i;}
  args = new cljs.core.IndexedSeq(G__30432__a,0,null);
} 
return G__30431__delegate.call(this,path,args);};
G__30431.cljs$lang$maxFixedArity = 1;
G__30431.cljs$lang$applyTo = (function (arglist__30433){
var path = cljs.core.first(arglist__30433);
var args = cljs.core.rest(arglist__30433);
return G__30431__delegate(path,args);
});
G__30431.cljs$core$IFn$_invoke$arity$variadic = G__30431__delegate;
return G__30431;
})()
;})(handlers_atom))
;
return ((function (handlers_atom,h_executer){
return (function (data_atom,models,state_atom,last_focus_atom){
cljs.core.reset_BANG_.call(null,handlers_atom,cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"move-down","move-down",-1149356017)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"move-right","move-right",1661359569)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"move-down","move-down",-1149356017)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"stop-edit","stop-edit",-55380964)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"move-down","move-down",-1149356017)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"start-edit","start-edit",2031179152)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"open","open",-1763596448)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"change-value","change-value",316989153)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"move-up","move-up",-1153137133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"move-up","move-up",-1153137133)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"close","close",1835149582)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"on-search","on-search",-1282068148)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"move-left","move-left",-271562811)], null)],[((function (handlers_atom,h_executer){
return (function (rm){
var index = airboss.state_view.index_of_model.call(null,models,rm);
if((cljs.core.count.call(null,models) > (index - (1)))){
return airboss.state_view.focus_row.call(null,cljs.core.get.call(null,models,(index + (1))));
} else {
return null;
}
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (){
return airboss.state_view.update_position.call(null,state_atom,new cljs.core.Keyword(null,"right","right",-452581833));
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (){
return airboss.state_view.update_position.call(null,state_atom,new cljs.core.Keyword(null,"down","down",1565245570));
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (rm){
return cljs.core.swap_BANG_.call(null,last_focus_atom,cljs.core.assoc,new cljs.core.Keyword(null,"last-focus","last-focus",1297835140),airboss.state_view.dom_id_model.call(null,rm),new cljs.core.Keyword(null,"rm","rm",-1641953697),rm);
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (rm){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.dissoc,new cljs.core.Keyword(null,"editing-row","editing-row",-1403021395));

return airboss.state_view.focus_row.call(null,rm);
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (){
return airboss.state_view.focus_row.call(null,cljs.core.first.call(null,models));
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (rm){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"editing-row","editing-row",-1403021395),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(rm));
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (p__30425){
var map__30426 = p__30425;
var map__30426__$1 = ((((!((map__30426 == null)))?((((map__30426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30426):map__30426);
var path = cljs.core.get.call(null,map__30426__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.call(null,map__30426__$1,new cljs.core.Keyword(null,"value","value",305978217));
var c = airboss.state_view.container_QMARK_.call(null,value);
if(cljs.core.truth_(c)){
airboss.state_view.container_QMARK_.call(null,value);

return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-rows","open-rows",-413464554)], null),cljs.core.conj,path);
} else {
return null;
}
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (id){
return cljs.core.swap_BANG_.call(null,last_focus_atom,cljs.core.assoc,new cljs.core.Keyword(null,"last-focus","last-focus",1297835140),id,new cljs.core.Keyword(null,"rm","rm",-1641953697),null);
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (rm,v){
var last_atom_30434 = data_atom;
var path_30435 = cljs.core.vec.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(rm));
var index_30436 = (1);
while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,path_30435))){
cljs.core.reset_BANG_.call(null,last_atom_30434,v);
} else {
if(cljs.core._EQ_.call(null,index_30436,cljs.core.count.call(null,path_30435))){
cljs.core.swap_BANG_.call(null,last_atom_30434,cljs.core.assoc_in,path_30435,v);
} else {
var value_at_index_30437 = cljs.core.get_in.call(null,cljs.core.deref.call(null,last_atom_30434),cljs.core.subvec.call(null,path_30435,(0),index_30436));
if(cljs.core.truth_(airboss.state_view.atom_QMARK_.call(null,value_at_index_30437))){
var G__30438 = value_at_index_30437;
var G__30439 = cljs.core.subvec.call(null,path_30435,index_30436);
var G__30440 = (index_30436 + (1));
last_atom_30434 = G__30438;
path_30435 = G__30439;
index_30436 = G__30440;
continue;
} else {
var G__30441 = last_atom_30434;
var G__30442 = path_30435;
var G__30443 = (index_30436 + (1));
last_atom_30434 = G__30441;
path_30435 = G__30442;
index_30436 = G__30443;
continue;
}

}
}
break;
}

cljs.core.swap_BANG_.call(null,state_atom,cljs.core.dissoc,new cljs.core.Keyword(null,"editing-row","editing-row",-1403021395));

return airboss.state_view.focus_row.call(null,rm);
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (){
return airboss.state_view.update_position.call(null,state_atom,new cljs.core.Keyword(null,"up","up",-269712113));
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (rm){
var index = airboss.state_view.index_of_model.call(null,models,rm);
if(cljs.core._EQ_.call(null,(0),index)){
return airboss.state_view.focus.call(null,airboss.state_view.search_field_id);
} else {
return airboss.state_view.focus_row.call(null,cljs.core.get.call(null,models,(index - (1))));
}
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (p__30428){
var map__30429 = p__30428;
var map__30429__$1 = ((((!((map__30429 == null)))?((((map__30429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30429):map__30429);
var path = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__7656__auto__ = airboss.state_view.container_QMARK_.call(null,value);
if(cljs.core.truth_(and__7656__auto__)){
return airboss.state_view.open_QMARK_.call(null,state_atom,path);
} else {
return and__7656__auto__;
}
})())){
return airboss.state_view.close_row.call(null,state_atom,path);
} else {
airboss.state_view.close_row.call(null,state_atom,cljs.core.vec.call(null,cljs.core.drop_last.call(null,path)));

return airboss.state_view.focus.call(null,airboss.state_view.dom_id_path.call(null,cljs.core.vec.call(null,cljs.core.drop_last.call(null,path))));
}
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (text){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-text","filter-text",-381699202)], null),text);
});})(handlers_atom,h_executer))
,((function (handlers_atom,h_executer){
return (function (){
return airboss.state_view.update_position.call(null,state_atom,new cljs.core.Keyword(null,"left","left",-399115937));
});})(handlers_atom,h_executer))
]));

return h_executer;
});
;})(handlers_atom,h_executer))
})();
/**
 * Recursively (top-down) builds a vector of paths to all values. Stops when value is not an 'open container'
 */
airboss.state_view.build_paths = (function airboss$state_view$build_paths(var_args){
var G__30445 = arguments.length;
switch (G__30445) {
case 2:
return airboss.state_view.build_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return airboss.state_view.build_paths.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

airboss.state_view.build_paths.cljs$core$IFn$_invoke$arity$2 = (function (state_atom,value){
return cljs.core.subvec.call(null,airboss.state_view.build_paths.call(null,state_atom,cljs.core.PersistentVector.EMPTY,value,cljs.core.PersistentVector.EMPTY),(1));
});

airboss.state_view.build_paths.cljs$core$IFn$_invoke$arity$4 = (function (state_atom,path,value,all_paths){
var paths = cljs.core.conj.call(null,all_paths,path);
var raw_value = airboss.state_view.raw_data.call(null,value);
if(cljs.core.truth_(airboss.state_view.open_QMARK_.call(null,state_atom,path))){
return cljs.core.doall.call(null,cljs.core.reduce.call(null,((function (paths,raw_value){
return (function (rs,k){
return airboss.state_view.build_paths.call(null,state_atom,cljs.core.conj.call(null,path,k),cljs.core.get.call(null,raw_value,k),rs);
});})(paths,raw_value))
,paths,airboss.state_view.get_keys.call(null,raw_value)));
} else {
return paths;
}
});

airboss.state_view.build_paths.cljs$lang$maxFixedArity = 4;

/**
 * Recursively (bottom-up) builds a vector of paths to all values that fits filter.
 */
airboss.state_view.build_paths_from_filter = (function airboss$state_view$build_paths_from_filter(var_args){
var G__30448 = arguments.length;
switch (G__30448) {
case 2:
return airboss.state_view.build_paths_from_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return airboss.state_view.build_paths_from_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

airboss.state_view.build_paths_from_filter.cljs$core$IFn$_invoke$arity$2 = (function (value,filter_text){
var raw_value = airboss.state_view.raw_data.call(null,value);
var paths = cljs.core.reduce.call(null,((function (raw_value){
return (function (v,k){
var path = airboss.state_view.build_paths_from_filter.call(null,k,cljs.core.get.call(null,raw_value,k),filter_text);
if(cljs.core.truth_(path)){
return cljs.core.into.call(null,v,path);
} else {
return v;
}
});})(raw_value))
,cljs.core.PersistentVector.EMPTY,airboss.state_view.get_keys.call(null,raw_value));
return cljs.core.rest.call(null,cljs.core.distinct.call(null,cljs.core.reduce.call(null,((function (raw_value,paths){
return (function (v,p){
return cljs.core.into.call(null,v,cljs.core.reduce.call(null,((function (raw_value,paths){
return (function (v1,p1){
return cljs.core.conj.call(null,v1,cljs.core.into.call(null,cljs.core.last.call(null,v1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1], null)));
});})(raw_value,paths))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),p));
});})(raw_value,paths))
,cljs.core.PersistentVector.EMPTY,paths)));
});

airboss.state_view.build_paths_from_filter.cljs$core$IFn$_invoke$arity$3 = (function (k,value,filter_text){
var raw_value = airboss.state_view.raw_data.call(null,value);
if(cljs.core.truth_(airboss.state_view.container_QMARK_.call(null,value))){
return cljs.core.reduce.call(null,((function (raw_value){
return (function (v,k1){
var paths = airboss.state_view.build_paths_from_filter.call(null,k1,cljs.core.get.call(null,raw_value,k1),filter_text);
return cljs.core.reduce.call(null,((function (paths,raw_value){
return (function (v1,p){
return cljs.core.conj.call(null,v1,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),p));
});})(paths,raw_value))
,v,paths);
});})(raw_value))
,cljs.core.PersistentVector.EMPTY,airboss.state_view.get_keys.call(null,raw_value));
} else {
if(cljs.core.truth_(airboss.state_view.contains_string.call(null,filter_text,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)], null);
} else {
return null;
}
}
});

airboss.state_view.build_paths_from_filter.cljs$lang$maxFixedArity = 3;

airboss.state_view.build_row_model = (function airboss$state_view$build_row_model(edit,open,path,value){
var is_atom = airboss.state_view.atom_QMARK_.call(null,value);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"edit","edit",-1641834166),edit,new cljs.core.Keyword(null,"open","open",-1763596448),open,new cljs.core.Keyword(null,"raw-value","raw-value",236487276),value,new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(is_atom)?cljs.core.deref.call(null,value):value),new cljs.core.Keyword(null,"is-atom","is-atom",20314067),is_atom], null);
});
airboss.state_view.build_row_models = (function airboss$state_view$build_row_models(state_atom,data){
var filter_text = new cljs.core.Keyword(null,"filter-text","filter-text",-381699202).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var paths = ((clojure.string.blank_QMARK_.call(null,filter_text))?airboss.state_view.build_paths.call(null,state_atom,data):airboss.state_view.build_paths_from_filter.call(null,data,filter_text));
return cljs.core.map.call(null,((function (filter_text,paths){
return (function (p){
return airboss.state_view.build_row_model.call(null,airboss.state_view.editing_QMARK_.call(null,state_atom,p),airboss.state_view.open_QMARK_.call(null,state_atom,p),p,airboss.state_view.get_data.call(null,p,data));
});})(filter_text,paths))
,paths);
});
airboss.state_view.search_field = (function airboss$state_view$search_field(value,_){
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-text","filter-text",-381699202),value,new cljs.core.Keyword(null,"focus","focus",234677911),false], null));
return ((function (state){
return (function (___$1,dispatcher){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),airboss.state_view.search_field_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,airboss.state_view.search_field_style,(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid rgba(175, 207, 249, 0.7)"], null):null)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (state){
return (function (e){
var v = e.target.value;
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"filter-text","filter-text",-381699202),v);

if(clojure.string.blank_QMARK_.call(null,v)){
return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"on-search","on-search",-1282068148)], null),"");
} else {
return null;
}
});})(state))
,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"filter-text","filter-text",-381699202).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"onFocus","onFocus",1152444958),((function (state){
return (function (___$2){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),true);

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624)], null),airboss.state_view.search_field_id);
});})(state))
,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (state){
return (function (___$2){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"focus","focus",234677911),false);
});})(state))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (state){
return (function (e){
if(cljs.core.truth_((function (){var and__7656__auto__ = airboss.utils.modifier_QMARK_.call(null,e);
if(cljs.core.truth_(and__7656__auto__)){
return airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"F","F",-1115543258),e);
} else {
return and__7656__auto__;
}
})())){
e.preventDefault();
} else {
}

if(cljs.core.truth_(airboss.utils.modifier_QMARK_.call(null,e))){
return null;
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"DOWN","DOWN",1488296947),e))){
e.preventDefault();

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"move-down","move-down",-1149356017)], null));
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"ENTER","ENTER",-1673322884),e))){
e.preventDefault();

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"on-search","on-search",-1282068148)], null),e.target.value);
} else {
return null;
}
}
}
});})(state))
], null)], null);
});
;})(state))
});
airboss.state_view.render_value_empty_container = (function airboss$state_view$render_value_empty_container(p__30450){
var map__30451 = p__30450;
var map__30451__$1 = ((((!((map__30451 == null)))?((((map__30451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30451):map__30451);
var value = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.map_QMARK_.call(null,value)){
return "{ }";
} else {
if(cljs.core.list_QMARK_.call(null,value)){
return "( )";
} else {
if(cljs.core.vector_QMARK_.call(null,value)){
return "[ ]";
} else {
if(cljs.core.set_QMARK_.call(null,value)){
return "#{ }";
} else {
if(cljs.core._EQ_.call(null,cljs.core.LazySeq,cljs.core.type.call(null,value))){
return "( ) Lazy seq";
} else {
return "[[[]]]";

}
}
}
}
}
});
airboss.state_view.render_value_container_with_children = (function airboss$state_view$render_value_container_with_children(p__30453){
var map__30454 = p__30453;
var map__30454__$1 = ((((!((map__30454 == null)))?((((map__30454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30454):map__30454);
var value = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"value","value",305978217));
var is_atom = cljs.core.get.call(null,map__30454__$1,new cljs.core.Keyword(null,"is-atom","is-atom",20314067));
var s = ((cljs.core.map_QMARK_.call(null,value))?["{+} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,value))].join(''):((cljs.core.list_QMARK_.call(null,value))?["(+) ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,value))].join(''):((cljs.core.vector_QMARK_.call(null,value))?["[+] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,value))].join(''):((cljs.core.set_QMARK_.call(null,value))?["#{+} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,value))].join(''):((cljs.core._EQ_.call(null,cljs.core.LazySeq,cljs.core.type.call(null,value)))?["(+) ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,value))," Lazy seq"].join(''):"[[[+]]]"
)))));
if(cljs.core.truth_(is_atom)){
return ["@atom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;
}
});
airboss.state_view.render_value_container = (function airboss$state_view$render_value_container(p__30456){
var map__30457 = p__30456;
var map__30457__$1 = ((((!((map__30457 == null)))?((((map__30457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30457):map__30457);
var m = map__30457__$1;
var open = cljs.core.get.call(null,map__30457__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
var value = cljs.core.get.call(null,map__30457__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.seq.call(null,value)){
if(cljs.core.truth_(open)){
return "";
} else {
return airboss.state_view.render_value_container_with_children.call(null,m);
}
} else {
return airboss.state_view.render_value_empty_container.call(null,m);
}
});
airboss.state_view.render_value_leaf = (function airboss$state_view$render_value_leaf(p__30459,dispatcher){
var map__30460 = p__30459;
var map__30460__$1 = ((((!((map__30460 == null)))?((((map__30460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30460):map__30460);
var m = map__30460__$1;
var value = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"edit","edit",-1641834166));
var is_atom = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"is-atom","is-atom",20314067));
if(cljs.core.truth_(edit)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_editor.render,value,((function (map__30460,map__30460__$1,m,value,edit,is_atom){
return (function (v){
return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"change-value","change-value",316989153)], null),m,v);
});})(map__30460,map__30460__$1,m,value,edit,is_atom))
,((function (map__30460,map__30460__$1,m,value,edit,is_atom){
return (function (){
return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"stop-edit","stop-edit",-55380964)], null),m);
});})(map__30460,map__30460__$1,m,value,edit,is_atom))
], null);
} else {
if((value == null)){
return "";
} else {
if(cljs.core.truth_(is_atom)){
return ["@atom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
}
}
}
});
airboss.state_view.render_value = (function airboss$state_view$render_value(p__30462,dispatcher){
var map__30463 = p__30462;
var map__30463__$1 = ((((!((map__30463 == null)))?((((map__30463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30463):map__30463);
var m = map__30463__$1;
var value = cljs.core.get.call(null,map__30463__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(airboss.state_view.container_QMARK_.call(null,value))){
return airboss.state_view.render_value_container.call(null,m);
} else {
return airboss.state_view.render_value_leaf.call(null,m,dispatcher);
}
});
airboss.state_view.render_key = (function airboss$state_view$render_key(key_value,small){
if((key_value == null)){
return "nil";
} else {
if((key_value instanceof cljs.core.Keyword)){
var key_ns = cljs.core.namespace.call(null,key_value);
var key_name = cljs.core.name.call(null,key_value);
if(cljs.core.truth_(key_ns)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"lightgrey","lightgrey",-729897351),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)], null),(cljs.core.truth_(small)?"::":[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_ns),"/"].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_name)].join('')], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_value)].join('')], null);
}
} else {
if((key_value instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_value)].join('')], null);
} else {
if(typeof key_value === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_value),"\""].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_value)].join('')], null);

}
}
}
}
});
airboss.state_view.depth_style = (function airboss$state_view$depth_style(path){
return null;
});
airboss.state_view.render_row = (function airboss$state_view$render_row(_,___$1,___$2){
var focus_state = reagent.core.atom.call(null,false);
var style = airboss.state_view.style_row;
return ((function (focus_state,style){
return (function (p__30465,dispatcher,p__30466){
var map__30467 = p__30465;
var map__30467__$1 = ((((!((map__30467 == null)))?((((map__30467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30467):map__30467);
var model = map__30467__$1;
var path = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var map__30468 = p__30466;
var map__30468__$1 = ((((!((map__30468 == null)))?((((map__30468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30468):map__30468);
var key_width = cljs.core.get.call(null,map__30468__$1,new cljs.core.Keyword(null,"key-width","key-width",-35650876));
var tab_width = cljs.core.get.call(null,map__30468__$1,new cljs.core.Keyword(null,"tab-width","tab-width",-229299663));
var small = cljs.core.get.call(null,map__30468__$1,new cljs.core.Keyword(null,"small","small",2133478704));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),airboss.state_view.dom_id_model.call(null,model),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),((4) + (tab_width * (cljs.core.count.call(null,path) - (1))))], null),airboss.state_view.depth_style.call(null,path),(cljs.core.truth_(cljs.core.deref.call(null,focus_state))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"rgba(175, 207, 249, 0.7)",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null):null)),new cljs.core.Keyword(null,"onFocus","onFocus",1152444958),((function (map__30467,map__30467__$1,model,path,map__30468,map__30468__$1,key_width,tab_width,small,focus_state,style){
return (function (___$3){
cljs.core.reset_BANG_.call(null,focus_state,true);

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624)], null),model);
});})(map__30467,map__30467__$1,model,path,map__30468,map__30468__$1,key_width,tab_width,small,focus_state,style))
,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__30467,map__30467__$1,model,path,map__30468,map__30468__$1,key_width,tab_width,small,focus_state,style){
return (function (___$3){
return cljs.core.reset_BANG_.call(null,focus_state,false);
});})(map__30467,map__30467__$1,model,path,map__30468,map__30468__$1,key_width,tab_width,small,focus_state,style))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (map__30467,map__30467__$1,model,path,map__30468,map__30468__$1,key_width,tab_width,small,focus_state,style){
return (function (e){
if(cljs.core.truth_(airboss.utils.modifier_QMARK_.call(null,e))){
return null;
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"ENTER","ENTER",-1673322884),e))){
return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"start-edit","start-edit",2031179152)], null),model);
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"LEFT","LEFT",1005963341),e))){
return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"close","close",1835149582)], null),model);
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"RIGHT","RIGHT",-956441784),e))){
return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"open","open",-1763596448)], null),model);
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"UP","UP",756346237),e))){
e.preventDefault();

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"move-up","move-up",-1153137133)], null),model);
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"DOWN","DOWN",1488296947),e))){
e.preventDefault();

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"move-down","move-down",-1149356017)], null),model);
} else {
return null;
}
}
}
}
}
}
});})(map__30467,map__30467__$1,model,path,map__30468,map__30468__$1,key_width,tab_width,small,focus_state,style))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),key_width,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)], null),airboss.state_view.render_key.call(null,cljs.core.last.call(null,path),small)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),key_width,new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738)], null)], null),airboss.state_view.render_value.call(null,model,dispatcher)], null)], null);
});
;})(focus_state,style))
});
airboss.state_view.info_panel = (function airboss$state_view$info_panel(last_focus_atom,small){
var map__30471 = new cljs.core.Keyword(null,"rm","rm",-1641953697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,last_focus_atom));
var map__30471__$1 = ((((!((map__30471 == null)))?((((map__30471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30471):map__30471);
var path = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var raw_value = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"raw-value","raw-value",236487276));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432)],[new cljs.core.Keyword(null,"center","center",-748944368),(25),"rgba(175, 207, 249, 0.7)",(25),"100%","rgb(47, 47, 47)",(6),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"flex","flex",-1425124628)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(path)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(small)?cljs.core.last.call(null,path):path))].join(''):"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.some.call(null,((function (map__30471,map__30471__$1,path,raw_value){
return (function (p__30473){
var map__30474 = p__30473;
var map__30474__$1 = ((((!((map__30474 == null)))?((((map__30474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30474):map__30474);
var name = cljs.core.get.call(null,map__30474__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_QMARK_ = cljs.core.get.call(null,map__30474__$1,new cljs.core.Keyword(null,"type?","type?",-1257087559));
if(cljs.core.truth_(type_QMARK_.call(null,raw_value))){
return name;
} else {
return null;
}
});})(map__30471,map__30471__$1,path,raw_value))
,airboss.state_view.types)], null)], null);
});
airboss.state_view.render_rows_panel = (function airboss$state_view$render_rows_panel(row_models,dispatcher,p__30476){
var map__30477 = p__30476;
var map__30477__$1 = ((((!((map__30477 == null)))?((((map__30477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30477):map__30477);
var opts = map__30477__$1;
var small = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"small","small",2133478704));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),airboss.state_view.panel_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1)], null)], null),(function (){var opts__$1 = cljs.core.merge.call(null,opts,(cljs.core.truth_(small)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-width","tab-width",-229299663),(15),new cljs.core.Keyword(null,"key-width","key-width",-35650876),(160)], null):null));
return cljs.core.map.call(null,((function (opts__$1,map__30477,map__30477__$1,opts,small){
return (function (r){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_view.render_row,r,dispatcher,opts__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),airboss.state_view.dom_id_model.call(null,r)], null));
});})(opts__$1,map__30477,map__30477__$1,opts,small))
,row_models);
})()], null);
});
airboss.state_view.data_wash = (function airboss$state_view$data_wash(local_storage){
if(cljs.core.truth_((function (){var and__7656__auto__ = local_storage;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(airboss.state_view.default_setup),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(local_storage));
} else {
return and__7656__auto__;
}
})())){
var ls = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,local_storage,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.keyword),new cljs.core.Keyword(null,"key-code-hide","key-code-hide",-1693741656),cljs.core.keyword),new cljs.core.Keyword(null,"key-code-show","key-code-show",-1186601684),cljs.core.keyword);
var rows = clojure.walk.postwalk.call(null,((function (ls){
return (function (x){
if(cljs.core.truth_(cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.vector_QMARK_).call(null,x))){
return x;
} else {
return cljs.core.keyword.call(null,x);

}
});})(ls))
,new cljs.core.Keyword(null,"open-rows","open-rows",-413464554).cljs$core$IFn$_invoke$arity$1(ls));
return cljs.core.assoc.call(null,ls,new cljs.core.Keyword(null,"open-rows","open-rows",-413464554),cljs.core.set.call(null,rows));
} else {
return null;
}
});
airboss.state_view.prepare_data_for_local_storage = (function airboss$state_view$prepare_data_for_local_storage(data){
var rows = clojure.walk.postwalk.call(null,(function (x){
if((x instanceof cljs.core.Keyword)){
var name_s = cljs.core.namespace.call(null,x);
var n = cljs.core.name.call(null,x);
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(name_s)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_s),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''):n))].join('');
return s;
} else {
return x;
}
}),new cljs.core.Keyword(null,"open-rows","open-rows",-413464554).cljs$core$IFn$_invoke$arity$1(data));
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"open-rows","open-rows",-413464554),cljs.core.set.call(null,rows),new cljs.core.Keyword(null,"editing-row","editing-row",-1403021395),null);
});
airboss.state_view.app_key_listeners = (function airboss$state_view$app_key_listeners(dispatcher,e){
if(cljs.core.truth_(airboss.utils.alt_modifier_QMARK_.call(null,e))){
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"LEFT","LEFT",1005963341),e))){
e.preventDefault();

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"move-left","move-left",-271562811)], null));
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"RIGHT","RIGHT",-956441784),e))){
e.preventDefault();

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"move-right","move-right",1661359569)], null));
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"DOWN","DOWN",1488296947),e))){
e.preventDefault();

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"move-down","move-down",-1149356017)], null));
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"UP","UP",756346237),e))){
e.preventDefault();

return dispatcher.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"move-up","move-up",-1153137133)], null));
} else {
return null;
}
}
}
}
} else {
return null;
}
});
/**
 * Creates a panel that shows the data in the given data-atom. The panel should only be used as a singleton on
 *   application level - if multiple instances are shown - it will fail
 */
airboss.state_view.render = (function airboss$state_view$render(data_atom,_){
var local_storage = airboss.state_view.data_wash.call(null,airboss.utils.local_storage.call(null,airboss.state_view.local_storage_id));
var last_focus_atom = reagent.core.atom.call(null,null);
var state_atom = reagent.core.atom.call(null,cljs.core.merge.call(null,airboss.state_view.default_setup,local_storage));
var row_models = reagent.ratom.make_reaction.call(null,((function (local_storage,last_focus_atom,state_atom){
return (function (){
return airboss.state_view.build_row_models.call(null,state_atom,cljs.core.deref.call(null,data_atom));
});})(local_storage,last_focus_atom,state_atom))
);
var dispatcher = reagent.ratom.make_reaction.call(null,((function (local_storage,last_focus_atom,state_atom,row_models){
return (function (){
return airboss.state_view.mk_dispatcher.call(null,data_atom,cljs.core.vec.call(null,cljs.core.deref.call(null,row_models)),state_atom,last_focus_atom);
});})(local_storage,last_focus_atom,state_atom,row_models))
);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (local_storage,last_focus_atom,state_atom,row_models,dispatcher){
return (function (___$1,___$2){
var map__30479 = cljs.core.deref.call(null,state_atom);
var map__30479__$1 = ((((!((map__30479 == null)))?((((map__30479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30479):map__30479);
var filter_text = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"filter-text","filter-text",-381699202));
var key_width = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"key-width","key-width",-35650876));
var tab_width = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"tab-width","tab-width",-229299663));
var size = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var position = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var small = cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),position);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,airboss.state_view.style_panel,cljs.core.get.call(null,airboss.state_view.postition_styles_panel,position).call(null,size)),new cljs.core.Keyword(null,"onKeyUp","onKeyUp",1550785041),cljs.core.partial.call(null,airboss.state_view.app_key_listeners,cljs.core.deref.call(null,dispatcher))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_view.search_field,filter_text,cljs.core.deref.call(null,dispatcher)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_view.render_rows_panel,cljs.core.deref.call(null,row_models),cljs.core.deref.call(null,dispatcher),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"filter-text","filter-text",-381699202),filter_text,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"small","small",2133478704),small,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"key-width","key-width",-35650876),key_width,new cljs.core.Keyword(null,"tab-width","tab-width",-229299663),tab_width], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_view.info_panel,last_focus_atom,small], null)], null);
});})(local_storage,last_focus_atom,state_atom,row_models,dispatcher))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (local_storage,last_focus_atom,state_atom,row_models,dispatcher){
return (function (___$1){
var last_id = new cljs.core.Keyword(null,"last-focus","last-focus",1297835140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var last_node = goog.dom.getElement(last_id);
var next_id = (cljs.core.truth_(last_node)?last_id:airboss.state_view.search_field_id);
return airboss.state_view.focus.call(null,next_id);
});})(local_storage,last_focus_atom,state_atom,row_models,dispatcher))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (local_storage,last_focus_atom,state_atom,row_models,dispatcher){
return (function (___$1){
return airboss.utils.local_storage_write.call(null,airboss.state_view.local_storage_id,airboss.state_view.prepare_data_for_local_storage.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.Keyword(null,"last-focus","last-focus",1297835140),new cljs.core.Keyword(null,"last-focus","last-focus",1297835140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,last_focus_atom)))));
});})(local_storage,last_focus_atom,state_atom,row_models,dispatcher))
], null));
});
airboss.state_view.ui_toggler = (function airboss$state_view$ui_toggler(_,p__30481){
var map__30482 = p__30481;
var map__30482__$1 = ((((!((map__30482 == null)))?((((map__30482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30482):map__30482);
var key_code_show = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"key-code-show","key-code-show",-1186601684));
var key_code_hide = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"key-code-hide","key-code-hide",-1693741656));
var visible = reagent.core.atom.call(null,false);
var k_show = (function (){var or__7668__auto__ = key_code_show;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return airboss.state_view.default_show_key;
}
})();
var k_hide = (function (){var or__7668__auto__ = key_code_hide;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return airboss.state_view.default_hide_key;
}
})();
goog.events.listen(window,"keydown",((function (visible,k_show,k_hide,map__30482,map__30482__$1,key_code_show,key_code_hide){
return (function (e){
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,k_show,e))){
e.preventDefault();

return cljs.core.reset_BANG_.call(null,visible,cljs.core.not.call(null,cljs.core.deref.call(null,visible)));
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,k_hide,e))){
e.preventDefault();

return cljs.core.reset_BANG_.call(null,visible,false);
} else {
return null;
}
}
});})(visible,k_show,k_hide,map__30482,map__30482__$1,key_code_show,key_code_hide))
);

return ((function (visible,k_show,k_hide,map__30482,map__30482__$1,key_code_show,key_code_hide){
return (function (data_atom,opts){
if(cljs.core.truth_(cljs.core.deref.call(null,visible))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_view.render,data_atom,opts], null);
} else {
return null;
}
});
;})(visible,k_show,k_hide,map__30482,map__30482__$1,key_code_show,key_code_hide))
});
airboss.state_view.load = (function airboss$state_view$load(data_atom,opts){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_view.ui_toggler,data_atom,opts], null),document.body.appendChild(goog.dom.createElement("div")));
});

//# sourceMappingURL=state_view.js.map?rel=1507562210274
