// Compiled by ClojureScript 1.9.946 {}
goog.provide('airboss.utils');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');
if(typeof airboss.utils.key_codes !== 'undefined'){
} else {
airboss.utils.key_codes = cljs.core.js__GT_clj.call(null,goog.events.KeyCodes,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
airboss.utils.get_style_sheet = (function airboss$utils$get_style_sheet(s_name){
var length = document.styleSheets.length;
var sheets = document.styleSheets;
var iter__8476__auto__ = ((function (length,sheets){
return (function airboss$utils$get_style_sheet_$_iter__30330(s__30331){
return (new cljs.core.LazySeq(null,((function (length,sheets){
return (function (){
var s__30331__$1 = s__30331;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30331__$1);
if(temp__4657__auto__){
var s__30331__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30331__$2)){
var c__8474__auto__ = cljs.core.chunk_first.call(null,s__30331__$2);
var size__8475__auto__ = cljs.core.count.call(null,c__8474__auto__);
var b__30333 = cljs.core.chunk_buffer.call(null,size__8475__auto__);
if((function (){var i__30332 = (0);
while(true){
if((i__30332 < size__8475__auto__)){
var i = cljs.core._nth.call(null,c__8474__auto__,i__30332);
if(cljs.core._EQ_.call(null,s_name,(sheets[i]).title)){
cljs.core.chunk_append.call(null,b__30333,(sheets[i]));

var G__30334 = (i__30332 + (1));
i__30332 = G__30334;
continue;
} else {
var G__30335 = (i__30332 + (1));
i__30332 = G__30335;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30333),airboss$utils$get_style_sheet_$_iter__30330.call(null,cljs.core.chunk_rest.call(null,s__30331__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30333),null);
}
} else {
var i = cljs.core.first.call(null,s__30331__$2);
if(cljs.core._EQ_.call(null,s_name,(sheets[i]).title)){
return cljs.core.cons.call(null,(sheets[i]),airboss$utils$get_style_sheet_$_iter__30330.call(null,cljs.core.rest.call(null,s__30331__$2)));
} else {
var G__30336 = cljs.core.rest.call(null,s__30331__$2);
s__30331__$1 = G__30336;
continue;
}
}
} else {
return null;
}
break;
}
});})(length,sheets))
,null,null));
});})(length,sheets))
;
return iter__8476__auto__.call(null,cljs.core.vec.call(null,cljs.core.range.call(null,length)));
});
airboss.utils.mk_stylesheet = (function airboss$utils$mk_stylesheet(unique_name){
var sheet = document.createElement("style");
(sheet["title"] = unique_name);

console.info(sheet);

return document.body.appendChild(sheet);
});
airboss.utils.local_storage_write = (function airboss$utils$local_storage_write(id,data){
return window.localStorage.setItem(id,JSON.stringify(cljs.core.clj__GT_js.call(null,data)));
});
airboss.utils.local_storage = (function airboss$utils$local_storage(id){
return cljs.core.js__GT_clj.call(null,JSON.parse(window.localStorage.getItem(id)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
airboss.utils.local_storage_remove = (function airboss$utils$local_storage_remove(id){
return window.localStorage.removeItem(id);
});
/**
 * Returns a map containing the aboslut left, top, width, height of
 *   the dom-element.
 */
airboss.utils.absolut_position = (function airboss$utils$absolut_position(node){
var p = node.getBoundingClientRect();
var left = p.left;
var width = p.width;
var height = p.height;
var top = p.top;
var w_height = window.innerHeight;
var w_width = window.innerWidth;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"right","right",-452581833),(w_width - (left + width)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(w_height - (top + height)),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"window-width","window-width",2057825599),w_width,new cljs.core.Keyword(null,"window-height","window-height",368005077),w_height], null);
});
/**
 * Returns a map containing the offset left, top, width, height of
 *   the dom-element.
 */
airboss.utils.offset_position = (function airboss$utils$offset_position(node){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),node.offsetLeft,new cljs.core.Keyword(null,"top","top",-1856271961),node.offsetTop,new cljs.core.Keyword(null,"width","width",-384071477),node.offsetWidth,new cljs.core.Keyword(null,"height","height",1025178622),node.offsetHeight], null);
});
/**
 * returns true if postion p1's top is above postition p2's top.
 */
airboss.utils.above_QMARK_ = (function airboss$utils$above_QMARK_(p1,p2){
return (new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(p1) < new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(p2));
});
/**
 * returns true if postion p1's 'bottom' is below postition p2's 'bottom'.
 */
airboss.utils.below_QMARK_ = (function airboss$utils$below_QMARK_(p1,p2){
return ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(p1) + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(p1)) > (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(p2) + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(p2)));
});
/**
 * Makes sure an item is visible in a scroll panel.
 * 
 *   item-node - the dom node that should be visible.
 *   panel-node - the surrounding scroll panel dom node.
 */
airboss.utils.scroll_into_view = (function airboss$utils$scroll_into_view(item_node,panel_node){
try{var p_item = airboss.utils.absolut_position.call(null,item_node);
var p_panel = airboss.utils.absolut_position.call(null,panel_node);
if(cljs.core.truth_(airboss.utils.above_QMARK_.call(null,p_item,p_panel))){
return item_node.scrollIntoView(true);
} else {
if(cljs.core.truth_(airboss.utils.below_QMARK_.call(null,p_item,p_panel))){
return item_node.scrollIntoView(false);
} else {
return null;
}
}
}catch (e30337){var e = e30337;
throw (new Error(["unable to scroll into view - ref-item:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_node),"panel-ref:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_node)].join('')));
}});
airboss.utils.key_QMARK_ = (function airboss$utils$key_QMARK_(k,event){
return cljs.core._EQ_.call(null,k.call(null,airboss.utils.key_codes),event.keyCode);
});
airboss.utils.shift_modifier_QMARK_ = (function airboss$utils$shift_modifier_QMARK_(event){
if(cljs.core.truth_(event)){
return event.shiftKey;
} else {
return null;
}
});
airboss.utils.ctrl_modifier_QMARK_ = (function airboss$utils$ctrl_modifier_QMARK_(event){
if(cljs.core.truth_(event)){
return event.ctrlKey;
} else {
return null;
}
});
airboss.utils.alt_modifier_QMARK_ = (function airboss$utils$alt_modifier_QMARK_(event){
if(cljs.core.truth_(event)){
return event.altKey;
} else {
return null;
}
});
airboss.utils.meta_modifier_QMARK_ = (function airboss$utils$meta_modifier_QMARK_(event){
if(cljs.core.truth_(event)){
return event.metaKey;
} else {
return null;
}
});
airboss.utils.modifier_QMARK_ = (function airboss$utils$modifier_QMARK_(event){
var or__7668__auto__ = airboss.utils.shift_modifier_QMARK_.call(null,event);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
var or__7668__auto____$1 = airboss.utils.ctrl_modifier_QMARK_.call(null,event);
if(cljs.core.truth_(or__7668__auto____$1)){
return or__7668__auto____$1;
} else {
var or__7668__auto____$2 = airboss.utils.alt_modifier_QMARK_.call(null,event);
if(cljs.core.truth_(or__7668__auto____$2)){
return or__7668__auto____$2;
} else {
return airboss.utils.meta_modifier_QMARK_.call(null,event);
}
}
}
});
airboss.utils.index_of = (function airboss$utils$index_of(var_args){
var G__30339 = arguments.length;
switch (G__30339) {
case 2:
return airboss.utils.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return airboss.utils.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return airboss.utils.index_of.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

airboss.utils.index_of.cljs$core$IFn$_invoke$arity$2 = (function (item,coll){
return airboss.utils.index_of.call(null,(0),item,coll,cljs.core._EQ_);
});

airboss.utils.index_of.cljs$core$IFn$_invoke$arity$3 = (function (item,coll,condition_fn){
return airboss.utils.index_of.call(null,(0),item,coll,condition_fn);
});

airboss.utils.index_of.cljs$core$IFn$_invoke$arity$4 = (function (index,item,coll,condition_fn){
while(true){
if(cljs.core.empty_QMARK_.call(null,coll)){
return (-1);
} else {
if(cljs.core.truth_(condition_fn.call(null,item,cljs.core.first.call(null,coll)))){
return index;
} else {
var G__30341 = (index + (1));
var G__30342 = item;
var G__30343 = cljs.core.rest.call(null,coll);
var G__30344 = condition_fn;
index = G__30341;
item = G__30342;
coll = G__30343;
condition_fn = G__30344;
continue;

}
}
break;
}
});

airboss.utils.index_of.cljs$lang$maxFixedArity = 4;

airboss.utils.cyclic_previous = (function airboss$utils$cyclic_previous(item,coll){
if((item == null)){
return cljs.core.last.call(null,coll);
} else {
if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,coll))){
return cljs.core.last.call(null,coll);
} else {
return cljs.core.nth.call(null,coll,(airboss.utils.index_of.call(null,item,coll) - (1)));

}
}
});
airboss.utils.cyclic_next = (function airboss$utils$cyclic_next(item,coll){
if((item == null)){
return cljs.core.first.call(null,coll);
} else {
if(cljs.core._EQ_.call(null,item,cljs.core.last.call(null,coll))){
return cljs.core.first.call(null,coll);
} else {
return cljs.core.nth.call(null,coll,(airboss.utils.index_of.call(null,item,coll) + (1)));

}
}
});

//# sourceMappingURL=utils.js.map?rel=1507562209304
