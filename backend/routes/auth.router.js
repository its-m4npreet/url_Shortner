const express = require('express');
const { handleSignup } = require('../controllers/handleSignup');
const { handleLogin } = require('../controllers/handleLogin');

const authRouter = express.Router();

authRouter.post('/signup', handleSignup);
authRouter.post('/login', handleLogin);

module.exports = { authRouter };
