'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getDietas = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('dietas');
        const list = await pool.request().query(sqlQueries.allDietas);
        return list.recordset;
    } catch(error){
        return error.message;
    }
}


const dietaById = async (IDdieta) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('dietas');
        const dieta = await pool.request()
                            .input('IDdieta', sql.Int, IDdieta)
                            .query(sqlQueries.dietaById);
        return dieta.recordset;
    } catch(error){
        return error.message;
    }
}


const createDieta = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('dietas');
        const insertDieta = await pool.request()
                            .input('IDcategoria', sql.Int, data.IDcategoria)
                            .input('IDalimento', sql.Int, data.IDalimento)
                            .input('IDusuario', sql.Int, data.IDusuario)
                            .input('fecha', sql.Date, data.fecha)
                            .query(sqlQueries.createDieta);
        return insertDieta.recordset;
    } catch(error){
        return error.message;
    }
} 

const updatedDieta = async (IDdieta, dietaData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('dietas');
        const update = await pool.request()
                            .input('IDdieta', sql.Int, IDdieta)
                            .input('IDcategoria', sql.Int, dietaData.IDcategoria)
                            .input('IDalimento', sql.Int, dietaData.IDalimento)
                            .input('IDusuario', sql.Int, dietaData.IDusuario)
                            .input('fecha', sql.Date, dietaData.fecha)
                            .query(sqlQueries.updateDieta);
        return update.recordset;
    } catch(error){
        return error.message;
    }
}

const deleteDieta = async (IDdieta) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('dietas');
        const deleted = await pool.request()
                            .input('IDdieta', sql.Int, IDdieta)
                            .query(sqlQueries.deleteDieta);
        return deleted.recordset;
    } catch(error){
        return error.message;
    }
}



module.exports = {
    getDietas,
    dietaById,
    createDieta,
    updatedDieta,
    deleteDieta
}