// Compiled by ClojureScript 1.9.946 {}
goog.provide('airboss.state_editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('goog.date');
goog.require('airboss.utils');
goog.require('goog.dom');
airboss.state_editor.input_field_id = "airboss.stateviewer.editor-input";

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
airboss.state_editor.Edit_mode = (function (name,type_QMARK_,parser_fn,__meta,__extmap,__hash){
this.name = name;
this.type_QMARK_ = type_QMARK_;
this.parser_fn = parser_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
airboss.state_editor.Edit_mode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8308__auto__,k__8309__auto__){
var self__ = this;
var this__8308__auto____$1 = this;
return this__8308__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8309__auto__,null);
});

airboss.state_editor.Edit_mode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8310__auto__,k30399,else__8311__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
var G__30403 = k30399;
var G__30403__$1 = (((G__30403 instanceof cljs.core.Keyword))?G__30403.fqn:null);
switch (G__30403__$1) {
case "name":
return self__.name;

break;
case "type?":
return self__.type_QMARK_;

break;
case "parser-fn":
return self__.parser_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30399,else__8311__auto__);

}
});

airboss.state_editor.Edit_mode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8322__auto__,writer__8323__auto__,opts__8324__auto__){
var self__ = this;
var this__8322__auto____$1 = this;
var pr_pair__8325__auto__ = ((function (this__8322__auto____$1){
return (function (keyval__8326__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8323__auto__,cljs.core.pr_writer,""," ","",opts__8324__auto__,keyval__8326__auto__);
});})(this__8322__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8323__auto__,pr_pair__8325__auto__,"#airboss.state-editor.Edit-mode{",", ","}",opts__8324__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type?","type?",-1257087559),self__.type_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser-fn","parser-fn",1421747460),self__.parser_fn],null))], null),self__.__extmap));
});

airboss.state_editor.Edit_mode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30398){
var self__ = this;
var G__30398__$1 = this;
return (new cljs.core.RecordIter((0),G__30398__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type?","type?",-1257087559),new cljs.core.Keyword(null,"parser-fn","parser-fn",1421747460)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

airboss.state_editor.Edit_mode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8306__auto__){
var self__ = this;
var this__8306__auto____$1 = this;
return self__.__meta;
});

airboss.state_editor.Edit_mode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8303__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
return (new airboss.state_editor.Edit_mode(self__.name,self__.type_QMARK_,self__.parser_fn,self__.__meta,self__.__extmap,self__.__hash));
});

airboss.state_editor.Edit_mode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8312__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

airboss.state_editor.Edit_mode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8304__auto__){
var self__ = this;
var this__8304__auto____$1 = this;
var h__8122__auto__ = self__.__hash;
if(!((h__8122__auto__ == null))){
return h__8122__auto__;
} else {
var h__8122__auto____$1 = ((function (h__8122__auto__,this__8304__auto____$1){
return (function (coll__8305__auto__){
return (-1957110038 ^ cljs.core.hash_unordered_coll.call(null,coll__8305__auto__));
});})(h__8122__auto__,this__8304__auto____$1))
.call(null,this__8304__auto____$1);
self__.__hash = h__8122__auto____$1;

return h__8122__auto____$1;
}
});

airboss.state_editor.Edit_mode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30400,other30401){
var self__ = this;
var this30400__$1 = this;
return (!((other30401 == null))) && ((this30400__$1.constructor === other30401.constructor)) && (cljs.core._EQ_.call(null,this30400__$1.name,other30401.name)) && (cljs.core._EQ_.call(null,this30400__$1.type_QMARK_,other30401.type_QMARK_)) && (cljs.core._EQ_.call(null,this30400__$1.parser_fn,other30401.parser_fn)) && (cljs.core._EQ_.call(null,this30400__$1.__extmap,other30401.__extmap));
});

airboss.state_editor.Edit_mode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8317__auto__,k__8318__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parser-fn","parser-fn",1421747460),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"type?","type?",-1257087559),null], null), null),k__8318__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8317__auto____$1),self__.__meta),k__8318__auto__);
} else {
return (new airboss.state_editor.Edit_mode(self__.name,self__.type_QMARK_,self__.parser_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8318__auto__)),null));
}
});

airboss.state_editor.Edit_mode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8315__auto__,k__8316__auto__,G__30398){
var self__ = this;
var this__8315__auto____$1 = this;
var pred__30404 = cljs.core.keyword_identical_QMARK_;
var expr__30405 = k__8316__auto__;
if(cljs.core.truth_(pred__30404.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__30405))){
return (new airboss.state_editor.Edit_mode(G__30398,self__.type_QMARK_,self__.parser_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30404.call(null,new cljs.core.Keyword(null,"type?","type?",-1257087559),expr__30405))){
return (new airboss.state_editor.Edit_mode(self__.name,G__30398,self__.parser_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30404.call(null,new cljs.core.Keyword(null,"parser-fn","parser-fn",1421747460),expr__30405))){
return (new airboss.state_editor.Edit_mode(self__.name,self__.type_QMARK_,G__30398,self__.__meta,self__.__extmap,null));
} else {
return (new airboss.state_editor.Edit_mode(self__.name,self__.type_QMARK_,self__.parser_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8316__auto__,G__30398),null));
}
}
}
});

airboss.state_editor.Edit_mode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8320__auto__){
var self__ = this;
var this__8320__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type?","type?",-1257087559),self__.type_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser-fn","parser-fn",1421747460),self__.parser_fn],null))], null),self__.__extmap));
});

airboss.state_editor.Edit_mode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8307__auto__,G__30398){
var self__ = this;
var this__8307__auto____$1 = this;
return (new airboss.state_editor.Edit_mode(self__.name,self__.type_QMARK_,self__.parser_fn,G__30398,self__.__extmap,self__.__hash));
});

airboss.state_editor.Edit_mode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8313__auto__,entry__8314__auto__){
var self__ = this;
var this__8313__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8314__auto__)){
return this__8313__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8314__auto__,(0)),cljs.core._nth.call(null,entry__8314__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8313__auto____$1,entry__8314__auto__);
}
});

airboss.state_editor.Edit_mode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"type?","type?",383443968,null),new cljs.core.Symbol(null,"parser-fn","parser-fn",-1232688309,null)], null);
});

airboss.state_editor.Edit_mode.cljs$lang$type = true;

airboss.state_editor.Edit_mode.cljs$lang$ctorPrSeq = (function (this__8344__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"airboss.state-editor/Edit-mode");
});

airboss.state_editor.Edit_mode.cljs$lang$ctorPrWriter = (function (this__8344__auto__,writer__8345__auto__){
return cljs.core._write.call(null,writer__8345__auto__,"airboss.state-editor/Edit-mode");
});

airboss.state_editor.__GT_Edit_mode = (function airboss$state_editor$__GT_Edit_mode(name,type_QMARK_,parser_fn){
return (new airboss.state_editor.Edit_mode(name,type_QMARK_,parser_fn,null,null,null));
});

airboss.state_editor.map__GT_Edit_mode = (function airboss$state_editor$map__GT_Edit_mode(G__30402){
return (new airboss.state_editor.Edit_mode(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__30402),new cljs.core.Keyword(null,"type?","type?",-1257087559).cljs$core$IFn$_invoke$arity$1(G__30402),new cljs.core.Keyword(null,"parser-fn","parser-fn",1421747460).cljs$core$IFn$_invoke$arity$1(G__30402),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30402,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type?","type?",-1257087559),new cljs.core.Keyword(null,"parser-fn","parser-fn",1421747460))),null));
});

airboss.state_editor.edit_modes = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new airboss.state_editor.Edit_mode("string",cljs.core.string_QMARK_,cljs.core.str,null,null,null)),(new airboss.state_editor.Edit_mode("number",cljs.core.number_QMARK_,cljs.reader.read_string,null,null,null)),(new airboss.state_editor.Edit_mode("boolean",cljs.core.boolean_QMARK_,cljs.reader.read_string,null,null,null)),(new airboss.state_editor.Edit_mode(":keyword",cljs.core.keyword_QMARK_,cljs.core.keyword,null,null,null)),(new airboss.state_editor.Edit_mode("symbol",cljs.core.symbol_QMARK_,cljs.core.symbol,null,null,null)),(new airboss.state_editor.Edit_mode("edn",(function (v){
return true;
}),cljs.reader.read_string,null,null,null))], null);
airboss.state_editor.throw_exception = (function airboss$state_editor$throw_exception(s,expected_type){
throw (new Error(["Unable to create a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_type)," from \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('')));
});
airboss.state_editor.parse_and_validate = (function airboss$state_editor$parse_and_validate(s,p__30408){
var map__30409 = p__30408;
var map__30409__$1 = ((((!((map__30409 == null)))?((((map__30409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30409):map__30409);
var name = cljs.core.get.call(null,map__30409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_QMARK_ = cljs.core.get.call(null,map__30409__$1,new cljs.core.Keyword(null,"type?","type?",-1257087559));
var parser_fn = cljs.core.get.call(null,map__30409__$1,new cljs.core.Keyword(null,"parser-fn","parser-fn",1421747460));
try{var v = parser_fn.call(null,s);
if(cljs.core.truth_(type_QMARK_.call(null,v))){
return v;
} else {
return airboss.state_editor.throw_exception.call(null,s,name);
}
}catch (e30411){var e = e30411;
return airboss.state_editor.throw_exception.call(null,s,name);
}});
airboss.state_editor.get_editing_mode = (function airboss$state_editor$get_editing_mode(value){
if((value == null)){
return cljs.core.last.call(null,airboss.state_editor.edit_modes);
} else {
return cljs.core.some.call(null,(function (v){
if(cljs.core.truth_(new cljs.core.Keyword(null,"type?","type?",-1257087559).cljs$core$IFn$_invoke$arity$1(v).call(null,value))){
return v;
} else {
return null;
}
}),airboss.state_editor.edit_modes);
}
});
airboss.state_editor.error_field = (function airboss$state_editor$error_field(error){
var map__30412 = airboss.utils.absolut_position.call(null,goog.dom.getElement(airboss.state_editor.input_field_id));
var map__30412__$1 = ((((!((map__30412 == null)))?((((map__30412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30412):map__30412);
var left = cljs.core.get.call(null,map__30412__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__30412__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var width = cljs.core.get.call(null,map__30412__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937)],[1.4,new cljs.core.Keyword(null,"ellipsis","ellipsis",998505738),"0 5px 5px rgba(71,71,71, 1)",new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"normal","normal",-1519123858),(top + (23)),width,"#FF5722",(5000000),(4),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"fixed","fixed",-562004358),left])], null),error], null);
});
airboss.state_editor.render_input_field = (function airboss$state_editor$render_input_field(value,on_value_changed,on_cancel){
var state_atom = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),airboss.state_editor.get_editing_mode.call(null,value),new cljs.core.Keyword(null,"error","error",-978969032),null], null));
return ((function (state_atom){
return (function (_,___$1,___$2){
var map__30414 = cljs.core.deref.call(null,state_atom);
var map__30414__$1 = ((((!((map__30414 == null)))?((((map__30414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30414):map__30414);
var state = map__30414__$1;
var value__$1 = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__30414__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var map__30415 = new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993).cljs$core$IFn$_invoke$arity$1(state);
var map__30415__$1 = ((((!((map__30415 == null)))?((((map__30415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30415):map__30415);
var edit_mode = map__30415__$1;
var name = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),airboss.state_editor.input_field_id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__30414,map__30414__$1,state,value__$1,error,map__30415,map__30415__$1,edit_mode,name,state_atom){
return (function (e){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),e.target.value);
});})(map__30414,map__30414__$1,state,value__$1,error,map__30415,map__30415__$1,edit_mode,name,state_atom))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (map__30414,map__30414__$1,state,value__$1,error,map__30415,map__30415__$1,edit_mode,name,state_atom){
return (function (e){
if(cljs.core.truth_(error)){
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),null);
} else {
}

e.stopPropagation();

if(cljs.core.truth_(airboss.utils.modifier_QMARK_.call(null,e))){
return null;
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"DOWN","DOWN",1488296947),e))){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),airboss.utils.cyclic_next.call(null,edit_mode,airboss.state_editor.edit_modes));
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"UP","UP",756346237),e))){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),airboss.utils.cyclic_previous.call(null,edit_mode,airboss.state_editor.edit_modes));
} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"ENTER","ENTER",-1673322884),e))){
try{return on_value_changed.call(null,airboss.state_editor.parse_and_validate.call(null,value__$1,edit_mode));
}catch (e30418){if((e30418 instanceof Error)){
var e__$1 = e30418;
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),e__$1.message);
} else {
throw e30418;

}
}} else {
if(cljs.core.truth_(airboss.utils.key_QMARK_.call(null,new cljs.core.Keyword(null,"ESC","ESC",-359173500),e))){
return on_cancel.call(null);
} else {
return null;
}
}
}
}
}
});})(map__30414,map__30414__$1,state,value__$1,error,map__30415,map__30415__$1,edit_mode,name,state_atom))
,new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(175, 207, 249, 0.7)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(4),new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(error)?"#FF5722":"transparent"))].join(''),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(160),new cljs.core.Keyword(null,"min-height","min-height",398480837),(23),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"background","background",-863952629),"rgba(46, 46, 46, 0.93)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"height","height",1025178622),(23),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(6),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),name], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_editor.error_field,error], null):null)], null);
});
;})(state_atom))
});
airboss.state_editor.render = (function airboss$state_editor$render(_,___$1,___$2){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (value,on_value_changed,on_cancel){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [airboss.state_editor.render_input_field,value,on_value_changed,on_cancel], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var temp__4657__auto__ = goog.dom.getElement(airboss.state_editor.input_field_id);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return node.focus();
} else {
return null;
}
})], null));
});

//# sourceMappingURL=state_editor.js.map?rel=1507562209902
