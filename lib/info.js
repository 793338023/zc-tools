const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const infoPath = path.resolve(__dirname, "../info.json");

module.exports = async function (isExist) {
  if (isExist) {
    try {
      fs.accessSync(infoPath, fs.constants.F_OK);
      return;
    } catch (err) {}
  }
  let answer;
  answer = await inquirer.prompt([
    {
      type: "input",
      message: "用户名:",
      name: "name",
    },
    {
      type: "password",
      message: "密码:",
      name: "password",
    },
  ]);
  let str = JSON.stringify(answer, null, "\t");
  try {
    fs.writeFileSync(infoPath, str);
    console.log("写入成功");
  } catch (err) {
    console.error(err);
  }
};
