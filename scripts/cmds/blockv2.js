const axios = require("axios");

module.exports = {
  config: {
    name: "blockv2",
    version: "1.0",
    author: "Kylepogi",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "owner",
    guide: "{pn}"
  },
  onStart: async function ({ api, event, args }) {
    if (args.join().includes('@')) {
      var id = Object.keys(event.mentions);
    } else {
      var id = args[1];
    }

    if (args.join().includes(".com/")) {
      const res = await axios.get(`https://api.reikomods.repl.co/sus/fuid?link=${args[1]}`);
      id = res.data.result || args[1];
    }

    if (!id) {
      return api.sendMessage(`ℹ️ 𝗪𝗿𝗼𝗻𝗴 𝗳𝗼𝗿𝗺𝗮𝘁.\n▬▬▬▬▬▬▬▬▬▬▬▬\n💁🏻‍♂️ 𝗨𝘀𝗮𝗴𝗲: block [uid/fb link/mention] (to block user)\n${this.config.name} unblock [uid] (to unblock user)`, event.threadID, event.messageID);
    }
    
    if (!args[1]) {
      return api.sendMessage(`ℹ️ 𝗪𝗿𝗼𝗻𝗴 𝗳𝗼𝗿𝗺𝗮𝘁.\n▬▬▬▬▬▬▬▬▬▬▬▬\n💁🏻‍♂️ 𝗨𝘀𝗮𝗴𝗲: block [uid] (to block user)\n${this.config.name} unblock [uid/fb link/mention] (to unblock user)`, event.threadID, event.messageID);
    }

    if (args[0] === "block") {
      api.changeBlockedStatus(id, true, (err) => {
        if (err) {
          return api.sendMessage(`${err}`, event.threadID, event.messageID);
        } else {
          return api.sendMessage("✅ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘂𝘀𝗲𝗿\n▬▬▬▬▬▬▬▬▬▬▬▬\n block kita kc, gago, tangina, bitch, mother fucking shit, asshole, jerk, indecent human being, hampas lupa, mukang lupa, tubol, letse, tangina ulit, pukingina, thankyouu!", event.threadID, event.messageID);
        }
      });
    } else if (args[0] === "unblock") {
      api.changeBlockedStatus(id, false, (err) => {
        if (err) {
          return api.sendMessage(`${err}`, event.threadID, event.messageID);
        } else {
          return api.sendMessage("✅ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘂𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘂𝘀𝗲𝗿\n▬▬▬▬▬▬▬▬▬▬▬▬\n💁🏻‍♂️ ni unblock kita kc iLoveYou", event.threadID, event.messageID);
        }
      });
    }
  }
};
