module.exports = {
    name: "kannagen",
    alias: ["kannagenerator"],
    desc: "Kanna Comment Maker",
    type: "creator",
    example: "Example : %prefix%command text",
    exec: async(ZimBotInc, m, { text }) => {
        ZimBotInc.sendFile(m.from, global.api("zenz", "/creator/kannagen", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}