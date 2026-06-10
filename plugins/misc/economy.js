const fs = require("fs")

const db = "./database/users.json"

function getUsers() {

if (!fs.existsSync(db))
fs.writeFileSync(db, "{}")

return JSON.parse(
fs.readFileSync(db)
)

}

function save(data) {

fs.writeFileSync(
db,
JSON.stringify(data, null, 2)
)

}

module.exports = {
command: ["balance", "bal"],

async execute(sock, m) {

let users = getUsers()

if (!users[m.sender]) {

users[m.sender] = {
money: 1000,
xp: 0,
level: 1,
premium: false
}

save(users)

}

let user = users[m.sender]

m.reply(
`💰 Balance

Coins : ${user.money}
XP : ${user.xp}
Level : ${user.level}
Premium : ${user.premium ? "Yes" : "No"}`
)

}
}