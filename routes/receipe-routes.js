const express = require('express');
const receipeController = require('../controllers/receipe-controller');
const receipeRouter = express.Router();
const authHelper = require('../services/auth/auth-helpers');

receipeRouter.get('/',  receipeController.index)

receipeRouter.get('/new', receipeController.new)
receipeRouter.post('/', receipeController.create)

receipeRouter.get('/:id', receipeController.show)

receipeRouter.get('/:id/edit', receipeController.edit)

receipeRouter.put('/:id', receipeController.update)

receipeRouter.delete('/:id', receipeController.destroy)







module.exports = receipeRouter;
