'use strict';

const usuarioData = require('../database/usuarios');

const getUsuarios = async (req, res, next) => {
    try {
        const usuarios = await usuarioData.getUsuarios();
        res.send(usuarios);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const usuarioById = async (req, res, next) => {
    try {
        const IDusuario = req.params.id;
        const unUsuario = await usuarioData.usuarioById(IDusuario);
        res.send(unUsuario);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const addUsuario = async (req, res, next) => {
    try {
        const data = req.body;
        const created = await usuarioData.createUsuario(data);
        res.send(created);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUsuario = async (req, res, next) => {
    try {
        const IDusuario = req.params.id;
        const data = req.body;
        const updated = await usuarioData.updatedUsuario(IDusuario, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUsuario = async (req, res, next) => {
    try {
        const IDusuario = req.params.id;
        const deleteUsuario = await usuarioData.deleteUsuario(IDusuario);
        res.send(deleteUsuario);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getUsuarios,
    usuarioById,
    addUsuario,
    updateUsuario,
    deleteUsuario
}