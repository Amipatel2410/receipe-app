const express = require('express');
const ReceipesearchRouter = express.Router();

const ReceipesearchController = require('../controllers/receipesearch-controller');
const receipehelper = require('../services/receipe/receipe-helper');

ReceipesearchRouter.get('/', ReceipesearchController.index);


ReceipesearchRouter.get('/title', receipehelper.getReceipeFromAPI, ReceipesearchController.sendApiReceipe);

module.exports = ReceipesearchRouter;
