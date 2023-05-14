const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const authMiddleware = require('../controllers/authMiddleware');

// server-side code
router.get('/download', async (req, res) => {
  try {
    const students = await Student.find({});
    let csvData = 'Name,Batch,College,Status,DSA Final Score,React Final Score,Company,Date,Result\n';
    students.forEach(student => {
      csvData += `${student.name},${student.batch},${student.college},${student.status},${student.dsaFinalScore},${student.reactFinalScore},${student.company},${student.date},${student.result}\n`;
    });
    res.setHeader('Content-disposition', 'attachment; filename=students.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csvData);
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
});
router.get('/', authMiddleware, async (req, res) => {
  try {
    const students = await Student.find({});
    res.render('details', {
      students
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
});
module.exports = router;