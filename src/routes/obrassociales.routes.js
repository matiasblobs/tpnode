import { Router } from 'express';

var nombreRutas = "obrassociales";

import { 
    mostrarTodo, 
    crearItem, 
    mostrarUno, 
    borrarItem, 
    actualizarItem } 
    from '../controllers/obrassociales.controllers.js';

const router = Router();

router.get("/"+ nombreRutas +"", mostrarTodo);
router.post("/"+ nombreRutas +"", crearItem);
router.put("/"+ nombreRutas +"/:id", actualizarItem);
router.delete("/"+ nombreRutas +"/:id", borrarItem );
router.get("/"+ nombreRutas +"/:id", mostrarUno);

export default router;

