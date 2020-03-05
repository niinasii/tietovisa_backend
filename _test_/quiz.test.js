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

// test('we can add a new scoot', (done) => {
//     const dummyscoot = {
//         model: { id: 2, name: 'Glion' },
//         electricity: { max: 3, current: 2 },
//         position: { lat: 3.14, lon: 23.4 },
//         added: '2019-04-01'
//       };
//     request(app)
//         .post(baseurl)
//         .send(dummyscoot)
//         .expect(201) // tai kuten alla
//         .expect('Location', /api\/scooters\/\d+$/)
//         .then(res => {
//             expect(res.statusCode).toBe(201);
//             const newresloc = res.header['Location'];
//             request(app)
//             .get(newresloc)
//             .then(response => {
//                 expect(response.statusCode).toBe(200);
//                 expect(response.body.model).toEqual(dummyscoot.model);
//                 expect(response.body.position).toEqual(dummyscoot.position);
//                 expect(response.body.added).toEqual(dummyscoot.added);
//                 done();
//             })
    

//         });
// });