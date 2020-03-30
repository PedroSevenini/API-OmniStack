// 

/**
 * Comandos:
 * 
 * npm install express: instalar o express
 * 
 * node index.js: iniciar a aplicação 
 * (no package.json criei um script chamado'start que substitui esse comando')
 * npm start: iniciar a aplicação pelo script
 * 
 * npm install nodemon -D: instalar o nodemon com dependência
 * somente de Dev. Com o nodemon não precisa ficar reiniciando
 * a aplicação toda vez que faz uma alteração.
 * 
 * Query Builder:
 * npm install knex
 * npm install sqlite3
 * npx knex init
 * 
 * npx knex migrate:make migration_name
 * npx knex migrate:latest
 * 
 * npm install cors
 * 
 * npm i celebrate: validacao de entradasS
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginaçõa)
 * Route Params: Parâmetros utilizados para indentificar recursos (:id)
 * Request Body: Corpo de requisição.
 */

/**
 * Tipos de Query:
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


const express = require('express');
const cors = require('cors');
const {errors} = require ('celebrate');
const routes = require('./routes');

const app = express();

// se quiser somente onde o front está hospedado ter acesso o backendS
// sem nada todos tem acesso
app.use(cors(
  //  {origin: 'http://meuapp.com'}
));
// para configurar q os request e response serão em json
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);
