let { fetchBuffer, fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "pin",
    alias: ["pin"],
    desc: "Search Image from Pinterest",
    type: "search",
    example: "Example : %prefix%command ZimBotInc",
    exec: async(ZimBotInc, m, { text, command, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/searching/pinterest", { query: text }, "apikey"))
        let random = fetch.result[Math.floor(Math.random() * fetch.result.length)]
        let buttons = [
            {buttonId: `pin ${text}`, buttonText: { displayText: 'NEXT PIC'}, type: 1 }
        ]  
        let buttonMessage = {
            image: { url: random },
            caption: `Search Pinterest Query : ${toUpper(text)}`,
            footer: `ZIM BOT INC 2022`,
            buttons: buttons,
            headerType: 4
        }
        ZimBotInc.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}