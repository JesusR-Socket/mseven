/*CMD
  command: /proof1test
  help: 
  need_reply: 
  auto_retry_time: 
  folder: admins
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
var referral1_id = Bot.getProperty("referral:"+id);
var referral2_id = Bot.getProperty("referral:"+referral);
var referral3_id = Bot.getProperty("referral:"+referral2);
var r

let stat = Bot.getProperty(""+id+"");
if (stat != "ban"){
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно оплатили!")
 Bot.setProperty(""+id+"", "partner1");
}

if (referral1 != "undefined"){
var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1);
var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1);
balanceRefAll.add(200);
balanceRef.add(200);
Bot.sendMessageToChatWithId(referral1, "🏧 Новый реферал : +200.0 $");
}

if (referral2 != "undefined"){
var balanceRefAll2 = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2);
var balanceRef2 = Libs.ResourcesLib.anotherUserRes("balance2", referral2);
balanceRefAll2.add(80);
balanceRef2.add(80);
Bot.sendMessageToChatWithId(referral2, "🏧 Новый реферал : +80.0 $");
}

if (referral3 != "undefined"){
var balanceRefAll3 = Libs.ResourcesLib.anotherUserRes("balanceAll", referral3);
var balanceRef3 = Libs.ResourcesLib.anotherUserRes("balance3", referral3);
balanceRefAll3.add(40);
balanceRef3.add(40);
Bot.sendMessageToChatWithId(referral3, "🏧 Новый реферал : +40.0 $");
}
