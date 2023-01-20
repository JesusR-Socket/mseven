/*CMD
  command: Вер
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = Bot.getProperty("MSGask:" + user.telegramid);
var keyboard = [{ title: "🌐MONEY SEVEN", command: "1q"}, { title: "📕Как пополнить баланс", command: "2q"}, { title: "📗Когда производятся выплаты", command: "3q"}, { title: "📘Какой % я получу от инвестиций", command: "4q"}, { title: "📙Какие риски", command: "5q"}]
Bot.editMessage("ℹ️ Выберите интересующий Вас вопрос:",id)
Bot.editInlineKeyboard(keyboard, id, chat.id)

//Bot.sendInlineKeyboard([{ title: "🌐MONEY SEVEN", command: "1q"}, { title: "📕Как пополнить баланс", command: "2q"}, { title: "📗Когда производятся выплаты", command: "3q"}, { title: "📘Какой % я получу от инвестиций", command: "4q"}, { title: "📙Какие риски", command: "5q"}], "ℹ️ Выберите интересующий Вас вопрос:", {on_result: "onMessageSending2" })
