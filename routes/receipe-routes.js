const express = require('express');
const receipeController = require('../controllers/receipe-controller');
const receipeRouter = express.Router();

receipeRouter.get('/', receipeController.index)

receipeRouter.get('/:id', receipeController.show)



module.exports = receipeRouter;
