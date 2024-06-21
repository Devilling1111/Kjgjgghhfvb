module.exports.config = {
	name: "spamkick",
	version: "1.0.1",
	role: 0,
	author: "RB-BADOL-KHAN",
	description: "autokick",
   category: "media",
	usages: "spamkick",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStar = function ({ api, event, args }) {
  const cmd = args[0]?.toLowerCase();
  const mode = args[1]?.toLowerCase();

  if (cmd === "on") {
    spamDetectionEnabled = true;
    api.sendMessage("🟢 Spam detection is now enabled.", event.threadID, event.messageID);
  } else if (cmd === "off") {
    spamDetectionEnabled = false;
    api.sendMessage("🔴 Spam detection is now disabled.", event.threadID, event.messageID);
  } else {
    api.sendMessage("Invalid usage. Use '/spamkick2 on' to enable and '/spamkick2 off' to disable spam detection.", event.threadID, event.messageID);
  }
};

module.exports.onChat = function ({ api, event }) {
  const { threadID, messageID, senderID, isAdmin } = event;

  if (!spamDetectionEnabled) {
    return;
  }

  if (!messageCounts[threadID]) {
    messageCounts[threadID] = {};
  }

  if (!messageCounts[threadID][senderID]) {
    messageCounts[threadID][senderID] = {
      count: 1,
      timer: setTimeout(() => {
        delete messageCounts[threadID][senderID];
      }, spamInterval),
    };
  } else {
    messageCounts[threadID][senderID].count++;
    if (messageCounts[threadID][senderID].count > spamThreshold) {
      api.removeUserFromGroup(senderID, threadID); 
      api.sendMessage({
        body: "🛡️ | Detected spamming. The user has been kicked from the group.",
        mentions: [{
          tag: senderID,
          id: senderID,
        }],
      }, threadID, messageID);
    }
  }
};
