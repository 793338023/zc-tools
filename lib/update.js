const execSync = require("child_process").execSync;

module.exports = async function () {
  const remote = execSync("git remote -v", {
    cwd: process.cwd(),
    stdio: "inherit",
  });
  console.log(remote);
};
