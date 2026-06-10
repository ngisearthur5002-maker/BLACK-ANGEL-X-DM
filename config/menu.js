const os = require("os")

module.exports = {
command: ["menu", "help", "commands"],
category: "main",
desc: "Main Menu",

async execute(sock, m, args) {

const uptime = process.uptime()
const hours = Math.floor(uptime / 3600)
const minutes = Math.floor((uptime % 3600) / 60)
const seconds = Math.floor(uptime % 60)

const username = m.pushName || "User"

const menu = `
╭━━━〔 🤖 BLACK ANGEL X MD 🤖 〕━━━⬣

👤 User : ${username}
📱 Platform : ${os.platform()}
⚡ Runtime : ${hours}h ${minutes}m ${seconds}s
🧠 Version : 5.0.0
👑 Owner : BLACK ANGEL

╰━━━━━━━━━━━━━━━━━━━━⬣

╭━━〔 📋 MAIN MENU 〕━━⬣

➤ .aimenu
➤ .downloadmenu
➤ .groupmenu
➤ .ownermenu
➤ .toolsmenu
➤ .searchmenu
➤ .funmenu
➤ .animemenu
➤ .economymenu
➤ .securitymenu

╰━━━━━━━━━━━━━━⬣

╭━━〔 🚀 QUICK COMMANDS 〕━━⬣

➤ .ping
➤ .alive
➤ .runtime
➤ .owner
➤ .script

╰━━━━━━━━━━━━━━⬣

╭━━〔 🔥 BLACK ANGEL SYSTEM 〕━━⬣

➤ Fast Response
➤ Multi Device
➤ Anti Raid
➤ Anti Link
➤ AI Powered
➤ Group Security

╰━━━━━━━━━━━━━━⬣
`

await sock.sendMessage(
m.chat,
{
text: menu
},
{ quoted: m }
)

}
}