module.exports = {
  config: {
    name: "anime3",
    version: "1.0",
    author: "otinxsandip",
    countDown: 2,
    role: 0,
    shortDescription: "sends u pic of anime",
    longDescription: "sends u pics of anim",
    category: "anime",
    guide: "{pn}"
  },

  onStart: async function ({ message, args }) {
    let images = ["https://i.imgur.com/jGrZtYL.jpg","https://i.imgur.com/BAou79d.jpg","https://i.imgur.com/LDTK8Uo.jpg","https://i.imgur.com/5xhwFUP.jpg","https://i.imgur.com/SqDocl1.jpg","https://i.imgur.com/DrOY0YK.jpg","https://i.imgur.com/XudoarI.jpg","https://i.imgur.com/USZf7aQ.jpg","https://i.imgur.com/OmqPeS1.jpg","https://i.imgur.com/Z2kqw4z.jpg","https://i.imgur.com/sXCnxUP.jpg","https://i.imgur.com/VPhWI6X.jpg","https://i.imgur.com/b1NoLjv.jpg","https://i.imgur.com/JEApt1E.jpg","https://i.imgur.com/dXgzM76.jpg","https://i.imgur.com/HFeUrla.jpg","https://i.imgur.com/ibuzSX9.jpg","https://i.imgur.com/EoEk4Nx.jpg","https://i.imgur.com/saTJDBI.jpg","https://i.imgur.com/Qa9ThQK.jpg","https://i.imgur.com/uAYQ7LH.jpg","https://i.imgur.com/5EzUOsM.jpg","https://i.imgur.com/yYfxnLC.jpg","https://i.imgur.com/EzYMp5d.jpg","https://i.imgur.com/AaL9LAM.jpg","https://i.imgur.com/xM8bTgF.jpg","https://i.imgur.com/NlRCppU.jpg","https://i.imgur.com/ajkdccw.jpg"];

    if (args[0] === "متعددة") {
      for (let i = 0; i < 4; i++) {
        let img = images[Math.floor(Math.random() * images.length)];
        message.send({
          attachment: await global.utils.getStreamFromURL(img)
        });
      }
    } else {
      let img = images[Math.floor(Math.random() * images.length)];
      message.send({
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
}