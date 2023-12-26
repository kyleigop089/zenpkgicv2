const axios = require('axios');
const { getStreamFromURL } = global.utils;

module.exports = {
	config: {
		name: "anime",
		aliases: ["nemo3"],
		author: "NTKhang",
		version: "1.5",
		countDown: 5,
		role: 0,
		shortDescription: "random anime image",
		longDescription: "random anime image",
		category: "anime",
		guide: {
			vi: "{pn}"
		}
	},
	langs: {
		en: {
			loading: "Initializing image, please wait...",
			error: "An error occurred, please try again later"
		}
	},

	onStart: async function ({ args, message, getLang }) {
		message.reply(getLang("loading"));
		try {
			const { data } = await axios.get(`https://milanbhandari.imageapi.repl.co/anime`);
			const imageRandom = await getStreamFromURL(data.url);
			return message.reply({
				attachment: imageRandom
			});
		}
		catch (err) {
			return message.reply(getLang("error"));
		}
	}
};