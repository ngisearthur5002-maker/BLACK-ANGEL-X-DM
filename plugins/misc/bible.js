module.exports = (sock) => {
  return async ({ command, msg }) => {
    const jid = msg.key.remoteJid;

    if (command === "verse") {
      const verses = [
        "Philippiens 4:13 - Je puis tout par celui qui me fortifie.",
        "Proverbes 3:5 - Confie-toi en l'Éternel de tout ton cœur.",
        "Psaume 23:1 - L'Éternel est mon berger, je ne manquerai de rien."
      ];

      const v = verses[Math.floor(Math.random() * verses.length)];

      await sock.sendMessage(jid, {
        text: `📖 VERSET DU JOUR:\n\n${v}`
      });
    }

    if (command === "prayer") {
      await sock.sendMessage(jid, {
        text: `🙏 PRIÈRE:\n\nSeigneur, guide mes pas aujourd’hui,\nprotège mes projets et donne-moi la sagesse. Amen.`
      });
    }
  };
};