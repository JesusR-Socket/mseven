/*CMD
  command: LTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lang = Libs.Lang;
if (Bot.getProperty("buy:" + user.telegramid) == 3){
 User.setProperty("withdrow", "LTC");
 Bot.runCommand("Вывод1");
} else {
var amount = Bot.getProperty("deposit:" + user.telegramid + "");
var t = CurrencyQuote.convert({ amount: parseInt(amount), from: "USDT", to: "LTC" })
Bot.sendMessage("📥 Для оплаты: \n💳 *" + amount + " USDT* \n--------------------\n📤 Вам надо заплатить: \n💳 *" + t + " LTC*")
Libs.WestWallet.generateAddress("LTC");
}
