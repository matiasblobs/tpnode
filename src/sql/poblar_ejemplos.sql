/* CARGOS, EMPLEADOS, SOCIOS */
INSERT INTO cargos(cargo) 
values
('administrador'), 
('gerente'), 
('auditor');


INSERT INTO empleados(nombre, apellido, cargo) 
values
('matias', 'molina', 2),
('diego', 'fernandez', 3),
('lorena', 'escobar', 4);


INSERT INTO socios
(nombre, apellido, dni, telefono, email, fechanacimiento, fechaalta) 
values
    ('Tony',        'Stark',        '12345678', '+1 (555) 123-4567', 'tony.stark@example.com',          '1980-03-15', '2008-07-01'),
    ('Hermione',    'Granger',      '98765432', '+4 (444) 123-6789', 'hermione.granger@example.com',    '1981-09-19', '1998-06-05'),
    ('Han',         'Solo',         '45678901', '+1 (555) 987-6543', 'han.solo@example.com',            '1975-04-07', '2003-12-15'),
    ('Luke',        'Skywalker',    '78901234', '+1 (555) 567-8901', 'luke.skywalker@example.com',      '1982-02-14', '2000-05-02'),
    ('Thomas',      'Anderson',     '34567890', '+1 (555) 234-5678', 'thomas.anderson@example.com',     '1984-11-30', '2002-08-20'),
    ('Leia',        'Organa',       '56789012', '+1 (555) 876-5432', 'leia.organa@example.com',         '1978-05-05', '1999-09-10');


/* CARGA PRESTAMOS Y EXTENSIONES */
INSERT INTO extensiones
(extension, plazo)
values
('primera', 5),
('segunda', 10),
('tercera', 15);

/* LITERATURA */

INSERT INTO autores (nombre, apellido) 
VALUES 
('Gabriel', 'García Márquez'),
('Yuval Noah', 'Harari'),
('Patrick', 'Rothfuss'),
('Nawal', 'El Saadawi'),
('Jonathan', 'Kellerman'),
('Paulo', 'Coelho');

INSERT INTO generosliterarios (nombre)
VALUES
('Ficción'),
('No ficción'),
('Fantasía'),
('Suspenso');

INSERT INTO subgeneros (nombre, id_generoliterario)
VALUES
('Realismo mágico', '2'),
('Historia', '3'),
('Aventura', '4'),
('Drama social', '2'),
('Thriller psicológico', '5'),
('Espiritualidad y autoayuda', '2');

ALTER TABLE ejemplares
ADD id_libro INT;


/*
Título: "Cien años de soledad"
ISBN: 978-0307474728
Reseña: "Cien años de soledad" es una novela icónica que narra la historia de la familia Buendía en el pueblo ficticio de Macondo. Gabriel García Márquez teje una trama mágica y realista que explora temas como el amor, la soledad y el destino.
Autor: Gabriel García Márquez
Género: Ficción
Subgénero: Realismo mágico

Título: "Sapiens: De animales a dioses"
ISBN: 978-8499926223
Reseña: Yuval Noah Harari presenta un recorrido fascinante por la historia de la humanidad, desde los orígenes de la especie hasta el presente. El libro examina cómo la cultura, la política y la tecnología han influido en la evolución de nuestra civilización.
Autor: Yuval Noah Harari
Género: No ficción
Subgénero: Historia

Título: "El nombre del viento"
ISBN: 978-8499082479
Reseña: Patrick Rothfuss nos transporta a un mundo de magia y aventuras a través de la historia de Kvothe, un músico prodigioso y arcano. Esta novela épica te sumergirá en un universo lleno de intriga, fantasía y misterio.
Autor: Patrick Rothfuss
Género: Fantasía
Subgénero: Aventura

Título: "Mujer en punto cero"
ISBN: 978-9774168580
Reseña: Basada en hechos reales, Nawal El Saadawi nos cuenta la historia de Firdaus, una mujer que lucha contra la opresión y el patriarcado en la sociedad egipcia. Esta novela poderosa aborda temas como la discriminación de género y la búsqueda de libertad.
Autor: Nawal El Saadawi
Género: Ficción
Subgénero: Drama social

Título: "El psicoanalista"
ISBN: 978-0307279695
Reseña: Jonathan Kellerman nos sumerge en un thriller psicológico cautivador protagonizado por el Dr. Alex Delaware, un psicólogo forense. Cuando un misterioso paciente amenaza con suicidarse, Delaware se adentra en un oscuro y peligroso juego mental.
Autor: Jonathan Kellerman
Género: Suspenso
Subgénero: Thriller psicológico

Título: "El alquimista"
ISBN: 978-0062511409
Reseña: Paulo Coelho nos brinda una inspiradora historia sobre un joven pastor llamado Santiago que emprende un viaje en busca de su tesoro personal. A lo largo del camino, descubre lecciones sobre el destino, la sabiduría y la importancia de seguir nuestros sueños.
Autor: Paulo Coelho
Género: Ficción
Subgénero: Espiritualidad y autoayuda



