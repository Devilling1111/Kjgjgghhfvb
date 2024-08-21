const fs = require('fs');
const path = require('path');
const { getPrefix } = global.utils;

module.exports = {
  config: {
    name: "help",
    version: "1.0",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
    role: 0,
    category: "help",
    shortDescription: "see the available commands",
    guide: {
      en: "{pn} <page number> | <command name>]"
    }
  },

  onStart: async function ({ api, message, args, event, threadsData, getLang }) {
    const langCode = await threadsData.get(event.threadID, "data.lang") || global.GoatBot.config.language;
    const { threadID } = event;
    const prefix = getPrefix(threadID);

    const commands = await getCommandsFromDir(path.join(__dirname, '..', 'cmds'));
    const commandNames = Object.keys(commands);

    if (args[0] && isNaN(parseInt(args[0]))) {
      const commandName = args[0];
      const command = commands[commandName];

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "•𝐀𝐔𝐓𝐇𝐎𝐑 𝐍𝐎𝐓 𝐅𝐎𝐔𝐍𝐃•";
 
        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";
 
        const guideBody = configCommand.guide?.en || "•𝐍𝐎 𝐂𝐊 𝐅𝐎𝐔𝐍𝐃•";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `╭━─━─≪𝐀𝐋𝐋-𝐂𝐌𝐃-𝐂𝐊≫─━─━❯❯\n├─❯ Name: ${configCommand.name} \n├─❯ Description: ${longDescription} \n├─❯ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"} \n├─❯ Other names in your group: Version: ${configCommand.version || "1.0"} \n├─❯ Role: ${roleText} \n├─❯ Time per command: ${configCommand.countDown || 1}s \n├─❯ Author: ${author} \n├─❯ Usage ${usage}\n╰━─━─≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫─━─━❯❯`;

        await message.reply({body:response,attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1RqqLBMmEH5eQgCFrjvBnxHz1PJyilEr1")})
      }
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
    } else {
      const page = parseInt(args[0]) || 1;
      const commandsPerPage = 10; 
      const totalPages = Math.ceil(commandNames.length / commandsPerPage);

      if (page < 1 || page > totalPages) {
        return message.reply(getLang("pageNotFound", page));
      }

      let B4D9LM1M = `━━━━━━━━━━━━━━━━━━━━━━\n╔╝❮❮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕❯❯╚╗\n\n ╔═════•| 💛 |•═════╗\n★𝐌𝐈𝐌-𝐁𝐎𝐓-𝐂𝐌𝐃-𝐋𝐈𝐒𝐓★\n ╚═════•| 💛 |•═════╝\n━━━━━━━━━━━━━━━━━━━━━━\n\n`;
      let currentCategory = "";
      let commandIndex = (page - 1) * commandsPerPage;
      let commandNumber = (page - 1) * commandsPerPage + 1;

      for (let i = 0; i < commandsPerPage && commandIndex < commandNames.length; i++) {
        const commandName = commandNames[commandIndex];
        const command = commands[commandName];

        if (command.config.category !== currentCategory) {
          currentCategory = command.config.category;
          B4D9LM1M += `\n╭━─━──━─━≪🔳\n│\n╰━➤ `;
        }

        B4D9LM1M += `【•${commandNumber}${commandNumber < 10 ? " " : ""} ★𝐂𝐌𝐃-𝐍𝐀𝐌𝐄★【•${command.config.name}•】\n\n`;
        commandIndex++;
        commandNumber++;
      }

      B4D9LM1M += `\n\n━━━━━━━━━━━━━━━━━━━━━━\n\n╭━─━─━─━≪✠≫━─━─━─━╮\n│\n│🔐𝐓𝐎𝐓𝐀𝐋- 【•${global.GoatBot.commands.size}•】 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒🔐\n│\n│🔐𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑: 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐎𝐋📌\n│\n│https://bio.link/mohammadbadal009\n│\n│m.me/100001381266797\n│\n╰━─━─━─━─━─━─━❯❯\n\n━━━━━━━━━━━━━━━━━━━━━━\n\n`;

      message.reply({
        body: B4D9LM1M,
        attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1X-rlSqgtVi-cI1hyoOyA2W4_mUpec7zv")
      });
    }
  }
};

async function getCommandsFromDir(dir) {
  const commands = {};
  const files = await fs.promises.readdir(dir);

  for (const file of files) {
    if (file.endsWith('.js') && file !== 'help.js') {
      const filePath = path.join(dir, file);
      const command = require(filePath);
      commands[command.config.name] = command;
    }
  }

  return commands;
}
