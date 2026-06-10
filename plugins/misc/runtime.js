module.exports = {
command: ["runtime"],
category: "main",

async execute(sock,m){

const uptime = process.uptime()

const h = Math.floor(uptime / 3600)
const mnt = Math.floor((uptime % 3600) / 60)
const s = Math.floor(uptime % 60)

await sock.sendMessage(
m.chat,
{
text: `⏳ Runtime\n\n${h}h ${mnt}m ${s}s`
},
{ quoted:m }
)

}
}