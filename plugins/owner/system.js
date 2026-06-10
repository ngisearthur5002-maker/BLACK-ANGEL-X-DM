const config = require("../../config/settings");

module.exports = (sock) => {
  return async ({ command, args, msg }) => {
    const jid = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;

    const owner = config.ownerNumber;

    // 🛑 sécurité owner
    if (!sender.includes(owner)) return;

    // ⚡ PING BOT
    if (command === "ping") {
      return sock.sendMessage(jid, {
        text: "⚡ BLACK ANGEL X MD ONLINE"
      });
    }

    // 🔄 RESTART LOGIC (soft)
    if (command === "restart") {
      await sock.sendMessage(jid, {
        text: "🔄 Redémarrage en cours..."
      });

      process.exit(1);
    }

    // 📊 INFO SYSTEM
    if (command === "system") {
      const uptime = process.uptime();

      return sock.sendMessage(jid, {
        text:
          `👑 BLACK ANGEL SYSTEM\n\n` +
          `⏱ Uptime: ${uptime.toFixed(0)}s\n` +
          `📡 Status: ONLINE\n` +
          `⚙️ Mode: ${config.mode}`
      });
    }
  };
};