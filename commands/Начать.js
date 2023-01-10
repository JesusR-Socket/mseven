/*CMD
  command: Начать
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "partner1" | stat == "partner2" | stat == "partner3" | stat == "partner4" | stat == "partnerChat"){
Api.sendMessage({ 
chat_id: user.telegramid, 
text: "🔒 Ссылка на VIP чат: https://t.me/+VFVOYpPKxupkN2Yy \n🔗 Ссылка на канал: https://t.me/InsiderChanneI" , 
parse_mode: "HTML"})

var broadcast = Bot.getProperty("Broadcast") ? Bot.getProperty("Broadcast") : []
if (!broadcast.includes(user.telegramid)) {
  broadcast.push(user.telegramid)
  Bot.setProperty("Broadcast", broadcast, "json")
}
}

Bot.runCommand("main_menu");
