/*CMD
  command: SILVER
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("MSG:" + user.telegramid)
Bot.editMessage("ℹ️ Вы выбрали тариф 🥈 SILVER 🥈\n\n*⚠️ До пополнения баланса Вы можете сменить свой тариф*", id)
Bot.setProperty("" + user.telegramid + "", "partner1")

var broadcast = Bot.getProperty("Silver") ? Bot.getProperty("Silver") : []
var broadcast2 = Bot.getProperty("Gold") ? Bot.getProperty("Gold") : []

if (!broadcast.includes(user.telegramid) & broadcast2.includes(user.telegramid)) {
  const index = broadcast2.indexOf(user.telegramid);
  if (index > -1) {
   broadcast2.splice(index, 1);
  }
  broadcast.push(user.telegramid)
  Bot.setProperty("Silver", broadcast, "json")
  Bot.setProperty("Gold", broadcast2, "json")
} else if (!broadcast.includes(user.telegramid) & !broadcast2.includes(user.telegramid)) {
  broadcast.push(user.telegramid)
  Bot.setProperty("Silver", broadcast, "json")
}

Bot.setProperty("MSG:" + user.telegramid, null)
Bot.runCommand("💼 Инвестиционный портфель");
//Bot.editInlineKeyboard([ {title: "🔰 Активировать", command: "SILVER_Activ" } ])
