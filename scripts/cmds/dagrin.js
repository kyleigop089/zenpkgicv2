module.exports = {
 config: {
 name: "dagrin",
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
 if (event.body && event.body.toLowerCase() === "dagrin") {
 return message.reply({
 body: "we miss you bro 😔💕🕊️",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/d0sKWRQ/image.jpg")
 });
 }
 }
}