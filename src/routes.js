const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');
const UnitController = require('./controllers/UnitController');
const MachineController = require('./controllers/MachineController');

//Home endpoint
routes.get('/', (req, res) => {
    return res.send({
        name: 'Mech Enterprises API',
        author: 'RafaelEmery',
        version: 1.0,
        documentation: 'https://github.com/RafaelEmery/mech-enterprises-api/blob/master/README.md',
    });
});

//Companies endpoints
routes.get('/companies', CompanyController.index);
routes.get('/companies/:id', CompanyController.show);
routes.post('/companies', CompanyController.store);
routes.put('/companies/:id', CompanyController.update);
routes.delete('/companies/:id', CompanyController.delete);

//Units endpoints
routes.get('/units', UnitController.index);
routes.post('/units', UnitController.store);
routes.put('/units/:id', UnitController.update);
routes.delete('/units/:id', UnitController.delete);

//Machines endpoints
routes.get('/machines', MachineController.index);
routes.post('/machines', MachineController.store);
routes.put('/machines/:id', MachineController.update);
routes.delete('/machines/:id', MachineController.delete);

module.exports = routes;