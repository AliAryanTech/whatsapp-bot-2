const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "emojis",
    alias: ["emos", "emoji2"],
    desc: "Convert Emojis 2 To Sticker",
    type: "convert",
    example: `List Type :\n\n${type().sort((a, b) => a - b).join("\n")}\n\nExample : %prefix%command <type> <text>`,
    exec: async(ZimBotInc, m, { command, prefix, text, args }) => {
        if (!text) return m.reply(`Example : ${prefix + command} apple `)
        type = args[0].toLowerCase()
        let [text1, ...text2] = text.replace(args[0], "").trimStart().split`|`
        text2 = text2.join("|")
        let fetch = await fetchUrl(global.api("zenz", `/api/emoji`, {query: text1}, "apikey"))
        switch(type) {
            case "apple": 
                ZimBotInc.sendFile(m.from, fetch.result.apple, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "google":
                ZimBotInc.sendFile(m.from, fetch.result.google, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "samsung":
                ZimBotInc.sendFile(m.from, fetch.result.samsung, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "microsoft":
                ZimBotInc.sendFile(m.from, fetch.result.microsoft, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "whatsapp":
                ZimBotInc.sendFile(m.from, fetch.result.whatsapp, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "twitter":
                ZimBotInc.sendFile(m.from, fetch.result.twitter, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "facebook":
                ZimBotInc.sendFile(m.from, fetch.result.facebook, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "jooxpixel":
                ZimBotInc.sendFile(m.from, fetch.result.jooxPixel, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "openemoji":
                ZimBotInc.sendFile(m.from, fetch.result.openemoji, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "emojidex":
                ZimBotInc.sendFile(m.from, fetch.result.emojidex, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "messanger":
                ZimBotInc.sendFile(m.from, fetch.result.messanger, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "lg":
                ZimBotInc.sendFile(m.from, fetch.result.LG, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "htc":
                ZimBotInc.sendFile(m.from, fetch.result.HTC, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "mozilla":
                ZimBotInc.sendFile(m.from, fetch.result.mozilla, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "softbank":
                ZimBotInc.sendFile(m.from, fetch.result.softbank, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "docomo":
                ZimBotInc.sendFile(m.from, fetch.result.docomo, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
            case "kddi":
                ZimBotInc.sendFile(m.from, fetch.result.KDDI, "", m, { asSticker: true, author: global.author, packname: global.packname, categories: ['😄','😊'] })
            break
        }
    },
    isQuery: true
}

function type() {
    return ["apple", "google","samsung", "microsoft", "whatsapp", "twitter", "facebook", "jooxpixel", "openemoji", "emojidex", "messanger", "lg", "htc", "mozilla", "softbank", "docomo", "kddi"]
}