const express = require('express');
const { registerUser, loginUSer } = require('../controller/user.controller');

const userRutes = express.Router();

userRutes.post('/register', registerUser);

userRutes.post('/login', loginUSer);

module.exports = userRutes;
