/*CMD
  command: /sub1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: admins
  answer: 
  keyboard: 
  aliases: 
CMD*/

var users = Bot. getProperty("Broadcast")

for(var i in users){
 var days = Bot.getProperty("Subscribe:" + users[i] + "");

if (days == 1){
 var stat = Bot.getProperty("" + users[i] + "");
 if (stat == "partner1" | stat == "partner2"){
 Bot.setProperty("Subscribe:" + users[i] + "", days - 1);
 Bot.clearRunAfter({
    label: "sub"
 })
  Api.banChatMember({
    chat_id: "-1001691629203",
    user_id: users[i]
 });
 Bot.sendMessageToChatWithId(users[i], "⛔️ Ваша подписка закончилась ⛔️");
 Bot.setProperty("" + users[i] + "", stat + "ban");
}
} else {
Bot.setProperty("Subscribe:" + users[i] + "", days - 1);
 if (days == 31 | days == 21){
 Bot.sendMessageToChatWithId(users[i], "🔰 У Вас осталось " + (days - 1) + " дней подписки 🔰");
} else if (days <= 11 & days > 6){
 Bot.sendMessageToChatWithId(users[i], "⚠️ У Вас осталось " + (days - 1) + " дней подписки ⚠️");
} else if (days <= 6 & days > 2){
 Bot.sendMessageToChatWithId(users[i], "⚠️ У Вас осталось " + (days - 1) + " дня подписки ⚠️");
} else if (days == 2){
 Bot.sendMessageToChatWithId(users[i], "🛑 У Вас остался " + (days - 1) + " день подписки 🛑");
} else if (days < 1){
  Api.banChatMember({
    chat_id: "-1001691629203",
    user_id: users[i]
 });
 Bot.sendMessage("⛔️ Ваша подписка закончилась ⛔️");
}
}
}
/*
Bot.run( {
    command: "sub1",
    run_after: 60*60*24*10,
    label: "sub"
 } ) */
