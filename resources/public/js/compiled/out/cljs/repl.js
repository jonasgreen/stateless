// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36281){
var map__36282 = p__36281;
var map__36282__$1 = ((((!((map__36282 == null)))?((((map__36282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36282):map__36282);
var m = map__36282__$1;
var n = cljs.core.get.call(null,map__36282__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36282__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36284_36306 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36285_36307 = null;
var count__36286_36308 = (0);
var i__36287_36309 = (0);
while(true){
if((i__36287_36309 < count__36286_36308)){
var f_36310 = cljs.core._nth.call(null,chunk__36285_36307,i__36287_36309);
cljs.core.println.call(null,"  ",f_36310);

var G__36311 = seq__36284_36306;
var G__36312 = chunk__36285_36307;
var G__36313 = count__36286_36308;
var G__36314 = (i__36287_36309 + (1));
seq__36284_36306 = G__36311;
chunk__36285_36307 = G__36312;
count__36286_36308 = G__36313;
i__36287_36309 = G__36314;
continue;
} else {
var temp__4657__auto___36315 = cljs.core.seq.call(null,seq__36284_36306);
if(temp__4657__auto___36315){
var seq__36284_36316__$1 = temp__4657__auto___36315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36284_36316__$1)){
var c__8507__auto___36317 = cljs.core.chunk_first.call(null,seq__36284_36316__$1);
var G__36318 = cljs.core.chunk_rest.call(null,seq__36284_36316__$1);
var G__36319 = c__8507__auto___36317;
var G__36320 = cljs.core.count.call(null,c__8507__auto___36317);
var G__36321 = (0);
seq__36284_36306 = G__36318;
chunk__36285_36307 = G__36319;
count__36286_36308 = G__36320;
i__36287_36309 = G__36321;
continue;
} else {
var f_36322 = cljs.core.first.call(null,seq__36284_36316__$1);
cljs.core.println.call(null,"  ",f_36322);

var G__36323 = cljs.core.next.call(null,seq__36284_36316__$1);
var G__36324 = null;
var G__36325 = (0);
var G__36326 = (0);
seq__36284_36306 = G__36323;
chunk__36285_36307 = G__36324;
count__36286_36308 = G__36325;
i__36287_36309 = G__36326;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36327 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7668__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36327);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36327)))?cljs.core.second.call(null,arglists_36327):arglists_36327));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36288_36328 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36289_36329 = null;
var count__36290_36330 = (0);
var i__36291_36331 = (0);
while(true){
if((i__36291_36331 < count__36290_36330)){
var vec__36292_36332 = cljs.core._nth.call(null,chunk__36289_36329,i__36291_36331);
var name_36333 = cljs.core.nth.call(null,vec__36292_36332,(0),null);
var map__36295_36334 = cljs.core.nth.call(null,vec__36292_36332,(1),null);
var map__36295_36335__$1 = ((((!((map__36295_36334 == null)))?((((map__36295_36334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36295_36334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36295_36334):map__36295_36334);
var doc_36336 = cljs.core.get.call(null,map__36295_36335__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36337 = cljs.core.get.call(null,map__36295_36335__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36333);

cljs.core.println.call(null," ",arglists_36337);

if(cljs.core.truth_(doc_36336)){
cljs.core.println.call(null," ",doc_36336);
} else {
}

var G__36338 = seq__36288_36328;
var G__36339 = chunk__36289_36329;
var G__36340 = count__36290_36330;
var G__36341 = (i__36291_36331 + (1));
seq__36288_36328 = G__36338;
chunk__36289_36329 = G__36339;
count__36290_36330 = G__36340;
i__36291_36331 = G__36341;
continue;
} else {
var temp__4657__auto___36342 = cljs.core.seq.call(null,seq__36288_36328);
if(temp__4657__auto___36342){
var seq__36288_36343__$1 = temp__4657__auto___36342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36288_36343__$1)){
var c__8507__auto___36344 = cljs.core.chunk_first.call(null,seq__36288_36343__$1);
var G__36345 = cljs.core.chunk_rest.call(null,seq__36288_36343__$1);
var G__36346 = c__8507__auto___36344;
var G__36347 = cljs.core.count.call(null,c__8507__auto___36344);
var G__36348 = (0);
seq__36288_36328 = G__36345;
chunk__36289_36329 = G__36346;
count__36290_36330 = G__36347;
i__36291_36331 = G__36348;
continue;
} else {
var vec__36297_36349 = cljs.core.first.call(null,seq__36288_36343__$1);
var name_36350 = cljs.core.nth.call(null,vec__36297_36349,(0),null);
var map__36300_36351 = cljs.core.nth.call(null,vec__36297_36349,(1),null);
var map__36300_36352__$1 = ((((!((map__36300_36351 == null)))?((((map__36300_36351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36300_36351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36300_36351):map__36300_36351);
var doc_36353 = cljs.core.get.call(null,map__36300_36352__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36354 = cljs.core.get.call(null,map__36300_36352__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36350);

cljs.core.println.call(null," ",arglists_36354);

if(cljs.core.truth_(doc_36353)){
cljs.core.println.call(null," ",doc_36353);
} else {
}

var G__36355 = cljs.core.next.call(null,seq__36288_36343__$1);
var G__36356 = null;
var G__36357 = (0);
var G__36358 = (0);
seq__36288_36328 = G__36355;
chunk__36289_36329 = G__36356;
count__36290_36330 = G__36357;
i__36291_36331 = G__36358;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36302 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36303 = null;
var count__36304 = (0);
var i__36305 = (0);
while(true){
if((i__36305 < count__36304)){
var role = cljs.core._nth.call(null,chunk__36303,i__36305);
var temp__4657__auto___36359__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36359__$1)){
var spec_36360 = temp__4657__auto___36359__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36360));
} else {
}

var G__36361 = seq__36302;
var G__36362 = chunk__36303;
var G__36363 = count__36304;
var G__36364 = (i__36305 + (1));
seq__36302 = G__36361;
chunk__36303 = G__36362;
count__36304 = G__36363;
i__36305 = G__36364;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36302);
if(temp__4657__auto____$1){
var seq__36302__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36302__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__36302__$1);
var G__36365 = cljs.core.chunk_rest.call(null,seq__36302__$1);
var G__36366 = c__8507__auto__;
var G__36367 = cljs.core.count.call(null,c__8507__auto__);
var G__36368 = (0);
seq__36302 = G__36365;
chunk__36303 = G__36366;
count__36304 = G__36367;
i__36305 = G__36368;
continue;
} else {
var role = cljs.core.first.call(null,seq__36302__$1);
var temp__4657__auto___36369__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36369__$2)){
var spec_36370 = temp__4657__auto___36369__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36370));
} else {
}

var G__36371 = cljs.core.next.call(null,seq__36302__$1);
var G__36372 = null;
var G__36373 = (0);
var G__36374 = (0);
seq__36302 = G__36371;
chunk__36303 = G__36372;
count__36304 = G__36373;
i__36305 = G__36374;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1507562216600
