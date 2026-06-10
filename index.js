const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");

// plugins
const config = require("./config");
const ai = require("./plugins/ai");
const tools = require("./plugins/tools");
const group = require("./plugins/group");
const download = require("./plugins/download");

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
            console.log("❌ Déconnecté...");
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
        // 🔥 MENU BLACK ANGEL
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
┃ • broadcast
┃
╰━━━ BLACK ANGEL MD SYSTEM ⬣
`;

            await sock.sendMessage(from, { text: menu });
        }

        // =========================
        // plugins calls
        // =========================
        await ai(sock, from, text);
        await tools(sock, from, text);
        await group(sock, from, text);
        await download(sock, from, text);
    });
}

startBot();