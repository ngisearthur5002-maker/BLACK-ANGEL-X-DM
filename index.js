const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("auth");

    const sock = makeWASocket({
        logger: pino({ level: "silent" }),
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", (update) => {
        const { connection } = update;

        if (connection === "open") {
            console.log("🤖 BLACK ANGEL X MD CONNECTÉ !");
        }

        if (connection === "close") {
            console.log("❌ Déconnecté, redémarrage...");
            startBot();
        }
    });

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message) return;

        const text =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text;

        const from = msg.key.remoteJid;

        console.log("MSG:", text);

        // =========================
        // MENU PRINCIPAL
        // =========================
        if (text === "menu") {
            const menu = `
╭━━━〔 🤖 BLACK ANGEL X MD 〕━━━⬣
┃ 👋 Bienvenue utilisateur
┃
┃ ⚡ STATUS
┃ ✔ Bot actif
┃ ✔ WhatsApp connecté
┃
┃ 🤖 IA & CHAT
┃ • ai
┃ • gpt
┃ • chat
┃
┃ 📥 DOWNLOAD
┃ • youtube
┃ • facebook
┃ • tiktok
┃ • instagram
┃
┃ 👥 GROUP
┃ • kick
┃ • add
┃ • promote
┃ • demote
┃ • tagall
┃
┃ 🛠 TOOLS
┃ • ping
┃ • info
┃ • uptime
┃
┃ 🎮 FUN
┃ • joke
┃ • meme
┃ • quote
┃
┃ 👑 OWNER
┃ • restart
┃ • shutdown
┃ • broadcast
┃
┃ ⚡ SYSTEM
┃ • menu
┃ • help
╰━━━ BLACK ANGEL MD SYSTEM ⬣
`;

            await sock.sendMessage(from, { text: menu });
        }

        // =========================
        // PING
        // =========================
        if (text === "ping") {
            await sock.sendMessage(from, { text: "pong ⚡ BLACK ANGEL actif" });
        }

        // =========================
        // INFO BOT
        // =========================
        if (text === "info") {
            await sock.sendMessage(from, {
                text: "🤖 BLACK ANGEL X MD\n⚡ Bot WhatsApp multi-fonctions\n📡 Status: Online"
            });
        }

        // =========================
        // HELP
        // =========================
        if (text === "help") {
            await sock.sendMessage(from, {
                text: "💡 Tape 'menu' pour voir toutes les commandes disponibles."
            });
        }

        // =========================
        // RESTART SIMULATION
        // =========================
        if (text === "restart") {
            await sock.sendMessage(from, { text: "♻️ Redémarrage du bot..." });
            startBot();
        }

        // =========================
        // BROADCAST (simulation)
        // =========================
        if (text === "broadcast") {
            await sock.sendMessage(from, {
                text: "📢 Broadcast envoyé (simulation BLACK ANGEL)"
            });
        }
    });
}

startBot();