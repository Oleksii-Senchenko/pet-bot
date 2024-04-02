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

  bot
    .sendMessage(id, debug(msg))
    .then(() => {
      console.log("Message has been send");
    })
    .catch((err) => {
      console.error(err);
    });
});
