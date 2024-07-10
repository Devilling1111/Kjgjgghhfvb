module.exports.config = {
  name: "autotime",
  version: "2.0",
  role: 0,
  author: "Mohammad Badol",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const arrayData = {
"12:00:00 PM": {
        message: "This is an auto schedule message at 12:00 PM 🌞 🌟",
      },
      "01:00:00 AM": {
        message: "This is an auto schedule message at 01:00 AM 🌜 🌟",
      },
      "02:00:00 AM": {
        message: "This is an auto schedule message at 02:00 AM 🌜 🌟",

      },
      "03:00:00 AM": {
        message: "This is an auto schedule message at 03:00 AM 🌜 🌟",
        
      },
      "04:00:00 AM": {
        message: "This is an auto schedule message at 04:00 AM 🌜 🌟",

      },
      "05:00:00 AM": {
        message: "This is an auto schedule message at 05:00 AM 🌜 🌟",
        
      },
      "06:00:00 AM": {
        message: "This is an auto schedule message at 06:00 AM 🌜 🌟",
        
      },
      "07:00:00 AM": {
        message: "This is an auto schedule message at 07:00 AM 🌜 🌟",
        
      },
      "08:00:00 AM": {
        message: "This is an auto schedule message at 08:00 AM 🌜 🌟",
        
      },
      "09:00:00 AM": {
        message: "This is an auto schedule message at 09:00 AM 🌜 🌟",
        
      },
      "10:00:00 AM": {
        message: "This is an auto schedule message at 10:00 AM 🌞 🌟",
        
      },
      "11:00:00 AM": {
        message: "This is an auto schedule message at 11:00 AM 🌞 🌟",
        
      },
      "12:00:00 PM": {
        message: "This is an auto schedule message at 12:00 PM 🌞 🌟",
        
      },
      "01:00:00 PM": {
        message: "This is an auto schedule message at 01:00 PM 🌞 🌟",
        
      },
      "02:00:00 PM": {
        message: "This is an auto schedule message at 02:00 PM 🌞 🌟",
        
      },
      "03:00:00 PM": {
        message: "This is an auto schedule message at 03:00 PM 🌞 🌟",
        
      },
      "04:00:00 PM": {
        message: "This is an auto schedule message at 04:00 PM 🌞 🌟",
        
      },
      "05:00:00 PM": {
        message: "This is an auto schedule message at 05:00 PM 🌞 🌟",
        
      },
      "06:00:00 PM": {
        message: "This is an auto schedule message at 06:00 PM 🌞 🌟",
        
      },
      "07:00:00 PM": {
        message: "This is an auto schedule message at 07:00 PM 🌜 🌟",
        
      },
      "08:00:00 PM": {
        message: "This is an auto schedule message at 08:00 PM 🌜 😑🌟",
        
      },
      "09:00:00 PM": {
        message: "This is an auto schedule message at 09:00 PM 🌜 🌟",
        
      },
      "10:30:00 PM": {
        message: "This is an auto schedule message at 10:30 PM 🌜 🌟",
        
      },
      "11:00:00 PM": {
        message: "This is an auto schedule message at 11:00 PM 🌜 🌟",
        
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
    const delay = 1000 - now.getMilliseconds(); 
    setTimeout(checkTimeAndSendMessage, delay); 
  };
  checkTimeAndSendMessage();
};

module.exports.onStart = () => {};
