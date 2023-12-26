module.exports = {
  config: {
    name: "Leave",
    aliases: ["out", "exit"],
    version: "1.0",
    author: "Samir Thakuri",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Left Out Bot From Current Group"
    },
    longDescription: {
      vi: "",
      en: " "
    },
    category: "Owner",
    guide: {
      vi: "",
      en: "{pn} or {pn} <reason>"
    }
  },
  onStart: async function ({ api, args, event }) {
    const permission = ["100008485152397"];
    if (!permission.includes(event.senderID)) {
      api.sendMessage("Your don't have enough permission to use this command. Only VipUsers can do it.", event.threadID, event.messageID);
      return;
    }
    const groupId = args[0];
    if (isNaN(groupId)) {
      api.removeUserFromGroup(api.getCurrentUserID(), event.threadID); I 
      return;
    }
    const messageToSend = args.slice(1).join(" ");
    api.sendMessage(messageToSend, groupId);
    api.removeUserFromGroup(api.getCurrentUserID(), groupId);
  }
};