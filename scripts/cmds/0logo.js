const axios = require('axios');
const fs = require('fs');

module.exports = {
  config: {
    name: "logo",
    version: "1.0",
    author: "Samuel / walex",
    countDown: 5, 
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "logo",
    guide: "{pn}"
  },
  onStart: async function ({ api, event, args, Users }) {
    let { messageID, senderID, threadID } = event;

    if (args.length >= 2 && args[0].toLowerCase() === "list") {
      let page = parseInt(args[1]);
      switch (page) {
        case 1:
          return api.sendMessage(
            `╔═•°•°••°•°۩۞۩°•°••°•°•═╗\n\n𝑯𝑒𝒓𝒆'𝒔 𝒕𝒉𝒆 𝒍𝒐𝒈𝒐 𝒍𝒊𝒔𝒕 - 𝑷𝒂𝒈𝒆 1:\n\n
• 𝚊𝚐𝚕𝚒𝚝𝚌𝚑 \n• 𝙱𝚞𝚜𝚒𝚗𝚎𝚜𝚜 \n• 𝚋𝚕𝚘𝚘𝚍\n• 𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
• 𝚋𝚛𝚘𝚔𝚎𝚗 \n• 𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜\n• 𝚌𝚊𝚙𝚝𝚊𝚒𝚗𝚊𝚖𝚎𝚛𝚒𝚌𝚊
• 𝚌𝚊𝚛𝚋𝚘𝚗 \n• 𝚌𝚒𝚛𝚌𝚞𝚒𝚝\n• 𝚌𝚑𝚘𝚛𝚘𝚛
• 𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜 \n• 𝚍𝚒𝚜𝚌𝚘𝚟𝚎𝚛𝚢\n• 𝚍𝚎𝚟𝚒𝚕
• 𝚍𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛 \n• 𝚏𝚒𝚌𝚝𝚒𝚘𝚗\n• 𝚏𝚒𝚛𝚎 \n• 𝚐𝚕𝚊𝚜𝚜\n• 𝚐𝚐𝚒𝚛𝚕\𝚗
• 𝚐𝚛𝚎𝚎𝚗𝚑𝚘𝚛𝚛𝚘𝚛\n• 𝚒𝚖𝚐𝚕𝚒𝚝𝚌𝚑\n• 𝚕𝚊𝚢𝚎𝚛𝚎𝚍
• 𝚕𝚒𝚐𝚑𝚝\n• 𝚖𝚊𝚐𝚖𝚊\n• 𝚖𝚎𝚝𝚊𝚕𝚕𝚒𝚌
• 𝚗𝚎𝚘𝚗\n• 𝚜𝚔𝚎𝚕𝚎𝚝𝚘𝚗 \n• 𝚜𝚔𝚎𝚝𝚌𝚑
• 𝚜𝚝𝚘𝚗𝚎\n• 𝚝𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛𝚜 \n• 𝚠𝚊𝚕𝚕\n• 𝚏𝚕𝚊𝚖𝚒𝚗𝚐\n• 𝚋𝚕𝚘𝚘𝚍2\n• 𝚍𝚊𝚗𝚌𝚎𝚝𝚎𝚡𝚝\n• 𝚕𝚘𝚕𝚒\n• 𝚖𝚊𝚔𝚎𝚛\n\n
𝑷𝑨𝑮𝑬 1 - 5\n\n╚═•°•°••°•°۩۞۩°•°••°•°•═╝`,
            threadID,
            messageID
          );
        case 2:
          return api.sendMessage(
            `╔═•°•°••°•°۩۞۩°•°••°•°•═╗\n\n𝑯𝑒𝒓𝒆'𝒔 𝒕𝒉𝒆 𝒍𝒐𝒈𝒐 𝒍𝒊𝒔𝒕 - 𝑷𝒂𝒈𝒆 2:\n\n•  𝚗𝚊𝚛𝚞𝚝𝚘\n• 𝚍𝚛𝚊𝚐𝚘𝚗𝚏𝚒𝚛𝚎\n• 𝚊𝚟𝚊𝚝𝚎𝚛\n• 𝚙𝚞𝚋𝚐𝚊𝚟𝚊𝚝𝚎𝚛\n• 𝚗𝚒𝚐𝚑𝚝𝚜𝚝𝚊𝚛𝚜\n• 𝚜𝚞𝚗𝚕𝚒𝚐𝚑𝚝\n• 𝚌𝚕𝚘𝚞𝚍\n• 𝚙𝚒𝚐\n• 𝚌𝚊𝚙𝚎𝚛\n• 𝚠𝚛𝚒𝚝𝚎𝚜𝚝𝚊𝚝𝚞𝚜\n• 𝚑𝚘𝚛𝚛𝚘𝚛\n• 𝚝𝚎𝚊𝚖𝚕𝚘𝚐𝚘\n• 𝚚𝚞𝚎𝚎𝚗\n• 𝚋𝚎𝚊𝚌𝚑\n• 𝚋𝚎𝚊𝚌𝚑2\n• 𝚏𝚋𝚌3\n• 𝚝𝚊𝚝𝚝𝚘\n• 𝚜𝚑𝚒𝚛𝚝3\n• 𝚘𝚌𝚎𝚊𝚗𝚜𝚎𝚊\n• 𝚜𝚑𝚒𝚛𝚝4\n• 𝚜𝚑𝚒𝚛𝚝5\n• 𝚜𝚑𝚒𝚛𝚝6\n• 𝚕𝚘𝚟𝚎𝚖𝚜𝚐\n• 𝚌𝚑𝚛𝚒𝚜𝚝𝚟𝚒𝚍\n• 𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜2\n• 𝚒𝚌𝚎𝚝𝚎𝚡𝚝\n• 𝚋𝚞𝚝𝚝𝚎𝚛𝚕𝚏𝚢\n• 𝚌𝚘𝚏𝚏𝚎\n• 𝚕𝚘𝚟𝚎\n• 𝚗𝚎𝚘𝚗𝚎𝚡𝚙𝚎𝚗𝚜𝚒𝚟𝚎\n• 𝚝𝚝𝚙3\n• 𝚠𝚊𝚒𝚏𝚞\n• 𝚐𝚕𝚒𝚝\n\n
𝑷𝑨𝑮𝑬 2 - 5\n\n╚═•°•°••°•°۩۞۩°•°••°•°•═╝`,
            threadID,
            messageID
          );
        case 3:
          return api.sendMessage(
            `╔═•°•°••°•°۩۞۩°•°••°•°•═╗\n\n𝑯𝑒𝒓𝒆'𝒔 𝒕𝒉𝒆 𝒍𝒐𝒈𝒐 𝒍𝒊𝒔𝒕 - 𝑷𝒂𝒈𝒆 3:\n\n\n• 𝚗𝚎𝚘𝚗2\n• 𝚓𝚞𝚟𝚎𝚗𝚝𝚞𝚜\n• 𝚐𝚕𝚊𝚜𝚜𝚎𝚜\n• 𝚝𝚕𝚘𝚐𝚘\n• 𝚠𝚘𝚘𝚍\n• 𝚐𝚛𝚎𝚎𝚗𝚋𝚞𝚜𝚑\n• 𝚚𝚞𝚘𝚝𝚎𝚜𝚝𝚊𝚝𝚞𝚜\n• 𝚒𝚗𝚜𝚌𝚎𝚗𝚝\n• 𝚎𝚛𝚊𝚜𝚎𝚛\n• 𝚝𝚢𝚙𝚘\n• 𝚕𝚎𝚝𝚝𝚎𝚛\n• 𝚘𝚗𝚌𝚕𝚘𝚝𝚑\n• 𝚐𝚛𝚊𝚏𝚏𝚒𝚝𝚒\n• 𝚖𝚎𝚝𝚊𝚕\n• 𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚗\n• 𝚙𝚞𝚙𝚙𝚢\n• 𝚍𝚒𝚊𝚛𝚢𝚏𝚛𝚊𝚖𝚎\n• 𝚗𝚎𝚘𝚗𝚜𝚝𝚢𝚕𝚎\n• 𝚏𝚋𝚌12\n• 𝚏𝚋𝚌11 \n• 𝚏𝚋𝚌10\n• 𝚏𝚋𝚌9\n• 𝚏𝚋𝚌7\n• 𝚏𝚋𝚌6\n• 𝚏𝚋𝚌4•\n• 𝚖𝚕4\n• 𝚊𝚛𝚎𝚗𝚊\n• 𝚛𝚊𝚗𝚔\n• 𝚕𝚘𝚟𝚎𝚌𝚊𝚛𝚍\n• 𝚕𝚘𝚟𝚎𝚌𝚊𝚛𝚍3\n• 𝚕𝚘𝚟𝚎𝚌𝚊𝚛𝚍4\n• 𝚕𝚘𝚟𝚎𝚋𝚊𝚕𝚕𝚘𝚗\n• 𝚕𝚘𝚟𝚎𝚋𝚊𝚕𝚕𝚘𝚗2\n• 𝚌𝚊𝚔𝚎2\n• 𝚌𝚊𝚔𝚎3\n• 𝚌𝚊𝚔𝚎4\n• 𝚌𝚊𝚔𝚎5\n• 𝚌𝚊𝚔𝚎6\n• 𝚌𝚊𝚔𝚎7\n• 𝚋𝚍𝚊𝚢𝚌𝚊𝚛𝚍\n• 𝚌𝚞𝚙\n• 𝚋𝚎𝚊𝚛\n\n
𝑷𝑨𝑮𝑬 3 - 5\n\n╚═•°•°••°•°۩۞۩°•°••°•°•═╝`,
            threadID,
            messageID
          );
        case 4:
          return api.sendMessage(
`╔═•°•°••°•°۩۞۩°•°••°•°•═╗\n\n𝑯𝑒𝒓𝒆'𝒔 𝒕𝒉𝒆 𝒍𝒐𝒈𝒐 𝒍𝒊𝒔𝒕 - 𝑷𝒂𝒈𝒆 4:\n• 𝒕𝒊𝒈\n• 𝒓𝒐𝒔𝒆𝒔𝒊𝒍𝒗𝒆𝒓\n• 𝒓𝒐𝒔𝒆𝒈𝒐𝒍𝒅\n• 𝒎𝒕𝒑\n• 𝒓𝒂𝒊𝒏𝒃𝒎\n• 𝒏𝒆𝒘𝒚𝒆𝒂𝒓\n• 𝒏𝒆𝒘𝒚𝒆𝒂𝒓2\n• 𝒏𝒆𝒘𝒚𝒆𝒂𝒓3\n• 𝒂𝒏𝒏𝒐𝒏𝒚\n• 𝒕𝒆𝒂𝒎𝒍𝒐𝒈𝒐\n• 𝒃𝒍𝒖𝒆𝒏𝒆𝒐𝒏\n• 𝒄𝒎\n• 𝒍𝒍𝒐𝒈𝒐\n• 𝒑𝒓𝒊𝒏𝒕𝒏\n• 𝒄𝒇𝒃\n• 𝒌𝒊𝒏𝒈\n• 𝒍𝒗𝒅\n• 𝒔𝒑𝒂𝒄𝒆\n• 𝒇𝒃𝒄9\n• 𝒏𝒆𝒘𝒚𝒓𝒗𝒊𝒅\n• 𝒏𝒆𝒘𝒚𝒓𝒗𝒊𝒅3\n• 𝒄𝒂𝒌𝒆9\n• 𝒇𝒇2\n• 𝒎𝒈\n• 𝒑𝒖𝒃𝒈𝒄\n• 𝒄𝒓𝒐𝒔𝒔𝒇𝒊𝒓𝒆\n• 𝒇𝒐𝒈𝒈𝒚\n• 𝒍𝒐𝒗𝒗𝒆\n• 𝒇𝒇3\n• 𝒐𝒗𝒘2\n• 𝒏𝒆𝒘𝒓𝒐𝒗2\n• 𝑓𝒘\n\n
𝑷𝑨𝑮𝑬 4 - 5\n\n╚═•°•°••°•°۩۞۩°•°••°•°•═╝`,
            threadID,
            messageID
          );
        case 5:
          return api.sendMessage(        `╔═•°•°••°•°۩۞۩°•°••°•°•═╗\n\n𝑯𝑒𝒓𝒆'𝒔 𝒕𝒉𝒆 𝒍𝒐𝒈𝒐 𝒍𝒊𝒔𝒕 - 𝑷𝒂𝒈𝒆 5:\n• arrow\n• arrow2\n• angel\n• angel2\n• angel3\n• metal5\n• cpubg\n• masavt\n• masavt2\n• metavt\n• gpt\n• galxy6\n• pubg\n• pubg2\n• fbc13\n• fbc\n• fbc2\n• legend2\n• pubgc2\n• pubgcl\n• newaov\n• ovw\n• ovw2\n• newrov\n• king2\n• lnew\n• blackpubg\n• floral\n• dt\n• dota\n• flag\n• \n• \n• \n• \n• - 𝒑𝒓𝒊𝒏𝒄𝒆-𝒘𝒂𝒍𝒆𝒙 𝒊𝒔 𝒔𝒕𝒊𝒍𝒍 𝒘𝒐𝒓𝒌𝒊𝒏𝒈 𝒐𝒏 𝒕𝒉𝒊𝒔 𝒑𝒂𝒈𝒆\n\n𝑷𝑨𝑮𝑬 4 - 5\n\n╚═•°•°••°•°۩۞۩°•°••°•°•═╝`,
           threadID,
           messageID
        );
         default:
          return api.sendMessage(
            `╔═•°•°••°•°۩۞۩°•°••°•°•═╗\n\n𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚙𝚊𝚐𝚎 𝚗𝚞𝚖𝚋𝚎𝚛! 𝙿𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎: ${global.GoatBot.config.prefix}𝚕𝚘𝚐𝚘 𝚕𝚒𝚜𝚝 1", 1-5 𝚕𝚒𝚜𝚝𝚜 𝚒𝚜𝚝𝚜.\n\n╚═•°•°••°•°۩۞۩°•°••°•°•═╝`,
            threadID,
            messageID
          );
      }
    }

    if (args.length < 2) {
      return api.sendMessage(
        `╔═•°•°••°•°۩۞۩°•°••°•°•═╗\n\n𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚏𝚘𝚛𝚖𝚊𝚝! Use: ${global.GoatBot.config.prefix}𝚕𝚘𝚐𝚘 𝚕𝚒𝚜𝚝 1 𝚘𝚛 𝚝𝚎𝚡𝚝𝚙𝚛𝚘 𝚕𝚒𝚜𝚝 (𝚙𝚊𝚐𝚎 𝚗𝚞𝚖𝚋𝚎𝚛) 1-4 𝚙𝚊𝚐𝚎𝚜 𝚊𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 (𝚝𝚎𝚡𝚝)\n\n╚═•°•°••°•°۩۞۩°•°••°•°•═╝`,
        threadID,
        messageID
      );
    }

    let type = args[0].toLowerCase();
    let text = args.slice(1).join(" ");
    let pathImg = __dirname + `/cache/${type}_${text}.png`;
    let apiUrl, message;

    switch (type) {
      case "glass":
        apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=4&text=${text}`;
        message = "Here's the [𝑮𝑳𝑨𝑺𝑺] Logo created:";
        break;
    case "dota":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/dota?text=${text}`;
      message = "here's the [𝑫𝑶𝑻𝑨] Logo created:";
        break;
    case "flag":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/flag?text=FAHEEM`;
      message = "here's the [𝑭𝑳𝑨𝑮] Logo created:";
        break;
    case "dt":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/dancetext?text=${text}`;
      message = "here's the [𝑫𝑨𝑵𝑪𝑰𝑵𝑮𝑻𝑬𝑿𝑻] Logo created:";
        break;
    case "floral":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/floral?text2=walex&text=${text}`;
      message = "here's the [𝑭𝑳𝑶𝑹𝑨𝑳] Logo created:";
             break;
    case "blackpubg":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/blackpubg?text2=qhing&text=${text}`;
      message = "here's the [𝑩𝑳𝑨𝑪𝑲𝑷𝑼𝑩𝑮] Logo created:";
        break;
    case "pubg":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/pubg?text=${text}&text2=walex`;
      message = "here's the [𝑷𝑼𝑩𝑮] Logo created:";
         break;
    case "lnew":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/lolnew?text=${text}`;
      message = "here's the [𝑳𝑶𝑳𝑵𝑬𝑾] Logo created:";
        break;
        case "king2":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/king2?text=${text}`;
          message = "here's the [𝑲𝑰𝑵𝑮2] Logo created:";
        break;
        case "newrov2":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/newrov2?text=${text}`;
          message = "here's the [𝑵𝑬𝑾𝑹𝑶𝑽2] Logo created:";
        break;
        case "newrov":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/newrov?text=${text}`;
          message = "here's the [𝑵𝑬𝑾𝑹𝑶𝑽] Logo created:";
        break;
        case "ovw2":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/overwatch2?text=${text}`;
          message = "here's the [𝑶𝑽𝑬𝑹𝑾𝑨𝑻𝑪𝑯2] Logo created:";
        break;
        case "newaov":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/newaov?text=${text}`;
          message = "here's the [𝑵𝑬𝑾𝑨𝑶𝑽] Logo created:";
        break;
        case "ovw":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/overwatch?text=${text}&text2=Walex`;
          message = "here's the [𝑶𝑽𝑬𝑹𝑾𝑨𝑻𝑪𝑯] Logo created:";
        break;
        case "pubgcl":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/pubgcolorful?text=${text}`;
          message = "here's the [𝑷𝑼𝑩𝑮𝑪𝑶𝑳𝑶𝑹] Logo created:";
        break;
        case "pubgc2":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/pubgcover2?text=${text}`;
          message = "here's the [𝑷𝑼𝑩𝑮𝑪𝑶𝑽𝑬𝑹2] Logo created:";
        break;
        case "legend2":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/legend2?text=${text}%20qhing`;
          message = "here's the [𝑳𝑬𝑮𝑬𝑵𝑫2] Logo created:";
        break;
        case "fbc":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover?text=${text}`;
          message = "here's the [𝑭𝑩𝑪𝑶𝑽𝑬𝑹] Logo created:";
        break;
        case "fbc2":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover2?text=${text}`;
          message = "here's the [𝑭𝑩𝑪𝑶𝑽𝑬𝑹2] Logo created:";
        break;
        case "fbc13":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover13?text=${text}&text2=walex`;
          message = "here's the [𝑭𝑩𝑪𝑶𝑽𝑬𝑹13] Logo created:";
        break;
        case "pubg2":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/pubg2?text=${text}`;
          message = "here's the [𝑷𝑼𝑩𝑮2] Logo created:";
        break;
        case "galaxy6":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/galaxy6?text=${text}&text2=Your%20Quotes%20In%20HerM`;
          message = "here's the [𝑮𝑨𝑳𝑨𝑿𝒀6] Logo created:";
        break;
        case "gavt":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/goldavatar?text=${text}&number=M`;
          message = "here's the [𝑮𝑶𝑳𝑫𝑬𝑵𝑨𝑽𝑨𝑻𝑨𝑹] Logo created:";
        break;
        case "metavt":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/metalavatar2?text=${text}&text2=rest%20wale`;
          message = "here's the [𝑴𝑬𝑻𝑨𝑳𝑨𝑽𝑨𝑻𝑨𝑹] Logo created:";
        break;
        case "angel3":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/angel3?text=${text}`;
          message = "here's the [𝑨𝑵𝑮𝑬𝑳3] Logo created:";
        break;
        case "masavt2":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/mascotavatar2?text=${text}&text2=thuth`;
          message = "here's the [𝑴𝑨𝑺𝑪𝑶𝑻𝑨𝑽𝑨𝑻𝑨𝑹2] Logo created:";
         break;
    case "arrow2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/arrow2?text=${text}`;
      message = "here's the [𝑨𝑹𝑹𝑶𝑾2] Logo created:";
        break;
        case "masavt":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/mascotavatar?text=${text}&text2=qhing`;
          message = "here's the [𝑴𝑨𝑺𝑪𝑶𝑻𝑨𝑽𝑨𝑻𝑨𝑹] Logo created:";
         break;
    case "angel2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/angel2?text=${text}`;
      message = "here's the [𝑨𝑵𝑮𝑬𝑳2] Logo created:";
        break;
        case "metal5":
          apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/metal5?text=${text}&text2=Walex`;
          message = "here's the [𝑴𝑬𝑻𝑨𝑳5] Logo created:";

        break;
    case "cpubg":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/coverpubg?text=${text}%20walex
`;
      message = "here's the [𝑪𝑶𝑽𝑬𝑹𝑷𝑼𝑩𝑮] Logo created:";
        break;
    case "love":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/lovetext?text=${text}`;
      message = "here's the [𝑳𝑶𝑽𝑬𝑻𝑬𝑿𝑻] Logo created:";
         break;
    case "fw":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/firework?text=${text}`;
      message = "here's the [𝑭𝒊𝒓𝑒𝒘𝒐𝒓𝒌] Logo created:";
        break;
    case "foggy":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/foggy?text=${text}`;
      message = "here's the [𝑭𝑶𝑮𝑮𝒀] Logo created:";
        break;
    case "newyrvid":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/newyearvideo?text=${text}`;
      message = "here's the [𝑵𝑬𝑾𝒀𝑬𝑨𝑹𝑽𝑰𝑫] Logo created:";
       break;
    case "newyrvid3":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/newyearvideo3?text=${text}`;
      message = "here's the [𝑵𝑬𝑾𝒀𝑬𝑨𝑹𝑽𝑰𝑫3] Logo created:";
       break;
    case "cake9":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cake9?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑪𝑨𝑲𝑬9] Logo created:";
       break;
      case "ff2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/freefire2?text=${text}`;
       message = "here's the [𝑭𝑹𝑬𝑬𝑭𝑰𝑹𝑬2] Logo created:";
        break;
    case "mg":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/mobilegame?text=FAHEEM`;
      message = "here's the [𝑴𝑶𝑩𝑰𝑳𝑬𝑮𝑨𝑴𝑬] Logo created:";
        break;
    case "pubgc":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/pubgcolorful?text=${text}`;
      message = "here's the [𝑷𝑼𝑩𝑮𝑪𝑶𝑳𝑶𝑹] Logo created:";
        break;
    case "crossfire":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/crossfire?text=${text}`;
      message = "here's the [𝑪𝑹𝑶𝑺𝑺𝑭𝑰𝑹𝑬] Logo created:";
        break;
    case "ff3":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/freefire3?text=${text}`;
      message = "here's the [𝑭𝑹𝑬𝑬𝑭𝑰𝑹𝑬3] Logo created:";
        break;
    case "ovw2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/overwatch2?text=${text}`;
      message = "here's the [𝑶𝑽𝑬𝑹𝑾𝑨𝑻𝑪𝑯2] Logo created:";
        break;
    case "newrov2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/newrov2?text=FAHEEM`;
      message = "here's the [𝑵𝑬𝑾𝑹𝑶𝑽2] Logo created:";
        break;
    case "fbc9":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover9?text=${text}`;
      message = "here's the [𝑭𝑩𝑪9] Logo created:";
        break;
    case "space":
      apiUrl = `https://api.zahwazein.xyz/textpro/space?text=${text}&apikey=zenzkey_92d341a7630e`;
      message = "here's the [𝑺𝑷𝑨𝑪𝑬] Logo created:";
           break;
    case "lvd":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/elegantlogovideo?text=${text}`;
      message = "here's the [𝑳𝑶𝑮𝑶𝑽𝑰𝑫𝑬𝑶] Logo created:";
              break;
    case "cfb":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/circlefootball?text=${text}&text2=walex-team`;
      message = "here's the [𝑪𝑰𝑹𝑪𝑳𝑬𝑭𝑶𝑶𝑻𝑩𝑨𝑳𝑳] Logo created:";
            break;
      case "king":
        apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/king2?text=${text}`;
        message = "here's the [𝑲𝑰𝑵𝑮] Logo created";
             break;
    case "angel":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/angel2?text=${text}`;
      message = "here's the [𝑨𝑵𝑮𝑬𝑳] Logo created:";
              break;
    case "printn":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/printname?text=${text}`;
      message = "here's the [𝑷𝑹𝑰𝑵𝑻𝑵𝑨𝑴𝑬] Logo created:";
              break;
    case "cm":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/circlemascot?text=${text}`;
      message = "here's the [𝑪𝑰𝑹𝑪𝑳𝑬𝑴𝑨𝑺𝑪𝑶𝑻] Logo created:";
             break;
    case "glit":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/glitter?text=${text}&text2=Made_By_Walex`;
      message = "here's the [𝑮𝑳𝑰𝑻𝑻𝑬𝑹] Logo created:";
             break;
    case "llogo":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/luxuarylogo?text=${text}`;
      message = "here's the [𝑳𝑼𝑿𝑼𝑨𝑹𝒀𝑳𝑶𝑮𝑶] Logo created:";
           break;
    case "blueneon":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/blueneon2?text=${text}&text2=Your%20QuoteM`;
      message = "here's the [𝑩𝑳𝑼𝑬𝑵𝑬𝑶𝑵] Logo created:";
         break;
    case "newyear3":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=103&text=${text}`;
      message = "here's the [𝑵𝑬𝑾𝒀𝑬𝑨𝑹3] Logo created:";
        break;
    case "annony":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/anonymous?text=${text}`;
      message = "here's the [𝑨𝑵𝑴𝑶𝑼𝑺𝑯𝑨𝑪𝑲𝑬𝑹] Logo created:";
         break;
    case "newyear2":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=104&text=${text}`;
      message = "here's the [𝑵𝑬𝑾𝒀𝑬𝑨𝑹2] Logo created:";
             break;
    case "newyear":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=105&text=${text}`;
      message = "here's the [𝑵𝑬𝑾𝒀𝑬𝑨𝑹] Logo created:";
            break;
    case "captainamerica":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=58&amp;text=${text}`;
      message = "here's the [𝑪𝑨𝑷𝑻𝑨𝑰𝑵𝑨𝑴𝑬𝑹𝑰𝑪𝑨] Logo created:";
         break;
    case "beach2":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=55&amp;text=${text}`;
      message = "here's the [𝑩𝑬𝑨𝑪𝑯2] Logo created:";
            break;
    case "mtp":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=75&amp;text=${text}`;
      message = "here's the [𝑴𝑼𝑳𝑻𝑰𝑷𝑨𝑰𝑵𝑻] Logo created:";
          break;
    case "rainbm":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=179&amp;text=${text}`;
      message = "here's the [𝑹𝑨𝑰𝑵𝑩𝑶𝑾𝑴𝑬𝑻𝑨𝑳] Logo created:";
         break;
    case "Tig":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=132&amp;text=${text}`;
      message = "here's the [𝑻𝑰𝑮] Logo created:";
        break;
    case "rosegold":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=180&amp;text=${text}`;
      message = "here's the [𝑹𝑶𝑺𝑬𝑮𝑶𝑳𝑫] Logo created:";
             break;
    case "rosesilver":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=178&amp;text=${text}`;
      message = "here's the [𝑹𝑶𝑺𝑬𝑺𝑰𝑳𝑽𝑬𝑹] Logo created:";
             break;
    case "business":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=5&text=${text}`;
      message = "here's the [𝑩𝑼𝑺𝑰𝑵𝑬𝑺𝑺] Logo created:";
      break;
    case "wall":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/embossed?text=${text}`;
      message = "here's the [𝑾𝑨𝑳𝑳] Logo created:";
     break;
    case "aglitch":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/aglitch?text=${text}&text2=${text}`;
      message = "here's the [𝑨𝑮𝑳𝑰𝑻𝑪𝑯 ] Logo created:"; 
        break;
    case "berry":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/berry?text=${text}`;
      message = "here's the [𝑩𝑬𝑹𝑹𝒀] Logo created:";
        break;
    case "blackpink":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/blackpink?text=${text}`;
      message = "here's the [𝑩𝑳𝑨𝑪𝑲𝑷𝑰𝑵𝑲] Logo created:";
        break;
    case "blood":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/blood?text=${text}`;
      message = "here's the [𝑩𝑳𝑶𝑶𝑫] Logo created:";
        break;
    case "broken":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/broken?text=${text}`;
      message = "here's the [𝑩𝑹𝑶𝑲𝑬𝑵] Logo created:";
      break;
    case "captainamerica":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/captainamerica?text=${test}&text2=${text}`;
      message = "here's the [𝑪𝑨𝑷𝑻𝑨𝑰𝑵𝑨𝑴𝑬𝑹𝑰𝑪𝑨] logo created:";
        break;
    case "carbon":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/carbon?text=${text}`;
      message = "here's the [𝑪𝑨𝑹𝑩𝑶𝑵] created:";
        break;
    case "choror":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/choror?text=${text}&text2=${text}`;
      message = "here's the [𝑪𝑯𝑶𝑹𝑶𝑹] Logo created:";
        break;
    case "christmas":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/christmas?text=${text}`;
      message = "here's the [𝑪𝑯𝑹𝑰𝑺𝑻𝑴𝑨𝑺] Logo created:";
        break;
    case "circuit":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/circuit?text=${text}`;
      message = "here's the [𝑪𝑰𝑹𝑪𝑼𝑰𝑻] Logo created:";
        break;
    case "devil":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/devil?text=${text}`;
      message = "here's the [𝑫𝑬𝑽𝑰𝑳] Logo created:";
        break;
    case "discovery":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/discovery?text=${text}`;
      message = "here's the [𝑫𝑰𝑺𝑪𝑶𝑽𝑬𝑹𝒀] Logo created:";
        break;
    case "dropwater":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/dropwater?text=${text}`;
      message = "here's the [𝑫𝑹𝑶𝑷𝑾𝑨𝑻𝑬𝑹] Logo created:";
        break;
    case "fiction":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/fiction?text=${text}`;
      message = "here's the [𝑭𝑰𝑪𝑻𝑰𝑶𝑵] Logo created:";
        break;
    case "firework":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/firework?text=${text}`;
      message = "here's the [𝑭𝑰𝑹𝑬𝑾𝑶𝑹𝑲] Logo created:";
        break;
    case "galaxy":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=173&text=${text}`;
      message = "here's the [𝑮𝑨𝑳𝑨𝑿𝒀] Logo created:";
        break;
    case "glossy":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/glossy?text=${text}`;
      message = "here's the [𝑮𝑳𝑶𝑺𝑺𝒀] Logo created:";
        break;
    case "glue":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/glue?text=${text}`;
      message = "here's the [𝑮𝑳𝑼𝑬] Logo created:";
        break;
    case "gradient":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/gradient?text=${text}`;
      message = "here's the [𝑮𝑹𝑨𝑫𝑰𝑬𝑵𝑻] Logo created:";
        break;
    case "greenhorror":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/greenhorror?text=${text}`;
      message = "here's the [𝑮𝑹𝑬𝑬𝑵𝑯𝑶𝑹𝑹𝑶𝑹] Logo created:";
        break;
    case "spooky":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/spooky?text=${text}&text2=${text}`;
      message = "here's the [𝑺𝑷𝑶𝑶𝑲𝒀] Logo created:";
        break;
    case "imglitch":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/imglitch?text=${text}`;
      message = "here's the [𝑰𝑴𝑮𝑳𝑰𝑻𝑪𝑯] Logo created:";
        break;
    case "layered":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/layered?text=${text}&text2=${text}`;
      message = "here's the [𝑳𝑨𝒀𝑬𝑹𝑬𝑫] Logo created:";
        break;
    case "light":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/light?text=${text}`;
      message = "here's the [𝑳𝑰𝑮𝑯𝑻] Logo created:";
        break;
    case "magma":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/magma?text=${text}`;
      message = "here's the [𝑴𝑨𝑮𝑴𝑨] Logo created:";
break;
    case "metallic":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/metallic?text=${text}`;
      message = "here's the [𝑴𝑬𝑻𝑨𝑳𝑳𝑰𝑪] Logo created:";
        break;
    case "neon":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/neon?text=${text}`;
      message = "here's the [𝑵𝑬𝑶𝑵] Logo created:";
        break;
    case "skeleton":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/skeleton?text=${text}`;
      message = "here's the [𝑺𝑲𝑬𝑳𝑬𝑻𝑶𝑵] Logo created:";
        break;
    case "sketch":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/sketch?text=${text}`;
      message = "here's the [𝑺𝑲𝑬𝑻𝑪𝑯] Logo created:"; 
        break;
    case "stone":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/stone?text=${text}`;
      message = "here's the [𝑺𝑻𝑶𝑵𝑬] Logo created:";break;
    case "transformer":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/transformer?text=${text}`;
      message = "here's the [𝑻𝑹𝑨𝑵𝑺𝑭𝑶𝑹𝑴𝑬𝑹] Logo created:";
        break;
    case "fire":
      apiUrl = `https://chards-bot-api.richardretadao1.repl.co/api/photooxy/flaming?text=${text}`;
      message = "here's the [𝑭𝑰𝑹𝑬] Logo created:";
        break;
    case "naruto":
      apiUrl = `https://rest-api-2.faheem007.repl.co/api/photooxy/naruto?text=${text}`;
      message = "here's the [𝑵𝑨𝑹𝑼𝑻𝑶] Logo created:";
        break;
    case "dragonfire":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/dragonfire?text=${text}`;
      message = "here's the [𝑫𝑹𝑨𝑮𝑶𝑵𝑭𝑰𝑹𝑬] Logo created:";
        break;
    case "avater":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/lolnew?text=${text}`;
      message = "here's the [𝑨𝑽𝑨𝑻𝑨𝑹] Logo created:";
        break;
    case "pubgavatar":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/pubgavatar?text=${text}`;
      message = "here's the [𝑷𝑼𝑩𝑮𝑨𝑽𝑨𝑻𝑨𝑹] Logo created:";
        break;
    case "nightstars":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/nightstars?text=${text}`;
      message = "here's the [𝑵𝑰𝑮𝑯𝑻𝑺𝑻𝑨𝑹𝑺] Logo created:";
        break;
    case "sunlight":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/sunlight?text=${text}`;
      message = "here's the [𝑺𝑼𝑵𝑳𝑰𝑮𝑯𝑻] Logo created:";
        break;
    case "cloud":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cloud?text=${text}`;
      message = "here's the [𝑪𝑳𝑶𝑼𝑫] Logo created:";
        break;
    case "pig":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/pig?text=${text}`;
      message = "here's the [𝑷𝑰𝑮] Logo created:";
        break;
    case "caper":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/caper?text=${text}`;
      message = "here's the [𝑪𝑨𝑷𝑬𝑹] Logo created:";
         break;
    case "horror":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/horror?text=${text}`;
      message = "here's the [𝑯𝑶𝑹𝑹𝑶𝑹] Logo created:";
         break;
    case "writestatus":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/writestatus?text=${text}&text2=Your%20Quotes%20In%20Herm`;
      message = "here's the [𝑾𝑹𝑰𝑻𝑬𝑺𝑻𝑨𝑻𝑼𝑺] Logo created:";
         break;
    case "teamlogo":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/teamlogo?text=${text}`;
      message = "here's the [𝑻𝑬𝑨𝑴𝑳𝑶𝑮𝑶] Logo created:";
         break;
    case "beach":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/beach?text=${text}`;
      message = "here's the [𝑩𝑬𝑨𝑪𝑯] Logo created:";
         break;
    case "queen":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/queen?text=${text}`;
      message = "here's the [𝑸𝑼𝑬𝑬𝑵] Logo created:";
         break;
    case "fbc3":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover3?text=${text}`;
      message = "here's the [𝑭𝑩𝑪3] Logo created:";
         break;
    case "tatto":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/tatto?text=${text}`;
      message = "here's the [𝑻𝑨𝑻𝑻𝑶] Logo created:";
         break;
    case "shirt3":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/shirt3?text=${text}&text2=20`;
      message = "here's the [𝑺𝑯𝑰𝑹𝑻3] Logo created:";
         break;
    case "oceansea":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/oceansea?text=${text}`;
      message = "here's the [𝑺𝑬𝑨] Logo created:";
         break;
    case "shirt4":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/shirt4?text=${text}&text2=20`;
      message = "here's the [𝑺𝑯𝑰𝑹𝑻4] Logo created:";
         break;
    case "shirt5":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/shirt5?text=${text}&text2=20`;
      message = "here's the [𝑺𝑯𝑰𝑹𝑻5] Logo created:";
         break;
    case "shirt6":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/shirt6?text=${text}&text2=20`;
      message = "here's the [𝑺𝑯𝑰𝑹𝑻6] Logo created:";
         break;
    case "lovemsg":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/lovemessage?text=${text}`;
      message = "here's the [𝑳𝑶𝑽𝑬𝑴𝑺𝑮] Logo created:";
         break;
    case "christvid":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/chirstmasvideo?text=${text}`;
      message = "here's the [𝑪𝑯𝑰𝑹𝑻𝑴𝑨𝑺] Logo created:";
         break;
    case "christmas2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/chirstmas2?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑪𝑯𝑹𝑰𝑺𝑻𝑴𝑨𝑺] Logo created:";
         break;
    case "icetext":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/icetext?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑰𝑪𝑬𝑻𝑬𝑿𝑻] Logo created:";
        break;
    case "butterfly":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/butterfly?text=${text}`;
      message = "here's the [𝑩𝑼𝑻𝑻𝑬𝑹𝑭𝑳𝒀 🦋] Logo created:";
        break;
    case "coffe":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/coffecup?text=${text}`;
      message = "here's the [𝑪𝑶𝑭𝑭𝑬𝑬] Logo created:";
         break;
    case "love":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/lovetext?text=${text}`;
      message = "here's the [𝑳𝑶𝑽𝑬𝑻𝑬𝑿𝑻] Logo created:";
         break;
    case "neonexpensive":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/neonexpensive?text=${text}&text2=Akhtar&text3=Ali`;
      message = "here's the [𝑵𝑬𝑶𝑵𝑬𝑿𝑷𝑬𝑵𝑺𝑰𝑽𝑬] Logo created:";
         break;
    case "juventus":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/juventus?text=${text}&number=18`;
      message = "here's the [𝑱𝑼𝑽𝑬𝑵𝑻𝑼𝑺] Logo created:";
         break;
    case "neon2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/neonbp?text=${text}`;
      message = "here's the [𝑵𝑶𝑬𝑵𝑩𝑷] Logo created:";
        break;
    case "wood":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/wood?text=${text}&text2=prince`;
      message = "here's the [𝑾𝑶𝑶𝑫] Logo created:";
         break;
    case "glasses":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/glasses?text=${text}`;
      message = "here's the [𝑮𝑳𝑨𝑺𝑺𝑬𝑺] Logo created:";
         break;
    case "greenbush":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/greenbush?text=${text}`;
      message = "here's the [𝑮𝑹𝑬𝑬𝑵𝑩𝑼𝑺𝑯] Logo created:";
        break;
    case "quotestatus":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/quotestatus?text=${text}&text2=Your%20QuoteM`;
      message = "here's the [𝑸𝑼𝑶𝑻𝑬𝑺𝑻𝑨𝑻𝑼𝑺] Logo created:";
         break;
    case "neonblue":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephot/neonblue?text=${text}`;
      message = "here's the [𝑵𝑬𝑶𝑵𝑩𝑳𝑼𝑬] Logo created:";
        break;
    case "eraser":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/eraser?text=${text}`;
      message = "here's the [𝑬𝑹𝑨𝑺𝑬𝑹] Logo created:";
       break;
    case "inscent":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/incandescent?text=${text}`;
      message = "here's the [𝑰𝑵𝑪𝑨𝑵𝑫𝑬𝑺𝑪𝑬𝑵𝑻] Logo created:";
         break;
    case "typo":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/typography?text=${text}`;
      message = "here's the [𝑻𝒀𝑷𝑶𝑮𝑹𝑨𝑷𝑯𝒀] Logo created:";
         break;
    case "letter":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/letters?text=${text}`;
      message = "here's the [𝑳𝑬𝑻𝑻𝑬𝑹𝑺] Logo created:";
         break;
    case "oncloth":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cloth?text=${text}`;
      message = "here's the [𝑪𝑳𝑶𝑻𝑯] Logo created:";
         break;
    case "graffiti":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/graffiti?text=${text}`;
      message = "here's the [𝑮𝑹𝑨𝑭𝑭𝑰𝑻𝑰] Logo created:";
         break;
    case "metal":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/metals?text=${text}`;
      message = "here's the [𝑴𝑬𝑻𝑨𝑳𝑺] Logo created:";
         break;
    case "hallowen":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephot/hallowen?text=${text}`;
      message = "here's the [𝑯𝑨𝑳𝑳𝑶𝑾𝑬𝑵] Logo created:";
         break;
    case "puppy":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/puppy?text=${text}`;
      message = "here's the [𝑷𝑼𝑷𝑷𝒀] Logo created:";
         break;
    case "diary":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/diary?url=https://telegra.ph/file/dec30559fdc855288237d.jpg&text=${text}`;
      message = "here's the [𝑫𝑰𝑨𝑹𝒀] Logo created:";
         break;
    case "noteb":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/notebook?url=https://telegra.ph/file/dec30559fdc855288237d.jpg&text=${text}&text2=Yout%20in%20the%20worM`;
      message = "here's the [𝑵𝑶𝑻𝑬𝑩𝑶𝑶𝑲] Logo created:";
        break;
    case "diaryframe":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/diaryframe?url=https://telegra.ph/file/dec30559fdc855288237d.jpg&text=${text}`;
      message = "here's the [𝑫𝑰𝑨𝑹𝒀𝑭𝑹𝑨𝑴𝑬] Logo created:";
       break;
    case "tlogo":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/tiger?text=${text}`;
      message = "here's the [𝑻𝑰𝑮𝑬𝑹] Logo created:";
        break;
    case "fbc4":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover4?text=${text}`;
      message = "here's the [𝑭𝑩𝑪4] Logo created:";
         break;
    case "fbc6":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover6?text=${text}`;
      message = "here's the [𝑭𝑩𝑪6] Logo created:";
         break;
    case "fbc7":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover7?text=${text}`;
      message = "here's the [𝑭𝑩𝑪7] Logo created:";
         break;
    case "fbc9":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover9?text=${text}`;
      message = "here's the [𝑭𝑩𝑪9] Logo created:";
         break;
    case "fbc10":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover10?text=${text}`;
      message = "here's the [𝑭𝑩𝑪10] Logo created:";
         break;
    case "fbc11":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover11?text=${text}`;
      message = "here's the [𝑭𝑩𝑪11] Logo created:";
        break;
    case "fbc12":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover12?text=${text}`;
      message = "here's the [𝑭𝑩𝑪12] Logo created:";
        break;
    case "neonstyle":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/neonstyle?text=${text}`;
      message = "here's the [𝑵𝑬𝑶𝑵𝑺𝑻𝒀𝑳𝑬] Logo created:";
         break;
    case "ml4":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/ml4?text=${text}`;
      message = "here's the [𝑴𝑳4] Logo created:";
         break;
    case "arena":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/arena?text=${text}`;
      message = "here's the [𝑨𝑹𝑬𝑵𝑨] Logo created:";
         break;
    case "rank":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/rank?text=${text}`;
      message = "here's the [𝑹𝑨𝑵𝑲] Logo created:";
         break;
    case "lovecard":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/lovecard?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑳𝑶𝑽𝑬𝑪𝑨𝑹𝑫] Logo created:";
             break;
    case "lovecard3":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/lovecard3?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑳𝑶𝑽𝑬𝑪𝑨𝑹𝑫3] Logo created:";
              break;
    case "lovecard4":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/lovecard4?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑳𝑶𝑽𝑬𝑪𝑨𝑹𝑫4] Logo created:";
           break;
    case "loveballon":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/loveballon?text=${text}&text2=${text}`;
      message = "here's the [𝑳𝑶𝑽𝑬𝑩𝑨𝑳𝑳𝑶𝑵] Logo created:";
         break;
    case "loveballon2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/loveballon2?text=${text}&text2=${text}`;
      message = "here's the [𝑳𝑶𝑽𝑬𝑩𝑨𝑳𝑳𝑶𝑵2] Logo created:";
         break;
    case "cake2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cake2?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑪𝑨𝑲𝑬2] Logo created:";
         break;
    case "cake3":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cake3?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑪𝑨𝑲𝑬3] Logo created:";
         break;
    case "cake4":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cake4?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑪𝑨𝑲𝑬4] Logo created:";
         break;
    case "cake5":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cake5?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑪𝑨𝑲𝑬5] Logo created:";
        break;
    case "cake6":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cake6?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑪𝑨𝑲𝑬6] Logo created:";
        break;
    case "cake7":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cake7?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑪𝑨𝑲𝑬7] Logo created:";
         break;
    case "bear":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/bear?text=${text}`;
      message = "here's the [𝑩𝑬𝑨𝑹] Logo created:";
        break;
    case "bdaycard":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/birthdaycard?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑩𝑰𝑹𝑻𝑯𝑫𝑨𝒀𝑪𝑨𝑹𝑫] Logo created:";
       break;
    case "cup":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/cup?text=${text}&url=https://i.imgur.com/BTPUTRQ.jpg`;
      message = "here's the [𝑪𝑼𝑷] Logo created:";
         break;
    case "flaming":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/flaming?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑭𝑳𝑨𝑴𝑰𝑵𝑮] Logo created:";
        break;
    case "blood2":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/blood2?url=https://i.imgur.com/BTPUTRQ.jpg&text=${text}`;
      message = "here's the [𝑩𝑳𝑶𝑶𝑫2] Logo created:";
        break;
    case "dancetext":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/dancetext?text=${text}`;
      message = "here's the [𝑫𝑨𝑵𝑪𝑬𝑻𝑬𝑿𝑻] Logo created:";
         break;
    case "flag":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/flag?text=${text}`;
      message = "here's the [𝑭𝑳𝑨𝑮] Logo created:";
        break;
    case "burnpaper":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/photooxy/burnpaper?text=${text}`;
      message = "here's the [𝑩𝑼𝑹𝑵𝑷𝑨𝑷𝑬𝑹] Logo created:";
        break;
    case "drake":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/maker/drake?text=${text}&text2=${text}`;
      message = "here's the [𝑫𝑹𝑨𝑲𝑬] Logo created:";
         break;
    case "ttp3":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/maker/ttp3?text=${text}`;
      message = "here's the [𝑻𝑻𝑷3] Logo created:";
        break;
    case "loli":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/anime/loli?apikey=faheem&text=${text}`;
      message = "here's the [𝑳𝑶𝑳𝑰] Logo created:";
         break;
    case "waifu":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/anime/waifu?apikey=faheem&text=${text}`;
      message = "here's the [𝑾𝑨𝑰𝑭𝑼] Logo created:";
        break;
    case "maker":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/maker/ttp3?text=${text}`;
      message = "here's the [𝑴𝑨𝑲𝑬𝑹] Logo created:";
            break;
    case "ggirl":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/gamergirl?text=${text}&amp;text2=apM`;
      message = "here's the [𝑮𝑨𝑴𝑬𝑮𝑰𝑹𝑳] Logo created:";
            break;
    case "teamlogo":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/teamlogo?text=${text}`;
      message = "here's the [𝑻𝑬𝑨𝑴𝑳𝑶𝑮𝑶] Logo created:";
              break;
    case "arrow":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/arrow?text=${text}`;
      message = "here's the [𝑨𝑹𝑹𝑶𝑾] Logo created:";


        break;
      default:
        return api.sendMessage(
          `•°•°•°•°•°•°۩۞۩°•°•°•°•°•°•\n\nInvalid logo type! Use "list 1" to see the list of textpro logos.\n\n•°•°•°•°•°•°۩۞۩°•°•°•°•°•°•`,
          threadID,
          messageID
        );
    }

    try {
      let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
      fs.writeFileSync(pathImg, Buffer.from(response.data, "binary"));

      return api.sendMessage(
        {
          attachment: fs.createReadStream(pathImg),
          body: message
        },
        threadID,
        () => fs.unlinkSync(pathImg)
      );
    } catch (err) {
      console.error(err);
      return api.sendMessage(
        `•°•°•°•°•°•°۞°•°•°•°•°•°•\n\nAn error occurred while generating the logo. Please try again later.\n\n•°•°•°•°•°•°۩۞۩°•°•°•°•°•°•`,
        threadID,
        messageID
      );
    }
  },
};