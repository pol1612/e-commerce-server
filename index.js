const express = require('express'); 
const cors = require('cors');
const database = require('./database/db')
const dotenv = require('dotenv');
const routes = require('./routes/product.routes');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.mongoDBUri;
const DBNAME = process.env.DBNAME;

database.connectToMongoDB(MONGO_URI,DBNAME);

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


