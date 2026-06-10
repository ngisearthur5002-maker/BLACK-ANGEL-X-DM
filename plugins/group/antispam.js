const antispam = new Map()

module.exports = {
command: ["antispam"],

async execute(sock, m) {

if (!global.antispam) global.antispam = {}

if (!m.isGroup)
return m.reply("Group only")

const chat = m.chat

global.antispam[chat] = !global.antispam[chat]

m.reply(
global.antispam[chat]
? "✅ AntiSpam Enabled"
: "❌ AntiSpam Disabled"
)

}
}