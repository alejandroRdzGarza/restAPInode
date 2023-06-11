'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getRutinas = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rutinas');
        const list = await pool.request().query(sqlQueries.allRutinas);
        return list.recordset;
    } catch(error){
        return error.message;
    }
}


const rutinaById = async (IDrutina) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rutinas');
        const rutina = await pool.request()
                            .input('IDrutina', sql.Int, IDrutina)
                            .query(sqlQueries.rutinaById);
        return rutina.recordset;
    } catch(error){
        return error.message;
    }
}


const createRutina = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rutinas');
        const insertRutina = await pool.request()
                            .input('dia', sql.VarChar, data.dia)
                            .input('IDejercicio', sql.Int, data.IDejercicio)
                            .input('IDusuario', sql.Int, data.IDusuario)
                            .query(sqlQueries.createRutinas);
        return insertRutina.recordset;
    } catch(error){
        return error.message;
    }
} 

const updateRutina = async (IDrutina, rutinaData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rutinas');
        const update = await pool.request()
                            .input('IDrutina', sql.Int, IDrutina)
                            .input('dia', sql.VarChar, rutinaData.dia)
                            .input('IDejercicio', sql.Int, rutinaData.IDejercicio)
                            .input('IDusuario', sql.Int, rutinaData.IDusuario)
                            .query(sqlQueries.updateRutina);
        return update.recordset;
    } catch(error){
        return error.message;
    }
}

const deleteRutina = async (IDrutina) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rutinas');
        const deleted = await pool.request()
                            .input('IDrutina', sql.Int, IDrutina)
                            .query(sqlQueries.deleteRutina);
        return deleted.recordset;
    } catch(error){
        return error.message;
    }
}



module.exports = {
    getRutinas,
    rutinaById,
    createRutina,
    updateRutina,
    deleteRutina
}