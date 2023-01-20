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
    chat_id: "@mamaadminas",
    photo: request.photo[0].file_id,
    caption: "Сумма: "+ deposit +"\nИмя\n" + name + "\nTelegramID:\n"+id,
    reply_markup: {
    inline_keyboard: [
   [ {text: "Одобрить", callback_data: "/proof"}, {text: "Отклонить", callback_data: "/unproof"}],
   [ {text: "Связаться", callback_data: "contact"}, {text: "Одобрить с суммой", callback_data: "proofSum"}]
  ],
 }
  })
User.setProperty("name", null);
User.setProperty("Address", null);

Bot.sendMessage("✅ Успешно! Ожидайте подтверждения оплаты от модератора");
Bot.runCommand("main_menu");
}
}

//-1001379745400
