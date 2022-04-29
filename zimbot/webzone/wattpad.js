const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "wattpad",
    alias: ["wattpad"],
    desc: "Search story From wattpad",
    type: "ZIM WEB",
    example: `Example : %prefix%command love`,
    exec: async(ZimBotInc, m, { text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/wattpad", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Wattpad Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `*💮 TITLE :* ${i.judul}\n`
            caption += `*💮 READ :* ${i.dibaca}\n`
            caption += `*💮 ON VOTE :* ${i.divote}\n`
            caption += `*💮 CHAPTER :* ${i.bab}\n`
            caption += `*💮 TIME :* ${i.waktu}\n`
            caption += `*💮 URL :* ${i.url}\n`
            caption += `*💮 THUMB :* ${i.thumb}\n`
            caption += `*💮 DESCRIPTION :* ${i.description}\n\n`
        }
        ZimBotInc.sendFile(m.from, fetch.result[0].thumb, "", m, { caption })
    },
    isQuery: true
}
