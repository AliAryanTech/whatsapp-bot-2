const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jadwalbioskop",
    alias: ["jadwalbioskop"],
    desc: "Search Jadwal From Jadwalnonton",
    type: "ZIM WEB",
    example: `Example : %prefix%command Jakarta`,
    exec: async(ZimBotInc, m, { text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/jadwalbioskop", { kota: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `City Cinema Schedule : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `*💮 LOCATION :* ${i.title}\n`
            caption += `*💮 THUMB :* ${i.thumb}\n`
            caption += `*💮 URL :* ${i.url}\n\n`
        }
        ZimBotInc.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}
