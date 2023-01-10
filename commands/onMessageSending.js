/*CMD
  command: onMessageSending
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = options.result.message_id;
//Bot.editMessage("new text", msg_id);
Bot.setProperty( "MSG:" + chat.chatid, msg_id, "integer");
