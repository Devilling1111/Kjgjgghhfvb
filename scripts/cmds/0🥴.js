const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "rb4",
    version: "1.0",
    author: "RB-BADOL-KHAN",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "🥺":
          message.reply({
            body: "╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\n🫰অবাক হয়ার  কিছুই নাই জান চৌধুরী তোমার দুলাভাই🫂\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯",
            attachment: fs.createReadStream("scripts/cmds/Jan Chowdhury/obak.mp3"),
          });
          await api.setMessageReaction("🫂", event.messageID, event.threadID, api);
        break;
case "🤣":
          message.reply({
            body: "╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\n🤦‍♂এখানে হাহা না দিয়া জান চৌধুরীর ইনবক্সে জা 🤣🫡🫰\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯",
            attachment: fs.createReadStream("scripts/cmds/Jan Chowdhury/haha.mp3"),
          });
          await api.setMessageReaction("😡", event.messageID, event.threadID, api);
   case "🥴":
          message.reply({
            body: "╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\n🫶চোরের মত ভেটকাস কেন উঠটা খাবি নাকি🫡🫰\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯",
            attachment: fs.createReadStream("scripts/cmds/Jan Chowdhury/cor.mp3"),
          });
          await api.setMessageReaction("😠", event.messageID, event.threadID, api);
case "@Alex Jan Chowdhury":
          message.reply({
            body: "\n\n╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\n🫶জান চৌধুরী কে মেনশন না দিয়া একটা gf দে🌝🫡🫰\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯",
            attachment: fs.createReadStream("scripts/cmds/Jan Chowdhury/JAN-CHOWDHURY.mp3"),
          });
          await api.setMessageReaction("💋", event.messageID, event.threadID, api);
  case "🙄":
message.reply({
body: "╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\n🫶🫰এই উপরে কি দেখো আমি এই দিকে🫤🫰\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯",
            attachment: fs.createReadStream("scripts/cmds/Jan Chowdhury/uporeki.mp3"),
          });
          await api.setMessageReaction("🫡", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};
