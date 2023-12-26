module.exports = {
 config: {
 name: "founder",
 version: "1.0",
 author: "ojogbon walex",
 countDown: 5,
 role: 0,
 shortDescription: "not prefix",
 longDescription: "no prefix",
 category: "no prefix",
 },
 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "founder") {
 return message.reply({
 body: "yeye founder 😅😂",
 attachment: await global.utils.getStreamFromURL("https://tinyurl.com/ysdl7lqd")
 });
 }
 }
}