(module.exports.config = {
  name: "age",
  version: "6.9",
  author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
  countDown: 5,
  role: 0,
  category: "calculator",
  description: {
    en: "mention your friend and write something to post",
  },
  guide: { en: "your birthday in MM/DD/YYYY format" },
}),
  (module.exports.onStart = async function ({
    message,
    args,
    usersData,
    event,
  }) {
    const birthday = args[0];
    const t = args[1] || event.senderID;
    const name = (await usersData.get(t)).name;
    if (!birthday) {
      return message.reply(
        "Please provide your birthday in MM/DD/YYYY format.",
      );
    }
    const currentDate = new Date();
    const data = await usersData.get(event.senderID);

    const uid = data.userID;
    const birthDate = new Date(birthday);
    const years = currentDate.getFullYear() - birthDate.getFullYear();
    const months = currentDate.getMonth() - birthDate.getMonth();
    const days = currentDate.getDate() - birthDate.getDate();
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      if (months < 0) {
        months += 12;
      }
      if (days < 0) {
        const lastMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          0,
        );
        days += lastMonth.getDate();
      }
    }
    const nextBirthday = new Date(
      currentDate.getFullYear() + 1,
      birthDate.getMonth(),
      birthDate.getDate(),
    );
    const timeUntilNextBirthday = nextBirthday - currentDate;
    const daysUntilNextBirthday = Math.floor(
      timeUntilNextBirthday / (1000 * 60 * 60 * 24),
    );
    const monthsUntilNextBirthday = Math.floor(daysUntilNextBirthday / 30);
    const remainingTimeInSeconds = timeUntilNextBirthday / 1000;
    const remainingDays = Math.floor(remainingTimeInSeconds / (24 * 3600));
    const remainingHours = Math.floor(
      (remainingTimeInSeconds % (24 * 3600)) / 3600,
    );
    const remainingMinutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
    const daysOfWeek = [
      "রবিবার",
      "সোমবার",
      "মঙ্গলবার",
      "বুধবার",
      "বৃহস্পতিবার",
      "শুক্রবার",
      "শনিবার",
    ];
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    const nextBirthdayDayOfWeek = daysOfWeek[nextBirthday.getDay()];
    const img = `https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

    message.reply({ body: `▬▬▬▬▬▬▬▬▬▬▬▬\n● ${name} ●\n\n● আপনার বর্তমান বয়স ও জন্মদিনের সময়সূচী ●\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n● ${name} ●আজকে● ${currentDayOfWeek} ●\n\n● আপনার বয়স এখন, ${years} বছর, ${months} মাস, এবং ${days} দিন ●\n\n● আপনার জন্মদিন আসতে বাকি আছে আর মাত্র ● ${monthsUntilNextBirthday} মাস ${daysUntilNextBirthday % 30} দিনের মাঝামাঝি ●\n\n● মোট: ${remainingDays} দিন, ${remainingHours} ঘন্টা এবং ${remainingMinutes} মিনিট বাকি আছে ●\n\n▬▬▬▬▬▬▬▬▬▬▬▬`, attachment: await global.utils.getStreamFromURL(img)
}, event.threadID, event.messageID);
  });
