const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const algoliasearch = require('algoliasearch');
const algolia = algoliasearch(functions.config().algolia.appid, functions.config().algolia.adminkey);


exports.updateIndex = functions.database.ref('/snippets/{snippetId}').onWrite(event => {

  const index = algolia.initIndex('snipets');

  const snippetId = event.params.snippetId
  const data = event.data.val()

  if (!data) {
    return index.deleteObject(snippetId, (err) => {
      if (err) throw err
      console.log('Snippet Removed from Algolia Index', snippetId)
    })

  }

  data['objectID'] = snippetId

  return index.saveObject(data, (err, content) => {
    if (err) throw err
    console.log('Snippet Updated in Algolia Index', data.objectID)
  })

});
