const { GoogleGenerativeAI } = require("@google/generative-ai")

module.exports = {
command: ["gemini", "ai"],

async execute(sock, m, args) {

if (!args.length)
return m.reply("Exemple : .gemini Qui est Nikola Tesla ?")

try {

const genAI = new GoogleGenerativeAI(
process.env.GEMINI_API_KEY
)

const model = genAI.getGenerativeModel({
model: "gemini-1.5-flash"
})

const prompt = args.join(" ")

const result = await model.generateContent(prompt)

const response =
result.response.text()

await sock.sendMessage(
m.chat,
{
text:
`🧠 BLACK AI\n\n${response}`
},
{ quoted: m }
)

} catch (err) {

console.log(err)

m.reply(
"Erreur Gemini API"
)

}

}
}