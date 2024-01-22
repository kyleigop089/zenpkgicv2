const https = require('https');
const { getStreamFromURL } = global.utils;

var config = { 
  name: "bard", 
  version: "1.0", 
  author: "Finn fetcher", 
  countDown: 5, 
  role: 0, 
  shortDescription: { en: "Generate AI response Bard\n", }, 
  longDescription: { en: "Generate AI response Bard\n", }, 
  category: "ai", 
  guide: { en: "{n} [prompt]", 
   }, 
};

const onStart = ({ message }) => message.send("This commands do not require a prefix. 😒");

const onChat = async ({ api, message, event }) => {
  if (!event.isGroup) return;

  const input = event.body;
  const mid = event.messageID;
  const id = event.senderID;

  const isBardCommand = ['bard','ai'].some(keyword => input && input.trim().toLowerCase().startsWith(keyword));

  if (isBardCommand) {
    const data = input.split(" ");
    data.shift();
    const prompt = data.join(" ");

    if (!prompt) {
      return message.reply(`Please provide a question. 😠`);
    }

    try {
      await message.send('✨ 𝗕𝗮𝗿𝗱-𝗔𝗜 is thinking...');
      api.setMessageReaction('🌝', mid, () => {}, true);
      const stopTyping = api.sendTypingIndicator(event.threadID);

      const options = {
        method: 'GET',
        hostname: 'celestial-dainsleif.onrender.com',
        path: `/bard?id=${id}&ask=${encodeURIComponent(prompt)}`,
      };

      const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', async () => {
          stopTyping();
          const result = JSON.parse(data);

          let content = result.content.trim();
          let attachment = [];

          if (result.links && result.links.length > 0) {
            const img = result.links;

            for (let lk of img) {
              try {
                const st = await getStreamFromURL(lk);
                if (st) {
                  attachment.push(st);
                }
              } catch (error) {
                console.error(`error: ${lk}`);
              }
            }
          }

          await message.reply({
            body: content,
          });

          message.send({ attachment: attachment });
        });
      });

      req.on('error', (error) => {
        stopTyping();
        console.error("API Error:", error);
        message.send("error. 🗿👍");
      });

      req.end();
    } catch (error) {
      stopTyping();
      console.error("🗿:", error);
      message.send("Sorry, error 🗿👍");
    }
  }
};

module.exports = { config, onStart, onChat };
