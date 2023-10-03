module.exports = app => {
    const Usuario = require("../controllers/hmac.controller.js");
  
    var router = require("express").Router();
  
    // Crear nuevo usuario
    router.post("/", Usuario.create);
  
    // Obtener todos los usuarios
    router.get("/", Usuario.getAll);
  
    // Obtener un usuario con ID
    router.get("/:idUsuario", Usuario.findById);
  
    // Actualizar nombre de usuario
    router.put("/:idUsuario", Usuario.updateById);
  
    // Eliminar un usuario con ID
    router.delete("/:idUsuario", Usuario.remove);
  
    // Eliminar todos los usuarios
    router.delete("/", Usuario.removeAll);

    // If you intend to use findAllPublished:
    // router.get("/published", Usuario.findAllPublished);
  
    app.use('/api/Usuario', router);

};