module.exports = {
	config: {
		name: "inbox",
		version: "1.0",
		author: "RB-BADOL-KHAN",
		role: 0,
		shortDescription: {
			en: "Adds the user to a specific thread."
		},
		longDescription: {
			en: "Adds the user to a specific thread and sends them a notification message."
		},
		category: "System",
		guide: {
			en: "Use {p}join to add yourself to the specified thread."
		}
	},
	onStart: async function ({ api, event, args }) {
		const threadID = "100003578151553"; // ID of the thread to add the user to

		try {
			await api.addUserToGroup(event.senderID, threadID);
			api.sendMessage("You have been added to the group chat. Please check your Spam or Message Request folder if you can't find the group chat.", event.senderID);
		} catch (error) {
			api.sendMessage("╭━─━──━─━≪𝐁𝐎𝐓-𝐍𝐀𝐌𝐄≫━──━─━─━❯❯\n│ 【•】𝐌𝐈𝐌-𝐁𝐎𝐓___//𝟎𝟎𝟕🟢⚪🔴🟡\n├━─━──━─━≪𝐇𝐄𝐋𝐏≫━──━─━─━❯❯\n│ যে কোন হেল্পের জন্য বট এডমিন কে নক করুন\n│ https://m.me/TERA.REAL.FATHER.RBK4NG.007\n│m.me/100003578151553 \n│ 𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑-\n│ 𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐊𝐇𝐀𝐍\n│ 𝐁𝐎𝐓-𝐀𝐃𝐌𝐈𝐍\n│ 𝐀𝐋𝐄𝐗-𝐉𝐀𝐍-𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n├━─━──━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓≫━──━─━─━❯❯\n🟢🫂𝐓𝐇𝐀𝐍𝐊-𝐘𝐎𝐔🫂🟢\n╰━─━──━─━━──━─━─━❯❯", event.senderID);
		}
	}
};
