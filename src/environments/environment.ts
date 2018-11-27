// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAlY0J0ejovJgEbb3oXPp1Rwkavb_PB-gk',
    authDomain: 'code-snippet-a5d85.firebaseapp.com',
    databaseURL: 'https://code-snippet-a5d85.firebaseio.com',
    projectId: 'code-snippet-a5d85',
    storageBucket: 'code-snippet-a5d85.appspot.com',
    messagingSenderId: '742402717313'
  },

  algolia: {
    appId: 'LOEZPQKLY9',
    apiKey: 'a1ac5d5f2bfdc88dfe14c585cd3c402a',
    indexName: 'snippets',
    urlSync: false
  },

  functionsURL: 'https://us-central1-stripe-elements.cloudfunctions.net',
  stripePublishable: 'pk_test_jpC2OhzDEErN6uVk83a0nQ4I'
};
