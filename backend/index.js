const express = require('express');
const connectToMongo = require('./db');
const mongoose = require('mongoose');
const cors = require('cors');

connectToMongo();
let items;

const app = express();
app.use(cors());
const port = 5555;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/get_items', (req, res) => {
    items.find({}, function(err, data) {res.send(data);});  
})

app.listen(port, ()=>{
    console.log(`Backend server up and running on port ${port}`);
    items = mongoose.model('Item', new mongoose.Schema({name: String, cost: Number}), 'Items');
})