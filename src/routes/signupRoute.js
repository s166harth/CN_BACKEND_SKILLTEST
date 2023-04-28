const express = require("express");
const router = express.Router();
const Staff = require("../models/staff");

// POST route to create a new staff member
router.post("/", async (req, res, next) => {

  var password = req.body.password;
  var passwordConfirm = req.body.confirm_password;
  try {
    const staff = new Staff({
      email: req.body.email,
      password: req.body.password,
    });
    if (password !== passwordConfirm) {
      return res.status(400).send({ error: 'Passwords do not match' });
    }
  
    await staff.save();
    res.status(201).send("signup successful");
  } catch (err) {
    res.status(400).send({ error: err.message });
  }

  
});

// GET route to retrieve all staff members
router.get("/signup", async (req, res,next) => {
  try {
    const staff = await Staff.find({});
    res.send(staff);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }

});

module.exports = router;