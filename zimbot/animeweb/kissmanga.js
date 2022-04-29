const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kissmanga",
    alias: ["kissmangasearch"],
    desc: "Kissmanga Search Information",
    type: "ZIM ANIME",
    example: `Example : %prefix%command love`,
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/kissmanga", { query: text }, "apikey"))
        let caption = `Kissmanga Search :\n\n`
        for (let i of fetch.result) {
            caption += `*💮 Title :* ${i.manga_name}\n`
            caption += `*💮 Link :* ${i.manga_url}\n\n`
        }
        ZimBotInc.sendText(m.from, caption, m)
    },
    isQuery: true
}