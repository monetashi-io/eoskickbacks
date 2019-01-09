goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___20692 = arguments.length;
var i__4642__auto___20693 = (0);
while(true){
if((i__4642__auto___20693 < len__4641__auto___20692)){
args__4647__auto__.push((arguments[i__4642__auto___20693]));

var G__20694 = (i__4642__auto___20693 + (1));
i__4642__auto___20693 = G__20694;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20567){
var G__20568 = cljs.core.first(seq20567);
var seq20567__$1 = cljs.core.next(seq20567);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20568,seq20567__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__20578){
var map__20579 = p__20578;
var map__20579__$1 = (((((!((map__20579 == null))))?(((((map__20579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20579):map__20579);
var src = map__20579__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20579__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20579__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4047__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20583 = cljs.core.seq(sources);
var chunk__20584 = null;
var count__20585 = (0);
var i__20586 = (0);
while(true){
if((i__20586 < count__20585)){
var map__20587 = chunk__20584.cljs$core$IIndexed$_nth$arity$2(null,i__20586);
var map__20587__$1 = (((((!((map__20587 == null))))?(((((map__20587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20587):map__20587);
var src = map__20587__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20695 = seq__20583;
var G__20696 = chunk__20584;
var G__20697 = count__20585;
var G__20698 = (i__20586 + (1));
seq__20583 = G__20695;
chunk__20584 = G__20696;
count__20585 = G__20697;
i__20586 = G__20698;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20583);
if(temp__5457__auto__){
var seq__20583__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20583__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20583__$1);
var G__20699 = cljs.core.chunk_rest(seq__20583__$1);
var G__20700 = c__4461__auto__;
var G__20701 = cljs.core.count(c__4461__auto__);
var G__20702 = (0);
seq__20583 = G__20699;
chunk__20584 = G__20700;
count__20585 = G__20701;
i__20586 = G__20702;
continue;
} else {
var map__20589 = cljs.core.first(seq__20583__$1);
var map__20589__$1 = (((((!((map__20589 == null))))?(((((map__20589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20589):map__20589);
var src = map__20589__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20589__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20589__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20589__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20589__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20703 = cljs.core.next(seq__20583__$1);
var G__20704 = null;
var G__20705 = (0);
var G__20706 = (0);
seq__20583 = G__20703;
chunk__20584 = G__20704;
count__20585 = G__20705;
i__20586 = G__20706;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20593 = cljs.core.seq(js_requires);
var chunk__20594 = null;
var count__20595 = (0);
var i__20596 = (0);
while(true){
if((i__20596 < count__20595)){
var js_ns = chunk__20594.cljs$core$IIndexed$_nth$arity$2(null,i__20596);
var require_str_20707 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20707);


var G__20708 = seq__20593;
var G__20709 = chunk__20594;
var G__20710 = count__20595;
var G__20711 = (i__20596 + (1));
seq__20593 = G__20708;
chunk__20594 = G__20709;
count__20595 = G__20710;
i__20596 = G__20711;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20593);
if(temp__5457__auto__){
var seq__20593__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20593__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20593__$1);
var G__20712 = cljs.core.chunk_rest(seq__20593__$1);
var G__20713 = c__4461__auto__;
var G__20714 = cljs.core.count(c__4461__auto__);
var G__20715 = (0);
seq__20593 = G__20712;
chunk__20594 = G__20713;
count__20595 = G__20714;
i__20596 = G__20715;
continue;
} else {
var js_ns = cljs.core.first(seq__20593__$1);
var require_str_20716 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20716);


var G__20717 = cljs.core.next(seq__20593__$1);
var G__20718 = null;
var G__20719 = (0);
var G__20720 = (0);
seq__20593 = G__20717;
chunk__20594 = G__20718;
count__20595 = G__20719;
i__20596 = G__20720;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__20597 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__20597) : callback.call(null,G__20597));
} else {
var G__20598 = shadow.cljs.devtools.client.env.files_url();
var G__20599 = ((function (G__20598){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__20598))
;
var G__20600 = "POST";
var G__20601 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__20603 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20598,G__20599,G__20600,G__20601,G__20603);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__20606){
var map__20607 = p__20606;
var map__20607__$1 = (((((!((map__20607 == null))))?(((((map__20607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20607):map__20607);
var msg = map__20607__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__20609 = info;
var map__20609__$1 = (((((!((map__20609 == null))))?(((((map__20609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20609):map__20609);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4434__auto__ = ((function (map__20609,map__20609__$1,sources,compiled,map__20607,map__20607__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20611(s__20612){
return (new cljs.core.LazySeq(null,((function (map__20609,map__20609__$1,sources,compiled,map__20607,map__20607__$1,msg,info,reload_info){
return (function (){
var s__20612__$1 = s__20612;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20612__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__20617 = cljs.core.first(xs__6012__auto__);
var map__20617__$1 = (((((!((map__20617 == null))))?(((((map__20617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20617):map__20617);
var src = map__20617__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20617__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4430__auto__ = ((function (s__20612__$1,map__20617,map__20617__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20609,map__20609__$1,sources,compiled,map__20607,map__20607__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20611_$_iter__20613(s__20614){
return (new cljs.core.LazySeq(null,((function (s__20612__$1,map__20617,map__20617__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20609,map__20609__$1,sources,compiled,map__20607,map__20607__$1,msg,info,reload_info){
return (function (){
var s__20614__$1 = s__20614;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__20614__$1);
if(temp__5457__auto____$1){
var s__20614__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20614__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__20614__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__20616 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__20615 = (0);
while(true){
if((i__20615 < size__4433__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__20615);
cljs.core.chunk_append(b__20616,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20721 = (i__20615 + (1));
i__20615 = G__20721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20616),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20611_$_iter__20613(cljs.core.chunk_rest(s__20614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20616),null);
}
} else {
var warning = cljs.core.first(s__20614__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20611_$_iter__20613(cljs.core.rest(s__20614__$2)));
}
} else {
return null;
}
break;
}
});})(s__20612__$1,map__20617,map__20617__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20609,map__20609__$1,sources,compiled,map__20607,map__20607__$1,msg,info,reload_info))
,null,null));
});})(s__20612__$1,map__20617,map__20617__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20609,map__20609__$1,sources,compiled,map__20607,map__20607__$1,msg,info,reload_info))
;
var fs__4431__auto__ = cljs.core.seq(iterys__4430__auto__(warnings));
if(fs__4431__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4431__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20611(cljs.core.rest(s__20612__$1)));
} else {
var G__20722 = cljs.core.rest(s__20612__$1);
s__20612__$1 = G__20722;
continue;
}
} else {
var G__20723 = cljs.core.rest(s__20612__$1);
s__20612__$1 = G__20723;
continue;
}
} else {
return null;
}
break;
}
});})(map__20609,map__20609__$1,sources,compiled,map__20607,map__20607__$1,msg,info,reload_info))
,null,null));
});})(map__20609,map__20609__$1,sources,compiled,map__20607,map__20607__$1,msg,info,reload_info))
;
return iter__4434__auto__(sources);
})()));
var seq__20619_20724 = cljs.core.seq(warnings);
var chunk__20620_20725 = null;
var count__20621_20726 = (0);
var i__20622_20727 = (0);
while(true){
if((i__20622_20727 < count__20621_20726)){
var map__20623_20728 = chunk__20620_20725.cljs$core$IIndexed$_nth$arity$2(null,i__20622_20727);
var map__20623_20729__$1 = (((((!((map__20623_20728 == null))))?(((((map__20623_20728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20623_20728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20623_20728):map__20623_20728);
var w_20730 = map__20623_20729__$1;
var msg_20731__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623_20729__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623_20729__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623_20729__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20623_20729__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20734)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20732),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20733),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20731__$1)].join(''));


var G__20735 = seq__20619_20724;
var G__20736 = chunk__20620_20725;
var G__20737 = count__20621_20726;
var G__20738 = (i__20622_20727 + (1));
seq__20619_20724 = G__20735;
chunk__20620_20725 = G__20736;
count__20621_20726 = G__20737;
i__20622_20727 = G__20738;
continue;
} else {
var temp__5457__auto___20739 = cljs.core.seq(seq__20619_20724);
if(temp__5457__auto___20739){
var seq__20619_20740__$1 = temp__5457__auto___20739;
if(cljs.core.chunked_seq_QMARK_(seq__20619_20740__$1)){
var c__4461__auto___20741 = cljs.core.chunk_first(seq__20619_20740__$1);
var G__20742 = cljs.core.chunk_rest(seq__20619_20740__$1);
var G__20743 = c__4461__auto___20741;
var G__20744 = cljs.core.count(c__4461__auto___20741);
var G__20745 = (0);
seq__20619_20724 = G__20742;
chunk__20620_20725 = G__20743;
count__20621_20726 = G__20744;
i__20622_20727 = G__20745;
continue;
} else {
var map__20625_20746 = cljs.core.first(seq__20619_20740__$1);
var map__20625_20747__$1 = (((((!((map__20625_20746 == null))))?(((((map__20625_20746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20625_20746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20625_20746):map__20625_20746);
var w_20748 = map__20625_20747__$1;
var msg_20749__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625_20747__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625_20747__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625_20747__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20625_20747__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20752)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20750),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20751),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20749__$1)].join(''));


var G__20753 = cljs.core.next(seq__20619_20740__$1);
var G__20754 = null;
var G__20755 = (0);
var G__20756 = (0);
seq__20619_20724 = G__20753;
chunk__20620_20725 = G__20754;
count__20621_20726 = G__20755;
i__20622_20727 = G__20756;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20609,map__20609__$1,sources,compiled,warnings,map__20607,map__20607__$1,msg,info,reload_info){
return (function (p__20627){
var map__20628 = p__20627;
var map__20628__$1 = (((((!((map__20628 == null))))?(((((map__20628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20628):map__20628);
var src = map__20628__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20628__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20628__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__20609,map__20609__$1,sources,compiled,warnings,map__20607,map__20607__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20609,map__20609__$1,sources,compiled,warnings,map__20607,map__20607__$1,msg,info,reload_info){
return (function (p__20630){
var map__20631 = p__20630;
var map__20631__$1 = (((((!((map__20631 == null))))?(((((map__20631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20631):map__20631);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20631__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__20609,map__20609__$1,sources,compiled,warnings,map__20607,map__20607__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20609,map__20609__$1,sources,compiled,warnings,map__20607,map__20607__$1,msg,info,reload_info){
return (function (p__20633){
var map__20634 = p__20633;
var map__20634__$1 = (((((!((map__20634 == null))))?(((((map__20634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20634):map__20634);
var rc = map__20634__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20634__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__20609,map__20609__$1,sources,compiled,warnings,map__20607,map__20607__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__20609,map__20609__$1,sources,compiled,warnings,map__20607,map__20607__$1,msg,info,reload_info){
return (function (p1__20605_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20605_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__20609,map__20609__$1,sources,compiled,warnings,map__20607,map__20607__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__4036__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__4036__auto__){
return rel_new;
} else {
return and__4036__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4036__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4036__auto____$1){
return new$;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__20638){
var map__20639 = p__20638;
var map__20639__$1 = (((((!((map__20639 == null))))?(((((map__20639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20639):map__20639);
var msg = map__20639__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20639__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__20641 = cljs.core.seq(updates);
var chunk__20643 = null;
var count__20644 = (0);
var i__20645 = (0);
while(true){
if((i__20645 < count__20644)){
var path = chunk__20643.cljs$core$IIndexed$_nth$arity$2(null,i__20645);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20647_20757 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20650_20758 = null;
var count__20651_20759 = (0);
var i__20652_20760 = (0);
while(true){
if((i__20652_20760 < count__20651_20759)){
var node_20761 = chunk__20650_20758.cljs$core$IIndexed$_nth$arity$2(null,i__20652_20760);
var path_match_20762 = shadow.cljs.devtools.client.browser.match_paths(node_20761.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20762)){
var new_link_20763 = (function (){var G__20655 = node_20761.cloneNode(true);
G__20655.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20762),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20655;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20762], 0));

goog.dom.insertSiblingAfter(new_link_20763,node_20761);

goog.dom.removeNode(node_20761);


var G__20764 = seq__20647_20757;
var G__20765 = chunk__20650_20758;
var G__20766 = count__20651_20759;
var G__20767 = (i__20652_20760 + (1));
seq__20647_20757 = G__20764;
chunk__20650_20758 = G__20765;
count__20651_20759 = G__20766;
i__20652_20760 = G__20767;
continue;
} else {
var G__20768 = seq__20647_20757;
var G__20769 = chunk__20650_20758;
var G__20770 = count__20651_20759;
var G__20771 = (i__20652_20760 + (1));
seq__20647_20757 = G__20768;
chunk__20650_20758 = G__20769;
count__20651_20759 = G__20770;
i__20652_20760 = G__20771;
continue;
}
} else {
var temp__5457__auto___20772 = cljs.core.seq(seq__20647_20757);
if(temp__5457__auto___20772){
var seq__20647_20773__$1 = temp__5457__auto___20772;
if(cljs.core.chunked_seq_QMARK_(seq__20647_20773__$1)){
var c__4461__auto___20774 = cljs.core.chunk_first(seq__20647_20773__$1);
var G__20775 = cljs.core.chunk_rest(seq__20647_20773__$1);
var G__20776 = c__4461__auto___20774;
var G__20777 = cljs.core.count(c__4461__auto___20774);
var G__20778 = (0);
seq__20647_20757 = G__20775;
chunk__20650_20758 = G__20776;
count__20651_20759 = G__20777;
i__20652_20760 = G__20778;
continue;
} else {
var node_20779 = cljs.core.first(seq__20647_20773__$1);
var path_match_20780 = shadow.cljs.devtools.client.browser.match_paths(node_20779.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20780)){
var new_link_20781 = (function (){var G__20656 = node_20779.cloneNode(true);
G__20656.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20780),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20656;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20780], 0));

goog.dom.insertSiblingAfter(new_link_20781,node_20779);

goog.dom.removeNode(node_20779);


var G__20782 = cljs.core.next(seq__20647_20773__$1);
var G__20783 = null;
var G__20784 = (0);
var G__20785 = (0);
seq__20647_20757 = G__20782;
chunk__20650_20758 = G__20783;
count__20651_20759 = G__20784;
i__20652_20760 = G__20785;
continue;
} else {
var G__20786 = cljs.core.next(seq__20647_20773__$1);
var G__20787 = null;
var G__20788 = (0);
var G__20789 = (0);
seq__20647_20757 = G__20786;
chunk__20650_20758 = G__20787;
count__20651_20759 = G__20788;
i__20652_20760 = G__20789;
continue;
}
}
} else {
}
}
break;
}


var G__20790 = seq__20641;
var G__20791 = chunk__20643;
var G__20792 = count__20644;
var G__20793 = (i__20645 + (1));
seq__20641 = G__20790;
chunk__20643 = G__20791;
count__20644 = G__20792;
i__20645 = G__20793;
continue;
} else {
var G__20794 = seq__20641;
var G__20795 = chunk__20643;
var G__20796 = count__20644;
var G__20797 = (i__20645 + (1));
seq__20641 = G__20794;
chunk__20643 = G__20795;
count__20644 = G__20796;
i__20645 = G__20797;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20641);
if(temp__5457__auto__){
var seq__20641__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20641__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__20641__$1);
var G__20798 = cljs.core.chunk_rest(seq__20641__$1);
var G__20799 = c__4461__auto__;
var G__20800 = cljs.core.count(c__4461__auto__);
var G__20801 = (0);
seq__20641 = G__20798;
chunk__20643 = G__20799;
count__20644 = G__20800;
i__20645 = G__20801;
continue;
} else {
var path = cljs.core.first(seq__20641__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20657_20802 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20660_20803 = null;
var count__20661_20804 = (0);
var i__20662_20805 = (0);
while(true){
if((i__20662_20805 < count__20661_20804)){
var node_20806 = chunk__20660_20803.cljs$core$IIndexed$_nth$arity$2(null,i__20662_20805);
var path_match_20807 = shadow.cljs.devtools.client.browser.match_paths(node_20806.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20807)){
var new_link_20808 = (function (){var G__20665 = node_20806.cloneNode(true);
G__20665.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20807),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20665;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20807], 0));

goog.dom.insertSiblingAfter(new_link_20808,node_20806);

goog.dom.removeNode(node_20806);


var G__20809 = seq__20657_20802;
var G__20810 = chunk__20660_20803;
var G__20811 = count__20661_20804;
var G__20812 = (i__20662_20805 + (1));
seq__20657_20802 = G__20809;
chunk__20660_20803 = G__20810;
count__20661_20804 = G__20811;
i__20662_20805 = G__20812;
continue;
} else {
var G__20813 = seq__20657_20802;
var G__20814 = chunk__20660_20803;
var G__20815 = count__20661_20804;
var G__20816 = (i__20662_20805 + (1));
seq__20657_20802 = G__20813;
chunk__20660_20803 = G__20814;
count__20661_20804 = G__20815;
i__20662_20805 = G__20816;
continue;
}
} else {
var temp__5457__auto___20817__$1 = cljs.core.seq(seq__20657_20802);
if(temp__5457__auto___20817__$1){
var seq__20657_20818__$1 = temp__5457__auto___20817__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20657_20818__$1)){
var c__4461__auto___20819 = cljs.core.chunk_first(seq__20657_20818__$1);
var G__20820 = cljs.core.chunk_rest(seq__20657_20818__$1);
var G__20821 = c__4461__auto___20819;
var G__20822 = cljs.core.count(c__4461__auto___20819);
var G__20823 = (0);
seq__20657_20802 = G__20820;
chunk__20660_20803 = G__20821;
count__20661_20804 = G__20822;
i__20662_20805 = G__20823;
continue;
} else {
var node_20824 = cljs.core.first(seq__20657_20818__$1);
var path_match_20825 = shadow.cljs.devtools.client.browser.match_paths(node_20824.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20825)){
var new_link_20826 = (function (){var G__20666 = node_20824.cloneNode(true);
G__20666.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20825),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20666;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20825], 0));

goog.dom.insertSiblingAfter(new_link_20826,node_20824);

goog.dom.removeNode(node_20824);


var G__20827 = cljs.core.next(seq__20657_20818__$1);
var G__20828 = null;
var G__20829 = (0);
var G__20830 = (0);
seq__20657_20802 = G__20827;
chunk__20660_20803 = G__20828;
count__20661_20804 = G__20829;
i__20662_20805 = G__20830;
continue;
} else {
var G__20831 = cljs.core.next(seq__20657_20818__$1);
var G__20832 = null;
var G__20833 = (0);
var G__20834 = (0);
seq__20657_20802 = G__20831;
chunk__20660_20803 = G__20832;
count__20661_20804 = G__20833;
i__20662_20805 = G__20834;
continue;
}
}
} else {
}
}
break;
}


var G__20835 = cljs.core.next(seq__20641__$1);
var G__20836 = null;
var G__20837 = (0);
var G__20838 = (0);
seq__20641 = G__20835;
chunk__20643 = G__20836;
count__20644 = G__20837;
i__20645 = G__20838;
continue;
} else {
var G__20839 = cljs.core.next(seq__20641__$1);
var G__20840 = null;
var G__20841 = (0);
var G__20842 = (0);
seq__20641 = G__20839;
chunk__20643 = G__20840;
count__20644 = G__20841;
i__20645 = G__20842;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
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
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__20667){
var map__20668 = p__20667;
var map__20668__$1 = (((((!((map__20668 == null))))?(((((map__20668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20668):map__20668);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20668__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20668__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__20668,map__20668__$1,id,js){
return (function (){
return eval(js);
});})(map__20668,map__20668__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__20670){
var map__20671 = p__20670;
var map__20671__$1 = (((((!((map__20671 == null))))?(((((map__20671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20671):map__20671);
var msg = map__20671__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20671__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20671__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20671__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20671,map__20671__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__20673){
var map__20674 = p__20673;
var map__20674__$1 = (((((!((map__20674 == null))))?(((((map__20674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20674):map__20674);
var src = map__20674__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20674__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4036__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4036__auto__;
}
});})(map__20671,map__20671__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__20671,map__20671__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__20671,map__20671__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__20676){
var map__20677 = p__20676;
var map__20677__$1 = (((((!((map__20677 == null))))?(((((map__20677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20677):map__20677);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20677__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20677__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__20677,map__20677__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__20677,map__20677__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__20679){
var map__20680 = p__20679;
var map__20680__$1 = (((((!((map__20680 == null))))?(((((map__20680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20680):map__20680);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20680__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20680__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__20682){
var map__20683 = p__20682;
var map__20683__$1 = (((((!((map__20683 == null))))?(((((map__20683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20683):map__20683);
var msg = map__20683__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20683__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__20685 = type;
var G__20685__$1 = (((G__20685 instanceof cljs.core.Keyword))?G__20685.fqn:null);
switch (G__20685__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__20686 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__20687 = ((function (G__20686){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__20686))
;
var G__20688 = "POST";
var G__20689 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__20690 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20686,G__20687,G__20688,G__20689,G__20690);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4047__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e20691){var e = e20691;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___20844 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___20844)){
var s_20845 = temp__5457__auto___20844;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_20845.onclose = ((function (s_20845,temp__5457__auto___20844){
return (function (e){
return null;
});})(s_20845,temp__5457__auto___20844))
;

s_20845.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4036__auto__ = document;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4036__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
