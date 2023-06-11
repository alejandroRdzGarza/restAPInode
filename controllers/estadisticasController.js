'use strict';

const estadisticaData = require('../database/estadisticas');

const getEstadisticas = async (req, res, next) => {
    try {
        const estad = await estadisticaData.getEstadisticas();
        res.send(estad);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const estadisticasById = async (req, res, next) => {
    try {
        const IDestadisticas = req.params.id;
        const unaEstadistica = await estadisticaData.estadisticasById(IDestadisticas);
        res.send(unaEstadistica);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addEstadisticas = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await estadisticaData.createEstadistica(data);
        res.send(created);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEstadisticas = async (req, res, next) => {
    try {
        const IDestadistica = req.params.id;
        const data = req.body;
        const updated = await estadisticaData.updatedEstadistica(IDestadistica, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEstadisticas = async (req, res, next) => {
    try {
        const IDestadisticas = req.params.id;
        const deleteEstadisticas = await estadisticaData.deleteEstadisticas(IDestadisticas);
        res.send(deleteEstadisticas);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getEstadisticas,
    estadisticasById,
    addEstadisticas,
    updateEstadisticas,
    deleteEstadisticas
}