module.exports.config = {
	name: "short",
	version: "1.0.1",
	role: 0,
	author: "Badol",
	description: "get short+video",
   category: "media",
	usages: "short+video",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStart = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

const axios = require('axios');

const request = require('request');

const fs = require('fs-extra');

   var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐒𝐇𝐎𝐑𝐓-𝐕𝐈𝐃𝐄𝐎•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];

  var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];

  var link = [

  "https://drive.google.com/uc?id=17P7ECocV2NL0x8IxGlq-IBU7A5uKqXdF",
    "https://drive.google.com/uc?id=18N94lbJ6Qy0AZq3GqE34uR1Y1qkOfscO",
    "https://drive.google.com/uc?id=176WOlo68ZeCg-bmPhrbMLRd4leJIHsX5",
    "https://drive.google.com/uc?id=17dmJIY7oIW4eAfC4J9n8F2paDb__tfGM",
    "https://drive.google.com/uc?id=187g1TeB8-XI2CF7SDHPsCyCBAHwoV0Tk",
    "https://drive.google.com/uc?id=17l74M8Ggk1FKUWuzIlS2lOjTayoLl81N",
    "https://drive.google.com/uc?id=17XqS9tXP1MRmHnO8rIVDUp4qXRNO9SOQ",
    "https://drive.google.com/uc?id=17YohbaTJGTF6FWPOp9aggErLONqy7PPm",
    "https://drive.google.com/uc?id=18FcBD5KB_4jLkvU191q-_2S3n33zdGxJ",
    "https://drive.google.com/uc?id=182o97bU8v5q606zLN9X9zofRn3XRFvlf",
    "https://drive.google.com/uc?id=18NXfCyUMGs5TfBBEG6ecLnbP4thU2Hzx",
    "https://drive.google.com/uc?id=17_RkxM3SNyd_scC40JKqM82bOYx4SU0W",
    "https://drive.google.com/uc?id=17kfvz6nEvUamKjOOC_d7oPEcTTRIqIrk",
    "https://drive.google.com/uc?id=178AwM_bd_SNXXNwctopfHbRfnSXzMa3N",
    "https://drive.google.com/uc?id=18J9RO4II9ls-kRTF-ZYGykz5bTCNBHar",
    "https://drive.google.com/uc?id=17rPG9fxtHzlAUNktWq4P2y0gkFUQN4t0",
    "https://drive.google.com/uc?id=18ERhO63_MuddxhGpojMFLOT4EiKF7qhN",
    "https://drive.google.com/uc?id=185k3xZQmascUHwmWpVFi4zK6MVImnuN2",
    "https://drive.google.com/uc?id=181DIeY17BXscDy0d5vuWHfqDDcDzMk5j",
    "https://drive.google.com/uc?id=18JETLEMAOS1S4cs1oG08sZb7UNcBq_Gx",
    "https://drive.google.com/uc?id=182Ne-mp4Df4bjoHSSkTroHmbOnLZkFRz",
    "https://drive.google.com/uc?id=18E7L8Kf_O0odUJA2DDWrQAe012F6a4YY",

 ];
     var callback = () => api.sendMessage({body:`${mim}`,attachment: fs.createReadStream(__dirname + "/cache/B4D9L.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/B4D9L.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/B4D9L.mp4")).on("close",() => callback());
   };
