const fs = require("fs")

const db="./database/users.json"

module.exports = {
command:["transfer"],

async execute(sock,m,args){

const target =
m.mentionedJid?.[0]

if(!target)
return m.reply(
"Mention utilisateur"
)

const amount =
Number(args[0])

if(isNaN(amount))
return

let users =
JSON.parse(fs.readFileSync(db))

if(!users[m.sender])
return

if(users[m.sender].money < amount)
return m.reply(
"Solde insuffisant"
)

if(!users[target]){

users[target]={
money:1000,
xp:0,
level:1,
premium:false
}

}

users[m.sender].money -= amount
users[target].money += amount

fs.writeFileSync(
db,
JSON.stringify(users,null,2)
)

m.reply(
`✅ ${amount} Coins transférés`
)

}
}