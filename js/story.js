"use strict";
/* The story in pictures: a stage, cartoon figures, speech bubbles and a narrator.
   Every scene says outright what each person feels and why they act. */
var SKIN = '#f2cfa9';
var CAST = {
  duncan:{name:'King Duncan', body:'#7d4bb0', hat:'crown', beard:'#e8e4da'},
  mac:{name:'Macbeth', body:'#27468f', hat:'helm', beard:'#6b3d22'},
  lady:{name:'Lady Macbeth', body:'#b3263a', hat:'hair', hair:'#7a2e1c'},
  banquo:{name:'Banquo', body:'#2c7a58', hat:'helm', beard:'#3a2a20'},
  malcolm:{name:'Malcolm', body:'#9a6fd0', hat:'none', hair:'#c9a15a'},
  w1:{name:'Witch', body:'#4a4458', hat:'witch', skin:'#b9d3a1'},
  w2:{name:'Witch', body:'#5a4a52', hat:'witch', skin:'#b9d3a1'},
  w3:{name:'Witch', body:'#3f4a52', hat:'witch', skin:'#b9d3a1'}
};
var FACES = {
  happy:'<path d="M-6 -48 Q0 -41 6 -48" fill="none" stroke="INK" stroke-width="2" stroke-linecap="round"/>',
  sad:'<path d="M-6 -44 Q0 -50 6 -44" fill="none" stroke="INK" stroke-width="2" stroke-linecap="round"/><path d="M-9 -63 l6 -2 M9 -63 l-6 -2" stroke="INK" stroke-width="1.8" stroke-linecap="round"/>',
  shock:'<ellipse cx="0" cy="-46" rx="3.2" ry="4.4" fill="INK"/><path d="M-9 -65 h6 M3 -65 h6" stroke="INK" stroke-width="1.8" stroke-linecap="round"/>',
  angry:'<path d="M-5 -45 H5" stroke="INK" stroke-width="2.2" stroke-linecap="round"/><path d="M-9 -64 l7 3 M9 -64 l-7 3" stroke="INK" stroke-width="2" stroke-linecap="round"/>',
  sly:'<path d="M-5 -47 Q2 -42 7 -49" fill="none" stroke="INK" stroke-width="2" stroke-linecap="round"/><path d="M-9 -62 l7 2 M3 -65 l6 -1" stroke="INK" stroke-width="1.8" stroke-linecap="round"/>',
  scared:'<path d="M-6 -45 l3 -2 l3 2 l3 -2 l3 2" fill="none" stroke="INK" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M-9 -63 l6 -2 M9 -63 l-6 -2" stroke="INK" stroke-width="1.8" stroke-linecap="round"/>'
};
var PROPS = {
  sword:'<path d="M17 -18 L33 -52" stroke="#9aa3b5" stroke-width="4" stroke-linecap="round"/><path d="M14 -24 l10 5" stroke="INK" stroke-width="3" stroke-linecap="round"/>',
  letter:'<rect x="12" y="-34" width="16" height="12" rx="1.5" fill="#fff" stroke="INK" stroke-width="1.5" transform="rotate(-12 20 -28)"/><path d="M15 -30 h9 M15 -27 h7" stroke="INK" stroke-width="1" transform="rotate(-12 20 -28)"/>',
  cup:'<path d="M14 -34 h10 l-2 9 h-6 Z" fill="#e3a61f" stroke="INK" stroke-width="1.5"/>'
};
function fig(a, i){
  var c = CAST[a.c], s = '', skin = c.skin || SKIN, y = a.y || 196, top = c.hat === 'witch' ? -100 : c.hat === 'fedora' ? -88 : -78;
  if(c.hat === 'hair') s += '<path d="M-18 -54 Q-22 -28 -15 -20 L15 -20 Q22 -28 18 -54 A18 18 0 0 0 -18 -54 Z" fill="'+c.hair+'" stroke="INK" stroke-width="2"/>';
  if(c.hat === 'bob') s += '<path d="M-18.5 -56 A18.5 18.5 0 0 1 18.5 -56 V-43 Q18.5 -38 13 -38 H-13 Q-18.5 -38 -18.5 -43 Z" fill="'+c.hair+'" stroke="INK" stroke-width="2"/>';
  s += '<path d="M-17 0 Q-20 -38 0 -41 Q20 -38 17 0 Z" fill="'+c.body+'" stroke="INK" stroke-width="2" stroke-linejoin="round"/>';
  s += '<circle cx="0" cy="-54" r="15" fill="'+skin+'" stroke="INK" stroke-width="2"/>';
  if((c.hat === 'none' || c.hat === 'bob') && c.hair) s += '<path d="M-15 -57 A15 15 0 0 1 15 -57 Q0 -66 -15 -57 Z" fill="'+c.hair+'" stroke="INK" stroke-width="1.5"/>';
  if(c.beard) s += '<path d="M-11 -46 Q0 -28 11 -46 Q0 -40 -11 -46 Z" fill="'+c.beard+'" stroke="INK" stroke-width="1.5"/>';
  s += '<circle cx="-5" cy="-57" r="1.8" fill="INK"/><circle cx="5" cy="-57" r="1.8" fill="INK"/>'+FACES[a.face || 'happy'];
  if(c.hat === 'crown') s += '<path d="M-12 -66 v-11 l6 6 l6 -9 l6 9 l6 -6 v11 Z" fill="#e3a61f" stroke="INK" stroke-width="2" stroke-linejoin="round"/>';
  if(c.hat === 'helm') s += '<path d="M-15.5 -58 A15.5 15.5 0 0 1 15.5 -58 Z" fill="#9aa3b5" stroke="INK" stroke-width="2"/><path d="M0 -73 v-6" stroke="INK" stroke-width="2.5" stroke-linecap="round"/>';
  if(c.hat === 'witch') s += '<path d="M-13 -66 L0 -98 L13 -66 Z" fill="#2a2433" stroke="INK" stroke-width="2" stroke-linejoin="round"/><path d="M-21 -65 H21" stroke="#2a2433" stroke-width="6" stroke-linecap="round"/>';
  if(c.hat === 'fedora') s += '<path d="M-12 -66 V-77 Q0 -83 12 -77 V-66 Z" fill="'+(c.hatcol || '#3a3a44')+'" stroke="INK" stroke-width="2" stroke-linejoin="round"/><path d="M-21 -66 H21" stroke="'+(c.hatcol || '#3a3a44')+'" stroke-width="5" stroke-linecap="round"/>';
  if(c.hat === 'cap') s += '<path d="M-15.5 -60 A15.5 13 0 0 1 15.5 -60 Z" fill="'+(c.hatcol || '#6a6a6a')+'" stroke="INK" stroke-width="2"/><path d="M4 -61 H22" stroke="'+(c.hatcol || '#6a6a6a')+'" stroke-width="4" stroke-linecap="round"/>';
  if(c.band) s += '<path d="M-14.5 -60 Q0 -68 14.5 -60" fill="none" stroke="'+c.band+'" stroke-width="3"/>';
  if(c.glasses) s += '<g fill="#fbf8ee" fill-opacity=".6" stroke="INK" stroke-width="1.6"><circle cx="-6" cy="-57" r="5"/><circle cx="6" cy="-57" r="5"/></g><path d="M-1 -57 h2" stroke="INK" stroke-width="1.6"/>';
  if(a.prop) s += PROPS[a.prop];
  if(a.crown) s += '<path d="M-12 -66 v-11 l6 6 l6 -9 l6 9 l6 -6 v11 Z" fill="#e3a61f" stroke="INK" stroke-width="2" stroke-linejoin="round"/>';
  var nm = a.label === undefined ? c.name : a.label, w = nm.length*5.6+10;
  if(nm) s += '<rect x="'+(-w/2)+'" y="5" width="'+w+'" height="14" rx="4" fill="#fff" stroke="INK" stroke-width="1.2"/><text x="0" y="15.5" text-anchor="middle" font-family="Alegreya Sans, sans-serif" font-weight="800" font-size="10" fill="INK">'+nm+'</text>';
  if(a.feel){ var fw = a.feel.length*6.1+12; s += '<g class="feel"><rect x="'+(-fw/2)+'" y="'+(top-17)+'" width="'+fw+'" height="15" rx="7.5" fill="#b3263a"/><text x="0" y="'+(top-6)+'" text-anchor="middle" font-family="Alegreya Sans, sans-serif" font-weight="800" font-size="10" fill="#fff" letter-spacing=".5">'+a.feel.toUpperCase()+'</text></g>'; }
  return '<g transform="translate('+a.x+' '+y+')"><g class="pop'+(a.shake ? ' shake' : '')+'" style="animation-delay:'+(i*0.18)+'s">'+s.replace(/INK/g,'#1c2333')+'</g></g>';
}
var BACKS = {
  court:'<rect width="360" height="220" fill="#d9d2c0"/><rect y="176" width="360" height="44" fill="#a8997c"/><g fill="#c4bca7" stroke="#1c2333" stroke-width="1.5"><rect x="20" y="20" width="26" height="156"/><rect x="314" y="20" width="26" height="156"/></g><path d="M150 40 h60 v70 l-30 16 l-30 -16 Z" fill="#27468f" stroke="#1c2333" stroke-width="2"/><path d="M180 52 v44 M162 70 h36" stroke="#e3a61f" stroke-width="5"/>',
  battle:'<rect width="360" height="220" fill="#f0c9a0"/><circle cx="60" cy="56" r="26" fill="#f7e2a8"/><path d="M0 150 C80 110 150 150 220 124 C280 104 320 130 360 120 V220 H0 Z" fill="#b98f62"/><path d="M0 176 C120 160 240 170 360 176 V220 H0 Z" fill="#8d9b5b"/><path d="M300 150 v-52" stroke="#1c2333" stroke-width="2.5"/><path d="M300 98 l26 6 l-8 7 l8 7 l-26 4 Z" fill="#b3263a" stroke="#1c2333" stroke-width="1.5"/>',
  heath:'<rect width="360" height="220" fill="#8f86a8"/><path d="M0 130 C90 100 200 120 360 96 V220 H0 Z" fill="#6d6a80"/><path d="M0 176 C120 164 240 168 360 176 V220 H0 Z" fill="#5c6b4e"/><path d="M318 176 V112 M318 132 l-22 -18 M318 122 l18 -20 M318 146 l-14 -8" stroke="#1c2333" stroke-width="4" stroke-linecap="round" fill="none"/><path class="bolt" d="M70 0 L52 44 L70 44 L50 96" fill="none" stroke="#fbe7a1" stroke-width="4" stroke-linejoin="round"/><g fill="#b7b0c8"><ellipse cx="130" cy="34" rx="46" ry="12"/><ellipse cx="250" cy="52" rx="38" ry="10"/></g>',
  room:'<rect width="360" height="220" fill="#5a4a52"/><rect y="176" width="360" height="44" fill="#6b4a32"/><rect x="236" y="36" width="60" height="84" rx="30" fill="#2d3550" stroke="#1c2333" stroke-width="2"/><circle cx="278" cy="62" r="9" fill="#fbe7a1"/><rect x="34" y="150" width="8" height="26" fill="#f3ead0" stroke="#1c2333" stroke-width="1.5"/><path class="flick" d="M38 150 c-6 -5 -1 -9 0 -15 c1 6 6 10 0 15 Z" fill="#e3a61f" stroke="#b3263a" stroke-width="1.2"/>',
  castle:'<rect width="360" height="220" fill="#f1b78a"/><circle cx="296" cy="58" r="22" fill="#f7e2a8"/><path d="M0 176 C120 166 240 166 360 176 V220 H0 Z" fill="#7a8f5a"/><g fill="#b9b4a8" stroke="#1c2333" stroke-width="2"><rect x="20" y="70" width="60" height="110"/><rect x="80" y="100" width="90" height="80"/></g><path d="M112 180 v-34 a14 14 0 0 1 28 0 v34 Z" fill="#3a2f2b" stroke="#1c2333" stroke-width="2"/><path d="M50 70 V44" stroke="#1c2333" stroke-width="2"/><path class="wave" d="M51 44 l22 4 l-6 6 l6 6 l-22 2 Z" fill="#27468f" stroke="#1c2333" stroke-width="1.5"/>'
};
var STORIES = {};
STORIES.macbeth = {
  title:'Macbeth: the story in pictures', sub:'All five acts', lesson:'3.1', narrator:'Corbie the raven', icon:'raven', endH:'That is the end of the play', end:'Macbeth is dead and Malcolm is king.',
  scenes:[
    {bg:'court', when:'Before the play starts', place:'Scotland, about a thousand years ago',
     actors:[{c:'duncan',x:60,face:'happy'},{c:'mac',x:145,face:'happy'},{c:'lady',x:225,face:'sly'},{c:'banquo',x:305,face:'happy'}],
     cap:'Hello. I am Corbie, the castle raven. I am going to tell you the story of Macbeth. Shakespeare’s characters often hide what they feel, so I will tell you their feelings out loud. Here are the four people you need first.',
     who:[['King Duncan','King of Scotland. Kind, generous and far too trusting.'],['Macbeth','Duncan’s cousin and his best soldier. Brave. He secretly wants more than he has.'],['Lady Macbeth','Macbeth’s wife. Clever and determined. She wants her husband to be king.'],['Banquo','Macbeth’s friend and fellow general. Loyal and truthful.']],
     key:'Macbeth and Lady Macbeth are married. Duncan is their king and their relative. Banquo is Macbeth’s friend.'},
    {bg:'battle', when:'Act 1, scenes 1 and 2', place:'A battlefield',
     actors:[{c:'mac',x:120,face:'angry',prop:'sword',feel:'Fierce'},{c:'duncan',x:260,face:'happy',feel:'Grateful'}],
     say:[{c:'duncan',t:'O valiant cousin! worthy gentleman!'}],
     cap:'Scotland is at war with rebels and with the King of Norway. Macbeth wins the battle. He cuts the rebel leader open from his belly button to his jaw. Everyone is delighted with him. Fighting is his job and he is very, very good at it.',
     why:[['King Duncan','grateful and impressed','he gives Macbeth a reward: a new title, Thane of Cawdor. A thane is a Scottish lord.']],
     key:'The old Thane of Cawdor was a traitor, and Duncan had trusted him completely. Duncan is bad at spotting traitors. Remember that.'},
    {bg:'heath', when:'Act 1, scene 3', place:'A moor, in a storm',
     actors:[{c:'w1',x:50,face:'sly',label:''},{c:'w2',x:100,face:'sly',label:'The three witches'},{c:'w3',x:150,face:'sly',label:''},{c:'mac',x:228,face:'shock',feel:'Tempted',shake:true},{c:'banquo',x:314,face:'angry',feel:'Suspicious'}],
     say:[{c:'w2',t:'All hail, Macbeth! that shalt be king hereafter!'}],
     cap:'Three witches stop Macbeth and Banquo. They smell awful and they know the future. They tell Macbeth he will be Thane of Cawdor, and then king. They tell Banquo that his children will be kings. Then they vanish. Moments later a messenger arrives: Macbeth is now Thane of Cawdor. The first prediction has come true.',
     why:[['Macbeth','excited and frightened at once','he starts to imagine being king. He already wanted it, deep down.'],['Banquo','suspicious','he warns Macbeth that evil things tell small truths to trick people into big mistakes.']],
     watch:[['Watch the witches meet Macbeth and Banquo','Shakespeare’s Globe, London, 2011','https://www.youtube.com/watch?v=mX4DHmjFfNE']],
     key:'The witches never tell Macbeth to kill anyone. The idea of murder comes from Macbeth himself.'},
    {bg:'court', when:'Act 1, scene 4', place:'The king’s palace',
     actors:[{c:'duncan',x:62,face:'happy',feel:'Trusting'},{c:'malcolm',x:166,face:'happy',label:'Malcolm, his son'},{c:'mac',x:270,face:'sly',feel:'Jealous'}],
     say:[{c:'mac',t:'Stars, hide your fires! Let not light see my black and deep desires'}],
     cap:'Duncan thanks Macbeth warmly. Then he announces that his son Malcolm will be the next king. Macbeth smiles and bows. Inside, he is furious. Malcolm is now standing between him and the crown. He says the line in the bubble to himself, so that nobody else hears it.',
     why:[['Macbeth','jealous and ashamed of his own thoughts','he hides his feelings from the king. He wants the dark to cover what he is planning.']],
     key:'What Macbeth shows on his face and what he feels are different. This gap between appearance and reality runs through the whole play.'},
    {bg:'room', when:'Act 1, scene 5', place:'Macbeth’s castle at Inverness',
     actors:[{c:'lady',x:130,face:'sly',prop:'letter',feel:'Determined'},{c:'mac',x:250,face:'scared',feel:'Unsure'}],
     say:[{c:'lady',t:'look like the innocent flower, But be the serpent under’t.'}],
     cap:'Lady Macbeth reads a letter from her husband about the witches. She decides at once that Duncan must die. She worries that Macbeth is too kind to do it. She says he is “too full o’ the milk of human kindness”. When Macbeth arrives home, she tells him the plan: the king is coming to stay tonight, and he will not leave alive.',
     why:[['Lady Macbeth','ambitious for her husband, and impatient','she takes charge and plans the murder herself.'],['Macbeth','tempted but unsure','he lets her lead. He does not say yes and he does not say no.']],
     key:'Her line means: act friendly, be deadly. A flower looks harmless. A serpent, which is a snake, kills.'},
    {bg:'castle', when:'Act 1, scenes 6 and 7', place:'Inverness, that evening',
     actors:[{c:'duncan',x:186,face:'happy',prop:'cup',feel:'Happy'},{c:'mac',x:252,face:'sad',feel:'Guilty'},{c:'lady',x:316,face:'angry',feel:'Scornful'}],
     say:[{c:'mac',t:'We will proceed no further in this business'}],
     cap:'Duncan arrives and says what a lovely castle it is. He does not know that his hosts are planning to kill him. During dinner Macbeth slips away to think. He lists the reasons not to do it: Duncan is his king, his relative and his guest, and he has been a good king. Macbeth tells his wife the plan is off. She calls him a coward and says a real man would keep his promise. Macbeth gives in.',
     why:[['Macbeth','guilty first, then ashamed','he changes his mind twice. He knows the murder is wrong. He agrees to it anyway, because he wants the crown and cannot bear his wife thinking he is weak.'],['Lady Macbeth','scornful and determined','she attacks his pride until he agrees.']],
     watch:[['Watch Macbeth’s speech from Act 1, scene 7 on the Globe stage','Shakespeare’s Globe, London, 2011','https://www.youtube.com/watch?v=yIGFGYKafLM']],
     key:'Macbeth is not tricked into murder. He chooses it, knowing it is wrong. His reasons are ambition and pride. Next: Act 2, in which things get stabby.'}
  ],
  questions:[
    ['Why does Duncan make Macbeth Thane of Cawdor?','He is grateful that Macbeth won the battle.',['The witches order him to.','Lady Macbeth asks him to.','Macbeth threatens him.'],'Duncan feels grateful and impressed, so he rewards Macbeth with a title. The title used to belong to a traitor.'],
    ['Do the witches tell Macbeth to kill Duncan?','No. They only say he will be king. The idea of murder is his own.',['Yes. They give him a dagger.','Yes. They say Duncan must die that night.','No. They tell Lady Macbeth to do it.'],'The witches predict. They do not give orders. Macbeth already wanted to be king, deep down.'],
    ['How does Macbeth feel when Duncan names Malcolm as the next king?','Jealous, because Malcolm is now between him and the crown.',['Pleased, because Malcolm is his friend.','Relieved, because he does not want to be king.','Bored, because he was not listening.'],'He hides it. He smiles at the king and then says “Stars, hide your fires” to himself, so that nobody else can hear.'],
    ['What does Lady Macbeth mean by “look like the innocent flower, But be the serpent under’t”?','Seem friendly and harmless, but be ready to kill.',['Plant flowers to welcome the king.','Be kind to Duncan, because he is innocent.','Beware of snakes in the castle garden.'],'A flower looks harmless and a serpent is deadly. She is telling Macbeth to hide his purpose behind a friendly face.'],
    ['Macbeth says “We will proceed no further in this business”, then agrees to the murder after all. Why?','His wife calls him a coward, and he is ashamed. He also wants the crown.',['The witches appear and command him.','Duncan insults him at dinner.','He finds out that Duncan plans to kill him.'],'He knows the murder is wrong and says so. He chooses it anyway, out of ambition and wounded pride.']
  ]
};
function stageHTML(sc){
  var svg = '<svg viewBox="0 0 360 220" role="img" aria-label="'+esc(sc.place)+'">'+BACKS[sc.bg]+sc.actors.map(fig).join('')+'</svg>', bub = '';
  (sc.say || []).forEach(function(b){
    var a = sc.actors.filter(function(x){ return x.c === b.c; })[0], top = CAST[a.c].hat === 'witch' ? 118 : 96, feelGap = a.feel ? 18 : 0;
    var W = b.t.length < 30 ? 48 : 64, cx = a.x/3.6, L = Math.max(2, Math.min(98-W, cx-W/2)), tail = Math.max(10, Math.min(90, (cx-L)/W*100));
    bub += '<div class="bubble" style="left:'+L.toFixed(1)+'%;width:'+W+'%;bottom:'+((220-((a.y || 196)-top-feelGap))/2.2+2).toFixed(1)+'%;--tail:'+tail.toFixed(0)+'%"><b>'+CAST[a.c].name+'</b>“'+b.t+'”</div>';
  });
  return '<div class="stage">'+svg+bub+'</div>';
}
