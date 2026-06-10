module.exports = {
command: ["downloadmenu"],
category: "menu",

async execute(sock, m) {

const txt = `
╭━━〔 📥 DOWNLOAD MENU 〕━━⬣

➤ .play
➤ .song
➤ .video
➤ .ytmp3
➤ .ytmp4
➤ .tiktok
➤ .facebook
➤ .instagram
➤ .twitter
➤ .mediafire
➤ .apk

╰━━━━━━━━━━━━━━⬣
`

await sock.sendMessage(m.chat,{text:txt},{quoted:m})

}
}