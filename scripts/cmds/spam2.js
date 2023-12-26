const fs = require("fs");
module.exports = {
 config: {
 name: "spam2",
 version: "1.0",
 author: "WALEX",
 countDown: 5,
 role: 0,
 shortDescription: "useless",
 longDescription: "",
 category: "useless",
 guide: {
 vi: "{pn} ",
 },
 },
 onStart: async function ({ api, event, args }) {
 const axios = require("axios");
 const permission = [
   "100008485152397", 
   "100043906329594"
 ];
 if (!permission.includes(event.senderID)) {
 api.sendMessage(
 "You don't have enough permission to use this command. Only VipUsers can do it.",
 event.threadID,
 event.messageID
 );
 return;
 }

 // Extract the message and the number of times to repeat
 const [message, numTimes] = args.join(" ").split("|").map(arg => arg.trim());

 // Validate the number of times to repeat
 const repeatCount = parseInt(numTimes);
 if (isNaN(repeatCount) || repeatCount <= 0 || repeatCount > 50) {
 api.sendMessage(
 "Invalid number of times to repeat. Please enter a number between 1 and 50.",
 event.threadID,
 event.messageID
 );
 return;
 }

 // Repeat the message
 const repeatedMessage = message.repeat(repeatCount);

 // Send the repeated message
 api.sendMessage(repeatedMessage, event.threadID);
 },
};