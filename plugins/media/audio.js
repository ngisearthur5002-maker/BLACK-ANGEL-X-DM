const axios = require("axios");

module.exports = (sock) => {
  return async ({ command, args, msg }) => {
    const jid = msg.key.remoteJid;

    if (command !== "yta") return;

    const url = args[0];
    if (!url) {
      return sock.sendMessage(jid, {
        text: "🎵 Utilisation: .yta <lien youtube>"
      });
    }

    try {
      const api = `https://api.vreden.my.id/api/ytmp3?url=${url}`;
      const res = await axios.get(api);

      const data = res.data;

      await sock.sendMessage(jid, {
        audio: { url: data.result.downloadUrl },
        mimetype: "audio/mp4"
      });

    } catch (e) {
      await sock.sendMessage(jid, {
        text: "❌ Erreur audio YouTube"
      });
    }
  };
};