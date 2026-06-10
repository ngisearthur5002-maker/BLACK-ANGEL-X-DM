const axios = require("axios");

module.exports = (sock) => {
  return async ({ command, args, msg }) => {
    const jid = msg.key.remoteJid;

    if (command !== "facebook") return;

    const url = args[0];
    if (!url) {
      return sock.sendMessage(jid, {
        text: "📥 Utilisation: .facebook <lien>"
      });
    }

    try {
      const api = `https://api.vreden.my.id/api/fbdown?url=${url}`;
      const res = await axios.get(api);

      const data = res.data;

      await sock.sendMessage(jid, {
        video: { url: data.result.url },
        caption: "📥 Facebook Download - BLACK ANGEL X MD"
      });

    } catch (e) {
      await sock.sendMessage(jid, {
        text: "❌ Erreur téléchargement Facebook"
      });
    }
  };
};