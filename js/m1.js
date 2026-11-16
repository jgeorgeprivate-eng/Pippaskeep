"use strict";
/* Part 3, lessons 3.2 to 3.4 */

LESSONS['3.2'] = {
  title:'Who is who',
  intro:['Macbeth has a small number of important characters. This lesson shows who each one is, what each one wants and how they are connected.',
    'Tap a name. Then tap the names in the links to move from one person to the next.'],
  peopleH:'The people of the play',
  people:[
    {id:'mac', name:'Macbeth', who:'A Scottish nobleman and general. At the start he is Thane of Glamis. A thane is a lord who holds land from the king. He becomes Thane of Cawdor and then king.', wants:'To be king, and then to be safe as king.', feels:'Ambitious, then guilty and afraid, then empty.', links:[['lady','is his wife. She pushes him to the first murder.'],['duncan','is his king and cousin. Macbeth murders him.'],['banquo','is his friend. Macbeth has him murdered.'],['macduff','is the man who kills him.'],['witches','tell him he will be king.']]},
    {id:'lady', name:'Lady Macbeth', who:'Macbeth’s wife. She has no other name in the play.', wants:'For her husband to be king.', feels:'Ruthless at first, then lonely, then destroyed by guilt.', links:[['mac','is her husband. She calls him too kind to take the crown.'],['duncan','is her guest. She plans his murder.']]},
    {id:'duncan', name:'King Duncan', who:'The King of Scotland. A good and generous king who trusts people too easily.', wants:'Peace, and to reward those who serve him.', feels:'Grateful and trusting.', links:[['malcolm','is his elder son and heir.'],['donalbain','is his younger son.'],['mac','is the cousin he rewards and trusts. Macbeth kills him.']]},
    {id:'malcolm', name:'Malcolm', who:'Duncan’s elder son. Duncan names him heir to the throne. He flees to England and returns with an army.', wants:'To win back his father’s crown.', feels:'Afraid at first, then cautious and determined.', links:[['duncan','is his father.'],['macduff','joins him in England. Malcolm tests him before trusting him.'],['mac','killed his father and took his crown.']]},
    {id:'donalbain', name:'Donalbain', who:'Duncan’s younger son. He flees to Ireland after the murder and does not appear again.', links:[['malcolm','is his brother.']]},
    {id:'banquo', name:'Banquo', who:'A general and Macbeth’s friend. He hears the witches too. They tell him his descendants will be kings.', wants:'To stay loyal and to keep his honour.', feels:'Wary of the witches, and suspicious of Macbeth.', links:[['mac','is his friend, who has him murdered.'],['fleance','is his son.'],['witches','tell him he will be father to a line of kings.']]},
    {id:'fleance', name:'Fleance', who:'Banquo’s young son. He escapes when his father is murdered.', links:[['banquo','is his father.']]},
    {id:'macduff', name:'Macduff', who:'The Thane of Fife. He finds Duncan’s body, suspects Macbeth and goes to England for help.', wants:'To free Scotland, and then to avenge his family.', feels:'Loyal, grief-stricken and vengeful.', links:[['ladymacduff','is his wife. She and their children are murdered on Macbeth’s orders.'],['malcolm','is the rightful king he supports.'],['mac','murdered his family. Macduff kills him.']]},
    {id:'ladymacduff', name:'Lady Macduff', who:'Macduff’s wife. She is left at home when he goes to England.', feels:'Frightened and abandoned.', links:[['macduff','is her husband.']]},
    {id:'witches', name:'The three witches', who:'Three strange women with magical knowledge. Shakespeare also calls them the weird sisters. “Weird” comes from an old word for fate.', wants:'To cause trouble for human beings.', feels:'Amused by the harm they cause.', links:[['mac','hears from them that he will be king, and later hears three misleading warnings.'],['banquo','hears from them that his descendants will be kings.']]},
    {id:'ross', name:'Ross and Lennox', who:'Scottish noblemen who carry news. They serve Duncan, then Macbeth, and finally join Malcolm.', links:[['macduff','is told by Ross that his family is dead.']]}],
  sections:[
    {h:'Four families', p:['It helps to sort the characters into families. The royal family is Duncan, Malcolm and Donalbain. The Macbeths are a husband and wife with no living children. Banquo has one son, Fleance. Macduff has a wife and several children.',
      'Notice who has children. Duncan, Banquo and Macduff all do. Macbeth does not. He wins a crown and has nobody to pass it to. This is why the prophecy about Banquo’s descendants torments him.']},
    {h:'Who kills whom, in order', p:['Macbeth kills a rebel in battle before the play begins, and this is praised. Then the murders start. First, Macbeth kills Duncan with his own hands. Second, he kills Duncan’s two guards. Third, he hires murderers who kill Banquo. Fourth, he sends murderers who kill Lady Macduff and her children.',
      'Lady Macbeth dies offstage in Act 5. Malcolm says it is thought that she killed herself. Finally, Macduff kills Macbeth in battle.'],
      note:'Each murder is worse than the last. The first is of a king, by Macbeth himself. The last is of children, by hired men.'},
    {h:'Loyalty at the start and at the end', p:['At the start every thane is loyal to Duncan, and Macbeth is the most admired of them. At the end every thane has left Macbeth and joined Malcolm. Macbeth is alone with a few servants.']}],
  remember:'Royal family: Duncan, Malcolm, Donalbain. Macbeth’s victims: Duncan, Banquo, Macduff’s family. Macbeth’s killer: Macduff.',
  questions:[
    ['Who is Malcolm?','Duncan’s elder son and the heir to the throne',['Banquo’s son','Macduff’s brother','Macbeth’s servant'],'Duncan names Malcolm as heir in Act 1. He is king at the end.'],
    ['Who is Fleance?','Banquo’s son, who escapes the murderers',['Duncan’s younger son','Macduff’s son','A murderer hired by Macbeth'],'Because Fleance lives, Banquo’s descendants can still become kings.'],
    ['Which character kills Macbeth?','Macduff',['Malcolm','Banquo','Fleance'],'Macduff kills him in Act 5 to avenge his wife and children.'],
    ['Which of these does Macbeth kill with his own hands?','Duncan',['Banquo','Lady Macduff','Fleance'],'He murders Duncan himself. For the later murders he hires others.'],
    ['What is a thane?','A Scottish lord who holds land from the king',['A soldier of the lowest rank','A priest','A servant who guards the gate'],'Macbeth is Thane of Glamis and then Thane of Cawdor. Macduff is Thane of Fife.'],
    ['Why does the prophecy about Banquo’s descendants trouble Macbeth so much?','Macbeth has no children, so his crimes would only win the crown for Banquo’s family',['Banquo is older than Macbeth','Banquo is the king’s son','Banquo has a larger army'],'He calls his crown “fruitless”. He has nobody to pass it to.'],
    ['How does loyalty change between the start and the end of the play?','At the start the thanes admire Macbeth. At the end they have all left him for Malcolm',['At the start the thanes hate Macbeth. At the end they love him','The thanes are loyal to Macbeth throughout','The thanes are loyal to the witches throughout'],'Macbeth ends the play almost alone.'],
    ['Which family is completely destroyed on Macbeth’s orders?','Macduff’s wife and children',['Duncan’s sons','Banquo and Fleance','The witches'],'Duncan’s sons and Fleance escape. Macduff’s family does not.']]
};

LESSONS['3.3'] = {
  title:'Shakespeare, King James and the world of the play',
  intro:['William Shakespeare wrote Macbeth in about 1606. The play is set in Scotland about six hundred years earlier, but it was written for an audience in London and for one person in particular: the new king.',
    'Knowing what that audience believed explains why the murder of Duncan is treated as the worst crime possible.'],
  steps:{h:'Six facts about the world of the play', lab:'Why it matters', items:[
    ['A Scottish king in England', 'Queen Elizabeth I died in 1603 with no children. Her cousin James, who was already King James VI of Scotland, became King James I of England as well. He became the patron of Shakespeare’s acting company, which was renamed the King’s Men. A patron is a powerful person who supports and pays artists.', 'Shakespeare wrote a Scottish play to please a Scottish king.'],
    ['Banquo was the king’s ancestor', 'King James believed that he was descended from Banquo. An ancestor is a family member from long ago.', 'Shakespeare makes Banquo noble and loyal, and shows a line of kings descending from him. The king watching would see himself in that line.'],
    ['The king was chosen by God', 'People believed in the divine right of kings. This is the idea that God chooses the king, so the king rules on God’s behalf. Killing a king was called regicide, and it was a crime against God as well as against the country.', 'When Macbeth kills Duncan, he is doing more than committing a murder. He is attacking the order that God made.'],
    ['Everything had its place', 'People pictured the world as a ladder with God at the top, then angels, then the king, then nobles, then ordinary people, then animals. This is called the Great Chain of Being. If one link was broken, disorder spread everywhere.', 'After Duncan’s murder the play describes storms, darkness in the daytime and horses eating each other. Nature itself is upset.'],
    ['Witches were believed to be real', 'Most people believed that witches existed and worked with the Devil. King James had written a book about witchcraft and had questioned accused witches himself.', 'The audience would have feared the witches and distrusted everything they said.'],
    ['The Gunpowder Plot', 'In November 1605 a group of men tried to blow up King James and Parliament with barrels of gunpowder. They were caught. The plot shocked the country.', 'A play about the murder of a king, and the punishment of the murderer, was written a few months later. It shows that traitors are always destroyed.']]},
  sections:[
    {h:'The real Macbeth', p:['There was a real King Macbeth, who ruled Scotland from 1040 to 1057. Shakespeare found the story in a history book called Holinshed’s Chronicles and changed it a great deal. In the history book Duncan is a weak young king and Banquo helps with the murder. Shakespeare makes Duncan old and good, and makes Banquo innocent.',
      'Shakespeare made these changes to make Macbeth’s crime worse and to make the king’s ancestor look better.']},
    {h:'Tragedy', p:['Macbeth is a tragedy. A tragedy is a play in which an important person falls from a high position to ruin and death, usually because of a fault in their own character. The fault is sometimes called a fatal flaw.',
      'Macbeth begins as a hero and ends as a hated tyrant. His flaw is ambition, which is a strong desire for power. An audience watches the fall with horror and also with some pity, because he knows what he is doing is wrong.'],
      note:'Macbeth’s fatal flaw is ambition. The play shows what unchecked ambition does to a good man.'},
    {h:'Men, women and power', p:['In Shakespeare’s time people expected men to be brave and hard, and women to be gentle and obedient. Lady Macbeth breaks these expectations. She asks to lose her womanly nature so that she can be cruel, and she attacks her husband’s manhood to control him.',
      'The play keeps asking what it means to be a man. Lady Macbeth says a man is someone who dares to kill. Macduff says a man is also someone who feels grief.']}],
  remember:'For Shakespeare’s audience, killing a king was a crime against God. That is why nature itself is disturbed when Duncan dies.',
  questions:[
    ['For which king was Macbeth written?','James I of England, who was also James VI of Scotland',['Henry VIII','Duncan of Scotland','Charles II'],'James became king of England in 1603 and was the patron of Shakespeare’s company.'],
    ['What is the divine right of kings?','The belief that God chooses the king, so the king rules on God’s behalf',['The right of a king to choose his own religion','A law that lets nobles vote for the king','The king’s right to own all the land'],'It makes killing a king a crime against God.'],
    ['What is regicide?','The killing of a king',['The crowning of a king','A book about witches','A Scottish lord'],'Macbeth commits regicide when he murders Duncan.'],
    ['Why does Shakespeare show Banquo as noble and innocent?','King James believed Banquo was his ancestor',['Banquo was Shakespeare’s own ancestor','Banquo is the hero of the history book','The actor who played Banquo demanded it'],'In Holinshed’s Chronicles Banquo helps with the murder. Shakespeare changed this.'],
    ['After Duncan is murdered, the play describes storms, darkness by day and horses eating each other. What idea explains this?','The Great Chain of Being: breaking the natural order at the top causes disorder everywhere',['Scotland always has bad weather','The witches control the horses','Macbeth has ordered the animals killed'],'The murder of a king upsets nature itself.'],
    ['What happened in November 1605, a few months before the play was written?','The Gunpowder Plot, an attempt to blow up the king and Parliament',['The death of Shakespeare','The Great Fire of London','The first performance of Romeo and Juliet'],'A play about a murdered king and a punished traitor suited the moment.'],
    ['What is a tragedy?','A play in which an important person falls to ruin and death, usually through a fault in their own character',['A play with a happy ending','A play about ordinary people at work','A play with songs and dances'],'Macbeth falls from hero to tyrant because of his ambition.'],
    ['Compare how Shakespeare’s audience and a modern audience might see the witches.','Shakespeare’s audience believed witches were real and dangerous. A modern audience is more likely to see them as symbols of temptation',['Both audiences think witches are funny','Neither audience would be frightened','Shakespeare’s audience thought witches were kind'],'Belief in witches was widespread in 1606, and the king had written a book about them.']]
};

LESSONS['3.4'] = {
  title:'Shakespeare’s language',
  intro:['Shakespeare wrote four hundred years ago, and his plays are mostly in verse. Verse is writing arranged in lines with a regular beat, like poetry. This lesson explains how the verse works and gives a method for reading a difficult line.',
    'Macbeth is meant to be heard. Reading a speech aloud is the fastest way to understand it.'],
  steps:{h:'Eight terms to know', lab:'Example from Macbeth', items:[
    ['Blank verse', 'Most of the play is in blank verse. Each line has ten syllables, with a light beat followed by a strong beat, five times: da-DUM da-DUM da-DUM da-DUM da-DUM. “Blank” means it does not rhyme. The pattern is called iambic pentameter.', '“So FOUL and FAIR a DAY I HAVE not SEEN.”'],
    ['Prose', 'Prose is ordinary writing with no beat and no line pattern. Shakespeare uses it for servants, for comic scenes and for people who are losing control of their minds.', 'The Porter speaks in prose. So does Lady Macbeth when she sleepwalks, although she spoke verse before.'],
    ['Rhyming couplet', 'A rhyming couplet is two lines that rhyme. Shakespeare often ends a scene with one. The witches speak in short rhyming lines, which makes them sound like a spell.', '“Fair is foul, and foul is fair: / Hover through the fog and filthy air.”'],
    ['Soliloquy', 'A soliloquy is a speech a character makes alone on stage, speaking their thoughts aloud. The audience hears what the character truly thinks.', '“Is this a dagger which I see before me” is the start of a soliloquy.'],
    ['Aside', 'An aside is a short remark that the other characters on stage do not hear. It tells the audience a secret.', '“Stars, hide your fires!” Macbeth says this as an aside while Duncan stands nearby.'],
    ['Dramatic irony', 'Dramatic irony is when the audience knows something that a character does not.', 'Duncan praises the castle where he will be murdered that night. The audience knows the plan. He does not.'],
    ['Imagery', 'Imagery is language that makes a picture in the mind. Shakespeare repeats certain images through the whole play.', 'Blood, darkness, sleep and clothes that do not fit are the main images in Macbeth.'],
    ['Thou and you', '“Thou”, “thee” and “thy” are old words for “you” and “your”, used to one person. They were used to family, close friends and people of lower rank. “You” was more formal.', '“Thou hast it now” means “You have it now”.']]},
  sections:[
    {h:'How to read a difficult line in three steps', p:['Step one: find the end of the sentence. A sentence often runs over several lines, so read to the full stop and not to the end of the line.',
      'Step two: put the words in modern order. Shakespeare often moves the verb or the object. “So foul and fair a day I have not seen” becomes “I have not seen a day so foul and so fair”.',
      'Step three: swap the old words. “Hath” is has. “Doth” is does. “Art” is are. “Ere” is before. “Hence” is away from here. “Wherefore” is why.'],
      note:'Sentence first, then word order, then old words.'},
    {h:'Short lines and broken lines', p:['When a line has fewer than ten syllables, there is a pause. When two characters share one line between them, they are speaking quickly, one straight after the other. After the murder, Macbeth and his wife speak in very short shared lines. This shows panic.']},
    {h:'Words left out', p:['Shakespeare shortens words to fit the beat. An apostrophe shows where letters are missing. “O’er” is over. “’Tis” is it is. “Ne’er” is never. “I’ the” is in the. Say the word as it is written and the line will have the right number of beats.']}],
  remember:'Verse for nobles, prose for servants and for broken minds, rhyme for witches.',
  questions:[
    ['What is blank verse?','Lines of ten syllables with a regular beat and no rhyme',['Ordinary writing with no beat','Short lines that rhyme','A speech made alone on stage'],'Most of Macbeth is in blank verse. The beat is da-DUM, five times.'],
    ['Who speaks in prose in Macbeth, and why?','The Porter, because he is a comic servant, and Lady Macbeth when she sleepwalks, because her mind is broken',['Macbeth and Banquo, because they are soldiers','The witches, because they are magical','Duncan, because he is king'],'Prose marks low rank, comedy or loss of control.'],
    ['What is a soliloquy?','A speech made by a character alone on stage, saying their thoughts aloud',['A short remark the other characters do not hear','Two lines that rhyme','A conversation between two characters'],'In a soliloquy the audience hears what the character truly thinks.'],
    ['What is the difference between a soliloquy and an aside?','A soliloquy is a longer speech made alone. An aside is a short remark made while others are on stage and cannot hear',['A soliloquy rhymes and an aside does not','A soliloquy is spoken by witches and an aside by kings','There is no difference'],'Both let the audience hear secret thoughts.'],
    ['Duncan says Macbeth’s castle is pleasant. The audience knows he will be murdered there. What is this called?','Dramatic irony',['A rhyming couplet','A soliloquy','Prose'],'The audience knows something the character does not.'],
    ['Put this line into modern word order: “So foul and fair a day I have not seen.”','I have not seen a day so foul and so fair',['A day has not seen me so foul and fair','So I have a foul and fair day','I have seen a foul day and a fair day'],'Find the subject and verb first, then rebuild the sentence.'],
    ['What does “Thou hast it now” mean?','You have it now',['They hate it now','You hurry now','He had it then'],'“Thou” is you, to one person. “Hast” is have.'],
    ['Why do the witches speak in short rhyming lines?','It makes their speech sound like a chant or spell, different from everyone else',['Because they are servants','Because Shakespeare ran out of time','Because they are speaking Scottish'],'The different rhythm sets the witches apart from the human characters.']]
};
