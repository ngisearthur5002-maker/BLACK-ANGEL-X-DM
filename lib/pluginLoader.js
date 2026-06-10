const fs = require("fs");
const path = require("path");

function loadPlugins(sock, folder = "./plugins") {
  const plugins = [];

  function readDir(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);

      if (fs.statSync(fullPath).isDirectory()) {
        readDir(fullPath);
      } else if (file.endsWith(".js")) {
        const plugin = require(fullPath);
        if (typeof plugin === "function") {
          plugins.push(plugin(sock));
        }
      }
    });
  }

  readDir(folder);
  return plugins;
}

module.exports = { loadPlugins };