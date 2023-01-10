/*CMD
  command: Вывод11
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
Bot.runCommand("Вывод11");
}
else {
let wallet = User.getProperty("PaytmWallet");
User.setProperty("PaytmWallet" , data.message ,"string");
Bot.sendMessage("✅ Кошелёк выбран: "+data.message+"");
Bot.runCommand("Вывод2");
}
