/*CMD
  command: РеинвестНет
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "user"){
Bot.sendMessage("❌ *Для реинвестирования активируйте тариф*");
}else {
Bot.sendMessage("❌ Во время работы робота реинвестирование невозможно");
}
