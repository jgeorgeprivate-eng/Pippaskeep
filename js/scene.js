"use strict";
/* The castle: what can be bought and how each thing is drawn. Scene is 360 by 400, or 360 by 452 once the hedge maze is built. */
var INK = '#1c2333', STONE = '#c9c5bb', STONE2 = '#b9b4a8', STONE3 = '#d6d2c7', AZ = '#27468f', GU = '#b3263a', OR = '#e3a61f', WOOD = '#a9794f';
var ITEMS = [
  {id:'wall', name:'Curtain wall', cost:220, kind:'Walls and towers', desc:'The outer wall that encloses the castle.', box:'56 214 248 96'},
  {id:'gatehouse', name:'Gatehouse', cost:240, kind:'Walls and towers', desc:'The fortified entrance, with a portcullis.', box:'132 196 96 110'},
  {id:'towerW', name:'West tower', cost:200, kind:'Walls and towers', desc:'A round tower with a blue roof.', box:'22 132 80 174'},
  {id:'towerE', name:'East tower', cost:200, kind:'Walls and towers', desc:'A round tower with a red roof.', box:'258 132 80 174'},
  {id:'keep', name:'The keep', cost:480, kind:'Walls and towers', desc:'The tall central tower, the strongest part of a castle.', box:'120 84 120 152'},
  {id:'moat', name:'Moat', cost:180, kind:'Walls and towers', desc:'A ring of water round the castle.', box:'60 306 240 60'},
  {id:'drawbridge', name:'Drawbridge', cost:140, kind:'Walls and towers', desc:'A wooden bridge across the moat.', needs:'gatehouse', box:'140 292 80 76'},
  {id:'chapel', name:'Chapel', cost:280, kind:'Inside the walls', desc:'A small chapel with a spire.', needs:'wall', box:'222 150 60 86'},
  {id:'hall', name:'Great hall', cost:380, kind:'Inside the walls', desc:'Where the household eats. Smoke rises from its chimney.', needs:'wall', lock:2, box:'78 150 70 86'},
  {id:'standard', name:'Royal standard', cost:100, kind:'Inside the walls', desc:'A gold flag flying from the keep.', needs:'keep', lock:1, box:'158 80 60 60'},
  {id:'banners', name:'Banners', cost:70, kind:'Finishing touches', desc:'Two banners hung on the wall.', needs:'wall', box:'84 232 60 60'},
  {id:'torches', name:'Torches', cost:60, kind:'Finishing touches', desc:'A torch on each side of the gate.', needs:'gatehouse', box:'150 240 60 60'},
  {id:'cat', name:'Castle cat', cost:40, kind:'Finishing touches', desc:'She sits on the wall and watches everything.', needs:'wall', box:'100 200 44 44'},
  {id:'swans', name:'Swans', cost:60, kind:'Finishing touches', desc:'Two swans on the moat.', needs:'moat', box:'236 316 64 44'},
  {id:'mill', name:'Water mill', cost:240, kind:'Outside the walls', desc:'A mill whose wheel turns in the moat.', needs:'moat', box:'0 280 64 72'},
  {id:'cottages', name:'Cottages', cost:60, kind:'Outside the walls', desc:'Two thatched cottages for the villagers.', box:'14 352 96 48'},
  {id:'orchard', name:'Orchard', cost:50, kind:'Outside the walls', desc:'Apple trees beside the path.', box:'92 354 56 46'},
  {id:'market', name:'Market stall', cost:130, kind:'Outside the walls', desc:'A stall with a striped awning.', box:'250 350 84 50'},
  {id:'knight', name:'Knight', cost:160, kind:'Outside the walls', desc:'A knight on horseback who rides the path.', box:'150 356 60 44'},
  {id:'sheep', name:'Sheep', cost:50, kind:'Outside the walls', desc:'Three sheep grazing by the path.', box:'316 362 44 38'},
  {id:'poppies', name:'Poppies', cost:40, kind:'Outside the walls', desc:'Red poppies on the hill. Poppies grew on the battlefields of the First World War.', box:'0 250 48 40'},
  {id:'windmill', name:'Windmill', cost:200, kind:'Outside the walls', desc:'A windmill on the far hill. Its sails turn.', box:'312 226 48 64'},
  {id:'minstrel', name:'Minstrel', cost:90, kind:'Outside the walls', desc:'A travelling singer with a lute.', box:'212 350 44 50'},
  {id:'boat', name:'Fishing boat', cost:110, kind:'Outside the walls', desc:'A small boat that sails on the moat.', needs:'moat', box:'60 304 90 46'},
  {id:'jetty', name:'Jetty and green lantern', cost:140, kind:'Outside the walls', desc:'A jetty on the moat with a green light at the end, like the one on Daisy’s dock.', needs:'moat', box:'314 296 46 66'},
  {id:'pennants', name:'Pennants', cost:60, kind:'Finishing touches', desc:'Two small flags on the gatehouse.', needs:'gatehouse', box:'136 168 88 46'},
  {id:'ivy', name:'Ivy', cost:50, kind:'Finishing touches', desc:'Ivy climbing the east end of the wall.', needs:'wall', box:'258 224 48 82'},
  {id:'raven', name:'Corbie the raven', cost:80, kind:'Finishing touches', desc:'The raven who tells the story of Macbeth, perched on the keep.', needs:'keep', box:'188 92 56 44'},
  {id:'falcon', name:'Falcon', cost:80, kind:'Finishing touches', desc:'A falcon gliding over the castle.', box:'118 26 84 48'},
  {id:'dragon', name:'Dragon', cost:500, kind:'Finishing touches', desc:'A small dragon who sleeps on the east tower.', needs:'towerE', lock:3, box:'262 112 72 60'},
  {id:'maze', name:'Hedge maze', cost:200, kind:'Outside the walls', desc:'A maze of clipped hedges at the end of the path. Tap it in the castle to play a path puzzle. It comes with one maze key.', box:'84 396 194 58'}
];
var DRAW_ORDER = ['falcon','windmill','poppies','keep','standard','raven','hall','chapel','towerW','towerE','dragon','wall','ivy','gatehouse','pennants','banners','torches','cat','moat','mill','boat','swans','jetty','drawbridge','cottages','orchard','market','sheep','minstrel','knight','maze'];
function itemById(id){ for(var i = 0; i < ITEMS.length; i++) if(ITEMS[i].id === id) return ITEMS[i]; }
function S(extra){ return ' stroke="'+INK+'" stroke-width="2" stroke-linejoin="round"'+(extra || ''); }
function crenels(x0, x1, y, w, g){ var s = ''; for(var x = x0; x+w <= x1+0.5; x += w+g) s += '<rect x="'+x+'" y="'+(y-8)+'" width="'+w+'" height="9" fill="inherit"'+S()+'/>'; return s; }
function slit(x,y){ return '<rect x="'+(x-2)+'" y="'+y+'" width="4" height="13" rx="2" fill="'+INK+'"/>'; }
function tower(x, roof){
  return '<g fill="'+STONE2+'"><rect x="'+x+'" y="176" width="44" height="124"'+S()+'/>'+crenels(x-2,x+46,176,9,4)+'</g>'+
    '<path d="M'+(x-4)+' 168 L'+(x+22)+' 134 L'+(x+48)+' 168 Z" fill="'+roof+'"'+S()+'/>'+slit(x+22,196)+slit(x+22,236)+
    '<path d="M'+(x+6)+' 262 h10 M'+(x+26)+' 280 h12 M'+(x+8)+' 220 h8" stroke="#8f8a7d" stroke-width="1.5" fill="none"/>';
}
var ART = {
  camp:function(){ return '<path d="M150 300 L176 262 L202 300 Z" fill="#f3ead0"'+S()+'/><path d="M176 262 L176 300" stroke="'+INK+'" stroke-width="1.5"/><path d="M170 300 L176 284 L182 300 Z" fill="'+INK+'"/>'+
    '<g transform="translate(222 292)"><path d="M-8 8 L8 2 M-8 2 L8 8" stroke="#6b4a32" stroke-width="3" stroke-linecap="round"/><path class="flick" d="M0 4 C-7 -2 -2 -6 0 -12 C2 -6 7 -2 0 4 Z" fill="'+OR+'" stroke="'+GU+'" stroke-width="1.5"/></g>'; },
  wall:function(){ return '<g fill="'+STONE+'"><rect x="62" y="232" width="236" height="68"'+S()+'/>'+crenels(62,298,232,12,8)+'</g>'+
    '<path d="M76 252 h16 M108 270 h18 M84 286 h14 M232 254 h16 M256 274 h18 M226 288 h12 M120 246 h10 M272 246 h10" stroke="#8f8a7d" stroke-width="1.5" fill="none"/>'; },
  gatehouse:function(){ return '<g fill="'+STONE3+'"><rect x="148" y="206" width="64" height="94"'+S()+'/>'+crenels(146,214,206,10,5)+'</g>'+
    '<path d="M164 300 V270 A16 16 0 0 1 196 270 V300 Z" fill="#3a2f2b"'+S()+'/><path d="M172 258 V300 M180 255 V300 M188 258 V300 M165 272 H195 M165 286 H195" stroke="#9a8a72" stroke-width="1.6" fill="none"/>'+slit(160,220)+slit(200,220); },
  towerW:function(){ return tower(40, AZ); },
  towerE:function(){ return tower(276, GU); },
  keep:function(){ return '<g fill="'+STONE3+'"><rect x="134" y="128" width="92" height="106"'+S()+'/>'+crenels(132,228,128,11,6)+'</g>'+
    '<path d="M152 150 a6 6 0 0 1 12 0 v14 h-12 Z M196 150 a6 6 0 0 1 12 0 v14 h-12 Z M174 176 a6 6 0 0 1 12 0 v16 h-12 Z" fill="'+INK+'"/>'+
    '<path d="M144 190 h14 M200 204 h16 M146 216 h10" stroke="#8f8a7d" stroke-width="1.5" fill="none"/><line x1="180" y1="120" x2="180" y2="90" stroke="'+INK+'" stroke-width="2.5" stroke-linecap="round"/>'; },
  standard:function(){ return '<path class="wave" d="M181 92 L212 96 L204 104 L212 112 L181 114 Z" fill="'+OR+'"'+S()+'/><circle cx="191" cy="103" r="3.5" fill="'+GU+'"/>'; },
  hall:function(){ return '<rect x="92" y="196" width="44" height="38" fill="#e9dcc0"'+S()+'/><rect x="122" y="170" width="8" height="18" fill="'+STONE2+'"'+S()+'/><path d="M86 198 L114 172 L142 198 Z" fill="#8a5a44"'+S()+'/>'+
    '<path d="M104 210 a5 5 0 0 1 10 0 v10 h-10 Z" fill="'+OR+'"'+S(' stroke-width="1.5"')+'/>'+
    '<g fill="#fff" opacity=".85"><circle class="puff" cx="126" cy="164" r="4"/><circle class="puff b" cx="128" cy="162" r="5"/><circle class="puff c" cx="125" cy="163" r="3.5"/></g>'; },
  chapel:function(){ return '<rect x="232" y="198" width="38" height="36" fill="#e9dcc0"'+S()+'/><path d="M228 200 L251 180 L274 200 Z" fill="#5f6b86"'+S()+'/><path d="M245 184 L251 156 L257 184 Z" fill="#5f6b86"'+S()+'/>'+
    '<path d="M251 156 V146 M247 150 H255" stroke="'+INK+'" stroke-width="2" stroke-linecap="round"/><path d="M246 214 a5 5 0 0 1 10 0 v12 h-10 Z" fill="'+AZ+'"'+S(' stroke-width="1.5"')+'/>'; },
  banners:function(){ return [[100,AZ],[124,GU]].map(function(b){ return '<path d="M'+b[0]+' 244 h14 v26 l-7 -6 l-7 6 Z" fill="'+b[1]+'"'+S(' stroke-width="1.5"')+'/><path d="M'+(b[0]+7)+' 248 v12" stroke="'+OR+'" stroke-width="3"/>'; }).join(''); },
  torches:function(){ return [156,204].map(function(x){ return '<line x1="'+x+'" y1="262" x2="'+x+'" y2="276" stroke="#6b4a32" stroke-width="3" stroke-linecap="round"/><path class="flick" d="M'+x+' 262 c-5 -4 -1 -7 0 -12 c1 5 5 8 0 12 Z" fill="'+OR+'" stroke="'+GU+'" stroke-width="1.2"/>'; }).join(''); },
  cat:function(){ return '<g fill="'+INK+'"><ellipse cx="122" cy="219" rx="6" ry="6.5"/><circle cx="122" cy="209" r="4.5"/><path d="M118 207 l1 -6 l3 4 Z M126 207 l-1 -6 l-3 4 Z"/><path d="M127 222 q9 2 7 -8" fill="none" stroke="'+INK+'" stroke-width="2.5" stroke-linecap="round"/></g><circle cx="120.5" cy="209" r=".9" fill="'+OR+'"/><circle cx="123.5" cy="209" r=".9" fill="'+OR+'"/>'; },
  dragon:function(){ return '<g class="snooze"><path d="M280 166 q-8 -16 10 -20 q22 -4 26 12 q2 8 -6 10 Z" fill="#4fa36c"'+S()+'/><path d="M300 148 l6 -14 l8 14 Z" fill="#7cc48f"'+S(' stroke-width="1.5"')+'/>'+
    '<path d="M282 160 q-12 0 -12 -8 q0 -7 9 -6 q6 1 7 6" fill="#4fa36c"'+S()+'/><path d="M273 151 q2 2 4 0" fill="none" stroke="'+INK+'" stroke-width="1.5" stroke-linecap="round"/><path d="M316 164 q10 2 12 -6" fill="none" stroke="#4fa36c" stroke-width="4" stroke-linecap="round"/></g>'+
    '<text class="zz" x="262" y="140" font-family="Alegreya Sans, sans-serif" font-weight="700" font-size="11" fill="'+INK+'">z z</text>'; },
  falcon:function(){ return '<g class="glide"><path d="M142 54 q10 -13 18 -1 q8 -12 18 1" fill="none" stroke="'+INK+'" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M158 52 l2 5 l2 -5 Z" fill="'+INK+'"/></g>'; },
  windmill:function(){ return '<path d="M328 286 L332 252 L344 252 L348 286 Z" fill="#e9dcc0"'+S()+'/><path d="M329 252 L338 241 L347 252 Z" fill="#8a5a44"'+S()+'/><rect x="335" y="270" width="6" height="10" fill="'+INK+'"/>'+
    '<g class="turn"><path d="M338 253 L334 234 H342 Z M338 253 L342 272 H334 Z M338 253 L319 249 V257 Z M338 253 L357 257 V249 Z" fill="#f3ead0"'+S(' stroke-width="1.5"')+'/></g><circle cx="338" cy="253" r="2.5" fill="'+INK+'"/>'; },
  poppies:function(){ return [[6,272],[14,264],[22,274],[30,266],[10,280],[26,282],[36,276]].map(function(p){ return '<path d="M'+p[0]+' '+p[1]+' v8" stroke="#3f7d4a" stroke-width="1.5"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.6" fill="'+GU+'" stroke="'+INK+'" stroke-width="1"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.2" fill="'+INK+'"/>'; }).join(''); },
  raven:function(){ return '<g fill="'+INK+'"><ellipse cx="213" cy="115" rx="7" ry="5"/><circle cx="220" cy="110" r="3.6"/><path d="M223 109 l6 1.5 l-6 2 Z"/><path d="M207 116 l-8 4 l8 1 Z"/><path d="M211 119 v4 M216 119 v4" stroke="'+INK+'" stroke-width="1.5"/></g><circle cx="221" cy="109.5" r=".9" fill="#fff"/>'; },
  ivy:function(){ return '<path d="M288 300 C280 284 294 272 285 256 C281 248 290 242 286 234" fill="none" stroke="#3f7d4a" stroke-width="2"/>'+[[286,296],[282,286],[290,278],[287,268],[283,258],[289,250],[285,242],[288,236],[279,274],[293,262]].map(function(p){ return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.6" fill="#4f9a5f" stroke="'+INK+'" stroke-width="1"/>'; }).join(''); },
  pennants:function(){ return [[152,GU],[208,AZ]].map(function(b){ return '<line x1="'+b[0]+'" y1="198" x2="'+b[0]+'" y2="178" stroke="'+INK+'" stroke-width="2" stroke-linecap="round"/><path class="wave" d="M'+b[0]+' 178 l13 4 l-13 4 Z" fill="'+b[1]+'"'+S(' stroke-width="1.2"')+'/>'; }).join(''); },
  boat:function(){ return '<g class="glide"><path d="M70 334 q18 11 36 0 Z" fill="'+WOOD+'"'+S()+'/><line x1="88" y1="334" x2="88" y2="312" stroke="'+INK+'" stroke-width="2"/><path d="M88 314 l13 16 h-13 Z" fill="#fff"'+S(' stroke-width="1.5"')+'/></g>'; },
  jetty:function(){ return '<path d="M334 358 V330 H346 V358 Z" fill="'+WOOD+'"'+S()+'/><path d="M334 338 h12 M334 346 h12" stroke="'+INK+'" stroke-width="1.2"/><line x1="340" y1="330" x2="340" y2="312" stroke="'+INK+'" stroke-width="2.5" stroke-linecap="round"/><circle class="glow" cx="340" cy="308" r="5" fill="#4fd17a" stroke="'+INK+'" stroke-width="1.5"/>'; },
  sheep:function(){ return [[334,381],[349,388],[346,372]].map(function(p){ return '<path d="M'+(p[0]-4)+' '+(p[1]+4)+' v4 M'+(p[0]+4)+' '+(p[1]+4)+' v4" stroke="'+INK+'" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="'+p[0]+'" cy="'+p[1]+'" rx="7" ry="5" fill="#fff"'+S(' stroke-width="1.5"')+'/><circle cx="'+(p[0]-7)+'" cy="'+(p[1]-1)+'" r="2.8" fill="'+INK+'"/>'; }).join(''); },
  minstrel:function(){ return '<path d="M225 396 Q224 378 232 376 Q240 378 239 396 Z" fill="'+AZ+'"'+S()+'/><circle cx="232" cy="370" r="5.5" fill="#f2cfa9"'+S(' stroke-width="1.5"')+'/><path d="M226 367 L232 357 L238 367 Z" fill="'+GU+'"'+S(' stroke-width="1.5"')+'/><ellipse cx="241" cy="387" rx="4.5" ry="5.5" fill="'+WOOD+'"'+S(' stroke-width="1.5"')+'/><line x1="243" y1="383" x2="249" y2="374" stroke="'+INK+'" stroke-width="2" stroke-linecap="round"/>'; },
  moat:function(){ return '<path d="M0 324 C90 314 270 314 360 324 L360 356 C270 346 90 346 0 356 Z" fill="#6fb6d8"'+S()+'/><path d="M40 336 q6 -3 12 0 M96 332 q6 -3 12 0 M228 332 q6 -3 12 0 M300 338 q6 -3 12 0 M130 342 q6 -3 12 0" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/>'; },
  drawbridge:function(){ return '<path d="M164 300 H196 L204 360 H156 Z" fill="'+WOOD+'"'+S()+'/><path d="M163 312 H197 M161 324 H199 M160 336 H200 M158 348 H202" stroke="'+INK+'" stroke-width="1.2"/>'+
    '<path d="M162 250 L157 356 M198 250 L203 356" stroke="'+INK+'" stroke-width="1.4" stroke-dasharray="3 3" fill="none"/>'; },
  mill:function(){ return '<rect x="10" y="296" width="30" height="34" fill="#e9dcc0"'+S()+'/><path d="M6 298 L25 280 L44 298 Z" fill="#8a5a44"'+S()+'/><rect x="20" y="308" width="8" height="10" fill="'+INK+'"/>'+
    '<g class="turn"><circle cx="44" cy="334" r="13" fill="none" stroke="#6b4a32" stroke-width="3"/><path d="M44 321 V347 M31 334 H57 M35 325 L53 343 M53 325 L35 343" stroke="#6b4a32" stroke-width="2"/></g><circle cx="44" cy="334" r="2.5" fill="'+INK+'"/>'; },
  swans:function(){ return '<g class="glide">'+[[250,336],[272,342]].map(function(p){ return '<path d="M'+p[0]+' '+p[1]+' q8 6 18 0 q-4 -6 -12 -4 q-2 -8 -6 -8 q-4 0 -3 4 q3 0 3 8 Z" fill="#fff"'+S(' stroke-width="1.5"')+'/><path d="M'+(p[0]-3)+' '+(p[1]-8)+' l-4 1" stroke="'+OR+'" stroke-width="2" stroke-linecap="round"/>'; }).join('')+'</g>'; },
  cottages:function(){ return [[24,368],[66,372]].map(function(p){ return '<rect x="'+p[0]+'" y="'+(p[1]+10)+'" width="30" height="18" fill="#f3ead0"'+S()+'/><path d="M'+(p[0]-4)+' '+(p[1]+12)+' L'+(p[0]+15)+' '+(p[1]-4)+' L'+(p[0]+34)+' '+(p[1]+12)+' Z" fill="#c9a15a"'+S()+'/><rect x="'+(p[0]+12)+'" y="'+(p[1]+17)+'" width="7" height="11" fill="#6b4a32"/>'; }).join(''); },
  orchard:function(){ return [[104,372],[124,366],[138,378]].map(function(p){ return '<rect x="'+(p[0]-2)+'" y="'+(p[1]+8)+'" width="4" height="12" fill="#6b4a32"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="11" fill="#4f9a5f"'+S(' stroke-width="1.5"')+'/><circle cx="'+(p[0]-4)+'" cy="'+(p[1]-2)+'" r="2" fill="'+GU+'"/><circle cx="'+(p[0]+4)+'" cy="'+(p[1]+3)+'" r="2" fill="'+GU+'"/><circle cx="'+(p[0]+2)+'" cy="'+(p[1]-6)+'" r="2" fill="'+GU+'"/>'; }).join(''); },
  market:function(){ return '<rect x="262" y="376" width="56" height="18" fill="'+WOOD+'"'+S()+'/><path d="M266 376 V362 M314 376 V362" stroke="'+INK+'" stroke-width="2"/><path d="M256 364 H324 L318 354 H262 Z" fill="#fff"'+S()+'/>'+
    '<path d="M270 354 l-3 10 h11 l1 -10 Z M288 354 l0 10 h11 l-1 -10 Z M306 354 l1 10 h11 l-5 -10 Z" fill="'+GU+'"/><circle cx="274" cy="372" r="3.5" fill="'+OR+'"/><circle cx="283" cy="372" r="3.5" fill="#4f9a5f"/><circle cx="292" cy="372" r="3.5" fill="'+GU+'"/><rect x="300" y="368" width="12" height="8" fill="#f3ead0"'+S(' stroke-width="1.2"')+'/>'; },
  maze:function(){
    var walls = 'M175 410 H91 V446 H271 V410 H187 M103 422 H139 V434 M103 434 H127 M151 410 V422 H163 V434 M175 410 V422 M175 434 H199 V422 H211 M187 446 V434 M223 410 V434 H247 M235 422 H259 M211 434 V446 M139 446 V434';
    return '<rect x="91" y="410" width="180" height="36" fill="#dccb9f"/><path d="'+walls+'" fill="none" stroke="'+INK+'" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/><path d="'+walls+'" fill="none" stroke="#4f9a5f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<circle cx="170" cy="405" r="5" fill="#4f9a5f"'+S(' stroke-width="1.5"')+'/><circle cx="192" cy="405" r="5" fill="#4f9a5f"'+S(' stroke-width="1.5"')+'/>'; },
  knight:function(){ return '<g class="trot"><ellipse cx="180" cy="382" rx="13" ry="7" fill="#f3ead0"'+S()+'/><path d="M171 386 v9 M177 388 v8 M184 388 v8 M190 386 v9" stroke="'+INK+'" stroke-width="2.2" stroke-linecap="round"/>'+
    '<path d="M190 378 q8 -10 12 -4 q2 4 -6 6 Z" fill="#f3ead0"'+S()+'/><path d="M167 380 q-6 2 -5 8" fill="none" stroke="'+INK+'" stroke-width="2" stroke-linecap="round"/>'+
    '<rect x="175" y="364" width="9" height="13" rx="2" fill="'+STONE2+'"'+S(' stroke-width="1.5"')+'/><circle cx="179.5" cy="360" r="4.5" fill="'+STONE3+'"'+S(' stroke-width="1.5"')+'/><path d="M179 356 q3 -7 8 -4" fill="none" stroke="'+GU+'" stroke-width="2.5" stroke-linecap="round"/>'+
    '<line x1="187" y1="372" x2="187" y2="350" stroke="'+INK+'" stroke-width="1.6"/><path class="wave" d="M187 350 h9 l-3 3 l3 3 h-9 Z" fill="'+AZ+'"/></g>'; }
};
function backdrop(H){
  return '<rect width="360" height="'+H+'" fill="#bfe0ee"/><circle cx="302" cy="52" r="20" fill="#fbe7a1"/>'+
    '<g fill="#fff"><ellipse cx="70" cy="60" rx="30" ry="10"/><ellipse cx="88" cy="52" rx="18" ry="9"/><ellipse cx="226" cy="84" rx="24" ry="8"/></g>'+
    '<path d="M0 250 C60 206 120 226 170 236 C230 204 300 214 360 244 V'+H+' H0 Z" fill="#a8cf9c"/>'+
    '<path d="M0 286 C80 262 280 262 360 286 V'+H+' H0 Z" fill="#86bf74"/><path d="M0 356 C90 346 270 346 360 356 V'+H+' H0 Z" fill="#79b368"/>'+
    '<path d="M160 356 C158 372 150 384 140 400 '+(H > 400 ? 'L136 412 H226 L222 400 ' : 'H222 ')+'C212 384 204 372 200 356 Z" fill="#dccb9f"/>';
}
// owned: a map of item ids. Draws the whole scene. The grounds grow at the bottom once the hedge maze is built.
// live: true when the maze can be tapped to open the puzzle.
function sceneSVG(owned, live){
  var H = owned.maze ? 452 : 400, s = backdrop(H);
  if(!owned.wall && !owned.gatehouse && !owned.keep) s += ART.camp();
  DRAW_ORDER.forEach(function(id){
    if(!owned[id]) return;
    if(id === 'maze' && live) s += '<g class="mazehit" data-act="go:maze"><title>Enter the hedge maze</title><rect x="84" y="398" width="194" height="54" fill="#fff" fill-opacity="0"/>'+ART.maze()+'</g>';
    else s += ART[id]();
  });
  return '<svg viewBox="0 0 360 '+H+'" role="img" aria-label="The castle">'+s+'</svg>';
}
function thumb(it){ return '<svg viewBox="'+it.box+'" aria-hidden="true"><rect x="-50" y="-50" width="500" height="500" fill="#cfe6d2"/>'+ART[it.id]()+'</svg>'; }
