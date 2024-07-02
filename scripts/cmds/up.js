module.exports = {
    config: {
      name: "uptime",
      aliases: ["upt", "up"],
      version: "1.0",
      author: "RB-BADOL-KHAN",
      role: 0,
      shortDescription: {
        en: "Displays the uptime of the bot."
      },
      longDescription: {
        en: "Displays the amount of time that the bot has been running for."
      },
      category: "System",
      guide: {
        en: "Use {p}uptime to display the uptime of the bot."
      }
    },
    onStart: async function ({ api, event }) {
      const uptime = process.uptime();
      const seconds = Math.floor(uptime % 60);
      const minutes = Math.floor((uptime / 60) % 60);
      const hours = Math.floor((uptime / (60 * 60)) % 24);
      const days = Math.floor(uptime / (60 * 60 * 24));
      const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} second`;
      const date = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Asia/Dhaka" });
      const time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: '2-digit', second: "2-digit", timeZone: "Asia/Dhaka" });
      await api.sendMessage({ 
  body: `╭━─━──━─━≪𝐔𝐏𝐓𝐈𝐌𝐄≫━──━─━─━❯❯\n│\n│𝐁𝐎𝐓-𝐈𝐒-𝐑𝐀𝐍𝐍𝐆-𝐓𝐈𝐌𝐄\n│\n│𝐔𝐏: ${uptimeString}\n│\n│𝐃𝐀𝐓𝐄: ${date}\n│\n│𝐓𝐈𝐌𝐄: ${time}\n│\n╰━─━──━─━≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫━──━─━─━❯❯`, 
  attachment: await global.utils.getStreamFromURL("https://i.imgur.com/9MyA1TI.jpeg")
  }, event.threadID, event.messageID);
 }
}
