module.exports = {
 config: {
 name: "bp",
 version: "1.0",
 author: "AceGun",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "bp") {
 return message.reply({
 body: "beautiful paradise 🕊️",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/6bH33MM/image.jpg")
 });
 }
 }
}