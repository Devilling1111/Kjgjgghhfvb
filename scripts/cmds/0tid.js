const axios = require('axios');

module.exports = {
  config: {
    name: 'tid',
    version: '1.0',
    role: 0,
    author: 'RB-BADOL-KHAN',
    category: 'thread',
    shortDescription: {
      en: 'Get the thread ID',
    },
    longDescription: {
      en: 'Get the thread ID of the current thread.',
    },
  },
  onStart: async function ({ api, event, args, message }) {
    const threadID = event.threadID;
    const threadInfo = await api.getThreadInfo(threadID);
    const threadName = threadInfo.threadName || 'Unnamed Thread';
    const threadIDMessage = `╭━─━──━─━≪𝐁𝐎𝐓-𝐈𝐃≫━──━─━─━❯❯\n│\n│𝐓𝐇𝐑𝐄𝐀𝐃-𝐍𝐀𝐌𝐄: ${threadName}\n│\n│𝐓𝐇𝐑𝐄𝐀𝐃-𝐈𝐃: ${threadID}\n│\n│𝐓𝐇𝐑𝐄𝐀𝐃-𝐋𝐈𝐍𝐊: https://www.facebook.com/messages/t/${threadID}\n│\n╰━─━──━─━≪𝐌𝐈𝐌-𝐁𝐎𝐓-𝟎𝟎𝟕≫━──━─━─━❯❯`;
    message.reply(threadIDMessage);
  }
};
