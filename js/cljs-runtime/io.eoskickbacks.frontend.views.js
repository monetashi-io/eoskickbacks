goog.provide('io.eoskickbacks.frontend.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('io.eoskickbacks.frontend.routes');
goog.require('re_frame.core');
io.eoskickbacks.frontend.views.home = (function io$eoskickbacks$frontend$views$home(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Home"], null);
});
io.eoskickbacks.frontend.views.pages = (function io$eoskickbacks$frontend$views$pages(page_name){
var G__18393 = page_name;
var G__18393__$1 = (((G__18393 instanceof cljs.core.Keyword))?G__18393.fqn:null);
switch (G__18393__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [io.eoskickbacks.frontend.views.home], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [io.eoskickbacks.frontend.views.home], null);

}
});
io.eoskickbacks.frontend.views.render = (function io$eoskickbacks$frontend$views$render(){
var active_page = cljs.core.deref((function (){var G__18394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18394) : re_frame.core.subscribe.call(null,G__18394));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [io.eoskickbacks.frontend.views.pages,active_page], null)], null);
});

//# sourceMappingURL=io.eoskickbacks.frontend.views.js.map
