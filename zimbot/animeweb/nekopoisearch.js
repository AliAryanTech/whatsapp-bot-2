const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nekopoisearch",
    alias: ["nekosearch"],
    desc: "Nekopoi Search Information",
    type: "ZIM ANIME",
    example: `Example : %prefix%command love`,
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/nekopoi/search", { query: text }, "apikey"))
        let caption = `Nekopoi Search :\n\n`
        for (let i of fetch.result) {
            caption += `*💮 Title :* ${i.title}\n`
            caption += `*💮 Link :* ${i.link}\n\n`
        }
        //ZimBotInc.sendFile(m.from, fetch.result[0].img, "", m, { caption }) yg gambarnya kena internet positif
        ZimBotInc.sendText(m.from, caption, m)
    },
    isQuery: true
}