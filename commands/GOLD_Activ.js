/*CMD
  command: GOLD_Activ
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("MSG:" + user.telegramid)
Bot.editMessage("✅ Ваш пакет успешно активирован!\n*⚠️ До пополнения баланса Вы можете сменить свой тариф*", id)
Bot.setProperty("Days:" + user.telegramid + "", 15)
Bot.setProperty("" + user.telegramid + "", "partner2")

var broadcast = Bot.getProperty("Gold") ? Bot.getProperty("Gold") : []
var broadcast2 = Bot.getProperty("Silver") ? Bot.getProperty("Silver") : []

if (!broadcast.includes(user.telegramid) & broadcast2.includes(user.telegramid)) {
  const index = broadcast2.indexOf(user.telegramid);
  if (index > -1) {
   broadcast2.splice(index, 1);
  }
  broadcast.push(user.telegramid)
  Bot.setProperty("Gold", broadcast, "json")
  Bot.setProperty("Silver", broadcast2, "json")
} else if (!broadcast.includes(user.telegramid) & !broadcast2.includes(user.telegramid)) {
  broadcast.push(user.telegramid)
  Bot.setProperty("Gold", broadcast, "json")
}

Bot.setProperty("MSG:" + user.telegramid, null)
Bot.runCommand("💼 Инвестиционный портфель");
//Api.editMessage({message_id: id, text: "sss", parse_mode: "html", reply_markup: { inline_keyboard: inl }});
