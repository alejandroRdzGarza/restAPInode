'use strict';

const express = require('express');
const ejercicioController = require('../controllers/ejercicioController');
const router = express.Router();

const {getEjercicios, ejercicioById, addEjercicio, updateEjercicio,deleteEjercicio} = ejercicioController;

router.get('/ejercicios', getEjercicios);

router.get('/ejercicio/:id',ejercicioById);

router.post('/ejercicio', addEjercicio);

router.put('/ejercicio/:id', updateEjercicio);

router.delete('/ejercicio/:id', deleteEjercicio);


module.exports = {
    routes: router
}