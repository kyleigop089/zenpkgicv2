const fs = require("fs");
module.exports = {
    config: {
        name: "spam3",
        version: "1.0",
        author: "WALEX",
        countDown: 5,
        role: 0,
        shortDescription: "useless",
        longDescription: "",
        category: "useless",
        guide: {
            vi: "{pn} "
        }
    },
    onStart: async function ({ api, event, args }) {
        const axios = require("axios");
        const permission = ["100008485152397"];
        if (!permission.includes(event.senderID)) {
            api.sendMessage("You don't have enough permission to use this command Only VipUsers can do it.", event.threadID, event.messageID);
            return;
        }
        const input = args.join(" ");
        if (!input.includes("|")) {
            return api.sendMessage("Invalid input format. Please use the correct format: '.spam3 <message/emoji> | <number of spam>'", event.threadID, event.messageID);
        }
        const [message, count] = input.split("|").map((str) => str.trim());
        if (!message || !count || isNaN(count)) {
            return api.sendMessage("Invalid input format. Please use the correct format: '.spam3 <message/emoji> | <number of spam>'", event.threadID, event.messageID);
        }
        for (i = 0; i < parseInt(count); i++) {
            api.sendMessage(message, event.threadID);
        }
    }
};