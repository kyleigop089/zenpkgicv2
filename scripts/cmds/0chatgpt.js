const axios = require("axios");
const apiUrl = "https://ai.tantrik-apis.repl.co/gpt";
const apikey = "8kkmMgb5knwHjALe";

module.exports = {
  config: {
    name: "chatgpt",
    aliases: ["gpt"],
    version: "1.0",
    author: "Team Vortex",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "get a response/answers from GPT"
    },
    longDescription: {
      en: "get response/answers from GPT"
    },
    category: "GPT"
  },

  onStart: async function({ message, args }) {
    const query = args.join(" ");

    if (!query) {
      message.reply("Please provide a query to ask GPT.");
      return;
    }

    try {
      const url = `${apiUrl}?query=${encodeURIComponent(query)}&apikey=${apikey}`;
      const response = await axios.get(url);
      const result = response.data;

      const content = result.chatGPT;

      const replyOptions = {
        body: content
      };

      message.reply(replyOptions);
    } catch (error) {
      console.error("Error:", error.message);
    }
  },
};