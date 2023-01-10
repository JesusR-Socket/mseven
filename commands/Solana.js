/*CMD
  command: Solana
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
 User.setProperty("withdrow", "Solana");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard(lang.t("usdt.keyboards.buttons"), lang.t("usdt.keyboards.text") + " `6157czWYWwzdXiJZQqkzFFm2ysfko31wfy5L2BXLhgdE`");
}
