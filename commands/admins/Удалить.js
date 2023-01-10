/*CMD
  command: Удалить
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admins
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
Bot.sendMessageToChatWithId(id, "🚫 Вы были забанены в боте!");
Api.banChatMember({
    chat_id: "-1001691629203",
    user_id: id
});
Bot.setProperty("" + id + "", "ban");
