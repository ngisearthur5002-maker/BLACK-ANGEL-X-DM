module.exports = (sock) => {
  return async ({ command, msg }) => {
    const jid = msg.key.remoteJid;

    if (command === "motivation") {
      const quotes = [
        "Discipline > motivation.",
        "Commence petit, pense grand.",
        "Le travail silencieux fait les résultats bruyants.",
        "Ton avenir dépend de ce que tu fais aujourd’hui."
      ];

      const q = quotes[Math.floor(Math.random() * quotes.length)];

      await sock.sendMessage(jid, {
        text: `🔥 MOTIVATION:\n\n"${q}"`
      });
    }
  };
};