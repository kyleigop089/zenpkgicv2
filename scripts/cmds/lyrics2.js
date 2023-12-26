const axios = require("axios");
const google = require("googlethis");

module.exports = {
  config: {
    name: "lyrics2",
    aliases: ["lyric2", "ly2"],
    version: "1.0",
    author: "walex",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Get lyrics for a song",
    },
    longDescription: {
      en: "This command allows you to get the lyrics for a song. Usage: !lyrics <song name artist>",
    },
    category: "music",
    guide: {
      en: "{prefix}lyrics <song name artist>",
    },
  },

  onStart: async function ({ api, event, args }) {
    let text = args.join(" ");
    if (!text) return api.sendMessage("Missing input", event.threadID, event.messageID);

    try {
      const res = await google.search("Lyrics " + text);
      const lyrics = res.knowledge_panel?.lyrics;

      if (lyrics) {
        // You can parse the lyrics here to extract title, artist, and image if needed.
        // Example parsing code, adjust as needed:
        const lines = lyrics.split('\n');
        const title = lines[0]; // Assuming the first line is the title.
        const artist = lines[1]; // Assuming the second line is the artist.

        api.sendMessage(
          `•------•°•♪Lyrics♪•°•------•\n${lyrics}\n•------•°•♪The End♪•°•------•`,
          event.threadID,
          event.messageID
        );
      } else {
        api.sendMessage("Lyrics not found for that song.", event.threadID, event.messageID);
      }
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while fetching lyrics.", event.threadID, event.messageID);
    }
  },
};
