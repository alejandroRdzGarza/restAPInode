'use strict';

const express = require('express');
const rutinaController = require('../controllers/rutinaController');
const router = express.Router();

const {getRutinas, rutinaById, addRutina, updateRutina,deleteRutina} = rutinaController;

router.get('/rutinas', getRutinas);

router.get('/rutina/:id',rutinaById);

router.post('/rutina', addRutina);

router.put('/rutina/:id', updateRutina);

router.delete('/rutina/:id', deleteRutina);


module.exports = {
    routes: router
}