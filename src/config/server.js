// Llamamos a modulos de Express
const express = require ('express');
const path = require ('path');
const bodyParser = require('body-parser');

const app = express();




// Settings
//app.set('port', process.env.PORT || 3000); // le decimos que elija un puerto o que tome el 3000
app.set('port', process.env.PORT ?? 8080); // linea para flO.com
app.set('view engine', 'ejs'); // definimos cual es nuestro motor de plantillas
app.set('views', path.join(__dirname, '../app/views')); // arma las rutas, concatenando el directorio raiz con el detalle que les pase

// MiddleWare
app.use(bodyParser.urlencoded({extended:false})); // activa el BodyParser, facilita la comunicacion entre el HTML y NodeJS

app.use(express.static('public')); 



module.exports=app;


