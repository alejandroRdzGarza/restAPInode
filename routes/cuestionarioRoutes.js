'use strict';

const express = require('express');
const cuestionarioController = require('../controllers/cuestionarioController');
const router = express.Router();

const {getCuestionarios, getById, addCuestionario, updateCuestionario,deleteCuestionario} = cuestionarioController;

router.get('/cuestionarios', getCuestionarios);

router.get('/cuestionario/:id',getById);

router.post('/cuestionario', addCuestionario);

router.put('/cuestionario/:id', updateCuestionario);

router.delete('/cuestionario/:id', deleteCuestionario);


module.exports = {
    routes: router
}