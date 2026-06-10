module.exports = async (sock, from, text) => {
    if (text === "ai" || text === "gpt") {
        await sock.sendMessage(from, {
            text: "🤖 IA BLACK ANGEL:\nJe suis actif mais pas encore connecté à OpenAI."
        });
    }
};