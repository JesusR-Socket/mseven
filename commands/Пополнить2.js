/*CMD
  command: Пополнить2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("Пополнить2");
}
else {
Bot.setProperty("deposit:" + user.telegramid + "", data.message);
Bot.runCommand("💎 Крипта");
}
