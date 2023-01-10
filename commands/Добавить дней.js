/*CMD
  command: Добавить дней
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

Bot.setProperty("Days:" + id, 14)
