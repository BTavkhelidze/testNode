const express = require('express');
const {
  registerUser,
  loginUSer,
  getActiveUser,
} = require('../controller/user.controller');

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);

userRoutes.post('/login', loginUSer);
userRoutes.get('/me', getActiveUser);

module.exports = userRoutes;
