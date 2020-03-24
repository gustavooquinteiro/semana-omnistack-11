const express = require('express');
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.index);
routes.get('/incidents', incidentsController.index);

routes.delete('/incidents/:id', incidentsController.delete);

routes.post('/incidents', incidentsController.create);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

module.exports = routes;