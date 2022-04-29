let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "randomtext",
    alias: ["textrandom"],
    desc: "Generate Random Text & Quotes",
    type: "randomtext",
    example: `List Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type>`,
    exec: async(ZimBotInc, m, { text, toUpper }) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomtext/" + text, {}, "apikey"))
        let buttons = [
            {buttonId: `randomtext ${text}`, buttonText: { displayText: 'NEXT'}, type: 1 }
        ]
        let buttonMessage = {
            text: `Random ${toUpper(text)}\n\n` + fetch.result.message,
            footer: `ZIM BOT INC 2022`,
            buttons: buttons,
            headerType: 4
        }
        ZimBotInc.sendMessage(m.from, buttonMessage, { quoted: m })
    },
    isQuery: true
}

function type() {
    return ["motivasi","dilanquote","bucinquote","katasenja","randomquote", "muslimquote", "galauquote", "kanyequote", "trumpquote", "trumpthink", "creepyfact","faktaunik", "puisi", "pantun"]
}