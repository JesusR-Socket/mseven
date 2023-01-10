/*CMD
  command: setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: admins
  answer: 
  keyboard: 
  aliases: 
CMD*/

var enLang = {
  start: {
    greeting: "Greeting text",
    doTouchOwnLink: "*You can't invite yourself ❌*"
  },
  payment: {
    keyboards: {
      buttons: "💰 Beginner 💰,💎 Premium 💎,\n❌ Back",
      text: "Avaible 2 package"
    },
    start: "Beginer opis",
    prem: "Premium opis"
  },
  beginner1: {
    keyboards: {
      buttons: "💎 Crypto,✴️ QIWI,🟥 Yandex\n❌ Back",
      text: "⭕️ Choose payment method:"
    }
  },
  beginner2: {
    keyboards: {
      buttons: "💎 Crypto,✴️ QIWI,🟥 Yandex\n❌ Back",
      text: "⭕️ Choose payment method:"
    }
  },
  crypto: {
    keyboards: {
      buttons: "USDT TRC20, USDT BEP20,\nBTC, Solana, LTC,\n❌ Back",
      text: "⭕️ Choose your crypto:"
    }
  },
  usdt: {
    keyboards: {
      buttons: "✅ Done,\n❌ Change payment method",
      text: "💰 Wallet to pay:"
    }
  },
  ipay: {
    keyboards: {
      buttons: "❌ Change payment method",
      text: "📌 Enter your name:",
      text2: "📌 Send screenshot of payment:"
    }
  },
  serv: {
    opis: "Text"
  },
  main_menu: {
    keyboards: {
      startMenu: {
        buttons: "💸 Choose subscribe,🧑🏻‍💻 Our services,🛠 Support",
        text: "🌀Sudy, invite and earn🌀"
      }
    }
  }
}

var ruLang = {
  start: {
    greeting: "Здесь приветствие",
    doTouchOwnLink: "*Вы не можете пригласить самого себя ❌*"
  },
  payment: {
    keyboards: {
      buttons: "💰 Новичок 💰,💎 Премиум 💎,\n❌ Вернуться",
      text: "Доступно 2 пакета:"
    },
    start: "Описание Новичок",
    prem: "Описание Премиум"
  },
  beginner1: {
    keyboards: {
      buttons: "1 месяц,3 месяца,\n❌ Вернуться",
      text: "⭕️ Выберите срок подписки:"
    },
    beginner2: {
      keyboards: {
        buttons: "💎 Крипта,✴️ QIWI,🟥 Яндекс\n❌ Вернуться",
        text: "⭕️ Выберите способ оплаты:"
      }
    },
    crypto: {
      keyboards: {
        buttons: "USDT TRC20, USDT BEP20,\nBTC, Solana, LTC,\n❌ Вернуться",
        text: "⭕️ Выберите в чём платить:"
      }
    },
    usdt: {
      keyboards: {
        buttons: "✅ Я оплатил,\n❌ Изменить способ оплаты",
        text: "💰 Кошелёк для оплаты:"
      }
    },
    ipay: {
      keyboards: {
        buttons: "❌ Изменить способ оплаты",
        text: "📌 Пожалуйста, напишите свое имя и фамилию:",
        text2: "📌 Пожалуйста, пришлите скриншот с подтверждением оплаты:"
      }
    },
    serv: {
      opis: "Текст"
    },
    main_menu: {
      keyboards: {
        startMenu: {
          buttons: "💸 Выбор подписки,🧑🏻‍💻 Наши услуги,🛠 Тех. Поддержка",
          text: "🌀Обучайся, приглашай и зарабатывай🌀"
        }
      }
    }
  }
}
Libs.Lang.setup("ru", ruLang)
Libs.Lang.setup("en", enLang)

/*       firstMenu: {
        buttons: [
          [
            { title: "🔗 Моя ссылка", command: "🔗 Моя ссылка" },
            { title: "💳 Баланс", command: "💳 Баланс" }
          ],
          [
            { title: "👫 Партнёры", command: "👫 Партнёры" },
            { title: "🛠 Тех. Поддержка", command: "🛠 Тех. Поддержка" }
          ],
          [{ title: "⏳ Продлить подписку", command: "⏳ Продлить подписку" }]
        ],
        text: "🌀Обучайся, приглашай и зарабатывай🌀"
      } 

  payment: {
    keyboardsPayment: {
      buttons: 
        [
          { title: "💰 Beginer 💰", command: "💰 Новичок 💰" },
          { title: "💎 Premium 💎", command: "💎 Премиум 💎" },
          { title: "❌ Back", command: "❌ Вернуться" }
      ],
      text: "Avaible 2 package"
    },
    startPack: "Beginer opis",
    prem: "Premium opis"
  }, */
