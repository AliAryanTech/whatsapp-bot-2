const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "animequotes",
    alias: ["animequote"],
    desc: "Search quotes from anime",
    type: "search",
    example: `Example : %prefix%command naruto`,
    exec: async(ZimBotInc, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/searching/animequotes", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Anime Quotes Query : ${toUpper(text)}\n\n`
        let i = fetch.result
        caption += `*💮 Quotes :* ${i.quotes}\n\n`
        caption += `*💮 Character :* ${i.character}\n`
        caption += `*💮 Anime :* ${i.anime}\n`
        caption += `*💮 Episode :* ${i.episode}\n\n`
        ZimBotInc.sendFile(m.from, i.thumb, "", m, { caption })
    },
    isQuery: true
}