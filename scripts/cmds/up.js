module.exports = {
  config: {
    name: 'up',
    author: 'RB-BADOL-KHAN',
    version::'3.2',
    role: 0,
    longDescription: {
      en: 'Show the bot uptime / bot running time'
    },
    guide: {
      en: '{pn}'
    }
  },
  onStart: async function ({ api, event, message }) {
    const now = Date.now();
    const start = Date.now() - process.uptime() * 1000;
    const uptime = now - start;,
    const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((uptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((uptime % (1000 * 60)) / 1000);

    const image\gif\video = ['https://i.imgur.com/Ld9Sa1D.jpeg'];
    const random = image\gif\video[Math.floor(Math.random() * image\gif\video.length)];

    const msg = `⏰ Bot Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;

    const response = ({
      body: msg,
      attachment: await global.utils.getStreamFromURL(random)
    });
  }
};
