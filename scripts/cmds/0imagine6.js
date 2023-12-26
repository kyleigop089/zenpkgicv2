const axios = require("axios");
const fs = require("fs");
const { getStreamFromURL } = global.utils;

const negativeWords = JSON.parse(fs.readFileSync("negative_words.json", "utf-8"));

module.exports = {
  config: {
    name: "imagine6",
    aliases: ["imgne6", "img6"],
    version: "2.0",
    author: "SiAM",
    countDown: 100,
    role: 0,
    shortDescription: "Create image from your text",
    longDescription: "Create image from your text",
    category: "AI-IMAGE",
    guide: {
      en: "{pn} prompt\n\nExample:\n{pn} spiderman with purple suit\nyou can add --v1 | v2 | v3 \ntoget different model results \n\nand after that Reply with the image number (1, 2, 3, 4) to get the corresponding image in high resolution.",
    },
  },

  onStart: async function ({ api, args, message, event }) {
    const argString = args.join(" ");
    const [prompt, model] = argString.split("--");
    const modelName = model && model.trim().toLowerCase();
    const modelNumber = getModelNumber(modelName);

    if (!prompt) {
      return message.reply("⚠️ Please enter a prompt.");
    }

    const isNegativePrompt = negativeWords.some((word) =>
      prompt.toLowerCase().includes(word)
    );
    if (isNegativePrompt) {
      return message.reply(
        "❌ Negative prompt detected. Go to por*hub and search there. 🖕"
      );
    }

    const unsend = await message.reply(
      "Your imagination is processing. It may take up to 2 minutes. Please wait... 🤖"
    );

    try {
      const response = await axios.get(
        "https://apis.marinmain.repl.co/t2i/v2",
        {
          params: {
            prompt: encodeURIComponent(prompt),
            model: modelNumber,
            apikey: "shady",
          },
        }
      );

      if (response.status !== 200) {
        message.unsend((await unsend).messageID);
        return message.reply("❗| Main Server Crashed..\ntry again later");
      }

      const jsonResponse = response.data;

      if (jsonResponse.response && jsonResponse.response.is_nsfw) {
        const nsfwData = jsonResponse.response;
        const nsfwMessage = `⚠️ NSFW detected in the image.🤔🔞\n\nNSFW Predictions:\nPorn: ${nsfwData.porn}\nSexual: ${nsfwData.sexy}\nHentai: ${nsfwData.hentai}\nDrawing: ${nsfwData.drawings}\nNeutral: ${nsfwData.neutral}\nDetected By: ${nsfwData.Detector}\n\ndude don't use 18+ prompt 🗿🥱`;

        message.unsend((await unsend).messageID);
        const nsfwReply = await message.reply(nsfwMessage);

        setTimeout(async () => {
          await message.unsend(nsfwReply.messageID);
        }, 300000);
      } else if (jsonResponse.response && jsonResponse.response.framedUrl) {
        const framedImageUrl = jsonResponse.response.framedUrl;
        const imageUrls = jsonResponse.response.imageUrls;

        message.unsend((await unsend).messageID);
        const replyOptions = {
          body: "Here's your imagination 🖼️.\nPlease reply with the image number (1, 2, 3, 4) to get the corresponding image in high resolution.",
          attachment: await getStreamFromURL(framedImageUrl),
        };

        let sendAttempts = 0;
        const sendImageWithRetry = async () => {
          try {
            const sentMessage = await message.reply(replyOptions);
            global.GoatBot.onReply.set(sentMessage.messageID, {
              commandName: "t2i",
              author: event.senderID,
              messageID: sentMessage.messageID,
              imageUrls: imageUrls,
            });
          } catch (error) {
            if (sendAttempts < 2) {
              sendAttempts++;
              await sendImageWithRetry();
            } else {
              console.log("Failed to send image attachment.");
            }
          }
        };

        await sendImageWithRetry();
      } else {
        message.unsend((await unsend).messageID);
        return message.reply("Err");
      }
    } catch (err) {
      message.unsend((await unsend).messageID);
      return message.reply("Server not responding");
    }
  },

  onReply: async function ({ event, message, api, Reply }) {
    try {
      const { author, messageID, imageUrls } = Reply;
      if (event.senderID !== author) return;

      const selectedNumber = parseInt(event.body);
      if (
        isNaN(selectedNumber) ||
        selectedNumber < 1 ||
        selectedNumber > Object.keys(imageUrls).length
      ) {
        return message.reply(
          "Invalid option selected. Please reply with a valid number (1-4). 😑"
        );
      }



      const selectedImageUrl = imageUrls[`image${selectedNumber}`];
      return message.reply({
        body: `Here's the HD image you requested 🖼️.\nDownload link:\n${selectedImageUrl}`,
        attachment: await getStreamFromURL(selectedImageUrl),
      });
    } catch (error) {
      console.log(error);
      return message.reply("Error occurred while processing the reply.");
    }
  },
};


function getModelNumber(modelName) {
  if (!modelName || modelName === "v1") {
    return 1;
  } else if (modelName === "v2") {
    return 2;
  } else if (modelName === "v3") {
    return 3;
  } else {
    return null;
  }
          }