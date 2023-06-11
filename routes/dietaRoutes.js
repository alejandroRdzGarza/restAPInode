'use strict';

const express = require('express');
const dietaController = require('../controllers/dietaController');
const router = express.Router();

const {getDietas, dietaById, addDieta, updateDieta,deleteDieta} = dietaController;

router.get('/dietas', getDietas);

router.get('/dieta/:id',dietaById);

router.post('/dieta', addDieta);

router.put('/dieta/:id', updateDieta);

router.delete('/dieta/:id', deleteDieta);


module.exports = {
    routes: router
}