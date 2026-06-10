module.exports = {
command:["instagram","ig"],

async execute(sock,m,args){

if(!args[0])
return m.reply(
"Exemple : .instagram lien"
)

m.reply(
"⚠️ API Instagram à connecter"
)

}
}