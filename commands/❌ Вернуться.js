/*CMD
  command: ❌ Вернуться
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ❌ back
CMD*/

Bot.setProperty("deposit:" + user.telegramid, null)
Bot.runCommand("main_menu")
