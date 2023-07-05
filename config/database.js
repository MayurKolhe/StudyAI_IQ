const mongoose = require('mongoose');
const colors = require('colors');

const databaseConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to Mongoose Database ${mongoose.connection.host}`.bgGreen.white);
    } catch(error) {
        console.log(`MongoDB Error ${error}` .bgRed.white)
    }
}

module.exports = databaseConnect;