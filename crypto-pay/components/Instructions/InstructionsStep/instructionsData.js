export const instructionsData = [
  {
    step: 1,
    title: 'Authorizing your app',
    src: '/images/instruction/stepOne.svg',
    list: 'ol',
    listPoints: [
      {
        text: 'Open',
        linkText: '@CryptoBot',
        link: 'https://t.me/CryptoBot',
      },
      {
        text: 'Go to',
        linkText: 'Crypto Pay',
        link: 'https://t.me/CryptoBot',
      },
      {
        text: 'Tap',
        linkText: 'Api Token',
        link: 'https://t.me/CryptoBot',
      },
      {
        text: 'Get',
        linkText: 'Create App',
        link: 'https://t.me/CryptoBot',
      },
    ],
    imageOrder: 2,
    infoOrder: 1,
    orderLink: 2,
    orderText: 1,
  },
  {
    step: 2,
    title: 'Crypto Pay API Request',
    description: 'Requests are only served over HTTPS To pass parameters use:',
    src: '/images/instruction/stepTwo.svg',
    list: 'ul',
    listPoints: [
      {
        linkText: 'URL query string',
        link: 'https://t.me/CryptoBot',
      },
      {
        linkText: 'application/json ',
        link: 'https://t.me/CryptoBot',
      },
      {
        linkText: 'application/x-www-form-urlencoded',
        link: 'https://t.me/CryptoBot',
      },
      {
        linkText: 'multipart/form-data',
        link: 'https://t.me/CryptoBot',
      },
    ],
    imageOrder: 1,
    infoOrder: 2,
  },
  {
    step: 3,
    title: 'Getting updates',
    description: 'There are two ways of receiving updates for your app:',
    src: '/images/instruction/stepThree.svg',
    list: 'ul',
    listPoints: [
      {
        text: 'method to get a list of created invoices.',
        linkText: 'getInvoices',
        link: 'https://t.me/CryptoBot',
      },
      {
        text: 'to receive updates in realtime.',
        linkText: 'Webhooks',
        link: 'https://t.me/CryptoBot',
      },
    ],
    imageOrder: 2,
    infoOrder: 1,
    orderLink: 1,
    orderText: 2,
  },
];
