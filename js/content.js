"use strict";
/* The three parts of the castle and their lessons. Only lessons with an entry in LESSONS are built. */
var PARTS = [
  {name:'The Battlements', text:'Wilfred Owen’s war poems', reward:'standard', lessons:['Wilfred Owen and the First World War','Owen’s Preface and Stallworthy’s introduction','Owen’s techniques','Dulce et Decorum Est','Disabled','Anthem for Doomed Youth','The Sentry','The Send-Off','Futility','Mental Cases','Themes across the poems']},
  {name:'The Great Hall', text:'The Great Gatsby', reward:'hall', lessons:['The story in pictures','Who is who','Fitzgerald and the Jazz Age','Nick Carraway, the narrator','Chapter 1','Chapters 2 and 3','Chapters 4 and 5','Chapter 6','Chapter 7','Chapters 8 and 9','Gatsby and Daisy','Tom, Myrtle, George and Jordan','Symbols and settings','Themes']},
  {name:'The Keep', text:'Macbeth', reward:'dragon', lessons:['The story in pictures','Who is who','Shakespeare, King James and the world of the play','Shakespeare’s language','Act 1, scenes 1 to 4','Act 1, scenes 5 to 7','Act 2','Act 3','Act 4','Act 5','Macbeth','Lady Macbeth','Banquo, Macduff, Duncan, Malcolm and the witches','Themes and imagery']}
];
var LESSONS = {};

/* ---------- 1.2 Owen's Preface and Stallworthy's introduction ---------- */
LESSONS['1.2'] = {
  title:'Owen’s Preface and Stallworthy’s introduction',
  layout:['poem','sections','means','tables','points','after','remember','quotes'],
  intro:['In 1918 Owen was planning a book of his war poems, and he drafted a Preface for it. A preface is a short note at the front of a book in which the writer says what the book is for.',
         'The Preface is the nearest thing we have to Owen telling us how to read his poems. This lesson goes through it sentence by sentence.',
         'The second half of the lesson is about the introduction to your school book, written by Jon Stallworthy. It explains where the poems came from.',
         'Read the Preface first. Then tap any phrase with a red underline to see what Owen is doing there and what he means.'],
  poem:{
    title:'Owen’s Preface',
    prose:true,
    lines:[
      "This book is [[not about heroes|heroes]]. English Poetry is [[not yet fit to speak of them|fit]].",
      "",
      "Nor is it about deeds, or lands, nor anything about [[glory, honour, might, majesty, dominion, or power|glory]], [[except War|except]].",
      "",
      "[[Above all I am not concerned with Poetry.|poetry]]",
      "",
      "[[My subject is War, and the pity of War.|subject]]",
      "",
      "[[The Poetry is in the pity.|pity]]",
      "",
      "Yet these [[elegies|elegies]] are to this generation [[in no sense consolatory|consolatory]]. [[They may be to the next.|next]] [[All a poet can do today is warn.|warn]] [[That is why the true Poets must be truthful.|truthful]]",
      "",
      "(If I thought [[the letter of this book|letter]] would last, I might have used proper names; but if the spirit of it survives – [[survives Prussia|prussia]] – my ambition and those names will have achieved [[fresher fields than Flanders|flanders]]…)"
    ],
    notes:{
      heroes:['A plain statement','Newspapers and recruiting poems called every soldier a hero. Owen begins by refusing that word. Owen means: do not read these poems as stories of brave deeds.'],
      fit:['Word choice','“Fit” here means good enough. Owen does not say that the soldiers are not brave. He says that English poetry is not yet good enough to speak about them. Owen means: the soldiers deserve better than the grand, false poems that had been written about them.'],
      glory:['A list','Six grand words in a row. “Might” means strength. “Majesty” means the greatness of a king or queen. “Dominion” means rule over other lands. These are words from hymns, prayers and speeches. Owen means: his poems will not use the war to make anyone look grand.'],
      except:['Two words that turn the sentence','After a list of things the book is not about, Owen names the one thing it is about. Owen means: the only subject is war itself, shown as it is.'],
      poetry:['A surprising statement','A poet says he is not concerned with poetry. “Concerned with” means interested in. He does not mean that the poems are careless. Owen means: fine writing is not the aim. Telling the truth about the war is the aim.'],
      subject:['Repetition','“War” appears twice, with a capital letter each time. “Pity” here means deep sorrow for people who suffer. It does not mean looking down on them. Owen means: he is writing about the war, and about the sorrow we should feel for the men in it.'],
      pity:['The most quoted sentence','Six words. Owen says where the poetry in his poems comes from. It does not come from beautiful words. Owen means: what makes these poems matter is the sorrow they make the reader feel for the soldiers.'],
      elegies:['A term to know','An elegy is a poem that mourns someone who has died. Owen calls his own poems elegies. Owen means: these poems are written to mourn the dead soldiers.'],
      consolatory:['Word choice','“Consolatory” means comforting. “This generation” means the people who were alive during the war. Owen means: these poems will not comfort the people who lived through the war, and they are not written to comfort them.'],
      next:['A short sentence','“The next” means the next generation: people born later, which includes you. Owen means: people born after the war may find comfort in the poems, even though the people who lived through it cannot.'],
      warn:['A poet’s job','Owen says there is one thing a poet can do in 1918. A poet cannot stop the war. A poet can show what war does to people, so that others know. Owen means: every poem in the book is a warning.'],
      truthful:['Cause and effect','“That is why” joins this sentence to the one before it. A warning is only useful if it is true. Owen means: he must show the war exactly as it was, including the ugliest parts.'],
      letter:['Letter and spirit','The “letter” of a book is its exact words. The “spirit” is its meaning. “Proper names” are the real names of people and places. Owen means: the meaning of the book matters more than its exact details.'],
      prussia:['Background','Prussia was the most powerful state in Germany, and its army led the German side in the war. Owen means: he hopes the meaning of his book will last longer than the war does.'],
      flanders:['Background','Flanders is the region of Belgium and northern France where much of the fighting took place. Owen means: if the meaning of the book lasts, the men he writes about will be remembered far beyond the battlefield.']
    },
    edition:'This is the wording in modern editions. The first printed edition of 1920 words several sentences differently. Learn the wording in your school copy.'
  },
  sections:[
    {h:'When Owen wrote the Preface', p:['Owen drafted the Preface in 1918 for a book of poems that he did not live to see. He was killed in action on 4 November 1918, one week before the war ended. His poems were first published as a book in 1920.',
      'The Preface was never finished. That is why the last sentence is in brackets and trails off.'],
      note:'Editors had to work from Owen’s rough handwritten draft, so different editions print the Preface with small differences.'}
  ],
  meansHead:{h:'What the Preface says and what Owen means', intro:'Owen wrote the Preface to tell readers how to read the poems. These five ideas are the ones to learn.', cols:['The Preface says','Owen means']},
  means:[
    ['“This book is not about heroes.”','Do not look for brave deeds in these poems. Look at what the war did to ordinary men.'],
    ['“Above all I am not concerned with Poetry.”','The truth matters more than fine writing.'],
    ['“My subject is War, and the pity of War. The Poetry is in the pity.”','The poems are about the suffering of soldiers. They are written to make the reader feel sorrow for those soldiers.'],
    ['“these elegies are to this generation in no sense consolatory”','The poems mourn the dead. They do not try to make anyone feel better.'],
    ['“All a poet can do today is warn. That is why the true Poets must be truthful.”','Every poem is a warning to people who have not seen war. A warning has to be true.']
  ],
  tables:[
    {h:'Using the Preface in an essay', intro:'A phrase from the Preface can support a point about any of the seven poems. Here is one match for each poem.', cols:['From the Preface','Poem','How the poem shows it'],
     rows:[
      ['“not about heroes”','Disabled','A young man joined up because he thought he would look fine in uniform. He comes home without his legs, and few people cheer.'],
      ['“glory, honour”','Dulce et Decorum Est','Owen calls the saying that it is sweet to die for your country “The old Lie”.'],
      ['“the pity of War”','Futility','The speaker grieves over one dead soldier and asks why life was made at all.'],
      ['“these elegies”','Anthem for Doomed Youth','The poem asks what funeral the dead soldiers receive. The answer is the noise of the guns.'],
      ['“in no sense consolatory”','Mental Cases','The poem shows soldiers whose minds have been injured, and it blames “us”. It offers no comfort.'],
      ['“All a poet can do today is warn”','The Sentry','Owen describes a blinded sentry exactly as he saw him, so that readers know what a shell does to a man.'],
      ['“the true Poets must be truthful”','The Send-Off','The soldiers are sent away in secret. Owen tells the truth that only a few of them will come back.']
     ]}
  ],
  points:{
    h:'Stallworthy’s introduction',
    intro:['Jon Stallworthy (1935 to 2014) was a poet and a professor of English at Oxford University. He wrote the biography of Wilfred Owen and edited Owen’s complete poems. His introduction tells the story of Owen’s life and shows where the poems came from.',
           'Each point below is stated in this app’s own words, with the page where Stallworthy makes it and a poem to use it with. To quote Stallworthy’s exact words in an essay, find the sentence in the book and copy it from the page.',
           'In an essay, name the person whose idea it is: “Stallworthy says …” for these points, and “Owen says …” for the Preface and the letters.'],
    items:[
      {page:'p. xix', find:'Orpheus, the pagan saint', say:'Owen is the Orpheus of the twentieth century. Orpheus was a poet and singer in Greek myth who went down into the underworld, the land of the dead, and came back. Stallworthy pictures the modern poet in a steel helmet, going down into the mud of the Western Front.', more:'The first sentence of this passage is in the quote bank below. It is the one sentence of Stallworthy’s to learn word for word.', use:'The Sentry, which takes place underground in a flooded dug-out.'},
      {page:'p. xxii', find:'One, describing the approach', say:'Before the war, in a long poem based on a fairy tale, Owen was already choosing words that sound like the thing they describe. Stallworthy says this looks ahead to the poems from the Western Front.', more:'A word that sounds like its meaning is called onomatopoeia.', use:'Anthem for Doomed Youth (“the stuttering rifles’ rapid rattle”) and The Sentry (“thud! flump! thud!”).'},
      {page:'p. xxii', find:'Later in 1912, he attended', say:'In 1912 Owen went to the funeral of a mother and her four-year-old daughter in the village of Dunsden, and wrote a poem about them. Stallworthy says this is the first poem in which Owen’s compassion for victims can be heard.', more:'Compassion means sorrow for someone who is suffering, together with a wish to help.', use:'Futility, where the speaker grieves over one dead soldier.'},
      {page:'p. xxii', find:'‘Uriconium/An Ode’ (p. 3) is', say:'At the age of twenty, before the war, Owen wrote a poem about the ruins of a Roman city near Shrewsbury. The city had been destroyed and its people killed. Stallworthy treats this as the first of Owen’s war poems.', use:'Any of the seven poems. It shows that Owen thought about the victims of war before he became a soldier.'},
      {page:'p. xxiii', find:'Owen’s compassionate awareness of', say:'Owen pays close attention to the bodies of victims. In the Roman ruins he notices finger-marks left in plaster, and a bracelet that once sat on a warm arm. Stallworthy says this attention to bodies becomes a main feature of the war poems.', use:'Disabled (the lost limbs), Dulce et Decorum Est (the eyes and the lungs) and The Sentry (the eyes).'},
      {page:'p. xxiii', find:'and other of his early writings', say:'Owen’s early writing shows that he was drawn to gloom, darkness and hidden things, years before he saw a trench.', use:'The Sentry, where the lights go out, and Futility, where the sun cannot wake the dead man.'},
      {page:'p. xxiv', find:'His prophecy would be fulfilled', say:'In an early poem Owen imagined the poet as a lonely meteor that warns the earth. Stallworthy says this came true in 1918, when Owen wrote in the Preface that all a poet can do is warn.', more:'A meteor is a rock from space that burns brightly as it falls through the sky.', use:'Dulce et Decorum Est, which ends with a direct warning to the reader.'},
      {page:'p. xxv', find:'A month later, he had rediscovered', say:'Early in the war Owen visited a hospital for wounded soldiers and described their injuries in a letter to his brother Harold. Stallworthy says the visit brought back the compassion Owen had felt for the poor of Dunsden.', use:'Disabled, which is about a wounded man after the fighting is over.'},
      {page:'p. xxv', find:'His delayed decision indicates', say:'Owen took more than a year to join the army. He enlisted on 21 October 1915. Stallworthy says the delay shows that he was reluctant to go to war, and that his letters from this time never say that fighting is wrong in principle.', more:'Owen told his mother what would hold him together on a battlefield: “The sense that I was perpetuating the language in which Keats and the rest of them wrote!” To perpetuate something is to keep it going. John Keats was the first poet Owen hero-worshipped.', use:'Any essay that describes Owen as against the war. He hated what the war did to men, and he still chose to serve.'},
      {page:'p. xxvi', find:'This experience, compounded with', say:'In March 1917 Owen fell through a shell-hole into a cellar and was trapped there for three days. Stallworthy says this, and the sickness that followed, fed the dark images of an underworld in many of the later poems.', use:'The Sentry.'},
      {page:'p. xxvi', find:'What many may have perceived', say:'On 1 May 1917 Owen’s Commanding Officer saw him behaving strangely. Owen was diagnosed with shell-shock and sent to Craiglockhart War Hospital near Edinburgh. Stallworthy says this looked like bad luck and proved to be some of the best luck of Owen’s life.', more:'Owen’s doctor there, Captain Arthur Brock, believed that shell-shock came from losing contact with real life. Owen drafted Dulce et Decorum Est and Anthem for Doomed Youth at Craiglockhart.', use:'Dulce et Decorum Est and Anthem for Doomed Youth.'}
    ],
    note:'Page numbers are from The War Poems of Wilfred Owen, edited by Jon Stallworthy. If your copy has different page numbers, use the opening words to find each sentence. This list covers pages xix and xxii to xxvi of the introduction. The later pages are still to be added.'
  },
  after:[
    {h:'The letter behind The Sentry', p:['Stallworthy’s introduction prints part of a letter that Owen wrote to his mother in January 1917, after his first days in the front line. These are Owen’s own words.',
      '<blockquote class="say">My dug-out held 25 men tight packed. Water filled it to a depth of 1 or 2 feet leaving say 4 feet of air.</blockquote>',
      '<blockquote class="say">The Germans knew we were staying there and decided we shouldn’t.</blockquote>',
      '<blockquote class="say">Those fifty hours were the agony of my happy life.</blockquote>',
      '<blockquote class="say">I kept my own sentries half way down the stairs during the more terrific bombardment. In spite of this one lad was blown down and, I am afraid, blinded.</blockquote>',
      'A dug-out is a shelter dug into the ground. A sentry is a soldier who stands guard. This is the event that Owen later turned into The Sentry. The poem has the same flooded dug-out, the same shelling and the same blinded sentry.'],
      note:'In an essay on The Sentry you can say: Owen saw this happen. In the Preface he wrote that “the true Poets must be truthful”, and The Sentry keeps to what he told his mother in January 1917.'},
    {h:'A letter from the first month of the war', p:['At the end of August 1914 Owen was living in France and had not yet joined the army. He wrote to his mother about the men who were being killed. These are Owen’s own words.',
      '<blockquote class="say">bodies, the product of aeons of Natural Selection, melted down to pay for political statues</blockquote>',
      'An aeon is a very long age of time. Natural selection is the slow process by which living things develop over millions of years. Owen means: the human body took ages to develop, and the war destroys it for the sake of politics.'],
      note:'Use this with Futility. Almost four years later that poem asks the same question about one dead soldier: why did life take so long to grow, if it ends like this?'}
  ],
  remember:'Owen’s subject is war and the pity of war. His poems mourn the dead, they warn the living and they tell the truth. They are not about heroes or glory, and they are not written to comfort.',
  quotesIntro:'A quote from the Preface can be used in an essay on any of the seven poems. Each card says who wrote the words: the first eight are from Owen’s Preface, the next three are from Owen’s letters and the last is Stallworthy’s.',
  quotes:[
    {id:'p1', t:'This book is not about heroes.', ref:'Owen, Preface, 1918', cue:'The first sentence of the Preface. Owen says what the book is not about.', tech:'Plain statement', means:'Do not read the poems as stories of brave deeds.', gaps:['heroes','book']},
    {id:'p2', t:'English Poetry is not yet fit to speak of them.', ref:'Owen, Preface, 1918', cue:'The second sentence of the Preface. Owen says that English poetry is not good enough to talk about heroes.', tech:'Word choice', means:'The soldiers deserve better than the grand, false poems written about them.', gaps:['fit','speak','Poetry']},
    {id:'p3', t:'Above all I am not concerned with Poetry.', ref:'Owen, Preface, 1918', cue:'A poet says that poetry is not what he cares about most.', tech:'Surprising statement', means:'Telling the truth about the war matters more than fine writing.', gaps:['concerned','Above','Poetry']},
    {id:'p4', t:'My subject is War, and the pity of War.', ref:'Owen, Preface, 1918', cue:'Owen names his subject. One word appears twice.', tech:'Repetition', means:'He writes about the war and about the sorrow we should feel for the men in it.', gaps:['subject','pity']},
    {id:'p5', t:'The Poetry is in the pity.', ref:'Owen, Preface, 1918', cue:'Six words. Owen says where the poetry in his poems comes from.', tech:'Short sentence', means:'The poems matter because of the sorrow they make the reader feel for the soldiers.', gaps:['Poetry','pity']},
    {id:'p6', t:'these elegies are to this generation in no sense consolatory', ref:'Owen, Preface, 1918', cue:'Owen says what kind of poems these are, and that they will not comfort the people alive during the war.', tech:'Word choice', means:'The poems mourn the dead. They are not written to comfort anyone.', gaps:['elegies','generation','consolatory']},
    {id:'p7', t:'All a poet can do today is warn.', ref:'Owen, Preface, 1918', cue:'Owen says what the one job of a poet is.', tech:'Short sentence', means:'Every poem in the book is a warning.', gaps:['poet','warn','today']},
    {id:'p8', t:'That is why the true Poets must be truthful.', ref:'Owen, Preface, 1918', cue:'The sentence that follows the one about warning. It begins “That is why”.', tech:'Cause and effect', means:'A warning only works if it is true, so Owen must show the war as it was.', gaps:['true','truthful','Poets']},
    {id:'l1', t:'Those fifty hours were the agony of my happy life.', ref:'Owen, letter to his mother, January 1917', cue:'Owen’s sentence to his mother about the hours he spent in the flooded dug-out.', tech:'Contrast', means:'The dug-out was the worst suffering Owen had known. This is the event behind The Sentry.', gaps:['fifty','agony','happy']},
    {id:'l2', t:'one lad was blown down and, I am afraid, blinded', ref:'Owen, letter to his mother, January 1917', cue:'Owen tells his mother what happened to one of his sentries.', tech:'Plain statement', means:'The blinded sentry in The Sentry was a real man under Owen’s command.', gaps:['lad','blown','blinded']},
    {id:'l3', t:'bodies, the product of aeons of Natural Selection, melted down to pay for political statues', ref:'Owen, letter to his mother, August 1914', cue:'Owen’s words in the first month of the war about what was happening to men’s bodies. It mentions Natural Selection and statues.', tech:'Metaphor', means:'The human body took ages to develop, and the war destroys it for the sake of politics.', gaps:['aeons','melted','statues']},
    {id:'s1', t:'Orpheus, the pagan saint of poets, went through hell and came back singing.', ref:'Jon Stallworthy, Introduction, p. xix', cue:'The first sentence of Stallworthy’s introduction. It is about a poet from Greek myth.', tech:'Allusion to a myth', means:'Stallworthy compares Owen to Orpheus: a poet who went into a kind of hell and made poetry out of it.', gaps:['Orpheus','pagan','hell','singing']}
  ],
  questions:[
    ['What is a preface?','A short note at the front of a book in which the writer says what the book is for',['A poem that mourns someone who has died','The last chapter of a book','A list of the poems in a book'],'Owen drafted his Preface in 1918 for a book of his war poems.'],
    ['What does Owen say his subject is?','War, and the pity of War',['Heroes and their brave deeds','Glory, honour and power','Poetry and how to write it'],'The Preface says: “My subject is War, and the pity of War.” The first sentences list what the book is not about.'],
    ['What does “pity” mean in the Preface?','Deep sorrow for people who suffer',['Looking down on someone who is weak','Feeling sorry for yourself','Anger at the enemy'],'Owen wants the reader to feel sorrow for the soldiers. He writes: “The Poetry is in the pity.”'],
    ['Owen writes “Above all I am not concerned with Poetry.” What does he mean?','Telling the truth about the war matters more to him than fine writing.',['He has given up writing poems.','He thinks his poems are badly written.','He wants people to read his letters and not his poems.'],'The poems are carefully made. Owen is saying what they are for: the truth about the war comes first.'],
    ['What is an elegy?','A poem that mourns someone who has died',['A poem of fourteen lines','A poem that praises a hero','A poem that tells a funny story'],'Owen calls his own poems “these elegies”. They are written to mourn the dead soldiers.'],
    ['“Consolatory” means comforting. What does the Preface say about comfort?','The poems are not written to comfort the people who lived through the war.',['The poems are written to comfort grieving families.','The poems will comfort soldiers in the trenches.','No poem can ever comfort anyone.'],'Owen writes that the elegies are “to this generation in no sense consolatory”. He adds that they may comfort the next generation.'],
    ['According to the Preface, what is the one thing a poet can do?','Warn',['Stop the war','Comfort the dead','Praise the brave'],'“All a poet can do today is warn.” Each poem shows what war does, so that people who have not seen it will know.'],
    ['Why must “the true Poets” be truthful?','Because a warning is only useful if it is true.',['Because the army ordered poets to report facts.','Because truthful poems sold more copies.','Because all of Owen’s readers had seen the war themselves.'],'The sentence begins “That is why”, which joins it to the sentence about warning.'],
    ['Why was the Preface never finished?','Owen was killed on 4 November 1918, before the book was printed.',['Owen lost interest in the book.','The army banned the book.','Owen decided the book did not need a preface.'],'He was killed one week before the war ended. The poems were first published as a book in 1920.'],
    ['Stallworthy begins his introduction by comparing Owen to Orpheus. Who was Orpheus?','A poet and singer in Greek myth who went down to the land of the dead and came back',['A Roman general who died in battle','The Greek god of war','A king in a play by Shakespeare'],'Stallworthy pictures the modern poet in a steel helmet, going down into the mud of the Western Front.'],
    ['Which real event is behind The Sentry?','In January 1917 a shell blew one of Owen’s sentries down the stairs of a flooded dug-out and blinded him.',['In March 1917 Owen was trapped in a cellar for three days.','In 1914 Owen visited a hospital for wounded soldiers.','In 1912 Owen went to the funeral of a mother and her daughter.'],'Owen described it in a letter to his mother: “one lad was blown down and, I am afraid, blinded”. The other three events are real too, and Stallworthy describes them, but they are not the event in The Sentry.'],
    ['Owen was diagnosed with shell-shock in 1917. What does Stallworthy say about this?','It looked like bad luck and proved to be good luck.',['It ended Owen’s writing.','It was a punishment for cowardice.','It kept Owen out of the army for the rest of the war.'],'Owen was sent to Craiglockhart War Hospital near Edinburgh, where he drafted Dulce et Decorum Est and Anthem for Doomed Youth.'],
    ['When did Owen join the army?','On 21 October 1915, more than a year after the war began',['In August 1914, in the first week of the war','In January 1917','In May 1918'],'Stallworthy says the delay shows that Owen was reluctant to go to war, and that his letters from this time never say that fighting is wrong in principle.'],
    ['Stallworthy treats a poem about a ruined Roman city as the first of Owen’s war poems. Why is that surprising?','Owen wrote it before the war, when he was twenty.',['Siegfried Sassoon wrote most of it.','Owen wrote it after the war had ended.','It is a poem about a football match.'],'The poem shows that Owen thought about the victims of war before he became a soldier.'],
    ['In an essay, how should you introduce an idea that comes from the introduction to your school book?','“Stallworthy says …”, because Stallworthy wrote the introduction.',['“Owen says …”, because the book is by Owen.','“The poem says …”, because the introduction is part of the poems.','You should not name anyone.'],'Use “Owen says …” for the Preface and for Owen’s letters. Use “Stallworthy says …” for points from the introduction.']
  ]
};

/* ---------- 1.4 Dulce et Decorum Est ---------- */
LESSONS['1.4'] = {
  portrait:{src:'img/owen.jpg', alt:'Portrait photograph of Wilfred Owen in army uniform', cap:'Wilfred Owen, 1893 to 1918'},
  title:'Dulce et Decorum Est',
  intro:['This is Owen’s best known poem. It describes a gas attack that he saw, and then it turns on the people at home who told young men that dying in war was noble.',
         'Read the poem first. Then tap any phrase with a red underline to see what Owen is doing there and what he means.'],
  poem:{
    // [[phrase|key]] marks a phrase that can be tapped. An empty string is a gap between stanzas.
    lines:[
      "[[Bent double, like old beggars under sacks|beggars]],",
      "[[Knock-kneed, coughing like hags|hags]], we [[cursed through sludge|sludge]],",
      "Till on the [[haunting flares|haunting]] we turned our backs,",
      "And towards our distant rest began to trudge.",
      "[[Men marched asleep.|asleep]] Many had lost their boots,",
      "But limped on, [[blood-shod|bloodshod]]. All went lame, all blind;",
      "[[Drunk with fatigue|drunk]]; deaf even to the hoots",
      "Of tired, outstripped [[Five-Nines|fivenines]] that dropped behind.",
      "",
      "[[Gas! GAS! Quick, boys!|gas]]—An [[ecstasy of fumbling|ecstasy]]",
      "Fitting the clumsy helmets just in time,",
      "But someone still was yelling out and stumbling",
      "And flound’ring like a man in [[fire or lime|lime]].—",
      "Dim through the [[misty panes and thick green light|panes]],",
      "[[As under a green sea, I saw him drowning.|sea]]",
      "",
      "[[In all my dreams|dreams]] before my [[helpless sight|helpless]],",
      "He plunges at me, [[guttering, choking, drowning|three]].",
      "",
      "If in some smothering dreams, [[you too|you]] could pace",
      "Behind the wagon that we [[flung|flung]] him in,",
      "And watch the [[white eyes writhing|writhing]] in his face,",
      "His hanging face, [[like a devil’s sick of sin|devil]];",
      "If you could hear, at every jolt, the blood",
      "Come [[gargling from the froth-corrupted lungs|gargling]],",
      "Obscene as cancer, [[bitter as the cud|cud]]",
      "Of vile, incurable sores on [[innocent tongues|innocent]],—",
      "[[My friend|friend]], you would not tell with such high zest",
      "To [[children ardent for some desperate glory|children]],",
      "[[The old Lie|lie]]: [[Dulce et decorum est|latin]]",
      "[[Pro patria mori.|last]]"
    ],
    notes:{
      beggars:['Simile','A simile compares two things using “like” or “as”. The soldiers are young men, but they are bent over like old beggars. Owen means: war has turned healthy young men into wrecks. This is the opposite of the smart, upright soldier on a recruiting poster.'],
      hags:['Simile and harsh sounds','A hag is an ugly old woman. The men cough like the old and sick. The hard k sounds in “Knock-kneed” and “coughing” are ugly on purpose. Owen means: there is nothing handsome or heroic here.'],
      sludge:['Word choice','They do not march. They curse, and they drag themselves through thick mud. Owen means: the men are angry and worn out.'],
      haunting:['Word choice','The flares are lights fired into the sky over the battlefield. “Haunting” means they stay in the mind like a ghost. It prepares us for the dreams later in the poem, which haunt the speaker. Owen means: the war stays with the soldiers even when they turn away from it.'],
      asleep:['Short sentence','Three words and a full stop. The sentence is as flat and tired as the men. Owen means: they are so exhausted that they are walking in their sleep.'],
      bloodshod:['Invented word','“Shod” means wearing shoes. The men have lost their boots, so their feet are covered in blood where shoes should be. The word also sounds like “bloodshed”. Owen means: the men keep walking on bleeding feet because they have no choice.'],
      drunk:['Metaphor','A metaphor says one thing is another. The men are not drunk. They are so tired that they stagger as if they were. Owen means: they cannot think or react, which is why the gas catches them.'],
      fivenines:['Background','Five-Nines were German shells 5.9 inches wide. The men are too tired to notice shells landing behind them. Owen means: exhaustion has made the men numb, even to danger.'],
      gas:['Direct speech and exclamation marks','Someone shouts a warning. The second “GAS” is in capitals because it is louder and more frightened. The poem changes in one line from slow and tired to fast and panicked. Owen means: death can arrive with no warning.'],
      ecstasy:['Unexpected word','Ecstasy usually means great joy. Here it means a frantic state where the body takes over. The men fumble madly to get their masks on. The odd word choice shows how strange and extreme the moment is. Owen means: panic has taken over the men’s bodies.'],
      lime:['Background','Lime here means quicklime, a chemical that burns skin. The gas burns the man from the inside, so he thrashes about like someone on fire. Owen means: gas is a cruel way to die. It burns.'],
      panes:['Imagery','The speaker is looking through the glass eye-pieces of his gas mask. The gas is green and thick, so everything looks dim and green. Owen means: the speaker is shut behind glass. He can see the man and cannot reach him.'],
      sea:['Metaphor: drowning','Through the green gas the man looks as if he is under the sea. The comparison is also medically true. The gas fills his lungs with fluid, so he drowns on dry land. Owen means: this is a slow, horrible death, and the speaker can only watch.'],
      dreams:['Change of tense','Until now the poem has been in the past tense. Here it moves to the present: “plunges”. Owen means: the attack is over, but for the speaker it is still happening, every night.'],
      helpless:['Word choice','The speaker could not save the man then, and he cannot stop the dream now. Owen means: he feels guilty and powerless.'],
      three:['Three verbs in a row','Each verb ends in -ing, which makes the action go on and on. “Guttering” is what a candle flame does just before it goes out. Owen means: the man’s life is going out, and the speaker sees it again and again.'],
      you:['Direct address','Owen stops describing and speaks straight to the reader. “You” means people at home who have not seen war. He wants them to imagine walking behind the wagon. Owen means: if you had seen this, you would think differently about war.'],
      flung:['Word choice','You fling rubbish. The dying man is thrown into a wagon with no care and no ceremony. Owen means: there is no dignity in this death.'],
      writhing:['Alliteration','Alliteration repeats a sound at the start of words: white, writhing. To writhe is to twist in pain. Even the man’s eyes are twisting. Owen means: the man is in agony and is still alive to feel it.'],
      devil:['Simile','A devil enjoys sin. This face looks like a devil who has had so much sin that even he is sick of it. Owen means: this sight is worse than anything in hell.'],
      gargling:['Onomatopoeia','Onomatopoeia is a word that sounds like its meaning. “Gargling” makes us hear the blood in the man’s throat. “Froth-corrupted” means his lungs are ruined and full of foam. Owen means: this death is slow and ugly, and the reader should hear it.'],
      cud:['Simile','Cud is half-digested food that a cow brings back up to chew again. Owen means: the taste and the memory keep coming back, and they are disgusting.'],
      innocent:['Word choice','The soldiers were young and had done nothing to deserve this. Owen means: war destroys people who are innocent.'],
      friend:['Irony','Irony is saying one thing and meaning the opposite. Owen does not think this person is his friend. He is angry with them. An early draft of the poem was addressed to Jessie Pope, who wrote cheerful verses telling young men to join the army. Owen means: you are not my friend, because you send boys to this.'],
      children:['Word choice','“Ardent” means eager. Owen calls the listeners children. Owen means: the people who are told that war is glorious are too young to know better, and they are desperate to be heroes.'],
      lie:['Capital letter','The capital L makes it a title: this is the famous Lie, the one that has been told for centuries. Owen means: the saying is false, and people have repeated it for centuries.'],
      latin:['Latin quotation','The words come from the Roman poet Horace. The whole saying means “It is sweet and fitting to die for one’s country.” In 1914 many people knew it and believed it. Owen means the opposite: it is not sweet and it is not fitting.'],
      last:['A short last line','Every other line has about ten syllables. This one has six. The poem stops short. Owen means: after what you have just seen, the grand old saying sounds empty.']
    },
    edition:'Editions of this poem differ in lines 8 and 23. Learn the wording in your school copy.'
  },
  stages:[
    {name:'The march', lines:[1,8], tense:'Past', to:'No one in particular', pace:15, anger:15, feel:'Exhausted', text:'The soldiers are walking away from the front line to rest. They are so tired that they can hardly move or hear. The lines are slow and heavy, with many commas and full stops.'},
    {name:'The gas attack', lines:[9,14], tense:'Past', to:'No one in particular', pace:95, anger:25, feel:'Panic, then horror', text:'A gas shell lands. The men rush to put on their masks. One man is too slow. The speaker watches him through the green gas as he chokes.'},
    {name:'The dreams', lines:[15,16], tense:'Present', to:'No one in particular', pace:40, anger:45, feel:'Haunted and helpless', text:'Two lines on their own. The speaker says he still sees the dying man in his dreams, every night. The poem moves into the present tense.'},
    {name:'The accusation', lines:[17,28], tense:'Present', to:'“You”, the people at home', pace:60, anger:100, feel:'Angry', text:'Owen speaks directly to people who tell the young that war is glorious. He says: if you had seen this, you would stop telling that lie.'}
  ],
  sections:[
    {h:'When and why Owen wrote it', p:['Owen drafted the poem in October 1917 at Craiglockhart War Hospital in Scotland, where he was being treated for shell shock. He revised it in 1918. It was published in 1920, after his death.',
      'At the start of the war, newspapers printed cheerful poems that made fighting sound like a game. Jessie Pope wrote many of them. Owen had seen what the war was really like, and the poem is his answer.'],
      note:'Poison gas was first used on a large scale in 1915. Soldiers carried masks, which Owen calls helmets. A man who breathed the gas could take hours or days to die.'},
    {h:'Form and structure', p:['The poem has 28 lines in four parts of 8, 6, 2 and 12 lines. The rhyme goes ABAB: every second line rhymes, such as sacks and backs, sludge and trudge.',
      'Most lines have ten syllables. This is close to the pattern of traditional, formal English poetry. Owen uses an orderly form to describe something chaotic and ugly, and the contrast makes the horror stand out.',
      'In the two-line part, Owen rhymes “drowning” with “drowning”. A poet normally avoids rhyming a word with itself. Here it shows that the speaker’s mind is stuck on that one sight.']}
  ],
  means:[
    ['The soldiers are “like old beggars” and “like hags”.','War does not make men into heroes. It ruins them.'],
    ['One man does not get his mask on in time.','Death in war is a matter of bad luck, and it is slow and ugly.'],
    ['The speaker still sees the man in his dreams.','The people who survive are damaged too. The war does not end for them.'],
    ['He calls the reader “My friend”.','He is angry with this person, and he is using the word bitterly.'],
    ['He calls the Latin saying “The old Lie”.','It is not sweet or fitting to die for your country. Anyone who says so is lying to children.']
  ],
  quotes:[
    {id:'d1', t:'Bent double, like old beggars under sacks', ref:'Line 1', cue:'The first line. Owen compares the soldiers to old, poor men carrying loads.', tech:'Simile', means:'War has turned young men into wrecks.', gaps:['beggars','sacks','double']},
    {id:'d2', t:'coughing like hags, we cursed through sludge', ref:'Line 2', cue:'Line 2. The men cough like old women and swear as they walk through mud.', tech:'Simile', means:'There is nothing handsome or heroic about these soldiers.', gaps:['hags','cursed','sludge']},
    {id:'d3', t:'Men marched asleep.', ref:'Line 5', cue:'A three-word sentence about how tired the men are.', tech:'Short sentence', means:'They are so exhausted that they walk in their sleep.', gaps:['asleep','marched']},
    {id:'d4', t:'Drunk with fatigue', ref:'Line 7', cue:'A metaphor of three words. The men stagger because they are so tired.', tech:'Metaphor', means:'They are too tired to think or react.', gaps:['Drunk','fatigue']},
    {id:'d5', t:'An ecstasy of fumbling', ref:'Line 9', cue:'Four words for the frantic rush to put on gas masks.', tech:'Unexpected word', means:'Panic takes over the men’s bodies.', gaps:['ecstasy','fumbling']},
    {id:'d6', t:'As under a green sea, I saw him drowning.', ref:'Line 14', cue:'The speaker sees the dying man through the green gas. He looks as if he is under water.', tech:'Metaphor', means:'The gas fills the man’s lungs. He drowns on dry land while the speaker watches.', gaps:['green','sea','drowning']},
    {id:'d7', t:'In all my dreams before my helpless sight', ref:'Line 15', cue:'The speaker says where he still sees the dying man, and that he can do nothing.', tech:'Change to present tense', means:'The speaker is haunted. He feels guilty that he could not help.', gaps:['dreams','helpless']},
    {id:'d8', t:'He plunges at me, guttering, choking, drowning.', ref:'Line 16', cue:'In the dream the man comes at the speaker. The line ends with three verbs in a row.', tech:'Three verbs in a row', means:'The man’s life is going out like a candle, and the speaker sees it every night.', gaps:['guttering','choking','plunges']},
    {id:'d9', t:'watch the white eyes writhing in his face', ref:'Line 19', cue:'What “you” would see in the dying man’s face, with a repeated w sound.', tech:'Alliteration', means:'The man is in so much pain that even his eyes twist.', gaps:['white','writhing']},
    {id:'d10', t:'like a devil’s sick of sin', ref:'Line 20', cue:'A simile for the dying man’s face. It mentions a devil.', tech:'Simile', means:'This sight is worse than anything in hell.', gaps:['devil’s','sin','sick']},
    {id:'d11', t:'children ardent for some desperate glory', ref:'Line 26', cue:'Owen’s description of the young people who are told that war is glorious.', tech:'Word choice', means:'They are too young to know better, and they are eager to be heroes.', gaps:['ardent','desperate','glory']},
    {id:'d12', t:'The old Lie: Dulce et decorum est Pro patria mori.', ref:'Lines 27 and 28', cue:'The last two lines. Owen names the saying as a lie and gives it in Latin.', tech:'Capital letter and Latin quotation', means:'It is not sweet or fitting to die for your country.', gaps:['Lie','decorum','patria']}
  ],
  questions:[
    ['What does “Dulce et decorum est pro patria mori” mean?','It is sweet and fitting to die for one’s country.',['It is brave and noble to fight for one’s country.','The dead will be remembered with honour.','War is sweet to those who have not tried it.'],'The saying is from the Roman poet Horace. Owen calls it “The old Lie”.'],
    ['Does Owen agree with the Latin saying in the title Dulce et Decorum Est?','No. He calls it a lie and the whole poem is written to prove it wrong.',['Yes. He uses it to honour the man who died.','Partly. He thinks it is true for officers but not for ordinary soldiers.','He does not say what he thinks.'],'The title sounds as if the poem will praise dying for your country. The poem then shows a death that is neither sweet nor fitting. The gap between the title and the poem is ironic.'],
    ['In Dulce et Decorum Est, Owen addresses someone as “My friend”. How does he feel about that person?','Angry. He is using “friend” bitterly.',['Fond. They are close friends.','Sorry for them, because they are grieving.','Grateful, because they supported the soldiers.'],'This is irony: saying one thing and meaning the opposite. The person tells children that war is glorious, and Owen blames them for it.'],
    ['Who was an early draft of Dulce et Decorum Est addressed to?','Jessie Pope, who wrote cheerful verses urging men to enlist',['Siegfried Sassoon, a fellow soldier and poet','Owen’s mother, Susan Owen','Horace, the Roman poet'],'Jessie Pope’s poems made war sound like a game. Owen later removed her name, so that the poem speaks to everyone who repeats the Lie.'],
    ['What happens in lines 9 to 14 of Dulce et Decorum Est?','Gas shells land, and one man fails to get his mask on in time.',['The soldiers are shot at as they march to rest.','A man drowns while crossing a flooded trench.','The soldiers reach their camp and fall asleep.'],'The poem changes pace suddenly at “Gas! GAS!”. The man who is too slow breathes the gas and chokes.'],
    ['In Dulce et Decorum Est, how does the pace of lines 1 to 8 compare with the pace of lines 9 to 14?','Lines 1 to 8 are slow and heavy. Lines 9 to 14 are sudden and frantic.',['Lines 1 to 8 are fast and exciting. Lines 9 to 14 are slow and calm.','Both parts are slow and heavy.','Both parts are sudden and frantic.'],'The slow opening shows exhaustion. The exclamation marks and short phrases of the gas attack show panic.'],
    ['In Dulce et Decorum Est, why does Owen describe the dying man as “drowning”?','The green gas looks like sea water, and the gas fills the man’s lungs with fluid.',['The man has fallen into a flooded shell hole.','It is raining heavily during the attack.','The man is crying.'],'The image works in two ways. It describes what the speaker sees through his mask, and it describes what the gas does to the body.'],
    ['What changes in lines 15 and 16 of Dulce et Decorum Est, the two lines that stand alone?','The poem moves from the past tense to the present tense.',['The poem starts to rhyme.','The speaker changes from Owen to the dying man.','The setting moves from France to England.'],'“Plunges” is in the present tense. The attack is over, but the speaker still sees it in his dreams.'],
    ['In the last part of Dulce et Decorum Est, who is “you”?','People at home who say that war is glorious',['The dying soldier','The German army','Other soldiers in the speaker’s unit'],'Owen wants people who have not seen war to imagine walking behind the wagon and watching the man die.'],
    ['Why is the last line, “Pro patria mori”, much shorter than the others?','The poem stops short, so the grand saying sounds empty.',['Owen died before he could finish the line.','Latin words always take up less space.','It shows that the soldiers have reached their rest.'],'Most lines have ten syllables. The last has six. After the long, angry sentence before it, the short line falls flat on purpose.'],
    ['What is the effect of comparing the soldiers to “old beggars” and “hags”?','It shows that war has made young men weak, dirty and old before their time.',['It shows that the soldiers come from poor families.','It shows that the soldiers are much older than most recruits.','It shows that the soldiers do not want to fight.'],'The similes are the opposite of the strong, proud soldier on a recruiting poster.'],
    ['How does the speaker feel when he says “before my helpless sight”?','Guilty and powerless, because he could not save the man.',['Relieved, because he got his own mask on in time.','Proud, because he tried to help.','Bored, because he has seen many men die.'],'He could only watch then, and he cannot stop the dream now.']
  ]
};
