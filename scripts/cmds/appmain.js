const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "appmain",
    aliases: ["approvemain"],
    version: "1.0",
    author: "kylepogi",
    countDown: 5,
    category:"admin",
    role: 2,
		guide: { 
			en: "%1 <approve/decline>  <group/profileID>"
		}
},

  onStart: async function({ api, args, message, event }) {
    const threadID = event.threadID;
    const approvedIDsPath = path.join(__dirname, "assist_json", "approved_main.json");
    const pendingIDsPath = path.join(__dirname, "assist_json", "pending_main.json");

    if (args[0] === "approve" && args[1]) {
      const id = args[1];
      const messageFromAdmin = args.slice(2).join(" ");

      let approvedIDs = JSON.parse(fs.readFileSync(approvedIDsPath));
      if (approvedIDs.includes(id)) {
        message.reply("📬 𝗞𝗬𝗟𝗘 𝗡𝗢𝗧𝗜𝗙\nℹ️This thread ID is already approved to use now you can use appmain cmds from bot");
      } else {
        approvedIDs.push(id);
        fs.writeFileSync(approvedIDsPath, JSON.stringify(approvedIDs));
        api.sendMessage(`💁🏻‍♂️ 𝗭𝗘𝗣𝗛 𝗡𝗢𝗧𝗜𝗙\n▬▬▬▬▬▬▬▬▬▬▬▬\n📌 Request Accepted\nMain Cmds Unlocked\n\nℹ️ your request for use main cmds from bot has been approved by BotAdmin\nNow all locked commands will work for this thread.\n\n📨 Message from admin: ${messageFromAdmin} \n\n💁🏻‍♂️ If you don't know how to use this bot then join the 𝙕𝙀𝙋𝙃_𝘽𝙊𝙏𝙑2 support Box \n𝗧𝘆𝗽𝗲 : ${global.GoatBot.config.prefix}walegc\nto join.`, id);
        message.reply("📨 𝗭𝗘𝗣𝗛 𝗡𝗢𝗧𝗜𝗙\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️ This Thread has been approved now to use main command");

        // Remove from pending IDs list
        let pendingIDs = JSON.parse(fs.readFileSync(pendingIDsPath));
        if (pendingIDs.includes(id)) {
          pendingIDs.splice(pendingIDs.indexOf(id), 1);
          fs.writeFileSync(pendingIDsPath, JSON.stringify(pendingIDs));
        }
      }
    } else if (args[0] === "remove" && args[1]) {
      const id = args[1];
      const reason = args.slice(2).join(" ");

      let approvedIDs = JSON.parse(fs.readFileSync(approvedIDsPath));
      if (!approvedIDs.includes(id)) {
        message.reply("⛔ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️ this thread id is not approved, so no need to 𝗿𝗲𝗺𝗼𝘃𝗲.");
      } else {
        approvedIDs.splice(approvedIDs.indexOf(id), 1);
        fs.writeFileSync(approvedIDsPath, JSON.stringify(approvedIDs));
        api.sendMessage(`📬 𝗭𝗘𝗣𝗛 𝗡𝗢𝗧𝗜𝗙\n   ⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 𝗔𝗟𝗘𝗥𝗧 ⚠️\n▬▬▬▬▬▬▬▬▬▬▬▬\nNow this Thread ID's permission has been disapproved or removed to use main commands from bot by Admin.\n\nReason: ${reason}\n▬▬▬▬▬▬▬▬▬▬▬▬\n📞Contact Kylepogi for more information.\n🔗FB: https://www.facebook.com/kyledev03\n▬▬▬▬▬▬▬▬▬▬▬▬\n💁🏻‍♂️Also you can join support box for more info \nType: ×support\nto join(◍•ᴗ•◍)`, id);
        message.reply("💁🏻‍♂️ 𝗞𝗬𝗟𝗘 𝗡𝗢𝗧𝗜𝗙\n   ⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 𝗔𝗟𝗘𝗥𝗧 ⚠️\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️The thread ID has been removed from using appmain command");
      }



                      } else if (args[0] === "disapproved" && args[1] && args[2]) {
      const id = args[1];
      const reason = args.slice(2).join(" ");

      let pendingIDs = JSON.parse(fs.readFileSync(pendingIDsPath));
      if (!pendingIDs.includes(id)) {
        message.reply("📬 𝗭𝗘𝗣𝗛 𝗡𝗢𝗧𝗜𝗙\n   ⚠️ 𝗔𝗟𝗘𝗥𝗧 ⚠️\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️This thread ID is not pending approval.");
      } else {
        // Remove from pending IDs list
        pendingIDs.splice(pendingIDs.indexOf(id), 1);
        fs.writeFileSync(pendingIDsPath, JSON.stringify(pendingIDs));
        api.sendMessage(`📬 𝗭𝗘𝗣𝗛 𝗡𝗢𝗧𝗜𝗙\n   ⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 𝗔𝗟𝗘𝗥𝗧 ⚠️\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️Your thread ID's permission to use appmain commands from bot has been disapproved by Admin. all cmds will be locked\n\nReason: ${reason}\n▬▬▬▬▬▬▬▬▬▬▬▬\n📞Contact kylepogi for more information.\n🔗FB: https://www.facebook.com/kyledev03\n▬▬▬▬▬▬▬▬▬▬▬▬\n💁🏻‍♂️or join the support box for more info \n𝗧𝘆𝗽𝗲: ×support\nto join(◍•ᴗ•◍)`, id);
        message.reply("📬 𝗞𝗬𝗟𝗘 𝗡𝗢𝗧𝗜𝗙\n   ⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 𝗔𝗟𝗘𝗥𝗧 ⚠️\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️The thread ID has been disapproved for using appmain commands.");
          }
      




      
    } else if (args[0] === "check") {
      let approvedIDs = JSON.parse(fs.readFileSync(approvedIDsPath));
      if (approvedIDs.includes(threadID)) {
        message.reply("🟢 𝗔𝗣𝗣𝗠𝗔𝗜𝗡 𝗢𝗡\n▬▬▬▬▬▬▬▬▬▬▬▬\nappmain is currently on for this thread.");
      } else {
        message.reply("🔴 𝗔𝗣𝗣𝗠𝗔𝗜𝗡 𝗢𝗙𝗙\n▬▬▬▬▬▬▬▬▬▬▬▬\nappmain cmds is currently off for this thread.");
      }
    } else {
      message.reply(`⚠️ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗.\n▬▬▬▬▬▬▬▬▬▬▬▬\nInvalid command usage. use ${global.GoatBot.config.prefix}help appmain to see how to use this command.`);
    }
  },
};
