module.exports = async (sock, from, text) => {
    if (text === "tagall") {
        await sock.sendMessage(from, {
            text: "👥 Tag all (fonction à améliorer plus tard)"
        });
    }
};