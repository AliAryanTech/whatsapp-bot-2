const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "sfilesearch",
    alias: ["sfilesr"],
    desc: "Search files from solidfiles",
    type: "search",
    example: `Example : %prefix%command gbwa`,
    exec: async(ZimBotInc, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/searching/sfilesearch", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `sfile Search Query : ${toUpper(text)}\n\n`
        for (let i of fetch.result) {
            caption += `*💮 Title :* ${i.name}\n`
            caption += `*💮 Url :* ${i.link}\n\n`
        }
        ZimBotInc.sendText(m.from, caption, m)
    },
    isQuery: true
}
