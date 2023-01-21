/*CMD
  command: Реинвест
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("MSG:" + user.telegramid)
var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", user.telegramid);
var balanceEarn = Libs.ResourcesLib.anotherUserRes("balanceEarn", user.telegramid);
var stat = Bot.getProperty("" + user.telegramid + "");

if (stat == "user"){
Bot.sendMessage("❌ *Для реинвестирования активируйте тариф*")
} else {
var lang = Libs.Lang;
Bot.sendMessage("📌 Пожалуйста, укажите сумму для реинвестирования в *USDT*:");
Bot.runCommand("Реинвест2")
}
