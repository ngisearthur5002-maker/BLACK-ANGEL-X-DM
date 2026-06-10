module.exports = {
command: ["ping"],
category: "main",
desc: "Check bot speed",

async execute(sock, m) {

const start = Date.now()

const msg = await sock.sendMessage(
m.chat,
{ text: "🏓 Testing..." },
{ quoted: m }
)

const end = Date.now()

await sock.sendMessage(
m.chat,
{
text: `🏓 Pong!\n⚡ Speed : ${end - start} ms`
},
{ quoted: m }
)

}
}