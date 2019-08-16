const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((Request,Response) => {
    Response.send("Hello Pramuditha!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('Notification Added', doc));
}) 
exports.messageCreated = functions.firestore
    .document('messages/{messageId}')
    .onCreate(doc => {

        const message = doc.data();
        const notification = {
            content: "New notification Added",
            user: `${message.author}`,
            title: `${message.title}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
    })