const config = require('./config.js');
let mongoose=require('mongoose')
let dbUrl=config.db.url

let connectDb = async () => {
    try {
        await mongoose.connect(dbUrl)
        console.log('database is connected')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb