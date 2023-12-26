module.exports = {
  config: {
    name: "game",
    author: "",
    countDown: 5,
    category: "GAME",
    role: 0,
    shortDescription: {
      en: "linkword game",
    },
  },
  onLoad: async function () {
    if (typeof global.procodermew == "undefined") {
      global.procodermew = new Object();
    }
    if (typeof global.procodermew.linkword == "undefined") {
      global.procodermew.linkword = new Map();
    }
  },
  onReply: async function ({ api, event }) {
    const { APIKEY } = global.configModule.linkword;
    if (typeof global.procodermew.linkword == "undefined") return;
    const axios = require("axios");
    const { body: content, threadID, messageID, senderID } = event;
    if (
      global.procodermew.linkword.has(threadID) &&
      senderID != api.getCurrentUserID()
    ) {
      if (content && content.split(" ").length == 2) {
        var data = (
          await axios.get(
            "https://meewmeew.info/word/linkword?ask=" +
              encodeURIComponent(content) +
              "&apikey=" +
              APIKEY
          )
        ).data;
        if (data.success == true) {
          if (data.data == "You lose!") {
            global.procodermew.linkword.delete(threadID);
            return api.sendMessage(data.data, threadID, messageID);
          } else return api.sendMessage(data.data, threadID, messageID);
        } else return api.sendMessage(data.error, threadID, messageID);
      }
    }
  },
  onStart: async function ({ api, event }) {
    const { threadID, messageID } = event;
    if (!global.procodermew.linkword.has(threadID)) {
      global.procodermew.linkword.set(threadID, true);
      return api.sendMessage("Linkword enabled", threadID, messageID);
    } else {
      global.procodermew.linkword.delete(threadID);
      return api.sendMessage("Linkwords disabled", threadID, messageID);
    }
  },
}