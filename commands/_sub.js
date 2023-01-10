/*CMD
  command: /sub
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
var referral1_id = Bot.getProperty("referral:"+id);
var referral2_id = Bot.getProperty("referral:"+referral1_id);
var referral3_id = Bot.getProperty("referral:"+referral2_id);
var referral4_id = Bot.getProperty("referral:"+referral3_id);
var referral5_id = Bot.getProperty("referral:"+referral4_id);

var referral1_stat = Bot.getProperty(""+referral1_id+"");
var referral2_stat = Bot.getProperty(""+referral2_id+"");
var referral3_stat = Bot.getProperty(""+referral3_id+"");
var referral4_stat = Bot.getProperty(""+referral4_id+"");
var referral5_stat = Bot.getProperty(""+referral5_id+"");


let stat = Bot.getProperty(""+id+"");
if (stat == "partner1" | stat == "partner2" | stat == "partner3"){
 var days = Bot.getProperty("Subscribe:" + id + "");
 Bot.sendMessageToChatWithId(id, "💵 Вы успешно продлили подписку!");
 Bot.setProperty("Subscribe:" + id + "", days + 32);
} else if (stat == "partner1ban"){
  Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно продлили подписку!")
  Bot.setProperty(""+id+"", "partner1");
  Bot.setProperty("Subscribe:" + id + "", 32);
  Api.unbanChatMember({
    chat_id: "-1001651285486",
    user_id: id
 });
  Api.unbanChatMember({
    chat_id: "-1001323656474",
    user_id: id
 });
  Api.unbanChatMember({
    chat_id: "-1001632745210",
    user_id: id
 });
}  else if (stat == "partner2ban"){
  Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно продлили подписку!")
  Bot.setProperty(""+id+"", "partner2");
  Bot.setProperty("Subscribe:" + id + "", 32);
  Api.unbanChatMember({
    chat_id: "-1001651285486",
    user_id: id
 });
  Api.unbanChatMember({
    chat_id: "-1001323656474",
    user_id: id
 });
  Api.unbanChatMember({
    chat_id: "-1001632745210",
    user_id: id
 });
}  else if (stat == "partner3ban"){
  Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно продлили подписку!")
  Bot.setProperty(""+id+"", "partner3");
  Bot.setProperty("Subscribe:" + id + "", 32);
  Api.unbanChatMember({
    chat_id: "-1001651285486",
    user_id: id
 });
  Api.unbanChatMember({
    chat_id: "-1001323656474",
    user_id: id
 });
  Api.unbanChatMember({
    chat_id: "-1001632745210",
    user_id: id
 });
}

if (referral1_id != "undefined"){
 if (referral1_stat == "partner1"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(15);
  balanceRef.add(15);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход за продление подписки : +15.0 $");
 } else if (referral1_stat == "partner2"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(20);
  balanceRef.add(20);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход за продление подписки : +20.0 $");
 } else if (referral1_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(25);
  balanceRef.add(25);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход за продление подписки : +25.0 $");
 }
}

if (referral2_id != "undefined"){
 if (referral2_stat == "partner2"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(7);
  balanceRef.add(7); 
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход за продление подписки : +7.0 $");
 } else if (referral2_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(10);
  balanceRef.add(10);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход за продление подписки : +10.0 $");
 }
}

if (referral3_id != "undefined"){
 if (referral3_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral3_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance3", referral3_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count3", referral3_id);
  balanceRefAll.add(5);
  balanceRef.add(5);
  Bot.sendMessageToChatWithId(referral3_id, "🏧 Вам начислен доход за продление подписки : +5.0 $");
 }
}

if (referral4_id != "undefined"){
 if (referral4_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral4_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance4", referral4_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count4", referral4_id);
  balanceRefAll.add(2);
  balanceRef.add(2);
  Bot.sendMessageToChatWithId(referral4_id, "🏧 Вам начислен доход за продление подписки : +2.0 $");
 }
}

if (referral5_id != "undefined"){
 if (referral5_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral5_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance5", referral5_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count5", referral5_id);
  balanceRefAll.add(2);
  balanceRef.add(2);
  Bot.sendMessageToChatWithId(referral5_id, "🏧 Вам начислен доход за продление подписки : +2.0 $");
 }
}
