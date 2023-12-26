const fs = require("fs");
const axios = require("axios");
const path = require("path");
const FormData = require("form-data");

module.exports = {
  config: {
    name: "art5",
    version: "1.1",
    author: "JARiF | Samuel Kâñèñgeè",
    countDown: 5,
    role: 0,
    category: "AI-ART",
  },

  onStart: async function ({ event, message, getLang, threadsData, api, args }) {
    try {
      if (args.length >= 2 || (event.type === "message_reply" && event.messageReply.attachments.length > 0 && event.messageReply.attachments[0].type === "photo")) {
        message.reply("Please wait....");

        const imageUrls = getImageUrls(event, args);

        const prompt = getPrompt(event, args);

        const responses = [];

        for (const imageUrl of imageUrls) {
          const imgbbImageUrl = await uploadImageToImgbb(imageUrl);
          const imageBuffer = await transformImage(imgbbImageUrl, prompt);
          const pathSave = path.join(__dirname, "art.png");
          await saveArrayBufferToFile(imageBuffer, pathSave);
          responses.push(fs.createReadStream(pathSave));
        }

        message.reply(
          {
            attachment: responses,
          },
          () => {
            responses.forEach((response) => {
              response.destroy();
            });
          }
        );
      } else if (event.type === "message_reply") {
        message.reply("Reply with an image.");
      } else {
        message.reply("Please provide an image link and a prompt, or reply with an image.");
}
    } catch (e) {
      console.error(e);
      message.reply("❌ | Something went wrong.");
    }
  },
};

function getImageUrls(event, args) {
  if (event.type === "message_reply") {
    return event.messageReply.attachments.filter((attachment) => attachment.type === "photo").map((attachment) => attachment.url);
  } else {
    return [args[0]];
  }
}

function getPrompt(event, args) {
  if (event.type === "message_reply") {
    return args.slice(1).join(" ");
  } else {
    return args.slice(1).join(" ");
  }
}

async function uploadImageToImgbb(imageUrl) {
  const formData = new FormData();
  formData.append("key", "6ac6780f27041c31be2da98f4f55704e");
  formData.append("image", imageUrl);

  const imgbbResponse = await axios.post("https://api.imgbb.com/1/upload", formData, {
    headers: formData.getHeaders(),
  });
  return imgbbResponse.data.data.url;
}

async function transformImage(imgbbImageUrl, prompt) {
  const response = await axios.get(`https://jarif-art.blackxlegend1.repl.co/transform?imgurl=${imgbbImageUrl}&prompt=${prompt}&apikey=fuck-me`, {
    responseType: "arraybuffer",
  });

  return Buffer.from(response.data);
}

async function saveArrayBufferToFile(arrayBuffer, filePath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, Buffer.from(arrayBuffer), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}