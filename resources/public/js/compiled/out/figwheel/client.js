// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36569){if((e36569 instanceof Error)){
var e = e36569;
return "Error: Unable to stringify";
} else {
throw e36569;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36572 = arguments.length;
switch (G__36572) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36570_SHARP_){
if(typeof p1__36570_SHARP_ === 'string'){
return p1__36570_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36570_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__8846__auto__ = [];
var len__8839__auto___36575 = arguments.length;
var i__8840__auto___36576 = (0);
while(true){
if((i__8840__auto___36576 < len__8839__auto___36575)){
args__8846__auto__.push((arguments[i__8840__auto___36576]));

var G__36577 = (i__8840__auto___36576 + (1));
i__8840__auto___36576 = G__36577;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36574){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36574));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__8846__auto__ = [];
var len__8839__auto___36579 = arguments.length;
var i__8840__auto___36580 = (0);
while(true){
if((i__8840__auto___36580 < len__8839__auto___36579)){
args__8846__auto__.push((arguments[i__8840__auto___36580]));

var G__36581 = (i__8840__auto___36580 + (1));
i__8840__auto___36580 = G__36581;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36578){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36578));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36582){
var map__36583 = p__36582;
var map__36583__$1 = ((((!((map__36583 == null)))?((((map__36583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36583):map__36583);
var message = cljs.core.get.call(null,map__36583__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36583__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__7668__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__7656__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__7656__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__7656__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31547__auto___36662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___36662,ch){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___36662,ch){
return (function (state_36634){
var state_val_36635 = (state_36634[(1)]);
if((state_val_36635 === (7))){
var inst_36630 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36636_36663 = state_36634__$1;
(statearr_36636_36663[(2)] = inst_36630);

(statearr_36636_36663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (1))){
var state_36634__$1 = state_36634;
var statearr_36637_36664 = state_36634__$1;
(statearr_36637_36664[(2)] = null);

(statearr_36637_36664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (4))){
var inst_36587 = (state_36634[(7)]);
var inst_36587__$1 = (state_36634[(2)]);
var state_36634__$1 = (function (){var statearr_36638 = state_36634;
(statearr_36638[(7)] = inst_36587__$1);

return statearr_36638;
})();
if(cljs.core.truth_(inst_36587__$1)){
var statearr_36639_36665 = state_36634__$1;
(statearr_36639_36665[(1)] = (5));

} else {
var statearr_36640_36666 = state_36634__$1;
(statearr_36640_36666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (15))){
var inst_36594 = (state_36634[(8)]);
var inst_36609 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36594);
var inst_36610 = cljs.core.first.call(null,inst_36609);
var inst_36611 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36610);
var inst_36612 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36611)].join('');
var inst_36613 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36612);
var state_36634__$1 = state_36634;
var statearr_36641_36667 = state_36634__$1;
(statearr_36641_36667[(2)] = inst_36613);

(statearr_36641_36667[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (13))){
var inst_36618 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36642_36668 = state_36634__$1;
(statearr_36642_36668[(2)] = inst_36618);

(statearr_36642_36668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (6))){
var state_36634__$1 = state_36634;
var statearr_36643_36669 = state_36634__$1;
(statearr_36643_36669[(2)] = null);

(statearr_36643_36669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (17))){
var inst_36616 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36644_36670 = state_36634__$1;
(statearr_36644_36670[(2)] = inst_36616);

(statearr_36644_36670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (3))){
var inst_36632 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36634__$1,inst_36632);
} else {
if((state_val_36635 === (12))){
var inst_36593 = (state_36634[(9)]);
var inst_36607 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36593,opts);
var state_36634__$1 = state_36634;
if(cljs.core.truth_(inst_36607)){
var statearr_36645_36671 = state_36634__$1;
(statearr_36645_36671[(1)] = (15));

} else {
var statearr_36646_36672 = state_36634__$1;
(statearr_36646_36672[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (2))){
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36634__$1,(4),ch);
} else {
if((state_val_36635 === (11))){
var inst_36594 = (state_36634[(8)]);
var inst_36599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36600 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36594);
var inst_36601 = cljs.core.async.timeout.call(null,(1000));
var inst_36602 = [inst_36600,inst_36601];
var inst_36603 = (new cljs.core.PersistentVector(null,2,(5),inst_36599,inst_36602,null));
var state_36634__$1 = state_36634;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36634__$1,(14),inst_36603);
} else {
if((state_val_36635 === (9))){
var inst_36594 = (state_36634[(8)]);
var inst_36620 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36621 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36594);
var inst_36622 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36621);
var inst_36623 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36622)].join('');
var inst_36624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36623);
var state_36634__$1 = (function (){var statearr_36647 = state_36634;
(statearr_36647[(10)] = inst_36620);

return statearr_36647;
})();
var statearr_36648_36673 = state_36634__$1;
(statearr_36648_36673[(2)] = inst_36624);

(statearr_36648_36673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (5))){
var inst_36587 = (state_36634[(7)]);
var inst_36589 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36590 = (new cljs.core.PersistentArrayMap(null,2,inst_36589,null));
var inst_36591 = (new cljs.core.PersistentHashSet(null,inst_36590,null));
var inst_36592 = figwheel.client.focus_msgs.call(null,inst_36591,inst_36587);
var inst_36593 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36592);
var inst_36594 = cljs.core.first.call(null,inst_36592);
var inst_36595 = figwheel.client.autoload_QMARK_.call(null);
var state_36634__$1 = (function (){var statearr_36649 = state_36634;
(statearr_36649[(9)] = inst_36593);

(statearr_36649[(8)] = inst_36594);

return statearr_36649;
})();
if(cljs.core.truth_(inst_36595)){
var statearr_36650_36674 = state_36634__$1;
(statearr_36650_36674[(1)] = (8));

} else {
var statearr_36651_36675 = state_36634__$1;
(statearr_36651_36675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (14))){
var inst_36605 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36652_36676 = state_36634__$1;
(statearr_36652_36676[(2)] = inst_36605);

(statearr_36652_36676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (16))){
var state_36634__$1 = state_36634;
var statearr_36653_36677 = state_36634__$1;
(statearr_36653_36677[(2)] = null);

(statearr_36653_36677[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (10))){
var inst_36626 = (state_36634[(2)]);
var state_36634__$1 = (function (){var statearr_36654 = state_36634;
(statearr_36654[(11)] = inst_36626);

return statearr_36654;
})();
var statearr_36655_36678 = state_36634__$1;
(statearr_36655_36678[(2)] = null);

(statearr_36655_36678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (8))){
var inst_36593 = (state_36634[(9)]);
var inst_36597 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36593,opts);
var state_36634__$1 = state_36634;
if(cljs.core.truth_(inst_36597)){
var statearr_36656_36679 = state_36634__$1;
(statearr_36656_36679[(1)] = (11));

} else {
var statearr_36657_36680 = state_36634__$1;
(statearr_36657_36680[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31547__auto___36662,ch))
;
return ((function (switch__31459__auto__,c__31547__auto___36662,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31460__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31460__auto____0 = (function (){
var statearr_36658 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36658[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31460__auto__);

(statearr_36658[(1)] = (1));

return statearr_36658;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31460__auto____1 = (function (state_36634){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_36634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e36659){if((e36659 instanceof Object)){
var ex__31463__auto__ = e36659;
var statearr_36660_36681 = state_36634;
(statearr_36660_36681[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36682 = state_36634;
state_36634 = G__36682;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31460__auto__ = function(state_36634){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31460__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31460__auto____1.call(this,state_36634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31460__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31460__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___36662,ch))
})();
var state__31549__auto__ = (function (){var statearr_36661 = f__31548__auto__.call(null);
(statearr_36661[(6)] = c__31547__auto___36662);

return statearr_36661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___36662,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36683_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36683_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36685 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36685){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36684){if((e36684 instanceof Error)){
var e = e36684;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36685], null));
} else {
var e = e36684;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36685))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36686){
var map__36687 = p__36686;
var map__36687__$1 = ((((!((map__36687 == null)))?((((map__36687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36687):map__36687);
var opts = map__36687__$1;
var build_id = cljs.core.get.call(null,map__36687__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36687,map__36687__$1,opts,build_id){
return (function (p__36689){
var vec__36690 = p__36689;
var seq__36691 = cljs.core.seq.call(null,vec__36690);
var first__36692 = cljs.core.first.call(null,seq__36691);
var seq__36691__$1 = cljs.core.next.call(null,seq__36691);
var map__36693 = first__36692;
var map__36693__$1 = ((((!((map__36693 == null)))?((((map__36693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36693):map__36693);
var msg = map__36693__$1;
var msg_name = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36691__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36690,seq__36691,first__36692,seq__36691__$1,map__36693,map__36693__$1,msg,msg_name,_,map__36687,map__36687__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36690,seq__36691,first__36692,seq__36691__$1,map__36693,map__36693__$1,msg,msg_name,_,map__36687,map__36687__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36687,map__36687__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36695){
var vec__36696 = p__36695;
var seq__36697 = cljs.core.seq.call(null,vec__36696);
var first__36698 = cljs.core.first.call(null,seq__36697);
var seq__36697__$1 = cljs.core.next.call(null,seq__36697);
var map__36699 = first__36698;
var map__36699__$1 = ((((!((map__36699 == null)))?((((map__36699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36699):map__36699);
var msg = map__36699__$1;
var msg_name = cljs.core.get.call(null,map__36699__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36697__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36701){
var map__36702 = p__36701;
var map__36702__$1 = ((((!((map__36702 == null)))?((((map__36702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36702):map__36702);
var on_compile_warning = cljs.core.get.call(null,map__36702__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36702__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36702,map__36702__$1,on_compile_warning,on_compile_fail){
return (function (p__36704){
var vec__36705 = p__36704;
var seq__36706 = cljs.core.seq.call(null,vec__36705);
var first__36707 = cljs.core.first.call(null,seq__36706);
var seq__36706__$1 = cljs.core.next.call(null,seq__36706);
var map__36708 = first__36707;
var map__36708__$1 = ((((!((map__36708 == null)))?((((map__36708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36708):map__36708);
var msg = map__36708__$1;
var msg_name = cljs.core.get.call(null,map__36708__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36706__$1;
var pred__36710 = cljs.core._EQ_;
var expr__36711 = msg_name;
if(cljs.core.truth_(pred__36710.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36711))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36710.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36711))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36702,map__36702__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__,msg_hist,msg_names,msg){
return (function (state_36800){
var state_val_36801 = (state_36800[(1)]);
if((state_val_36801 === (7))){
var inst_36720 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36720)){
var statearr_36802_36849 = state_36800__$1;
(statearr_36802_36849[(1)] = (8));

} else {
var statearr_36803_36850 = state_36800__$1;
(statearr_36803_36850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (20))){
var inst_36794 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36804_36851 = state_36800__$1;
(statearr_36804_36851[(2)] = inst_36794);

(statearr_36804_36851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (27))){
var inst_36790 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36805_36852 = state_36800__$1;
(statearr_36805_36852[(2)] = inst_36790);

(statearr_36805_36852[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (1))){
var inst_36713 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36713)){
var statearr_36806_36853 = state_36800__$1;
(statearr_36806_36853[(1)] = (2));

} else {
var statearr_36807_36854 = state_36800__$1;
(statearr_36807_36854[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (24))){
var inst_36792 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36808_36855 = state_36800__$1;
(statearr_36808_36855[(2)] = inst_36792);

(statearr_36808_36855[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (4))){
var inst_36798 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36800__$1,inst_36798);
} else {
if((state_val_36801 === (15))){
var inst_36796 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36809_36856 = state_36800__$1;
(statearr_36809_36856[(2)] = inst_36796);

(statearr_36809_36856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (21))){
var inst_36749 = (state_36800[(2)]);
var inst_36750 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36751 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36750);
var state_36800__$1 = (function (){var statearr_36810 = state_36800;
(statearr_36810[(7)] = inst_36749);

return statearr_36810;
})();
var statearr_36811_36857 = state_36800__$1;
(statearr_36811_36857[(2)] = inst_36751);

(statearr_36811_36857[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (31))){
var inst_36779 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36779)){
var statearr_36812_36858 = state_36800__$1;
(statearr_36812_36858[(1)] = (34));

} else {
var statearr_36813_36859 = state_36800__$1;
(statearr_36813_36859[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (32))){
var inst_36788 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36814_36860 = state_36800__$1;
(statearr_36814_36860[(2)] = inst_36788);

(statearr_36814_36860[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (33))){
var inst_36775 = (state_36800[(2)]);
var inst_36776 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36777 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36776);
var state_36800__$1 = (function (){var statearr_36815 = state_36800;
(statearr_36815[(8)] = inst_36775);

return statearr_36815;
})();
var statearr_36816_36861 = state_36800__$1;
(statearr_36816_36861[(2)] = inst_36777);

(statearr_36816_36861[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (13))){
var inst_36734 = figwheel.client.heads_up.clear.call(null);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(16),inst_36734);
} else {
if((state_val_36801 === (22))){
var inst_36755 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36756 = figwheel.client.heads_up.append_warning_message.call(null,inst_36755);
var state_36800__$1 = state_36800;
var statearr_36817_36862 = state_36800__$1;
(statearr_36817_36862[(2)] = inst_36756);

(statearr_36817_36862[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (36))){
var inst_36786 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36818_36863 = state_36800__$1;
(statearr_36818_36863[(2)] = inst_36786);

(statearr_36818_36863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (29))){
var inst_36766 = (state_36800[(2)]);
var inst_36767 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36768 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36767);
var state_36800__$1 = (function (){var statearr_36819 = state_36800;
(statearr_36819[(9)] = inst_36766);

return statearr_36819;
})();
var statearr_36820_36864 = state_36800__$1;
(statearr_36820_36864[(2)] = inst_36768);

(statearr_36820_36864[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (6))){
var inst_36715 = (state_36800[(10)]);
var state_36800__$1 = state_36800;
var statearr_36821_36865 = state_36800__$1;
(statearr_36821_36865[(2)] = inst_36715);

(statearr_36821_36865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (28))){
var inst_36762 = (state_36800[(2)]);
var inst_36763 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36764 = figwheel.client.heads_up.display_warning.call(null,inst_36763);
var state_36800__$1 = (function (){var statearr_36822 = state_36800;
(statearr_36822[(11)] = inst_36762);

return statearr_36822;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(29),inst_36764);
} else {
if((state_val_36801 === (25))){
var inst_36760 = figwheel.client.heads_up.clear.call(null);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(28),inst_36760);
} else {
if((state_val_36801 === (34))){
var inst_36781 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(37),inst_36781);
} else {
if((state_val_36801 === (17))){
var inst_36740 = (state_36800[(2)]);
var inst_36741 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36742 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36741);
var state_36800__$1 = (function (){var statearr_36823 = state_36800;
(statearr_36823[(12)] = inst_36740);

return statearr_36823;
})();
var statearr_36824_36866 = state_36800__$1;
(statearr_36824_36866[(2)] = inst_36742);

(statearr_36824_36866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (3))){
var inst_36732 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36732)){
var statearr_36825_36867 = state_36800__$1;
(statearr_36825_36867[(1)] = (13));

} else {
var statearr_36826_36868 = state_36800__$1;
(statearr_36826_36868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (12))){
var inst_36728 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36827_36869 = state_36800__$1;
(statearr_36827_36869[(2)] = inst_36728);

(statearr_36827_36869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (2))){
var inst_36715 = (state_36800[(10)]);
var inst_36715__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36800__$1 = (function (){var statearr_36828 = state_36800;
(statearr_36828[(10)] = inst_36715__$1);

return statearr_36828;
})();
if(cljs.core.truth_(inst_36715__$1)){
var statearr_36829_36870 = state_36800__$1;
(statearr_36829_36870[(1)] = (5));

} else {
var statearr_36830_36871 = state_36800__$1;
(statearr_36830_36871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (23))){
var inst_36758 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36758)){
var statearr_36831_36872 = state_36800__$1;
(statearr_36831_36872[(1)] = (25));

} else {
var statearr_36832_36873 = state_36800__$1;
(statearr_36832_36873[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (35))){
var state_36800__$1 = state_36800;
var statearr_36833_36874 = state_36800__$1;
(statearr_36833_36874[(2)] = null);

(statearr_36833_36874[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (19))){
var inst_36753 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36753)){
var statearr_36834_36875 = state_36800__$1;
(statearr_36834_36875[(1)] = (22));

} else {
var statearr_36835_36876 = state_36800__$1;
(statearr_36835_36876[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (11))){
var inst_36724 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36836_36877 = state_36800__$1;
(statearr_36836_36877[(2)] = inst_36724);

(statearr_36836_36877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (9))){
var inst_36726 = figwheel.client.heads_up.clear.call(null);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(12),inst_36726);
} else {
if((state_val_36801 === (5))){
var inst_36717 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36800__$1 = state_36800;
var statearr_36837_36878 = state_36800__$1;
(statearr_36837_36878[(2)] = inst_36717);

(statearr_36837_36878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (14))){
var inst_36744 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36744)){
var statearr_36838_36879 = state_36800__$1;
(statearr_36838_36879[(1)] = (18));

} else {
var statearr_36839_36880 = state_36800__$1;
(statearr_36839_36880[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (26))){
var inst_36770 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36800__$1 = state_36800;
if(cljs.core.truth_(inst_36770)){
var statearr_36840_36881 = state_36800__$1;
(statearr_36840_36881[(1)] = (30));

} else {
var statearr_36841_36882 = state_36800__$1;
(statearr_36841_36882[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (16))){
var inst_36736 = (state_36800[(2)]);
var inst_36737 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36738 = figwheel.client.heads_up.display_exception.call(null,inst_36737);
var state_36800__$1 = (function (){var statearr_36842 = state_36800;
(statearr_36842[(13)] = inst_36736);

return statearr_36842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(17),inst_36738);
} else {
if((state_val_36801 === (30))){
var inst_36772 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36773 = figwheel.client.heads_up.display_warning.call(null,inst_36772);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(33),inst_36773);
} else {
if((state_val_36801 === (10))){
var inst_36730 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36843_36883 = state_36800__$1;
(statearr_36843_36883[(2)] = inst_36730);

(statearr_36843_36883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (18))){
var inst_36746 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36747 = figwheel.client.heads_up.display_exception.call(null,inst_36746);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(21),inst_36747);
} else {
if((state_val_36801 === (37))){
var inst_36783 = (state_36800[(2)]);
var state_36800__$1 = state_36800;
var statearr_36844_36884 = state_36800__$1;
(statearr_36844_36884[(2)] = inst_36783);

(statearr_36844_36884[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36801 === (8))){
var inst_36722 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36800__$1 = state_36800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36800__$1,(11),inst_36722);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31547__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31459__auto__,c__31547__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto____0 = (function (){
var statearr_36845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36845[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto__);

(statearr_36845[(1)] = (1));

return statearr_36845;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto____1 = (function (state_36800){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_36800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e36846){if((e36846 instanceof Object)){
var ex__31463__auto__ = e36846;
var statearr_36847_36885 = state_36800;
(statearr_36847_36885[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36886 = state_36800;
state_36800 = G__36886;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto__ = function(state_36800){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto____1.call(this,state_36800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__,msg_hist,msg_names,msg))
})();
var state__31549__auto__ = (function (){var statearr_36848 = f__31548__auto__.call(null);
(statearr_36848[(6)] = c__31547__auto__);

return statearr_36848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__,msg_hist,msg_names,msg))
);

return c__31547__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31547__auto___36915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___36915,ch){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___36915,ch){
return (function (state_36901){
var state_val_36902 = (state_36901[(1)]);
if((state_val_36902 === (1))){
var state_36901__$1 = state_36901;
var statearr_36903_36916 = state_36901__$1;
(statearr_36903_36916[(2)] = null);

(statearr_36903_36916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (2))){
var state_36901__$1 = state_36901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36901__$1,(4),ch);
} else {
if((state_val_36902 === (3))){
var inst_36899 = (state_36901[(2)]);
var state_36901__$1 = state_36901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36901__$1,inst_36899);
} else {
if((state_val_36902 === (4))){
var inst_36889 = (state_36901[(7)]);
var inst_36889__$1 = (state_36901[(2)]);
var state_36901__$1 = (function (){var statearr_36904 = state_36901;
(statearr_36904[(7)] = inst_36889__$1);

return statearr_36904;
})();
if(cljs.core.truth_(inst_36889__$1)){
var statearr_36905_36917 = state_36901__$1;
(statearr_36905_36917[(1)] = (5));

} else {
var statearr_36906_36918 = state_36901__$1;
(statearr_36906_36918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (5))){
var inst_36889 = (state_36901[(7)]);
var inst_36891 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36889);
var state_36901__$1 = state_36901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36901__$1,(8),inst_36891);
} else {
if((state_val_36902 === (6))){
var state_36901__$1 = state_36901;
var statearr_36907_36919 = state_36901__$1;
(statearr_36907_36919[(2)] = null);

(statearr_36907_36919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (7))){
var inst_36897 = (state_36901[(2)]);
var state_36901__$1 = state_36901;
var statearr_36908_36920 = state_36901__$1;
(statearr_36908_36920[(2)] = inst_36897);

(statearr_36908_36920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (8))){
var inst_36893 = (state_36901[(2)]);
var state_36901__$1 = (function (){var statearr_36909 = state_36901;
(statearr_36909[(8)] = inst_36893);

return statearr_36909;
})();
var statearr_36910_36921 = state_36901__$1;
(statearr_36910_36921[(2)] = null);

(statearr_36910_36921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__31547__auto___36915,ch))
;
return ((function (switch__31459__auto__,c__31547__auto___36915,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31460__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31460__auto____0 = (function (){
var statearr_36911 = [null,null,null,null,null,null,null,null,null];
(statearr_36911[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31460__auto__);

(statearr_36911[(1)] = (1));

return statearr_36911;
});
var figwheel$client$heads_up_plugin_$_state_machine__31460__auto____1 = (function (state_36901){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_36901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e36912){if((e36912 instanceof Object)){
var ex__31463__auto__ = e36912;
var statearr_36913_36922 = state_36901;
(statearr_36913_36922[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36923 = state_36901;
state_36901 = G__36923;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31460__auto__ = function(state_36901){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31460__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31460__auto____1.call(this,state_36901);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31460__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31460__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___36915,ch))
})();
var state__31549__auto__ = (function (){var statearr_36914 = f__31548__auto__.call(null);
(statearr_36914[(6)] = c__31547__auto___36915);

return statearr_36914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___36915,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__){
return (function (state_36929){
var state_val_36930 = (state_36929[(1)]);
if((state_val_36930 === (1))){
var inst_36924 = cljs.core.async.timeout.call(null,(3000));
var state_36929__$1 = state_36929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36929__$1,(2),inst_36924);
} else {
if((state_val_36930 === (2))){
var inst_36926 = (state_36929[(2)]);
var inst_36927 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36929__$1 = (function (){var statearr_36931 = state_36929;
(statearr_36931[(7)] = inst_36926);

return statearr_36931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36929__$1,inst_36927);
} else {
return null;
}
}
});})(c__31547__auto__))
;
return ((function (switch__31459__auto__,c__31547__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31460__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31460__auto____0 = (function (){
var statearr_36932 = [null,null,null,null,null,null,null,null];
(statearr_36932[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31460__auto__);

(statearr_36932[(1)] = (1));

return statearr_36932;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31460__auto____1 = (function (state_36929){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_36929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e36933){if((e36933 instanceof Object)){
var ex__31463__auto__ = e36933;
var statearr_36934_36936 = state_36929;
(statearr_36934_36936[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36937 = state_36929;
state_36929 = G__36937;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31460__auto__ = function(state_36929){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31460__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31460__auto____1.call(this,state_36929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31460__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31460__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__))
})();
var state__31549__auto__ = (function (){var statearr_36935 = f__31548__auto__.call(null);
(statearr_36935[(6)] = c__31547__auto__);

return statearr_36935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__))
);

return c__31547__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36944){
var state_val_36945 = (state_36944[(1)]);
if((state_val_36945 === (1))){
var inst_36938 = cljs.core.async.timeout.call(null,(2000));
var state_36944__$1 = state_36944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36944__$1,(2),inst_36938);
} else {
if((state_val_36945 === (2))){
var inst_36940 = (state_36944[(2)]);
var inst_36941 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36942 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36941);
var state_36944__$1 = (function (){var statearr_36946 = state_36944;
(statearr_36946[(7)] = inst_36940);

return statearr_36946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36944__$1,inst_36942);
} else {
return null;
}
}
});})(c__31547__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31459__auto__,c__31547__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto____0 = (function (){
var statearr_36947 = [null,null,null,null,null,null,null,null];
(statearr_36947[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto__);

(statearr_36947[(1)] = (1));

return statearr_36947;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto____1 = (function (state_36944){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_36944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e36948){if((e36948 instanceof Object)){
var ex__31463__auto__ = e36948;
var statearr_36949_36951 = state_36944;
(statearr_36949_36951[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36952 = state_36944;
state_36944 = G__36952;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto__ = function(state_36944){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto____1.call(this,state_36944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31549__auto__ = (function (){var statearr_36950 = f__31548__auto__.call(null);
(statearr_36950[(6)] = c__31547__auto__);

return statearr_36950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__,figwheel_version,temp__4657__auto__))
);

return c__31547__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36953){
var map__36954 = p__36953;
var map__36954__$1 = ((((!((map__36954 == null)))?((((map__36954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36954):map__36954);
var file = cljs.core.get.call(null,map__36954__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36954__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36954__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36956 = "";
var G__36956__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36956),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36956);
var G__36956__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36956__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36956__$1);
if(cljs.core.truth_((function (){var and__7656__auto__ = line;
if(cljs.core.truth_(and__7656__auto__)){
return column;
} else {
return and__7656__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36956__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36956__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36957){
var map__36958 = p__36957;
var map__36958__$1 = ((((!((map__36958 == null)))?((((map__36958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36958):map__36958);
var ed = map__36958__$1;
var formatted_exception = cljs.core.get.call(null,map__36958__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36958__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36958__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36960_36964 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36961_36965 = null;
var count__36962_36966 = (0);
var i__36963_36967 = (0);
while(true){
if((i__36963_36967 < count__36962_36966)){
var msg_36968 = cljs.core._nth.call(null,chunk__36961_36965,i__36963_36967);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36968);

var G__36969 = seq__36960_36964;
var G__36970 = chunk__36961_36965;
var G__36971 = count__36962_36966;
var G__36972 = (i__36963_36967 + (1));
seq__36960_36964 = G__36969;
chunk__36961_36965 = G__36970;
count__36962_36966 = G__36971;
i__36963_36967 = G__36972;
continue;
} else {
var temp__4657__auto___36973 = cljs.core.seq.call(null,seq__36960_36964);
if(temp__4657__auto___36973){
var seq__36960_36974__$1 = temp__4657__auto___36973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36960_36974__$1)){
var c__8507__auto___36975 = cljs.core.chunk_first.call(null,seq__36960_36974__$1);
var G__36976 = cljs.core.chunk_rest.call(null,seq__36960_36974__$1);
var G__36977 = c__8507__auto___36975;
var G__36978 = cljs.core.count.call(null,c__8507__auto___36975);
var G__36979 = (0);
seq__36960_36964 = G__36976;
chunk__36961_36965 = G__36977;
count__36962_36966 = G__36978;
i__36963_36967 = G__36979;
continue;
} else {
var msg_36980 = cljs.core.first.call(null,seq__36960_36974__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36980);

var G__36981 = cljs.core.next.call(null,seq__36960_36974__$1);
var G__36982 = null;
var G__36983 = (0);
var G__36984 = (0);
seq__36960_36964 = G__36981;
chunk__36961_36965 = G__36982;
count__36962_36966 = G__36983;
i__36963_36967 = G__36984;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36985){
var map__36986 = p__36985;
var map__36986__$1 = ((((!((map__36986 == null)))?((((map__36986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36986):map__36986);
var w = map__36986__$1;
var message = cljs.core.get.call(null,map__36986__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__7656__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__7656__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__7656__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36988 = cljs.core.seq.call(null,plugins);
var chunk__36989 = null;
var count__36990 = (0);
var i__36991 = (0);
while(true){
if((i__36991 < count__36990)){
var vec__36992 = cljs.core._nth.call(null,chunk__36989,i__36991);
var k = cljs.core.nth.call(null,vec__36992,(0),null);
var plugin = cljs.core.nth.call(null,vec__36992,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36998 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36988,chunk__36989,count__36990,i__36991,pl_36998,vec__36992,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36998.call(null,msg_hist);
});})(seq__36988,chunk__36989,count__36990,i__36991,pl_36998,vec__36992,k,plugin))
);
} else {
}

var G__36999 = seq__36988;
var G__37000 = chunk__36989;
var G__37001 = count__36990;
var G__37002 = (i__36991 + (1));
seq__36988 = G__36999;
chunk__36989 = G__37000;
count__36990 = G__37001;
i__36991 = G__37002;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36988);
if(temp__4657__auto__){
var seq__36988__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36988__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__36988__$1);
var G__37003 = cljs.core.chunk_rest.call(null,seq__36988__$1);
var G__37004 = c__8507__auto__;
var G__37005 = cljs.core.count.call(null,c__8507__auto__);
var G__37006 = (0);
seq__36988 = G__37003;
chunk__36989 = G__37004;
count__36990 = G__37005;
i__36991 = G__37006;
continue;
} else {
var vec__36995 = cljs.core.first.call(null,seq__36988__$1);
var k = cljs.core.nth.call(null,vec__36995,(0),null);
var plugin = cljs.core.nth.call(null,vec__36995,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37007 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36988,chunk__36989,count__36990,i__36991,pl_37007,vec__36995,k,plugin,seq__36988__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37007.call(null,msg_hist);
});})(seq__36988,chunk__36989,count__36990,i__36991,pl_37007,vec__36995,k,plugin,seq__36988__$1,temp__4657__auto__))
);
} else {
}

var G__37008 = cljs.core.next.call(null,seq__36988__$1);
var G__37009 = null;
var G__37010 = (0);
var G__37011 = (0);
seq__36988 = G__37008;
chunk__36989 = G__37009;
count__36990 = G__37010;
i__36991 = G__37011;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37013 = arguments.length;
switch (G__37013) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37014_37019 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37015_37020 = null;
var count__37016_37021 = (0);
var i__37017_37022 = (0);
while(true){
if((i__37017_37022 < count__37016_37021)){
var msg_37023 = cljs.core._nth.call(null,chunk__37015_37020,i__37017_37022);
figwheel.client.socket.handle_incoming_message.call(null,msg_37023);

var G__37024 = seq__37014_37019;
var G__37025 = chunk__37015_37020;
var G__37026 = count__37016_37021;
var G__37027 = (i__37017_37022 + (1));
seq__37014_37019 = G__37024;
chunk__37015_37020 = G__37025;
count__37016_37021 = G__37026;
i__37017_37022 = G__37027;
continue;
} else {
var temp__4657__auto___37028 = cljs.core.seq.call(null,seq__37014_37019);
if(temp__4657__auto___37028){
var seq__37014_37029__$1 = temp__4657__auto___37028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37014_37029__$1)){
var c__8507__auto___37030 = cljs.core.chunk_first.call(null,seq__37014_37029__$1);
var G__37031 = cljs.core.chunk_rest.call(null,seq__37014_37029__$1);
var G__37032 = c__8507__auto___37030;
var G__37033 = cljs.core.count.call(null,c__8507__auto___37030);
var G__37034 = (0);
seq__37014_37019 = G__37031;
chunk__37015_37020 = G__37032;
count__37016_37021 = G__37033;
i__37017_37022 = G__37034;
continue;
} else {
var msg_37035 = cljs.core.first.call(null,seq__37014_37029__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37035);

var G__37036 = cljs.core.next.call(null,seq__37014_37029__$1);
var G__37037 = null;
var G__37038 = (0);
var G__37039 = (0);
seq__37014_37019 = G__37036;
chunk__37015_37020 = G__37037;
count__37016_37021 = G__37038;
i__37017_37022 = G__37039;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__8846__auto__ = [];
var len__8839__auto___37044 = arguments.length;
var i__8840__auto___37045 = (0);
while(true){
if((i__8840__auto___37045 < len__8839__auto___37044)){
args__8846__auto__.push((arguments[i__8840__auto___37045]));

var G__37046 = (i__8840__auto___37045 + (1));
i__8840__auto___37045 = G__37046;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37041){
var map__37042 = p__37041;
var map__37042__$1 = ((((!((map__37042 == null)))?((((map__37042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37042):map__37042);
var opts = map__37042__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37040){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37040));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37047){if((e37047 instanceof Error)){
var e = e37047;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37047;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37048){
var map__37049 = p__37048;
var map__37049__$1 = ((((!((map__37049 == null)))?((((map__37049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37049):map__37049);
var msg_name = cljs.core.get.call(null,map__37049__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1507562217100
