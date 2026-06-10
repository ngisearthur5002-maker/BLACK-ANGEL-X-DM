module.exports = {
command:["autoreact"],

async execute(sock,m){

if(!global.autoreact)
global.autoreact = {}

global.autoreact[m.chat] =
!global.autoreact[m.chat]

m.reply(

global.autoreact[m.chat]
? "😀 AutoReact Activé"
: "❌ AutoReact Désactivé"

)

}
}