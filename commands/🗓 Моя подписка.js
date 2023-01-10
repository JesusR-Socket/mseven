/*CMD
  command: 🗓 Моя подписка
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
var days = Bot.getProperty("Subscribe:"+ user.telegramid +"");

if (stat == "partner1" | stat == "partner1ban"){
Bot.sendInlineKeyboard([{title: "🔰 Улучшить пакет", command: "🔰 Улучшить пакет" }, {title: "⏳ Продлить подписку", command: "⏳ Продлить подписку" }], "Пакет: 💰 Новичок 💰\n\n⌛️ Дней в подписке: *" + (days - 1) + "*");
} else if (stat == "partner2" | stat == "partner2ban"){
Bot.sendInlineKeyboard([{title: "⏳ Продлить подписку", command: "⏳ Продлить подписку" }], "Пакет: 💎 Продвинутый 💎\n\n⌛️ Дней в подписке: *" + (days - 1) + "*");
} else if (stat == "partner3" | stat == "partner3ban"){
Bot.sendInlineKeyboard([{title: "🔰 Улучшить пакет", command: "🔰 Улучшить пакет" }, {title: "⏳ Продлить подписку", command: "⏳ Продлить подписку" }], "Пакет: 💰 Новичок *VIP* 💰\n\n⌛️ Дней в подписке: *" + (days - 1) + "*");
} else if (stat == "partnerChat" | stat == "partnerChatban"){
Bot.sendInlineKeyboard([{title: "🔰 Улучшить пакет", command: "🔰 Улучшить пакет" }, {title: "⏳ Продлить подписку", command: "⏳ Продлить подписку" }], "Пакет: 🥷 VIP чат 🥷\n\n⌛️ Дней в подписке: *" + (days - 1) + "*");
} else if (stat == "partner4" | stat == "partner4ban"){
Bot.sendInlineKeyboard([{title: "⏳ Продлить подписку", command: "⏳ Продлить подписку" }], "Пакет: 💎 Продвинутый *VIP* 💎\n\n⌛️ Дней в подписке: *" + (days - 1) + "*");
} else {
Bot.runCommand("main_menu")
}
