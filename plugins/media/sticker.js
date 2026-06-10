module.exports = (sock) => {
  return async ({ command, msg }) => {
    const jid = msg.key.remoteJid;

    if (command !== "sticker") return;

    const message = msg.message?.imageMessage;

    if (!message) {
      return sock.sendMessage(jid, {
        text: "📸 Réponds à une image avec .sticker"
      });
    }

    const buffer = await sock.downloadMediaMessage(msg);

    await sock.sendMessage(jid, {
      sticker: buffer
    });
  };
};