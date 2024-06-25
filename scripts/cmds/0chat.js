const axios = require('axios');

module.exports = {
  config: {
    name: 'chat',
    version: '2.3',
    role: 0,
    guide: {
      en: '{pn} <message>'
    },
    shortDescription: 'Chat with simsimi',
    author: 'UPoL 🦆'
  },
  onStart: async function ({ api, args, message, event }) {
    const { threadID, messageID } = event;
    const query = args.join(' ');
    if (!query) {
      return message.reply('say something baka', threadID, messageID);
    }

    try {
      const response = await axios.get(`https://upol-dev-simsimi-api.onrender.com/sim?chat=${encodeURIComponent(query)}&lang=en`);
      const simsimiResponse = response.data.answer;
      api.sendMessage(simsimiResponse, threadID, messageID);
    } catch (error) {
      api.sendMessage('Sorry', threadID, messageID);
    }
  }
};
