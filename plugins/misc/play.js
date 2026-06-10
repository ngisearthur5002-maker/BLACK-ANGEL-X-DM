const yts = require("yt-search")

module.exports = {
command: ["play"],

async execute(sock, m, args) {

if (!args.length)
return m.reply("Exemple : .play Fally Ipupa")

const query = args.join(" ")

const search = await yts(query)

if (!search.videos.length)
return m.reply("Aucun résultat trouvé")

const video = search.videos[0]

const txt = `
🎵 BLACK ANGEL PLAYER

📌 Titre : ${video.title}
⏱️ Durée : ${video.timestamp}
👀 Vues : ${video.views}
📺 Chaîne : ${video.author.name}

🔗 ${video.url}
`

await sock.sendMessage(
m.chat,
{
image: { url: video.thumbnail },
caption: txt
},
{ quoted: m }
)

}
}