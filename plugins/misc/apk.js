module.exports = {
command:["apk"],

async execute(sock,m,args){

if(!args.length)
return m.reply(
".apk WhatsApp"
)

m.reply(`
🔎 APK Search

Recherche :
${args.join(" ")}

(API APK à connecter)
`)
}
}