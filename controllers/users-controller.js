const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
      console.log('hi---->',user)
    });


  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

usersController.index = (req, res) => {
  User.findUserReceipe(req.user.id)
    .then(receipe => {
      console.log('recipes from the user --> ', receipe)
      let respObj = {
        user: req.user,
        receipe: receipe,
      }
      console.log('---------->',respObj)
      res.render('receipe/user-index', respObj);

    }).catch(err => {
      console.log(err);
      res.status(500).json({err: err});
    });
}
module.exports = usersController;
