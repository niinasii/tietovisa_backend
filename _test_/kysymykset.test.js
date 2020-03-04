const request = require('supertest');
const app = require('../app');
const baseurl = '/api/quiz';

//Testattava get ja funktio ovat async/await mallia. Tämä testi toimii -Niina
test('Saamme haettua getillä kysymysten määrän', (done) => {
    request(app)
        .get(baseurl+'/kysymykset')
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect([{"count": "3"}]).toEqual(response.body); //testidata 3 kysymystä
            done();
        })
});

test('Saamme haettua getillä tietyn kysymyksen ja kaikki vastausvaihtoehdot', (done) => {
    request(app)
        .get(baseurl+'/kysymykset/1')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
});