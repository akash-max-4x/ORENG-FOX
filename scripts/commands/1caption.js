module.exports.config = {
  name: "caption",
  version: "1.0.0",
  permssion: 0,
  prefix: true,
  premium: false,
  credits: "ALVI",
  description: "Captions collected by ALVI",
  category: "X2",
  usages: "caption",
  cooldowns: 4,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = [
"🐰🍒শী্ঁত্ঁ শী্ঁত্ঁ ভা্ঁব্ঁ কি্ঁসে্ঁর্ঁ জা্ঁনি্ঁ এ্ঁক্ঁটা্ঁ অ্ঁভা্ঁব্ঁ_🙊🙈",
"--ღღ🦋🖤✨-\n\n--𝐋𝐨𝐯𝐞 𝐢'𝐬 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 __☺️🦋✨\n\n--𝐥𝐟 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞𝐝 𝐨𝐧𝐞 𝐢𝐬 𝐫𝐢𝐠𝐡𝐭..!🦋🍁💫\n\n-ভালোবাসা সুন্দর ___,🖤🦋\n\n- যদি প্রিয় মানুষটি সঠিক হয়....!☺️🖤🙂✨🌼",
"❥◎⃝! শূন্যতায় ভাসি🙃 \n\n❥কখনো হাসি -😁💚_আবার কাঁদি!-😅\n\n❥বেলা শেষে 🌌শূন্যতায় জড়িয়ে ও পূর্ণতা খুঁজি😊❤",
" ❥»̶̶͓͓͓̽̽̽⑅⃝✺❥᭄❥\n\n___💚__পৃথিবীটা আজ...\n\nমিথ্যে মায়াতে ভরা...!💚🌺\n\n____🥀_তাই তো পৃথীবীর মানুষ আজ....!\n\nঅভিনয়ের সেরা...👎🥀",
"💜🔐🌈 ___\n\n- 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲-!! 😽🧡✨\n\n🍁_সবাই তো খুশি চায়_আর আমি প্রতিটা খুশিতে তোমাকে চাই⚜️— -!!-) 😊🖤\n\n___💜🔐🌈",
"🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\n\n___চোখের দেখায় নয়,মনের দেখায় ভালবাসি!!😇✨\n\n- কাছে থাকো কিংবা দূরে,তোমাকে ভেবেই হাসি!!🖤🐰\n\n💖🦋",
"༅༎💙🦋\n༆𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_⚠︎🙅🏻‍♂️✨\n\n😽︵۵মানুষ! হচ্ছে!বৃষ্টির!মতো!Life a ! অনেক মানুষ !আসবে!অনেক মানুষ !যাবে!💔🥰\n\n:༅༎💙🦋 সঠিক!মানুষটা!ঠিকই!ছায়া!হয়ে!পাশে!থাকবে -/ ఌ︵💚🌻",
"(-𝙄 𝙖𝙢 𝘼𝙙𝙙𝙞𝙘𝙩𝙚𝙙 𝙏𝙤👀🙈\n\n_')𝙈𝙮 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙋𝙚𝙧𝙨𝙤𝙣..!\n\n🐰🦋 -(^আমি আমার প্রিয় মানুষটার প্রতি আসক্ত >!💖🔐🍭)😇",
"𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-!!🦋🐭\n\n🐰' —'পারফেক্ট' কাউকে পাবার থেকে'কাউকে' পারফেক্ট' বানিয়ে নিতে পারাটা' বড় অর্জন'--)🌼💜\n\n___🍒🖇️✨___",
"°🐹💙🍒\n\n_𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n°\n\n__!!☁️✨🌺আপনাকে পাওয়ার দাবি!আমি মৃত্যুর পরও ছাড়বো না,,🔐💚 🙂",
"︵🦋💚\n\n____ღ༎- রংধনু ঘেরা এই শহরে হয়তো সব কিছু পাওয়া যায় ...!!😊\n\n--- কিন্তু সত্যিকারের ভালোবাসা আর বিশ্বাসী মানুষ খুঁজে পাওয়া যায় না ... !!🖤🥀",
"__একদিন সব ইচ্ছা পূর্ণতা পাবে ! 🖤🥀\n\n𝐈𝐧 𝐒𝐚𝐡 𝐀𝐥𝐥𝐚𝐡____☺️🌺",
"🌻🖤-বাস্তবতা \n-কখনোই গল্পের মতো সুন্দর হয় না! \nআর/n-সুন্দর গল্পে কখনো বাস্তবতার মিল থাকে না!🖤-🌻",
"🥀🍀About this line,,🌻🌱\n\nদিন শেষে সুর্য টা ও বুজিয়ে দেয় \nপ্রয়োজন শেষ হলে স্থান পরিবর্তন হয়🌅\n🌻🍀🌱🥀",
"-! সুন্দরীকে প্রত্যাক্ষান করা যায়->>>>>\n -! কিন্তু মায়াবতীকে নয়...!!>💙🌼",
"-•︵🦋🌸\n__চেহেরার দিকে নয় !🙂\nচোখের দিকে তাকিয়ে মন স্পর্শ করাকে ভালোবাসা বলে 🖤🦋\n•︵🦋🌸....🥹😇🥰",
"︵🌸💚\n- কিছু মানুষ আমাদেরকে ভালোবাসে না, তবে অসম্ভব মায়ায় ফেলে দেয় 🙂🥀💫🌈",
"~`~🦋~ এক আকাশ শুন্যতার মাঝে তুমি এক পূর্ণতার ছায়া..\n🦋~হাজার মানুষের ভিড়ে তুমি এক অদ্ভুত মায়া!~😊❤️🥀",
"😅😅\n♡︎-𝙏𝙝𝙞𝙨 𝙖𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚-🖤🌸\n🌟🖤\n___ღ༎কারো কাছে মন খারাপের কথা বলার চেয়ে\n\n      হাসিমুখে আলহামদুলিল্লাহ বলাই উত্তম︵ღ۵__💚🥀",
"•⎯͢⎯⃝🩵❝ 𝐒𝐞𝐥𝐟-𝐜𝐨𝐦𝐩𝐥𝐚𝐜𝐞𝐧𝐜𝐲 𝐢𝐬 𝐟𝐚𝐭𝐚𝐥 𝐭𝐨 𝐩𝐫𝐨𝐠𝐫𝐞𝐬𝐬. ❞•⎯͢⎯⃝🩵\n\n─༅༎༅🩷🪽︵আত্মতৃপ্তি অগ্রগতির জন্য মারাত্মক __!!\n\n____🌺🌻😽",
"🐰✨𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞 🖤🦋🌸\n__ — 🦋 “আগলে রাখুন\n সেই মানুষটাকে \n\nযে কোনো স্বার্থ ছাড়াই\nনিয়মিত আপনাকে ভালোবাসে,”!🥀🌺",
"🦋﹏﹏নিজের জীবনের লড়াইটা﹏﹏🙂\n🙃নিজেকে লড়তে হবে〰︎🥺\n                🙂⚊⚊জ্ঞান অনেকেই দেবে--😶\n                  🦋~কিন্তু~🤫\n সঙ্গ কেউ দেবে না🙂.     _ 💚\n___💚__পৃথিবীটা আজ...\n      মিথ্যে মায়াতে ভরা...!💚🌺\n____🥀_তাই তো পৃথীবীর মানুষ আজ....! \n অভিনয়ের সেরা....!🖤🌸",
"•\n\n—𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 এর চেয়ে.𝗙𝗿𝗶𝗲𝗻𝗱𝘀𝗵𝗶𝗽 টাই বেশি সুন্দর-!😊🌸🖤\n\n•-𝑵𝒐 𝒄𝒂𝒑𝒕𝒊𝒐𝒏𝒔 𝒇𝒐𝒓 𝒇𝒓𝒊𝒆𝒏𝒅𝒔,,,😍\n-𝒃𝒆𝒄𝒂𝒖𝒔𝒆 𝒇𝒓𝒊𝒆𝒏𝒅 𝒊𝒔 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒇𝒐𝒓𝒆𝒗𝒆𝒓💜❝།།💚 \n•------••✧✿❛ლ︵❝།།😘🤝💝ლ❛✿✧••------•\n\nლ❛✿✧••------•\n          - ভালোবাসা হারিয়ে যায় -💔🙂🥀\n\n- আর যে সম্পর্ক সারা জীবন বেঁচে থাকে, \n- সেটা হলো বন্ধুত্ব - 🥰🤝♥️🥰🥰🥀🥀",
"🇸🇦━━━━♡﷽♡━━━━\n\n✰❥🖤🥀_𝙣𝙤𝙩 𝙟𝙪𝙨𝙩 𝙋𝙖𝙡𝙚𝙨𝙩𝙞𝙣𝙚 𝙊𝙣𝙚 𝙙𝙖𝙮 𝙖𝙧𝙤𝙪𝙣𝙙 𝙩𝙝𝙚 𝙬𝙤𝙧𝙡𝙙 𝙆𝙖𝙡𝙞𝙢𝙖 𝙛𝙡𝙖𝙜 𝙬𝙞𝙡𝙡 𝙛𝙡𝙮  𝙄𝙣𝙨𝙝𝙖𝙡𝙡𝙖𝙝_✰❥🖤🥀\n\n✰❥🖤🥀_শুধু ফিলিস্তিন নয়\n সারা বিশ্বে একদিন\n কালেমার পতাকা উড়বে ইনশাআল্লাহ .. ✰❥🇸🇦☑︎\n  ∘₊✧───🇵🇸❤🇧🇩──✧₊∘",
"-𝘿𝙤𝙣'𝙩 𝙣𝙚𝙚𝙙 𝙖𝙣𝙮 𝙖𝙩𝙩𝙞𝙩𝙪𝙙𝙚 𝙘𝙖𝙥𝙩𝙞𝙤𝙣 𝙩𝙤 𝙚𝙭𝙥𝙧𝙚𝙨𝙨 𝙢𝙮𝙨𝙚𝙡𝙛,🥀😑\n\n                 --_𝙈𝙮 𝙨𝙩𝙮𝙡𝙚 𝙞𝙨 𝙢𝙮 𝙖𝙩𝙩𝙞𝙩𝙪𝙙𝙚__-🔥🤘\n\nকি ভাবছো ভুলে গেছি 😏\n\n  🔥 নারে bro 🤟\n\nবেইমান কে কেউ ভুলে নাকি 🙄😤",
"_‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎____🌸💙)''তুমি শেষ বিকেলের বিষণ্ণ মেঘে জমা \n          আকাশের মতোই ভয়ংকর সুন্দর'' ♡💜🌻)_____",
"-FriEnd ShiP🫰🥀_𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n\n- ভালোবাসা হারিয়ে যায় -  🙂🥀\n\n- আর যে সম্পর্ক সারাজীবন বেঁচে থাকে \n\n- সেটা হলো বন্ধুত্ব- 🥰🌸🔐\n\n- 𝑵𝒐 𝒄𝒂𝒑𝒕𝒊𝒐𝒏𝒔 𝒇𝒐𝒓 fd\n- 𝒃𝒆𝒄𝒂𝒖𝒔𝒆 𝒇𝒓𝒊𝒆𝒏𝒅 𝒊𝒔 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒇𝒐𝒓𝒆𝒗𝒆𝒓 - ❤️🦋", "༎🌸💮\n\n➪❛মানুষ বলে ফ্রেন্ড মানে প্যারা\n\n--কিন্তু\n\nআমি বলি হাজারো ভিড়ের মাঝে আমার ফ্রেন্ডই সেরা❜﹏ღ彡🖤🤎\n\n𝑵𝒐 𝒄𝒂𝒑𝒕𝒊𝒐𝒏𝒔 𝒇𝒐𝒓 𝒇𝒓𝒊𝒆𝒏𝒅𝒔, 𝒃𝒆𝒄𝒂𝒖𝒔𝒆 𝒇𝒓𝒊𝒆𝒏𝒅 𝒊𝒔 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒄𝒂𝒑𝒕𝒊𝒐𝒏 𝒇𝒐𝒓𝒆𝒗𝒆𝒓 ❤",
"_____🦋ლ-ლ───\n\n               ༉-𝘿𝙤𝙣'𝙩  𝙣𝙚𝙚𝙙 𝙖𝙣𝙮 𝙖𝙩𝙩𝙞𝙩𝙪𝙙𝙚 𝙘𝙖𝙥𝙩𝙞𝙤𝙣 𝙩𝙤 𝙚𝙭𝙥𝙧𝙚𝙨𝙨 𝙢𝙮𝙨𝙚𝙡𝙛,🥀😑\n\n                 --_𝙈𝙮 𝙨𝙩𝙮𝙡𝙚 𝙞𝙨 𝙢𝙮 𝙖𝙩𝙩𝙞𝙩𝙪𝙙𝙚__-🔥🤘\n\n   - নিজেকে প্রকাশ করার জন্য কোনো মনোভাবের প্রয়োজন নাই 🥱\n      ___  আমার স্টাইলি আমার মনোভাব❞ 🥰😤"
];
;
 var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/XlbyPQu.png",
"https://i.imgur.com/XlbyPQu.png",
"https://i.imgur.com/XlbyPQu.png"
];

var callback = () => api.sendMessage({body:`✢━━━🄲🄰🄿🅃🄸🄾🄽━━━✢\n\n ${know}\n\n ✢━━𝙰𝚁𝚈𝙰𝙽 𝙲𝙰𝙿𝚃𝙸𝙾𝙽━━✢`,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };
