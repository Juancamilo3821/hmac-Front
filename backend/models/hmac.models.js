const sql = require("./db.js");

// constructor
const Usuario = function(usuario) {
  this.idUsuario = usuario.idUsuario;
  this.NOMBRE_USUARIO = usuario.NOMBRE_USUARIO;
  this.ESTADO = usuario.ESTADO;
  this.TIPO_USUARIO_ID = usuario.TIPO_USUARIO_ID;
};

Usuario.create = (newUsuario, result) => {
  sql.query("INSERT INTO usuario SET ?", newUsuario, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("usuario creado: ", { id: res.insertId, ...newUsuario });
    result(null, { id: res.insertId, ...newUsuario });
  });
};

Usuario.findById = (idUsuario, result) => {
  sql.query(`SELECT * FROM usuario WHERE idUsuario = ${idUsuario}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("usuario encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }

    // no se encuentra el usuario
    result({ kind: "not_found" }, null);
  });
};

Usuario.getAll = (nombre, result) => {
  let query = "SELECT * FROM usuario";

  if (NOMBRE_USUARIO) {
    query += ` WHERE idUsuario LIKE '%${nombre}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuarios: ", res);
    result(null, res);
  });
};

Usuario.updateById = (id, usuario, result) => {
  sql.query(
    "UPDATE usuario SET NOMBRE_USUARIO = ? WHERE idUsuario = ?",
    [usuario.NOMBRE_USUARIO, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("acutalizado el nombre de usuario: ", { id: id, ...usuario });
      result(null, { id: id, ...usuario });
    }
  );
};

Usuario.remove = (id, result) => {
  sql.query("DELETE FROM usuarios WHERE idUsuario = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // se se encuentra el usuario con el ID
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("eliminado usuario con id: ", id);
    result(null, res);
  });
};

Usuario.removeAll = result => {
  sql.query("DELETE FROM usuario", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`eliminados ${res.affectedRows} usuarios`);
    result(null, res);
  });
};

module.exports = Usuario;