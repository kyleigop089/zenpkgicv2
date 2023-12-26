const fs = require('fs');
module.exports = {
 config: {
 name: "comrade",
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
 if (event.body && event.body.toLowerCase() === "comrade") {
 return message.reply({
 body: "that's comrade 🥴",
 attachment: fs.createReadStream("comrade.jpg"),
 });
 }
 }
}