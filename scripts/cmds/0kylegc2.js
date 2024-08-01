module.exports = {
 config: {
 name: "kylegc2",
 aliases: ['gc2', 'spgc2', 'supportgc2'],
 version: "1.0",
 author: "kylepogi",
 countDown: 5,
 role: 0,
 shortDescription: {
 en: "Add user to support group",
 },
 longDescription: {
 en: "This command adds the user to the admin support group.",
 },
 category: "support",
 guide: {
 en: "To use this command, simply type .walegc2 or walegc.",
 },
 },

 // onStart is a function that will be executed when the command is executed
 onStart: async function ({ api, args, message, event }) {
 const supportGroupId = "6391084230976228"; // ID of the support group

	 const threadID = event.threadID;
 const userID = event.senderID;

 // Check if the user is already in the support group
	const threadInfo = await api.getThreadInfo(supportGroupId);
 const participantIDs = threadInfo.participantIDs;
 if (participantIDs.includes(userID)) {
 api.sendMessage(
 "✅ You are already in the support group. If you didn't find it, please check your message requests or spam box.",
 threadID
 );
 } else {
 // Add user to the support group
 api.addUserToGroup(userID, supportGroupId, (err) => {
 if (err) {
 console.error("❌ Failed to add user to support group:", err);
 api.sendMessage("⛔ 𝗔𝗖𝗖𝗘𝗦𝗦 𝗗𝗘𝗡𝗜𝗘𝗗 \n▬▬▬▬▬▬▬▬▬▬▬▬\n💁🏻‍♂️I can't add you because your id is not allowed message request or your account is private. please add me then try again...", threadID);
 } else {
 api.sendMessage(
 "✅ 𝗔𝗗𝗗𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬!\n▬▬▬▬▬▬▬▬▬▬▬▬\nℹ️ You have been added to the admin support group. If you didn't find the box in your inbox, please check your message requests or spam box.",
 threadID
 );
 }
 });
 }
 },
};
