/*CMD
  command: 3q
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
Bot.editMessage("ℹ️ Каждый день инвестор получает уведомление о доходности. В разделе *«💼 Инвестиционный портфель»* нажав на кнопку вывести, Вы можете указать свой кошелёк и в ближайшее время вывести средства, после «разморозки» депозита.",id)
Bot.editInlineKeyboard(keyboard, id, chat.id)
