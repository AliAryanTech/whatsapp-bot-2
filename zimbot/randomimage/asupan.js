let { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "asupan",
    alias: ["randomasupan"],
    desc: "Generate Random TikTok Asupan",
    type: "randomimage",
    example: `Example : %prefix%command`,
    exec: async(ZimBotInc, m, {}) => {
        let fetch = await global.api("zenz", "/api/random/asupan", {}, "apikey")
        ZimBotInc.sendFile(m.from, fetch, "", m, { caption: "Random TikTok Asupan" })
    }
}