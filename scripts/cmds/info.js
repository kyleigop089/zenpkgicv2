const fs = require('fs');
const moment = require('moment-timezone');
const NepaliDate = require('nepali-date');
const fast = require('fast-speedtest-api');

module.exports = {
 config: {
 name: "info",
 version: "1.3",
 author: "walex",
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

 onStart: async function ({ message, api, event }) {
 const speedTest = new fast({
 token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
 verbose: false,
 timeout: 10000,
 https: true,
 urlCount: 5,
 bufferSize: 8,
 unit: fast.UNITS.Mbps
 });
 const result = await speedTest.getSpeed();
 const botName = "𝒑𝒓𝒊𝒏𝒄𝒆 𝒘𝒂𝒍𝒆𝒙󱢏";
 const botPrefix = "";
 const authorName = "𝒘𝒂𝒍𝒆𝒙󱢏";
 const authorFB = "https://facebook.com/thanks.for.ccopying";
 const authorInsta = "Qhingthuth";
 const status = "𝙿𝚛𝚒𝚟𝚊𝚝𝚎";
 const timeStart = Date.now();

 const urls = JSON.parse(fs.readFileSync('walex.json'));
 const link = urls[Math.floor(Math.random() * urls.length)];

 // Get current date and time in Asia/Kathmandu timezone
 const now = moment().tz('Africa/Lusaka');
 const date = now.format('MMMM Do YYYY');
 const time = now.format('h:mm:ss A');

 // Get date
 const nepaliDate = new NepaliDate(now.toDate());
 const bsDateStr = nepaliDate.format("dddd, DD MMMM");

 // Calculate bot uptime
 const uptime = process.uptime();
 const uptimeString = formatUptime(uptime);

 const ping = Date.now() - timeStart;

 const replyMessage = `\n╔─────⊢✭⊣─────╗
\n===「 Bot & Owner Info 」===
★ Bot Name: ${botName}
★ Bot Prefix: ${global.GoatBot.config.prefix}
★ Author Name: ${authorName}
★ FB: ${authorFB}
★ Instagram: ${authorInsta}
★ Status: ${status}
★ Date: ${date}
★ BS Date: ${bsDateStr}
★ Time: ${time}
★ Bot Running: ${uptimeString}
★ Bot's Speed: ${result} MBPS\n
╚─────⊢✭⊣─────╝\n`;

 const attachment = await global.utils.getStreamFromURL(link);
 message.reply({
 body: replyMessage,
 attachment
 });
 },

 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "info") {
 await this.onStart({ message });
 }
 }
};

function formatUptime(uptime) {
 const seconds = Math.floor(uptime % 60);
 const minutes = Math.floor((uptime / 60) % 60);
 const hours = Math.floor((uptime / (60 * 60)) % 24);
 const days = Math.floor(uptime / (60 * 60 * 24));

 const uptimeString = [];
 if (days > 0) uptimeString.push(`${days}d`);
 if (hours > 0) uptimeString.push(`${hours}h`);
 if (minutes > 0) uptimeString.push(`${minutes}min`);
 if (seconds > 0) uptimeString.push(`${seconds}sec`);

 return uptimeString.join(" ");
}