const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "audiosurah",
    alias: ["audiosurah"],
    desc: "Download Audio From audiosurah",
    type: "islami",
    example: "Example : %prefix%command 1",
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        ZimBotInc.sendFile(m.from, global.api("zenz", `/islami/quran/audio/${text}`, {}, "apikey"), "", m)
    },
    isQuery: true
}