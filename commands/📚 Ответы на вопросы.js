/*CMD
  command: 📚 Ответы на вопросы
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /faq
CMD*/

Bot.sendInlineKeyboard([{ title: "🌐MONEY SEVEN", command: "1q"}, { title: "📕Как пополнить баланс", command: "2q"}, { title: "📗Когда производятся выплаты", command: "3q"}, { title: "📘Какой % я получу от инвестиций", command: "4q"}, { title: "📙Какие риски", command: "5q"}], "ℹ️ Выберите интересующий Вас вопрос:", {on_result: "onMessageSending2" })
