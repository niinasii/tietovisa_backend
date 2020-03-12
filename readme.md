## Johdanto
Tämä Github repositio on Tietovisa-projektin back-end development-vaiheen ulkoinen repositio.

## Kuinka aloitat
Kloonaa itsellesi tämä repo Git Bashissa komennolla:

### `git clone https://github.com/niinasii/tietovisa_backend `

Installoi tarvittavat riippuvuudet ja generoi node_modules NodeJs:ssä komennolla:

### `npm install`

Käynnistä palvelin komennolla:

### `npm start`

Palvelin pyörii oletusarvoisesti portissa 8000 <br />
Avaa: (http://localhost:8000)

## Testaus

Back-End puolta voidaan testata kolmella test suitella (Jest + supertest). Expected vastaus pohjaa testidataan, joka sijaitsee data.sql tiedostossa. Alusta tietokanta ja taulu, sillä datalla, jos haluat testien toimivan ilman manuaalisia muutoksia.

### `npm test`

## Front-End

Tämän back-end repon front-end vastinkappale on ulkoisessa repossa:
(https://github.com/TittaKujala/tietovisa_frontend)

## Tiimi
Titta Kujala, Oskari Auvinen, Laura Kankaanpää, Niina Siitari.
