'use strict';

const ejercicioData = require('../database/ejercicios');

const getEjercicios = async (req, res, next) => {
    try {
        const ejercicios = await ejercicioData.getEjercicios();
        res.send(ejercicios);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const ejercicioById = async (req, res, next) => {
    try {
        const IDejercicio = req.params.id;
        const unEjercicio = await ejercicioData.ejercicioById(IDejercicio);
        res.send(unEjercicio);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addEjercicio = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await ejercicioData.createEjercicio(data);
        res.send(created);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEjercicio = async (req, res, next) => {
    try {
        const IDejercicio = req.params.id;
        const data = req.body;
        const updated = await ejercicioData.updatedEjercicio(IDejercicio, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEjercicio = async (req, res, next) => {
    try {
        const IDejercicio = req.params.id;
        const deleteEjercicio = await ejercicioData.deleteEjercicio(IDejercicio);
        res.send(deleteEjercicio);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getEjercicios,
    ejercicioById,
    addEjercicio,
    updateEjercicio,
    deleteEjercicio
}