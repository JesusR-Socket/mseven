/*CMD
  command: /view
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = Bot.getProperty("BTC");

var res = data.address;

Bot.setProperty("walletBTC",res);
var b = Bot.getProperty("walletBTC");
Bot.sendMessage(b);
