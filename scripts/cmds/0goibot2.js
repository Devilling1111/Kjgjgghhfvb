const fs = require("fs-extra");
const axios = require("axios");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "goibot2",
    version: "1.0",
    author: "★𝐌𝟙𝐇𝟜𝐌𝐌𝟜𝐃-𝐁𝟒𝐃𝟗𝐋★",
    countDown: 5,
    role: 0,
    Description: "no-prefix",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function({}) {},

  onChat: async function({ api, event, args, Threads, usersData }) {
    const data = await usersData.get(event.senderID);
    const name = data.name;
    const { threadID, messageID, senderID, body } = event;
    const time = moment.tz("Asia/Dhaka").format("hh:mm:ss L");

    if (event.body.indexOf("bot")==0 || (event.body.indexOf("Bot")==0) ||
event.body.indexOf("বট")==0) {
      const messages = [
        "বেশি mim mim করলে চুম্মা দিয়া তোমার কিডনি ব্লক করে দেবো😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "এত যে মিম করো তোমরা কি আমার ভাতার লাগে 🥴" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , ", মিম না ভাবি বল ভাবি 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু মিম মিম করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "আর একবার আমার নাম ধরে ডাকলে তোরে কোলে করে বেডরুমে নিয়ে আসব 😉" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস বাদল চৌধুরী কে একটা গফ দে 🙄" , "আমাকে এতো না ডেকে বস রাজা বাবু কে একটা গফ দে 🙄"
      ];
      const rand = messages[Math.floor(Math.random() * messages.length)];
      
      const msg = {
        body: `【•${name}•】\n\n${rand}`,
      };
      api.sendMessage(msg, threadID, messageID);
        }
      }
};
