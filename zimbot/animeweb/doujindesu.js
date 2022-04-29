const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "doujindesu",
    alias: ["doujinlatest"],
    desc: "Latest Doujindesu Information",
    type: "ZIM ANIME",
    example: `Example : %prefix%command`,
    exec: async(ZimBotInc, m, {}) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/anime/doujindesu/latest", {}, "apikey"))
        let caption = `Doujindesu Latest :\n\n`
        for (let i of fetch.result) {
            caption += `*💮 TITLE :* ${i.title}\n`
            caption += `*💮 SCORE :* ${i.score}\n`
            caption += `*💮 STATUS :* ${i.status}\n`
            caption += `*💮 LINK :* ${i.link}\n\n`
        }
        ZimBotInc.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
}