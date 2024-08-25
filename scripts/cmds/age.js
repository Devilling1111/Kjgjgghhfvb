module.exports = {
  config: {
    name: "age",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
    countDown: 0,
    role: 0,
    category: "write",
    shortDescription: {
      en: "mention your friend and write something to post✍️",
    },
  },

  onStart: async function ({ api, event, args, usersData }) {
    const birthday = args[0];

    if (!birthday) {
      return api.sendMessage("Please provide your birthday in YYYY-MM-DD format.", event.threadID);
    }

    const birthDate = new Date(birthday);
    if (isNaN(birthDate.getTime())) {
      return api.sendMessage("Invalid date format. Please provide your birthday in YYYY-MM-DD format.", event.threadID);
    }

    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    birthDate.setFullYear(currentDate.getFullYear());
    const isBeforeBirthday = currentDate < birthDate;

 
    const finalAge = isBeforeBirthday ? age - 1 : age;

    
    const data = await usersData.get(event.senderID);

    const uid = data.userID;

    const name = data.name;

    const img = `https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

    api.sendMessage({ body: `╔╝${name}╚╗\n▬▬▬▬▬▬▬▬▬▬▬▬\n🫡আপনার বয়স এখন ${finalAge} আমি কি ঠিক বলছি🫂`, attachment: await global.utils.getStreamFromURL(img)
}, event.threadID, event.messageID);
  },
};
