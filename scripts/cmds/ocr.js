const axios = require("axios");

module.exports = {
 config: {
  name: "ocr",
  version: "1.1",
  author: "MILAN",
  countDown: 10,
  role: 0,
  shortDescription: {
    vi: "Lệnh `ocr` cho phép bạn trích xuất văn bản từ hình ảnh.",
    en: "The `ocr` command allows you to extract text from images."
  },
  longDescription: {
    vi: "Lệnh `ocr` cho phép bạn trích xuất văn bản từ hình ảnh. Chỉ cần trả lời một hình ảnh hoặc dán liên kết hình ảnh và lệnh sẽ sử dụng nhận dạng ký tự quang học (OCR) để nhận dạng và trích xuất văn bản từ hình ảnh. Văn bản trích xuất sẽ được gửi lại dưới dạng trả lời tin nhắn của bạn.",
    en: "The `ocr` command allows you to extract text from images. Simply reply to an image or paste the image link, and the command will use optical character recognition (OCR) to recognize and extract the text from the image. The extracted text will be sent back as a reply to your message."
  },
  category: "Tools 🛠️",
  guide: {
    vi: "{pn} trả lời một hình ảnh",
    en: "{pn} reply to an image"
  }
 },

 onStart: async function({ event, api }) {
  try {
    const axios = require('axios');
    const link = event.messageReply.attachments[0].url || args.join(" ");
    if(!link) return api.sendMessage('Please reply to image.', event.threadID, event.messageID);
    const res = await axios.get(`https://milanbhandari.imageapi.repl.co/imgur?link=${encodeURIComponent(link)}`); 
    const imageUrl = res.data.image;
    const response = await axios.get(`https://milanbhandari.imageapi.repl.co/ocr?url=${res.data.image}`);
    api.sendMessage(`${response.data.text}`, event.threadID);
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while performing OCR.", event.threadID);
  }
 }
};