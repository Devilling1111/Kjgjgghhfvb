module.exports = {
  config: {
    name: "in",
    aliases: ["inboxme", "in"],
    version: "1.0",
    author: "Unknown",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: ""
    },
    category: "fun",
    guide: {
      en: ""
    }
  },
  langs: {
    en: {
      gg: ""
    },
    id: {
      gg: ""
    }
  },
  onStart: async function({ api, event, args, message }) {
    try {
       const attachment = await global.utils.getStreamFromURL("https://i.imgur.com/iWDVSOY.jpeg");
        await message.reply({ body: "☑ |✦ 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹 𝗬𝗼𝘂𝗿 𝗜𝗻𝗯𝗼𝘅 𝗧𝗲𝘅𝘁\n𝗖𝗵𝗲𝗰𝗸 𝗜𝗻𝗯𝗼𝘅"} attachment });
        await api.sendMessage("👀 |✦ 𝗛𝗲𝗹𝗹𝗼 𝗝𝗮𝗻", event.senderID);
    } catch (error) {
      console.error("Error bro: " + error);
    }
  }
};
