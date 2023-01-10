/*CMD
  command: /sub2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("Subscribe:" + id + "", days - 1);
  Api.banChatMember({
    chat_id: "-1001691629203",
    user_id: id
 });
 Bot.sendMessage("⛔️ Ваша подписка закончилась ⛔️");
 Bot.setProperty("" + id + "", stat + "ban");
