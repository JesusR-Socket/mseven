/*CMD
  command: /get
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.WestWallet.setPublicKey("smChDSppPl08kUJ14adOalMbL7umMiRP-Ucf3jdZ");
Libs.WestWallet.setPrivateKey("HPyeTheoNAeS2WHq37KL4BXgZXUULSqts4HYeXmybvds4qSkNnHxIw");
Bot.sendMessage(Libs.WestWallet.generateAddress("BTC"));
