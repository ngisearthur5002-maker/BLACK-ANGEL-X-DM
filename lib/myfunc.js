const moment = require("moment");

const runtime = () => {
    return moment().format("HH:mm:ss");
};

module.exports = {
    runtime
};