const spawn = require("cross-spawn");

module.exports = async function (...args) {
  return new Promise((res) => {
    const process = spawn(...args);
    process.on("close", () => {
      res();
    });
  });
};
