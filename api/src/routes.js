const express = require('express');

const receitaController = require('./controller/receitaController');

const ingredienteController = require('./controller/ingredientesController')


const routes = express.Router();

// Receitas

//lista todas receitas
routes.get('/receitas', receitaController.index);
//lista todos receitas
routes.get('/receitasAceitas', receitaController.indexAceitas);

routes.post('/cadastraReceita', receitaController.cadastraReceita);



// Receitas

//lista todas receitas
routes.get('/ingredientes', ingredienteController.index);


routes.post('/ingredientesReceita', ingredienteController.cadastraIngrediente);


module.exports = routes;