goog.provide('io.eoskickbacks.frontend.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('io.eoskickbacks.frontend.routes');
goog.require('io.eoskickbacks.frontend.events');
goog.require('io.eoskickbacks.frontend.subs');
goog.require('io.eoskickbacks.frontend.views');
io.eoskickbacks.frontend.core.main = (function io$eoskickbacks$frontend$core$main(){
io.eoskickbacks.frontend.routes.start_BANG_();

var G__18501_18503 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__18501_18503) : re_frame.core.dispatch_sync.call(null,G__18501_18503));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [io.eoskickbacks.frontend.views.render], null),document.getElementById("app"));
});
goog.exportSymbol('io.eoskickbacks.frontend.core.main', io.eoskickbacks.frontend.core.main);

//# sourceMappingURL=io.eoskickbacks.frontend.core.js.map
