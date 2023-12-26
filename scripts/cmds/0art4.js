const axios = require('axios');
module.exports = {
 config: {
 name: "art4",
 version: "1.0",
 author: "Jariff x Jun",
 countDown: 5,
 role: 0,
 shortDescription: {
 en: ""
 },
 longDescription: {
 en: ""
 },
 category: "AI-ART",
 guide: {
 en: ""
 }
 },
 onStart: async function ({message, api, event, args}) {
 if (event.type === "message_reply" && event.messageReply.attachments[0]?.type === "photo") {
 const attachment = event.messageReply.attachments[0];
 const img = encodeURIComponent(attachment.url);
 const t = "transform";
 const prompt = args.join(" ");
 message.reply({
 attachment: await global.utils.getStreamFromURL(`https://jarif-art.blackxlegend1.repl.co/transform?imgurl=${imgbbImageUrl}&prompt=${prompt}&apikey=upol-credit-changer`)
 });
 }
 }
};