/*CMD
  command: /onLoading
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

const publicKey = "smChDSppPl08kUJ14adOalMbL7umMiRP-Ucf3jdZ";
const privateKey = "HPyeTheoNAeS2WHq37KL4BXgZXUULSqts4HYeXmybvds4qSkNnHxIw";

let client = new westwallet.WestWalletAPI(
    publicKey, 
    privateKey
);

client.generateAddress("USDTTRC", "", "")
.then((data) => {
    console.log(data);
}).catch((error) => {
    if (error instanceof westwalletErrors.CurrencyNotFoundError) {
        console.log("No such currency");
    }
});
