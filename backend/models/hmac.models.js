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

Usuario.updateById = (id, tutorial, result) => {
  sql.query(
    "UPDATE usuario SET NOMBRE_USUARIO = ? WHERE id = ?",
    [usuario.NOMBRE_USUARIO, usuario.idUsuario],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Usuario.remove = (id, result) => {
  sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

Usuario.removeAll = result => {
  sql.query("DELETE FROM tutorials", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutorials`);
    result(null, res);
  });
};

module.exports = Usuario;