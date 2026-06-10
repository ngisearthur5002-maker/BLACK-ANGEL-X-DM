const fs = require("fs")

module.exports = {
command:["warnings"],

async execute(sock,m){

const file="./database/warns.json"

const warns = JSON.parse(
fs.readFileSync(file)
)

let txt="⚠️ WARN DATABASE\n\n"

for(let user in warns){

txt += `@${user.split("@")[0]} : ${warns[user]}\n`

}

await sock.sendMessage(
m.chat,
{
text:txt,
mentions:Object.keys(warns)
},
{quoted:m}
)

}
}