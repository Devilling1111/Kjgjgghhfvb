module.exports = {
  config: {
    name: "supportgc",
    aliases: ["support", "gc", "gojogc", "joingc"],
    version: "1.0",
    author: "RB-BADOL-KHAN",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Add to Supportgc for admin support and approval" 
    },
    longDescription: { 
      en: "Join the support group chat"
    },
    category: "𝐒𝐔𝐏𝐏𝐎𝐑𝐓-𝐆𝐔𝐏",
    guide: {
      en: "{pn}"
     }
  },
  onStart: async function({ api, event }) {
    const supportGroupId = "7040622742634726";

    if (event.threadID === supportGroupId) {
      api.sendMessage("⚠ | You are already in the support group.", event.threadID);
    } else {
      try {
        await api.addUserToGroup(event.senderID, supportGroupId);
        api.sendMessage("✅ | You have been added to the support group.", event.threadID);
      } catch (error) {
        if (error.message === "Error: Add user to group: Action blocked") {
          api.sendMessage("❌ | Sorry, you can't be added to the group because of group settings.", event.threadID);
        } else {
          console.error(error);
          api.sendMessage("❌ | An error occurred while processing your request.", event.threadID);
        }
      }
    }
  }
};
