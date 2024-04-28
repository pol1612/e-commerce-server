const express = require('express'); 
const cors = require('cors');
const db = require('./database/db')
const dotenv = require('dotenv');
dotenv.config();




const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.mongoDBUri;
const DBNAME = process.env.DBNAME;

db.connectToMongoDB(app,PORT,MONGO_URI,DBNAME);

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
    }
);


