const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "mangatoon",
    alias: ["mangatoon"],
    desc: "Mangatoon Search Information",
    type: "ZIM ANIME",
    example: `Example : %prefix%command love`,
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/mangatoon", { query: text }, "apikey"))
        let caption = `Mangatoon Search :\n\n`
        let i = fetch.result
        caption += `*💮 TITLE :* ${i.judul}\n`
        caption += `*💮 Genre :* ${i.genre}\n`
        caption += `*💮 Author :* ${i.Author}\n`
        caption += `*💮 Link :* ${i.Link}\n`
        ZimBotInc.sendFile(m.from, i.thumb, "", m, { caption })
    },
    isQuery: true
}