/*CMD
  command: 💼 Инвестиционный портфель
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /profile
CMD*/

var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", user.telegramid);
var balanceEarn = Libs.ResourcesLib.anotherUserRes("balanceEarn", user.telegramid);
var balanceProcent = Libs.ResourcesLib.anotherUserRes("balanceProcent", user.telegramid);
var stat = Bot.getProperty("" + user.telegramid + "");
var days = Bot.getProperty("Days:" + user.telegramid + "");
if (stat == "user"){
 Bot.sendMessage("🔗 Здесь Вы можете настроить работу робота выбрав понравившийся тариф. Смена тарифа доступна по окончанию активированного тарифа.\n\n🥈 SILVER 🥈\n- Суточная доходность *~0.7%*\n- Минимальная сумма для активации робота - *50 USDT*\n- Работа робота *14 дней*\n- Верификация аккаунта *не требуется*\n\n🥇 GOLD 🥇\n- Суточная доходность *~1.3%*\n- Минимальная сумма для активации робота - *500 USDT*\n- Работа робота *14 дней*\n- Верификация аккаунта *не требуется*");
 Bot.sendInlineKeyboard([ {title: "📈 Выбор тарифа", command: "📈 Выбор тарифа" } ], "📍 Пожалуйста, выберите тариф:", {on_result: "onMessageSending" })
} else if ((balanceBot.value() < 50 | days == null) & stat == "partner1"){
var tx = "💼 Ваш Инвестиционный портфель\n\n📈 Ваш тариф: 🥈 SILVER 🥈\n\n💵 Баланс торгового робота: *" + balanceBot.value().toFixed(2) + "* USDT\n💳 Баланс на вывод: *" + balanceEarn.value().toFixed(2) + "* USDT\n🧮 Средний процент: *" + balanceProcent.value().toFixed(2) + "%*\n🕖 Срок окончания активации: _Пополните баланс на_ *50 USDT* _и активируйте для начала работы робота_";
Api.sendMessage({
 chat_id: user.telegramid,
 text: tx,
 parse_mode: "Markdown",
 reply_markup: {
    inline_keyboard: [
   [ {text: "🔑 Активировать", callback_data: "SILVER_Activ"}],
   [ {text: "📥 Пополнить", callback_data: "Пополнить"}, {text: "🔁 Реинвест", callback_data: "Реинвест"}],
   [ {text: "💳 Вывод", callback_data: "Вывод"}], 
   [ {text: "🌐 Смена тарифа", callback_data: "Смена тарифа"}]
  ],
 },
 on_result: "onMessageSending"
})
 /*Bot.sendInlineKeyboard([ {title: "Пополнить", command: "Пополнить"}, {title: "Реинвест", command: "Реинвест"}, {title: "Вывод", command: "Вывод"}, {title: "Смена тарифа", command: "Смена тарифа"}, {title: "Активировать", command: "SILVER_Activ"}], "💼 Ваш Инвестиционный портфель\n\n📈 Ваш тариф: 🥈 SILVER 🥈\n\n💵 Баланс торгового робота: " + balanceBot.value().toFixed(2) + " USDT\n💳 Баланс на вывод: " + balanceEarn.value().toFixed(2) + " USDT\n🧮 Средний процент: " + balanceProcent.value().toFixed(2) + "%\n🕖 Срок окончания активации: _Пополните баланс на_ *50 USDT* _для начала работы робота_", {on_result: "onMessageSending" })*/
} else if ((balanceBot.value() >= 50 | days != null) & stat == "partner1"){
var tx = "💼 Ваш Инвестиционный портфель\n\n📈 Ваш тариф: 🥈 SILVER 🥈\n\n💵 Баланс торгового робота: *" + balanceBot.value().toFixed(2) + "* USDT\n💳 Баланс на вывод: *" + balanceEarn.value().toFixed(2) + "* USDT\n🧮 Средний процент: *" + balanceProcent.value().toFixed(2) + "%*\n🕖 Срок окончания активации: *" + parseInt(days - 1) + " дней*";
Api.sendMessage({
 chat_id: user.telegramid,
 text: tx,
 parse_mode: "Markdown",
 reply_markup: {
    inline_keyboard: [
   [ {text: "📥 Пополнить", callback_data: "Пополнить"}, {text: "🔁 Реинвест", callback_data: "РеинвестНет"}],
   [ {text: "💳 Вывод", callback_data: "Вывод"}], 
   [ {text: "🌐 Смена тарифа (Через " + parseInt(days - 1) + " дней)", callback_data: "Смена тарифаНет"}]
  ],
 }
})
/*Bot.sendInlineKeyboard([ {title: "Пополнить", command: "Пополнить"}, {title: "Реинвест", command: "РеинвестНет"}, {title: "Вывод", command: "Вывод"}, {title: "Смена тарифа (Через " + parseInt(days - 1) + " дней)", command: "Смена тарифаНет"}], "💼 Ваш Инвестиционный портфель\n\n📈 Ваш тариф: 🥈 SILVER 🥈\n\n💵 Баланс торгового робота: " + balanceBot.value().toFixed(2) + " USDT\n💳 Баланс на вывод: " + balanceEarn.value().toFixed(2) + " USDT\n🧮 Средний процент: " + balanceProcent.value().toFixed(2) + "%\n🕖 Срок окончания активации: " + parseInt(days - 1) + " дней")*/
} else if ((balanceBot.value() < 500 | days == null) & stat == "partner2"){
var tx = "💼 Ваш Инвестиционный портфель\n\n📈 Ваш тариф: 🥇 GOLD 🥇\n\n💵 Баланс торгового робота: *" + balanceBot.value().toFixed(2) + "* USDT\n💳 Баланс на вывод: *" + balanceEarn.value().toFixed(2) + "* USDT\n🧮 Средний процент: *" + balanceProcent.value().toFixed(2) + "%*\n🕖 Срок окончания активации: _Пополните баланс на_ *500 USDT* _и активируйте для начала работы робота_";
Api.sendMessage({
 chat_id: user.telegramid,
 text: tx,
 parse_mode: "Markdown",
 reply_markup: {
    inline_keyboard: [
   [ {text: "🔑 Активировать", callback_data: "GOLD_Activ"}],
   [ {text: "📥 Пополнить", callback_data: "Пополнить"}, {text: "🔁 Реинвест", callback_data: "Реинвест"}],
   [ {text: "💳 Вывод", callback_data: "Вывод"}], 
   [ {text: "🌐 Смена тарифа", callback_data: "Смена тарифа"}]
  ],
 },
 on_result: "onMessageSending"
})
 /*Bot.sendInlineKeyboard([ {title: "Пополнить", command: "Пополнить"}, {title: "Реинвест", command: "Реинвест"}, {title: "Вывод", command: "Вывод"}, {title: "Смена тарифа", command: "Смена тарифа"}, {title: "Активировать", command: "GOLD_Activ"}], "💼 Ваш Инвестиционный портфель\n\n📈 Ваш тариф: 🥇 GOLD 🥇\n\n💵 Баланс торгового робота: " + balanceBot.value().toFixed(2) + " USDT\n💳 Баланс на вывод: " + balanceEarn.value().toFixed(2) + " USDT\n🧮 Средний процент: " + balanceProcent.value().toFixed(2) + "%\n🕖 Срок окончания активации: _Пополните баланс на_ *500 USDT* _для начала работы робота_", {on_result: "onMessageSending" })*/
} else if ((balanceBot.value() >= 500 | days != null) & stat == "partner2"){
var tx = "💼 Ваш Инвестиционный портфель\n\n📈 Ваш тариф: 🥇 GOLD 🥇\n\n💵 Баланс торгового робота: *" + balanceBot.value().toFixed(2) + "* USDT\n💳 Баланс на вывод: *" + balanceEarn.value().toFixed(2) + "* USDT\n🧮 Средний процент: *" + balanceProcent.value().toFixed(2) + "%*\n🕖 Срок окончания активации: *" + parseInt(days - 1) + " дней*";
Api.sendMessage({
 chat_id: user.telegramid,
 text: tx,
 parse_mode: "Markdown",
 reply_markup: {
    inline_keyboard: [
   [ {text: "📥 Пополнить", callback_data: "Пополнить"}, {text: "🔁 Реинвест", callback_data: "РеинвестНет"}],
   [ {text: "💳 Вывод", callback_data: "Вывод"}], 
   [ {text: "🌐 Смена тарифа (Через " + parseInt(days - 1) + " дней)", callback_data: "Смена тарифаНет"}]
  ],
 }
})
 /*Bot.sendInlineKeyboard([ {title: "Пополнить", command: "Пополнить"}, {title: "Реинвест", command: "РеинвестНет"}, {title: "Вывод", command: "Вывод"}, {title: "Смена тарифа (Через " + parseInt(days - 1) + " дней)", command: "Смена тарифаНет"}], "💼 Ваш Инвестиционный портфель\n\n📈 Ваш тариф: 🥇 GOLD 🥇\n\n💵 Баланс торгового робота: " + balanceBot.value().toFixed(2) + " USDT\n💳 Баланс на вывод: " + balanceEarn.value().toFixed(2) + " USDT\n🧮 Средний процент: " + balanceProcent.value().toFixed(2) + "%\n🕖 Срок окончания активации: " + parseInt(days - 1) + " дней")*/
}

/*
💼Инвестиционный портфель

💵Баланс торгового робота: 0.0 USDT
🤑Баланс на вывод: 2.71 USDT
📈Заработано за весь период :  21.71 USDT
🧮Средний процент:
🕖Срок окончания активации:*/
