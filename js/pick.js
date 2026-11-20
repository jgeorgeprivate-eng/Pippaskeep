"use strict";
/* The quotes Pippa learns by heart. On 19 November 2026 the bank was cut from 224 quotes to 78, and five were restored the next day to make these 83, chosen
   for the themes and techniques they show. The other quotes are still in the lesson files and are kept on
   each lesson as moreQuotes. To bring one back, add its id to this list. */
var CORE_QUOTES = (
  'p1 p4 p7 s1 ' +                    /* Owen's Preface, and Stallworthy's opening sentence */
  'd1 d6 d7 d8 d11 d12 ' +               /* Dulce et Decorum Est */
  'di1 di6 di9 di12 ' +               /* Disabled */
  'an1 an3 an5 an11 ' +               /* Anthem for Doomed Youth */
  'se2 se6 se11 ' +               /* The Sentry */
  'sf1 sf2 sf3 sf4 sf5 ' +            /* The Send-Off */
  'fu1 fu5 fu8 fu9 ' +                /* Futility */
  'mn1 mn2 mn3 mn4 ' +                /* Mental Cases */
  'gn1 gn2 ga2 ga4 ga7 gb1 gb7 gc4 gc6 gd3 gd4 ge1 ge2 ge8 gf2 gf3 gf4 gf5 gf7 gg2 gh2 gh6 gi5 ' +   /* The Great Gatsby */
  'ma1 ma4 ma7 ma8 mb2 mb3 mb5 mb7 mb9 mc1 mc2 mc5 mc7 md2 md4 md9 me4 me7 me9 mf1 mf2 mf5 mf7 mf11 mg4 mh3 mi4'   /* Macbeth */
).split(' ');
(function(){
  var keep = {}; CORE_QUOTES.forEach(function(id){ keep[id] = 1; });
  Object.keys(LESSONS).forEach(function(id){
    var L = LESSONS[id]; if(!L.quotes) return;
    L.moreQuotes = L.quotes.filter(function(q){ return !keep[q.id]; });
    L.quotes = L.quotes.filter(function(q){ return keep[q.id]; });
  });
  if(LESSONS['1.2']) LESSONS['1.2'].quotesIntro = 'A quote from the Preface can be used in an essay on any of the seven poems. Each card says who wrote the words: the first three are from Owen’s Preface and the last is Stallworthy’s.';
})();
