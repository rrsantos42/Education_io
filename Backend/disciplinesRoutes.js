const express = require('express');
const admin = require('firebase-admin');

// initialize the express router instance
const router = express.Router();

// Sample endpoint to get data from Firestore
router.get("/",async (req, res) => {
    try {
        const dbRef = admin.database().ref('disciplines');
        dbRef.once('value', (snapshot) => {
            const data = snapshot.val();
            res.json(data);
            console.log("Send data to", req.ip)
        });
    } catch (error) {
        res.status(500).send("Error fetching data from Firebase.");
    }
});

// Sample endpoint to add data to Firestore
router.post("/", async (req, res) => {
    try {
        const {discipline} = req.body;
        const dbRef = admin.database().ref('disciplines');
        dbRef.push(discipline);
        res.send("Data added to Firebase.");
    } catch (error) {
        res.status(500).send("Error adding data to Firebase.");
    }
});

// Sample endpoint to update data in Firestore
router.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {discipline} = req.body;
        const dbRef = admin.database().ref('disciplines');
        dbRef.child(id).update(discipline);
        res.send("Data updated in Firebase.");
    } catch (error) {
        res.status(500).send("Error updating data in Firebase.");
    }
});

// Sample endpoint to delete data from Firestore
router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const dbRef = admin.database().ref('disciplines');
        dbRef.child(id).remove();
        res.send("Data deleted from Firebase.");
    } catch (error) {
        res.status(500).send("Error deleting data from Firebase.");
    }
});

module.exports = router;