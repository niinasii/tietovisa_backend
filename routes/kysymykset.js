class Kysymys {
    constructor(id, kysymys, vastauxet) {
        this.id = id;
        this.kysymys = kysymys;
        this.vastaukset = vastauxet;
    }
}

module.exports = { Kysymys };