/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/* if (user.telegramid == 1784296703){
User.setProperty("status" , "member", "string");
Bot.setProperty("" +user.telegramid+ "" , "partner")
Bot.runCommand("main_menu")
User.addToGroup("user")
} else */ 
var mp = Bot.getProperty("" +user.telegramid+ "");
if (mp == "partner1"){
Bot.setProperty("" +user.telegramid+"" , "partner1");
}
else if (mp == "partner2"){
Bot.setProperty("" +user.telegramid+"" , "partner2");
}
else if (mp == "partner3"){
Bot.setProperty("" +user.telegramid+"" , "partner3");
}
else if (mp == "partner4"){
Bot.setProperty("" +user.telegramid+"" , "partner4");
}
else if (mp == "partnerChat"){
Bot.setProperty("" +user.telegramid+"" , "partner4");
}
else if (mp == "partner1ban"){
Bot.setProperty("" +user.telegramid+"" , "partner1ban");
}
else if (mp == "partner2ban"){
Bot.setProperty("" +user.telegramid+"" , "partner2ban");
}
else if (mp == "partner3ban"){
Bot.setProperty("" +user.telegramid+"" , "partner3ban");
}
else if (mp == "partner4ban"){
Bot.setProperty("" +user.telegramid+"" , "partner4ban");
}
else if (mp == "partnerChatban"){
Bot.setProperty("" +user.telegramid+"" , "partner4ban");
}
else if (mp == "ban"){
Bot.setProperty("" +user.telegramid+"" , "ban");
} 
else {
Bot.setProperty("" +user.telegramid+"" , "user");
}
User.addToGroup("user");
Bot.runCommand("main_menu")
