let { fetchBuffer, fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "gimage",
    alias: ["image"],
    desc: "Search Image from Google",
    type: "search",
    example: "Example : %prefix%command ZimBotInc",
    exec: async(ZimBotInc, m, { text, command, toUpper }) => {
        global.mess("wait", m)
        if (!text) return m.reply(`Example : ${prefix + command} ZimBotInc Zoldyck`)
        let fetch = await fetchUrl(global.api("zenz", "/searching/gimage", { query: text }, "apikey"))
        let random = fetch.result[Math.floor(Math.random() * fetch.result.length)]
        let buttons = [
            {buttonId: `pinterest ${text}`, buttonText: { displayText: 'NEXT PIC'}, type: 1 }
        ]
        let buttonMessage = {
            image: { url: random },
            caption: `Search Google Image Query : ${toUpper(text)}`,
            footer: `ZIMBOT INC 2022`,
            buttons: buttons,
            headerType: 4
        }
        ZimBotInc.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}