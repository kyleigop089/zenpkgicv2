module.exports = {
  config: {
    name: "listunloadcmd",
    aliases: ["lstuncmd", "luc", "listunlcmd"],
    category: "Utility",
    author: "Walex",
    role: 0,
    shortDescription: {
      en: "Lists all unloadable commands",
      tl: "Nililista ang lahat ng unloadable na utos",
    },
    longDescription: {
      en: "This command will list all the commands stored in the commandUnload list within the configCommands.json file.",
      tl: "Ang utos na ito ay maglilista ng lahat ng mga utos na nakaimbak sa listahan ng commandUnload sa loob ng file na configCommands.json.",
    },
    guide: {
      en: "{p}listUnloadCommands",
      tl: "{p}listUnloadCommands",
    },
  },
  onStart: async function ({ message, args, threadsData, usersData, api, commandName, role }) {
    const fs = require("fs");

    const configPath = "configCommands.json";

    // Function to read and parse the config file
    function readConfig() {
      return new Promise((resolve, reject) => {
        fs.readFile(configPath, "utf8", (err, data) => {
          if (err) {
            reject(err);
            return;
          }

          try {
            const config = JSON.parse(data);
            resolve(config);
          } catch (error) {
            reject(error);
          }
        });
      });
    }

    // Function to list the unload commands
    async function listUnloadCommands() {
      try {
        const config = await readConfig();
        const unloadCommands = config.commandUnload;

        if (!unloadCommands || !unloadCommands.length) {
          message.reply("No unload commands found in config file.");
          return;
        }

        let reply = "╔────⊢✭⊣────╗\n\n𝗟𝗶𝘀𝘁 𝗼𝗳 𝘂𝗻𝗹𝗼𝗮𝗱𝗮𝗯𝗹𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀: \n";
        unloadCommands.forEach((cmd) => {
          reply += `- ${cmd}\n`;
        });

        message.reply(reply);
      } catch (error) {
        console.error(error);
        message.reply("An error occurred while reading the config file.");
      }
    }

    listUnloadCommands();
  },
};