const TelegramBot = require('node-telegram-bot-api');

// Replace with your own token
const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

// Define the buttons
const options = {
  reply_markup: {
    inline_keyboard: [
      [{ text: 'Button 1', callback_data: 'button1' }],
      [{ text: 'Button 2', callback_data: 'button2' }]
    ]
  }
};

// Listen for /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Choose an option:', options);
});

// Handle button presses
bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const msg = callbackQuery.data;
  bot.sendMessage(chatId, `You pressed ${msg}`);
});
