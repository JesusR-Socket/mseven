/*CMD
  command: 💎 Продвинутый 💎
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (Bot.getProperty("buy:" + user.telegramid) == "10"){
 Bot.sendKeyboard("💎 Крипта,✴️ QIWI,🟥 Яндекс\n❌ Вернуться", "⭕️ Выберите способ оплаты:");
} else {
if (stat == "partner1" | stat == "partner1ban" | stat == "partner3" | stat == "partner3ban" | stat == "partnerChat" | stat == "partnerChatban"){
 Bot.setProperty("buy:" + user.telegramid, "4");
 Bot.sendKeyboard("💎 Крипта,✴️ QIWI,🟥 Яндекс\n❌ Вернуться", "⭕️ Выберите способ оплаты:");
} else {
 Bot.setProperty("buy:" + user.telegramid, "2");
 Bot.sendKeyboard("1 месяц,3 месяца,6 месяцев,\n❌ Вернуться", "⭕️ Выберите срок подписки:");
}
}
