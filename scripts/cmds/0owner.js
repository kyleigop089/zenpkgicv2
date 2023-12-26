const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
 config: {
 name: "owner",
 version: "1.3",
 author: "AceGun",
 countDown: 5,
 role: 0,
 shortDescription: {
 vi: "",
 en: "Sends information about the bot and admin along with an image."
 },
 longDescription: {
 vi: "",
 en: "Sends information about the bot and admin along with an image."
 },
 category: "utility",
 guide: {
 en: "{pn}"
 },
 envConfig: {}
 },

 onStart: async function ({ message }) {
 const botName = "𝒑𝒓𝒊𝒏𝒄𝒆.𝒘𝒂𝒍𝒆/󱢏";
 const botPrefix = "";
 const authorName = "𝙿𝚛𝚒𝚗𝚌𝚎.𝚆/󱢏";
 const authorFB = "https://www.facebook.com/thanks.for.copying";
 const authorInsta = "Qhingthuth󱢏";
 const authorTiktok = "tiktok.com/@qhingthuth";
 const status = "hi, chat with me I am single.";

 const urls = JSON.parse(fs.readFileSync('walex.json'));
 const link = urls[Math.floor(Math.random() * urls.length)];

 const now = moment().tz('Africa/Lagos');
 const date = now.format('MMMM Do YYYY');
 const time = now.format('h:mm:ss A');

 const uptime = process.uptime();
 const seconds = Math.floor(uptime % 60);
 const minutes = Math.floor((uptime / 60) % 60);
 const hours = Math.floor((uptime / (60 * 60)) % 24);
 const days = Math.floor(uptime / (60 * 60 * 24));
 const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

 message.reply({
 body: `===•「 Bot & Owner Info 」•===\n❏Bot Name: ${global.GoatBot.config.prefix}\n❏Bot Prefix: ${botPrefix}\n❏Name: ${authorName}\n❏Facebook: ${authorFB}\n❏Instagram: ${authorInsta}\n❏tiktok: ${authorTiktok}\n❏Status: ${status}\n❏Date: ${date}\n❏Time: ${time}\n❏Uptime: ${uptimeString}\n=======================`,
 attachment: await global.utils.getStreamFromURL(link)
 });
 },

 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "owner") {
 this.onStart({ message });
 }
 }
};