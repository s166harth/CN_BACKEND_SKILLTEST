const express = require('express');
const router = express.Router();
const Staff = require('../models/staff');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
router.post('/', async (req, res) => {
  const {
    email,
    password
  } = req.body;

  // Check if the user exists
  const user = await Staff.findOne({
    email
  });
  if (!user) {
    return res.status(400).send({
      message: 'no such user'
    });
  }

  // Check if the password is correct
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send({
      message: 'invalid password'
    });
  }

  // Generate a JWT token
  const token = jwt.sign({
    userId: user._id
  }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
  res.cookie('token', token);

  // res.header('Authorization', `Bearer ${token}`);
  res.redirect('/details');
  //   res.status(200).send({ message: 'Logged in successfully', token });
});

module.exports = router;