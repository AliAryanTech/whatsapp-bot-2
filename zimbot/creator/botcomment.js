module.exports = {
    name: "botcomment",
    alias: ["botmaker","botc"],
    desc: "Bot Comment Maker",
    type: "creator",
    example: "Example : %prefix%command text",
    exec: async(ZimBotInc, m, { text }) => {
        ZimBotInc.sendFile(m.from, global.api("zenz", "/creator/botcomment", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}