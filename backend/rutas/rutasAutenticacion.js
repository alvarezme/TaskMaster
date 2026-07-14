const express = require('express');
const router = express.Router();

// Importamos el controlador (asumiendo que tu controlador se llama controladorAutenticacion.js)
const { registro, login } = require('../controladores/controladorAutenticacion');

// Rutas expuestas para el frontend
router.post('/registro', registro);
router.post('/login', login);

module.exports = router;