//tässä haetaan requirella riippuvuus dotenvi, jolle annetaan build-in metodi config -Niina
require('dotenv').config();
const salasana = process.env.PGPASSWORD; //tässä envin prosessoimalle muuttujalle annetaan uusi muuttuja nimi
const tunnusnimi = process.env.PGUSER; //PGUSER vastaa env-tiedostosta olevaa PGUSER=käyttäjänimi
const hostaaja = process.env.PGHOST;
const tietokanta = process.env.PGDB;

//seuraavaksi luodaan conopts-olio tietokannan yhteystiedoista -Niina
const conopts = {
    user: tunnusnimi,
    password: salasana,
    host: hostaaja,
    database: tietokanta
}

//luodaan uusi muuttuja antamalla sille arvoksi requirettu postgresmoduuli, jolla on build-in Pool-class -Niina
const Allas = require('pg').Pool;

//konstruktoidaan Pool-classin ja conopts-tietojen pohjalta uusi muuttuja.
const allas = new Allas(conopts);

//Hakee pisteet tietokannasta pisteet-taulusta -Niina
const haePisteet = (callback) => {
    allas.query("SELECT * FROM pisteet", (error, pisteet) => {
        if (error) throw error; //jos tulee error niin antaa error tiedot meille
        console.dir(pisteet.rows);
        callback(pisteet.rows);
    })
}

const lisaaPisteet = (uudetpisteet, callback) => { //parametriksi annetaan cb lisäksi olio -Niina
    const {kayttaja_id, pisteet, pvm} = uudetpisteet //tässä luodaan olio properteilla, seuraavaksi insertoidaan sarakkeisiin tiedot
    allas.query("INSERT INTO pisteet (kayttaja_id, pisteet, pvm) VALUES ($1, $2, $3)", [kayttaja_id, pisteet, pvm], (error, pisteet) => {
        if (error) throw error;
        console.dir(pisteet.rows); //insertoitua dataa referoidaan pisteet-nimellä
        callback(pisteet.rowCount);
    })
}

//exportataan funktiot dao-palvelusta, jotta quiz.js voi käyttää niitä -Niina
module.exports = {haePisteet, lisaaPisteet};