require('dotenv').config()
const express = require('express');
const app = express();
const db = require('./config/database')
const userRoutes = require('./routes/user.routes');

app.use(express.json());

app.use('/user', userRoutes);

const port = 5000;
db.connectDb();
app.listen(port,() => {console.log(`Blog app listening on port ${port}`)})
