const request = require('supertest');
const app = require('../app');
const baseurl = '/api/quiz';

//Testattava get ja funktio ovat async/await mallia. Tämä testi toimii -Niina
test('Saamme haettua getillä kaikki käyttäjät', (done) => {
    request(app)
        .get(baseurl+'/kayttajat')
        .then(response => {
            expect(response.statusCode).toBe(200);
            //expect(response.body.length).toBe(4);
            done();
        })
});