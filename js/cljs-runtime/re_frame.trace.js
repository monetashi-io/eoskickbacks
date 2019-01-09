goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__17242){
var map__17243 = p__17242;
var map__17243__$1 = (((((!((map__17243 == null))))?(((((map__17243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17243):map__17243);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17243__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17243__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17243__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17243__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__17245_17270 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17246_17271 = null;
var count__17247_17272 = (0);
var i__17248_17273 = (0);
while(true){
if((i__17248_17273 < count__17247_17272)){
var vec__17249_17274 = chunk__17246_17271.cljs$core$IIndexed$_nth$arity$2(null,i__17248_17273);
var k_17275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17249_17274,(0),null);
var cb_17276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17249_17274,(1),null);
try{var G__17253_17280 = cljs.core.deref(re_frame.trace.traces);
(cb_17276.cljs$core$IFn$_invoke$arity$1 ? cb_17276.cljs$core$IFn$_invoke$arity$1(G__17253_17280) : cb_17276.call(null,G__17253_17280));
}catch (e17252){var e_17283 = e17252;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_17275,"while storing",cljs.core.deref(re_frame.trace.traces),e_17283], 0));
}

var G__17285 = seq__17245_17270;
var G__17286 = chunk__17246_17271;
var G__17287 = count__17247_17272;
var G__17288 = (i__17248_17273 + (1));
seq__17245_17270 = G__17285;
chunk__17246_17271 = G__17286;
count__17247_17272 = G__17287;
i__17248_17273 = G__17288;
continue;
} else {
var temp__5457__auto___17289 = cljs.core.seq(seq__17245_17270);
if(temp__5457__auto___17289){
var seq__17245_17290__$1 = temp__5457__auto___17289;
if(cljs.core.chunked_seq_QMARK_(seq__17245_17290__$1)){
var c__4461__auto___17291 = cljs.core.chunk_first(seq__17245_17290__$1);
var G__17292 = cljs.core.chunk_rest(seq__17245_17290__$1);
var G__17293 = c__4461__auto___17291;
var G__17294 = cljs.core.count(c__4461__auto___17291);
var G__17295 = (0);
seq__17245_17270 = G__17292;
chunk__17246_17271 = G__17293;
count__17247_17272 = G__17294;
i__17248_17273 = G__17295;
continue;
} else {
var vec__17254_17296 = cljs.core.first(seq__17245_17290__$1);
var k_17297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17254_17296,(0),null);
var cb_17298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17254_17296,(1),null);
try{var G__17258_17299 = cljs.core.deref(re_frame.trace.traces);
(cb_17298.cljs$core$IFn$_invoke$arity$1 ? cb_17298.cljs$core$IFn$_invoke$arity$1(G__17258_17299) : cb_17298.call(null,G__17258_17299));
}catch (e17257){var e_17300 = e17257;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_17297,"while storing",cljs.core.deref(re_frame.trace.traces),e_17300], 0));
}

var G__17301 = cljs.core.next(seq__17245_17290__$1);
var G__17302 = null;
var G__17303 = (0);
var G__17304 = (0);
seq__17245_17270 = G__17301;
chunk__17246_17271 = G__17302;
count__17247_17272 = G__17303;
i__17248_17273 = G__17304;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
