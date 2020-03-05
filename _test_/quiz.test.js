const request = require('supertest');
const app = require('../app');
const baseurl = '/api/quiz';

//Testattava get ja funktio ovat async/await mallia. Tämä testi toimii -Niina
test('Saamme haettua getillä käyttäjien maximi pisteet', (done) => {
    request(app)
        .get(baseurl+'/pisteet')
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body.length).toBe(4); //testidata on neljän käyttäjän maximipisteet
            done();
        })
});

//testattava get ovat async/await
test('Saamme haettu yhden käyttäjän kaikki pisteet', (done) => {
    request(app)
        .get(baseurl+'/pisteet/Titta') //testikäyttäjän tunnus
        .then(response => {
            expect(response.statusCode).toBe(200);
            //expect([15, 85]).toContain(response.body.pisteet);
            done();
        })
});