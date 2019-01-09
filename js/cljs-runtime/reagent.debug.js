goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__16663__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16664__i = 0, G__16664__a = new Array(arguments.length -  0);
while (G__16664__i < G__16664__a.length) {G__16664__a[G__16664__i] = arguments[G__16664__i + 0]; ++G__16664__i;}
  args = new cljs.core.IndexedSeq(G__16664__a,0,null);
} 
return G__16663__delegate.call(this,args);};
G__16663.cljs$lang$maxFixedArity = 0;
G__16663.cljs$lang$applyTo = (function (arglist__16666){
var args = cljs.core.seq(arglist__16666);
return G__16663__delegate(args);
});
G__16663.cljs$core$IFn$_invoke$arity$variadic = G__16663__delegate;
return G__16663;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__16667__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16668__i = 0, G__16668__a = new Array(arguments.length -  0);
while (G__16668__i < G__16668__a.length) {G__16668__a[G__16668__i] = arguments[G__16668__i + 0]; ++G__16668__i;}
  args = new cljs.core.IndexedSeq(G__16668__a,0,null);
} 
return G__16667__delegate.call(this,args);};
G__16667.cljs$lang$maxFixedArity = 0;
G__16667.cljs$lang$applyTo = (function (arglist__16669){
var args = cljs.core.seq(arglist__16669);
return G__16667__delegate(args);
});
G__16667.cljs$core$IFn$_invoke$arity$variadic = G__16667__delegate;
return G__16667;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
