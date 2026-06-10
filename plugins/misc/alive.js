module.exports = {
command: ["alive","online"],
category: "main",

async execute(sock,m){

const txt = `
╭━━〔 🤖 BLACK ANGEL X MD 〕━━⬣

✅ Status : ONLINE
⚡ Speed : Stable
🧠 Engine : BLACK AI
📡 Mode : Multi Device
🔥 Version : 5.0

Owner : BLACK ANGEL

╰━━━━━━━━━━━━━━⬣
`

await sock.sendMessage(
m.chat,
{ text: txt },
{ quoted: m }
)

}
}