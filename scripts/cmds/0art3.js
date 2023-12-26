const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

module.exports = {
  config: {
    name: "art3",
    version: "1.1",
    author: "JARiF | Fuck Vortex",
    countDown: 5,
    role: 0,
    category: "AI-ART",
  },

  saveArrayBufferToFile: async function(arrayBuffer, filePath) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, Buffer.from(arrayBuffer), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },

  uploadToImgbb: async function(imageBuffer) {
    try {
      const formData = new FormData();
      formData.append("image", imageBuffer, "image.jpem");

      const response = await axios.post("https://api.imgbb.com/1/upload", formData, {
        headers: {
          ...formData.getHeaders(),
          "Content-Type": "multipart/form-data",
        },
        params: {
          key: "cc7534287e3141c514a70ff04d316190",
        },
      });

      return response.data.data.url;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  },

  onStart: async function({ event, message, getLang, threadsData, api, args }) {
    try {
      if (event.type === "message_reply" || (args.length >= 1 && args[0].startsWith("http"))) {
        const replyAttachment = event.messageReply?.attachments[0];
        const imageUrl = args.length >= 1 ? args[0] : (replyAttachment?.type === "photo" ? replyAttachment.url : null);

        if (!imageUrl) {
          message.reply("Please provide an image link or reply with an image.");
          return;
        }

        message.reply("Please wait...");

        const response = await axios.get(`https://jarif-art.blackxlegend1.repl.co/transform?imgurl=${imageUrl}&prompt=same pose`, {
          responseType: "arraybuffer",
        });

        const imageBuffer = Buffer.from(response.data);

        const imgbbUrl = await this.uploadToImgbb(imageBuffer);

        message.reply(imgbbUrl);
      } else {
        message.reply("Please provide an image link or reply with an image.");
      }
    } catch (error) {
      console.error("Error processing image:", error);
      message.reply("Failed to process image.");
    }
  },
};