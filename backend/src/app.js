const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
// app.listen(3333);

/**
 * Rota/ Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar info no back
 * POST: criar info no back
 * PUT: alterar info no back
 * DELETE: detalar info no back
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params
  * Route params
  * Request body: corpo da requisição utilizado para criar ou alterar recursos
  */
 
  /**
   * Tipos de bancos de dado:
   * 
   * SQL: MySQL, SQLite, PostreSQL, Oracle, Miscrosoft SQL Server
   * NoSQL: MondoDB, CouchDB, etc
   * 
   * Funciona de três formas principais:
   * 
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */






