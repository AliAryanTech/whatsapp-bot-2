module.exports = {
    name: "trumpcomment",
    alias: ["trc","trumptweet"],
    desc: "Trump Twitter Comment Maker",
    type: "creator",
    example: "Example : %prefix%command text",
    exec: async(ZimBotInc, m, { text }) => {
        global.mess("wait", m)
        ZimBotInc.sendFile(m.from, global.api("zenz", "/creator/trump", {text: text}, "apikey"), "", m)
    },
    isQuery: true
}