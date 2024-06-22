const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "RB-BADOL-KHAN",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "【•】𝐌𝐈𝐌•𝐁𝐎𝐓__//🔴🟡🟢⚪";
		const botPrefix = "【•】";
		const authorName = "𝐑𝐁-𝐁𝐀𝐃𝐎𝐋-𝐊𝐇𝐀𝐍";
		const ownAge = "【•❶❽•】";
		const messenger = "m.me/100003578151553";
		const authorFB = "m.me/TERA.REAL.FATHER.RBK4NG.007";
		const authorNumber = "wa.me/+8801782721761";
		const Status = "【• 𝐌𝐀𝐑𝐑𝐈𝐄𝐃•】";
		const urls = JSON.parse(fs.readFileSync('RB.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `╭━─━──━─━≪🟢🟡🔴⚪≫━──━─━─━╮ \n\n【•𝐁𝐨𝐭•𝐀𝐧𝐝•𝐎𝐰𝐧𝐞𝐫•𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧•】
【• 𝐁𝐎𝐓-𝐍𝐀𝐌𝐄 : ${botName}
【• 𝐁𝐎𝐓-𝐏𝐑𝐄𝐅𝐈𝐗: ${botPrefix}
【• 𝐎𝐖𝐍𝐄𝐑-𝐍𝐀𝐌𝐄: ${authorName}
【• 𝐀𝐆𝐄: ${ownAge}
【• 𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: ${Status}
【• 𝐖𝐏: ${authorNumber}
【• 𝐅𝐁-𝐋𝐈𝐍𝐊: ${authorFB}
【• 𝐀𝐃𝐌𝐈𝐍-𝐂𝐎𝐍𝐓𝐄𝐊: ${messenger}\n\n━─━──━─━≪💛🤍💚💙💜❤️≫━──━─━─━\n━─━──━─━≪🤍❤️💛💜💙💖≫━──━─━─━\n━─━──━─━≪💚💙🤍💛❤️💟≫━──━─━─━\n\n【• 𝐃𝐀𝐓𝐄: ${date}
【• 𝐓𝐈𝐌𝐄: ${time}
【• 𝐁𝐎𝐓-𝐔𝐏𝐓𝐈𝐌𝐄: ${uptimeString}\n\n╰━─━──━─━≪🟢🟡🔴⚪≫━──━─━─━╯`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
