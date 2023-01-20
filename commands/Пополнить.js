/*CMD
  command: Пополнить
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")
if (stat == "user"){
Bot.sendMessage("❌ *Для пополнения активируйте тариф*")
}
else {
Bot.setProperty("MSG:" + chat.chatid, null);
var lang = Libs.Lang;
Bot.sendKeyboard("❌ Вернуться", "📌 Пожалуйста, укажите сумму для пополнения в *USDT*:");
var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", user.telegramid);
if (balanceBot.value() < 50 & stat == "partner1"){
Bot.sendMessage("_Для активации робота Вам необходимо пополнить баланс минимум на_ *50 USDT*")
} else if (balanceBot.value() < 500 & stat == "partner2"){
Bot.sendMessage("_Для активации робота Вам необходимо пополнить баланс минимум на_ *500 USDT*")
}
Bot.runCommand("Пополнить2");
}
