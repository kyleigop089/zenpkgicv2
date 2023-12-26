const axios = require('axios');

module.exports = {
  config: {
    name: 'gptturbo',
    version: '2.5',
    author: 'Jarif',
    role: 0,
    category: 'ai',
    shortDescription: {
      en: 'Asks gpt 3.5 turbo for a fast answer.',
    },
    longDescription: {
      en: 'Asks gpt 3.5 turbo for a fast answer based on the user prompt.',
    },
    guide: {
      en: '{pn} [prompt]',
    },
  },
 onStart: async function ({ message, event, args }) {
    let txt = args.join(" ");
    try {
      if (!txt) {
        return message.reply("❌ Missing input!", event.threadID, event.messageID);
      }
      const response = await axios.get(`https://www.annie-jarif.repl.co/gpt?prompt=${encodeURIComponent(txt)}`);
      const result = response.data.message;
      message.reply(result, event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      message.reply("Error", event.threadID, event.messageID);
    }
  },
};