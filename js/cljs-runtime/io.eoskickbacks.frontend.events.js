goog.provide('io.eoskickbacks.frontend.events');
goog.require('cljs.core');
goog.require('io.eoskickbacks.frontend.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),(function (db){
return io.eoskickbacks.frontend.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (p__18491,p__18492){
var map__18493 = p__18491;
var map__18493__$1 = (((((!((map__18493 == null))))?(((((map__18493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18493):map__18493);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18493__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18494 = p__18492;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18494,(0),null);
var map__18497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18494,(1),null);
var map__18497__$1 = (((((!((map__18497 == null))))?(((((map__18497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18497):map__18497);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,new cljs.core.Keyword(null,"favorited","favorited",-1400766725));
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var set_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page);
var G__18500 = page;
var G__18500__$1 = (((G__18500 instanceof cljs.core.Keyword))?G__18500.fqn:null);
switch (G__18500__$1) {
case "home":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),set_page,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-stats","get-stats",1980302935)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18500__$1)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-stats","get-stats",1980302935),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.PersistentArrayMap.EMPTY);
}));

//# sourceMappingURL=io.eoskickbacks.frontend.events.js.map
