/*CMD
  command: Вывод22
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("Вывод22");
} else {
 var withd = User.getProperty("withdrow");
 var wallet = User.getProperty("PaytmWallet");
 var balanceEarn = Libs.ResourcesLib.userRes("balanceEarn");
 if (isNaN(message)){
 Bot.sendMessage("_❌ Введите число_")
 Bot.runCommand("Вывод2");
 } else if(parseInt(data.message) < 50.0 ){
 Bot.sendMessage("_❌ Минимальный вывод 50.00 USDT_")
 Bot.runCommand("Вывод2");
 }else{
  if(data.message > balanceEarn.value()){
  Bot.sendMessage("_❌ Недостаточно средств, у Вас на счету: "+balanceEarn.value().toFixed(2)+" USDT_")
  Bot.runCommand("Вывод2");
 }else{
  var t = CurrencyQuote.convert({ amount: parseInt(data.message), from: "USDT", to: withd })
  Bot.sendMessage("🏧 Запрос на вывод: ✅🔓 Отправлен\n\n💳 Сумма в USDT: *"+data.message+"* USDT\n--------------------\n💳 Сумма в " + withd +": *"+ t + "* " + withd +"\n\n🧾 Адрес получателя: "+wallet+"\n⛔️ _Вывод может занимать от 1 до 5 рабочих дней!_")
  balanceEarn.add(-data.message);
  Api.sendMessage({ 
  chat_id: "@mamaadminas", 
  text: "🔋 Новый подтверждённый платеж\n\nСтатус : Подтверждён\nTelegramId :* "+user.telegramid+"*\nСумма : *"+data.message+" USDT*\n\nКошелёк:\n"+ withd +": \n`"+wallet+"`", 
  parse_mode: "Markdown",
  reply_markup: {
  inline_keyboard: [
   [ {text: "Одобрить", callback_data: "/proofPay"}],
   [ {text: "Отклонить", callback_data: "/unproofPay"}]
   ]
   }
  });
User.setProperty("withdrow", null);
User.setProperty("PaytmWallet", null);
Bot.setProperty("buy:" + user.telegramid, null);
Bot.runCommand("main_menu");
 }
}
}
