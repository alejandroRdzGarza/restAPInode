'use strict';

const express = require('express');
const categoriaController = require('../controllers/categoriaController');
const router = express.Router();

const {getCategorias, categoriaById, addCategoria, updateCategoria,deleteCategoria} = categoriaController;

router.get('/categorias', getCategorias);

router.get('/categoria/:id',categoriaById);

router.post('/categoria', addCategoria);

router.put('/categoria/:id', updateCategoria);

router.delete('/categoria/:id', deleteCategoria);


module.exports = {
    routes: router
}