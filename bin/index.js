#!/usr/bin/env node
const program = require("commander");
const spawn = require("../utils/spawn");
const info = require("../lib/info");

program
  .command("start")
  .description("启动代理")
  .action((name, options, command) => {
    spawn("npm", ["start"], { cwd: __dirname, stdio: "inherit" });
  });

program
  .command("login")
  .description("登陆信息")
  .action((name, options, command) => {
    info();
  });

program.parse(process.argv);
