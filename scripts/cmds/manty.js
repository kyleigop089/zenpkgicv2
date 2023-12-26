module.exports = {
 config: {
 name: "manty",
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
 if (event.body && event.body.toLowerCase() === "manty") {
 return message.reply({
 body: "Ghana boy that was born in NG 😅",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/yg5h47W/image.jpg")
 });
 }
 }
}