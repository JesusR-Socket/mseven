/*CMD
  command: 2q
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = Bot.getProperty("MSGask:" + user.telegramid);
var keyboard = [[{title: "⬅️ Вернуться", command: "Вер"}]]
Bot.editMessage("ℹ️ Чтобы пополнить баланс, Вам нужно перейти в раздел *«💼 Инвестиционный портфель»* после чего нажать на кнопку *«Пополнить»*. Бот предоставит Вам личный кошелёк, чтобы кабинет активировался Вам нужно иметь минимальную сумму в USDT в соответствии с выбранным тарифом. После перевода Вы получите уведомление о пополнении.",id)
Bot.editInlineKeyboard(keyboard, id, chat.id)
