const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "quran",
    alias: ["listsurah","surah","ayat"],
    desc: `List Surah Of All Quran`,
    type: "islami",
    exec: async(ZimBotInc, m, { text, args, prefix, command }) => {
        let [a, b, c, d] = args
        if (a.toLowerCase() === "list") {
            let fetch = await fetchUrl(global.api("zenz", "/islami/quran", {}, "apikey"))
            let teks = "List Surah\n\n"
            for (let v in fetch.result) {
                teks += `${v}. ${fetch.result[v]}\n`
            }
            ZimBotInc.sendText(m.from, teks, m)
        } else if (a.toLowerCase() == "surah") {
            let fetch = await fetchUrl(global.api("zenz", `/islami/quran/${b}`, {}, "apikey"))
            let { name, revelation, tafsir, verses, number, sequence, numberOfVerses } = fetch.result
            let teks = `
💮 Nama : ${name.long} (${name.transliteration.id}) (${name.translation.id})
💮 Turun : ${revelation.arab} (${revelation.id})
💮 Jumlah : ${numberOfVerses}
💮 Tafsir : ${tafsir.id}\n\n
            `
            for (let i of verses) {
                teks += `
💮 Ayat Ke : ${i.number.inSurah}
💮 Juz : ${i.meta.juz}
💮 Ayat :
${i.text.arab}
- ${i.text.transliteration.en}
- ${i.translation.id}
`
            }
            ZimBotInc.sendText(m.from, teks, m)
            if (c && c.toLowerCase() == "--audio") ZimBotInc.sendFile(m.from, global.api("zenz", `/islami/quran/audio/${b}`, {}, "apikey"), name.long, m)
        } else if (a.toLowerCase() == "ayat") {
            let fetch = await fetchUrl(global.api("zenz", `/islami/quran/${b}/${c}`, {}, "apikey"))
            let { number, meta, text, translation, audio, tafsir, surah } = fetch.result
            let teks = `
💮 Surah : ${surah.name.long} (${surah.name.transliteration.id}) (${surah.name.translation.id})
💮 Ayat Ke : ${number.inSurah}
💮 Juz : ${meta.juz}
💮 Ayat :
- ${text.arab}
- ${text.transliteration.en}
- ${translation.id}\n
💮 Tafsir : ${tafsir.id.long}           
            `
            ZimBotInc.sendText(m.from, teks, m)
            if (d && d.toLowerCase() == "--audio") ZimBotInc.sendFile(m.from, global.api("zenz", `/islami/quran/audio/${b}/${c}`, {}, "apikey"), surah.name.long, m)
        } else {
            return m.reply(`
Example :
- Get List Surah : ${prefix + command} list
- Get Surah : ${prefix + command} surah 1 
Note : ${prefix + command} surah <surah>
- Get Ayat : ${prefix + command} ayat 1 1 
Note : ${prefix + command} ayat <surah> <ayat>
- Get Audio : Get Audio With Ending --audio
Note : ${prefix + command} ayat 1 1 --audio or ${prefix + command} surah 1 --audio
            `)
        }
    }
}

