const axios = require("axios")

module.exports = {
command:["weather"],

async execute(sock,m,args){

if(!args.length)
return m.reply(
".weather Lubumbashi"
)

const city =
args.join(" ")

const url =
`https://wttr.in/${city}?format=3`

const {data} =
await axios.get(url)

m.reply(`☁️ ${data}`)

}
}