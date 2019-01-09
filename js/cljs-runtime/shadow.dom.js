goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_dom["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_svg["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18292 = coll;
var G__18293 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18292,G__18293) : shadow.dom.lazy_native_coll_seq.call(null,G__18292,G__18293));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4047__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18317 = arguments.length;
switch (G__18317) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18320 = arguments.length;
switch (G__18320) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18329 = arguments.length;
switch (G__18329) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18336 = arguments.length;
switch (G__18336) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18342 = arguments.length;
switch (G__18342) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__18344 = document;
var G__18345 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18344,G__18345);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__18347 = shadow.dom.dom_node(parent);
var G__18348 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18347,G__18348);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__18351 = shadow.dom.dom_node(el);
var G__18352 = cls;
return goog.dom.classlist.add(G__18351,G__18352);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__18358 = shadow.dom.dom_node(el);
var G__18359 = cls;
return goog.dom.classlist.remove(G__18358,G__18359);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18361 = arguments.length;
switch (G__18361) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__18363 = shadow.dom.dom_node(el);
var G__18364 = cls;
return goog.dom.classlist.toggle(G__18363,G__18364);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18369){if((e18369 instanceof Object)){
var e = e18369;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18369;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18373 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18374 = null;
var count__18375 = (0);
var i__18376 = (0);
while(true){
if((i__18376 < count__18375)){
var el = chunk__18374.cljs$core$IIndexed$_nth$arity$2(null,i__18376);
var handler_18986__$1 = ((function (seq__18373,chunk__18374,count__18375,i__18376,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18373,chunk__18374,count__18375,i__18376,el))
;
var G__18378_18987 = el;
var G__18379_18988 = cljs.core.name(ev);
var G__18380_18989 = handler_18986__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18378_18987,G__18379_18988,G__18380_18989) : shadow.dom.dom_listen.call(null,G__18378_18987,G__18379_18988,G__18380_18989));


var G__18992 = seq__18373;
var G__18993 = chunk__18374;
var G__18994 = count__18375;
var G__18995 = (i__18376 + (1));
seq__18373 = G__18992;
chunk__18374 = G__18993;
count__18375 = G__18994;
i__18376 = G__18995;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18373);
if(temp__5457__auto__){
var seq__18373__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18373__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18373__$1);
var G__18997 = cljs.core.chunk_rest(seq__18373__$1);
var G__18998 = c__4461__auto__;
var G__18999 = cljs.core.count(c__4461__auto__);
var G__19000 = (0);
seq__18373 = G__18997;
chunk__18374 = G__18998;
count__18375 = G__18999;
i__18376 = G__19000;
continue;
} else {
var el = cljs.core.first(seq__18373__$1);
var handler_19001__$1 = ((function (seq__18373,chunk__18374,count__18375,i__18376,el,seq__18373__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18373,chunk__18374,count__18375,i__18376,el,seq__18373__$1,temp__5457__auto__))
;
var G__18382_19004 = el;
var G__18383_19005 = cljs.core.name(ev);
var G__18384_19006 = handler_19001__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18382_19004,G__18383_19005,G__18384_19006) : shadow.dom.dom_listen.call(null,G__18382_19004,G__18383_19005,G__18384_19006));


var G__19008 = cljs.core.next(seq__18373__$1);
var G__19009 = null;
var G__19010 = (0);
var G__19011 = (0);
seq__18373 = G__19008;
chunk__18374 = G__19009;
count__18375 = G__19010;
i__18376 = G__19011;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18392 = arguments.length;
switch (G__18392) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__18403 = shadow.dom.dom_node(el);
var G__18404 = cljs.core.name(ev);
var G__18405 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18403,G__18404,G__18405) : shadow.dom.dom_listen.call(null,G__18403,G__18404,G__18405));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__18409 = shadow.dom.dom_node(el);
var G__18410 = cljs.core.name(ev);
var G__18411 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__18409,G__18410,G__18411) : shadow.dom.dom_listen_remove.call(null,G__18409,G__18410,G__18411));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18415 = cljs.core.seq(events);
var chunk__18416 = null;
var count__18417 = (0);
var i__18418 = (0);
while(true){
if((i__18418 < count__18417)){
var vec__18420 = chunk__18416.cljs$core$IIndexed$_nth$arity$2(null,i__18418);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18420,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18420,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19020 = seq__18415;
var G__19021 = chunk__18416;
var G__19022 = count__18417;
var G__19023 = (i__18418 + (1));
seq__18415 = G__19020;
chunk__18416 = G__19021;
count__18417 = G__19022;
i__18418 = G__19023;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18415);
if(temp__5457__auto__){
var seq__18415__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18415__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18415__$1);
var G__19025 = cljs.core.chunk_rest(seq__18415__$1);
var G__19026 = c__4461__auto__;
var G__19027 = cljs.core.count(c__4461__auto__);
var G__19028 = (0);
seq__18415 = G__19025;
chunk__18416 = G__19026;
count__18417 = G__19027;
i__18418 = G__19028;
continue;
} else {
var vec__18425 = cljs.core.first(seq__18415__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18425,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19029 = cljs.core.next(seq__18415__$1);
var G__19030 = null;
var G__19031 = (0);
var G__19032 = (0);
seq__18415 = G__19029;
chunk__18416 = G__19030;
count__18417 = G__19031;
i__18418 = G__19032;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18429 = cljs.core.seq(styles);
var chunk__18430 = null;
var count__18431 = (0);
var i__18432 = (0);
while(true){
if((i__18432 < count__18431)){
var vec__18434 = chunk__18430.cljs$core$IIndexed$_nth$arity$2(null,i__18432);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18434,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18434,(1),null);
var G__18438_19038 = dom;
var G__18439_19039 = cljs.core.name(k);
var G__18440_19040 = (((v == null))?"":v);
goog.style.setStyle(G__18438_19038,G__18439_19039,G__18440_19040);


var G__19041 = seq__18429;
var G__19042 = chunk__18430;
var G__19043 = count__18431;
var G__19044 = (i__18432 + (1));
seq__18429 = G__19041;
chunk__18430 = G__19042;
count__18431 = G__19043;
i__18432 = G__19044;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18429);
if(temp__5457__auto__){
var seq__18429__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18429__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18429__$1);
var G__19049 = cljs.core.chunk_rest(seq__18429__$1);
var G__19050 = c__4461__auto__;
var G__19051 = cljs.core.count(c__4461__auto__);
var G__19052 = (0);
seq__18429 = G__19049;
chunk__18430 = G__19050;
count__18431 = G__19051;
i__18432 = G__19052;
continue;
} else {
var vec__18443 = cljs.core.first(seq__18429__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18443,(1),null);
var G__18446_19054 = dom;
var G__18447_19055 = cljs.core.name(k);
var G__18448_19056 = (((v == null))?"":v);
goog.style.setStyle(G__18446_19054,G__18447_19055,G__18448_19056);


var G__19059 = cljs.core.next(seq__18429__$1);
var G__19060 = null;
var G__19061 = (0);
var G__19062 = (0);
seq__18429 = G__19059;
chunk__18430 = G__19060;
count__18431 = G__19061;
i__18432 = G__19062;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18453_19066 = key;
var G__18453_19067__$1 = (((G__18453_19066 instanceof cljs.core.Keyword))?G__18453_19066.fqn:null);
switch (G__18453_19067__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19078 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(ks_19078,"data-");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.string.startsWith(ks_19078,"aria-");
}
})())){
el.setAttribute(ks_19078,value);
} else {
(el[ks_19078] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__18462 = shadow.dom.dom_node(el);
var G__18463 = cls;
return goog.dom.classlist.contains(G__18462,G__18463);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18473){
var map__18474 = p__18473;
var map__18474__$1 = (((((!((map__18474 == null))))?(((((map__18474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18474):map__18474);
var props = map__18474__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18474__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18480 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18480,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18480,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18480,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18483 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18483,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18483;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18489 = arguments.length;
switch (G__18489) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18502){
var vec__18503 = p__18502;
var seq__18504 = cljs.core.seq(vec__18503);
var first__18505 = cljs.core.first(seq__18504);
var seq__18504__$1 = cljs.core.next(seq__18504);
var nn = first__18505;
var first__18505__$1 = cljs.core.first(seq__18504__$1);
var seq__18504__$2 = cljs.core.next(seq__18504__$1);
var np = first__18505__$1;
var nc = seq__18504__$2;
var node = vec__18503;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18510 = nn;
var G__18511 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18510,G__18511) : create_fn.call(null,G__18510,G__18511));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18512 = nn;
var G__18513 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18512,G__18513) : create_fn.call(null,G__18512,G__18513));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18519 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18519,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18519,(1),null);
var seq__18524_19113 = cljs.core.seq(node_children);
var chunk__18525_19114 = null;
var count__18526_19115 = (0);
var i__18527_19116 = (0);
while(true){
if((i__18527_19116 < count__18526_19115)){
var child_struct_19117 = chunk__18525_19114.cljs$core$IIndexed$_nth$arity$2(null,i__18527_19116);
var children_19118 = shadow.dom.dom_node(child_struct_19117);
if(cljs.core.seq_QMARK_(children_19118)){
var seq__18530_19120 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19118));
var chunk__18532_19121 = null;
var count__18533_19122 = (0);
var i__18534_19123 = (0);
while(true){
if((i__18534_19123 < count__18533_19122)){
var child_19128 = chunk__18532_19121.cljs$core$IIndexed$_nth$arity$2(null,i__18534_19123);
if(cljs.core.truth_(child_19128)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19128);


var G__19129 = seq__18530_19120;
var G__19130 = chunk__18532_19121;
var G__19131 = count__18533_19122;
var G__19132 = (i__18534_19123 + (1));
seq__18530_19120 = G__19129;
chunk__18532_19121 = G__19130;
count__18533_19122 = G__19131;
i__18534_19123 = G__19132;
continue;
} else {
var G__19133 = seq__18530_19120;
var G__19134 = chunk__18532_19121;
var G__19135 = count__18533_19122;
var G__19136 = (i__18534_19123 + (1));
seq__18530_19120 = G__19133;
chunk__18532_19121 = G__19134;
count__18533_19122 = G__19135;
i__18534_19123 = G__19136;
continue;
}
} else {
var temp__5457__auto___19137 = cljs.core.seq(seq__18530_19120);
if(temp__5457__auto___19137){
var seq__18530_19138__$1 = temp__5457__auto___19137;
if(cljs.core.chunked_seq_QMARK_(seq__18530_19138__$1)){
var c__4461__auto___19139 = cljs.core.chunk_first(seq__18530_19138__$1);
var G__19140 = cljs.core.chunk_rest(seq__18530_19138__$1);
var G__19141 = c__4461__auto___19139;
var G__19142 = cljs.core.count(c__4461__auto___19139);
var G__19143 = (0);
seq__18530_19120 = G__19140;
chunk__18532_19121 = G__19141;
count__18533_19122 = G__19142;
i__18534_19123 = G__19143;
continue;
} else {
var child_19144 = cljs.core.first(seq__18530_19138__$1);
if(cljs.core.truth_(child_19144)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19144);


var G__19145 = cljs.core.next(seq__18530_19138__$1);
var G__19146 = null;
var G__19147 = (0);
var G__19148 = (0);
seq__18530_19120 = G__19145;
chunk__18532_19121 = G__19146;
count__18533_19122 = G__19147;
i__18534_19123 = G__19148;
continue;
} else {
var G__19150 = cljs.core.next(seq__18530_19138__$1);
var G__19151 = null;
var G__19152 = (0);
var G__19153 = (0);
seq__18530_19120 = G__19150;
chunk__18532_19121 = G__19151;
count__18533_19122 = G__19152;
i__18534_19123 = G__19153;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19118);
}


var G__19155 = seq__18524_19113;
var G__19156 = chunk__18525_19114;
var G__19157 = count__18526_19115;
var G__19158 = (i__18527_19116 + (1));
seq__18524_19113 = G__19155;
chunk__18525_19114 = G__19156;
count__18526_19115 = G__19157;
i__18527_19116 = G__19158;
continue;
} else {
var temp__5457__auto___19162 = cljs.core.seq(seq__18524_19113);
if(temp__5457__auto___19162){
var seq__18524_19167__$1 = temp__5457__auto___19162;
if(cljs.core.chunked_seq_QMARK_(seq__18524_19167__$1)){
var c__4461__auto___19169 = cljs.core.chunk_first(seq__18524_19167__$1);
var G__19172 = cljs.core.chunk_rest(seq__18524_19167__$1);
var G__19173 = c__4461__auto___19169;
var G__19174 = cljs.core.count(c__4461__auto___19169);
var G__19175 = (0);
seq__18524_19113 = G__19172;
chunk__18525_19114 = G__19173;
count__18526_19115 = G__19174;
i__18527_19116 = G__19175;
continue;
} else {
var child_struct_19177 = cljs.core.first(seq__18524_19167__$1);
var children_19179 = shadow.dom.dom_node(child_struct_19177);
if(cljs.core.seq_QMARK_(children_19179)){
var seq__18545_19180 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19179));
var chunk__18547_19181 = null;
var count__18548_19182 = (0);
var i__18549_19183 = (0);
while(true){
if((i__18549_19183 < count__18548_19182)){
var child_19185 = chunk__18547_19181.cljs$core$IIndexed$_nth$arity$2(null,i__18549_19183);
if(cljs.core.truth_(child_19185)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19185);


var G__19187 = seq__18545_19180;
var G__19188 = chunk__18547_19181;
var G__19189 = count__18548_19182;
var G__19190 = (i__18549_19183 + (1));
seq__18545_19180 = G__19187;
chunk__18547_19181 = G__19188;
count__18548_19182 = G__19189;
i__18549_19183 = G__19190;
continue;
} else {
var G__19191 = seq__18545_19180;
var G__19192 = chunk__18547_19181;
var G__19193 = count__18548_19182;
var G__19194 = (i__18549_19183 + (1));
seq__18545_19180 = G__19191;
chunk__18547_19181 = G__19192;
count__18548_19182 = G__19193;
i__18549_19183 = G__19194;
continue;
}
} else {
var temp__5457__auto___19196__$1 = cljs.core.seq(seq__18545_19180);
if(temp__5457__auto___19196__$1){
var seq__18545_19197__$1 = temp__5457__auto___19196__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18545_19197__$1)){
var c__4461__auto___19199 = cljs.core.chunk_first(seq__18545_19197__$1);
var G__19200 = cljs.core.chunk_rest(seq__18545_19197__$1);
var G__19201 = c__4461__auto___19199;
var G__19202 = cljs.core.count(c__4461__auto___19199);
var G__19203 = (0);
seq__18545_19180 = G__19200;
chunk__18547_19181 = G__19201;
count__18548_19182 = G__19202;
i__18549_19183 = G__19203;
continue;
} else {
var child_19207 = cljs.core.first(seq__18545_19197__$1);
if(cljs.core.truth_(child_19207)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19207);


var G__19208 = cljs.core.next(seq__18545_19197__$1);
var G__19209 = null;
var G__19210 = (0);
var G__19211 = (0);
seq__18545_19180 = G__19208;
chunk__18547_19181 = G__19209;
count__18548_19182 = G__19210;
i__18549_19183 = G__19211;
continue;
} else {
var G__19213 = cljs.core.next(seq__18545_19197__$1);
var G__19214 = null;
var G__19215 = (0);
var G__19216 = (0);
seq__18545_19180 = G__19213;
chunk__18547_19181 = G__19214;
count__18548_19182 = G__19215;
i__18549_19183 = G__19216;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19179);
}


var G__19218 = cljs.core.next(seq__18524_19167__$1);
var G__19219 = null;
var G__19220 = (0);
var G__19221 = (0);
seq__18524_19113 = G__19218;
chunk__18525_19114 = G__19219;
count__18526_19115 = G__19220;
i__18527_19116 = G__19221;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__18561 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__18561);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18565 = cljs.core.seq(node);
var chunk__18566 = null;
var count__18567 = (0);
var i__18568 = (0);
while(true){
if((i__18568 < count__18567)){
var n = chunk__18566.cljs$core$IIndexed$_nth$arity$2(null,i__18568);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19228 = seq__18565;
var G__19229 = chunk__18566;
var G__19230 = count__18567;
var G__19231 = (i__18568 + (1));
seq__18565 = G__19228;
chunk__18566 = G__19229;
count__18567 = G__19230;
i__18568 = G__19231;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18565);
if(temp__5457__auto__){
var seq__18565__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18565__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18565__$1);
var G__19233 = cljs.core.chunk_rest(seq__18565__$1);
var G__19234 = c__4461__auto__;
var G__19235 = cljs.core.count(c__4461__auto__);
var G__19236 = (0);
seq__18565 = G__19233;
chunk__18566 = G__19234;
count__18567 = G__19235;
i__18568 = G__19236;
continue;
} else {
var n = cljs.core.first(seq__18565__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19240 = cljs.core.next(seq__18565__$1);
var G__19241 = null;
var G__19242 = (0);
var G__19243 = (0);
seq__18565 = G__19240;
chunk__18566 = G__19241;
count__18567 = G__19242;
i__18568 = G__19243;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__18573 = shadow.dom.dom_node(new$);
var G__18574 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__18573,G__18574);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18578 = arguments.length;
switch (G__18578) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18584 = arguments.length;
switch (G__18584) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18591 = arguments.length;
switch (G__18591) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4047__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19267 = arguments.length;
var i__4642__auto___19269 = (0);
while(true){
if((i__4642__auto___19269 < len__4641__auto___19267)){
args__4647__auto__.push((arguments[i__4642__auto___19269]));

var G__19271 = (i__4642__auto___19269 + (1));
i__4642__auto___19269 = G__19271;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18615_19274 = cljs.core.seq(nodes);
var chunk__18616_19275 = null;
var count__18617_19276 = (0);
var i__18618_19277 = (0);
while(true){
if((i__18618_19277 < count__18617_19276)){
var node_19281 = chunk__18616_19275.cljs$core$IIndexed$_nth$arity$2(null,i__18618_19277);
fragment.appendChild(shadow.dom._to_dom(node_19281));


var G__19286 = seq__18615_19274;
var G__19287 = chunk__18616_19275;
var G__19288 = count__18617_19276;
var G__19289 = (i__18618_19277 + (1));
seq__18615_19274 = G__19286;
chunk__18616_19275 = G__19287;
count__18617_19276 = G__19288;
i__18618_19277 = G__19289;
continue;
} else {
var temp__5457__auto___19295 = cljs.core.seq(seq__18615_19274);
if(temp__5457__auto___19295){
var seq__18615_19297__$1 = temp__5457__auto___19295;
if(cljs.core.chunked_seq_QMARK_(seq__18615_19297__$1)){
var c__4461__auto___19298 = cljs.core.chunk_first(seq__18615_19297__$1);
var G__19299 = cljs.core.chunk_rest(seq__18615_19297__$1);
var G__19300 = c__4461__auto___19298;
var G__19301 = cljs.core.count(c__4461__auto___19298);
var G__19302 = (0);
seq__18615_19274 = G__19299;
chunk__18616_19275 = G__19300;
count__18617_19276 = G__19301;
i__18618_19277 = G__19302;
continue;
} else {
var node_19308 = cljs.core.first(seq__18615_19297__$1);
fragment.appendChild(shadow.dom._to_dom(node_19308));


var G__19310 = cljs.core.next(seq__18615_19297__$1);
var G__19311 = null;
var G__19312 = (0);
var G__19313 = (0);
seq__18615_19274 = G__19310;
chunk__18616_19275 = G__19311;
count__18617_19276 = G__19312;
i__18618_19277 = G__19313;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq18610){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18610));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18623_19316 = cljs.core.seq(scripts);
var chunk__18624_19317 = null;
var count__18625_19318 = (0);
var i__18626_19319 = (0);
while(true){
if((i__18626_19319 < count__18625_19318)){
var vec__18627_19320 = chunk__18624_19317.cljs$core$IIndexed$_nth$arity$2(null,i__18626_19319);
var script_tag_19321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627_19320,(0),null);
var script_body_19322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627_19320,(1),null);
eval(script_body_19322);


var G__19323 = seq__18623_19316;
var G__19324 = chunk__18624_19317;
var G__19325 = count__18625_19318;
var G__19326 = (i__18626_19319 + (1));
seq__18623_19316 = G__19323;
chunk__18624_19317 = G__19324;
count__18625_19318 = G__19325;
i__18626_19319 = G__19326;
continue;
} else {
var temp__5457__auto___19328 = cljs.core.seq(seq__18623_19316);
if(temp__5457__auto___19328){
var seq__18623_19333__$1 = temp__5457__auto___19328;
if(cljs.core.chunked_seq_QMARK_(seq__18623_19333__$1)){
var c__4461__auto___19334 = cljs.core.chunk_first(seq__18623_19333__$1);
var G__19335 = cljs.core.chunk_rest(seq__18623_19333__$1);
var G__19336 = c__4461__auto___19334;
var G__19337 = cljs.core.count(c__4461__auto___19334);
var G__19338 = (0);
seq__18623_19316 = G__19335;
chunk__18624_19317 = G__19336;
count__18625_19318 = G__19337;
i__18626_19319 = G__19338;
continue;
} else {
var vec__18630_19343 = cljs.core.first(seq__18623_19333__$1);
var script_tag_19344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18630_19343,(0),null);
var script_body_19345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18630_19343,(1),null);
eval(script_body_19345);


var G__19347 = cljs.core.next(seq__18623_19333__$1);
var G__19348 = null;
var G__19349 = (0);
var G__19350 = (0);
seq__18623_19316 = G__19347;
chunk__18624_19317 = G__19348;
count__18625_19318 = G__19349;
i__18626_19319 = G__19350;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__18633){
var vec__18634 = p__18633;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18634,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18634,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__18637 = shadow.dom.dom_node(el);
var G__18638 = cls;
return goog.dom.getAncestorByClass(G__18637,G__18638);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18640 = arguments.length;
switch (G__18640) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__18641 = shadow.dom.dom_node(el);
var G__18642 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__18641,G__18642);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__18647 = shadow.dom.dom_node(el);
var G__18648 = cljs.core.name(tag);
var G__18649 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__18647,G__18648,G__18649);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__18654 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__18654);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__18659 = shadow.dom.dom_node(dom);
var G__18660 = value;
return goog.dom.forms.setValue(G__18659,G__18660);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18665 = cljs.core.seq(style_keys);
var chunk__18666 = null;
var count__18667 = (0);
var i__18668 = (0);
while(true){
if((i__18668 < count__18667)){
var it = chunk__18666.cljs$core$IIndexed$_nth$arity$2(null,i__18668);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19370 = seq__18665;
var G__19371 = chunk__18666;
var G__19372 = count__18667;
var G__19373 = (i__18668 + (1));
seq__18665 = G__19370;
chunk__18666 = G__19371;
count__18667 = G__19372;
i__18668 = G__19373;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18665);
if(temp__5457__auto__){
var seq__18665__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18665__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18665__$1);
var G__19375 = cljs.core.chunk_rest(seq__18665__$1);
var G__19376 = c__4461__auto__;
var G__19377 = cljs.core.count(c__4461__auto__);
var G__19378 = (0);
seq__18665 = G__19375;
chunk__18666 = G__19376;
count__18667 = G__19377;
i__18668 = G__19378;
continue;
} else {
var it = cljs.core.first(seq__18665__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19380 = cljs.core.next(seq__18665__$1);
var G__19381 = null;
var G__19382 = (0);
var G__19383 = (0);
seq__18665 = G__19380;
chunk__18666 = G__19381;
count__18667 = G__19382;
i__18668 = G__19383;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k18675,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__18682 = k18675;
var G__18682__$1 = (((G__18682 instanceof cljs.core.Keyword))?G__18682.fqn:null);
switch (G__18682__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18675,else__4304__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__18685){
var vec__18686 = p__18685;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18686,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18686,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18674){
var self__ = this;
var G__18674__$1 = this;
return (new cljs.core.RecordIter((0),G__18674__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__18703 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__18703(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18676,other18677){
var self__ = this;
var this18676__$1 = this;
return (((!((other18677 == null)))) && ((this18676__$1.constructor === other18677.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18676__$1.x,other18677.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18676__$1.y,other18677.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18676__$1.__extmap,other18677.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__18674){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__18715 = cljs.core.keyword_identical_QMARK_;
var expr__18716 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__18718 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__18719 = expr__18716;
return (pred__18715.cljs$core$IFn$_invoke$arity$2 ? pred__18715.cljs$core$IFn$_invoke$arity$2(G__18718,G__18719) : pred__18715.call(null,G__18718,G__18719));
})())){
return (new shadow.dom.Coordinate(G__18674,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18720 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__18721 = expr__18716;
return (pred__18715.cljs$core$IFn$_invoke$arity$2 ? pred__18715.cljs$core$IFn$_invoke$arity$2(G__18720,G__18721) : pred__18715.call(null,G__18720,G__18721));
})())){
return (new shadow.dom.Coordinate(self__.x,G__18674,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__18674),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__18674){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18674,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18679){
var extmap__4340__auto__ = (function (){var G__18728 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18679,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18679)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18728);
} else {
return G__18728;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18679),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18679),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__18731 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__18731);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__18733 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__18733);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__18740 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__18740);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k18746,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__18759 = k18746;
var G__18759__$1 = (((G__18759 instanceof cljs.core.Keyword))?G__18759.fqn:null);
switch (G__18759__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18746,else__4304__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__18762){
var vec__18763 = p__18762;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18763,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18763,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Size{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18745){
var self__ = this;
var G__18745__$1 = this;
return (new cljs.core.RecordIter((0),G__18745__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__18777 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__18777(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18747,other18748){
var self__ = this;
var this18747__$1 = this;
return (((!((other18748 == null)))) && ((this18747__$1.constructor === other18748.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18747__$1.w,other18748.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18747__$1.h,other18748.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18747__$1.__extmap,other18748.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__18745){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__18783 = cljs.core.keyword_identical_QMARK_;
var expr__18784 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__18786 = new cljs.core.Keyword(null,"w","w",354169001);
var G__18787 = expr__18784;
return (pred__18783.cljs$core$IFn$_invoke$arity$2 ? pred__18783.cljs$core$IFn$_invoke$arity$2(G__18786,G__18787) : pred__18783.call(null,G__18786,G__18787));
})())){
return (new shadow.dom.Size(G__18745,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18789 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__18790 = expr__18784;
return (pred__18783.cljs$core$IFn$_invoke$arity$2 ? pred__18783.cljs$core$IFn$_invoke$arity$2(G__18789,G__18790) : pred__18783.call(null,G__18789,G__18790));
})())){
return (new shadow.dom.Size(self__.w,G__18745,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__18745),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__18745){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18745,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18750){
var extmap__4340__auto__ = (function (){var G__18802 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18750,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18750)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18802);
} else {
return G__18802;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18750),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18750),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__18806 = shadow.dom.dom_node(el);
return goog.style.getSize(G__18806);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4515__auto__ = opts;
var l__4516__auto__ = a__4515__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4516__auto__)){
var G__19471 = (i + (1));
var G__19472 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19471;
ret = G__19472;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18812){
var vec__18814 = p__18812;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18814,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18822 = arguments.length;
switch (G__18822) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__18829_19480 = new_node;
var G__18830_19481 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__18829_19480,G__18830_19481);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__18831_19482 = new_node;
var G__18832_19483 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__18831_19482,G__18832_19483);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19485 = ps;
var G__19486 = (i + (1));
el__$1 = G__19485;
i = G__19486;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__18840 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__18840);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__18841 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__18841);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__18843 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__18843);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18847 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18847,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18847,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18847,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18851_19490 = cljs.core.seq(props);
var chunk__18852_19491 = null;
var count__18853_19492 = (0);
var i__18854_19493 = (0);
while(true){
if((i__18854_19493 < count__18853_19492)){
var vec__18856_19494 = chunk__18852_19491.cljs$core$IIndexed$_nth$arity$2(null,i__18854_19493);
var k_19495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18856_19494,(0),null);
var v_19496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18856_19494,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_19495);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19495),v_19496);


var G__19499 = seq__18851_19490;
var G__19500 = chunk__18852_19491;
var G__19501 = count__18853_19492;
var G__19502 = (i__18854_19493 + (1));
seq__18851_19490 = G__19499;
chunk__18852_19491 = G__19500;
count__18853_19492 = G__19501;
i__18854_19493 = G__19502;
continue;
} else {
var temp__5457__auto___19503 = cljs.core.seq(seq__18851_19490);
if(temp__5457__auto___19503){
var seq__18851_19504__$1 = temp__5457__auto___19503;
if(cljs.core.chunked_seq_QMARK_(seq__18851_19504__$1)){
var c__4461__auto___19505 = cljs.core.chunk_first(seq__18851_19504__$1);
var G__19506 = cljs.core.chunk_rest(seq__18851_19504__$1);
var G__19507 = c__4461__auto___19505;
var G__19508 = cljs.core.count(c__4461__auto___19505);
var G__19509 = (0);
seq__18851_19490 = G__19506;
chunk__18852_19491 = G__19507;
count__18853_19492 = G__19508;
i__18854_19493 = G__19509;
continue;
} else {
var vec__18860_19512 = cljs.core.first(seq__18851_19504__$1);
var k_19513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18860_19512,(0),null);
var v_19514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18860_19512,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_19513);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19513),v_19514);


var G__19517 = cljs.core.next(seq__18851_19504__$1);
var G__19518 = null;
var G__19519 = (0);
var G__19520 = (0);
seq__18851_19490 = G__19517;
chunk__18852_19491 = G__19518;
count__18853_19492 = G__19519;
i__18854_19493 = G__19520;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18868 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18868,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18868,(1),null);
var seq__18873_19529 = cljs.core.seq(node_children);
var chunk__18875_19530 = null;
var count__18876_19531 = (0);
var i__18877_19532 = (0);
while(true){
if((i__18877_19532 < count__18876_19531)){
var child_struct_19533 = chunk__18875_19530.cljs$core$IIndexed$_nth$arity$2(null,i__18877_19532);
if((!((child_struct_19533 == null)))){
if(typeof child_struct_19533 === 'string'){
var text_19534 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19534),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19533)].join(''));
} else {
var children_19535 = shadow.dom.svg_node(child_struct_19533);
if(cljs.core.seq_QMARK_(children_19535)){
var seq__18882_19539 = cljs.core.seq(children_19535);
var chunk__18884_19540 = null;
var count__18885_19541 = (0);
var i__18886_19542 = (0);
while(true){
if((i__18886_19542 < count__18885_19541)){
var child_19543 = chunk__18884_19540.cljs$core$IIndexed$_nth$arity$2(null,i__18886_19542);
if(cljs.core.truth_(child_19543)){
node.appendChild(child_19543);


var G__19544 = seq__18882_19539;
var G__19545 = chunk__18884_19540;
var G__19546 = count__18885_19541;
var G__19547 = (i__18886_19542 + (1));
seq__18882_19539 = G__19544;
chunk__18884_19540 = G__19545;
count__18885_19541 = G__19546;
i__18886_19542 = G__19547;
continue;
} else {
var G__19548 = seq__18882_19539;
var G__19549 = chunk__18884_19540;
var G__19550 = count__18885_19541;
var G__19551 = (i__18886_19542 + (1));
seq__18882_19539 = G__19548;
chunk__18884_19540 = G__19549;
count__18885_19541 = G__19550;
i__18886_19542 = G__19551;
continue;
}
} else {
var temp__5457__auto___19552 = cljs.core.seq(seq__18882_19539);
if(temp__5457__auto___19552){
var seq__18882_19553__$1 = temp__5457__auto___19552;
if(cljs.core.chunked_seq_QMARK_(seq__18882_19553__$1)){
var c__4461__auto___19555 = cljs.core.chunk_first(seq__18882_19553__$1);
var G__19556 = cljs.core.chunk_rest(seq__18882_19553__$1);
var G__19557 = c__4461__auto___19555;
var G__19558 = cljs.core.count(c__4461__auto___19555);
var G__19559 = (0);
seq__18882_19539 = G__19556;
chunk__18884_19540 = G__19557;
count__18885_19541 = G__19558;
i__18886_19542 = G__19559;
continue;
} else {
var child_19560 = cljs.core.first(seq__18882_19553__$1);
if(cljs.core.truth_(child_19560)){
node.appendChild(child_19560);


var G__19565 = cljs.core.next(seq__18882_19553__$1);
var G__19566 = null;
var G__19567 = (0);
var G__19568 = (0);
seq__18882_19539 = G__19565;
chunk__18884_19540 = G__19566;
count__18885_19541 = G__19567;
i__18886_19542 = G__19568;
continue;
} else {
var G__19570 = cljs.core.next(seq__18882_19553__$1);
var G__19571 = null;
var G__19572 = (0);
var G__19573 = (0);
seq__18882_19539 = G__19570;
chunk__18884_19540 = G__19571;
count__18885_19541 = G__19572;
i__18886_19542 = G__19573;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19535);
}
}


var G__19574 = seq__18873_19529;
var G__19575 = chunk__18875_19530;
var G__19576 = count__18876_19531;
var G__19577 = (i__18877_19532 + (1));
seq__18873_19529 = G__19574;
chunk__18875_19530 = G__19575;
count__18876_19531 = G__19576;
i__18877_19532 = G__19577;
continue;
} else {
var G__19578 = seq__18873_19529;
var G__19579 = chunk__18875_19530;
var G__19580 = count__18876_19531;
var G__19581 = (i__18877_19532 + (1));
seq__18873_19529 = G__19578;
chunk__18875_19530 = G__19579;
count__18876_19531 = G__19580;
i__18877_19532 = G__19581;
continue;
}
} else {
var temp__5457__auto___19583 = cljs.core.seq(seq__18873_19529);
if(temp__5457__auto___19583){
var seq__18873_19584__$1 = temp__5457__auto___19583;
if(cljs.core.chunked_seq_QMARK_(seq__18873_19584__$1)){
var c__4461__auto___19586 = cljs.core.chunk_first(seq__18873_19584__$1);
var G__19587 = cljs.core.chunk_rest(seq__18873_19584__$1);
var G__19588 = c__4461__auto___19586;
var G__19589 = cljs.core.count(c__4461__auto___19586);
var G__19590 = (0);
seq__18873_19529 = G__19587;
chunk__18875_19530 = G__19588;
count__18876_19531 = G__19589;
i__18877_19532 = G__19590;
continue;
} else {
var child_struct_19591 = cljs.core.first(seq__18873_19584__$1);
if((!((child_struct_19591 == null)))){
if(typeof child_struct_19591 === 'string'){
var text_19593 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19593),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19591)].join(''));
} else {
var children_19595 = shadow.dom.svg_node(child_struct_19591);
if(cljs.core.seq_QMARK_(children_19595)){
var seq__18891_19596 = cljs.core.seq(children_19595);
var chunk__18893_19597 = null;
var count__18894_19598 = (0);
var i__18895_19599 = (0);
while(true){
if((i__18895_19599 < count__18894_19598)){
var child_19600 = chunk__18893_19597.cljs$core$IIndexed$_nth$arity$2(null,i__18895_19599);
if(cljs.core.truth_(child_19600)){
node.appendChild(child_19600);


var G__19601 = seq__18891_19596;
var G__19602 = chunk__18893_19597;
var G__19603 = count__18894_19598;
var G__19604 = (i__18895_19599 + (1));
seq__18891_19596 = G__19601;
chunk__18893_19597 = G__19602;
count__18894_19598 = G__19603;
i__18895_19599 = G__19604;
continue;
} else {
var G__19607 = seq__18891_19596;
var G__19608 = chunk__18893_19597;
var G__19609 = count__18894_19598;
var G__19610 = (i__18895_19599 + (1));
seq__18891_19596 = G__19607;
chunk__18893_19597 = G__19608;
count__18894_19598 = G__19609;
i__18895_19599 = G__19610;
continue;
}
} else {
var temp__5457__auto___19611__$1 = cljs.core.seq(seq__18891_19596);
if(temp__5457__auto___19611__$1){
var seq__18891_19612__$1 = temp__5457__auto___19611__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18891_19612__$1)){
var c__4461__auto___19613 = cljs.core.chunk_first(seq__18891_19612__$1);
var G__19615 = cljs.core.chunk_rest(seq__18891_19612__$1);
var G__19616 = c__4461__auto___19613;
var G__19617 = cljs.core.count(c__4461__auto___19613);
var G__19618 = (0);
seq__18891_19596 = G__19615;
chunk__18893_19597 = G__19616;
count__18894_19598 = G__19617;
i__18895_19599 = G__19618;
continue;
} else {
var child_19619 = cljs.core.first(seq__18891_19612__$1);
if(cljs.core.truth_(child_19619)){
node.appendChild(child_19619);


var G__19620 = cljs.core.next(seq__18891_19612__$1);
var G__19621 = null;
var G__19622 = (0);
var G__19623 = (0);
seq__18891_19596 = G__19620;
chunk__18893_19597 = G__19621;
count__18894_19598 = G__19622;
i__18895_19599 = G__19623;
continue;
} else {
var G__19626 = cljs.core.next(seq__18891_19612__$1);
var G__19627 = null;
var G__19628 = (0);
var G__19629 = (0);
seq__18891_19596 = G__19626;
chunk__18893_19597 = G__19627;
count__18894_19598 = G__19628;
i__18895_19599 = G__19629;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19595);
}
}


var G__19633 = cljs.core.next(seq__18873_19584__$1);
var G__19634 = null;
var G__19635 = (0);
var G__19636 = (0);
seq__18873_19529 = G__19633;
chunk__18875_19530 = G__19634;
count__18876_19531 = G__19635;
i__18877_19532 = G__19636;
continue;
} else {
var G__19637 = cljs.core.next(seq__18873_19584__$1);
var G__19638 = null;
var G__19639 = (0);
var G__19640 = (0);
seq__18873_19529 = G__19637;
chunk__18875_19530 = G__19638;
count__18876_19531 = G__19639;
i__18877_19532 = G__19640;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__18903_19641 = shadow.dom._to_svg;
var G__18904_19642 = "string";
var G__18905_19643 = ((function (G__18903_19641,G__18904_19642){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__18903_19641,G__18904_19642))
;
goog.object.set(G__18903_19641,G__18904_19642,G__18905_19643);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__18910_19648 = shadow.dom._to_svg;
var G__18911_19649 = "null";
var G__18912_19650 = ((function (G__18910_19648,G__18911_19649){
return (function (_){
return null;
});})(G__18910_19648,G__18911_19649))
;
goog.object.set(G__18910_19648,G__18911_19649,G__18912_19650);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19651 = arguments.length;
var i__4642__auto___19653 = (0);
while(true){
if((i__4642__auto___19653 < len__4641__auto___19651)){
args__4647__auto__.push((arguments[i__4642__auto___19653]));

var G__19655 = (i__4642__auto___19653 + (1));
i__4642__auto___19653 = G__19655;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq18915){
var G__18916 = cljs.core.first(seq18915);
var seq18915__$1 = cljs.core.next(seq18915);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18916,seq18915__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18925 = arguments.length;
switch (G__18925) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__18932_19663 = shadow.dom.dom_node(el);
var G__18933_19664 = cljs.core.name(event);
var G__18934_19665 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18932_19663,G__18933_19664,G__18934_19665) : shadow.dom.dom_listen.call(null,G__18932_19663,G__18933_19664,G__18934_19665));

if(cljs.core.truth_((function (){var and__4036__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4036__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4036__auto__;
}
})())){
var c__15513__auto___19669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15513__auto___19669,buf,chan,event_fn){
return (function (){
var f__15514__auto__ = (function (){var switch__14929__auto__ = ((function (c__15513__auto___19669,buf,chan,event_fn){
return (function (state_18941){
var state_val_18942 = (state_18941[(1)]);
if((state_val_18942 === (1))){
var state_18941__$1 = state_18941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18941__$1,(2),once_or_cleanup);
} else {
if((state_val_18942 === (2))){
var inst_18937 = (state_18941[(2)]);
var inst_18939 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18941__$1 = (function (){var statearr_18945 = state_18941;
(statearr_18945[(7)] = inst_18937);

return statearr_18945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18941__$1,inst_18939);
} else {
return null;
}
}
});})(c__15513__auto___19669,buf,chan,event_fn))
;
return ((function (switch__14929__auto__,c__15513__auto___19669,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__14930__auto__ = null;
var shadow$dom$state_machine__14930__auto____0 = (function (){
var statearr_18947 = [null,null,null,null,null,null,null,null];
(statearr_18947[(0)] = shadow$dom$state_machine__14930__auto__);

(statearr_18947[(1)] = (1));

return statearr_18947;
});
var shadow$dom$state_machine__14930__auto____1 = (function (state_18941){
while(true){
var ret_value__14931__auto__ = (function (){try{while(true){
var result__14932__auto__ = switch__14929__auto__(state_18941);
if(cljs.core.keyword_identical_QMARK_(result__14932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14932__auto__;
}
break;
}
}catch (e18949){if((e18949 instanceof Object)){
var ex__14933__auto__ = e18949;
var statearr_18951_19673 = state_18941;
(statearr_18951_19673[(5)] = ex__14933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18949;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19674 = state_18941;
state_18941 = G__19674;
continue;
} else {
return ret_value__14931__auto__;
}
break;
}
});
shadow$dom$state_machine__14930__auto__ = function(state_18941){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14930__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14930__auto____1.call(this,state_18941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14930__auto____0;
shadow$dom$state_machine__14930__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14930__auto____1;
return shadow$dom$state_machine__14930__auto__;
})()
;})(switch__14929__auto__,c__15513__auto___19669,buf,chan,event_fn))
})();
var state__15515__auto__ = (function (){var statearr_18953 = (f__15514__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15514__auto__.cljs$core$IFn$_invoke$arity$0() : f__15514__auto__.call(null));
(statearr_18953[(6)] = c__15513__auto___19669);

return statearr_18953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15515__auto__);
});})(c__15513__auto___19669,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
