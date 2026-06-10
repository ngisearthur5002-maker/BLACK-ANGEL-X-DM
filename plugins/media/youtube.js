const axios = require("axios");

module.exports = (sock) => {
  return async ({ command, args, msg }) => {
    const jid = msg.key.remoteJid;

    if (command !== "yt") return;

    const url = args[0];
    if (!url) {
      return sock.sendMessage(jid, {
        text: "📥 Utilisation: .yt <lien youtube>"
      });
    }

    try {
      // API publique simple (remplaçable par ton propre backend)
      const api = `https://api.vreden.my.id/api/ytmp4?url=${url}`;

      const res = await axios.get(api);
      const data = res.data;

      if (!data?.result?.downloadUrl) {
        return sock.sendMessage(jid, {
          text: "❌ Vidéo introuvable"
        });
      }

      await sock.sendMessage(jid, {
        video: { url: data.result.downloadUrl },
        caption: `🎬 BLACK ANGEL X MD\n\n📌 ${data.result.title}`
      });

    } catch (e) {
      await sock.sendMessage(jid, {
        text: "❌ Erreur téléchargement YouTube"
      });
    }
  };
};