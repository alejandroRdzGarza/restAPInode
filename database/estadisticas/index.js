'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEstadisticas = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estadisticas');
        const list = await pool.request().query(sqlQueries.allEstadisticas);
        return list.recordset;
    } catch(error){
        return error.message;
    }
}


const estadisticasById = async (IDestadisticas) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estadisticas');
        const estadistica = await pool.request()
                            .input('IDestadisticas', sql.Int, IDestadisticas)
                            .query(sqlQueries.estadisticasById);
        return estadistica.recordset;
    } catch(error){
        return error.message;
    }
}


const createEstadistica = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estadisticas');
        const insertEstadisticas = await pool.request()
                            .input('trofeos', sql.Int, data.trofeos)
                            .input('juegosCompletados', sql.Int, data.juegosCompletados)
                            .input('efectividad', sql.Int, data.efectividad)
                            .input('rachaDias', sql.Int, data.rachaDias)
                            .input('fecha', sql.Date, data.fecha)
                            .input('IDusuario', sql.Int, data.IDusuario)
                            .query(sqlQueries.createEstadisticas);
        return insertEstadisticas.recordset;
    } catch(error){
        return error.message;
    }
} 

const updatedEstadistica = async (IDestadisticas, estadisticasData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estadisticas');
        const update = await pool.request()
                            .input('IDestadisticas', sql.Int, IDestadisticas)
                            .input('trofeos', sql.Int, estadisticasData.trofeos)
                            .input('juegosCompletados', sql.Int, estadisticasData.juegosCompletados)
                            .input('efectividad', sql.Int, estadisticasData.efectividad)
                            .input('rachaDias', sql.Int, estadisticasData.rachaDias)
                            .input('fecha', sql.Date, estadisticasData.fecha)
                            .input('IDusuario', sql.Int, estadisticasData.IDusuario)
                            .query(sqlQueries.updateEstadisticas);
        return update.recordset;
    } catch(error){
        return error.message;
    }
}

const deleteEstadisticas = async (IDestadisticas) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('estadisticas');
        const deleted = await pool.request()
                            .input('IDestadisticas', sql.Int, IDestadisticas)
                            .query(sqlQueries.deleteEstadisticas);
        return deleted.recordset;
    } catch(error){
        return error.message;
    }
}



module.exports = {
    getEstadisticas,
    estadisticasById,
    createEstadistica,
    updatedEstadistica,
    deleteEstadisticas
}