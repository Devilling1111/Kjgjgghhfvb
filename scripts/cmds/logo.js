const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
    name: "logo",
    version: "7.3.1",
    credits: "RB-BADOL-KHAN", // Don't change my credit because I edited
    category: "img"
};

module.exports.onLoad = async() => {
    const { resolve } = path;
    const { existsSync, mkdirSync } = fs;
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const filePath = resolve(__dirname, 'cache/canvas', 'frame0.jpeg');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(filePath)) await downloadFile("https://i.imgur.com/rtoMssd.jpeg", filePath);
};

async function makeImage({ one, two }) {
    const __root = path.resolve(__dirname, "cache", "canvas");

    let batgiam_img = await jimp.read(__root + "/frame0.jpeg");
    let pathImg = __root + `/batman${one}_${two}.jpeg`;
    let avatarOne = __root + `/avt_${one}.jpeg`;
    let avatarTwo = __root + `/avt_${two}.jpeg`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(230, 230), 540, 120).composite(circleTwo.resize(350, 350), 65, 65);
    
    let raw = await batgiam_img.getBufferAsync("image/jpeg");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}

async function circle(image) {
    const imageBuffer = await jimp.read(image);
    imageBuffer.circle();
    return await imageBuffer.getBufferAsync("image/png");
}

module.exports.onStart = async function ({ event, api, args }) {    
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage("Please mention 1 person.", threadID, messageID);
    else {
        const one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "╭━─━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━─━─━╮\n\n⏺️এইযে আপনার লগো জাষ্ট নাম টা গুলা বসায়ে নিন ধন্যবাদ⏺️\n\n╰━─━─━≪𝐌𝐈𝐌•𝐁𝐎𝐓•⓿⓿❼≫━─━─━╯", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
};
