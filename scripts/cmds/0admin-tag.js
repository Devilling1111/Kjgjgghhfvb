module.exports = {
	config: {
		name: "goiadmin1",
		author: "RB-BADOL-KHAN",
		role: 2,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100003578151553") {
		var aid = ["100007070042228"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["বস বাদল চৌধুরী কই থুমি থুমারে এক বলদে ডাকে😁🤣", "বস বাদল চৌধুরী কে আর একবার মেনশন দিলে তোমারে থাবরাইয়া মুতের কালার চেঞ্জ কইরা ফালামু 🤭🙈🤖", "যা বলার আমাকে বলো য়ামাল বস বাদল চৌধুরী এখন বিজি আছে🥰","য়ামাল বস বাদল চৌধুরী কে এতো ডাকো কেন😒 ভালো টালো বাসো নাকি🤭","য়ামাল বস বাদল চৌধুরী কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡","বস বাদল চৌধুরী এখন অফিস এর কাজে বিজি আছে যা বলার আমাকে বলো"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};
