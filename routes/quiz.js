var express = require('express');
var router = express.Router();
var qs = require('./quizService');

router.route('/pisteet')
  .get(function (req, res, next) {
    console.log('pisteet')
    qs.haePisteet(rows => {
      res.json(rows)
    })
  })

  .post(function (req, res, next) {
    qs.lisaaPisteet(req.body, (rowCount) => {
      if (rowCount > 0)
        res.status(201).json({ message: 'Inserted' });
      else {
        res.status(400).json({ message: 'Failed to insert' });
      }
    });
  });

router.route('/kysymykset')
  .get(function (req, res, next) {
    qs.haeKysymykset(rows => {
      res.json(rows);
    });
  });

router.route('/aihe')
  .get(function (req, res, next) {
    qs.haeAihe(rows => {
      res.json(rows);
    });
  });

router.route('/vastaukset')
  .get(function (req, res, next) {
    qs.haeKysymykset(rows => {
      res.json(rows);
    });
  });

router.route('/kayttajat')
  .get(function (req, res, next) {
    qs.haeKayttajat(rows => {
      res.json(rows);
    });
  });

module.exports = router;
