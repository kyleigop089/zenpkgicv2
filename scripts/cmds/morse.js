const textToMorse = (text) => {
  const morseCodeMap = {
    A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
    M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
    "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
    " ": "/",  // Add forward slash mapping for space
  };

  return text.toUpperCase().split("").map(char => morseCodeMap[char] || char).join(" ");
};

const morseToText = (morseCode) => {
  const morseCodeMap = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K",
    ".-..": "L", "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", "...-": "V",
    ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z",
    ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", "-----": "0",
    "/": " ",  // Add forward slash mapping for space
  };

  return morseCode.split(" ").map(code => morseCodeMap[code] || code).join("");
};

module.exports = {
  config: {
    name: "morse",
    aliases: [],
    version: "1.0.0",
    author: "Lance Ajiro",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Convert text to Morse code and decode Morse code."
    },
    longDescription: {
      en: "Usage: [text | -decode MorseCode]"
    },
    category: "Tools 🛠️",
    guide: {
      en: "Guide for using the command."
    }
  },
  onStart: async function ({ api, event, args }) {
    try {
      const input = args.join(" ");

      if (input.startsWith("-decode")) {
        const morseCode = input.substring(8);
        const decodedText = morseToText(morseCode);

        api.sendMessage(`${decodedText}`, event.threadID, event.messageID);
      } else {
        if (input) {
          const morseCode = textToMorse(input);
          api.sendMessage(`${morseCode}`, event.threadID, event.messageID);
        } else {
          api.sendMessage("Please type a text to convert to Morse code.", event.threadID, event.messageID);
        }
      }
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while processing the command.", event.threadID);
    }
  }
};
// Import the morse module
const morse = require('morse');