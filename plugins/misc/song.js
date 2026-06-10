const yts = require("yt-search")

module.exports = {
command:["song"],

async execute(sock,m,args){

if(!args.length)
return m.reply("Exemple : .song Burna Boy")

const search =
await yts(args.join(" "))

const video = search.videos[0]

if(!video)
return m.reply("Aucun résultat")

await sock.sendMessage(
m.chat,
{
text:
`🎵 ${video.title}

🔗 ${video.url}`
},
{quoted:m}
)

}
}