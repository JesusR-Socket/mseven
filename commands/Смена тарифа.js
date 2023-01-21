/*CMD
  command: Смена тарифа
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
Bot.sendMessage("❌ *Для смены тарифа активируйте тариф*")
}
else{
var id = Bot.getProperty("MSG:" + user.telegramid + "");
Bot.setProperty("" + user.telegramid + "", "user");
Bot.runCommand("💼 Инвестиционный портфель");
}
