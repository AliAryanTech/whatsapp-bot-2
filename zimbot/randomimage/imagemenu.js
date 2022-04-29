module.exports = {
    name: "imagemenu",
    alias: ["menuimage"],
    desc: "listMessage Random Image From Apis",
    type: "randomimage",
    example: "Example : %prefix%command",
    exec: async(ZimBotInc, m, {}) => {
        const sections = [{
            title: "ZIMBOT IMG",
            rows: [
                {title: "Random Cosplayer", rowId: "randomimage cosplay"},
                {title: "Random darkjoke", rowId: "randomimage darkjoke"},
                {title: "Random Meme", rowId: "randomimage meme"},
                {title: "Random MemeIndo", rowId: "randomimage memeindo"},
                {title: "Random Anime Couple", rowId: "animecouple"},
                {title: "Random Anime", rowId: "randomimage anime"},
                {title: "Random Waifu", rowId: "randomimage waifu"},
                {title: "Random Husbu", rowId: "randomimage husbu"},
                {title: "Random Neko", rowId: "randomimage neko"},
                {title: "Random Shinobu", rowId: "randomimage shinobu"},
                {title: "Random Megumin", rowId: "randomimage megumin"},
                {title: "Random Patrick", rowId: "randomimage patrick"},
            ]
        },
        {
            title: "ZIMBOT IMG 2",
            rows: [
                {title: "Random Waifu [NSFW]", rowId: "randomimage waifus"},
                {title: "Random Neko [NSFW]", rowId: "randomimage nekos"},
                {title: "Random Trap [NSFW]", rowId: "randomimage trap"},
                {title: "Random Blowjob [NSFW]", rowId: "randomimage blowjob"}
            ]
        }]
        const listMessage = {
            text: "Random Image",
            footer: `ZIM BOT INC 2022`,
            buttonText: "ZIMBOT IMG",
            sections
        }
        const sendMsg = await ZimBotInc.sendMessage(m.from, listMessage, { quoted: m })
    }
}