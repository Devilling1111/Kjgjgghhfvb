const fs = require('fs');

module.exports = {
	config: {
		name: "badol420",
		version: "1.0",
		author: "RB-BADOL-KHAN",
		countDown: 3,
		role: 0,
		Description: { vi: "", en: "Badol Project Video" },
		category: "no prefix",
		guide: { en: "Prefix Event" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		var rbbadol = ["Mantion_দিস না _বাদল চৌধুরী এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","এতু ইমুশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 😭😭","বাদল চৌধুরী এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল বাদল চৌধুরী রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না বাদল চৌধুরী প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗",
 ];
;
  var rbbadolMsg = rbbadol[Math.floor(Math.random() * rbbadol.length)];
		const imgur = ["https://i.imgur.com/ziEN2Pv.jpeg",
"https://i.imgur.com/nlUwam5.jpeg",
"https://i.imgur.com/UTkngat.jpeg"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
		
		message.reply({
			body: ` ${rbbadolMsg}`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body.indexOf("@মোহাম্মদ বাদল চৌধুরী")==0 || 
event.body.indexOf("Badol")==0) {
			this.onStart({ message });
		}
	}
};
