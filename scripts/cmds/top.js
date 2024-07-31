module.exports = {
  config: {
    name: "top",
    aliases: ["topmoney"],
    version: "1.0",
    author: "Kylepogi",
    role: 0,
    shortDescription: {
      vi: "",
      en: "💰 topmoney user's 💰"
    },
    longDescription: {
      vi: "",
      en: " "
    },
    category: "💰 Richest user's 💵",
    guide: {
      vi: "",
      en: ""
    }
  },
  onStart: async function ({ api, args, message, event, usersData }) {
    const allUsers = await usersData.getAll();
 
    const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 50);
 
    const topUsersList = topUsers.map((user, index) => `😎${index + 1 }. 💳${user.name}:『₱${user.money}』`);
 
    const messageText = `╔࿇══━━━━✥◈✥━━━━══࿇╗\n  🏦𝗭𝗘𝗣𝗛_𝗧𝗢𝗣𝗠𝗢𝗡𝗘𝗬 𝗨𝗦𝗘𝗥'𝗦🏦\n💁🏻‍♂️ 𝚃𝚘𝚙 50 𝚛𝚒𝚌𝚑𝚎𝚜𝚝 𝚞𝚜𝚎𝚛'𝚜 💰:\n${topUsersList.join('\n')}\n\n╚࿇══━━━━✥◈✥━━━━══࿇╝`;
 
    message.reply(messageText);
  }
};
