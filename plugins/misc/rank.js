const fs = require("fs")

const db="./database/users.json"

module.exports = {
command:["rank","leaderboard"],

async execute(sock,m){

const users =
JSON.parse(fs.readFileSync(db))

const sorted =
Object.entries(users)
.sort(
(a,b)=>
b[1].money-a[1].money
)

let text =
"🏆 BLACK ANGEL LEADERBOARD\n\n"

sorted
.slice(0,10)
.forEach((u,i)=>{

text +=
`${i+1}. @${u[0].split("@")[0]} - ${u[1].money} Coins\n`

})

await sock.sendMessage(
m.chat,
{
text,
mentions:sorted
.slice(0,10)
.map(v=>v[0])
}
)

}
}