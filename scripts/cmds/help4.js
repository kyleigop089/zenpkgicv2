const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "help4",
		aliases: ["h4","tulong"],
    version: "1.0",
    author: "Jun",
    countDown: 5,
    role: 0,
    shortDescription: "This command provides help information.",
		longDescription: "this command provides help3 information ",
		category: "info",
		guide: "{pn} {{<command>}}"
  },

  onStart: async function({ message, args }) {
    const urls = JSON.parse(fs.readFileSync('walex.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Africa/Lagos');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    let messageText = "|──────𝘾𝙝𝙖𝙩 𝘽𝙤𝙩───⭓\n|•ai •sim •gpt •\n|\n|──── 𝙏𝙚𝙭𝙩 𝙩𝙤 𝙄𝙢𝙖𝙜𝙚───⭓\n|•gpt draw •midjourney •imgine\n|\n|──𝙢𝙚𝙙𝙞𝙖 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧──⭓\n|----for images:\n|•gg •pin •imgsearch\n|\n|----For video:\n|•ytb -v [title of music or yt link]\n|•tik -v [tiktok link]\n|•videofb [fb video, stories link]\n|\n|---For audio:\n|•ytb -a [title of music or yt link]\n|•tik -a [tiktok link]\n|\n|──𝙁𝙤𝙧 𝙗𝙤𝙩 𝙖𝙙𝙢𝙞𝙣 𝙤𝙣𝙡𝙮──⭓\n|•anon •restart •update •approve\n|•admin [add, remove, list]\n|•botbio •eval •event •setrole \n| •user [ban [uid, @tag]] \n|•user search [name of user]\n|•thread -f •leave \n|\n|─────𝙉𝙨𝙛𝙬 18+─────⭓\n|•fuck •fuckv2 •hentai \n|•finger •xvideo\n|\n|───𝙀𝙣𝙩𝙚𝙧𝙩𝙖𝙞𝙣𝙢𝙚𝙣𝙩─────⭓\n|•hack •phub •pair •pairv1\n|•pairv3 •buttslap •ws •spank \n|•hugv2 •batslap •kiss\n|•ship •partner •google\n|\n|────𝙍𝙖𝙣𝙙𝙤𝙢 𝙩𝙚𝙭𝙩────⭓\n|•fact •advice •quote •quotes2\n|•jokes •trivia •thoughts\n|────────────⭓";
    if (args[0] === "2") {
      messageText = "|────𝘽𝙖𝙣𝙣𝙚𝙧───⭓\n|•Cover2 •Cover3 •avatar\n|•banner •mpanel\n|\n|────𝙂𝙧𝙤𝙪𝙥 𝙖𝙙𝙢𝙞𝙣──⭓\n|•filteruser •kick •ban •setrole\n| onlyadminbox[on, off]\n|\n────𝙂𝙖𝙢𝙚𝙨───⭓\n|•dhbc •guessnum •iqtest\n|\n|───𝙄𝙢𝙖𝙜𝙚──⭓\n|•meme •alime •moon\n|\n|────𝙏𝙤𝙤𝙡𝙨───⭓\n|•upt •info •system\n|•test •test2 •test3\n| •imgur •imgbb\n|\n|────𝙊𝙩𝙝𝙚𝙧𝙨───⭓\n|•baybayin •morse •translate \n|•lyrics •art";
    }

    message.reply({ 
      body: `${messageText}\ndate: ${date}\ntime: ${time}\nbot runs for: ${uptimeString}\n\ncontact admin if you need any help: 󱢏 𝚑𝚝𝚝𝚙𝚜://𝚠𝚠𝚠.𝚏𝚋.𝚌𝚘𝚖/𝚝𝚑𝚊𝚗𝚔𝚜.𝚏𝚘𝚛.𝚌𝚘𝚙𝚢𝚒𝚗𝚐 󱢏`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};