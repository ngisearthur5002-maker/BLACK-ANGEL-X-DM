const fs = require("fs");
const path = require("path");

const memoryFile = path.join(__dirname, "../../data/ai_memory.json");

// créer fichier mémoire si inexistant
if (!fs.existsSync(memoryFile)) {
  fs.writeFileSync(memoryFile, JSON.stringify({}));
}

function getMemory(user) {
  const data = JSON.parse(fs.readFileSync(memoryFile));
  return data[user] || [];
}

function saveMemory(user, message) {
  const data = JSON.parse(fs.readFileSync(memoryFile));

  if (!data[user]) data[user] = [];
  data[user].push(message);

  // garder seulement les 10 derniers messages
  data[user] = data[user].slice(-10);

  fs.writeFileSync(memoryFile, JSON.stringify(data, null, 2));
}

module.exports = (sock) => {
  return async ({ command, args, msg }) => {
    const jid = msg.key.remoteJid;

    if (command !== "ai") return;

    const question = args.join(" ");
    if (!question) {
      return sock.sendMessage(jid, {
        text: "🤖 Utilisation: .ai ta question"
      });
    }

    const lower = question.toLowerCase();

    // sauvegarde mémoire utilisateur
    saveMemory(jid, question);

    const memory = getMemory(jid);

    let response = "";

    // 🧠 logique intelligente améliorée
    if (lower.includes("business")) {
      response =
        "💰 Business: commence avec ce que tu as autour de toi. Le plus important = cashflow rapide + constance.";
    }

    else if (lower.includes("crypto") || lower.includes("bitcoin")) {
      response =
        "₿ Crypto: évite les émotions. Investis petit, apprends, puis augmente progressivement.";
    }

    else if (lower.includes("argent")) {
      response =
        "💸 L’argent suit la valeur que tu crées. Trouve un problème local et résous-le.";
    }

    else if (lower.includes("motivation")) {
      response =
        "🔥 Discipline > motivation. Ce que tu fais sans motivation construit ton avenir.";
    }

    else if (lower.includes("bible") || lower.includes("dieu")) {
      response =
        "📖 Reste constant dans la foi. La sagesse + patience = direction claire.";
    }

    else if (lower.includes("qui suis")) {
      response =
        "🤖 Je t’aide à structurer tes idées business, crypto, motivation et organisation.";
    }

    else {
      response =
        "🤖 Je peux t’aider sur business, crypto, argent, motivation ou Bible. Reformule ta question.";
    }

    // 🔁 ajout contexte mémoire simple
    if (memory.length > 2) {
      response += `\n\n🧠 CONTEXTE: Tu as déjà posé plusieurs questions similaires récemment.`;
    }

    await sock.sendMessage(jid, {
      text: `🤖 BLACK ANGEL AI:\n\n${response}`
    });
  };
};