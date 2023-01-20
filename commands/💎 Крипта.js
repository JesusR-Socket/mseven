/*CMD
  command: 💎 Крипта
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💎 crypto
CMD*/

if (Bot.getProperty("buy:" + user.telegramid) == 3) {
  Bot.sendKeyboard("USDT,BTC,ETH\nBNB,LTC,BUSDT,\n❌ Вернуться","⭕️ Выберите в чём выводить:")
} else {
  var tx;
  Bot.sendKeyboard(
    "USDT,BTC,ETH\nBNB,LTC,BUSDT,\n❌ Вернуться",
    "⭕️ Выберите способ пополнения:"
  )
  Api.sendMessage({
   text: "⚠️ <i>Если Вам не подходят данные способы оплаты, то обратитесь в тех. поддержку.</i>",
   parse_mode: "HTML"
  })
}

if (Bot.getProperty("buy:" + user.telegramid) == "4") {
  Bot.sendMessage("🛑ВНИМАНИЕ! Для апгрейда Вам надо доплатить 150$🛑")
}
