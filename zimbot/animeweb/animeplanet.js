const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "animeplanet",
    alias: ["animeplanetasearch"],
    desc: "Animeplanet Search Information",
    type: "ZIM ANIME",
    example: `Example : %prefix%command love`,
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/animeplanet", { query: text }, "apikey"))
        let caption = `Animeplanet Search :\n\n`
        for (let i of fetch.result) {
            caption += `*💮 TITLE :* ${i.manga_name}\n`
            caption += `*💮 LINK :* ${i.manga_url}\n\n`
        }
        //ZimBotInc.sendFile(m.from, fetch.result[0].manga_thumb, "", m, { caption }) yg gambarnya kena internet positif
        ZimBotInc.sendText(m.from, caption, m)
    },
    isQuery: true
}