/*CMD
  command: USDT TRC20
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
 User.setProperty("withdrow", "USDT TRC20");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "💰 Кошелёк для оплаты:" + " `TKERg2YNotXhYkce67UE7JzStUHtgrR9m6`");
}
