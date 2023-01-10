/*CMD
  command: /proofPay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
Bot.setProperty("payid:", id);
Bot.runCommand("proofPay2");
