"use strict";
/* Pippa's Keep: state, small helpers and the marking of typed quotes. */
var KEY = 'pippas-keep-v1';
function fresh(){ return {coins:0, owned:{camp:1}, lessons:{}, quotes:{}, tests:{}}; }
var state = fresh();
function load(){ try{ var s = JSON.parse(localStorage.getItem(KEY)); if(s && typeof s === 'object'){ state = Object.assign(fresh(), s); state.owned.camp = 1; if(state.lessons['1.3'] && !state.lessons['1.4']){ state.lessons['1.4'] = state.lessons['1.3']; delete state.lessons['1.3']; } } }catch(e){} }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(e){} }
function lessonState(id){ return state.lessons[id] || (state.lessons[id] = {done:false, quizzes:0, best:0}); }
function quoteState(id){ return state.quotes[id] || (state.quotes[id] = {lvl:0, known:false, tries:0}); }

function $(s, el){ return (el || document).querySelector(s); }
function rnd(a,b){ return a+Math.floor(Math.random()*(b-a+1)); }
function pick(a){ return a[rnd(0,a.length-1)]; }
function shuffle(a){ a = a.slice(); for(var i = a.length-1; i > 0; i--){ var j = rnd(0,i), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function sample(a,n){ return shuffle(a).slice(0,n); }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function plural(n, w){ return n+' '+w+(n === 1 ? '' : 's'); }

/* ---------- marking typed quotes ---------- */
// Words only: capitals, punctuation and the style of apostrophes and dashes are ignored.
function words(s){ return String(s).toLowerCase().replace(/[’‘'`]/g,'').replace(/[—–-]/g,' ').replace(/[^a-z0-9àâçéèêëîïôûùüÿœæ ]/g,' ').split(/\s+/).filter(function(w){ return w; }); }
function dist(a,b){ // edit distance between two words
  var m = a.length, n = b.length, d = [], i, j; if(Math.abs(m-n) > 2) return 3;
  for(i = 0; i <= m; i++){ d[i] = [i]; } for(j = 0; j <= n; j++) d[0][j] = j;
  for(i = 1; i <= m; i++) for(j = 1; j <= n; j++) d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1]+(a.charAt(i-1) === b.charAt(j-1) ? 0 : 1));
  return d[m][n];
}
// 2 = same word, 1 = a small spelling slip in a longer word, 0 = different
function wordMatch(a,b){ if(a === b) return 2; var L = Math.max(a.length,b.length), d = dist(a,b); return (L >= 5 && d <= 1) || (L >= 9 && d <= 2) ? 1 : 0; }
// Lines up the typed words against the target words in order. Returns, for each target word, 2, 1 or 0.
function align(target, given){
  var m = target.length, n = given.length, L = [], i, j;
  for(i = 0; i <= m; i++){ L[i] = []; for(j = 0; j <= n; j++) L[i][j] = 0; }
  for(i = m-1; i >= 0; i--) for(j = n-1; j >= 0; j--) L[i][j] = wordMatch(target[i],given[j]) ? L[i+1][j+1]+1 : Math.max(L[i+1][j], L[i][j+1]);
  var out = [], used = 0; i = 0; j = 0;
  while(i < m){
    if(j < n && wordMatch(target[i],given[j]) && L[i][j] === L[i+1][j+1]+1){ out.push(wordMatch(target[i],given[j])); used++; i++; j++; }
    else if(j < n && L[i][j+1] >= L[i+1][j]) j++;
    else { out.push(0); i++; }
  }
  return {marks:out, hit:used, extra:n-used};
}
// Marks a typed answer against the words it should contain. ok means close enough to count as word for word.
function markText(targetText, givenText){
  var t = words(targetText), g = words(givenText), a = align(t,g), need = t.length <= 4 ? t.length : Math.ceil(t.length*0.9);
  return {ok:a.hit >= need && a.extra <= Math.max(1, Math.floor(t.length*0.15)), marks:a.marks, hit:a.hit, total:t.length, slips:a.marks.filter(function(x){ return x === 1; }).length};
}
// The quote as html with the words that were missed or misspelt marked. from = index of the first word that was asked for.
function shownQuote(text, marks, from){
  var k = 0;
  return text.split(/(\s+|—|–)/).map(function(tok){
    if(!words(tok).length) return esc(tok);
    var parts = words(tok), worst = 2; parts.forEach(function(){ var idx = k++; if(idx >= from){ var mk = marks[idx-from]; if(mk < worst) worst = mk; } });
    return worst === 2 ? esc(tok) : '<span class="'+(worst ? 'near' : 'miss')+'">'+esc(tok)+'</span>';
  }).join('');
}
