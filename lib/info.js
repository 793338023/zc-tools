const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

module.exports = async function () {
  let answer;
  console.log(inquirer);
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
  console.log("Answer:", answer);
  let str = JSON.stringify(answer, null, "\t");
  fs.writeFile(path.resolve(__dirname, "../info.json"), str, function (err) {
    if (err) {
      throw err;
    }

    console.log("写入成功");
  });
};
