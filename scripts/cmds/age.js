module.exports = {


  config: {


    name: "age",


    author: "RB-BADOL-KHAN",


    countDown: 5,


    role: 0,


    category: "write",


    shortDescription: {


      en: "mention your friend and write something to post✍️",


    },


  },



  onStart: async function ({ api, event, args }) {


    const birthday = args[0];



    if (!birthday) {


      return api.sendMessage("Please provide your birthday in YYYY-MM-DD format.", event.threadID);


    }



    const currentDate = new Date();


    const birthDate = new Date(birthday);


    const age = currentDate.getFullYear() - birthDate.getFullYear();



    birthDate.setFullYear(currentDate.getFullYear());


    const isBeforeBirthday = currentDate < birthDate;



    const finalAge = isBeforeBirthday ? age - 1 : age;



    api.sendMessage({ 


body: `🫡আপনার বয়স এখন ${finalAge} আমি কি ঠিক বলছি🫂`, 


attachment: await global.utils.getStreamFromURL("https://i.imgur.com/1aZ40wS.jpeg")


}, event.threadID, event.messageID);


  },


};
