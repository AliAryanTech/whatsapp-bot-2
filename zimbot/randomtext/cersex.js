let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "cersex",
    alias: ["ceritasex"],
    desc: "Generate Random Cerita Sex",
    type: "randomtext",
    example: `Example : %prefix%command`,
    exec: async(ZimBotInc, m, {}) => {
        let fetch = await fetchUrl(global.api("zenz", "/randomtext/cersex2", {}, "apikey"))
        let caption = `Generate Random Cersex :\n\n`
        caption += `*💮  TITLE :* ${fetch.result.Judul}\n`
        caption += `*💮 STORY :* ${fetch.result.Cerita}\n\n`
        //ZimBotInc.sendFile(m.from,fetch.result.Thumb, "", m, { caption }) yg gambarnya kena internet positif
        ZimBotInc.sendText(m.from, caption, m)
    }
}