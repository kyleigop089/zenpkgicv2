module.exports = {
 config: {
 name: "wizzy",
 version: "1.0",
 author: "ojogbon walex",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "wizzy") {
 return message.reply({
 body: "Big wizzy 🦅",
 attachment: await global.utils.getStreamFromURL("https://tinyurl.com/yn82gdjg")
 });
 }
 }
}