const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./db/connection");
const path = require('path');
const hbs = require('hbs');
const signupRoute = require("./routes/signupRoute");
const studentRoute = require("./routes/studentRoute");
const bodyParser = require('body-parser');
const loginRoute = require("./routes/loginRoute");
const detailsRoute = require("./routes/detailsRoute");
const cookieParser = require('cookie-parser');
const mime = require('mime');
const getJobs = require('./controllers/jobMiddleware');
const baseUrl = process.env.baseUrl || 'http://localhost:3000'; // Set your base URL here

app.use(baseUrl, (req, res, next) => {
  req.baseUrl = baseUrl;
  next();
});

// Serve static files with correct MIME types
app.use(express.static(path.join(__dirname, './public'), {
  setHeaders: (res, filePath) => {
    res.setHeader('Content-Type', mime.getType(filePath));
  }
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(`/details`, detailsRoute);
app.use(`/student`, studentRoute);
app.use(`/signup`, signupRoute);
app.use(`/login`, loginRoute);
app.set('views', path.join(".", "public"));
app.set('view engine', 'hbs');
hbs.registerPartials('./partials');
app.get(`/student`, function (req, res) {
  res.render('home');
});
app.get(`/signup`, function (req, res) {
  res.render('signupform');
});
app.get(`/login`, function (req, res) {
  res.render('loginform');
});
app.get(`/jobs`, getJobs, function (req, res) {
  res.render('jobs');
});
app.listen(port, function (error) {
  if (error) throw error;
  console.log("Server created Successfully");
});