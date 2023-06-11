'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCategorias = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorias');
        const list = await pool.request().query(sqlQueries.allCategorias);
        return list.recordset;
    } catch(error){
        return error.message;
    }
}


const categoriaById = async (IDcategoria) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorias');
        const categoria = await pool.request()
                            .input('IDcategoria', sql.Int, IDcategoria)
                            .query(sqlQueries.categoriaById);
        return categoria.recordset;
    } catch(error){
        return error.message;
    }
}


const createCategoria = async (data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorias');
        const insertCategoria = await pool.request()
                            .input('nombre', sql.VarChar, data.nombre)
                            .query(sqlQueries.createCategoria);
        return insertCategoria.recordset;
    } catch(error){
        return error.message;
    }
} 

const updatedCategoria = async (IDcategoria, categoriaData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorias');
        const update = await pool.request()
                            .input('IDcategoria', sql.Int, IDcategoria)
                            .input('nombre', sql.VarChar, categoriaData.nombre)
                            .query(sqlQueries.updateCategoria);
        return update.recordset;
    } catch(error){
        return error.message;
    }
}

const deleteCategoria = async (IDcategoria) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorias');
        const deleted = await pool.request()
                            .input('IDcategoria', sql.Int, IDcategoria)
                            .query(sqlQueries.deleteCategoria);
        return deleted.recordset;
    } catch(error){
        return error.message;
    }
}



module.exports = {
    getCategorias,
    categoriaById,
    createCategoria,
    updatedCategoria,
    deleteCategoria
}