import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js'
import session from 'express-session'
import cors from 'cors';

const app = express()

app.use(session({
    secret: 'clave-secreta',
    resave: false,
    saveUninitialized: true
}));


var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.options('*', cors());

// Crear el middleware de autenticación
const authMiddleware = (req, res, next) => {
    // Verificar la existencia de la cookie de sesión
    if (!req.session.user) {
        return res.redirect('/login');
    }

    // Continuar con la siguiente ruta
    next();
};

//app.use(authMiddleware);

app.use(express.json())

app.use(indexRoutes)
app.use('/api', employeesRoutes)
app.use('/api', usuariosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app