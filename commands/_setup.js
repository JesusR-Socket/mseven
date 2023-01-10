/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let client = new WestWallet.WestWalletAPI(
    "smChDSppPl08kUJ14adOalMbL7umMiRP-Ucf3jdZ",
    "HPyeTheoNAeS2WHq37KL4BXgZXUULSqts4HYeXmybvds4qSkNnHxIw"
);
Bot.sendMessage(client);
