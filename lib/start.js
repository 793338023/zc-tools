const spawn = require("../utils/spawn");
const info = require("./info");

module.exports = async function () {
  await info(true);
  await spawn("npm", ["start"], { cwd: __dirname, stdio: "inherit" });
};
