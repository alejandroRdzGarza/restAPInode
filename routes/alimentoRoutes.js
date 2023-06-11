'use strict';

const express = require('express');
const alimentoController = require('../controllers/alimentoController');
const router = express.Router();

const {getAlimentos, alimentoById, addAlimento, updateAlimento,deleteAlimento} = alimentoController;

router.get('/alimentos', getAlimentos);

router.get('/alimento/:id',alimentoById);

router.post('/alimento', addAlimento);

router.put('/alimento/:id', updateAlimento);

router.delete('/alimento/:id', deleteAlimento);


module.exports = {
    routes: router
}