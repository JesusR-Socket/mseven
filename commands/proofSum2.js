/*CMD
  command: proofSum2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: TelegramID:
  keyboard: 
  aliases: 
CMD*/

var id = parseInt(message);
var referral1_id = Bot.getProperty(id+":inviteby");
var referral2_id = Bot.getProperty(referral1_id+":inviteby");
var referral3_id = Bot.getProperty(referral2_id+":inviteby");

let stat = Bot.getProperty(""+id+"");
var referral1_stat = Bot.getProperty(""+referral1_id+"");
var referral2_stat = Bot.getProperty(""+referral2_id+"");
var referral3_stat = Bot.getProperty(""+referral3_id+"");

var deposit = parseInt(Bot.getProperty("ADMdeposit:"));

var days = Bot.getProperty("Days:" + id + "");

if (stat != "ban"){
 if (stat == "partner1" | stat == "partner2"){
  if (days == null){
  Bot.setProperty("Days:" + id + "", 15)
  }
  var balanceBot = Libs.ResourcesLib.anotherUserRes("balanceBot", id);
  balanceBot.add(deposit);
  Bot.sendMessageToChatWithId(id, "🏧 Вам начислено : " + deposit.toFixed(2) + " USDT");
 }
}

if (referral1_stat == "partner1" | referral1_stat == "partner2"){
  var vip = Bot.getProperty("vip:" + referral1_id)
  if (vip == 50 | vip == 60 | vip == 40){
  var balanceRefBot = Libs.ResourcesLib.anotherUserRes("balanceEarn", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  var deposit1 = parseInt(deposit/100*vip)
  balanceRefBot.add(deposit1);
  balanceRef.add(deposit1);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : " + deposit1.toFixed(2) + " USDT");
  } else {
  var balanceRefBot = Libs.ResourcesLib.anotherUserRes("balanceEarn", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  var deposit1 = parseInt(deposit/100*5)
  balanceRefBot.add(deposit1);
  balanceRef.add(deposit1);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : " + deposit1.toFixed(2) + " USDT");
  }
}

if (referral2_stat == "partner1" | referral2_stat == "partner2"){
  var balanceRefBot = Libs.ResourcesLib.anotherUserRes("balanceEarn", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  var deposit1 = parseInt(deposit/100*3)
  balanceRefBot.add(deposit1);
  balanceRef.add(deposit1);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход со второй линии : " + deposit1.toFixed(2) + " USDT");
}

if (referral3_stat == "partner1" | referral3_stat == "partner2"){
  var balanceRefBot = Libs.ResourcesLib.anotherUserRes("balanceEarn", referral3_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance3", referral3_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count3", referral3_id);
  var deposit1 = parseInt(deposit/100)
  balanceRefBot.add(deposit1);
  balanceRef.add(deposit1);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral3_id, "🏧 Вам начислен доход со второй линии : " + deposit1.toFixed(2) + " USDT");
}
/*if (stat != "ban"){
if (stat == "user" | stat == "member" ){
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно оплатили!")
 if (buyid == "11"){
 Bot.setProperty(""+id+"", "partner1");
 Bot.setProperty("Subscribe:" + id + "", 31);
 } else if (buyid == "12"){
 Bot.setProperty(""+id+"", "partner1");
 Bot.setProperty("Subscribe:" + id + "", 91);
 } else if (buyid == "21"){
 Bot.setProperty(""+id+"", "partner2");
 Bot.setProperty("Subscribe:" + id + "", 31);
 } else if (buyid == "22"){
 Bot.setProperty(""+id+"", "partner2");
 Bot.setProperty("Subscribe:" + id + "", 91);
 } else if (buyid == "23"){
 Bot.setProperty(""+id+"", "partner2");
 Bot.setProperty("Subscribe:" + id + "", 181);
 } else if (buyid == "31"){
 Bot.setProperty(""+id+"", "partnerChat");
 Bot.setProperty("Subscribe:" + id + "", 31);
 } else if (buyid == "32"){
 Bot.setProperty(""+id+"", "partnerChat");
 Bot.setProperty("Subscribe:" + id + "", 91);
 } else if (buyid == "33"){
 Bot.setProperty(""+id+"", "partnerChat");
 Bot.setProperty("Subscribe:" + id + "", 181);
 } else if (buyid == "4"){
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно обновили пакет!")
 Bot.setProperty(""+id+"", "partner2");
 } else if (buyid == "10"){
 Bot.setProperty("Subscribe:" + id + "", 31);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
}

if (stat == "partnerChat"){
 if (buyid == "4"){
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно обновили пакет!");
 Bot.setProperty(""+id+"", "partner2");
 } else if (buyid == "10"){
 var days = Bot.getProperty("Subscribe:" + id + "");
 Bot.setProperty("Subscribe:" + id + "", days + 30);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
} else if (stat == "partnerChatban"){
 if (buyid == "4"){
 Api.unbanChatMember({
    chat_id: "-1001691629203",
    user_id: id
 });
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно обновили пакет!");
 Bot.setProperty(""+id+"", "partner2");
 } else if (buyid == "10"){
 Api.unbanChatMember({
    chat_id: "-1001691629203",
    user_id: id
 });
 Bot.setProperty(""+id+"", "partnerChat");
 Bot.setProperty("Subscribe:" + id + "", 31);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
}

if (stat == "partner1"){
 if (buyid == "4"){
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно обновили пакет!");
 Bot.setProperty(""+id+"", "partner2");
 } else if (buyid == "10"){
 var days = Bot.getProperty("Subscribe:" + id + "");
 Bot.setProperty("Subscribe:" + id + "", days + 30);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
} else if (stat == "partner1ban"){
 if (buyid == "4"){
 Api.unbanChatMember({
    chat_id: "-1001691629203",
    user_id: id
 });
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно обновили пакет!");
 Bot.setProperty(""+id+"", "partner2");
 } else if (buyid == "10"){
 Api.unbanChatMember({
    chat_id: "-1001691629203",
    user_id: id
 });
 Bot.setProperty(""+id+"", "partner1");
 Bot.setProperty("Subscribe:" + id + "", 31);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
}

if (stat == "partner2"){
 if (buyid == "10"){
 var days = Bot.getProperty("Subscribe:" + id + "");
 Bot.setProperty("Subscribe:" + id + "", days + 30);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
} else if (stat == "partner2ban"){
 if (buyid == "10"){
 Api.unbanChatMember({
    chat_id: "-1001691629203",
    user_id: id
 });
 Bot.setProperty(""+id+"", "partner2");
 Bot.setProperty("Subscribe:" + id + "", 31);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
}

if (stat == "partner3"){
 if (buyid == "4"){
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно обновили пакет!");
 Bot.setProperty(""+id+"", "partner4");
 } else if (buyid == "10"){
 var days = Bot.getProperty("Subscribe:" + id + "");
 Bot.setProperty("Subscribe:" + id + "", days + 30);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
} else if (stat == "partner3ban"){
 if (buyid == "4"){
 Api.unbanChatMember({
    chat_id: "-1001691629203",
    user_id: id
 });
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно обновили пакет!");
 Bot.setProperty(""+id+"", "partner4");
 } else if (buyid == "10"){
 Api.unbanChatMember({
    chat_id: "-1001691629203",
    user_id: id
 });
 Bot.setProperty(""+id+"", "partner3");
 Bot.setProperty("Subscribe:" + id + "", 31);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
}

if (stat == "partner4"){
 if (buyid == "10"){
 var days = Bot.getProperty("Subscribe:" + id + "");
 Bot.setProperty("Subscribe:" + id + "", days + 30);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
} else if (stat == "partner4ban"){
 if (buyid == "10"){
 Api.unbanChatMember({
    chat_id: "-1001691629203",
    user_id: id
 });
 Bot.setProperty(""+id+"", "partner4");
 Bot.setProperty("Subscribe:" + id + "", 31);
 Bot.sendMessageToChatWithId(id, "✅ Вы успешно продлили подписку ✅")
 }
}

var refferal1_stat = Bot.getProperty("" + referral1_id + "");
if (referral1_id != null & (refferal1_stat == "partner3" | refferal1_stat == "partner4")){
 if (buyid == "11"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(50);
  balanceRef.add(50);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +50.0 $");
 } else if (buyid == "12"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(100);
  balanceRef.add(100);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +100.0 $");
 } else if (buyid == "21"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(100);
  balanceRef.add(100);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +100.0 $");
 } else if (buyid == "22"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(200);
  balanceRef.add(200);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +200.0 $");
 } else if (buyid == "23"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(300);
  balanceRef.add(300);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +300.0 $");
 } else if (buyid == "31"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(37);
  balanceRef.add(37);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +37.0 $");
 } else if (buyid == "32"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(75);
  balanceRef.add(75);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +75.0 $");
 } else if (buyid == "33"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(150);
  balanceRef.add(150);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +150.0 $");
 } else if (buyid == "4"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(75);
  balanceRef.add(75);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход за улучшение пакета : +75.0 $");
 } else if (buyid == "10"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(25);
  balanceRef.add(25);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход за продление подписки : +25.0 $");
 }
} else if (referral1_id != null){
 if (buyid == "11"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(20);
  balanceRef.add(20);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +20.0 $");
 } else if (buyid == "12"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(40);
  balanceRef.add(40);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +40.0 $");
 } else if (buyid == "21"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(40);
  balanceRef.add(40);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +40.0 $");
 } else if (buyid == "22"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(80);
  balanceRef.add(80);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +80.0 $");
 } else if (buyid == "23"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(120);
  balanceRef.add(120);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +120.0 $");
 } else if (buyid == "31"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(15);
  balanceRef.add(15);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +15.0 $");
 } else if (buyid == "32"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(30);
  balanceRef.add(30);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +30.0 $");
 } else if (buyid == "33"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(60);
  balanceRef.add(60);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход с первой линии : +60.0 $");
 } else if (buyid == "4"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(30);
  balanceRef.add(30);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход за улучшение пакета : +30.0 $");
 } else if (buyid == "10"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(10);
  balanceRef.add(10);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Вам начислен доход за продление подписки : +10.0 $");
 }
}

if (referral2_id != null){
 if (buyid == "11"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(10);
  balanceRef.add(10); 
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход со второй линии : +10.0 $");
 } else if (buyid == "12"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(20);
  balanceRef.add(20);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход со второй линии : +20.0 $");
 } else if (buyid == "21"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(20);
  balanceRef.add(20);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход со второй линии : +20.0 $");
 } else if (buyid == "22"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(40);
  balanceRef.add(40);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход со второй линии : +40.0 $");
 } else if (buyid == "23"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(60);
  balanceRef.add(60);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход со второй линии : +60.0 $");
 } else if (buyid == "31"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(7);
  balanceRef.add(7);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход со второй линии : +7.0 $");
 } else if (buyid == "32"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(15);
  balanceRef.add(15);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход со второй линии : +15.0 $");
 } else if (buyid == "33"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(30);
  balanceRef.add(30);
  balanceCount.add(1);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход со второй линии : +30.0 $");
 } else if (buyid == "4"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral2_id);
  balanceRefAll.add(30);
  balanceRef.add(30);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход за улучшение пакета : +30.0 $");
 } else if (buyid == "10"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral2_id);
  balanceRefAll.add(10);
  balanceRef.add(10);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Вам начислен доход за продление подписки : +10.0 $");
 }
}
}
*/

Bot.setProperty("ADMdeposit:", null);
Bot.setProperty("deposit:" + id, null);
