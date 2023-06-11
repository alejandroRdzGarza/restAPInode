'use strict';

const categoriaData = require('../database/categorias');

const getCategorias = async (req, res, next) => {
    try {
        const categorias = await categoriaData.getCategorias();
        res.send(categorias);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const categoriaById = async (req, res, next) => {
    try {
        const IDcategoria = req.params.id;
        const unCategoria = await categoriaData.categoriaById(IDcategoria);
        res.send(unCategoria);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addCategoria = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await categoriaData.createCategoria(data);
        res.send(created);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateCategoria = async (req, res, next) => {
    try {
        const IDcategoria = req.params.id;
        const data = req.body;
        const updated = await categoriaData.updatedCategoria(IDcategoria, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCategoria = async (req, res, next) => {
    try {
        const IDcategoria = req.params.id;
        const deleteCategoria = await categoriaData.deleteCategoria(IDcategoria);
        res.send(deleteCategoria);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getCategorias,
    categoriaById,
    addCategoria,
    updateCategoria,
    deleteCategoria
}