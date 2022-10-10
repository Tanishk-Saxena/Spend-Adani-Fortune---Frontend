const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/spend_adani_money_db';

const connectToMongo = async () => {
    mongoose.connect(URI, () => {
        console.log("Connected to MongoDB successfully.");
    })
}

module.exports = connectToMongo;