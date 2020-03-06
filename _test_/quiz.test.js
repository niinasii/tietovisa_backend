const request = require('supertest');
const app = require('../app');
const baseurl = '/api/quiz';

//Toimii -Niina
test('Saamme haettua getillä käyttäjien maximi pisteet', (done) => {
    request(app)
        .get(baseurl+'/pisteet')
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body.length).toBe(5); //testidata on neljän käyttäjän maximipisteet
            done();
        })
});

test('Saamme haettu yhden käyttäjän kaikki pisteet', (done) => {
    request(app)
        .get(baseurl+'/pisteet/Titta') //testikäyttäjän tunnus
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
});