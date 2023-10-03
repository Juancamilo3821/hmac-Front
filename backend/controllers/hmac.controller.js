const Usuario = require("../models/hmac.models.js");

// Crear y guardar usuario
exports.create = (req, res) => {
    // Validar
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Crear un usuario
    const usuario = new Usuario({
      idUsuario: req.body.idUsuario,
      NOMBRE_USUARIO: req.body.NOMBRE_USUARIO,
      ESTADO: req.body.ESTADO,
      TIPO_USUARIO_ID: req.body.TIPO_USUARIO_ID
    });
  
    // Guardar usuario en la BD
    Usuario.create(usuario, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      else res.send(data);
    });
  };

// Conseguir todos los usuarios
exports.getAll = (req, res) => {
    const idUsuario = req.query.idUsuario;
  
    Usuario.getAll(idUsuario, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
  };
  
  exports.findAllPublished = (req, res) => {
    Usuario.getAllPublished((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
  };

// Encontrar un solo usuario con ID
exports.findById = (req, res) => {
    Usuario.findById(req.params.idUsuario, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.idUsuario}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving user with id " + req.params.idUsuario
          });
        }
      } else res.send(data);
    });
  };

// Actualizar usuario (nombre de usuario)
exports.update = (req, res) => {
    // Validar
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Usuario.updateById(req.params.idUsuario, new Usuario(req.body), (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found user with id ${req.params.idUsuario}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating user with id " + req.params.idUsuario
            });
          }
        } else res.send(data);
      }
    );
  };

// Eliminar un usuario
exports.delete = (req, res) => {
    Usuario.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete user with id " + req.params.id
          });
        }
      } else res.send({ message: `User was deleted successfully!` });
    });
  };

// Eliminar todos los usuarios
exports.deleteAll = (req, res) => {
    Usuario.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all users."
        });
      else res.send({ message: `All users were deleted successfully!` });
    });
  };

  module.exports = Usuario;