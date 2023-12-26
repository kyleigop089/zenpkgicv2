const axios = require('axios');

module.exports = {
  config: {
    name: "stalk",
    author: "Jun",
    role: 0,
    countDown: 0,
    shortDescription: "Stalk social media accounts",
    category: "media",
    guide: {
      en: "Usage: {p} stalk fb <uid> | stalk github <username> | stalk tiktok <username>"
    }
  },

  onStart: async function ({ message, api, args, event, usersData }) {
    if (args.length < 2) {
      message.reply("Usage: {p} stalk fb <uid> | stalk github <username> | stalk tiktok <username>");
      return;
    }

    const jun = "yourboss12";
    const category = args[0];
    const id = args[1];

    try {
      const response = await axios.get(`https://api-test.${jun}.repl.co/stalk/${category}?&id=${id}`);
      const { result, av } = response.data;

      message.reply({
        body: result,
        attachment: await global.utils.getStreamFromURL(av)
      });
    } catch (error) {
      console.error(error);
    }
  }
};
