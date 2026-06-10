module.exports = {
command:["owner"],

async execute(sock,m){

await sock.sendContact(
m.chat,
[
{
displayName:"BLACK ANGEL",
vcard:
`BEGIN:VCARD
VERSION:3.0
FN:BLACK ANGEL
TEL;type=CELL:+243XXXXXXXXX
END:VCARD`
}
],
m
)

}
}