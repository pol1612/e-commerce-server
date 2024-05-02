const express = require('express'); 
const cors = require('cors');
const database = require('./database/db')
const dotenv = require('dotenv');
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const authenticationRoutes = require('./routes/authentication.routes');
const isRequestAuthenticated = require('./middlewares/isRequestAuthenticated');
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
//endpoints
app.use("/api/v1",authenticationRoutes)
app.use(isRequestAuthenticated);
app.use("/api/v1",productRoutes);
app.use("/api/v1",userRoutes);




