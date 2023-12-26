module.exports.config = {
 name: "anhcrush",
aliases: ["ancrsh", "animecrush"],
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Teri",
 description: "Xem ảnh crush",
 commandCategory: "image",
 category: "fun",
 usages: "",
 cooldowns: 5
};

module.exports.onStart = async function({ api, event }) {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('https://crush.thanhnhu2.repl.co').then(res => { //link ảnh
 let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
 let count = res.data.count;
 let callback = function () {
 api.sendMessage({
 body: `This is a picture of your crush`,
 attachment: fs.createReadStream(__dirname + `/cache/anhcrush.${ext}`) //do whatever
 }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anhcrush.${ext}`), event.messageID);
 };
 request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anhcrush.${ext}`)).on("close", callback);
 })
}