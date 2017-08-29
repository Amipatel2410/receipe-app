


const Receipe = require('../models/receipe');

const receipeController = {};

receipeController.index = (req, res) => {
  Receipe.findAll()
    .then(receipe => {
      res.render('receipe/index', { receipe: receipe });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = receipeController;






