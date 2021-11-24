import { Router } from "express";
import {updateReserva} from '../controllers/reserva'
const router = Router();

router.patch('/:id', updateReserva)

export default router;