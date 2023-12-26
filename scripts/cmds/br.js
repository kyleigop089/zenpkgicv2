module.exports = {
 config: {
 name: "br",
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
 if (event.body && event.body.toLowerCase() === "br") {
 return message.reply({
 body: "heheh 😅",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/Nt1hNs4/image.jpg")
 });
 }
 }
}