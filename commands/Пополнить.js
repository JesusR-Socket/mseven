/*CMD
  command: Пополнить
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lang = Libs.Lang;
Bot.sendKeyboard("❌ Вернуться", "📌 Пожалуйста, укажите сумму для пополнения:");
Bot.runCommand("Пополнить2");
