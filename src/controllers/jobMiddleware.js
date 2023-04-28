const request = require('request');

function getJobs(req, res, next) {
  request('https://remotive.com/api/remote-jobs?limit=10', function (error, response, body) {
    if (error) {
      next(error);
    } else {
      const jobs = JSON.parse(body);
      res.locals.jobs = jobs.jobs;
      next();
    }
  });
}

module.exports = getJobs;
