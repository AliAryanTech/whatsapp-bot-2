const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "webtoons",
    alias: ["webtoon"],
    desc: "Search story From webtoons",
    type: "ZIM WEB",
    example: `Example : %prefix%command love`,
    exec: async(ZimBotInc, m, { text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/webtoons", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Webtoons Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `*💮 TITLE :* ${i.judul}\n`
            caption += `*💮 LIKE :* ${i.like}\n`
            caption += `*💮 CREATOR :* ${i.creator}\n`
            caption += `*💮 GENRE :* ${i.genre}\n`
            caption += `*💮 THUMBNAIL :* ${i.thumbnail}\n`
            caption += `*💮 URL :* ${i.url}\n\n`
        }
        //ZimBotInc.sendFile(m.from, fetch.result[0].img, "", m, { caption }) yg gambarnya kena internet positif
        ZimBotInc.sendText(m.from, caption, m)
    },
    isQuery: true
}
