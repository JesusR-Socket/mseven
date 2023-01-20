/*CMD
  command: contact
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
Bot.setProperty("contactid:", id);
Bot.runCommand("contact2");
