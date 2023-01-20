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
var days = Bot.getProperty("days:" + user.telegramid);
var stat = Bot.getProperty("" + user.telegramid + "");

if (stat == "user"){
Bot.sendMessage("❌ *Для реинвестирования активируйте тариф*")
} else {
if (balanceEarn.value().toFixed(1) > 0.0){
Bot.setProperty("Days:" + user.telegramid + "", 15)
balanceBot.set(parseFloat(balanceEarn.value()));
balanceEarn.set(0);
Bot.editMessage("✅ Ваш баланс успешно реинвестирован и робот запущен на *14* дней!", id);
Bot.setProperty("MSG:" + user.telegramid, null);
Bot.runCommand("💼 Инвестиционный портфель")
}
else{
Bot.sendMessage("❌ Недостаточно средств для реинвестирования")
}
}
