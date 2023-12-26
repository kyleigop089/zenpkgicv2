module.exports = {
 config: {
 name: "sasha",
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
 if (event.body && event.body.toLowerCase() === "sasha") {
 return message.reply({
 body: "𝗠𝗿𝘀 𝗯𝗮𝗿𝗯𝗶𝗲𝗾𝘂𝗲",
 attachment: await global.utils.getStreamFromURL("https://tinyurl.com/yvc45wuf")
 });
 }
 }
}