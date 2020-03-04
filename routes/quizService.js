//tässä haetaan requirella riippuvuus dotenvi, jolle annetaan build-in metodi config -Niina
require('dotenv').config();
const salasana = process.env.PGPASSWORD; //tässä envin prosessoimalle muuttujalle annetaan uusi muuttuja nimi
const tunnusnimi = process.env.PGUSER; //PGUSER vastaa env-tiedostosta olevaa PGUSER=käyttäjänimi
const hostaaja = process.env.PGHOST;
const tietokanta = process.env.PGDB;
const { Kysymys } = require('./kysymykset');


//seuraavaksi luodaan conopts-olio tietokannan yhteystiedoista -Niina
const conopts = {
    user: tunnusnimi,
    password: salasana,
    host: hostaaja,
    database: tietokanta
}

//luodaan uusi muuttuja antamalla sille arvoksi requirettu postgresmoduuli, jolla on build-in Pool-class -Niina
const Allas = require('pg').Pool;
const allas = new Allas(conopts);//konstruktoidaan Pool-classin ja conopts-tietojen pohjalta uusi muuttuja.

//Hakee jokaisen käyttäjän maximipisteet tietokannasta--Laura
const haePisteet = async () => {
    let pisteet = await allas.query("SELECT max(p.pisteet) AS maximit, p.pvm, p.kayttaja_id, k.nimi from pisteet AS p, kayttajat AS k WHERE k.id = p.kayttaja_id GROUP BY p.kayttaja_id, k.nimi, p.pvm ORDER BY maximit DESC")
    return pisteet.rows;
}

//Hakee yhden käyttäjän kaikki pisteet tietokannasta--Laura
const yhdenPisteet = async (nimi) => {
    let munPisteet = await allas.query("SELECT k.nimi, p.pisteet, p.pvm from kayttajat as k, pisteet as p WHERE k.id = p.kayttaja_id AND k.nimi = $1", [nimi])
    return munPisteet.rows
}

//Hakee kysymyksen sekä siihen liittyvät vastaukset kysymys-id:n perusteella
haeKysymys = async (id) => {
    let kysymys = await allas.query("SELECT k.id, k.kysymys, v.vastaus, v.oikein FROM kysymykset as k, vastaukset as v WHERE v.kysymys_id = k.id AND k.id = $1", [id])
    const k = kysymys.rows
    if (k == '') {
        return 'Id ei ole validi!'
    } else {
    const vastauxet = [];
    for (let i = 0; i < k.length; i++) {
        let v = k[i];
        vastauxet.push({ vastaus: v.vastaus, oikein: v.oikein })
    }
    let helaHoito = [new Kysymys(k[0].id, k[0].kysymys, vastauxet)];
    return helaHoito;
}}

const lisaaPisteet = (uudetpisteet, callback) => { //parametriksi annetaan cb lisäksi olio -Niina
    const {kayttaja_id, pisteet, pvm} = uudetpisteet //tässä luodaan olio properteilla, seuraavaksi insertoidaan sarakkeisiin tiedot
    allas.query("INSERT INTO pisteet (kayttaja_id, pisteet, pvm) VALUES ($1, $2, $3)", [kayttaja_id, pisteet, pvm], (error, pisteet) => {
        if (error) throw error;
        console.dir(pisteet.rows); //insertoitua dataa referoidaan pisteet-nimellä
        callback(pisteet.rowCount);
    })
}

//Hakee kaikki käyttäjänimet--Laura
const kaikkiKayttajat = async () => {
    let kayttajat = await allas.query("SELECT nimi from kayttajat")
    return kayttajat.rows;
}

//Hakee kysymysten määrän--Laura
const kysymystenMaara = async () => {
    let maara = await allas.query("SELECT count(id) FROM kysymykset")
    return maara.rows;
}

const uusiKayttaja = async (nimi) => {
    await allas.query("INSERT INTO kayttajat(nimi)VALUES ($1)", [nimi]);
    return `Käyttäjä nimimerkillä ${nimi} luotu`;
}

//exportataan funktiot dao-palvelusta, jotta quiz.js voi käyttää niitä -Niina
module.exports = {haePisteet, lisaaPisteet, yhdenPisteet, haeKysymys, kaikkiKayttajat, kysymystenMaara, uusiKayttaja};
