// Compiled by ClojureScript 1.9.946 {}
goog.provide('airboss.design_view');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('airboss.utils');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');
airboss.design_view.text_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none",new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),(4),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null);
airboss.design_view.x_y_label_style = cljs.core.merge.call(null,airboss.design_view.text_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(10),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478)], null));
airboss.design_view.design_view_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"will-change","will-change",-152752061),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.4)",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(200000),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null);
if(typeof airboss.design_view.state !== 'undefined'){
} else {
airboss.design_view.state = reagent.core.atom.call(null,null);
}
airboss.design_view.local_storage_id = "airboss-design-viewer";
airboss.design_view.round = (function airboss$design_view$round(n){
return (Math.round((n * (10))) / (10));
});
airboss.design_view.get_id = (function airboss$design_view$get_id(p){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
if((id instanceof cljs.core.Keyword)){
return id;
} else {
return cljs.core.keyword.call(null,id);
}
});
airboss.design_view.point = (function airboss$design_view$point(x,y){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join('')),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
airboss.design_view.add_point = (function airboss$design_view$add_point(points_map,p){
return cljs.core.assoc.call(null,points_map,airboss.design_view.get_id.call(null,p),p);
});
airboss.design_view.drag_move_handler = (function airboss$design_view$drag_move_handler(on_drag){
return (function (evt){
return on_drag.call(null,evt.clientX,evt.clientY);
});
});
airboss.design_view.drag_end_handler = (function airboss$design_view$drag_end_handler(drag_move,drag_end,on_end){
return (function (evt){
goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,drag_move);

goog.events.unlisten(window,goog.events.EventType.MOUSEUP,cljs.core.deref.call(null,drag_end));

return on_end.call(null);
});
});
airboss.design_view.dragging = (function airboss$design_view$dragging(p__30347){
var map__30348 = p__30347;
var map__30348__$1 = ((((!((map__30348 == null)))?((((map__30348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30348):map__30348);
var on_drag = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091));
var on_start = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"on-start","on-start",-1839785985),((function (map__30348,map__30348__$1,on_drag){
return (function (){
return null;
});})(map__30348,map__30348__$1,on_drag))
);
var on_end = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"on-end","on-end",1933704364),((function (map__30348,map__30348__$1,on_drag,on_start){
return (function (){
return null;
});})(map__30348,map__30348__$1,on_drag,on_start))
);
var drag_move = airboss.design_view.drag_move_handler.call(null,on_drag);
var drag_end_atom = cljs.core.atom.call(null,null);
var drag_end = airboss.design_view.drag_end_handler.call(null,drag_move,drag_end_atom,on_end);
on_start.call(null);

cljs.core.reset_BANG_.call(null,drag_end_atom,drag_end);

goog.events.listen(window,goog.events.EventType.MOUSEMOVE,drag_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,drag_end);
});
airboss.design_view.move_point = (function airboss$design_view$move_point(p){
return (function (x,y){
return cljs.core.swap_BANG_.call(null,airboss.design_view.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),airboss.design_view.get_id.call(null,p)], null),cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});
});
airboss.design_view.svg_line = (function airboss$design_view$svg_line(p1,p2,color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2)], null)], null);
});
airboss.design_view.intersection_layer = (function airboss$design_view$intersection_layer(points,color,p__30350){
var map__30351 = p__30350;
var map__30351__$1 = ((((!((map__30351 == null)))?((((map__30351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30351):map__30351);
var width = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__30351__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.map_indexed.call(null,((function (map__30351,map__30351__$1,width,height){
return (function (i,p){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.svg_line,airboss.design_view.point.call(null,(0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p)),airboss.design_view.point.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p) + width),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p)),color], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.svg_line,airboss.design_view.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),(0)),airboss.design_view.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p) + height)),color], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(map__30351,map__30351__$1,width,height))
,points)], null);
});
airboss.design_view.triangle_hubs = (function airboss$design_view$triangle_hubs(p__30353){
var map__30354 = p__30353;
var map__30354__$1 = ((((!((map__30354 == null)))?((((map__30354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30354):map__30354);
var width = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var r_w = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"r-w","r-w",-1780559431));
var r_h = cljs.core.get.call(null,map__30354__$1,new cljs.core.Keyword(null,"r-h","r-h",634680698));
var y1 = (height - r_h);
var y2 = r_h;
var x1 = (width - r_w);
var x2 = r_w;
var h = 6.5;
var s = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"yellow"], null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),s,new cljs.core.Keyword(null,"points","points",-1486596883),["0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y1 - h))," 4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)," 0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y1 + h))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),s,new cljs.core.Keyword(null,"points","points",-1486596883),["0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y2 - h))," 4,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y2)," 0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y2 + h))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),s,new cljs.core.Keyword(null,"points","points",-1486596883),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y1 - h))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y1 + h))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((width - (4))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),s,new cljs.core.Keyword(null,"points","points",-1486596883),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y2 - h))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y2 + h))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((width - (4))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y2)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),s,new cljs.core.Keyword(null,"points","points",-1486596883),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((x1 - h)),",0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x1 + h)),",0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((4))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),s,new cljs.core.Keyword(null,"points","points",-1486596883),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((x2 - h)),",0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x2 + h)),",0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x2),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((4))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),s,new cljs.core.Keyword(null,"points","points",-1486596883),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((x1 - h)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x1 + h)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((height - (4)))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),s,new cljs.core.Keyword(null,"points","points",-1486596883),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((x2 - h)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x2 + h)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x2),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((height - (4)))].join('')], null)], null)], null);
});
airboss.design_view.key_down = (function airboss$design_view$key_down(e,p,move){
var dist = (cljs.core.truth_(e.shiftKey)?(25):(1));
if(cljs.core._EQ_.call(null,goog.events.KeyCodes.LEFT,e.keyCode)){
return move.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p) - dist),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p));
} else {
if(cljs.core._EQ_.call(null,goog.events.KeyCodes.RIGHT,e.keyCode)){
return move.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p) + dist),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p));
} else {
if(cljs.core._EQ_.call(null,goog.events.KeyCodes.UP,e.keyCode)){
return move.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p) - dist));
} else {
if(cljs.core._EQ_.call(null,goog.events.KeyCodes.DOWN,e.keyCode)){
return move.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p) + dist));
} else {
return null;
}
}
}
}
});
airboss.design_view.handle = (function airboss$design_view$handle(p__30357,p,focus_id){
var map__30358 = p__30357;
var map__30358__$1 = ((((!((map__30358 == null)))?((((map__30358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30358):map__30358);
var on_drag = cljs.core.get.call(null,map__30358__$1,new cljs.core.Keyword(null,"on-drag","on-drag",-69159091));
var color = cljs.core.get.call(null,map__30358__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(airboss.design_view.get_id.call(null,p))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__30358,map__30358__$1,on_drag,color){
return (function (e){
return cljs.core.swap_BANG_.call(null,airboss.design_view.state,cljs.core.assoc,new cljs.core.Keyword(null,"focus-id","focus-id",458947539),airboss.design_view.get_id.call(null,p));
});})(map__30358,map__30358__$1,on_drag,color))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__30358,map__30358__$1,on_drag,color){
return (function (){
return airboss.design_view.dragging.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),on_drag], null));
});})(map__30358,map__30358__$1,on_drag,color))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (map__30358,map__30358__$1,on_drag,color){
return (function (p1__30356_SHARP_){
return airboss.design_view.key_down.call(null,p1__30356_SHARP_,p,on_drag);
});})(map__30358,map__30358__$1,on_drag,color))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),((cljs.core._EQ_.call(null,airboss.design_view.get_id.call(null,p),focus_id))?"rgba(255,255,255, 0.5)":"transparent"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"r","r",-471384190),(4),new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"yellow",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2),new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"fill","fill",883462889),"transparent",new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p)], null)], null)], null);
});
airboss.design_view.handles_layer = (function airboss$design_view$handles_layer(points,focus_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.map.call(null,(function (p){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.handle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-drag","on-drag",-69159091),airboss.design_view.move_point.call(null,p),new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),p,focus_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),airboss.design_view.get_id.call(null,p)], null));
}),points)], null);
});
airboss.design_view.x_labels = (function airboss$design_view$x_labels(points,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,(function (p){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,airboss.design_view.x_y_label_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),(((((30) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p)) > width))?(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p) - (30)):(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p) + (4))),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(2)], null))], null),airboss.design_view.round.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),airboss.design_view.get_id.call(null,p)], null));
}),points)], null);
});
airboss.design_view.y_labels = (function airboss$design_view$y_labels(points,height){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,(function (p){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,airboss.design_view.x_y_label_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),(4),new cljs.core.Keyword(null,"top","top",-1856271961),(((((30) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p)) > height))?(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p) - (30)):(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p) + (4)))], null))], null),airboss.design_view.round.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),airboss.design_view.get_id.call(null,p)], null));
}),points)], null);
});
airboss.design_view.get_dimensions = (function airboss$design_view$get_dimensions(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight,new cljs.core.Keyword(null,"r-w","r-w",-1780559431),(window.innerWidth / 1.618033),new cljs.core.Keyword(null,"r-h","r-h",634680698),(window.innerHeight / 1.618033)], null);
});
airboss.design_view.init_data = (function airboss$design_view$init_data(){
var d = airboss.design_view.get_dimensions.call(null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),airboss.design_view.add_point.call(null,airboss.design_view.add_point.call(null,cljs.core.PersistentArrayMap.EMPTY,airboss.design_view.point.call(null,(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(d) - new cljs.core.Keyword(null,"r-w","r-w",-1780559431).cljs$core$IFn$_invoke$arity$1(d)),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(d) - new cljs.core.Keyword(null,"r-h","r-h",634680698).cljs$core$IFn$_invoke$arity$1(d)))),airboss.design_view.point.call(null,new cljs.core.Keyword(null,"r-w","r-w",-1780559431).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"r-h","r-h",634680698).cljs$core$IFn$_invoke$arity$1(d))),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),airboss.design_view.get_dimensions.call(null)], null);
});
airboss.design_view.key_down_handler = (function airboss$design_view$key_down_handler(e){
if(cljs.core._EQ_.call(null,goog.events.KeyCodes.R,e.keyCode)){
airboss.utils.local_storage_remove.call(null,airboss.design_view.local_storage_id);

return cljs.core.reset_BANG_.call(null,airboss.design_view.state,airboss.design_view.init_data.call(null));
} else {
if(cljs.core._EQ_.call(null,goog.events.KeyCodes.F,e.keyCode)){
var ps = cljs.core.vals.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,airboss.design_view.state)));
var first_id = airboss.design_view.get_id.call(null,cljs.core.first.call(null,ps));
var second_id = airboss.design_view.get_id.call(null,cljs.core.second.call(null,ps));
var f_id = new cljs.core.Keyword(null,"focus-id","focus-id",458947539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,airboss.design_view.state));
return goog.dom.getElement([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,f_id,first_id))?second_id:first_id))].join('')).focus();
} else {
return null;
}
}
});
airboss.design_view.resize_handler = (function airboss$design_view$resize_handler(e){
return cljs.core.swap_BANG_.call(null,airboss.design_view.state,cljs.core.assoc,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),airboss.design_view.get_dimensions.call(null));
});
airboss.design_view.render = (function airboss$design_view$render(){
var local_state_30360 = airboss.utils.local_storage.call(null,airboss.design_view.local_storage_id);
cljs.core.reset_BANG_.call(null,airboss.design_view.state,((cljs.core.seq.call(null,local_state_30360))?local_state_30360:airboss.design_view.init_data.call(null)));

return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var points = cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,airboss.design_view.state));
}))));
var dimensions = cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,((function (points){
return (function (){
return new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,airboss.design_view.state));
});})(points))
));
var focus_id = cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,((function (points,dimensions){
return (function (){
return new cljs.core.Keyword(null,"focus-id","focus-id",458947539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,airboss.design_view.state));
});})(points,dimensions))
));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),airboss.design_view.design_view_style], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.intersection_layer,points,"white",dimensions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.triangle_hubs,dimensions], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.handles_layer,points,focus_id], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.x_labels,points,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(dimensions)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.y_labels,points,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(dimensions)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
goog.events.listen(window,goog.events.EventType.KEYDOWN,airboss.design_view.key_down_handler);

goog.events.listen(window,goog.events.EventType.RESIZE,airboss.design_view.resize_handler);

cljs.core.swap_BANG_.call(null,airboss.design_view.state,cljs.core.assoc,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),airboss.design_view.get_dimensions.call(null));

var focus_id = new cljs.core.Keyword(null,"focus-id","focus-id",458947539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,airboss.design_view.state));
var r_id = (((focus_id == null))?airboss.design_view.get_id.call(null,cljs.core.first.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,airboss.design_view.state))))):(((focus_id instanceof cljs.core.Keyword))?focus_id:cljs.core.keyword.call(null,focus_id)));
return goog.dom.getElement([cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_id)].join('')).focus();
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
airboss.utils.local_storage_write.call(null,airboss.design_view.local_storage_id,cljs.core.deref.call(null,airboss.design_view.state));

goog.events.unlisten(window,goog.events.EventType.KEYDOWN,airboss.design_view.key_down_handler);

return goog.events.unlisten(window,goog.events.EventType.RESIZE,airboss.design_view.resize_handler);
})], null));
});
airboss.design_view.ui_toggler = (function airboss$design_view$ui_toggler(){
var visible = reagent.core.atom.call(null,false);
goog.events.listen(window,"keydown",((function (visible){
return (function (e){
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"F10","F10",-1712087704),e))){
e.preventDefault();

return cljs.core.reset_BANG_.call(null,visible,cljs.core.not.call(null,cljs.core.deref.call(null,visible)));
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"ESC","ESC",-359173500),e))){
e.preventDefault();

return cljs.core.reset_BANG_.call(null,visible,false);
} else {
return null;
}
}
});})(visible))
);

return ((function (visible){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,visible))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.render], null);
} else {
return null;
}
});
;})(visible))
});
airboss.design_view.load = (function airboss$design_view$load(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.design_view.ui_toggler], null),document.body.appendChild(goog.dom.createElement("div")));
});

//# sourceMappingURL=design_view.js.map?rel=1507562209552
