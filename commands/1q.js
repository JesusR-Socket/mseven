/*CMD
  command: 1q
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = Bot.getProperty("MSGask:" + user.telegramid);
var keyboard = [[{title: "⬅️ Вернуться", command: "Вер"}]]
Bot.editMessage("ℹ️ MONEY SEVEN – это проект, где каждый имеет возможность заработать в месяц до 40% от инвестированной суммы. Заставьте свои средства работать на Вас благодаря торговому роботу.",id)
Bot.editInlineKeyboard(keyboard, id, chat.id)
