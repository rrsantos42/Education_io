const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const disciplinesRoutes = require('./disciplinesRoutes');
const PORT = 3000;
require("dotenv").config();

// Initialize the Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,
        clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
        privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n')
    }),
    databaseURL: process.env.DATABASE_URL
});
admin.firestore();

// initialize the express server
const server = express();

// middleware
server.use(cors());
server.use(express.json());
server.use('/disciplines', disciplinesRoutes);

// Check connection to Firebase Realtime Database
const connectedRef = admin.database().ref('.info/connected');
connectedRef.on('value', (snap) => {
    if (snap.val() === true) {
        console.log('Connected to Firebase Realtime Database.');
    } else {
        console.log('Disconnected from Firebase Realtime Database.');
    }
});

server.listen(PORT, () => {
    console.log("Server is Up");
});