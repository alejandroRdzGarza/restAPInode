'use strict';

const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

const {getUsuarios, usuarioById, addUsuario, updateUsuario,deleteUsuario} = usuarioController;

router.get('/usuarios', getUsuarios);

router.get('/usuario/:id',usuarioById);

router.post('/usuario', addUsuario);

router.put('/usuario/:id', updateUsuario);

router.delete('/usuario/:id', deleteUsuario);


module.exports = {
    routes: router
}