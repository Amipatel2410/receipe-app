const db = require('../db/config');

const Receipe = {};

Receipe.findAll = () => {
  return db.query('SELECT * FROM receipe ORDER BY id ASC');
};

module.exports = Receipe;
