'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCuestionarios = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cuestionarios');
        const list = await pool.request().query(sqlQueries.cuestionarioList);
        return list.recordset;
    } catch(error){
        return error.message;
    }
}


const getById = async (IdCuestionario) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cuestionarios');
        const cuestionario = await pool.request()
                            .input('IdCuestionario', sql.Int, IdCuestionario)
                            .query(sqlQueries.cuestionarioById);
        return cuestionario.recordset;
    } catch(error){
        return error.message;
    }
}


const createCuestionario = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cuestionarios');
        const insertCuestionario = await pool.request()
                            .input('suenoInt', sql.Int, data.suenoInt)
                            .input('suenoFin', sql.Int, data.suenoFin)
                            .input('insomnio', sql.Int, data.insomnio)
                            .input('desayuno', sql.VarChar, data.desayuno)
                            .input('comida', sql.VarChar, data.comida)
                            .input('cena', sql.VarChar, data.cena)
                            .input('duracion', sql.Int, data.duracion)
                            .input('medicamento', sql.Int, data.medicamento)
                            .input('frecuencia', sql.Int, data.frecuencia)
                            .input('gramos', sql.Int, data.gramos)
                            .input('fecha', sql.Date, data.fecha)
                            .input('IDusuario', sql.Int, data.IDusuario)
                            .input('IDrutina', sql.Int, data.IDrutina)
                            .query(sqlQueries.createCuestionario);
        return insertCuestionario.recordset;
    } catch(error){
        return error.message;
    }
} 

const updatedCuestionario = async (IdCuestionario, cuestionarioData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cuestionarios');
        const update = await pool.request()
                            .input('IdCuestionario', sql.Int, IdCuestionario)
                            .input('suenoInt', sql.Int, cuestionarioData.suenoInt)
                            .input('suenoFin', sql.Int, cuestionarioData.suenoFin)
                            .input('insomnio', sql.Int, cuestionarioData.insomnio)
                            .input('desayuno', sql.VarChar, cuestionarioData.desayuno)
                            .input('comida', sql.VarChar, cuestionarioData.comida)
                            .input('cena', sql.VarChar, cuestionarioData.cena)
                            .input('duracion', sql.Int, cuestionarioData.duracion)
                            .input('medicamento', sql.Int, cuestionarioData.medicamento)
                            .input('frecuencia', sql.Int, cuestionarioData.frecuencia)
                            .input('gramos', sql.Int, cuestionarioData.gramos)
                            .input('fecha', sql.Date, cuestionarioData.fecha)
                            .input('IDusuario', sql.Int, cuestionarioData.IDusuario)
                            .input('IDrutina', sql.Int, cuestionarioData.IDrutina)
                            .query(sqlQueries.updateCuestionario);
        return update.recordset;
    } catch(error){
        return error.message;
    }
}

const deleteCuestionario = async (IdCuestionario) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('cuestionarios');
        const deleted = await pool.request()
                            .input('IdCuestionario', sql.Int, IdCuestionario)
                            .query(sqlQueries.deleteCuestionario);
        return deleted.recordset;
    } catch(error){
        return error.message;
    }
}



module.exports = {
    getCuestionarios,
    getById,
    createCuestionario,
    updatedCuestionario,
    deleteCuestionario
}