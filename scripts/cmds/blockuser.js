const axios = require('axios');
const fs = require('fs');

module.exports = {
  config: {
    name: "blockuser",
    version: "1.0",
    author: "Kylepogi",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "ADMIN",
    guide: "{pn}"
  },
  onStart: async function ({ api, event, args }) {
    const [action, userID] = args;
    if (!action || !userID) return api.sendMessage("Please provide both action and user ID.", event.threadID);
    if (action === "list") {
      try {
        const response = await axios.get(`https://graph.facebook.com/v12.0/me/blocked?access_token=${api.getCurrentAccessToken()}`);
        const blockedUsers = response.data.data;
        const blockedUserIDs = blockedUsers.map(user => user.id);
        return api.sendMessage(`💁🏻‍♂️ 𝗟𝗶𝘀𝘁 𝗼𝗳 𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘂𝘀𝗲𝗿𝘀:\n${blockedUserIDs.join(", ")}`, event.threadID);
      } catch (error) {
        console.error('⛔ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️Failed to fetch blocked users:', error.message);
        return api.sendMessage("⛔ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️An error occurred while fetching the list of blocked users.", event.threadID);
      }
    }
    
    const blockAction = action.toLowerCase() === "unblock" ? "unblock" : "block";
    try {
      const response = await axios.post(`https://graph.facebook.com/v12.0/me/${blockAction}?access_token=${api.getCurrentAccessToken()}&user=${userID}`);
      if (response.data.success) {
        return api.sendMessage(`✅ 𝗕𝗟𝗢𝗖𝗞𝗘𝗗 𝗨𝗦𝗘𝗥 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬!!\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️User with ID ${userID} has been ${blockAction}ed`, event.threadID);
      } else {
        return api.sendMessage(`⛔ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️Failed to ${blockAction} user.`, event.threadID);
      }
    } catch (error) {
      console.error(`Failed to ${blockAction} user:`, error.message);
      return api.sendMessage(`⛔ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️An error occurred while ${blockAction}ing the user.`, event.threadID);
    }
  }
};
