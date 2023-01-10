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
Bot.editMessage("Ваш пакет успешно активирован!", id)
Bot.setProperty("Days:" + user.telegramid + "", 14)
Bot.setProperty("" + user.telegramid + "", "partner2")

var broadcast = Bot.getProperty("Gold") ? Bot.getProperty("Gold") : []
if (!broadcast.includes(user.telegramid)) {
  broadcast.push(user.telegramid)
  Bot.setProperty("Gold", broadcast, "json")
}

Bot.setProperty("MSG:" + user.telegramid, null)
Bot.runCommand("💼 Инвестиционный портфель");
