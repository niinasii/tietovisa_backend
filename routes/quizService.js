require('dotenv').config();
const salasana = process.env.PGPASSWORD;
const tunnusnimi = process.env.PGUSER;
const hostaaja = process.env.PGHOST;
const tietokanta = process.env.PGDB;

const conopts = {
    user: tunnusnimi,
    password: salasana,
    host: hostaaja,
    database: tietokanta
}

const Allas = require('pg').Pool;
const allas = new Allas(conopts);

const haeKysymykset = (callback) => {
    allas.query(" sql ", (kysymykset) => {
        callback(kysymykset.rows);
    })
}

const haePisteet = (callback) => {
    allas.query(" sql", (pisteet) => {
        callback(pisteet.rows);
    })
}

const haeVastaukset = (callback) => {
    allas.query("sql", (vastaukset) => {
        callback(vastaukset.rows);
    })
}

const haeAihe = (callback) => {
    allas.query("sql", (aihe) => {
        callback(aihe.rows);
    })
}

const haeKayttajat = (callback) => {
    allas.query("sql", (kayttaja) => {
        callback(kayttaja.rows);
    })
}

module.exports = {haeKysymykset, haePisteet, haeAihe, haeVastaukset, haeKayttajat};