/*CMD
  command: 4q
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
Bot.editMessage("ℹ️ На данный момент средний суточный доход разнится в зависимости от выбранного инвестором тарифа и составляет 0.7% и 1.3%",id)
Bot.editInlineKeyboard(keyboard, id, chat.id)
