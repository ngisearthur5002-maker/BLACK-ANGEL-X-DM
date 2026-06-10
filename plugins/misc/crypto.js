module.exports = (sock) => {
  return async ({ command, args, msg }) => {
    const jid = msg.key.remoteJid;

    if (command === "crypto") {
      await sock.sendMessage(jid, {
        text: `₿ CRYPTO BASICS:\n\n• Bitcoin = réserve de valeur\n• Ethereum = applications\n• Stablecoins = dollar digital\n\n⚠️ Conseil: n’investis jamais ce que tu ne peux pas perdre.`
      });
    }

    if (command === "btc") {
      await sock.sendMessage(jid, {
        text: `₿ BITCOIN:\n\n💡 BTC est la première crypto\n📊 Très volatile\n🔐 Stockage sécurisé recommandé\n\n👉 Astuce: pense long terme (HODL)`
      });
    }

    if (command === "binance") {
      await sock.sendMessage(jid, {
        text: `📱 BINANCE:\n\n✔ Acheter / vendre crypto\n✔ Spot / Futures\n✔ Staking possible\n\n⚠️ Commence toujours par le spot.`
      });
    }
  };
};