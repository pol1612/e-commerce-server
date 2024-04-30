const mongoose = require('mongoose');



async function connectToMongoDB(MONGO_URI,DBNAME) {

    try {
        await mongoose.connect((MONGO_URI),{DBNAME});
        console.log('Express app connected to MongoDB');
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
    }
  }  
    
  exports.connectToMongoDB = connectToMongoDB;