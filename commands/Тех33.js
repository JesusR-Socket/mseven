/*CMD
  command: Тех33
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("Тех33");
} else {
  var text = Bot.getProperty("QST:" + user.telegramid);
  Bot.setProperty("QST:" + user.telegramid, text + "\n---\n" + data.message)
  text = Bot.getProperty("QST:" + user.telegramid);
  Bot.sendMessage("⁉️ Состояние вопроса: ✅🔓 Отправлен\n\n📋 Ваш вопрос: \n*"+text+"*\n🧾 _Спасибо за Ваш вопрос! Вам ответит в этот бот первый освободившийся модератор._")
  Api.sendMessage({ 
  chat_id: "@mamaadminas", 
  text: "Вопрос в тех. поддержку\nTelegramId : `"+user.telegramid+"`\nВопрос : *"+text+"*", 
  parse_mode: "Markdown",
  reply_markup: {
  inline_keyboard:[
   [ {text: "Ответить", callback_data: "/answer"}]
   ]
   }
  });
Bot.runCommand("main_menu");
 }
