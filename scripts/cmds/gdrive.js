const axios = require("axios");

module.exports = {
  config: {
    name: "gdrive",
    version: "1.0",
    author: "SiM",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "This command extracts links from a Google Drive folder in json format",
    category: "Utility",
    guide: {
      en: "{pn} [type] [gdrive folder link]`.\n\nType available:\n- view : get view type link\n-direct : get direct link"},
  },

  onStart: async function ({ api, args, message }) {
    const [type, folderUrl] = args;

    
    if (!type || !folderUrl) {
      message.reply("Please provide both the type and the Google Drive folder link.");
      return;
    }


    if (type !== "view" && type !== "direct") {
      message.reply("❌ | Type must be either 'view' or 'direct'.");
      return;
    }
    
    if (!/^https:\/\/drive\.google\.com\/drive\/folders\/[a-zA-Z0-9_-]+$/.test(folderUrl)) {
      message.reply("error ❌\nlink must be a Google drive folder link");
      return;
    }
    

    try {
      const response = await axios.get("https://apis.marinmain.repl.co/gdrive/foldertofiles/getlinks", {
        params: {
          folderUrl,
          type,
          apikey: "shady"
        }
      });

      const { status, extractedData } = response.data;

      if (status === "success") {
        const replyMessage = `✅ | Here is the extracted file links for your Google Drive folder:\n\nType: ${type}\nLink: ${extractedData}`;
        message.reply(replyMessage);
      } else {
        message.reply("❌ | Error extracting links from the Google Drive folder.");
      }
    } catch (error) {
      console.error("API request error:", error);
      message.reply("❌ | Error while making the API request.");
    }
  }
};
