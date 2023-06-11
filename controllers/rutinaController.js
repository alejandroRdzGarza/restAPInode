'use strict';

const rutinaData = require('../database/rutinas');

const getRutinas = async (req, res, next) => {
    try {
        const rutinas = await rutinaData.getRutinas();
        res.send(rutinas);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const rutinaById = async (req, res, next) => {
    try {
        const IDrutina = req.params.id;
        const unaRutina = await rutinaData.rutinaById(IDrutina);
        res.send(unaRutina);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addRutina = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await rutinaData.createRutina(data);
        res.send(created);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateRutina = async (req, res, next) => {
    try {
        const IDrutina = req.params.id;
        const data = req.body;
        const updated = await rutinaData.updateRutina(IDrutina, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRutina = async (req, res, next) => {
    try {
        const IDrutina = req.params.id;
        const deleteRutina = await rutinaData.deleteRutina(IDrutina);
        res.send(deleteRutina);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getRutinas,
    rutinaById,
    addRutina,
    updateRutina,
    deleteRutina
}