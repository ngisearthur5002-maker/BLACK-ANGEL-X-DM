const translate =
require("translate-google-api")

module.exports = {
command:["translate","tr"],

async execute(sock,m,args){

if(args.length < 2)
return m.reply(
".translate fr hello"
)

const lang = args[0]

const text =
args.slice(1).join(" ")

const res =
await translate(text,{to:lang})

m.reply(
`🌍 Traduction

${res[0]}`
)

}
}