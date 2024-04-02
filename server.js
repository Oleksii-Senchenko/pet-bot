const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const TOKEN = process.env.TOKEN

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params:{
      timeout: 10
    }
  },
});


bot.on('message', (msg)=>{

console.log(msg);

bot.sendMessage(msg.chat.id, `Здравствуй, ${msg.from.first_name}`)
})