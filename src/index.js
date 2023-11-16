// Importamos lo que tenemos en app.j y en database.js
import app from "./app.js";
import { sequelize } from "./database/database.js";


// Importamos nuestros models, ej:
import './model/obrassociales.js';
import './model/especializaciones.js';
import './model/pacientes.js';
import './model/medicos.js'; // incluye horarios y relaciones con especializaciones
import './model/clinicas.js';





// Armamos una conexion con nuestra database

async function main() {    
    // Lo hacemos con try catch para probar la conexion
    try {
        // Usamos el metodo force:true, es para que las tablas se creen segun el modelo, esto es solo para la primera vez, porque borra todo lo que haya, borra y crea nueva tabla
        // cuando tenemos definidos nuestros modelos de DataBase pasamos a force:false para que los datos se almacenen en la base de datos
        await sequelize.sync({force:false});
        console.log('Base de datos conectada');
        // Podemos cambiar el puerto
        app.listen(8080);
        console.log("Servidor conectado en el puerto 8080");

} catch (error) {
    console.error('');
}   
}

main();
