const axios = require('axios');

module.exports = {
 config: {
 name: "generate3",
 aliases: ["gen3"],
 version: "1.1",
 author: "MILAN",
 countDown: 10,
 shortDescription: {
 en: "V4 Image Generator."
 },
 longDescription: {
 en: "Create image from your text with 4 model like midjourney."
 },
 category: "AI-IMAGE",
 role: 0,
 guide: {
 en: "{pn} <prompt> or {pn} <prompt> | <model>\Here's Available Models:\1]. Analog V1\2]. Anything V3\3]. Anything V4.5\4]. AbyssOrangeMix V3\5]. Deliberate V2\6]. Dreamlike Diffusion V1\7]. Dreamlike Diffusion V2\8]. Dreamshaper 5 baked vae\9]. Dreamshaper 6 baked vae\10]. Elldreth's Vivid\11]. Lyriel V1.5\12]. Lyriel V1.6\13]. MechaMix V1.0\14]. MeinaMix Meina V9\15]. Openjourney V4\16]. Portrait V1\17]. Realistic Vision V1.4\18]. Realistic Vision V2.0\19]. ReV Animated V1.2.2\20]. SDV1.4\21]. SDV1.5\22]. Shonin's Beautiful People V1.0\23]. TheAlly's Mix\24]. Timeless V1"
 }
 },

 onStart: async function ({ api, event, args, message }) {
 const [promptPart, modelPart] = args.join(" ").split("|").map(part => part.trim());

 if (!promptPart) return message.reply("Add something your prompt");

 message.reply("✅| Creating your Imagination...", async (err, info) => {
 let ui = info.messageID;

 try {
 let apiUrl = `https://image.restfulapi.repl.co/generatev4?prompt=${encodeURIComponent(promptPart)}`;
 if (modelPart) {
 apiUrl += `&model=${encodeURIComponent(modelPart)}`;
 }

 const response = await axios.get(apiUrl);
 const img = response.data.combinedImageUrl;
 message.unsend(ui); // Unsend the "Creating your Imagination" message

 message.reply({
 body: "Here's your imagination 🖼. Please reply with the image number (1, 2, 3, 4) to get the corresponding image in high resolution.",
 attachment: await global.utils.getStreamFromURL(img)
 }, async (err, info) => {
 let id = info.messageID;
 global.GoatBot.onReply.set(info.messageID, {
 commandName: this.config.name,
 messageID: info.messageID,
 author: event.senderID,
 imageUrls: response.data.imageUrls // Store the imageUrls in the onReply data
 });
 });
 } catch (error) {
 console.error(error);
 api.sendMessage(`Error: ${error}`, event.threadID);
 }
 });
},


 onReply: async function ({ api, event, Reply, usersData, args, message }) {
 const reply = parseInt(args[0]);
 const { author, messageID, imageUrls } = Reply;
 if (event.senderID !== author) return;
 try {
 if (reply >=1 && reply <= 4) {
 const img = imageUrls[`image${reply}`];
 message.reply({ attachment: await global.utils.getStreamFromURL(img) });
 } else {
 message.reply("Invalid image number. Please reply with a number between 1 and 4.");
 }
 } catch (error) {
 console.error(error);
 api.sendMessage(`Error: ${error}`, event.threadID);
 }
 message.unsend(Reply.messageID);
 },
};