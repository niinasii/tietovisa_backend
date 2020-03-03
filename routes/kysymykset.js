//Muotoilee kysymykset ja vastaukset nätisti haluttuun muotoon =

class Kysymys {
    constructor(id, kysymys, vastauxet) {
        this.id = id;
        this.kysymys = kysymys;
        this.vastaukset = vastauxet;
    }
}

module.exports = { Kysymys };

// [{
//     "id": 1,
//     "kysymys": "Kenen kuulluimpia fraaseja on 'Se on siellä kovalevyn nurkalla?'",
//     "vastaukset": [
//         {
//             "vastaus": "Tommi",
//             "oikein": false
//         },
//         {
//             "vastaus": "Toni",
//             "oikein": true
//         },
//         {
//             "vastaus": "Samu",
//             "oikein": false
//         }]
// }]