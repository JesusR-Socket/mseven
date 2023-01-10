/*CMD
  command: /video
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admins
  answer: send video
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty({name: "video3", value: request.video.file_id})
