let messageCounts = {};
const spamThreshold = 5;
const spamInterval = 60000;

module.exports = {
  config: {
    name: "spamkick",
    aliases: [],
    version: "1.0",
    author: "RB-BADOL-KHAN",
    countDown: 5,
    role: 0,
    shortDescription: "Automatically detect and act on spam",
    longDescription: "Automatically detect and act on spam",
    category: "admin",
    guide: "{pn}",
  },

  onStart: async function ({ api, event, args }) {
    api.sendMessage("This command functionality kicks the user when they are spamming in group chats", event.threadID, event.messageID);
 },
  onChat: async function ({ api, event }) {
    const { threadID, messageID, senderID } = event;
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
        api.sendMessage({ body: "🛡️ | Detected spamming. The bot will remove the user from the group", attachment: await global.utils.getStreamFromURL("https://i.imgur.com/9MyA1TI.jpeg") }, threadID, messageID);
          api.removeUserFromGroup(senderID, threadID);
      }
    }
  }
};
