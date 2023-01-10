/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lang = Libs.Lang;
var stat = Bot.getProperty(""+user.telegramid+"");
if (stat == "ban"){
 Bot.sendKeyboard("🛠 Тех. Поддержка", "⛔️ Вы были забнены в боте!")
} else {
 Bot.sendKeyboard("💼 Инвестиционный портфель,👫 Партнёрская система,\n📚 Ответы на вопросы,🛠 Тех. Поддержка","ℹ️Приветствую в разделе меню!\n\n💼 Инвестиционный портфель – раздел где вы можете пополнить свой инвестиционный баланс и зарабатывать.\n👫 Партнёрская система – получайте дополнительный доход в USDT, приглашая своих партнеров по реферальной ссылке.\n📚 Ответы на вопросы – здесь в найдете ответы на все вопросы.")
}

if (/*user.telegramid == "521759529" | */user.telegramid == "246451346"){
 Bot.sendKeyboard("💼 Инвестиционный портфель,👫 Партнёрская система,\n📚 Ответы на вопросы,🛠 Тех. Поддержка\nУдалить,Восстановить,Добавить дней", "Вы зашли как *Администратор*")
}
/*
ℹ️Приветствую в разделе меню!

🏦Инвестиционный портфель – раздел где вы можете пополнить свой инвестиционный баланс и зарабатывать.
👥Партнерская программа – получайте дополнительный доход в USDT, приглашая своих партнеров по реферальной ссылке.
📖Ответы на вопросы – здесь в найдете ответы на все вопросы.


let stat = Bot.getProperty(""+user.telegramid+"");
if (stat == "partner1ban" | stat == "partner2ban"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("⏳ Продлить подписку,🔰 Улучшить пакет,\n🛠 Тех. Поддержка", "❌ Продлите подписку чтобы продолжить ❌")
} else if (stat == "partner3ban"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
Bot.sendKeyboard("⏳ Продлить подписку,🛠 Тех. Поддержка", "❌ Продлите подписку чтобы продолжить ❌")
} else if (stat == "partner1" | stat == "partner2"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🔗 Моя ссылка,💳 Баланс\n👫 Партнёры,🛠 Тех. Поддержка\n⏳ Продлить подписку,🔰 Улучшить пакет", "🌀Обучайся, приглашай и зарабатывай🌀")
} else if (stat == "partner3"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🔗 Моя ссылка,💳 Баланс\n👫 Партнёры,🛠 Тех. Поддержка\n⏳ Продлить подписку", "🌀Обучайся, приглашай и зарабатывай🌀")
} else if (stat=="user" | stat =="member"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard(lang.t("main_menu.keyboards.startMenu.buttons"),lang.t("main_menu.keyboards.startMenu.text"))
} else if (stat=="ban"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🧑🏻‍💻 Узнать подробнее", "🌀Обучайся, приглашай и зарабатывай🌀")
}
if (user=="left"){
Bot.runCommand("/start");
} */
