module.exports = {
    config: {
        name: "patrick",
        version: "1.0.1",
        author: "Deku | converted by Xyron",
        countdown: 0,
        role: 0,
        shortDescriptionescription: "Patrick",
        longDescription: "Patrick",
        category: "...",
        usages: "/uid/reply/mention"
    },
    onStart: async ({ api, event, args }) => {
        const fs = require("fs");
        const request = require("request");
        const { threadID, messageID, senderID, body } = event;
        let p = __dirname + '/cache/patrick.png';

        let id;
        if (args.join().indexOf('@') !== -1) {
          id = Object.keys(event.mentions);
        } else {
          id = args[0] || senderID;
        }
        
        if (event.type == "message_reply") {
          id = event.messageReply.senderID;
        }

        const callback = () => {
          api.sendMessage({ attachment: fs.createReadStream(p) }, threadID, () => fs.unlinkSync(p), messageID);
        };

        request(encodeURI(`https://free-api.ainz-sama101.repl.co/canvas/patrick?uid=${id}`))
          .pipe(fs.createWriteStream(p))
          .on('close', () => callback());
    }
};