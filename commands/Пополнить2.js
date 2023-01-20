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
if (isNaN(message)){
Bot.sendMessage("❌ Отравьте сумму в виде числа")
Bot.runCommand("Пополнить");
}
else {
if (parseInt(message) < 50){
Bot.sendMessage("❌ Пополнение возможно минимум на *50 USDT*")
Bot.runCommand("Пополнить");
}
else {
Bot.setProperty("deposit:" + user.telegramid + "", data.message);
Bot.runCommand("💎 Крипта");
}
}
}
