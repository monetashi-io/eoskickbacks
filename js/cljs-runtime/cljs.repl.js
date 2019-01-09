goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15435){
var map__15436 = p__15435;
var map__15436__$1 = (((((!((map__15436 == null))))?(((((map__15436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15436):map__15436);
var m = map__15436__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15436__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15450_15517 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15451_15518 = null;
var count__15452_15519 = (0);
var i__15453_15520 = (0);
while(true){
if((i__15453_15520 < count__15452_15519)){
var f_15526 = chunk__15451_15518.cljs$core$IIndexed$_nth$arity$2(null,i__15453_15520);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15526], 0));


var G__15527 = seq__15450_15517;
var G__15528 = chunk__15451_15518;
var G__15529 = count__15452_15519;
var G__15530 = (i__15453_15520 + (1));
seq__15450_15517 = G__15527;
chunk__15451_15518 = G__15528;
count__15452_15519 = G__15529;
i__15453_15520 = G__15530;
continue;
} else {
var temp__5457__auto___15534 = cljs.core.seq(seq__15450_15517);
if(temp__5457__auto___15534){
var seq__15450_15535__$1 = temp__5457__auto___15534;
if(cljs.core.chunked_seq_QMARK_(seq__15450_15535__$1)){
var c__4461__auto___15538 = cljs.core.chunk_first(seq__15450_15535__$1);
var G__15539 = cljs.core.chunk_rest(seq__15450_15535__$1);
var G__15540 = c__4461__auto___15538;
var G__15541 = cljs.core.count(c__4461__auto___15538);
var G__15542 = (0);
seq__15450_15517 = G__15539;
chunk__15451_15518 = G__15540;
count__15452_15519 = G__15541;
i__15453_15520 = G__15542;
continue;
} else {
var f_15549 = cljs.core.first(seq__15450_15535__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_15549], 0));


var G__15551 = cljs.core.next(seq__15450_15535__$1);
var G__15552 = null;
var G__15553 = (0);
var G__15554 = (0);
seq__15450_15517 = G__15551;
chunk__15451_15518 = G__15552;
count__15452_15519 = G__15553;
i__15453_15520 = G__15554;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15559 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_15559], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_15559)))?cljs.core.second(arglists_15559):arglists_15559)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15472_15574 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15473_15575 = null;
var count__15474_15576 = (0);
var i__15475_15577 = (0);
while(true){
if((i__15475_15577 < count__15474_15576)){
var vec__15479_15584 = chunk__15473_15575.cljs$core$IIndexed$_nth$arity$2(null,i__15475_15577);
var name_15585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15479_15584,(0),null);
var map__15482_15586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15479_15584,(1),null);
var map__15482_15587__$1 = (((((!((map__15482_15586 == null))))?(((((map__15482_15586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15482_15586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15482_15586):map__15482_15586);
var doc_15588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482_15587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482_15587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15585], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15589], 0));

if(cljs.core.truth_(doc_15588)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15588], 0));
} else {
}


var G__15604 = seq__15472_15574;
var G__15605 = chunk__15473_15575;
var G__15606 = count__15474_15576;
var G__15607 = (i__15475_15577 + (1));
seq__15472_15574 = G__15604;
chunk__15473_15575 = G__15605;
count__15474_15576 = G__15606;
i__15475_15577 = G__15607;
continue;
} else {
var temp__5457__auto___15612 = cljs.core.seq(seq__15472_15574);
if(temp__5457__auto___15612){
var seq__15472_15617__$1 = temp__5457__auto___15612;
if(cljs.core.chunked_seq_QMARK_(seq__15472_15617__$1)){
var c__4461__auto___15618 = cljs.core.chunk_first(seq__15472_15617__$1);
var G__15622 = cljs.core.chunk_rest(seq__15472_15617__$1);
var G__15623 = c__4461__auto___15618;
var G__15624 = cljs.core.count(c__4461__auto___15618);
var G__15625 = (0);
seq__15472_15574 = G__15622;
chunk__15473_15575 = G__15623;
count__15474_15576 = G__15624;
i__15475_15577 = G__15625;
continue;
} else {
var vec__15487_15628 = cljs.core.first(seq__15472_15617__$1);
var name_15629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15487_15628,(0),null);
var map__15490_15630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15487_15628,(1),null);
var map__15490_15631__$1 = (((((!((map__15490_15630 == null))))?(((((map__15490_15630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15490_15630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15490_15630):map__15490_15630);
var doc_15632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15490_15631__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15490_15631__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_15629], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_15633], 0));

if(cljs.core.truth_(doc_15632)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_15632], 0));
} else {
}


var G__15641 = cljs.core.next(seq__15472_15617__$1);
var G__15642 = null;
var G__15643 = (0);
var G__15644 = (0);
seq__15472_15574 = G__15641;
chunk__15473_15575 = G__15642;
count__15474_15576 = G__15643;
i__15475_15577 = G__15644;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__15498 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15500 = null;
var count__15501 = (0);
var i__15502 = (0);
while(true){
if((i__15502 < count__15501)){
var role = chunk__15500.cljs$core$IIndexed$_nth$arity$2(null,i__15502);
var temp__5457__auto___15658__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___15658__$1)){
var spec_15661 = temp__5457__auto___15658__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_15661)], 0));
} else {
}


var G__15669 = seq__15498;
var G__15670 = chunk__15500;
var G__15671 = count__15501;
var G__15672 = (i__15502 + (1));
seq__15498 = G__15669;
chunk__15500 = G__15670;
count__15501 = G__15671;
i__15502 = G__15672;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__15498);
if(temp__5457__auto____$1){
var seq__15498__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__15498__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__15498__$1);
var G__15676 = cljs.core.chunk_rest(seq__15498__$1);
var G__15677 = c__4461__auto__;
var G__15678 = cljs.core.count(c__4461__auto__);
var G__15679 = (0);
seq__15498 = G__15676;
chunk__15500 = G__15677;
count__15501 = G__15678;
i__15502 = G__15679;
continue;
} else {
var role = cljs.core.first(seq__15498__$1);
var temp__5457__auto___15682__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___15682__$2)){
var spec_15683 = temp__5457__auto___15682__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_15683)], 0));
} else {
}


var G__15690 = cljs.core.next(seq__15498__$1);
var G__15691 = null;
var G__15692 = (0);
var G__15693 = (0);
seq__15498 = G__15690;
chunk__15500 = G__15691;
count__15501 = G__15692;
i__15502 = G__15693;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
