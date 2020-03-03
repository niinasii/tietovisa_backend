var express = require('express');
var router = express.Router();
var qs = require('./quizService');

router.route('/score')
  .get(function (req, res, next) {
    qs.haePisteet(rows => {
      res.json(rows);
    });
  });

router.route('/kysymykset')
  .get(function (req, res, next) {
    qs.haeKysymykset(rows => {
      res.json(rows);
    });
  });

module.exports = router;
