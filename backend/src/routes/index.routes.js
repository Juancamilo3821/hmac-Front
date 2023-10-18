import { Router } from 'express'
import { ping } from '../controllers/index.controller.js';
import { holamundo } from '../controllers/index.controller.js';


const router = Router()

router.get('/ping', ping);
router.get('/hola', holamundo);

export default router