/*CMD
  command: answer2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Введите ответ на вопрос пользователя:
  keyboard: 
  aliases: 
CMD*/

var answerid = Bot.getProperty("answerid:");
var qst = Bot.getProperty("QST:" + answerid)
Api.sendMessage({
    chat_id: answerid,
    text: "⁉️ Ваш вопрос:\n*" + qst + "*\n\n📮 Ответ:\n_" + data.message +"_",
    parse_mode: "Markdown"
  })
Bot.setProperty("answerid:", null);
Bot.setProperty("QST:" + answerid, null);
