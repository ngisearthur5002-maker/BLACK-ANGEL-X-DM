const yts = require("yt-search")

module.exports = {
command:["video"],

async execute(sock,m,args){

if(!args.length)
return m.reply("Exemple : .video Davido")

const result =
await yts(args.join(" "))

const video =
result.videos[0]

if(!video)
return m.reply("Aucun résultat")

await sock.sendMessage(
m.chat,
{
video:{url:video.thumbnail},
caption:video.title
},
{quoted:m}
)

}
}