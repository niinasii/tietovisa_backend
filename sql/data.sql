
INSERT INTO aiheet(aihealua)
VALUES ('huumori');
	
	
INSERT INTO kayttajat(nimi)
VALUES ('Oskari'),('Titta'),('Laura'),('Niina');


INSERT INTO pisteet(kayttaja_id, pisteet, pvm)
VALUES (1, 150, '2020-02-02'), (2, 15, '2020-01-02'), (3, 50, '2020-01-01'), (1, 10, '2020-03-01'), (4, 102, '2020-02-05'), (2, 85, '2019-12-01');


INSERT INTO kysymykset(aihe_id, kysymys)
VALUES (1, 'Kenen kuulluimpia fraaseja on "Se on siellä kovalevyn nurkalla?"'), (1, 'Mitä näistä virvoitusjuomista ei löydy Academyn jääkaapista?'), (1, 'Kuka tekee parhaat checkpointit?');


INSERT INTO vastaukset(kysymys_id, vastaus, oikein)
VALUES (1, 'Tommi', false), (1, 'Toni', true), (1, 'Samu', false),
(2, 'Fanta', true), (2, 'PepsiMax', false), (2, 'Jaffa', false),
(3, 'Toni', false), (3, 'Samu', false), (3, 'Tommi', true);