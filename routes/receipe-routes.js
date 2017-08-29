const express = require('express');
const receipeController = require('../controllers/receipe-controller');
const receipeRouter = express.Router();

receipeRouter.get('/', receipeController.index)

module.exports = receipeRouter;
