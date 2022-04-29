const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "kisahnabi",
    alias: ["nabi"],
    desc: "The Story of the Prophet",
    type: "islami",
    example: "Example : %prefix%command <nabi>\n%prefix%command Muhammad",
    exec: async(ZimBotInc, m, { text }) => {
        if (text) {
            title = text.toLowerCase()
            let fetch = await fetchUrl(global.api("zenz", `/islami/kisahnabi/${title}`, {}, "apikey"))
            let teks = `💮 Nama : ${fetch.result.name}\n💮 Lahir : ${fetch.result.lahir}\n💮 Umur : ${fetch.result.age}\n💮 Lokasi : ${fetch.result.place}\n💮 Kisah :\n${fetch.result.story}`
            ZimBotInc.sendFile(m.from, "https://i.pinimg.com/originals/a6/81/c5/a681c55ca1bee611c39d3b4a58712dc3.jpg", "", m, { caption: teks })
        } else if (!text) {
            const sections = [{
                title: "Kisah Nabi ZIMBOT",
                rows: [
                    {title: "Kisah Nabi Adam", rowId: "kisahnabi adam"},
                    {title: "Kisah Nabi Idris", rowId: "kisahnabi idris"},
                    {title: "Kisah Nabi Nuh", rowId: "kisahnabi nuh"},
                    {title: "Kisah Nabi Hud", rowId: "kisahnabi hud"},
                    {title: "Kisah Nabi Sholeh", rowId: "kisahnabi sholeh"},
                    {title: "Kisah Nabi Ibrahim", rowId: "kisahnabi ibrahim"},
                    {title: "Kisah Nabi Luth", rowId: "kisahnabi luth"},
                    {title: "Kisah Nabi Ismail", rowId: "kisahnabi ismail"},
                    {title: "Kisah Nabi Ishaq", rowId: "kisahnabi ishaq"},
                    {title: "Kisah Nabi Yaqub", rowId: "kisahnabi yaqub"},
                    {title: "Kisah Nabi Yusuf", rowId: "kisahnabi yusuf"},
                    {title: "Kisah Nabi Ayyub", rowId: "kisahnabi ayyub"},
                    {title: "Kisah Nabi Syuaib", rowId: "kisahnabi syuaib"},
                    {title: "Kisah Nabi Musa", rowId: "kisahnabi musa"},
                    {title: "Kisah Nabi Harun", rowId: "kisahnabi harun"},
                    {title: "Kisah Nabi Dzulkifli", rowId: "kisahnabi dzulkifli"},
                    {title: "Kisah Nabi Daud", rowId: "kisahnabi daud"},
                    {title: "Kisah Nabi Sulaiman", rowId: "kisahnabi sulaiman"},
                    {title: "Kisah Nabi Ilyas", rowId: "kisahnabi ilyas"},
                    {title: "Kisah Nabi Ilyasa", rowId: "kisahnabi ilyasa"},
                    {title: "Kisah Nabi Yunus", rowId: "kisahnabi yunus"},
                    {title: "Kisah Nabi Zakariya", rowId: "kisahnabi zakariya"},
                    {title: "Kisah Nabi Yahya", rowId: "kisahnabi yahya"},
                    {title: "Kisah Nabi Isa", rowId: "kisahnabi isa"},
                    {title: "Kisah Nabi Muhammad", rowId: "kisahnabi muhammad"}
                ]
            }]
            const listMessage = {
                text: "25 OTIONS",
                footer: `ZIM BOT INC 2022`,
                buttonText: "MENU LIST",
                sections
            }
            const sendMsg = await ZimBotInc.sendMessage(m.from, listMessage, { quoted: m })
        }
    }
}