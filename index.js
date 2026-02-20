const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./model/User.js');
const generateToken = require('./utils/genToken.js');
const userRutes = require('./routes/user.routes.js');
const app = express();

app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(' mongoose connected successfully'))
  .catch((err) => console.log('mongoose error ', err));

app.get('/', (req, res) => res.send('home page'));

app.use('/users', userRutes);

app.listen(5000);

//mvc design pattern
