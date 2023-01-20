/*CMD
  command: onMessageSending2
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
Bot.setProperty("MSGask:" + chat.chatid, msg_id, "integer");
