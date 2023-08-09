// Hacemos la coneccion con la base de datos
/* const dbConnection=require('../../config/dbConnections');

dbConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
}); */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'srv951.hstgr.io',
  user: 'u236440595_nodetest',
  password: 'Charlotte@4411',
  database: 'u236440595_nodetest'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});



// Armamos nuestras rutas
module.exports = app=>{



   // const conexion=dbConnection();
  const conexion=connection;

    // RUTAS

    app.get('/', (req,res)=>{
        res.render('inicio.ejs', {            
        })       
        
    });

    // STAFF


    app.get('/staff', (req,res)=>{
        conexion.query('SELECT * FROM empleados', (err, result)=> {
            if (err) throw err;
            conexion.query('SELECT * FROM cargos', (err, result2)=> {
                if (err) throw err;
                res.render('staff.ejs', {
                    empleados: result,
                    cargos: result2
                });
            });                  
        });
    });

    app.post('/staff-agregar', (req,res)=> {   
        console.log(req.body);   
       
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const cargo = req.body.cargo;
        
     
        const query = 'INSERT INTO empleados (nombre, apellido, cargo) values (?, ?, ?)';
    

        conexion.query(query, [nombre, apellido, cargo], (err, result) => {
            if(err) {
                console.error('Error al agregar registro: ', err);
                res.status(500).send('Error al agregar el registro');
            } else {
                console.log('Registros agregados correctamente');
                res.redirect('/staff');
            }
        })
        
    });

    app.post('/staff-editar', (req,res)=> {   
        console.log(req.body);   
       

        const idempleado = req.body.idempleado;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const cargo = req.body.cargo;

        const query = 'UPDATE empleados SET nombre = ?, apellido = ?, cargo = ? WHERE id_empleado = ?';

        conexion.query(query, [nombre, apellido, cargo, idempleado], (err, result) => {
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/staff');
            }
        })
        
    });

    app.get('/staff-borrar/:id', (req, res)=> {
        const id= req.params.id;
        const query = 'DELETE FROM empleados WHERE id_empleado = ?';

        conexion.query(query, [id], (err, result)=>{
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/staff');
                
            }
        }) 
    });
    
    app.get('/get_data', function(request, response, next){
        var search_query = request.query.search_query;
        var query = `
        SELECT nombreusuario FROM empleados
        WHERE nombreusuario LIKE '%${search_query}%'
        LIMIT 10
        `;

        conexion.query(query, function(error, data){
            response.json(data);
            console.log(data);
        })

        
    });
   
    // Cargos

    app.get('/cargos', (req,res)=>{
        console.log('hola cargos');
        conexion.query('SELECT * FROM cargos', (err, result)=>{
            console.log(result);
            res.render('cargos.ejs', {
                cargos: result
            });
        });
    });

    app.get('/cargo-borrar/:id', (req, res)=> {
        const id= req.params.id;
        const query = 'DELETE FROM cargos WHERE id_cargo = ?';

        conexion.query(query, [id], (err, result)=>{
            if(err) {
                console.error('Error al editar registro, es posible que el cargo este en uso en la tabla empleados: ', err);
                res.status(500).send('Error al editar registro, es posible que el cargo este en uso en la tabla empleados');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/cargos');
                
            }
        }) 
    });

    app.post('/cargo-agregar', (req,res)=> {   
        console.log(req.body);   
       
        const nombre = req.body.nombre;        
     
        const query = 'INSERT INTO cargos (cargo) values (?)';    

        conexion.query(query, [nombre], (err, result) => {
            if(err) {
                console.error('Error al agregar registro: ', err);
                res.status(500).send('Error al agregar el registro');
            } else {
                console.log('Registros agregados correctamente');
                res.redirect('/cargos');
            }
        })
        
    });

    app.post('/cargo-editar', (req,res)=> {   
        console.log(req.body);   
       

        const id = req.body.id;
        const nombre = req.body.nombre;
        
        const query = 'UPDATE cargos SET cargo = ? WHERE id_cargo = ?';

        conexion.query(query, [nombre, id], (err, result) => {
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/cargos');
            }
        })
        
    });

    // LIBROS

    app.get('/libros', (req,res)=>{
        conexion.query('SELECT * FROM libros', (err, result)=> {
            if (err) throw err;
            conexion.query('SELECT * FROM autores', (err, result2)=> {
                if (err) throw err;
                conexion.query('SELECT * FROM generosliterarios', (err, result3)=> {
                    if (err) throw err;
                    res.render('libros.ejs', {
                        libros: result,
                        autores: result2,
                        generosliterarios: result3
                    });   
                });               
            });                  
        });
    });

    app.post('/libro-agregar', (req,res)=> {   
        console.log(req.body);   
       
        const titulo = req.body.titulo; 
        const isbn = req.body.isbn;
        const resena = req.body.resena;
        const idautor = req.body.autor;
        const idgenero = req.body.generoliterario;       
     
        const query = 'INSERT INTO libros (titulo, isbn, resena, autor, genero) values (?, ?, ?, ?, ?)';    

        conexion.query(query, [titulo, isbn, resena, idautor, idgenero], (err, result) => {
            if(err) {
                console.error('Error al agregar registro: ', err);
                res.status(500).send('Error al agregar el registro');
            } else {
                console.log('Registros agregados correctamente');
                res.redirect('/libros');
            }
        })        
    });

    app.get('/libro-borrar/:id', (req, res)=> {
        const id= req.params.id;
        const query = 'DELETE FROM libros WHERE id_libro = ?';

        conexion.query(query, [id], (err, result)=>{
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/libros');
                
            }
        }) 
    });

    app.post('/libro-editar', (req,res)=> {   
        console.log(req.body);   
       

        const id = req.body.id;
        const titulo = req.body.titulo;
        const isbn = req.body.isbn;
        const resena = req.body.resena;
        const autor = req.body.autor;
        const genero = req.body.generoliterario;
        
        const query = 'UPDATE libros SET titulo = ?, isbn = ?, resena = ?, autor = ?, genero = ? WHERE id_libro = ?';

        conexion.query(query, [titulo, isbn, resena, autor, genero, id], (err, result) => {
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Registros editado correctamente');
                console.log(genero);
                res.redirect('/libros');
            }
        })
        
    });


    // Autores

    app.get('/autores', (req,res)=>{
        conexion.query('SELECT * FROM autores', (err, result)=> {
            if (err) throw err;
            res.render('autores.ejs', {
                autores: result
            });                   
        });
    });

    app.post('/autor-agregar', (req,res)=> {   
        console.log(req.body);   
       
        const nombre = req.body.nombre;  
        const apellido = req.body.apellido; 
        const url = req.body.url;      
     
        const query = 'INSERT INTO autores (nombre, apellido) values (?, ?)';    

        conexion.query(query, [nombre, apellido], (err, result) => {
            if(err) {
                console.error('Error al agregar registro: ', err);
                res.status(500).send('Error al agregar el registro');
            } else {
                console.log('Registros agregados correctamente');
                res.redirect(url);
            }
        })        
    });

    app.get('/autor-borrar/:id', (req, res)=> {
        const id= req.params.id;
        const query = 'DELETE FROM autores WHERE id_autor = ?';

        conexion.query(query, [id], (err, result)=>{
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/autores');
                
            }
        }) 
    });

    app.post('/autor-editar', (req,res)=> {   
        console.log(req.body);   
       

        const id = req.body.id;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        
        const query = 'UPDATE autores SET nombre = ?, apellido = ? WHERE id_autor = ?';

        conexion.query(query, [nombre, apellido, id], (err, result) => {
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/autores');
            }
        })
        
    });

    // GENEROS LITERARIOS

    app.get('/generosliterarios', (req,res)=>{
        conexion.query('SELECT * FROM generosliterarios', (err, result)=>{
            res.render('generosliterarios.ejs', {
                generos: result
            });
        });
    });

    app.post('/generoliterario-agregar', (req,res)=> {   
        console.log(req.body);   
       
        const nombre = req.body.nombre;  
        const url = req.body.url;      
     
        const query = 'INSERT INTO generosliterarios (nombre) values (?)';    

        conexion.query(query, [nombre], (err, result) => {
            if(err) {
                console.error('Error al agregar registro: ', err);
                res.status(500).send('Error al agregar el registro');
            } else {
                console.log('Registros agregados correctamente');
                console.log(url);
                res.redirect(url);
            }
        })        
    });

    app.get('/generoliterario-borrar/:id', (req, res)=> {
        const id= req.params.id;
        const query = 'DELETE FROM generosliterarios WHERE id_generoliterario = ?';

        conexion.query(query, [id], (err, result)=>{
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/generosliterarios');
                
            }
        }) 
    });

    app.post('/generoliterario-editar', (req,res)=> {   
        console.log(req.body);   
       

        const id = req.body.id;
        const nombre = req.body.nombre;
        
        const query = 'UPDATE generosliterarios SET nombre = ? WHERE id_generoliterario = ?';

        conexion.query(query, [nombre, id], (err, result) => {
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/generosliterarios');
            }
        })
        
    });


    // EXTENSIONES

    app.get('/extensiones', (req,res)=>{
        conexion.query('SELECT * FROM extensiones', (err, result)=>{
            res.render('extensiones.ejs', {
                extensiones: result
            });
        });
    });

    app.post('/extension-agregar', (req,res)=> {   
        console.log(req.body);   
       
        const nombre = req.body.nombre;  
        const plazo = parseInt(req.body.plazo);         
     
        const query = 'INSERT INTO extensiones (extension, plazo) values (?, ?)';        
     
         conexion.query(query, [nombre, plazo], (err, result) => {
            if(err) {
                console.error('Error al agregar registro: ', err);
                res.status(500).send('Error al agregar el registro');
            } else {
                console.log('Registros agregados correctamente');
                
                res.redirect('/extensiones');
            }
        })       
    });

    app.get('/extension-borrar/:id', (req, res)=> {
        const id= req.params.id;
        const query = 'DELETE FROM extensiones WHERE id_extension = ?';

        conexion.query(query, [id], (err, result)=>{
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/extensiones');
                
            }
        }) 
    });

    app.post('/extension-editar', (req,res)=> {   
        console.log(req.body);   
       
        const id = req.body.id;
        const nombre = req.body.nombre;  
        const plazo = parseInt(req.body.plazo);
        
        const query = 'UPDATE extensiones SET extension = ?, plazo = ? WHERE id_extension = ?';

        conexion.query(query, [nombre, plazo, id], (err, result) => {
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/extensiones');
            }
        })
        
    });

    // SOCIOS
    
    app.get('/socios', (req,res)=>{
        conexion.query('SELECT * FROM socios', (err, result)=>{
            res.render('socios.ejs', {
                socios: result
            });
        });
    });

    app.post('/socio-agregar', (req,res)=> {   
         
       
        const nombre = req.body.nombre;  
        const apellido = req.body.apellido;  
        const dni = req.body.dni;  
        const telefono = req.body.telefono;  
        const email = req.body.email;  
        const nacimiento = req.body.nacimiento;  
        const alta = req.body.alta;  
              
     
        const query = 'INSERT INTO socios (nombre, apellido, dni, telefono, email, fechanacimiento, fechaalta) values (?, ?, ?, ?, ?, ?, ?)';        
     
         conexion.query(query, [nombre, apellido, dni, telefono, email, nacimiento, alta], (err, result) => {
            if(err) {
                console.error('Error al agregar registro: ', err);
                res.status(500).send('Error al agregar el registro');
            } else {
                console.log('Registros agregados correctamente');
                
                res.redirect('/socios');
            }
        })       
    });


    app.get('/socio-borrar/:id', (req, res)=> {
        const id= req.params.id;
        const query = 'DELETE FROM socios WHERE id_socio = ?';

        conexion.query(query, [id], (err, result)=>{
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/socios');
                
            }
        }) 
    });

    app.post('/socio-editar', (req,res)=> {    
       
        const id = req.body.id;
        const nombre = req.body.nombre;  
        const apellido = req.body.apellido;  
        const dni = req.body.dni;  
        const telefono = req.body.telefono;  
        const email = req.body.email;  
        const nacimiento = req.body.nacimiento;  
        const alta = req.body.alta;   
       
        
        const query = 'UPDATE socios SET nombre = ?, apellido = ?, dni = ?, telefono = ?, email = ?, fechanacimiento = ?, fechaalta = ?  WHERE id_socio = ?';

        conexion.query(query, [nombre, apellido, dni, telefono, email, nacimiento, alta, id], (err, result) => {
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/socios');
            }
        })
        
    });


    // PRESTAMOS

    app.get('/prestamoform', (req,res)=>{
        conexion.query('SELECT * FROM empleados', (err, result)=> {
            if (err) throw err;
            conexion.query('SELECT * FROM libros', (err, result2)=> {
                if (err) throw err;
                    conexion.query('SELECT * FROM socios', (err, result3)=> {
                        if (err) throw err;
                        res.render('prestamoform.ejs', {
                            empleados: result,
                            libros: result2,
                            socios: result3
                        });
                    });             
            });                  
        });
    });

    app.get('/prestamolist', (req,res)=>{
        conexion.query('SELECT prestamos.id_prestamo, prestamos.id_libro, prestamos.id_socio, prestamos.id_empleado, prestamos.fecharetiro, libros.titulo, libros.autor, socios.nombre AS socio_nombre, socios.apellido AS socio_apellido, empleados.nombre AS empleado_nombre, empleados.apellido AS empleado_apellido FROM prestamos INNER JOIN libros ON prestamos.id_libro = libros.id_libro INNER JOIN socios ON prestamos.id_socio = socios.id_socio INNER JOIN empleados ON prestamos.id_empleado = empleados.id_empleado', (err, result)=> {
            if (err) throw err;
            conexion.query('SELECT * FROM autores', (err, result2)=> {
                if (err) throw err;  
                    conexion.query('SELECT * FROM empleados', (err, result3)=> {
                        if (err) throw err;   
                        conexion.query('SELECT * FROM libros', (err, result4)=> {
                            if (err) throw err;      
                                conexion.query('SELECT * FROM socios', (err, result5)=> {
                                    if (err) throw err;                
                                    res.render('prestamolist.ejs', {
                                        prestamos: result,
                                        autores: result2,
                                        empleados: result3,
                                        libros: result4,
                                        socios: result5
                                    });         
                                });            
                        });                           
                              
                    });              
                      
            });
                   
        });
    });


    app.post('/prestamo-agregar', (req,res)=> {   
         
       
        const staff = req.body.staff;  
        const libro = req.body.libro;  
        const socio = req.body.socio;  
        const fecha = req.body.fecha;                
     
        const query = 'INSERT INTO prestamos (id_empleado, id_libro, id_socio, fecharetiro) values (?, ?, ?, ?)';        
     
         conexion.query(query, [staff, libro, socio, fecha], (err, result) => {
            if(err) {
                console.error('Error al agregar registro: ', err);
                res.status(500).send('Error al agregar el registro');
            } else {
                console.log('Registros agregados correctamente');
                
                res.redirect('/prestamolist');
            }
        })       
    });

    app.get('/prestamo-borrar/:id', (req, res)=> {
        const id= req.params.id;
        const query = 'DELETE FROM prestamos WHERE id_prestamo = ?';

        conexion.query(query, [id], (err, result)=>{
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/prestamolist');
                
            }
        }) 
    });

    app.post('/prestamo-editar', (req,res)=> {           

        const id = req.body.id;
        const empleado = req.body.staff;
        const libro = req.body.libro;
        const socio = req.body.socio;
        const fecha = req.body.fecha;
        
        const query = 'UPDATE prestamos SET id_empleado = ?, id_libro = ? , id_socio = ? , fecharetiro = ?  WHERE id_prestamo = ?';

        conexion.query(query, [empleado, libro, socio, fecha, id], (err, result) => {
            if(err) {
                console.error('Error al editar registro: ', err);
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Registros editado correctamente');
                res.redirect('/prestamolist');
            }
        })
        
    });

    

};
