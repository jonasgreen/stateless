// Compiled by ClojureScript 1.9.946 {}
goog.provide('bedrock.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.pprint');
/**
 * Join a list of elements into a presentation-friendly string
 */
bedrock.util.soft_join = (function bedrock$util$soft_join(delim,xs){
return clojure.string.join.call(null,delim,cljs.core.filter.call(null,cljs.core.seq,cljs.core.map.call(null,cljs.core.str,xs)));
});
/**
 * Guards a value by predicate on said value
 */
bedrock.util.guard = (function bedrock$util$guard(pred,x){
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return null;
}
});
/**
 * As partial, but slices the bound args in AFTER the unbound ones
 */
bedrock.util.partial_GT__GT_ = (function bedrock$util$partial_GT__GT_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34469 = arguments.length;
var i__8840__auto___34470 = (0);
while(true){
if((i__8840__auto___34470 < len__8839__auto___34469)){
args__8846__auto__.push((arguments[i__8840__auto___34470]));

var G__34471 = (i__8840__auto___34470 + (1));
i__8840__auto___34470 = G__34471;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.partial_GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.partial_GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function() { 
var G__34472__delegate = function (xs){
return cljs.core.apply.call(null,f,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,xs,args))));
};
var G__34472 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__34473__i = 0, G__34473__a = new Array(arguments.length -  0);
while (G__34473__i < G__34473__a.length) {G__34473__a[G__34473__i] = arguments[G__34473__i + 0]; ++G__34473__i;}
  xs = new cljs.core.IndexedSeq(G__34473__a,0,null);
} 
return G__34472__delegate.call(this,xs);};
G__34472.cljs$lang$maxFixedArity = 0;
G__34472.cljs$lang$applyTo = (function (arglist__34474){
var xs = cljs.core.seq(arglist__34474);
return G__34472__delegate(xs);
});
G__34472.cljs$core$IFn$_invoke$arity$variadic = G__34472__delegate;
return G__34472;
})()
;
});

bedrock.util.partial_GT__GT_.cljs$lang$maxFixedArity = (1);

bedrock.util.partial_GT__GT_.cljs$lang$applyTo = (function (seq34467){
var G__34468 = cljs.core.first.call(null,seq34467);
var seq34467__$1 = cljs.core.next.call(null,seq34467);
return bedrock.util.partial_GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__34468,seq34467__$1);
});

/**
 * As partial, but slices the bound args in after the first unbound one
 */
bedrock.util.partial_1 = (function bedrock$util$partial_1(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34477 = arguments.length;
var i__8840__auto___34478 = (0);
while(true){
if((i__8840__auto___34478 < len__8839__auto___34477)){
args__8846__auto__.push((arguments[i__8840__auto___34478]));

var G__34479 = (i__8840__auto___34478 + (1));
i__8840__auto___34478 = G__34479;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.partial_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.partial_1.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function() { 
var G__34480__delegate = function (x,xs){
return cljs.core.apply.call(null,f,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),args,xs))));
};
var G__34480 = function (x,var_args){
var xs = null;
if (arguments.length > 1) {
var G__34481__i = 0, G__34481__a = new Array(arguments.length -  1);
while (G__34481__i < G__34481__a.length) {G__34481__a[G__34481__i] = arguments[G__34481__i + 1]; ++G__34481__i;}
  xs = new cljs.core.IndexedSeq(G__34481__a,0,null);
} 
return G__34480__delegate.call(this,x,xs);};
G__34480.cljs$lang$maxFixedArity = 1;
G__34480.cljs$lang$applyTo = (function (arglist__34482){
var x = cljs.core.first(arglist__34482);
var xs = cljs.core.rest(arglist__34482);
return G__34480__delegate(x,xs);
});
G__34480.cljs$core$IFn$_invoke$arity$variadic = G__34480__delegate;
return G__34480;
})()
;
});

bedrock.util.partial_1.cljs$lang$maxFixedArity = (1);

bedrock.util.partial_1.cljs$lang$applyTo = (function (seq34475){
var G__34476 = cljs.core.first.call(null,seq34475);
var seq34475__$1 = cljs.core.next.call(null,seq34475);
return bedrock.util.partial_1.cljs$core$IFn$_invoke$arity$variadic(G__34476,seq34475__$1);
});

/**
 * As partial, but slices the bound args in after the second unbound one
 */
bedrock.util.partial_2 = (function bedrock$util$partial_2(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34485 = arguments.length;
var i__8840__auto___34486 = (0);
while(true){
if((i__8840__auto___34486 < len__8839__auto___34485)){
args__8846__auto__.push((arguments[i__8840__auto___34486]));

var G__34487 = (i__8840__auto___34486 + (1));
i__8840__auto___34486 = G__34487;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.partial_2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.partial_2.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function() { 
var G__34488__delegate = function (x,y,xs){
return cljs.core.apply.call(null,f,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),(function (){var x__8530__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);
})(),args,xs))));
};
var G__34488 = function (x,y,var_args){
var xs = null;
if (arguments.length > 2) {
var G__34489__i = 0, G__34489__a = new Array(arguments.length -  2);
while (G__34489__i < G__34489__a.length) {G__34489__a[G__34489__i] = arguments[G__34489__i + 2]; ++G__34489__i;}
  xs = new cljs.core.IndexedSeq(G__34489__a,0,null);
} 
return G__34488__delegate.call(this,x,y,xs);};
G__34488.cljs$lang$maxFixedArity = 2;
G__34488.cljs$lang$applyTo = (function (arglist__34490){
var x = cljs.core.first(arglist__34490);
arglist__34490 = cljs.core.next(arglist__34490);
var y = cljs.core.first(arglist__34490);
var xs = cljs.core.rest(arglist__34490);
return G__34488__delegate(x,y,xs);
});
G__34488.cljs$core$IFn$_invoke$arity$variadic = G__34488__delegate;
return G__34488;
})()
;
});

bedrock.util.partial_2.cljs$lang$maxFixedArity = (1);

bedrock.util.partial_2.cljs$lang$applyTo = (function (seq34483){
var G__34484 = cljs.core.first.call(null,seq34483);
var seq34483__$1 = cljs.core.next.call(null,seq34483);
return bedrock.util.partial_2.cljs$core$IFn$_invoke$arity$variadic(G__34484,seq34483__$1);
});

/**
 * Flattens a seq by 1 level and removes nils
 */
bedrock.util.flatten_1_clean = (function bedrock$util$flatten_1_clean(xs){
return bedrock.util.guard.call(null,cljs.core.seq,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8476__auto__ = (function bedrock$util$flatten_1_clean_$_iter__34491(s__34492){
return (new cljs.core.LazySeq(null,(function (){
var s__34492__$1 = s__34492;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34492__$1);
if(temp__4657__auto__){
var s__34492__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34492__$2)){
var c__8474__auto__ = cljs.core.chunk_first.call(null,s__34492__$2);
var size__8475__auto__ = cljs.core.count.call(null,c__8474__auto__);
var b__34494 = cljs.core.chunk_buffer.call(null,size__8475__auto__);
if((function (){var i__34493 = (0);
while(true){
if((i__34493 < size__8475__auto__)){
var x = cljs.core._nth.call(null,c__8474__auto__,i__34493);
cljs.core.chunk_append.call(null,b__34494,(cljs.core.truth_(x)?((cljs.core.sequential_QMARK_.call(null,x))?cljs.core.remove.call(null,cljs.core.nil_QMARK_,x):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)):null));

var G__34495 = (i__34493 + (1));
i__34493 = G__34495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34494),bedrock$util$flatten_1_clean_$_iter__34491.call(null,cljs.core.chunk_rest.call(null,s__34492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34494),null);
}
} else {
var x = cljs.core.first.call(null,s__34492__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(x)?((cljs.core.sequential_QMARK_.call(null,x))?cljs.core.remove.call(null,cljs.core.nil_QMARK_,x):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)):null),bedrock$util$flatten_1_clean_$_iter__34491.call(null,cljs.core.rest.call(null,s__34492__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__.call(null,xs);
})()));
});
/**
 * Deep-merges zero or more maps. (Subject to change)
 */
bedrock.util.deep_merge = (function bedrock$util$deep_merge(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34500 = arguments.length;
var i__8840__auto___34501 = (0);
while(true){
if((i__8840__auto___34501 < len__8839__auto___34500)){
args__8846__auto__.push((arguments[i__8840__auto___34501]));

var G__34502 = (i__8840__auto___34501 + (1));
i__8840__auto___34501 = G__34502;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return bedrock.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

bedrock.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(args)){
var vec__34497 = args;
var seq__34498 = cljs.core.seq.call(null,vec__34497);
var first__34499 = cljs.core.first.call(null,seq__34498);
var seq__34498__$1 = cljs.core.next.call(null,seq__34498);
var m = first__34499;
var rest = seq__34498__$1;
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.apply.call(null,cljs.core.merge_with,bedrock.util.deep_merge,args);
} else {
if(rest){
return cljs.core.apply.call(null,cljs.core.merge_with,bedrock.util.deep_merge,rest);
} else {
return m;

}
}
} else {
return null;
}
});

bedrock.util.deep_merge.cljs$lang$maxFixedArity = (0);

bedrock.util.deep_merge.cljs$lang$applyTo = (function (seq34496){
return bedrock.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34496));
});

/**
 * As merge, but does not overwrite with values that are nil
 */
bedrock.util.merge_proper = (function bedrock$util$merge_proper(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34505 = arguments.length;
var i__8840__auto___34506 = (0);
while(true){
if((i__8840__auto___34506 < len__8839__auto___34505)){
args__8846__auto__.push((arguments[i__8840__auto___34506]));

var G__34507 = (i__8840__auto___34506 + (1));
i__8840__auto___34506 = G__34507;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.merge_proper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.merge_proper.cljs$core$IFn$_invoke$arity$variadic = (function (m,maps){
return cljs.core.apply.call(null,cljs.core.merge,m,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.filter,cljs.core.second),maps));
});

bedrock.util.merge_proper.cljs$lang$maxFixedArity = (1);

bedrock.util.merge_proper.cljs$lang$applyTo = (function (seq34503){
var G__34504 = cljs.core.first.call(null,seq34503);
var seq34503__$1 = cljs.core.next.call(null,seq34503);
return bedrock.util.merge_proper.cljs$core$IFn$_invoke$arity$variadic(G__34504,seq34503__$1);
});

/**
 * As assoc, but overwrites only values where predicate holds
 */
bedrock.util.assoc_where = (function bedrock$util$assoc_where(var_args){
var G__34512 = arguments.length;
switch (G__34512) {
case 1:
return bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___34524 = arguments.length;
var i__8840__auto___34525 = (0);
while(true){
if((i__8840__auto___34525 < len__8839__auto___34524)){
args_arr__8858__auto__.push((arguments[i__8840__auto___34525]));

var G__34526 = (i__8840__auto___34525 + (1));
i__8840__auto___34525 = G__34526;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((2)),(0),null));
return bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8859__auto__);

}
});

bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$1 = (function (_){
return null;
});

bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$2 = (function (_,m){
return m;
});

bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$variadic = (function (pred,m,next){
var m__$1 = m;
var G__34516 = next;
var vec__34517 = G__34516;
var seq__34518 = cljs.core.seq.call(null,vec__34517);
var first__34519 = cljs.core.first.call(null,seq__34518);
var seq__34518__$1 = cljs.core.next.call(null,seq__34518);
var k = first__34519;
var first__34519__$1 = cljs.core.first.call(null,seq__34518__$1);
var seq__34518__$2 = cljs.core.next.call(null,seq__34518__$1);
var v = first__34519__$1;
var next__$1 = seq__34518__$2;
var m__$2 = m__$1;
var G__34516__$1 = G__34516;
while(true){
var m__$3 = m__$2;
var vec__34520 = G__34516__$1;
var seq__34521 = cljs.core.seq.call(null,vec__34520);
var first__34522 = cljs.core.first.call(null,seq__34521);
var seq__34521__$1 = cljs.core.next.call(null,seq__34521);
var k__$1 = first__34522;
var first__34522__$1 = cljs.core.first.call(null,seq__34521__$1);
var seq__34521__$2 = cljs.core.next.call(null,seq__34521__$1);
var v__$1 = first__34522__$1;
var next__$2 = seq__34521__$2;
var m__$4 = (cljs.core.truth_(pred.call(null,cljs.core.get.call(null,m__$3,k__$1)))?cljs.core.assoc.call(null,m__$3,k__$1,v__$1):m__$3);
if(next__$2){
var G__34527 = m__$4;
var G__34528 = next__$2;
m__$2 = G__34527;
G__34516__$1 = G__34528;
continue;
} else {
return m__$4;
}
break;
}
});

bedrock.util.assoc_where.cljs$lang$applyTo = (function (seq34509){
var G__34510 = cljs.core.first.call(null,seq34509);
var seq34509__$1 = cljs.core.next.call(null,seq34509);
var G__34511 = cljs.core.first.call(null,seq34509__$1);
var seq34509__$2 = cljs.core.next.call(null,seq34509__$1);
return bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$variadic(G__34510,G__34511,seq34509__$2);
});

bedrock.util.assoc_where.cljs$lang$maxFixedArity = (2);

/**
 * Get current time in milliseconds
 */
bedrock.util.get_time = (function bedrock$util$get_time(){
return (new Date()).getTime();
});
/**
 * Stupid sleep routine that consumes CPU-cycles
 */
bedrock.util.stupid_sleep = (function bedrock$util$stupid_sleep(ms){
var t = (ms + bedrock.util.get_time.call(null));
while(true){
if((bedrock.util.get_time.call(null) < t)){
continue;
} else {
return null;
}
break;
}
});
/**
 * pprint to a string
 */
bedrock.util.pp_str = (function bedrock$util$pp_str(x){
var sb__8697__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34529_34531 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34530_34532 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34529_34531,_STAR_print_fn_STAR_34530_34532,sb__8697__auto__){
return (function (x__8698__auto__){
return sb__8697__auto__.append(x__8698__auto__);
});})(_STAR_print_newline_STAR_34529_34531,_STAR_print_fn_STAR_34530_34532,sb__8697__auto__))
;

try{cljs.pprint.pprint.call(null,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34530_34532;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34529_34531;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8697__auto__)].join('');
});
/**
 * pprint to a string, shortening functions. nb! for human consumption only.
 * The optional ns-or-kw argument determines a namespace that is printed as ::.
 * If ns is a string, it's treated as a namespace-name, if it's a keyword, the
 * namespace of the keyword is understood. If it's :short namespaces are shortened
 */
bedrock.util.pp_str_SINGLEQUOTE_ = (function bedrock$util$pp_str_SINGLEQUOTE_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34540 = arguments.length;
var i__8840__auto___34541 = (0);
while(true){
if((i__8840__auto___34541 < len__8839__auto___34540)){
args__8846__auto__.push((arguments[i__8840__auto___34541]));

var G__34542 = (i__8840__auto___34541 + (1));
i__8840__auto___34541 = G__34542;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.pp_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.pp_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__34536){
var vec__34537 = p__34536;
var ns = cljs.core.nth.call(null,vec__34537,(0),null);
var ns__$1 = ((typeof ns === 'string')?ns:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"short","short",1928760516),ns))?ns:(((ns instanceof cljs.core.Keyword))?cljs.core.namespace.call(null,ns):new cljs.core.Keyword(null,"full","full",436801220)
)));
return bedrock.util.pp_str.call(null,clojure.walk.prewalk.call(null,((function (ns__$1,vec__34537,ns){
return (function (p1__34533_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__34533_SHARP_)){
return cljs.core.symbol.call(null,"#(...)");
} else {
if((p1__34533_SHARP_ instanceof cljs.core.Keyword)){
if((cljs.core.namespace.call(null,p1__34533_SHARP_) == null)){
return p1__34533_SHARP_;
} else {
if(cljs.core._EQ_.call(null,ns__$1,new cljs.core.Keyword(null,"short","short",1928760516))){
return cljs.core.symbol.call(null,["::/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__34533_SHARP_))].join(''));
} else {
if(cljs.core._EQ_.call(null,ns__$1,cljs.core.namespace.call(null,p1__34533_SHARP_))){
return cljs.core.symbol.call(null,["::",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__34533_SHARP_))].join(''));
} else {
return p1__34533_SHARP_;

}
}
}
} else {
return p1__34533_SHARP_;

}
}
});})(ns__$1,vec__34537,ns))
,x));
});

bedrock.util.pp_str_SINGLEQUOTE_.cljs$lang$maxFixedArity = (1);

bedrock.util.pp_str_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq34534){
var G__34535 = cljs.core.first.call(null,seq34534);
var seq34534__$1 = cljs.core.next.call(null,seq34534);
return bedrock.util.pp_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(G__34535,seq34534__$1);
});

/**
 * identity with (println pp-str' % %2) as side effect
 */
bedrock.util.prn_str_SINGLEQUOTE_ = (function bedrock$util$prn_str_SINGLEQUOTE_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34549 = arguments.length;
var i__8840__auto___34550 = (0);
while(true){
if((i__8840__auto___34550 < len__8839__auto___34549)){
args__8846__auto__.push((arguments[i__8840__auto___34550]));

var G__34551 = (i__8840__auto___34550 + (1));
i__8840__auto___34550 = G__34551;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.prn_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.prn_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__34545){
var vec__34546 = p__34545;
var opt = cljs.core.nth.call(null,vec__34546,(0),null);
cljs.core.println.call(null,bedrock.util.pp_str_SINGLEQUOTE_.call(null,x,opt));

return x;
});

bedrock.util.prn_str_SINGLEQUOTE_.cljs$lang$maxFixedArity = (1);

bedrock.util.prn_str_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq34543){
var G__34544 = cljs.core.first.call(null,seq34543);
var seq34543__$1 = cljs.core.next.call(null,seq34543);
return bedrock.util.prn_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(G__34544,seq34543__$1);
});

/**
 * Turn a keyword into lower-case
 */
bedrock.util.kw_lowercase = (function bedrock$util$kw_lowercase(kw){
return cljs.core.keyword.call(null,clojure.string.lower_case.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)].join('')))));
});
/**
 * Composes a list functions for application from left to right, treating nil as identity
 */
bedrock.util.comp_GT_ = (function bedrock$util$comp_GT_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34554 = arguments.length;
var i__8840__auto___34555 = (0);
while(true){
if((i__8840__auto___34555 < len__8839__auto___34554)){
args__8846__auto__.push((arguments[i__8840__auto___34555]));

var G__34556 = (i__8840__auto___34555 + (1));
i__8840__auto___34555 = G__34556;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return bedrock.util.comp_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

bedrock.util.comp_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p1__34552_SHARP_){
var or__7668__auto__ = p1__34552_SHARP_;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.identity;
}
}),fns)));
});

bedrock.util.comp_GT_.cljs$lang$maxFixedArity = (0);

bedrock.util.comp_GT_.cljs$lang$applyTo = (function (seq34553){
return bedrock.util.comp_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34553));
});

bedrock.util.comp_or = (function bedrock$util$comp_or(pred1,pred2){

return (function (pred1__$1,pred2__$1){
if(cljs.core.not.call(null,pred1__$1)){
return pred2__$1;
} else {
if(cljs.core.not.call(null,pred2__$1)){
return pred1__$1;
} else {
return (function (v){
var or__7668__auto__ = pred1__$1.call(null,v);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return pred2__$1.call(null,v);
}
});

}
}
});
});
bedrock.util.comp_and = (function bedrock$util$comp_and(pred1,pred2){

return (function (pred1__$1,pred2__$1){
if(cljs.core.not.call(null,pred1__$1)){
return pred2__$1;
} else {
if(cljs.core.not.call(null,pred2__$1)){
return pred1__$1;
} else {
return (function (v){
var and__7656__auto__ = pred1__$1.call(null,v);
if(cljs.core.truth_(and__7656__auto__)){
return pred2__$1.call(null,v);
} else {
return and__7656__auto__;
}
});

}
}
});
});
bedrock.util.replace_template = (function bedrock$util$replace_template(text,seq){
var m = bedrock.util.map_keys.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.str),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),seq)));
return clojure.string.replace.call(null,text,/\{\w+}/,cljs.core.comp.call(null,m,cljs.core.keyword,clojure.string.join,cljs.core.butlast,cljs.core.rest));
});
bedrock.util.assoc_some = (function bedrock$util$assoc_some(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34563 = arguments.length;
var i__8840__auto___34564 = (0);
while(true){
if((i__8840__auto___34564 < len__8839__auto___34563)){
args__8846__auto__.push((arguments[i__8840__auto___34564]));

var G__34565 = (i__8840__auto___34564 + (1));
i__8840__auto___34564 = G__34565;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,m,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p__34559){
var vec__34560 = p__34559;
var _ = cljs.core.nth.call(null,vec__34560,(0),null);
var v = cljs.core.nth.call(null,vec__34560,(1),null);
return !((v == null));
}),cljs.core.partition_all.call(null,(2),kvs))));
});

bedrock.util.assoc_some.cljs$lang$maxFixedArity = (1);

bedrock.util.assoc_some.cljs$lang$applyTo = (function (seq34557){
var G__34558 = cljs.core.first.call(null,seq34557);
var seq34557__$1 = cljs.core.next.call(null,seq34557);
return bedrock.util.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__34558,seq34557__$1);
});

/**
 * Collects the keys of a tree of nodes starting from start-key and enumerated by child-lister.
 *   Optional flag :pre-order / :post-order
 *   :pre-order is default
 */
bedrock.util.graph_collect_tree = (function bedrock$util$graph_collect_tree(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34570 = arguments.length;
var i__8840__auto___34571 = (0);
while(true){
if((i__8840__auto___34571 < len__8839__auto___34570)){
args__8846__auto__.push((arguments[i__8840__auto___34571]));

var G__34572 = (i__8840__auto___34571 + (1));
i__8840__auto___34571 = G__34572;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return bedrock.util.graph_collect_tree.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

bedrock.util.graph_collect_tree.cljs$core$IFn$_invoke$arity$variadic = (function (map_graph,child_lister,start_key,flags){
var f = (function bedrock$util$f(m,k){
var xs = cljs.core.map.call(null,cljs.core.partial.call(null,bedrock$util$f,cljs.core.dissoc.call(null,m,k)),child_lister.call(null,cljs.core.get.call(null,m,k)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"post-order","post-order",-1882347383).cljs$core$IFn$_invoke$arity$1(cljs.core.set.call(null,flags)))){
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),xs);
}
});
return cljs.core.distinct.call(null,cljs.core.flatten.call(null,f.call(null,map_graph,start_key)));
});

bedrock.util.graph_collect_tree.cljs$lang$maxFixedArity = (3);

bedrock.util.graph_collect_tree.cljs$lang$applyTo = (function (seq34566){
var G__34567 = cljs.core.first.call(null,seq34566);
var seq34566__$1 = cljs.core.next.call(null,seq34566);
var G__34568 = cljs.core.first.call(null,seq34566__$1);
var seq34566__$2 = cljs.core.next.call(null,seq34566__$1);
var G__34569 = cljs.core.first.call(null,seq34566__$2);
var seq34566__$3 = cljs.core.next.call(null,seq34566__$2);
return bedrock.util.graph_collect_tree.cljs$core$IFn$_invoke$arity$variadic(G__34567,G__34568,G__34569,seq34566__$3);
});

/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 *   the first.  If a key occurs in more than one map, the mapping(s)
 *   from the latter (left-to-right) will be combined with the mapping in
 *   the result by calling (f key val-in-result val-in-latter).
 */
bedrock.util.keyaware_merge_with = (function bedrock$util$keyaware_merge_with(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34575 = arguments.length;
var i__8840__auto___34576 = (0);
while(true){
if((i__8840__auto___34576 < len__8839__auto___34575)){
args__8846__auto__.push((arguments[i__8840__auto___34576]));

var G__34577 = (i__8840__auto___34576 + (1));
i__8840__auto___34576 = G__34577;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.keyaware_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.keyaware_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first.call(null,e);
var v = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.assoc.call(null,m,k,f.call(null,k,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__7668__auto__ = m1;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

bedrock.util.keyaware_merge_with.cljs$lang$maxFixedArity = (1);

bedrock.util.keyaware_merge_with.cljs$lang$applyTo = (function (seq34573){
var G__34574 = cljs.core.first.call(null,seq34573);
var seq34573__$1 = cljs.core.next.call(null,seq34573);
return bedrock.util.keyaware_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__34574,seq34573__$1);
});

/**
 * As outer join, but takes a merging function that is applied to combine
 * all 'rows' that result in the same key-value, (from left to right).
 * 
 * Example:
 * 
 *   (outer-join-with vector
 *                 (comp even? :a)
 *                 [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *                 [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ([{:a 1, :b 10, :c 100} {:a 3, :b 30, :d 300}]
 *     [{:a 2, :b 20, :c 200} {:a 2, :b 5, :c 500}
 *      {:a 2, :b 20, :d 200} {:a 2, :b 25, :d 200}])
 * 
 *   (outer-join-with (comp count list)
 *                 :a
 *                 [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *                 [{:a 2 :b 20 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> (1 2 1)
 * 
 *   (outer-join-with (comp + :c)
 *                 :a
 *                 [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *                 [{:a 2 :b 20 :d 200}{:a 3 :b 30 :d 300}])
 * ==> (100 200 nil)
 */
bedrock.util.outer_join_with = (function bedrock$util$outer_join_with(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34581 = arguments.length;
var i__8840__auto___34582 = (0);
while(true){
if((i__8840__auto___34582 < len__8839__auto___34581)){
args__8846__auto__.push((arguments[i__8840__auto___34582]));

var G__34583 = (i__8840__auto___34582 + (1));
i__8840__auto___34582 = G__34583;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return bedrock.util.outer_join_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

bedrock.util.outer_join_with.cljs$core$IFn$_invoke$arity$variadic = (function (merge_fn,key_fn,colls){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,merge_fn),cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.concat),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.group_by,key_fn),colls))));
});

bedrock.util.outer_join_with.cljs$lang$maxFixedArity = (2);

bedrock.util.outer_join_with.cljs$lang$applyTo = (function (seq34578){
var G__34579 = cljs.core.first.call(null,seq34578);
var seq34578__$1 = cljs.core.next.call(null,seq34578);
var G__34580 = cljs.core.first.call(null,seq34578__$1);
var seq34578__$2 = cljs.core.next.call(null,seq34578__$1);
return bedrock.util.outer_join_with.cljs$core$IFn$_invoke$arity$variadic(G__34579,G__34580,seq34578__$2);
});

/**
 * Outer join of zero or more collections of maps ('rows' or rather: merge'able values),
 *   by a key-function.
 *   When two or more maps with the same key value (ie. value of applying the
 *   key-function to the map), they are merged in order from left to right.
 * 
 *   Be aware that maps where the key-function returns nil are included.
 *   Duplicates are not removed.
 * 
 *   Examples:
 * 
 *   (outer-join :a [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *               [{:a 2 :b 20 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 20, :c 200, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join :a [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *               [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 25, :c 200, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join :x [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *               [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 3, :b 30, :c 200, :d 300})
 * 
 *   (outer-join :a [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *               [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 25, :c 500, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join :b [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *               [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 20, :c 200, :d 200}
 *     {:a 2, :b 5, :c 500} {:a 2, :b 25, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join (juxt :a :b)
 *            [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *            [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 20, :c 200, :d 200} {:a 2, :b 5, :c 500}
 *     {:a 2, :b 25, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join (constantly nil)
 *          [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *          [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 3, :b 30, :c 500, :d 300})
 * 
 *   (outer-join (comp even? :a)
 *            [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *            [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}]
 *   ==> ({:a 3, :b 30, :c 100, :d 300} {:a 2, :b 25, :c 500, :d 200})
 */
bedrock.util.outer_join = (function bedrock$util$outer_join(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34586 = arguments.length;
var i__8840__auto___34587 = (0);
while(true){
if((i__8840__auto___34587 < len__8839__auto___34586)){
args__8846__auto__.push((arguments[i__8840__auto___34587]));

var G__34588 = (i__8840__auto___34587 + (1));
i__8840__auto___34587 = G__34588;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.outer_join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.outer_join.cljs$core$IFn$_invoke$arity$variadic = (function (key_fn,colls){
return cljs.core.apply.call(null,bedrock.util.outer_join_with,cljs.core.merge,key_fn,colls);
});

bedrock.util.outer_join.cljs$lang$maxFixedArity = (1);

bedrock.util.outer_join.cljs$lang$applyTo = (function (seq34584){
var G__34585 = cljs.core.first.call(null,seq34584);
var seq34584__$1 = cljs.core.next.call(null,seq34584);
return bedrock.util.outer_join.cljs$core$IFn$_invoke$arity$variadic(G__34585,seq34584__$1);
});

/**
 * Cross join of over two collections, with optional
 *   predicate (row1,row2 -> bool) and merge-function.
 *   Default merge-function is the standard merge, making the
 *   function suitable for non-relation operations too.
 *   Duplicates are not removed.
 * 
 *   Example:
 * 
 *   (cross-join [{:a 1} {:a 2}] [{:b 1} {:b 2} {:b 3}])
 *   ==> ({:a 1, :b 1} {:a 1, :b 2} {:a 1, :b 3}
 *     {:a 2, :b 1} {:a 2, :b 2} {:a 2, :b 3})
 * 
 *   (cross-join [] [{:b 1} {:b 2} {:b 3}])
 *   ==> nil
 * 
 *   (cross-join [{:a 1 :x 'one} {:a 2 :x 'two}]
 *            [{:b 1} {:b 2 :x 'this :y 'is-it} {:b 3 :x 'that}])
 *   ==> ({:a 1, :x one, :b 1} {:a 1, :x this, :b 2, :y is-it} {:a 1, :x that, :b 3}
 *     {:a 2, :x two, :b 1} {:a 2, :x this, :b 2, :y is-it} {:a 2, :x that, :b 3}
 * 
 *   (cross-join [{:a 1 :x 'one} {:a 2 :x 'two}]
 *            [{:b 1} {:b 2 :x 'this :y 'is-it} {:b 3 :x 'that}]
 *            #(= (:a %) (:b %2)))
 *   ==> ({:a 1, :x one, :b 1} {:a 2, :x this, :b 2, :y is-it})
 * 
 *   (cross-join [{:a 1 :x 'one} {:a 2 :x 'two}]
 *            [{:b 1} {:b 2 :x 'this :y 'is-it} {:b 3 :x 'that}]
 *            #(=(:a %) (:b %2))
 *            #(assoc % :z %2))
 *   ==> ({:a 1, :x one, :z {:b 1}} {:a 2, :x two, :z {:b 2, :x this, :y is-it}})
 * 
 *   (cross-join [3 5 7 8] [100 200 300 401] #(even? %2) +)
 *   ==> (103 203 303 105 205 305 107 207 307 108 208 308)
 */
bedrock.util.cross_join = (function bedrock$util$cross_join(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34602 = arguments.length;
var i__8840__auto___34603 = (0);
while(true){
if((i__8840__auto___34603 < len__8839__auto___34602)){
args__8846__auto__.push((arguments[i__8840__auto___34603]));

var G__34604 = (i__8840__auto___34603 + (1));
i__8840__auto___34603 = G__34604;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return bedrock.util.cross_join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

bedrock.util.cross_join.cljs$core$IFn$_invoke$arity$variadic = (function (rel1,rel2,p__34592){
var vec__34593 = p__34592;
var where = cljs.core.nth.call(null,vec__34593,(0),null);
var merge_fn = cljs.core.nth.call(null,vec__34593,(1),null);
return cljs.core.seq.call(null,(function (){var iter__8476__auto__ = ((function (vec__34593,where,merge_fn){
return (function bedrock$util$iter__34596(s__34597){
return (new cljs.core.LazySeq(null,((function (vec__34593,where,merge_fn){
return (function (){
var s__34597__$1 = s__34597;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34597__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var r1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__8472__auto__ = ((function (s__34597__$1,r1,xs__5205__auto__,temp__4657__auto__,vec__34593,where,merge_fn){
return (function bedrock$util$iter__34596_$_iter__34598(s__34599){
return (new cljs.core.LazySeq(null,((function (s__34597__$1,r1,xs__5205__auto__,temp__4657__auto__,vec__34593,where,merge_fn){
return (function (){
var s__34599__$1 = s__34599;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__34599__$1);
if(temp__4657__auto____$1){
var s__34599__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34599__$2)){
var c__8474__auto__ = cljs.core.chunk_first.call(null,s__34599__$2);
var size__8475__auto__ = cljs.core.count.call(null,c__8474__auto__);
var b__34601 = cljs.core.chunk_buffer.call(null,size__8475__auto__);
if((function (){var i__34600 = (0);
while(true){
if((i__34600 < size__8475__auto__)){
var r2 = cljs.core._nth.call(null,c__8474__auto__,i__34600);
if(cljs.core.truth_((cljs.core.truth_(where)?where.call(null,r1,r2):true))){
cljs.core.chunk_append.call(null,b__34601,(function (){var or__7668__auto__ = merge_fn;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.merge;
}
})().call(null,r1,r2));

var G__34605 = (i__34600 + (1));
i__34600 = G__34605;
continue;
} else {
var G__34606 = (i__34600 + (1));
i__34600 = G__34606;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34601),bedrock$util$iter__34596_$_iter__34598.call(null,cljs.core.chunk_rest.call(null,s__34599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34601),null);
}
} else {
var r2 = cljs.core.first.call(null,s__34599__$2);
if(cljs.core.truth_((cljs.core.truth_(where)?where.call(null,r1,r2):true))){
return cljs.core.cons.call(null,(function (){var or__7668__auto__ = merge_fn;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.merge;
}
})().call(null,r1,r2),bedrock$util$iter__34596_$_iter__34598.call(null,cljs.core.rest.call(null,s__34599__$2)));
} else {
var G__34607 = cljs.core.rest.call(null,s__34599__$2);
s__34599__$1 = G__34607;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34597__$1,r1,xs__5205__auto__,temp__4657__auto__,vec__34593,where,merge_fn))
,null,null));
});})(s__34597__$1,r1,xs__5205__auto__,temp__4657__auto__,vec__34593,where,merge_fn))
;
var fs__8473__auto__ = cljs.core.seq.call(null,iterys__8472__auto__.call(null,rel2));
if(fs__8473__auto__){
return cljs.core.concat.call(null,fs__8473__auto__,bedrock$util$iter__34596.call(null,cljs.core.rest.call(null,s__34597__$1)));
} else {
var G__34608 = cljs.core.rest.call(null,s__34597__$1);
s__34597__$1 = G__34608;
continue;
}
} else {
return null;
}
break;
}
});})(vec__34593,where,merge_fn))
,null,null));
});})(vec__34593,where,merge_fn))
;
return iter__8476__auto__.call(null,rel1);
})());
});

bedrock.util.cross_join.cljs$lang$maxFixedArity = (2);

bedrock.util.cross_join.cljs$lang$applyTo = (function (seq34589){
var G__34590 = cljs.core.first.call(null,seq34589);
var seq34589__$1 = cljs.core.next.call(null,seq34589);
var G__34591 = cljs.core.first.call(null,seq34589__$1);
var seq34589__$2 = cljs.core.next.call(null,seq34589__$1);
return bedrock.util.cross_join.cljs$core$IFn$_invoke$arity$variadic(G__34590,G__34591,seq34589__$2);
});

/**
 * Applies f to args if f is a function, otherwise returns f
 */
bedrock.util._QMARK_call = (function bedrock$util$_QMARK_call(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34611 = arguments.length;
var i__8840__auto___34612 = (0);
while(true){
if((i__8840__auto___34612 < len__8839__auto___34611)){
args__8846__auto__.push((arguments[i__8840__auto___34612]));

var G__34613 = (i__8840__auto___34612 + (1));
i__8840__auto___34612 = G__34613;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util._QMARK_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util._QMARK_call.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_.call(null,f)){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

bedrock.util._QMARK_call.cljs$lang$maxFixedArity = (1);

bedrock.util._QMARK_call.cljs$lang$applyTo = (function (seq34609){
var G__34610 = cljs.core.first.call(null,seq34609);
var seq34609__$1 = cljs.core.next.call(null,seq34609);
return bedrock.util._QMARK_call.cljs$core$IFn$_invoke$arity$variadic(G__34610,seq34609__$1);
});

/**
 * Applies f to args if f is a function, otherwise returns first arg
 */
bedrock.util._QMARK_transform = (function bedrock$util$_QMARK_transform(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34620 = arguments.length;
var i__8840__auto___34621 = (0);
while(true){
if((i__8840__auto___34621 < len__8839__auto___34620)){
args__8846__auto__.push((arguments[i__8840__auto___34621]));

var G__34622 = (i__8840__auto___34621 + (1));
i__8840__auto___34621 = G__34622;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util._QMARK_transform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util._QMARK_transform.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__34616){
var vec__34617 = p__34616;
var arg0 = cljs.core.nth.call(null,vec__34617,(0),null);
var args = vec__34617;
if(cljs.core.fn_QMARK_.call(null,f)){
return cljs.core.apply.call(null,f,args);
} else {
return arg0;
}
});

bedrock.util._QMARK_transform.cljs$lang$maxFixedArity = (1);

bedrock.util._QMARK_transform.cljs$lang$applyTo = (function (seq34614){
var G__34615 = cljs.core.first.call(null,seq34614);
var seq34614__$1 = cljs.core.next.call(null,seq34614);
return bedrock.util._QMARK_transform.cljs$core$IFn$_invoke$arity$variadic(G__34615,seq34614__$1);
});

/**
 * Derefs argument if possible, otherwise just returns it unchanged
 */
bedrock.util._QMARK_deref = (function bedrock$util$_QMARK_deref(x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
/**
 * If condition holds, transform args by applying f to args, otherwise return first arg
 */
bedrock.util.call_when = (function bedrock$util$call_when(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34628 = arguments.length;
var i__8840__auto___34629 = (0);
while(true){
if((i__8840__auto___34629 < len__8839__auto___34628)){
args__8846__auto__.push((arguments[i__8840__auto___34629]));

var G__34630 = (i__8840__auto___34629 + (1));
i__8840__auto___34629 = G__34630;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return bedrock.util.call_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

bedrock.util.call_when.cljs$core$IFn$_invoke$arity$variadic = (function (condition,f,arg0,rest){
if(cljs.core.truth_(condition)){
return cljs.core.apply.call(null,f,arg0,rest);
} else {
return arg0;
}
});

bedrock.util.call_when.cljs$lang$maxFixedArity = (3);

bedrock.util.call_when.cljs$lang$applyTo = (function (seq34624){
var G__34625 = cljs.core.first.call(null,seq34624);
var seq34624__$1 = cljs.core.next.call(null,seq34624);
var G__34626 = cljs.core.first.call(null,seq34624__$1);
var seq34624__$2 = cljs.core.next.call(null,seq34624__$1);
var G__34627 = cljs.core.first.call(null,seq34624__$2);
var seq34624__$3 = cljs.core.next.call(null,seq34624__$2);
return bedrock.util.call_when.cljs$core$IFn$_invoke$arity$variadic(G__34625,G__34626,G__34627,seq34624__$3);
});

/**
 * Promotes a proper non-sequential to a list of one element, and turns non-list sequentials into seq's
 */
bedrock.util.listify = (function bedrock$util$listify(x){
if(cljs.core.list_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.seq.call(null,x);
} else {
if((x == null)){
return null;
} else {
var x__8530__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8530__auto__);

}
}
}
});
/**
 * Cartesian product of ore or more sequences. Threats scalars as lists of one element
 */
bedrock.util.cartesian_product = (function bedrock$util$cartesian_product(var_args){
var G__34634 = arguments.length;
switch (G__34634) {
case 0:
return bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__8858__auto__ = [];
var len__8839__auto___34642 = arguments.length;
var i__8840__auto___34643 = (0);
while(true){
if((i__8840__auto___34643 < len__8839__auto___34642)){
args_arr__8858__auto__.push((arguments[i__8840__auto___34643]));

var G__34644 = (i__8840__auto___34643 + (1));
i__8840__auto___34643 = G__34644;
continue;
} else {
}
break;
}

var argseq__8859__auto__ = (new cljs.core.IndexedSeq(args_arr__8858__auto__.slice((1)),(0),null));
return bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8859__auto__);

}
});

bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.map.call(null,cljs.core.list,bedrock.util.listify.call(null,x));
});

bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
var iter__8476__auto__ = (function bedrock$util$iter__34635(s__34636){
return (new cljs.core.LazySeq(null,(function (){
var s__34636__$1 = s__34636;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34636__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var a = cljs.core.first.call(null,xs__5205__auto__);
var iterys__8472__auto__ = ((function (s__34636__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function bedrock$util$iter__34635_$_iter__34637(s__34638){
return (new cljs.core.LazySeq(null,((function (s__34636__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__34638__$1 = s__34638;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__34638__$1);
if(temp__4657__auto____$1){
var s__34638__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34638__$2)){
var c__8474__auto__ = cljs.core.chunk_first.call(null,s__34638__$2);
var size__8475__auto__ = cljs.core.count.call(null,c__8474__auto__);
var b__34640 = cljs.core.chunk_buffer.call(null,size__8475__auto__);
if((function (){var i__34639 = (0);
while(true){
if((i__34639 < size__8475__auto__)){
var b = cljs.core._nth.call(null,c__8474__auto__,i__34639);
cljs.core.chunk_append.call(null,b__34640,cljs.core.conj.call(null,b,a));

var G__34645 = (i__34639 + (1));
i__34639 = G__34645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34640),bedrock$util$iter__34635_$_iter__34637.call(null,cljs.core.chunk_rest.call(null,s__34638__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34640),null);
}
} else {
var b = cljs.core.first.call(null,s__34638__$2);
return cljs.core.cons.call(null,cljs.core.conj.call(null,b,a),bedrock$util$iter__34635_$_iter__34637.call(null,cljs.core.rest.call(null,s__34638__$2)));
}
} else {
return null;
}
break;
}
});})(s__34636__$1,a,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__34636__$1,a,xs__5205__auto__,temp__4657__auto__))
;
var fs__8473__auto__ = cljs.core.seq.call(null,iterys__8472__auto__.call(null,cljs.core.apply.call(null,bedrock.util.cartesian_product,xs)));
if(fs__8473__auto__){
return cljs.core.concat.call(null,fs__8473__auto__,bedrock$util$iter__34635.call(null,cljs.core.rest.call(null,s__34636__$1)));
} else {
var G__34646 = cljs.core.rest.call(null,s__34636__$1);
s__34636__$1 = G__34646;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__.call(null,bedrock.util.listify.call(null,x));
});

bedrock.util.cartesian_product.cljs$lang$applyTo = (function (seq34632){
var G__34633 = cljs.core.first.call(null,seq34632);
var seq34632__$1 = cljs.core.next.call(null,seq34632);
return bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(G__34633,seq34632__$1);
});

bedrock.util.cartesian_product.cljs$lang$maxFixedArity = (1);

/**
 * Turn argument into a set, if it isn't one already.
 *   nil is turned into an empty set.
 */
bedrock.util._QMARK_set = (function bedrock$util$_QMARK_set(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([x]);

}
}
});
/**
 * Is argument a collection with a plurality of elements?
 */
bedrock.util.plurality_QMARK_ = (function bedrock$util$plurality_QMARK_(x){
return (cljs.core.count.call(null,x) > (1));
});
/**
 * Makes an identity function with optional side-effects and optional extra parameters
 */
bedrock.util._QMARK_side_effector = (function bedrock$util$_QMARK_side_effector(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34654 = arguments.length;
var i__8840__auto___34655 = (0);
while(true){
if((i__8840__auto___34655 < len__8839__auto___34654)){
args__8846__auto__.push((arguments[i__8840__auto___34655]));

var G__34656 = (i__8840__auto___34655 + (1));
i__8840__auto___34655 = G__34656;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return bedrock.util._QMARK_side_effector.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

bedrock.util._QMARK_side_effector.cljs$core$IFn$_invoke$arity$variadic = (function (side_effects){
return (function() { 
var G__34657__delegate = function (a,args){
var seq__34648_34658 = cljs.core.seq.call(null,side_effects);
var chunk__34650_34659 = null;
var count__34651_34660 = (0);
var i__34652_34661 = (0);
while(true){
if((i__34652_34661 < count__34651_34660)){
var f_34662 = cljs.core._nth.call(null,chunk__34650_34659,i__34652_34661);
if(cljs.core.fn_QMARK_.call(null,f_34662)){
cljs.core.apply.call(null,f_34662,a,args);

var G__34663 = seq__34648_34658;
var G__34664 = chunk__34650_34659;
var G__34665 = count__34651_34660;
var G__34666 = (i__34652_34661 + (1));
seq__34648_34658 = G__34663;
chunk__34650_34659 = G__34664;
count__34651_34660 = G__34665;
i__34652_34661 = G__34666;
continue;
} else {
var G__34667 = seq__34648_34658;
var G__34668 = chunk__34650_34659;
var G__34669 = count__34651_34660;
var G__34670 = (i__34652_34661 + (1));
seq__34648_34658 = G__34667;
chunk__34650_34659 = G__34668;
count__34651_34660 = G__34669;
i__34652_34661 = G__34670;
continue;
}
} else {
var temp__4657__auto___34671 = cljs.core.seq.call(null,seq__34648_34658);
if(temp__4657__auto___34671){
var seq__34648_34672__$1 = temp__4657__auto___34671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34648_34672__$1)){
var c__8507__auto___34673 = cljs.core.chunk_first.call(null,seq__34648_34672__$1);
var G__34674 = cljs.core.chunk_rest.call(null,seq__34648_34672__$1);
var G__34675 = c__8507__auto___34673;
var G__34676 = cljs.core.count.call(null,c__8507__auto___34673);
var G__34677 = (0);
seq__34648_34658 = G__34674;
chunk__34650_34659 = G__34675;
count__34651_34660 = G__34676;
i__34652_34661 = G__34677;
continue;
} else {
var f_34678 = cljs.core.first.call(null,seq__34648_34672__$1);
if(cljs.core.fn_QMARK_.call(null,f_34678)){
cljs.core.apply.call(null,f_34678,a,args);

var G__34679 = cljs.core.next.call(null,seq__34648_34672__$1);
var G__34680 = null;
var G__34681 = (0);
var G__34682 = (0);
seq__34648_34658 = G__34679;
chunk__34650_34659 = G__34680;
count__34651_34660 = G__34681;
i__34652_34661 = G__34682;
continue;
} else {
var G__34683 = cljs.core.next.call(null,seq__34648_34672__$1);
var G__34684 = null;
var G__34685 = (0);
var G__34686 = (0);
seq__34648_34658 = G__34683;
chunk__34650_34659 = G__34684;
count__34651_34660 = G__34685;
i__34652_34661 = G__34686;
continue;
}
}
} else {
}
}
break;
}

return a;
};
var G__34657 = function (a,var_args){
var args = null;
if (arguments.length > 1) {
var G__34687__i = 0, G__34687__a = new Array(arguments.length -  1);
while (G__34687__i < G__34687__a.length) {G__34687__a[G__34687__i] = arguments[G__34687__i + 1]; ++G__34687__i;}
  args = new cljs.core.IndexedSeq(G__34687__a,0,null);
} 
return G__34657__delegate.call(this,a,args);};
G__34657.cljs$lang$maxFixedArity = 1;
G__34657.cljs$lang$applyTo = (function (arglist__34688){
var a = cljs.core.first(arglist__34688);
var args = cljs.core.rest(arglist__34688);
return G__34657__delegate(a,args);
});
G__34657.cljs$core$IFn$_invoke$arity$variadic = G__34657__delegate;
return G__34657;
})()
;
});

bedrock.util._QMARK_side_effector.cljs$lang$maxFixedArity = (0);

bedrock.util._QMARK_side_effector.cljs$lang$applyTo = (function (seq34647){
return bedrock.util._QMARK_side_effector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34647));
});

/**
 * Performs side-effect f on argument-list, then returns first arg
 */
bedrock.util.side_effect = (function bedrock$util$side_effect(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34692 = arguments.length;
var i__8840__auto___34693 = (0);
while(true){
if((i__8840__auto___34693 < len__8839__auto___34692)){
args__8846__auto__.push((arguments[i__8840__auto___34693]));

var G__34694 = (i__8840__auto___34693 + (1));
i__8840__auto___34693 = G__34694;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return bedrock.util.side_effect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

bedrock.util.side_effect.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,rest){
cljs.core.apply.call(null,f,a,rest);

return a;
});

bedrock.util.side_effect.cljs$lang$maxFixedArity = (2);

bedrock.util.side_effect.cljs$lang$applyTo = (function (seq34689){
var G__34690 = cljs.core.first.call(null,seq34689);
var seq34689__$1 = cljs.core.next.call(null,seq34689);
var G__34691 = cljs.core.first.call(null,seq34689__$1);
var seq34689__$2 = cljs.core.next.call(null,seq34689__$1);
return bedrock.util.side_effect.cljs$core$IFn$_invoke$arity$variadic(G__34690,G__34691,seq34689__$2);
});

/**
 * As map, but for side-effects instead of result. Returns the last of the collections to map over
 */
bedrock.util.do_map = (function bedrock$util$do_map(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34697 = arguments.length;
var i__8840__auto___34698 = (0);
while(true){
if((i__8840__auto___34698 < len__8839__auto___34697)){
args__8846__auto__.push((arguments[i__8840__auto___34698]));

var G__34699 = (i__8840__auto___34698 + (1));
i__8840__auto___34698 = G__34699;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return bedrock.util.do_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

bedrock.util.do_map.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
cljs.core.doall.call(null,cljs.core.apply.call(null,cljs.core.map,f,args));

return cljs.core.last.call(null,args);
});

bedrock.util.do_map.cljs$lang$maxFixedArity = (1);

bedrock.util.do_map.cljs$lang$applyTo = (function (seq34695){
var G__34696 = cljs.core.first.call(null,seq34695);
var seq34695__$1 = cljs.core.next.call(null,seq34695);
return bedrock.util.do_map.cljs$core$IFn$_invoke$arity$variadic(G__34696,seq34695__$1);
});

/**
 * Adds reagent keys to a sequence. Keys will be added where none exist (as meta-data or [:div {:key xxx}]) , and existing keys will not be reused
 */
bedrock.util.add_reagent_keys = (function bedrock$util$add_reagent_keys(xs){
var x = cljs.core.apply.call(null,cljs.core.max,(1),cljs.core.map.call(null,(function (p1__34700_SHARP_){
var or__7668__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__34700_SHARP_));
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
var or__7668__auto____$1 = ((cljs.core.vector_QMARK_.call(null,p1__34700_SHARP_))?new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__34700_SHARP_)):null);
if(cljs.core.truth_(or__7668__auto____$1)){
return or__7668__auto____$1;
} else {
return (1);
}
}
}),xs));
return cljs.core.map_indexed.call(null,((function (x){
return (function (i,h){
if(cljs.core.truth_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h)))){
return h;
} else {
return cljs.core.with_meta.call(null,h,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(i + x)], null));
}
});})(x))
,xs);
});
/**
 * Creates a hiccup table
 */
bedrock.util.hiccup_table = (function bedrock$util$hiccup_table(p__34701){
var map__34702 = p__34701;
var map__34702__$1 = ((((!((map__34702 == null)))?((((map__34702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34702):map__34702);
var rows = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var f_cell = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"f-cell","f-cell",623030045));
var table_attrib = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"table-attrib","table-attrib",1748405218));
var tr_attrib = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"tr-attrib","tr-attrib",-452873065));
var td_attrib = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"td-attrib","td-attrib",117585519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),bedrock.util._QMARK_call.call(null,table_attrib,rows),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map_indexed.call(null,((function (map__34702,map__34702__$1,rows,f_cell,table_attrib,tr_attrib,td_attrib){
return (function (r,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null),bedrock.util._QMARK_call.call(null,tr_attrib,r,row)),cljs.core.map_indexed.call(null,((function (map__34702,map__34702__$1,rows,f_cell,table_attrib,tr_attrib,td_attrib){
return (function (c,cell){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null),bedrock.util._QMARK_call.call(null,td_attrib,r,c,cell)),(function (){var or__7668__auto__ = f_cell;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.identity;
}
})().call(null,cell,r,c)], null);
});})(map__34702,map__34702__$1,rows,f_cell,table_attrib,tr_attrib,td_attrib))
,row)], null);
});})(map__34702,map__34702__$1,rows,f_cell,table_attrib,tr_attrib,td_attrib))
,rows)], null)], null);
});
/**
 * Makes a function wrapper with optional pre and post processing
 */
bedrock.util.wrapper = (function bedrock$util$wrapper(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34713 = arguments.length;
var i__8840__auto___34714 = (0);
while(true){
if((i__8840__auto___34714 < len__8839__auto___34713)){
args__8846__auto__.push((arguments[i__8840__auto___34714]));

var G__34715 = (i__8840__auto___34714 + (1));
i__8840__auto___34714 = G__34715;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return bedrock.util.wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

bedrock.util.wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__34705){
var vec__34706 = p__34705;
var f_pre = cljs.core.nth.call(null,vec__34706,(0),null);
var f_post = cljs.core.nth.call(null,vec__34706,(1),null);
return ((function (vec__34706,f_pre,f_post){
return (function() { 
var G__34716__delegate = function (p__34709){
var vec__34710 = p__34709;
var f = cljs.core.nth.call(null,vec__34710,(0),null);
return cljs.core.comp.call(null,(function (){var or__7668__auto__ = f_post;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.identity;
}
})(),(function (){var or__7668__auto__ = f;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.identity;
}
})(),(function (){var or__7668__auto__ = f_pre;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.identity;
}
})());
};
var G__34716 = function (var_args){
var p__34709 = null;
if (arguments.length > 0) {
var G__34717__i = 0, G__34717__a = new Array(arguments.length -  0);
while (G__34717__i < G__34717__a.length) {G__34717__a[G__34717__i] = arguments[G__34717__i + 0]; ++G__34717__i;}
  p__34709 = new cljs.core.IndexedSeq(G__34717__a,0,null);
} 
return G__34716__delegate.call(this,p__34709);};
G__34716.cljs$lang$maxFixedArity = 0;
G__34716.cljs$lang$applyTo = (function (arglist__34718){
var p__34709 = cljs.core.seq(arglist__34718);
return G__34716__delegate(p__34709);
});
G__34716.cljs$core$IFn$_invoke$arity$variadic = G__34716__delegate;
return G__34716;
})()
;
;})(vec__34706,f_pre,f_post))
});

bedrock.util.wrapper.cljs$lang$maxFixedArity = (0);

bedrock.util.wrapper.cljs$lang$applyTo = (function (seq34704){
return bedrock.util.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34704));
});

/**
 * Walks a form, collecting all elements where predicate holds
 */
bedrock.util.walk_collect = (function bedrock$util$walk_collect(pred,form){
var a = cljs.core.atom.call(null,null);
clojure.walk.postwalk.call(null,((function (a){
return (function (e){
if(cljs.core.truth_(pred.call(null,e))){
cljs.core.swap_BANG_.call(null,a,cljs.core.conj,e);
} else {
}

return e;
});})(a))
,form);

return cljs.core.deref.call(null,a);
});
/**
 * Makes a walker-function.
 */
bedrock.util.walker = (function bedrock$util$walker(var_args){
var args__8846__auto__ = [];
var len__8839__auto___34725 = arguments.length;
var i__8840__auto___34726 = (0);
while(true){
if((i__8840__auto___34726 < len__8839__auto___34725)){
args__8846__auto__.push((arguments[i__8840__auto___34726]));

var G__34727 = (i__8840__auto___34726 + (1));
i__8840__auto___34726 = G__34727;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return bedrock.util.walker.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

bedrock.util.walker.cljs$core$IFn$_invoke$arity$variadic = (function (p__34722){
var map__34723 = p__34722;
var map__34723__$1 = ((((!((map__34723 == null)))?((((map__34723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34723):map__34723);
var get_children = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"get-children","get-children",777046254));
var update_children = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"update-children","update-children",1871853561));
var pre_children = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"pre-children","pre-children",-2005806566));
var post_children = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"post-children","post-children",-491447836));
var pre_node = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"pre-node","pre-node",1825562715));
var post_node = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"post-node","post-node",110020555));
var pre_root = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"pre-root","pre-root",2066982468));
var post_root = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"post-root","post-root",-304068281));
var root_wrapper = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"root-wrapper","root-wrapper",-1203749997));
var walker = ((function (map__34723,map__34723__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper){
return (function bedrock$util$walker(node){
if(cljs.core.truth_(node)){
return (function (){var or__7668__auto__ = post_node;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.identity;
}
})().call(null,walk_children.call(null,(function (){var or__7668__auto__ = pre_node;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.identity;
}
})().call(null,node)));
} else {
return null;
}
});})(map__34723,map__34723__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper))
;
var walk_children = ((function (map__34723,map__34723__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper){
return (function bedrock$util$walk_children(node){
var children = (cljs.core.truth_(get_children)?get_children.call(null,node):((cljs.core.sequential_QMARK_.call(null,node))?node:((cljs.core.map_QMARK_.call(null,node))?new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node):null
)));
var _ = cljs.core.prn.call(null,node,new cljs.core.Keyword(null,"==>","==>",-1505892019),children);
var children_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.empty.call(null,children),(((cljs.core.sequential_QMARK_.call(null,children)) && (cljs.core.seq.call(null,children)))?(function (){var or__7668__auto__ = bedrock.util.wrapper.call(null,pre_children,post_children);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.identity;
}
})().call(null,cljs.core.partial.call(null,cljs.core.map,walker)).call(null,children):null));
var update_children__$1 = (cljs.core.truth_(update_children)?update_children:((cljs.core.sequential_QMARK_.call(null,node))?cljs.core.comp.call(null,cljs.core.second,cljs.core.list):((cljs.core.map_QMARK_.call(null,node))?((function (children,_,children_SINGLEQUOTE_,map__34723,map__34723__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper){
return (function (p1__34719_SHARP_,p2__34720_SHARP_){
return cljs.core.assoc.call(null,p1__34719_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982),p2__34720_SHARP_);
});})(children,_,children_SINGLEQUOTE_,map__34723,map__34723__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper))
:cljs.core.identity
)));
if(cljs.core.truth_(children)){
return update_children__$1.call(null,node,children_SINGLEQUOTE_);
} else {
return node;
}
});})(map__34723,map__34723__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper))
;
return (function (){var or__7668__auto__ = root_wrapper;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.identity;
}
})().call(null,bedrock.util.wrapper.call(null,pre_root,post_root).call(null,walker));
});

bedrock.util.walker.cljs$lang$maxFixedArity = (0);

bedrock.util.walker.cljs$lang$applyTo = (function (seq34721){
return bedrock.util.walker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34721));
});

/**
 * Flatten a sequence.
 * 
 *   Example:
 * 
 *   (flatten-seq :sub
 *  [{:id 12
 *    :sub [{:id 5 :sub [{:id 67} {:id 99}]}
 *          {:id 50}]}])
 *   ==> ({:id 12, :sub [{:id 5, :sub [{:id 67} {:id 99}]}
 *                  {:id 50}]}
 *     {:id 5, :sub [{:id 67} {:id 99}]}
 *     {:id 67}
 *     {:id 99}
 *     {:id 50})
 */
bedrock.util.flatten_seq = (function bedrock$util$flatten_seq(get_children,xs){
return (function bedrock$util$flatten_seq_$_f(xs__$1){
return cljs.core.mapcat.call(null,(function (x){
return cljs.core.conj.call(null,cljs.core.mapcat.call(null,bedrock$util$flatten_seq_$_f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [get_children.call(null,x)], null)),x);
}),xs__$1);
}).call(null,xs);
});
/**
 * Walks a sequence of maps, updates children under key k.
 * 
 *   Example:
 * 
 *   (walk-seq
 *     :sub
 *     (fn [this parent] (assoc this :par (:id parent)))
 *     [{:id 12
 *       :sub [{:id 5 :sub [{:id 67} {:id 99}]}
 *      {:id 50}]}])
 *   ==> ({:id 12, :sub ({:id 5
 *                     :sub ({:id 67, :par 5}
 *                           {:id 99, :par 5})
 *                     :par 12}
 *    {:id 50, :par 12})
 *    :par nil})
 */
bedrock.util.walk_seq = (function bedrock$util$walk_seq(k,transform,xs){
return (function bedrock$util$walk_seq_$_f(xs__$1,parent){
var f_SINGLEQUOTE_ = (function (x){
var x__$1 = transform.call(null,x,parent);
if(cljs.core.truth_(k.call(null,x__$1))){
return cljs.core.update.call(null,x__$1,k,bedrock$util$walk_seq_$_f,x__$1);
} else {
return x__$1;
}
});
return cljs.core.map.call(null,f_SINGLEQUOTE_,xs__$1);
}).call(null,xs,null);
});
bedrock.util.provide_BANG_ = (function bedrock$util$provide_BANG_(state,path,id,f){
var map__34728 = cljs.core.get.call(null,cljs.core.deref.call(null,state),path);
var map__34728__$1 = ((((!((map__34728 == null)))?((((map__34728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34728):map__34728);
var id_SINGLEQUOTE_ = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var v = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core._EQ_.call(null,id,id_SINGLEQUOTE_)){
return v;
} else {
var v__$1 = f.call(null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"v","v",21465059),v__$1);

return v__$1;
}
});
/**
 * Maps a function over the keys of an associative collection.
 */
bedrock.util.map_keys = (function bedrock$util$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8476__auto__ = (function bedrock$util$map_keys_$_iter__34730(s__34731){
return (new cljs.core.LazySeq(null,(function (){
var s__34731__$1 = s__34731;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34731__$1);
if(temp__4657__auto__){
var s__34731__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34731__$2)){
var c__8474__auto__ = cljs.core.chunk_first.call(null,s__34731__$2);
var size__8475__auto__ = cljs.core.count.call(null,c__8474__auto__);
var b__34733 = cljs.core.chunk_buffer.call(null,size__8475__auto__);
if((function (){var i__34732 = (0);
while(true){
if((i__34732 < size__8475__auto__)){
var vec__34734 = cljs.core._nth.call(null,c__8474__auto__,i__34732);
var k = cljs.core.nth.call(null,vec__34734,(0),null);
var v = cljs.core.nth.call(null,vec__34734,(1),null);
cljs.core.chunk_append.call(null,b__34733,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null));

var G__34740 = (i__34732 + (1));
i__34732 = G__34740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34733),bedrock$util$map_keys_$_iter__34730.call(null,cljs.core.chunk_rest.call(null,s__34731__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34733),null);
}
} else {
var vec__34737 = cljs.core.first.call(null,s__34731__$2);
var k = cljs.core.nth.call(null,vec__34737,(0),null);
var v = cljs.core.nth.call(null,vec__34737,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null),bedrock$util$map_keys_$_iter__34730.call(null,cljs.core.rest.call(null,s__34731__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__.call(null,coll);
})());
});
/**
 * Maps a function over the values of an associative collection.
 */
bedrock.util.map_vals = (function bedrock$util$map_vals(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8476__auto__ = (function bedrock$util$map_vals_$_iter__34741(s__34742){
return (new cljs.core.LazySeq(null,(function (){
var s__34742__$1 = s__34742;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34742__$1);
if(temp__4657__auto__){
var s__34742__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34742__$2)){
var c__8474__auto__ = cljs.core.chunk_first.call(null,s__34742__$2);
var size__8475__auto__ = cljs.core.count.call(null,c__8474__auto__);
var b__34744 = cljs.core.chunk_buffer.call(null,size__8475__auto__);
if((function (){var i__34743 = (0);
while(true){
if((i__34743 < size__8475__auto__)){
var vec__34745 = cljs.core._nth.call(null,c__8474__auto__,i__34743);
var k = cljs.core.nth.call(null,vec__34745,(0),null);
var v = cljs.core.nth.call(null,vec__34745,(1),null);
cljs.core.chunk_append.call(null,b__34744,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null));

var G__34751 = (i__34743 + (1));
i__34743 = G__34751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34744),bedrock$util$map_vals_$_iter__34741.call(null,cljs.core.chunk_rest.call(null,s__34742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34744),null);
}
} else {
var vec__34748 = cljs.core.first.call(null,s__34742__$2);
var k = cljs.core.nth.call(null,vec__34748,(0),null);
var v = cljs.core.nth.call(null,vec__34748,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null),bedrock$util$map_vals_$_iter__34741.call(null,cljs.core.rest.call(null,s__34742__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__.call(null,coll);
})());
});

//# sourceMappingURL=util.js.map?rel=1507562214680
