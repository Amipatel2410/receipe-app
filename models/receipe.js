const db = require('../db/config');

const Receipe = {};

Receipe.findAll = () => {
  return db.query('SELECT * FROM receipe ORDER BY id ASC');
};


Receipe.findById = id => {
  return db.oneOrNone(`SELECT * FROM receipe WHERE id = $1`, [id]);
};



module.exports = Receipe;
