const { GoatWrapper } = require('fca-liane-utils');
const axios = require("axios");
const moment = require("moment-timezone");

const uptimeFacts = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Every day may not be good, but there's something good in every day.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best way to predict the future is to create it.",
    "The journey of a thousand miles begins with one step.",
    "Believe you can and you're halfway there.",
    "Life is 10% what happens to us and 90% how we react to it."
];

module.exports = {
    config: {
        name: "ping2",
        version: "1.0",
        author: "modified by kylepogi", // Keep your comment if needed but avoid using inappropriate language
        countDown: 5,
        role: 0,
        shortDescription: "Ping command for bot uptime",
        longDescription: "A command to check the bot's response time and provide a random uptime fact",
        category: "📊 𝗣𝗶𝗻𝗴",
    },
    onStart: async function() {},
    onChat: async function({ event, message, getLang, api, args }) {
        const manilaTime = moment.tz('Asia/Manila');
        const formattedDateTime = manilaTime.format('MMMM D, YYYY h:mm A');

        if (event.body && event.body.toLowerCase() === "ping") {
            const startTime = Date.now(); // Initialize startTime before sending the initial ping message

            const randomFact = uptimeFacts[Math.floor(Math.random() * uptimeFacts.length)];

            api.sendMessage("🙃 𝗣𝗶𝗻𝗴...", event.threadID).then((sentMessage) => {
                const endTime = Date.now();
                const botPing = endTime - startTime;
                const apiPing = sentMessage.timestamp - startTime;

                const now = moment().tz('Asia/Manila');

                let pingMessage = `👻𝗣𝗼𝗻𝗴!\n▬▬▬▬▬▬▬▬▬▬▬▬\n🤖𝗕𝗼𝘁 𝗟𝗮𝘁𝗲𝗻𝗰𝘆: ${botPing}𝗺𝘀\n📊 𝗔𝗣𝗜 𝗟𝗮𝘁𝗲𝗻𝗰𝘆: ${apiPing}𝗺𝘀\n📆𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗗𝗮𝘁𝗲: ${now.format('YYYY-MM-DD')}\n▬▬▬▬▬▬▬▬▬▬▬▬\n𝗣𝗜𝗡𝗚 𝗙𝗔𝗖𝗧: ${randomFact}`;

                api.sendMessage(`${pingMessage}`, event.threadID, sentMessage.messageID);
            });
        }
    },
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
