const DIG = require("discord-image-generation");
const Discord = require("discord.js");
const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
	name: "beautifulmage",
	version: "1.0.0",
	hasPermission: 0,
	credits: "Kylepogi",
	description: "Generate a beautiful image",
	category: "🖼 EDIT-IMG",
	usages: "beautiful",
	cooldowns: 5,
};

module.exports.onStart = async ({ event, api, args, Users }) => {
	const { senderID, threadID, messageID, mentions } = event;
	const id = Object.keys(mentions)[0] || senderID;
	const currency = args.join(" ");
	const response = await axios.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" });
	const avatar = Buffer.from(response.data, "binary");

	const img = await new DIG.Beautiful().getImage(avatar);
	const attach = new Discord.MessageAttachment(img);
	const path_wanted = __dirname + "/cache/beauti.png";
	fs.writeFileSync(path_wanted, attach.attachment);

	api.sendMessage(
		{
			attachment: fs.createReadStream(path_wanted),
		},
		threadID,
		() => fs.unlinkSync(path_wanted)
	);
};
