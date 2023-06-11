'use strict';

const dietaData = require('../database/dietas');

const getDietas = async (req, res, next) => {
    try {
        const dietas = await dietaData.getDietas();
        res.send(dietas);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const dietaById = async (req, res, next) => {
    try {
        const IDdieta = req.params.id;
        const unaDieta = await dietaData.dietaById(IDdieta);
        res.send(unaDieta);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addDieta = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await dietaData.createDieta(data);
        res.send(created);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateDieta = async (req, res, next) => {
    try {
        const IDdieta = req.params.id;
        const data = req.body;
        const updated = await dietaData.updatedDieta(IDdieta, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteDieta = async (req, res, next) => {
    try {
        const IDdieta = req.params.id;
        const deleteDieta = await dietaData.deleteDieta(IDdieta);
        res.send(deleteDieta);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getDietas,
    dietaById,
    addDieta,
    updateDieta,
    deleteDieta
}