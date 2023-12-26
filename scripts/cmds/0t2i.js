const axios = require('axios');

module.exports = {
 config: {
 name: "t2i",
 aliases: ["text2img"],
 version: "1.1",
 author: " prince walex",
 countDown: 30,
 role: 0,
 shortDescription: {
 en: 'Text to Image'
 },
 longDescription: {
 en: "Text to image"
 },
 category: "ai image",
 guide: {
 en: ' {pn} Your Prompt | Model coming soon'

 
 }
 },

 onStart: async function({ message, args }) {
 const text = args.join(" ");
 if (!text) {
 return message.reply("❌ | Please Provide a Prompt");
 }

 let prompt, model;
 if (text.includes("|")) {
 const [promptText, modelText] = text.split("|").map((str) => str.trim());
 prompt = promptText;
 model = modelText;
 } else {
 prompt = text;
 model = 1; // Set the default model number to 1
 }

 message.reply("╔════ஜ۩۞۩ஜ═══╗\Generating poli image, please wait...⏳\╚════ஜ۩۞۩ஜ═══╝").then((info) => { id = info.messageID });
 try {
 const API = `https://image-generation-api.princethuth1.repl.co/generate-image?prompt=${text}`;
 const imageStream = await global.utils.getStreamFromURL(API);

 return message.reply({
 attachment: imageStream
 });
 } catch (error) {
 console.log(error);
 message.reply("Failed to generate your poligami!!").then(() => {
 message.delete(id);
 });
 }
 }
};