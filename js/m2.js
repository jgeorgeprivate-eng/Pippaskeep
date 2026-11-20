"use strict";
/* Part 3, lessons 3.5 to 3.7 */
var GLOBE = 'Shakespeare’s Globe, London, 2011';

LESSONS['3.5'] = {
  title:'Act 1, scenes 1 to 4',
  intro:['The first four scenes set up everything. Macbeth is introduced as a hero before he appears. The witches tell him he will be king. One of their promises comes true at once, and he starts to think about murder.',
    'Use the slider to go through the scenes in order. Each step says what happens and what each person feels.'],
  steps:{h:'Scene by scene', lab:'What people feel', items:[
    ['Scene 1: the witches', 'Three witches meet in thunder and lightning. They agree to meet Macbeth after the battle. They chant that fair is foul and foul is fair. The scene is only a few lines long.', 'The witches are gleeful. The audience is uneasy, because the play has opened with evil and not with the hero.'],
    ['Scene 2: the battle report', 'A wounded Captain tells King Duncan how bravely Macbeth fought the rebels. Macbeth cut the rebel leader open and fixed his head on the castle wall. Duncan orders the traitor Thane of Cawdor to be executed and gives his title to Macbeth.', 'Duncan is grateful and full of admiration. Everyone thinks Macbeth is the most loyal man in Scotland.'],
    ['Scene 3: the prophecies', 'Macbeth and Banquo meet the witches. They greet Macbeth as Thane of Glamis, Thane of Cawdor and future king. They tell Banquo that his descendants will be kings. Then messengers arrive and tell Macbeth he is now Thane of Cawdor.', 'Macbeth is startled and then tempted. He already imagines murder, and the thought frightens him. Banquo is suspicious of the witches.'],
    ['Scene 4: Malcolm is named heir', 'Duncan thanks Macbeth warmly. He says nobody can read a person’s mind from their face. He is talking about the traitor Cawdor, and he says it just as Macbeth walks in. Then he names his son Malcolm as heir to the throne. Macbeth says to himself that Malcolm is now in his way.', 'Duncan is trusting. Macbeth is jealous and ashamed. He asks the stars to hide, so that nobody sees what he wants.']]},
  aloud:{title:'Banquo’s warning', ref:'Act 1, scene 3. Banquo speaks to Macbeth after the first prophecy comes true', lines:[
    ['And oftentimes, / to *win* us to our *harm*,', 'Often, in order to lead us into harm,'],
    ['The *instruments* of *darkness* / tell us *truths*;', 'the servants of evil tell us things that are true.'],
    ['Win us with *honest trifles*, / to betray’s', 'They win our trust with small true things, so that they can betray us'],
    ['In *deepest* consequence.', 'in the matters that count most.']],
    tip:'Banquo has understood the witches exactly. This warning describes the whole play.'},
  sections:[
    {h:'Fair and foul', p:['The witches say “Fair is foul, and foul is fair”. Fair means good or pleasant. Foul means bad or disgusting. They mean that in this play good and bad are mixed up, and things are not what they seem.',
      'Macbeth’s first line in the play is “So foul and fair a day I have not seen”. He means the weather is bad and the battle went well. But he is using the witches’ words before he has met them. Shakespeare means that Macbeth is already connected to them.']},
    {h:'The witches do not tell him to kill', p:['Read the prophecy carefully. The witches say Macbeth will be king. They do not say how. The idea of murder comes from Macbeth himself, within minutes.',
      'Banquo hears the same witches and is not tempted. Shakespeare places the two men side by side so that the audience can see that Macbeth has a choice.'],
      note:'The witches suggest. Macbeth chooses.'}],
  means:[['“Fair is foul, and foul is fair.”','Good and evil are mixed up in this play. Appearances cannot be trusted.'],['The Captain calls him “brave Macbeth”.','Macbeth starts the play as a hero. His fall will be from a great height.'],['Banquo says the “instruments of darkness tell us truths”.','Evil wins trust with small truths in order to do great harm.'],['Duncan says there is “no art” to read a mind in a face.','Duncan cannot tell who is loyal. He is about to trust another traitor.'],['Macbeth says “Stars, hide your fires”.','He already wants something so wicked that he needs darkness to hide it.']],
  watch:[['Watch the witches, and the prophecies to Macbeth and Banquo', GLOBE, 'https://www.youtube.com/watch?v=mX4DHmjFfNE']],
  remember:'By the end of scene 4 Macbeth has gone from hero to a man with “black and deep desires”.',
  quotes:[
    {id:'ma1', t:'Fair is foul, and foul is fair:', ref:'Act 1, scene 1. The witches', cue:'The witches’ chant about fair and foul.', tech:'Paradox', means:'Good and evil are mixed up. Appearances cannot be trusted.', gaps:['Fair','foul']},
    {id:'ma2', t:'brave Macbeth,—well he deserves that name', ref:'Act 1, scene 2. The Captain', cue:'What the Captain calls Macbeth, and whether he deserves it.', tech:'Reported praise', means:'Macbeth starts the play as an admired hero.', gaps:['brave','deserves','name']},
    {id:'ma3', t:'Till he unseam’d him from the nave to the chaps,', ref:'Act 1, scene 2. The Captain', cue:'What Macbeth did to the rebel. The nave is the navel and the chaps are the jaws.', tech:'Violent imagery', means:'Macbeth is a fierce killer in battle, and at this point he is praised for it.', gaps:['nave','chaps']},
    {id:'ma4', t:'So foul and fair a day I have not seen.', ref:'Act 1, scene 3. Macbeth', cue:'Macbeth’s first line in the play.', tech:'Echo', means:'He uses the witches’ words before meeting them. He is already linked to them.', gaps:['foul','fair','day']},
    {id:'ma5', t:'All hail, Macbeth! that shalt be king hereafter!', ref:'Act 1, scene 3. Third Witch', cue:'The third greeting from the witches.', tech:'Prophecy', means:'The witches promise the crown. They do not say how he will get it.', gaps:['hail','king','hereafter']},
    {id:'ma6', t:'The instruments of darkness tell us truths;', ref:'Act 1, scene 3. Banquo', cue:'Banquo’s warning about what evil does.', tech:'Metaphor', means:'Evil wins trust with small truths in order to betray us later.', gaps:['instruments','darkness','truths']},
    {id:'ma7', t:'There’s no art To find the mind’s construction in the face:', ref:'Act 1, scene 4. Duncan', cue:'Duncan on whether you can read a mind from a face.', tech:'Dramatic irony', means:'Nobody can tell a traitor by looking. Duncan says this as Macbeth walks in.', gaps:['art','mind’s','face']},
    {id:'ma8', t:'Stars, hide your fires! Let not light see my black and deep desires:', ref:'Act 1, scene 4. Macbeth, aside', cue:'Macbeth’s aside to the stars after Malcolm is named heir.', tech:'Imagery of light and dark', means:'He wants something so wicked that he needs darkness to hide it.', gaps:['Stars','fires','black','desires']}],
  questions:[
    ['How is Macbeth described before he first appears?','As a brave and loyal soldier who has won the battle',['As a coward who ran from the battle','As a traitor working with Norway','As a friend of the witches'],'The Captain calls him “brave Macbeth”. He begins as a hero.'],
    ['What three titles do the witches greet Macbeth with?','Thane of Glamis, Thane of Cawdor and king hereafter',['Thane of Fife, Thane of Ross and Prince of Cumberland','King of Norway, King of England and King of Scotland','Captain, general and lord'],'He is Glamis already. Cawdor comes true within minutes. The crown is still to come.'],
    ['What do the witches tell Banquo?','His descendants will be kings, although he will not be one himself',['He will be king after Macbeth','He will die tomorrow','He will become Thane of Cawdor'],'This prophecy later makes Macbeth afraid of Banquo.'],
    ['Do the witches tell Macbeth to murder Duncan?','No. They say he will be king, and the idea of murder is his own',['Yes. They give him a dagger','Yes. They tell him the time and place','No. They tell him to wait for Duncan to die'],'The witches suggest. Macbeth chooses.'],
    ['How do Macbeth and Banquo differ in their reaction to the witches?','Macbeth is tempted. Banquo is suspicious and warns that evil uses truths to betray',['Both are delighted','Both run away in fear','Banquo is tempted and Macbeth is suspicious'],'Shakespeare puts them side by side to show that Macbeth has a choice.'],
    ['Why is Duncan’s line about there being “no art to find the mind’s construction in the face” an example of dramatic irony?','He says he cannot spot a traitor just as Macbeth, the next traitor, arrives',['He is lying to the court','He is talking about the witches','He knows Macbeth plans to kill him'],'The audience sees what Duncan does not.'],
    ['What does Macbeth feel when Duncan names Malcolm as heir?','Jealous, because Malcolm is now between him and the crown',['Pleased for Malcolm','Bored','Relieved that he will not have to be king'],'He calls it a step he must “o’erleap”, and asks the stars to hide his desires.'],
    ['What does “Fair is foul, and foul is fair” mean?','Good and bad are mixed up, and things are not what they seem',['The weather will be fine after the storm','The witches are beautiful','The battle was fair'],'This idea of false appearance runs through the whole play.']]
};

LESSONS['3.6'] = {
  title:'Act 1, scenes 5 to 7',
  intro:['In these three scenes Lady Macbeth enters the play and takes control. Macbeth changes his mind twice. By the end of the act the murder is agreed.',
    'Watch what each of them feels at each step. Their marriage is the centre of these scenes.'],
  steps:{h:'Scene by scene', lab:'What people feel', items:[
    ['Scene 5: the letter', 'Lady Macbeth reads Macbeth’s letter about the witches. She decides at once that he must be king, and fears he is too kind to take the quickest way. A messenger says the king is coming tonight. She calls on evil spirits to take away her womanly gentleness and fill her with cruelty.', 'Lady Macbeth is excited and ruthless. Ruthless means having no pity.'],
    ['Scene 5: Macbeth comes home', 'Macbeth arrives. She tells him Duncan must not leave alive, and that he must look welcoming while she arranges everything. He says only that they will talk about it later.', 'She is in command. He is uncertain and lets her lead.'],
    ['Scene 6: Duncan arrives', 'Duncan arrives and admires the castle and the sweet air. Lady Macbeth welcomes him with perfect politeness.', 'Duncan is happy and trusting. Lady Macbeth is hiding her purpose. The audience feels dread.'],
    ['Scene 7: Macbeth decides against it', 'Macbeth leaves the feast and thinks alone. He lists the reasons not to kill Duncan: he is Duncan’s relative, his subject and his host, and Duncan is a good king. He admits that his only reason to do it is ambition. He tells his wife they will go no further.', 'Macbeth is guilty and afraid of the consequences. For a moment his conscience wins.'],
    ['Scene 7: she changes his mind', 'Lady Macbeth calls him a coward and says he was a man when he dared to plan it. She says she would have killed her own baby if she had sworn to. Then she gives the plan: get the guards drunk, use their daggers and smear them with blood. Macbeth agrees.', 'She is scornful. He is ashamed, then persuaded, then almost admiring of her.']]},
  aloud:{title:'Lady Macbeth calls on the spirits', ref:'Act 1, scene 5. Lady Macbeth, alone', lines:[
    ['Come, you *spirits* / That tend on *mortal* thoughts, / *unsex* me here;', 'Come, you spirits that serve thoughts of murder, take away my womanly nature,'],
    ['And *fill* me, / from the *crown* to the *toe*, / top-full', 'and fill me from head to foot, full to the top,'],
    ['Of *direst cruelty*! / make *thick* my blood,', 'with the most terrible cruelty. Make my blood thick,'],
    ['Stop up the access / and passage to *remorse*,', 'and block every path by which pity or regret could reach me.']],
    tip:'She has to ask for cruelty. This suggests that she is not cruel by nature, and it explains why she breaks down later.'},
  sections:[
    {h:'Looking one way and acting another', p:['Lady Macbeth tells her husband to “look like the innocent flower, But be the serpent under’t”. A serpent is a snake. She means: look harmless and be deadly.',
      'At the end of the act Macbeth says the same thing in his own words: “False face must hide what the false heart doth know.” Shakespeare means that he has now fully adopted her way of thinking.']},
    {h:'Macbeth knows it is wrong', p:['In his soliloquy in scene 7 Macbeth gives every reason against the murder and only one reason for it. He calls that reason “vaulting ambition”. To vault is to leap. He pictures ambition as a rider who jumps too hard and falls on the other side.',
      'This matters for how we judge him. He is not confused and he is not tricked. He sees clearly that the murder is wrong, and he does it.'],
      note:'Macbeth’s one reason is ambition. He names it himself.'},
    {h:'How she persuades him', p:['Lady Macbeth uses three methods. She attacks his courage. She attacks his manhood, saying he was a man when he dared to do it. She shows that she is harder than he is, with the terrible image of killing her own child. Then she gives him a practical plan, so that the murder sounds easy.']}],
  means:[['She says he is “too full o’ the milk of human kindness”.','She thinks kindness is a weakness that will stop him taking the crown.'],['She says “unsex me here”.','She wants to lose the gentleness expected of a woman so that she can be cruel.'],['“Look like the innocent flower, But be the serpent under’t.”','Appear harmless and be deadly. This is the play’s theme of false appearance.'],['He says “We will proceed no further in this business”.','His conscience has won, for a moment. He knows the murder is wrong.'],['She says “When you durst do it, then you were a man”.','She controls him by attacking his pride in being a man.']],
  watch:[['Watch Macbeth’s speech from Act 1, scene 7', GLOBE, 'https://www.youtube.com/watch?v=yIGFGYKafLM']],
  remember:'Macbeth decides not to kill Duncan. His wife changes his mind by attacking his manhood.',
  quotes:[
    {id:'mb1', t:'It is too full o’ the milk of human kindness', ref:'Act 1, scene 5. Lady Macbeth', cue:'Lady Macbeth on what is wrong with her husband’s nature.', tech:'Metaphor', means:'She thinks his kindness is a weakness.', gaps:['full','milk','kindness']},
    {id:'mb2', t:'unsex me here', ref:'Act 1, scene 5. Lady Macbeth', cue:'Three words. What she asks the spirits to do.', tech:'Command', means:'She wants to lose her womanly gentleness so that she can be cruel.', gaps:['unsex']},
    {id:'mb3', t:'look like the innocent flower, But be the serpent under’t.', ref:'Act 1, scene 5. Lady Macbeth', cue:'Her advice on how to look and how to be.', tech:'Simile and metaphor', means:'Appear harmless and be deadly.', gaps:['innocent','flower','serpent']},
    {id:'mb4', t:'If it were done when ’tis done, then ’twere well It were done quickly.', ref:'Act 1, scene 7. Macbeth', cue:'The opening of Macbeth’s soliloquy. If it were done…', tech:'Repetition', means:'If the murder could be finished with no consequences, it would be best to do it fast. He fears the consequences.', gaps:['done','well','quickly']},
    {id:'mb5', t:'Vaulting ambition, which o’erleaps itself', ref:'Act 1, scene 7. Macbeth', cue:'Macbeth names his only reason for the murder.', tech:'Metaphor', means:'His ambition is like a rider who jumps too far and falls.', gaps:['Vaulting','ambition','itself']},
    {id:'mb6', t:'We will proceed no further in this business:', ref:'Act 1, scene 7. Macbeth', cue:'Macbeth tells his wife the plan is off.', tech:'Statement', means:'His conscience has won, for a moment.', gaps:['proceed','further','business']},
    {id:'mb7', t:'When you durst do it, then you were a man;', ref:'Act 1, scene 7. Lady Macbeth', cue:'Lady Macbeth on when he was a man. “Durst” means dared.', tech:'Taunt', means:'She controls him by attacking his manhood.', gaps:['durst','man']},
    {id:'mb8', t:'But screw your courage to the sticking-place, And we’ll not fail.', ref:'Act 1, scene 7. Lady Macbeth', cue:'Her answer when he asks what happens if they fail.', tech:'Metaphor', means:'Tighten your courage until it holds firm, and the plan will work.', gaps:['screw','courage','fail']},
    {id:'mb9', t:'False face must hide what the false heart doth know.', ref:'Act 1, scene 7. Macbeth', cue:'The last line of Act 1.', tech:'Alliteration', means:'He must look loyal while planning murder. He now thinks as his wife does.', gaps:['False','face','heart']}],
  questions:[
    ['What does Lady Macbeth decide as soon as she reads the letter?','That Macbeth must be king, and that she will have to push him',['That the witches are lying','That she must warn Duncan','That they should leave Scotland'],'She fears he is “too full o’ the milk of human kindness”.'],
    ['Why does Lady Macbeth ask the spirits to “unsex” her?','So that she can be cruel without feeling pity',['So that she can fight in battle','So that she can become queen without Macbeth','So that she can sleep'],'She asks to be filled with “direst cruelty” and to feel no remorse.'],
    ['What does “look like the innocent flower, But be the serpent under’t” mean?','Look harmless and be deadly',['Plant flowers to hide snakes','Be kind to the king','Run away in silence'],'A flower looks harmless. A serpent, which is a snake, kills.'],
    ['In his soliloquy in Act 1, scene 7, what reasons does Macbeth give for not killing Duncan?','Duncan is his relative, his king and his guest, and has been a good king',['He is afraid of Lady Macbeth','The witches told him not to','He does not want to be king'],'He gives every reason against the murder. He knows it is wrong.'],
    ['What is the one reason Macbeth gives for doing the murder?','Ambition',['Revenge','Fear of Duncan','Love of Scotland'],'“I have no spur … but only vaulting ambition.”'],
    ['What does Macbeth feel when he says “We will proceed no further in this business”?','Guilty and unwilling. His conscience is winning',['Excited and impatient','Angry with Duncan','Bored with the feast'],'He has decided against the murder. His wife then changes his mind.'],
    ['How does Lady Macbeth change Macbeth’s mind about the murder?','She calls him a coward, attacks his manhood and gives him a plan',['She cries until he agrees','She threatens to tell Duncan','She promises to do the murder herself'],'“When you durst do it, then you were a man.”'],
    ['Compare Macbeth and Lady Macbeth in Act 1, scenes 5 to 7.','She is certain and in control. He is uncertain and changes his mind twice',['He is certain and she is afraid','Both are afraid','Both are calm and agreed from the start'],'In Act 1 she leads and he follows. This reverses later in the play.']]
};

LESSONS['3.7'] = {
  title:'Act 2',
  intro:['Act 2 is the murder. Shakespeare does not show the killing itself. It happens offstage, between two scenes. What the audience sees is Macbeth before it and both Macbeths after it.',
    'The act takes place in darkness, between midnight and morning.'],
  steps:{h:'Scene by scene', lab:'What people feel', items:[
    ['Scene 1: Banquo cannot sleep', 'Banquo and his son Fleance are awake after midnight. Banquo says he has dreamed of the witches. Macbeth says he does not think about them. That is a lie.', 'Banquo is uneasy. Macbeth is tense and pretending to be relaxed.'],
    ['Scene 1: the dagger', 'Alone, Macbeth sees a dagger in the air leading him to Duncan’s room. He cannot touch it. He decides it comes from his feverish brain. A bell rings and he goes to do the murder.', 'Macbeth is terrified. He goes on anyway.'],
    ['Scene 2: the deed is done', 'Lady Macbeth waits. She has drugged the guards. She says she would have killed Duncan herself if he had not looked like her father as he slept. Macbeth returns with bloody hands. He heard a voice cry that he had murdered sleep. He has brought the daggers with him by mistake.', 'Lady Macbeth is bold, with one flash of feeling. Macbeth is horrified and cannot think.'],
    ['Scene 2: she takes the daggers back', 'Macbeth refuses to return to the room. She calls him weak, takes the daggers and smears the guards with blood. He says the ocean could not wash his hand clean. She says a little water will do. There is knocking at the gate.', 'She is scornful and practical. He is full of guilt already.'],
    ['Scene 3: the Porter and the discovery', 'A drunken Porter makes jokes about being the gatekeeper of hell. Macduff goes to wake the king and finds him murdered. Macbeth kills the guards and says he did it in fury. Lady Macbeth faints. Malcolm and Donalbain decide to flee.', 'Macduff is horrified. Macbeth is acting grief. The king’s sons are afraid.'],
    ['Scene 4: Macbeth is to be crowned', 'An Old Man and Ross describe strange events: darkness in the daytime, an owl killing a hawk, Duncan’s horses eating each other. Macduff reports that the king’s sons are suspected and that Macbeth has gone to be crowned. Macduff will not go to watch.', 'The country is uneasy. Macduff is suspicious and keeps it to himself.']]},
  aloud:{title:'The dagger', ref:'Act 2, scene 1. Macbeth, alone', lines:[
    ['Is this a *dagger* / which I see before me,', 'Is this a dagger that I see in front of me,'],
    ['The handle toward my *hand*? / Come, let me *clutch* thee:—', 'with its handle towards my hand? Come, let me take hold of you.'],
    ['I *have* thee not, / and yet I *see* thee still.', 'I cannot hold you, and yet I can still see you.'],
    ['Art thou not, fatal vision, / *sensible*', 'Deadly vision, can you not be felt'],
    ['To *feeling* as to *sight*? / or art thou but', 'as well as seen? Or are you only'],
    ['A dagger of the *mind*, / a *false* creation,', 'a dagger in my mind, an invention that is not real,'],
    ['Proceeding from the *heat-oppressed brain*?', 'coming from my feverish brain?']],
    tip:'Count the questions. Macbeth asks four in seven lines. He is not sure what is real.'},
  sections:[
    {h:'Sleep', p:['Macbeth hears a voice cry “Sleep no more! Macbeth does murder sleep”. He killed Duncan while Duncan slept. Sleep stands for peace of mind and innocence. Shakespeare means that Macbeth has destroyed his own peace along with the king.',
      'From now on neither Macbeth nor his wife sleeps well. In Act 5 she walks in her sleep.']},
    {h:'Blood and water', p:['After the murder the couple react in opposite ways to the blood. He says all the ocean could not clean his hand, and that his hand would turn the green sea red. She says “A little water clears us of this deed”.',
      'Blood here stands for guilt. He believes the guilt is permanent. She believes it can be washed off. Remember her line. In Act 5 she will try to wash a spot of blood that is not there.'],
      note:'Act 2: he is tormented, she is calm. Act 5: she is tormented, he is numb.'},
    {h:'Why the Porter is there', p:['The Porter’s scene is comic, and it comes straight after the murder. It gives the audience a moment to breathe. It also has a serious point. The Porter pretends he is the gatekeeper of hell. After what has just happened inside, the castle has become a kind of hell.']}],
  means:[['Macbeth sees “a dagger of the mind”.','His guilt and fear are so strong that he sees things that are not there.'],['Lady Macbeth could not kill Duncan because he “resembled My father as he slept”.','She is not as hard as she claims. She has feelings she is holding down.'],['“Macbeth does murder sleep.”','He has destroyed his own peace of mind.'],['He asks if “all great Neptune’s ocean” will wash his hand.','He believes his guilt can never be removed.'],['She says “A little water clears us of this deed”.','She believes guilt is easy to wash away. She is wrong.']],
  watch:[['Watch the Porter', GLOBE, 'https://www.youtube.com/watch?v=652_suY28Vk'],['Watch the body being found', GLOBE, 'https://www.youtube.com/watch?v=1kOKqVwCBPw']],
  remember:'The murder happens offstage. What Shakespeare shows is the guilt, which begins before the deed and never ends.',
  quotes:[
    {id:'mc1', t:'Is this a dagger which I see before me, The handle toward my hand?', ref:'Act 2, scene 1. Macbeth', cue:'The opening of the dagger soliloquy.', tech:'Rhetorical question', means:'His mind shows him the weapon before he uses it. He is not sure what is real.', gaps:['dagger','handle','hand']},
    {id:'mc2', t:'A dagger of the mind, a false creation,', ref:'Act 2, scene 1. Macbeth', cue:'Macbeth decides what the dagger really is.', tech:'Metaphor', means:'The dagger is a hallucination made by his guilt and fear.', gaps:['mind','false','creation']},
    {id:'mc3', t:'Had he not resembled My father as he slept, I had done’t.', ref:'Act 2, scene 2. Lady Macbeth', cue:'Why Lady Macbeth did not kill Duncan herself.', tech:'Admission', means:'She is not as hard as she claims.', gaps:['resembled','father','slept']},
    {id:'mc4', t:'I have done the deed.', ref:'Act 2, scene 2. Macbeth', cue:'Five words. What Macbeth says when he returns.', tech:'Euphemism', means:'He cannot bring himself to say the word murder.', gaps:['done','deed']},
    {id:'mc5', t:'Sleep no more! Macbeth does murder sleep', ref:'Act 2, scene 2. Macbeth', cue:'What the voice cried.', tech:'Personification', means:'He has destroyed his own peace of mind.', gaps:['Sleep','murder']},
    {id:'mc6', t:'Will all great Neptune’s ocean wash this blood Clean from my hand?', ref:'Act 2, scene 2. Macbeth', cue:'Macbeth’s question about the ocean. Neptune is the Roman god of the sea.', tech:'Hyperbole', means:'He believes his guilt can never be washed away.', gaps:['Neptune’s','ocean','blood','hand']},
    {id:'mc7', t:'A little water clears us of this deed:', ref:'Act 2, scene 2. Lady Macbeth', cue:'Lady Macbeth’s answer about washing.', tech:'Understatement', means:'She thinks guilt is easy to remove. She is wrong.', gaps:['little','water','deed']},
    {id:'mc8', t:'O horror, horror, horror!', ref:'Act 2, scene 3. Macduff', cue:'What Macduff cries when he finds the body.', tech:'Repetition', means:'The murder of a king is too terrible to describe.', gaps:['horror']},
    {id:'mc9', t:'There’s daggers in men’s smiles:', ref:'Act 2, scene 3. Donalbain', cue:'Donalbain on why he and his brother must flee.', tech:'Metaphor', means:'People who look friendly may be planning to kill them.', gaps:['daggers','smiles']}],
  questions:[
    ['Why does Shakespeare not show the murder of Duncan on stage?','To keep attention on Macbeth’s mind before the murder and the couple’s guilt after it',['Because murders were never shown in plays','Because the actor playing Duncan had left','Because it happens in another country'],'What matters is the guilt, which starts before the deed.'],
    ['What is the dagger that Macbeth sees?','A hallucination created by his guilt and fear',['A real dagger left by his wife','A gift from the witches','Banquo’s dagger'],'He calls it “a dagger of the mind, a false creation”.'],
    ['Lady Macbeth says she would have killed Duncan herself, except for one thing. What?','He looked like her father as he slept',['She could not find the daggers','The guards woke up','Macbeth stopped her'],'This shows a flash of feeling she is trying to suppress.'],
    ['What mistake does Macbeth make after the murder of Duncan?','He brings the daggers out of the room with him',['He leaves his crown behind','He wakes Malcolm','He tells Banquo'],'The daggers were meant to stay with the guards so that they would be blamed. Lady Macbeth takes them back.'],
    ['How do Macbeth and Lady Macbeth differ about the blood on their hands?','He thinks the ocean could not clean it. She thinks a little water will',['Both think it will never come off','Both think it is easy to wash','She thinks the ocean could not clean it. He thinks a little water will'],'Blood stands for guilt. Their views are reversed by Act 5.'],
    ['What does “Macbeth does murder sleep” mean?','By killing a sleeping man he has destroyed his own peace of mind',['He killed a man called Sleep','He will sleep for a long time','He has cured his sleeplessness'],'Sleep stands for peace and innocence.'],
    ['Why is the Porter’s scene in the play?','It gives a moment of relief, and his joke about hell’s gate fits what has happened inside',['To introduce a new villain','To explain the witches','To show that Duncan is still alive'],'The castle has become a kind of hell.'],
    ['Why do Malcolm and Donalbain flee, and what is the result?','They fear they will be killed next. Their flight makes them look guilty and lets Macbeth take the crown',['They killed their father. They are caught','They go to fetch the witches. They return with them','They want to see England. They forget about Scotland'],'“There’s daggers in men’s smiles.”']]
};
