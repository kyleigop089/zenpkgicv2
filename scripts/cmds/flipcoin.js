const axios = require('axios');
module.exports = {
	config: {
		name: "flipcoin",
		aliases: ["fc"],
		version: "1.0",
		author: "Samuel Kâñèñgeè",
		countDown: 5,
		role: 0,
		shortDescription: "Flip the coin🪙",
		longDescription: "Flip the coin🪙",
		category: "game",
		guide: {
			en: "{pn}"
		},
	},

	onStart: async function ({ message, args, api, event }) {
		const isFaceUp = Math.random() > 0.5;
		let link, body;
		if (isFaceUp) {
			link = "https://i.ibb.co/xSsMRL9/image.png", "https://i.ibb.co/4Zf3M07/image.png", "https://i.ibb.co/PCKdPg6/image.png";
			body = "🎉 𝗧𝗵𝗲 𝗰𝗼𝗶𝗻 𝗶𝘀 𝘂𝗽!";
		} else {
			link = "https://i.ibb.co/FhMwzL9/image.png";
			body = "🙁 𝗧𝗵𝗲 𝗰𝗼𝗶𝗻 𝗶𝘀 𝗱𝗼𝘄𝗻!";
		}
		const msg = {
			body: body,
			attachment: await global.utils.getStreamFromURL(link)
		};
		api.sendMessage(msg, event.threadID);
	}
    }
