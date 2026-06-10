const fs = require("fs");

module.exports = (sock) => {
  const deletedCache = {};

  return async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;
    const fromMe = msg.key.fromMe;

    // 🧠 capturer tous les messages
    if (!deletedCache[jid]) deletedCache[jid] = [];

    if (msg.message) {
      deletedCache[jid].push({
        id: msg.key.id,
        sender: msg.key.participant || msg.key.remoteJid,
        message: msg.message,
        time: Date.now()
      });

      // garder seulement les 50 derniers messages
      deletedCache[jid] = deletedCache[jid].slice(-50);
    }

    // ❌ détection suppression (anti-delete / anti-purge)
    sock.ev.on("messages.delete", async (deleted) => {
      try {
        const keys = deleted.keys;

        for (const key of keys) {
          const chat = key.remoteJid;

          const found = deletedCache[chat]?.find(m => m.id === key.id);

          if (found) {
            await sock.sendMessage(chat, {
              text:
                `🛡️ ANTI-PURGE DETECTÉ\n\n` +
                `👤 Message supprimé détecté\n` +
                `📌 ID: ${found.id}\n` +
                `⏰ Récupération activée`
            });
          }
        }
      } catch (e) {
        console.log("Anti-purge error:", e);
      }
    });
  };
};