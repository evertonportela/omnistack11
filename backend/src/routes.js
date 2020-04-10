/**
routes.post('/users', (request, response) => {
    //return response.send('Hello World');
    //const params = request.query;
    const params = request.params;
    const body = request.body;

    console.log(params);
    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Everton P_rtela'
    });
});
*/

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/** Rotas Sessões de Login */
routes.post('/sessions', SessionController.create);

/** Rotas para as ONGs */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/** Rotas para os Casos especificos de uma ONG */
routes.get('/profile', ProfileController.index);

/** Rotas para os Casos */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;