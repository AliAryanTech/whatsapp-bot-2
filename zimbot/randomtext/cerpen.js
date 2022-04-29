let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cerpen",
    alias: ["ceritapendek"],
    desc: "Generate Random Cerita Pendek",
    type: "randomtext",
    example: `Example : %prefix%command`,
    exec: async(ZimBotInc, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomtext/cerpen", {}, "apikey"))
        let caption = `Generate Random Cerpen :\n\n`
        caption += `*💮 TITLE :* ${fetch.result.Judul}\n`
        caption += `*💮 WRITER :* ${fetch.result.Penulis}\n\n`
        caption += `*💮 STORY :* ${fetch.result.cerita}\n\n`
        caption += `*💮 SOURCE :* ${fetch.result.sumber}\n`
        ZimBotInc.sendText(m.from, caption, m)
    }
}