module.exports = (sock) => {
  let activeGroups = {};

  return async ({ msg, body, command }) => {
    const jid = msg.key.remoteJid;

    if (command === "antilink") {
      const state = body.split(" ")[1];

      if (state === "on") {
        activeGroups[jid] = true;
        await sock.sendMessage(jid, { text: "🚫 Anti-link activé" });
      }

      if (state === "off") {
        activeGroups[jid] = false;
        await sock.sendMessage(jid, { text: "✅ Anti-link désactivé" });
      }
    }

    if (activeGroups[jid]) {
      const linkRegex = /https?:\/\/|www\.|chat\.whatsapp\.com/;
      if (linkRegex.test(body)) {
        await sock.sendMessage(jid, {
          text: "🚫 Lien détecté. Message supprimé."
        });
      }
    }
  };
};