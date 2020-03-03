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

//Hakee pisteet pisteet-tietokannasta, toimii perusrakenteeltaan, tarkennetaan sql-hakua
const haePisteet = (callback) => {
    allas.query("SELECT * FROM pisteet", (error, pisteet) => {
        if (error) throw error;
        console.dir(pisteet.rows);
        callback(pisteet.rows);
    })
}


module.exports = {haePisteet};