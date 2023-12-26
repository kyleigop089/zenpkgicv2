const fetch = require("node-fetch");
const { getStreamFromURL } = global.utils;

module.exports = {
  config: {
    name: "art",
    version: "1.0",
    author: "Samir Å’",
    category: "drawing",
    role: 0,
  },

  onStart: async function ({ message, event }) {
    if (
      event.type === "message_reply" &&
      event.messageReply.attachments &&
      event.messageReply.attachments.length > 0 &&
      ["photo", "sticker"].includes(event.messageReply.attachments[0].type)
    ) {
      const imageUrl = event.messageReply.attachments[0].url;
      const encodedImageUrl = encodeURIComponent(imageUrl);
      const apiUrl = `https://artx.odernder.repl.co/draw?imgurl=${encodedImageUrl}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.processedImageUrl) {
          const singleStream = await getStreamFromURL(data.processedImageUrl);

          await message.reply({
            body: "Here are the generated images:",
            attachment: [singleStream],
          });
        } else if (data.error && data.error === "Face detection failed. Try another photo.") {
          await message.reply("No face detected in the image. Please reply with a clear image containing a face.");
        } else {
          await message.reply("API response is missing data.");
        }
      } catch (error) {
        console.error(error);
        await message.reply("An error occurred while processing the request.");
      }
    } else {
      await message.reply("Please reply to a message with an image. âš ï¸");
    }
  },
};