import { Router } from 'express';

var nombreRutas = "pacientes";

import { 
    mostrarTodo, 
    crearItem, 
    mostrarUno, 
    borrarItem, 
    actualizarItem } 
    from '../controllers/pacientes.controllers.js';

const router = Router();

router.get("/"+ nombreRutas +"", mostrarTodo);
router.post("/"+ nombreRutas +"", crearItem);
router.put("/"+ nombreRutas +"/:id", actualizarItem);
router.delete("/"+ nombreRutas +"/:id", borrarItem );
router.get("/"+ nombreRutas +"/:id", mostrarUno);




export default router;