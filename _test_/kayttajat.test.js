const request = require('supertest');
const app = require('../app');
const baseurl = '/api/quiz';

//-Niina
test('Saamme haettua getillä kaikki käyttäjät', (done) => {
    request(app)
        .get(baseurl+'/kayttajat')
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
});