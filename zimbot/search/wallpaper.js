let { fetchBuffer, fetchUrl } = require("../../lib/Function")
let { wallpaper } = require("../../lib/Scraper")

module.exports = {
    name: "wallpaper",
    alias: [],
    desc: "Search Wallpaper from https://www.besthdwallpaper.com",
    type: "search",
    example: "Example : %prefix%command ZimBotInc",
    exec: async(ZimBotInc, m, { text, command, toUpper }) => {
        global.mess("wait", m)
        if (!text) return m.reply(`Example : ${prefix + command} ZimBotInc `)
        let fetch = await wallpaper(text)
        let random = fetch[Math.floor(Math.random() * fetch.length)]
        let buttons = [
            {buttonId: `wallpaper ${text}`, buttonText: { displayText: 'Next Image'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: random.image[0] },
            caption: `Search Wallpaper Query : ${toUpper(text)}`,
            footer: `ZIM BOT INC 2022`,
            buttons: buttons,
            headerType: 4
        }
        ZimBotInc.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}