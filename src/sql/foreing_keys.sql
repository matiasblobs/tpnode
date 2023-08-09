/* Tabla empleados con cargos */

ALTER TABLE empleados
ADD CONSTRAINT fk_empleados_cargos 
FOREIGN KEY(cargo) REFERENCES cargos(id_cargo);

/* Tabla subgeneros con generosliterarios */

ALTER TABLE subgeneros
ADD CONSTRAINT fk_subgeneros_generos 
FOREIGN KEY(id_generoliterario) REFERENCES generosliterarios(id_generoliterario);

/* Libros con autores, generos, sub generos */
ALTER TABLE libros
ADD CONSTRAINT fk_libros_autores 
FOREIGN KEY(autor) REFERENCES autores(id_autor);

ALTER TABLE libros
ADD CONSTRAINT fk_libros_generos
FOREIGN KEY(genero) REFERENCES generosliterarios(id_generoliterario);

ALTER TABLE libros
ADD CONSTRAINT fk_libros_subgeneros
FOREIGN KEY(subgenero) REFERENCES subgeneros(id_subgenero);

/* Prestamos con libros, socios, empleados */

ALTER TABLE prestamos
ADD CONSTRAINT fk_prestamos_libros
FOREIGN KEY(id_libro) REFERENCES libros(id_libro);

ALTER TABLE prestamos
ADD CONSTRAINT fk_prestamos_socios
FOREIGN KEY(id_socio) REFERENCES socios(id_socio);

ALTER TABLE prestamos
ADD CONSTRAINT fk_prestamos_empleados
FOREIGN KEY(id_empleado) REFERENCES empleados(id_empleado);




