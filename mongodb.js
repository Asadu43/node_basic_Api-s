const {MongoClient} = require('mongodb');

// Connection URL
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'demo';


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db.collection('auth');
  }
  
  module.exports = main;