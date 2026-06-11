const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");

// Nexus handler
const { loadPlugins, messageHandler } = require("./nexus/handler");

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
            console.log("❌ Déconnecté... redémarrage");
            startBot();
        }
    });

    // 🔥 Charger tous les plugins
    loadPlugins();

    // 🔥 Router tous les messages vers le handler
    sock.ev.on("messages.upsert", async (m) => {
        await messageHandler(sock, m);
    });
}

startBot();