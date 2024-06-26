module.exports = {
  config: {
    name: "uid",
    version: "1.0",
    author: "RB-BADOL-KHAN",
    countDown: 60,
    role: 0,
    shortDescription: "Get fbuser information",
    longDescription: "Get fbuser information and uid",
    category: "image",
  },

   onStart: async function ({ event, message, usersData, api, args, getLang }) {
    let avt;
    const uid1 = event.senderID;
    const uid2 = Object.keys(event.mentions)[0];
    let uid;

    if (args[0]) {
      // Check if the argument is a numeric UID
      if (/^\d+$/.test(args[0])) {
        uid = args[0];
      } else {
        // Check if the argument is a profile link
        const match = args[0].match(/profile\.php\?id=(\d+)/);
        if (match) {
          uid = match[1];
        }
      }
    }

    if (!uid) {
      // If no UID was extracted from the argument, use the default logic
      uid = event.type === "message_reply" ? event.messageReply.senderID : uid2 || uid1;
    }

    api.getUserInfo(uid, async (err, userInfo) => {
      if (err) {
        return message.reply("Failed to retrieve user information.");
      }

      const avatarUrl = await usersData.getAvatarUrl(uid);

      // Gender mapping
      let genderText;
      switch (userInfo[uid].gender) {
        case 1:
          genderText = "Girl";
          break;
        case 2:
          genderText = "Boy";
          break;
        default:
          genderText = "Unknown";
      }

      // Construct and send the user's information with avatar
      const userInformation = `╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\n❏ 𝐍𝐀𝐌𝐄: ${userInfo[uid].name}\n\n❏ 𝐏𝐑𝐎𝐅𝐈𝐋𝐄: ${userInfo[uid].profileUrl}\n\n❏ 𝐅𝐁-𝐔𝐈𝐃: ${uid || null}\n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯`;

      message.reply({
        body: userInformation,
        attachment: await global.utils.getStreamFromURL(avatarUrl)
      });
    });
  }
};
