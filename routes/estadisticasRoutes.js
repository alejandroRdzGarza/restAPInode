'use strict';

const express = require('express');
const estadisticasController = require('../controllers/estadisticasController');
const router = express.Router();

const {getEstadisticas, estadisticasById, addEstadisticas, updateEstadisticas,deleteEstadisticas} = estadisticasController;

router.get('/estadisticas', getEstadisticas);

router.get('/estadistica/:id',estadisticasById);

router.post('/estadistica', addEstadisticas);

router.put('/estadistica/:id', updateEstadisticas);

router.delete('/estadistica/:id', deleteEstadisticas);


module.exports = {
    routes: router
}