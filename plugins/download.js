module.exports = async (sock, from, text) => {
    if (text === "youtube") {
        await sock.sendMessage(from, {
            text: "📥 Downloader YouTube (à connecter API plus tard)"
        });
    }
};