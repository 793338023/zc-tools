#!/usr/bin/env node
const program = require("commander");
const start = require("../lib/start");
const info = require("../lib/info");

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

program.parse(process.argv);
