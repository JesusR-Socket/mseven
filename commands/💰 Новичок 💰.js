/*CMD
  command: 💰 Новичок 💰
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💰 beginner 💰
CMD*/

var lang = Libs.Lang;
if (Bot.getProperty("buy:" + user.telegramid) == 7){
 Bot.setProperty("buy:" + user.telegramid, "1");
 Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "Нажмите ✅ Я оплатил для дальнейших действий\n☎️ По всем вопросам пишите: @XXXPHANTOM_SUPPORT");
}else{
Bot.sendKeyboard("1 месяц,3 месяца,\n❌ Вернуться", "⭕️ Выберите срок подписки:");
Bot.setProperty("buy:" + user.telegramid, "1");
}
