'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUsuarios = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const list = await pool.request().query(sqlQueries.allUsuarios);
        return list.recordset;
    } catch(error){
        return error.message;
    }
}


const usuarioById = async (IDusuario) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const usuario = await pool.request()
                            .input('IDusuario', sql.Int, IDusuario)
                            .query(sqlQueries.usuarioById);
        return usuario.recordset;
    } catch(error){
        return error.message;
    }
}


const createUsuario = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const insertUsuario = await pool.request()
                            .input('nombre', sql.VarChar, data.nombre)
                            .input('edad', sql.Int, data.edad)
                            .input('telefono', sql.VarChar, data.telefono)
                            .input('mail', sql.VarChar, data.mail)
                            .input('fecha', sql.Date, data.fecha)
                            .query(sqlQueries.createUsuario);
        return insertUsuario.recordset;
    } catch(error){
        return error.message;
    }
} 

const updatedUsuario = async (IDusuario, usuarioData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const update = await pool.request()
                            .input('IDusuario', sql.Int, IDusuario)
                            .input('nombre', sql.VarChar, usuarioData.nombre)
                            .input('edad', sql.Int, usuarioData.edad)
                            .input('telefono', sql.VarChar, usuarioData.telefono)
                            .input('mail', sql.VarChar, usuarioData.mail)
                            .input('fecha', sql.Date, usuarioData.fecha)
                            .query(sqlQueries.updateUsuario);
        return update.recordset;
    } catch(error){
        return error.message;
    }
}

const deleteUsuario = async (IDusuario) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('usuarios');
        const deleted = await pool.request()
                            .input('IDusuario', sql.Int, IDusuario)
                            .query(sqlQueries.deleteUsuario);
        return deleted.recordset;
    } catch(error){
        return error.message;
    }
}



module.exports = {
    getUsuarios,
    usuarioById,
    createUsuario,
    updatedUsuario,
    deleteUsuario
}