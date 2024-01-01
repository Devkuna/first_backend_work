const {MongoClient} = require('mongodb');
require('dotenv').config();

const dbConfig = {
    dburi : process.env.DB_URI,
    dbCollection : process.env.DB_COLLECTION
}

let dbConnection;
const uri = dbConfig.dburi
module.exports = {
    connectToDb : (cb) =>{
       MongoClient.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
       .then((client) =>{
        dbConnection = client.db(dbConfig.dbCollection)
        return cb()
       })
       .catch(err  => {
        console.log("There was an error",err)
        return cb(err)
       })
    },
    getDb : () => dbConnection
}