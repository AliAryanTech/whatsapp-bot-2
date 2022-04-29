const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "jadwaltv",
    alias: ["jadwaltv"],
    desc: "Search jadwal tv",
    type: "search",
    example: `Example : %prefix%command gtv\n
    query:

    💮 rcti
    💮 nettv
    💮 antv
    💮 gtv
    💮 indosiar
    💮 inewstv
    💮 kompastv
    💮 metrotv
    💮 mnctv
    💮 rtv
    💮 sctv
    💮 trans7
    💮 transtv
    💮 tvone
    💮 tvri
    `,
    exec: async(ZimBotInc, m, { text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/searching/jadwaltv", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Jadwal TV Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result.jadwal) {
            caption += `💮 Acara : ${i.acara}\n`
            caption += `💮 Time : ${i.time}\n\n`
        }
        ZimBotInc.sendText(m.from, caption, m)
    },
    isQuery: true
}
