import { Router } from 'express';

var nombreRutas = "clinicas";

import { 
    mostrarTodo, 
    crearItem, 
    mostrarUno, 
    borrarItem, 
    actualizarItem } 
    from '../controllers/clinicas.controllers.js';

const router = Router();

router.get("/"+ nombreRutas +"", mostrarTodo);
router.post("/"+ nombreRutas +"", crearItem);
router.get("/"+ nombreRutas +"/:id", mostrarUno);
router.delete("/"+ nombreRutas +"/:id", borrarItem );
router.put("/"+ nombreRutas +"/:id", actualizarItem);

export default router;

