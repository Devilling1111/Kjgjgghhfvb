module.exports = {
  config: {
    name: "uid",
    version: "1.0",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", // meant author  by mbc k1ng 007
    countDown: 5,
    role: 0,
    shortDescription: "user id info",
    longDescription: "uid user",
    category: "auto ✅",
  },

  onStart: async function () {},

  onChat: async function ({ event, message, getLang, usersData, threadsData }) {

    if (event.body && event.body.toLowerCase() === "uid") {

      const data = await usersData.get(event.senderID);

      const name = data.name;

      const uid = data.userID;

      const thread = await threadsData.get(event.threadID);

      const threadName = thread.threadName;

      const currentDate = new Date();

      const options = { year: "numeric", month: "numeric", day: "numeric" };

      const date = currentDate.toLocaleDateString("en-US", options);

      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });

      const img = `https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

      const msg = `╔╝❮❮𝐔𝐈𝐃-𝐔𝐒𝐄𝐑❯❯╚╗\n━━━━━━━━━━━━━━━━━━\n❯━❯ 𝐍𝐚𝐦𝐞: ${name}\n❯━❯: 𝐔𝐢𝐝: ${uid}\n❯━❯ 𝐌𝐫: m.me/${uid}\n❯━❯ 𝐅𝐛: https://www.facebook.com/${uid}\n━━━━━━━━━━━━━━━━━━\n𝐆𝐜 𝐍𝐚𝐦𝐞: ${threadName}\n𝐓𝐢𝐦𝐞:【 ${date} || ${time} \n━━━━━━━━━━━━━━━━━━━━━━\n`;

      message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
};
