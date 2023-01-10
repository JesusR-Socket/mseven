/*CMD
  command: /test
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admins
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("/test");
}
else {
var proofid;
var pack;
var id = user.telegramid;
User.setProperty("id_buy", 3);
User.setProperty("buy", 3);
if (User.getProperty("buy") == 3){
 pack = "Премиум";
 proofid = "proof3";
} else if (User.getProperty("buy") == 2){
 pack = "Стандартный";
 proofid = "/proof2";
} else if (User.getProperty("buy") == 1){
 pack = "Начинающий";
 proofid = "/proof1";
} else if (User.getProperty("buy") == 4){
 pack = "С начинающего до среднего";
} else if (User.getProperty("buy") == 5){
 pack = "С начинающего до премиум";
} else if (User.getProperty("buy") == 6){
 pack = "С среднего до премиум";
} else if (User.getProperty("buy") == 10){
 pack = "Продление подписки";
}

var replyOptions = {
 reply_markup: {
  inline_keyboard: [
   [ {text: "Одобрить", "url": proofid}]
  ],
 },
};

if (!request.photo[0]) {
  Bot.sendMessage("📸 Вы не отправили скриншот 📸");
  Bot.runCommand("/test");
} else {
var msg = Api.sendPhoto({
    chat_id: "@fffanomxxxadmin",
    photo: request.photo[0].file_id,
    caption: "Package: "+pack + "\nTelegramID:\n"+id,
    reply_markup: {
    inline_keyboard: [
   [ {text: "Proof", "callback_data": proofid}]
  ],
 }
});
return;
  Bot.runCommand("main_menu");
}

User.setProperty("buy", null);

Bot.sendMessage(msg.message_id);

Bot.sendMessage("✅ Успешно! Ожидайте подтверждения оплаты от модератора");

}
