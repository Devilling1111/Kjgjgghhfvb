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

  onChat: async function ({ event, message, getLang, usersData }) {
    if (event.body && event.body.toLowerCase() === "prefix") {
      const data = await usersData.get(event.senderID);
      const name = data.name;

      return message.reply({
        body: `╭━─━─≪𝐏𝐑𝐄𝐅𝐈𝐗-𝐂𝐌𝐃≫─━─━❯❯\n│\n├─❯ ${name}\n│\n├─❯ 𝐁𝐎𝐓-𝐏𝐑𝐄𝐅𝐈𝐗:【•】\n│\n├─❯【•𝐎𝐖𝐍𝐄𝐑+𝐀𝐃𝐌𝐈𝐍+𝐂𝐎𝐍𝐓𝐄𝐊•】\n\n├─❯https://m.me/MBC.K1NG.007\n│\n├─❯m.me/100001381266797\n│\n╰━─━─≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫─━─━❯❯`,
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hnCwiE1.jpeg")
      });
    }
  }
};
