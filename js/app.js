"use strict";
/* Pippa's Keep: screens and actions. */
var view = 'castle', cur = null, ui = {note:null, stage:0, step:0, person:null, aloud:false}, test = null, quiz = null, recall = null, story = null, preview = false, scrollMem = {}, openPart = {0:true}, timers = {};
var COIN = '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8.5" fill="#e3a61f" stroke="#1c2333" stroke-width="1.8"/><path d="M10 5.5 l1.4 3 l3.2 .3 l-2.4 2.1 l.8 3.2 l-3 -1.8 l-3 1.8 l.8 -3.2 l-2.4 -2.1 l3.2 -.3 Z" fill="#fff7dc" stroke="#1c2333" stroke-width="1"/></svg>';
var QUILL = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 17 C5 9 10 4 17 3 C16 10 11 15 5 15 Z" fill="#fff" stroke="#1c2333" stroke-width="1.8" stroke-linejoin="round"/><path d="M3 17 L12 8" stroke="#1c2333" stroke-width="1.6" stroke-linecap="round"/></svg>';
var BOOK = '<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true" style="flex:none"><path d="M5 9 Q13 5 20 9 Q27 5 35 9 V32 Q27 28 20 32 Q13 28 5 32 Z" fill="#fbf8ee" stroke="#1c2333" stroke-width="2" stroke-linejoin="round"/><path d="M20 9 V32 M9 15 h7 M9 20 h7 M24 15 h7 M24 20 h7" stroke="#1c2333" stroke-width="1.6" stroke-linecap="round"/></svg>';
var RAVEN = '<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true" style="flex:none"><ellipse cx="20" cy="24" rx="11" ry="12" fill="#1c2333"/><circle cx="22" cy="12" r="8" fill="#1c2333"/><path d="M29 11 l9 3 l-9 3 Z" fill="#e3a61f" stroke="#1c2333" stroke-width="1.2" stroke-linejoin="round"/><circle cx="24" cy="10.5" r="2.2" fill="#fff"/><circle cx="24.6" cy="10.8" r="1" fill="#1c2333"/><path d="M10 24 q-8 4 -6 12 q6 -2 10 -6" fill="#1c2333"/><path d="M17 35 v4 M23 35 v4" stroke="#e3a61f" stroke-width="2" stroke-linecap="round"/></svg>';

/* ---------- lookups ---------- */
function lessonId(pi, li){ return (pi+1)+'.'+(li+1); }
function orderedIds(){ var ids = []; PARTS.forEach(function(p,pi){ p.lessons.forEach(function(t,li){ ids.push(lessonId(pi,li)); }); }); return ids; }
function nextTarget(id){ var k = storyFor(id); if(k) return {act:'story:'+k, label:STORIES[k].title}; if(LESSONS[id]) return {act:'lesson:'+id, label:'lesson '+id+', '+LESSONS[id].title}; return null; }
/* Where "Next" goes after the quiz for lesson id: the next lesson or story in the same part, then that part's test if it is not passed, then the next part. */
function nextAfter(id){
  var ids = orderedIds(), i = ids.indexOf(id), pi = partOf(id), j, t;
  if(i < 0) return null;
  for(j = i+1; j < ids.length && partOf(ids[j]) === pi; j++){ t = nextTarget(ids[j]); if(t) return t; }
  if(!testPassed(pi+1) && testReady(pi)) return {act:'test:'+pi, label:'the '+PARTS[pi].name.replace(/^The /,'')+' test'};
  for(; j < ids.length; j++){ t = nextTarget(ids[j]); if(t) return t; }
  return null;
}
function nextPart(pi){ var ids = orderedIds(), j, t; for(j = 0; j < ids.length; j++) if(partOf(ids[j]) === pi+1){ t = nextTarget(ids[j]); if(t) return t; } return null; }
function storyFor(id){ for(var k in STORIES) if(STORIES[k].lesson === id) return k; return null; }
function allQuotes(){ var out = []; orderedIds().forEach(function(id){ ((LESSONS[id] || {}).quotes || []).forEach(function(q){ out.push({q:q, lesson:id}); }); }); return out; }
function knownCount(){ return allQuotes().filter(function(x){ return quoteState(x.q.id).lvl >= 3; }).length; }
function findQuote(id){ return allQuotes().filter(function(x){ return x.q.id === id; })[0]; }
function testPassed(p){ return !!(state.tests[p] && state.tests[p].passed); }
function pips(lvl){ return '<span class="pips" aria-label="Level '+lvl+' of 3">'+[1,2,3].map(function(i){ return '<i'+(i <= lvl ? ' class="on"' : '')+'></i>'; }).join('')+'</span>'; }
function toast(msg){ var t = $('#toast'); if(!t){ t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role','status'); document.body.appendChild(t); } t.textContent = msg; t.hidden = false; clearTimeout(timers.toast); timers.toast = setTimeout(function(){ t.hidden = true; }, 2600); }
function earn(n, why){ if(!n) return; state.coins += n; save(); toast('+'+n+' coins'+(why ? ': '+why : '')); }
// One maze key for each piece of study finished, once the hedge maze has been built.
function earnKey(){ if(!state.owned.maze) return; state.keys = (state.keys || 0)+1; save(); var t = $('#toast'); toast(t && !t.hidden ? t.textContent+' · +1 maze key' : '+1 maze key'); }

/* ---------- castle ---------- */
function nextStep(){
  var ids = orderedIds().filter(function(id){ return LESSONS[id] || storyFor(id); }), i, k;
  for(i = 0; i < ids.length; i++) if(!lessonState(ids[i]).done){
    k = storyFor(ids[i]);
    if(k) return '<p>Watch '+STORIES[k].title+'. It tells the whole story and says what each person feels. Watching it earns 20 coins.</p><div><button class="btn" data-act="story:'+k+'">Watch the story</button></div>';
    return '<p>Next is lesson '+ids[i]+', '+LESSONS[ids[i]].title+'. Finishing it earns 20 coins.</p><div><button class="btn" data-act="lesson:'+ids[i]+'">Open the lesson</button></div>';
  }
  for(i = 0; i < ids.length; i++) if(!lessonState(ids[i]).quizzes) return '<p>Try the quiz for lesson '+ids[i]+'. Each correct answer earns 10 coins.</p><div><button class="btn" data-act="quiz:'+ids[i]+'">Start the quiz</button></div>';
  var all = allQuotes(); k = knownCount();
  if(k < all.length) return '<p>You know '+k+' of '+all.length+' quotes by heart. Each quote you move up a level earns coins.</p><div><button class="btn" data-act="recall:all">Practise quotes</button></div>';
  return '<p>You know every quote that has been built so far. Spend your coins in the shop.</p><div><button class="btn" data-act="go:shop">Open the shop</button></div>';
}
function vCastle(){
  var owned = {}; if(preview) ITEMS.forEach(function(it){ owned[it.id] = 1; }); else owned = state.owned;
  var n = ITEMS.filter(function(it){ return state.owned[it.id]; }).length, all = allQuotes();
  var mz = state.maze, keys = state.keys || 0;
  return '<div class="scene">'+sceneSVG(owned, !preview && !!state.owned.maze)+'</div>'+
    (preview ? '<p class="small muted">This is the finished castle. Your own castle has '+n+' of '+ITEMS.length+' things built.</p>' : '')+
    '<div class="card"><h2>What to do next</h2>'+nextStep()+'</div>'+
    (state.owned.maze && !preview ? '<div class="card flat"><div class="row between"><b>Hedge maze</b><span class="chip gold">'+plural(keys,'maze key')+'</span></div><p class="small">'+(mz && !mz.solved ? 'You have a maze to finish.' : keys ? 'A key opens one new maze.' : 'Finish a lesson, a quiz or a quote practice to earn a key.')+'</p><div><button class="btn plain" data-act="go:maze">Enter the maze</button></div></div>' : '')+
    '<div class="card flat"><div class="row between"><b>Quotes known by heart</b><span class="chip gold">'+knownCount()+' of '+all.length+'</span></div><div class="bar"><i style="width:'+(all.length ? knownCount()/all.length*100 : 0)+'%"></i></div>'+
    '<div class="row between"><b>Castle built</b><span class="chip">'+n+' of '+ITEMS.length+'</span></div><div class="bar"><i style="width:'+(n/ITEMS.length*100)+'%"></i></div></div>'+
    '<div class="row"><button class="btn plain" data-act="preview">'+(preview ? 'Back to my castle' : 'See the finished castle')+'</button><button class="btn plain" data-act="go:about">How the Keep works</button></div>';
}

/* ---------- learn ---------- */
function vLearn(){
  var s = '<h1>Learn</h1><p class="small muted">The castle has three parts, one for each text. Every lesson is open as soon as it is built. Passing the test for a part unlocks a special building.</p>';
  PARTS.forEach(function(p, pi){
    var done = p.lessons.filter(function(_, li){ return lessonState(lessonId(pi,li)).done; }).length;
    s += '<details class="part" data-part="'+pi+'"'+(openPart[pi] ? ' open' : '')+'><summary><b>'+(pi+1)+'. '+p.name+'</b><span class="small muted">'+p.text+' · '+done+' of '+p.lessons.length+' lessons finished</span></summary><ul>';
    p.lessons.forEach(function(t, li){
      var id = lessonId(pi,li), L = LESSONS[id], sk = storyFor(id), st = lessonState(id), btns, status = '';
      if(L){ var nq = (L.quotes || []).length; btns = '<button class="btn" data-act="lesson:'+id+'">Open</button><button class="btn plain" data-act="quiz:'+id+'">Quiz</button>'+(nq ? '<button class="btn plain" data-act="recall:'+id+'">Quotes</button>' : '');
        var k = (L.quotes || []).filter(function(q){ return quoteState(q.id).lvl >= 3; }).length;
        status = [st.done ? 'Lesson read' : '', st.quizzes ? 'Best quiz '+st.best+' of 5' : '', nq ? k+' of '+nq+' quotes by heart' : ''].filter(function(x){ return x; }).join(' · '); }
      else if(sk){ btns = '<button class="btn" data-act="story:'+sk+'">Watch</button><button class="btn plain" data-act="quiz:'+id+'">Quiz</button>'; status = [st.done ? 'Watched' : '', st.quizzes ? 'Best quiz '+st.best+' of 5' : ''].filter(function(x){ return x; }).join(' · '); }
      else btns = '<span class="chip dim">Not built yet</span>';
      s += '<li><span><span class="lnum">'+id+'</span>'+t+(status ? '<br><span class="small muted">'+status+'</span>' : '')+'</span><span class="row">'+btns+'</span></li>';
    });
    s += '<li><span><b>'+p.name+' test</b><br><span class="small muted">'+(testPassed(pi+1) ? 'Passed. Best score '+state.tests[pi+1].best+' of 20.' : '20 questions. Passing unlocks the '+itemById(p.reward).name.toLowerCase().replace(/^the /,'')+' and earns 100 coins.'+(state.tests[pi+1] ? ' Best so far '+state.tests[pi+1].best+' of 20.' : ''))+'</span></span><span class="row">'+(testReady(pi) ? '<button class="btn" data-act="test:'+pi+'">'+(state.tests[pi+1] ? 'Take it again' : 'Take the test')+'</button>' : '<span class="chip dim">Not built yet</span>')+'</span></li></ul></details>';
  });
  return s;
}

/* ---------- lesson ---------- */
function lineNo(L, idx){ var n = 0; for(var i = 0; i <= idx; i++) if(L.poem.lines[i] !== '') n++; return n; }
function poemHTML(L){
  var st = ui.stage ? L.stages[ui.stage-1] : null, s = '';
  L.poem.lines.forEach(function(line, idx){
    if(line === ''){ s += '<div class="gapline"></div>'; return; }
    var n = lineNo(L, idx), open = null;
    var html = esc(line).replace(/\[\[(.+?)\|(\w+)\]\]/g, function(_, ph, key){ if(ui.note === key) open = key; return '<span role="button" tabindex="0" aria-expanded="'+(ui.note === key)+'" class="mk'+(ui.note === key ? ' on' : '')+'" data-act="note:'+key+'">'+ph+'</span>'; });
    s += '<div class="ln'+(st && (n < st.lines[0] || n > st.lines[1]) ? ' dim' : '')+'"><i>'+(L.poem.prose ? '' : (n % 5 === 0 || n === 1 ? n : ''))+'</i><span>'+html+'</span>'+(open ? '<div class="pnote"><b>'+L.poem.notes[open][0]+'</b>'+L.poem.notes[open][1]+'</div>' : '')+'</div>';
  });
  return s;
}
function stageHTMLInfo(L){
  if(!ui.stage) return '<p>Move the slider to go through the four stages of the poem. The lines for each stage are picked out in the poem above.</p>';
  var st = L.stages[ui.stage-1];
  return '<h3>'+ui.stage+'. '+st.name+' <span class="chip">Lines '+st.lines[0]+' to '+st.lines[1]+'</span></h3><p>'+st.text+'</p>'+
    '<div class="meter">Pace<span><i style="width:'+st.pace+'%"></i></span></div><div class="meter">Anger<span><i style="width:'+st.anger+'%;background:var(--gules)"></i></span></div>'+
    '<div class="tablewrap"><table class="t"><tr><th>Feeling</th><td>'+st.feel+'</td></tr><tr><th>Tense</th><td>'+st.tense+'</td></tr><tr><th>Speaks to</th><td>'+st.to+'</td></tr></table></div>';
}
function quoteCard(q){ var qs = quoteState(q.id);
  return '<div class="q"><blockquote>“'+esc(q.t)+'”</blockquote><div class="meta"><span>'+q.ref+'</span><span class="chip">'+q.tech+'</span>'+pips(qs.lvl)+'</div><p class="small"><b>What it means:</b> '+q.means+'</p></div>'; }
var AUTHOR = ['Owen','Fitzgerald','Shakespeare'], TEXTNAME = ['The poem','The book','The play'];
function partOf(id){ return +String(id).split('.')[0]-1; }
function stepsInfo(L){
  var S = L.steps, it = S.items[ui.step];
  return '<h3>'+(ui.step+1)+'. '+it[0]+'</h3><p>'+it[1]+'</p>'+(it[2] ? '<p class="small"><b>'+(S.lab || 'What people feel')+':</b> '+it[2]+'</p>' : '');
}
function personInfo(L){
  if(!ui.person) return '<p class="small muted">Tap a name to see who the person is, what they want and how they are connected to the others.</p>';
  var P = L.people.filter(function(x){ return x.id === ui.person; })[0], byId = {};
  L.people.forEach(function(x){ byId[x.id] = x.name; });
  return '<h3>'+P.name+'</h3><p>'+P.who+'</p>'+(P.wants ? '<p><b>Wants:</b> '+P.wants+'</p>' : '')+(P.feels ? '<p><b>Feels:</b> '+P.feels+'</p>' : '')+
    (P.links && P.links.length ? '<ul class="plain">'+P.links.map(function(l){ return '<li><button class="chip linkchip" data-act="person:'+l[0]+'">'+byId[l[0]]+'</button> '+l[1]+'</li>'; }).join('')+'</ul>' : '');
}
function peopleHTML(L){
  return '<div class="row chips">'+L.people.map(function(P){ return '<button class="chip pchip'+(ui.person === P.id ? ' on' : '')+'" data-act="person:'+P.id+'">'+P.name+'</button>'; }).join('')+'</div><div id="personinfo" class="lesson pinfo">'+personInfo(L)+'</div>';
}
function aloudHTML(L){
  var A = L.aloud;
  return '<p class="small muted">'+A.ref+'. Read it aloud. Breathe at each <span class="brk">/</span> mark and lean on the words in bold.</p><div class="aloud">'+A.lines.map(function(l){
    var t = esc(l[0]).replace(/\*(.+?)\*/g,'<b>$1</b>').replace(/ \/ /g,' <span class="brk">/</span> ');
    return '<div class="al"><span class="at">'+t+'</span>'+(ui.aloud ? '<span class="am">'+l[1]+'</span>' : '')+'</div>'; }).join('')+'</div>'+
    '<div><button class="btn plain" data-act="aloud">'+(ui.aloud ? 'Hide the meanings' : 'Show what each line means')+'</button></div>'+(A.tip ? '<p class="small">'+A.tip+'</p>' : '');
}
function stepsCard(L){ return '<div class="card"><h3>'+L.steps.h+'</h3><div class="slider"><label for="step">Step <span id="steplab">'+(ui.step+1)+' of '+L.steps.items.length+'</span></label><input type="range" id="step" min="0" max="'+(L.steps.items.length-1)+'" step="1" value="'+ui.step+'"></div>'+
    '<div class="row"><button class="btn plain" data-act="stepPrev">Back</button><button class="btn plain" data-act="stepNext">Next</button><button class="btn plain" data-act="playSteps" id="playsteps">Play</button></div><div id="stepinfo" class="lesson pinfo">'+stepsInfo(L)+'</div></div>'; }
function tableHTML(t){ return '<h2>'+t.h+'</h2>'+(t.intro ? '<p>'+t.intro+'</p>' : '')+'<div class="tablewrap"><table class="t"><tr>'+t.cols.map(function(c){ return '<th>'+c+'</th>'; }).join('')+'</tr>'+
  t.rows.map(function(r){ return '<tr>'+r.map(function(c){ return '<td>'+c+'</td>'; }).join('')+'</tr>'; }).join('')+'</table></div>'; }
function vLesson(){
  var L = LESSONS[cur], st = lessonState(cur), pi = partOf(cur), s, hasQ = L.quotes && L.quotes.length, mh = L.meansH || [];
  s = '<div><button class="btn plain" data-act="go:learn">Back to Learn</button></div><h1>'+L.title+'</h1><div class="lesson">'+(L.portrait ? '<figure class="portrait"><img src="'+L.portrait.src+'" alt="'+L.portrait.alt+'" width="333" height="518"><figcaption>'+L.portrait.cap+'</figcaption></figure>' : '')+L.intro.map(function(p){ return '<p>'+p+'</p>'; }).join('');
  if(L.layout){
  var parts = {
    poem:function(){ return '<div class="card"><div class="row between"><h3>'+(L.poem.title || 'The poem')+'</h3><span class="small muted">Tap an underlined phrase</span></div><div class="poem'+(L.poem.prose ? ' prose' : '')+'" id="poem">'+poemHTML(L)+'</div><p class="small muted">'+L.poem.edition+'</p></div>'; },
    stages:function(){ return '<div class="card"><h3>The four stages of the poem</h3><div class="slider"><label for="stage">Stage <span id="stagelab">'+(ui.stage ? ui.stage+' of 4' : 'Whole poem')+'</span></label><input type="range" id="stage" min="0" max="4" step="1" value="'+ui.stage+'"></div>'+
      '<div><button class="btn plain" data-act="playStages" id="playbtn">Play the four stages</button></div><div id="stageinfo" class="lesson">'+stageHTMLInfo(L)+'</div></div>'; },
    sections:function(){ return secHTML(L.sections); },
    after:function(){ return secHTML(L.after); },
    means:function(){ var h = L.meansHead || {};
      return '<h2>'+(h.h || 'What the poem says and what Owen means')+'</h2><p>'+(h.intro || 'Owen does not always state his meaning directly. Here it is stated directly. These five ideas are the ones to learn.')+'</p>'+
        '<div class="tablewrap"><table class="t"><tr><th>'+(h.cols ? h.cols[0] : 'The poem says')+'</th><th>'+(h.cols ? h.cols[1] : 'Owen means')+'</th></tr>'+L.means.map(function(m){ return '<tr><td>'+m[0]+'</td><td><b>'+m[1]+'</b></td></tr>'; }).join('')+'</table></div>'; },
    tables:function(){ return L.tables.map(tableHTML).join(''); },
    steps:function(){ return stepsCard(L); },
    points:function(){ var P = L.points;
      return '<h2>'+P.h+'</h2>'+P.intro.map(function(p){ return '<p>'+p+'</p>'; }).join('')+'<div class="qb">'+P.items.map(function(it, n){
        return '<div class="pt"><div class="meta"><span class="chip blue">'+it.page+'</span><span>Point '+(n+1)+' of '+P.items.length+'</span></div><p><b>Stallworthy says:</b> '+it.say+'</p>'+(it.more ? '<p>'+it.more+'</p>' : '')+
          '<p class="small"><b>Use it with:</b> '+it.use+'</p><p class="small muted">In the book: the sentence that starts “'+it.find+'”</p></div>'; }).join('')+'</div>'+(P.note ? '<p class="small muted">'+P.note+'</p>' : ''); },
    remember:function(){ return '<p class="note"><b>Remember:</b> '+L.remember+'</p>'; },
    quotes:function(){ return '<h2>Quote bank</h2><p>'+(L.quotesIntro || 'These are the lines to know by heart. The three dots show how well you know each one.')+'</p><div class="qb">'+L.quotes.map(quoteCard).join('')+'</div>'; }
  };
    L.layout.forEach(function(k){ var m = /^table(\d)$/.exec(k); s += m ? tableHTML(L.tables[+m[1]]) : parts[k](); });
    return s+finishCard(L, st, hasQ)+'</div>';
  }
  if(L.poem) s += '<div class="card"><div class="row between"><h3>'+(L.poem.h || 'The poem')+'</h3><span class="small muted">Tap an underlined phrase</span></div><div class="poem'+(L.poem.prose ? ' prose' : '')+'" id="poem">'+poemHTML(L)+'</div>'+(L.poem.edition ? '<p class="small muted">'+L.poem.edition+'</p>' : '')+'</div>';
  if(L.stages) s += '<div class="card"><h3>The four stages of the poem</h3><div class="slider"><label for="stage">Stage <span id="stagelab">'+(ui.stage ? ui.stage+' of 4' : 'Whole poem')+'</span></label><input type="range" id="stage" min="0" max="4" step="1" value="'+ui.stage+'"></div>'+
    '<div><button class="btn plain" data-act="playStages" id="playbtn">Play the four stages</button></div><div id="stageinfo" class="lesson">'+stageHTMLInfo(L)+'</div></div>';
  if(L.steps) s += stepsCard(L);
  if(L.people) s += '<div class="card"><h3>'+(L.peopleH || 'Who is who')+'</h3><div id="people">'+peopleHTML(L)+'</div></div>';
  if(L.aloud) s += '<div class="card"><h3>Read it aloud: '+L.aloud.title+'</h3><div id="aloud">'+aloudHTML(L)+'</div></div>';
  (L.sections || []).forEach(function(sec){ s += '<h2>'+sec.h+'</h2>'+sec.p.map(function(p){ return '<p>'+p+'</p>'; }).join('')+(sec.note ? '<p class="note">'+sec.note+'</p>' : ''); });
  if(L.means) s += '<h2>'+(mh[0] || 'What '+TEXTNAME[pi].toLowerCase()+' says and what '+AUTHOR[pi]+' means')+'</h2><p>'+(mh[1] || AUTHOR[pi]+' does not always state the meaning directly. Here it is stated directly. These are the ideas to learn.')+'</p>'+
    '<div class="tablewrap"><table class="t"><tr><th>'+(mh[2] || TEXTNAME[pi]+' says')+'</th><th>'+(mh[3] || AUTHOR[pi]+' means')+'</th></tr>'+L.means.map(function(m){ return '<tr><td>'+m[0]+'</td><td><b>'+m[1]+'</b></td></tr>'; }).join('')+'</table></div>';
  if(L.remember) s += '<p class="note"><b>Remember:</b> '+L.remember+'</p>';
  if(L.watch) s += watchHTML(L.watch);
  if(hasQ) s += '<h2>Quote bank</h2><p>These are the lines to know by heart. The three dots show how well you know each one.</p><div class="qb">'+L.quotes.map(quoteCard).join('')+'</div>';
  return s+finishCard(L, st, hasQ)+'</div>';
}
function finishCard(L, st, hasQ){
  return '<div class="card"><h3>Finished reading?</h3>'+(st.done ? '<p>You have collected the 20 coins for this lesson.</p>' : '<p>Collect 20 coins, then try the quiz'+(hasQ ? ' and the quote practice' : '')+'.</p><div><button class="btn" data-act="finish">Collect 20 coins</button></div>')+
    '<div class="row"><button class="btn'+(st.done ? '' : ' plain')+'" data-act="quiz:'+cur+'">Start the quiz</button>'+(hasQ ? '<button class="btn'+(st.done ? '' : ' plain')+'" data-act="recall:'+cur+'">Practise the quotes</button>' : '')+'</div></div>';
}
function secHTML(list){ return list.map(function(sec){ return '<h2>'+sec.h+'</h2>'+sec.p.map(function(p){ return p.charAt(0) === '<' ? p : '<p>'+p+'</p>'; }).join('')+(sec.note ? '<p class="note">'+sec.note+'</p>' : ''); }).join(''); }
function watchHTML(w){ return '<div class="card flat"><h3>Watch it on stage</h3><p class="small muted">These open in a new tab. Reading the lines aloud along with the actors is a good way to learn them.</p>'+w.map(function(x){ return '<div><a class="btn plain" href="'+x[2]+'" target="_blank" rel="noopener">'+x[0]+'</a><br><span class="small muted">'+x[1]+'</span></div>'; }).join('')+'</div>'; }
function bindLesson(){
  var el = $('#stage'); if(el) el.addEventListener('input', function(){ ui.stage = +el.value; refreshStage(); });
  var sp = $('#step'); if(sp) sp.addEventListener('input', function(){ ui.step = +sp.value; refreshStep(); });
}
function refreshStep(){ var L = LESSONS[cur]; $('#stepinfo').innerHTML = stepsInfo(L); $('#steplab').textContent = (ui.step+1)+' of '+L.steps.items.length; $('#step').value = ui.step; }
function stopSteps(){ clearInterval(timers.steps); timers.steps = null; var b = $('#playsteps'); if(b) b.textContent = 'Play'; }
function refreshStage(){ var L = LESSONS[cur]; $('#poem').innerHTML = poemHTML(L); $('#stageinfo').innerHTML = stageHTMLInfo(L); $('#stagelab').textContent = ui.stage ? ui.stage+' of 4' : 'Whole poem'; }
function stopStages(){ clearInterval(timers.stages); timers.stages = null; var b = $('#playbtn'); if(b) b.textContent = 'Play the four stages'; }

/* Put something in place of whole words in a quote. fn(i) gives the html for gap i. */
function gapFill(text, gaps, fn){
  var marks = [], t = text;
  gaps.forEach(function(g, i){ var re = new RegExp('(^|[^A-Za-z’])'+g.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?![A-Za-z’])'); t = t.replace(re, function(m, pre){ return pre+'\u0001'+i+'\u0001'; }); });
  return esc(t).replace(/\u0001(\d+)\u0001/g, function(_, i){ return fn(+i); });
}

/* ---------- quiz ---------- */
function gapQuestion(L){
  var q = pick(L.quotes), w = pick(q.gaps), pool = [];
  L.quotes.forEach(function(o){ o.gaps.forEach(function(g){ if(g.toLowerCase() !== w.toLowerCase() && pool.indexOf(g.toLowerCase()) < 0 && q.t.toLowerCase().indexOf(g.toLowerCase()) < 0) pool.push(g.toLowerCase()); }); });
  return ['Which word completes this line?<br><i>“'+gapFill(q.t, [w], function(){ return '_____'; })+'”</i> ('+q.ref+')', w.toLowerCase(), sample(pool,3), 'The line is “'+esc(q.t)+'”. '+q.means];
}
function buildQ(src){ var opts = shuffle([src[1]].concat(src[2])); return {text:src[0], opts:opts, correct:opts.indexOf(src[1]), explain:src[3]}; }
function startQuiz(id){
  var L = LESSONS[id], sk = storyFor(id), src;
  if(L) src = (L.quotes && L.quotes.length) ? sample(L.questions, 4).concat([gapQuestion(L)]) : sample(L.questions, 5); else src = sample(STORIES[sk].questions, 5);
  quiz = {id:id, title:(L ? L.title : STORIES[sk].title)+': quiz', qs:shuffle(src).map(buildQ), i:0, picked:null, score:0, wrong:[], first:!lessonState(id).quizzes, done:false, back:L ? 'lesson:'+id : 'story:'+sk};
  go('quiz', true);
}
function vQuiz(){
  var z = quiz, s, nx, good;
  if(z.done){
    nx = nextAfter(z.id); good = z.score >= z.qs.length-1;
    s = '<h1>'+z.title+'</h1><div class="card"><p class="qtext">'+z.score+' of '+z.qs.length+' correct</p><p>You earned '+z.coins+' coins.</p>'+(nx ? '<p class="small muted">Next is '+nx.label+'.</p>' : '')+'<div class="row">'+(nx && good ? '<button class="btn" data-act="'+nx.act+'">Next</button>' : '')+'<button class="btn'+(nx && good ? ' plain' : '')+'" data-act="quiz:'+z.id+'">Try again</button>'+(nx && !good ? '<button class="btn plain" data-act="'+nx.act+'">Next</button>' : '')+'<button class="btn plain" data-act="'+z.back+'">Back</button><button class="btn plain" data-act="go:shop">Open the shop</button></div></div>';
    if(z.wrong.length) s += '<h2>Questions to look at again</h2>'+z.wrong.map(function(w){ return '<div class="card flat"><p><b>'+w.q.text+'</b></p><p>Your answer: '+w.q.opts[w.picked]+'</p><p>Correct answer: '+w.q.opts[w.q.correct]+'</p><p class="small">'+w.q.explain+'</p></div>'; }).join('');
    return s;
  }
  var q = z.qs[z.i], done = z.picked !== null, ok = done && z.picked === q.correct;
  s = '<div class="row between"><span class="chip blue">Question '+(z.i+1)+' of '+z.qs.length+'</span><button class="btn plain" data-act="'+z.back+'">Leave</button></div><p class="qtext">'+q.text+'</p><div class="opts">'+
    q.opts.map(function(o, i){ return '<button class="opt'+(done && i === q.correct ? ' right' : done && i === z.picked ? ' wrong' : '')+'" data-act="answer:'+i+'"'+(done ? ' disabled' : '')+'>'+o+'</button>'; }).join('')+'</div>';
  if(done) s += '<div class="fb '+(ok ? 'good' : 'bad')+'"><b>'+(ok ? 'Correct.' : 'Not correct.')+'</b><span>'+q.explain+'</span></div><div><button class="btn" data-act="nextQ">'+(z.i+1 < z.qs.length ? 'Next question' : 'See your score')+'</button></div>';
  return s;
}

/* ---------- typed quote recall ---------- */
function startRecall(key){
  var list = (key === 'all' ? allQuotes() : /^part\d$/.test(key) ? allQuotes().filter(function(x){ return partOf(x.lesson) === +key.slice(4); }) : allQuotes().filter(function(x){ return x.lesson === key; }));
  list = shuffle(list).sort(function(a,b){ return quoteState(a.q.id).lvl-quoteState(b.q.id).lvl; }).slice(0,6);
  recall = {key:key, ids:shuffle(list.map(function(x){ return x.q.id; })), i:0, right:0, coins:0, ups:0, res:null, done:false};
  buildPrompt(); go('recall', true);
}
function buildPrompt(){
  var q = findQuote(recall.ids[recall.i]).q, st = quoteState(q.id), lvl = Math.min(3, st.lvl+1), toks = q.t.split(' '), p = {q:q, lvl:lvl};
  if(lvl === 1) p.gaps = sample(q.gaps, Math.min(2, q.gaps.length)).sort(function(a,b){ return q.t.indexOf(a)-q.t.indexOf(b); });
  if(lvl === 2){ p.cut = toks.length <= 3 ? 1 : Math.max(2, Math.round(toks.length*0.4)); p.shown = toks.slice(0,p.cut).join(' '); p.target = toks.slice(p.cut).join(' '); }
  if(lvl === 3) p.target = q.t;
  recall.p = p; recall.res = null;
}
function checkRecall(giveUp){
  var p = recall.p, q = p.q, st = quoteState(q.id), ok, shown, slips = 0, given;
  if(p.lvl === 1){
    var vals = p.gaps.map(function(_, i){ var el = $('#g'+i); return el ? el.value : ''; }), res = p.gaps.map(function(g, i){ var a = words(vals[i]).join(''), b = words(g).join(''); return giveUp ? 0 : wordMatch(b, a); });
    ok = res.every(function(r){ return r > 0; }); slips = res.filter(function(r){ return r === 1; }).length; given = vals.join(', ');
    shown = gapFill(q.t, p.gaps, function(i){ return '<span class="'+(res[i] === 2 ? 'got' : res[i] === 1 ? 'near' : 'miss')+'">'+esc(p.gaps[i])+'</span>'; });
  } else {
    given = giveUp ? '' : ($('#ans') ? $('#ans').value : '');
    var r = markText(p.target, given); ok = !giveUp && r.ok; slips = r.slips;
    shown = shownQuote(q.t, r.marks, p.lvl === 2 ? words(p.shown).length : 0);
  }
  st.tries++;
  var gain = 0;
  if(ok){ recall.right++; if(p.lvl > st.lvl){ st.lvl = p.lvl; gain += 10; recall.ups++; if(p.lvl === 3 && !st.bonus){ st.bonus = true; gain += 10; } } }
  else if(st.lvl >= p.lvl) st.lvl = p.lvl-1;
  state.coins += gain; recall.coins += gain;
  recall.res = {ok:ok, shown:shown, slips:slips, given:given, gain:gain, gaveUp:!!giveUp};
  save(); render(); reveal('#rnext');
}
function vRecall(){
  var r = recall, s;
  if(r.done){
    return '<h1>Quote practice</h1><div class="card"><p class="qtext">'+r.right+' of '+r.ids.length+' correct</p><p>You moved '+plural(r.ups,'quote')+' up a level and earned '+r.coins+' coins.</p><p>You now know '+knownCount()+' of '+allQuotes().length+' quotes by heart.</p>'+
      '<div class="row"><button class="btn" data-act="recall:'+r.key+'">Practise again</button><button class="btn plain" data-act="go:quotes">See all quotes</button><button class="btn plain" data-act="go:shop">Open the shop</button></div></div>';
  }
  var p = r.p, q = p.q, res = r.res, lesson = findQuote(q.id).lesson, attrs = ' autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done"';
  s = '<div class="row between"><span class="chip blue">Quote '+(r.i+1)+' of '+r.ids.length+'</span><span class="chip gold">Level '+p.lvl+': '+['','missing words','finish the line','from memory'][p.lvl]+'</span></div>'+
    '<p class="small muted">'+LESSONS[lesson].title+' · '+q.ref+'</p>';
  if(!res){
    if(p.lvl === 1){ var h = gapFill(q.t, p.gaps, function(i){ return '<input id="g'+i+'" aria-label="Missing word '+(i+1)+'"'+attrs+'>'; });
      s += '<p class="cue">Type the missing '+(p.gaps.length === 1 ? 'word' : 'words')+'.</p><p class="gapq">“'+h+'”</p>'; }
    else if(p.lvl === 2) s += '<p class="cue">Finish the line.</p><p class="given">“'+esc(p.shown)+' …”</p><input class="ans" id="ans" aria-label="The rest of the line"'+attrs+'>';
    else s += '<p class="cue">'+q.cue+'</p><p class="small muted">Type the whole quote, word for word.</p><input class="ans" id="ans" aria-label="The whole quote"'+attrs+'>';
    s += '<div class="row"><button class="btn" data-act="check">Check</button><button class="btn plain" data-act="giveup">Show me the answer</button></div><p class="small muted">Capital letters and punctuation do not matter.</p>';
  } else {
    s += '<div class="fb '+(res.ok ? 'good' : 'bad')+'"><b>'+(res.ok ? (res.slips ? 'Correct, with a spelling to check.' : 'Correct, word for word.') : res.gaveUp ? 'Here is the line.' : 'Not yet.')+'</b>'+
      '<p class="shown">“'+res.shown+'”</p>'+(res.ok || res.gaveUp ? '' : '<span class="small">The words in red were missing or different.'+(res.given ? ' You typed: '+esc(res.given) : '')+'</span>')+
      (res.slips ? '<span class="small">The word with the gold underline was close. Check its spelling.</span>' : '')+'</div>'+
      '<p><b>What it means:</b> '+q.means+' <span class="chip">'+q.tech+'</span></p>'+(res.gain ? '<p class="small muted">+'+res.gain+' coins. This quote is now at level '+quoteState(q.id).lvl+' of 3.</p>' : '')+
      '<div><button class="btn" id="rnext" data-act="rnext">'+(r.i+1 < r.ids.length ? 'Next quote' : 'See your result')+'</button></div>';
  }
  return s;
}

/* ---------- section tests ---------- */
/* What a test question is about. A test mixes questions from every lesson of a part, so each one says where it comes from. */
var CTX = {'1.1':'Wilfred Owen’s life and the First World War', '1.2':'Owen’s Preface and Stallworthy’s introduction', '1.3':'the techniques Owen uses in his poems', '1.11':'themes across Owen’s poems', '1.12':'Owen’s letters home to his mother',
  '2.1':'the whole story of The Great Gatsby', '2.2':'the characters of The Great Gatsby', '2.3':'Fitzgerald and America in the 1920s', '2.4':'Nick Carraway, the narrator of The Great Gatsby', '2.11':'Gatsby and Daisy', '2.12':'Tom, Myrtle, George and Jordan in The Great Gatsby', '2.13':'symbols and settings in The Great Gatsby', '2.14':'the themes of The Great Gatsby',
  '3.1':'the whole story of Macbeth', '3.2':'the characters of Macbeth', '3.3':'Shakespeare, King James and the world of Macbeth', '3.4':'Shakespeare’s language in Macbeth', '3.11':'the character of Macbeth', '3.12':'the character of Lady Macbeth', '3.13':'Banquo, Macduff, Duncan, Malcolm and the witches in Macbeth', '3.14':'themes and imagery in Macbeth'};
function contextFor(id){ if(CTX[id]) return CTX[id]; var L = LESSONS[id], pi = partOf(id); if(!L) return PARTS[pi].text; return pi === 0 ? 'the poem '+L.title : L.title+' of '+PARTS[pi].text; }
function partPools(pi){
  var qs = [], quotes = [];
  Object.keys(LESSONS).forEach(function(id){ if(partOf(id) !== pi) return; var L = LESSONS[id]; (L.questions || []).forEach(function(q){ qs.push({q:q, id:id}); }); (L.quotes || []).forEach(function(q){ if(q.t.split(' ').length >= 5) quotes.push(q); }); });
  for(var k in STORIES) if(partOf(STORIES[k].lesson) === pi) STORIES[k].questions.forEach(function(q){ qs.push({q:q, id:STORIES[k].lesson}); });
  return {qs:qs, quotes:quotes};
}
function testReady(pi){ var P = partPools(pi); return P.qs.length >= 10 && P.quotes.length >= 10; }
function startTest(pi){
  var P = partPools(pi), items = sample(P.qs, 10).map(function(x){ return {type:'mc', q:buildQ(x.q), ctx:contextFor(x.id)}; });
  sample(P.quotes, 10).forEach(function(q){ var toks = q.t.split(' '), cut = Math.max(2, Math.round(toks.length*0.4)); items.push({type:'line', quote:q, shown:toks.slice(0,cut).join(' '), target:toks.slice(cut).join(' '), cut:cut}); });
  test = {pi:pi, items:items, i:0, score:0, res:null, done:false, wrong:[]};
  go('test', true);
}
function vTest(){
  var T = test, P = PARTS[T.pi], s, attrs = ' autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done"';
  if(T.done){
    var pass = T.score >= 14;
    s = '<h1>'+P.name+' test</h1><div class="card"><p class="qtext">'+T.score+' of 20</p><p>'+(pass ? 'You passed. The pass mark is 14.' : 'The pass mark is 14. You can take the test again as often as you like.')+'</p>'+(T.msg ? '<p><b>'+T.msg+'</b></p>' : '')+
      '<div class="row">'+(pass && nextPart(T.pi) ? '<button class="btn" data-act="'+nextPart(T.pi).act+'">Next</button>' : '')+'<button class="btn'+(pass && nextPart(T.pi) ? ' plain' : '')+'" data-act="test:'+T.pi+'">Take it again</button><button class="btn plain" data-act="go:learn">Back to Learn</button>'+(pass ? '<button class="btn plain" data-act="go:shop">Open the shop</button>' : '')+'</div></div>';
    if(T.wrong.length) s += '<h2>Answers to look at again</h2>'+T.wrong.map(function(w){ return '<div class="card flat">'+w+'</div>'; }).join('');
    return s;
  }
  var it = T.items[T.i], res = T.res;
  s = '<div class="row between"><span class="chip blue">Question '+(T.i+1)+' of 20</span><button class="btn plain" data-act="go:learn">Leave</button></div>';
  if(it.type === 'mc'){
    var q = it.q, done = res !== null;
    s += '<p class="small muted">This question is about <b>'+it.ctx+'</b>.</p><p class="qtext">'+q.text+'</p><div class="opts">'+q.opts.map(function(o, i){ return '<button class="opt'+(done && i === q.correct ? ' right' : done && i === res.picked ? ' wrong' : '')+'" data-act="tanswer:'+i+'"'+(done ? ' disabled' : '')+'>'+o+'</button>'; }).join('')+'</div>';
    if(done) s += '<div class="fb '+(res.ok ? 'good' : 'bad')+'"><b>'+(res.ok ? 'Correct.' : 'Not correct.')+'</b><span>'+q.explain+'</span></div>';
  } else {
    var qq = it.quote;
    s += '<p class="small muted">'+LESSONS[findQuote(qq.id).lesson].title+' · '+qq.ref+'</p><p class="cue">Finish the line.</p><p class="given">“'+esc(it.shown)+' …”</p>';
    if(!res) s += '<input class="ans" id="ans" aria-label="The rest of the line"'+attrs+'><div class="row"><button class="btn" data-act="tcheck">Check</button><button class="btn plain" data-act="tskip">I do not know this one</button></div>';
    else s += '<div class="fb '+(res.ok ? 'good' : 'bad')+'"><b>'+(res.ok ? 'Correct.' : 'Not correct.')+'</b><p class="shown">“'+res.shown+'”</p></div><p><b>What it means:</b> '+qq.means+'</p>';
  }
  if(res) s += '<div><button class="btn" id="tnext" data-act="tnext">'+(T.i < 19 ? 'Next question' : 'See your score')+'</button></div>';
  return s;
}
function testMark(ok, note){ if(ok) test.score++; else test.wrong.push(note); }

/* ---------- quotes tab ---------- */
function vQuotes(){
  var all = allQuotes(), k = knownCount(), s = '<h1>Quotes</h1><div class="card"><div class="row between"><b>Known by heart</b><span class="chip gold">'+k+' of '+all.length+'</span></div><div class="bar"><i style="width:'+(all.length ? k/all.length*100 : 0)+'%"></i></div>'+
    '<p class="small">A quote is known by heart when you can type all of it from memory. Each quote goes through three levels: missing words, finish the line, then the whole quote.</p><div><button class="btn" data-act="recall:all">Practise a mixed set</button></div></div>';
  PARTS.forEach(function(p, pi){
    var ids = orderedIds().filter(function(id){ return partOf(id) === pi && LESSONS[id] && LESSONS[id].quotes && LESSONS[id].quotes.length; }); if(!ids.length) return;
    var n = 0, kn = 0; ids.forEach(function(id){ LESSONS[id].quotes.forEach(function(q){ n++; if(quoteState(q.id).lvl >= 3) kn++; }); });
    s += '<h2>'+p.text+'</h2><p class="small muted">'+kn+' of '+n+' known by heart.</p><div><button class="btn plain" data-act="recall:part'+pi+'">Practise quotes from this text</button></div>';
    ids.forEach(function(id){ var L = LESSONS[id], k2 = L.quotes.filter(function(q){ return quoteState(q.id).lvl >= 3; }).length;
      s += '<details class="part"><summary><b>'+L.title+'</b><span class="small muted">'+k2+' of '+L.quotes.length+' known. Tap to see the quotes.</span></summary><div class="qd"><div><button class="btn plain" data-act="recall:'+id+'">Practise these</button></div><div class="qb">'+L.quotes.map(quoteCard).join('')+'</div></div></details>'; });
  });
  return s;
}

/* ---------- shop ---------- */
function vShop(){
  var s = '<h1>Shop</h1><p class="small muted">Spend coins to build the castle. You have '+state.coins+' coins.</p>', kinds = [];
  ITEMS.forEach(function(it){ if(kinds.indexOf(it.kind) < 0) kinds.push(it.kind); });
  kinds.forEach(function(kd){
    s += '<h2>'+kd+'</h2>';
    ITEMS.filter(function(it){ return it.kind === kd; }).forEach(function(it){
      var right, extra = '';
      if(state.owned[it.id]) right = '<span class="chip gold">Built</span>';
      else if(it.lock && !testPassed(it.lock)){ right = '<span class="chip dim">Locked</span>'; extra = 'Opens when you pass the '+PARTS[it.lock-1].name.replace(/^The /,'')+' test.'; }
      else if(it.needs && !state.owned[it.needs]){ right = '<span class="chip dim">Later</span>'; extra = 'Needs the '+itemById(it.needs).name.toLowerCase().replace(/^the /,'')+' first.'; }
      else if(state.coins < it.cost){ right = '<button class="btn" disabled>Buy</button>'; extra = 'You need '+(it.cost-state.coins)+' more coins.'; }
      else right = '<button class="btn" data-act="buy:'+it.id+'">Buy</button>';
      s += '<div class="item"><div class="th">'+thumb(it)+'</div><div><b>'+it.name+'</b><br><span class="small muted">'+it.desc+(extra ? ' '+extra : '')+'</span><br><span class="cost">'+it.cost+' coins</span></div>'+right+'</div>';
    });
  });
  return s;
}

/* ---------- story ---------- */
function vStory(){
  var S = STORIES[story.id], sc = S.scenes[story.i], n = S.scenes.length, last = story.i === n-1, s;
  s = '<div class="row between"><button class="btn plain" data-act="go:learn">Back to Learn</button><span class="chip blue">Scene '+(story.i+1)+' of '+n+'</span></div><h2>'+S.title+'</h2>'+
    '<p class="small muted"><b>'+sc.when+'</b> · '+sc.place+'</p>'+stageHTML(sc)+
    '<div class="row between"><button class="btn plain" data-act="sprev"'+(story.i ? '' : ' disabled')+'>Back</button><button class="btn plain" data-act="splay">'+(timers.story ? 'Pause' : 'Play')+'</button><button class="btn" data-act="snext"'+(last ? ' disabled' : '')+'>Next scene</button></div>'+
    '<div class="card narr"><div class="row" style="flex-wrap:nowrap;align-items:flex-start">'+(S.icon === 'book' ? BOOK : RAVEN)+'<p>'+sc.cap+'</p></div></div>';
  if(sc.who) s += '<div class="card flat"><h3>Who is who</h3>'+sc.who.map(function(w){ return '<p><b>'+w[0]+'.</b> '+w[1]+'</p>'; }).join('')+'</div>';
  if(sc.why) s += '<div class="card flat"><h3>What they feel, and what they do because of it</h3>'+sc.why.map(function(w){ return '<p><b>'+w[0]+'</b> '+(w[3] || 'feels')+' <span class="feelword">'+w[1]+'</span>, so '+w[2]+'</p>'; }).join('')+'</div>';
  s += '<p class="note"><b>Remember:</b> '+sc.key+'</p>';
  if(sc.watch) s += watchHTML(sc.watch);
  if(last) s += '<div class="card"><h3>'+S.endH+'</h3><p>'+S.end+' '+(lessonState(S.lesson).done ? 'You have collected the 20 coins for watching.' : '')+'</p><div class="row">'+(lessonState(S.lesson).done ? '' : '<button class="btn" data-act="sfinish">Collect 20 coins</button>')+'<button class="btn'+(lessonState(S.lesson).done ? '' : ' plain')+'" data-act="quiz:'+S.lesson+'">Check what you remember</button></div></div>';
  return s;
}
function stopStory(){ clearInterval(timers.story); timers.story = null; }

/* ---------- about ---------- */
function vAbout(){
  return '<div><button class="btn plain" data-act="go:castle">Back to the castle</button></div><h1>How the Keep works</h1>'+
    '<p>Pippa’s Keep covers three texts: the war poems of Wilfred Owen, The Great Gatsby and Macbeth. Learning earns coins, and coins build the castle.</p>'+
    '<div class="tablewrap"><table class="t"><tr><th>What you do</th><th>Coins</th></tr><tr><td>Finish a lesson or watch a story</td><td>20</td></tr><tr><td>Each correct quiz answer, first time</td><td>10</td></tr><tr><td>Each correct quiz answer, on a repeat</td><td>5</td></tr><tr><td>Move a quote up one level</td><td>10</td></tr><tr><td>Know a quote by heart for the first time</td><td>10 more</td></tr></table></div>'+
    '<h2>The hedge maze</h2><p>The hedge maze is in the shop. Once it is built, each lesson, story, quiz, quote practice or test you finish earns one maze key. A key opens one new maze. Solving a maze earns no coins.</p>'+
    '<h2>Quote levels</h2><ul class="plain"><li><b>Level 1:</b> type the missing words.</li><li><b>Level 2:</b> finish the line.</li><li><b>Level 3:</b> type the whole quote from memory.</li></ul><p>If you get a quote wrong at a level you had passed, it drops back one level so that you practise it again.</p>'+
    '<h2>Tests</h2><p>Each of the three parts has a test of 20 questions: 10 multiple choice and 10 finish-the-line. A score of 14 or more passes. The first pass earns 100 coins and unlocks a special building.</p>'+
    '<h2>Where the words come from</h2><p>Every quotation in the Keep has been checked against the text. Owen’s poems follow the 1920 edition of his Poems. Macbeth and The Great Gatsby follow the Project Gutenberg texts, so a few spellings may differ from your school copy. If they do, learn the spelling in your school copy.</p>'+
    '<h2>Your progress</h2><p>Progress is saved on this device, in this browser. It does not move between devices.</p>'+
    '<div class="card flat"><h3>Start again</h3><p class="small">This clears all coins, quotes and buildings on this device.</p><div><button class="btn plain" data-act="reset">'+(ui.reset ? 'Press again to clear everything' : 'Clear my progress')+'</button></div></div>';
}

/* ---------- routing ---------- */
var VIEWS = {castle:vCastle, learn:vLearn, lesson:vLesson, test:vTest, quiz:vQuiz, recall:vRecall, quotes:vQuotes, shop:vShop, story:vStory, about:vAbout, maze:Maze.html};
var TAB_OF = {castle:'castle', about:'castle', maze:'castle', learn:'learn', lesson:'learn', test:'learn', quiz:'learn', story:'learn', recall:'quotes', quotes:'quotes', shop:'shop'};
function render(){
  var main = $('#main'), y = main.scrollTop;
  main.innerHTML = VIEWS[view]();
  main.scrollTop = y;
  [].forEach.call(document.querySelectorAll('nav button'), function(b){ var on = b.getAttribute('data-act') === 'go:'+TAB_OF[view]; b.classList.toggle('on', on); if(on) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current'); });
  var c = $('#coins'), k = $('#known'), kc = knownCount();
  if(c.textContent !== String(state.coins)){ c.textContent = state.coins; bump(c.parentNode); }
  if(k.textContent !== String(kc)){ k.textContent = kc; bump(k.parentNode); }
  if(view === 'lesson') bindLesson();
  if(view === 'maze') Maze.mount();
  if(view === 'recall' && recall && !recall.done && !recall.res){ var f = $('#g0') || $('#ans'); if(f) try{ f.focus({preventScroll:true}); }catch(e){} }
  if(view === 'test' && test && !test.done && !test.res){ var tf = $('#ans'); if(tf) try{ tf.focus({preventScroll:true}); }catch(e){} }
}
function bump(el){ el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
function reveal(sel){ var el = $(sel), main = $('#main'); if(!el) return; var r = el.getBoundingClientRect(), m = main.getBoundingClientRect(); if(r.bottom > m.bottom-8) main.scrollTop += r.bottom-m.bottom+16; }
function go(v, top){
  scrollMem[view] = $('#main').scrollTop;
  if(view === 'lesson' && v !== 'lesson'){ stopStages(); stopSteps(); }
  if(view === 'story' && v !== 'story') stopStory();
  if(view === 'maze' && v !== 'maze') Maze.leave();
  if(v === 'maze' && view !== 'maze') Maze.arrive();
  if(v !== 'about') ui.reset = false;
  view = v; render();
  $('#main').scrollTop = top ? 0 : (v === 'learn' || v === 'shop' || v === 'quotes' ? (scrollMem[v] || 0) : 0);
}
function act(a){
  var i = a.indexOf(':'), cmd = i < 0 ? a : a.slice(0,i), arg = i < 0 ? '' : a.slice(i+1), L;
  if(cmd === 'go') go(arg);
  else if(cmd === 'mz') Maze.act(arg);
  else if(cmd === 'preview'){ preview = !preview; render(); $('#main').scrollTop = 0; }
  else if(cmd === 'lesson'){ if(LESSONS[arg]){ cur = arg; ui.note = null; ui.stage = 0; ui.step = 0; ui.person = null; ui.aloud = false; go('lesson', true); } }
  else if(cmd === 'stepNext' || cmd === 'stepPrev'){ var n = LESSONS[cur].steps.items.length; ui.step = Math.max(0, Math.min(n-1, ui.step+(cmd === 'stepNext' ? 1 : -1))); refreshStep(); }
  else if(cmd === 'playSteps'){
    if(timers.steps){ stopSteps(); return; }
    ui.step = 0; refreshStep(); $('#playsteps').textContent = 'Stop';
    timers.steps = setInterval(function(){ if(view !== 'lesson' || ui.step >= LESSONS[cur].steps.items.length-1){ stopSteps(); return; } ui.step++; refreshStep(); }, 5000);
  }
  else if(cmd === 'person'){ ui.person = ui.person === arg ? null : arg; $('#people').innerHTML = peopleHTML(LESSONS[cur]); }
  else if(cmd === 'aloud'){ ui.aloud = !ui.aloud; $('#aloud').innerHTML = aloudHTML(LESSONS[cur]); }
  else if(cmd === 'note'){ ui.note = ui.note === arg ? null : arg; $('#poem').innerHTML = poemHTML(LESSONS[cur]); }
  else if(cmd === 'playStages'){
    if(timers.stages){ stopStages(); return; }
    ui.stage = 1; $('#stage').value = 1; refreshStage(); $('#playbtn').textContent = 'Stop';
    timers.stages = setInterval(function(){ if(view !== 'lesson' || ui.stage >= 4){ stopStages(); return; } ui.stage++; $('#stage').value = ui.stage; refreshStage(); }, 3500);
  }
  else if(cmd === 'finish'){ L = lessonState(cur); if(!L.done){ L.done = true; earn(20, 'lesson finished'); earnKey(); } render(); }
  else if(cmd === 'quiz') startQuiz(arg);
  else if(cmd === 'answer'){ if(quiz && quiz.picked === null){ quiz.picked = +arg; var q = quiz.qs[quiz.i]; if(quiz.picked === q.correct) quiz.score++; else quiz.wrong.push({q:q, picked:quiz.picked}); render(); reveal('#main [data-act=nextQ]'); } }
  else if(cmd === 'nextQ'){
    if(quiz.i+1 < quiz.qs.length){ quiz.i++; quiz.picked = null; render(); $('#main').scrollTop = 0; }
    else { L = lessonState(quiz.id); quiz.coins = quiz.score*(quiz.first ? 10 : 5); L.quizzes++; L.best = Math.max(L.best, quiz.score); quiz.done = true; earn(quiz.coins, 'quiz'); earnKey(); render(); $('#main').scrollTop = 0; }
  }
  else if(cmd === 'test') startTest(+arg);
  else if(cmd === 'tanswer'){ if(test && !test.res){ var tq = test.items[test.i].q, ok = +arg === tq.correct; test.res = {ok:ok, picked:+arg}; testMark(ok, '<p class="small muted">About '+test.items[test.i].ctx+'</p><p><b>'+tq.text+'</b></p><p>Correct answer: '+tq.opts[tq.correct]+'</p><p class="small">'+tq.explain+'</p>'); render(); reveal('#tnext'); } }
  else if(cmd === 'tcheck' || cmd === 'tskip'){ if(test && !test.res){ var ti = test.items[test.i], given = cmd === 'tskip' ? '' : ($('#ans') ? $('#ans').value : ''), mr = markText(ti.target, given), tok = cmd !== 'tskip' && mr.ok, sh = shownQuote(ti.quote.t, mr.marks, words(ti.shown).length); test.res = {ok:tok, shown:sh}; testMark(tok, '<p class="shown">“'+esc(ti.quote.t)+'”</p><p class="small">'+ti.quote.ref+'. '+ti.quote.means+'</p>'); render(); reveal('#tnext'); } }
  else if(cmd === 'tnext'){
    if(test.i < 19){ test.i++; test.res = null; render(); $('#main').scrollTop = 0; }
    else { var tp = test.pi+1, rec = state.tests[tp] || (state.tests[tp] = {passed:false, best:0}), first = !rec.passed && test.score >= 14; rec.best = Math.max(rec.best, test.score); if(test.score >= 14) rec.passed = true; test.done = true; test.res = null;
      if(first){ state.coins += 100; test.msg = 'You earned 100 coins, and the '+itemById(PARTS[test.pi].reward).name.toLowerCase().replace(/^the /,'')+' is now in the shop.'; } save(); earnKey(); render(); $('#main').scrollTop = 0; }
  }
  else if(cmd === 'recall'){ if(allQuotes().length) startRecall(arg); }
  else if(cmd === 'check') checkRecall(false);
  else if(cmd === 'giveup') checkRecall(true);
  else if(cmd === 'rnext'){ if(recall.i+1 < recall.ids.length){ recall.i++; buildPrompt(); } else { recall.done = true; earnKey(); } render(); $('#main').scrollTop = 0; }
  else if(cmd === 'buy'){ var it = itemById(arg); if(it && !state.owned[it.id] && state.coins >= it.cost){ state.coins -= it.cost; state.owned[it.id] = 1; if(it.id === 'maze') state.keys = (state.keys || 0)+1; save(); toast('Built: '+it.name+(it.id === 'maze' ? '. It comes with one maze key.' : '')); render(); } }
  else if(cmd === 'story'){ story = {id:arg, i:0}; go('story', true); }
  else if(cmd === 'snext' || cmd === 'sprev'){ story.i = Math.max(0, Math.min(STORIES[story.id].scenes.length-1, story.i+(cmd === 'snext' ? 1 : -1))); render(); }
  else if(cmd === 'splay'){
    if(timers.story) stopStory(); else timers.story = setInterval(function(){ if(view !== 'story' || story.i >= STORIES[story.id].scenes.length-1){ stopStory(); if(view === 'story') render(); return; } story.i++; render(); }, 12000);
    render();
  }
  else if(cmd === 'sfinish'){ L = lessonState(STORIES[story.id].lesson); if(!L.done){ L.done = true; earn(20, 'story watched'); earnKey(); } render(); }
  else if(cmd === 'reset'){ if(ui.reset){ Maze.leave(); state = fresh(); save(); ui.reset = false; quiz = recall = story = null; toast('Progress cleared'); go('castle', true); } else { ui.reset = true; render(); } }
}
document.addEventListener('click', function(e){ var t = e.target.closest ? e.target.closest('[data-act]') : null; if(t && !t.disabled){ e.preventDefault(); act(t.getAttribute('data-act')); } });
document.addEventListener('keydown', function(e){ var m = e.target; if((e.key === 'Enter' || e.key === ' ') && m.classList && m.classList.contains('mk')){ e.preventDefault(); var k = m.getAttribute('data-act'); act(k); var again = document.querySelector('.mk[data-act="'+k+'"]'); if(again) again.focus(); } });
document.addEventListener('keydown', function(e){ if(e.key === 'Enter' && view === 'test' && test && !test.done && !test.res && e.target.tagName === 'INPUT'){ e.preventDefault(); act('tcheck'); } });
document.addEventListener('keydown', function(e){ if(e.key === 'Enter' && view === 'recall' && recall && !recall.done && e.target.tagName === 'INPUT'){ e.preventDefault(); if(!recall.res) checkRecall(false); } });
document.addEventListener('toggle', function(e){ var d = e.target; if(d.classList && d.classList.contains('part')) openPart[d.getAttribute('data-part')] = d.open; }, true);
load(); render();
