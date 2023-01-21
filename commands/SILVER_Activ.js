/*CMD
  command: SILVER_Activ
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
Bot.sendMessage("❌ *Для активации тарифа выберите тариф*");
}
else {
var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", user.telegramid);
if (balanceBot.value() >= 50){
let id = Bot.getProperty("MSG:" + user.telegramid)
Bot.editMessage("⏳ *Ваш тариф успешно активирован!* ⏳", id)
Bot.setProperty("Days:" + user.telegramid + "", 15)
Bot.setProperty("" + user.telegramid + "", "partner1")
Bot.setProperty("MSG:" + user.telegramid, null)
Bot.runCommand("💼 Инвестиционный портфель");
}
else{
Bot.sendMessage("❌ Для активации тарифа Вам необходимо пополнить баланс минимум на *50 USDT*");
}
}
//Api.editMessage({message_id: id, text: "sss", parse_mode: "html", reply_markup: { inline_keyboard: inl }});
