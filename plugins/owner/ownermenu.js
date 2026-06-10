module.exports = {
command: ["ownermenu"],
category: "menu",

async execute(sock, m) {

const txt = `
╭━━〔 👑 OWNER MENU 〕━━⬣

➤ .shutdown
➤ .restart
➤ .mode
➤ .block
➤ .unblock
➤ .setppbot
➤ .setname
➤ .join
➤ .leave
➤ .broadcast
➤ .clearsession

╰━━━━━━━━━━━━━━⬣
`

await sock.sendMessage(m.chat,{text:txt},{quoted:m})

}
}