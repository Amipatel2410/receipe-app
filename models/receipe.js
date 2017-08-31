const db = require('../db/config');

const Receipe = {};

Receipe.findAll = () => {
  return db.query('SELECT * FROM receipe ORDER BY id ASC');
};


Receipe.findById = id => {
  return db.oneOrNone(`SELECT * FROM receipe WHERE id = $1`, [id]);
};


Receipe.update = (receipe, id) => {
  return db.none(
    `
      UPDATE receipe SET
      title = $1,
      picture = $2,
      direction = $3
      WHERE id = $4
    `,
    [receipe.title, receipe.picture, receipe.direction, id]
  );
};

Receipe.create = (receipe, userid) => {
  return db.one(
    `
      INSERT INTO receipe
      (title, picture, direction, user_id)
      VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [receipe.title, receipe.picture, receipe.direction, userid]
  );
};


Receipe.destroy = id => {
  return db.none(
    `
      DELETE FROM receipe
      WHERE id = $1
    `,
    [id]
  );
};







module.exports = Receipe;
