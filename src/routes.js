const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');
const UnitController = require('./controllers/UnitController');
const MachineController = require('./controllers/MachineController');

routes.get('/companies', CompanyController.index);
// routes.get('/companies/:id', CompanyController.show);
routes.post('/companies', CompanyController.store);
routes.put('/companies/:id', CompanyController.update);
routes.delete('/companies/:id', CompanyController.delete);

routes.get('/units', UnitController.index);
routes.post('/units', UnitController.store);
routes.put('/units/:id', UnitController.update);
routes.delete('/units/:id', UnitController.delete);

routes.get('/machines', MachineController.index);
routes.post('/machines', MachineController.store);
routes.put('/machines/:id', MachineController.update);
routes.delete('/machines/:id', MachineController.delete);

module.exports = routes;