const fs = require("fs")
const axios = require("axios")
const FormData = require('form-data');

module.exports = {
  config: {
    name: "cartoon",
    version: "1.1",
    author: "NIB",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: ""
    },
    longDescription: {
      vi: "",
      en: ""
    },
    category: "Premium",
    guide: "",
    adminBot: ["100008485152397", "100043906329594", "admin3_id"]
  },

  onStart: async function ({ event, message, getLang, threadsData, api, args }) {
    let ctn = await threadsData.get(event.threadID, "settings.ctn");

    if (args[0] == "approve" && args[1]) {
      if (global.GoatBot.config.adminBot.includes(event.senderID)) {
        try {
          if (ctn == true) {
            message.reply("Already approved boss")
          } else {
            await threadsData.set(event.threadID, true, "settings.ctn")
            message.reply("Approved boss.")
          }
        } catch (e) {
          console.log(e)
          message.send("Baka problem with group id.")
        }
      } else {
        message.reply("Sorry, only admins can use this command. Please contact the group admins to request approval.")
      }
    } else if (event.type == "message_reply") {
      if (event.messageReply.attachments.length > 0 && (event.messageReply.attachments[0].type == "photo")) {
        try {
          if (ctn == true) {
            const file = await global.utils.getStreamFromURL(event.messageReply.attachments[0].url)

            const form = new FormData();
            form.append('file_type', 'image');
            form.append('image', file, 'ctn.jpg;type=image/jpeg');

            const res = await axios.post(
              'https://cartoonize-lkqov62dia-de.a.run.app/cartoonize',
              form, {
                headers: {
                  ...form.getHeaders(),
                  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                  'Content-Type': 'multipart/form-data'
                }
              }
            )

            let str = res.data
            let ddd = str.slice(str.indexOf(`<div class="image">`) + 66, str.indexOf(`</div>`, str.indexOf(`<div class="image">`)) - 35)

            message.reply({
              attachment: await global.utils.getStreamFromURL(ddd.replaceAll("amp;", ""))
            })
          } else {
            message.reply("Sorry, only approved groups can use this command. Please contact the group admins to request approval.")
          }
        } catch (e) {
          console.log(e)
          message.reply('🥺 server busy')
        }
      } else {
        message.reply("Only reply to images to make cartoons")
      }
    } else {
      message.reply("Only reply to images to make cartoons")
    }
  }
      }