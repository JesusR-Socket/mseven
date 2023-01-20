/*CMD
  command: 60%
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
var stat = Bot.getProperty("" + id + "");

if (stat == "partner1" | stat == "partner2"){
 Bot.setProperty("vip:" + id + "", 60)
 Bot.sendMessageToChatWithId(id, "💠 Ваш доход с первой линии увеличен 💠")
} else {
 Bot.sendMessage("❌ Неверный TelegramID, либо данный человек не имеет активного тарифа.")
}

Bot.runCommand("main_menu");
