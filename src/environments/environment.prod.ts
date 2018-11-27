export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBlmiK5g7sojWBJPVtd6_k-AvKOdCCKn7g',
    authDomain: 'ovtracker-188602.firebaseapp.com',
    databaseURL: 'https://ovtracker-188602.firebaseio.com',
    projectId: 'ovtracker-188602',
    storageBucket: 'ovtracker-188602.appspot.com',
    messagingSenderId: '937409070346',
  },

  algolia: {
    appId: 'SQ0J22EW8W',
    apiKey: '64d8fc363ce22ee97a69acd1418accb0',
    indexName: 'snippets',
    urlSync: false
  },

  functionsURL: 'https://us-central1-stripe-elements.cloudfunctions.net',
  stripePublishable: 'pk_live_Ehq1YemFHXVc8QSFNpUOBwi0'
};
