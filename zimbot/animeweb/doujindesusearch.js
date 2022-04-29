const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "doujindesusearch",
    alias: ["doujinsearch"],
    desc: "Doujindesu Search Information",
    type: "ZIM ANIME",
    example: `Example : %prefix%command love`,
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/doujindesu/search", { query: text }, "apikey"))
        let caption = `Doujindesu Search :\n\n`
        for (let i of fetch.result) {
            caption += `*💮 TITLE :* ${i.title}\n`
            caption += `*💮 SCORE :* ${i.score}\n`
            caption += `*💮 STATUS :* ${i.status}\n`
            caption += `*💮 LINK :* ${i.link}\n\n`
        }
        ZimBotInc.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}