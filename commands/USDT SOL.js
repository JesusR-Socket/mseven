/*CMD
  command: USDT SOL
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
 User.setProperty("withdrow", "USDT SOL");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "💰 Кошелёк для оплаты:" + " `HqYe5qND2AYY75JAcmiy2FMpZNH2T17NiXFa8XWQzi7j`");
}
