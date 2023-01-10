/*CMD
  command: ✅ Я оплатил
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ✅ done
CMD*/

var lang = Libs.Lang;
Bot.sendKeyboard("❌ Изменить способ оплаты", "📌 Пожалуйста, укажите свой Telegram для связи:");
Bot.runCommand("✅ Я оплатил2");
