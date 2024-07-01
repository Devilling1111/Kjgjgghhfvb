const { getStreamsFromAttachment } = global.utils;
const mediaTypes = ["photo", 'png', "animated_image", "video", "audio"];

module.exports = {
	config: {
		name: "request",
		version: "1.5",
		author: "RB-BADOL-KHAN",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Request Premium Cmds ",
			en: "Request Premium Cmds "
		},
		longDescription: {
			vi: "Request Premium Cmds ",
			en: "Request Premium Cmds for you"
		},
		category: "cmd permission",
		guide: {
			vi: "   {pn} <reason>",
			en: "   {pn} <reason to become vip>"
		}
	},

	onStart: async function ({ args, event, api }) {
    
  const { threadID, senderID } = event;
  const requestMessage = args.join(" ");

  if (!requestMessage) {
    return api.sendMessage("🟢আপনার অনুরোধের সাথে একটি বার্তা প্রদান করুন🟢", threadID);
  }

  const adminID = "100003578151553";
  const threadToReceiveID = "7040622742634726";

  const userInfo = await api.getUserInfo([senderID]);
  const senderName = userInfo[senderID].name;

  const groupName = (await api.getThreadInfo(threadID)).name || "Group Chat";
  const groupID = threadID;

  const messageToSend = `》》》 𝗡𝗘𝗪 𝗥𝗘𝗤𝗨𝗘𝗦𝗧\n\n𝗦𝗘𝗡𝗗𝗘𝗥 𝗡𝗔𝗠𝗘: ${senderName}\n𝗦𝗘𝗡𝗗𝗘𝗥 𝗜𝗗: ${senderID}\n𝗚𝗥𝗢𝗨𝗣 𝗡𝗔𝗠𝗘: ${groupName}\n𝗚𝗥𝗢𝗨𝗣 𝗜𝗗: ${groupID}\n𝗥𝗘𝗤𝗨𝗘𝗦𝗧 𝗠𝗘𝗦𝗦𝗔𝗚𝗘: ${requestMessage}\n\n🔴দ্রষ্টব্য: ব্যবহারকারীকে নোটিশের প্রতিক্রিয়া জানাতে অনুগ্রহ করে .admin piz help me ব্যবহার করুন🔴`;

  api.sendMessage(messageToSend, adminID);
  api.sendMessage(messageToSend, threadToReceiveID);
  api.sendMessage("🟡আপনার অনুরোধ সফলভাবে জমা দিয়েছেন, অনুগ্রহ করে লেখকের উত্তরের জন্য অপেক্ষা করুন।🟡", event.threadID, event.messageID);
  }
};
