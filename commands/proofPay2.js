/*CMD
  command: proofPay2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📌 Прикрепи скриншот:
  keyboard: 
  aliases: 
CMD*/

if (!request.photo[0]) {
  Bot.sendMessage("📸 Ты не отправил скриншот 📸");
  Bot.runCommand("proofPay2");
} else {
var payid = Bot.getProperty("payid:");
  Api.sendPhoto({
    chat_id: payid,
    photo: request.photo[0].file_id,
    caption: "✅ Ваш вывод средств успешно выполнен"
  })
Bot.setProperty("payid:", null);
}
