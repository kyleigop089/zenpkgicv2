const fs = require("fs-extra");
const fetch = require("node-fetch");
const { getPrefix, getStreamFromURL } = global.utils;      

module.exports = {
  config: {
    name: "phoneinfo",
        aliases: ["device", "deviceinfo", "phone"],
    version: "1.2",
    author: "SiAM🗿",// if you change cradit then you are a gay.
    countDown: 25,
    role: 0,
    shortDescription: {
      en: "get device info",
    },
    longDescription: {
      en: "Marin will send your device full info ",
    },
    category: "siam",
    guide: {
      en: "{p} realme 8 pro",
    },
  },

  onStart: async function ({ api, args, message, event}) {
		const p = getPrefix(event.threadID);


    
    
        const deviceName = args.join(" ");

    if (!deviceName) {
      api.sendMessage(`Please provide a device name.🫵😑\n\nExample:\n${p}phoneinfo realme 9 pro`, event.threadID);
      return;
    }

    const eName = encodeURIComponent(deviceName);
    const searchUrl = `https://apis.marinmain.repl.co/search?query=${eName}&apikey=siamxmarin77`;

    try {
      const sRes = await fetch(searchUrl);
      const sData = await sRes.json();

      if (sData.length === 0) {
        api.sendMessage(`No results found for '${deviceName}'. Please try again with a different device name.`, event.threadID);
        return;
      }

      const top = sData.slice(0, 5);

      let replyMessage = "Reply this message with 1-5 number to get phone info 🥹:\n\n";
      for (let i = 0; i < top.length; i++) {
        const { name } = top[i];
        replyMessage += `「${i + 1}」 ${name}\n`;
      }

      const reply = await api.sendMessage(replyMessage, event.threadID);
      const replyMessageID = reply.messageID;
      global.GoatBot.onReply.set(replyMessageID, {
        commandName: "phoneinfo",
        author: event.senderID,
        messageID: replyMessageID,
        results: top,
      });
    } catch (error) {
      console.log(error);
      api.sendMessage("error.. to geting phone link and name ", event.threadID);
    }
  },

  onReply: async function ({ event, api, Reply , message}) {
    const { author, messageID, results } = Reply;
    if (event.senderID !== author) return;

    const select = parseInt(event.body);
    if (isNaN(select) || select < 1 || select > results.length) {
      api.sendMessage("Invalid option selected. Please reply with a valid number...😑", event.threadID);
      return;
    }
		api.unsendMessage(Reply.messageID);

    const selectedPhone = results[select - 1];
    const phoneInfoUrl = `https://apis.marinmain.repl.co/phoneinfo?url=${selectedPhone.link}&apikey=siamxmarin77`;

    try {
      const infoRes = await fetch(phoneInfoUrl);
      const data = await infoRes.json();
			

      if (data.status === 404 || data.status === 500) {
        api.sendMessage(`Sorry😐  API failed to Scrape Your phone information..\n\nYou can go to this link to view Your phone info \n Name: ${selectedPhone.name}\nURL 🔗 : ${selectedPhone.link}`, event.threadID);
        return;
					 }
			

      const title = data.title;
      const prices = data.prices || {};
      const siam = data.specifications || {};
      const mCamera = siam["Main CAMERA"] || {};
      const sCamera = siam["Selfie CAMERA"] || {};
      const pros = data.advantages || [];
      const cons = data.disadvantages || [];
			const img = data.image;

      let info = `❏ Title: ${title}\n`;
      info += "╭「PRICE 」\n";
      for (const [priceTitle, priceValue] of Object.entries(prices)) {
        info += `❏ ${priceTitle}: ${priceValue}\n`;
      }
      info += "╰—————————\n\n";

      info += "╭「BASIC INFO」\n";
      info += "│_\n";
      info += `❏ Status: ${siam["Status"]}\n`;
      info += `❏ Announced: ${siam["Announced"]}\n`;
      info += `❏ Manufactured by: ${siam["Manufactured by"]}\n`;
      info += `❏ Made in: ${siam["Made in"]}\n`;
      info += `❏ Warranty: ${siam["Warranty"]}\n`;
      info += `❏ Colors Available: ${siam["Colors Available"]}\n`;
      info += "╰—————————\n\n";

      info += "╭「PLATFORM」\n";
      info += `❏ Operating System: ${siam["Operating System"]}\n`;
      info += `❏ Processor (CPU): ${siam["Processor (CPU)"]}\n`;
      info += `❏ Chipset: ${siam["Chipset"]}\n`;
      info += `❏ Graphics processing unit: ${siam["Graphics processing unit"]}\n`;
      info += `❏ RAM: ${siam["RAM"]}\n`;
      info += `❏ ROM: ${siam["ROM"]}\n`;
      info += `❏ Card slot: ${siam["Card slot"]}\n`;
      info += "╰—————————\n\n";

      info += "╭「NETWORK」\n";
      info += `❏ Technology: ${siam["Technology"]}\n`;
      info += `❏ Speed: ${siam["Speed"]}\n`;
      info += `❏ Bluetooth: ${siam["Bluetooth"]}\n`;
      info += `❏ WLAN: ${siam["WLAN"]}\n`;
      info += `❏ GPS: ${siam["GPS"]}\n`;
      info += `❏ GPRS: ${siam["GPRS"]}\n`;
      info += `❏ EDGE: ${siam["EDGE"]}\n`;
      info += "╰—————————\n\n";
		
      info += "╭「BATTERY」\n";
      info += `❏ Type and Capacity: ${siam["Type and Capacity"]}\n`;
      info += `❏ Fast Charging & Others: ${siam["Fast Charging & Others"]}\n`;
      info += `❏ USB Type-C: ${siam["USB Type-C"]}\n`;
      info += `❏ USB: ${siam["USB"]}\n`;
      info += "╰—————————\n\n";
			
      info += "╭「DISPLAY」\n";
      info += `❏ Resolution: ${siam["Resolution"]}\n`;
      info += `❏ Type: ${siam["Type"]}\n`;
      info += `❏ Multi-touch: ${siam["Multi-touch"]}\n`;
      info += `❏ Protection: ${siam["Protection"]}\n`;
      info += `❏ Features: ${siam["Features"]}\n`;
      info += "╰—————————\n\n";
			
      info += "╭「BODY」\n";
      info += `❏ Dimensions: ${siam["Dimensions"]}\n`;
      info += `❏ Weight: ${siam["Weight"]}\n`;
      info += `❏ Build: ${siam["Build"]}\n`;
      info += `❏ Water Resistance: ${siam["Water Resistance"]}\n`;
      info += `❏ Size: ${siam["Size"]}\n`;
      info += "╰—————————\n\n";

      info += "╭「CAMERA」\n";
      info += "│_\n";
      info += `❏ Main CAMERA:\n`;
      info += `   ⭔ Resolution: ${mCamera["Resolution"]}\n`;
      info += `   ⭔ Features: ${mCamera["Features"]}\n`;
      info += `   ⭔ Video Recording: ${mCamera["Video Recording"]}\n`;
      info += `❏ Selfie CAMERA:\n`;
      info += `   ⭔ Resolution: ${sCamera["Resolution"]}\n`;
      info += `   ⭔ Features: ${sCamera["Features"]}\n`;
      info += `   ⭔ Video Recording: ${sCamera["Video Recording"]}\n`;
      info += "╰—————————\n\n";

      info += "╭「MAIN FEATURES」\n";
      info += `❏ Sensors: ${siam["Sensors"]}\n`;
      info += `❏ Fingerprint: ${siam["Fingerprint"]}\n`;
      info += `❏ Face Unlock: ${siam["Face Unlock"]}\n`;
      info += `❏ Alert types: ${siam["Alert types"]}\n`;
      info += `❏ NFC: ${siam["NFC"]}\n`;
      info += `❏ Infrared port: ${siam["Infrared port"]}\n`;
      info += `❏ Radio: ${siam["Radio"]}\n`;
      info += `❏ OTG: ${siam["OTG"]}\n`;
      info += "╰—————————\n\n";

      info += "╭「OTHERS」\n";
      info += `❏ SIM: ${siam["SIM"]}\n`;
      info += `❏ Pros:\n`;
      for (const pro of pros) {
        info += `   ⭔ ${pro}\n`;
      }
      info += `❏ Cons:\n`;
      for (const con of cons) {
        info += `   ⭔ ${con}\n`;
      }
      info += "╰—————————";
		
      const send = await getStreamFromURL(img);
        const msgSend = await message.reply({
  body: info,
  attachment: send
});

setTimeout(async () => {
  try {
    await message.unsend(msgSend.messageID);
  } catch (error) {
    console.log(error);
  }
}, 120000);
    } catch (error) {
      console.log(error);
      message.reply("error...\n Please try again later.👀🔧");
    }
  },
};
