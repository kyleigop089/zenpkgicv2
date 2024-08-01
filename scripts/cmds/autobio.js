const cron = require("node-cron");
const moment = require("moment");

const prefix = "[  ×  ]"; // Your bot's prefix
const botName = "𝗭𝗘𝗣𝗛_𝗕𝗢𝗧𝗩𝟮";
const ownerName = "https://www.facebook.com/kyledev03";

let startTime = new Date();

module.exports = {
  config: {
    name: "autobio",
    author: "Ron Zedric Laurente Modified by kylepogi and recoded", // Convert By Goatbot Zed
    role: 2,
    shortDescription: " ",
    longDescription: "Autobio",
    category: "owner",
    guide: {
      en: "{pn}autobio"
    }
  },

  onChat: async function ({ api, event, globalModel, globalData, userModel, args, threadsData, usersData }) {
    var { threadID, messageID } = event;

    cron.schedule('0 * * * *', async () => {
      const uptimeInSeconds = (new Date() - startTime) / 1000;
      const seconds = uptimeInSeconds;
      const days = Math.floor(seconds / (3600 * 24));
      const hours = Math.floor((seconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secondsLeft = Math.floor(seconds % 60);
      const uptimeFormatted = `${days}d ${hours}h ${minutes}m ${secondsLeft}s`;
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString("en-US", { year: "numeric", month: "numeric", day: "numeric" });
      const time = currentDate.toLocaleTimeString("en-US", { timeZone: "Asia/Manila", hour12: true });

      var currentHour = moment().format('HH');
      var bioMessage;
      var currentTime = moment().format('MMM Do, h:mm:ss a');

      if (currentHour >= 8 && currentHour <= 11) {
        bioMessage = `Good morning! I'm ${botName},\n\n currently active 🟢\n𝙤𝙬𝙣𝙚𝙧&𝙖𝙙𝙢𝙞𝙣 : ${ownerName}.\n⏰ 𝗨𝗣𝗧𝗜𝗠𝗘\n${uptimeFormatted}\n📆 𝗗𝗔𝗧𝗘: ${date}\n⏰ 𝗧𝗜𝗠𝗘: ${time}`;
      } else if (currentHour >= 12 && currentHour <= 18) {
        bioMessage = `Good afternoon/evening!! I'm ${botName}\n\n currently active 🟢\n𝙤𝙬𝙣𝙚𝙧&𝙖𝙙𝙢𝙞𝙣 : ${ownerName}.\n⏰ 𝗨𝗽𝗧𝗜𝗠𝗘\n${uptimeFormatted}\n📆 𝗗𝗔𝗧𝗘: ${date}\n⏰ 𝗧𝗜𝗠𝗘: ${time}`;
      } else {
        bioMessage = `Hello! I'm ${botName}, currently active. Owner: ${ownerName}.`;
      }

      api.changeBio(bioMessage, (err) => {
        if (err) return console.log("ERR: " + err);
      });
    }, {
      scheduled: true,
      timezone: "Asia/Manila"
    });
  },

  onStart: async function ({ api, event, globalData, args, globalModel, userModel, usersData, commandName, role }) {
    const uptimeInSeconds = (new Date() - startTime) / 1000;
    const seconds = uptimeInSeconds;
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = Math.floor(seconds % 60);
    const uptimeFormatted = `${days}d ${hours}h ${minutes}m ${secondsLeft}s`;
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-US", { year: "numeric", month: "numeric", day: "numeric" });
    const time = currentDate.toLocaleTimeString("en-US", { timeZone: "Asia/Manila", hour12: true });

    const zed = `Hey 𝙄'𝙢 ${botName}\nCurrently 𝘼𝙘𝙩𝙞𝙫𝙚 » 🟢\n𝙤𝙬𝙣𝙚𝙧&𝙖𝙙𝙢𝙞𝙣 » ${ownerName}.\n⏰ 𝗨𝗣𝗧𝗜𝗠𝗘\n${uptimeFormatted}\n📆 𝗗𝗔𝗧𝗘: ${date}\n⏰ 𝗧𝗜𝗠𝗘: ${time}`;

    api.changeBio(zed, (e) => {
      if (e) {
        api.sendMessage("An error occurred: " + e, event.threadID);
      } else {
        api.sendMessage(`✅ | 𝖠𝗎𝗍𝗈𝗠𝖺𝗍𝖨𝖼𝖺𝗟𝗅𝗒 𝖢𝗁𝖺𝗇𝗀𝖾𝖽 𝖳𝗁𝖾 𝖡𝗈𝗍 𝖲𝗍𝖺𝗍𝗎𝗌 𝖳𝗈 » \n${zed}`, event.threadID, event.messageID);
      }
    });
  },
};
