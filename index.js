const express = require('express'); 
const cors = require('cors');
const database = require('./database/db')
const dotenv = require('dotenv');
const routes = require('./routes/product.routes');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

database.connectToMongoDB(MONGODB_URI,DB_NAME);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
})

app.use(cors());

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World');
    }
);


