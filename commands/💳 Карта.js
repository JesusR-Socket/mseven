/*CMD
  command: 💳 Карта
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (User.getProperty("buy") == 11){
 Bot.sendMessage("⚠️ Временно недоступно, находится на доработке. ⚠️");
 Bot.runCommand("Вывод");
} else {
Bot.sendMessage("⬇️ Пошаговая интрукция: ⬇️");

var video1 = Bot.getProperty("video1");
var video2 = Bot.getProperty("video2");

Api.sendVideo({
  video: video1,
  caption: "Шаг 1️⃣"
});

Api.sendVideo({
  video: video2,
  caption: "Шаг 2️⃣"
});

Bot.sendMessage("⚠️ Зарегистрироваться на бирже: https://www.okx.com/join/9851629");

if (User.getProperty("buy") == 4){
 Bot.sendMessage("‼️Для апгрейда Вам надо доплатить *100$*‼️")
} else if (User.getProperty("buy") == 5){
 Bot.sendMessage("‼️Для апгрейда Вам надо доплатить *300$*‼️")
} else if (User.getProperty("buy") == 6){
 Bot.sendMessage("‼️Для апгрейда Вам надо доплатить *200$*‼️")
} else if (User.getProperty("buy") == 10){
 Bot.sendMessage("‼️Для продления подписки Вам надо доплатить *50$*‼️");
}

Bot.sendKeyboard("✅ Я оплатил,\n❌ Изменить способ оплаты", "☎️ По всем вопросам пишите: @XXXPHANTOM_SUPPORT");
}
