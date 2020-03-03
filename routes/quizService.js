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

const haePisteet = (callback) => {
    allas.query("SELECT * FROM pisteet", (pisteet) => {
        callback(pisteet.rows);
    })
}

/*

const haeKysymykset = (callback) => {
    allas.query(" sql ", (kysymykset) => {
        callback(kysymykset.rows);
    })
}
const lisaaPisteet = (uudetpisteet, callback) => {
    const { pisteet } = uudetpisteet;
    allas.query("INSERT INTO taulu (pisteet) VALUES ($1)", [pisteet], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
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
*/

module.exports = {haePisteet};