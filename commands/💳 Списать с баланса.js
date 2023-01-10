/*CMD
  command: 💳 Списать с баланса
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var stat = Bot.getProperty("" + user.telegramid + "");

if (stat == "partner1"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.sendMessage("✅ Вы успешно оплатили ✅");
 var days = Bot.getProperty("Subscribe:" + user.telegramid + "");
 Bot.setProperty("Subscribe:" + user.telegramid + "", days + 30);
 Bot.runCommand("main_menu");
 }
} else if (stat == "partner1ban"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.sendMessage("✅ Вы успешно оплатили ✅");
 Bot.setProperty("" + user.telegramid + "", "partner1");
 Bot.setProperty("Subscribe:" + user.telegramid + "", 31);
 Bot.runCommand("main_menu");
 }
}

if (stat == "partner2"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.sendMessage("✅ Вы успешно оплатили ✅");
 var days = Bot.getProperty("Subscribe:" + user.telegramid + "");
 Bot.setProperty("Subscribe:" + user.telegramid + "", days + 30);
 Bot.runCommand("main_menu");
 }
} else if (stat == "partner2ban"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.sendMessage("✅ Вы успешно оплатили ✅");
 Bot.setProperty("" + user.telegramid + "", "partner2");
 Bot.setProperty("Subscribe:" + user.telegramid + "", 31);
 Bot.runCommand("main_menu");
 }
}

if (stat == "partner3"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.sendMessage("✅ Вы успешно оплатили ✅");
 var days = Bot.getProperty("Subscribe:" + user.telegramid + "");
 Bot.setProperty("Subscribe:" + user.telegramid + "", days + 30);
 Bot.runCommand("main_menu");
 }
} else if (stat == "partner3ban"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.sendMessage("✅ Вы успешно оплатили ✅");
 Bot.setProperty("" + user.telegramid + "", "partner3");
 Bot.setProperty("Subscribe:" + user.telegramid + "", 31);
 Bot.runCommand("main_menu");
 }
}

if (stat == "partner4"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.sendMessage("✅ Вы успешно оплатили ✅");
 var days = Bot.getProperty("Subscribe:" + user.telegramid + "");
 Bot.setProperty("Subscribe:" + user.telegramid + "", days + 30);
 Bot.runCommand("main_menu");
 }
} else if (stat == "partner4ban"){
 if (balanceAll.value() < 50){
 Bot.sendMessage("❌ У Вас на балансе недостаточно средств. ❌");
 Bot.runCommand("⏳ Продлить подписку");
 } else {
 balanceAll.add(-50);
 Bot.sendMessage("✅ Вы успешно оплатили ✅");
 Bot.setProperty("" + user.telegramid + "", "partner4");
 Bot.setProperty("Subscribe:" + user.telegramid + "", 31);
 Bot.runCommand("main_menu");
 }
}
