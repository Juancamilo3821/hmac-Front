const sql = require("./db.js");

// constructor
class Usuario {
  constructor(usuario) {
    this.NOMBRE_USUARIO = usuario.NOMBRE_USUARIO;
    this.HASH = usuario.HASH;
  }
  static create(newUsuario, result) {
    console.log("newUsuario object:", newUsuario);
    sql.query("INSERT INTO usuario (NOMBRE_USUARIO, HASH, ESTADO, TIPO_USUARIO_ID) VALUES(?,?,?,?)", [newUsuario.NOMBRE_USUARIO, newUsuario.HASH, "Activo", 1], (err, res) => {
      if (err) {
        console.log("error", err);
        //result(err, null);
        return;
      }

      console.log("usuario creado: ", { id: res.insertId, ...newUsuario });
      //result(null, { id: res.insertId, ...newUsuario });
    });
  }
  static findById(idUsuario, result) {
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
  }
  static getAll(nombre, result) {
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
  }
  static updateById(id, usuario, result) {
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
  }
  static remove(id, result) {
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
  }
  static removeAll(result) {
    sql.query("DELETE FROM usuario", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log(`eliminados ${res.affectedRows} usuarios`);
      result(null, res);
    });
  }
}

module.exports = Usuario;