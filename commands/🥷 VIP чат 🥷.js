/*CMD
  command: 🥷 VIP чат 🥷
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("1 месяц,3 месяца,6 месяцев,\n❌ Вернуться", "⭕️ Выберите срок подписки:");
Bot.setProperty("buy:" + user.telegramid, "3");
