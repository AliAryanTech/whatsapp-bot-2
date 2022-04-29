const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tiktok",
    alias: ["ttdl","tiktoknowm","ttnowm"],
    desc: "Download Media From https://tiktok.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.tiktok.com/@vernalta/video/6959751101411265793",
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/musically", { url: isUrl(text)[0] }, "apikey"))
        let buttons = [
            {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'WATERMARK'}, type: 1},
            {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'SONG'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.nowm },
            caption: `Download Tiktok From : ${isUrl(text)[0]}`,
            footer: 'ZIM BOT INC 2O22',
            buttons: buttons,
            headerType: 5
        }
        ZimBotInc.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}