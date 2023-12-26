module.exports = {
 config: {
 name: "bot",
 version: "1.0",
 author: "Walex",
 countDown: 45,
 role: 0,
 shortDescription: "Turn off and Turn on bot",
 longDescription: "Turn off and Turn on bot",
 category: "ADMIN",
 guide: "{p}{n}"
 },

 onStart: async function ({ event, api, args }) {
 // List of UIDs that are allowed to turn the bot on or off
 const allowedUids = global.GoatBot.config.adminBot;

 // Check if the sender's UID is in the allowed list
 if (!allowedUids.includes(event.senderID)) {
 api.sendMessage(
 "You don't have enough permission to use this command. Only authorized users can do it.",
 event.threadID,
 event.messageID
 );
 return;
 }

 // Check the provided arguments to determine the action (on or off)
 if (args[0] === "on") {
 // Perform the action (turn on the bot)
 // Placeholder logic: Sending a message for demonstration
 api.sendMessage(
 "Successfully Turned On 𝙿.𝚆𝙰𝙻𝙴𝚇󱢏 System ✅",
 event.threadID,
 () => {
 // Add any additional logic for 'bot on' here
 console.log("Bot is now turned on!"); // Placeholder: Log to console
 }
 );
 } else if (args[0] === "off") {
 // Perform the action (turn off the bot)
 // Placeholder logic: Sending a message and exiting the process for demonstration
 api.sendMessage(
 "Successfully Turned Off 𝙿.𝚆𝙰𝙻𝙴𝚇󱢏 System ✅",
 event.threadID,
 () => process.exit(0)
 );
 } else {
 api.sendMessage(
 "Invalid command. Please use 'bot on' or 'bot off'.",
 event.threadID,
 event.messageID
 );
 }
 },
};