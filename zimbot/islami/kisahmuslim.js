const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kisahmuslim",
    alias: ["muslim"],
    desc: "The Story of muslim",
    type: "islami",
    example: "Example : %prefix%command",
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/islami/kisahmuslim", {}, "apikey"))
        let teks = `*💮 TITLE :* ${fetch.result.Judul}\n*💮 Kisah :*\n${fetch.result.Cerita}`
        ZimBotInc.sendFile(m.from, fetch.result.Thumb, "", m, { caption: teks })
    },
}