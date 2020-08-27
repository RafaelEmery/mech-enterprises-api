const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');
const UnitController = require('./controllers/UnitController')

routes.get('/companies', CompanyController.index);
routes.post('/companies', CompanyController.store);
routes.put('/companies/:id', CompanyController.update);
routes.delete('/companies/:id', CompanyController.delete);

routes.get('/units', UnitController.index);
routes.post('/units', UnitController.store);
routes.put('/units/:id', UnitController.update);
routes.delete('/units/:id', UnitController.delete);

module.exports = routes;