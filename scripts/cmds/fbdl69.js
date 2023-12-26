module.exports = {
    config: {
      name: "fbdlv2",
      aliases: ["facebookdl"],
      author: "Deku/kira", // hindi ito collab, ako kasi nag convert :>
      version: "69",
      cooldowns: 5,
      role: 0,
      shortDescription: {
        en: "download facebook video"
      },
      longDescription: {
        en: "download facebook video"
      },
      category: "Tools 🛠️",
      guide: {
        en: "{p}{n} [link]"
      }
    },

onStart: async function({ api, event, args }) {
  const a = require("axios"),
    fs = require("fs");
  const dl = require("@xaviabot/fb-downloader");
  if (!args[0]) return api.sendMessage("Missing url!", event.threadID, event.messageID);
  const path = __dirname + "/cache/vid.mp4"
  const url = args[0]
  const process = `Processing time: ${Date.now() - event.timestamp}ms`;
  /*const regex = /https:\/\/www\.facebook\.com\/\S+/;
  const match = input[0].match(regex);
  const url = match ? match[0] : null;
    if (!match) return api.sendMessage("Please provide a valid URL", threadID, messageID);*/
  try {
    api.sendMessage("🕢 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙞𝙣𝙜...", event.threadID, event.messageID);
    const result = await dl(url)
    let video = await a.get(encodeURI(result.sd), {
      responseType: 'arraybuffer'
    });
    const vid = video.data;
    fs.writeFileSync(path, Buffer.from(vid))
    //api.sendMessage(process, event.threadID, event.messageID);
    return api.sendMessage({ attachment: fs.createReadStream(path) }, event.threadID, event.messageID)
  } catch (e) {
    return api.sendMessage("Error: " + e.message, event.threadID, event.messageID)
   }
 }
};
