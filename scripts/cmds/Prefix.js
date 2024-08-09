module.exports = {
  config: {
    name: "prefix",
    version: "1.0",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", // remodified by 007
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "auto 📟",
  },

  onStart: async function () { },

  onChat: async function ({ event, message, getLang, usersData, threadsData }) {

    if (event.body && event.body.toLowerCase() === "prefix") {

      const data = await usersData.get(event.senderID);

      const name = data.name;

      const thread = (await threadsData.get(event.threadID))

      const threadName  = thread.threadName;

      return message.reply({
        body: `╭━─━─≪𝐏𝐑𝐄𝐅𝐈𝐗-𝐂𝐌𝐃≫─━─━❯❯\n│\n├─❯ ${name}\n│\n├─❯ 𝐁𝐎𝐓-𝐏𝐑𝐄𝐅𝐈𝐗:【•】\n│\n├─❯ 𝐁𝐎𝐓-𝐍𝐀𝐌𝐄: 𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕 \n│\n├─❯𝐁𝐎𝐗-𝐍𝐀𝐌𝐄\n\n${threadName}`,
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hnCwiE1.jpeg")
      });
    }
  }
};
