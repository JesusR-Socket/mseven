/*CMD
  command: /unproofPay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
Bot.sendMessageToChatWithId(id, "❌ Вывод был отклонён. Обратитесь в тех. поддержку.")
