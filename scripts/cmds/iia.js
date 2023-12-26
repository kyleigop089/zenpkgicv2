const fs = require('fs');
module.exports = {
 config: {
 name: "i love ass",
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
 if (event.body && event.body.toLowerCase() === "i love ass") {
 return message.reply({
 body: "never I won't 😵 ",
 attachment: fs.createReadStream("iia.jpg"),
 });
 }
 }
}