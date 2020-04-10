const express = require ('express');
const cors = require('cors'); 
const routes = require ('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * GET: Buscar/listar uma informaação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
 * Tipos de Parametros
 * Query Params: Parametros nomeados enviados na rota após '?' (filtros, paginacao)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

/**
 * SQL:  MySQL, SQLite, Postgres, Oracle, Microsoft SQL Server
 * NoSQL: MongoDDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


app.listen(3333);