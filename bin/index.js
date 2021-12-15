#!/usr/bin/env node
const program = require("commander");
const start = require("../lib/start");
const info = require("../lib/info");
const update = require("../lib/update");

program
  .command("start")
  .description("启动代理")
  .action((name, options, command) => {
    start();
  });

program
  .command("login")
  .description("登陆信息")
  .action((name, options, command) => {
    info();
  });

program
  .command("update")
  .description("更新工具")
  .action((name, options, command) => {
    update();
  });

program.parse(process.argv);
