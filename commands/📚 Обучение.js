/*CMD
  command: 📚 Обучение
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");

if (stat == "partner1"){
Bot.sendInlineKeyboard([ {title: "📕 Базовые уроки", url: "https://docs.google.com/spreadsheets/d/11LKu_1glMGCkRVuZabe0SQemkSHI-aGtZGsPUB7foAE/edit" }], "📖 В пакете *💰 Новичок 💰* доступны следющие уроки:");
}
else if (stat == "partner3"){
Bot.sendInlineKeyboard([ {title: "📕 Базовые уроки", url: "https://docs.google.com/spreadsheets/d/11LKu_1glMGCkRVuZabe0SQemkSHI-aGtZGsPUB7foAE/edit" }], "📖 В пакете 💰 Новичок *VIP* 💰 доступны следющие уроки:");
} else if (stat == "partner2"){
Bot.sendInlineKeyboard([ {title: "📕 Базовые уроки", url: "https://docs.google.com/spreadsheets/d/11LKu_1glMGCkRVuZabe0SQemkSHI-aGtZGsPUB7foAE/edit" }, {title: "📗 Введение в криптовалюту", url: "https://docs.google.com/spreadsheets/d/11aQfLY6wFhTNpRFzP_uZijVApoHmFKYBx2vdPOw7mvo/edit#gid=0"}, {title: "📘 Тех анализ", url: "https://docs.google.com/spreadsheets/d/13H-CPmXy_5jiWJ-cBGcXcpyNls75bgrH2eFh7G6SXOk/edit"}, {title: "📙 Интенсив по заработку на NFT", url: "https://docs.google.com/spreadsheets/d/13oiGlu_rBk_LHexXP1ugwc6AuIWPS4OgnXZGqLUnDyU/edit"} ], "📖 В пакете *💎 Продвинутый 💎* доступны следющие уроки:");
} else if (stat == "partner4"){
Bot.sendInlineKeyboard([ {title: "📕 Базовые уроки", url: "https://docs.google.com/spreadsheets/d/11LKu_1glMGCkRVuZabe0SQemkSHI-aGtZGsPUB7foAE/edit" }, {title: "📗 Введение в криптовалюту", url: "https://docs.google.com/spreadsheets/d/11aQfLY6wFhTNpRFzP_uZijVApoHmFKYBx2vdPOw7mvo/edit#gid=0"}, {title: "📘 Тех анализ", url: "https://docs.google.com/spreadsheets/d/13H-CPmXy_5jiWJ-cBGcXcpyNls75bgrH2eFh7G6SXOk/edit"}, {title: "📙 Интенсив по заработку на NFT", url: "https://docs.google.com/spreadsheets/d/13oiGlu_rBk_LHexXP1ugwc6AuIWPS4OgnXZGqLUnDyU/edit"} ], "📖 В пакете 💎 Продвинутый *VIP* 💎 доступны следющие уроки:");
} else {
Bot.runCommand("main_menu")
}
