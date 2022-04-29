const { fetchUrl, isUrl } = require("../../lib/Function")

module.exports = {
    name: "hentaivid",
    alias: ["hentaivideo"],
    desc: "Generate Random Video From hentaivid",
    type: "downloader",
    example: "Example : %prefix%command",
    exec: async(ZimBotInc, m, {}) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/downloader/hentaivid", {}, "apikey"))
        let teks = `*💮 Title :* ${fetch.result.title}\n*💮 Category :* ${fetch.result.category}\n*💮 Share :* ${fetch.result.share_count}\n*💮 Views :* ${fetch.result.views_count}`
        ZimBotInc.sendFile(m.from, fetch.result.video_1, "", m, { caption: teks })
    },
}