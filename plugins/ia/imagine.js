const axios = require("axios")

module.exports = {
command:["imagine"],

async execute(sock,m,args){

if(!args.length)
return m.reply(
"Exemple : .imagine Black angel robot futuriste"
)

const prompt =
encodeURIComponent(
args.join(" ")
)

const image =
`https://image.pollinations.ai/prompt/${prompt}`

await sock.sendMessage(
m.chat,
{
image:{url:image},
caption:
`🎨 BLACK ANGEL AI IMAGE

Prompt :
${args.join(" ")}`
},
{quoted:m}
)

}
}