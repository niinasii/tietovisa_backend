var express = require('express');
var router = express.Router();
//haetaan dao-palvelu ja tallennetaan se muuttujaan
var qs = require('./quizService');

//Hakee jokaisen käyttäjän maximipisteet tietokannasta--Laura
router.route('/pisteet')
  .get(async (req, res, next) => {
    try {
      let pisteet = await qs.haePisteet()
      res.json(pisteet)
    } catch (error) {
      throw error
    }
  })

  // post pisteet/ kayttaja id ja pistemäärä + päivämäärä
  // //Niina tekee postin
  // .post(function (req, res, next) {
  //   qs.lisaaPisteet(req.body, (rowCount) => {
  //     if (rowCount > 0)
  //       res.status(201).json({ message: 'Lisääminen onnistui' });
  //     else {
  //       res.status(400).json({ message: 'Lisääminen ei onnistunut' });
  //     }
  //   });
  // });

  //Lisää pisteet käyttäjänimen perusteella tietokannan pisteet-taulukkoon--Laura
  .post(async (req, res, next) => {
    try {
      paivitys = await qs.uudetPisteet(req.body.nimi, req.body.pisteet, req.body.pvm)
        res.json(paivitys)
    } catch (error) {
      throw error
    }
  })

//Hakee yhden käyttäjän kaikki pisteet tietokannasta--Laura
router.route('/pisteet/:nimi')
  .get(async (req, res, next) => {
    try {
      let munPisteet = await qs.yhdenPisteet(req.params.nimi)
      if (munPisteet == '') {
        res.json({ message: 'Käyttäjää ei löydy' })
      } else {
        res.json(munPisteet)
      }
    } catch (error) {
      throw error
    }
  });


//Hakee kysymyksen sekä siihen liittyvät vastaukset kysymys-id:n perusteella
router.route('/kysymykset/:id')
  .get(async (req, res, next) => {
    try {
      let kysymys = await qs.haeKysymys(req.params.id)
      res.json(kysymys)
    } catch (error) {
      throw error
    }
  });

//Hakee kysymysten määrän--Laura
router.route('/kysymykset')
  .get(async (req, res, next) => {
    try {
      let maara = await qs.kysymystenMaara()
      res.json(maara);
    } catch (error) {
      throw error
    }
  })

//Hakee kaikki käyttäjänimet--Laura
router.route('/kayttajat')
  .get(async (req, res, next) => {
    try {
      let kayttajat = await qs.kaikkiKayttajat()
      res.json(kayttajat)
    } catch (error) {
      throw error
    }
  })

  .post(async (req, res, next) => {
    try {
      let uusi = await qs.uusiKayttaja(req.body.nimi)
      res.json(uusi)
    } catch (error) {
      throw error
    }
  })

module.exports = router;
