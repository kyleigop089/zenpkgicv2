const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    aliases: ['sendfile'],
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = [
      "100008485152397",
      "100043906329594",
      "100086487787844",];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("- Bitch, Only my Boss ✪𝒑𝒓𝒊𝒏𝒄𝒆.𝒘𝒂𝒍𝒆𝒙⁠✪⁠ can use this👿", event.threadID, event.messageID);
    }

    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("Please provide a file name.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};