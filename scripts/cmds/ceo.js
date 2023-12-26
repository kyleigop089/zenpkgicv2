module.exports = {
 config: {
 name: "ceo",
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
 if (event.body && event.body.toLowerCase() === "ceo") {
 return message.reply({
 body: "radarada ceo ceo ti o gbadun😂😅",
 attachment: await global.utils.getStreamFromURL("https://tinyurl.com/ym2dvur4")
 });
 }
 }
}