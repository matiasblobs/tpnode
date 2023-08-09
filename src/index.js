//Traemos la configuracion de nuestro server
const app=require('./config/server'); 

// Traemos nuestras rutas
require('./app/routes/libros')(app); 


// Iniciamos servidor
app.listen(app.get('port'), ()=>{
    console.log('Bienvenido, estamos activos en puerto:', app.get('port'));
});