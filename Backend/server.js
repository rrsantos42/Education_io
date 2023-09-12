const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const disciplinesRoutes = require('./disciplinesRoutes');
const PORT = 3000;

// Initialize the Firebase Admin SDK
const serviceAccount = require("./ApiKeys/test-api-dd92a-firebase-adminsdk-jbpzb-a00670d6d0.json");

// Initialize the Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-api-dd92a-default-rtdb.firebaseio.com"
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