const fs = require('fs');
module.exports = {
  config: {
    name: "fav1",
    version: "1.0",
    author: "wale",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "fav1") {
      return message.reply({
        body: "Enjoy the music 🎶",
        attachment: fs.createReadStream("fav1.mp3"),
      });
    }
  }
};