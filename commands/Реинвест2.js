/*CMD
  command: Реинвест2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("Реинвест2");
}
else {
if (isNaN(message)){
Bot.sendMessage("❌ Отравьте сумму в виде числа")
Bot.runCommand("Реинвест");
}
else {
var id = Bot.getProperty("MSG:" + user.telegramid)
var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", user.telegramid);
var balanceEarn = Libs.ResourcesLib.anotherUserRes("balanceEarn", user.telegramid);
var stat = Bot.getProperty("" + user.telegramid + "");
var re = parseFloat(message);

if (balanceEarn.value().toFixed(1) >= re){
balanceBot.add(re);
balanceEarn.add(-re);
Bot.editMessage("🔄 Ваша сумма в *" + re.toFixed(1) +" USDT* успешно реинвестирована!", id);
Bot.setProperty("MSG:" + user.telegramid, null);
Bot.runCommand("💼 Инвестиционный портфель")
}
else{
Bot.sendMessage("❌ Недостаточно средств для реинвестирования")
}
}
}
