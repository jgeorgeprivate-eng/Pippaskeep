"use strict";
/* Pippa's Keep: the hedge maze. A path puzzle: draw one path from post 1 through every post in number order,
   covering every square, without crossing a hedge. Each puzzle is built from a seed and checked to have exactly one solution. */
var Maze = (function(){
  /* ---------- building a puzzle ---------- */
  var DR = [-1,0,1,0], DC = [0,1,0,-1];
  var LEVELS = {5:{posts:5, maxWalls:5}, 6:{posts:7, maxWalls:7}, 7:{posts:9, maxWalls:9}, 8:{posts:12, maxWalls:11}};
  function rng(a){ return function(){ a |= 0; a = (a+0x6D2B79F5)|0; var t = Math.imul(a^(a>>>15), 1|a); t = (t+Math.imul(t^(t>>>7), 61|t))^t; return ((t^(t>>>14))>>>0)/4294967296; }; }
  function nb(n, cell, d){ var r = (cell/n|0)+DR[d], c = cell%n+DC[d]; return r < 0 || c < 0 || r >= n || c >= n ? -1 : r*n+c; }
  function dirTo(n, a, b){ for(var d = 0; d < 4; d++) if(nb(n,a,d) === b) return d; return -1; }
  // A random path that visits every square once.
  function randomPath(n, rand){
    var p = [], r, c, i, d;
    for(r = 0; r < n; r++) for(c = 0; c < n; c++) p.push(r*n+(r%2 ? n-1-c : c));
    for(i = 0; i < n*n*40; i++){
      if(rand() < 0.5) p.reverse();
      var end = p[p.length-1], prev = p[p.length-2], opts = [];
      for(d = 0; d < 4; d++){ var x = nb(n,end,d); if(x >= 0 && x !== prev) opts.push(x); }
      if(!opts.length) continue;
      var lo = p.indexOf(opts[rand()*opts.length|0])+1, hi = p.length-1, t;
      while(lo < hi){ t = p[lo]; p[lo] = p[hi]; p[hi] = t; lo++; hi--; }
    }
    return p;
  }
  // Looks for a solution other than the intended one. Returns {alt: a path or null, capped: true if the search gave up}.
  function findOther(n, nums, K, walls, intended, limit){
    var N = n*n, visited = new Uint8Array(N), p = new Int16Array(N), stack = new Int16Array(N), seen = new Uint8Array(N), nodes = 0, capped = false, alt = null, start = -1, i;
    for(i = 0; i < N; i++) if(nums[i] === 1) start = i;
    function feasible(cur, cnt){
      var u, d, v, deg, sp = 0, reached = 0;
      for(u = 0; u < N; u++){
        if(visited[u]) continue;
        deg = 0;
        for(d = 0; d < 4; d++){ if(walls[u*4+d]) continue; v = nb(n,u,d); if(v >= 0 && (!visited[v] || v === cur)) deg++; }
        if(deg < (nums[u] === K ? 1 : 2)) return false;
      }
      for(u = 0; u < N; u++) seen[u] = 0;
      stack[sp++] = cur; seen[cur] = 1;
      while(sp){
        u = stack[--sp];
        for(d = 0; d < 4; d++){ if(walls[u*4+d]) continue; v = nb(n,u,d); if(v < 0 || visited[v] || seen[v]) continue; seen[v] = 1; reached++; stack[sp++] = v; }
      }
      return reached === N-cnt;
    }
    function dfs(cur, cnt, next, same){
      if(alt || capped) return;
      if(++nodes > limit){ capped = true; return; }
      if(cnt === N){ if(nums[cur] === K && !same) alt = Array.prototype.slice.call(p); return; }
      if(nums[cur] === K || !feasible(cur, cnt)) return;
      for(var d = 0; d < 4; d++){
        if(walls[cur*4+d]) continue;
        var v = nb(n,cur,d), nx = next;
        if(v < 0 || visited[v]) continue;
        if(nums[v]){ if(nums[v] !== next) continue; nx = next+1; }
        visited[v] = 1; p[cnt] = v;
        dfs(v, cnt+1, nx, same && intended[cnt] === v);
        visited[v] = 0;
        if(alt || capped) return;
      }
    }
    visited[start] = 1; p[0] = start; dfs(start, 1, 2, true);
    return {alt:alt, capped:capped};
  }
  function setWall(n, walls, a, b, val){ walls[a*4+dirTo(n,a,b)] = val; walls[b*4+dirTo(n,b,a)] = val; }
  // Builds the puzzle for a size and seed: posts along a random path, then hedges added until only that path works.
  function build(n, seed){
    var N = n*n, cfg = LEVELS[n], K = cfg.posts, LIMIT = 60000;
    for(var attempt = 0; attempt < 400; attempt++){
      var rand = rng((seed+attempt*7919)|0), path = randomPath(n, rand), nums = new Uint8Array(N), idxs = [0, N-1], ok = true, k, i;
      for(k = 1; k < K-1; k++){
        var gap = (N-1)/(K-1), idx = Math.round(k*gap+(rand()*2-1)*gap*0.35);
        idx = Math.max(1, Math.min(N-2, idx));
        while(idxs.indexOf(idx) >= 0 && idx < N-2) idx++;
        if(idxs.indexOf(idx) >= 0){ ok = false; break; }
        idxs.push(idx);
      }
      if(!ok) continue;
      idxs.sort(function(a,b){ return a-b; });
      for(i = 0; i < K; i++) nums[path[idxs[i]]] = i+1;
      var walls = new Uint8Array(N*4), list = [], unique = false, res;
      for(;;){
        res = findOther(n, nums, K, walls, path, LIMIT);
        if(res.capped) break;
        if(!res.alt){ unique = true; break; }
        if(list.length >= cfg.maxWalls) break;
        i = 1; while(res.alt[i] === path[i]) i++;
        setWall(n, walls, path[i-1], res.alt[i], 1); list.push([path[i-1], res.alt[i]]);
      }
      if(!unique) continue;
      // take out any hedge the puzzle does not need
      var order = list.map(function(w, j){ return j; }), keep = list.map(function(){ return true; }), j, t;
      for(i = order.length-1; i > 0; i--){ j = rand()*(i+1)|0; t = order[i]; order[i] = order[j]; order[j] = t; }
      for(i = 0; i < order.length; i++){
        var w = list[order[i]];
        setWall(n, walls, w[0], w[1], 0);
        res = findOther(n, nums, K, walls, path, LIMIT);
        if(res.capped || res.alt) setWall(n, walls, w[0], w[1], 1); else keep[order[i]] = false;
      }
      return {n:n, seed:seed, posts:K, nums:Array.prototype.slice.call(nums), walls:Array.prototype.slice.call(walls), hedges:list.filter(function(w, q){ return keep[q]; }), solution:path.slice()};
    }
    return null;
  }

  /* ---------- playing ---------- */
  var NS = 'http://www.w3.org/2000/svg', PAD = 8;
  var pz = null, path = [], inPath = [], hist = [], cellEls = [], postEls = {}, pathEl = null, headEl = null, svg = null;
  var running = false, tickFrom = 0, timer = null, dragging = false, gestureSaved = false, entering = false, justSolved = false, held = false, lastCell = -1;
  function M(){ return state.maze; }
  function calm(){ return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function fmt(ms){ var s = Math.floor(ms/1000); return Math.floor(s/60)+':'+(s%60 < 10 ? '0' : '')+s%60; }
  function now(){ var m = M(); return (m ? m.elapsed : 0)+(running ? Date.now()-tickFrom : 0); }
  function startClock(){ var m = M(); if(running || !m || m.solved) return; running = true; tickFrom = Date.now(); timer = setInterval(function(){ var e = $('#mztime'); if(e) e.textContent = fmt(now()); }, 250); }
  function stopClock(){ var m = M(); if(!running) return; if(m) m.elapsed = now(); running = false; clearInterval(timer); }
  // Writes the path and the time so far into the saved state.
  function keep(){ var m = M(); if(!m || !pz || pz.seed !== m.seed) return; m.path = path.slice(); if(running){ m.elapsed = now(); tickFrom = Date.now(); } save(); }

  function chooser(m){
    var keys = state.keys || 0, s = '<div class="card"><h2>'+(m ? 'Another maze' : 'Choose a maze')+'</h2>';
    if(keys < 1) return s+'<p>You have no maze keys. Each lesson, story, quiz, quote practice or test you finish earns one key.</p><div><button class="btn" data-act="go:learn">Go to Learn</button></div></div>';
    return s+'<p>A new maze uses one key. You have '+plural(keys,'key')+'. Bigger mazes are harder.</p><div class="mzsizes">'+[5,6,7,8].map(function(n){ return '<button class="btn" data-act="mz:new:'+n+'">'+n+'×'+n+'</button>'; }).join('')+'</div></div>';
  }
  function html(){
    var m = M(), s = '<div class="row between"><h1>Hedge maze</h1><span class="chip gold">'+plural(state.keys || 0,'maze key')+'</span></div>';
    if(!state.owned.maze) return s+'<div class="card"><p>The hedge maze has not been built yet. It is in the shop.</p><div><button class="btn" data-act="go:shop">Open the shop</button></div></div>';
    if(m){
      s += '<div class="mzstats"><div><span>Time</span><b id="mztime">'+fmt(m.elapsed)+'</b></div><div><span>Squares</span><b id="mzsq"></b></div><div><span>Best</span><b id="mzbest"></b></div></div>'+
        '<div class="mzwrap"><svg class="mzboard" id="mzboard" tabindex="0" role="application" aria-label="The maze. Drag from post 1, or use the arrow keys."></svg></div>'+
        '<p class="mzmsg" id="mzmsg" aria-live="polite"></p>';
      if(!m.solved) s += '<div class="mzctl"><button class="btn plain" id="mzundo" data-act="mz:undo">Undo</button><button class="btn plain" id="mzclear" data-act="mz:clear">Start over</button><button class="btn plain" data-act="mz:hint">Hint</button></div>';
    }
    if(!m || m.solved) s += chooser(m);
    return s+'<div class="card flat"><h3>How the maze works</h3><ul class="plain small"><li>Draw one path from post 1 through every post in number order.</li><li>The path must cover every square once and end on the last post.</li><li>The path cannot cross a hedge.</li><li>Tap a square on the path to cut the path back to it.</li></ul></div><div><button class="btn plain" data-act="go:castle">Back to the castle</button></div>';
  }

  function el(name, attrs){ var e = document.createElementNS(NS, name); for(var k in attrs) e.setAttribute(k, attrs[k]); svg.appendChild(e); return e; }
  function draw(){
    var n = pz.n, S = n*100, i, r, c;
    while(svg.firstChild) svg.removeChild(svg.firstChild);
    svg.setAttribute('viewBox', (-PAD)+' '+(-PAD)+' '+(S+2*PAD)+' '+(S+2*PAD));
    el('rect', {'class':'mz-bg', x:0, y:0, width:S, height:S, rx:12});
    cellEls = [];
    for(i = 0; i < n*n; i++){ r = i/n|0; c = i%n; cellEls.push(el('rect', {'class':'mz-cell', x:c*100+2, y:r*100+2, width:96, height:96, rx:8})); }
    for(i = 1; i < n; i++){ el('line', {'class':'mz-grid', x1:i*100, y1:6, x2:i*100, y2:S-6}); el('line', {'class':'mz-grid', x1:6, y1:i*100, x2:S-6, y2:i*100}); }
    // each hedge is drawn twice: a dark outline, then the green on top
    ['mz-hedge-out','mz-hedge'].forEach(function(cls){
      pz.hedges.forEach(function(w){
        var a = Math.min(w[0],w[1]), b = Math.max(w[0],w[1]), rr = a/n|0, cc = a%n;
        if(b === a+1) el('line', {'class':cls, x1:(cc+1)*100, y1:rr*100+10, x2:(cc+1)*100, y2:rr*100+90});
        else el('line', {'class':cls, x1:cc*100+10, y1:(rr+1)*100, x2:cc*100+90, y2:(rr+1)*100});
      });
    });
    pathEl = el('polyline', {'class':'mz-path', points:''});
    headEl = el('circle', {'class':'mz-head', r:9, cx:-50, cy:-50});
    postEls = {};
    for(i = 0; i < n*n; i++){
      if(!pz.nums[i]) continue;
      r = i/n|0; c = i%n;
      postEls[pz.nums[i]] = el('circle', {'class':'mz-post', cx:c*100+50, cy:r*100+50, r:31});
      el('text', {'class':'mz-num', x:c*100+50, y:r*100+64}).textContent = pz.nums[i];
    }
  }
  function nextPost(){ var k = 0; for(var i = 0; i < path.length; i++) if(pz.nums[path[i]]) k++; return k+1; }
  function paint(){
    var m = M(), n = pz.n, N = n*n, i, head = path[path.length-1], nx = nextPost(), e, best = (state.mazeBest || {})[n];
    inPath = []; for(i = 0; i < N; i++) inPath.push(-1);
    for(i = 0; i < path.length; i++) inPath[path[i]] = i;
    for(i = 0; i < N; i++) cellEls[i].setAttribute('class', inPath[i] >= 0 ? 'mz-cell on' : 'mz-cell');
    pathEl.setAttribute('points', path.map(function(c){ return (c%n*100+50)+','+((c/n|0)*100+50); }).join(' '));
    headEl.setAttribute('cx', head%n*100+50); headEl.setAttribute('cy', (head/n|0)*100+50);
    for(var k in postEls) postEls[k].setAttribute('class', !m.solved && +k === nx ? 'mz-post next' : 'mz-post');
    svg.setAttribute('class', 'mzboard'+(m.solved ? ' solved' : ''));
    if((e = $('#mzsq'))) e.textContent = path.length+'/'+N;
    if((e = $('#mzbest'))) e.textContent = best ? fmt(best) : '–';
    if((e = $('#mzundo'))) e.disabled = !hist.length;
    if((e = $('#mzclear'))) e.disabled = path.length <= 1;
  }
  function say(text, good){ var e = $('#mzmsg'); if(e){ e.textContent = text; e.className = good ? 'mzmsg good' : 'mzmsg'; } }
  function progress(){ if(held) return; if(path.length <= 1) say('Drag from post 1.'); else say('Next post: '+nextPost()+' of '+pz.posts+'.'); }
  function refuse(text){ held = true; say(text); if(calm()) return; var w = svg.parentNode; w.classList.remove('nudge'); void w.offsetWidth; w.classList.add('nudge'); }
  function solvedText(){ var m = M(); return 'Solved in '+fmt(m.elapsed)+(m.hints ? ' with '+plural(m.hints,'hint')+'.' : m.best ? '. Your best time for '+m.n+'×'+m.n+'.' : '.'); }

  function remember(){ hist.push(path.slice()); if(hist.length > 300) hist.shift(); }
  function rememberOnce(){ if(!gestureSaved){ remember(); gestureSaved = true; } }
  // Adds one square to the end of the path if the rules allow it.
  function extend(cell){
    var n = pz.n, N = n*n, head = path[path.length-1], d = dirTo(n, head, cell), num = pz.nums[cell], nx;
    if(d < 0 || inPath[cell] >= 0) return false;
    if(pz.walls[head*4+d]){ refuse('A hedge blocks that way.'); return false; }
    if(num){
      nx = nextPost();
      if(num !== nx){ refuse('Post '+nx+' comes before post '+num+'.'); return false; }
      if(num === pz.posts && path.length !== N-1){ refuse('Post '+num+' is the end of the path. Cover every other square first.'); return false; }
    }
    rememberOnce(); path.push(cell); inPath[cell] = path.length-1; startClock();
    return true;
  }
  function cutTo(idx){ if(idx >= path.length-1) return; rememberOnce(); path.length = idx+1; }
  // Moves the end of the path toward a square: cut back, or extend in a straight run.
  function moveTo(cell, tap){
    var m = M(), n = pz.n, idx, head, hr, hc, r, c, step, cur;
    if(!m || m.solved || cell < 0) return;
    idx = inPath[cell];
    if(idx >= 0){ if(tap || idx >= path.length-3) cutTo(idx); }
    else {
      head = path[path.length-1]; hr = head/n|0; hc = head%n; r = cell/n|0; c = cell%n;
      if(hr === r || hc === c){ step = hr === r ? (c > hc ? 1 : -1) : (r > hr ? n : -n); cur = head; while(cur !== cell){ cur += step; if(!extend(cur)) break; } }
    }
    after();
  }
  function after(){
    var N = pz.n*pz.n;
    if(path.length === N && pz.nums[path[N-1]] === pz.posts){ win(); return; }
    paint(); progress();
  }
  function win(){
    var m = M(), best = state.mazeBest || (state.mazeBest = {});
    stopClock(); dragging = false; m.solved = true; m.path = path.slice();
    m.best = !m.hints && (!best[m.n] || m.elapsed < best[m.n]);
    if(m.best) best[m.n] = m.elapsed;
    save(); justSolved = true; render();
  }
  // Where the pointer is: a square, -1 off the board, or -2 on the rim of a square (ignored while dragging so a diagonal drag does not clip a neighbour).
  function cellAt(evt, rim){
    var n = pz.n, box = svg.getBoundingClientRect(), k = (n*100+2*PAD)/box.width, x = (evt.clientX-box.left)*k-PAD, y = (evt.clientY-box.top)*k-PAD, c = Math.floor(x/100), r = Math.floor(y/100);
    if(c < 0 || r < 0 || c >= n || r >= n) return -1;
    if(!rim && (Math.abs(x-(c*100+50)) > 41 || Math.abs(y-(r*100+50)) > 41)) return -2;
    return r*n+c;
  }
  function onDown(evt){
    var m = M(); if(!pz || !m || m.solved) return;
    evt.preventDefault();
    try{ svg.setPointerCapture(evt.pointerId); }catch(e){}
    dragging = true; gestureSaved = false; held = false; lastCell = cellAt(evt, true);
    moveTo(lastCell, true);
  }
  function onMove(evt){
    var m = M(); if(!dragging || !pz || !m || m.solved) return;
    evt.preventDefault();
    var cell = cellAt(evt, false);
    if(cell < 0 || cell === lastCell) return;
    lastCell = cell;
    if(cell === path[path.length-1]) return;
    held = false; moveTo(cell, false);
  }
  function onUp(){ if(dragging){ dragging = false; keep(); } }
  function onKey(evt){
    var m = M(), d = {ArrowUp:0, ArrowRight:1, ArrowDown:2, ArrowLeft:3}[evt.key], target;
    if(!pz || !m || m.solved) return;
    if(d === undefined){ if(evt.key === 'Backspace'){ evt.preventDefault(); act('undo'); } return; }
    evt.preventDefault();
    target = nb(pz.n, path[path.length-1], d);
    if(target < 0) return;
    gestureSaved = false; held = false;
    if(target === path[path.length-2]) cutTo(path.length-2); else if(inPath[target] < 0) extend(target); else return;
    after(); keep();
  }
  // Called after the maze screen has been put on the page.
  function mount(){
    var m = M(), resume = running;
    if(running) stopClock();
    svg = $('#mzboard');
    if(!m || !svg) return;
    if(!pz || pz.n !== m.n || pz.seed !== m.seed){ pz = build(m.n, m.seed); hist = []; }
    path = m.path && m.path.length && m.path[0] === pz.solution[0] ? m.path.slice() : [pz.solution[0]];
    draw(); paint(); held = false;
    svg.addEventListener('pointerdown', onDown); svg.addEventListener('pointermove', onMove);
    svg.addEventListener('pointerup', onUp); svg.addEventListener('pointercancel', onUp); svg.addEventListener('keydown', onKey);
    if(m.solved) say(solvedText(), true); else progress();
    if(entering && !calm()) svg.parentNode.classList.add('enter');
    entering = false;
    if(justSolved && !calm() && pathEl.getTotalLength){
      var len = pathEl.getTotalLength();
      pathEl.style.strokeDasharray = len; pathEl.style.strokeDashoffset = len; void pathEl.getBoundingClientRect();
      pathEl.style.transition = 'stroke-dashoffset 1s ease-in-out'; pathEl.style.strokeDashoffset = 0;
    }
    justSolved = false;
    if(!m.solved && (resume || m.elapsed > 0 || path.length > 1)) startClock();
  }
  function act(arg){
    var m = M(), p = arg.split(':'), n, k, w;
    if(p[0] === 'new'){
      n = +p[1];
      if(!LEVELS[n] || !state.owned.maze || !(state.keys > 0) || (m && !m.solved)) return;
      stopClock(); state.keys--; hist = [];
      state.maze = {n:n, seed:(Math.random()*0x7fffffff)|0, path:null, elapsed:0, hints:0, solved:false, best:false};
      save(); entering = true; render();
      w = $('.mzwrap'); if(w && w.scrollIntoView) w.scrollIntoView({block:'nearest'});
      return;
    }
    if(!m || m.solved || !pz) return;
    held = false;
    if(p[0] === 'undo'){ if(hist.length){ path = hist.pop(); paint(); progress(); keep(); } }
    else if(p[0] === 'clear'){ if(path.length > 1){ remember(); path = [pz.solution[0]]; paint(); progress(); keep(); } }
    else if(p[0] === 'hint'){
      k = 0; while(k < path.length && path[k] === pz.solution[k]) k++;
      remember(); m.hints++; startClock();
      if(k < path.length){ path.length = k; paint(); held = true; say('The path was right up to this square. The rest has been removed.'); keep(); return; }
      n = Math.min(pz.n*pz.n, k+3); path = pz.solution.slice(0, n);
      if(n === pz.n*pz.n){ win(); return; }
      paint(); held = true; say('The hint added the next '+plural(n-k,'square')+'.'); keep();
    }
  }
  function arrive(){ entering = true; }
  function leave(){ stopClock(); dragging = false; keep(); }
  if(typeof document !== 'undefined') document.addEventListener('visibilitychange', function(){
    if(typeof view === 'undefined' || view !== 'maze' || !M() || M().solved) return;
    if(document.hidden){ stopClock(); keep(); } else if(M().elapsed > 0 || path.length > 1) startClock();
  });
  return {html:html, mount:mount, act:act, arrive:arrive, leave:leave, build:build, findOther:findOther};
})();
if(typeof module !== 'undefined') module.exports = Maze;
