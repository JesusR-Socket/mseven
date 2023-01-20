/*CMD
  command: 🛠 Тех. Поддержка
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /support
CMD*/

var qst = Bot.getProperty("QST:" + user.telegramid)
if (qst != null){
Bot.sendInlineKeyboard([{ title: "🖊 Дополнить", command: "Тех3"}], "📝 Ваш предыдущий вопрос:\n*" + qst + "*")
}else{
Bot.sendKeyboard("❌ Вернуться","💬 Напишите Ваш вопрос:");
Bot.runCommand("Тех2");
}
/*Bot.sendMessage("Ваш ID пользователя: `" + user.telegramid +"`", {parse_mode: "Markdown"})*/
