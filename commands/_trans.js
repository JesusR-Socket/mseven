/*CMD
  command: /trans
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = JSON.parse(content);
var btc = result.address;
User.setProperty("Address",btc,"string")
var address = User.getProperty("Address");
Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "🏧 Кошелёк для оплаты:" + " `" + address +"` \n\n🧾 Статус транзакции: ✅🔓 Разрешена");
Bot.sendMessage("⁉️ После пополнения данного кошелька нажмите кнопку *✅ Я оплатил* для завершения транзакции в нашем боте.")

