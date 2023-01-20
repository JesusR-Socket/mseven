/*CMD
  command: contact2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Введите сообщение пользователю:
  keyboard: 
  aliases: 
CMD*/

var contactid = Bot.getProperty("contactid:");
Api.sendMessage({
    chat_id: contactid,
    text: "📩 Сообщение от модератор:\n\n✏️ *" + data.message +"*",
    parse_mode: "Markdown"
  })
Bot.setProperty("contactid:", null);
