import { Router } from 'express'
import { crearUsuario, iniciarSesion, registrarPaciente } from '../controllers/usuarios.controller.js'

const router = Router()

// router.get('/users', listaUsuarios)

// router.get('/users/:id', mostrarUsuario)

router.post('/register', crearUsuario)

router.post('/login', iniciarSesion)

router.post('/regpatient', registrarPaciente)

// router.patch('/users/:id', actualizarUsuario)

// router.delete('/users/:id', eliminarUsuario)

export default router