module.exports.config = {
  name: "autotime",
  version: "2.0",
  role: 0,
  author: "Dipto & Mohammad Badal",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const arrayData = {
"12:00:00 PM": {
        message: "⏰এখন সময় ⏰ 12:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
      },
      "01:00:00 AM": {
        message: "⏰এখন সময় ⏰ 01:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
      },
      "02:00:00 AM": {
        message: "⏰এখন সময় ⏰ 02:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"

      },
      "03:00:00 AM": {
        message: "⏰এখন সময় ⏰ 03:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "04:00:00 AM": {
        message: "⏰এখন সময় ⏰ 04:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"

      },
      "05:00:00 AM": {
        message: "⏰এখন সময় ⏰ 05:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "06:00:00 AM": {
        message: "⏰এখন সময় ⏰ 06:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "07:00:00 AM": {
        message: "⏰এখন সময় ⏰ 07:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "08:00:00 AM": {
        message: "⏰এখন সময় ⏰ 08:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "09:00:00 AM": {
        message: "⏰এখন সময় ⏰ 09:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "10:00:00 AM": {
        message: "⏰এখন সময় ⏰ 10:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "11:00:00 AM": {
        message: "⏰এখন সময় ⏰ 11:00 𝐀𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "12:00:00 PM": {
        message: "⏰এখন সময় ⏰ 12:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "01:00:00 PM": {
        message: "⏰এখন সময় ⏰ 01:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "02:00:00 PM": {
        message: "⏰এখন সময় ⏰ 02:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "03:00:00 PM": {
        message: "⏰এখন সময় ⏰ 03:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "04:00:00 PM": {
        message: "⏰এখন সময় ⏰ 04:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "05:00:00 PM": {
        message: "⏰এখন সময় ⏰ 05:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "06:00:00 PM": {
        message: "⏰এখন সময় ⏰ 06:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "07:00:00 PM": {
        message: "⏰এখন সময় ⏰ 07:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "08:00:00 PM": {
        message: "⏰এখন সময় ⏰ 08:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "09:00:00 PM": {
        message: "⏰এখন সময় ⏰ 09:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "10:00:00 PM": {
        message: "⏰এখন সময় ⏰ 10:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
        
      },
      "11:00:00 PM": {
        message: "⏰এখন সময় ⏰ 11:00 𝐏𝐌 🔴𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕⚪"
      }
      };

  const checkTimeAndSendMessage = () => {
    const currentTime = new Date(Date.now() + 25200000 - 3600000)
      .toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).split(/,/).pop().trim();

    const messageData = arrayData[currentTime];

    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async(threadID, index) => {
        api.sendMessage({ body: messageData.message/*, attachment: await global.utils.getStreamFromURL("https://telegra.ph/file/505d213c154f978c81e6d.png") */}, threadID);
      });
    }
    const now = new Date();
    const delay = 1200 - now.getMilliseconds(); 
    setTimeout(checkTimeAndSendMessage, delay); 
  };
  checkTimeAndSendMessage();
};

module.exports.onStart = () => {};
