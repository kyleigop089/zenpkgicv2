const fs = require("fs");
const { writeFileSync } = require("fs-extra");

module.exports = {
  config: {
    name: "pokemon2",
    version: "1.2",
    author: "Shikaki & Ausum for data & Special thanks to Samir for the idea and basic code structure!",
    countDown: 5,
    role: 0,
    shortDescription: "Run the Pokemon bot",
    longDescription: "Run the Pokemon bot and play a simple Pokemon game",
    category: "🐍 Pokemon",
    guide: "{pn}\nThis will tell you whether pokebot is on or off in that gc.\n\n{pn} {{[on | off]}}\nThis will either turn on or off the pokebot in that gc.",
    message: "🐍 Use {pn}pokemon pokebot on or off to start using the bot.",
  },

  onStart: async function ({ message, args, event, threadsData, prefix, api }) {
    if (!args[0]) {
      return message.reply(module.exports.config.message.replace(/{pn}/g, prefix));
    }
    const command = args[0];
    switch (command) {
      case "pokebot":
        try {
          if (!args[1]) {
            const pokebot = await threadsData.get(event.threadID, "settings.pokebot");
            if (pokebot) {
              return message.reply("✅ Pokebot is already enabled. Use 'pokemon pokebot off' to disable it.");
            } else {
              return message.reply("❌ Pokebot is currently disabled. Use 'pokemon pokebot on' to enable it.");
            }
          }

          if (!["on", "off"].includes(args[1])) return message.reply("Turn on or off 🌝?");

          await threadsData.set(event.threadID, args[1] === "on", "settings.pokebot");

          return message.reply(`🐍✅ Pokebot has been ${args[1] === "on" ? "enabled" : "disabled"}`);
        } catch (error) {
          console.error("Error in onStart:", error);
          message.reply("An error occurred. Please try again later.");
        }
        break;

      case "pokeinfo":
        if (args[1]) {
          const pokebot = await threadsData.get(event.threadID, "settings.pokebot");
          if (!pokebot) {
            return message.reply("Pokebot is currently disabled. To use 'pokeinfo', you need to turn on pokebot using 'pokemon pokebot on'.");
          }

          const pokemonName = args[1].toLowerCase();
          const pokos = JSON.parse(fs.readFileSync("pokos.json", "utf8"));
          const pokemonData = pokos.find((pokemon) => pokemon.name.toLowerCase() === pokemonName);

          if (pokemonData) {
            try {
              const image = pokemonData.image || "";
              if (typeof image === "string" && image.trim() !== "") {
                const form = {
                  body: `❏ Name: ${pokemonData.name}\n❏ Type: ${pokemonData.type}\n❏ HP: ${pokemonData.HP}\n❏ Attack: ${pokemonData.Att}\n❏ Defense: ${pokemonData.Def}\n❏ Attack Speed: ${pokemonData["Attack speed"]}\n❏ Defense Speed: ${pokemonData["Defence speed"]}\n❏ Speed: ${pokemonData.Speed}\n❏ Abilities: ${pokemonData.Abilities}`,
                  attachment: await global.utils.getStreamFromURL(image),
                };
                return message.reply(form);
              } else {
                return message.reply("No valid image found for this Pokémon.");
              }
            } catch (e) {
              console.error(e);
              return message.reply("Server busy. Please try again later.");
            }
          } else {
            return message.reply(`Pokemon with the name "${args[1]}" not found.`);
          }
        } else {
          return message.reply("Use 'pokemon pokeinfo [pokemon_name]' to get information about a Pokemon.");
        }
        break;

      case "pokedex":
        const pokebot = await threadsData.get(event.threadID, "settings.pokebot");
        if (!pokebot) {
          return message.reply("Pokebot is currently disabled. To use 'pokedex', you need to turn on pokebot using 'pokemon pokebot on'.");
        }

        const pokedbPath = 'pokedb.json';
        let pokedb;

        if (fs.existsSync(pokedbPath)) {
          pokedb = JSON.parse(fs.readFileSync(pokedbPath, 'utf8'));
        } else {
          pokedb = { users: {} };
          fs.writeFileSync(pokedbPath, JSON.stringify(pokedb, null, 2), 'utf8');
        }

        const senderID = event.senderID;

        let pageNumber = args[1] ? parseInt(args[1]) : 1;

        if (pageNumber < 1) {
          return message.reply("You have entered an invalid page number. Please try again.");
        }

        let userPokedex = pokedb.users[senderID]?.pokemons || [];

        userPokedex = userPokedex.sort((a, b) => a.localeCompare(b));
        const totalPages = Math.max(Math.ceil(userPokedex.length / 20), 1);

        if (userPokedex.length === 0) {
          return message.reply("You don't have any Pokemon in your Pokédex. 😔");
        }

        if (pageNumber > totalPages) {
          return message.reply("You don't have any more Pokemon to show. 😔");
        }

        const formattedPokemonNames = formatMessage(userPokedex, pageNumber, totalPages);
        const reply = `🔥 Your Pokédex:\n\n${formattedPokemonNames}`;
        return message.reply(reply);
        break;

        case "roam":
          api.getUserInfo(event.senderID, async (err, userInfo) => {
            if (err) {
              return message.reply("Failed to retrieve user information.");
            }
        
            let roamEmoji;
            let genderText;
        
            switch (userInfo[event.senderID].gender) {
              case 1:
                roamEmoji = "🚶‍♀️";
                break;
              case 2:
                roamEmoji = "🚶‍♂️";
                break;
              default:
                roamEmoji = "👽";
            }
        
            message.reply(`${roamEmoji} Roaming in the wild...`);
        
            setTimeout(async () => {
              const randomNumber = Math.floor(Math.random() * 10) + 1;
        
              if (randomNumber <= 9) {
                const pokos = JSON.parse(fs.readFileSync("pokos.json", "utf8"));
                const randomPokemon = pokos[Math.floor(Math.random() * pokos.length)];
        
                if (randomPokemon) {
                  // You have encountered a wild Pokémon
                  message.reply("‼️ You have encountered a wild Pokémon!");
                  if (randomPokemon.image) {
                    const form = {
                      attachment: await global.utils.getStreamFromURL(randomPokemon.image),
                    };
                    message.reply(form);
                  }
                }
              } else {
                // No wild Pokémon encountered
                message.reply("🌳 You continue your peaceful roam, without encountering any wild Pokémon.");
              }
            }, 2000);
          });
          break;
        
        default:
        }
        
  },

  onChat: async function ({ message, args, event, threadsData }) {
  },
};

function formatMessage(pokemonArray, pageNumber, totalPages) {
  const maxDisplay = 20;
  const startIndex = (pageNumber - 1) * maxDisplay;
  const endIndex = startIndex + maxDisplay;
  const pokemonSubset = pokemonArray.slice(startIndex, endIndex);

  let formattedNames = '';
  const sortedPokemons = pokemonSubset.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < sortedPokemons.length; i++) {
    const pokemonName = sortedPokemons[i];
    formattedNames += `${startIndex + i + 1}. ${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}\n`;
  }

  if (pageNumber < totalPages) {
    formattedNames += `\nFor more Pokemon, use "pokedex ${pageNumber + 1}".`;
  } else {
    formattedNames += "\nYou don't have any more Pokemon to show. 😔";
  }

  formattedNames += ` (Page ${pageNumber}/${totalPages})`;

  return formattedNames;
}