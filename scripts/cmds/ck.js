const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;

module.exports = {
  config: {
    name: "ck",
    version: "0.9",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", 
    role: 0,
    shortDescription: {
      en: "View-cmd-info-check",
    },
    longDescription: {
      en: "",
    },
    category: "cmd-info-ck",
    guide: {
      en: "{p}cmd-info-check",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);
    const commandName = args[0].toLowerCase();
    const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "•𝐀𝐔𝐓𝐇𝐎𝐑 𝐍𝐎𝐓 𝐅𝐎𝐔𝐍𝐃•";

        const guideBody = configCommand.guide?.en || "•𝐍𝐎 𝐂𝐊 𝐅𝐎𝐔𝐍𝐃•";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `╭━─━─≪𝐂𝐌𝐃-𝐈𝐍𝐅𝐎-𝐂𝐊≫─━─━❯❯\n│\n├─❯𝐕𝐀𝐑𝐒𝐈𝐎𝐍: ${configCommand.version || "1.0"}\n│\n├─❯𝐑𝐎𝐋𝐄: ${roleText}\n│\n├─❯𝐀𝐔𝐓𝐇𝐎𝐑: ${author}\n│\n├─❯𝐔𝐒𝐀𝐆𝐄: ${usage}\n│\n╰━─━─≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫─━─━❯❯`;

        await message.reply({body:response,attachment: await global.utils.getStreamFromURL("https://i.imgur.com/9MyA1TI.jpeg")})
      }
  },
}; 
function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 •𝐔𝐒𝐄𝐑•";
    case 1:
      return "1 •𝐁𝐎𝐗-𝐀𝐃𝐌𝐈𝐍•";
    case 2:
      return "2 •𝐎𝐍𝐋𝐈-𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍•";
    default:
      return "•𝐍𝐎𝐓-𝐅𝐎𝐔𝐍𝐃•";
  }
}
