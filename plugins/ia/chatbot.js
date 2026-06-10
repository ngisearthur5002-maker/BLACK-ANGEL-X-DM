module.exports = {
command:["chatbot"],

async execute(sock,m){

if(!global.chatbot)
global.chatbot = {}

global.chatbot[m.chat] =
!global.chatbot[m.chat]

m.reply(

global.chatbot[m.chat]
? "🤖 ChatBot Activé"
: "❌ ChatBot Désactivé"

)

}
}