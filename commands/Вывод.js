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

var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", user.telegramid);
var balanceEarn = Libs.ResourcesLib.anotherUserRes("balanceEarn", user.telegramid);
var stat = Bot.getProperty("" + user.telegramid + "");
var days = Bot.getProperty("Days:" + user.telegramid + "");

if (stat == "user" | stat == "ban"){
 Bot.sendMessage("❌ *Для вывода активируйте тариф*")
} else {
Bot.setProperty("MSG:" + chat.chatid, null);
if (stat == "partner1"){
if (balanceBot.value().toFixed(0) < 50 & balanceEarn.value().toFixed(1) > 0.0 & (days == null | days > 14)){
 Bot.setProperty("buy:" + user.telegramid, 3);
 Bot.sendKeyboard("💎 Крипта,\n❌ Вернуться", "⭕️ Выберите способ вывода:");
} else {
 Bot.sendMessage("❌ В данный момент вывод невозможен");
}
} else if (stat == "partner2"){
if (balanceBot.value().toFixed(0) < 500 & balanceEarn.value().toFixed(1) > 0.0 & (days == null | days > 14)){
 Bot.setProperty("buy:" + user.telegramid, 3);
 Bot.sendKeyboard("💎 Крипта,\n❌ Вернуться", "⭕️ Выберите способ вывода:");
} else {
 Bot.sendMessage("❌ В данный момент вывод невозможен");
}
}
}
