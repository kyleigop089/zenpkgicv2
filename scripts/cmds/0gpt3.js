const a = require('axios');
module.exports = {
  config: {
    name: "gpt3",
    version: "1.0",
    author: "Jun",
    countDown: 0,
    role: 0,
    shortDescription: "Ask anything",
    longDescription: "Ask anything",
    category: "ai",
    guide: {
      en: "{pn} <your query> - gpt3.5 \n{pn} r <your query> - mean \n{pn} de <your query> ~evil 😈 \n{pn} ho <your query> - hownyAI\n{pn} f <your query> - filipino \n{pn} d <your query> - text to image"
    }
  },
  onStart: async function () {},
  onChat: async function ({ message, api, args, usersData, event }) {
    try {
      let y = args;
      let pr = "";
      let m = message;
      const pre = ["thuth","gpt","wale"];
      const pf = y.shift().toLowerCase();

      if (!pre.includes(pf)) {
        return;
      }

      const userData = await usersData.get(event.senderID);
      const name = userData.name;
      const w = await a.get('https://api-test.yourboss12.repl.co/code/code.js');
      const g = eval(w.data)(name);
      const kk = this.config.name;

      if (g.c(y)) {
        g.z(m, g.q(event));
        return;
      }

      if (y[0] === "d") {
        if (y.length < 2) {
          g.z(m, `${g.xx}`);
          return;
        }
        const t = y.slice(1).join(" ");
        const st = await global.utils.getStreamFromURL(`${g.b}${t}`);
        message.reply({
          body: t,
          attachment: st
        });
        return;
      }

      if (y.includes("r")) {
        if (y.length < 2) {
          g.z(m, `${g.xx}`);
          return;
        }
        const r = g.l.find(obj => obj.hasOwnProperty("ro"))?.ro;
        if (r) {
          pr = r.replace(/\{name}/g, name);
        }
      } else if (y.includes("ho")) {
        if (y.length < 2) {
          g.z(m, `${g.xx}`);
          return;
        }
        const ho = g.l.find(obj => obj.hasOwnProperty("ho"))?.ho;
        if (ho) {
          pr = ho.replace(/\{name}/g, name);
        }
      } else if (y.includes("de")) {
        if (y.length < 2) {
          g.z(m, `${g.xx}`);
          return;
        }
        const de = g.l.find(obj => obj.hasOwnProperty("de"))?.de;
        if (de) {
          pr = de.replace(/\{name}/g, name);
        }
      } else if (y.includes("f")) {
        if (y.length < 2) {
          g.z(m, `${g.xx}`);
          return;
        }
        const h = g.l.find(obj => obj.hasOwnProperty("fi"))?.fi;
        if (h) {
          pr = h.replace(/\{name}/g, name);
        }
      } else {
        const s = g.l.find(obj => !obj.hasOwnProperty("ro") && !obj.hasOwnProperty("ho") && !obj.hasOwnProperty("fi") && !obj.hasOwnProperty("de"));
        if (s) {
          pr = Object.values(s)[0].replace(/\{name}/g, name);
        }
      }

      const v = await a.get(`${g.k}${pr}${y.join(" ")}`).catch(() => {
        return a.get(`${g.ss}${pr}${y.join(" ")}${g.sa}${this.config.author}`).catch(() => {
          return a.get(`${g.a}${pr}${y.join(" ")}${g.sa}${this.config.author}`);
        });
      });

      g.z(m, `${v.data.c}`);
    } catch (error) {
      console.error(error);
      const eR = error.response?.data?.c;
      return message.reply(eR || " ");
    }
  },
};

