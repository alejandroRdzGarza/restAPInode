'use strict';

const cuestionarioData = require('../database/cuestionarios');

const getCuestionarios = async (req, res, next) => {
    try {
        const cuestionarios = await cuestionarioData.getCuestionarios();
        res.send(cuestionarios);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getById = async (req, res, next) => {
    try {
        const IdCuestionario = req.params.id;
        const unCuestionario = await cuestionarioData.getById(IdCuestionario);
        res.send(unCuestionario);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addCuestionario = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await cuestionarioData.createCuestionario(data);
        res.send(created);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCuestionario = async (req, res, next) => {
    try {
        const cuestionarioId = req.params.id;
        const data = req.body;
        const updated = await cuestionarioData.updatedCuestionario(cuestionarioId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCuestionario = async (req, res, next) => {
    try {
        const IdCuestionario = req.params.id;
        const deleteCuestionario = await cuestionarioData.deleteCuestionario(IdCuestionario);
        res.send(deleteCuestionario);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getCuestionarios,
    getById,
    addCuestionario,
    updateCuestionario,
    deleteCuestionario
}