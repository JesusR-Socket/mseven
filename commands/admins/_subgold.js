/*CMD
  command: /subgold
  help: 
  need_reply: 
  auto_retry_time: 
  folder: admins
  answer: 
  keyboard: 
  aliases: 
CMD*/

var users = Bot.getProperty("Gold");
var procent = (Math.random() * (1.7 - 1.0) + 1.0).toFixed(2);

Bot.sendMessage(procent)
for(var i in users){
var days = Bot.getProperty("Days:" + users[i] + "");
if (days == 1){
 var stat = Bot.getProperty("" + users[i] + "");
 if (stat == "partner1" | stat == "partner2"){
 Bot.setProperty("Days:" + users[i] + "", days - 1);
 Bot.sendMessageToChatWithId(users[i], "⛔️ Срок тарифа закончился ⛔️");
} 
} else {
var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", users[i]);
Bot.sendMessage(balanceBot.value().toFixed(0))
if (balanceBot.value().toFixed(0) >= 500)
{
var balanceEarn = Libs.ResourcesLib.anotherUserRes("balanceEarn", users[i]);
var plus = balanceBot.value().toFixed(2)/100*procent;
balanceEarn.add(plus);
Bot.setProperty("Days:" + users[i] + "", days - 1);
Bot.sendMessageToChatWithId(users[i], "🏧 С Вашего баланса: *" + balanceBot.value().toFixed(2) + " USDT* начислен процент *+" + procent + "%*");
}
}
}
/*
Bot.run( {
    command: "sub1",
    run_after: 60*60*24*10,
    label: "sub"
 } ) */
