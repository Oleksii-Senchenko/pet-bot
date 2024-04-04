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
  bot.sendMessage(id, "Inline keyboard", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Google", url: "https://www.google.com" }],
        [
          { text: "Reply", callback_data: "reply" },
          { text: "Forward", callback_data: "forward" },
        ],
      ],
    },
  });
});

