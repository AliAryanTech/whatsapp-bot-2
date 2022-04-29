const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "drakor",
    alias: ["drakor"],
    desc: "Search Korean story From drakorasia",
    type: "ZIM WEB",
    example: `Example : %prefix%command love`,
    exec: async(ZimBotInc, m, { text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/drakor", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Drakor Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `💮 *Judul* : ${i.judul}\n`
            caption += `💮 *Years* : ${i.years}\n`
            caption += `💮 *Genre* : ${i.genre}\n`
            caption += `💮 *Thumbnail* : ${i.thumbnail}\n`
            caption += `💮 *Url* : ${i.url}\n\n`
        }
        ZimBotInc.sendFile(m.from, fetch.result[0].thumbnail, "", m, { caption })
    },
    isQuery: true
}
