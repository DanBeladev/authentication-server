var express = require('express');
var router = express.Router();
const User = require('../models/User');

// handlers
const {
  checkName,
  checkEmail,
  checkPassword,
  doesPasswordExists,
  isValidated,
} = require('../controllers/checkRequest');
const {
  isRegisteredUser,
  registeredUser,
  logUser,
  sendUserById
} = require('../controllers/userHandler');
const { isValidToken } = require('../controllers/authHandler');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



/**
 * @routh   POST apiV1/users/register
 * @desc    Register new user
 * @access  Public
 * */
router.post(
  '/register',
  checkEmail,
  checkPassword,
  isValidated,
  isRegisteredUser,
  registeredUser
);

/**
 * @routh   POST apiV1/users/login
 * @desc    Log an existing user
 * @access  Public
 * */
router.get(
  '/login',
  checkEmail,
  checkPassword,
  isValidated,
  isRegisteredUser,
  logUser
);

router.get(
  '/myname',
  isValidToken,
  sendUserById
);

module.exports = router;
