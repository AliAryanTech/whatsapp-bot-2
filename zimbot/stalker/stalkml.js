const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkml",
    alias: ["nickml"],
    desc: "Mobile Legends Stalker",
    type: "stalker",
    example: `Example : %prefix%command 214885010|2253`,
    exec: async(ZimBotInc, m, { text, command, prefix, toUpper }) => {
        if (!text.includes('|')) return m.reply(`Example : ${prefix + command} ID|SERVER`)
        global.mess("wait", m)
        let text1 = text.split("|")[0]
        let text2 = text.split("|")[1]
        let fetch = await fetchUrl(global.api("zenz", "/api/nickml", { query: text1, query2: text2 }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Mobile Legends Stalker :\n\n`
        let i = fetch.result
        caption += `💮 GameId : ${i.gameId}\n`
        caption += `💮 ZoneId : ${i.zoneId}\n`
        caption += `💮 UserName : ${i.userName}\n`
        ZimBotInc.sendText(m.from, caption, m)
    },
    isQuery: true
}