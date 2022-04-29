const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "emoji",
    alias: ["emo"],
    desc: "Convert Emoji To Sticker",
    type: "convert",
    example: "Example : %prefix%command 😅",
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/api/emoji", {query: text}, "apikey"))
        ZimBotInc.sendFile(m.from, fetch.result.google, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
    },
    isQuery: true
}