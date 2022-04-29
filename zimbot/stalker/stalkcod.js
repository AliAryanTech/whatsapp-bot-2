const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkcod",
    alias: ["nickcod"],
    desc: "Call of Duty Stalker",
    type: "stalker",
    example: `Example : %prefix%command 6290150021186841472`,
    exec: async(ZimBotInc, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/api/nickcod", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Call of Duty Stalker :\n\n`
        let i = fetch.result
        caption += `*💮 GameId :* ${i.gameId}\n`
        caption += `*💮 UserName :* ${i.userName}\n`
        ZimBotInc.sendText(m.from, caption, m)
    },
    isQuery: true
}