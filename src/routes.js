const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');

routes.get('/companies', CompanyController.index);
routes.post('/companies', CompanyController.store);
routes.put('/companies/:id', CompanyController.update);
routes.delete('/companies/:id', CompanyController.delete);

module.exports = routes;