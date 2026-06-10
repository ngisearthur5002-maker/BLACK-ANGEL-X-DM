const fs = require("fs")

const db = "./database/users.json"

module.exports = {
command:["work"],

async execute(sock,m){

let users =
JSON.parse(fs.readFileSync(db))

if(!users[m.sender]){

users[m.sender]={
money:1000,
xp:0,
level:1,
premium:false
}

}

const gain =
Math.floor(
Math.random()*500
)+100

users[m.sender].money += gain

fs.writeFileSync(
db,
JSON.stringify(users,null,2)
)

m.reply(
`💼 Travail terminé

+${gain} Coins`
)

}
}