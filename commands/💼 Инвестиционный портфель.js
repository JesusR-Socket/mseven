/*CMD
  command: 💼 Инвестиционный портфель
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", user.telegramid);
var balanceEarn = Libs.ResourcesLib.anotherUserRes("balanceEarn", user.telegramid);
var balanceProcent = Libs.ResourcesLib.anotherUserRes("balanceProcent", user.telegramid);
var stat = Bot.getProperty("" + user.telegramid + "");
var days = Bot.getProperty("Days:" + user.telegramid + "");
if (stat == "user"){
 Bot.sendInlineKeyboard([ {title: "📈 Выбор тарифа", command: "📈 Выбор тарифа" } ], "Please make a choice.", {on_result: "onMessageSending" })
} else if (stat == "partner1" | stat == "partner2"){
 Bot.sendInlineKeyboard([ {title: "Пополнить", command: "Пополнить"}, {title: "Реинвест", command: "Реинвест"}, {title: "Вывод", command: "Вывод"}, {title: "Смена тарифа (Через " + days - 1 + " дней)", command: "Смена Тарифа"}], "💼 Ваш Инвестиционный портфель\n\n💵 Баланс торгового робота: " + balanceBot.value().toFixed(2) + " USDT\n💳 Баланс на вывод: " + balanceEarn.value().toFixed(2) + " USDT\n🧮 Средний процент: " + balanceProcent.value().toFixed(2) + "%\n🕖 Срок окончания активации: " + days - 1 + " дней")
}

/*
💼Инвестиционный портфель

💵Баланс торгового робота: 0.0 USDT
🤑Баланс на вывод: 2.71 USDT
📈Заработано за весь период :  21.71 USDT
🧮Средний процент:
🕖Срок окончания активации:*/
