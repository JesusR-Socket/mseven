/*CMD
  command: BTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lang = Libs.Lang;
if (User.getProperty("buy") == 33){
 User.setProperty("withdrow", "BTC");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard(lang.t("usdt.keyboards.buttons"), lang.t("usdt.keyboards.text") + " `3J1A4e5E33BkhiRRb2miA8cCdQLj4yFxCu`");
}
