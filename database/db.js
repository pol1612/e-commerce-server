const mongoose = require('mongoose');



async function connectToMongoDB(app,PORT,MONGO_URI,DBNAME) {

    try {
        await mongoose.connect((MONGO_URI),{DBNAME});
        console.log('Express app connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Express app listening on port ${PORT}`)
        })            
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
    }
  }  
    
  exports.connectToMongoDB = connectToMongoDB;