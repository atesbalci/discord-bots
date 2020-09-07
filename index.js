const { startBot } = require('./HeratBot/bot.js');
const { startDolarBot } = require('./dolar-bey/bot.js');
const express = require('express');
const { handleDolarTelegram, initDolarTelegram } = require('./dolar-bey/telegram_bot.js');
const { handleCoronaTelegram, initCoronaTelegram } = require('./corona-hanim/telegram_bot.js');
const app = express();

function startServer() {
  app.use(express.json());
  app.post('/', (req, res) => {    
    res.send('All done!');
    handleCoronaTelegram(req, res);
    handleDolarTelegram(req, res);
  });
  app.listen(process.env.PORT || 80, () => console.log('Listening...'));
}

startBot(process.env.HERATBOT_BOT_TOKEN);
startDolarBot(process.env.DOLARBEY_BOT_TOKEN);
initCoronaTelegram();
initDolarTelegram();
startServer();
