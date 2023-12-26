module.exports = {
  config: {
    name: "balancetop",
    aliases: ["topmoney"],
    version: "1.0",
    author: "Samuel Kâñèñgeè",
    role: 0,
    shortDescription: {
      vi: "",
      en: "top 5 users 🥰"
    },
    longDescription: {
      vi: "",
      en: "😗"
    },
    category: "BANKING",
    guide: {
      vi: "",
      en: ""
    }
  },
  onStart: async function ({ api, args, message, event, usersData }) {
    const allUsers = await usersData.getAll();
 
    const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 50);
 
    const topUsersList = topUsers.map((user, index) => `${index + 1 }. ${user.name}: ${user.money}`);
 
    const messageText = `╔═•°•°••°•°۩۞۩°•°••°•°•═╗\n\nTop 50 richest members👑:\n${topUsersList.join('\n')}\n\n╚═•°•°••°•°۩۞۩°•°••°•°•═╝`;
 
    message.reply(messageText);
  }
};