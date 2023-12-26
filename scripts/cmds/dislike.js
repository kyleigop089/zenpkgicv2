module.exports = {
  config: {
    name: "dislike",
    aliases: ["dlk"],
    version: "1.0",
    author: "farid",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: ""
    },
    category: "BOX CHAT",
    guide: {
      en: "{prefix}info to see admin info"
    }
  },

  langs: {
    en: {
      gg: ""
    }
  },

  onStart: async function ({ api, args, Users, event }) {
    var mention = Object.keys(event.mentions)[0];
    let name = event.mentions[mention];
    var arraytag = [];
    arraytag.push({ id: mention });
    var a = function (a) {
      api.sendMessage(a, event.threadID);
    };
    a(
    ` 
████▄▄████████▄
▓▓▓█░░░░░░░░░░█
▓▓▓█░░░░░░░░░░█
▓▓▓██░░░░░░░░░█
████▀░░░░░████▀
░░░░░█░░░█
░░░░░░█░░█
░░░░░░░▀▀  `
    );
 api.setMessageReaction("👎", event.messageID, (err) => {}, true); },
};