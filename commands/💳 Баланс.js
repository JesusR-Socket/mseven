/*CMD
  command: 💳 Баланс
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "partner1ban" | stat == "partner2ban" | stat == "partner3ban"){
 Bot.runCommand("main_menu");
} else {
var balance = Libs.ResourcesLib.userRes("balance")
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var lib = Libs.ReferralLib;
var refList = lib.currentUser.refList.get();
let stat = Bot.getProperty(""+user.telegramid+"");
var days = Bot.getProperty("Subscribe:"+ user.telegramid +"");
if (days > 200){
Bot.sendInlineKeyboard([{title: "📥 Вывод 📥", command: "Вывод" }], "💰 Баланс : "+balanceAll.value().toFixed(2)+" $\n\n⌛️ Дней в подписке: *Пожизненно*");
} else {
Bot.sendInlineKeyboard([{title: "📥 Вывод 📥", command: "Вывод" }], "💰 Баланс : "+balanceAll.value().toFixed(2)+" $\n\n⌛️ Дней в подписке: *" + (days - 1) + "*");
}
}
