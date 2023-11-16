import { Router } from 'express';

var nombreRutas = "especializaciones";

import { 
    mostrarTodo, 
    crearItem, 
    mostrarUno, 
    borrarItem, 
    actualizarItem } 
    from '../controllers/especializaciones.controllers.js';

const router = Router();

router.get("/"+ nombreRutas +"", mostrarTodo);
router.post("/"+ nombreRutas +"", crearItem);
router.put("/"+ nombreRutas +"/:id", actualizarItem);
router.delete("/"+ nombreRutas +"/:id", borrarItem );
router.get("/"+ nombreRutas +"/:id", mostrarUno);




export default router;