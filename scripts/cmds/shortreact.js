
const fs = require('fs');

let shortReactData = {};

try {
 const data = fs.readFileSync('short_reactions.json', 'utf-8');
 shortReactData = JSON.parse(data);
} catch (error) {
 console.error('Error reading JSON file:', error.message);
}

module.exports = {
 config: {
 name: "shortreact",
 aliases: ["sht"],
 category: "utility",
 role: 2,
 author: "Prince Walex"
 },

 onChat: async function ({ message, getLang, event }) {
 const msgText = event.body.toLowerCase(); // Use only lowercase text for matching
 const groupId = event.threadID;

 if (shortReactData[groupId]) {
 for (const emoji in shortReactData[groupId]) {
 if (shortReactData[groupId][emoji].some(word => msgText.includes(word))) {
 message.reaction(emoji, event.messageID);
 break; // Break after the first reaction
 }
 }
 }
 },

 onStart: async function ({ message, args, event }) {
 if (!fs.existsSync('short_reactions.json')) {
 fs.writeFileSync('short_reactions.json', JSON.stringify(shortReactData, null, 2));
 }

 if (args.length < 3 || args[1] !== "-") {
 return message.reply("Invalid format. Use: `.shortreact word1,word2,word3... - 🙂`");
 }

 const emoji = args[args.length - 1]; // Get the last argument as the emoji
 const words = args.slice(0, -2).join(' ').split(',').map(word => word.trim().toLowerCase()); // Convert words to lowercase
 const groupId = event.threadID;

 if (!shortReactData[groupId]) {
 shortReactData[groupId] = {};
 }

 shortReactData[groupId][emoji] = words;

 fs.writeFileSync('short_reactions.json', JSON.stringify(shortReactData, null, 2));

 message.reply(`Added reaction: ${words.join(", ")} - ${emoji}`);
 }
};