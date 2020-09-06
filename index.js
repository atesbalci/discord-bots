const { startBot } = require('./HeratBot/bot.js');
const { startDolarBot } = require('./dolar-bey/bot.js');
const express = require('express');
const { prepareDolarTelegramExpress } = require('./dolar-bey/telegram_bot.js');
const app = express();

function startDolarTelegramServer() {
  app.use(express.json());
  prepareDolarTelegramExpress(app);
  app.listen(process.env.PORT || 80, () => console.log('Listening...'));
}

startBot(process.env.HERATBOT_BOT_TOKEN);
startDolarBot(process.env.DOLARBEY_BOT_TOKEN);
startDolarTelegramServer();