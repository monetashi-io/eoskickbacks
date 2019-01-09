goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17495 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17496 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17496;

try{try{var seq__17500 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__17501 = null;
var count__17502 = (0);
var i__17503 = (0);
while(true){
if((i__17503 < count__17502)){
var vec__17504 = chunk__17501.cljs$core$IIndexed$_nth$arity$2(null,i__17503);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17504,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17504,(1),null);
var temp__5455__auto___17545 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17545)){
var effect_fn_17546 = temp__5455__auto___17545;
(effect_fn_17546.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17546.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17546.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17548 = seq__17500;
var G__17549 = chunk__17501;
var G__17550 = count__17502;
var G__17551 = (i__17503 + (1));
seq__17500 = G__17548;
chunk__17501 = G__17549;
count__17502 = G__17550;
i__17503 = G__17551;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17500);
if(temp__5457__auto__){
var seq__17500__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17500__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__17500__$1);
var G__17552 = cljs.core.chunk_rest(seq__17500__$1);
var G__17553 = c__4461__auto__;
var G__17554 = cljs.core.count(c__4461__auto__);
var G__17555 = (0);
seq__17500 = G__17552;
chunk__17501 = G__17553;
count__17502 = G__17554;
i__17503 = G__17555;
continue;
} else {
var vec__17507 = cljs.core.first(seq__17500__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17507,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17507,(1),null);
var temp__5455__auto___17556 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17556)){
var effect_fn_17557 = temp__5455__auto___17556;
(effect_fn_17557.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17557.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17557.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17560 = cljs.core.next(seq__17500__$1);
var G__17561 = null;
var G__17562 = (0);
var G__17563 = (0);
seq__17500 = G__17560;
chunk__17501 = G__17561;
count__17502 = G__17562;
i__17503 = G__17563;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__17222__auto___17564 = re_frame.interop.now();
var duration__17223__auto___17565 = (end__17222__auto___17564 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__17223__auto___17565,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__17222__auto___17564);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17495;
}} else {
var seq__17510 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__17511 = null;
var count__17512 = (0);
var i__17513 = (0);
while(true){
if((i__17513 < count__17512)){
var vec__17514 = chunk__17511.cljs$core$IIndexed$_nth$arity$2(null,i__17513);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17514,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17514,(1),null);
var temp__5455__auto___17566 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17566)){
var effect_fn_17567 = temp__5455__auto___17566;
(effect_fn_17567.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17567.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17567.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17568 = seq__17510;
var G__17569 = chunk__17511;
var G__17570 = count__17512;
var G__17571 = (i__17513 + (1));
seq__17510 = G__17568;
chunk__17511 = G__17569;
count__17512 = G__17570;
i__17513 = G__17571;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17510);
if(temp__5457__auto__){
var seq__17510__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17510__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__17510__$1);
var G__17572 = cljs.core.chunk_rest(seq__17510__$1);
var G__17573 = c__4461__auto__;
var G__17574 = cljs.core.count(c__4461__auto__);
var G__17575 = (0);
seq__17510 = G__17572;
chunk__17511 = G__17573;
count__17512 = G__17574;
i__17513 = G__17575;
continue;
} else {
var vec__17517 = cljs.core.first(seq__17510__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17517,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17517,(1),null);
var temp__5455__auto___17576 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___17576)){
var effect_fn_17577 = temp__5455__auto___17576;
(effect_fn_17577.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17577.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17577.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17578 = cljs.core.next(seq__17510__$1);
var G__17579 = null;
var G__17580 = (0);
var G__17581 = (0);
seq__17510 = G__17578;
chunk__17511 = G__17579;
count__17512 = G__17580;
i__17513 = G__17581;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__17520 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17521 = null;
var count__17522 = (0);
var i__17523 = (0);
while(true){
if((i__17523 < count__17522)){
var map__17524 = chunk__17521.cljs$core$IIndexed$_nth$arity$2(null,i__17523);
var map__17524__$1 = (((((!((map__17524 == null))))?(((((map__17524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17524):map__17524);
var effect = map__17524__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__17520,chunk__17521,count__17522,i__17523,map__17524,map__17524__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__17520,chunk__17521,count__17522,i__17523,map__17524,map__17524__$1,effect,ms,dispatch))
,ms);
}


var G__17584 = seq__17520;
var G__17585 = chunk__17521;
var G__17586 = count__17522;
var G__17587 = (i__17523 + (1));
seq__17520 = G__17584;
chunk__17521 = G__17585;
count__17522 = G__17586;
i__17523 = G__17587;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17520);
if(temp__5457__auto__){
var seq__17520__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17520__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__17520__$1);
var G__17589 = cljs.core.chunk_rest(seq__17520__$1);
var G__17590 = c__4461__auto__;
var G__17591 = cljs.core.count(c__4461__auto__);
var G__17592 = (0);
seq__17520 = G__17589;
chunk__17521 = G__17590;
count__17522 = G__17591;
i__17523 = G__17592;
continue;
} else {
var map__17527 = cljs.core.first(seq__17520__$1);
var map__17527__$1 = (((((!((map__17527 == null))))?(((((map__17527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17527):map__17527);
var effect = map__17527__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17527__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17527__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__17520,chunk__17521,count__17522,i__17523,map__17527,map__17527__$1,effect,ms,dispatch,seq__17520__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__17520,chunk__17521,count__17522,i__17523,map__17527,map__17527__$1,effect,ms,dispatch,seq__17520__$1,temp__5457__auto__))
,ms);
}


var G__17594 = cljs.core.next(seq__17520__$1);
var G__17595 = null;
var G__17596 = (0);
var G__17597 = (0);
seq__17520 = G__17594;
chunk__17521 = G__17595;
count__17522 = G__17596;
i__17523 = G__17597;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__17533 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17534 = null;
var count__17535 = (0);
var i__17536 = (0);
while(true){
if((i__17536 < count__17535)){
var event = chunk__17534.cljs$core$IIndexed$_nth$arity$2(null,i__17536);
re_frame.router.dispatch(event);


var G__17599 = seq__17533;
var G__17600 = chunk__17534;
var G__17601 = count__17535;
var G__17602 = (i__17536 + (1));
seq__17533 = G__17599;
chunk__17534 = G__17600;
count__17535 = G__17601;
i__17536 = G__17602;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17533);
if(temp__5457__auto__){
var seq__17533__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17533__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__17533__$1);
var G__17603 = cljs.core.chunk_rest(seq__17533__$1);
var G__17604 = c__4461__auto__;
var G__17605 = cljs.core.count(c__4461__auto__);
var G__17606 = (0);
seq__17533 = G__17603;
chunk__17534 = G__17604;
count__17535 = G__17605;
i__17536 = G__17606;
continue;
} else {
var event = cljs.core.first(seq__17533__$1);
re_frame.router.dispatch(event);


var G__17607 = cljs.core.next(seq__17533__$1);
var G__17608 = null;
var G__17609 = (0);
var G__17610 = (0);
seq__17533 = G__17607;
chunk__17534 = G__17608;
count__17535 = G__17609;
i__17536 = G__17610;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__17540 = cljs.core.seq(value);
var chunk__17541 = null;
var count__17542 = (0);
var i__17543 = (0);
while(true){
if((i__17543 < count__17542)){
var event = chunk__17541.cljs$core$IIndexed$_nth$arity$2(null,i__17543);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17617 = seq__17540;
var G__17618 = chunk__17541;
var G__17619 = count__17542;
var G__17620 = (i__17543 + (1));
seq__17540 = G__17617;
chunk__17541 = G__17618;
count__17542 = G__17619;
i__17543 = G__17620;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17540);
if(temp__5457__auto__){
var seq__17540__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17540__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__17540__$1);
var G__17625 = cljs.core.chunk_rest(seq__17540__$1);
var G__17626 = c__4461__auto__;
var G__17627 = cljs.core.count(c__4461__auto__);
var G__17628 = (0);
seq__17540 = G__17625;
chunk__17541 = G__17626;
count__17542 = G__17627;
i__17543 = G__17628;
continue;
} else {
var event = cljs.core.first(seq__17540__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__17633 = cljs.core.next(seq__17540__$1);
var G__17634 = null;
var G__17635 = (0);
var G__17636 = (0);
seq__17540 = G__17633;
chunk__17541 = G__17634;
count__17542 = G__17635;
i__17543 = G__17636;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
