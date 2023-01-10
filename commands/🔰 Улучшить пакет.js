/*CMD
  command: 🔰 Улучшить пакет
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "partner1" | stat == "partner1ban" | stat == "partner3" | stat == "partner3ban" | stat == "partnerChat" | stat == "partnerChatban"){
 Bot.setProperty("buy:" + user.telegramid, "4")
 Bot.sendKeyboard("💎 Продвинутый 💎,\n❌ Вернуться","⭕️ Выберите до какого пакета хотите улучшить:");
}
