


const Receipe = require('../models/receipe');

const receipeController = {};

receipeController.index = (req, res) => {
  Receipe.findAll()
    .then(receipe => {
      res.render('receipe/index', { receipe: receipe});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

receipeController.show = (req, res) => {
  Receipe.findById(req.params.id)
    .then(receipe => {
      res.render('receipe/show', { receipe: receipe })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

receipeController.new = (req, res) => {
  res.render('receipe/new')
};

receipeController.create = (req, res) => {
  Receipe.create({
      title: req.body.title,
      picture: req.body.picture,
      direction: req.body.direction,
    }, req.user.id)
    .then(receipe => {
      //console.log('the recipe we inserted ->', receipe);
      //res.locals.insertedRecipe = receipe;
      //next();
      res.redirect(`/receipe/${receipe.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};


receipeController.usersreceipe = (req, res, next) => {

  Receipe.usersreceipe({
    user_id: req.user.id,
    receipe_id: res.locals.insertedRecipe.id
  }).then((receipe) => {
    console.log('inserted recipe/user relation correctly ', receipe)
    res.redirect('/receipe/user-index')
  }).catch((err) => {
    res.status(400).json(err);
  })

};

receipeController.edit = (req, res) => {
  Receipe.findById(req.params.id)
    .then(receipe => {
      res.render('receipe/edit', { receipe: receipe })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

receipeController.update = (req, res) => {
  Receipe.update({
      title: req.body.title,
      picture: req.body.picture,
      direction: req.body.direction
    }, req.params.id)
    .then(() => {
      res.redirect(`/receipe/${req.params.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

receipeController.destroy = (req, res) => {
  Receipe.destroy(req.params.id)
    .then(() => {
      res.redirect('/user')
    })
    .catch(err => {
      res.status(400).json(err);
    });
};












module.exports = receipeController;






