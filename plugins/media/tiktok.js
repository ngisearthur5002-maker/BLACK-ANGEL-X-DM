const axios = require("axios");

module.exports = (sock) => {
  return async ({ command, args, msg }) => {
    const jid = msg.key.remoteJid;

    if (command !== "tiktok") return;

    const url = args[0];
    if (!url) {
      return sock.sendMessage(jid, {
        text: "🎵 Utilisation: .tiktok <lien>"
      });
    }

    try {
      const api = `https://api.vreden.my.id/api/tiktok?url=${url}`;
      const res = await axios.get(api);

      const data = res.data;

      await sock.sendMessage(jid, {
        video: { url: data.result.video },
        caption: "🎵 TikTok Download - BLACK ANGEL X MD"
      });

    } catch (e) {
      await sock.sendMessage(jid, {
        text: "❌ Erreur TikTok download"
      });
    }
  };
};