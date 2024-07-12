const fs = require('fs');
const axios = require('axios');

module.exports = {
    config: {
        name: "sing",
        version: "4.6",
        author: "rb007",
        shortDescription: { en: 'Search and download music' },
        longDescription: { en: "Search for music and download the first result." },
        category: "music",
        guide: { 
            en: '{p}s <song name> - Search for a song\n' +
                'Example:\n' +
                '  {p}s Blinding Lights'
        }
    },

    onStart: async function ({ api, event, args }) {
        const searchQuery = encodeURIComponent(args.join(" "));
        const apiUrl = `https://global-sprak.onrender.com/api/ytb/v1?search=${searchQuery}`;
        
        if (!searchQuery) {
            return api.sendMessage("Please provide the name of the song you want to search.", event.threadID, event.messageID);
        }

        try {
            api.sendMessage("🎵 | Searching for music. Please wait...", event.threadID, event.messageID);
            const response = await axios.get(apiUrl);
            const tracks = response.data;

            if (tracks.length > 0) {
                const selectedTrack = tracks[0];
                const videoUrl = `https://www.youtube.com/watch?v=${selectedTrack.videoId}`;
                const downloadApiUrl = `https://fgryegecevdhhf.onrender.com/download?url=${encodeURIComponent(videoUrl)}`;

                api.sendMessage("⏳ | Downloading your song. Please wait...", event.threadID, async (err, info) => {
                    if (err) return console.error(err);

                    try {
                        const downloadLinkResponse = await axios.get(downloadApiUrl);
                        const downloadLink = downloadLinkResponse.data.audio;

                        const filePath = `${__dirname}/cache/${Date.now()}.mp3`;
                        const writer = fs.createWriteStream(filePath);

                        const response = await axios({
                            url: downloadLink,
                            method: 'GET',
                            responseType: 'stream'
                        });

                        response.data.pipe(writer);

                        writer.on('finish', () => {
                            api.sendMessage({
                                body: `🎶 Here's your music ${selectedTrack.title}.\n\nEnjoy listening!`,
                                attachment: fs.createReadStream(filePath),
                            }, event.threadID, () => fs.unlinkSync(filePath));
                        });

                        writer.on('error', (err) => {
                            console.error(err);
                            api.sendMessage("🚧 | An error occurred while processing your request.", event.threadID);
                        });
                    } catch (error) {
                        console.error(error);
                        api.sendMessage(`🚧 | An error occurred while processing your request: ${error.message}`, event.threadID);
                    }
                });
            } else {
                api.sendMessage("❓ | Sorry, couldn't find the requested music.", event.threadID);
            }
        } catch (error) {
            console.error(error);
            api.sendMessage("🚧 | An error occurred while processing your request.", event.threadID);
        }
    }
};
