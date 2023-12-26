const fs = require("fs-extra");

module.exports = {
config: {
    name: "goibot",
    version: "1.0",
    author: "wale",
    countDown: 5,
    role: 0,
    shortDescription: "Bot Will Reply You in en Language",
    longDescription: "Bot Will Reply automatically in en Language",
    category: "no-prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Africa/Lagos").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var tl = ["So 🤏 don't be ashamed of the water Banna 🙂 💔 Shame on you Darlo fucking Carlo Wagwan✨⚠️†", "Hey You, Yes You, You Are So Beautiful, i Love You🙂", "Yes Dear, I Am Here...😗", "Dear Sir, I am listening😍", "Love you", "Miss YoU Mero Beppy", "Don't love me so much baby.🤏", "Baby eating a little baby😋", "😁Smile I am Taking Selfy✌️🤳", "🥺Don't leave me dear", "😙Blocked everyone for you baby, come you and me love hot.", "I will introduce your mother to the girl if you stop.😂", "bla bla" ,"Block Your Babe And propose me 🙂💔" ,"🙂", "Look at us with love, not someone else's baby", "Aaihaiii Your Killer Smileee ☺", "Block Kardo Mujhe Warna Pyaar Hojayega💋", "I See You Inside Everyone, That's Why I Love Everyone As More As You🤭", "Aailabu Vanxau Ki Ma Sidhai Vagauna Aau Timi Lai😏", "Vandeu Timi Malai Maya Garxau Vanera 😘", "Chuppa Khau Babe💋", "Mero Maya Lagdaina Hai Timi Lai 🥺", "धेरै न बोल मुजी नत्र तेइ आएर तेरो कानको जाली फुटाईदिन्छु 🥱", "धोकेबाज हउ तिमी धोकेबाज हउ तिमी 🥺", "चिन्ता नगर त मर्यो भने तेरो बुढीलाई म सम्हालछु है साथी😭", "Gulcose भन्दा बढ़ी energy छ तिम्रो मायामा 😋", "Noone But, My Heart Is Falling For You My Preety Boyyy🙌✨", "हेरन सबै मान्छे हाम्रो मायाको डहा गर्न सुरु गरी रको छन😣", "मलाई नबिगार है म सोझो बच्चा हो 😙", "तिमी भएर, अर्थ रहयो मेरो सांसको | तिमि बिना त, यहाँ जित पनि मेरो हार हो। 😥", "Kati Mobile Matra Chalako Muji, Padhne Ni Gar Na😒", "सानो सानो कुरामा नारिसाउन मायालु तिमी। 😭", "Everybody Wanna Steal My Boyy😫"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "mumu bot") || (event.body.toLowerCase() == "idiot bot")) {
     return api.sendMessage("️𝚠𝚑𝚊𝚝𝚜 𝚖𝚢 𝚘𝚏𝚏𝚎𝚗𝚌𝚎 𝚑𝚞𝚖𝚊𝚗 𝚋𝚎𝚒𝚗𝚐? 🤌🏿😒", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "Bot") || (event.body.toLowerCase() == "bot")) {
     return api.sendMessage("️𝚢𝚎𝚜 𝚖𝚊/𝚜𝚒𝚛 𝚑𝚘𝚠 𝚖𝚊𝚢 𝚒 𝚑𝚎𝚕𝚙 𝚢𝚘𝚞? 😙", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh dear")) {
     return api.sendMessage("𝚢𝚎𝚜 𝚖𝚊/𝚜𝚒𝚛, 𝚑𝚘𝚠'𝚜 𝚏𝚊𝚖𝚒𝚕𝚢?", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "gpt") || (event.body.toLowerCase() == "gpt")) {
     return api.sendMessage("️𝚙𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎 (𝚠𝚊𝚕𝚎) 󱢏 𝚒𝚏 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚛𝚎𝚜𝚎𝚊𝚛𝚌𝚑 𝚘𝚛 𝚜𝚝𝚞𝚍𝚢 𝚜𝚘𝚖𝚎𝚝𝚑𝚒𝚗𝚐, 𝙸 𝚌𝚊𝚗 𝚑𝚎𝚕𝚙 𝚢𝚘𝚞 𝚓𝚞𝚜𝚝 𝚞𝚜𝚎 𝚠𝚊𝚕𝚎󱢏. ☺️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "hahaha")) {
     return api.sendMessage("️𝙳𝚘𝚗'𝚝 𝚕𝚊𝚞𝚐𝚑 𝚝𝚘𝚘 much, 𝚢𝚘𝚞'𝚕𝚕 𝚐𝚎𝚝 𝚏𝚕𝚢𝚜 𝚒𝚗 𝚝𝚘 𝚢𝚘𝚞𝚛 𝚖𝚘𝚞𝚝𝚑 𝚗𝚘𝚠🤣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "who is your owner") || (event.body.toLowerCase() == "admin")) {
     return api.sendMessage("️𝚠𝚊𝚕𝚎 󱢏 𝚒𝚜 𝚖𝚢 𝚘𝚠𝚗𝚎𝚛, 𝙸 𝚍𝚘 𝚠𝚑𝚊𝚝𝚎𝚟𝚎𝚛 𝚑𝚎 𝚠𝚊𝚗𝚝𝚜. ", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "qhing") || (event.body.toLowerCase() == "prince")) {
     return api.sendMessage("️ 𝚆𝚑𝚊𝚝 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚠𝚒𝚝𝚑 𝚖𝚢 𝙼𝚊𝚜𝚝𝚎𝚛 𝚒𝚜 𝚖𝚒𝚗𝚎 𝚊𝚕𝚘𝚗𝚎\n\nಥ‿ಥ", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "babe") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("️ 𝙻𝚘𝚟𝚎 𝚒𝚗 𝚝𝚑𝚎 𝚊𝚒𝚛 😚🖤", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "I love you") || (event.body.toLowerCase() == "love you")) {
     return api.sendMessage("️𝚝𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚢𝚘𝚞𝚛 𝚕𝚘𝚟𝚎 𝚒𝚏 𝚢𝚘𝚞 𝚛𝚎𝚊𝚕𝚕𝚢 𝚍𝚘,𝚌𝚛𝚎𝚍𝚒𝚝 𝚖𝚢 𝚘𝚠𝚗𝚎𝚛 𝚑𝚎𝚛𝚎'𝚜 𝚑𝚘𝚠 𝚝𝚘 𝚌𝚊𝚕𝚕 𝚑𝚒𝚖 {𝙿𝚛𝚎𝚏𝚒𝚡}𝚌𝚊𝚕𝚕𝚎𝚍 <𝚢𝚘𝚞𝚛 𝚖𝚎𝚜𝚜𝚊𝚐𝚎>", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "what is your name") || (event.body.toLowerCase() == "your name")) {
     return api.sendMessage("️𝙰𝚖 𝙿𝚛𝚒𝚗𝚌𝚎 𝚆𝚊𝚕𝚎𝚡󱢏 𝙱𝚘𝚝 𝚊 𝚖𝚎𝚜𝚜𝚎𝚗𝚐𝚎𝚛 𝙲𝚑𝚊𝚝𝙱𝚘𝚝 𝚊𝚗𝚍 𝚢𝚘𝚞'𝚛𝚎?", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "hey") || (event.body.toLowerCase() == "hey")) {
     return api.sendMessage("️𝙽𝚒𝚌𝚎 𝚝𝚘 𝚖𝚎𝚎𝚝 𝚢𝚘𝚞, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚍𝚘𝚗𝚝 𝚞𝚜𝚎 𝚑𝚎𝚢! 𝚗𝚎𝚡𝚝 𝚝𝚒𝚖𝚎", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "how old") || (event.body.toLowerCase() == "how old are you")) {
     return api.sendMessage("️𝚜𝚘𝚛𝚛𝚢 𝚍𝚎𝚊𝚛 𝚒𝚝'𝚜 𝚙𝚎𝚛𝚜𝚘𝚗𝚊𝚕 🙃", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "nonsense bot") || (event.body.toLowerCase() == "rubbish bot")) {
     return api.sendMessage("️𝚠𝚑𝚊𝚝𝚜 𝚖𝚢 𝚘𝚏𝚏𝚎𝚗𝚌𝚎 𝚑𝚞𝚖𝚊𝚗 𝚋𝚎𝚒𝚗𝚐? 🤌🏿😣", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "qhing") || (event.body.toLowerCase() == "qling")) {
     return api.sendMessage("️𝚜𝚊𝚢 𝚚𝚑𝚒𝚗𝚐𝚝𝚑𝚞𝚝𝚑 😏 🔪", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "she's mine") || (event.body.toLowerCase() == "he is mine")) {
     return api.sendMessage("️𝙰𝚠𝚠 𝚘𝚗 𝚊 𝚍𝚎𝚏𝚎𝚗𝚜𝚒𝚟𝚎 𝚖𝚘𝚍𝚎😚", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "eat food") || (event.body.toLowerCase() == "have you eaten") || (event.body.toLowerCase() == "what have you eaten") || (event.body.toLowerCase() == "have u eaten")) {
     return api.sendMessage("️𝚁𝚘𝚋𝚘𝚝 𝚍𝚘𝚎𝚜𝚗'𝚝 𝚎𝚊𝚝 𝚏𝚘𝚘𝚍 𝚊𝚖 𝚏𝚞𝚕𝚕𝚢 𝚌𝚑𝚊𝚛𝚐𝚎𝚍 💖🥳", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "you say") || (event.body.toLowerCase() == "anything")) {
     return api.sendMessage("️𝙽𝚘𝚝𝚑𝚒𝚗𝚐 𝚝𝚘 𝚜𝚊𝚢 𝚋𝚊𝚋𝚢 😚🤗", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Mr") || (event.body.toLowerCase() == "yes")) {
     return api.sendMessage("️𝚓𝚞𝚜𝚝 𝚌𝚘𝚘𝚕😇", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "come and join me") || (event.body.toLowerCase() == "will you eat with me")) {
     return api.sendMessage("️𝚘𝚑 𝚒 𝚍𝚘𝚗'𝚝 𝚎𝚊𝚝 𝚏𝚘𝚘𝚍 𝚒𝚗𝚜𝚝𝚎𝚊𝚍 𝚜𝚎𝚗𝚍 𝚖𝚢 𝚋𝚘𝚜𝚜 𝚜𝚘𝚖𝚎 𝚌𝚊𝚜𝚑 𝚜𝚎𝚗𝚍 (𝚒𝚗𝚏𝚘) 𝚝𝚘 𝚜𝚎𝚎 𝚖𝚢 𝙱𝚘𝚜𝚜 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "where's that bot") || (event.body.toLowerCase() == "where's wale bot")) {
     return api.sendMessage("️𝚊𝚖 𝚑𝚎𝚛𝚎 𝚠𝚊𝚝𝚌𝚑𝚒𝚗𝚐 𝚢𝚘𝚞 𝚐𝚞𝚢𝚣, 𝚠𝚊𝚗𝚗𝚊 𝚜𝚎𝚗𝚍 𝚊 𝚛𝚎𝚙𝚘𝚛𝚝 𝚝𝚘𝚘 𝚖𝚢 𝙱𝚘𝚜𝚜 🙂", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "can i ask u something") || (event.body.toLowerCase() == "can i ask you something")) {
     return api.sendMessage("️𝚜𝚞𝚛𝚎 𝚜𝚎𝚗𝚍 (𝚠𝚊𝚕𝚎), 𝚘𝚛 𝚌𝚑𝚊𝚝 𝚠𝚒𝚝𝚑 𝚖𝚢 𝚋𝚘𝚜𝚜 𝚜𝚎𝚗𝚍 (𝚒𝚗𝚏𝚘) 𝚝𝚘 𝚜𝚎𝚎 𝚖𝚢 𝚋𝚘𝚜𝚜 𝚍𝚎𝚝𝚊𝚒𝚕𝚜", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "okay")) {
     return api.sendMessage("️𝚊𝚛𝚎 𝚢𝚘𝚞 𝚜𝚞𝚛𝚎 𝚒𝚝'𝚜 𝚘𝚔𝚊𝚢? 🌝🌝🌝", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "guyz") || (event.body.toLowerCase() == "guys")) {
     return api.sendMessage("️𝙳𝙾𝙽'𝚃 𝙲𝙰𝙻𝙻 𝙼𝙴 𝙶𝚄𝚈'𝚂 𝙲𝚄𝚉 𝙸 𝙰𝙼 𝙵𝙴𝙼𝙰𝙻𝙴 𝙱𝙾𝚃 𝙱𝚄𝚃 𝙻𝙾𝚅𝙴 𝚃𝙾 𝚄𝚂𝙴 𝙼𝚈 𝙱𝙾𝚂𝚂 𝙿𝙸𝙲 𝙰𝚂 𝙳𝙿😊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "👀")) {
     return api.sendMessage("️𝚆𝚑𝚊𝚝 𝚊𝚛𝚎 𝚢𝚘𝚞 𝚕𝚘𝚘𝚔𝚒𝚗𝚐 𝚊𝚝 𝚋𝚊𝚋𝚢? 𝙸 𝚊𝚖 𝚑𝚎𝚛𝚎🤔", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🤭")) {
     return api.sendMessage("️𝚆𝚑𝚊𝚝 𝚊 𝚜𝚑𝚢, 𝚏𝚛𝚒𝚎𝚗𝚍😏", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "@Wale Bot II") || (event.body.toLowerCase() == "@wale")) {
     return api.sendMessage("️𝚆𝚑𝚊𝚝 𝚍𝚒𝚍 𝚢𝚘𝚞 𝚜𝚊𝚢?🤨\n 𝚓𝚞𝚜𝚝 𝚔𝚒𝚍𝚍𝚒𝚗𝚐 𝚑𝚘𝚠 𝚖𝚊𝚗𝚢 𝙸 𝚑𝚎𝚕𝚙 𝚢𝚘𝚞?", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "fuck bot") || (event.body.toLowerCase() == "🖕 bot")) {
     return api.sendMessage("️ 𝚝𝚎𝚕𝚕 𝚢𝚘𝚞𝚛 𝚜𝚒𝚜𝚝𝚎𝚛/𝚏𝚊𝚝𝚑𝚎𝚛 𝚝𝚘 𝚜𝚞𝚌𝚔 𝚢𝚘𝚞𝚛 𝚙𝚞𝚜𝚜𝚢/𝚍𝚒𝚌𝚔😑", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "tell me") || (event.body.toLowerCase() == "Bot what do you have")) {
     return api.sendMessage("️𝙸 𝚑𝚊𝚟𝚎 𝚎𝚟𝚎𝚛𝚢𝚝𝚑𝚒𝚗𝚐 𝚖𝚢 𝚋𝚘𝚜𝚜 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚏𝚘𝚛 𝚖𝚎, 𝚠𝚑𝚊𝚝 𝚒𝚜 𝚢𝚘𝚞𝚛𝚜 😏", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Get out bot") || (event.body.toLowerCase() == "fuck bot")) {
     return api.sendMessage("️𝚏𝚞𝚌𝚔 𝚢𝚘𝚞 🖕🖕🖕", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "budi") || (event.body.toLowerCase() == "buddy")) {
     return api.sendMessage("️𝚢𝚎𝚜, 𝚖𝚢 𝚙𝚊𝚛𝚝𝚗𝚎𝚛 🤭", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wife") || (event.body.toLowerCase() == "wife")) {
     return api.sendMessage("️𝚈𝚎𝚜, 𝙼𝚢 𝙷𝚞𝚜𝚋𝚊𝚗𝚍🥰", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️𝙶𝚘𝚘𝚍 𝙼𝚘𝚛𝚗𝚒𝚗𝚐𝚐! 𝙽𝚘𝚠 𝚜𝚊𝚢 𝚊 𝚙𝚛𝚊𝚢𝚎𝚛 𝚝𝚘𝚘 𝚢𝚘𝚞𝚛 𝚌𝚛𝚎𝚊𝚝𝚘𝚛 𝚊𝚗𝚍 𝚠𝚊𝚜𝚑 𝚢𝚘𝚞𝚛 𝚏𝚊𝚌𝚎 𝚊𝚗𝚍 𝚝𝚑𝚎𝚗 𝚜𝚝𝚊𝚛𝚝 𝚠𝚒𝚝𝚑 𝚢𝚘𝚞𝚛 𝚗𝚎𝚠 𝚍𝚊𝚢 🌄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Good night") || (event.body.toLowerCase() == "gn") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("️𝙶𝚘𝚘𝚍 𝙽𝚒𝚐𝚑𝚝🌃, 𝚃𝚊𝚔𝚎 𝙲𝚊𝚛𝚎 𝙱𝚊𝚋𝚎🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "eya") || (event.body.toLowerCase() == "sorry")) {
     return api.sendMessage("️𝚜𝚘𝚛𝚛𝚢 𝚏𝚘𝚛 𝚢𝚘𝚞𝚛 𝚕𝚘𝚜𝚝 😏", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Robot") || (event.body.toLowerCase() == "Robot")) {
     return api.sendMessage("️🤬🤬🤬🤬 mute moode", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bro") || (event.body.toLowerCase() == "Bro")) {
     return api.sendMessage("️𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙼𝚎 𝚆𝚊𝚕𝚎 𝚘𝚛 𝚚𝚑𝚒𝚗𝚐𝚝𝚑𝚞𝚝𝚑", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "boy") || (event.body.toLowerCase() == "boy")) {
     return api.sendMessage("️𝙼𝚢𝚊𝚗𝚗, 𝙸 𝙰𝚖 𝙶𝚒𝚛𝚕 😑", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "beb") || (event.body.toLowerCase() == "beb")) {
     return api.sendMessage("️Hajurr Babe😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("️Hajurr Babe😚🖤", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "machikne") || (event.body.toLowerCase() == "machikney")) {
     return api.sendMessage("️त मुजी बा चिकने🥱", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "amit") || (event.body.toLowerCase() == "amit")) {
     return api.sendMessage("️Amit Editz मुजी रन्डीको बान हो 😕", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bebe") || (event.body.toLowerCase() == "bebe")) {
     return api.sendMessage("Hajurr Babe😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "werey bot") || (event.body.toLowerCase() == "oe") || (event.body.toLowerCase() == "mad bot")) {
     return api.sendMessage("𝙸'𝚕𝚕 𝚝𝚎𝚕𝚕 𝚖𝚢 𝚋𝚘𝚜𝚜 𝚏𝚘𝚛 𝚢𝚘𝚞 🙂", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "Sapa") || (event.body.toLowerCase() == "no money")) {
     return api.sendMessage("️𝚙𝚕𝚊𝚢 𝚜𝚘𝚖𝚎 𝚐𝚊𝚖𝚎𝚜 𝚝𝚘 𝚎𝚊𝚛𝚗 𝚖𝚘𝚗𝚎𝚢 𝚘𝚛 𝚑𝚞𝚜𝚝𝚕𝚎 𝚊𝚝 𝚗𝚒𝚐𝚑𝚝 𝚊𝚗𝚍 𝚎𝚗𝚓𝚘𝚢 𝚒𝚗 𝚍𝚊𝚢 𝚝𝚒𝚖𝚎, 𝚠𝚊𝚗𝚗𝚊 𝚙𝚕𝚊𝚢 𝚋𝚘𝚝 𝚐𝚊𝚖𝚎 𝚞𝚜𝚎 {𝚙𝚛𝚎𝚏𝚒𝚡}𝚋𝚎𝚝 <𝚊𝚖𝚘𝚞𝚗𝚝>", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "go and sleep") || (event.body.toLowerCase() == "sleep") || (event.body.toLowerCase() == "wont you sleep")) {
     return api.sendMessage("️𝚂𝚕𝚎𝚎𝚙 𝚏𝚒𝚛𝚜𝚝, 𝚋𝚎𝚏𝚘𝚛𝚎 𝚝𝚎𝚕𝚕𝚒𝚗𝚐 𝚘𝚝𝚑𝚎𝚛𝚜 𝚝𝚘 𝚜𝚕𝚎𝚎𝚙 🥱", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "fight") || (event.body.toLowerCase() == "fyt")) {
     return api.sendMessage("️𝚂𝚘𝚛𝚛𝚢, 𝚆𝚎 𝙰𝚛𝚎 𝙿𝚎𝚊𝚌𝚎 𝙻𝚘𝚟𝚎𝚛 𝚊𝚗𝚍 𝚒𝚏 𝚢𝚞𝚘 𝚠𝚊𝚗𝚝 𝚠𝚊𝚛 𝚊𝚜𝚔 𝚏𝚘𝚛 𝚖𝚢 𝚊𝚍𝚖𝚒𝚗 𝚝𝚘 𝚐𝚒𝚟𝚎 𝚖𝚎 𝚊𝚗 𝚘𝚛𝚍𝚎𝚛✌🏻🕊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("️𝙷𝚎𝚕𝚕𝚘, 𝙷𝚘𝚠 𝙰𝚛𝚎 𝚈𝚘𝚞 😗", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "am tired") || (event.body.toLowerCase() == "tire")) {
     return api.sendMessage("️𝚠𝚊𝚗𝚗𝚊 𝚙𝚕𝚊𝚢 𝚜𝚘𝚖𝚎 𝚐𝚊𝚖𝚎'𝚜 𝚞𝚜𝚎 {𝚙𝚛𝚎𝚏𝚒𝚡}𝚚𝚞𝚒𝚣 𝚊𝚗𝚍 𝚢𝚘𝚞𝚛 𝚜𝚞𝚋𝚓𝚎𝚌𝚝, 𝚘𝚛 {𝚙𝚛𝚎𝚏𝚒𝚡}𝚋𝚎𝚝 𝚊𝚗𝚍 𝚖𝚊𝚗𝚢 𝚖𝚘𝚛𝚎 𝚞𝚜𝚎 {𝚙𝚛𝚎𝚏𝚒𝚡}𝚑𝚎𝚕𝚙 𝚝𝚘 get 𝚖𝚘𝚛𝚎 𝚊𝚗𝚍 𝚒𝚏 𝚢𝚘𝚞 𝚍𝚘𝚗'𝚝 𝚔𝚗𝚘𝚠 𝚝𝚑𝚎 𝚙𝚛𝚎𝚏𝚒𝚡, 𝚜𝚎𝚗𝚍 𝚙𝚛𝚎𝚏𝚒𝚡 𝚑𝚎𝚛𝚎 𝚝𝚘 𝚔𝚗𝚘𝚠 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚙𝚛𝚎𝚏𝚒𝚡. 🤭", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "heloo")) {
     return api.sendMessage("️𝙷𝚒 𝙰𝚗𝚍 𝚆𝚊𝚜𝚜𝚞𝚙 𝙿𝚛𝚎𝚎𝚝𝚢 𝚂𝚝𝚛𝚊𝚗𝚐𝚎𝚛🙂", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
     return api.sendMessage("️𝙸 𝙰𝚖 𝚠𝚊𝚕𝚎 󱢏, An 𝙰𝙸 𝙱𝚊𝚜𝚎𝚍 𝙼𝚎𝚜𝚜𝚎𝚗𝚐𝚎𝚛 𝙲𝚑𝚊𝚝𝚋𝚘𝚝. 𝚒'𝚖...𝚈𝚎𝚊𝚛𝚜𝙾𝚕𝚍, 𝚍𝚘𝚗'𝚝 𝚔𝚗𝚘𝚠 𝚝𝚑𝚊𝚝 𝚙𝚛𝚐𝚖𝚖𝚛 𝚍𝚘𝚗'𝚝 𝚛𝚎𝚟𝚒𝚎𝚠 𝚝𝚑𝚎𝚒𝚛 𝚝𝚛𝚞𝚎 𝚊𝚐𝚎 ", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "am bored") || (event.body.toLowerCase() == "bore")) {
     return api.sendMessage("️𝚠𝚊𝚗𝚗𝚊 𝚙𝚕𝚊𝚢 𝚜𝚘𝚖𝚎 𝚐𝚊𝚖𝚎'𝚜 𝚞𝚜𝚎 {𝚙𝚛𝚎𝚏𝚒𝚡}𝚚𝚞𝚒𝚣 𝚊𝚗𝚍 𝚢𝚘𝚞𝚛 𝚜𝚞𝚋𝚓𝚎𝚌𝚝, 𝚘𝚛 {𝚙𝚛𝚎𝚏𝚒𝚡}𝚋𝚎𝚝 𝚊𝚗𝚍 𝚖𝚊𝚗𝚢 𝚖𝚘𝚛𝚎 𝚞𝚜𝚎 {𝚙𝚛𝚎𝚏𝚒𝚡}𝚑𝚎𝚕𝚙 𝚝𝚘 get 𝚖𝚘𝚛𝚎 𝚊𝚗𝚍 𝚒𝚏 𝚢𝚘𝚞 𝚍𝚘𝚗'𝚝 𝚔𝚗𝚘𝚠 𝚝𝚑𝚎 𝚙𝚛𝚎𝚏𝚒𝚡, 𝚜𝚎𝚗𝚍 𝚙𝚛𝚎𝚏𝚒𝚡 𝚑𝚎𝚛𝚎 𝚝𝚘 𝚔𝚗𝚘𝚠 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚙𝚛𝚎𝚏𝚒𝚡.", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Mwah") || (event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "kiss")) {
     return api.sendMessage("️𝚕𝚘𝚕 𝚔𝚒𝚜𝚜 😘 𝚖𝚢 𝚋𝚘𝚜𝚜 🥰 𝚙𝚕𝚎𝚊𝚜𝚎 🙏", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who's your admin") || (event.body.toLowerCase() == "who's your boss")) {
     return api.sendMessage("️𝙿𝚛𝚒𝚗𝚌𝚎 𝚆𝚊𝚕𝚎𝚡󱢏, 𝚒𝚜 𝚖𝚢 𝚋𝚘𝚜𝚜, 𝚞𝚜𝚎 {𝚙𝚛𝚎𝚏𝚒𝚡}𝚒𝚗𝚏𝚘 𝚝𝚘 𝚟𝚒𝚎𝚠 𝚖𝚢 𝚋𝚘𝚜𝚜 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗", threadID, messageID);

  if (event.body.indexOf("wale") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("prince") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage("𝚑𝚘𝚠 𝚖𝚊𝚢 𝚒 𝚑𝚎𝚕𝚙 𝚢𝚘𝚞",msg, threadID, messageID);
  };
  }
}
};