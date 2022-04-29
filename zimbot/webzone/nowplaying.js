const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "nowplaying",
    alias: ["nowplayingbioskop"],
    desc: "Search Jadwal From Jadwalnonton",
    type: "ZIM WEB",
    example: `Example : %prefix%command`,
    exec: async(ZimBotInc, m, {}) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/nowplayingbioskop", {}, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Now Bioskop Playing :\n\n`
        for (let i of fetch.result) {
            caption += `*💮 TITLE :* ${i.title}\n`
            caption += `*💮 THUMB :* ${i.img}\n`
            caption += `*💮 URL :* ${i.url}\n\n`
        }
        ZimBotInc.sendFile(m.from, fetch.result[0].img, "", m, { caption })
    },
}
