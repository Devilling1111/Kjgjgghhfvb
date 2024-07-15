const fs = require('fs');
const { getStreamFromURL } = global.utils;

module.exports = {
  config: {
    name: "approval",
    version: "1.0",
    author: "RB-BADOL-KHAN",
    category: "events"
  },
  onStart: async function ({ api, event, threadsData, message }) {
    const uid = "100000484977006";
    const groupId = event.threadID;
    const threadData = await threadsData.get(groupId);
    const name = threadData.threadName;
    const { getPrefix } = global.utils;
    const p = getPrefix(event.threadID);    

    let threads = [];
    try {
      threads = JSON.parse(fs.readFileSync('threadApproved.json'));
    } catch (err) {
      console.error('', err);
    }

    if (!threads.includes(groupId) && event.logMessageType === "log:subscribe") {
      await message.send({
        body: `╔⏤⏤⏤╝❮❮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕❯❯╚⏤⏤⏤╗\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nআপনি অনুমতি ছাড়াই Mim Bot কে যোগ করেছেন!!\n\n✧আপনার গ্রুপে Mim Bot কে ব্যবহার করতে অ্যাডমিনের কাছ থেকে অনুমতি নিন!!\n✧Admin এর সাথে যোগাযোগ করতে Mim Bot গ্রুপে যোগ দিন!!\n\n✧টাইপ (${ p}supportgc) 5 মিনিটের মধ্যে\n\n✧আপনার গ্রুপ অনুমোদন এবং আপনার গ্রুপে Mim Bot কে ব্যবহার জন্য Admin কে নক দিন 5 মিনিটের মধ্যে নয় তো Mim Bot নিযেই  আপনাদের গ্রুপ থেকে left নিবে Admin id👇👇\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n \n\nhttps://www.facebook.com/www.xxx.com.009\n\nm.me/100000484977006\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n╚⏤⏤⏤╗❮❮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕❯❯╔⏤⏤⏤╝`,
        attachment: await getStreamFromURL("https://i.imgur.com/qMce0nh.jpeg")
      });
    }

    if (!threads.includes(groupId) && event.logMessageType === "log:subscribe") {
      await new Promise((resolve) => setTimeout(resolve, 500000)); // Delay of 1 seconds
      await api.sendMessage(
        `╔⏤⏤⏤╝❮❮𝐀𝐩𝐩𝐨𝐫𝐯𝐞❯❯╚⏤⏤⏤╗\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n•গ্রুপ-নাম:- ${name}\n\n•গ্রুপ-Id:- ${groupId}\n\n•𝐁𝐨𝐬𝐬-𝐀𝐩𝐩𝐫𝐨𝐯𝐞-𝐩𝐢𝐳\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n╚⏤⏤⏤╗❮❮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕❯❯╔⏤⏤⏤╝`,
        uid,
        async () => {
          await api.removeUserFromGroup(api.getCurrentUserID(), groupId);
        }
      );
    }
  }
};
