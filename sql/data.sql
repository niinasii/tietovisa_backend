
INSERT INTO aiheet(aihealua)
VALUES ('huumori');
	
	
INSERT INTO kayttajat(nimi)
VALUES ('Oskari'),('Titta'),('Laura'),('Niina');


INSERT INTO pisteet(kayttaja_id, pisteet, pvm)
VALUES (78, 150, '2019-02-02'), (79, 15, '2020-01-02'), (80, 450, '2019-01-01'), (81, 10, '2020-03-01'), (81, 310, '2019-02-05'), (79, 185, '2020-12-01');


INSERT INTO kysymykset(aihe_id, kysymys)
VALUES (1, 'Kenen kuulluimpia fraaseja on "Se on siellä kovalevyn nurkalla?"'), (1, 'Mitä näistä virvoitusjuomista ei löydy Academyn jääkaapista?'), (1, 'Kuka tekee parhaat checkpointit?'),
(1, 'Mikä seuraavista on jokaisen javascriptaajan lempiapi'), (1, 'Miten jatkuu seuraava Academylla usein kuultu kuuluisa lause? "Tämähän on ihan ..." '), (1, 'Valitse oikea kirjoitusasu tälle keskeiselle komponentille'), (1, 'Mikä seuraavista ei kuulu joukkoon?'), (1, 'Moneen asti Otto rakensi websocketteja ennen projektin esityspäivää?'), (1, 'Minkä värinen tausta on, jos sen väriksi määritellään on unicornshit?'), (1, 'Mikä on peura viroksi?');


INSERT INTO vastaukset(kysymys_id, vastaus, oikein)
VALUES (7, 'Tommi', false), (7, 'Toni', true), (7, 'Samu', false),
(8, 'Lonkero', true), (8, 'Olut', false), (8, 'Siideri', false),
(9, 'Toni', false), (9, 'Samu', false), (9, 'Tommi', true),
(10, 'cocltail-API', false), (10, 'wine-API', false), (10, 'beer-API', true), (10, 'longdrink-API', true),
(11, 'mahdotonta', false), (11, 'helppoa', true), (11, 'hoopoa', false), (11, 'mielipuolista', true), (12, 'beerComponent', true), (12, 'beerConponent', false), (12, 'beerCompomponent', false), (13, 'home', false), (13, 'Kanada', true), (13, '127.0.0.1', false), (13, 'koti', false), (14, 'klo 22.35', false), (14, 'klo 05.34', true), (14, 'klo 06.23', false), (14, '23.59', false),
(15, 'pink', false), (15, 'linear-gradient(to right, pink, blue)', false), (15, 'linear-gradient(to right, pink, lightsteelblue)', true), (15, 'lightsteelblue', false),
(16, 'kits', false), (16, 'hirv', true), (16, 'peur', false);