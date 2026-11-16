"use strict";
/* The Great Gatsby: the story in pictures. Plain narration. Every scene states what each person feels. */
CAST.nick = {name:'Nick', body:'#5c7a8a', hat:'none', hair:'#6b4a32'};
CAST.gatsby = {name:'Gatsby', body:'#eab4c0', hat:'none', hair:'#c89b4a'};
CAST.daisy = {name:'Daisy', body:'#ffffff', hat:'bob', hair:'#3a2a20', band:'#e3a61f'};
CAST.tom = {name:'Tom', body:'#7a5230', hat:'none', hair:'#dcc57a'};
CAST.jordan = {name:'Jordan', body:'#e9d9a0', hat:'bob', hair:'#c9902e'};
CAST.myrtle = {name:'Myrtle', body:'#2f3f7a', hat:'bob', hair:'#8a3a22'};
CAST.george = {name:'George', body:'#9a9a94', hat:'cap', hair:'#d8c88a', hatcol:'#7d7d78'};
CAST.wolf = {name:'Wolfshiem', body:'#4a4458', hat:'fedora'};
CAST.owl = {name:'Owl Eyes', body:'#55606e', hat:'none', hair:'#8a8a84', glasses:true};
CAST.gatz = {name:'Mr Gatz', body:'#6a6a6a', hat:'none', hair:'#d9d5cc', beard:'#d9d5cc'};
PROPS.glass = '<path d="M14 -40 h12 l-6 9 Z" fill="#f7e2a8" stroke="INK" stroke-width="1.5" stroke-linejoin="round"/><path d="M20 -31 v9 M16 -22 h8" stroke="INK" stroke-width="1.5" stroke-linecap="round"/>';
PROPS.shirt = '<path d="M12 -38 l5 -4 h6 l5 4 l-3 4 l-2 -2 v12 h-6 v-12 l-2 2 Z" fill="#b7d3e8" stroke="INK" stroke-width="1.4" stroke-linejoin="round"/>';
PROPS.book = '<rect x="13" y="-38" width="13" height="16" rx="1.5" fill="#b3263a" stroke="INK" stroke-width="1.5"/><path d="M16 -34 h7 M16 -30 h7" stroke="#fbf8ee" stroke-width="1.2"/>';
PROPS.phone = '<path d="M20 -22 v-14" stroke="INK" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="-39" r="4" fill="#3a3a44" stroke="INK" stroke-width="1.5"/><path d="M14 -22 h12" stroke="INK" stroke-width="3" stroke-linecap="round"/>';

BACKS.eastegg = '<rect width="360" height="220" fill="#bfe0ee"/><rect y="150" width="360" height="26" fill="#6fa3c7"/><path d="M0 176 C120 168 240 168 360 176 V220 H0 Z" fill="#7fb069"/><g stroke="#1c2333" stroke-width="2"><rect x="60" y="74" width="170" height="92" fill="#ffffff"/><path d="M50 74 L145 40 L240 74 Z" fill="#b3263a"/><g fill="#f3ead0"><rect x="76" y="92" width="10" height="74"/><rect x="108" y="92" width="10" height="74"/><rect x="172" y="92" width="10" height="74"/><rect x="204" y="92" width="10" height="74"/></g><rect x="134" y="118" width="22" height="48" fill="#7a5230"/></g><circle cx="304" cy="48" r="20" fill="#f7e2a8"/>';
BACKS.dock = '<rect width="360" height="220" fill="#1f2742"/><g fill="#f3ead0"><circle cx="50" cy="34" r="1.5"/><circle cx="130" cy="58" r="1.2"/><circle cx="210" cy="26" r="1.5"/><circle cx="280" cy="64" r="1.2"/><circle cx="330" cy="30" r="1.4"/><circle cx="90" cy="80" r="1.1"/></g><rect y="112" width="360" height="64" fill="#2c3a63"/><path d="M0 112 H360" stroke="#3d4d7d" stroke-width="2"/><path d="M230 112 C260 100 320 100 360 106 V112 Z" fill="#161c30"/><path d="M300 112 v-12" stroke="#161c30" stroke-width="3"/><circle class="glow" cx="300" cy="97" r="7" fill="#4fd17a"/><path d="M300 116 v30" stroke="#4fd17a" stroke-width="2" stroke-opacity=".35" stroke-dasharray="3 5"/><path d="M0 176 C120 168 240 170 360 176 V220 H0 Z" fill="#24402e"/>';
BACKS.ashes = '<rect width="360" height="220" fill="#c9c7c1"/><path d="M0 150 C60 110 110 150 170 126 C230 104 290 146 360 118 V220 H0 Z" fill="#a9a7a1"/><path d="M0 178 C120 168 240 172 360 178 V220 H0 Z" fill="#8d8b86"/><g stroke="#1c2333" stroke-width="2"><rect x="12" y="18" width="112" height="50" fill="#e9e4d2"/><path d="M30 68 v52 M106 68 v52" stroke-width="3"/><g fill="#fbf8ee"><circle cx="44" cy="43" r="15"/><circle cx="92" cy="43" r="15"/></g><g fill="none" stroke="#e3a61f" stroke-width="4"><circle cx="44" cy="43" r="18"/><circle cx="92" cy="43" r="18"/><path d="M62 43 h12"/></g><g fill="#3d6fb0"><circle cx="44" cy="43" r="7"/><circle cx="92" cy="43" r="7"/></g></g><g stroke="#1c2333" stroke-width="2"><rect x="252" y="112" width="92" height="66" fill="#d8d2c2"/><rect x="284" y="140" width="28" height="38" fill="#6a6a6a"/></g><text x="298" y="130" text-anchor="middle" font-family="Alegreya Sans, sans-serif" font-weight="800" font-size="10" fill="#1c2333">GARAGE</text>';
BACKS.apartment = '<rect width="360" height="220" fill="#e7c9b6"/><rect y="176" width="360" height="44" fill="#9a6a4a"/><g stroke="#1c2333" stroke-width="2"><rect x="232" y="34" width="72" height="80" fill="#2d3550"/><path d="M268 34 v80 M232 74 h72" /><rect x="34" y="60" width="50" height="36" fill="#fbf8ee"/><path d="M26 176 v-34 q0 -10 10 -10 h96 q10 0 10 10 v34 Z" fill="#b3263a"/></g><circle cx="286" cy="54" r="7" fill="#f7e2a8"/>';
BACKS.party = '<rect width="360" height="220" fill="#1f2742"/><circle cx="56" cy="44" r="18" fill="#f3ead0"/><g stroke="#1c2333" stroke-width="2"><rect x="120" y="70" width="200" height="106" fill="#f3e2b4"/><rect x="286" y="34" width="34" height="142" fill="#f3e2b4"/><path d="M280 34 L303 12 L326 34 Z" fill="#7a5230"/><g fill="#f7c948"><rect x="136" y="88" width="22" height="30"/><rect x="172" y="88" width="22" height="30"/><rect x="208" y="88" width="22" height="30"/><rect x="244" y="88" width="22" height="30"/><rect x="294" y="52" width="18" height="26"/><rect x="294" y="96" width="18" height="26"/></g><rect x="190" y="134" width="30" height="42" fill="#7a5230"/></g><path d="M0 60 Q60 84 120 62" fill="none" stroke="#f3ead0" stroke-width="1.5"/><g class="glow"><circle cx="20" cy="66" r="4" fill="#f7c948"/><circle cx="50" cy="73" r="4" fill="#e5484d"/><circle cx="80" cy="72" r="4" fill="#4fd17a"/><circle cx="106" cy="66" r="4" fill="#6fa3c7"/></g><path d="M0 176 C120 168 240 170 360 176 V220 H0 Z" fill="#2f5a3c"/>';
BACKS.cottage = '<rect width="360" height="220" fill="#d9cfb8"/><rect y="176" width="360" height="44" fill="#8a6a4a"/><g stroke="#1c2333" stroke-width="2"><rect x="222" y="30" width="96" height="84" fill="#8fa3b5"/><path d="M270 30 v84 M222 72 h96"/><rect x="30" y="92" width="120" height="12" fill="#7a5230"/><rect x="40" y="104" width="100" height="72" fill="#c4b79a"/><rect x="62" y="124" width="56" height="52" fill="#3a2f2b"/><circle cx="90" cy="76" r="14" fill="#fbf8ee"/><path d="M90 76 v-9 M90 76 h6" stroke-width="2"/></g><g stroke="#e9f1f7" stroke-width="1.5" stroke-linecap="round"><path d="M236 40 l-4 12 M256 44 l-4 12 M284 38 l-4 12 M304 46 l-4 12 M244 82 l-4 12 M290 84 l-4 12 M306 90 l-4 12 M262 92 l-4 12"/></g><g stroke="#1c2333" stroke-width="1.5"><circle cx="170" cy="150" r="8" fill="#e98aa0"/><circle cx="184" cy="144" r="8" fill="#fbf8ee"/><circle cx="198" cy="150" r="8" fill="#e98aa0"/><path d="M168 158 h32 l-5 18 h-22 Z" fill="#6fa3c7"/></g>';
BACKS.mansion = '<rect width="360" height="220" fill="#f1dfae"/><rect y="176" width="360" height="44" fill="#b98f52"/><g stroke="#1c2333" stroke-width="2"><rect x="22" y="22" width="24" height="154" fill="#fbf8ee"/><rect x="314" y="22" width="24" height="154" fill="#fbf8ee"/><rect x="222" y="60" width="76" height="116" fill="#7a5230"/><path d="M260 60 v116"/><path d="M130 34 v18 M112 52 h36 l-8 18 h-20 Z" fill="#f7c948"/></g><g stroke="#1c2333" stroke-width="1.2"><rect x="230" y="70" width="24" height="10" fill="#b7d3e8"/><rect x="230" y="84" width="24" height="10" fill="#f2c6d0"/><rect x="230" y="98" width="24" height="10" fill="#c9e6c0"/><rect x="266" y="70" width="24" height="10" fill="#f7e2a8"/><rect x="266" y="84" width="24" height="10" fill="#d9c7ee"/><rect x="266" y="98" width="24" height="10" fill="#f6c9a0"/></g>';
BACKS.hotel = '<rect width="360" height="220" fill="#f3c69a"/><rect y="176" width="360" height="44" fill="#a66a3e"/><g stroke="#1c2333" stroke-width="2"><rect x="40" y="26" width="70" height="110" fill="#fbe7a1"/><path d="M75 26 v110"/><rect x="250" y="26" width="70" height="110" fill="#fbe7a1"/><path d="M285 26 v110"/></g><circle cx="180" cy="44" r="24" fill="#f08a3c"/><g stroke="#f08a3c" stroke-width="3" stroke-linecap="round"><path d="M180 10 v-8 M150 26 l-8 -6 M210 26 l8 -6 M146 50 h-10 M214 50 h10"/></g>';
BACKS.road = '<rect width="360" height="220" fill="#6a5a7a"/><circle cx="60" cy="70" r="20" fill="#f08a3c"/><path d="M0 150 C80 126 160 150 240 130 C290 120 330 132 360 126 V220 H0 Z" fill="#8d8b86"/><rect y="176" width="360" height="44" fill="#4a4a52"/><path d="M0 198 H360" stroke="#fbf8ee" stroke-width="2" stroke-dasharray="14 12"/><g stroke="#1c2333" stroke-width="2"><rect x="14" y="110" width="84" height="66" fill="#d8d2c2"/><rect x="42" y="138" width="26" height="38" fill="#6a6a6a"/></g><g stroke="#1c2333" stroke-width="2"><path d="M228 168 h108 v-16 q0 -6 -8 -6 h-18 l-10 -16 h-40 l-10 16 h-14 q-8 0 -8 6 Z" fill="#f2d25a"/><circle cx="252" cy="170" r="10" fill="#3a3a44"/><circle cx="312" cy="170" r="10" fill="#3a3a44"/><path d="M262 146 l8 -12 h28 l8 12 Z" fill="#b7d3e8"/></g>';
BACKS.window = '<rect width="360" height="220" fill="#1f2742"/><g fill="#f3ead0"><circle cx="40" cy="30" r="1.4"/><circle cx="120" cy="18" r="1.2"/><circle cx="330" cy="40" r="1.4"/></g><circle cx="300" cy="44" r="16" fill="#f3ead0"/><g stroke="#1c2333" stroke-width="2"><rect x="150" y="30" width="210" height="146" fill="#e9e4d8"/><rect x="196" y="66" width="110" height="70" fill="#f7c948"/><path d="M251 66 v70 M196 101 h110"/></g><g fill="#1c2333"><circle cx="224" cy="116" r="9"/><path d="M212 136 q12 -16 24 0 Z"/><circle cx="278" cy="116" r="9"/><path d="M266 136 q12 -16 24 0 Z"/></g><path d="M0 176 C120 168 240 170 360 176 V220 H0 Z" fill="#24402e"/><g stroke="#1c2333" stroke-width="2" fill="#2f5a3c"><circle cx="26" cy="160" r="22"/><circle cx="110" cy="164" r="18"/></g>';
BACKS.pool = '<rect width="360" height="220" fill="#d8e3ea"/><path d="M0 150 H360 V220 H0 Z" fill="#b9c48a"/><g stroke="#1c2333" stroke-width="2"><rect x="150" y="160" width="196" height="46" rx="8" fill="#6fb7d9"/><rect x="216" y="172" width="66" height="16" rx="8" fill="#e5484d"/><path d="M30 150 v-70" stroke-width="5"/><path d="M96 150 v-56" stroke-width="5"/></g><g stroke="#1c2333" stroke-width="1.5"><circle cx="30" cy="66" r="26" fill="#e08a3c"/><circle cx="96" cy="84" r="22" fill="#d9a441"/></g><g fill="#e08a3c" stroke="#1c2333" stroke-width="1"><ellipse cx="60" cy="140" rx="6" ry="3"/><ellipse cx="128" cy="124" rx="6" ry="3"/><ellipse cx="180" cy="168" rx="6" ry="3"/><ellipse cx="300" cy="196" rx="6" ry="3"/></g>';
BACKS.grave = '<rect width="360" height="220" fill="#8d97a3"/><path d="M0 160 C120 146 240 150 360 160 V220 H0 Z" fill="#6f8a66"/><g stroke="#1c2333" stroke-width="2" fill="#c9c7c1"><path d="M250 176 v-34 a14 14 0 0 1 28 0 v34 Z"/><path d="M304 176 v-26 a11 11 0 0 1 22 0 v26 Z"/><path d="M36 176 v-26 a11 11 0 0 1 22 0 v26 Z"/></g><g stroke="#dfe6ee" stroke-width="1.5" stroke-linecap="round"><path d="M30 20 l-6 16 M80 40 l-6 16 M130 16 l-6 16 M180 44 l-6 16 M230 22 l-6 16 M280 46 l-6 16 M330 18 l-6 16 M54 84 l-6 16 M150 90 l-6 16 M210 100 l-6 16 M300 96 l-6 16 M110 110 l-6 16"/></g>';
BACKS.shore = '<rect width="360" height="220" fill="#1f2742"/><circle cx="70" cy="46" r="20" fill="#f3ead0"/><g fill="#f3ead0"><circle cx="150" cy="30" r="1.4"/><circle cx="220" cy="52" r="1.2"/><circle cx="330" cy="24" r="1.4"/></g><rect y="110" width="360" height="66" fill="#2c3a63"/><path d="M40 128 h60 M130 144 h70 M240 132 h50" stroke="#3d4d7d" stroke-width="2" stroke-linecap="round"/><path d="M250 110 C280 100 330 100 360 104 V110 Z" fill="#161c30"/><circle class="glow" cx="310" cy="98" r="5" fill="#4fd17a"/><path d="M0 176 C120 166 240 170 360 176 V220 H0 Z" fill="#c9b98a"/>';

STORIES.gatsby = {
  title:'The Great Gatsby: the story in pictures', sub:'All nine chapters', lesson:'2.1', narrator:'The narrator', icon:'book', endH:'That is the end of the novel', end:'Gatsby is dead. Tom and Daisy have left. Nick has gone home.',
  scenes:[
    {bg:'eastegg', when:'Before the story starts', place:'Long Island, near New York, in 1922',
     actors:[{c:'nick',x:60,face:'happy'},{c:'gatsby',x:145,face:'happy'},{c:'daisy',x:225,face:'happy'},{c:'tom',x:305,face:'angry'}],
     cap:'This is the story of The Great Gatsby. The people in this novel often hide what they feel and say less than they mean. In each scene their feelings and reasons are stated directly. Here are the four people you need first.',
     who:[['Nick Carraway','He tells the story. He is 29 and new to New York. He watches people closely.'],['Jay Gatsby','Nick’s neighbour. Very rich and mysterious. He is in love with Daisy.'],['Daisy Buchanan','Nick’s cousin. Charming, rich and married to Tom. She loved Gatsby five years ago.'],['Tom Buchanan','Daisy’s husband. Enormously rich, strong and a bully.']],
     key:'Gatsby loves Daisy. Daisy is married to Tom. Nick knows all three and tells us what he saw.'},
    {bg:'eastegg', when:'Chapter 1', place:'Tom and Daisy’s house in East Egg',
     actors:[{c:'nick',x:56,face:'happy',feel:'Curious'},{c:'daisy',x:140,face:'happy',feel:'Performing'},{c:'jordan',x:224,face:'sly',feel:'Bored'},{c:'tom',x:308,face:'angry',feel:'Restless'}],
     say:[{c:'daisy',t:'I’m p-paralysed with happiness.'}],
     cap:'Nick has rented a small house in West Egg. He drives across the bay to East Egg for dinner with his cousin Daisy and her husband Tom. Their friend Jordan Baker, a golfer, is there. Daisy laughs and jokes. Tom shows off his house and talks about a racist book he has read.',
     why:[['Daisy','unhappy underneath','she puts on a show of charm so that nobody sees it.'],['Tom','restless and superior','he lectures the others and pushes Nick around by the arm.']],
     key:'East Egg is where families with old, inherited money live. They have everything, and they are not content.'},
    {bg:'eastegg', when:'Chapter 1', place:'The Buchanans’ porch, after dinner',
     actors:[{c:'daisy',x:120,face:'sad',feel:'Bitter'},{c:'nick',x:250,face:'shock',feel:'Uneasy'}],
     say:[{c:'daisy',t:'I hope she’ll be a fool'}],
     cap:'The telephone rings during dinner. It is Tom’s mistress, a woman he is having an affair with. Everyone at the table knows. Afterwards Daisy tells Nick what she said when her daughter was born. She hoped the girl would be a fool, because a beautiful little fool is the best thing a girl can be.',
     why:[['Daisy','hurt and humiliated by Tom’s affair','she says a woman is better off not understanding what is done to her. She is describing herself.']],
     key:'Daisy knows her husband is unfaithful. She has decided there is nothing she can do about it.'},
    {bg:'dock', when:'Chapter 1', place:'Gatsby’s lawn, at night',
     actors:[{c:'nick',x:60,face:'shock',feel:'Watching'},{c:'gatsby',x:170,face:'sad',feel:'Longing',shake:true}],
     cap:'Nick comes home and sees his neighbour for the first time. Gatsby is standing alone on his lawn. He stretches out his arms towards the dark water. He is trembling. Across the bay there is a single green light. When Nick looks again, Gatsby has gone.',
     why:[['Gatsby','full of longing','he reaches towards the green light. It is at the end of Daisy’s dock, though Nick does not know that yet.']],
     key:'The green light stands for Daisy and for the future Gatsby wants. He can see it and cannot touch it.'},
    {bg:'ashes', when:'Chapter 2', place:'The valley of ashes',
     actors:[{c:'nick',x:50,face:'shock'},{c:'george',x:135,face:'happy',feel:'Hopeful'},{c:'myrtle',x:220,face:'sly',feel:'Excited'},{c:'tom',x:305,face:'sly',feel:'Scornful'}],
     say:[{c:'tom',t:'He’s so dumb he doesn’t know he’s alive.'}],
     cap:'Between the Eggs and New York there is a grey wasteland where the city’s ash is dumped. A faded advertisement with two huge eyes looks down on it. Tom takes Nick to a garage there. The owner is George Wilson. George’s wife, Myrtle, is Tom’s mistress. George does not know.',
     why:[['George','hopeful','he thinks Tom will sell him a car, which would help his failing business.'],['Myrtle','excited to see Tom','she walks straight past her husband as if he were not there.'],['Tom','scornful of George','he jokes with him and then insults him behind his back.']],
     key:'The valley of ashes is where the poor live. It is what the rich leave behind.'},
    {bg:'apartment', when:'Chapter 2', place:'An apartment in New York',
     actors:[{c:'myrtle',x:110,face:'angry',feel:'Defiant'},{c:'tom',x:214,face:'angry',feel:'Furious'},{c:'nick',x:310,face:'shock',prop:'glass',feel:'Trapped'}],
     say:[{c:'myrtle',t:'Daisy! Daisy! Daisy!'}],
     cap:'Tom keeps an apartment in the city for his meetings with Myrtle. They hold a small, drunken party there. Myrtle puts on an expensive dress and acts like a rich lady. Late at night she shouts Daisy’s name, to show that she has the right. Tom breaks her nose with his open hand.',
     why:[['Myrtle','proud and equal to Daisy','she insists on saying Daisy’s name.'],['Tom','furious','he hits her. His mistress has claimed to be equal to his wife. To him, Myrtle is something he owns.']],
     key:'Myrtle believes Tom will marry her one day. He never will.'},
    {bg:'party', when:'Chapter 3', place:'Gatsby’s mansion in West Egg',
     actors:[{c:'owl',x:56,face:'shock',prop:'book',feel:'Amazed'},{c:'jordan',x:140,face:'happy',prop:'glass'},{c:'nick',x:224,face:'shock',feel:'Surprised'},{c:'gatsby',x:308,face:'happy',feel:'Watchful'}],
     say:[{c:'gatsby',t:'I’m Gatsby,'}],
     cap:'Gatsby gives enormous parties every weekend. Hundreds of people come, and most were never invited. They swap rumours about him. In the library a man in owl-eyed glasses is amazed to find that the books are real. Nick talks to a polite young man and then learns that this is Gatsby himself.',
     why:[['The guests','no interest in their host','they use Gatsby’s house and do not care who he is.','feel'],['Gatsby','hopeful and patient','he drinks nothing and stands apart. He gives the parties for one reason. He hopes Daisy will walk in.']],
     key:'Gatsby is surrounded by people and has no friends. The parties are bait for Daisy.'},
    {bg:'hotel', when:'Chapter 4', place:'New York',
     actors:[{c:'gatsby',x:66,face:'happy',feel:'Anxious'},{c:'wolf',x:150,face:'sly'},{c:'nick',x:234,face:'shock',feel:'Amazed'},{c:'jordan',x:312,face:'sly'}],
     say:[{c:'jordan',t:'Gatsby bought that house so that Daisy would be just across the bay.'}],
     cap:'Gatsby tells Nick he comes from a rich family and went to Oxford University. Much of this is false. He introduces Nick to Meyer Wolfshiem, a gambler and criminal. Later Jordan tells Nick the true story. Five years ago Gatsby was a poor young officer and Daisy loved him. He went to war. She married Tom.',
     why:[['Gatsby','afraid of being thought a nobody','he invents a grand past for himself.'],['Daisy, five years ago,','in love with Gatsby and tired of waiting','she married Tom, who was rich and present. She cried the night before the wedding.','felt']],
     key:'Everything Gatsby owns was bought to win Daisy back. He now asks Nick to invite her to tea.'},
    {bg:'cottage', when:'Chapter 5', place:'Nick’s house, in the rain',
     actors:[{c:'gatsby',x:120,face:'scared',feel:'Terrified',shake:true},{c:'daisy',x:210,face:'shock',feel:'Moved'},{c:'nick',x:316,face:'happy',label:'Nick, leaving'}],
     say:[{c:'daisy',t:'I certainly am awfully glad to see you again.'}],
     cap:'Nick invites Daisy to tea. Gatsby fills the house with flowers and arrives pale with nerves. When Daisy comes in, he can hardly speak. He leans on the mantelpiece and almost knocks over a clock. Nick leaves them alone. When he comes back, Daisy has been crying and Gatsby is glowing with happiness.',
     why:[['Gatsby','terrified','he is stiff and clumsy. He fears that five years of hoping will come to nothing.'],['Daisy','surprised and moved to see him','she cries, and then she is happy.']],
     key:'The clock has stopped. Gatsby wants to stop time and go back five years.'},
    {bg:'mansion', when:'Chapter 5', place:'Gatsby’s bedroom',
     actors:[{c:'gatsby',x:92,face:'happy',prop:'shirt',feel:'Joyful'},{c:'daisy',x:190,face:'sad',feel:'Overwhelmed'}],
     say:[{c:'daisy',t:'They’re such beautiful shirts,'}],
     cap:'Gatsby shows Daisy his mansion. He throws his expensive shirts onto a table, one after another, in a great heap. Daisy bends her head into them and cries. Later Gatsby tells her about the green light on her dock. Now that she is beside him, it is only a light.',
     why:[['Daisy','sad for the life she might have had','she cries. The shirts prove that Gatsby is rich now. If he had been rich five years ago, she could have married him.'],['Gatsby','so happy that he is almost confused','he watches Daisy’s face to see what she thinks of everything he owns.']],
     key:'This is the happiest moment in the novel. Nick already doubts that the real Daisy can match the Daisy in Gatsby’s dreams.'},
    {bg:'party', when:'Chapter 6', place:'Gatsby’s garden, after a party',
     actors:[{c:'gatsby',x:120,face:'angry',feel:'Determined'},{c:'nick',x:250,face:'sad',feel:'Worried'}],
     say:[{c:'gatsby',t:'Why of course you can!'}],
     cap:'Nick tells us the truth about Gatsby. He was born James Gatz, a poor farm boy. At seventeen he invented a new name and a new self. Now Tom and Daisy come to one of his parties, and Daisy does not enjoy it. Gatsby tells Nick his plan. Daisy must tell Tom she never loved him. Nick warns him that he cannot repeat the past.',
     why:[['Gatsby','certain that he can get the past back','he expects Daisy to wipe out five years of marriage with one sentence.'],['Nick','worried','he can see that Gatsby is asking for something impossible.']],
     key:'Gatsby does not only want Daisy. He wants the last five years never to have happened.'},
    {bg:'eastegg', when:'Chapter 7', place:'The Buchanans’ house, on the hottest day of the summer',
     actors:[{c:'gatsby',x:70,face:'happy',feel:'Tense'},{c:'daisy',x:160,face:'happy',feel:'Reckless'},{c:'tom',x:258,face:'shock',feel:'Astounded',shake:true}],
     say:[{c:'daisy',t:'You always look so cool,'}],
     cap:'Gatsby has stopped giving parties. Daisy now visits him in the afternoons. On a day of terrible heat, Gatsby and Nick go to lunch with Tom and Daisy. Daisy looks at Gatsby and tells him he always looks so cool. Her voice gives her away. Tom understands that his wife is in love with Gatsby.',
     why:[['Daisy','in love and careless of the danger','she speaks to Gatsby tenderly in front of her husband.'],['Tom','shocked and then enraged','he decides to fight for what he thinks belongs to him.']],
     key:'The words are ordinary. The meaning is under them. Daisy is saying that she loves Gatsby.'},
    {bg:'hotel', when:'Chapter 7', place:'A room at the Plaza Hotel, New York',
     actors:[{c:'gatsby',x:60,face:'angry',feel:'Desperate'},{c:'tom',x:180,face:'angry',feel:'Savage'},{c:'daisy',x:300,face:'scared',feel:'Torn',shake:true}],
     say:[{c:'gatsby',t:'Your wife doesn’t love you,'},{c:'daisy',t:'Oh, you want too much!'}],
     cap:'They all drive to New York and take a hotel room. Gatsby tells Tom that Daisy never loved him. Tom says she did. Gatsby begs Daisy to say it. She cannot, because it is not true. She loved Tom once, and she loved Gatsby too. Then Tom reveals that Gatsby’s money comes from selling illegal alcohol. Daisy pulls away from Gatsby.',
     why:[['Gatsby','desperate to cancel the past','he needs Daisy to say she never loved Tom.'],['Daisy','frightened and unable to choose','she will not give up the safety of her marriage for a criminal.'],['Tom','sure he has won','he sends Daisy home in Gatsby’s car, to show how little he fears him.']],
     key:'Gatsby loses Daisy in this room. She chooses safety, as she did five years ago.'},
    {bg:'road', when:'Chapter 7', place:'The valley of ashes, at dusk',
     actors:[{c:'myrtle',x:150,face:'scared',feel:'Frantic',shake:true},{c:'george',x:58,face:'sad',feel:'Sick with shock'}],
     cap:'George Wilson has found out that his wife has a lover. He does not know who. He locks Myrtle in and plans to take her away. Earlier that day she saw Tom driving a big yellow car. Now the yellow car comes back along the road. Myrtle breaks out and runs towards it. The car hits her and kills her. It does not stop.',
     why:[['Myrtle','frantic to escape','she runs to the car because she thinks Tom is in it.'],['George','destroyed by grief','he will want to find whoever was driving.']],
     key:'The yellow car is Gatsby’s. Daisy was driving it. Myrtle is killed by her lover’s wife.'},
    {bg:'window', when:'Chapter 7', place:'Outside the Buchanans’ house, that night',
     actors:[{c:'gatsby',x:50,face:'sad',feel:'Loyal'},{c:'nick',x:120,face:'angry',feel:'Disgusted'}],
     cap:'Nick finds Gatsby hiding in the garden. Gatsby says that Daisy was driving, and that he will tell everyone it was him. He is standing guard in case Tom hurts her. Nick looks through the kitchen window. Tom and Daisy are sitting together at the table, talking calmly. Nick leaves Gatsby standing in the moonlight, watching over nothing.',
     why:[['Gatsby','devoted and still hopeful','he takes the blame for Daisy and waits all night for a sign from her.'],['Tom and Daisy','shaken and afraid for themselves','they sit together and plan how to protect themselves.','feel']],
     key:'Daisy has gone back to Tom. Gatsby does not know it yet.'},
    {bg:'pool', when:'Chapter 8', place:'Gatsby’s lawn, the next morning',
     actors:[{c:'nick',x:40,face:'sad',feel:'Loyal'},{c:'gatsby',x:112,face:'happy',feel:'Grateful'}],
     say:[{c:'nick',t:'They’re a rotten crowd,'}],
     cap:'Gatsby tells Nick the whole truth about his past and about Daisy. He still expects her to telephone. As Nick leaves for work, he turns and shouts that Gatsby is worth more than all the others put together. It is the only compliment he ever gave him. It is the last time he sees him alive.',
     why:[['Nick','angry at the Buchanans and loyal to Gatsby','he says out loud whose side he is on.'],['Gatsby','still hopeful','he waits by the telephone and then by the swimming pool.']],
     key:'Nick disapproves of how Gatsby made his money. He still judges him better than the rich people who used him.'},
    {bg:'ashes', when:'Chapter 8', place:'Wilson’s garage',
     actors:[{c:'george',x:250,face:'sad',feel:'Mad with grief',shake:true}],
     say:[{c:'george',t:'God sees everything,'}],
     cap:'George Wilson has not slept. He stares at the huge eyes on the advertisement and says that God sees everything. He decides that the driver of the yellow car was his wife’s lover and killed her on purpose. He goes looking for the owner. Tom Buchanan tells him the car belongs to Gatsby.',
     why:[['George','desperate for justice','he believes he must punish the man who killed Myrtle.'],['Tom','no guilt','he points George towards Gatsby and lets him believe Gatsby was the driver. This protects Tom and Daisy.']],
     key:'The eyes are only an advertisement. Nobody is watching over these people, and nobody puts things right.'},
    {bg:'pool', when:'Chapter 8', place:'Gatsby’s swimming pool',
     actors:[{c:'gatsby',x:92,face:'sad',prop:'phone',feel:'Waiting'}],
     cap:'Gatsby waits beside his pool for Daisy to telephone. She does not. It is the first cool day, and the leaves are starting to fall. George Wilson walks into the garden and shoots Gatsby dead. Then he shoots himself.',
     why:[['Gatsby','hopeless at the end, in Nick’s opinion','he stops expecting the telephone to ring.'],['George','certain he is doing justice','he shoots a man who was not the driver.']],
     key:'Three people have died: Myrtle, Gatsby and George. All three were born poor. Tom and Daisy are unharmed.'},
    {bg:'grave', when:'Chapter 9', place:'The cemetery, in the rain',
     actors:[{c:'nick',x:70,face:'sad',feel:'Angry'},{c:'gatz',x:164,face:'sad',prop:'book',feel:'Proud'},{c:'owl',x:256,face:'sad',feel:'Pity'}],
     say:[{c:'gatz',t:'Jimmy was bound to get ahead.'}],
     cap:'Nick arranges the funeral. He telephones everyone. Daisy and Tom have gone away and left no address. Wolfshiem will not come. The hundreds of party guests stay away. Gatsby’s father arrives, proud of his son. At the grave there are only Nick, the father, a few servants and the man with the owl-eyed glasses.',
     why:[['Mr Gatz','proud of his son’s success','he shows Nick the timetable for self-improvement that the boy once wrote.'],['Daisy','afraid of being involved','she sends no message and no flower.']],
     key:'Gatsby had hundreds of guests and almost no friends.'},
    {bg:'hotel', when:'Chapter 9', place:'A street in New York, in the autumn',
     actors:[{c:'tom',x:110,face:'happy',feel:'Self-satisfied'},{c:'nick',x:240,face:'angry',feel:'Disgusted'}],
     cap:'Months later Nick meets Tom in the street. Tom admits that he told George Wilson who owned the yellow car. He thinks he did nothing wrong. Nick decides that Tom and Daisy are careless people. They smash things up and then retreat into their money, and other people clean up after them. Nick decides to go home to the Midwest.',
     why:[['Tom','sure that he was in the right','he feels sorry for himself and not for Gatsby.'],['Nick','disgusted with the rich','he leaves the East for good.']],
     key:'Careless means not caring what happens to other people. This is Nick’s final judgement on Tom and Daisy.'},
    {bg:'shore', when:'Chapter 9', place:'Gatsby’s beach, on Nick’s last night',
     actors:[{c:'nick',x:110,face:'sad',feel:'Sad and full of wonder'}],
     say:[{c:'nick',t:'So we beat on, boats against the current, borne back ceaselessly into the past.'}],
     cap:'Nick sits on the beach behind Gatsby’s empty house. He thinks about Gatsby and the green light. Gatsby believed in a future that kept moving away from him. Nick says that all of us are like that. We keep reaching forward, like boats rowing against a current, and we are carried back into the past.',
     why:[['Nick','sad for Gatsby and for everyone who hopes','he turns Gatsby’s story into a statement about all people.']],
     key:'The last line means that people never stop striving for their dreams, and that the past always pulls them back.'}
  ],
  questions:[
    ['Who tells the story?','Nick Carraway',['Jay Gatsby','Tom Buchanan','Jordan Baker'],'Nick is Daisy’s cousin and Gatsby’s neighbour.'],
    ['What is Gatsby reaching towards at the end of Chapter 1?','A green light across the bay',['The moon','Nick’s house','A passing boat'],'The light is at the end of Daisy’s dock.'],
    ['Who is Myrtle Wilson?','Tom’s mistress and George Wilson’s wife',['Daisy’s sister','Gatsby’s mother','Nick’s girlfriend'],'She lives in the valley of ashes.'],
    ['Why does Tom break Myrtle’s nose?','She keeps shouting Daisy’s name',['She breaks a glass','She laughs at Nick','She wants to leave'],'He will not let his mistress claim equality with his wife.'],
    ['Why does Gatsby give his parties?','He hopes Daisy will come to one',['He loves crowds','He wants to be mayor','Wolfshiem orders him to'],'Everything he does is aimed at Daisy.'],
    ['Why did Daisy marry Tom five years ago?','Gatsby was poor and away at war, and Tom was rich and present',['She had never met Gatsby','Her father forced her at gunpoint','Tom was a war hero'],'She wanted love, and she wanted security more.'],
    ['Why does Daisy cry over the shirts?','They show the rich life with Gatsby that she missed',['They are ugly','They belong to Tom','She is cold'],'If he had been rich five years ago, she could have married him.'],
    ['What does Gatsby believe about the past?','That it can be repeated',['That it should be forgotten','That it never happened','That Nick invented it'],'“Why of course you can!”'],
    ['What can Daisy not say in the hotel?','That she never loved Tom',['That she loves her daughter','That she is hot','That she knows Jordan'],'It is not true. She loved them both.'],
    ['Who was driving the car that killed Myrtle?','Daisy',['Gatsby','Tom','George'],'Gatsby takes the blame.'],
    ['Who tells George Wilson that the yellow car is Gatsby’s?','Tom',['Nick','Jordan','Wolfshiem'],'Tom protects himself and Daisy, and Gatsby is killed.'],
    ['Who comes to Gatsby’s funeral?','Nick, Gatsby’s father, a few servants and Owl Eyes',['Daisy and Tom','All the party guests','Nobody at all'],'The people who used his house stay away.'],
    ['What does Nick call Tom and Daisy?','Careless people',['Brave people','Poor people','Kind people'],'They damage others and retreat into their money.'],
    ['What does the last line of the novel mean?','People keep reaching for the future and are pulled back by the past',['Nick takes up rowing','Gatsby is still alive','The summer was too short'],'Gatsby’s story becomes everyone’s story.']]
};
