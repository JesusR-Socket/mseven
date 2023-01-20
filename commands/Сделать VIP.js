/*CMD
  command: Сделать VIP
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

/*var id = parseInt(message);
var stat = Bot.getProperty("" + id + "");

if (stat == "partner1"){
 Bot.setProperty("" + id + "", "partner3")
 Bot.sendMessageToChatWithId(id, "💠 Вам присвоен статус *VIP* 💠")
} else if (stat == "partner2"){
 Bot.setProperty("" + id + "", "partner4")
 Bot.sendMessageToChatWithId(id, "💠 Вам присвоен статус *VIP* 💠")
} else {
 Bot.sendMessage("❌ Неверный TelegramID, либо данный человек не имеет активной подписки.")
}*/
Bot.sendKeyboard("40%, 50%, 60%,\n❌ Вернуться", "Выбери процент:")
