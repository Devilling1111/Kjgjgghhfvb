const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
    config: {
        name: "fuck",
        aliases: ["fuck 2 fuck"],
        version: "1.0",
        author: "Mohammad Badol",
        countDown: 5,
        role: 2,
        shortDescription: "fuck",
        longDescription: "",
        category: "photo",
        guide: ""
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("💚আপমি যাকে লাগাতে চান মেনশন করুন প্লিজ✅");
        else if (mention.length == 1) {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "╔⏤⏤⏤╝❮❮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕❯❯╚⏤⏤⏤╗\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n👻👻 তোমাকে ঠিক এইভাবে লাগাতে পারলে মনে একটু শান্তি পাইতাম🤣🖕\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╔⏤⏤⏤╝❮❮𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕❯❯╚⏤⏤⏤╗", attachment: fs.createReadStream(ptth) }) })
        } else {
            const one = mention[1], two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "he is not me🕸️", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(one, two) {

   let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avone.circle()
    let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "spiderman.png"
    let img = await jimp.read("https://i.imgur.com/vpUme67.jpeg")
    img.resize(1440, 1080).composite(avone.resize(200, 200), 380, 50).composite(avtwo.resize(200, 200), 800, 100);

    await img.writeAsync(pth)
    return pth
      }
