const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/student');

// Define the middleware function to handle the POST request

router.post('/', async (req, res) => {
  try {
    // Create a new student object from the request body
    const student = new Student(req.body);

    // Save the student object to the database
    await student.save();

    // Respond with a success message
    res.status(201).send('Student data saved successfully');
  } catch (error) {
    // If there's an error, respond with a 500 status code and error message
    console.error(error);
    res.status(500).send('Error saving student data to the database');
  }
});
module.exports = router;