module.exports = {
command:["hidetag"],

async execute(sock,m,args){

if(!m.isGroup) return

const metadata =
await sock.groupMetadata(m.chat)

const members =
metadata.participants.map(v=>v.id)

const text = args.join(" ")

await sock.sendMessage(
m.chat,
{
text:text || "📢 Hidden Tag",
mentions:members
},
{quoted:m}
)

}
}