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

//konstruktoidaan Pool-classin ja conopts-tietojen pohjalta uusi muuttuja -Niina.
const allas = new Allas(conopts);

//Hakee kaikki pisteet ja käyttäjien nimimerkit-Laura
const haePisteet = async () => {
    let pisteet = await allas.query("SELECT p.id, p.pisteet, k.nimi, p.pvm FROM pisteet AS p JOIN kayttajat AS k on k.id = p.kayttaja_id ORDER BY p.pisteet DESC LIMIT 20")
    return pisteet.rows;
}

//Hakee kaikki pisteet ja käyttäjien nimimerkit-Laura
const haeKuukaudenPisteet = async (mm, yy) => {
    let pisteet = await allas.query("SELECT p.id, p.pisteet, k.nimi, p.pvm FROM pisteet AS p JOIN kayttajat AS k on k.id = p.kayttaja_id WHERE EXTRACT(MONTH FROM pvm) = $1 AND EXTRACT(YEAR FROM pvm) = $2 ORDER BY p.pisteet DESC LIMIT 5", [mm, yy])
    return pisteet.rows;
}

//Hakee jokaisen käyttäjän maximipisteet tietokannasta--Laura
const haeTopPisteet = async () => {
    let pisteet = await allas.query("SELECT max(p.pisteet) AS maximit, p.kayttaja_id, k.nimi FROM pisteet AS p JOIN kayttajat AS k on k.id = p.kayttaja_id GROUP BY p.kayttaja_id, k.nimi ORDER BY maximit DESC LIMIT 5")
    return pisteet.rows;
}

//Hakee yhden käyttäjän kaikki pisteet tietokannasta--Laura
const yhdenPisteet = async (nimi) => {
    let munPisteet = await allas.query("SELECT k.nimi, p.pisteet, p.pvm from kayttajat as k, pisteet as p WHERE k.id = p.kayttaja_id AND k.nimi = $1", [nimi])
    return munPisteet.rows
}

//Hakee kysymyksen sekä siihen liittyvät vastaukset kysymys-id:n perusteella
haeKysymykset = async () => {
    let kysymys = await allas.query("SELECT distinct k.id, k.kysymys, v.vastaus, v.id as vastaus_id, v.oikein FROM kysymykset as k, vastaukset as v WHERE v.kysymys_id = k.id AND k.id = (SELECT id FROM kysymykset ORDER BY RANDOM() LIMIT 1)")
    const k = kysymys.rows
    const vastauxet = [];
    for (let i = 0; i < k.length; i++) {
        let v = k[i];
        vastauxet.push({ id: v.vastaus_id, vastaus: v.vastaus, oikein: v.oikein })
    }
    let helaHoito = [new Kysymys(k[0].id, k[0].kysymys, vastauxet)];
    return helaHoito;
}

//Hakee kaikki käyttäjänimet--Laura
const kaikkiKayttajat = async () => {
    let kayttajat = await allas.query("SELECT nimi from kayttajat")
    return kayttajat.rows;
}

//Lisaa uudet pisteet tietokantaan--Laura
const uudetPisteet = async (nimi, pointsit, pvm) => {
    let pisteet = await allas.query("INSERT INTO pisteet (pisteet, pvm, kayttaja_id) VALUES ($1, $2, (SELECT DISTINCT k.id FROM kayttajat as k WHERE k.nimi = $3))", [pointsit, pvm, nimi])
    return `Käyttäjälle ${nimi} on lisätty ${pointsit} pistettä tänään ${pvm}.`
}

//Hakee kysymysten lukumäärän--Laura
const kysymystenMaara = async () => {
    let maara = await allas.query("SELECT count(id) FROM kysymykset")
    return maara.rows;
}

//Lisää uuden kyttäjän tietokantaan--Laura
const uusiKayttaja = async (nimi) => {
    await allas.query("INSERT INTO kayttajat(nimi)VALUES ($1)", [nimi]);
    return `Käyttäjä nimimerkillä ${nimi} luotu`;
}

//exportataan funktiot dao-palvelusta, jotta quiz.js voi käyttää niitä -Niina
module.exports = {haePisteet, haeTopPisteet, haeKuukaudenPisteet, yhdenPisteet, haeKysymykset, kaikkiKayttajat, kysymystenMaara, uusiKayttaja, uudetPisteet};
