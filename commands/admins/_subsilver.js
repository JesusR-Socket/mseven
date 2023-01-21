/*CMD
  command: /subsilver
  help: 
  need_reply: 
  auto_retry_time: 
  folder: admins
  answer: 
  keyboard: 
  aliases: 
CMD*/

var users = Bot.getProperty("Silver");
var procent = (Math.random() * (1.0 - 0.5) + 0.5).toFixed(2);

for(var i in users){
var days = Bot.getProperty("Days:" + users[i] + "");
if (days == 1){
 Bot.setProperty("Days:" + users[i] + "", days - 1);
 var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", users[i]);
 var balanceEarn = Libs.ResourcesLib.anotherUserRes("balanceEarn", users[i]);
 balanceEarn.add(parseFloat(balanceBot.value()))
 balanceBot.set(0);
 Bot.sendMessageToChatWithId(users[i], "⛔️ Срок тарифа закончился ⛔️"); 
} else {
var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", users[i]);
if (balanceBot.value().toFixed(0) >= 50)
{
var balanceEarn = Libs.ResourcesLib.anotherUserRes("balanceEarn", users[i]);
var balanceProcent = Libs.ResourcesLib.anotherUserRes("balanceProcent", users[i]);
var plus = balanceBot.value().toFixed(2)/100*procent;
balanceEarn.add(plus);
if (balanceProcent.value().toFixed(1) < 0.5){
 balanceProcent.add(parseFloat(procent));
}
else{
 var balance = parseFloat(balanceProcent.value()) + parseFloat(procent)
 balanceProcent.set(parseFloat(balance/2))
}
Bot.setProperty("Days:" + users[i] + "", days - 1);
days--;
Bot.sendMessageToChatWithId(users[i], "🏧 С Вашего баланса: *" + balanceBot.value().toFixed(2) + " USDT* начислен процент *+" + procent + "%*");
if (days == 1){
 Bot.setProperty("Days:" + users[i] + "", days - 1);
 var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", users[i]);
 var balanceEarn = Libs.ResourcesLib.anotherUserRes("balanceEarn", users[i]);
 balanceEarn.add(parseFloat(balanceBot.value()))
 balanceBot.set(0);
 Bot.sendMessageToChatWithId(users[i], "⛔️ Срок тарифа закончился ⛔️"); 
}
}
}
}
/*
Bot.run( {
    command: "sub1",
    run_after: 60*60*24*10,
    label: "sub"
 } ) */
