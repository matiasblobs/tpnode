// Llamamos a modulos de Express
const express = require ('express');
const path = require ('path');
const bodyParser = require('body-parser');
const app = express();



// Settings
//app.set('port', process.env.PORT || 3000); // le decimos que elija un puerto o que tome el 3000

// IMPORTANTE: se cambió la linea de conexión al puerto, para que funcione con la página fl0.com, que es dónde hice el DEPLOY
app.set('port', process.env.PORT ?? 8080); 

app.set('view engine', 'ejs'); // definimos cual es nuestro motor de plantillas
app.set('views', path.join(__dirname, '../app/views')); // arma las rutas, concatenando el directorio raiz con el detalle que les pase

// MiddleWare
app.use(bodyParser.urlencoded({extended:false})); // activa el BodyParser, facilita la comunicacion entre el HTML y NodeJS

app.use(express.static('public')); // Esta línea nos ayuda a conectar la carpeta Public que es dónde guardamos nuestra hoja de CSS propia



module.exports=app;


