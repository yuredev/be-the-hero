const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/profileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();


// GET: Busca informação no backend. Parametros passam pela URL
// POST: Criar informação no backend. Parametros passam pelo corpo HTTP
// PUT: Alterar informação no backend.
// DELETE: Deletar informação no backend.

// tipos de parametros:
// Query: parametros nomeados enviados na rota após o ? (filtros, paginação) geralmente serve para aplicar determinado filtro buscando no backend
// Routes: parametros utilizados para identificar recursos. Utiliza o : geralmente serve para buscar apenas uma informação do backend
// Request Body: corpo da requisição, utilizado para criar ou alterar recursos. Geralmente usa-se para receber JSON

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents/', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

module.exports = routes;