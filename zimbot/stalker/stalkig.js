const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkig",
    alias: ["instagramstalk"],
    desc: "Instagram Profile Stalker",
    type: "stalker",
    example: `Example : %prefix%command zhwzein`,
    exec: async(ZimBotInc, m, { text, command, prefix, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/api/stalker/ig", { username: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Instagram Profile Stalker :\n\n`
        let i = fetch.result.caption
        caption += `💮 Fullname : ${i.full_name}\n`
        caption += `💮 User_name : ${i.user_name}\n`
        caption += `💮 Userid : ${i.user_id}\n`
        caption += `💮 Followers : ${i.followers}\n`
        caption += `💮 Following : ${i.following}\n`
        caption += `💮 Bussines : ${i.bussines}\n`
        caption += `💮 Profesional : ${i.profesional}\n`
        caption += `💮 Verified : ${i.verified}\n`
        caption += `💮 Private : ${i.private}\n`
        caption += `💮 Biography : ${i.biography}\n`
        caption += `💮 Url : ${i.bio_url}\n\n`
        ZimBotInc.sendFile(m.from, i.profile_hd, "", m, { caption })
    },
    isQuery: true
}