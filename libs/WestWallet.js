const axios = require('axios');
const querystring = require("querystring");
const crypto = require('crypto');
const util = require('util');
const errors = require('./errors.js');

class WestWalletAPI {

  constructor(apiKey, secretKey, baseUrl="https://api.westwallet.io") {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.secretKey = secretKey;
  }

  _makePostRequest(methodUrl, data) {
    return axios({
      url: util.format('%s%s', this.baseUrl, methodUrl), 
      method: 'POST',
      data: data, 
      headers: this._makeHeaders(data)
    }).then((response) => {
      this._checkErrors(response);
      return response.data
    });
  }

  _makeGetRequest(methodUrl, params) {
    return axios({
      url: util.format('%s%s', this.baseUrl, methodUrl), 
      method: 'GET',
      params: params,
      headers: this._makeHeaders(params)
    }).then((response) => {
      this._checkErrors(response);
      return response.data
    })
  }

  _makeHeaders(data) {
    var timestamp = Math.floor(Date.now() / 1000);
    if (Object.keys(data).length === 0) {
      data = ""
    } else {
      data = JSON.stringify(data)
    }
    var message = util.format("%s%s", timestamp, data);
    var sign = crypto.createHmac('sha256', this.secretKey).update(message).digest('hex');
    var headers = {
      "X-API-KEY": this.apiKey,
      "X-ACCESS-SIGN": sign,
      "X-ACCESS-TIMESTAMP": timestamp
    };
    return headers;
  }

  _checkErrors(response) {
    if (response.status == 401) {
      throw new errors.WrongCredentialsException;
    }
    if (response.status == 403) {
      throw new errors.NotAllowedException;
    }
    const responseJson = response.data;
    if (responseJson.error != "ok") {
      const exception = new errors.errorsMap[responseJson.error];
      if (exception) {
        throw exception;
      }
      throw new errors.WestWalletAPIError(responseJson.error);
    }
  }

  walletBalance(currency) {
    const methodUrl = "/wallet/balance";
    return this._makeGetRequest(methodUrl, {
      currency: currency
    })
  }

  walletBalances() {
    const methodUrl = "/wallet/balances";
    return this._makeGetRequest(methodUrl, {});
  }

  createWithdrawal(currency, amount, address, destTag = "", description = "") {
    const methodUrl = "/wallet/create_withdrawal";
    const data = {
      currency: currency,
      amount: amount,
      address: address,
      dest_tag: destTag,
      description: description
    };
    return this._makePostRequest(methodUrl, data);
  }

  transactionInfo(id) {
    const methodUrl = "/wallet/transaction";
    const data = {
      id: id
    };
    return this._makePostRequest(methodUrl, data);
  }

  generateAddress(currency, ipnUrl = "", label = "") {
    const methodUrl = "/address/generate";
    const data = {
      currency: currency,
      ipn_url: ipnUrl,
      label: label
    };
    return this._makePostRequest(methodUrl, data);
  }
}

class Balance {
    constructor(balance, currency) {
        this.balance = balance;
        this.currency = currency;
    }
}

class WestWalletAPIError extends Error {
       
}

class InsufficientFundsError extends WestWalletAPIError {

}

class CurrencyNotFoundError extends WestWalletAPIError {

}

class NotAllowedError extends WestWalletAPIError {
    // Raises when request type or headers don't match API key settings
}


class WrongCredentialsError extends WestWalletAPIError {
    // Raises when you've provided wrong API key
}


class TransactionNotFoundError extends WestWalletAPIError {

}


class AccountBlockedError extends WestWalletAPIError {
    // Raises if your account unable to create withdrawal
}


class BadAddressError extends WestWalletAPIError {
    // Raises when WestWallet server regex check of recipient's address fails
}


class BadDestTagError extends WestWalletAPIError {
    // Raises when WestWallet server regex check of recipient's destination tag fails
}


class MinWithdrawError extends WestWalletAPIError {

}


class MaxWithdrawError extends WestWalletAPIError {

}

const errorsMap = {
    "account_blocked": AccountBlockedError,
    "bad_address": BadAddressError,
    "bad_dest_tag": BadDestTagError,
    "insufficient_funds": InsufficientFundsError,
    "max_withdraw_error": MaxWithdrawError,
    "min_withdraw_error": MinWithdrawError,
    "currency_not_found": CurrencyNotFoundError,
    "not_found": TransactionNotFoundError
}

module.exports = {
    WestWalletAPIError: WestWalletAPIError,
    InsufficientFundsError: InsufficientFundsError,
    CurrencyNotFoundError: CurrencyNotFoundError,
    NotAllowedError: NotAllowedError,
    WrongCredentialsError: WrongCredentialsError,
    TransactionNotFoundError: TransactionNotFoundError,
    AccountBlockedError: AccountBlockedError,
    BadAddressError: BadAddressError,
    BadDestTagError: BadDestTagError,
    MinWithdrawError: MinWithdrawError,
    MaxWithdrawError: MaxWithdrawError,
    errorsMap: errorsMap
};


module.exports = exports = WestWalletAPI;
