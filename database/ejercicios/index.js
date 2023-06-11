'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEjercicios = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ejercicios');
        const list = await pool.request().query(sqlQueries.allEjercicios);
        return list.recordset;
    } catch(error){
        return error.message;
    }
}


const ejercicioById = async (IDejercicio) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ejercicios');
        const ejercicio = await pool.request()
                            .input('IDejercicio', sql.Int, IDejercicio)
                            .query(sqlQueries.ejerciciosById);
        return ejercicio.recordset;
    } catch(error){
        return error.message;
    }
}


const createEjercicio = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ejercicios');
        const insertEjercicio = await pool.request()
                            .input('nombre', sql.VarChar, data.nombre)
                            .input('descripcion', sql.VarChar, data.descripcion)
                            .input('calorias', sql.Int, data.calorias)
                            .input('musculo', sql.VarChar, data.musculo)
                            .query(sqlQueries.createEjercicios);
        return insertEjercicio.recordset;
    } catch(error){
        return error.message;
    }
} 

const updatedEjercicio = async (IDejercicio, ejercicioData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ejercicios');
        const update = await pool.request()
                            .input('IDejercicio', sql.Int, IDejercicio)
                            .input('nombre', sql.VarChar, ejercicioData.nombre)
                            .input('descripcion', sql.VarChar, ejercicioData.descripcion)
                            .input('calorias', sql.Int, ejercicioData.calorias)
                            .input('musculo', sql.VarChar, ejercicioData.musculo)
                            .query(sqlQueries.updateEjercicios);
        return update.recordset;
    } catch(error){
        return error.message;
    }
}

const deleteEjercicio = async (IDejercicio) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ejercicios');
        const deleted = await pool.request()
                            .input('IDejercicio', sql.Int, IDejercicio)
                            .query(sqlQueries.deleteEjercicios);
        return deleted.recordset;
    } catch(error){
        return error.message;
    }
}



module.exports = {
    getEjercicios,
    ejercicioById,
    createEjercicio,
    updatedEjercicio,
    deleteEjercicio
}