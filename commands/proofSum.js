/*CMD
  command: proofSum
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Введите сумму для зачисления:
  keyboard: 
  aliases: 
CMD*/

if (isNaN(message)){
Bot.sendMessage("❌ Отравьте сумму в виде числа")
Bot.runCommand("proofSum");
}
else {
Bot.setProperty("ADMdeposit:", data.message);
Bot.runCommand("proofSum2");
}
