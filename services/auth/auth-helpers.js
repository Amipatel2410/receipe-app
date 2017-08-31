const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  // if (req.user) return res.redirect(`/user/${req.user.id}`);
  console.log(req.user)
  if (req.user) return res.redirect('/user');
  console.log('working right now')
  return next();
}

function loginRequired(req, res, next) {
  if (req.user === undefined) return res.redirect('/auth/login');
  console.log('not working')
  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
}
