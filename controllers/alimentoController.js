'use strict';

const alimentoData = require('../database/alimentos');

const getAlimentos = async (req, res, next) => {
    try {
        const alimentos = await alimentoData.getAlimentos();
        res.send(alimentos);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const alimentoById = async (req, res, next) => {
    try {
        const IDalimento = req.params.id;
        const unAlimento = await alimentoData.alimentoById(IDalimento);
        res.send(unAlimento);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addAlimento = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await alimentoData.createAlimento(data);
        res.send(created);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateAlimento = async (req, res, next) => {
    try {
        const IDalimento = req.params.id;
        const data = req.body;
        const updated = await alimentoData.updatedAlimento(IDalimento, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteAlimento = async (req, res, next) => {
    try {
        const IDalimento = req.params.id;
        const deleteAlimento = await alimentoData.deleteAlimento(IDalimento);
        res.send(deleteAlimento);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAlimentos,
    alimentoById,
    addAlimento,
    updateAlimento,
    deleteAlimento
}