const { startBot } = require('./HeratBot/bot.js');
const { startDolarBot } = require('./dolar-bey/bot.js');

startBot(process.env.HERATBOT_BOT_TOKEN);
startDolarBot(process.env.DOLARBEY_BOT_TOKEN);