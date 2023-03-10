/*CMD
  command: 👫 Партнёрская система
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /partners
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "partner1ban" | stat == "partner2ban" | stat == "ban"){
 Bot.runCommand("main_menu");
} else {
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
let reflink = Libs.ReferralLib.currentUser.getRefLink("MoneySeven_bot", "Bot");
//let reflink = Libs.ReferralLib.currentUser.getRefLink("m7test_bot", "Bot");
var ref = Libs.ReferralLib.getAttractedBy();
var id1 = Bot.getProperty(user.telegramid + ":inviteby");
if (ref == null){
if (id1 == null){
ref = "Нет спонсора";
}
else{
ref = id1;
}
}
else if (ref.username != null){
ref = ref.username;
}
else {
ref = ref.first_name;
}
var tx;

if (stat=="partner1" | stat=="partner2") {
tx = "🔍 Получайте дополнительный доход в USDT, приглашая своих партнеров по реферальной ссылке.\n\n 🔗 Реферальная ссылка:\n" + reflink + "\n\n✅ 1 уровень: 5%\n✅ 2 уровень: 3%\n✅ 3 уровень: 2%\n\n👥 Приглашено:\n1 уровень: "+balanceCount.value().toFixed(0)+" : "+balance.value().toFixed(2)+" USDT\n2 уровень: "+balanceCount2.value().toFixed(0)+" : "+balance2.value().toFixed(2)+" USDT\n3 уровень: "+balanceCount3.value().toFixed(0)+" : "+balance3.value().toFixed(2)+" USDT\n\n👥 Ваш спонсор: " + ref;
  Api.sendMessage({
   text: tx,
   parse_mode: "HTML"
  })
} else {
tx = "🔍Получайте дополнительный доход в USDT, приглашая своих партнеров по реферальной ссылке.\n🚫 <b>Внимание! Для работы партнёрской системы необходимо активировать тариф!</b>\n\n 🔗 Реферальная ссылка:\n" + reflink + "\n\n❌ 1 уровень: 5%\n❌ 2 уровень: 3%\n❌ 3 уровень: 2%\n\n👥 Приглашено:\n1 уровень: "+balanceCount.value().toFixed(0)+" : "+balance.value().toFixed(2)+" USDT\n2 уровень: "+balanceCount2.value().toFixed(0)+" : "+balance2.value().toFixed(2)+" USDT\n3 уровень: "+balanceCount3.value().toFixed(0)+" : "+balance3.value().toFixed(2)+" USDT\n\n👥 Ваш спонсор: " + ref;
  Api.sendMessage({
   text: tx,
   parse_mode: "HTML"
  })
}
}

/*
🔍Получайте дополнительный доход в USDT, приглашая своих партнеров по реферальной ссылке.

🔗Реферальная ссылка: ? 
❌1 уровень: 5% 
❌2 уровень: 3%
❌3 уровень: 2%

👤Приглашено:
1 уровень: 0 - 0USDT
2 уровень: 0 - 0 USDT
3 уровень: 0 - 0 USDT

💰Заработано на рефералах:
1 уровень: 0.0 USDT
2 уровень: 0.0 USDT
3 уровень: 0.0 USDT


👥Ваш спонсор: ?*/
