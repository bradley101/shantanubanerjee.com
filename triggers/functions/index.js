const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require(__dirname + '/shantanubanerjeedotcom-firebase-adminsdk-ghboc-956bd759c8.json');
const cors = require('cors') ({origin: true});
let _ = class {};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'shantanubanerjeedotcom.firebaseio.com'
});

const db = admin.firestore();

exports.dbTrigger = functions.firestore.document('static/type1').onWrite((change, context) => {
    const d = change.after.data();
    _.response.about = d.about;
    _.response.skills = d.skills;
    console.log(change.after.data());
    return true;
})

exports.getInnerHtml = functions.https.onRequest((req, res) => {
    db.collection('static').doc('type1').get().then(doc => {
        if (doc.exists) {
            res.status(200).set('Access-Control-Allow-Origin', 'https://shantanubanerjee.com').contentType('application/json').send(doc.data());
        }
        return true;
    }).catch(err => {
        console.log(err);
    })
})
 
