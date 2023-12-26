const axios = require('axios');

module.exports = {
 config: {
 name: "art2",
 version: "1.0",
 author: "Samir Œ",
 countDown: 5,
 role: 0,
 shortDescription: {
 en: "Generate art from an image URL with optional filter"
 },
 longDescription: {
 en: "Generate art from an image URL with an optional filter and send the result."
 },
 category: "AI-ART",
 guide: {
 en: ""
 }
 },

 onStart: async function ({ api, event, args }) {
 const imageLink = event.messageReply?.attachments[0]?.url;
 const filter = args[0]; // Extract the filter argument
 if (!imageLink) {
 return api.sendMessage('Please reply to an image.', event.threadID, event.messageID);
 }

 try {
 const apiUrl = `https://art.samirxrichioe.repl.co/art?url=${encodeURIComponent(imageLink)}&filter=${filter || 0}`;
 const imageStream = await global.utils.getStreamFromURL(apiUrl);
 if (!imageStream) {
 return api.sendMessage('•°•°•°•°•°•°۩۞۩°•°•°•°•°•°•\n\nFailed to generate art from the image.\n\n•°•°•°•°•°•°۩۞۩°•°•°•°•°•°•', event.threadID, event.messageID);
 }
 return api.sendMessage({ attachment: imageStream }, event.threadID, event.messageID);
 } catch (error) {
 console.log(error);
 return api.sendMessage('•°•°•°•°•°•°۩۞۩°•°•°•°•°•°•\n\nFailed to generate art from the image.\n\n•°•°•°•°•°•°۩۞۩°•°•°•°•°•°•', event.threadID, event.messageID);
 }
 }
};