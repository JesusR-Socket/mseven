/*CMD
  command: /up
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admins
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
if (stat == "partner1ban"){
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно улучшили пакет!")
 Bot.setProperty(""+id+"", "partner2");
 var days = Bot.getProperty("Subscribe:" + id + "");
 Bot.setProperty("Subscribe:" + id + "", days + 32);
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
} else if (stat != "ban" & stat == "partner1"){
 Bot.sendInlineKeyboardToChatWithId(id, [{title: "✅ Начать ✅", command: "Начать" }], "💵 Вы успешно улучшили пакет!")
 Bot.setProperty(""+id+"", "partner2");
 var days = Bot.getProperty("Subscribe:" + id + "");
 Bot.setProperty("Subscribe:" + id + "", days + 32);
}

if (referral1_id != "undefined"){
 if (referral1_stat == "partner1"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(30);
  balanceRef.add(30);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Улучшение пакета партнёра : +30.0 $");
 } else if (referral1_stat == "partner2"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(40);
  balanceRef.add(40);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Улучшение пакета партнёра : +40.0 $");
 } else if (referral1_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral1_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance", referral1_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count", referral1_id);
  balanceRefAll.add(50);
  balanceRef.add(50);
  Bot.sendMessageToChatWithId(referral1_id, "🏧 Улучшение пакета партнёра : +50.0 $");
 }
}

if (referral2_id != "undefined"){
 if (referral2_stat == "partner2"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(15);
  balanceRef.add(15); 
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Улучшение пакета партнёра : +15.0 $");
 } else if (referral2_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral2_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance2", referral2_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count2", referral2_id);
  balanceRefAll.add(20);
  balanceRef.add(20);
  Bot.sendMessageToChatWithId(referral2_id, "🏧 Улучшение пакета партнёра : +20.0 $");
 }
}

if (referral3_id != "undefined"){
 if (referral3_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral3_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance3", referral3_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count3", referral3_id);
  balanceRefAll.add(10);
  balanceRef.add(10);
  Bot.sendMessageToChatWithId(referral3_id, "🏧 Улучшение пакета партнёра : +10.0 $");
 }
}

if (referral4_id != "undefined"){
 if (referral4_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral4_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance4", referral4_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count4", referral4_id);
  balanceRefAll.add(5);
  balanceRef.add(5);
  Bot.sendMessageToChatWithId(referral4_id, "🏧 Улучшение пакета партнёра : +5.0 $");
 }
}

if (referral5_id != "undefined"){
 if (referral5_stat == "partner3"){
  var balanceRefAll = Libs.ResourcesLib.anotherUserRes("balanceAll", referral5_id);
  var balanceRef = Libs.ResourcesLib.anotherUserRes("balance5", referral5_id);
  var balanceCount = Libs.ResourcesLib.anotherUserRes("count5", referral5_id);
  balanceRefAll.add(5);
  balanceRef.add(5);
  Bot.sendMessageToChatWithId(referral5_id, "🏧 Улучшение пакета партнёра : +5.0 $");
 }
}
