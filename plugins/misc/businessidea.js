module.exports = (sock) => {
  return async ({ command, args, msg }) => {
    const jid = msg.key.remoteJid;

    if (command === "businessidea") {
      const ideas = [
        "Vente de crêpes / beignets dans ton quartier",
        "Revente de données mobiles (data reseller)",
        "Mini boutique WhatsApp (vêtements, accessoires)",
        "Service de transfert d'argent local",
        "Achat-revente de téléphones d’occasion",
        "Impression / photocopie mobile",
        "Création de logos simples pour petites entreprises"
      ];

      const random = ideas[Math.floor(Math.random() * ideas.length)];

      await sock.sendMessage(jid, {
        text: `💰 IDÉE BUSINESS DU JOUR:\n\n➡️ ${random}\n\n⚡ Conseil: commence petit mais sois constant.`
      });
    }

    if (command === "profitcalc") {
      const cost = parseFloat(args[0]);
      const sell = parseFloat(args[1]);

      if (!cost || !sell) {
        return sock.sendMessage(jid, {
          text: "❌ Utilisation: .profitcalc 1000 1500"
        });
      }

      const profit = sell - cost;
      const margin = ((profit / cost) * 100).toFixed(2);

      await sock.sendMessage(jid, {
        text: `📊 CALCUL PROFIT:\n\n💸 Coût: ${cost}\n💰 Vente: ${sell}\n📈 Profit: ${profit}\n📊 Marge: ${margin}%`
      });
    }
  };
};