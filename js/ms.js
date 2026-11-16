"use strict";
/* Macbeth: the story in pictures, Acts 2 to 5. Adds to the cast, the props and the backdrops, then to the scene list. */
CAST.macduff = {name:'Macduff', body:'#8a5a2b', hat:'helm', beard:'#b5532a'};
CAST.donalbain = {name:'Donalbain', body:'#b08ad8', hat:'none', hair:'#8a6a3a'};
CAST.fleance = {name:'Fleance', body:'#58a37f', hat:'none', hair:'#3a2a20'};
CAST.murderer = {name:'Murderer', body:'#3a3a44', hat:'none', hair:'#1c2333', beard:'#1c2333'};
CAST.ghost = {name:'Banquo’s ghost', body:'#cfd8e6', hat:'helm', beard:'#aab4c6', skin:'#eef2f7'};
CAST.ladymacduff = {name:'Lady Macduff', body:'#d08a2e', hat:'hair', hair:'#5a3a22'};
CAST.son = {name:'Her son', body:'#e0b060', hat:'none', hair:'#5a3a22'};
CAST.doctor = {name:'Doctor', body:'#4a5a6a', hat:'none', hair:'#e8e4da', beard:'#e8e4da'};
CAST.soldier = {name:'Soldier', body:'#5c6b4e', hat:'helm'};
PROPS.dagger = '<path d="M18 -20 L30 -46" stroke="#b3263a" stroke-width="4" stroke-linecap="round"/><path d="M15 -25 l9 4" stroke="INK" stroke-width="3" stroke-linecap="round"/>';
PROPS.candle = '<rect x="18" y="-36" width="5" height="14" fill="#f3ead0" stroke="INK" stroke-width="1.2"/><path d="M20.5 -36 c-4 -4 -1 -7 0 -11 c1 4 4 7 0 11 Z" fill="#e3a61f" stroke="#b3263a" stroke-width="1"/>';
PROPS.branch = '<path d="M20 -18 V-62" stroke="#6b4a32" stroke-width="3" stroke-linecap="round"/><g fill="#2c7a58" stroke="INK" stroke-width="1.2"><ellipse cx="13" cy="-56" rx="8" ry="5"/><ellipse cx="27" cy="-52" rx="8" ry="5"/><ellipse cx="20" cy="-66" rx="8" ry="6"/><ellipse cx="14" cy="-42" rx="7" ry="4"/></g>';
BACKS.night = '<rect width="360" height="220" fill="#232a44"/><circle cx="300" cy="46" r="18" fill="#f3ead0"/><circle cx="292" cy="42" r="16" fill="#232a44"/><g fill="#f3ead0"><circle cx="60" cy="40" r="1.6"/><circle cx="120" cy="70" r="1.3"/><circle cx="190" cy="30" r="1.6"/><circle cx="240" cy="84" r="1.2"/><circle cx="30" cy="96" r="1.2"/></g><path d="M0 176 H360 V220 H0 Z" fill="#3a3f52"/><g fill="#2e3348" stroke="#1c2333" stroke-width="2"><rect x="10" y="70" width="70" height="106"/><path d="M10 70 v-12 h14 v12 h14 v-12 h14 v12 h14 v-12 h14 v12 Z"/></g><rect x="34" y="112" width="20" height="30" rx="10" fill="#e3a61f" opacity=".75"/>';
BACKS.banquet = '<rect width="360" height="220" fill="#6b3d36"/><rect y="176" width="360" height="44" fill="#4a2c26"/><g fill="#8a5a4a" stroke="#1c2333" stroke-width="1.5"><rect x="16" y="24" width="22" height="152"/><rect x="322" y="24" width="22" height="152"/></g><path d="M60 40 h70 v50 l-35 14 l-35 -14 Z" fill="#b3263a" stroke="#1c2333" stroke-width="2"/><path d="M230 40 h70 v50 l-35 14 l-35 -14 Z" fill="#27468f" stroke="#1c2333" stroke-width="2"/><rect x="40" y="150" width="280" height="14" rx="3" fill="#c9a15a" stroke="#1c2333" stroke-width="2"/><g fill="#e3a61f" stroke="#1c2333" stroke-width="1.2"><path d="M70 150 v-10 h10 v10 Z"/><path d="M280 150 v-10 h10 v10 Z"/><ellipse cx="180" cy="146" rx="18" ry="5"/></g>';
BACKS.cave = '<rect width="360" height="220" fill="#2d2a3a"/><path d="M0 0 H360 V220 H0 Z M40 220 C40 90 120 40 180 40 C240 40 320 90 320 220 Z" fill="#1c1a26" fill-rule="evenodd"/><path d="M0 186 H360 V220 H0 Z" fill="#3a3648"/><g stroke="#1c2333" stroke-width="2"><path d="M74 150 h44 v22 a22 16 0 0 1 -44 0 Z" fill="#3a3a44"/><ellipse cx="96" cy="150" rx="22" ry="6" fill="#58a37f"/></g><g fill="#9fe0b8" opacity=".8"><circle class="puff" cx="90" cy="136" r="5"/><circle class="puff b" cx="102" cy="128" r="4"/><circle class="puff c" cx="96" cy="118" r="3"/></g><path class="flick" d="M84 186 c-6 -6 -1 -10 0 -16 c2 6 7 10 2 16 Z M104 186 c-6 -6 -1 -10 0 -16 c2 6 7 10 2 16 Z" fill="#e3a61f" stroke="#b3263a" stroke-width="1.2"/>';
BACKS.forest = '<rect width="360" height="220" fill="#bcd4c0"/><path d="M0 150 C90 130 200 150 360 126 V220 H0 Z" fill="#8fae86"/><path d="M0 178 C120 166 240 170 360 178 V220 H0 Z" fill="#6f9468"/><g stroke="#1c2333" stroke-width="2"><g fill="#6b4a32"><rect x="26" y="96" width="8" height="82"/><rect x="316" y="90" width="8" height="88"/><rect x="286" y="106" width="7" height="72"/></g><g fill="#2c7a58"><ellipse cx="30" cy="84" rx="24" ry="30"/><ellipse cx="320" cy="76" rx="26" ry="32"/><ellipse cx="290" cy="98" rx="18" ry="22"/></g></g>';

STORIES.macbeth.scenes.pop && (function(){
  var last = STORIES.macbeth.scenes[STORIES.macbeth.scenes.length-1];
  last.key = 'Macbeth is not tricked into murder. He chooses it, knowing it is wrong. His reasons are ambition and pride.';
})();
STORIES.macbeth.scenes.push(
  {bg:'night', when:'Act 2, scene 1', place:'The castle courtyard, after midnight',
   actors:[{c:'mac',x:200,face:'scared',feel:'Terrified',shake:true}],
   say:[{c:'mac',t:'Is this a dagger which I see before me'}],
   cap:'Everyone is asleep. Macbeth is on his way to kill the king. He sees a dagger floating in the air, pointing towards Duncan’s room. He tries to grab it and his hand goes straight through. The dagger is not real. His mind is so full of the murder that he is seeing things. A bell rings. That is his wife’s signal. He goes in.',
   why:[['Macbeth','terrified and guilty before he has done anything','his own mind shows him the weapon. He goes on anyway, because he has promised his wife and he wants the crown.']],
   key:'The dagger is a hallucination, which means something a person sees that is not there. It shows that Macbeth’s guilt has already started.'},
  {bg:'night', when:'Act 2, scene 2', place:'The courtyard, a few minutes later',
   actors:[{c:'mac',x:130,face:'shock',feel:'Horrified',prop:'dagger',shake:true},{c:'lady',x:240,face:'angry',feel:'In control'}],
   say:[{c:'lady',t:'A little water clears us of this deed'}],
   cap:'Macbeth comes back with blood on his hands. He has killed Duncan. He has also made a big mistake: he has carried the daggers out with him. They were supposed to stay with the sleeping guards, so that the guards would be blamed. Macbeth is too frightened to go back. Lady Macbeth calls him weak, takes the daggers and does it herself. Macbeth says all the water in the ocean could not clean his hands. She says a little water will do.',
   why:[['Macbeth','horrified by what he has done','he cannot think or act. He hears a voice saying he has murdered sleep.'],['Lady Macbeth','scornful and practical','she fixes his mistake and tells him to wash and go to bed.']],
   key:'He thinks the guilt will never wash off. She thinks it is easy to wash off. Remember this. By Act 5 they will have swapped places.'},
  {bg:'castle', when:'Act 2, scenes 3 and 4', place:'Inverness, the next morning',
   actors:[{c:'macduff',x:70,face:'shock',feel:'Horrified'},{c:'mac',x:160,face:'sad',feel:'Pretending'},{c:'malcolm',x:250,face:'scared',feel:'Afraid'},{c:'donalbain',x:320,face:'scared'}],
   say:[{c:'macduff',t:'O horror, horror, horror!'}],
   cap:'There is knocking at the gate. A drunken Porter, who is the gatekeeper, takes a long time to open it and makes jokes about being the porter of hell. This is the only funny scene in the play, and it is funny on purpose. Then Macduff, a nobleman, goes to wake the king and finds him dead. Macbeth pretends to be shocked. He kills the two guards before anyone can question them and says he did it out of rage. Duncan’s sons, Malcolm and Donalbain, guess that they are next. They run away, Malcolm to England and Donalbain to Ireland. Running makes them look guilty. So Macbeth is crowned king.',
   who:[['Macduff','The Thane of Fife. Loyal to Duncan. He is the one who finds the body, and he does not go to see Macbeth crowned.'],['Donalbain','Duncan’s younger son.']],
   why:[['Macduff','horrified and grieving','he raises the alarm. He is already a little suspicious of Macbeth.'],['Malcolm and Donalbain','afraid for their lives','they run away. This is sensible, and it hands Macbeth the crown.']],
   watch:[['Watch the Porter','Shakespeare’s Globe, London, 2011','https://www.youtube.com/watch?v=652_suY28Vk'],['Watch the body being found','Shakespeare’s Globe, London, 2011','https://www.youtube.com/watch?v=1kOKqVwCBPw']],
   key:'Macbeth is now king. He got what the witches promised. Next: Act 3, in which being king does not make him happy.'},
  {bg:'court', when:'Act 3, scenes 1 and 2', place:'The royal palace at Forres',
   actors:[{c:'mac',x:90,face:'angry',feel:'Afraid',crown:true},{c:'murderer',x:200,face:'sly'},{c:'lady',x:300,face:'sad',feel:'Left out'}],
   say:[{c:'mac',t:'To be thus is nothing'}],
   cap:'Macbeth is king, and he is miserable. The witches said Banquo’s children would be kings. That means Macbeth has murdered Duncan to put somebody else’s family on the throne. Also, Banquo was there when the witches spoke, and Banquo suspects him. So Macbeth hires two murderers to kill Banquo and his son Fleance. This time he does not ask his wife. He does not even tell her.',
   why:[['Macbeth','afraid and jealous of Banquo','he orders two more murders. Killing has become his way of solving problems.'],['Lady Macbeth','unhappy and shut out','she has what she wanted and it has brought her no joy. Her husband no longer needs her.']],
   watch:[['Watch Macbeth’s speech about Banquo','Shakespeare’s Globe, London, 2011','https://www.youtube.com/watch?v=XGl1DumaFmA']],
   key:'His line means: being king is worth nothing unless I am safe as king. In Act 1 she led and he followed. Now he acts alone.'},
  {bg:'night', when:'Act 3, scene 3', place:'A road near the palace, at dusk',
   actors:[{c:'banquo',x:110,face:'shock',feel:'Betrayed'},{c:'fleance',x:190,face:'scared',feel:'Terrified'},{c:'murderer',x:290,face:'angry',prop:'dagger'}],
   cap:'The murderers jump out at Banquo and Fleance in the dark. Banquo is killed. As he dies he shouts to his son to run. Fleance escapes. This matters a great deal. The witches said Banquo’s descendants would be kings, and a descendant is a child, grandchild and so on. With Fleance alive, that prophecy can still come true.',
   why:[['Banquo','betrayed, and afraid for his son','he uses his last breath to save Fleance.'],['Fleance','terrified','he runs, and lives.']],
   key:'Banquo dies. Fleance lives. Macbeth’s plan has half failed.'},
  {bg:'banquet', when:'Act 3, scene 4', place:'The palace, a feast for the lords',
   actors:[{c:'ghost',x:90,face:'sad',y:150},{c:'mac',x:200,face:'scared',feel:'Terrified',crown:true,shake:true},{c:'lady',x:300,face:'angry',feel:'Embarrassed'}],
   say:[{c:'mac',t:'never shake Thy gory locks at me'}],
   cap:'Macbeth holds a feast to show everyone what a fine king he is. A murderer whispers the news: Banquo is dead, Fleance got away. Then Macbeth goes to sit down and his chair is taken. Banquo’s ghost is in it, covered in blood. Nobody else can see it. Macbeth shouts at an empty chair in front of all the lords. Lady Macbeth says he is unwell and sends everyone home. The feast is ruined. Afterwards Macbeth decides to visit the witches again. He says he has waded so far into blood that going back would be as hard as going on.',
   why:[['Macbeth','terrified and guilty','he sees the man he had killed, and gives himself away in front of the whole court.'],['Lady Macbeth','embarrassed and alarmed','she covers for him. It is the last time she is able to.']],
   watch:[['Watch the banquet scene','Shakespeare’s Globe, London, 2011','https://www.youtube.com/watch?v=oEr16BkQDpg']],
   key:'“Gory locks” means bloody hair. The ghost is Macbeth’s guilt made visible, like the dagger. The lords now suspect him.'},
  {bg:'cave', when:'Act 4, scene 1', place:'The witches’ cave',
   actors:[{c:'w1',x:150,face:'sly',label:''},{c:'w2',x:200,face:'sly',label:'The witches'},{c:'w3',x:250,face:'sly',label:''},{c:'mac',x:316,face:'happy',feel:'Overconfident',crown:true}],
   say:[{c:'w2',t:'Double, double, toil and trouble'}],
   cap:'The witches are cooking something horrible in a cauldron, which is a large pot. Macbeth demands answers. They show him three apparitions. An apparition is a ghostly figure. The first says: beware Macduff. The second says: nobody born of a woman can harm Macbeth. The third says: Macbeth will not be beaten until Birnam Wood comes to Dunsinane Hill. Macbeth is delighted. Everybody is born of a woman, and forests cannot walk. He thinks he cannot lose. Then they show him a line of eight kings who all look like Banquo, and he is furious.',
   why:[['Macbeth','overconfident','he hears what he wants to hear and stops being careful.'],['The witches','pleased with their mischief','they tell him things that are true and misleading at the same time.']],
   watch:[['Watch the witches and the apparitions','Shakespeare’s Globe, London, 2011','https://www.youtube.com/watch?v=1k4s_HtJzKk']],
   key:'Three warnings: beware Macduff, none of woman born, Birnam Wood. The last two sound impossible. They are tricks.'},
  {bg:'room', when:'Act 4, scene 2', place:'Macduff’s castle in Fife',
   actors:[{c:'ladymacduff',x:120,face:'scared',feel:'Abandoned'},{c:'son',x:185,face:'scared',y:196},{c:'murderer',x:290,face:'angry',prop:'dagger'}],
   cap:'Macduff has gone to England to join Malcolm. Macbeth cannot reach him, so he sends murderers to Macduff’s home. They kill Lady Macduff, her young son and everyone in the castle. This is the worst thing Macbeth does. Duncan was a rival. Banquo was a threat. These victims are a mother and children who have done nothing and could not hurt him.',
   why:[['Macbeth','angry and cruel','he kills a family out of spite, because he cannot get at the man himself.'],['Lady Macduff','frightened and abandoned','she cannot understand why her husband left them unprotected.']],
   key:'Macbeth is now a tyrant. A tyrant is a cruel ruler who uses power without any limit.'},
  {bg:'court', when:'Act 4, scene 3', place:'The English court',
   actors:[{c:'malcolm',x:110,face:'sad',feel:'Cautious'},{c:'macduff',x:230,face:'sad',feel:'Grief-stricken'}],
   say:[{c:'macduff',t:'All my pretty ones? Did you say all?'}],
   cap:'In England, Macduff asks Malcolm to come home and fight Macbeth. Malcolm is not sure he can trust him. So he tests him. He pretends to be a dreadful person who would be an even worse king. Macduff is horrified and weeps for Scotland. That is the right answer, and Malcolm tells him the truth: he is ready, and the English king has given him ten thousand soldiers. Then a messenger arrives with the news about Macduff’s family. Macduff can hardly take it in. Malcolm tells him to turn his grief into anger.',
   why:[['Malcolm','cautious','he tests Macduff before trusting him. His father trusted people too easily, and Malcolm has learned from that.'],['Macduff','grief-stricken, then determined','he vows to kill Macbeth himself.']],
   key:'Malcolm is careful where Duncan was trusting. Macduff now has a personal reason to kill Macbeth.'},
  {bg:'room', when:'Act 5, scene 1', place:'Macbeth’s castle at Dunsinane, at night',
   actors:[{c:'doctor',x:80,face:'shock',feel:'Alarmed'},{c:'lady',x:230,face:'scared',feel:'Tormented by guilt',prop:'candle'}],
   say:[{c:'lady',t:'Out, damned spot! out, I say!'}],
   cap:'Lady Macbeth is walking in her sleep. She carries a candle, because she is now afraid of the dark. She rubs her hands as if she is washing them, over and over. She thinks she can see and smell Duncan’s blood on them. A doctor and a servant watch and listen as she talks about all three murders. In Act 2 she said a little water would clean them. Now she says all the perfumes of Arabia could not sweeten her hand.',
   why:[['Lady Macbeth','tormented by guilt','the guilt she pushed down in Act 2 has come out in her sleep, where she cannot control it.'],['The doctor','alarmed','he realises what he is hearing and knows he cannot cure it.']],
   key:'The spot is blood that only she can see. She and Macbeth have swapped places: he feels nothing now, and she feels everything.'},
  {bg:'forest', when:'Act 5, scenes 2 to 4', place:'Birnam Wood, near Dunsinane',
   actors:[{c:'malcolm',x:90,face:'happy',feel:'Determined'},{c:'macduff',x:180,face:'angry',feel:'Vengeful'},{c:'soldier',x:270,face:'happy',prop:'branch'}],
   cap:'Malcolm’s army arrives at Birnam Wood. The Scottish lords have left Macbeth and joined him. Malcolm has a clever idea. He tells every soldier to cut a branch and carry it in front of him. That way Macbeth’s lookouts will not be able to count them. So ten thousand men start walking towards Dunsinane, each one holding a piece of the forest. Birnam Wood is coming to Dunsinane. You may now see the problem with the witches’ promise.',
   why:[['Malcolm','determined','he leads the army and plans carefully.'],['Macduff','vengeful, which means wanting revenge','he says he will only fight one man.']],
   key:'The “impossible” thing happens in an ordinary way. The witches did not lie. They misled.'},
  {bg:'castle', when:'Act 5, scene 5', place:'Inside the castle at Dunsinane',
   actors:[{c:'mac',x:190,face:'sad',feel:'Empty',crown:true}],
   say:[{c:'mac',t:'Life’s but a walking shadow'}],
   cap:'Macbeth hears women screaming. He notices that it does not frighten him. He has seen so many horrors that he can no longer feel fear. Then he is told: the queen is dead. He does not cry. He says she would have died some time anyway. Then he gives the most famous speech in the play. He says life is short and means nothing. It is like an actor who is on the stage for an hour and then is never heard again. Straight afterwards a messenger runs in to say the wood is moving.',
   why:[['Macbeth','empty and without hope','he has lost his wife, his friends and his peace of mind. He got the crown and it was worth nothing.']],
   watch:[['Watch the “Tomorrow” speech','Shakespeare’s Globe, London, 2011','https://www.youtube.com/watch?v=yavfz5AMX4c']],
   key:'This is what all the murders bought him: a life he thinks is meaningless.'},
  {bg:'battle', when:'Act 5, scene 8', place:'The battlefield outside the castle',
   actors:[{c:'mac',x:120,face:'shock',feel:'Despairing',prop:'sword',crown:true},{c:'macduff',x:250,face:'angry',feel:'Vengeful',prop:'sword'}],
   say:[{c:'macduff',t:'Macduff was from his mother’s womb Untimely ripp’d'}],
   cap:'Macbeth fights on. He still has one promise left: nobody born of a woman can harm him. Then he meets Macduff. Macbeth tells him he is wasting his time. Macduff replies that he was not born in the usual way. He was cut out of his mother’s body before the natural time. Today this is called a caesarean birth. So he was not “born” as the witches meant it. Macbeth finally understands that the witches tricked him with words. He could give up. He refuses, and fights. Macduff kills him and cuts off his head.',
   why:[['Macbeth','despairing, then defiant','he knows he will lose and chooses to die fighting, like the soldier he was in Act 1.'],['Macduff','vengeful','he kills the man who murdered his family.']],
   watch:[['Watch the last fight','Shakespeare’s Globe, London, 2011','https://www.youtube.com/watch?v=ecajYsAM-aY']],
   key:'Both “impossible” prophecies came true. Macbeth trusted the witches’ words and did not ask what they left out.'},
  {bg:'court', when:'Act 5, scene 9', place:'The castle at Dunsinane',
   actors:[{c:'macduff',x:100,face:'happy',feel:'Relieved'},{c:'malcolm',x:210,face:'happy',feel:'Grateful',crown:true},{c:'soldier',x:300,face:'happy'}],
   say:[{c:'macduff',t:'Hail, King of Scotland!'}],
   cap:'Macduff brings in Macbeth’s head and greets Malcolm as king. Malcolm thanks everyone and promises rewards. He calls Macbeth a butcher and Lady Macbeth a fiend-like queen. A fiend is a devil. The rightful king is back on the throne and order returns to Scotland. That is the end of the play.',
   why:[['Malcolm','grateful and in command','he rewards his supporters and calls back the people who fled.'],['Macduff','relieved','he has avenged his family and freed his country.']],
   key:'The play begins with a traitor’s head on a spike and ends with another. Macbeth started as the hero who killed a traitor. He ends as the traitor.'}
);
STORIES.macbeth.questions.push(
  ['What does Macbeth see just before he murders Duncan?','A dagger floating in the air that is not really there',['Banquo’s ghost sitting in a chair','Three witches at the gate','A line of eight kings'],'The dagger is a hallucination. His guilt has started before the murder.'],
  ['After the murder, Macbeth says the ocean could not clean his hands. What does Lady Macbeth say?','A little water will clean them',['Nothing will ever clean them','They should confess to the king’s sons','They must run away to England'],'“A little water clears us of this deed.” By Act 5 she feels the opposite.'],
  ['Why do Malcolm and Donalbain run away after their father is killed?','They are afraid they will be murdered next',['They killed him','Macbeth orders them to leave','They want to find the witches'],'Running saves their lives. It also makes them look guilty, which lets Macbeth take the crown.'],
  ['Why does Macbeth have Banquo killed?','The witches said Banquo’s descendants would be kings, and Banquo suspects him',['Banquo tried to kill him','Lady Macbeth told him to','Banquo stole the crown'],'Macbeth feels afraid and jealous. He does not want to have murdered Duncan for the benefit of Banquo’s family.'],
  ['Who escapes when Banquo is murdered?','His son Fleance',['Macduff','Malcolm','Lady Macduff'],'Because Fleance lives, the prophecy about Banquo’s descendants can still come true.'],
  ['What happens at the banquet?','Macbeth sees Banquo’s ghost, which nobody else can see, and shouts at it in front of the lords',['Lady Macbeth confesses to the murder','Macduff kills Macbeth','The witches arrive with a cauldron'],'The ghost is Macbeth’s guilt made visible. The lords begin to suspect him.'],
  ['Which is the worst and most pointless of Macbeth’s crimes?','Having Lady Macduff and her children murdered',['Killing the Thane of Cawdor','Killing a rebel in battle','Hiring a doctor'],'They are no threat to him. He kills them out of spite. This is when he becomes a tyrant.'],
  ['What is Lady Macbeth doing in the sleepwalking scene, and what does she feel?','Trying to wash imaginary blood from her hands. She is tormented by guilt',['Counting her jewels. She feels proud','Writing to Macduff. She feels hopeful','Looking for the witches. She feels angry'],'“Out, damned spot!” The guilt she denied in Act 2 has returned.'],
  ['How does Birnam Wood “come to Dunsinane”?','Malcolm’s soldiers each carry a branch cut from the wood as they march',['The witches move the trees by magic','An earthquake shifts the forest','Macbeth orders the wood cut down and brought to him'],'The prophecy comes true in an ordinary way. The witches misled Macbeth without lying.'],
  ['Why is Macduff able to kill Macbeth?','He was cut from his mother’s body before the natural time, so he was not “born of a woman” in the usual sense',['He has a magic sword from the witches','Macbeth lets him win','He is helped by Banquo’s ghost'],'“Macduff was from his mother’s womb untimely ripp’d.”'],
  ['Who is king at the end of the play?','Malcolm, Duncan’s elder son',['Macduff','Fleance','Donalbain'],'The rightful heir returns and order is restored.']
);
