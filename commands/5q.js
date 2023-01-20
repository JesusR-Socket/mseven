/*CMD
  command: 5q
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
Bot.editMessage("ℹ️ Все высокодоходные проекты несут большие риски, которые в данном автоматизированном процессе снижаются к минимуму за счет работы вычислительных аппаратов. Инвестируйте с умом 🧠",id)
Bot.editInlineKeyboard(keyboard, id, chat.id)
