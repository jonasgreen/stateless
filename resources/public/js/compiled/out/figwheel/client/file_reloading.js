// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__7668__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__7668__auto__){
return or__7668__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__7668__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
var or__7668__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__7668__auto____$1)){
return or__7668__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34814_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34814_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34815 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34816 = null;
var count__34817 = (0);
var i__34818 = (0);
while(true){
if((i__34818 < count__34817)){
var n = cljs.core._nth.call(null,chunk__34816,i__34818);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34819 = seq__34815;
var G__34820 = chunk__34816;
var G__34821 = count__34817;
var G__34822 = (i__34818 + (1));
seq__34815 = G__34819;
chunk__34816 = G__34820;
count__34817 = G__34821;
i__34818 = G__34822;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34815);
if(temp__4657__auto__){
var seq__34815__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34815__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__34815__$1);
var G__34823 = cljs.core.chunk_rest.call(null,seq__34815__$1);
var G__34824 = c__8507__auto__;
var G__34825 = cljs.core.count.call(null,c__8507__auto__);
var G__34826 = (0);
seq__34815 = G__34823;
chunk__34816 = G__34824;
count__34817 = G__34825;
i__34818 = G__34826;
continue;
} else {
var n = cljs.core.first.call(null,seq__34815__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34827 = cljs.core.next.call(null,seq__34815__$1);
var G__34828 = null;
var G__34829 = (0);
var G__34830 = (0);
seq__34815 = G__34827;
chunk__34816 = G__34828;
count__34817 = G__34829;
i__34818 = G__34830;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34831){
var vec__34832 = p__34831;
var _ = cljs.core.nth.call(null,vec__34832,(0),null);
var v = cljs.core.nth.call(null,vec__34832,(1),null);
var and__7656__auto__ = v;
if(cljs.core.truth_(and__7656__auto__)){
return v.call(null,dep);
} else {
return and__7656__auto__;
}
}),cljs.core.filter.call(null,(function (p__34835){
var vec__34836 = p__34835;
var k = cljs.core.nth.call(null,vec__34836,(0),null);
var v = cljs.core.nth.call(null,vec__34836,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34848_34856 = cljs.core.seq.call(null,deps);
var chunk__34849_34857 = null;
var count__34850_34858 = (0);
var i__34851_34859 = (0);
while(true){
if((i__34851_34859 < count__34850_34858)){
var dep_34860 = cljs.core._nth.call(null,chunk__34849_34857,i__34851_34859);
if(cljs.core.truth_((function (){var and__7656__auto__ = dep_34860;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34860));
} else {
return and__7656__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34860,(depth + (1)),state);
} else {
}

var G__34861 = seq__34848_34856;
var G__34862 = chunk__34849_34857;
var G__34863 = count__34850_34858;
var G__34864 = (i__34851_34859 + (1));
seq__34848_34856 = G__34861;
chunk__34849_34857 = G__34862;
count__34850_34858 = G__34863;
i__34851_34859 = G__34864;
continue;
} else {
var temp__4657__auto___34865 = cljs.core.seq.call(null,seq__34848_34856);
if(temp__4657__auto___34865){
var seq__34848_34866__$1 = temp__4657__auto___34865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34848_34866__$1)){
var c__8507__auto___34867 = cljs.core.chunk_first.call(null,seq__34848_34866__$1);
var G__34868 = cljs.core.chunk_rest.call(null,seq__34848_34866__$1);
var G__34869 = c__8507__auto___34867;
var G__34870 = cljs.core.count.call(null,c__8507__auto___34867);
var G__34871 = (0);
seq__34848_34856 = G__34868;
chunk__34849_34857 = G__34869;
count__34850_34858 = G__34870;
i__34851_34859 = G__34871;
continue;
} else {
var dep_34872 = cljs.core.first.call(null,seq__34848_34866__$1);
if(cljs.core.truth_((function (){var and__7656__auto__ = dep_34872;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34872));
} else {
return and__7656__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34872,(depth + (1)),state);
} else {
}

var G__34873 = cljs.core.next.call(null,seq__34848_34866__$1);
var G__34874 = null;
var G__34875 = (0);
var G__34876 = (0);
seq__34848_34856 = G__34873;
chunk__34849_34857 = G__34874;
count__34850_34858 = G__34875;
i__34851_34859 = G__34876;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34852){
var vec__34853 = p__34852;
var seq__34854 = cljs.core.seq.call(null,vec__34853);
var first__34855 = cljs.core.first.call(null,seq__34854);
var seq__34854__$1 = cljs.core.next.call(null,seq__34854);
var x = first__34855;
var xs = seq__34854__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34853,seq__34854,first__34855,seq__34854__$1,x,xs,get_deps__$1){
return (function (p1__34839_SHARP_){
return clojure.set.difference.call(null,p1__34839_SHARP_,x);
});})(vec__34853,seq__34854,first__34855,seq__34854__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34877 = cljs.core.seq.call(null,provides);
var chunk__34878 = null;
var count__34879 = (0);
var i__34880 = (0);
while(true){
if((i__34880 < count__34879)){
var prov = cljs.core._nth.call(null,chunk__34878,i__34880);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34881_34889 = cljs.core.seq.call(null,requires);
var chunk__34882_34890 = null;
var count__34883_34891 = (0);
var i__34884_34892 = (0);
while(true){
if((i__34884_34892 < count__34883_34891)){
var req_34893 = cljs.core._nth.call(null,chunk__34882_34890,i__34884_34892);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34893,prov);

var G__34894 = seq__34881_34889;
var G__34895 = chunk__34882_34890;
var G__34896 = count__34883_34891;
var G__34897 = (i__34884_34892 + (1));
seq__34881_34889 = G__34894;
chunk__34882_34890 = G__34895;
count__34883_34891 = G__34896;
i__34884_34892 = G__34897;
continue;
} else {
var temp__4657__auto___34898 = cljs.core.seq.call(null,seq__34881_34889);
if(temp__4657__auto___34898){
var seq__34881_34899__$1 = temp__4657__auto___34898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34881_34899__$1)){
var c__8507__auto___34900 = cljs.core.chunk_first.call(null,seq__34881_34899__$1);
var G__34901 = cljs.core.chunk_rest.call(null,seq__34881_34899__$1);
var G__34902 = c__8507__auto___34900;
var G__34903 = cljs.core.count.call(null,c__8507__auto___34900);
var G__34904 = (0);
seq__34881_34889 = G__34901;
chunk__34882_34890 = G__34902;
count__34883_34891 = G__34903;
i__34884_34892 = G__34904;
continue;
} else {
var req_34905 = cljs.core.first.call(null,seq__34881_34899__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34905,prov);

var G__34906 = cljs.core.next.call(null,seq__34881_34899__$1);
var G__34907 = null;
var G__34908 = (0);
var G__34909 = (0);
seq__34881_34889 = G__34906;
chunk__34882_34890 = G__34907;
count__34883_34891 = G__34908;
i__34884_34892 = G__34909;
continue;
}
} else {
}
}
break;
}

var G__34910 = seq__34877;
var G__34911 = chunk__34878;
var G__34912 = count__34879;
var G__34913 = (i__34880 + (1));
seq__34877 = G__34910;
chunk__34878 = G__34911;
count__34879 = G__34912;
i__34880 = G__34913;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34877);
if(temp__4657__auto__){
var seq__34877__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34877__$1)){
var c__8507__auto__ = cljs.core.chunk_first.call(null,seq__34877__$1);
var G__34914 = cljs.core.chunk_rest.call(null,seq__34877__$1);
var G__34915 = c__8507__auto__;
var G__34916 = cljs.core.count.call(null,c__8507__auto__);
var G__34917 = (0);
seq__34877 = G__34914;
chunk__34878 = G__34915;
count__34879 = G__34916;
i__34880 = G__34917;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34877__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34885_34918 = cljs.core.seq.call(null,requires);
var chunk__34886_34919 = null;
var count__34887_34920 = (0);
var i__34888_34921 = (0);
while(true){
if((i__34888_34921 < count__34887_34920)){
var req_34922 = cljs.core._nth.call(null,chunk__34886_34919,i__34888_34921);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34922,prov);

var G__34923 = seq__34885_34918;
var G__34924 = chunk__34886_34919;
var G__34925 = count__34887_34920;
var G__34926 = (i__34888_34921 + (1));
seq__34885_34918 = G__34923;
chunk__34886_34919 = G__34924;
count__34887_34920 = G__34925;
i__34888_34921 = G__34926;
continue;
} else {
var temp__4657__auto___34927__$1 = cljs.core.seq.call(null,seq__34885_34918);
if(temp__4657__auto___34927__$1){
var seq__34885_34928__$1 = temp__4657__auto___34927__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34885_34928__$1)){
var c__8507__auto___34929 = cljs.core.chunk_first.call(null,seq__34885_34928__$1);
var G__34930 = cljs.core.chunk_rest.call(null,seq__34885_34928__$1);
var G__34931 = c__8507__auto___34929;
var G__34932 = cljs.core.count.call(null,c__8507__auto___34929);
var G__34933 = (0);
seq__34885_34918 = G__34930;
chunk__34886_34919 = G__34931;
count__34887_34920 = G__34932;
i__34888_34921 = G__34933;
continue;
} else {
var req_34934 = cljs.core.first.call(null,seq__34885_34928__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34934,prov);

var G__34935 = cljs.core.next.call(null,seq__34885_34928__$1);
var G__34936 = null;
var G__34937 = (0);
var G__34938 = (0);
seq__34885_34918 = G__34935;
chunk__34886_34919 = G__34936;
count__34887_34920 = G__34937;
i__34888_34921 = G__34938;
continue;
}
} else {
}
}
break;
}

var G__34939 = cljs.core.next.call(null,seq__34877__$1);
var G__34940 = null;
var G__34941 = (0);
var G__34942 = (0);
seq__34877 = G__34939;
chunk__34878 = G__34940;
count__34879 = G__34941;
i__34880 = G__34942;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34943_34947 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34944_34948 = null;
var count__34945_34949 = (0);
var i__34946_34950 = (0);
while(true){
if((i__34946_34950 < count__34945_34949)){
var ns_34951 = cljs.core._nth.call(null,chunk__34944_34948,i__34946_34950);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34951);

var G__34952 = seq__34943_34947;
var G__34953 = chunk__34944_34948;
var G__34954 = count__34945_34949;
var G__34955 = (i__34946_34950 + (1));
seq__34943_34947 = G__34952;
chunk__34944_34948 = G__34953;
count__34945_34949 = G__34954;
i__34946_34950 = G__34955;
continue;
} else {
var temp__4657__auto___34956 = cljs.core.seq.call(null,seq__34943_34947);
if(temp__4657__auto___34956){
var seq__34943_34957__$1 = temp__4657__auto___34956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34943_34957__$1)){
var c__8507__auto___34958 = cljs.core.chunk_first.call(null,seq__34943_34957__$1);
var G__34959 = cljs.core.chunk_rest.call(null,seq__34943_34957__$1);
var G__34960 = c__8507__auto___34958;
var G__34961 = cljs.core.count.call(null,c__8507__auto___34958);
var G__34962 = (0);
seq__34943_34947 = G__34959;
chunk__34944_34948 = G__34960;
count__34945_34949 = G__34961;
i__34946_34950 = G__34962;
continue;
} else {
var ns_34963 = cljs.core.first.call(null,seq__34943_34957__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34963);

var G__34964 = cljs.core.next.call(null,seq__34943_34957__$1);
var G__34965 = null;
var G__34966 = (0);
var G__34967 = (0);
seq__34943_34947 = G__34964;
chunk__34944_34948 = G__34965;
count__34945_34949 = G__34966;
i__34946_34950 = G__34967;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__7668__auto__ = goog.require__;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34968__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34969__i = 0, G__34969__a = new Array(arguments.length -  0);
while (G__34969__i < G__34969__a.length) {G__34969__a[G__34969__i] = arguments[G__34969__i + 0]; ++G__34969__i;}
  args = new cljs.core.IndexedSeq(G__34969__a,0,null);
} 
return G__34968__delegate.call(this,args);};
G__34968.cljs$lang$maxFixedArity = 0;
G__34968.cljs$lang$applyTo = (function (arglist__34970){
var args = cljs.core.seq(arglist__34970);
return G__34968__delegate(args);
});
G__34968.cljs$core$IFn$_invoke$arity$variadic = G__34968__delegate;
return G__34968;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34971_SHARP_,p2__34972_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34971_SHARP_)].join('')),p2__34972_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34973_SHARP_,p2__34974_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34973_SHARP_)].join(''),p2__34974_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34975 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34975.addCallback(((function (G__34975){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34975))
);

G__34975.addErrback(((function (G__34975){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34975))
);

return G__34975;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34976){if((e34976 instanceof Error)){
var e = e34976;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34976;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34977){if((e34977 instanceof Error)){
var e = e34977;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34977;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34978 = cljs.core._EQ_;
var expr__34979 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34978.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34979))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34978.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34979))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34978.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34979))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34978,expr__34979){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34978,expr__34979))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34981,callback){
var map__34982 = p__34981;
var map__34982__$1 = ((((!((map__34982 == null)))?((((map__34982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34982):map__34982);
var file_msg = map__34982__$1;
var request_url = cljs.core.get.call(null,map__34982__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__7668__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34982,map__34982__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34982,map__34982__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__){
return (function (state_35022){
var state_val_35023 = (state_35022[(1)]);
if((state_val_35023 === (7))){
var inst_35018 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
var statearr_35024_35051 = state_35022__$1;
(statearr_35024_35051[(2)] = inst_35018);

(statearr_35024_35051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (1))){
var state_35022__$1 = state_35022;
var statearr_35025_35052 = state_35022__$1;
(statearr_35025_35052[(2)] = null);

(statearr_35025_35052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (4))){
var inst_34986 = (state_35022[(7)]);
var inst_34986__$1 = (state_35022[(2)]);
var state_35022__$1 = (function (){var statearr_35026 = state_35022;
(statearr_35026[(7)] = inst_34986__$1);

return statearr_35026;
})();
if(cljs.core.truth_(inst_34986__$1)){
var statearr_35027_35053 = state_35022__$1;
(statearr_35027_35053[(1)] = (5));

} else {
var statearr_35028_35054 = state_35022__$1;
(statearr_35028_35054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (15))){
var inst_35003 = (state_35022[(8)]);
var inst_35000 = (state_35022[(9)]);
var inst_35005 = inst_35003.call(null,inst_35000);
var state_35022__$1 = state_35022;
var statearr_35029_35055 = state_35022__$1;
(statearr_35029_35055[(2)] = inst_35005);

(statearr_35029_35055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (13))){
var inst_35012 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
var statearr_35030_35056 = state_35022__$1;
(statearr_35030_35056[(2)] = inst_35012);

(statearr_35030_35056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (6))){
var state_35022__$1 = state_35022;
var statearr_35031_35057 = state_35022__$1;
(statearr_35031_35057[(2)] = null);

(statearr_35031_35057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (17))){
var inst_35009 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
var statearr_35032_35058 = state_35022__$1;
(statearr_35032_35058[(2)] = inst_35009);

(statearr_35032_35058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (3))){
var inst_35020 = (state_35022[(2)]);
var state_35022__$1 = state_35022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35022__$1,inst_35020);
} else {
if((state_val_35023 === (12))){
var state_35022__$1 = state_35022;
var statearr_35033_35059 = state_35022__$1;
(statearr_35033_35059[(2)] = null);

(statearr_35033_35059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (2))){
var state_35022__$1 = state_35022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35022__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35023 === (11))){
var inst_34991 = (state_35022[(10)]);
var inst_34998 = figwheel.client.file_reloading.blocking_load.call(null,inst_34991);
var state_35022__$1 = state_35022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35022__$1,(14),inst_34998);
} else {
if((state_val_35023 === (9))){
var inst_34991 = (state_35022[(10)]);
var state_35022__$1 = state_35022;
if(cljs.core.truth_(inst_34991)){
var statearr_35034_35060 = state_35022__$1;
(statearr_35034_35060[(1)] = (11));

} else {
var statearr_35035_35061 = state_35022__$1;
(statearr_35035_35061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (5))){
var inst_34986 = (state_35022[(7)]);
var inst_34992 = (state_35022[(11)]);
var inst_34991 = cljs.core.nth.call(null,inst_34986,(0),null);
var inst_34992__$1 = cljs.core.nth.call(null,inst_34986,(1),null);
var state_35022__$1 = (function (){var statearr_35036 = state_35022;
(statearr_35036[(10)] = inst_34991);

(statearr_35036[(11)] = inst_34992__$1);

return statearr_35036;
})();
if(cljs.core.truth_(inst_34992__$1)){
var statearr_35037_35062 = state_35022__$1;
(statearr_35037_35062[(1)] = (8));

} else {
var statearr_35038_35063 = state_35022__$1;
(statearr_35038_35063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (14))){
var inst_35003 = (state_35022[(8)]);
var inst_34991 = (state_35022[(10)]);
var inst_35000 = (state_35022[(2)]);
var inst_35001 = console.log("Loading!",inst_34991);
var inst_35002 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35003__$1 = cljs.core.get.call(null,inst_35002,inst_34991);
var state_35022__$1 = (function (){var statearr_35039 = state_35022;
(statearr_35039[(8)] = inst_35003__$1);

(statearr_35039[(9)] = inst_35000);

(statearr_35039[(12)] = inst_35001);

return statearr_35039;
})();
if(cljs.core.truth_(inst_35003__$1)){
var statearr_35040_35064 = state_35022__$1;
(statearr_35040_35064[(1)] = (15));

} else {
var statearr_35041_35065 = state_35022__$1;
(statearr_35041_35065[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (16))){
var inst_35000 = (state_35022[(9)]);
var inst_35007 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35000);
var state_35022__$1 = state_35022;
var statearr_35042_35066 = state_35022__$1;
(statearr_35042_35066[(2)] = inst_35007);

(statearr_35042_35066[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (10))){
var inst_35014 = (state_35022[(2)]);
var state_35022__$1 = (function (){var statearr_35043 = state_35022;
(statearr_35043[(13)] = inst_35014);

return statearr_35043;
})();
var statearr_35044_35067 = state_35022__$1;
(statearr_35044_35067[(2)] = null);

(statearr_35044_35067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35023 === (8))){
var inst_34992 = (state_35022[(11)]);
var inst_34994 = console.log("Evaling!",inst_34992);
var inst_34995 = eval(inst_34992);
var state_35022__$1 = (function (){var statearr_35045 = state_35022;
(statearr_35045[(14)] = inst_34994);

return statearr_35045;
})();
var statearr_35046_35068 = state_35022__$1;
(statearr_35046_35068[(2)] = inst_34995);

(statearr_35046_35068[(1)] = (10));


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
});})(c__31547__auto__))
;
return ((function (switch__31459__auto__,c__31547__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31460__auto__ = null;
var figwheel$client$file_reloading$state_machine__31460__auto____0 = (function (){
var statearr_35047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35047[(0)] = figwheel$client$file_reloading$state_machine__31460__auto__);

(statearr_35047[(1)] = (1));

return statearr_35047;
});
var figwheel$client$file_reloading$state_machine__31460__auto____1 = (function (state_35022){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_35022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e35048){if((e35048 instanceof Object)){
var ex__31463__auto__ = e35048;
var statearr_35049_35069 = state_35022;
(statearr_35049_35069[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35070 = state_35022;
state_35022 = G__35070;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31460__auto__ = function(state_35022){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31460__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31460__auto____1.call(this,state_35022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31460__auto____0;
figwheel$client$file_reloading$state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31460__auto____1;
return figwheel$client$file_reloading$state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__))
})();
var state__31549__auto__ = (function (){var statearr_35050 = f__31548__auto__.call(null);
(statearr_35050[(6)] = c__31547__auto__);

return statearr_35050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__))
);

return c__31547__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35072 = arguments.length;
switch (G__35072) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35074,callback){
var map__35075 = p__35074;
var map__35075__$1 = ((((!((map__35075 == null)))?((((map__35075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35075):map__35075);
var file_msg = map__35075__$1;
var namespace = cljs.core.get.call(null,map__35075__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35075,map__35075__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35075,map__35075__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35077){
var map__35078 = p__35077;
var map__35078__$1 = ((((!((map__35078 == null)))?((((map__35078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35078):map__35078);
var file_msg = map__35078__$1;
var namespace = cljs.core.get.call(null,map__35078__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35080){
var map__35081 = p__35080;
var map__35081__$1 = ((((!((map__35081 == null)))?((((map__35081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35081):map__35081);
var file_msg = map__35081__$1;
var namespace = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__7656__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__7656__auto__){
var or__7668__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
var or__7668__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__7668__auto____$1)){
return or__7668__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__7656__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35083,callback){
var map__35084 = p__35083;
var map__35084__$1 = ((((!((map__35084 == null)))?((((map__35084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35084):map__35084);
var file_msg = map__35084__$1;
var request_url = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31547__auto___35134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto___35134,out){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto___35134,out){
return (function (state_35119){
var state_val_35120 = (state_35119[(1)]);
if((state_val_35120 === (1))){
var inst_35093 = cljs.core.seq.call(null,files);
var inst_35094 = cljs.core.first.call(null,inst_35093);
var inst_35095 = cljs.core.next.call(null,inst_35093);
var inst_35096 = files;
var state_35119__$1 = (function (){var statearr_35121 = state_35119;
(statearr_35121[(7)] = inst_35095);

(statearr_35121[(8)] = inst_35096);

(statearr_35121[(9)] = inst_35094);

return statearr_35121;
})();
var statearr_35122_35135 = state_35119__$1;
(statearr_35122_35135[(2)] = null);

(statearr_35122_35135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (2))){
var inst_35102 = (state_35119[(10)]);
var inst_35096 = (state_35119[(8)]);
var inst_35101 = cljs.core.seq.call(null,inst_35096);
var inst_35102__$1 = cljs.core.first.call(null,inst_35101);
var inst_35103 = cljs.core.next.call(null,inst_35101);
var inst_35104 = (inst_35102__$1 == null);
var inst_35105 = cljs.core.not.call(null,inst_35104);
var state_35119__$1 = (function (){var statearr_35123 = state_35119;
(statearr_35123[(11)] = inst_35103);

(statearr_35123[(10)] = inst_35102__$1);

return statearr_35123;
})();
if(inst_35105){
var statearr_35124_35136 = state_35119__$1;
(statearr_35124_35136[(1)] = (4));

} else {
var statearr_35125_35137 = state_35119__$1;
(statearr_35125_35137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (3))){
var inst_35117 = (state_35119[(2)]);
var state_35119__$1 = state_35119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35119__$1,inst_35117);
} else {
if((state_val_35120 === (4))){
var inst_35102 = (state_35119[(10)]);
var inst_35107 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35102);
var state_35119__$1 = state_35119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35119__$1,(7),inst_35107);
} else {
if((state_val_35120 === (5))){
var inst_35113 = cljs.core.async.close_BANG_.call(null,out);
var state_35119__$1 = state_35119;
var statearr_35126_35138 = state_35119__$1;
(statearr_35126_35138[(2)] = inst_35113);

(statearr_35126_35138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (6))){
var inst_35115 = (state_35119[(2)]);
var state_35119__$1 = state_35119;
var statearr_35127_35139 = state_35119__$1;
(statearr_35127_35139[(2)] = inst_35115);

(statearr_35127_35139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35120 === (7))){
var inst_35103 = (state_35119[(11)]);
var inst_35109 = (state_35119[(2)]);
var inst_35110 = cljs.core.async.put_BANG_.call(null,out,inst_35109);
var inst_35096 = inst_35103;
var state_35119__$1 = (function (){var statearr_35128 = state_35119;
(statearr_35128[(12)] = inst_35110);

(statearr_35128[(8)] = inst_35096);

return statearr_35128;
})();
var statearr_35129_35140 = state_35119__$1;
(statearr_35129_35140[(2)] = null);

(statearr_35129_35140[(1)] = (2));


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
});})(c__31547__auto___35134,out))
;
return ((function (switch__31459__auto__,c__31547__auto___35134,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto____0 = (function (){
var statearr_35130 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35130[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto__);

(statearr_35130[(1)] = (1));

return statearr_35130;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto____1 = (function (state_35119){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_35119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e35131){if((e35131 instanceof Object)){
var ex__31463__auto__ = e35131;
var statearr_35132_35141 = state_35119;
(statearr_35132_35141[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35142 = state_35119;
state_35119 = G__35142;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto__ = function(state_35119){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto____1.call(this,state_35119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto___35134,out))
})();
var state__31549__auto__ = (function (){var statearr_35133 = f__31548__auto__.call(null);
(statearr_35133[(6)] = c__31547__auto___35134);

return statearr_35133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto___35134,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35143,opts){
var map__35144 = p__35143;
var map__35144__$1 = ((((!((map__35144 == null)))?((((map__35144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35144):map__35144);
var eval_body = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__7656__auto__ = eval_body;
if(cljs.core.truth_(and__7656__auto__)){
return typeof eval_body === 'string';
} else {
return and__7656__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35146){var e = e35146;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35147_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35147_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35148){
var vec__35149 = p__35148;
var k = cljs.core.nth.call(null,vec__35149,(0),null);
var v = cljs.core.nth.call(null,vec__35149,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35152){
var vec__35153 = p__35152;
var k = cljs.core.nth.call(null,vec__35153,(0),null);
var v = cljs.core.nth.call(null,vec__35153,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35159,p__35160){
var map__35161 = p__35159;
var map__35161__$1 = ((((!((map__35161 == null)))?((((map__35161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35161):map__35161);
var opts = map__35161__$1;
var before_jsload = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35162 = p__35160;
var map__35162__$1 = ((((!((map__35162 == null)))?((((map__35162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35162):map__35162);
var msg = map__35162__$1;
var files = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31547__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31548__auto__ = (function (){var switch__31459__auto__ = ((function (c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35316){
var state_val_35317 = (state_35316[(1)]);
if((state_val_35317 === (7))){
var inst_35177 = (state_35316[(7)]);
var inst_35179 = (state_35316[(8)]);
var inst_35178 = (state_35316[(9)]);
var inst_35176 = (state_35316[(10)]);
var inst_35184 = cljs.core._nth.call(null,inst_35177,inst_35179);
var inst_35185 = figwheel.client.file_reloading.eval_body.call(null,inst_35184,opts);
var inst_35186 = (inst_35179 + (1));
var tmp35318 = inst_35177;
var tmp35319 = inst_35178;
var tmp35320 = inst_35176;
var inst_35176__$1 = tmp35320;
var inst_35177__$1 = tmp35318;
var inst_35178__$1 = tmp35319;
var inst_35179__$1 = inst_35186;
var state_35316__$1 = (function (){var statearr_35321 = state_35316;
(statearr_35321[(7)] = inst_35177__$1);

(statearr_35321[(8)] = inst_35179__$1);

(statearr_35321[(11)] = inst_35185);

(statearr_35321[(9)] = inst_35178__$1);

(statearr_35321[(10)] = inst_35176__$1);

return statearr_35321;
})();
var statearr_35322_35405 = state_35316__$1;
(statearr_35322_35405[(2)] = null);

(statearr_35322_35405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (20))){
var inst_35219 = (state_35316[(12)]);
var inst_35227 = figwheel.client.file_reloading.sort_files.call(null,inst_35219);
var state_35316__$1 = state_35316;
var statearr_35323_35406 = state_35316__$1;
(statearr_35323_35406[(2)] = inst_35227);

(statearr_35323_35406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (27))){
var state_35316__$1 = state_35316;
var statearr_35324_35407 = state_35316__$1;
(statearr_35324_35407[(2)] = null);

(statearr_35324_35407[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (1))){
var inst_35168 = (state_35316[(13)]);
var inst_35165 = before_jsload.call(null,files);
var inst_35166 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35167 = (function (){return ((function (inst_35168,inst_35165,inst_35166,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35156_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35156_SHARP_);
});
;})(inst_35168,inst_35165,inst_35166,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35168__$1 = cljs.core.filter.call(null,inst_35167,files);
var inst_35169 = cljs.core.not_empty.call(null,inst_35168__$1);
var state_35316__$1 = (function (){var statearr_35325 = state_35316;
(statearr_35325[(13)] = inst_35168__$1);

(statearr_35325[(14)] = inst_35166);

(statearr_35325[(15)] = inst_35165);

return statearr_35325;
})();
if(cljs.core.truth_(inst_35169)){
var statearr_35326_35408 = state_35316__$1;
(statearr_35326_35408[(1)] = (2));

} else {
var statearr_35327_35409 = state_35316__$1;
(statearr_35327_35409[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (24))){
var state_35316__$1 = state_35316;
var statearr_35328_35410 = state_35316__$1;
(statearr_35328_35410[(2)] = null);

(statearr_35328_35410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (39))){
var inst_35269 = (state_35316[(16)]);
var state_35316__$1 = state_35316;
var statearr_35329_35411 = state_35316__$1;
(statearr_35329_35411[(2)] = inst_35269);

(statearr_35329_35411[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (46))){
var inst_35311 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35330_35412 = state_35316__$1;
(statearr_35330_35412[(2)] = inst_35311);

(statearr_35330_35412[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (4))){
var inst_35213 = (state_35316[(2)]);
var inst_35214 = cljs.core.List.EMPTY;
var inst_35215 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35214);
var inst_35216 = (function (){return ((function (inst_35213,inst_35214,inst_35215,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35157_SHARP_){
var and__7656__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35157_SHARP_);
if(cljs.core.truth_(and__7656__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35157_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35157_SHARP_)));
} else {
return and__7656__auto__;
}
});
;})(inst_35213,inst_35214,inst_35215,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35217 = cljs.core.filter.call(null,inst_35216,files);
var inst_35218 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35219 = cljs.core.concat.call(null,inst_35217,inst_35218);
var state_35316__$1 = (function (){var statearr_35331 = state_35316;
(statearr_35331[(17)] = inst_35215);

(statearr_35331[(12)] = inst_35219);

(statearr_35331[(18)] = inst_35213);

return statearr_35331;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35332_35413 = state_35316__$1;
(statearr_35332_35413[(1)] = (16));

} else {
var statearr_35333_35414 = state_35316__$1;
(statearr_35333_35414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (15))){
var inst_35203 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35334_35415 = state_35316__$1;
(statearr_35334_35415[(2)] = inst_35203);

(statearr_35334_35415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (21))){
var inst_35229 = (state_35316[(19)]);
var inst_35229__$1 = (state_35316[(2)]);
var inst_35230 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35229__$1);
var state_35316__$1 = (function (){var statearr_35335 = state_35316;
(statearr_35335[(19)] = inst_35229__$1);

return statearr_35335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35316__$1,(22),inst_35230);
} else {
if((state_val_35317 === (31))){
var inst_35314 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35316__$1,inst_35314);
} else {
if((state_val_35317 === (32))){
var inst_35269 = (state_35316[(16)]);
var inst_35274 = inst_35269.cljs$lang$protocol_mask$partition0$;
var inst_35275 = (inst_35274 & (64));
var inst_35276 = inst_35269.cljs$core$ISeq$;
var inst_35277 = (cljs.core.PROTOCOL_SENTINEL === inst_35276);
var inst_35278 = (inst_35275) || (inst_35277);
var state_35316__$1 = state_35316;
if(cljs.core.truth_(inst_35278)){
var statearr_35336_35416 = state_35316__$1;
(statearr_35336_35416[(1)] = (35));

} else {
var statearr_35337_35417 = state_35316__$1;
(statearr_35337_35417[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (40))){
var inst_35291 = (state_35316[(20)]);
var inst_35290 = (state_35316[(2)]);
var inst_35291__$1 = cljs.core.get.call(null,inst_35290,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35292 = cljs.core.get.call(null,inst_35290,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35293 = cljs.core.not_empty.call(null,inst_35291__$1);
var state_35316__$1 = (function (){var statearr_35338 = state_35316;
(statearr_35338[(21)] = inst_35292);

(statearr_35338[(20)] = inst_35291__$1);

return statearr_35338;
})();
if(cljs.core.truth_(inst_35293)){
var statearr_35339_35418 = state_35316__$1;
(statearr_35339_35418[(1)] = (41));

} else {
var statearr_35340_35419 = state_35316__$1;
(statearr_35340_35419[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (33))){
var state_35316__$1 = state_35316;
var statearr_35341_35420 = state_35316__$1;
(statearr_35341_35420[(2)] = false);

(statearr_35341_35420[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (13))){
var inst_35189 = (state_35316[(22)]);
var inst_35193 = cljs.core.chunk_first.call(null,inst_35189);
var inst_35194 = cljs.core.chunk_rest.call(null,inst_35189);
var inst_35195 = cljs.core.count.call(null,inst_35193);
var inst_35176 = inst_35194;
var inst_35177 = inst_35193;
var inst_35178 = inst_35195;
var inst_35179 = (0);
var state_35316__$1 = (function (){var statearr_35342 = state_35316;
(statearr_35342[(7)] = inst_35177);

(statearr_35342[(8)] = inst_35179);

(statearr_35342[(9)] = inst_35178);

(statearr_35342[(10)] = inst_35176);

return statearr_35342;
})();
var statearr_35343_35421 = state_35316__$1;
(statearr_35343_35421[(2)] = null);

(statearr_35343_35421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (22))){
var inst_35232 = (state_35316[(23)]);
var inst_35237 = (state_35316[(24)]);
var inst_35233 = (state_35316[(25)]);
var inst_35229 = (state_35316[(19)]);
var inst_35232__$1 = (state_35316[(2)]);
var inst_35233__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35232__$1);
var inst_35234 = (function (){var all_files = inst_35229;
var res_SINGLEQUOTE_ = inst_35232__$1;
var res = inst_35233__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35232,inst_35237,inst_35233,inst_35229,inst_35232__$1,inst_35233__$1,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35158_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35158_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35232,inst_35237,inst_35233,inst_35229,inst_35232__$1,inst_35233__$1,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35235 = cljs.core.filter.call(null,inst_35234,inst_35232__$1);
var inst_35236 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35237__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35236);
var inst_35238 = cljs.core.not_empty.call(null,inst_35237__$1);
var state_35316__$1 = (function (){var statearr_35344 = state_35316;
(statearr_35344[(23)] = inst_35232__$1);

(statearr_35344[(26)] = inst_35235);

(statearr_35344[(24)] = inst_35237__$1);

(statearr_35344[(25)] = inst_35233__$1);

return statearr_35344;
})();
if(cljs.core.truth_(inst_35238)){
var statearr_35345_35422 = state_35316__$1;
(statearr_35345_35422[(1)] = (23));

} else {
var statearr_35346_35423 = state_35316__$1;
(statearr_35346_35423[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (36))){
var state_35316__$1 = state_35316;
var statearr_35347_35424 = state_35316__$1;
(statearr_35347_35424[(2)] = false);

(statearr_35347_35424[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (41))){
var inst_35291 = (state_35316[(20)]);
var inst_35295 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35296 = cljs.core.map.call(null,inst_35295,inst_35291);
var inst_35297 = cljs.core.pr_str.call(null,inst_35296);
var inst_35298 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35297)].join('');
var inst_35299 = figwheel.client.utils.log.call(null,inst_35298);
var state_35316__$1 = state_35316;
var statearr_35348_35425 = state_35316__$1;
(statearr_35348_35425[(2)] = inst_35299);

(statearr_35348_35425[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (43))){
var inst_35292 = (state_35316[(21)]);
var inst_35302 = (state_35316[(2)]);
var inst_35303 = cljs.core.not_empty.call(null,inst_35292);
var state_35316__$1 = (function (){var statearr_35349 = state_35316;
(statearr_35349[(27)] = inst_35302);

return statearr_35349;
})();
if(cljs.core.truth_(inst_35303)){
var statearr_35350_35426 = state_35316__$1;
(statearr_35350_35426[(1)] = (44));

} else {
var statearr_35351_35427 = state_35316__$1;
(statearr_35351_35427[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (29))){
var inst_35232 = (state_35316[(23)]);
var inst_35235 = (state_35316[(26)]);
var inst_35237 = (state_35316[(24)]);
var inst_35233 = (state_35316[(25)]);
var inst_35269 = (state_35316[(16)]);
var inst_35229 = (state_35316[(19)]);
var inst_35265 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35268 = (function (){var all_files = inst_35229;
var res_SINGLEQUOTE_ = inst_35232;
var res = inst_35233;
var files_not_loaded = inst_35235;
var dependencies_that_loaded = inst_35237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35232,inst_35235,inst_35237,inst_35233,inst_35269,inst_35229,inst_35265,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35267){
var map__35352 = p__35267;
var map__35352__$1 = ((((!((map__35352 == null)))?((((map__35352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35352):map__35352);
var namespace = cljs.core.get.call(null,map__35352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35232,inst_35235,inst_35237,inst_35233,inst_35269,inst_35229,inst_35265,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35269__$1 = cljs.core.group_by.call(null,inst_35268,inst_35235);
var inst_35271 = (inst_35269__$1 == null);
var inst_35272 = cljs.core.not.call(null,inst_35271);
var state_35316__$1 = (function (){var statearr_35354 = state_35316;
(statearr_35354[(28)] = inst_35265);

(statearr_35354[(16)] = inst_35269__$1);

return statearr_35354;
})();
if(inst_35272){
var statearr_35355_35428 = state_35316__$1;
(statearr_35355_35428[(1)] = (32));

} else {
var statearr_35356_35429 = state_35316__$1;
(statearr_35356_35429[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (44))){
var inst_35292 = (state_35316[(21)]);
var inst_35305 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35292);
var inst_35306 = cljs.core.pr_str.call(null,inst_35305);
var inst_35307 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35306)].join('');
var inst_35308 = figwheel.client.utils.log.call(null,inst_35307);
var state_35316__$1 = state_35316;
var statearr_35357_35430 = state_35316__$1;
(statearr_35357_35430[(2)] = inst_35308);

(statearr_35357_35430[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (6))){
var inst_35210 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35358_35431 = state_35316__$1;
(statearr_35358_35431[(2)] = inst_35210);

(statearr_35358_35431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (28))){
var inst_35235 = (state_35316[(26)]);
var inst_35262 = (state_35316[(2)]);
var inst_35263 = cljs.core.not_empty.call(null,inst_35235);
var state_35316__$1 = (function (){var statearr_35359 = state_35316;
(statearr_35359[(29)] = inst_35262);

return statearr_35359;
})();
if(cljs.core.truth_(inst_35263)){
var statearr_35360_35432 = state_35316__$1;
(statearr_35360_35432[(1)] = (29));

} else {
var statearr_35361_35433 = state_35316__$1;
(statearr_35361_35433[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (25))){
var inst_35233 = (state_35316[(25)]);
var inst_35249 = (state_35316[(2)]);
var inst_35250 = cljs.core.not_empty.call(null,inst_35233);
var state_35316__$1 = (function (){var statearr_35362 = state_35316;
(statearr_35362[(30)] = inst_35249);

return statearr_35362;
})();
if(cljs.core.truth_(inst_35250)){
var statearr_35363_35434 = state_35316__$1;
(statearr_35363_35434[(1)] = (26));

} else {
var statearr_35364_35435 = state_35316__$1;
(statearr_35364_35435[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (34))){
var inst_35285 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
if(cljs.core.truth_(inst_35285)){
var statearr_35365_35436 = state_35316__$1;
(statearr_35365_35436[(1)] = (38));

} else {
var statearr_35366_35437 = state_35316__$1;
(statearr_35366_35437[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (17))){
var state_35316__$1 = state_35316;
var statearr_35367_35438 = state_35316__$1;
(statearr_35367_35438[(2)] = recompile_dependents);

(statearr_35367_35438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (3))){
var state_35316__$1 = state_35316;
var statearr_35368_35439 = state_35316__$1;
(statearr_35368_35439[(2)] = null);

(statearr_35368_35439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (12))){
var inst_35206 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35369_35440 = state_35316__$1;
(statearr_35369_35440[(2)] = inst_35206);

(statearr_35369_35440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (2))){
var inst_35168 = (state_35316[(13)]);
var inst_35175 = cljs.core.seq.call(null,inst_35168);
var inst_35176 = inst_35175;
var inst_35177 = null;
var inst_35178 = (0);
var inst_35179 = (0);
var state_35316__$1 = (function (){var statearr_35370 = state_35316;
(statearr_35370[(7)] = inst_35177);

(statearr_35370[(8)] = inst_35179);

(statearr_35370[(9)] = inst_35178);

(statearr_35370[(10)] = inst_35176);

return statearr_35370;
})();
var statearr_35371_35441 = state_35316__$1;
(statearr_35371_35441[(2)] = null);

(statearr_35371_35441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (23))){
var inst_35232 = (state_35316[(23)]);
var inst_35235 = (state_35316[(26)]);
var inst_35237 = (state_35316[(24)]);
var inst_35233 = (state_35316[(25)]);
var inst_35229 = (state_35316[(19)]);
var inst_35240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35242 = (function (){var all_files = inst_35229;
var res_SINGLEQUOTE_ = inst_35232;
var res = inst_35233;
var files_not_loaded = inst_35235;
var dependencies_that_loaded = inst_35237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35232,inst_35235,inst_35237,inst_35233,inst_35229,inst_35240,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35241){
var map__35372 = p__35241;
var map__35372__$1 = ((((!((map__35372 == null)))?((((map__35372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35372):map__35372);
var request_url = cljs.core.get.call(null,map__35372__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35232,inst_35235,inst_35237,inst_35233,inst_35229,inst_35240,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35243 = cljs.core.reverse.call(null,inst_35237);
var inst_35244 = cljs.core.map.call(null,inst_35242,inst_35243);
var inst_35245 = cljs.core.pr_str.call(null,inst_35244);
var inst_35246 = figwheel.client.utils.log.call(null,inst_35245);
var state_35316__$1 = (function (){var statearr_35374 = state_35316;
(statearr_35374[(31)] = inst_35240);

return statearr_35374;
})();
var statearr_35375_35442 = state_35316__$1;
(statearr_35375_35442[(2)] = inst_35246);

(statearr_35375_35442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (35))){
var state_35316__$1 = state_35316;
var statearr_35376_35443 = state_35316__$1;
(statearr_35376_35443[(2)] = true);

(statearr_35376_35443[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (19))){
var inst_35219 = (state_35316[(12)]);
var inst_35225 = figwheel.client.file_reloading.expand_files.call(null,inst_35219);
var state_35316__$1 = state_35316;
var statearr_35377_35444 = state_35316__$1;
(statearr_35377_35444[(2)] = inst_35225);

(statearr_35377_35444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (11))){
var state_35316__$1 = state_35316;
var statearr_35378_35445 = state_35316__$1;
(statearr_35378_35445[(2)] = null);

(statearr_35378_35445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (9))){
var inst_35208 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35379_35446 = state_35316__$1;
(statearr_35379_35446[(2)] = inst_35208);

(statearr_35379_35446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (5))){
var inst_35179 = (state_35316[(8)]);
var inst_35178 = (state_35316[(9)]);
var inst_35181 = (inst_35179 < inst_35178);
var inst_35182 = inst_35181;
var state_35316__$1 = state_35316;
if(cljs.core.truth_(inst_35182)){
var statearr_35380_35447 = state_35316__$1;
(statearr_35380_35447[(1)] = (7));

} else {
var statearr_35381_35448 = state_35316__$1;
(statearr_35381_35448[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (14))){
var inst_35189 = (state_35316[(22)]);
var inst_35198 = cljs.core.first.call(null,inst_35189);
var inst_35199 = figwheel.client.file_reloading.eval_body.call(null,inst_35198,opts);
var inst_35200 = cljs.core.next.call(null,inst_35189);
var inst_35176 = inst_35200;
var inst_35177 = null;
var inst_35178 = (0);
var inst_35179 = (0);
var state_35316__$1 = (function (){var statearr_35382 = state_35316;
(statearr_35382[(7)] = inst_35177);

(statearr_35382[(8)] = inst_35179);

(statearr_35382[(32)] = inst_35199);

(statearr_35382[(9)] = inst_35178);

(statearr_35382[(10)] = inst_35176);

return statearr_35382;
})();
var statearr_35383_35449 = state_35316__$1;
(statearr_35383_35449[(2)] = null);

(statearr_35383_35449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (45))){
var state_35316__$1 = state_35316;
var statearr_35384_35450 = state_35316__$1;
(statearr_35384_35450[(2)] = null);

(statearr_35384_35450[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (26))){
var inst_35232 = (state_35316[(23)]);
var inst_35235 = (state_35316[(26)]);
var inst_35237 = (state_35316[(24)]);
var inst_35233 = (state_35316[(25)]);
var inst_35229 = (state_35316[(19)]);
var inst_35252 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35254 = (function (){var all_files = inst_35229;
var res_SINGLEQUOTE_ = inst_35232;
var res = inst_35233;
var files_not_loaded = inst_35235;
var dependencies_that_loaded = inst_35237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35232,inst_35235,inst_35237,inst_35233,inst_35229,inst_35252,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35253){
var map__35385 = p__35253;
var map__35385__$1 = ((((!((map__35385 == null)))?((((map__35385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35385):map__35385);
var namespace = cljs.core.get.call(null,map__35385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35385__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35232,inst_35235,inst_35237,inst_35233,inst_35229,inst_35252,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35255 = cljs.core.map.call(null,inst_35254,inst_35233);
var inst_35256 = cljs.core.pr_str.call(null,inst_35255);
var inst_35257 = figwheel.client.utils.log.call(null,inst_35256);
var inst_35258 = (function (){var all_files = inst_35229;
var res_SINGLEQUOTE_ = inst_35232;
var res = inst_35233;
var files_not_loaded = inst_35235;
var dependencies_that_loaded = inst_35237;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35232,inst_35235,inst_35237,inst_35233,inst_35229,inst_35252,inst_35254,inst_35255,inst_35256,inst_35257,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35232,inst_35235,inst_35237,inst_35233,inst_35229,inst_35252,inst_35254,inst_35255,inst_35256,inst_35257,state_val_35317,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35259 = setTimeout(inst_35258,(10));
var state_35316__$1 = (function (){var statearr_35387 = state_35316;
(statearr_35387[(33)] = inst_35257);

(statearr_35387[(34)] = inst_35252);

return statearr_35387;
})();
var statearr_35388_35451 = state_35316__$1;
(statearr_35388_35451[(2)] = inst_35259);

(statearr_35388_35451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (16))){
var state_35316__$1 = state_35316;
var statearr_35389_35452 = state_35316__$1;
(statearr_35389_35452[(2)] = reload_dependents);

(statearr_35389_35452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (38))){
var inst_35269 = (state_35316[(16)]);
var inst_35287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35269);
var state_35316__$1 = state_35316;
var statearr_35390_35453 = state_35316__$1;
(statearr_35390_35453[(2)] = inst_35287);

(statearr_35390_35453[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (30))){
var state_35316__$1 = state_35316;
var statearr_35391_35454 = state_35316__$1;
(statearr_35391_35454[(2)] = null);

(statearr_35391_35454[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (10))){
var inst_35189 = (state_35316[(22)]);
var inst_35191 = cljs.core.chunked_seq_QMARK_.call(null,inst_35189);
var state_35316__$1 = state_35316;
if(inst_35191){
var statearr_35392_35455 = state_35316__$1;
(statearr_35392_35455[(1)] = (13));

} else {
var statearr_35393_35456 = state_35316__$1;
(statearr_35393_35456[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (18))){
var inst_35223 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
if(cljs.core.truth_(inst_35223)){
var statearr_35394_35457 = state_35316__$1;
(statearr_35394_35457[(1)] = (19));

} else {
var statearr_35395_35458 = state_35316__$1;
(statearr_35395_35458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (42))){
var state_35316__$1 = state_35316;
var statearr_35396_35459 = state_35316__$1;
(statearr_35396_35459[(2)] = null);

(statearr_35396_35459[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (37))){
var inst_35282 = (state_35316[(2)]);
var state_35316__$1 = state_35316;
var statearr_35397_35460 = state_35316__$1;
(statearr_35397_35460[(2)] = inst_35282);

(statearr_35397_35460[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35317 === (8))){
var inst_35189 = (state_35316[(22)]);
var inst_35176 = (state_35316[(10)]);
var inst_35189__$1 = cljs.core.seq.call(null,inst_35176);
var state_35316__$1 = (function (){var statearr_35398 = state_35316;
(statearr_35398[(22)] = inst_35189__$1);

return statearr_35398;
})();
if(inst_35189__$1){
var statearr_35399_35461 = state_35316__$1;
(statearr_35399_35461[(1)] = (10));

} else {
var statearr_35400_35462 = state_35316__$1;
(statearr_35400_35462[(1)] = (11));

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
});})(c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31459__auto__,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto____0 = (function (){
var statearr_35401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35401[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto__);

(statearr_35401[(1)] = (1));

return statearr_35401;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto____1 = (function (state_35316){
while(true){
var ret_value__31461__auto__ = (function (){try{while(true){
var result__31462__auto__ = switch__31459__auto__.call(null,state_35316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31462__auto__;
}
break;
}
}catch (e35402){if((e35402 instanceof Object)){
var ex__31463__auto__ = e35402;
var statearr_35403_35463 = state_35316;
(statearr_35403_35463[(5)] = ex__31463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35464 = state_35316;
state_35316 = G__35464;
continue;
} else {
return ret_value__31461__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto__ = function(state_35316){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto____1.call(this,state_35316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31460__auto__;
})()
;})(switch__31459__auto__,c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31549__auto__ = (function (){var statearr_35404 = f__31548__auto__.call(null);
(statearr_35404[(6)] = c__31547__auto__);

return statearr_35404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(c__31547__auto__,map__35161,map__35161__$1,opts,before_jsload,on_jsload,reload_dependents,map__35162,map__35162__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31547__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35467,link){
var map__35468 = p__35467;
var map__35468__$1 = ((((!((map__35468 == null)))?((((map__35468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35468):map__35468);
var file = cljs.core.get.call(null,map__35468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35468,map__35468__$1,file){
return (function (p1__35465_SHARP_,p2__35466_SHARP_){
if(cljs.core._EQ_.call(null,p1__35465_SHARP_,p2__35466_SHARP_)){
return p1__35465_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35468,map__35468__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35471){
var map__35472 = p__35471;
var map__35472__$1 = ((((!((map__35472 == null)))?((((map__35472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35472):map__35472);
var match_length = cljs.core.get.call(null,map__35472__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35472__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35470_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35470_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35474_SHARP_,p2__35475_SHARP_){
return cljs.core.assoc.call(null,p1__35474_SHARP_,cljs.core.get.call(null,p2__35475_SHARP_,key),p2__35475_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35476 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35476);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35476);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35477,p__35478){
var map__35479 = p__35477;
var map__35479__$1 = ((((!((map__35479 == null)))?((((map__35479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35479):map__35479);
var on_cssload = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35480 = p__35478;
var map__35480__$1 = ((((!((map__35480 == null)))?((((map__35480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35480):map__35480);
var files_msg = map__35480__$1;
var files = cljs.core.get.call(null,map__35480__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1507562215153
