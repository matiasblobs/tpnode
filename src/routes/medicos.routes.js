import { Router } from 'express';

var nombreRutas = "medicos";

import { 
    mostrarTodo, 
    crearItem,
    mostrarUno,
    borrarItem,
    actualizarItem,
mostrarHorarios,
mostrarUnHorario,
agregarHorario,
borrarHorario,
editarHorario } 
    from '../controllers/medicos.controllers.js';

import {
    crearRelacion, mostrarRelaciones, borrarRelacion
} from '../controllers/relacion.medicoespecializacion.js';

const router = Router();

router.get("/"+ nombreRutas +"", mostrarTodo);
router.post("/"+ nombreRutas +"", crearItem);
router.get("/"+ nombreRutas +"/:id", mostrarUno);
router.delete("/"+ nombreRutas +"/:id", borrarItem );
router.put("/"+ nombreRutas +"/:id", actualizarItem );
/* 

router.put("/"+ nombreRutas +"/:id", actualizarItem); 
*/

/// Horarios

router.get("/"+ nombreRutas +"/:id/att", mostrarHorarios);
router.get("/"+ nombreRutas +"/:id/att/:index", mostrarUnHorario);
router.post("/"+ nombreRutas +"/:id/att", agregarHorario);
router.delete("/"+ nombreRutas +"/:id/att/:index", borrarHorario);
router.put("/"+ nombreRutas +"/:id/att/:index", editarHorario);


// Especializaciones relaciones

router.get("/relaciones", mostrarRelaciones);
router.post("/relaciones", crearRelacion);
router.delete("/relaciones/:id", borrarRelacion);




export default router;