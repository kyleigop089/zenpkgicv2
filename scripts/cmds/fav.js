const fs = require('fs');
module.exports = {
  config: {
    name: "fav",
    version: "1.0",
    author: "ojogbon wale",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "fav") {
      return message.reply({
        body: "Enjoy the flow 🎵",
        attachment: fs.createReadStream("fav.mp3"),
      });
    }
  }
};