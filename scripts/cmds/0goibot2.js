const fs = require("fs-extra");


module.exports = {

config: {

    name: "goibot2",

    version: "1.0",

    author: "RB-BADOL-KHAN",

    countDown: 5,

    role: 0,

    shortDescription: "no-prefix",

    longDescription: "Bot Will Reply You In Engish/Bangla Language",

    category: "no prefix",

    guide: {

      en: "{p}{n}",

    }

  },


 onStart: async function ({  }) { },

  onChat: async function ({ api, event, args, Threads, userData }) {


  var { threadID, messageID, senderID } = event;

  const moment = require("moment-timezone");

  const time = moment.tz("Asia/Dhaka").format("hh:MM:ss L");

  var idgr = `${event.threadID}`;

  var id = event.senderID;


  var Messages = ["বেশি mim mim করলে চুম্মা দিয়া তোমার কিডনি ব্লক করে দেবো😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "এত যে মিম করো তোমরা কি আমার ভাতার লাগে 🥴" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , ", মিম না ভাবি বল ভাবি 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু মিম মিম করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "আর একবার আমার নাম ধরে ডাকলে তোরে কোলে করে বেডরুমে নিয়ে আসব 😉" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস বাদল চৌধুরী কে একটা গফ দে 🙄" , "আমাকে এতো না ডেকে বস রাজা বাবু কে একটা গফ দে 🙄"];


    var rand = Messages[Math.floor(Math.random() * Messages.length)]


        if ((event.body.toLowerCase() == "vai") || (event.body.toLowerCase() == "vai in ck")) {

         return api.sendMessage("inbox not allow ok,🙄", threadID);

       };


        if ((event.body.toLowerCase() == "call aso") || (event.body.toLowerCase() == "call aso fast")) {

         return api.sendMessage("audio call 500+ Video call 1000+ ok🍆😩", threadID);

       };


  if (event.body.indexOf("janu") == 0 || (event.body.toLowerCase() == "jan") || (event.body.indexOf("মিম") == 0)) {

    var msg = {

      body: ` ${rand}`

    }

    return api.sendMessage(msg, threadID, messageID);

  }

}

};
