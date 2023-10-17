import { pool } from '../db.js'
import bcrypt from 'bcrypt'
import { hashing, salt } from '../hashing.js';

export const crearUsuario = async (req, res) => {
    const { NOMBRE_USUARIO, HASH } = req.body

    const [rows] = await pool.query("SELECT * FROM usuario WHERE NOMBRE_USUARIO = ?", [NOMBRE_USUARIO]);
    const saltGen = salt();
    const hashedPsword = hashing(HASH, saltGen);

    if (rows.length > 0) return res.status(409).json({
        message: "El usuario ya existe con este correo. Intente nuevamente."
    });

    try {
        console.log(NOMBRE_USUARIO, (await hashedPsword).toString(), (await saltGen).toString(), "Activo", 1)
        const [rows1] = await pool.query('INSERT INTO usuario (NOMBRE_USUARIO, HASH, SALT, ESTADO, TIPO_USUARIO_ID) VALUES (?, ?, ?, ?, ?)', [NOMBRE_USUARIO, (await hashedPsword).toString(), (await saltGen).toString(), "Activo", 1])
        const [result] = await pool.query('SELECT idUsuario FROM usuario WHERE NOMBRE_USUARIO = ?', [NOMBRE_USUARIO])
        const userId = result[0].idUsuario;
        if (rows1.affectedRows > 0) return res.status(200).json({
            message: "Usuario creado con exito!",
            userId: userId
        });
    } catch (error) {
        return res.status(500).json({ message: 'Algo salio mal creando el usuario' })
    }
}

export const iniciarSesion = async (req, res) => {
    const { NOMBRE_USUARIO, HASH } = req.body;
    const [rows] = await pool.query('SELECT * FROM usuario WHERE NOMBRE_USUARIO=?', [NOMBRE_USUARIO]);

    if (rows.length <= 0) return res.status(404).json({
        message: "No existe ese usuario!"
    });

    const [rows1] = await pool.query('SELECT HASH FROM usuario WHERE NOMBRE_USUARIO=?', [NOMBRE_USUARIO]);

    const isPasswordCorrect = await bcrypt.compare(HASH, rows1[0].HASH)

    if (!isPasswordCorrect) return res.status(401).json({ message: "La contraseña no es correcta!" });

    // Crear la sesión
    const user = {
        idUsuario: rows[0].idUsuario,
        nombreUsuario: rows[0].NOMBRE_USUARIO,
        rol: rows[0].TIPO_USUARIO_ID
    };
    req.session.user = user;

    // Establecer la cookie de sesión
    res.cookie('connect.sid', req.sessionID);

    res.status(200).json({ message: "Login success" });
}


export const registrarPaciente = async (req, res) => {
    const { ID,
        TIPO_DOCUMENTO_ID_TIPODOC,
        NOMBRE,
        FECHA_NAC,
        LUGAR_NAC,
        RH,
        GENERO,
        EMAIL,
        DIRECCION,
        TELEFONO_MOVIL,
        TELEFONO_CASA,
        ESTADO_CIVIL,
        DEPARTAMENTO,
        MUNICIPIO,
        USUARIO_idUsuario } = req.body

    const [rows] = await pool.query("SELECT * FROM paciente WHERE ID = ?", [ID]);

    if (rows.length > 0) return res.status(409).json({
        message: "El usuario ya existe con este correo. Intente nuevamente."
    });

    try {
        const [rows1] = await pool.query('INSERT INTO paciente (ID, TIPO_DOCUMENTO_ID_TIPODOC, NOMBRE, FECHA_NAC, LUGAR_NAC, RH, GENERO, EMAIL, DIRECCION, TELEFONO_MOVIL, TELEFONO_CASA, ESTADO_CIVIL, DEPARTAMENTO, MUNICIPIO, USUARIO_idUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [ID, TIPO_DOCUMENTO_ID_TIPODOC, NOMBRE, FECHA_NAC, LUGAR_NAC, RH, GENERO, EMAIL, DIRECCION, TELEFONO_MOVIL, TELEFONO_CASA, ESTADO_CIVIL, DEPARTAMENTO, MUNICIPIO, USUARIO_idUsuario])
        if (rows1.affectedRows > 0) return res.status(200).json({
            message: "Paciente registrado con exito!"
        });
    } catch (error) {
        return res.status(500).json({ message: 'Algo salio mal creando el paciente' })
    }
}





// export const listaUsuarios = async (req, res) => {
//     try {
//         const [rows] = await pool.query('SELECT * FROM usuario')
//         res.json(rows)
//     } catch (error) {
//         return res.status(500).json({ message: 'Algo salio mal' })
//     }
// }

// export const mostrarUsuario = async (req, res) => {
//     try {
//         const [rows] = await pool.query('SELECT * FROM usuario WHERE idUsuario = ?', [req.params.id])
//         if (rows.length <= 0) return res.status(404).json({ message: 'Usuario no encontrado' })
//         res.json(rows[0])
//     } catch (error) {
//         return res.status(500).json({ message: 'Algo salio mal' })
//     }
// }

// export const eliminarUsuario = async (req, res) => {
//     try {
//         const [result] = await pool.query('DELETE FROM usuario WHERE id = ?', [req.params.id])
//         if (result.affectedRows <= 0) return res.status(404).json({ message: 'Usuario no encontrado' })
//         res.sendStatus(204)
//     } catch (error) {
//         return res.status(500).json({ message: 'Algo salio mal' })
//     }
// }

// export const actualizarUsuario = async (req, res) => {
//     const { id } = req.params
//     const { NOMBRE_USUARIO, HASH } = req.body
//     try {
//         const [result] = await pool.query('UPDATE usuario SET NOMBRE_USUARIO = IFNULL(?, NOMBRE_USUARIO), HASH = IFNULL(?, HASH) WHERE idUsuario = ?', [NOMBRE_USUARIO, HASH, id])
//         if (result.affectedRows === 0) return res.status(404).json({ message: 'Usuario no encontrado' })
//         const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [id])
//         res.json(rows[0])
//     } catch (error) {
//         return res.status(500).json({ message: 'Algo salio mal' })
//     }
// }