const mongoose = require('mongoose');

// const uri = 'mongodb://127.0.0.1:27017/cubicle' //the name of the DB comes after the slash

const config = require('./index');

async function initDatabase() {
    mongoose.set('strictQuery', false);

await mongoose.connect(config.DB_URI);

console.log('DB connected');
}

module.exports = initDatabase;