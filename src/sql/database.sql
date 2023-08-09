CREATE DATABASE libreria03;
USE libreria03;

/* LITERATURA */

CREATE TABLE libros(
    id_libro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    isbn VARCHAR (50),
    titulo VARCHAR (50),
    resena VARCHAR (250),
    autor INT,
    genero INT,
    subgenero INT 
);



CREATE TABLE autores(
    id_autor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (50),
    apellido VARCHAR (50)
);



CREATE TABLE ejemplares(
    id_ejemplar INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR (500),
    enprestamo BOOLEAN
);



CREATE TABLE generosliterarios(
    id_generoliterario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (50)
);



CREATE TABLE subgeneros(
    id_subgenero INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_generoliterario INT,
    nombre VARCHAR (50)
);


    /* Le damos un valor inicial */
    INSERT INTO libros(isbn, titulo, resena, autor, genero, subgenero) values('', '', '', '', '', '');
    INSERT INTO autores(nombre, apellido) values('', '');
    INSERT INTO ejemplares(estado, enprestamo) values('', false);
    INSERT INTO generosliterarios(nombre) values('');
    INSERT INTO subgeneros(id_generoliterario, nombre) values('', '');

/* PERSONAS */

CREATE TABLE socios(
    id_socio INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (50),
    apellido VARCHAR (50),
    dni VARCHAR (50),
    telefono VARCHAR (50),
    email VARCHAR (50),
    fechanacimiento DATE,
    fechaalta DATE
);
    

CREATE TABLE empleados(
    id_empleado INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (50),
    apellido VARCHAR (50),
    cargo INT
);
    

CREATE TABLE cargos(
    id_cargo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cargo VARCHAR (50)
);

    /* Poblamos */
    INSERT INTO socios(nombre, apellido, dni, telefono, email, fechanacimiento, fechaalta) values('', '', '', '', '', 0000-00-00, 0000-00-00);
    INSERT INTO empleados(nombre, apellido, cargo) values('', '', '');
    INSERT INTO cargos(cargo) values('');

/* EVENTOS */

CREATE TABLE prestamos(
    id_prestamo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_libro INT,
    id_ejemplar INT,
    id_socio INT,
    fecharetiro DATE,
    id_extension INT
);
   

CREATE TABLE extensiones(
    id_extension INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    extension VARCHAR (50),
    plazo INT
);

    /* poblamos */
    INSERT INTO prestamos(id_libro, id_ejemplar, id_socio, fecharetiro, id_extension) values('', '', '', 0000-00-00, '');
    INSERT INTO extensiones(extension, plazo) values('', 0);



