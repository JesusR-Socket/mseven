/*CMD
  command: LTC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (User.getProperty("buy") == 33){
 User.setProperty("withdrow", "LTC");
 Bot.runCommand("Вывод1");
} else {
Bot.sendKeyboard(lang.t("usdt.keyboards.buttons"), lang.t("usdt.keyboards.text") + " `6157czWYWwzdXiJZQqkzFFm2ysfko31wfy5L2BXLhgdE`");
}
