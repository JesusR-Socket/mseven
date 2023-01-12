/*CMD
  command: /trans
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage(content);

var res = content.address;
Bot.sendMessage(res)
Bot.setProperty("wallset",res,"string")
