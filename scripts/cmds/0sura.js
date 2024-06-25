module.exports.config = {
	name: "sura",
	version: "1.0.1",
	role: 0,
	author: "RB-BADOL-KHAN",
	description: "islamick sura",
   category: "media",
	usages: "islamick",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStar = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = require["axios"];
const request = require["request"];
const fs = require["fs-extra"];
   var rbbadol = ["╭━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╮\n\nপ্রিয় মুসলিম |ভাই ও বন| সূরা টি শুনো তুমার প্রান জুরিয়ে যাবে \n\n ইনশাআল্লাহ ❤️🌸 \n\n MUSLIM CYBER SECURITY \n\n╰━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━──━─━─━╯"];
  var mim = rbbadol[Math.floor(Math.random() * rbbadol.length)];
  var link = [
   "https://drive.google.com/uc?id=1Ml6znasS_cajYJVS8OJ19DQO6aaLzWkc",

"https://drive.google.com/uc?id=1NKyRitWSGriX3TG23YTLj0tgfySwn6Q-",

"https://drive.google.com/uc?id=1N-sbqx4LjEc-OOEa0MXhM2crzyvn3ynj",

"https://drive.google.com/uc?id=1N9AzB4zAWlz2bG3UesZ7GawyJykRO79s",

"https://drive.google.com/uc?id=1MrLaZG9NyfSDLjZvCRK69L0nnepV6R7U",

"https://drive.google.com/uc?id=1N7W-i_Xr3lxM0cvv4dQlGUvsFGoyHnIl",

"https://drive.google.com/uc?id=1Mn8JXddjoYKHkNcgAdnw8dnwhr2Ems6s",

"https://drive.google.com/uc?id=1NLbrtpig80X1_NTlRHmeKG7ZQPtTmdTJ",

"https://drive.google.com/uc?id=1NFnzqXl8aC_9tpngoKcfeWEyyT3DNdGW",

"https://drive.google.com/uc?id=1NAkALvze0fkzkRvzDSTQvt-nqCIqqQBv",

"https://drive.google.com/uc?id=1NFrEbcdP3CnZ1ZB1KKDCDa6gpV5x4W4t",

"https://drive.google.com/uc?id=1MpowaaCScbWY-vEGtfLX5xPzKCQineHl",

"https://drive.google.com/uc?id=1N3bT2YWhp92xABdf851LDuELwwc1b92T"];
     var callback = () => api.sendMessage({body:` ${mim} `,attachment: fs.createReadStream(__dirname + "/rbbadol/26.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/rbbadol/26.mp3"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/rbbadol/26.mp3")).on("close",() => callback());
   };
