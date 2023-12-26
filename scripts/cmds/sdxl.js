module.exports = {
  config: {
    name: 'sdxl',
    aliases: ["sdx"],
    version: '1.0',
    author: 'JARiF',
    countDown: 5,
    role: 0,
    category: 'odof',
    guide: {
      vi: '',
      en: "1. DreamshaperXL10\n2. DynavisionXL\n3. JuggernautXL\n4. RealismEngineSDXL\n5. Sdxl 1.0", 
    },
  },

  onStart: async function ({ message, args, api  }) {
    try {
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
        model = "4";
      }
      api.setMessageReaction("⏳", message.messageID, () => {}, true);
      const waitingMessage = await message.reply("✅ | Please Wait ...");

      const x = `https://api.vyturex.com/sdxl?prompt=${encodeURIComponent(prompt)}&model=${encodeURIComponent(model)}`;

      const im = await global.utils.getStreamFromURL(x);

      await message.reply({
        attachment: im,
      });
      api.setMessageReaction("✅", message.messageID, () => {}, true);
      await api.unsendMessage(waitingMessage.messageID);
    } catch (error) {
      console.log(error);
      message.reply(`Failed: ${error}`).then(() => {});
    }
  },
};
