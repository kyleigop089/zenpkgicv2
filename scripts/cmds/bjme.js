
const { resolve } = require ("path");
const { existsSync, mkdirSync } = require ("fs-extra");
module.exports = {
  config: {
    name: "bjme",
    author: "Jun",
    countDown: 5,
    role: 2,
    category: "FUN",
    shortDescription: {
      en: "subo etits",
    },
  },

  onLoad: async function () {
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'bucu.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/o7LdaSK.png", path);
  },

  async makeImage({ one, two }) {
    const fs = require ("fs-extra");
    const path = require ("path");
    const axios = require ("axios"); 
    const jimp = require ("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let bucu_img = await jimp.read(__root + "/bucu.png");
    let pathImg = __root + `/bucu_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    let imageOne = await jimp.read(avatarOne);
    let imageTwo = await jimp.read(avatarTwo);

    bucu_img.resize(512, 512);
    imageOne.resize(100, 100);
    imageTwo.resize(100, 100);

    bucu_img.composite(imageOne, 200, 125);
    bucu_img.composite(imageTwo, 340, 125);

    await bucu_img.writeAsync(pathImg);
    return pathImg;
  },

  onStart: async function({ api, event, args }) {
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage("Please tag 1 person.", threadID, messageID);
    if (mention == senderID) return api.sendMessage("You can't masturbate.", threadID, messageID);
    const one = senderID, two = mention;
    const path = await this.makeImage({ one, two });
    return api.sendMessage({ attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
  }
}