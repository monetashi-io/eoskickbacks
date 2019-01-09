goog.provide('io.eoskickbacks.frontend.routes');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('pushy.core');
goog.require('re_frame.core');
io.eoskickbacks.frontend.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 7, ["",new cljs.core.Keyword(null,"home","home",-74557309),"team",new cljs.core.Keyword(null,"team","team",1355747699),"stats",new cljs.core.Keyword(null,"stats","stats",-85643011),"why",new cljs.core.Keyword(null,"register","register",1968522516),"settings",new cljs.core.Keyword(null,"settings","settings",1556144875),"news/",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850)], null),new cljs.core.Keyword(null,"news","news",-811837442)]),"check-rewards/",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eos-account","eos-account",-1046431630)], null),new cljs.core.PersistentArrayMap(null, 2, ["",new cljs.core.Keyword(null,"profile","profile",-545963874),"/txs",new cljs.core.Keyword(null,"profile-transactions","profile-transactions",-754828674)], null)])], null)], null);
io.eoskickbacks.frontend.routes.parse_url = (function io$eoskickbacks$frontend$routes$parse_url(url){
return bidi.bidi.match_route(io.eoskickbacks.frontend.routes.routes,url);
});
io.eoskickbacks.frontend.routes.dispatch_route = (function io$eoskickbacks$frontend$routes$dispatch_route(matched_route){
var G__18323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(matched_route),new cljs.core.Keyword(null,"news","news",-811837442),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(matched_route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"slug","slug",2029314850)], null)),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(matched_route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"eos-account","eos-account",-1046431630)], null)),new cljs.core.Keyword(null,"profile-transactions","profile-transactions",-754828674),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(matched_route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"eos-account","eos-account",-1046431630)], null))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18323) : re_frame.core.dispatch.call(null,G__18323));
});
io.eoskickbacks.frontend.routes.start_BANG_ = (function io$eoskickbacks$frontend$routes$start_BANG_(){
return pushy.core.start_BANG_(pushy.core.pushy(io.eoskickbacks.frontend.routes.dispatch_route,io.eoskickbacks.frontend.routes.parse_url));
});
io.eoskickbacks.frontend.routes.url_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,io.eoskickbacks.frontend.routes.routes);
io.eoskickbacks.frontend.routes.history = pushy.core.pushy(io.eoskickbacks.frontend.routes.dispatch_route,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.match_route,io.eoskickbacks.frontend.routes.routes));
io.eoskickbacks.frontend.routes.set_token_BANG_ = (function io$eoskickbacks$frontend$routes$set_token_BANG_(token){
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2(io.eoskickbacks.frontend.routes.history,token);
});

//# sourceMappingURL=io.eoskickbacks.frontend.routes.js.map
