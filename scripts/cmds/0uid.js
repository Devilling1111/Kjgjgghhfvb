module.exports = {
    config: {
        name: "uid",
        aliases: ["userid"],
        version: "1.1",
        author: "RB-BADOL-KHAN",
        countDown: 5,
        role: 0,
        shortDescription: "uid information",
        longDescription: "uid info",
        category: "uid-info-image",
        guide: {
            en: "{pn} @tag"
        }
    },

    langs: {
        vi: {
            noTag: "Bạn phải tag người bạn muốn lấy ảnh đại diện"
        },
        en: {
            noTag: "You must tag the person you want to get the profile picture of"
        }
    },

    onStart: async function ({ event, message, usersData, getLang }) {
        let avatarUrl;
        const senderId = event.senderID;
        const mentionedId = Object.keys(event.mentions)[0];

        if (event.type === "message_reply") {
            avatarUrl = await usersData.getAvatarUrl(event.messageReply.senderID);
        } else {
            if (!mentionedId) {
                avatarUrl = await usersData.getAvatarUrl(senderId);
            } else {
                avatarUrl = await usersData.getAvatarUrl(mentionedId);
            }
        }

        if (!avatarUrl) {
            return message.reply(getLang("noTag"));
        }

        message.reply({
            body: `${senderId} || ${mentionedId || ""}`,
            attachment: await global.utils.getStreamFromURL(avatarUrl)
        });
    }
};
