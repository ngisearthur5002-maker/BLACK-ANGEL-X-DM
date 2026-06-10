module.exports = async (sock, from, text) => {
    if (text === "ping") {
        await sock.sendMessage(from, { text: "pong ⚡ BLACK ANGEL actif" });
    }

    if (text === "info") {
        await sock.sendMessage(from, {
            text: "🤖 BLACK ANGEL X MD\n⚡ Tools system actif"
        });
    }
};