const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "tiktokmp3",
    alias: ["tiktokmp3","ttmp3","tiktokaudio"],
    desc: "Download Media From https://tiktok.com",
    type: "downloader",
    example: "Example : %prefix%command https://www.tiktok.com/@vernalta/video/695975110141126579",
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/musically", { url: isUrl(text)[0] }, "apikey"))
        let buttons = [
            {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'WITH WATERMARK'}, type: 1},
            {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'WITHOUT WATERMARK'}, type: 1}
        ]
        let buttonMessage = {
            video: { url: fetch.result.prefiew },
            caption: `Download Tiktok From : ${isUrl(text)[0]}`,
            footer: 'ZIM BOT INC 2022',
            buttons: buttons,
            headerType: 5
        }
        ZimBotInc.sendMessage(m.from, buttonMessage, { quoted: m })
        ZimBotInc.sendFile(m.from, fetch.result.audio, "", m)
    },
    isQuery: true
}