/*CMD
  command: ✅ Я оплатил2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("✅ Я оплатил2");
}
else {
User.setProperty("name", data.message);
Bot.runCommand("✅ Я оплатил3");
}
