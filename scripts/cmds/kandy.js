module.exports = {
 config: {
 name: "kandy",
 version: "1.0",
 author: "walex",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "kandy") {
 return message.reply({
 body: "Kandy presh boo 🔥",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/pWppmbd/image.jpg")
 });
 }
 }
}