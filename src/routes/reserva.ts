import { Router } from "express";
import {updateReserva} from '../controllers/reserva'
const router = Router();
// Peticion para actualizar
router.patch('/:id', updateReserva)

export default router;