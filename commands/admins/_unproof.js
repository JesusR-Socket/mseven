/*CMD
  command: /unproof
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admins
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
Bot.setProperty("buy:" + id, null);
Bot.sendMessageToChatWithId(id, "❌ Ваша оплата не подтверждена. Пожалуйста, свяжитесь с нашей тех. поддержкой @teh_podderzka!")
