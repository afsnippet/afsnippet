// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDyA34Id_t6V-DCaqGQOJehzLAa6IA0hlU",
    authDomain: "af-snippet-dev.firebaseapp.com",
    databaseURL: "https://af-snippet-dev.firebaseio.com",
    projectId: "af-snippet-dev",
    storageBucket: "af-snippet-dev.appspot.com",
    messagingSenderId: "149976471361"
  },

  algolia: {
    appId: 'LOEZPQKLY9',
    apiKey: 'a1ac5d5f2bfdc88dfe14c585cd3c402a',
    indexName: 'snippets',
    urlSync: false
  },

  functionsURL: '',
  stripePublishable: ''
};
