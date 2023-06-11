'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAlimentos = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alimentos');
        const list = await pool.request().query(sqlQueries.allAlimentos);
        return list.recordset;
    } catch(error){
        return error.message;
    }
}


const alimentoById = async (IDalimento) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alimentos');
        const alimento = await pool.request()
                            .input('IDalimento', sql.Int, IDalimento)
                            .query(sqlQueries.alimentoById);
        return alimento.recordset;
    } catch(error){
        return error.message;
    }
}


const createAlimento = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alimentos');
        const insertAlimento = await pool.request()
                            .input('nombre', sql.VarChar, data.nombre)
                            .input('descripcion', sql.VarChar, data.descripcion)
                            .input('calorias', sql.Int, data.calorias)
                            .input('proteinas', sql.Int, data.proteinas)
                            .input('azucares', sql.Int, data.azucares)
                            .input('carbohidratos', sql.Int, data.carbohidratos)
                            .input('gramos', sql.Int, data.gramos)
                            .input('grasas', sql.Int, data.grasas)
                            .query(sqlQueries.createAlimentos);
        return insertAlimento.recordset;
    } catch(error){
        return error.message;
    }
} 

const updatedAlimento = async (IDalimento, alimentoData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alimentos');
        const update = await pool.request()
                            .input('IDalimento', sql.Int, IDalimento)
                            .input('nombre', sql.VarChar, alimentoData.nombre)
                            .input('descripcion', sql.VarChar, alimentoData.descripcion)
                            .input('calorias', sql.Int, alimentoData.calorias)
                            .input('proteinas', sql.Int, alimentoData.proteinas)
                            .input('azucares', sql.Int, alimentoData.azucares)
                            .input('carbohidratos', sql.Int, alimentoData.carbohidratos)
                            .input('gramos', sql.Int, alimentoData.gramos)
                            .input('grasas', sql.Int, alimentoData.grasas)
                            .query(sqlQueries.updateAlimento);
        return update.recordset;
    } catch(error){
        return error.message;
    }
}

const deleteAlimento = async (IDalimento) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('alimentos');
        const deleted = await pool.request()
                            .input('IDalimento', sql.Int, IDalimento)
                            .query(sqlQueries.deleteAlimento);
        return deleted.recordset;
    } catch(error){
        return error.message;
    }
}



module.exports = {
    getAlimentos,
    alimentoById,
    createAlimento,
    updatedAlimento,
    deleteAlimento
}