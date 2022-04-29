const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "gsmarena",
    alias: ["gsmarena"],
    desc: "Search Phone spec From Gsmarena",
    type: "ZIM WEB",
    example: `Example : %prefix%command Poco X3`,
    exec: async(ZimBotInc, m, { text, toUpper }) => {
        global.mess("wait", m)
        let fetch = await fetchUrl(global.api("zenz", "/webzone/gsmarena", { query: text }, "apikey"))
        if (fetch.result.length == 0) return global.mess("error", m)
        let caption = `Gsmarena Search Query : ${toUpper(text)}\n\n`
        caption += `*💮 TITLE :* ${fetch.result.judul}\n`
        caption += `*💮 RELEASE :* ${fetch.result.rilis}\n`
        caption += `*💮 SIZE :* ${fetch.result.ukuran}\n`
        caption += `*💮 TYPE :* ${fetch.result.type}\n`
        caption += `*💮 STORAGE :* ${fetch.result.storage}\n`
        caption += `*💮 DISLAY :* ${fetch.result.display}\n`
        caption += `*💮 INCHES :* ${fetch.result.inchi}\n`
        caption += `*💮 PIXEL :* ${fetch.result.pixel}\n`
        caption += `*💮 VIDEO PIXEL :* ${fetch.result.videoPixel}\n`
        caption += `*💮 RAM :* ${fetch.result.ram}\n`
        caption += `*💮 CHIPSET :* ${fetch.result.chipset}\n`
        caption += `*💮 Battery :* ${fetch.result.batrai}\n`
        caption += `*💮 BATTERY CAPACITY :* ${fetch.result.merek_batre}\n\n`
        caption += `*💮 DETAIL :* ${fetch.result.detail}\n`
        ZimBotInc.sendFile(m.from, fetch.result.thumb, "", m, { caption })
    },
    isQuery: true
}
