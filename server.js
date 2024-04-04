const TelegramBot = require("node-telegram-bot-api");
const debug = require("./helpers");
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
});


bot.on("message", (msg) => {
  const { id } = msg.chat;
  const html = `
  <strong>Hello, ${msg.from.first_name}</strong>
  <pre>
      ${debug(msg)}
  </pre>
  `;
  bot.sendMessage(id, html,{
    parse_mode: "HTML"
  });
});
