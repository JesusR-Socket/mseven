/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
return;
}
else {
function doTouchOwnLink() {
Bot.sendMessage("Нельзя переходить по своей ссылке");
}
function doAtractedByUser(refUser) {
refUser = Libs.ReferralLib.getAttractedBy().telegramid;
Bot.setProperty(user.telegramid+":inviteby",refUser,"string");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAtractedByUser: doAtractedByUser,
}

Libs.ReferralLib.currentUser.track(trackOptions);
Bot.sendInlineKeyboard([ {title: "🇺🇸 English", command: "en" }, {title: "🇷🇺 Русский", command: "ru"} ], "Выберите язык/Choose language:")
}
