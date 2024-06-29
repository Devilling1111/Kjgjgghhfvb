const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "rb3",
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
        case "🤬":
          message.reply({
            body: "╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\n🫰এখানে রাগ না দেখায়ে মিয়া খালিফার ভিডিও দেখ জা🫂\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯",
            attachment: fs.createReadStream("scripts/cmds/Jan Chowdhury/rag.mp3"),
          });
          await api.setMessageReaction("🫂", event.messageID, event.threadID, api);
        break;
case "🍆":
          message.reply({
            body: "╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\n🤦‍♂️চিচি এই সব কি🫡🫰\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯",
            attachment: fs.createReadStream("scripts/cmds/Jan Chowdhury/cc.mp3"),
          });
          await api.setMessageReaction("😡", event.messageID, event.threadID, api);
   case "🥴":
          message.reply({
            body: "╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\n🫶চোরের মত ভেটকাস কেন উঠটা খাবি নাকি🫡🫰\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯",
            attachment: fs.createReadStream("scripts/cmds/Jan Chowdhury/cor"),
          });
          await api.setMessageReaction("😠", event.messageID, event.threadID, api);
case "💋":
          message.reply({
            body: "\n\n╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮🫶কিস দিওনা করুনা হবে🫡🫰\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯",
            attachment: fs.createReadStream("scripts/cmds/Jan Chowdhury/kiss.mp3"),
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
