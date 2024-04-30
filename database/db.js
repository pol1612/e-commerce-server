const mongoose = require('mongoose');



async function connectToMongoDB(MONGODB_URI, DB_NAME) {

    try {
        await mongoose.connect((MONGODB_URI),{dbName: DB_NAME});
        console.log('Express app connected to MongoDB');
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
    }
  }  
    
  exports.connectToMongoDB = connectToMongoDB;