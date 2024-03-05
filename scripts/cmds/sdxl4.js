const axios = require('axios');

module.exports = {
  config: {
    name: "sdxl4",
    aliases: ["sdxl"],
    version: "1.1",
    author: "Rishad",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: 'Text to Image'
    },
    longDescription: {
      en: "Text to image"
    },
    category: "image",
    guide: {
      en: '{pn} your prompt | Type' +
        ' here are supported models:' +
        '\n' +
   '1 | dreamshaperXL10_alpha2' +
'\n2 | dynavisionXL_0411' +
'\n3 | juggernautXL_v45' +
'\n4 | realismEngineSDXL_v10' +
'\n5 | sd_xl_base_1.0'

    }
  },

  onStart: async function({ message, args }) {
    const text = args.join(" ");
    if (!text) {
      return message.reply("Please provide a prompt.");
    }

    let prompt, model;
    if (text.includes("|")) {
      const [promptText, modelText] = text.split("|").map((str) => str.trim());
      prompt = promptText;
      model = modelText;
    } else {
      prompt = text;
      model = 5; 
    }

    message.reply("✅| Creating your Imagination...").then((info) => { id = info.messageID });
    try {
      const API = `https://for-devs.onrender.com/api/sdxl?prompt=${encodeURIComponent(prompt)}&model=${model}&apikey=fuck`;
      const imageStream = await global.utils.getStreamFromURL(API);

      return message.reply({
        attachment: imageStream
      });
    } catch (error) {
      console.log(error);
      message.reply("Failed to generate your imagination.").then(() => {
        message.delete(id);
      });
    }
  }
};
