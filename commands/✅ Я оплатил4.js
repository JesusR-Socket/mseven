/*CMD
  command: ✅ Я оплатил4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("✅ Я оплатил4");
}
else {
var id = user.telegramid;
var name = User.getProperty("name");
var deposit = Bot.getProperty("deposit:" + user.telegramid + "")

if (!request.photo[0]) {
  Bot.sendMessage("📸 Вы не отправили скриншот 📸");
  Bot.runCommand("✅ Я оплатил3");
} else {
  Api.sendPhoto({
    chat_id: -1001379745400,
    photo: request.photo[0].file_id,
    caption: "Сумма: "+ deposit +"\nИмя\n" + name + "\nTelegramID:\n"+id,
    reply_markup: {
    inline_keyboard: [
   [ {text: "Одобрить", callback_data: "/proof"}],
   [ {text: "Отклонить", callback_data: "/unproof"}]
  ],
 }
  })
  Bot.runCommand("main_menu");
User.setProperty("name", null);

Bot.sendMessage("✅ Успешно! Ожидайте подтверждения оплаты от модератора");
}
}
