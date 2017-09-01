


const express = require('express');
const receipesearchRouter = express.Router();
const receipesearchController = require('../controllers/receipesearch-controller');
const receipesearchHelper = require('../services/receipe/receipe-helper');
receipesearchRouter.get('/', receipesearchController.index);

receipesearchRouter.post('/results', receipesearchHelper.getReceipeFromAPI, receipesearchController.sendApiReceipe);


module.exports = receipesearchRouter;
