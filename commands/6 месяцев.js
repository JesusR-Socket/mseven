/*CMD
  command: 6 месяцев
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lang = Libs.Lang;

var buy = Bot.getProperty("buy:" + user.telegramid);

if (buy == "2"){
 Bot.setProperty("buy:" + user.telegramid, buy + "3");
 Bot.sendKeyboard("💎 Крипта,✴️ QIWI,🟥 Яндекс\n❌ Вернуться", "⭕️ Выберите способ оплаты:");
} else if (buy == "3"){
 Bot.setProperty("buy:" + user.telegramid, buy + "3");
 Bot.sendKeyboard("💎 Крипта,✴️ QIWI,🟥 Яндекс\n❌ Вернуться", "⭕️ Выберите способ оплаты:");
}
