const dotenv = require('dotenv');
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');   

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.mongoDBUri;
const DBNAME = process.env.DBNAME;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
    }
);

async function connectToMongoDB() {
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
  
connectToMongoDB();
