/*CMD
  command: 💸 Оплатить
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");

Bot.setProperty("buy:" + user.telegramid, "10");

Bot.runCommand("💎 Продвинутый 💎")
