// Importamos express para activar nuestro servidor
import express from 'express';

// cargamos todos nuestros router ej:
//import choferesRoutes from './routes/choferes.routes.js';
import obrassocialesRoutes from './routes/obrassociales.routes.js';
import especializacionesRoutes from './routes/especializaciones.routes.js';
import pacientesRoutes from './routes/pacientes.routes.js';
import medicosRoutes from './routes/medicos.routes.js';
import clinicasRoutes from './routes/clinicas.routes.js';


// Cargamos express en una constrante
const app = express(); 

 // Podemos cambiar el puerto
       const port = process.env.PORT ?? 8080;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// Cargamos los middlewares midlewares
//midlewares
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://frontend-c3xr8yvbo-matiasblobs-projects.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(express.json());

// Cargamos nuestras rutas, ejemplo:
//app.use(choferesRoutes);
app.use(obrassocialesRoutes);
app.use(especializacionesRoutes);
app.use(pacientesRoutes);
app.use(medicosRoutes);
app.use(clinicasRoutes);


// Exportamos la app
export default app;
