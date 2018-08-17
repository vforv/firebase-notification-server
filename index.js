var admin = require('firebase-admin');

var serviceAccount = require('./testfirebase-6b934-firebase-adminsdk-nvotk-760a02ae9a.json');

const adminCli = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// This registration token comes from the client FCM SDKs.
var registrationToken = 'dIosgWN8fNU:APA91bGS7Zkb6j-Ly0lvhUZJWviBD-2wu67QQjrMeBVonsxxdl0tzNqjkPA0Fo4AYHdGokwipVjCu81CbluzLGVi-SXi_oEbk6_CKUFhOlGz1VE28VjaIYIpiwcLydGRinEjxdSI3hoI3Ej7PT9SKvNQ3eqCsVqGaQ';

// See documentation on defining a message payload.
var message = {
    notification: {
        title: '$GOOG up 1.43% on the day',
        body: '$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.'
    },
    android: {
        ttl: 3600 * 1000,
        notification: {
            icon: 'stock_ticker_update',
            color: '#f45342',
            sound: "notify"
        }
    },
    data: {
        message: "aaaa"
    },
    token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
adminCli.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });