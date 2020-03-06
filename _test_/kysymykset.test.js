const request = require('supertest');
const app = require('../app');
const baseurl = '/api/quiz';

//Tämä testi toimii -Niina
test('Saamme haettua getillä kysymysten määrän', (done) => {
    request(app)
        .get(baseurl+'/kysymysmaara')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
});

test('Saamme haettua getillä tietyn kysymyksen ja kaikki vastausvaihtoehdot', (done) => {
    request(app)
        .get(baseurl+'/kysymykset')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
});
