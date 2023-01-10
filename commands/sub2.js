/*CMD
  command: sub2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var days = Bot.getProperty("Subscribe:" + user.telegramid + "");

if (days == 1){
 Bot.clearRunAfter( {
    label: "sub"
 } )
 var stat = Bot.getProperty("" + user.telegramid + "");
 Bot.sendMessage("⛔️ Ваша подписка закончилась ⛔️");
 Bot.setProperty("" + user.telegramid + "", stat + "ban");
 Bot.runCommand("main_menu");
}else if (days == 32 | days == 22){
 Bot.sendMessage("🔰 У Вас осталось " + (days - 2) + " дней подписки 🔰");
} else if (days <= 12 & days > 6){
 Bot.sendMessage("⚠️ У Вас осталось " + (days - 2) + " дней подписки ⚠️");
} else if (days <= 6 & days > 2){
 Bot.sendMessage("⚠️ У Вас осталось " + (days - 2) + " дня подписки ⚠️");
}

Bot.setProperty("Subscribe:" + user.telegramid + "", days - 1);

Bot.run( {
    command: "sub1",
    run_after: 1*60*1,
    label: "sub"
 } )
