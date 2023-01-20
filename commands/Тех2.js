/*CMD
  command: Тех2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("Тех2");
} else {
  Bot.setProperty("QST:" + user.telegramid, data.message);
  Bot.sendMessage("⁉️ Состояние вопроса: ✅🔓 Отправлен\n\n📋 Ваш вопрос: *"+data.message+"*\n🧾 _Спасибо за Ваш вопрос! Вам ответит в этот бот первый освободившийся модератор._")
  Api.sendMessage({ 
  chat_id: "@mamaadminas", 
  text: "Вопрос в тех. поддержку\nTelegramId : `"+user.telegramid+"`\nВопрос : *"+data.message+"*", 
  parse_mode: "Markdown",
  reply_markup: {
  inline_keyboard:[
   [ {text: "Ответить", callback_data: "/answer"}]
   ]
   }
  });
Bot.runCommand("main_menu");
 }
