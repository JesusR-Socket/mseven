/*CMD
  command: Восстановить
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admins
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
Bot.setProperty("" + id + "", "user");
Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "📍 Вы были разбанены!")
Api.unbanChatMember({
    chat_id: "-1001691629203",
    user_id: id
});
