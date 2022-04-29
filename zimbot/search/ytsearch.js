const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "ytsearch",
    alias: ["yts","ytsr"],
    desc: "Search Video From YouTube",
    type: "search",
    example: "Example : %prefix%command DRIPS OFC",
    exec: async(ZimBotInc, m, { command, text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/searching/ytsearch", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `YouTube Search Query : ${toUpper(text)}\n\n`
        let result = fetch.result.filter(v => v.type == "video").map(v => v)
        for (let i of result) {
            caption += `*💮 TITLE :* ${i.title}\n`
            caption += `*💮 DESC :* ${i.description}\n`
            caption += `*💮 TYPE :* ${i.type}\n`
            caption += `*💮 ID :* ${i.videoId}\n`
            caption += `*💮 URL :* ${i.url}\n`
            caption += `*💮 DURATION :* ${i.timestamp}\n`
            caption += `*💮 UPLOAD :* ${i.ago}\n`
            caption += `*💮 VIEWS :* ${i.views}\n`
            caption += `*💮 AUTHOR :* ${i.author.name}\n`
            caption += `\n─────────────────\n\n`
        }
        ZimBotInc.sendFile(m.from, result[0].thumbnail, "", m, { caption })
    },
    isQuery: true
}