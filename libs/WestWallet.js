let libPrefix = "westwallet";
let baseUrl="https://api.westwallet.io";

function setPrivateKey(key){
  Bot.setProperty(libPrefix + "privatekey", key, "string");
}

function setPublicKey(key){
  Bot.setProperty(libPrefix + "publickey", key, "string");
}

function setBBApiKey(apiKey){
  Bot.setProperty(libPrefix + "bb_api_key", apiKey, "string");
}

function generateAddress(currency){
    var methodUrl = "/address/generate";
    var data = {
      currency: currency,
      ipn_url: "",
      label: ""
    };
    return = makePostRequest(methodUrl, data);
}

function makePostRequest(methodUrl, data){
   HTTP.post( {
    url: "https://api.westwallet.io/address/generate",
    success: '/trans',
    body: data,
    headers: makeHeaders(data)
  })
    /*return axios({
      url: util.format('%s%s', this.baseUrl, methodUrl), 
      method: 'POST',
      data: data, 
      headers: this._makeHeaders(data)
    }).then((response) => {
      return response.data
    });*/
}

function makeHeaders(data){
    var timestamp = Math.floor(Date.now() / 1000);
    if (Object.keys(data).length === 0) {
      data = ""
    } else {
      data = JSON.stringify(data)
    }
    var apiKey = Bot.getProperty(libPrefix + "publickey");
    var secretKey = Bot.getProperty(libPrefix + "privatekey");
    var message = String(timestamp) + String(data);
    var sign = CryptoJS.HmacSHA256(message, secretKey);;
    var headers = {
      "X-API-KEY": apiKey,
      "X-ACCESS-SIGN": sign.toString(CryptoJS.enc.Hex),
      "X-ACCESS-TIMESTAMP": timestamp
    };
    return headers;
}

publish({
  setPrivateKey: setPrivateKey,
  setPublicKey: setPublicKey,
  setBBApiKey: setBBApiKey,
  generateAddress: generateAddress,
  makeHeaders: makeHeaders,
  makePostRequest: makePostRequest
})
