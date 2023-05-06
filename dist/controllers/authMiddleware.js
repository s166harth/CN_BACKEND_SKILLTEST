const jwt = require('jsonwebtoken');
const Staff = require('../models/staff');
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
  try {
    // Get the token from the cookie
    const token = req.cookies.token;
    console.log(token);
    // Verify the token and get the user ID
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    // Get the user from the database
    const user = await Staff.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Attach the user object to the request for later use
    req.user = user;

    // Call the next middleware in the chain
    next();
  } catch (error) {
    console.log(error);
    // If there's an error, redirect the user to the login page
    res.redirect('/login');
  }
};

module.exports = authMiddleware;

