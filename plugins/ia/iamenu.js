module.exports = {
command: ["aimenu"],
category: "menu",

async execute(sock, m) {

const txt = `
╭━━〔 🧠 AI MENU 〕━━⬣

➤ .ai
➤ .gpt
➤ .chatgpt
➤ .gemini
➤ .claude
➤ .bard
➤ .imagine
➤ .dalle
➤ .blackai
➤ .codeai

╰━━━━━━━━━━━━━━⬣
`

await sock.sendMessage(m.chat,{text:txt},{quoted:m})

}
}