module.exports = {
  config: {
    name: "bday",
    version: "1.0",
    author: "Samir",
    aliases: ["birthday"],
    role: 0,
    category: "dates",
    shortDescription: "See Admin's Birthday",
    longDescription: "Admin Birthday Countdowns",
    guide: {
      vi: "{p}{n}",
      en: "{p}{n}"
    } 
  },

  onStart: async function ({ event, api }) {
    // Update the date to the next birthday year
    const targetDate = "June 19, 2024 00:00:00";
    const t = Date.parse(targetDate) - Date.now();
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    // Check if the countdown is complete
    if (t <= 0) {
      return api.sendMessage(`It's already the Admin 𝙿𝚛𝚒𝚗𝚌𝚎 𝚆𝚊𝚕𝚎𝚡's birthday!`, event.threadID, event.messageID);
    } else {
      return api.sendMessage(`「Remaining Days For My Boss 𝙿𝚛𝚒𝚗𝚌𝚎 𝚆𝚊𝚕𝚎𝚡 󱢏」\n「 » - ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds « 」`, event.threadID, event.messageID);
    }
  }
}