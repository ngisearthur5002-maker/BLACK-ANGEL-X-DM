const fs = require("fs")

const db = "./database/users.json"

module.exports = {
command:["daily"],

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

users[m.sender].money += 500

fs.writeFileSync(
db,
JSON.stringify(users,null,2)
)

m.reply(
"🎁 Daily Reward\n\n+500 Coins"
)

}
}