module.exports = {
command:["tagadmins"],

async execute(sock,m){

const metadata =
await sock.groupMetadata(m.chat)

const admins =
metadata.participants
.filter(v=>v.admin)
.map(v=>v.id)

let txt="👑 GROUP ADMINS\n\n"

admins.forEach((a,i)=>{

txt += `${i+1}. @${a.split("@")[0]}\n`

})

await sock.sendMessage(
m.chat,
{
text:txt,
mentions:admins
},
{quoted:m}
)

}
}