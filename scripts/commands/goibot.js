module.exports.config = {
  name: "goibot",
  version:"1.0",
  role:0,
  author: "dipto",
  description: "goi bot no prefix baby ",
  category: "fun",
  usePrefix:true,
  usages:"{p}"
};

module.exports.onChat = async ({ message, event }) => {
  const hh = event.text?.toLowerCase() || "";
  if (hh.startsWith("Max") || hh.startsWith("MAX")) || hh.startsWith("max")) {
    try {
      const ar = [
        "°অনুভূতি প্রকাশ করতে নেই মানুষ নাটক মনে করে মজা নেয়°..! ",
        "𝙴𝙸 𝙿𝙰𝙶𝙾𝙻 𝙴𝚃𝙾 𝙳𝙰𝙺𝙾𝚂 𝙺𝙴𝙽?  ",
        " 𝙼𝚈𝙱 𝙸 𝙹𝚄𝚂𝚃 𝚆𝙰𝙽𝙽𝙰 𝙱𝙴 𝚈𝙾𝚄𝚁𝚂 ? 😌💝",
        " 𝙸 𝚂𝙰𝚈 𝙸 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 𝙵𝙾𝚁𝙴𝚅𝙴𝚁💝🐼",
        "𝙲𝙰𝙻𝙻 𝙼𝙴 𝙲𝙷𝙾𝙲𝙾𝙻𝙰𝚃𝙴 𝙽𝙾𝚃 𝙱𝙾𝚃 😢",
        " 𝚈𝚄𝙼𝙼𝚈 𝙱𝙱𝚈 𝚈𝙾𝚄 𝙰𝚁𝙴 𝚂𝙾 𝚂𝚆𝙴𝙴𝚃😋🤤 ",
       "𝙰𝚌𝙲𝙲𝙰𝙷 𝙱𝙾𝙻𝙾 𝙰𝙼𝙺𝙴 𝙻𝙰𝙶𝙱𝙴 𝙽𝙰𝙺𝙸 𝚁𝚄𝚂𝚂𝙸𝙰𝙽 ?",
        "তোর সাথে কথা নাই কারণ তুই অনেক লুচ্চা",
        " এইখানে লুচ্চামি করলে লাথি দিবো কিন্তু",
        "আমাকে চুমু দিবি 🫢🦋",
        "হেহে বাবু আমার কাছে আসো 😘💋",
        "আমি তোমাকে অনেক ভালোবাসি বাবু🥺💖",
        "কিরে বলদ তুই এইখানে 🙂",
        " আমাকেq চিনো না জানু? মনু",
        "AR asbo na tor kache",
        "আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দিবো 😘",
        "Hop beda dakos kn🥲",
        "-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱",
        " ওই মামী আর ডাকিস না প্লিজ🥲",
        " হ্যা বলো, শুনছি আমি",
        "বলো কি করতে পারি তোমার জন্য😌 ",
        "𝐁𝐨𝐭 না জানু,বলো কারন আমি সিংগেল 😌 ",
        " I love you tuna🥺🥶",
        "Tuma dew xanu😍😘 ",
        " এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈",
        " দেখা হলে কাঠগোলাপ দিও..🤗",
        "𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺 ",
        "•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺 ",
      "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 ",
        "Single taka ki oporad🥺 ",
        " Premer mora jole duve na😛",
        "Ufff matha gorom kore disos😒 ",
        "Xhipay atke gaci jan🥲 ",
        "Washroom a🤣 ",
       "bado maser kawwa police amar sawwa😞",
        "I am single plz distrab me🥺🥲 ",
        "𝗮𝗺𝗶 𝗯𝗼𝘁 𝗻𝗮 𝗮𝗺𝗮𝗸𝗲 𝗯𝗯𝘆 𝗯𝗼𝗹𝗼 𝗯𝗯𝘆!!😘 ",
        "🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না 🥲 ",
        "🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না 🥲 ",
        "𝗛𝗶𝗶 𝗶 𝗮𝗺 𝗯𝗼𝘁 𝗰𝗮𝗻 𝗶 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂!🤖 ",
        "𝗲𝘁𝗼 𝗯𝗯𝘆 𝗯𝗯𝘆 𝗻𝗮 𝗸𝗼𝗿𝗲 𝘁𝗮𝗸𝗮 𝗼 𝘁𝗼 𝗽𝗮𝘁𝗵𝗮𝘁𝗲 𝗽𝗮𝗿𝗼😒🥳🥳 ",
        "𝘁𝗼𝗿𝗲 𝗺𝗮𝗿𝗮𝗿 𝗽𝗿𝗲𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗻𝗶𝗰𝗵𝗵𝗶...!!.🫡 ",
        "𝘁𝗼𝗿𝗲 𝗺𝗮𝗿𝗮𝗿 𝗽𝗿𝗲𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗻𝗶𝗰𝗵𝗵𝗶...!!.🫡 ",
        "𝘂𝗺𝗺𝗮𝗵 𝗱𝗶𝗹𝗲 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂 𝗸𝗼𝗺𝘂 𝗸𝗶𝗻𝘁𝘂😑 ",
        "আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দিবো 😘",
        "Tapraiya dat falai demu🥴 ",
        "He🤤bolo amar jan kmn aso🤭 ",
        "Hmmm jan ummmmmmah🫣 ",
      "Chup kor nunu kete demu bashi dakle😬",
        "Yes sir😍",
        "Assalamualikum☺️💖 ",
        "Walaikumsalam😫🤓 ",
        "Chaiya takos kn ki kobi kooo☹️ ",
        "Onek boro beyadop re tui😒 ",
        "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏 ",
        " তোর কি চোখে পড়ে না আমি ব্যাস্ত 😒💌",
        "বলো কি বলবা, চিপায় যাইয়া বলবা নাকি সবার সামনে বলবা ?🤭🤏 ",
        " 𝐁𝐨𝐭 না জানু,বলো কারন আমি সিংগেল 😌",
        " দূরে যাইয়া মুরি খাঁ, তোর কোনো কাজ কাম নাই, শুধু 𝐁𝐨𝐭 𝐁𝐨𝐭 করিস  😒",
        "আম গাছে আম নাই ঢিল কেন মারো, তোমার সাথে প্রেম নাই Bby কেন ডাকো🥲 ",
        "𝘁𝗼𝗿 𝗻𝗮𝗻𝗶𝗿 𝗸𝗵𝗮𝗹𝗶 𝗴𝗵𝗼𝗿😒😒 ",
     "এই এই তোর পরীক্ষা কবে ? শুধু Bot  Bot 𝗸𝗼𝗿𝗶𝘀 ",
        "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 ",
    "আগে একটা গান বলো, ☹ নাহলে কথা বলবো না 🥺",
        "বলদা তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো..?? 🤔 ",
        "-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂🤧 ",
        "জান হাঙ্গা করবা-🙊😝🌻 ",
        "বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 ",
        "কি হলো ,মিস টিস করচ্ছিস নাকি🤣 "
      ];
      const A = ar[Math.floor(Math.random() * ar.length)];
      message.reply(A);
    } catch (error) {
      message.reply(error.message);
    }
  }
};
