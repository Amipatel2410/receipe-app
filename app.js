const express = require('express');
const logger = require('morgan');
const path = require('path')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const PORT = process.env.PORT || 3000;
app.use(logger('dev'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

const receipeRouter = require('./routes/receipe-routes');
app.use('/receipe', receipeRouter)

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);


const receipesearchRouter = require('./routes/receipesearch-routes');
app.use('/receipesearch', receipesearchRouter);


app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('main-index');
});



app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
