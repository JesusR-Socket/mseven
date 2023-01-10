/*CMD
  command: USDT ERC20
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
 User.setProperty("withdrow", "USDT ERC20");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "💰 Кошелёк для оплаты:" + " `0x980b67558e7f469be3f11956a8249b15143fd3aa`");
}
