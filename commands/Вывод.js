/*CMD
  command: Вывод
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = User.getProperty("" + user.telegramid + "");

if (stat == "pratner1ban" | stat == "partner2ban" | stat == "pratner3ban" | stat == "partner4ban" | stat == "partnerChatban" | stat == "ban"){
 Bot.runCommand("main_menu");
} else {
Bot.setProperty("buy:" + user.telegramid, 3);
Bot.sendKeyboard("💎 Крипта,\n❌ Вернуться", "⭕️ Выберите способ вывода:");

}
