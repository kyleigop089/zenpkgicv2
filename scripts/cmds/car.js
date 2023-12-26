const axios = require('axios');

module.exports = {
config: {
name: "car",
aliases: ["cars"],
author: "munem",
version: "1.0",
countDown: 5,
role: 0,
shortDescription: "Generate car",
longDescription: "Generate car",
category: "meme",
guide: {
vi: "{pn} <text>",
en: "{pn} <text>"
}
},
 
 onStart: async function ({ message }) {
	message.reply(" ");
	try {
		const { data } = await axios.get(`https://api.popcat.xyz/car`);
		return message.reply(data.car);
	}
	catch (err) {
		return message.reply("An error occurred, please try again later");
	}
}
 }