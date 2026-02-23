const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');

const connectDb = require('./config/connectDb.js');

const userRoutes = require('./routes/user.routes.js');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('home page'));

app.use('/users', userRoutes);

app.use((req, res, next) => {
  const error = new Error('not found', req.originalUrl);
  error.status = 404;

  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message || 'internal server error',
  });
});

const startServer = async () => {
  await connectDb();

  app.listen(5000, () =>
    console.log('server is running on http://localhost:5000'),
  );
};

startServer();
