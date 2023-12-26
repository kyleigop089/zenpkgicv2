const axios = require("axios");
const jimp = require("jimp");
const fs = require("fs");

module.exports = {
 config: {
 name: "deleteuser",
 aliases: ["deluser"],
 version: "1.0",
 author: "walex",
 countDown: 5,
 role: 0,
 shortDescription: "delete image edit",
 longDescription: "delete image edit",
 category: "fun",
 guide: {
 en: "{p}{n} delete or with tag",
 }
 },

 onStart: async function ({ api, event, args, Users, message }) {
 var id = Object.keys(event.mentions)[0] || event.senderID;
 var id1 = Object.keys(event.mentions)[1] || event.senderID;
 const img = `https://tanjiro-api.onrender.com/delete?uid=${id}&api_key=tanjiro`;
 const form = {
 body: `F**k Man This's Alott `
 };
 form.attachment = [];
 form.attachment[0] = await global.utils.getStreamFromURL(img);
 message.reply(form);
 }
};