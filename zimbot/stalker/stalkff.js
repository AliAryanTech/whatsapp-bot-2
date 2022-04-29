const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkff",
    alias: ["nickff"],
    desc: "Free Fire Stalker",
    type: "stalker",
    example: `Example : %prefix%command 552992060`,
    exec: async(killua, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/api/nickff", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Free Fire Stalker :\n\n`
        let i = fetch.result
        caption += `*💮 GameId :* ${i.gameId}\n`
        caption += `*💮 UserName :* ${i.userName}\n`
        ZimBotInc.sendText(m.from, caption, m)
    },
    isQuery: true
}