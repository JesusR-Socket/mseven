/*CMD
  command: /s
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admins
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
Bot.setProperty("" + id + "", "user")
Bot.setProperty("buy:" + id, 23)
