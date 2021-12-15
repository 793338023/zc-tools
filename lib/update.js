const exec = require("child_process").exec;
const path = require("path");

module.exports = async function () {
  exec(
    "git pull origin master",
    {
      cwd: path.resolve(__dirname, "../"),
      stdio: "inherit",
    },
    (err) => {
      if (err) {
        console.log("更新失败");
        return;
      }
      console.log("更新成功");
    }
  );
};
