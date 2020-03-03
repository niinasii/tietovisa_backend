var express = require('express');
var router = express.Router();
var qs = require('./quizService');

//get pisteet/
//Niina tehnyt pohjan, Laura jatkaa
router.route('/pisteet')
  .get(function (req, res, next) {
    qs.haePisteet(rows => {
      res.json(rows);
    });
  })

// get pisteet/:kayttaja käyttäjän perusteella pisteet
//Laura

// post pisteet/ kayttaja id ja pistemäärä + päivämäärä
//Niina tekee postin
  .post(function (req, res, next) {
    qs.lisaaPisteet(req.body, (rowCount) => {
      if (rowCount > 0)
        res.status(201).json({ message: 'Lisättiin' });
      else {
        res.status(400).json({ message: 'Lisääminen ei onnistunut' });
      }
    });
  });

// get kysymys/:kysymysid hakee yhden kysymys ja kaikki vastausehdotukset
//Laura tekee getin
router.route('/kysymykset')
  .get(function (req, res, next) {
    qs.haeKysymykset(rows => {
      res.json(rows);
    });
  });


module.exports = router;
