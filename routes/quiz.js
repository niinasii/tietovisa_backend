var express = require('express');
var router = express.Router();
var qs = require('./quizService');

//get pisteet/
router.route('/pisteet') //hakee highscoren
  .get(function (req, res, next) {
    qs.haePisteet(rows => {
      res.json(rows);
    });
  })

/*
// post pisteet/ kayttaja id ja pistemäärä + päivämäärä
  .post(function (req, res, next) {
    qs.lisaaPisteet(req.body, (rowCount) => {
      if (rowCount > 0)
        res.status(201).json({ message: 'Lisättiin' });
      else {
        res.status(400).json({ message: 'Lisääminen ei onnistunut' });
      }
    });
  });

// get pisteet/:kayttaja käyttäjän perusteella pisteet

// get kysymys/:kysymysid hakee yhden kysymys ja kaikki vastausehdotukset
router.route('/kysymykset')
  .get(function (req, res, next) {
    qs.haeKysymykset(rows => {
      res.json(rows);
    });
  });
*/

module.exports = router;
